import Image from "next/image";
import Link from "next/link";
import "../H.F/h.f_css.css";

const Header = () => {
  return (
    <div className="header flex justify-center mt-2 w-64 h-48 md:w-96 lg:w-[600px]">
      <Link href={"/Accueil"}>
        <Image
          src={"/Cdb.png"}
          width={300}
          height={100}
          alt="Circuit du Bonheur logo"
          className="w-full object-cover md:w-full"
        />
      </Link>
    </div>
  );
};

export default Header;
