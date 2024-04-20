'use client'

import Link from "next/link";
import { NavbarList, DropDown } from "@/lib/data";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MynameAsComponent from "./myname";


import { motion } from "framer-motion"


export default function SmallMenu() {

    const [menu, setMenu] = useState(false)
    const pathname = usePathname()
    const [show, setShow] = useState(false);


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
                    <div className="flex items-start gap-3 flex-col fixed top-0 right-0 h-full w-full bg-[#171717]">

                        <div className="flexBetween flex-row w-full p-5 ">

                            <MynameAsComponent />

                            <button className="flexCenter flex-row gap-2"
                                onClick={() => setMenu((prev) => !prev)}>
                                {NavbarList.title}
                                {NavbarList.icon_close}
                            </button>
                        </div>

                        {NavbarList.list.map((links) => (
                            <Link href={links.pathname} key={links.title} className={`${pathname === links.pathname && "bg-white text-[#171717] rounded-lg !opacity-100"}
                            flex justify-between items-center w-full  px-2 flex-row`}>
                                {links.title}
                                {links.icon}
                            </Link>
                        ))}


                        <div className="flex justify-between items-center w-full px-2">
                            <button className="flex justify-between items-center w-full" onMouseEnter={() => setShow((state) => !state)}>
                                {DropDown.title}
                                {show ? (<motion.div
                                    transition={{
                                        ease: "linear",
                                        duration: 0.2,
                                    }}
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 180 }}
                                >{DropDown.DropDown}
                                </motion.div>
                                ) : (DropDown.DropDown)}
                            </button>
                        </div>


                        {show &&
                            <motion.div
                                transition={{
                                    ease: "linear",
                                    duration: 0.2,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-between items-center w-full gap-3 p-2  bg-[#0e0e0e] rounded-lg flex-col">
                                {DropDown.list.map((drop) => (
                                    <Link href={drop.pathname} className="flex items-center justify-between w-full h-full gap-2 rounded-lg">
                                        {drop.title}
                                        {drop.icon}
                                    </Link>
                                ))}
                            </motion.div>
                        }


                    </div >
                }
            </div>
        </>
    )
}
