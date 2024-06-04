import Image from "next/image";
import Pfp from '../public/pfp.jpeg';
import Whatsapp from '../public/whatsapp.png';
import Phone from '../public/phone.png';
import Mail from '../public/mail.png';
import GreatEastern from '../public/greateastern.png'; // Ensure you import the image
import Fintant from  '../public/fintant.png'
export default function Home() {
  return (
      <main className="w-screen h-screen flex justify-center items-center p-10 font-garamond text-light">
        <div className='w-full max-w-lg bg-white h-[90%] rounded-xl p-5 flex flex-col items-center justify-center'>
          <Image src={Pfp} alt={'Profile picture'} className='rounded-full p-3' width={100} height={100} />
          <h1 className='text-3xl font-bold'>Michele Wong</h1>
            <h1 className='text-center pt-3 pb-5'> Medical Life Insurance,
                Group Insurance,
                Will Writing Associates.</h1>


          <p className='text-sm'>Reach for <b> Great</b>, Is What Inspires Us. </p>

          <div className='flex flex-row space-x-3'>
            <a href="https://wa.me/+60 10-212 8575" target="_blank" rel="noopener noreferrer">
              <Image src={Whatsapp} alt={'WhatsApp icon'} className='p-3' width={60} height={60} />
            </a>
            <a href="tel:+60 10-212 8575">
              <Image src={Phone} alt={'Phone icon'} className='p-3' width={60} height={60} />
            </a>
            <a href="mailto:suetpengwong@gmail.com">
              <Image src={Mail} alt={'Mail icon'} className='p-3' width={60} height={60} />
            </a>
          </div>

          <p className='text-sm p-3 text-center'>10-1, Jalan 6/18A, Taman 5, Jalan Ipoh Batu 5, 51200 Kuala Lumpur, Malaysia</p>
          <p className='text-sm text-center'>Appointed Agencies</p>

            <div className='flex flex-row w-full justify-between ml-20 pt-10 gap-5'>
                <div className='w-1/2 h-24'>
                    <Image src={GreatEastern} alt={'Great Eastern logo'} />

                </div>
                <div className='w-1/2 h-24 '>
                    <Image src={Fintant} alt={'Great Eastern logo'} width={120} className='w-20' />

                </div>

            </div>
        </div>
      </main>
  );
}
