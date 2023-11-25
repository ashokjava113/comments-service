import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUNDINARY_API_KEY, 
  api_secret: process.env.CLOUNDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            return null;
        }else{
            await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            });

            //file has been uploaded successfully
            console.log("file is uploaded on cloudinary",response.url);
            return response;
        }
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove the saved temporary file as the upload operation failed
        return null;
    }
}

export {uploadOnCloudinary};