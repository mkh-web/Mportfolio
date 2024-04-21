import { GrCertificate } from "react-icons/gr";
import { FaProjectDiagram, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoIosHome, IoIosArrowUp } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { FaRegFileCode, FaXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";


export const NavbarList = {
    title: "Menu",
    icon_open: <TbMenu />,
    icon_close: <GrClose />,
    list: [
        { title: "Home", icon: <IoIosHome />, pathname: "/" },
        { title: "Certificate", icon: <GrCertificate />, pathname: "/Certificate" },
        { title: "Contact", icon: <MdContactMail />, pathname: "/Contact" },
    ]
}
export const DropDown = {
    title: "Projects",
    icon: <FaProjectDiagram />,
    DropDown: <IoIosArrowUp />,
    list: [
        { title: "Snippsets", icon: <FaRegFileCode />, pathname: "/snippsets" },
        { title: "Web Sites", icon: <CgWebsite />, pathname: "/web_sites" },

    ]
}

export const SocialMedia = [
        { icon: <FaInstagram />, link: 'https://www.instagram.com/mkh.web' },
        { icon: <FaXTwitter />, link: 'https://twitter.com/mohnd_khalid' },
        { icon: <FaGithub />, link: 'https://github.com/mkh-web' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mohndkhalid' },
    ]




