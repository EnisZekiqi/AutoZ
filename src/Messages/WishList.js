import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const WishList = () => {
    return ( 
        <motion.div
        initial={{opacity:0 }}
        animate={{ opacity:1 }}
        transition={{
         duration:1
        }}
        className="alert items-center">
            <div className="flex ">
                <CheckCircleIcon className='mt-2'/>
                <p className='items-center mt-2 mr-2'>Added to Wishlist</p>
            </div>
        </motion.div>
     );
}
 
export default WishList;