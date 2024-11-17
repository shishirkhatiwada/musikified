import { Router } from "express";

const route = Router()

route.get("/auth", (req,res)=>{
    console.log(`This is an auth route`);
    
})


export default route