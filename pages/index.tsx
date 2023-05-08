// import Link from "next/link";

import HomeGrid from "@/components/home/homeGrid";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Homepage
      </h1>
      <HomeGrid />
    </>
  );
};

export default Home;
