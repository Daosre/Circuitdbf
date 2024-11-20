"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center">
      <Header />
      <div className="w-full mt-4">
        <FaArrowLeft
          className="text-[#212121] cursor-pointer text-2xl ml-4"
          onClick={handleBack}
        />
      </div>
      <h2 className="text-[#212121] font-bold mt-4 underline">CONTACT :</h2>
      <section className="bg-[#FCBFBF] w-42 border text-center flex flex-col items-center rounded-[10px] p-4 m-4 gap-2 md:w-96 lg:w-[600px]">
        <section className="text-[#212121] gap-1 flex">
          <p className="font-bold ">Email :</p>
          <p>contact@cdb.com</p>
        </section>
        <section className="text-[#212121] gap-1 flex">
          <p className="font-bold ">Num&eacute;ro :</p>
          <p>+33 1 23 45 67 89</p>
        </section>
        <section className="text-[#212121]">
          <p className="font-bold ">Adresse Postale :</p>
          <p> 123 Routes des Plaisirs, 75000 Paris, France</p>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
