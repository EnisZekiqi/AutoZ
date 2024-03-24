
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import anash1 from '..//src/saloons/anash1.webp'
import Drawer from '@mui/material/Drawer';
import a3 from '../src/hatchbackimages/a3.webp'
import List from '@mui/material/List';
import series1 from './hatchbackimages/series1.webp'
import ListItem from '@mui/material/ListItem';
import yaris from './hatchbackimages/yaris.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import a444e from '..//src/saloons/a444e.png'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { motion ,AnimatePresence} from 'framer-motion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const varianti={
    initial :{
        y:100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        tranisition:{
            duration:1,
            staggerChildren:0.1
        }
    }

}

const Carreviews = () => {

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
        setHide(false)
      };
      
      const [open,setOpen] =useState (false);
      const [open1,setOpen1]=useState(false);
      const [open2,setOpen2]=useState(false);

      const [small,setSmall]=useState(true);
      const [smallContent,setSmallContent]=useState(false)
      const [medium,setMedium]=useState(true);
      const [mediumContent,setMediumContent]=useState(false)
      const [big,setBig]=useState(true);
      const [bigContent,setBigContent]=useState(false);
      

        const [showbutton,setShowbutton]=useState(false)
        const [hidebutton,setHidebutton]=useState(true)

      const showSmall = (contentId)=>{
        setMedium(false)
        setBig(false)
        setSmall(true)
        setSmallContent(true)
        setHidebutton(false)
        setShowbutton(true)
      }

      const hideSmall =() =>{
        setMedium(true)
        setBig(true)
        setSmall(true)
        setSmallContent(false)
        setHidebutton(true)
        setShowbutton(false)
      }

    return ( 
     <div className="carreview">
          <div className="Navbar pt-4 flex justify-between">
            <div className="flex items-center">
                <GraphicEqIcon className='generalicon' sx={{color:"#DDDBFF"}} style={{width:40}}/>
            <h1 style={{color:'#DDDBFF'}} className="text-3xl font-bold ">AutoZ</h1>
            </div>
            <div id='sho' className="flex items-center" >
              <div
              onMouseEnter={()=>setOpen(true)}
              onMouseLeave={()=>setOpen(false)}
               className="group relative h-fit w-fit items-center">
              <li style={{color:'#DDDBFF'}} className='px-4 font-semibold'> <a href="#about">About us</a></li>
                <span 
                style={{
                  transform: open ? "scaleX(1)": "scaleX(0)"
                }}
                className='vija2 absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                  <AnimatePresence>
                      {open && (
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
                <li style={{ color: '#DDDBFF' }} className='px-4 font-semibold '>
                  <a href="#vehicle">
                    Vehicle Models
                    <div className="absolute top-2 left-0 right-0 h-8 bg-transparent" />
                  </a>
                  <span
                  style={{
                    transform: open1 ? "scaleX(1)" : "scaleX(0)"
                  }}
                  className='vija2 absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'
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
                      href="/saloons" className="">
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
                    <li style={{color:'#DDDBFF'}} className='px-4 font-semibold'> <a href="#contact">Contact</a></li>
                    <span 
                      style={{
                        transform: open2 ? "scaleX(1)": "scaleX(0)"
                      }}
                      className='vija2 absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>

            </div>
            <div className="flex items-center">
            <Tooltip title="Home">
               <a href="/"> <IconButton  className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <HomeIcon style={{width:30,color:'#DDDBFF'}} />
                </IconButton></a>
            </Tooltip>
            <Tooltip title="Log In">
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <AccountBoxIcon style={{width:30,color:'#DDDBFF'}} />
                </IconButton>
            </Tooltip>
                <div    className={`inbox-container  flex flex-col items-center ${isClicked === 'first' ? 'clicked3' : ''}${isClicked === 'second' ? 'clicked4' : ''}`}>
                <Tooltip title="Inbox">
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} id='first' onClick={()=>openInbox ('first')} style={{width:'fit-content',marginBottom:0}}>
                <InboxIcon style={{width:30,color:'#DDDBFF'}}/>
               
                </IconButton>
            </Tooltip>
                {showInbox && (
                <div 
                onClick={()=>closeInbox('second')}
                className={`flex flex-col items-start  flex flex-col items-center ${isClicked === 'first' ? 'clicked5' : ''}${isClicked === 'second' ? 'clicked6' : ''}`} >
                  <AnimatePresence>
                  <motion.div
                    variants={varianti}
                    initial="initial"
                    animate="animate"
                    exit={{y:-60,opacity:0}}
                    className='inboxshowed flex flex-col justify-center items-center gap-14'>
                       <h2 style={{color:'#040316',fontSize:22}} className='font-semibold'>Inbox</h2>
                        <div className={`hide ${isClicked === 'second' ? 'clicked' : ''}`}>
                       
                        </div>
                          <div className="flex gap-2">
                          <button id='second' onClick={()=>closeInbox('second')} className='bb'>Close</button>
                        <button className='bb' onClick={()=>closeInbox('second')}>Clear</button>
                          </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
            )}
                </div>

            <Tooltip title="Menu" onClick={toggleDrawer('right', true)}>
                <IconButton className={`bw ${isClicked === 'first' ? 'clicked' : ''}${isClicked === 'second' ? 'clicked2' : ''}`} style={{width:'fit-content'}}>
                    <MenuIcon style={{width:30,color:'#DDDBFF'}} />
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
         <div className="content-review">
            <div className="empty3"></div>
            <div className=" flex justify-start ml-24 -mt-4">
                <div className="flex flex-col">
                <h1 className="Intro2" >Car Reviews </h1>
                <div style={{color:'#DDDBFF'}} className="paragraph mt-2 text-center">
                <p>Find your perfect new car by browsing our</p>
                <p>informative car reviews</p>
                    <div className="iconso flex justify-center gap-8 mt-4 ">
                       <div className="flex gap-2"> <YouTubeIcon sx={{color:"#DDDBFF"}}/><p>9.08M</p></div>
                       <div className="flex gap-2"><InstagramIcon  sx={{color:"#DDDBFF"}}/> <p>1.41M</p></div>
                       <div className="flex gap-2"><FacebookIcon sx={{color:"#DDDBFF"}}/> <p>1.46M</p></div>
                    </div>
                </div>
            </div>
            </div>
                <div className="flex justify-end">
                <div className="img">
                <img width="350px" height="350px" src={a444e} alt="" />
                 </div>
                </div>
        </div>
        <div className="content-review2">
                    <div className="flex gap-4 ml-44 mt-12">
                       <div className="flex gap-2"> <p style={{color:"#2F27CE"}}>Rated</p> <p className="font-semibold">4.6/5</p></div>
                       <div className="flex gap-2">  <p  className="">from</p> <p className="font-semibold"> 52,117 reviews</p></div>
                    </div>
                    <div className="mt-10 ml-24">
                    <h1  style={{fontWeight:700,fontSize:25,color:'#2F27CE'}} className="">Reviews by car type </h1>
                        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch mt-12">
                                {small &&
                                 <motion.div
                                 variants={varianti}
                                 initial="initial"
                                 whileInView="animate"
                                 whileHover={{ scale: 1.1 }}
                                 viewport={{ once: true }}
                                 className="cardx1 flex flex-col items-center ">
                                 <img src={anash1} alt="" />
                              {hidebutton &&
                               <motion.button   initial={{ scale: 0,opacity:0 }}
                               animate={{ scale: 1 ,opacity:1}}
                             id="first" onClick={()=>showSmall('first')}  className={`bbo ${isClicked === 'first' ? 'bbo2' : ''}`}> <p className="text-center font-semibold">Small Cars</p></motion.button>
                              }
                              {showbutton && 
                              <motion.button   initial={{ scale: 0,opacity:0 }}
                              animate={{ scale: 1 ,opacity:1}}
                            id="first" onClick={()=>hideSmall('first')}  className={`bbo ${isClicked === 'first' ? 'bbo2' : ''}`}> <p className="text-center font-semibold">Back</p></motion.button>
                              }
                                </motion.div>
                                }
                                 {smallContent && 
                                    <div className="flex flex-col md:flex-row gap-4">
                                      <motion.div 
                                       variants={varianti}
                                       initial="initial"
                                       whileInView="animate"
                                      className="smallContent mt-4 md:mt-0">
                                   <div className="flex flex-col justify-center">
                                   <img width="200px" src={a3} alt="" />
                                    <div  className="flex flex-col justify-center items-center">
                                    <p className="text-center font-semibold">Audi A3</p>
                                      <div className="flex">
                                        <p>Reviews</p>
                                      <div className="review flex items-center text-center ml-2">
                                      <p className="ml-1">7/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Economy</p>
                                        <div style={{width:"max-content"}}  className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">7.5/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Quality</p>
                                        <div style={{width:"max-content"}} className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">6.5/10</p>
                                    </div>
                                      </div>
                                    </div>
                                   </div>
                                  </motion.div>
                                  <motion.div
                                   variants={varianti}
                                   initial="initial"
                                   whileInView="animate"
                                  className="smallContent mt-4 md:mt-0">
                                   <div className="flex flex-col justify-center">
                                   <img width="200px" src={series1} alt="" />
                                    <div  className="flex flex-col justify-center items-center">
                                    <p className="text-center font-semibold">BMW 1 Series</p>
                                      <div className="flex">
                                        <p>Reviews</p>
                                      <div style={{width:"max-content"}} className="review flex items-center text-center ml-2">
                                      <p className="ml-1">8.5/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Economy</p>
                                        <div style={{width:"max-content"}}  className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">7/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Quality</p>
                                        <div style={{width:"max-content"}} className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">6.5/10</p>
                                    </div>
                                      </div>
                                    </div>
                                   </div>
                                  </motion.div>
                                  <motion.div
                                   variants={varianti}
                                   initial="initial"
                                   whileInView="animate"
                                  className="smallContent mt-4 md:mt-0">
                                   <div className="flex flex-col justify-center">
                                   <img width="200px" src={yaris} alt="" />
                                    <div  className="flex flex-col justify-center items-center">
                                    <p className="text-center font-semibold">Toyota Yaris</p>
                                      <div className="flex">
                                        <p>Reviews</p>
                                      <div className="review flex items-center text-center ml-2">
                                      <p className="ml-1">9/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Economy</p>
                                        <div style={{width:"max-content"}}  className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">8/10</p>
                                    </div>
                                      </div>
                                      <div className="flex mt-1">
                                        <p>Quality</p>
                                        <div style={{width:"max-content"}} className="review flex items-center text-center ml-2">
                                      <p className="ml-1 mr-1">7/10</p>
                                    </div>
                                      </div>
                                    </div>
                                   </div>
                                  </motion.div>
                                    </div>
                                  }
                                {medium && 
                                <motion.div
                                variants={varianti}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                className="cardx2  flex flex-col items-center mt-4 md:mt-0">
                                <img src={anash1} alt="" />
                                  <button className="bbo"> <p className="text-center font-semibold">Small Cars</p></button>
                                </motion.div>
                                }   
                                {big && 
                                <motion.div
                                variants={varianti}
                                initial="initial"
                                whileInView="animate"
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                className="cardx3  flex flex-col items-center mt-4 md:mt-0">
                                <img src={anash1} alt="" />
                                  <button className="bbo"> <p className="text-center font-semibold">Small Cars</p></button>
                                </motion.div>
                                }
                        </div>
                    </div>
                    <h1  style={{fontWeight:700,fontSize:25,color:'#2F27CE'}} className="mt-24 ml-24">Reviews by brand type </h1>
                    <div className="flex flex-col h-full justify-evenly items-center md:items-strech md:flex-row mt-10">
                      <div className="brandcard1 flex items-center justify-center flex-col">
                      <svg
                        key="icon1"
                        className=''
                        viewBox="0 0 24 24"
                        fill="#DDDBFF"
                        height="70px"
                        width="70px"
                      >
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM3.245 17.539A10.357 10.357 0 0012 22.36c3.681 0 6.917-1.924 8.755-4.821L12 14.203zm10.663-6.641l7.267 5.915A10.306 10.306 0 0022.36 12c0-5.577-4.417-10.131-9.94-10.352zm-2.328-9.25C6.057 1.869 1.64 6.423 1.64 12c0 1.737.428 3.374 1.185 4.813l7.267-5.915z" />
                      </svg>
                      <p>Mercedes Benz</p>
                      <div style={{width:"max-content"}} className="review2 flex items-center text-center ml-2">
                           <p className="ml-1">8.5/10</p>
                         </div>
                      </div>
                      <div className="brandcard1 flex items-center justify-center flex-col mt-4 md:mt-0">
                      <svg
                    className=''
                      key="icon2"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="85px"
                      width="85px"
                    >
                      <path
                        fill="#DDDBFF"
                        fillRule="evenodd"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM5 12a7 7 0 007 7v-7h7a7 7 0 00-7-7v7H5z"
                        clipRule="evenodd"
                      />
                    </svg>
                      <p>BMW</p>
                      <div style={{width:"max-content"}} className="review2 flex items-center text-center ml-2">
                           <p className="ml-1">8/10</p>
                         </div>
                        </div>
                        <div className="brandcard1 flex items-center justify-center flex-col mt-4 md:mt-0">
                        <svg
                        className=''
                        viewBox="0 0 24 24"
                        fill="#DDDBFF"
                        height="75px"
                        width="75px"
                      >
                        <path d="M19.848 7.848c-.992 0-1.902.348-2.616.928a4.134 4.134 0 00-2.616-.928c-.992 0-1.902.348-2.616.928a4.134 4.134 0 00-2.616-.928c-.992 0-1.902.348-2.616.928a4.152 4.152 0 100 6.448c.714.58 1.624.928 2.616.928s1.902-.348 2.616-.928c.714.58 1.624.928 2.616.928s1.902-.348 2.616-.928a4.152 4.152 0 102.616-7.376zm-2.616 6.018A3.198 3.198 0 0116.634 12c0-.696.222-1.34.598-1.866.376.526.598 1.17.598 1.866 0 .696-.222 1.34-.598 1.866zm-5.232 0A3.198 3.198 0 0111.402 12c0-.696.222-1.34.598-1.866.376.526.598 1.17.598 1.866 0 .696-.222 1.34-.598 1.866zm-5.232 0A3.198 3.198 0 016.17 12c0-.696.222-1.34.598-1.866.376.526.598 1.17.598 1.866 0 .696-.222 1.34-.598 1.866zM.938 12a3.214 3.214 0 015.17-2.549A4.134 4.134 0 005.232 12c0 .961.328 1.846.876 2.549A3.214 3.214 0 01.938 12zm6.49 2.549A4.134 4.134 0 008.304 12c0-.961-.328-1.846-.876-2.549a3.203 3.203 0 011.956-.665c.736 0 1.414.248 1.956.665A4.13 4.13 0 0010.464 12c0 .961.328 1.846.876 2.549a3.203 3.203 0 01-1.956.665 3.196 3.196 0 01-1.956-.665zm5.232 0A4.13 4.13 0 0013.536 12c0-.961-.328-1.846-.876-2.55.542-.416 1.22-.665 1.956-.665s1.414.248 1.956.665a4.13 4.13 0 00-.876 2.549c0 .961.328 1.846.876 2.549a3.203 3.203 0 01-1.956.665 3.19 3.19 0 01-1.956-.664zm7.188.665a3.196 3.196 0 01-1.956-.665A4.136 4.136 0 0018.768 12c0-.961-.328-1.846-.876-2.549a3.214 3.214 0 111.956 5.763z" />
                      </svg>
                      <p>Audi</p>
                      <div style={{width:"max-content"}} className="review2 flex items-center text-center ml-2">
                           <p className="ml-1">7.5/10</p>
                         </div>
                        </div>
                        <div className="brandcard1 flex items-center justify-center flex-col mt-4 md:mt-0">
                        <svg
                         className=''
                          viewBox="0 0 24 24"
                          fill="#DDDBFF"
                           height="70px"
                           width="70px"
                            >
                         <path d="M11.972 0A25.68 25.68 0 009.93.091a27.858 27.858 0 00-4.248.685 23.565 23.565 0 00-2.975.966l-.06.022s.118 7.243.21 10.831a9.934 9.934 0 00.569 3.098 14.899 14.899 0 001.622 3.214A12.884 12.884 0 007.56 21.66a11.234 11.234 0 001.192.873 15.214 15.214 0 002.038 1.031c.233.098.436.192.62.255A4.58 4.58 0 0012 24a4.58 4.58 0 00.59-.182c.182-.063.387-.156.62-.255a15.22 15.22 0 002.037-1.031 11.25 11.25 0 001.194-.873 12.88 12.88 0 002.511-2.752 14.889 14.889 0 001.622-3.214 9.934 9.934 0 00.57-3.098c.091-3.588.21-10.827.21-10.827a.635.635 0 00-.057-.026 23.564 23.564 0 00-2.976-.966 27.856 27.856 0 00-4.248-.684A26.068 26.068 0 0012.031 0zm0 .361h.057c.679.008 1.288.03 1.963.09a26.585 26.585 0 014.084.663 22.53 22.53 0 012.861.937.619.619 0 01.057.025l-.038 2.274a.113.113 0 00-.019-.01 22.55 22.55 0 00-2.86-.937 26.61 26.61 0 00-4.085-.662c-.675-.06-1.281-.1-1.96-.108h-.058c-.679.009-1.29.048-1.965.108a26.608 26.608 0 00-4.084.665 22.547 22.547 0 00-2.861.938.116.116 0 00-.02.01l-.038-2.281.058-.022a22.527 22.527 0 012.86-.937A26.581 26.581 0 0110.01.45c.675-.06 1.284-.08 1.963-.089zm.288.216a16.633 16.633 0 00-.902.008c-.121.005-.288.109-.29.23l-.007.648c-.002.132.172.236.305.239.462.01.87.002 1.318.03.033.003.062.023.062.056l-.003.13a.042.042 0 01-.045.046c-.521 0-1.066-.025-1.593.017-.028.002-.027-.005-.028.023l-.024.384-.002.03a16.318 16.318 0 011.882 0 .32.32 0 00.305-.262l.006-.627c0-.129-.158-.224-.261-.23-.442-.028-.945-.013-1.394-.025a.046.046 0 01-.044-.05l.009-.145c0-.028.019-.036.047-.037.444-.016 1.107.005 1.562.019a.072.072 0 00.06-.07V.674c0-.017-.032-.067-.063-.068V.605a33.113 33.113 0 00-.9-.028zm-1.88.064c-.423.008-1.341.125-1.862.19L8.515 2.64v.023l.47-.06a.014.014 0 00.01-.006.014.014 0 00.003-.01v-.523l.947-.102c.083-.015.18.046.256.169a.88.88 0 01.114.339l.467-.035c.01 0 .03 0 .028-.01a.988.988 0 00-.307-.663.316.316 0 00.197-.31 4.34 4.34 0 00-.022-.564.32.32 0 00-.3-.247zm3.59.019a.404.404 0 00-.413.332l-.01 1.195a.312.312 0 00.24.289c.61.057 1.21.112 1.89.215.011 0 .032-.007.032-.017v-.416c0-.009-.02-.028-.027-.03-.454-.057-1.053-.137-1.589-.193a.076.076 0 01-.058-.07v-.812c0-.034.05-.052.084-.05.529.044 1.056.14 1.584.197.014.002.036-.007.037-.021l.01-.382a.037.037 0 00-.029-.033 36.382 36.382 0 00-1.75-.204zm1.98.237c-.012 0-.022.014-.022.025-.006.274-.045 1.457-.053 1.772v.027c.155.027.326.048.453.074.014.002.035-.008.035-.022-.002-.207 0-.448-.004-.636 0-.013.006-.014.02-.012a31.392 31.392 0 011.102.22c.008 0 .052.007.052.03-.003.217-.007.4-.013.617a.041.041 0 00.027.04c.145.033.283.067.42.1.037.008.043.001.044-.012.022-.451.03-1.174.036-1.784 0-.008-.003-.02-.01-.022-.153-.035-.297-.072-.453-.105-.014-.003-.022.02-.023.035-.015.223-.009.43-.026.652 0 .008 0 .012-.009.01-.37-.076-.765-.158-1.132-.227-.01-.002-.006-.02-.005-.031l.003-.653a.033.033 0 00-.026-.03 23.196 23.196 0 00-.417-.068zM7.934.92a.303.303 0 00-.037 0c-.543.086-1.089.201-1.64.32a.5.5 0 00-.23.143.322.322 0 00-.102.205l.004 1.118a.434.434 0 00.106.266.24.24 0 00.204.11 38.518 38.518 0 011.633-.323.497.497 0 00.268-.166.362.362 0 00.098-.23L8.236 1.2a.28.28 0 00-.11-.198.303.303 0 00-.191-.08zm2.157.197a.076.076 0 01.08.069l.003.189a.172.172 0 01-.14.166l-1.062.104-.009-.008V1.23l.009-.004 1.111-.108a.076.076 0 01.008 0zm-2.52.29a.167.167 0 01.078.022.117.117 0 01.054.106l-.009.704a.125.125 0 01-.049.105.291.291 0 01-.12.047 61.16 61.16 0 01-.997.19.106.106 0 01-.088-.017.133.133 0 01-.03-.1v-.726a.143.143 0 01.04-.097.243.243 0 01.12-.06c.29-.054.67-.129.968-.172a.167.167 0 01.033-.002zm10.81 0l-.001.001c-.008 0-.008.012-.008.019-.014.606-.03 1.167-.035 1.773 0 .013.006.03.018.033a22.245 22.245 0 012.158.7c.032.011.031-.013.031-.022.003-.138.01-.278.003-.416a.041.041 0 00-.025-.033 16.602 16.602 0 00-1.66-.541.028.028 0 01-.019-.026l.008-.18c0-.008.014-.01.022-.008a21.848 21.848 0 011.67.542c.01.003.01-.01.01-.019a5.121 5.121 0 000-.468.029.029 0 00-.02-.026 21.457 21.457 0 00-1.638-.523c-.008-.002-.018-.01-.018-.018v-.192c0-.008.013-.013.021-.01.564.144 1.184.36 1.615.519.038.014.06.008.06-.027 0-.157.006-.168-.002-.324-.002-.02-.004-.04-.022-.047a21.383 21.383 0 00-2.169-.707zm-12.97.064a.365.365 0 00-.084.009c-.65.166-1.303.414-1.956.652a.063.063 0 00-.03.052V3.65l.003.33s.471-.177.573-.21c.013-.004.013-.017.013-.031l-.01-.52c0-.015.002-.037.016-.04l1.625-.502a.306.306 0 00.138-.101.237.237 0 00.052-.156l-.017-.683a.272.272 0 00-.119-.197.365.365 0 00-.204-.068zm-.286.496c.036-.01.07.031.072.063a1.86 1.86 0 01.012.25c-.001.045-.066.097-.11.11l-1.184.386c-.011.004-.031 0-.031-.012l.002-.358c0-.017.02-.031.036-.036a10.796 10.796 0 011.203-.403zm6.967.981c.653.01 1.246.03 1.9.088a26.591 26.591 0 014.083.663 22.501 22.501 0 012.861.937.107.107 0 01.014.007 89.441 89.441 0 00-.007.448h-8.851zm-.317.002l-.001 4.618H8.827c-.043-.004-.015-.023.015-.052a1.71 1.71 0 01.715-.312c.022-.002.028-.014-.003-.054a.898.898 0 00-.93-.212.985.985 0 00-.624.603.04.04 0 01-.04.031 6.734 6.734 0 01-.47.013c-.025 0-.037-.032-.035-.056a.737.737 0 01.343-.484 1.1 1.1 0 01.519-.178.04.04 0 00.02-.063.515.515 0 00-.105-.093.758.758 0 00-.504-.077 1.053 1.053 0 00-.948.964c-.01.06.006.074-.053.094-.112.038-.322.064-.434.088-.02.003-.05-.043-.045-.063a1.309 1.309 0 01.244-.522 1.006 1.006 0 01.342-.291c.026-.013.05-.044.026-.064-.253-.22-.771.012-.98.241a1.37 1.37 0 00-.275.91c0 .016.014.041 0 .047a4.942 4.942 0 01-.4.15c-.012.003-.014-.028-.016-.04a.93.93 0 01.147-.677.661.661 0 01.244-.241c.01-.006.008-.018 0-.028-.115-.149-.569-.042-.708.094-.32.312-.297.615-.312 1.097-.001.023-.03.111-.056.123a.57.57 0 01-.184.07c-.021.006-.023.014-.028-.007a.39.39 0 00-.57-.222.356.356 0 00-.077.532c.015.017.02.034-.003.041a.42.42 0 00-.275.534.336.336 0 00.296.21.628.628 0 00.37-.108.043.043 0 01.06.01.386.386 0 00.531.124c.162-.107.234-.273.114-.559-.007-.016.02-.046.034-.054a6.615 6.615 0 013.144-.88 1.78 1.78 0 01.456.101.094.094 0 01.023.008l.002.941a.19.19 0 01-.034.025 1.005 1.005 0 00-.432.55c-.004.017-.006.021-.035.024-.193.019-.399.047-.591.062-.011.002-.032-.019-.028-.03a1.87 1.87 0 01.725-.908.057.057 0 00.01-.067.375.375 0 00-.168-.093 1.087 1.087 0 00-.895.362 1.418 1.418 0 00-.312.875c-.001.022.003.058-.019.065-.124.039-.261.074-.39.11-.015.004-.035-.011-.038-.027a1.006 1.006 0 01.486-1.03c.051-.04-.038-.102-.102-.102a.963.963 0 00-.913.53 1.301 1.301 0 00-.03.793c.003.023.019.063-.006.069-.079.019-.265.09-.323.108-.021.007-.035-.003-.047-.03a1.041 1.041 0 01-.021-.488 1.102 1.102 0 01.268-.493c.008-.01.011-.032 0-.037a.54.54 0 00-.378-.025.74.74 0 00-.477.38c-.159.297-.118.583.051 1.005.008.02.018.058 0 .07l-.137.08c-.017.013-.032.002-.044-.015-.055-.078-.124-.202-.21-.24a.415.415 0 00-.428.035.406.406 0 00-.12.431.875.875 0 00.1.152c.01.014-.001.036-.013.047-.059.052-.14.09-.188.14a.395.395 0 00-.01.471.365.365 0 00.45.123 1.624 1.624 0 00.232-.122c.027-.018.045-.051.07-.025a.546.546 0 00.224.153.427.427 0 00.354-.062.305.305 0 00.168-.338.875.875 0 00-.143-.27c-.033-.035-.035-.033 0-.054a7.435 7.435 0 011.66-.724 5.024 5.024 0 011.69-.207h.046l.003 1.949H3.206c-.054-2.133-.116-5.51-.156-7.836a.113.113 0 01.014-.007 22.499 22.499 0 012.86-.937 26.59 26.59 0 014.084-.663 23.38 23.38 0 011.768-.086zm-3.088.816a1.237 1.237 0 00-.693.232c-.286.188-.456.773-.49.982a.044.044 0 01-.04.036 5.998 5.998 0 00-.676.125c-.007.001-.012-.01-.012-.017a.983.983 0 01.258-.59 3.506 3.506 0 01.493-.396c.013-.011.004-.045-.012-.051a1.035 1.035 0 00-.797.012 1.129 1.129 0 00-.675.867 2.062 2.062 0 00-.029.41c.002.017-.03.018-.045.023-.246.077-.504.167-.71.236-.01.004-.039.002-.039-.01a1.168 1.168 0 01.175-.655c.12-.195.343-.305.505-.469.011-.012.028-.044.011-.051-.41-.165-.797.004-1.124.375a1.395 1.395 0 00-.2 1.124c.009.036 0 .075-.019.083a1.805 1.805 0 01-.23.089.025.025 0 01-.033-.02c-.093-.296-.44-.238-.597-.148a.361.361 0 00-.139.489.031.031 0 01-.01.044.442.442 0 00-.205.596.352.352 0 00.428.137 1.208 1.208 0 00.246-.129.027.027 0 01.03.004.393.393 0 00.566.08c.115-.082.16-.096.204-.244a.39.39 0 00-.09-.3c-.012-.01-.001-.04.013-.047A9.692 9.692 0 018.947 5.51a2.35 2.35 0 011.446.553.072.072 0 00.062.031.098.098 0 00.054-.056.66.66 0 00-.204-.678 1.21 1.21 0 00-.612-.344c-.012-.003-.02-.029-.01-.037a.968.968 0 01.335-.22 3.587 3.587 0 01.605-.05c.014-.001.035-.015.03-.028a.606.606 0 00-.527-.4 1.325 1.325 0 00-.693.1 1.118 1.118 0 00-.5.553.036.036 0 01-.032.02 12.139 12.139 0 00-.594-.007c-.014 0-.035 0-.035-.014a.943.943 0 01.255-.517 1.989 1.989 0 01.68-.386c.019-.006.04-.036.029-.051a.549.549 0 00-.201-.17 1.237 1.237 0 00-.347-.041zm3.405 1.607h8.845c-.012.686-.025 1.433-.04 2.195h-8.805zM8.681 7.801l6.666.003a.016.016 0 01.017.013l-.002 5.138a2.354 2.354 0 01-.143.764 3.327 3.327 0 01-1.44 1.725 3.468 3.468 0 01-1.74.491 3.512 3.512 0 01-2.26-.86 3.078 3.078 0 01-1.105-2.31L8.667 7.82c0-.013.001-.019.014-.019zm6.994.086h5.217c-.012.645-.025 1.296-.034 1.926h-5.183V8.318zm-6.839.071c-.013 0-.014.005-.014.018l.007 4.753a2.97 2.97 0 001.054 2.225 3.333 3.333 0 002.153.827 3.284 3.284 0 001.66-.473 3.193 3.193 0 001.374-1.66 2.28 2.28 0 00.136-.734l.002-4.94a.015.015 0 00-.016-.014zm4.436.304a.101.101 0 01.001 0 .11.11 0 01.087.071l.242.715a.079.079 0 01-.003.07.066.066 0 01-.054.024.065.065 0 01-.063-.044l-.038-.125h-.33l-.036.128c-.01.04-.04.044-.071.044a.063.063 0 01-.044-.028.057.057 0 01-.01-.052l.232-.728a.101.101 0 01.087-.075zm-.763.007a.226.226 0 01.023 0 .232.232 0 01.235.157.046.046 0 01-.031.059.053.053 0 01-.07-.02.166.166 0 00-.132-.09.151.151 0 00-.133.1.498.498 0 00-.055.222.524.524 0 00.046.228.159.159 0 00.154.102.233.233 0 00.166-.243v-.039h-.135a.057.057 0 01-.059-.063c0-.023.007-.05.059-.05h.192c.064 0 .073.048.073.09a.792.792 0 01-.011.152.399.399 0 01-.15.236.301.301 0 01-.15.043.257.257 0 01-.227-.145.618.618 0 01-.073-.31.577.577 0 01.08-.304.226.226 0 01.198-.125zm-2.988.002a.318.318 0 01.004 0c.183.002.243.111.243.15 0 .035-.061.08-.095.039a.2.2 0 00-.157-.068.143.143 0 00-.15.096.114.114 0 00.094.135.61.61 0 01.267.08h-.001a.202.202 0 01.081.18.247.247 0 01-.067.175.327.327 0 01-.247.088.297.297 0 01-.263-.14c-.004-.01-.01-.063.034-.078a.084.084 0 01.082.026.239.239 0 00.156.063.223.223 0 00.148-.05.105.105 0 00.024-.116.219.219 0 00-.193-.098.25.25 0 01-.172-.07.25.25 0 01-.069-.196.219.219 0 01.1-.163.318.318 0 01.181-.053zm1.649 0a.06.06 0 01.001 0 .06.06 0 01.006 0h.355a.06.06 0 110 .12l-.114.002v.682a.063.063 0 01-.125 0v-.683h-.116a.06.06 0 01-.007-.12zm.56 0a.06.06 0 01.001 0 .06.06 0 01.006 0h.354a.06.06 0 110 .12l-.114.002v.682a.063.063 0 01-.125 0v-.683h-.115a.06.06 0 01-.007-.12zm2.74 0a.06.06 0 01.002 0 .06.06 0 01.006 0h.353a.06.06 0 110 .12l-.112.002v.682a.063.063 0 01-.125 0v-.683h-.116a.06.06 0 01-.007-.12zm-.677.004a.063.063 0 01.012 0h.19a.364.364 0 01.208.058.278.278 0 01.108.206.235.235 0 01-.071.198.305.305 0 01-.117.075l-.02.007.158.2a.086.086 0 01.023.056c-.002.032-.023.05-.06.05a.066.066 0 01-.056-.027l-.187-.258h-.117v.23a.059.059 0 01-.063.067.06.06 0 01-.062-.067v-.726a.073.073 0 01.016-.05.063.063 0 01.038-.019zm-3.87.002a.06.06 0 01.003 0h.357a.06.06 0 010 .121h-.116v.684a.063.063 0 01-.125 0v-.684h-.116a.06.06 0 01-.003-.12zm.583 0a.063.063 0 01.002 0 .063.063 0 01.065.064v.471a.258.258 0 00.037.151.146.146 0 00.127.056.138.138 0 00.125-.056.265.265 0 00.035-.15V8.34h.001a.063.063 0 01.125 0v.432a.474.474 0 01-.056.262.25.25 0 01-.228.104.26.26 0 01-.23-.104.456.456 0 01-.061-.262V8.34a.063.063 0 01.058-.063zm3.354.115v.328h.13a.18.18 0 00.2-.174.15.15 0 00-.051-.109.178.178 0 00-.13-.045zm-.584.015l-.136.469h.278zm-1.14 1.005c.011 0 .021.002.022.011.002.018-.016.029-.042.042a.206.206 0 00-.094.08.31.31 0 00-.039.163.115.115 0 00.063.079.298.298 0 00.142.028.502.502 0 00.215-.063.581.581 0 01.276-.02.341.341 0 01.194.063c.024.017.02.038.011.04-.014.005-.029-.012-.044-.01a.674.674 0 00-.142.03c-.06.027-.087.037-.116.09a.099.099 0 00-.007.073c.01.024.035.04.04.057a.446.446 0 00.064.125.205.205 0 00.03.023 2.668 2.668 0 01.282.243.26.26 0 01.04.093c.003.012-.007.03-.018.025a.255.255 0 01-.036-.029.178.178 0 00-.053-.039.368.368 0 00-.176-.025c-.027 0-.081.024-.05.036a.357.357 0 01.132.116.43.43 0 01.107.31c0 .006-.012.01-.015.006a.359.359 0 00-.102-.109.324.324 0 00-.21-.062c-.015.001-.06 0-.055.014a1.19 1.19 0 01.123.191.562.562 0 01.039.276c-.001.005-.02.01-.023.005a.61.61 0 00-.077-.076.349.349 0 00-.094-.06.29.29 0 00-.204.028.325.325 0 00-.13.132.492.492 0 00-.062.205.46.46 0 00.042.257.368.368 0 00.19.164.955.955 0 00.334.044c.139.005.278-.016.417-.02a1.943 1.943 0 01.396.003.88.88 0 01.3.12 2.64 2.64 0 01.215.183c.008.006.026-.003.035-.009a.462.462 0 00.131-.233.346.346 0 00-.056-.246c-.047-.085-.116-.18-.17-.27a2.962 2.962 0 01-.202-.296.305.305 0 01-.017-.221.238.238 0 01.107-.128c.011-.007.022.006.017.021a.184.184 0 00-.008.112.32.32 0 00.089.14c.013.01.047-.005.055-.021.018-.043.007-.11.023-.154a.619.619 0 01.108-.226 1.47 1.47 0 01.36-.196c.033-.019.054-.105.091-.091.037.013.017.1-.011.142-.04.062-.087.1-.131.156a1.536 1.536 0 00-.157.247.222.222 0 00-.029.137.14.14 0 00.073.094c.022.01.05-.01.07-.025a.385.385 0 00.097-.103c.023-.038.01-.089.032-.128.006-.009.03-.007.037 0a.139.139 0 01.044.084.393.393 0 01-.01.113c-.003.008-.024.027-.031.045a.244.244 0 01-.02.04c-.036.063-.078.116-.125.126-.01.001-.017.021-.01.03a.391.391 0 00.113.132.198.198 0 00.152.01c.027-.008.048-.027.079-.037.013-.004.005.004.005.017a.27.27 0 01-.015.086.19.19 0 01-.075.083.395.395 0 01-.166.05c-.027.005-.068.025-.058.051a.256.256 0 00.042.085.122.122 0 00.08.039.205.205 0 00.125-.036c.04-.026.061-.074.096-.108.007-.006.026 0 .026.01a.36.36 0 01-.041.158.497.497 0 01-.128.138c-.015.013-.033.029-.033.049a.2.2 0 00.044.084.134.134 0 00.083.054.269.269 0 00.1 0c.013 0 .01.023-.001.031a.253.253 0 01-.117.068.25.25 0 01-.128.008c-.081-.02-.134-.05-.214-.073a.23.23 0 00-.135-.009.227.227 0 00-.106.083.133.133 0 00-.03.064c-.006.063.025.13.005.192a1.415 1.415 0 01-.081.234 1.314 1.314 0 01-.115.165c-.04.054-.093.074-.12.133a.638.638 0 01-.038.063.515.515 0 00-.058.229.452.452 0 00.085.209l.153.237a.149.149 0 01.009.083.088.088 0 01-.044.07.893.893 0 00-.419.527l-.002.013v.004a.106.106 0 01-.021.042.334.334 0 01-.19.096c-.055.015-.11.029-.165.046a.077.077 0 00-.044.031.08.08 0 00.009.097.137.137 0 01.03.071.063.063 0 01-.013.042.108.108 0 01-.028.022.865.865 0 01-.216.087c-.05.011-.086-.002-.07-.059a3.075 3.075 0 01.098-.293.42.42 0 01.133-.14 2.289 2.289 0 01.212-.162.411.411 0 00.119-.126 3.299 3.299 0 01.19-.275.163.163 0 00.029-.129.246.246 0 00-.142-.185 1.052 1.052 0 00-.085-.034.534.534 0 01-.246-.175.09.09 0 00-.062-.04c-.063.002-.081.09-.083.138a1.17 1.17 0 00.004.212.18.18 0 01.004.072.055.055 0 01-.039.034 2.74 2.74 0 00-.565.279.24.24 0 00-.063.07l-.017.029a.187.187 0 01-.223.08.5.5 0 00-.044-.011.094.094 0 00-.064.017.162.162 0 00-.041.036.06.06 0 00-.01.019v.006a.057.057 0 000 .008.07.07 0 00.004.017l.022.06a.066.066 0 01-.038.096.881.881 0 01-.203.055c-.04.005-.075-.01-.065-.057a1.1 1.1 0 01.07-.237.094.094 0 01.057-.06.79.79 0 00.179-.14.266.266 0 01.169-.073.512.512 0 00.262-.1 1.73 1.73 0 00.225-.186.37.37 0 00-.006-.46l-.02-.035c-.019-.03-.03-.073-.046-.104a.24.24 0 01-.039-.104c0-.068.027-.133.031-.201a.024.024 0 00-.016-.025.488.488 0 00-.137-.03 2.677 2.677 0 01-.56.006 1.423 1.423 0 01-.39-.18c-.053-.033-.085-.07-.139-.101-.014-.008-.015-.005-.028.006a.672.672 0 01-.459.125h-.002a1.766 1.766 0 01-.294-.077c-.073-.027-.19-.074-.26-.015-.029.025-.022.06-.022.093a1.244 1.244 0 01-.01.305.038.038 0 00.003.032.044.044 0 00.006.006.136.136 0 00.036.02l.01.004c.028.01.033.023.05.058a.196.196 0 01.016.062.159.159 0 01-.003.062.544.544 0 01-.009.039.207.207 0 00.008.135.115.115 0 00.042.053.073.073 0 00.01.004.063.063 0 00.01.003.068.068 0 00.01 0h.01a.074.074 0 00.02-.008l.004-.002a.05.05 0 01.035-.012.046.046 0 01.01.003.08.08 0 01.063.074.484.484 0 01-.046.221.058.058 0 01-.077.03l-.018-.007a.445.445 0 01-.14-.117.19.19 0 01-.049-.112.12.12 0 00-.028-.082.09.09 0 00-.032-.016.144.144 0 01-.07-.046.268.268 0 01-.052-.219 1.5 1.5 0 00-.046-.64.149.149 0 01.002-.108l.016-.043a.148.148 0 01.007-.016.06.06 0 01.042-.032.167.167 0 01.029-.003 1.516 1.516 0 00.45-.07.152.152 0 01.062-.01.89.89 0 00.073.002c.03 0 .06-.027.024-.05a.847.847 0 01-.084-.087.046.046 0 00-.052-.022.072.072 0 00-.01.005l-.009.005a.098.098 0 01-.152-.029.824.824 0 01-.087-.202.555.555 0 00-.109-.238.235.235 0 00-.19-.063.216.216 0 00-.13.098l-.063.088a.144.144 0 00-.031.067.107.107 0 000 .016.14.14 0 00.008.032.133.133 0 01-.039.154l-.094.075a.087.087 0 00-.03.06.527.527 0 01-.012.06.13.13 0 00-.003.045.088.088 0 00.002.012.081.081 0 00.031.04.156.156 0 01.013.012.074.074 0 01.012.017.06.06 0 01-.012.07.219.219 0 01-.024.021.753.753 0 01-.19.108.098.098 0 01-.026.006c-.038.003-.05-.026-.052-.06-.003-.044-.003-.089-.003-.134a.207.207 0 01.057-.137.36.36 0 00.072-.225.197.197 0 01.04-.13.305.305 0 00.057-.09.257.257 0 01.039-.066 3.861 3.861 0 00.281-.384c.054-.086.155-.192.237-.073a.357.357 0 00.078.084 2.395 2.395 0 00.259.164c.094.053.109-.042.125-.121v-.003a.331.331 0 01.038-.092 1.26 1.26 0 01.202-.247c.043-.038.105-.076.15-.113.018-.016.023-.018.03-.04.009-.022.024-.05.034-.078.01-.027.015-.055.024-.076a.344.344 0 00.044-.098v-.003a.023.023 0 000-.005v-.007l-.003-.007a.05.05 0 00-.021-.024.18.18 0 00-.102-.026h-.003a.384.384 0 00-.148.031.106.106 0 00-.054.054.226.226 0 01-.042.063.098.098 0 01-.13.006c-.024-.016-.014-.043 0-.063a.414.414 0 00.035-.05.042.042 0 00.005-.025v-.004l-.002-.005a.031.031 0 00-.005-.006.046.046 0 00-.045-.007.98.98 0 00-.083.027.064.064 0 01-.094-.047.174.174 0 01-.003-.055.055.055 0 01.04-.05c.02-.006.05-.017.046-.042a.079.079 0 010-.023.052.052 0 01.012-.024.14.14 0 01.03-.025 3.869 3.869 0 00.32-.234.05.05 0 01.064-.01l.01.006a.223.223 0 00.151.02.046.046 0 00.041-.03.025.025 0 000-.005v-.005l-.002-.006-.003-.004a.071.071 0 00-.035-.021l-.058-.021a.269.269 0 01-.052-.025.053.053 0 01-.025-.059c.023-.113.147-.114.241-.105h.004a.505.505 0 00.14-.022c.06-.021.106-.067.163-.094.057-.027.117-.057.176-.08.018-.006.033-.002.049-.009a.091.091 0 00.035-.025.965.965 0 01.142-.163.822.822 0 01.236-.092.107.107 0 01.03-.006zm-.425.557a.219.219 0 00-.105.026c-.009.005-.015.016-.008.024.018.021.049.03.07.05a.16.16 0 01.035.046c.009.019.024.04.033.06a1.296 1.296 0 01.045.123 1.227 1.227 0 01.05.209c.01.057.007.117.01.175v.081c-.001.023-.001.047-.003.07a1.143 1.143 0 00-.004.098v.08c.002.07.013.12.044.12a.18.18 0 00.084-.019.175.175 0 00.085-.148 2.026 2.026 0 00-.003-.576.51.51 0 00-.188-.362.219.219 0 00-.144-.057zm3.96.161h5.177c-.017.825-.034 1.6-.05 2.263h-5.13l.004-1.862zm-.006 2.544h5.123a9.697 9.697 0 01-.545 2.911 14.495 14.495 0 01-1.56 3.118 12.45 12.45 0 01-2.415 2.669 10.809 10.809 0 01-1.147.848 14.592 14.592 0 01-1.96.999c-.224.096-.418.186-.596.247-.193.065-.358.125-.474.156v-.115l.003-7.295a3.552 3.552 0 00.316-.023c.005.015.016.057.031.1a.333.333 0 00.219.166.317.317 0 00.306-.107.373.373 0 00.388.067.235.235 0 00.175-.227.43.43 0 00-.033-.208l-.036-.066a3.925 3.925 0 00.744-.41l.02-.006c.373-.094 1.872-.631 2.791-.643a3.28 3.28 0 011.627.39 2.792 2.792 0 01.682.56c.006.009.013.028.037.032a.036.036 0 00.034-.022 1.139 1.139 0 00.079-.516c-.02-.282-.3-.486-.383-.57-.003-.003-.01-.021.02-.041a.674.674 0 01.105-.085.983.983 0 01.562-.212c.03.003.02-.04.012-.076-.058-.25-.415-.412-.79-.354a.963.963 0 00-.613.417c-.007.011-.042.027-.056.013a2.926 2.926 0 00-.369-.107c-.045-.01-.021-.044-.019-.05a1.003 1.003 0 01.304-.337 1.125 1.125 0 01.494-.224c.022 0 .022-.03.016-.04a.55.55 0 00-.375-.302.844.844 0 00-.78.14 1.397 1.397 0 00-.445.673c-.014.02-.018.036-.036.032-.099-.02-.345-.007-.367-.022-.015-.007-.012-.03-.009-.045a.91.91 0 01.222-.38.882.882 0 01.364-.286.055.055 0 00.01-.094.98.98 0 00-1.22.263 2.192 2.192 0 00-.304.696c-.002.009-.017.036-.036.036l-.508.112-.083.019-.022.023a3.29 3.29 0 00.497-1.65zm-12.45.085h5.19v.09a3.145 3.145 0 00.837 2.098H3.556a9.74 9.74 0 01-.342-2.188zm.415 2.443h5.863a2.566 2.566 0 00.112.1 3.897 3.897 0 002.17.898v1.21h-7.22a13.789 13.789 0 01-.8-1.827 10.401 10.401 0 01-.125-.38zm10.584.29l-.01.012h-.002l-.002-.002a3.29 3.29 0 00.015-.01zm1.738.185a.911.911 0 00-.507.155.934.934 0 00-.392.41 2.65 2.65 0 00-.172.775.063.063 0 01-.038.035 2.897 2.897 0 00-.335.087.026.026 0 01-.023-.02 1.105 1.105 0 01.15-.727.886.886 0 01.218-.263.037.037 0 00-.017-.068.98.98 0 00-.648.114.888.888 0 00-.452.667 1.589 1.589 0 00.042.594c0 .006.006.027-.016.031-.076.037-.282.145-.355.18-.005.002-.019.005-.022-.006a.58.58 0 00-.268-.358.526.526 0 00-.446.022.548.548 0 00-.216.224.375.375 0 00.127.455c.006.006.017.02 0 .025-.09.049-.092.06-.16.161a.428.428 0 00.052.45.465.465 0 00.7.082c.004-.003.018.005.025.02a.548.548 0 00.143.151.463.463 0 00.455 0 .413.413 0 00.21-.415.378.378 0 00-.111-.262c-.013-.016 0-.024.034-.046a5.404 5.404 0 011.96-.666 3.121 3.121 0 011.076.022 1.504 1.504 0 01.629.312 2.841 2.841 0 01.406.402.164.164 0 00.117-.025.66.66 0 00.014-.517 1.604 1.604 0 00-.384-.59c-.003-.002-.003-.013-.003-.02-.004-.03.015-.045.052-.079a1.211 1.211 0 01.562-.297c.027-.002.038-.022.02-.053a.656.656 0 00-.808-.298h-.001a.916.916 0 00-.454.416c-.006.011-.022.05-.037.038-.09-.008-.242-.032-.331-.04-.041-.002-.025-.039-.024-.045a.744.744 0 01.194-.316 1.176 1.176 0 01.444-.318.021.021 0 00.016-.031.627.627 0 00-.465-.229.81.81 0 00-.617.238 1.255 1.255 0 00-.337.74c-.009.023-.02.035-.037.035a2 2 0 01-.278.025c-.015-.004-.014-.02-.014-.036a.91.91 0 01.101-.406 1.491 1.491 0 01.55-.582c.036-.025.038-.076.026-.082a.911.911 0 00-.355-.071zM4.707 17.692h7.069v2.19H6.213a11.237 11.237 0 01-.898-1.181 16.446 16.446 0 01-.609-1.01zm10.076 1.176a.497.497 0 00-.273.069.982.982 0 00-.475.56 1.09 1.09 0 00.012.571c.003.007.012.024-.002.03-.078.03-.136.065-.213.096-.004 0-.024.005-.028-.005a.631.631 0 01.088-.736c.017-.015.027-.035-.008-.047a.588.588 0 00-.531.193.677.677 0 00-.117.659.922.922 0 00.099.261c.003.005.03.021.014.028l-.15.115c-.003.003-.014.008-.019 0a.486.486 0 00-.29-.238.341.341 0 00-.317.088.361.361 0 00.147.602c.007.003.017.012.005.02a.587.587 0 00-.19.212.377.377 0 00.085.406.37.37 0 00.29.089.605.605 0 00.357-.313c.002-.003.021-.017.031-.006a.531.531 0 00.264.2.324.324 0 00.323-.065.35.35 0 00.111-.4.61.61 0 00-.201-.216c-.013-.01-.003-.035.023-.055a2.972 2.972 0 011.402-.62 1.801 1.801 0 011.025.166 1.547 1.547 0 01.337.267c.013.007.05.02.063.008a.397.397 0 00.035-.548.654.654 0 00-.206-.165.043.043 0 01-.007-.015.906.906 0 01.301-.393 1.382 1.382 0 01.295-.143c.022-.006.018-.02.007-.047-.128-.293-.635-.304-.874-.15a1.088 1.088 0 00-.346.396c-.005.01-.012.04-.025.031l-.213-.064c-.004 0-.004-.024-.002-.028a1.115 1.115 0 01.696-.565c.015-.006.01-.02.007-.028-.11-.268-.661-.245-.93-.074a1.167 1.167 0 00-.493.714c-.003.02.006.037-.007.04a1.239 1.239 0 01-.23.055.024.024 0 01-.022-.023.642.642 0 01.067-.392 2 2 0 01.324-.408.043.043 0 00-.003-.063.497.497 0 00-.236-.07zm-3.006 1.296v3.417c-.098-.032-.214-.074-.342-.117-.178-.06-.373-.151-.597-.247a14.587 14.587 0 01-1.96-1 10.816 10.816 0 01-1.147-.847 12.861 12.861 0 01-1.266-1.206h5.31z" />
                            </svg>
                      <p>Porsche</p>
                      <div style={{width:"max-content"}} className="review2 flex items-center text-center ml-2">
                           <p className="ml-1">8.5/10</p>
                         </div>
                        </div>
                    </div>
                <div className="empty"></div>
            </div>
    </div>
     );
}
 
export default Carreviews;