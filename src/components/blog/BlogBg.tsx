import Image from "next/image";

export default function BlogBg() {
  return (
    <div className="relative aspect-video w-full h-75 lg:h-105">
      <div
        className="absolute w-full h-full z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.880208) 75.52%, #141414 100%), url(image.png)",
        }}
      />
      <Image
        fill
        src={"/blog-bg.png"}
        alt="blog post"
        className="object-center object-cover"
      />
      <h3 className="absolute z-2 text-white text-2xl p-4 md:text-2xl lg:text-5xl font-semibold bottom-5 text-center w-full ">
        The Rise of Artificial Intelligence in Healthcare
      </h3>
    </div>
  );
}
