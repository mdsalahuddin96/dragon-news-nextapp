import Image from "next/image";
import swimming from '@/assets/swimming.png'
import classroom from '@/assets/class.png'
import playground from '@/assets/playground.png'

const RightSideAdvertise = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center gap-2 mt-10 ">
        <Image
          src={swimming}
          alt="a girl swim in pool"
          width={200}
          height={200}
          className="w-full"
        />
        <Image
          src={classroom}
          alt="classroom"
          width={200}
          height={200}
          className="w-full"
        />
        <Image
          src={playground}
          alt="playground"
          width={200}
          height={200}
          className="w-full"
        />
        
      </div>
    </div>
  );
};

export default RightSideAdvertise;
