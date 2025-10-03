import mongoose from "mongoose";

let cached = global.mongoose || {conn:null, promise:null};



export default async function connectDB(){
      if(cached.conn) return cached.conn
      if(!cached.promise) {
        cached.promise  = mongoose.connect(process.env.MONGOOSE_URL).then((mongoose) => mongoose);
      }
      try {
        cached.connt = await cached.promise
      } catch (error) {
        console.error("Error connecting to mongoDB:",error);
      }
      return cached.conn
} 