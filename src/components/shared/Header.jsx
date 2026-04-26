import logo from "@/assets/logo.png";

import { Button } from "@heroui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col justify-center items-center gap-2 my-4 container mx-auto ">
      <Image src={logo} alt="logo" />
      <p>Journalism Without Fear or Favour.</p>
      <p>{date}</p>
      <div className="flex items-center p-4 bg-[#F3F3F3] mt-4 w-full">
        <Button className="rounded-none bg-[#D72050]">Latest</Button>
        <Marquee pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
