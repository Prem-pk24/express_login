const express =require('express')

const router =express.Router()
const {PostData}=require('../Controller/regController')
const {PostLoginData}=require('../Controller/logincontroller')
router.post ("/register",PostData)

// login
router.post("/login",PostLoginData)

module.exports=router