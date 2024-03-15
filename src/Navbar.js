import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { motion } from 'framer-motion';

const Navbar = () => {
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
            y:-50,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            tranisition:{
                duration:1,
                delayChildren: 0.3,
                staggerChildren:1
            }
        }
    
    }

    return ( 
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
                <IconButton style={{width:'fit-content'}}>
                    <HomeIcon style={{width:30}} color='primary' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Log In">
                <IconButton style={{width:'fit-content'}}>
                    <AccountBoxIcon style={{width:30}} color='primary' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Inbox">
                <IconButton style={{width:'fit-content'}}>
                    <InboxIcon style={{width:30}} color='primary' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Menu" onClick={toggleDrawer('right', true)}>
                <IconButton style={{width:'fit-content'}}>
                    <MenuIcon style={{width:30}} color='primary' />
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
            style={{color:'#040316'}} className='px-4 font-semibold'>About</motion.li>
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
            style={{color:'#040316'}} className='px-4 font-semibold'>Vehicle Models</motion.li>
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
            style={{color:'#040316'}} className='px-4 font-semibold'>Contact</motion.li>
            </ListItem>
               </motion.div>
            </div>
          </List>
        </div>
      </Drawer>

            </div>
        </div>
     );
}
 
export default Navbar;
