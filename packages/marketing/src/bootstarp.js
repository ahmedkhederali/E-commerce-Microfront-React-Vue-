import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
import { createMemoryHistory } from "history";

console.log("==========> Markting")

// Mount Function To start app
const mount = (el,{onNavigate}) => {
  // Create a memory history instance
const memoryHistory = createMemoryHistory();

// to fire anything when path change you need to put in lisen
if(onNavigate){
  memoryHistory.listen(onNavigate)
}
ReactDom.render(<App memoryHistory={memoryHistory}/>, el)  
};

// just for development so it will work in development & isolation 
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_markting-dev-root");
  if (el) {
    mount(el , {}); // i pass this object beacuse i expect to send object in conatiner
  }
}
// if we ot in development and w in production we will export Mount 
// we are running throught conatiner 
export { mount };