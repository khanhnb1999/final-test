import { useListAllProductQuery, useDeleteProductMutation } from "../../services/product";
import { Space, Table, Tag, Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

import { IProduct } from "../../interfaces/product";


function Products() {
   const [ deleteProduct, result ] = useDeleteProductMutation();
   const { data:products , isLoading } = useListAllProductQuery();

   const handleDelete = (id: any) => {
      deleteProduct(id)
   }

   const columns: ColumnsType<IProduct> = [
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Price',
         dataIndex: 'price',
         key: 'price',
      },
      {
         title: 'Description',
         dataIndex: 'description',
         key: 'description',
      },
      {
         title: 'Action',
         key: 'action',
         render: (_, record) =>
         products?.data?.length >= 1 
         ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
               <button className='btn btn-danger'>Delete</button>
               <Link to={`/update-product/${record._id}`} className='btn btn-primary'>Update</Link>
            </Popconfirm>
         ) : null,
   },
   ];

   return (
      <div>
         <div>
            <Link to='/add-product'>Add Product</Link>
         </div>
         {
            isLoading
            ? (<h3>...Loading</h3>)
            : (
               <div>
                  <Table columns={columns} dataSource={products?.data} />
               </div>
            )
         }
      </div>
   )
};

export default Products;