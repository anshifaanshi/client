import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='w-full h-52 px-24'></div>
    
<main >
  <div className='headerdiv'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
  <h1 className='welcome'>Welcome </h1>
  <p className='text-secondary fw-bold'>Order your favorite meals online and enjoy fast, fresh, and delicious food delivered right to your doorstep</p>
<Link to={'/signup'}>  <button className='btn' >Join With Us</button></Link>
<Link to={'/login'}>  <button className='btn'>LogIn</button></Link></div>

<div className='col-lg-6 col-md-12'>  <img src="https://tse3.mm.bing.net/th?id=OIP.XssBxpt1tkN2VxtoFBjsoQHaEn&pid=Api&P=0&h=220 "className='homeimage'/></div></div></div></div>
</main>
    
    </>
  )
}

export default Home