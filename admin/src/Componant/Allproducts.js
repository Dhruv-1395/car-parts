import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Allproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/product")
            .then(result => setProducts(result.data))
            .then(err => console.log(err));
    }, []);

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:5000/product/${id}`)
        .then(res => console.log(res))
        .then(err => console.log(err));

        window.location.reload(true);
    }
    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr >
                        <th>No</th>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sale</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><img src={require('../assets/'+item.img)} alt="..." /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.sale}</td>
                                    <td><Link className='btn btn-primary' to={`/edit-product/`+item.id}>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Remove</button></td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Allproducts