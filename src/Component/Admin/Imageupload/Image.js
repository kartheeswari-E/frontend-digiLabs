import React, { useState ,useEffect} from 'react'
import "./Image.css"
import axios from 'axios';
import Compress from "react-image-file-resizer";
function Image() {
//   const[data,setdata]=useState({
//     image:""
//   });

//   const handleImage=(e)=>{
//     setdata({image:e.target.files[0]});
//     console.log(data.image);
//   }


//   const handleSubmit=(e)=>{
//     e.preventDefault();
//    const formData=new FormData();
//    formData.append('image',data.image);

// axios.post(`${process.env.REACT_APP_API_URL}/image/create`,formData)
// .then(res=>{alert("Sucessfully uploaded")})
// .catch(err=>{console.log(err)})
//   }
useEffect(() => {
  loadData();
}, []);
const [img, setImg] = useState();
const[data,setdata]=useState({});
const [id, setid] = useState();
let loadData = async () => {
  try {
    let sitedata = await axios.get(`${process.env.REACT_APP_API_URL}/image/webdata`);
    let info = sitedata.data[0]
setid(sitedata.data[0]._id);
    setdata(info.image)

 
  } catch (error) {
    console.log(error)
  }
}
let uploadData = async (event) => {
  event.preventDefault();
  let base64 = img
  try {
    let imagedata = await axios.put(`${process.env.REACT_APP_API_URL}/image/newlogo/${id}`, {base64});
    alert("success" );
    loadData()
  } catch (error) {
    console.log(error)
  }
}

function onFileResize (e)  {
  const file = e.target.files[0];

Compress.imageFileResizer(
file, 
480, 
480, 
"JPEG", 
70, 
0, 
(uri) => {
  console.log(uri);
  setImg(uri)

},
"base64" 
);
}

function convertImg(e) {
  console.log(e);
  if(e.target.files[0].size > 70000){
    alert("file size should be less then 70kb" );
 }else{
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
     
     console.log(img)
    
  };
  reader.onerror = (error) => {
    console.log("error: ", error);
  };
 }
  
}




  return<>
  <section className='image-upload-container'>
    <div className='page-tittle'>Update Logo Image</div>

    <div className='upload-form'>
      <form onSubmit={uploadData}  encType='multipart/form-data'>
      <div className='row'>
      <label className='file-label'>Choice Image :</label>
      <input type='file' name='image' onChange={onFileResize }  className='image-input' accept="image/png, image/gif, image/jpeg"></input></div>
      
      {img ? (
            <img width={100} height={100} src={img} />
          ) : (
            <div>upload something</div>
          )}
      
      <button type='submit' className='file-submit-button'>Upload</button>
    </form></div>
  </section>
  </>
}

export default Image