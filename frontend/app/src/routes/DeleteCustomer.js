import { useState } from "react";
import axios from "axios"

function DeleteCustomer(){
 
    const [data,setData]=useState("")    
    function handleDelete(e){
        e.preventDefault()

        axios.delete(`http://127.0.0.1:5000/DeleteCustomer?cust_id=${data}`).then((response)=>{
            console.log(response.status,response.data);
            const element=document.querySelector(".ta")
            element.value=response.data
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
           <div>
              SearchCustomer CustomerID :
              <input type="text" onChange={(e)=>setData(e.target.value)} />
           </div>
            <div>
            <br/><br/>
            <textarea className="ta" style={{height:"20vw",width:"50vw"}}></textarea>
             <br/><br/>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteCustomer