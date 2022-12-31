import { Button, Divider, Paper, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementadultCount, decrementchildrenCount, decrementInfantCount, decrementpetCount, incrementadultCount, incrementchildrenCount, incrementInfantCount, incrementpetCount } from '../../Redux/features/searchWidgetSlice';

export default function AddGuest() {
  const dispatch=useDispatch();
  const {adultCount,petCount,childrenCount,infantCount}= useSelector((store)=>store.searchWidgetReducer)
  return (
    <>
     <Paper elevation={2} sx={{width:'400px',height:'370px' , padding:'20px' , position:'absolute',top:'100%',left:'55%',borderRadius:'37px'}}>
     <Box sx={{width:'100%' , height:'80px' , display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:'20px',gap:'10px'}}>
        <Box sx={{width:'70%' , height:'100%' }}>
        <Typography variant='h2' component={'p'} sx={{fontSize:'18px',fontWeight:'lighter'}}>Adults</Typography>
            <Typography sx={{fontSize:'15px', color:'gray'}}>Ages 13 or above</Typography>
           
        </Box>
         <Stack spacing={2} sx={{width:'30%' , height:'60px' , marginTop:'-3px', display:'flex',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',padding:'5px'}} direction='row'>
            <RemoveCircleOutlineIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
               dispatch(decrementadultCount())
            }}/>
            <span>{adultCount>0?adultCount:0}</span>
            <ControlPointRoundedIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
              dispatch(incrementadultCount())
            }}/>

        </Stack>

      </Box>
      <Divider sx={{width:'100%'}}/>

      <Box sx={{width:'100%' , height:'80px' , display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:'20px',gap:'10px'}}>
        <Box sx={{width:'70%' , height:'100%' }}>
        <Typography variant='h2' component={'p'} sx={{fontSize:'18px',fontWeight:'lighter'}}>Children</Typography>
            <Typography sx={{fontSize:'15px', color:'gray'}}>Ages 2-12</Typography>
           
        </Box>
         <Stack spacing={2} sx={{width:'30%' , height:'60px' , marginTop:'-3px', display:'flex',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',padding:'5px'}} direction='row'>
            <RemoveCircleOutlineIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
                e.stopPropagation()
               dispatch(decrementchildrenCount())
            }}/>
            <span>{childrenCount>0?childrenCount:0}</span>
            <ControlPointRoundedIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
          dispatch(incrementchildrenCount())
            }}/>

        </Stack>

      </Box>
      <Divider sx={{width:'100%'}}/>

 
      <Box sx={{width:'100%' , height:'80px' , display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:'20px',gap:'10px'}}>
        <Box sx={{width:'70%' , height:'100%' }}>
        <Typography variant='h2' component={'p'} sx={{fontSize:'18px',fontWeight:'lighter'}}>Infants</Typography>
            <Typography sx={{fontSize:'15px', color:'gray'}}>Under 2</Typography>
           
        </Box>
         <Stack spacing={2} sx={{width:'30%' , height:'60px' , marginTop:'-3px', display:'flex',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',padding:'5px'}} direction='row'>
            <RemoveCircleOutlineIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
             
              dispatch(decrementInfantCount())
            }}/>
            <span>{infantCount>0?infantCount:0}</span>
            <ControlPointRoundedIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
              dispatch(incrementInfantCount());
            }}/>

        </Stack>

      </Box>
      <Divider sx={{width:'100%'}}/>


      <Box sx={{width:'100%' , height:'80px' , display:'flex',justifyContent:'space-between',alignContent:'center',alignItems:'center',padding:'20px',gap:'10px'}}>
        <Box sx={{width:'70%' , height:'100%' }}>
            <Typography variant='h2' component={'p'} sx={{fontSize:'18px',fontWeight:'lighter'}}>Pets</Typography>
            <Typography sx={{fontSize:'15px', color:'gray', textDecoration:'underline'}}>Bringing a service animal?</Typography>
           
        </Box>
         <Stack spacing={2} sx={{width:'30%' , height:'60px' , marginTop:'-3px', display:'flex',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',padding:'5px'}} direction='row'>
            <RemoveCircleOutlineIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
              dispatch(decrementpetCount())
            }}/>
            <span>{petCount>0?petCount:0}</span>
            <ControlPointRoundedIcon  sx={{cursor:'pointer'}} onClick={(e)=>{
               e.stopPropagation()
             dispatch(incrementpetCount())
            }}/>

        </Stack>

      </Box>
      


     </Paper>
    </>
  )
}
