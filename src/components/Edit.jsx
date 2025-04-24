import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const { products, setProducts } = useContext(productContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        imageLink: '',
        title: '',
        price: '',
        description: '',
        category: ''
    });

    useEffect(() => {
        // Find the product to edit by id
        const prod = products.find((p) => String(p.id) === String(id));
        if (prod) setProduct(prod);
    }, [id, products]);

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // Validate fields
        const { imageLink, title, price, description, category } = product;
        if (!imageLink || !title || !price || !description || !category) {
            alert('Please fill all the fields');
            return;
        }
        // Update the product in products array
        const updatedProducts = products.map((p) =>
            String(p.id) === String(id) ? { ...product, id: p.id } : p
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        navigate('/');
        toast.success('Product updated successfully!');

    };

    return (
        <form onSubmit={submitHandler} className='w-screen h-screen flex flex-col items-center p-[5%]'>
            <h1 className='text-3xl p-4 text-bold'>Edit Product</h1>
            <input
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                name='imageLink'
                type="url"
                placeholder='Image link'
                onChange={changeHandler}
                value={product.imageLink}
            />
            <input
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                type="text"
                name='title'
                placeholder='Title'
                onChange={changeHandler}
                value={product.title}
            />
            <div className='w-1/2 mb-3 flex justify-between items-center gap-3'>
                <input
                    className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                    type="number"
                    name='price'
                    placeholder='Price'
                    onChange={changeHandler}
                    value={product.price}
                />
                <input
                    className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                    name='category'
                    type="text"
                    placeholder='Category'
                    onChange={changeHandler}
                    value={product.category}
                />
            </div>
            <textarea
                onChange={changeHandler}
                value={product.description}
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                name="description"
                cols="30"
                rows="10"
                placeholder='Description'
            />
            <button className='py-2 px-5 border border-blue-200 rounded text-blue-500'>Save Changes</button>
        </form>
    );
};

export default Edit;