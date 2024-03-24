import React from 'react';
import Navbar from './Navbar';

import a4 from '../src/saloons/a4.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import yaris from '../src/hatchbackimages/yaris.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import a6 from '../src/saloons/a6.webp'
import serie3 from '../src/saloons/serie3.webp'
import model3 from '../src/saloons/model3.webp'
import asaloon from '../src/saloons/asaloon.webp'
import arteon from '../src/saloons/arteon.webp'
import a7 from '../src/saloons/a7.webp'
import i5 from '../src/saloons/i5.webp'
import a3 from '../src/hatchbackimages/a3.webp'
import aclass from '../src/hatchbackimages/aclass.webp'
import hondae from '../src/hatchbackimages/hondae.webp'
import ID3 from '../src/hatchbackimages/ID3.webp'
import id7 from '../src/saloons/id7.webp'
import { motion,AnimatePresence } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import focus from '../src/hatchbackimages/focus.webp'
import panamera from '../src/saloons/panamera.webp'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import serie5 from '../src/saloons/serie5.webp'
import WishList from './Messages/WishList';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import i4 from '../src/saloons/i4.webp'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Success from './Messages/Success';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Alert from '@mui/material/Alert';



const Saloons = () => {
    const [open, setOpen] =useState(false);
    const [addedCarTitle,setAddedCarTitle]=useState('');

  const handleClick = (car) => {
    setOpen(true);
    setAdded(true)
    setEmpty(false)
    setAddedCarTitle(car.title)
  };
  const [empty,setEmpty]=useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const[img,setImg]=useState(null);

  const nextImg =(contentId)=>{
    setImg(img === contentId ? null :contentId )
  }


 
const cars = [
  { title: 'Audi A4', brand: 'Audi', fuel: 'Diesel', price: '34,449$',description:'Plush saloon best all-rounder', image: a4},
  { title: 'Audi A6', brand: 'Audi', fuel: 'Diesel', price: '40,612$',description:'Hugely practical saloon car', image: a6 },
  { title: 'BMW 3 Series', brand: 'BMW', fuel: 'Petrol', price: '36,058$',description:'Practical well0built family car', image: serie3 },
  { title: 'Volkswagen ID7', brand: 'Volkswagen', fuel: 'Electric', price: '51,824$',description:'Sporty-looking electric saloon', image: id7 },
  { title: 'BMW 5 Series', brand: 'BMW', fuel: 'Petrol', price: '46,044$',description:'Executive saloon with petrol power', image: serie5 },
  { title: 'Tesla Model 3', brand: 'Tesla', fuel: 'Electric', price: '39.105$',description:'High-tech electric car', image: model3 },
  { title: 'Porsche Panamera', brand: 'Porsche', fuel: 'Petrol', price: '53.641$',description:'Powerful luxury saloon', image: panamera},
  { title: 'Mercedes A-Class Saloon', brand: 'Mercedes', fuel: 'Diesel', price: '28.327$',description:'small stylish saloon', image: asaloon},
  { title: 'Volkswagen Arteon', brand: 'Volkswagen', fuel: 'Petrol', price: '37,414$',description:'A Passat with coupe styling ', image: arteon},
  { title: 'BMW i4', brand: 'BMW', fuel: 'Electric', price: '42.455$',description:'Capable electric saloon car', image: i4},
  { title: 'Audi A7', brand: 'Audi', fuel: 'Petrol', price: '55.125$',description:'Stylish-practical saloon', image: a7},
  { title: 'Bmw i5', brand: 'Bmw', fuel: 'Electric', price: '59.321$',description:'Posh electric family car', image: i5},
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


const [state, setState] = useState({
  right: false,
});
const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

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

const [added,setAdded]=useState(false)

const [hide,setHide]=useState(null)

const[isClicked,setIsClicked]=useState(null)

const [showInbox,setShowInbox] =useState(false)

const openInbox = (contentId)=>{
  setShowInbox(true)
  setIsClicked(isClicked === contentId ? null : contentId)
}

const closeInbox  =(contentId) =>{
  setShowInbox(false)
  setIsClicked(isClicked === contentId ? null : contentId)
} 

const clearInbox = () => {
    setAdded(false)
    setEmpty(true)
};


const [openo,setOpeno] =useState (false);
const [open1,setOpen1]=useState(false);
const [open2,setOpen2]=useState(false);

  return (
    <div className="suv-page">
      <div className="Navbar pt-4 flex justify-between">
            <div className="flex items-center">
                <GraphicEqIcon className='generalicon' style={{width:40}}/>
            <h1 style={{color:'#040316'}} className="text-3xl font-bold ">AutoZ</h1>
            </div>
            <div id='sho' className="flex items-center" >
            <div
              onMouseEnter={()=>setOpeno(true)}
              onMouseLeave={()=>setOpeno(false)}
               className="group relative h-fit w-fit items-center">
              <li style={{color:'#040316'}} className='px-4 font-semibold'> <a href="#about">About us</a></li>
                <span 
                style={{
                  transform: openo ? "scaleX(1)": "scaleX(0)"
                }}
                className='vija absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                  <AnimatePresence>
                      {openo && (
                    <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-25%" }}
                    className='absolute'
                    >
                      <div className="absolute top-2 left-0 right-0 h-8 bg-transparent" />
                      <div className="moretext-about flex">
                        <div className="abouttt flex flex-col text-center">
                          <h3 className='font-bold text-xl mt-4'>About us</h3>
                          <p className='font-normal text-sm mt-4 pl-2 pr-2'>AutoZ started at 2024 in Kosovo with very passion about cars </p>
                        </div>
                        <div className="kallxoja flex ml-4 items-center">
                          <div className="kallxoja1 flex flex-col">
                            <div className="flex items-center mb-2 justify-center font-semibold"><LocationOnIcon sx={{ color:"#2F27CE" }}/>Location</div>
                            <p className='text-center pl-2 pr-2'>City: Vushtrri</p>
                            <p className='text-center pl-2 pr-2'>Country: Kosovo</p>
                            <p className='text-center '>Street: Faruk Beqiri</p>
                          </div>
                        </div>
                        <div className="kallxoja flex ml-4 items-center pr-4">
                          <div className="kallxoja1 flex flex-col">
                            <div className="flex items-center mb-2 justify-center font-semibold">< MiscellaneousServicesIcon sx={{ color:"#2F27CE" }}/>Services</div>
                            <p className='text-center pl-2 pr-2'>Buy a Car</p>
                            <p className='text-center pl-2 pr-2'>Find a Car</p>
                            <p className='text-center '>Car Reviews</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    )}
                  </AnimatePresence>
              </div> 
              <div
              onMouseEnter={() => setOpen1(true)} onMouseLeave={() => setOpen1(false)}
              className="group relative">
                <li style={{ color: '#040316' }} className='px-4 font-semibold '>
                  <a href="#vehicle">
                    Vehicle Models
                    <div className="absolute top-2 left-0 right-0 h-8 bg-transparent" />
                  </a>
                  <span
                  style={{
                    transform: open1 ? "scaleX(1)" : "scaleX(0)"
                  }}
                  className='vija absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'
                ></span>
                </li>
                <AnimatePresence>
                {open1 && (
                  <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  style={{ translateX: "-25%" }}
                  className='absolute'>
                     <div className="absolute top-2 left-0 right-0 h-8 bg-transparent" />
                     <div className="moretext left-2 -bottom-10 text-sm text-gray-600">
                     <div className="vehicle3 flex  overflow-y-hidden justify-evenly ">
                      <div className="flex flex-col gap-4">
                      <motion.a
                     initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      href="/suvs" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center mt-8 font-semibold">SUVs</p>
                      </motion.a>
                      <motion.a
                      initial={{opacity:0, y: 15}}
                      whileInView={{ opacity:1, y: 0  }}
                      href="/hatchbacks" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center font-semibold">Hatchbacks</p>
                      </motion.a>
                      <motion.a
                      initial={{opacity:0, y: 15}}
                      whileInView={{ opacity:1, y: 0  }}
                      href="/saloons" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center font-semibold">Saloons</p>
                      </motion.a>
                      </div>
                      <div className="flex flex-col gap-4">
                      <motion.a
                      initial={{opacity:0, y: 15}}
                      whileInView={{ opacity:1, y: 0  }}
                      href="/coupes" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center mt-8 font-semibold">Coupes</p>
                      </motion.a>
                      <motion.a
                      initial={{opacity:0, y: 15}}
                      whileInView={{ opacity:1, y: 0  }}
                      href="/estates" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center font-semibold">Estates</p>
                      </motion.a>
                      <motion.a
                      initial={{opacity:0, y: 15}}
                      whileInView={{ opacity:1, y: 0  }}
                      href="/sportscar" className="">
                      <p style={{fontSize:18,color:'#040316'}} className="suvx text-center font-semibold">Sports cars</p>
                      </motion.a>
                      </div>
                    </div>
                      </div>
                  </motion.div>
                )}
                </AnimatePresence>
               </div>
               <div
                    onMouseEnter={()=>setOpen2(true)}
                    onMouseLeave={()=>setOpen2(false)}
                    className='group relative h-fit w-fit items-center '>
                    <li style={{color:'#040316'}} className='px-4 font-semibold'> <a href="#contact">Contact</a></li>
                    <span 
                      style={{
                        transform: open2 ? "scaleX(1)": "scaleX(0)"
                      }}
                      className='vija absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
            </div>
            <div className="flex items-center">
            <Tooltip title="Home">
               <a href="/"> <IconButton  className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <HomeIcon style={{width:30,color:'#040316'}} />
                </IconButton></a>
            </Tooltip>
            <Tooltip title="Log In">
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <AccountBoxIcon style={{width:30,color:'#040316'}} />
                </IconButton>
            </Tooltip>
                <div    className={`inbox-container  flex flex-col items-center ${isClicked === 'first' ? 'clicked3' : ''}${isClicked === 'second' ? 'clicked4' : ''}`}>
                <Tooltip title="Inbox">
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} id='first' onClick={()=>openInbox ('first')} style={{width:'fit-content',marginBottom:0}}>
                <InboxIcon style={{width:30,color:'#040316'}}/>
                {added && 
                <div className='dot '>
                    <div className="dot1 animate-ping"></div>
                </div>
                }
                </IconButton>
            </Tooltip>
                {showInbox && (
                <div 
                onClick={()=>closeInbox('second')}
                className={`flex flex-col items-start  flex flex-col items-center ${isClicked === 'first' ? 'clicked5' : ''}${isClicked === 'second' ? 'clicked6' : ''}`} >
                    <motion.div
                    variants={varianti}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className='inboxshowed flex flex-col justify-center items-center gap-14'>
                       <h2 style={{color:'#040316',fontSize:22}} className='font-semibold'>Inbox</h2>
                        <div className={`hide ${isClicked === 'second' ? 'clicked' : ''}`}>
                        {empty && <p>The Inbox is empty</p>}
                        {added && <Alert
                      severity="success"
                      variant="filled"
                      sx={{ backgroundColor:"#2F27CE",borderRadius:10 }}
                    >
                    <p>{`Added "${addedCarTitle}" to Wishlist`}</p>
                    </Alert> }
                        </div>
                          <div className="flex gap-2">
                          <button id='second' onClick={()=>closeInbox('second')} className='bb'>Close</button>
                        <button className='bb' onClick={()=>clearInbox('second')}>Clear</button>
                          </div>
                    </motion.div>
                </div>
            )}
                </div>

            <Tooltip title="Menu" onClick={toggleDrawer('right', true)}>
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <MenuIcon style={{width:30,color:'#040316'}} />
                </IconButton>
            </Tooltip>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className='flex justify-center'  style={{ width: 250}}>
          <List >
          <div className="flex items-center justify-center mb-8">
            <h1 style={{color:'#040316'}} className="text-3xl font-bold ">AutoZ</h1>
            </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 20
                  }}
                >
                <ListItem button color='primary'>
                <motion.li 
                variants={varianti}
                initial="initial"
                whileInView="animate" 
                viewport={{ once: true }}
                style={{color:'#040316'}} id='li' className='px-4 font-semibold'><a href="buycar">Buy a Car</a></motion.li>
                </ListItem>
                </motion.div>
            <motion.div
             whileHover={{ scale: 1.1 }}
             transition={{
               type: "spring",
               stiffness: 160,
               damping: 20
             }}
            >
            <ListItem button>
            <motion.li 
            variants={varianti}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            style={{color:'#040316'}} className='px-4 font-semibold'><a href="carreviews">Car Reviews</a></motion.li>
            </ListItem>
            </motion.div>
             <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 20
              }}
             >
            <ListItem button>
            <motion.li
            variants={varianti}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            style={{color:'#040316'}} className='px-4 font-semibold'>Electric Cars</motion.li>
            </ListItem>
             </motion.div>

            <div className="smallsho">
              <motion.div
               whileHover={{ scale: 1.1 }}
               transition={{
                 type: "spring",
                 stiffness: 160,
                 damping: 20
               }}
              >
            <ListItem button>
            <motion.li
            variants={varianti}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            style={{color:'#040316'}} className='px-4 font-semibold'><a href="#about">About</a></motion.li>
            </ListItem>
              </motion.div>
               <motion.div
               whileHover={{ scale: 1.1 }}
               transition={{
                 type: "spring",
                 stiffness: 160,
                 damping: 20
               }}
               >
            <ListItem button>
            <motion.li
            variants={varianti}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            style={{color:'#040316'}} className='px-4 font-semibold'><a href="#vehicle">Vehicle Models</a></motion.li>
            </ListItem>
               </motion.div>
               <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 20
                }}
               >
             <ListItem button>
            <motion.li
            variants={varianti}
            initial="initial"
            whileInView="animate" 
            viewport={{ once: true }}
            style={{color:'#040316'}} className='px-4 font-semibold'><a href="#contact">Contact</a></motion.li>
            </ListItem>
               </motion.div>
            </div>
          </List>
        </div>
      </Drawer>
            </div>
        </div>
      <div className="empty2"></div>
      <div style={{alignItems:'start'}} className="flex flex-col justify-start items-start">
    <h1 className='Intro ml-4 text-center'>Saloons</h1>
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
        options={[,'34,449$','37,414$','39.105$','40,612$','42.455$','46,044$','51,824$','53.641$','55.125$','59.321$', 'other prices...']} // Sample prices
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
                  <Button style={{color:'#DDDBFF',backgroundColor:'#2F27CE',fontWeight:700}} className="bb"  onClick={()=>handleClick(car)}><AddToPhotosIcon/>Wishlist</Button>
                  <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert
                      
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ backgroundColor:"#2F27CE",borderRadius:10 }}
                    >
                    <p>{`Added "${addedCarTitle}" to Wishlist`}</p>
                    </Alert>
                  </Snackbar>
                </div>
                </div>
              </div>
            ))}
                
            </div>
    </div>
  );
}
 
export default Saloons;