import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../../../assets/images/home/img1.jpg";
import img2 from "../../../../assets/images/home/img2.jpg";
import img3 from "../../../../assets/images/home/img3.jpg";
import img4 from "../../../../assets/images/home/img4.jpg";
import img5 from "../../../../assets/images/home/img5.jpg";
import img6 from "../../../../assets/images/home/img6.jpg";
import img7 from "../../../../assets/images/home/img7.jpg";
import img8 from "../../../../assets/images/home/img8.jpg";
import img9 from "../../../../assets/images/home/img9.jpg";
import img10 from "../../../../assets/images/home/img10.jpg";
import img11 from "../../../../assets/images/home/img11.jpg";
import img12 from "../../../../assets/images/home/img12.jpg";
import img13 from "../../../../assets/images/home/img13.jpg";
import img14 from "../../../../assets/images/home/img14.jpg";
import img15 from "../../../../assets/images/home/img15.jpg";
import img16 from "../../../../assets/images/home/img16.jpg";
import img17 from "../../../../assets/images/home/img17.jpg";

export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
    };

    return (
      <section className="relative w-full h-[98vh]">
        <Slider {...settings} className="w-full h-[98vh]">
          <div className="w-full h-[98vh]">
            <img
              src={img1}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img2}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img3}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img4}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img5}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img6}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img7}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img8}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img9}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img10}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img11}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img12}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img13}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img14}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img15}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img16}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
          <div className="w-full h-[98vh]">
            <img
              src={img17}
              alt="slide"
              className="w-full h-full object-cover object-center brightness-50 saturate-100"
            />
          </div>
        </Slider>
        <div className="absolute inset-1/2 -translate-x-1/2 w-full h-60 flex flex-col items-center gap-y-7 text-white md:w-[730px] md:h-96 md:-translate-y-1/3">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Find your inspiration.
          </h1>
          <p className="hidden md:block md:text-center md:text-3xl">
            Join the Flickr community, home to tens of billions of photos and 2
            million groups.
          </p>
          <a
            href="blank"
            className="text-xl text-black font-semibold bg-white px-4 py-2 rounded mt-5 hover:text-black/60 md:text-2xl md:px-5 md:py-3"
          >
            Start for free
          </a>
        </div>
      </section>
    );
  }
}
