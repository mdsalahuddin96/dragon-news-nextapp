import leftImage1 from '@/assets/left-img1.png'
import leftImage2 from '@/assets/left-img2.png'
import leftImage3 from '@/assets/left-img3.png'
import Image from 'next/image';
import { FaCalendar } from 'react-icons/fa';
const Advertise = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center gap-2 mt-10 ">
        <Image
          src={leftImage1}
          alt="a girl stand with a playcard"
          width={200}
          height={200}
          className="w-full"
        />
        <h1 className="font-semibold text-lg text-[#403F3F]">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h1>
        <div className="flex items-center gap-2 text-[#9F9F9F]">
          <span className="mr-4 text-[#403F3F]">Sports</span> <FaCalendar /> Jan
          4, 2022
        </div>
      </div>
      <div className="flex flex-col  justify-center gap-2 mt-10 ">
        <Image
          src={leftImage2}
          alt="a girl stand with a playcard"
          width={200}
          height={200}
          className="w-full"
        />
        <h1 className="font-semibold text-lg text-[#403F3F]">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h1>
        <div className="flex items-center gap-2 text-[#9F9F9F]">
          <span className="mr-4 text-[#403F3F]">Sports</span> <FaCalendar /> Jan
          4, 2022
        </div>
      </div>
      <div className="flex flex-col  justify-center gap-2 mt-10 ">
        <Image
          src={leftImage3}
          alt="a girl stand with a playcard"
          width={200}
          height={200}
          className="w-full"
        />
        <h1 className="font-semibold text-lg text-[#403F3F]">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h1>
        <div className="flex items-center gap-2 text-[#9F9F9F]">
          <span className="mr-4 text-[#403F3F]">Sports</span> <FaCalendar /> Jan
          4, 2022
        </div>
      </div>
    </div>
  );
};

export default Advertise;
