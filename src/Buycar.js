import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Buycar = () => {

    const [firstpage,setFirstPage] =useState (true)
    const [secondpage,setSecondPage]=useState (false)


    const nextpage =() =>{
        setFirstPage(false)
        setSecondPage(true)
    }

    const backpage =() =>{
        setFirstPage(true)
        setSecondPage(false)
    }

    return ( 
            <div className="buycar">
                  <Navbar/>
                <div className="flex flex-col justify-center items-center mt-24">

                    <motion.h1 
                     initial={{ scale: 0 ,opacity:0}}
                     animate={{scale:1, opacity:1 }}
                     transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                        duration:1
                      }}
                    style={{color:'#040316',fontSize:60}} className=" font-bold ">AutoZ</motion.h1>
                    {firstpage && 
                        <div className="flex flex-col justify-center items-center">
                         <motion.h1 
                           initial={{ scale: 0 ,opacity:0}}
                           animate={{scale:1, opacity:1 }}
                           transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration:1
                          }}
                         style={{color:'#040316',fontSize:30}} className="font-semibold mt-8">Do you know what you're looking for ?</motion.h1>
                        <motion.button
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1}}
                         whileHover={{ scale: 1.1 }}
                         transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration:1
                          }}
                        style={{width:'250px'}} onClick={nextpage} className="bb mt-4 mb-2">I know the make and model</motion.button>
                        <motion.button
                         initial={{ scale: 0 ,opacity:0}}
                         animate={{scale:1, opacity:1}}
                         whileHover={{ scale: 1.1 }}
                         transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration:1
                          }}
                        style={{width:'250px'}} className="bb mt-2">I'm not sure what i want</motion.button>
                        </div>
                    }
                      {secondpage && 
                        <div>
                         <div className="flex justify-center items-center flex-col mt-10">
                        <motion.button
                        initial={{ scale: 0 ,opacity:0}}
                        animate={{scale:1, opacity:1}}
                        whileHover={{ scale: 1.1 }}
                        className="kurgjo">
                        <div className="flex gap-2">
                         <svg
                           key="icon1"
                           className=''
                           viewBox="0 0 24 24"
                           fill="#040316"
                           height="40px"
                           width="40px"
                           >
                           <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM3.245 17.539A10.357 10.357 0 0012 22.36c3.681 0 6.917-1.924 8.755-4.821L12 14.203zm10.663-6.641l7.267 5.915A10.306 10.306 0 0022.36 12c0-5.577-4.417-10.131-9.94-10.352zm-2.328-9.25C6.057 1.869 1.64 6.423 1.64 12c0 1.737.428 3.374 1.185 4.813l7.267-5.915z" />
                           </svg>
                           <p style={{color:'#040316'}} className="text-center mt-2 mr-4 font-semibold">Mercedes</p>
                            <div className="background-engine items-center mt-2">
                            <svg
                            className="ml-1 mt-1"
                            viewBox="0 0 24 24"
                            fill="#DDDBFF"
                            height="1em"
                            width="1em"
                            >
                            <path d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
                            </svg>
                            </div>
                            <div className="background-electric items-center mt-2">
                                <ElectricBoltIcon sx={{ color:"#DDDBFF",width:'16px',height:'16px' }}/>
                            </div>
                         </div>
                        </motion.button>
                        <motion.button
                        initial={{ scale: 0 ,opacity:0}}
                        animate={{scale:1, opacity:1}}
                        whileHover={{ scale: 1.1 }}
                        className="kurgjo2 -ml-6">
                        <div className="flex gap-2 justify-start">
                        <svg
                            className=''
                            key="icon2"
                            fill="#040316"
                            viewBox="0 0 24 24"
                            height="55px"
                            width="55px"
                            >
                            <path
                                fill="#040316"
                                fillRule="evenodd"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM5 12a7 7 0 007 7v-7h7a7 7 0 00-7-7v7H5z"
                                clipRule="evenodd"
                            />
                            </svg>,
                           <p style={{color:'#040316'}} className="text-center mt-4 mr-10 font-semibold">BMW</p>
                           <div className="background-engine items-center mt-4">
                            <svg
                            className="ml-1 mt-1"
                            viewBox="0 0 24 24"
                            fill="#DDDBFF"
                            height="1em"
                            width="1em"
                            >
                            <path d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
                            </svg>
                            </div>
                            <div className="background-electric items-center mt-4">
                                <ElectricBoltIcon sx={{ color:"#DDDBFF",width:'16px',height:'16px' }}/>
                            </div>
                         </div>
                        </motion.button>
                        </div>
                        <div className="flex justify-evenly gap-4 mt-24">
                            <button onClick={backpage} className="bb">Back</button>
                            <button onClick={backpage} className="bb">Continue</button>
                            </div>  
                     </div>
                      }
                </div>
            </div>
     );
}
export default Buycar;