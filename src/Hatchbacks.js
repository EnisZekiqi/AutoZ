import React from 'react';
import Navbar from './Navbar';

import clio from '../src/hatchbackimages/clio.webp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import yaris from '../src/hatchbackimages/yaris.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import aygo from '../src/hatchbackimages/aygo.webp'
import leaf from '../src/hatchbackimages/leaf.webp'
import micra from '../src/hatchbackimages/micra.webp'
import a1 from '../src/hatchbackimages/a1.webp'
import series1 from '../src/hatchbackimages/series1.webp'
import fiesta from '../src/hatchbackimages/fiesta.webp'
import jazz from '../src/hatchbackimages/jazz.webp'
import a3 from '../src/hatchbackimages/a3.webp'
import aclass from '../src/hatchbackimages/aclass.webp'
import hondae from '../src/hatchbackimages/hondae.webp'
import ID3 from '../src/hatchbackimages/ID3.webp'
import polo from '../src/hatchbackimages/polo.webp'
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import focus from '../src/hatchbackimages/focus.webp'
import golf8 from '../src/hatchbackimages/golf8.webp'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import WishList from './Messages/WishList';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
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

const Hatchbacks = () => {
    const [open, setOpen] =useState(false);

  const handleClick = () => {
    setOpen(true);
    setAdded(true)
    setEmpty(false)
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
  { title: 'Renault Clio', brand: 'Renault', fuel: 'Petrol', price: '15,449$',description:'Big-booted supermini polished cabin', image: clio},
  { title: 'Toyota Aygo X', brand: 'Toyota', fuel: 'Diesel', price: '14,612$',description:'Stylish spacious baby SUV', image: aygo },
  { title: 'Nissan Leaf', brand: 'Nissan', fuel: 'Electric', price: '23,044$',description:'Electric family car', image: leaf },
  { title: 'Volkswagen Polo', brand: 'Volkswagen', fuel: 'Petrol', price: '19,824$',description:'Small family classy car', image: polo },
  { title: 'Volkswagen Golf', brand: 'Volkswagen', fuel: 'Petrol', price: '26,044$',description:'family-comfortable car', image: golf8 },
  { title: 'Nissan Micra', brand: 'Nissan', fuel: 'Diesel', price: '31.105$',description:'Comfortable stylish car', image: micra },
  { title: 'Audi A1', brand: 'Audi', fuel: 'Petrol', price: '33.641$',description:'Posh small car with lots of kit', image: a1},
  { title: 'Toyota Yaris', brand: 'Toyota', fuel: 'Electric', price: '28.327$',description:'Small hybric sporty car', image: yaris},
  { title: 'BMW 1 Series', brand: 'BMW', fuel: 'Diesel', price: '27,414$',description:'High end high tech hatchback ', image: series1},
  { title: 'Ford Fiesta', brand: 'Ford', fuel: 'Diesel', price: '22.455$',description:'Good value small car', image: fiesta},
  { title: 'Honda Jazz', brand: 'Honda', fuel: 'Electric', price: '25.125$',description:'Spacious electric hatchback ', image: jazz},
  { title: 'Audi A3', brand: 'Audi', fuel: 'Petrol', price: '32.321$',description:'High-tech upmarket hatchback', image: a3},
  { title: 'Mercedes A-Class ', brand: 'Mercedes', fuel: 'Petrol', price: '30.448$',description:'Well-appointed premium hatchback', image: aclass},
  { title: 'Ford Focus ST', brand: 'Ford', fuel: 'Petrol', price: '36.058$',description:'Powerful hot-hatch', image: focus},
  { title: 'Honda e', brand: 'Honda', fuel: 'Electric', price: '29.998$',description:'Funky all-electric hatchback', image: hondae},
  { title: 'Volkswagen ID3', brand: 'Volkswagen', fuel: 'Electric', price: '33.998$',description:'Volkswagen first electric car ', image: ID3},
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



  return (
    <div className="suv-page">
      <div className="Navbar pt-4 flex justify-between">
            <div className="flex items-center">
                <GraphicEqIcon className='generalicon' style={{width:40}}/>
            <h1 style={{color:'#040316'}} className="text-3xl font-bold ">AutoZ</h1>
            </div>
            <div id='sho' className="flex items-center" >
                <li style={{color:'#040316'}} className='px-4 font-semibold'> <a href="#about">About</a></li>
                <li  style={{color:'#040316'}} className='px-4 font-semibold'><a href="#vehicle">Vehicle Models</a></li>
                <li style={{color:'#040316'}} className='px-4 font-semibold'> <a href="#contact">Contact</a></li>
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
                <div className='dot animate-ping'>
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
                        {added && <WishList/> }
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
                style={{color:'#040316'}} id='li' className='px-4 font-semibold'>Buy a Car</motion.li>
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
            style={{color:'#040316'}} className='px-4 font-semibold'>Car Reviews</motion.li>
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
    <h1 className='Intro ml-4 text-center'>Hatchbacks</h1>
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
        options={['14,612$' ,'15,449$','18,618$','17,652$','19,824$', '20,000$', '22,500$','22.455$','25.125$','26,044$','27,414$','28.327$','29.998$','30.448$','31.105$','32.321$','33.641$','33.998$','36.058$','42,824$','44.125$', 'other prices...']} // Sample prices
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
                  <Button style={{color:'#DDDBFF',backgroundColor:'#2F27CE',fontWeight:700}} className="bb" onClick={handleClick}><AddToPhotosIcon/>Wishlist</Button>
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
 
export default Hatchbacks;