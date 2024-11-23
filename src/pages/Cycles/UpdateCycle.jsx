import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton";
import { useForm } from "react-hook-form";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import addImage1 from "../../assets/cycle/1.png";
import addImage2 from "../../assets/cycle/2.png";
import addImage3 from "../../assets/cycle/3.png";
import addImage4 from "../../assets/cycle/4.png";
import addImage5 from "../../assets/cycle/5.png";
import addImage6 from "../../assets/cycle/6.png";
import addImage7 from "../../assets/cycle/7.png";
import addImage8 from "../../assets/cycle/8.png";
import useAxiosPublic from "../../customHooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const UpdateCycle = () => {
  const { user } = useContext(AuthContext);
  const updateCycleData = useLoaderData();
  const {
    _id,
    photo,
    name,
    email,
    brand,
    model,
    brakes,
    features,
    description,
    price,
  } = updateCycleData;
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const updatedData = {
      name: data?.name,
      brand: data?.brand,
      model: data?.model,
      brakes: data?.brakes,
      features: data?.features,
      description: data?.description,
      price: data?.price,
    };
    const res = await axiosPublic.put(`/cycles/${_id}`, updatedData);
    console.log(res.data);
    if (res.data?.modifiedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Congrats! successfully Updated your cycle Data",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div>
      <div>
        <GoBackButton />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex justify-center items-center p-4">
            <div className="md:w-1/2 md:p-8">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={addImage1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={addImage8} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={name}
                  {...register("name", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="email"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={user?.email}
                  readOnly
                  {...register("email", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={brand}
                  {...register("brand", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={model}
                  {...register("model", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={brakes}
                  {...register("brakes", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={features}
                  {...register("features", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={description}
                  {...register("description", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="text"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  defaultValue={price}
                  {...register("price", { required: true })}
                />
              </div>
              {/* <div className="relative">
                <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div>
                <input
                  type="file"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  {...register("photo", { required: true })}
                />
              </div> */}
              <div className="flex justify-center">
                <input
                  className="btn btn-outline bg-orange-500 border-none text-white rounded-3xl btn-wide my-3"
                  type="submit"
                  value="Update"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCycle;
