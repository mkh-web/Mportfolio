'use client'

import Link from "next/link";
import { NavbarList, DropDown } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion"


export default function NormallList() {

    const pathname = usePathname()
    const [show, setShow] = useState(false);


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="md:flexCenter gap-10 group hidden ">

                {NavbarList.list.map((links) => (
                    <Link href={links.pathname} key={links.title}
                        className={`${pathname === links.pathname && "bg-white text-[#171717] rounded-lg p-2 !opacity-100"}
                     flexCenter flex-row gap-2 group-hover:opacity-50 transition hover:!opacity-100`}>
                        {links.icon}
                        {links.title}
                    </Link>
                ))}

                <div className=" group-hover:opacity-50 transition hover:!opacity-100">
                    <div
                        className="flexCenter flex-row">
                        <button className="flexCenter flex-row gap-2 " onMouseEnter={() => setShow((state) => !state)}>
                            {DropDown.icon}
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

                </div>
                
                {show &&
                    <motion.div onMouseLeave={() => setShow((state) => !state)}
                        transition={{
                            ease: "linear",
                            duration: 0.2,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white text-black rounded-lg absolute right-5 top-16">
                        {DropDown.list.map((drop) => (
                            <button className="flex flex-col gap-3" >
                                <Link href={drop.pathname} className="flex items-center gap-2 p-2 hover:bg-[#eeeeee] rounded-lg">
                                    {drop.icon}
                                    {drop.title}
                                </Link>
                            </button>
                        ))}
                    </motion.div>
                }

            </motion.div>
        </>
    );
}