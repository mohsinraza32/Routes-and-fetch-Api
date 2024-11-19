import MenuList from "./MenuList";
import Logo from "./Logo";
import myLogo from '../logo.svg'


const Header = () => {
    

    const menu = [
        {
            name:"Home",
            path:"/"
        },
        {
            name:"About",
            path:"/about"
        },
        {
            name:"Contact Us",
            path:"/contact-us"
        },
        {
            name:"Services",
            path:"/services"
        },
        {
            name:"Post",
            path:"/post"
        }
    ]


    return(
        <>
            <header>
                    <div class="container">
                            <Logo logo={myLogo}/>
                            <nav>
                               <MenuList menu={menu}/>
                            </nav>
                    </div>
            </header>
        </>
    )
}

export default Header;