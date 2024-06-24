import axios from "axios"
import { useState } from "react"

function SearchCustomer(){

    const [data,setData]=useState("")

    function handleSearch(e){

        e.preventDefault()
    axios.get(`http://127.0.0.1:5000/SearchCustomer?cust_id=${data}`).then((response)=>{
        let element=document.querySelector(".ta")
        element.value=JSON.stringify(response.data)
        console.log(response.data,typeof response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

    return(
        <div>
            <div>
            SearchCustomer CustomerID :
            <input type="text" onChange={(e)=> setData(e.target.value)}  />
        </div>
         <div>
            <br/><br/>
            <textarea className="ta" style={{width:"50vw",height:"20vw"}}></textarea>
            <br/><br/>
            <button onClick={handleSearch}>Search</button>
            
         </div>
        </div>
    )
}

export default SearchCustomer