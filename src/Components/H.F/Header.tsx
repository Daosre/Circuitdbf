import Image from "next/image";
import Link from "next/link";
import "../H.F/h.f_css.css";

const Header = () => {
  return (
    <div className="header flex justify-center rounded-[10px] mt-2 w-64 h-48 md:w-96 lg:w-[600px]">
      <Link href={"/Accueil"} className="w-full object-cover flex justify-center items-center">
        <Image
          src={"/Cdb.png"}
          width={500}
          height={200}
          alt="Circuit du Bonheur logo"
        />
      </Link>
    </div>
  );
};

export default Header;
