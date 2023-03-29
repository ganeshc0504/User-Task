import React, { useEffect, useState } from 'react';
import User from './User';
import UserService from '../services/UserServices';
import './UserListing.css'

const UsersListing = () => {

    const [ data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    const loadData = () =>{
        UserService.fetchUser().then((res)=>{
            setData(res.data);
            console.log("data: ",data);
        }).catch((err)=>{
            console.log("error :",err);
        })
    }

    useEffect(()=>{
        setTimeout(() => {
        setIsLoading(false);
        loadData();
      }, 3000);
    },[])

    return ( 
        <>
        {isLoading == true ? <div style={{height:"100vh", display:"flex", flexDirection:"column",alignContent:"center"}}><div className='spinner'></div></div> : <div style={{paddingTop:25}}>
          <h2>User Listing</h2>
        <div>
            {
                Array.isArray(data) && data.map((user,i)=> <User user={user} key={i} /> )
            }
        {/* <User /> */}
        </div>
        </div>}
        </>
     );
}
 
export default UsersListing;