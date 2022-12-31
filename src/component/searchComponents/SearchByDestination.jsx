
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function SearchByDestination() {
  return (
    <>
   {/* search destination component  */}
    <Paper elevation={2}  sx={{width:'480px' , height:'480px',position:'absolute' , left:"17%" , top:"100%",borderRadius:'30px', padding:"20px 25px 10px 20px"}}>
        
        <Typography variant='h2'  sx={{fontWeight:'bold', fontSize:'15px' , fontFamily:'sans-serif',marginBottom:'-10px',marginLeft:'6%',marginTop:'3%'}}>Search by region</Typography>



        <Box sx={{width:'100%', height:'90%', display:'grid',gridTemplateColumns:'repeat(3,1fr)',padding:'20px',gridGap:'5px 10px'}} mt={2} >
       {
          [1,2,3,4,5,6].map((region)=>{
            return (
              <Box sx={{width:'130px' , height:'160px' , cursor:'pointer'}}   >
                  <Avatar src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' sx={{width:'100%' , height:'80%', borderRadius:'9px','&:hover':{
                outline:'0.1px solid black'
              } , outline:'0.5px solid gray'}} variant='rounded'/>
                  <Typography>I’m flexible</Typography>
              </Box>
            )
           })  
       }
        
        </Box>
      </Paper>
    </>
  )
}
