import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10 md:w-full">
      <div className="bg-[#212121] flex">
        <section className="flex flex-col items-center text-center gap-2 p-2 shadow-[0_0_4px_2px_#F2F2F2] rounded-[10px] m-2 bg-[#4A4A4A] md:w-2/3">
          <h2 className="h2">Circuit Du Bonheur</h2>
          <p className="">123 Routes des Plaisirs, 75000 Paris, France</p>
          <a href="#">+33 1 23 45 67 89</a>
          <Link href="/Contact">contact@cdb.com</Link>
        </section>
        <section className="flex flex-col text-center items-center mt-2 mb-2 mr-2 gap-2 p-2 shadow-[0_0_4px_2px_#F2F2F2] rounded-[10px] bg-[#4A4A4A] md:w-1/2">
          <h2 className="font-bold text-[16px] md:text-[22px]">Suivez-nous!</h2>
          <div className="flex items-center gap-1 font_family">
            <FaInstagram className="text-2xl" />
            <Link href="#">@Cdb</Link>
          </div>
          <div className="flex items-center gap-1">
            <FaXTwitter className="text-2xl" />
            <Link href="#">#Cdb</Link>
          </div>
          <div className="flex items-center gap-1">
            <FaFacebookSquare className="text-2xl text-[#1877F2]" />
            <Link href="#">Cdb</Link>
          </div>
        </section>
      </div>
      <div className="bg-[#212121]">
        <ul className="flex flex-col items-center gap-2">
          <li className="">
            <Link href={"#"}>© Copyright</Link>
          </li>
          <li className="">
            <Link href={"/Mentionslegales"}>Mention Légales</Link>
          </li>
          <li className="">
            <Link href={"#"}>Conditions générales des ventes</Link>
          </li>        </ul>
      </div>
    </div>
  );
};

export default Footer;
