import React,{useState} from 'react'
import './Checkout.css'
import axios from 'axios';
import image from "../Assests/Images/pro-version.png"
function Checkout() {

  const[data,setdata]=useState({
    name:"",
    email:"",
    number:""
  });

  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

axios.post(`${process.env.REACT_APP_API_URL}/clientdata/add`,data)
.then(res=>{alert("Successfully Updated the data")})
.catch(err=>{console.log(err)})
  }
  console.log(data);

  return <>
  <section className='Checkout-container'>
    <div className='check-left'>
        <div className='check-head'>Mode UI - Pro Version Vol 1.0</div>
        <img className='check-img' src={image} alt='...'/>
        <div className='check-content'>Mode UI: Ultimate design system for lightning-fast landing pages. Our design system is meticulously crafted to ensure consistency and coherence across all your landing pages. From typography and color palettes to spacing and responsive layouts.</div>
    </div>
    <div className='check-right'>
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='form-container-checkout'>
       <div className='form-grp'>
        <label className='label'>Email :</label>
        <input  name='email' onChange={handleChange} value={data.email} className='input-field'></input>
       </div>
       <div className='form-grp'>
        <label className='label'>Card Number :</label>
        <input name='number' onChange={handleChange} value={data.number} className='input-field'></input>
       </div>
       <div className='form-grp'>
        <label className='label'>Card Holder's Name :</label>
        <input name='name' onChange={handleChange} value={data.name} className='input-field'></input>
       </div>
       <button type='submit' id='button-submit' className='grid-button'>Submit</button>
      </form>
    </div>
  </section>
  </>
}

export default Checkout