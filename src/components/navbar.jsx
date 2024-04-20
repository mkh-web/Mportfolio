import Image from "next/image";
import Link from "next/link";
import { NavbarList } from "@/lib/data";
import SmallMenu from "./smallMenu/Menu";

export default function NavBar() {
    return (
        <section className=" flexBetween flex-row mx-5 mt-2">
            <Image src="/logo.png" alt="icon" width={50} height={50} className=" rounded-full" />

            <div className="md:flexCenter gap-10 group hidden">
                {NavbarList.list.map((links) => (
                    <Link href={links.pathname} key={links.title}  className="flexCenter flex-row gap-2 group-hover:opacity-50 transition hover:!opacity-100">
                            {links.icon}
                            {links.title}
                    </Link>
                ))}
            </div>

            <SmallMenu />
        </section>
    );
}