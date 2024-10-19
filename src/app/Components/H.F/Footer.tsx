import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-[#212121] flex">
        <section className="flex flex-col items-center text-center gap-2 p-2 shadow-[0_0_4px_2px_#F2F2F2] rounded-[10px] m-2 w-[256px] h-[210px] bg-[#4A4A4A]">
          <h2 className="h2">Circuit Du Bonheur</h2>
          <p className="">123 Routes des Plaisirs, 75000 Paris, France</p>
          <a href="#">+33 1 23 45 67 89</a>
          <a href="#">contact@cdb.com</a>
        </section>
        <section className="flex flex-col text-center items-center mt-2 mb-2 mr-2 gap-2 p-2 shadow-[0_0_4px_2px_#F2F2F2] rounded-[10px] bg-[#4A4A4A]">
          <h2 className="font-bold text-[16px]">Suivez-nous!</h2>
          <div className="flex items-center gap-1">
            <FaInstagram className="text-2xl" />
            <p>@Cdb</p>
          </div>
          <div className="flex items-center gap-1">
            <FaXTwitter className="text-2xl" />
            <p>#Cdb</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFacebookSquare className="text-2xl" />
            <p>Cdb</p>
          </div>
        </section>
      </div>
      <div className="bg-[#212121]">
        <ul className="flex flex-col items-center gap-2">
          <li>© Copyright</li>
          <li>Mention légales</li>
          <li>Conditions générales de vente</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
