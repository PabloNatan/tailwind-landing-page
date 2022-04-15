import Container from "components/Container";
import Feature from "components/Feature";
import React from "react";

const Features = () => {
  const features = [
    {
      id: "1",
      title: "Track company-wide progress",
      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "2",
      title: "Advanced built-in reports",
      text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "3",
      title: "Everything you need in one place",
      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <Container>
      <div className="mt-28 flex flex-col md:flex-row md:mt-36 md:justify-between md:items-center">
        <div className="flex flex-col space-y-12 mb-8 md:max-w-sm lg:max-w-md">
          <h2 className="font-bold text-3xl text-center md:text-left">
            What&apos;s different about Manage?
          </h2>
          <p className="text-darkGrayishBlue text-center md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="md:max-w-sm lg:max-w-2xl">
          {features.map(({ text, title, id }, index) => (
            <Feature
              key={id}
              number={String(index + 1)}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
