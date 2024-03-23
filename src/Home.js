import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SwipeableTextMobileStepper from './secondary/Carousel';
import { Button } from '@mui/material';
import Carousel from './secondary/Carousel';

const Home = () => {
    return ( 
        <div className="home flex flex-col md:flex-row justify-self-stretch ml-24 ">
          <div className="sm:w-1/2">
          <h1 className="Intro" >Visualize your </h1>
            <h1 className="Intro" ><b className="bold">Dream</b>  <b className="boldi">Car</b> </h1>
            <h1 className="Intro" >In AutoZ  </h1>
            <div style={{color:'#040316'}} className="paragraph mt-4">
                <p>Choosing your car is very easy in our website</p>
                <p>Find every model of cars here</p>
            </div>
            <div className='show'>
            <button className='bb'><a href='#vehicle'>Find a Car</a></button>
            </div>
          </div>
          <div className="general-showcar mt-12 ml-24 sm:mt-0 sm:w-1/2">
            <div className="flex justify-self-strech gap-24 mb-1">
                <div className="engine flex items-center justify-center">
                <svg
                viewBox="0 0 24 24"
                fill="#040316"
                height="25px"
                width="25px"
                >
                <path d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4H7z" />
                </svg>
                </div>
                <div className="electric flex items-center justify-center">
                    <ElectricBoltIcon/>
                </div>
            </div>
           <div className="flex gap-2">
                    <div className="flex flex-col">
                    <div className="thin"></div>
                    <div className='thinjr'></div>
                    </div>
                <div className="big">
                    <Carousel/>
                </div>
                <div className="small flex-col text-center font-semibold items-center justify-center">
                    <p className='mt-4'>Disel</p>
                    <p>Petrol</p>
                    <p>Electric</p>
                </div>
           </div>
            <div className="flex">
                <div className="box">
                    <div className="flex flex-col items-center self-center">
                        <p color='secondary' className='mt-2'>Suv</p>
                        <p>Hatchback</p>
                        <p>Saloon</p>
                    </div>
                </div>
                <div className="boxx">
                    <div className='pollo1'>
                    </div>
                    <div className='pollo2'></div>
                </div>
                <div className="boxx2">
                    <div className='pollox'>
                        <p style={{color:'#DDDBFF',marginTop:2}} className='text-center'>AutoZ</p>
                    </div>
                    <div className='pollox2'></div>
                    <div style={{marginTop:10}} className='pollox2'></div>
                </div>
            </div>
          </div>
        </div>
     );
}
 
export default Home;