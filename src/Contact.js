import Contact from './images/Contact us-bro.png'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Contac = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [showError, setShowError] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
  
    const handleSubmit = () => {
        if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
        setShowError(true);
        setSuccess(false);
      } else {
        // Perform submission logic or API call
        setShowError(false);
        setSuccess(true);
        setName(''); // Clear input after submission, if needed
        setEmail('');
        setComment('');
        setTimeout(() => {
            setSuccess(false);
        }, 4000);
      }
      
    };



    return ( 
        <div id="contact" className="contact">
            <h1  style={{fontWeight:800,fontSize:40,color:'#040316'}} className="text-center">Contact </h1>
            <div className="flex justify-evenly items-center  mt-12">
                <div className="telefoni">
                    <img style={{width:'300px'}} src={Contact} alt="" />
                </div>
                <div className="forum flex-flex-col">
                <div class="inputGroup">
                    <input 
                     value={name}
                     onChange={handleNameChange}
                    type="text" required="" autocomplete="off"></input>
                    <label for="name">Name</label>
                </div>
                <div class="inputGroup">
                    <input
                    value={email}
                    onChange={handleEmailChange}
                    type="text" required="" autocomplete="off"></input>
                    <label for="name">Email</label>
                </div>
                <div class="inputGroup">
                    <input
                      value={comment}
                      onChange={handleCommentChange}
                    style={{height:'200px'}} type="text" required="" autocomplete="off"></input>
                    <label for="name">Comment</label>
                </div>
                <button onClick={handleSubmit} id='submiti' className='bb items-center ml-12'>Submit</button>
                    {success &&  
                    <motion.div
                    initial={{opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{
                     duration:1
                    }}
                    className="alert">
                        <div className="flex mt-4">
                            <CheckCircleIcon className='mt-2'/>
                            <p className='items-center mt-2'>This Message was sent successfuly</p>
                        </div>
                    </motion.div>
        }
                </div>
            </div>
            <div className="empty"></div>
        </div>
     );
}
 
export default Contac;
