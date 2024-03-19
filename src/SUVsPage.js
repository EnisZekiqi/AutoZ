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
import renaultcaptur from '../src/images/renaultcaptur.webp'
import Tcross from '../src/images/Tcross.webp'
import yariscross from '../src/images/yariscross.webp'
import puma from '../src/images/puma.webp'
import astral from '../src/images/astral.webp'
import tiguan from '../src/images/tiguan.webp'
import Hrv from '../src/images/Hrv.webp'
import q2 from '../src/images/q2.webp'
import x1 from '../src/images/x1.webp'
import teslay from '../src/images/teslay.webp'
import macan from '../src/images/macan.webp'
import glb from '../src/images/glb.webp'
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import xm from '../src/images/xm.webp'
import q8 from '../src/images/q8.webp'
import ix from '../src/images/ix.webp'
import golf from '../src/images/golf.webp'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const SUVsPage = () => {
  const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const[img,setImg]=useState(null)
  

  const nextImg =(contentId)=>{
    setImg(img === contentId ? null :contentId )
  }
  const varianti={
    initial :{
        y:-60,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        tranisition:{
            duration:2,
            delayChildren: 0.3,
            staggerChildren:1
        }
    }

}
const cars = [
  { title: 'Nissan Juke', brand: 'Nissan', fuel: 'Petrol', price: '18,618$',description:'Sleek small SUV with lots of tech', image: Nisanqashqai2 },
  { title: 'Renault Captur', brand: 'Renault', fuel: 'Diesel', price: '17,652$',description:'Stylish SUV with economic Diesel', image: renaultcaptur },
  { title: 'Toyota Yaris Cross', brand: 'Toyota', fuel: 'Diesel', price: '23,044$',description:'SUV with economic engine', image: yariscross },
  { title: 'Mercedes GLB', brand: 'Mercedes', fuel: 'Diesel', price: '42,824$',description:'Stylish 7 people SUV', image: glb },
  { title: 'Ford Puma', brand: 'Ford', fuel: 'Petrol', price: '26,044$',description:'Head-turning,fun-to-drive SUV', image: puma },
  { title: 'Renault Astral', brand: 'Renault', fuel: 'Electric', price: '31.105$',description:'Mid-size hybrid SUV', image: astral },
  { title: 'Volkswagen Tiguan', brand: 'Volkswagen', fuel: 'Petrol', price: '33.641$',description:'Practical,high-tech SUV', image: tiguan},
  { title: 'Honda HR-V', brand: 'Honda', fuel: 'Electric', price: '28.327$',description:'Rooomy family SUV ', image: Hrv},
  { title: 'Audi Q2', brand: 'Audi', fuel: 'Petrol', price: '27,414$',description:'Good-looking small SUV ', image: q2},
  { title: 'BMW X1', brand: 'BMW', fuel: 'Petrol', price: '37.455$',description:'Quality family SUV ', image: x1},
  { title: 'Tesla Model Y', brand: 'Tesla', fuel: 'Electric', price: '44.125$',description:'High performance electric SUV ', image: teslay},
  { title: 'Porsche Macan', brand: 'Porsche', fuel: 'Petrol', price: '52.321$',description:'Stylish SUV that drives like sports-car', image: macan},
  { title: 'BMW XM ', brand: 'BMW', fuel: 'Petrol', price: '99.448$',description:'M-exlusive SUV with performance', image: xm},
  { title: 'Audi Q8', brand: 'Audi', fuel: 'Petrol', price: '104.058$',description:'V8 large luxury Suv', image: q8},
  { title: 'BMW iX', brand: 'BMW', fuel: 'Electric', price: '63.998$',description:'Practical electric SUV', image: ix},
  { title: 'Volkswagen Golf Alltrack', brand: 'Volkswagen', fuel: 'Diesel', price: '33.998$',description:'High-riding estate four-wheel drive', image: golf},
  // Add more car data as needed
];
const [selectedBrand, setSelectedBrand] = useState('');
const [selectedPrice, setSelectedPrice] = useState('');
const [selectedFuel, setSelectedFuel] = useState('');
const [description,setDescription]=useState('');
const filteredCars = cars.filter(car => {
  return (
    (!selectedBrand || car.brand === selectedBrand) &&
    (!selectedPrice || car.price === selectedPrice) &&
    (!selectedFuel || car.fuel === selectedFuel) &&
    (!description || car.description === description)
  );
});

const clearall =()=>{
  setSelectedBrand('')
  setSelectedFuel('')
  setSelectedPrice('')
}

  return (
    <div className="suv-page">
      <Navbar/>
      <div className="empty2"></div>
      <div style={{alignItems:'start'}} className="flex flex-col justify-start items-start">
    <h1 className='Intro ml-4 text-center'>SUVs</h1>
    <h1 className='ml-4 text-center'>Let us help you find your perfect new car </h1>
      </div>
      <div className="flex gap-2 mt-12 ml-4">
      <Autocomplete
        id="brand-autocomplete"
        options={['Nissan', 'Ford', 'Honda', 'Ferrari', 'Toyota', 'Renault', 'Tesla','Mercedes','Porsche','Volkswagen','Audi','BMW','Tesla']} // Sample brands
        renderInput={(params) => <TextField {...params} style={{width:150}} InputLabelProps={{ style: { marginRight: '50px' } }}  label="Brand" />}
        onChange={(event, newValue) => {
          setSelectedBrand(newValue);
        }}
      />
        <Autocomplete
        id="price-autocomplete"
        options={['18,618$','17,652$', '20,000$', '22,500$','26,044$','27,414$','28.327$','31.105$','33.641$','33.998$','42,824$','44.125$','52.321$','63.998$','99.448$','104.058$', 'other prices...']} // Sample prices
        renderInput={(params) => <TextField {...params} style={{width:150}} label="Price" />}
        onChange={(event, newValue) => {
          setSelectedPrice(newValue);
        }}
      />
        <Autocomplete
        id="fuel-autocomplete"
        options={['Petrol', 'Diesel', 'Electric', 'other fuels...']} // Sample fuels
        renderInput={(params) => <TextField {...params} style={{width:150}} label="Fuel" />}
        onChange={(event, newValue) => {
          setSelectedFuel(newValue);
        }}
      />
        <button onClick={clearall} className='bb items-center self-center'> Clear All</button>
      </div>
      <div style={{flexWrap:'wrap'}} className="flex flex-col lg:flex-row items-center md:justify-evenly mt-8">
            {filteredCars.map(car => (
              <div key={car.title} className="card1 flex flex-col items-center mt-6">
                <img src={car.image} width='150px' alt="" />
                <h2 style={{ fontWeight: 700, fontSize: 20, color: '#040316' }}>{car.title}</h2>
                <div className="flex mt-6">
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: '#040316' }}>Fuel :</h3>
                  <p>{car.fuel}</p>
                </div>
                <div className="flex mt-2">
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: '#040316' }}>Price :</h3>
                  <p className='text-center'>{car.price}</p>
                </div>
                <p className="text-center items-center mt-4">{car.description} </p>
                <div className="flex gap-4 mt-4">
                  <button className='bb'><ShoppingCartIcon /> Buy Now</button>
                  <div>
                  <Button style={{color:'#DDDBFF',backgroundColor:'#2F27CE'}} className="bb" onClick={handleClick}><AddToPhotosIcon/>Wishlist</Button>
                  <Snackbar
                    open={open}
                    style={{backgroundColor:'#443DFF'}}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    message="Added to Wishlist"
                    
                  />
                </div>
                </div>
              </div>
            ))}
                
            </div>
    </div>
  );
}

export default SUVsPage;