/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { toast } from "react-toastify";
import { car_Props, carAdd_Props } from "../Utils/car_type";

//All Car
export async function getAllCar() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}car/all`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

export async function getImage() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}view/:filename`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Add Car
export async function addCar(car_Props: carAdd_Props) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}car/new`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: car_Props.name,
        description: car_Props.description,
        image: car_Props.image,
        price: Number(car_Props.price),
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Add Image Car
export async function addImageCar(image: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}image/upload`;

  const axiosConfig = {
    headers: {
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      image,
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Delete Car
export async function deleteCar(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}car/delete/${id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      toast.success(res.data.message, {
        position: "top-center",
      });
      return res;
    })

    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-right",
      });
      return e;
    });
}

//Edit Car
export async function editCar(carProps: car_Props) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}car/update/${carProps.id}`;

  const axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      {
        name: carProps.name,
        description: carProps.description,
        image: carProps.image,
        price: carProps.price,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message, {
        position: "top-center",
      });
      return e;
    });
}
