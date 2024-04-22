import Image from "next/image";

export default function Footer() {
return (
<div className="flex flex-col items-center w-full mt-3">
    <div className="border border-gray-400 w-[50%]" />
    <div className="px-5 flexBetween w-full">
        <h1>mkh-web &copy; all right reserved</h1>
        <Image src='/logo.png' alt="logo" width={50} height={50} className=" rounded-full"/>
    </div>
</div>
);
}