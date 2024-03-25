const express = require ('express')
const router = express.Router()

const Person = require ('../Models/PersonSchema')


router.post("/post",async(req,res)=>{
    
    try {
        const person= await Person.create(req.body)
        res.status(201).json({msg:"Person created",person})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }
    
    })
    

    module.exports = router    