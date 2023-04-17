/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api')
export class ProductsController {
   constructor(private readonly productsService: ProductsService) { }

   @Post('addProduct')
   create(@Body() data: CreateProductDto) {
      console.log(data);
      return this.productsService.create(data);
   }

   @Get('getAllProduct')
   findAll() {
      console.log('oke');
      return this.productsService.findAll();
   }

   @Get('getOneProduct/:id')
   findOne(@Param('id') id: string) {
      console.log(id)
      return this.productsService.findOne(id);
   }

   @Patch('updateProduct/:id')
   update(@Param('id') id: string, @Body() data: UpdateProductDto) {
      console.log({id, data})
      return this.productsService.update(id, data);
   }

   @Delete('deleteProduct/:id')
   remove(@Param('id') id: string) {
      return this.productsService.remove(id);
   }
}
