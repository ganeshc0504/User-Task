import { Button, DialogActions, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../app/slices/UserSlice';

const Form = ({user,handleClose}) => {

    const {id,name,username,address,phone,email,website,company} = user
    const dispatch = useDispatch()

    const[data,setData] = useState({
        id:id,
        name:name,
        phone:phone,
        username:username,
        email:email,
        address:address,
        website:website,
        company:company
    })
    
    const handleChange = (e) =>{
        const {name,value}= e.target;
        setData({...data,[name]:value})
    }

    const handleSubmit = () =>{
        dispatch(updateUser(data))
        handleClose()
    }

    return ( 
        <>

            <form >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={data.name}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={data.username}
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid className='d-flex' item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  value={data.phone}
                  autoComplete="mobile"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={data.email}
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <DialogActions>
                <Button onClick={handleSubmit} variant='contained'>Update</Button>
            </DialogActions>
            </Grid>
            </form>
                
        </>
     );
}
 
export default Form;