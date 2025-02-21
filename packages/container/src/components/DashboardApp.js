import {mount} from  "dashboard/DashboardApp";
import React ,{useRef, useEffect} from 'react'
import {useHistory} from "react-router-dom"
// we are make thiscompoant to makeit generic 
// so u can use the same approach in diffrent framework
export default ()=> {
    const refEle=useRef(null);
    const  history=useHistory()
    useEffect(()=>{
        mount(refEle.current)
    },[])
  return (
    <div ref={refEle}/>
  )
}
