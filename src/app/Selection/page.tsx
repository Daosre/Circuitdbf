"use client";
import Footer from "@/Components/H.F/Footer";
import Header from "@/Components/H.F/Header";
import Admin_Modal from "@/Components/Modal/Admin_Modal";
import Modal from "@/Components/Modal/Modal";
import User_Modal from "@/Components/Modal/User_Modal";
import { getAllCar } from "@/Services/car";
import { car_Props } from "@/Utils/car_type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [roleLS, setRoleLS] = useState("");

  useEffect(() => {
    const Role = window.localStorage.getItem("Role");
    if (Role) {
      setRoleLS(Role);
    }
  }, []);
  const [carAll, setCarAll] = useState<car_Props[]>();
  const { push } = useRouter();
  useEffect(() => {
    getAllCar().then((res) => {
      setCarAll(res.data);
    });
  }, []);
  return (
    <div className="bg-[#FEF4F4] flex flex-col items-center">
      <Header />
      <div
        className="w-full flex flex-row-reverse gap-2 mt-2 mr-2 font-bold cursor-pointer text-[#212121]"
        onClick={() => setShowModal(true)}
      >
        <RxHamburgerMenu className="text-2xl" />
        <p className="font_family">Menu</p>
      </div>
      <h1 className="text-[#212121] font-bold text-2xl m-2">Notre selection</h1>
      <section>
        {carAll &&
          carAll.map((car) => {
            return (
              <div key={car.id} className="text-[#212121]">
                {car.name}
                <Image
                  width={100}
                  height={100}
                  src={`http://localhost:3000/image/view/${car.image}`}
                  alt=""
                />
              </div>
            );
          })}
      </section>
      <Footer />
      {roleLS === "93a121fb-c77f-Ò4352-93bc-90b0e3bd80b5" ? (
        <Admin_Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : roleLS === "7c6862a7-82f9-4254-adab-9c4dd826c2b2" ? (
        <User_Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      ) : (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default page;
