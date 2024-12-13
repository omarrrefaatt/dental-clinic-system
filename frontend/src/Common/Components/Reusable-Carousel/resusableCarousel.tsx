import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ReusableCarouselProps {
  children: React.ReactNode;
}

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({ children }) => {
  const settings = {
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
  };

  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-3/5">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default ReusableCarousel;
