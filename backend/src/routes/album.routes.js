import { Router } from "express";

const route = Router()

route.get("/album", (req,res)=>{
    console.log(`This is an album route`);
    
})


export default route