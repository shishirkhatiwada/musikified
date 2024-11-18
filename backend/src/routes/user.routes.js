import { Router } from "express";

const route = Router()

route.get('/', (req,res)=>{
    req.auth.userId
    res.send("This is an admin route")
})



export default route