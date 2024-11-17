import { Router } from "express";

const route = Router()

route.get('/', (req,res)=>{
    res.send("This is an admin route")
})



export default route