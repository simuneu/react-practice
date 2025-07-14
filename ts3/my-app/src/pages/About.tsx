import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface UserResponse {
  message:string;

}

const About = () => {
  const [data, setData] = useState<null|UserResponse>(null);

    useEffect(()=>{
      const postUser = async()=>{
        try{
          const response = await axios.post<UserResponse>("http://localhost:4000/users",{
            name:"lee"
          })
          console.log(response.data)
          setData(response.data)
        }catch(e){
          console.log(e)
          throw new Error()
        }
      }
      postUser() 
    },[])
    useEffect(()=>{
      console.log(data)
    },[data])

    return (
      <>
        <div>About</div>
        <p>{data?.message}</p>
      </>
    )
 }

export default About
