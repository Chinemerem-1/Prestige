import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './web-pages/Home/Homepage'
import "bootstrap/dist/css/bootstrap.min.css"
import Aboutpage from './web-pages/About/Aboutpage'
import Blogpage from './web-pages/Blog/Blogpage'
import Project from './web-pages/Project/Project'
import Contact from './web-pages/Contact/Contact'
import Residential from './web-pages/Residential/Residential'
import Janitorial from './web-pages/Janitorial/Janitorial'
import Material from './web-pages/Material/Material'
import Postconstruction from './web-pages/Post-construction/Postconstruction'
import Fumigationpage from './web-pages/Fumigation/Fumigationpage'
import Industrial from './web-pages/Industrial/Industrial'
import Login from './web-pages/Login/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Blog" element={<Blogpage/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Residential" element={<Residential/>}/>
          <Route path="/Janitorial" element={<Janitorial/>}/>
          <Route path="/Material" element={<Material/>}/>
          <Route path="/Post+Construction" element={<Postconstruction/>}/>
          <Route path="/Fumigation" element={<Fumigationpage/>}/>
          <Route path="/Industrial" element={<Industrial/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
