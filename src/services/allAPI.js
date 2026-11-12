import apiService from "../api/apiService";

// add resume api

export const addResummAPI=async(reqBody)=>{
   return await apiService("POST",'/resumes',reqBody)
} 

// get single resume

export const getResumeAPI=async (resumeId)=>{
   return await apiService("GET",`/resumes/${resumeId}`,{})
}

// download API

export const downloadResumeAPI=async(reqBody)=>{
   return await apiService("POST",`/history`,reqBody)
}

// get history api

export const getHistoryAPI=async()=>{
   return await apiService("GET",`/history`,{})
}

// history delete

export const dltHistoryAPI=async(id)=>{
   return await apiService("DELETE",`/history`,{})
}

// udate resume

export const updateResumeAPI=async(id,reqBody)=>{
   return await apiService("PUT",`/resumes/${id}`,reqBody)
}