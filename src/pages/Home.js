import StandardLayout from "../components/layout/StandardLayout";
import StandardContainer from "../components/containers/StandardContainer";
import StandardCaurosel from "../components/caurosels/StandardCaurosel";

import MainBanner from "../components/banners/MainBanner";

// Caurosel images
import cimg1 from "../images/movies/emancipation.jpg";
import cimg2 from "../images/movies/slow-horses.jpg";
import cimg3 from "../images/movies/spirited.png";

//images
import img1 from "../images/iphone-se.jpg";
import img2 from "../images/airpods.jpeg";
import img3 from "../images/ipad.jpg";
import img4 from "../images/iwatch.jpg";

const DATA = [
  {
    title: "iPhone SE",
    description: "With awesome quality and performance",
    image: img1,
    style: "bg-gray-100",
  },
  {
    title: "Airpods",
    description: "With awesome quality and performance",
    image: img2,
  },
  {
    title: "iPad",
    description: "With awesome quality and performance",
    image: img3,
  },
  {
    title: "iWatch",
    description: "With awesome quality and performance",
    image: img4,
    style: "bg-gray-100",
  },
];

const CAOURSAL_DATA = [
  {
    image: cimg1,
    imageAlt: "emancipation",
  },
  {
    image: cimg2,
    imageAlt: "slow-horses",
  },
  {
    image: cimg3,
    imageAlt: "spirited",
  },
];

function Home() {
  return (
    <StandardLayout>
      <MainBanner />
      <div className="grid grid-cols-2">
        {DATA.map((item, index) => (
          <StandardContainer
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            style={item.style}
          />
        ))}
      </div>
      <StandardCaurosel data={CAOURSAL_DATA} />
    </StandardLayout>
  );
}

export default Home;
