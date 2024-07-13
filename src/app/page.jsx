
import { SocialMedia, techStack } from '@/lib/data'
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/Contact';




export default function Home() {
  return (
    <div className="flex items-center justify-center gap-2 flex-col w-full">

      <div className=" flexCenter flex-col gap-4 text-[#111] bg-[#ffffff] rounded-lg w-[70%] md:h-80 h-96 text-center">
        <h1 className=" capitalize text-3xl">hi there I&apos;M Mohanad</h1>
        <h1 className=" w-[70%] ">
          
        A web developer that design a website to help business grow up and look informative,
         I'm dedicated to creating appealing user interfaces that enhance the user experience.
        </h1>
        <div className='md:flexBetween flexCenter text-3xl w-[25%]  '>
          {SocialMedia.map((data) => (
            <Link className='hover:opacity-50 shadow-lg  transition rounded-full p-2' href={data.link} key={data.icon}>{data.icon}</Link>
          ))}
        </div>
      </div>


        <h1 className='text-[25px]'>Tech Stack</h1>
      <div className=' h-auto overflow-auto flex items-start justify-center flex-col w-4/5 '>

        <div className='flex flex-row h-60 relative w-[90%] group'>
          {techStack.map((data) => (
            <div className={`item${data.n} absolute z-0 left-[100%] bg-zinc-900 border border-zinc-950 lg:w-52 h-52 w-40 flexCenter flex-col gap-5 rounded-lg cardhover group-hover:opacity-50 transition hover:!opacity-100`} key={data.n}>
              <h1 className='text-5xl'>
                {data.icon}
              </h1>
              <h1 className='text-2xl'>
                {data.txt}
              </h1>
            </div>
          ))}
        </div>


      </div>












    </div>
  );
}
