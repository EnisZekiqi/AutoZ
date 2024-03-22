import { motion } from "framer-motion";
import { useState } from "react";
import aclass from '..//hatchbackimages/aclass.webp'
import aclass2 from '..//sports/aclass2.webp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const Aclass = () => {
    
    const [neu,setNeu] =useState(false)
    const [used,setUsed]=useState(false)
    const chooseNew =() =>{
        setNeu(true)
    }
    const chooseUsed = () =>{
        setUsed(true)
    }

    const [img1,setImg1] =useState(true);
    const [img2,setImg2]=useState(false);

    const forward = () =>{
        setImg1(false)
        setImg2(true);
    }

    const backward = ()=>{
        setImg1(true)
        setImg2(false)
    }

    return ( 
        <div>
            <motion.h3
              initial={{ scale: 0 ,opacity:0}}
              animate={{scale:1, opacity:1 }}
              transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 20,
                  duration:1
                }}
                style={{color:"#040316"}} className="font-semibold font-lg text-center"
            >
           Available A-Class 
            </motion.h3>
                <div className="flex justify-center items-center gap-4 mt-8">
                    <div className="basicA flex flex-col items-center">
                        <div className="flex">
                        {img1 && 
                        <img width="250px" height="250px" src={aclass} alt="" />
                        }
                        {img2 &&
                        <img width="250px" height="250px" src={aclass2} alt="" />
                        }
                        </div>
                        <div className="flex gap-4">
                        <button style={{width:20}} onClick={backward} className="bb mb-4"><NavigateBeforeIcon className="mr-2"/></button>
                        <button style={{width:20}} onClick={forward} className="bb mb-4"><NavigateNextIcon/></button>
                        </div>
                        <div className="flex justify-center items-center">
                            <p  style={{color:"#040316"}} className="font-semibold">Review :</p>
                            <div className="review text-center ml-2">
                                6/10
                            </div>
                        </div>
                       <motion.div
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1 }}
                         transition={{
                             type: "spring",
                             stiffness: 160,
                             damping: 20,
                             duration:1
                           }}
                       className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Engine : </p>
                        Electric
                       </motion.div>
                       <motion.div
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1 }}
                         transition={{
                             type: "spring",
                             stiffness: 160,
                             damping: 20,
                             duration:1
                           }}
                        className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Model : </p>
                        250e
                       </motion.div>
                       <motion.div
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1 }}
                         transition={{
                             type: "spring",
                             stiffness: 160,
                             damping: 20,
                             duration:1
                           }}
                       className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Range : </p>
                        270km
                       </motion.div>
                       <motion.div
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1 }}
                         transition={{
                             type: "spring",
                             stiffness: 160,
                             damping: 20,
                             duration:1
                           }}
                       className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Usage : </p>
                       New
                       </motion.div>
                       <motion.button
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1 }}
                         transition={{
                             type: "spring",
                             stiffness: 160,
                             damping: 20,
                             duration:1
                           }}
                       className="bbo items-center mt-4"> Buy Now</motion.button>
                    </div>
                </div>
                {neu && 
                <div>new</div>
                }
        </div>
     );
}
 
export default Aclass;