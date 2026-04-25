import logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col justify-center items-center gap-2 my-4">
      <Image src={logo} alt="logo" />
      <p>Journalism Without Fear or Favour.</p>
      <p>{date}</p>
    </div>
  );
};

export default Header;
