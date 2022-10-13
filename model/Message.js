import mongoose from "mongoose"



const messageSchema = mongoose.Schema({
   username:{
    type:String
   },
   message:{
    type:String
   },
   date:{
    type:String
   }
})

export default mongoose.model("Message",messageSchema)
