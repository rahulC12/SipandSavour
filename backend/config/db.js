import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://rahulchoudhary:rahul@cluster0.uvlz5.mongodb.net/SipandSavour').then(()=>console.log(" DB Connected"));
}