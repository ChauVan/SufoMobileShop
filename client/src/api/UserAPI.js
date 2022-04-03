import React, {useState, useEffect} from 'react'
import axios from 'axios'
function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAmin] = useState(false)

    useEffect(()=>{
        if(token){
            const getUser = async () =>{
                try{
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAmin(true) : setIsAmin(false)
                }catch(err)
                {
                    alert(err.response.data.msg)
                }
            }
        }
    },[token])
  return {
    
    //   isLogged: [isLogged, setIsLogged],
    //   isAdmin: [isAdmin, setIsAdmin]
    }
  
}

export default UserAPI
