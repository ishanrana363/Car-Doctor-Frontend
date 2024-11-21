import axios from 'axios';

// const backendUrl = `http://localhost:5500/api/v1`;
const backendUrl = `https://meal-hisab-frontend-pp6s.vercel.app/api/v1`;


const axiosPublic = axios.create({
    baseURL: backendUrl
})

const useAxiosPublic = () => {
    return axiosPublic;
}


export default useAxiosPublic;