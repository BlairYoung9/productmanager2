import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ViewOne = (props) =>{
    const {id} = useParams();
    const [thisProduct, setThisProduct] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8001/api/products/"+ id)
            .then(res => {
                console.log(res.data);
                setThisProduct(res.data);
            })
            .catch(err => console.log(err))

    }, [])
    
    

    return <div>
        <h2>View One</h2>
        <h2>{thisProduct.title}</h2>
        <h2>{thisProduct.price}</h2>
        <h2>{thisProduct.description}</h2>
    </div>
}
export default ViewOne;