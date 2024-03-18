import React from 'react';
import Navbar from './Navbar';
import Grouped from './secondary/Grouped';
import ComboBox from './secondary/ComboBox';
import Fuel from './secondary/Fuel';
import Nisanqashqai from '../src/images/nissancqashqai.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Nisanqashqai2 from '../src/images/nissancqashqai2.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';

const SUVsPage = () => {

  const[img,setImg]=useState(null)

  const nextImg =(contentId)=>{
    setImg(img === contentId ? null :contentId )
  }

  return (
    <div className="suv-page">
      <Navbar/>
      <div className="empty2"></div>
      <div style={{alignItems:'start'}} className="flex flex-col justify-start items-start">
    <h1 className='Intro ml-4 text-center'>SUVs</h1>
    <h1 className='ml-4 text-center'>Let us help you find your perfect new car </h1>
      </div>
      <div className="flex gap-2 mt-12">
        <Grouped/>
        <ComboBox/>
        <Fuel/>
        <button className='bb items-center self-center'> Clear All</button>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-8">
                <div className="card1 flex flex-col items-center mt-6">
                  <img   width='150px' src={Nisanqashqai2} alt="" />
               <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>Nissan Juke</h2>
               <div className="flex mt-6">
                <h3 style={{fontWeight:700,fontSize:17,color:'#040316'}}>Fuel :</h3>
                <p>Petrol</p>
               </div>
               <div className="flex mt-2">
                <h3 style={{fontWeight:700,fontSize:17,color:'#040316'}}>Price :</h3>
                <p className='text-center'>18,618$</p>
               </div>
               <p className="text-center items-center mt-4">Sleek small SUV with lots of tech </p>
               <div className="flex gap-4 mt-4">
                <button className='bb'><ShoppingCartIcon/>Buy Now</button>
                <button className='bb'><AddToPhotosIcon/> WishList</button>
               </div>
                </div>
                <div className="card2 flex flex-col items-center mt-6">
                   
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>World Wide</h2>
               <p className="text-center items-center mt-6">Our services can be applied in 156 countries so choosing the car cannot be a problem for you </p>
                </div>
                <div className="card3 flex flex-col items-center mt-6">
                    
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>Secure</h2>
               <p className="text-center items-center mt-6">Opportunities we offer needs to be secure so you can choose the car safely without problems </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-8">
                <div className="card1 flex flex-col items-center mt-6">
             
               <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>It's Simple</h2>
               <p className="text-center items-center mt-6">Push a few buttons and there you have it ! Your very own choosen car with all the specs inside </p>
                </div>
                <div className="card2 flex flex-col items-center mt-6">
                   
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>World Wide</h2>
               <p className="text-center items-center mt-6">Our services can be applied in 156 countries so choosing the car cannot be a problem for you </p>
                </div>
                <div className="card3 flex flex-col items-center mt-6">
                    
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>Secure</h2>
               <p className="text-center items-center mt-6">Opportunities we offer needs to be secure so you can choose the car safely without problems </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-8">
                <div className="card1 flex flex-col items-center mt-6">
             
               <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>It's Simple</h2>
               <p className="text-center items-center mt-6">Push a few buttons and there you have it ! Your very own choosen car with all the specs inside </p>
                </div>
                <div className="card2 flex flex-col items-center mt-6">
                   
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>World Wide</h2>
               <p className="text-center items-center mt-6">Our services can be applied in 156 countries so choosing the car cannot be a problem for you </p>
                </div>
                <div className="card3 flex flex-col items-center mt-6">
                    
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>Secure</h2>
               <p className="text-center items-center mt-6">Opportunities we offer needs to be secure so you can choose the car safely without problems </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-8">
                <div className="card1 flex flex-col items-center mt-6">
             
               <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>It's Simple</h2>
               <p className="text-center items-center mt-6">Push a few buttons and there you have it ! Your very own choosen car with all the specs inside </p>
                </div>
                <div className="card2 flex flex-col items-center mt-6">
                   
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>World Wide</h2>
               <p className="text-center items-center mt-6">Our services can be applied in 156 countries so choosing the car cannot be a problem for you </p>
                </div>
                <div className="card3 flex flex-col items-center mt-6">
                    
                    <h2 style={{fontWeight:700,fontSize:20,color:'#040316'}}>Secure</h2>
               <p className="text-center items-center mt-6">Opportunities we offer needs to be secure so you can choose the car safely without problems </p>
                </div>
            </div>
    </div>
  );
}

export default SUVsPage;