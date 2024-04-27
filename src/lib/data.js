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
        { title: "Certificate", icon: <GrCertificate />, pathname: "/#Certificate" },
        { title: "Contact", icon: <MdContactMail />, pathname: "/#Contact" },
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
    { icon: <FaHtml5 />, color: 'FF6868' },
    { icon: <FaCss3 />, color: '98E4FF' },
    { icon: <IoLogoJavascript />, color: 'FAEF5D' },
    { icon: <SiTailwindcss />, color: 'B6FFFA' },
    { icon: <FaBootstrap />, color: 'E26EE5' },
    { icon: <FaReact />, color: 'ACFADF' },
    { icon: <SiNextdotjs />, color: '#000' },
    { icon: <FaNodeJs />, color: '82CD47' },
    { icon: <FaPhp />, color: '7C83FD' },
    { icon: <SiMysql />, color: '2192FF' },
    { icon: <SiMongodb />, color: '379237' },
    { icon: <SiAdobephotoshop />, color: '293462' },
    { icon: <SiAdobeillustrator />, color: 'FF5403' },
    { icon: <FaFigma  />, color: '35' },
]



