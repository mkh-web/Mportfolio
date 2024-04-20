import Link from "next/link";
import { MdErrorOutline} from "react-icons/md";

export default function NotfoundScreen() {

    return (
        <>
            <div className="flexCenter flex-col bg-red-300 bg-opacity-70 gap-7 m-2 p-2 rounded-xl">
                    <h1 className=" text-3xl">
                    <MdErrorOutline />
                    </h1>
                    <div className="flexCenter flex-col">
                    <h1>Sorry, the page that you entered is either in maintenance or being developed</h1>
                    <Link href={"/"} className=" bg-[#8a2d2d] p-3 rounded-lg">Return</Link>
                    </div>
            </div>
        </>
    )
}

