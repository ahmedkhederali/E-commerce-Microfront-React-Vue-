import {mount} from  "auth/AuthApp";
import React ,{useRef, useEffect} from 'react'
import {useHistory} from "react-router-dom"
// we are make thiscompoant to makeit generic 
// so u can use the same approach in diffrent framework
export default ({onSignIn})=> {
    const refEle=useRef(null);
    const  history=useHistory();
    useEffect(()=>{
        const {onParentNavigation}=mount(refEle.current,{
          initalPath:history.location.pathname,
          onNavigate:({pathname:nextPathname})=>{
            // when child app change path this function is resbonsibe to change Browser url 
            
            // check if i in the same path not doing anything to prevent infite loop
            // so my needed is just make change when current path not equl nextPath
            // to Prevent infinte loop so for example i have on history object and im in the same location 
            const {pathname}=history.location
            if(pathname !== nextPathname){
              history.push(nextPathname)
            }
          },
          onSignIn
        })
          history.listen(onParentNavigation)
    },[])
  return (
    <div ref={refEle}/>
  )
}
