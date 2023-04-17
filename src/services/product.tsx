import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';

export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
   endpoints: (builder) => ({
      listAllProduct: builder.query<IProduct, void>({
         query: () => 'getAllProduct'
      }),

      listOneProduct: builder.query<IProduct, void>({
         query: (id) => `getOneProduct/${id}`
      }),

      createProduct: builder.mutation<IProduct, Partial<IProduct>>({
         query: (data) => {
            return {
               url: 'addProduct',
               method: 'POST',
               body: data
            }
         }
      }),

      updateProduct: builder.mutation<void, IProduct>({
         query: (data) => {
            return {
               url: `updateProduct/${data.id}`,
               method: 'PUT',
               body: data
            }
         }
      }),

      deleteProduct: builder.mutation<void, IProduct>({
         query: (id) => {
            return {
               url: `deleteProduct/${id}`,
               method: 'DELETE',
            }
         }
      }),
   })
});

export const {
   useListAllProductQuery,
   useListOneProductQuery,
   useCreateProductMutation,
   useDeleteProductMutation,
   useUpdateProductMutation
} = productApi;