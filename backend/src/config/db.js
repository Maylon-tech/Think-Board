import mongoose from 'mongoose'

export const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI)
        
        console.log("MONGODB Connected Succeffuly")
    } catch (error) {
        console.log(error, 'Error to connect !')

        process.exit(1)
    }
}