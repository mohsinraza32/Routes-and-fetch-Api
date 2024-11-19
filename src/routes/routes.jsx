import { Routes , Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from "../pages/Services";
import Post from "../pages/Post";

const AppRoutes = () =>{
    return(
        <>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact-us" element={<Contact/>}/>
             <Route path="/services" element={<Services/>}/>
             <Route path="/post" element={<Post/>}/>
        </Routes>
        </>
    )
}


export default AppRoutes;