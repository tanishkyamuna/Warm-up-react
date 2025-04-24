import axios from '../utils/Axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import { productContext } from '../utils/Context';
import { toast } from 'react-toastify';

const Detail = () => {
    const {products, setProducts} = useContext(productContext);
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const {id} = useParams();

    // const singleProduct = async ()=>{
    //     try{
    //       const { data } = await axios.get(`/products/${id}`);
    //         setProduct(data);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // };
    const deleteProduct = async (id) =>{
      const filteredProducts = products.filter((p) => p.id !== product.id);
      await setProducts(filteredProducts);
      localStorage.setItem('products', JSON.stringify(filteredProducts));
      navigate('/');
      toast.success('Product deleted successfully!');
    }

    useEffect(()=>{
        // singleProduct();
        if(!product){
          setProduct(products.find((p) => String(p.id) === String(id)));
        }
    },[products, id])

    console.log(product);
    if (!product) return <Loading />;

    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center py-10">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-gray-50 p-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-full max-w-xs h-[350px] object-contain rounded-xl shadow"
              src={product.imageLink || product.image}
              alt={product.title}
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.title}</h1>
              <h3 className="text-xl text-indigo-600 mb-4">{product.category}</h3>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">$ {product.price}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>
            <div className="flex gap-4">
              <Link
                to={`/edit/${product.id}`}
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteProduct(product.id)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Detail