import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import "../style.css";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/bg.jpeg')] md:bg-no-repeat md:bg-cover md:bg-center lg:bg-no-repeat lg:bg-cover lg:bg-center ">
      <Header />
      <div className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold">
        <RxHamburgerMenu className="text-2xl" />
        <p className="font_family">Menu</p>
      </div>
      <section className="bg-[#F2F2F2] w-64 rounded-[10px] flex flex-col items-center p-4 border-[0.5px] border-[#212121] mt-5">
        <Image
          width={400}
          height={400}
          src={"/piste.jpg"}
          alt=""
          className="rounded-[10px]"
        />
        <article className="bg-[#FCBFBF] text-[#212121] p-2 rounded-[10px] mt-2">
          <h2 className="font-bold text-center m-2">Ouverture du circuit</h2>
          <h3 className="font-bold">Horaires du circuit :</h3>
          <li>Lundi : 9h00 - 12h00</li>
          <li>Mardi : 9h00 - 12h00</li>
          <li>Mercredi : 9h00 - 12h00</li>
          <li>Jeudi : 9h00 - 12h00</li>
          <li>Vendredi : 9h00 - 12h00 / 13h30 - 18h00</li>
          <li>Samedi : 9h00 - 12h00 / 13h30 - 18h00</li>
          <li>Dimanche : 9h00 - 12h00 / 13h30 - 18h00</li>
        </article>
      </section>
      <section>
        <h2 className="font-bold text-[#212121]">Nos Voitures</h2>
        <Image width={100} height={100} src={""} alt="" />
        <article>
          <h2></h2>
          <p></p>
          <Link
            href={"/Selection"}
            className="bg-[#fd3131] rounded-[10px] text-[#F2F2F2] btn_Form"
          >
            Voir la sélection
          </Link>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default page;
