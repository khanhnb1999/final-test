import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Space } from 'antd';
import { useCreateProductMutation } from "../../services/product";
import { useNavigate } from "react-router-dom";

import { IProduct } from "../../interfaces/product";

function AddProduct() {
   const navigate = useNavigate();
   const [ addProduct, result ] = useCreateProductMutation();
   const { register, handleSubmit, formState: { errors } } = useForm<IProduct>();
   const onSubmit: SubmitHandler<IProduct> = (data) => {
      addProduct(data);
      navigate('/')
   };

   return (
      <div className='d-flex justify-content-center mt-5'>
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
      </div>
   )
};

export default AddProduct;