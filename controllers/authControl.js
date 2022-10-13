
import express, { response } from 'express'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { dbController } from './dbController.js'
import Message from '../model/Message.js'




export const controller = {


    getMessages:(req,res)=>{
        console.log('messages')
        res.send(req.body)

    },
    saveMessage:async(req,res)=>{
            
            const message = new Message(req.body)
            await message.save()
            console.log('message saved')
            res.send(req.body)
    


}
}
