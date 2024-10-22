/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Modal from "@/Components/Modal/Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../style.css";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const { push } = useRouter();
  return (
    <div className="flex flex-col items-center bg-[url('/bg.jpeg')] bg-cover bg-no-repeat md:bg-no-repeat md:bg-cover md:bg-center lg:bg-no-repeat lg:bg-cover lg:bg-center ">
      <Header />
      <div
        className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <RxHamburgerMenu className="text-2xl" />
        <p className="font_family">Menu</p>
      </div>
      <section className="bg-[#F2F2F2] w-64 rounded-[10px] flex flex-col items-center p-4 border-[0.5px] border-[#212121] mt-5 md:w-96 lg:w-[600px]">
        <Image
          width={400}
          height={400}
          src={"/piste.jpg"}
          alt=""
          className="rounded-[10px] md:w-80 lg:w-96"
        />
        <article className="bg-[#FCBFBF] text-[#212121] p-2 rounded-[10px] mt-2 md:w-80 lg:w-96">
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
      <section className="bg-[#F2F2F2] w-64 rounded-[10px] flex flex-col items-center p-4 border-[0.5px] border-[#212121] mt-5 md:w-96 lg:w-[600px]">
        <h2 className="font-bold text-[#212121]">NOS VOITURES</h2>
        <Image
          width={300}
          height={100}
          src={"/piste.jpg"}
          alt=""
          className="rounded-[10px] mt-2 md:w-80 lg:w-96"
        />
        <article className="bg-[#FCBFBF] text-[#212121] text-center p-2 mt-2 md:w-80 lg:w-96">
          <h2 className="font-bold">Conduisez la voiture de vos rêves !</h2>
          <p className="text-sm">
            Nôtre sélection de voiture assez grande venez voir ce qui vous
            intéressent
          </p>
        </article>
        <button
          onClick={() => push("/Selection")}
          className="bg-[#fd3131] rounded-[10px] text-[#F2F2F2] mt-2 btn_Form"
        >
          Voir la sélection
        </button>
      </section>
      <Footer />
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default page;
