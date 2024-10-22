import Image from "next/image";
import "../H.F/h.f_css.css";

const Header = () => {
  return (
    <div className="header flex justify-center rounded-[10px] mt-2 w-64 h-48 md:w-96 lg:w-[600px]">
      <Image
        src={"/Cdb.png"}
        width={500}
        height={200}
        alt="Circuit du Bonheur logo"
        className="object-cover flex"
      />
    </div>
  );
};

export default Header;
