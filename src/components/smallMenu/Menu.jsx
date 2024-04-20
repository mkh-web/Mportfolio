'use client'

import Link from "next/link";
import { NavbarList } from "@/lib/data";
import { useState } from "react";


export default function SmallMenu() {

    const [menu, setMenu] = useState(false)


    return (
        <>
            <div className=" md:hidden flexCenter flex-col">
                <button className="flexCenter flex-row gap-2 group-hover:opacity-50 transition hover:!opacity-100"
                    onClick={() => setMenu((prev) => !prev)}>
                    {NavbarList.title}
                    {NavbarList.icon_open}
                </button>

                {menu &&
                    <div className="flex items-center gap-10 flex-col absolute top-0 right-0 pt-5 h-full w-52 bg-[#171717]">
                        <button className="flexCenter flex-row gap-2"
                            onClick={() => setMenu((prev) => !prev)}>
                            {NavbarList.title}
                            {NavbarList.icon_close}
                        </button>
                        {NavbarList.list.map((links) => (
                            <Link href={links.pathname} key={links.title} className="flexCenter gap-2 flex-row">
                                {links.title}
                                {links.icon}
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}
