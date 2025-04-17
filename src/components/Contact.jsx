import { Link } from "react-router-dom";
import Button from "./button";

function ImageClipBox({ src, clipClass }) {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden ">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1 "
            src="img/contact-1.jpg"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 "
            src="img/contact-3.jpg"
          />
        </div>

        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="img/contact-2.png"
            clipClass="absolute md:scal-125 "
          />
          <ImageClipBox
            src="img/contact-2.jpeg"
            clipClass="sword-man-clip-path md:125"
          />
        </div>

        <div className="flex flex-col items-center text-center ">
          <p className="font-general text-[10px] uppercase ">join lumiluxe</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]  ">
            Let’s shape <br />
            the future of <br />
            feminine fashion
            <br />
            together
          </p>
          <Link to={"/contact"}>
            <Button title="contact us" containerClass="mt-10 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
