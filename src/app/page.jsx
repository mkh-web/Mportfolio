import { SocialMedia } from '@/lib/data'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">

      <div className=" flexCenter flex-col gap-4 text-[#111] bg-[#ffffff] rounded-lg w-[70%] md:h-80 h-96 text-center">
        <h1 className=" capitalize text-3xl">hi there I&apos;M Mohanad</h1>
        <h1 className=" ">a Data-Driven Web Architect, Transforming data into impactful web experiences is my way to bulid a website</h1>
        <div className='md:flexBetween flexCenter text-3xl w-[25%]  '>
          {SocialMedia.map((data) => (
            <Link className='opacity-50 hover:opacity-100 transition' href={data.link} key={data.icon}>{data.icon}</Link>
          ))}
        </div>
      </div>

          





    </div>
  );
}
