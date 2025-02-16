import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
import { createMemoryHistory , createBrowserHistory } from "history";

console.log("==========> Markting")

// Mount Function To start app
const mount = (el,{onNavigate, defaultHistory}) => {
  // Create a memory history instance
const history = defaultHistory || createMemoryHistory();

// to fire anything when path change you need to put in lisen
if(onNavigate){
  history.listen(onNavigate)
}
ReactDom.render(<App memoryHistory={history}/>, el)
// to communicate between conatiner and child 
return {
  onParentNavigation:({pathname:nextPathname})=>{
    // when child app change path this function is resbonsibe to change Browser url 
    
    // check if i in the same path not doing anything to prevent infite loop
    // so my needed is just make change when current path not equl nextPath
    // to Prevent infinte loop so for example i have on history object and im in the same location 
    const {pathname}=history.location
    if(pathname !== nextPathname){
      history.push(nextPathname)
    }
  }
}  
};

// just for development so it will work in development & isolation 
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_markting-dev-root");
  if (el) {
    mount(el , {defaultHistory:createBrowserHistory()}); // i pass this object beacuse i expect to send object in conatiner
  }
}
// if we ot in development and w in production we will export Mount 
// we are running throught conatiner 
export { mount };