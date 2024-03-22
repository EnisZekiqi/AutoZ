import { motion } from "framer-motion";
import { useState } from "react";
import aclass from '..//hatchbackimages/aclass.webp'
import StarIcon from '@mui/icons-material/Star';
const Aclass = () => {
    
    const [neu,setNeu] =useState(false)
    const [used,setUsed]=useState(false)
    const chooseNew =() =>{
        setNeu(true)
    }
    const chooseUsed = () =>{
        setUsed(true)
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
                        <img width="250px" height="250px" src={aclass} alt="" />
                        <div className="flex justify-center items-center">
                            <p  style={{color:"#040316"}} className="font-semibold">Review :</p>
                            <div className="review text-center ml-2">
                                6/10
                            </div>
                        </div>
                       <div className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Engine : </p>
                        Electric
                       </div>
                       <div className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Model : </p>
                        250e
                       </div>
                       <div className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Range : </p>
                        270km
                       </div>
                       <div className="flex justify-center items-center mt-4">
                       <p  style={{color:"#040316"}} className="font-semibold">Usage : </p>
                       New
                       </div>
                       <button className="bbo items-center mt-4"> Buy Now</button>
                    </div>
                </div>
                {neu && 
                <div>new</div>
                }
        </div>
     );
}
 
export default Aclass;