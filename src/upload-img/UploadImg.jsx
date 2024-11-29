import axios from "axios";

export const uploadImg = async (file) => {
    const cloudName = "dj2edy2rg"  // Your Cloudinary cloud name
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "portfili-preset"); // Your Cloudinary upload preset

    try {
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const res = await axios.post(api, data);
        const { secure_url } = res.data;
        console.log("Image uploaded successfully:", secure_url);
        return secure_url;
    } catch (err) {
        console.error("Error uploading image:", err);
        return "";
    }
};