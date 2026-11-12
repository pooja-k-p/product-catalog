import { Padding } from '@mui/icons-material'
import { Box, Paper } from '@mui/material'
import React, { useEffect, useEffectEvent, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { dltHistoryAPI, getHistoryAPI } from '../services/allAPI'





function History() {

  const [history,setHistory]=useState([])
  console.log(history);
  

  useEffect(()=>{
    getHistory()
   },[])

  const getHistory=async()=>{
    const res=await getHistoryAPI()
    console.log(res);

    if(res.status==200){
      setHistory(res.data)
    }
    
  }
  const dltHistory=async (id)=>{
    const res=await dltHistoryAPI(id)
    if(res.status==200){
      getHistory()
    }
  }
  return (
    <div className='container m-5'>
      <h1 className='text-center text-danger'>Download Resume</h1>
      <Link to={'/'} style={{ float: 'right', marginTop: '-40px' }}>Back</Link>
      <div className='row'>
        {
          history?.length>0?
          history?.map(his=>(
            <div className='col-md-4'>

          <Box className="my-2">
            <Paper elevation={3} sx={{ Padding: 2 }}>
              <div className='d-flex align-items-center justify-content-center'>
                <h6>Review At:{his?.timestamp}</h6>
                <button onClick={()=>dltHistory(his.id)} className='btn text-danger fs-5' ><FaTrash /></button>
              </div>
              <img src={his.resumeImg} className='img-fluid' alt="resume image" />
            </Paper>
          </Box>

        </div>
          ))

          :

          <p className='text-center my-5 text-danger'>No resumes Downloaded</p>
        
        }
      </div>
    </div>
  )
}

export default History