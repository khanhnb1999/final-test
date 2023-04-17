/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products, ProductSchema } from 'src/schemas/product.schema';

@Module({
   imports: [
      MongooseModule.forFeature([
         {name: Products.name, schema: ProductSchema}
      ])
   ],
   controllers: [ProductsController],
   providers: [ProductsService]
})
export class ProductsModule { }
