import axios from "axios"
import { useState } from "react"

function UpdateCustomer(){
   const [cname,setCname]=useState("")
   const [cid, setCid] =useState("")
   const [state,setState]=useState("")
   const [city,setCity]=useState("")
   const [pincode,setPincode]=useState("")

   function handleSubmit(e){
    e.preventDefault()

    let data={
        cust_name:cname,
        cust_id:cid,
        city:city,
        state:state,
        pincode:pincode
    }


    axios.put("http://127.0.0.1:5000/UpdateCustomer",data).then((response)=>{
        console.log(response.status,response.data);
        alert("updates successfully")
    })
   }

   return (
    
    <form onSubmit={handleSubmit}>
        <h2>Update</h2>
        <div>
            CustomerName :
            <input type="text" onChange={(e)=>setCname(e.target.value)} />
        </div>
        <div>
            CustomerID :
            <input type="text" onChange={(e)=>setCid(e.target.value)} />
        </div>
        <div>
            State :
            <input type="text" onChange={(e)=>setState(e.target.value)}/>
        </div>
        <div>
            City :
            <input type="text" onChange={(e)=>setCity(e.target.value)} />
        </div>
        <div>
            Pincode :
            <input type="text" onChange={(e)=>setPincode(e.target.value)} />
        </div>
        <div>
            <input type="submit" value="UPDATE" />
        </div>

    </form>
        
   )
}

export default UpdateCustomer