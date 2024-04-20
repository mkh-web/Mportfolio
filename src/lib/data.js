import { GrCertificate } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { GrClose } from "react-icons/gr";


export const NavbarList = {
    title:"Menu",
    icon_open:<TbMenu />,
    icon_close:<GrClose />,
    list:[
        { title: "Home", icon: <IoIosHome />, pathname: "/" },
        { title: "Certificate", icon: <GrCertificate /> , pathname: "/Certificate" },
        { title: "Projects", icon: <FaProjectDiagram />, pathname: "/Projects" },
        { title: "Contact", icon: <MdContactMail />, pathname: "/#Contact" },
    ]
}
