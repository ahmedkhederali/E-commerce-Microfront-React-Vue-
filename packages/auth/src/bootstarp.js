import React from 'react';
import ReactDom from 'react-dom'
console.log("==========> Auth")

// Mount Function To start app
const mount = (el) => {
ReactDom.render(<h1>dddd</h1>, el)  
};

// just for development so it will work in development & isolation 
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_auth-dev-root");
  if (el) {
    mount(el);
  }
}
// if we ot in development and w in production we will export Mount 
// we are running throught conatiner 
export { mount };