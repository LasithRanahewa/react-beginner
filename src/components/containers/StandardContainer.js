import StandardLink from "../../links/StandardLink";

function StandardContainer({ title, description, image, style }) {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center py-3 ${style}`}>
      <p className="text-[40px] font-semibold"> {title} </p>
      <p className="font-thin text-lg">{description}</p>
      <div className="flex flex-row gap-1 py-3">
        <StandardLink path="/iphone/iphone-14" name="Learn more >" />
        <StandardLink path="/iphone/buy/iphone-14" name="Buy >" />
      </div>
      <img src={image} className="w-[400px]" alt="Main-banner" />
    </div>
  );
}

export default StandardContainer;
