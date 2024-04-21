"use client"
import { Tajawal } from "next/font/google";
import { Typewriter } from 'react-simple-typewriter'

const tajawal = Tajawal({
    subsets: ["arabic"],
    weight: '400',
    display: 'swap'//By default 
});


export default function MynameAsComponent() {
    return (
        <>
            <h1 className={` text-3xl hover:opacity-85 w-60 transition cursor-default ${tajawal.className}`}>
                <Typewriter
                    words={['mkh_web', 'مهند خالد حبيشان', 'Mohanad Khalid', 'カタカナ']}
                    loop={true}
                    cursor
                    typeSpeed={200}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
        </>
    );
}