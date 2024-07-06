import React from "react";
import "./Page2.css";
import Card  from "./Card";
import focus from "../assets/target.svg";
import practical from "../assets/practical.svg";
import filter from "../assets/filter.svg";
import roadmap from "../assets/roadmap.svg";
import resources from "../assets/resources.svg";
import updates from "../assets/updates.svg";

export const Page2 = () => {
  const data = [
    {
      id: 1,
      logo: focus,
      subContent: "Focused Learning Paths",
      content:
        "Simplify your tech journey with curated paths. Dive into programming, web development, or DSA, ensuring a grasp of core concepts without overwhelming details.",
    },
    {
      id: 2,
      logo: practical,
      subContent: "Practical Micro Learning",
      content:
        "Break free from lengthy lectures. Veecsha offers bite-sized, practical micro-learning experiences, providing hands-on, applicable knowledge that seamlessly fits into your schedule.",
    },
    {
      id: 3,
      logo: filter,
      subContent: "Filtered Content",
      content:
        "Explore tailored content filters for a personalized learning journey. Refine your experience based on preferences, ensuring targeted and relevant material that aligns with your unique tech interests.",
    },
    {
      id: 4,
      logo: roadmap,
      subContent: "Guided Roadmaps",
      content:
        "Navigate the tech landscape with clear roadmaps. Progress logically from basics to advanced concepts, building a strong foundation before tackling more complex ideas in step-by-step guides.",
    },
    {
      id: 5,
      logo: resources,
      subContent: "Additional Resources",
      content:
        "Beyond Veecsha, explore supplementary resources, recommended readings, and community forums. Enrich your learning experience both within and outside the platform.",
    },
    {
      id: 6,
      logo: updates,
      subContent: "Continuous Updates",
      content:
        "Tech evolves, and so do we. Veecsha stays current with industry trends, regularly updating content to keep you in sync with the latest advancements. Your learning experience is always fresh and relevant.",
    },
  ];

  return (
    <div id="Services" className="Page2">
      <div className="Con2">
        <p className="Head2">
          Here Is What You Get Out Of <span className="brnd">Veecsha</span>
        </p>
        <div className="SubHead">
          {data.map((d) => (
            <Card
              value={d.id}
              logo={d.logo}
              SubContent={d.subContent}
              Content={d.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
