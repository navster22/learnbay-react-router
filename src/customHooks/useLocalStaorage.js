import React, { useEffect } from 'react'
import { useState } from 'react'

function getData(key,value) {
    const localStoreValue = localStorage.getItem(key)
    if (localStoreValue) return localStoreValue
    return value
}

export default function useLocalStaorage(key,value) {

  const [data,setData] = useState(() => {return getData(key,value)})

  useEffect(()=>{
    localStorage.setItem(key,data)
    return () => {
        localStorage.clear()
    }
  }, [data])

  return [data,setData]
}
