import React,{useState,useEffect} from 'react'
import '../Css/Post.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Edit = () => {
    const {id} = useParams();
// const [product,setProduct] = useState([]);
const[file,setFile]=useState('');
const [title,setTile]=useState('');
const [price,setPrice]=useState(0);
const [sale,setSale]=useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:5000/product/${id}`)
        .then(res =>{
            setTile(res.data.title);
            setPrice(res.data.price);
            setSale(res.data.sale);
            setFile(res.data.img);
        })
        .then(err => console.log(err));
    },[id])
console.log(file);


  
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/product/${id}`,{title:title,price:price,img:file,sale:sale})
        .then(result => console.log(result))
        .then(err => console.log(err));
        
        
       setTile('');
       setPrice('');
       setFile('');
        
    }
  return (
    <div className="container">
    <h1>Edit Product</h1>
    <form className="product-form" method='post' encType='multipart/form-data'>
      <div className="form-group">
        <label htmlFor="title">Product Title</label>
        <input type="text" value={title}  id="title" name="title" required="" onChange={(e)=> setTile(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" value={price} id="price" name="price" required="" onChange={(e)=> setPrice(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Sale</label>
        <input type="number" value={sale} id="sale" name="sale" required="" onChange={(e)=> setSale(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="image">Product Image</label>
        <input type="file" id="image" name="image" accept="image/*" required=""onChange={(e)=> setFile(e.target.files[0])} />
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
       Update
      </button>
    </form>
  </div>
  
  )
}

export default Edit