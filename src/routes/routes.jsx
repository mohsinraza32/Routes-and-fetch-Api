import { Routes , Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from "../pages/Services";
import Post from "../pages/Post";
import { Books } from "../pages/Books";
import { CreateBook } from "../pages/Books/create-book";

const AppRoutes = () =>{
    return(
        <>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact-us" element={<Contact/>}/>
             <Route path="/services" element={<Services/>}/>
             <Route path="/post" element={<Post/>}/>
             <Route path="/books" element={<Books/>}/>
             <Route path="/create-book/:id?" element={<CreateBook/>}/>
        </Routes>
        </>
    )
}


export default AppRoutes;