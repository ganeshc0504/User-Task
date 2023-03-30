import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { addUser } from './app/slices/UserSlice';
import UsersListing from './components/UserListing';
import UserService from './services/UserServices';

function App() {

    const [isLoading,setIsLoading] = useState(true)
    const dispatch = useDispatch()

    const loadData = () =>{
        UserService.fetchUser().then((res)=>{
            dispatch(addUser(res.data)); // Dispatching data to redux store
        }).catch((err)=>{
            console.log("error :",err);
        })
    }

    useEffect(()=>{
        setTimeout(() => {
        setIsLoading(false);
        loadData();
      },3000);
    },[])

  return (
    <div className="App">
      {isLoading == true ? <div style={{height:"100vh", display:"flex", flexDirection:"column",alignContent:"center"}}><div className='spinner'></div></div> : <UsersListing />}
    </div>
  );
}

export default App;
