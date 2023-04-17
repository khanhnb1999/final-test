/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductDocument } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {

   constructor(
      @InjectModel(Products.name)
      private productModel: Model<ProductDocument>,
   ) { }

   async create(data: CreateProductDto) {
      try {
         const products = new this.productModel(data);
         await products.save();
         return {
            error: 1,
            data:products,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }
   
   async findAll() {
      try {
         const products = await this.productModel.find()
         return {
            error: 1,
            data:products,
            success: HttpStatus.OK
         }
      } catch (error) {
         return error.message;
      }
   }

   async findOne(id: string) {
      try {
         const products = await this.productModel
            .findOne({ _id: id })
         var result = {
            error: 1,
            data:products,
            status: HttpStatus.OK
         }
         return result;
      } catch (error) {
         var results = {
            error: 0,
            message: error.message
         };
         return results;
      }
   }

   async update(id: string, data: UpdateProductDto) {
      try {
         const products = await this.productModel
            .findOneAndUpdate(
               { _id: id }, data, { new: true }
            );
         return products;
      } catch (error) {
         return error.message;
      }
   }

   async remove(id: string) {
      try {
         const products = await this.productModel
            .findByIdAndDelete({ _id: id });
         return products;
      } catch (error) {
         return error.message;
      }
   }
}
