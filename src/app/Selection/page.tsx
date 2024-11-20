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
import "../style.css";

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
              <div
                key={car.id}
                className="text-[#212121] text-center flex flex-col items-center rounded-[10px] w-[300px] my-10 bg-[#F2F2F2] shadow_card md:w-96 lg:w-[600px]"
              >
                <Image
                  width={300}
                  height={300}
                  src={`http://circuitdubonheur-366a75058d05.herokuapp.com/image/view/${car.image}`}
                  alt=""
                  className="rounded-t-[10px] md:w-96 lg:w-[600px]"
                />
                <h2 className="font-bold p-2 font_family">{car.name}</h2>
                <p className="p-4">{car.description}</p>
                <button className="bg-[#FD3131] text-[#F2F2F2] p-2 rounded-[10px] mb-2 shadow_card">
                  Réservez votre passage
                </button>
              </div>
            );
          })}
      </section>
      <Footer />
      {roleLS === "Admin" ? (
        <Admin_Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      ) : roleLS === "User" ? (
        <User_Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      ) : (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default page;
