import React, { useMemo, useState } from 'react'
import { Context } from './Context'

const Contextprovider = ({children}) => {
    const [expense,setExpense]=useState([])
    const providervale=useMemo(()=>({expense,setExpense}),[expense,setExpense])
  return (
    <Context.Provider value={{expense,setExpense}}>
        {children}
    </Context.Provider>
  )
}

export default Contextprovider