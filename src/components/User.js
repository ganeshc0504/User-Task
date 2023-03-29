import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const User = (user) => {

  const {name,username,email,address,phone, website,company} = user?.user;
  console.log("user :",user);


  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <Card sx={{ display: 'flex', bgcolor:'ButtonFace', width:{xs:'80%', md:"60%"},m:2 }}>
      <Box bgcolor='blueviolet' width='70%'>
        <CardContent sx={{textAlign:'left'}}>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}} color="text.primary" component="div">
           <b>Name :</b> {name}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
           <b>Username :</b> {username}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Email :</b> {email}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Address :</b> {address.street}, {address.suite}, {address.city} ,zip-{address.zipcode}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Mobile :</b> {phone}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Website :</b> {website}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Company :</b> {company.name}
          </Typography>
          <Typography variant="subtitle1" sx={{fontSize:{xs:12}}}  color="text.primary" component="div">
          <b>Catchphrase :</b> {company.catchPhrase} - bs : {company.bs}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '30%', ml:'auto' }}
        image={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        alt="Live from space album cover"
      />
    </Card>
    </div>
  );
}

export default  User;