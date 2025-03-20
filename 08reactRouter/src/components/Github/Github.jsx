import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    console.log(data);
    
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Beigh-Farooq')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    
    <div className="text-center m-4 bg-gray-600 text-yellow-400 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold mb-4">Github Followers: {data.followers}</h2>
      <p className="text-xl mb-2"><span className="font-bold">Name:</span> {data.name}</p>
      <p className="text-xl mb-4"><span className="font-bold">Country:</span> {data.location}</p>
      <img src={data.avatar_url} alt="Git Picture" className="rounded-full w-48 h-48 mx-auto" />
    </div>

  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Beigh-Farooq')
    return response.json()
}
