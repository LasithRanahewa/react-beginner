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
    image: cimg3,
    imageAlt: "spirited",
  },
  {
    image: cimg2,
    imageAlt: "slow-horses",
  },
];

function Home() {
  return (
    <StandardLayout>
      {/* Main Banner */}
      <MainBanner />

      {/* Box components */}
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

      {/* Carousel */}
      <StandardCaurosel data={CAOURSAL_DATA} />

      {/* Page content */}
      <div className="bg-gray-200">
        <p className="px-[200px] py-5 text-sm text-gray-500">
          Quis proident reprehenderit aliqua ad sunt. Magna do Lorem adipisicing
          reprehenderit nostrud eu reprehenderit esse ullamco voluptate
          exercitation eu quis commodo.Ad sit est sit commodo officia reprehenderit mollit nisi
          adipisicing mollit dolor cupidatat elit fugiat. Do sit proident culpa
          ullamco aliqua commodo quis non nisi esse.Sit et minim mollit
          incididunt velit enim tempor adipisicing sunt cupidatat excepteur
          veniam. Et quis culpa reprehenderit culpa. Culpa officia laborum sint
          proident eu ea ex dolor deserunt deserunt. Sint incididunt tempor anim Lorem magna
          anim deserunt et ullamco sunt sint magna.Officia anim veniam laboris
          nisi voluptate aliquip eiusmod do consectetur ea. Culpa officia
          pariatur velit occaecat exercitation deserunt ullamco pariatur aliqua
          et ea. Ad sit est sit commodo officia reprehenderit mollit nisi
          adipisicing mollit dolor cupidatat elit fugiat. Do sit proident culpa
          ullamco aliqua commodo quis non nisi esse.Sit et minim mollit
          incididunt velit enim tempor adipisicing sunt cupidatat excepteur
          veniam. Et quis culpa reprehenderit culpa. Culpa officia laborum sint
          proident eu ea ex dolor deserunt deserunt.
        </p>
      </div>
    </StandardLayout>
  );
}

export default Home;
