import {mount} from  "marketing/MarketingApp";
import React ,{useRef, useEffect} from 'react'

// we are make thiscompoant to makeit generic 
// so u can use the same approach in diffrent framwork
export default ()=> {
    const refEle=useRef(null);
    useEffect(()=>{
        mount(refEle.current)
    })
  return (
    <div ref={refEle}/>
  )
}
