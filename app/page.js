import Gallery from "@/components/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl min-h-dvh h-full mx-auto flex flex-col justify-center items-center">
      <div className="m-auto flex flex-col">
        <Gallery />
        <div className="flex flex-col lg:flex-row">
          <Image
            src="/images/image-about-dark.jpg"
            alt="about image"
            width={1440}
            height={700}
            className="w-full lg:w-[30%]"
          />
          <div className="w-full lg:w-[40%] py-8 px-4 bg-white">
            <h1 className="mb-4 text-lg text-black font-bold tracking-[4px] uppercase ">
              About our furniture
            </h1>
            <p className="text-xs text-dark-gray">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <Image
            src="/images/image-about-light.jpg"
            alt="hero"
            width={1440}
            height={700}
            className="w-full lg:w-[30%]"
          />
        </div>
      </div>
    </div>
  );
}
