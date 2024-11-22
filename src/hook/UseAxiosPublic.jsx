import axios from 'axios';

// const backendUrl = `http://localhost:5500/api/v1`;
const backendUrl = `https://car-doctor-backend-zeta.vercel.app/api/v1`;


const axiosPublic = axios.create({
    baseURL: backendUrl
})

const useAxiosPublic = () => {
    return axiosPublic;
}


export default useAxiosPublic;