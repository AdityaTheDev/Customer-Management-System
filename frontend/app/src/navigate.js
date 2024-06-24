import{useNavigate} from "react-router-dom"

function Navigate(){
    const navigate=useNavigate()

    return (
        <div>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/")}>Home</button>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/AddCustomer")}>AddCustomer</button>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/SearchCustomer")}>SearchCustomer</button>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/DisplayCustomer")}>DisplayCustomer</button>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/UpdateCustomer")}>UpdateCustomer</button>
            <button style={{position:"relative"}} onClick={(e)=>navigate("/DeleteCustomer")}>DeleteCustomer</button>
        </div>
    )
}

export default Navigate;