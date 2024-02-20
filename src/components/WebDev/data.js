const data = [
  {
    id: 1,
    heading: "Frontend",
  },
  {
    id: 2,
    heading: "Backend",
  },
  {
    id: 3,
    heading: "Database",
  },
  {
    id: 4,
    heading: "Deveops",
  },
  {
    id: 5,
    heading: "Cloud computing",
  },
];
export default data;


const webDev = [
  {
    type: "web",
    cate: [
      {
        head: "Front-end development:",
        content:
          "Focuses on the client-side, what users see and interact with directly user interface (UI) and user experience (UX).",
        sidetech: "Key technologies include:",
        techs: [
          {
            subhead: "HTML",
            explaination:
              ": Hypertext Markup Language, the foundation for structuring web pages and defining content and the website's foundation.",
          },
          {
            subhead: "CSS",
            explaination:
              ": Cascading Style Sheets, controls a website's visual appearance, layout, and styling. Also using frameworks like Bootstrap or Tailwind CSS.",
          },
          {
            subhead: "JavaScript",
            explaination:
              ": Adds dynamic behavior and interactivity to web pages, enabling features like animations and form validation and Adds interactivity with libraries like React, Angular, or Vue.js.",
          },
        ],
      },
      {
        head: "Back-end development:",
        content:
          "Focuses on the server-side, handling requests from the client-side and interacting with databases.",
        sidetech: "Key technologies include:",
        techs: [
          {
            subhead: "Node.js",
            explaination:
              ": A JavaScript runtime environment that allows you to run JavaScript on the server-side, enabling the development of scalable network applications.",
          },
          {
            subhead: "Express.js",
            explaination:
              ": A web application framework for Node.js, used for building APIs and web applications.",
          },
          {
            subhead: "Databases (SQL or NoSQL)",
            explaination:
              ": Storage solutions for web applications, handling data storage and retrieval. Examples include MySQL, MongoDB, PostgreSQL, etc.",
          },
        ],
      },
      {
        head:'Full-stack development',
        content:" building both the front-end (what users see and interact with) and the back-end (the 'behind-the-scenes' workings) of a website or web application. It's like being a chef who can both cook and decorate a cake. Full stack developers know how to handle everything from designing the look of a website to making sure it works smoothly and securely behind the scenes."
      }
    ],
  },
];

export { webDev };
