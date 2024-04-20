'use client'

import Link from "next/link";
import { NavbarList } from "@/lib/data";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion"


export default function NormallList() {

    const pathname = usePathname()



    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}

                className="md:flexCenter gap-10 group hidden">
                {NavbarList.list.map((links) => (
                    <Link href={links.pathname} key={links.title}
                        className={`${pathname === links.pathname && "bg-white text-[#171717] rounded-lg p-2 !opacity-100"}
                     flexCenter flex-row gap-2 group-hover:opacity-50 transition hover:!opacity-100`}>
                        {links.icon}
                        {links.title}
                    </Link>
                ))}
            </motion.div>
        </>
    );
}