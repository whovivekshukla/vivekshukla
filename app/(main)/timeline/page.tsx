import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "A summary of my journey and experiences.",
};

const TimelineItem = ({ age, description }) => (
  <li className="mb-4 ml-4">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
          <span className="text-xs font-medium leading-none text-gray-600">
            {age}
          </span>
        </div>
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </li>
);

export default function TimelinePage() {
  const timelineData = [
    { age: 12, description: "Started programming" },
    { age: 13, description: "Made my first browser in C# for Windows" },
    {
      age: 14,
      description: "Used LAMP tech stack extensively to build full stack apps",
    },
    { age: 15, description: "Had a YouTube channel to teach programming" },
    {
      age: 16,
      description:
        "Made an Android app called Seeinks to stream videos from links (couldn't afford netflix back then)",
    },
    { age: 17, description: "Got sick, got panic disorder and DPDR disorder" },
    { age: 18, description: "Prepared for IIT JEE" },
    { age: 19, description: "Still having panic attacks and DPDR" },
    { age: 20, description: "Learned data analysis from DataCamp" },
    {
      age: 20,
      description:
        "Started learning backend development from John Smilga videos",
    },
    {
      age: 21,
      description:
        "Made projects like a drone perimeter inspection system and Mood (an AI journal)",
    },
    {
      age: 22,
      description: "Made an app called UltraDiet - an AI diet planner",
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Timeline</h1>

      <ol className="border-l border-gray-200 pl-4">
        {timelineData.map(({ age, description }, index) => (
          <TimelineItem key={index} age={age} description={description} />
        ))}
      </ol>
    </section>
  );
}
