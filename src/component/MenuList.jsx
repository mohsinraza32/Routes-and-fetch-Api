import {  NavLink } from "react-router-dom";


const MenuList = ({menu}) => {


    return (
        <>

            <ul class="main_menu">
                {
                    menu.map((item, index) => {
                        return (
                            <>
                                <li key={index}><NavLink to={item.path}>{item.name}</NavLink></li>
                            </>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default MenuList;