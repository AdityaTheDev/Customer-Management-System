import axios from "axios"

function DisplayCustomer(){

    function handleDisplay(e){
        e.preventDefault()
        axios.get("http://127.0.0.1:5000/DisplayCustomer").then((response)=>{
            const records=JSON.stringify(response.data)
            console.log(response.data);
            const element=document.querySelector(".ta")
            element.value=records
        })
    }

    return (
        <div>
        DisplayCustomer
        <br/><br/>
        <textarea className="ta" style={{width:"50vw",height:"20vw"}}></textarea>
        <br/><br/>
        <button onClick={handleDisplay}>Display</button>
        
        </div>
    )
}
export default DisplayCustomer