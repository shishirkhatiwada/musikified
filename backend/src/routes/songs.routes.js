import { Router } from "express";

const route = Router()

route.get("/songs", (req,res)=>{
    console.log(`This is a songs route`);
    
})


export default route