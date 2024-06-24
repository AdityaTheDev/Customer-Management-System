import {useState} from "react"
import axios from "axios"

function AddCustomer(){
    const [cname,setCname]=useState("")
    const [cid,setId]=useState("")
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
            pincode:pincode,
        }

        axios.post("http://127.0.0.1:5000/AddCustomer",data).then((response)=>{
            console.log(response.status,response.data);
        })
        alert("created record successfully")
    }
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    CustomerName :
                    <input type="text" onChange={(e)=>setCname(e.target.value)} />
                </div>
                <div>
                    CutomerID :
                    <input type="text" onChange={(e)=>setId(e.target.value)} />
                </div>
                <div>
                    City :
                    <input type="text" onChange={(e)=>setCity(e.target.value)} />
                </div>
                <div>
                    State :
                    <input type="text" onChange={(e)=>setState(e.target.value)} />
                </div>
                <div>
                    Pincode :
                    <input type="text" onChange={(e)=>setPincode(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>

            </form>
        )


}

export default AddCustomer;