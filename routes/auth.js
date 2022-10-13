import express from 'express' 
const router=express.Router()
import {controller} from '../controllers/authControl.js'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})
const images = (req,res) =>{
    console.log(req.params.param)
    express.static('public/images')
}

router.get('/message',controller.getMessages)
router.post('/message',controller.saveMessage)





export default router