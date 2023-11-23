import { Button, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import Button from '@nextui-org/react';

const handleClick = () => {
  window.location.href = 'https://khafidh-ihyauddin.now.sh/';
};

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section
      className='px-container lg:px-lg flex min-h-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-bg_start to-bg_end py-20 lg:py-32'
      id='home'
    >
      <div className='container flex h-full w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between'>
        <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-start'>
          <h1 className='text-hero-title text-white '>
            Khafidh Ihyauddin Calon DPRD Kabupaten Lamongan
          </h1>
          <h3 className='text-hero-subtitle max-w-lg pt-4'>
            <center>Membangun Negeri Tanpa Melupakan Jati Diri Sebagai Nahdliyin Sejati</center>
          </h3>
          <Button className='mt-5 bg-secondary text-white' size='lg' onClick={handleClick}>
            DAPIL 4 LAMONGAN
          </Button>
        </div>
        <div className='relative '>
          <div
            className='absolute bottom-14 left-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:-left-10'
          >
            <div className='flex h-8 w-8  items-center justify-center rounded-full bg-primary text-white'>
              01
            </div>
            <p className='text-primary-text text-base font-medium'>
              Khafidh Ihyauddin
            </p>
            <Image
              src='/imgku.png'
              alt='Khafidh Ihyauddin'
              className='h-6 w-6 object-cover'
            />
          </div>
          <div
            className='absolute -bottom-5 right-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:right-10'
          >
            <Image
              src='/ppp.svg'
              width={50}
              height={50}
              alt='Logo Partai Persatuan Pembangunan'
              className='h-10 w-10'
            />
            <p className='text-primary-text text-base font-medium'>
              Logo PPP
            </p>
            <Image
              src='/nail.png'
              alt='Khafidh Ihyauddin'
              className='h-6 w-6 rotate-[30deg] object-cover'
            />
          </div>
          <div className='relative overflow-y-hidden rounded-2xl bg-white/20 backdrop-blur-lg'>
            <Image
              src='/khafidh.png'
              alt='Khafidh Ihyauddin'
              className=' relative -bottom-10 z-0 h-[520px] w-[450px] object-cover drop-shadow-2xl sm:h-[550px]'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <p className='text-hero-subtitle pb-5 text-center md:pb-10'>
          Khafidh Ihyauddin
        </p>
        
      </div>
    </section>
  );
}
