
import express, { response } from 'express'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { dbController } from './dbController.js'
import Message from '../model/Message.js'




export const controller = {


    getMessages:async(req,res)=>{
        console.log('messages')
        const details =await Message.find().sort({date:-1})
        res.send(details)

    },
    saveMessage:async(req,res)=>{
            
            const message = new Message(req.body)
            await message.save()
            console.log('message saved')
            res.send(req.body)
    


}
}
