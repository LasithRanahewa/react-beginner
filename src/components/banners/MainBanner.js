import appleBanner from "../../images/apple-banner.jpg";
import StandardLink from "../../links/StandardLink";

function MainBanner() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-3">
      <p className="text-[40px] font-semibold">iPhone 14</p>
      <p className="font-thin text-lg">With awesome quality and performance</p>
      <div className="flex flex-row gap-1">
        <StandardLink path="/iphone/iphone-14" name="Learn more >" />
        <StandardLink path="/iphone/buy/iphone-14" name="Buy >" />
      </div>
      <img src={appleBanner} className="w-[800px]" alt="Main-banner" />
    </div>
  );
}

export default MainBanner;
