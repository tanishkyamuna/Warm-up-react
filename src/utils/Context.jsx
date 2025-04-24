import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react';

export const productContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('products')) || []
    );

    const getProducts = async () => {
        try {
            const { data } = await axios('./products');
            setProducts(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!products || products.length === 0) {
            getProducts();
        }
    }, []);

    // Sync products to localStorage whenever products change
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    return (
        <productContext.Provider value={{ products, setProducts }}>
            {props.children}
        </productContext.Provider>
    );
};

export default Context;