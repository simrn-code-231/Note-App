import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false); 

  const getData = async () => {
    setLoading(true);                             
    const resp = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserdata(resp.data);
    setLoading(false);                            
    console.log(resp.data);
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserdata = <h3 className='text-gray-400 text-xs'>No available</h3>

  if (loading) {
    printUserdata = (                             
      <h3 className='text-gray-400 text-xs'>Loading...</h3>
    )
  } else if (userdata.length > 0) {
    printUserdata = userdata.map(function (elem) {
      return (
        <div key={elem.id}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
              <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserdata}
      </div>

      <div className='flex justify-center items-center p-4 gap-7'> 
        <button
          onClick={() => {
            if (index > 1) {                      
              setIndex(index - 1)
            }
          }}
          className='bg-amber-500 text-black rounded px-4 py-2 text-sm'
        >
          prev
        </button>

        <span className='text-white text-sm'>Page {index}</span> 

        <button
          onClick={() => {
            setIndex(index + 1)
          }}
          className='bg-amber-500 text-black rounded px-4 py-2 text-sm'
        >
          next
        </button>
      </div>
    </div>
  )
}