import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { MdOutlineSavings } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";

const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome
    },
    {
        name: "Savings",
        href: "/savings",
        icon: MdOutlineSavings
    },
    {
        name: "Portfolio",
        href: "/portfolio",
        icon: HiOutlineCollection
    },
    {
        name: "Contact",
        href: "/contact",
        icon: TiContacts
    }
];

const Sidebar = () => {

    const {isCollapsedSidebar, toggleSidebarCollapseHandler} =
     useContext(SidebarContext);

    return ( 
    <div className="sidebar_wrapper">
        <button className="btn" onClick={toggleSidebarCollapseHandler}><MdOutlineKeyboardArrowLeft/></button>
        <aside className="sidebar" data-collapse={isCollapsedSidebar}>
            <div className="sidebar_top">
                <Image 
                src="/money-bag.jpg" 
                width={80} 
                height={80}
                className="sidebar_logo"
                alt="logo"
                />
                <p className="sidebar_logo-name"> Finance App</p>
            </div>
            <ul className="sidebar_list">
                {sidebarItems.map(({ name, href, icon: Icon}) => (
                    <li className="sidebar_item" key={name}>
                        <Link href={href} className="sidebar_link">
                            <span  className="sidebar_icon">
                                <Icon/>
                            </span>
                        <span className="sidebar_name">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    </div> 
    );
}
 
export default Sidebar;