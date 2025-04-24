import React, { useContext } from 'react'
import { productContext } from '../utils/Context'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {

    const {products} = useContext(productContext);

    let getCatagory = products  && products.reduce((acc, cv) => [...acc, cv.category], []);

    getCatagory = [...new Set(getCatagory)];
    // console.log(getCatagory);

    const color = ()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},.4)`
    }
    // console.log(color());

     
    return (

        <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center'>
            <a className='px-3 py-4 border rounded border-blue-200 text-black-100 mt-[5px]' href="/create">Add a new product</a>
            <hr className='w-[80%] my-3' />
            <h1 className='text-xl mb-3 w-[80%]'>Catagory filter</h1>
            <ul className=' w-[80%] '>
                {getCatagory.map((c, i) => (

                    <Link to={`/?catagory=${c}`} key={i} className='flex items-center  w-[80%] p-1 '>
                        <span style={{backgroundColor:color()}} className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'> </span>
                        {c}
                    </Link>
                ))}
            </ul>
        </nav>

    )
}

export default Nav