import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
console.log("==========> Markting")

// Mount Function To start app
const mount = (el) => {
ReactDom.render(<App/>, el)  
};

// just for development so it will work in development & isolation 
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_markting-dev-root");
  if (el) {
    mount(el);
  }
}
// if we ot in development and w in production we will export Mount 
// we are running throught conatiner 
export { mount };