import React,{ useEffect, useState } from "react"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Update_Aboutus() {
    
    const[page_content,setpage_content]=useState('')
    const[page_img,setpage_img]=useState('')
    const Navigate=useNavigate();
    const location=useLocation();
    const [formErrors, setFormErrors] = useState({});
    const page_id=location.pathname.split("/")[2]

    useEffect(()=>{
        fatchAbout();
        //alert(page_id)
    },[page_id])

    const fatchAbout=async()=>{
        try {
            const res= await axios.get("/About_us/"+page_id)
          //  alert(res.data)
            setpage_content(res.data.page_content)

        } catch (error) {
            alert(error)
        }
    }
    const validate = () => {
      const errors = {};
      if (!page_content) {
          errors.page_content = "page content required";
      }
      if (!page_img) {
          errors.page_img = "Please upload any image";
      }
      return errors;
  };
  const upload = async (e) => {
    e.preventDefault()
    setFormErrors(validate());
    
    if(page_img)
    {
     // alert("upload call")
        try {      
          const formData = new FormData();
          formData.append("file", page_img);
          const res = await axios.post("/upload", formData);
          console.log(res.data)
          insertData(res.data)
        } catch (err) {
        // console.log(err);
        alert(err)
        }
      }
      else{
        alert("without image call")
        insertData("")
      }
  }
  const insertData=async(page_img)=>{
   //alert("update call 1")
    if(page_content && page_img)
    {
      alert("update call 2")
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
  const appointment = ()=>{
    Navigate("/About");
}
    
   
  return (
    <main id="main" class="main">
      <h3>Edit About</h3>
      <div class="card">
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={appointment}><i class="bi bi-person-plus"></i><b>Display About </b></button>
                    </div>
    <form class="row g-3">
                <div class="col-12">
                  
                  <label for="inputNanme4" class="form-label">Page content</label>
                  <input type="text" class="form-control" id="inputNanme4" defaultValue={page_content} placeholder='Enter Page content' onChange={e=>setpage_content(e.target.value)} />
                  <p style={{color: "red"}}>{formErrors.page_content}</p>

                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Page Image</label>
                  <input type="file" class="form-control" id="inputEmail4" onChange={e=>setpage_img(e.target.files[0])}/>
                  <p style={{color: "red"}}>{formErrors.page_img}</p>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={upload}>Submit</button>
                  <button  class="btn btn-danger">Reset</button>
                </div>

</form>
</div>
  </main>
  )
}
