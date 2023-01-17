import StandardLayout from "../components/layout/StandardLayout";
import StandardContainer from "../components/containers/StandardContainer";

import MainBanner from "../components/banners/MainBanner";

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

function Home() {
  return (
    <StandardLayout>
      <MainBanner />
      <div className="grid grid-cols-2">
        {DATA.map((item) => (
          <StandardContainer
            title={item.title}
            description={item.description}
            image={item.image}
            style={item.style}
          />
        ))}
      </div>
    </StandardLayout>
  );
}

export default Home;
