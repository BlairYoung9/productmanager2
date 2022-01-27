import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const All = (props) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        getProductsFromDB()
    }, [])

    const getProductsFromDB = () => {
        axios.get("http://localhost:8001/api/products")
        .then(res => {
            console.log(res.data);
            setProducts(res.data.products);
        })
        .catch (err => console.log(err))
    }

    return(
        <div>
            <h3> all products!</h3>
            {
                products.map((prod,idx) => {
                    return(
                        <div key = {prod._id}>
                            <h3><Link to={"/products/" + prod._id}>{prod.title}</Link></h3>
                            {/* <h3>{prod.price}</h3>
                            <h3>{prod.description}</h3>      */}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default All;