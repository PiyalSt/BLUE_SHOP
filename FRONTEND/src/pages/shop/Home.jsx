import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import assets, { brands, products } from "../../assets/assets";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GiCctvCamera, GiDeliveryDrone } from "react-icons/gi";
import { BsEarbuds, BsFillRouterFill } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { LuCamera } from "react-icons/lu";
import { Link } from "react-router";
import { SlLocationPin } from "react-icons/sl";
import ProductCard from "../../components/common/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const swiperCategoryRef = useRef();
  const swiperBestProductRef = useRef();

  const category = [
    {
      id: 1,
      title: "Mobile",
      icon: HiMiniDevicePhoneMobile,
      path: "/",
    },
    {
      id: 2,
      title: "Drone",
      icon: GiDeliveryDrone,
      path: "/",
    },
    {
      id: 3,
      title: "CCTV",
      icon: GiCctvCamera,
      path: "/",
    },
    {
      id: 4,
      title: "Earbuds",
      icon: BsEarbuds,
      path: "/",
    },
    {
      id: 5,
      title: "Router",
      icon: BsFillRouterFill,
      path: "/",
    },
    {
      id: 6,
      title: "Laptop",
      icon: AiOutlineLaptop,
      path: "/",
    },
    {
      id: 7,
      title: "Monitor",
      icon: FiMonitor,
      path: "/",
    },
    {
      id: 8,
      title: "Camera",
      icon: LuCamera,
      path: "/",
    },
  ];

  return (
    <div className="bg-neutral-200">
      {/* Slider */}
      <div className="px-16 py-6 flex flex-col md:flex-row gap-4">
        {/* Slider */}
        <div className="w-full md:w-3/4 relative">
          <Swiper
            autoplay={true}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="h-full"
            onSwiper={(swiper) => {
              swiperCategoryRef.current = swiper;
            }}
          >
            <SwiperSlide className="w-full h-full">
              <img
                className="w-full h-full rounded-md"
                src={assets.slider_01}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full rounded-md"
                src={assets.slider_02}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full rounded-md"
                src={assets.slider_03}
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          {/* Custom Slider Button */}
          <button
            onClick={() => swiperCategoryRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 z-50 py-2 px-2 left-4 bg-neutral-100 rounded-lg cursor-pointer"
          >
            <HiOutlineChevronLeft className="text-xl" />
          </button>
          <button
            onClick={() => swiperCategoryRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 z-50 py-2 px-2 right-4 bg-neutral-100 rounded-lg cursor-pointer"
          >
            <HiOutlineChevronRight className="text-xl" />
          </button>
        </div>
        <div className="w-full md:w-1/4 flex md:flex-col gap-4 flex-1 h-full">
          <div className="w-full h-full">
            <img
              className="w-full rounded-md"
              src={assets.side_banner_01}
              alt=""
            />
          </div>
          <div className="w-full h-full">
            <img
              className="w-full rounded-md"
              src={assets.side_banner_01}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="py-10 px-16">
        <div className="flex justify-center flex-col items-center gap-1">
          <h2 className="text-neutral-900 text-4xl font-bold">
            Featured Category
          </h2>
          <p className="text-sm text-neutral-800">
            Get Your Desired Product from Featured Category!
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 pt-10">
          {category.map((item) => {
            const IconComponent = item.icon;

            return (
              <Link
                to={item.path}
                key={item.id}
                className="w-full flex items-center justify-center flex-col py-6 px-8 bg-white rounded-md shodow gap-2 group cursor-pointer "
              >
                <IconComponent className="text-2xl md:text-4xl text-neutral-900 group-hover:text-blue-500 duration-300" />
                <p className="font-normal text-neutral-800 text-center group-hover:text-blue-500 duration-300">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Ads */}
      <div className="w-full flex justify-between items-center px-16 bg-linear-to-r from-blue-400 to-blue-800 py-8 my-10">
        <div className="flex items-center gap-4">
          <SlLocationPin className="text-4xl text-white" />
          <div>
            <h2 className="text-3xl font-semibold text-white">
              20+ Physical Stores
            </h2>
            <p className="text-neutral-200">
              Visit Our Store & Get Your Desired IT Product!
            </p>
          </div>
        </div>
        <div>
          <button className="py-4 px-16 bg-white rounded-full text-sm text-neutral-900 cursor-pointer">
            Find Our Store
          </button>
        </div>
      </div>

      {/* Best Products */}
      <div className="py-10 px-16">
        <div className="flex justify-center flex-col items-center gap-1">
          <h2 className="text-neutral-900 text-4xl font-bold gap-2">
            Top Selling Products
          </h2>
          <p className="text-sm text-neutral-800">
            Enjoy Exciting Discounts on your desired Products!
          </p>
        </div>
        <div className="relative mt-18">
          <Swiper
            autoplay={true}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            className="h-full"
            onSwiper={(swiper) => {
              swiperBestProductRef.current = swiper;
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className="">
                <ProductCard
                  title={item.name}
                  newPrice={item.price}
                  oldPrice={item.price}
                  imgURL={item.imgURL}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute -top-12 right-0 flex gap-4 z-20">
            <button
              onClick={() => swiperBestProductRef.current?.slidePrev()}
              className="py-2 px-4 bg-blue-500 rounded-md text-white cursor-pointer active:scale-95 duration-300 transition-all"
            >
              <IoIosArrowBack className="text-xl cursor-pointer" />
            </button>
            <button
              onClick={() => swiperBestProductRef.current?.slideNext()}
              className="py-2 px-4 bg-blue-500 rounded-md text-white cursor-pointer active:scale-95 duration-300 transition-all"
            >
              <IoIosArrowForward className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Ads Banner */}
      <div className="w-full px-16 py-10 rounded-md">
        <img
          className="w-full h-full object-contain rounded-md shadow"
          src={assets.adsBanner}
          alt=""
        />
      </div>

      {/* Our Brands */}
      <div className="py-10 px-16">
        <div className="flex justify-center flex-col items-center gap-1">
          <h2 className="text-neutral-900 text-4xl font-bold gap-2">
            Our Brands
          </h2>
          <p className="text-sm text-neutral-800">
            E-commerce platform dedicated to providing safe
          </p>
        </div>

        <Swiper
          autoplay={true}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          className="w-full mt-10 flex"
        >
          {brands.map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-40 h-24 flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  src={item.imgURL}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Just For You */}
      <div className="py-10 px-16">
        <div className="flex justify-center flex-col items-center gap-1">
          <h2 className="text-neutral-900 text-4xl font-bold gap-2">
            Just For You
          </h2>
          <p className="text-sm text-neutral-800">
            Visit our all product and choise any product
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-8 mt-10">
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
          <ProductCard
            title={"Nothing Products"}
            newPrice={3000}
            oldPrice={2400}
            imgURL={assets.product_05}
          />
        </div>
      </div>

      <div className="w-full pt-10">
        <marquee className="py-4 bg-blue-500 text-neutral-50 font-medium tracking-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          deleniti dicta facilis ipsam provident repellat laboriosam, odit, ipsa
          quae praesentium quis incidunt distinctio consectetur optio velit?
          Nihil praesentium est labore.
        </marquee>
      </div>
    </div>
  );
};

export default Home;
