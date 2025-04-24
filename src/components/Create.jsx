import React, { useContext, useState } from 'react'
import { productContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();
    const {products, setProducts } = useContext(productContext);

    const [imageLink, setImageLink] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const submitHandelr = (e) => {
        e.preventDefault();
        if(title === '' || imageLink === '' || price === '' || description === '' || category === ''){
            alert('Please fill all the fields')
            return;
        }
        const newProduct = {
            imageLink,
            title,
            price,
            description,
            category
        };
        setProducts((prev) => [...prev, newProduct]);
        console.log(products);
        navigate('/');
        setImageLink('');
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        toast.success('Product added successfully!');
    }
    return (
        <form onSubmit={submitHandelr} className='w-screen h-screen flex flex-col items-center p-[5%]' action="">
            <h1 className='text-3xl p-4 text-bold'>Fill the details to add new product</h1>
            <input className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' type="url" placeholder='image link' onChange={(e) => { setImageLink(e.target.value) }} value={imageLink} />
            <input className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }} value={title} />
            <div className='w-1/2 mb-3 flex justify-between items-center gap-3'>
                <input className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' type="number" placeholder='price' onChange={(e) => { setPrice(e.target.value) }} value={price} />
                <input className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' type="text" placeholder='catagory' onChange={(e) => { setCategory(e.target.value) }} value={category} />
            </div>
            <textarea onChange={(e) => { setDescription(e.target.value) }} value={description} className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' name="" id="" cols="30" rows="10" placeholder='description'>

            </textarea>
            <button className='py-2 px-5 border border-blue-200 rounded text-blue-500'>Add new product</button>
        </form>
    )
}

export default Create