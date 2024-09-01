import React,{ useState,useEffect } from "react"
import axios from 'axios'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
//import { useEffect } from "react"
export default function About_us() {

    const[page_content,setpage_content]=useState('')
    const[image,setpage_img]=useState('')
    const [formErrors, setFormErrors] = useState({});
    const Navigate=useNavigate();    
    const location=useLocation();
    const page_id=location.pathname.split("/")[2]
    const[page_img,setpage]=useState('')
    const navigate=useNavigate();
  //   const[page_content,setpage_content]=useState('')
    
  //   const[page_img,setpage_img]=useState('')
  //   const navigate=useNavigate();

  //   const[formErrors,setFormErrors]=useState({});

  //   const location = useLocation();
  //   const page_id = location.pathname.split("/")[2];

  //   useEffect(()=>{
  //     if(page_id)      
  //       fatchAbout();
  //   },[]);
  //   const fatchAbout=async()=>{
  //     try
  //     {
  //              const res=await axios.get("http://localhost:8805/backend/About_us/"+page_id);
  //             // console.log(res.data[0].photo)
  //            //  alert(res.data.photo)
  //              setpage_img(res.data[0].page_img);
  //              setpage_content(res.data[0].page_content);
  //     }
  //     catch(err)
  //     {
  //              alert(err);
  //     }
  //   }
  //   const upload=async()=>{
  //     if(page_img!="")
  //     {
  //       try
  //       {
  //             const formdata = new FormData();
  //             formdata.append("file",page_img);
  //             const res = await axios.post("http://localhost:8805/backend/upload",formdata);
  //             insertdata(res.data);
  //       }
  //       catch(err)
  //       {
  //             alert(err);
  //       }
  //     }
      
  //   }
  
  //   const insertdata = async(page_img)=>{
  //     let res="";
  //     try
  //     {
  //       if(page_id)
  //       {
  //               const res=await axios.put("http://localhost:8805/backend/About_us/"+page_id,{
  //                 page_content,
  //                 page_img,
  //               });
              
  //       }
  //       else
  //       {
  //               const res=await axios.post("http://localhost:8805/backend/About_us",{
  //                 page_content,
  //                 page_img,
  //               });
              
  //       }     
       
  //     }
  //     catch(err)
  //     {
  //       alert(err);
  //     }
  //     alert(res.data);
  //     navigate("/About");
  //   }
  //   const validate=()=>{
  //     const errors={};
  //     if(!page_img)
  //     {
  //         errors.page_img="Please Select Image"
  //     }
  //     if(!page_content)
  //     {
  //         errors.page_content="Please Enter Description"
        
  //     }
  //     return errors;
  //   }

 
  //   const btnhandle=async(e)=>{
  //     e.preventDefault();
  //     if(page_img && page_content)
  //     upload(); 
  //     setFormErrors(validate());        
  // }
  
  const about_us = ()=>{
      navigate("/about");
  }
  
    const upload = async () => {
      try {      
        const formData = new FormData();
        formData.append("file", image);
        const res = await axios.post("/upload", formData);
    
     if(!page_id)
      {
          insertData(res.data)
      }
      
     
      } catch (err) {
       // console.log(err);
      }
  }


  const insertData=async(page_img)=>{
  
    let res=""
    try{
        res = await axios.post("/About_us/",{
          page_content,
          page_img
        });
      }
    catch(err)
    {
      alert(err)
    }
    alert(res.data)
    Navigate("/about")
  
}
// const admin = ()=>{
//   navigate("/About");
// }


  const validate = () => {
    const errors = {};
    if (!page_content) {
        errors.page_content = "page content required";
    }
    if (!image) {
        errors.image = "Please upload any image";
    }
    return errors;
};

    const submitHandle=async(e)=>{
      e.preventDefault()
      setFormErrors(validate());
      upload()
    if(page_content && page_img)
  {
  let res=""
      try{
          res = await axios.put("/About_us/"+page_id,{
            page_content,
            page_img
          });
        }
      catch(err)
      {
        alert(err)
      }
      alert(res.data)
      Navigate("/About")
    }
  
    }
      
    
  return (
    <main id="main" class="main">
    <b><h3>About us</h3></b>
    <div class="card">
    <table  class="table table-striped dt-responsive nowrap w-100"> </table>
  
  <div class="col-12">
      <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={about_us}><i class="bi bi-person-plus"></i><b>Display About </b></button>
  </div>
{/* <tr>
<th>About</th>
</tr> */}
      <form class="row g-3">
                  <div class="col-12">
                  
                    <label for="inputNanme4" class="form-label">Page content</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Page content' onChange={e=>setpage_content(e.target.value)} />
                     <p style={{color: "red"}}>{formErrors.page_content}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Page Image</label>
                    
                    <input type="file" class="form-control" id="inputEmail4"   onChange={e=>setpage_img(e.target.files[0])}/>
                    
                    <p style={{color: "red"}}>{formErrors.image}</p>

                  </div>

                  <div class="text-center">
                  <button type="button" class="btn btn-primary" onClick={(submitHandle)}>Submit</button>
                    <button type="button" class="btn btn-danger">Reset</button>
              </div>

</form></div>
    </main>
  )
}
