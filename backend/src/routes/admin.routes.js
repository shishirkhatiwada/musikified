import { Router } from "express";

const route = Router()

route.get("/admin", (req,res)=>{
    console.log(`This is an admin route`);
    
})


export default route