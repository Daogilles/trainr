import CardItem from "../ui/cardItem";

const HomeCategory: React.FC<{ title: string }> = (props) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {props.title}
      </h2>
      <div className="flex flex-row gap-4 mt-2">
        <CardItem title="Abs video 1" description="description video 1" />
        <CardItem title="Abs video 2" description="description video 2" />
        <CardItem title="Abs video 3" description="description video 3" />
        <CardItem title="Abs video 4" description="description video 4" />
      </div>
    </section>
  );
};

export default HomeCategory;
