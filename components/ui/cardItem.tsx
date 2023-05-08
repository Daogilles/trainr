import Image from "next/image";
import Link from "next/link";

const CardItem: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <Link href="/" className="block rounded-lg text-base text-gray-900">
      <Image
        src="/img/abs.jpeg"
        width={200}
        height={200}
        alt="abs"
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="px-3 py-2 border border-1 border-gray-300 rounded-bl-lg rounded-br-lg">
        <p>{props.title}</p>
        <span>{props.description}</span>
      </div>
    </Link>
  );
};

export default CardItem;
