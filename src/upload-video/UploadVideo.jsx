import axios from "axios";

export const uploadVideo = async (file) => {
    const cloudName = 'dj2edy2rg'
    const data = new FormData();
    data.append('file', file)
    data.append('upload_preset', 'car-doctor')
    try {
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
        const res = await axios.post(api, data)

        const { secure_url } = res.data;
        return secure_url
    } catch (error) {
        console.log(error)
    }
}