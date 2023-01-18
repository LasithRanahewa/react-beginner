import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function StandardCaurosel({ data }) {
  return (
    <div>
      <Carousel autoPlay="true" interval="200">
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.imageAlt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default StandardCaurosel;
