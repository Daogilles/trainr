import HomeCategory from "./homeCategory";

const HomeGrid: React.FC = () => {
  return (
    <>
      <div>
        <HomeCategory title="Abs" />
        <HomeCategory title="Legs" />
        <HomeCategory title="Upper" />
        <HomeCategory title="Fullbody" />
      </div>
    </>
  );
};

export default HomeGrid;
