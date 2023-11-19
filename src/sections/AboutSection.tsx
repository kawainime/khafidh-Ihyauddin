import { Button, Image } from '@nextui-org/react';
import { ClipboardEdit } from 'lucide-react';

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className='px-container py-20'>
      <div className='flex flex-col items-stretch justify-center gap-14 lg:flex-row lg:items-center lg:justify-between'>
        <div className='lg:max-w-xl xl:max-w-2xl'>
          <h1 className='text-hero-title text-primary-text'>
            Siapa Itu Khafldh Ihyauddln?
          </h1>
          <p className='text-primary-text mt-5 text-medium'>
            Mas Khafidh-Milenial Pemilih Rasional 
Khafldh Ihyauddln sosok MIlenlal Lamongan Ini, Sejak duduk di bangku sekolah sudah bergelut dan akrab dengan organisasi karena Itu Passlon tersendiri bagi dirinya untuk mengasah diri dan berproses panjang dalam keglatan soslal dan kemasyarakatan, menebar manfaat dan berbuat nyata dalam kehldupan sehari-hari baginya adalah panggllan. Sekarang Mas Khafidh menJadi SEKRETARIS DPC. PPP. KAB. LAMONGAN (Tahun 2021-2026) Hal Itu semakin mematangkan langkahnya untuk menebar manfaat lebih banyak dan luas bagi masyarakat di Kabupaten Lamongan, khususnya di dapil 4. 
          </p>
          <Button
            className='mt-5 bg-secondary text-white'
            radius='sm'
            startContent={<ClipboardEdit />}
            size='lg'
          >
            Daftar Sebagai Relawan
          </Button>
        </div>
        <div className='relative'>
          <div className='flex items-center justify-center rounded-2xl bg-gradient-to-b from-bg_start to-bg_end'>
            <Image
              src='/tentang-saya.png'
              alt='Khafldh Ihyauddln'
              className='z-0 h-[520px] w-[450px] object-cover sm:h-[550px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
