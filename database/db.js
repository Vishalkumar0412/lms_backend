import mongoose from "mongoose";
const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo Database connected Successfully");
        
    } catch (error) {
        console.log("Error Occured",error);
        
    }
}
export default connectDB