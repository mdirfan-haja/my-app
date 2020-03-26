import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function Header() {
  return(
    <h1>yoonoohohoyoyo</h1>
  )
}
function Footer() {
  return(
    <h1>lalalallala</h1>
  )
}



ReactDOM.render(
  <React.StrictMode>
    
   <App /> <Header /> <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


