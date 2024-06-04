import { GrCertificate } from "react-icons/gr";
import { FaProjectDiagram, FaInstagram, FaGithub, FaLinkedin, FaHtml5, FaCss3, FaBootstrap, FaPhp, FaReact, FaNodeJs,FaFigma  } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoIosHome, IoIosArrowUp, IoLogoJavascript } from "react-icons/io";
import { TbMenu } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import { FaRegFileCode, FaXTwitter } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";


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


export const techStack = [
    { icon: <FaHtml5 />, txt:'HTML' ,n:1 },
    { icon: <FaCss3 />, txt:'CSS' ,n:2},
    { icon: <IoLogoJavascript />, txt:'Javascript',n:3 },
    { icon: <SiTailwindcss />, txt:'Tailwind css' ,n:4},
    { icon: <FaBootstrap />, txt:'Bootstrap',n:5 },
    { icon: <FaReact />, txt:'React',n: 6},
    { icon: <SiNextdotjs />, txt: 'Next js' ,n:7},
    { icon: <FaNodeJs />, txt:'Node js' ,n:8},
    { icon: <FaPhp />, txt:'PHP',n: 9},
    { icon: <SiMysql />, txt:'Mysql' ,n:10},
    { icon: <SiMongodb />, txt:'Mongo DB',n:12 },
    { icon: <SiAdobephotoshop />, txt:'Photo shop' ,n:13},
    { icon: <SiAdobeillustrator />, txt:'Illustrator' ,n:14},
    { icon: <FaFigma  />, txt: 'Figma',n:15 },
]



