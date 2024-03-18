
import './App.css';
import {useState} from 'react'
import Navbar from './Navbar';
import {createTheme, ThemeProvider } from '@mui/material';
import Home from './Home';
import About from './About';
import VehicleModels from './VehicleModels';
import Contact from './Contact';

const theme = createTheme({
  palette:{
    primary:{
      main:'#040316' //text
    },
    secondary:{
      main:'#DDDBFF'//secondary
    },
    third:{
      main:'#2F27CE'//button primary
    },
    four:{
      main:'#443DFF'//accent 
    }, 
    typography: {
      fontFamily: [
        'Poppins'
      ]
    },
  }
});

function App() {
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleContactSubmit = () => {
    setIsContactSubmitted(true);
  };
  const [isClicked,setIsClicked] = useState(null);

  const handleButton = (contentId) =>{
    setIsClicked(isClicked === contentId ? null : contentId);
    setActiveContent(activeContent === contentId ? null :contentId)
  }
  const [activeContent,setActiveContent]=useState(null)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        <Navbar isContactSubmitted={isContactSubmitted} />
          <div className="empty"></div>
          <Home/>
          <div className="empty"></div>
          <About/>
          <div className="empty"></div>
          <VehicleModels/>
          <div className="empty"></div>
          <Contact onContactSubmit={handleContactSubmit} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
