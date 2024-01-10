import React, { useState } from 'react'
import "./Image.css"
import axios from 'axios';
function Image() {
  const[data,setdata]=useState({
    image:""
  });

  const handleImage=(e)=>{
    setdata({image:e.target.files[0]});
    console.log(data.image);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
   const formData=new FormData();
   formData.append('image',data.image);

axios.post(`${process.env.REACT_APP_API_URL}/image/create`,formData)
.then(res=>{alert("Sucessfully uploaded")})
.catch(err=>{console.log(err)})
  }

  return<>
  <section className='image-upload-container'>
    <div className='page-tittle'>Update Logo Image</div>

    <div className='upload-form'>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <div className='row'>
      <label className='file-label'>Choice Image :</label>
      <input type='file' name='image' onChange={handleImage}  className='image-input' accept="image/png, image/gif, image/jpeg"></input></div>
      <button type='submit' className='file-submit-button'>Upload</button>
    </form></div>
  </section>
  </>
}

export default Image