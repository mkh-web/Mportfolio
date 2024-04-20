'use client'

import Link from "next/link";
import { NavbarList } from "@/lib/data";
import { useState } from "react";
import { usePathname } from "next/navigation";



import { motion } from "framer-motion"


export default function SmallMenu() {

    const [menu, setMenu] = useState(false)
    const pathname = usePathname()


    return (
        <>
            <div
              
                className=" md:hidden flexCenter flex-col">
                <button className="flexCenter flex-row gap-2 group-hover:opacity-50 transition hover:!opacity-100"
                    onClick={() => setMenu((prev) => !prev)}>
                    {NavbarList.title}
                    {NavbarList.icon_open}
                </button>

                {menu &&
                    <motion.div 
                    initial={{x: 100 }}  
                    animate={{x: 0 }}
                    transition={{ duration: 0.2 }}
                    
                    className="flex items-center gap-10 flex-col fixed top-0 right-0 pt-7 h-full w-36 bg-[#171717]">
                        <button className="flexCenter flex-row gap-2"
                            onClick={() => setMenu((prev) => !prev)}>
                            {NavbarList.title}
                            {NavbarList.icon_close}
                        </button>
                        {NavbarList.list.map((links) => (
                            <Link href={links.pathname} key={links.title} className={`${pathname === links.pathname && "bg-white text-[#171717] rounded-lg p-2 !opacity-100"}
                            flexCenter gap-2 flex-row`}>
                                {links.title}
                                {links.icon}
                            </Link>
                        ))}
                    </motion.div>
                }
            </div>
        </>
    )
}
