import Image from "next/image";
import React from "react";

type TestimonialProps = {
  image: {
    avatar_url: string;
    alt: string;
  };
  testimonial: string;
  name: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  testimonial,
  image,
}) => {
  return (
    <div className="bg-gray-100 px-6 pb-6 rounded-md flex items-center flex-col mt-8 min-w-full md:min-w-0">
      <div className="flex flex-col items-center">
        <div className="w-20 flex items-center  -mt-8">
          <Image
            src={image.avatar_url}
            alt={image.alt}
            width="100px"
            height="100px"
          />
        </div>
        <h4 className="text-center text-md mt-6 font-bold">{name}</h4>
      </div>
      <div>
        <p className="text-center text-darkGrayishBlue mt-6">{testimonial}</p>
      </div>
    </div>
  );
};

export default Testimonial;
