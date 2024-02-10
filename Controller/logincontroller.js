const user = require("../Models/dataBase");
const jwt = require('jsonwebtoken')
const PostLoginData = async (req,res)=>{
    const {email,password}=req.body
    try{
        const loginData = await user.findOne({email,password})
        if(!loginData){
            return res.status(401).json({ error: 'Invalid email or password' });
        }
         const token =jwt.sign({email:loginData.email} ,"teR2k2gIxvFR2F0LJOx33ZVCxvngycIbjry1eNxI46M0DXPcC1txIDW07HQQE95x")
            res.status(200).json(token)
    }catch(e){
        res.status(400).json({error:e.message}) 
    }
}


module.exports={PostLoginData}