import Container from "components/Container";
import Testimonial from "components/Testimonial";
import React from "react";
import { ITestimonial } from "types/Testimonial";

const Testimonials = () => {
  const testimonials: ITestimonial[] = [
    {
      id: "1",
      name: "Anisha Li",
      image: {
        avatar_url: "/img/avatar-anisha.png",
        alt: "a woman with a sunglass",
      },
      testimonial:
        "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: "2",
      name: "Ali Bravo",
      image: {
        avatar_url: "/img/avatar-ali.png",
        alt: "a woman",
      },
      testimonial:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      id: "3",
      name: "Richard Watts",
      image: {
        avatar_url: "/img/avatar-richard.png",
        alt: "a man",
      },
      testimonial:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
  ];
  return (
    <Container>
      <div className="mt-12 flex flex-col">
        <div>
          <h2 className="font-bold text-3xl text-center mb-20">
            What&apos;s Different About Manage?
          </h2>
        </div>

        <div className="flex overflow-hidden md:space-x-8 mb-10">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <button className="btn-primary  px-8 py-2 mx-auto">Get Started</button>
      </div>
    </Container>
  );
};

export default Testimonials;
