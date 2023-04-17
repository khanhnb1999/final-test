import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Space } from 'antd';
import { useUpdateProductMutation, useListOneProductQuery } from "../../services/product";
import { useNavigate, useParams } from "react-router-dom";

import { IProduct } from "../../interfaces/product";

function UpdateProduct() {
   const navigate = useNavigate();
   const { id } = useParams();
   const { data: products, isLoading } = useListOneProductQuery(id);
   const [ updateProduct, result ] = useUpdateProductMutation();
   const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>();
   const onSubmit: SubmitHandler<IProduct> = (data) => {
      data.id = id;
      updateProduct(data);
      navigate('/')
   };

   return (
      <div className='d-flex justify-content-center mt-5'>
         {
            isLoading
               ? (<h4>...Loading</h4>)
               : (
                  <div className='w-25'>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-1'>
                           <input
                              {...register("name", { required: true })}
                              className='form-control'
                             
                           />
                           {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className='mb-1'>
                           <input
                              {...register("price", { required: true })}
                              className='form-control'
                              type='number'
                           />
                           {errors.price && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className='mb-1'>
                           <input
                              {...register("description", { required: true })}
                              className='form-control'
                           />
                           {errors.description && <span className='text-danger'>This field is required</span>}
                        </div>
                        <button type='submit' className='btn btn-success'>Add Product</button>
                     </form>
                  </div>
               )
         }
      </div>
   )
};

export default UpdateProduct;