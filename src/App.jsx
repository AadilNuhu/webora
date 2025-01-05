import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RequestAWebsite from './pages/RequestAWebsite'

function App() {
  let Componet;
  switch (window.location.pathname) {
    case '/':
      Componet = <Home />;
      break;
    case '/about':
      Componet = <About />;
      break;
    case '/contact':
      Componet = <Contact />;
      break;
      case '/RequestAWebsite':
        Componet = <RequestAWebsite />;
        break;
    default:      
      Componet = <Home />;
  }

  return (
    <>
      <Navbar /> 
      {Componet}
      <Footer />
    </>
  )
}

export default App
