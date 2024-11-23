import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ComponentTitle from "../../components/ComponentTitle";
import { FaUserPlus } from "react-icons/fa";
import GoBackButton from "../../components/GoBackButton";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProviders";
import addImage1 from "../../assets/cycle/1.png";
import addImage2 from "../../assets/cycle/2.png";
import addImage3 from "../../assets/cycle/3.png";
import addImage4 from "../../assets/cycle/4.png";
import addImage5 from "../../assets/cycle/5.png";
import addImage6 from "../../assets/cycle/6.png";
import addImage7 from "../../assets/cycle/7.png";
import addImage8 from "../../assets/cycle/8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCycle = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // imgBB photo uploading setup
    const imageFile = { image: data?.photo[0] };
    const resHostImg = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(resHostImg.data);
    if (resHostImg.data?.success) {
      const newCycle = {
        name: data?.name,
        email: data?.email,
        brand: data?.brand,
        model: data?.model,
        brakes: data?.brakes,
        brakes: data?.brakes,
        features: data?.features,
        desciption: data?.desciption,
        cycle: data?.cycle,
        price: data?.price,
        photo: resHostImg.data?.data?.display_url,
      };
      const res = await axiosSecure.post("/cycles", newCycle);
      console.log(res.data);
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Congrats! successfully Added your cycle",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      }
    }
  };
  return (
    <div>
      <GoBackButton />
      <div>
        <ComponentTitle mainTitle="Add Your Cycle" />
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
                  placeholder="Cycle name"
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
                  placeholder="Cycle brand"
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
                  placeholder="Cycle model"
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
                  placeholder="Cycle brakes"
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
                  placeholder="Cycle features"
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
                  placeholder="Cycle Description"
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
                  placeholder="Cycle price"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="relative">
                {/* <div className="absolute top-2 left-2 text-2xl">
                  <FaUserPlus />
                </div> */}
                <input
                  type="file"
                  className="w-full bg-gray-200 py-2 pl-4 rounded-sm mb-2"
                  {...register("photo", { required: true })}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="btn btn-outline bg-orange-500 border-none text-white rounded-3xl btn-wide my-3"
                  type="submit"
                  value="Add Cycle"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCycle;
