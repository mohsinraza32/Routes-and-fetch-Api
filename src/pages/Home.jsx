import { useState } from "react";


const Home = () =>{
    const [formData,setFormData] = useState({
        fname:"Husnain",
        lname:"Raza"
    });

    console.log(formData);
    
    
    const inputFnameChange = (e) =>{
        const value = e.target.value;
        setFormData({
            ...formData,
            fname:value
        })
    }
    const input0LnameChange = (e) =>{
        const value = e.target.value;
        setFormData({
            ...formData,
            lname:value
        })
    }
  
    
    return(
        <>
        <h1>Contact Us</h1>
        <h1>{formData.fname} {formData.lname}</h1>
           <form style={{paddingLeft:"50px"}}>
                <label for="fname">First name:</label><br/>
                <input type="text" onChange={(e)=>inputFnameChange(e)} id="fname" name="fname" value={formData.fname}/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" onChange={(e)=>input0LnameChange(e)} id="lname" name="lname" value={formData.lname}/><br/><br/>
               
                <input type="submit" value="Submit"/>
            </form> 
        </>
    )
}


export default Home;