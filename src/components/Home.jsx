import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { productContext } from '../utils/Context'
import Loading from './Loading';
import axios from '../utils/Axios';

const Home = () => {
  const { products } = useContext(productContext); // ✅ correct
  const [filterProducts, setFilterProducts] = useState(products);

  const { search } = useLocation();
  console.log(search);
  const catagory = decodeURIComponent(search.split("=")[1]);
  console.log(catagory)

  const getCatgi = async () => {
    try {
      const { data } = await axios.get(`/products/category/${catagory}`);
      setFilterProducts(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (catagory && catagory !== "undefined") {
      setFilterProducts(products.filter((p) => p.category === catagory));
      // getCatgi();
    } else {
      setFilterProducts(products);
    }
  }, [catagory,products]);

  console.log(filterProducts);
  return products.length > 0 ? (
    <div className='w-[85%] h-full bg-white flex flex-wrap overflow-x-hidden overflow-y-scroll'>
      {filterProducts.map((p) => (
        <Link
          key={p.id}
          to={`/Detail/${p.id}`}
          className='w-[15vw] h-[30vh] p-3 bg-white m-3 border border-white shadow rounded'
        >
          <div
            className='w-full h-[18vh] bg-contain bg-no-repeat bg-center transition-transform duration-300 ease-in-out hover:scale-110'
            style={{ backgroundImage: `url(${p.imageLink || p.image})` }}
          ></div>
          <h1 className='pt-3 w-full'>{p.title}</h1>
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );

}

export default Home