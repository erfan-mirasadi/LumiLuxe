import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Glamorous Aura
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Step into a world where fashion transcends seasons merging elegance,
            femininity, and timeless design in every shimmer and silhouette.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/ceremony/ceremony-1.mp4"
            title={
              <>
                Luxe<b>v</b>eil
              </>
            }
            description="A soft, flowing masterpiece designed to make your everyday feel like a runway moment."
            isComingSoon
            autoPlay
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/ceremony/ceremony-2.mp4"
              title={
                <>
                  S<b>ere</b>in
                </>
              }
              description="Named after the light evening mist delicate, rare, and beautifully calm."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/ceremony/ceremony-3.mp4"
              title={
                <>
                  <b>Eclipta</b>
                </>
              }
              description="A bold blend of contrast — shadow meets shimmer in this powerfully feminine design."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/ceremony/ceremony-4.mp4"
              title={
                <>
                  <b></b>Vel<b>ou</b>ra
                </>
              }
              description="Soft yet statement-making. A fabric story woven with elegance and intention."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-[#DDA853] p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/ceremony/details-1.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Features;
