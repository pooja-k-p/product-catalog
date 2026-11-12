import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://resumebuilder-8njt.onrender.com'
})

export default axiosInstance

// response interceptor: handlingglobal/common errors

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response) {
        const status = error.response.status

        if (status == 401) {
            console.log("un-Athorized");

        }
        else if (status == 404) {
            console.log("API not found");

        }
        else if (status == 500) {
            console.log("Server error");

        }
        else if(error.request){
            console.log("No response from server");
    
        }
        else{
            console.log("Error:"+error.message);
            
        }
        return Promise.reject(error)
    }
})