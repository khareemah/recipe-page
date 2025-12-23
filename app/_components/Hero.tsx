import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/image-omelette.jpeg"
      alt="Delicious Dish"
      width={600}
      height={210}
      className="rounded-xl mb-5 w-full block"
    />
  );
}
