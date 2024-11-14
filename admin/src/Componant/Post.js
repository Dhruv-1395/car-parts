import React,{useState} from 'react'
import '../Css/Post.css'
import axios from 'axios';
const Post = () => {

    const[file,setFile]=useState('');
    const [title,setTile]=useState('');
    const [price,setPrice]=useState(0);
    const [sale,setSale]=useState(0);
    const [rate,setRate] = useState(0);
    
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const Formdata = new FormData();
        // Formdata.append('file',file.name);
        // Formdata.append('title',title);
        // Formdata.append('price',price)
        // axios.post("http://localhost:5000/api/upload",Formdata)
        // .then(result => console.log(result))
        // .then(err => console.log(err));
      const time = new Date();
        axios.post("http://localhost:5000/product",{title:title,price:price,img:file.name,sale:sale,rate:rate,time:time})
        .then(result => console.log(result))
        .then(err => console.log(err));
        
        
       setTile('');
       setPrice('');
       setFile('');
        setRate('');
    }
  return (
    <div className="container">
    <h1>Add Product</h1>
    <form className="product-form" method='post' encType='multipart/form-data'>
      <div className="form-group">
        <label htmlFor="title">Product Title</label>
        <input type="text" value={title} id="title" name="title" required="" onChange={(e)=> setTile(e.target.value)}/>
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
        <label htmlFor="price">Rate</label>
        <input type="number" value={rate} id="rate" name="rate" required="" onChange={(e)=> setRate(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="image">Product Image</label>
        <input type="file" id="image" name="image" accept="image/*" required=""onChange={(e)=> setFile(e.target.files[0])} />
      </div>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        Add Product
      </button>
    </form>
  </div>
  
  )
}

export default Post