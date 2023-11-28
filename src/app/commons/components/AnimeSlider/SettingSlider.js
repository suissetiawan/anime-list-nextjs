const SettingSlider = (slideValue) => {
  return {
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <p
          className={`mt-6 p-[2px] rounded-full ${
            slideValue === i ? "bg-secondary-600" : "bg-foreground-400"
          }`}></p>
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
};

export default SettingSlider;
