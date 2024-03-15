
import './App.css';
import {useState} from 'react'
import Navbar from './Navbar';
import {createTheme, ThemeProvider } from '@mui/material';
import Home from './Home';

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
          <Navbar/>
          <div className="empty"></div>
          <Home/>
          <div className="empty"></div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
