/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Products & Document;

@Schema({
   timestamps: true,
})
export class Products {

   @Prop()
   name: string;

   @Prop()
   price: number;
   
   @Prop()
   description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products);