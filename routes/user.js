
import express from 'express'
const router=express.Router()
import controller from '../controllers/users.js'



router.get('/',(req,res)=>{
    console.log('dashboard')
    res.send('dashbord')
})

export default router;