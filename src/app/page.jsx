
import { SocialMedia, techStack } from '@/lib/data'
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/carousel';
import ContactForm from '@/components/Contact';




export default function Home() {
  return (
    <div className="flex items-center justify-center gap-2 flex-col w-full">

      <div className=" flexCenter flex-col gap-4 text-[#111] bg-[#ffffff] rounded-lg w-[70%] md:h-80 h-96 text-center">
        <h1 className=" capitalize text-3xl">hi there I&apos;M Mohanad</h1>
        <h1 className=" w-[70%] ">My combined education in MIS and passion for development empower me to build web applications with a strong foundation in data-driven decision making</h1>
        <div className='md:flexBetween flexCenter text-3xl w-[25%]  '>
          {SocialMedia.map((data) => (
            <Link className='hover:opacity-50 shadow-lg  transition rounded-full p-2' href={data.link} key={data.icon}>{data.icon}</Link>
          ))}
        </div>
      </div>

      <div className='w-[70%] h-auto flex flex-col lg:flex-row gap-3 rounded-lg'>

          <div className='lg:w-[60%]  bg-black flexCenter rounded-lg flex-col gap-4 py-3'>
            <h1 className='text-[25px]'>Tech Stack</h1>

            <div className=' border-blue-50 border p-5 rounded-lg transition-all flexCenter md:gap-5 gap-2 flex-wrap lg:w-[550px] w-full md:h-60'>
              {techStack.map((data)=>(
                <h1 className='text-5xl' key={data.color}>{data.icon}</h1>
              ))}
            </div>

          </div>


          <div className=' rounded-lg bg-white lg:w-[40%] w-full text-black overflow-hidden'>
            <Carousel/>
          </div>
      </div>

      <div className=' flex justify-start flex-col bg-white text-black w-full h-[640px]' id='cert'>
        <h1>شهايد!</h1>
      </div>


      <div className='flex justify-start flex-col w-[70%] s1' id='Contact'>
        <ContactForm/>
      </div>

          





    </div>
  );
}
