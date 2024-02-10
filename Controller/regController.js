const user = require("../Models/dataBase");


const PostData = async (req,res)=>{
    try{
        const RegisterData = await user.create(req.body)
            res.status(200).json(RegisterData)
    }catch(e){
        res.status(400).json({error:e.message}) 
    }
}


module.exports={PostData}