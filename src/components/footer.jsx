import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center w-full mt-3 p-2">
                <div className="border border-gray-400 w-[50%]" />
                <div className="px-5 flexBetween w-full">
                    <h1>mkh-web &copy; all right reserved</h1>
                    <Image src='/logo.png' alt="logo" width={30} height={30} className=" rounded-full" />
                </div>
            </div>
        </div>
    );
}