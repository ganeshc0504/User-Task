import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import CompanyIcon from '@mui/icons-material/Business';
import UserIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from './Form';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../app/slices/UserSlice';

const User = (user) => {

  const {id,name,username,address,phone,email,website,company} = user?.user

  const [open, setOpen] = React.useState(false);
  const [color,setColor] = React.useState('grey')
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeColor = () =>{
    if(color == 'grey') setColor('red')
    if(color == 'red') setColor('grey')
  }

  const handleDelete = () =>{
    dispatch(deleteUser(user?.user))
  }

  return (
    <Card sx={{ maxWidth: 250, mt:5, ml:2 }}>
      <CardMedia
        component="img"
        height="250"
        image={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt="Paella dish"
      />
      <CardContent sx={{textAlign:"left"}}>
        <Typography variant="body2" color="text.primary"><b>{name}</b></Typography>
        <span style={{display:"flex"}}><UserIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {username}</Typography></span>
        <span style={{display:"flex"}}><EmailIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {email}</Typography></span>
        <span style={{display:"flex"}}><PhoneIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {phone}</Typography></span>
        <span style={{display:"flex"}}><WebIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {website}</Typography></span>
        <span style={{display:"flex"}}><CompanyIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {company.name}</Typography></span>
        <span style={{display:"flex"}}><HomeIcon color='primary'sx={{height:'18px'}}/><Typography variant="body2" color="text.primary" fontSize= '11px' >: {address.street}, {address.suite}, {address.city}, {address.zipcode}</Typography></span>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleChangeColor} >
          <FavoriteIcon sx={{color:`${color}`}}/>
        </IconButton>

 {/* Edit Dialog  */}
        <IconButton aria-label="Edit User" onClick={handleClickOpen}>
          <EditIcon />
        </IconButton >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update User"}
        </DialogTitle>

  {/* User Edit Form  */}
        <DialogContent>
          <Form user={user?.user} handleClose={handleClose}/>
        </DialogContent>
      </Dialog>
    
  {/* Delete User  */}
      <IconButton aria-label="Delete" onClick={handleDelete} >
        <DeleteIcon sx={{color:`${color}`}}/>
      </IconButton>

      </CardActions>
    </Card>
  );
}

export default User