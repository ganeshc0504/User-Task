import React from 'react';
import {useSelector} from 'react-redux'
import { selectUsers } from '../app/slices/UserSlice';
import User from './User'

const UsersListing = () => {
    const data = useSelector(selectUsers)
    return ( 
        <>
        <div style={{paddingTop:25}}>
          <h2>User Listing</h2>
            <div style={{display:'flex', flexWrap:"wrap" }}>
            {
                Array.isArray(data) && data.map((user,i)=> <User user={user} key={i} /> )
            }
            </div>
        </div>
        </>
     );
}
 
export default UsersListing;