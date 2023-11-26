const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Customer")
const detailSchema=new mongoose.Schema({
    cust_name:{type:String, required:true},
    cust_id:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String,required:true},
    pincode:{type:String,required:true},
})

const Details=mongoose.model("details",detailSchema)

app.post("/AddCustomer",async(req,res)=>{
    const {cust_name,cust_id,city,state,pincode}=req.body
    console.log(req.body);
    const newDetails=new Details({
        cust_name,
        cust_id,
        city,
        state,
        pincode,
    })

    const record_saved=await newDetails.save()
    if(!record_saved){
        res.send("Failed to add the data")
    }
    else{
        res.send({success:true})
    }
})
    app.get("/SearchCustomer",async(req,res)=>{
        const cust_id=req.query.cust_id
        console.log(cust_id);

        const customer_details=await Details.findOne({cust_id:cust_id})
        if(!customer_details){
            res.send("Customer Not Found")
        }
        else{
            // res.send(customer_details)
            res.write("Name :"+customer_details.cust_name)
            res.write(", ID :"+customer_details.cust_id)
            res.write(", City :"+customer_details.city)
            res.write(", State :"+customer_details.state)
            res.write(", Piincode :"+customer_details.pincode)
            res.end()
            console.log(res.status);
        }
    })
    app.get("/DisplayCustomer",async(req,res)=>{
        const customers=await Details.find({})
        if(!customers){
            res.send("No customers found")
        }
        else{
            // res.send(customers)
            customers.forEach((customer,i)=>{
            res.write("User :"+i+1)
            res.write("Name :"+customer.cust_name)
            res.write(", ID :"+customer.cust_id)
            res.write(", City :"+customer.city)
            res.write(", State :"+customer.state)
            res.write(", Pincode :"+customer.pincode)
            })
            res.end()
        }
    })
    
    app.delete("/DeleteCustomer",async(req,res)=>{
        const cust_id=req.query.cust_id
        const customer=await Details.findOne({cust_id:cust_id})
        if(!cust_id){
            res.send("Customer does not exists")
        }
        else{
            await Details.deleteOne({cust_id:cust_id})
            // res.send(`Successfully the record has been deleted. The deleted record is :${JSON.stringify(customer)}`)
            res.write("Deleted Successfully and the deleted customer is: ")
            res.write("Name :"+customer.cust_name)
            res.write(", ID :"+customer.cust_id)
            res.write(", City :"+customer.city)
            res.write(", State :"+customer.state)
            res.write(", Pincode :"+customer.pincode)
            res.end()
            console.log(res.status);
        }
    })

    app.put("/UpdateCustomer",async(req,res)=>{
        const {cust_name,cust_id,city,state,pincode}=req.body
        const old_customer=await Details.findOne({cust_id:cust_id})
        if(!old_customer){
            const newDetails= new Details({
                cust_name,
                cust_id,
                city,
                state,
                pincode,
            })
            await newDetails.save()
        }
        else{
            old_customer.cust_name=cust_name
            old_customer.cust_id=cust_id
            old_customer.city=city
            old_customer.state=state
            old_customer.pincode=pincode
            await old_customer.save()
        }
        res.send("Updated Successfully")
    })

    app.listen(5000,(error)=>{
        if(!error){
            console.log("Server has started at port 5000");
        }
        else{
            console.log(error);
        }

    })


