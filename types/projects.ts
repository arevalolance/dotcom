export type Projects = typeof projects

export const projects = {
  recent: [
    {
      name: "Fandom",
      description:
        "create custom playlists from your favourite show, book, or movies.",
    },
    {
      name: "design-system-template",
      description:
        "a template for your next ui project, built w/ storybook + next.js + tailwind-css",
    },
  ],
  side: [
    {
      name: "Fandom - Create Custom Playlists from Your Favorite Books, Movies, and TV Shows.",
      description: `
      This project uses OpenAI's GPT-3 (text-davinci-003) to generate playlists based on your favourite Book, Movie, or TV Show. The API runs on Vercel Edge Functions.`,
      links: [
        {
          name: "Repository",
          link: "https://github.com/arevalolance/fandom",
        },
      ],
      tools: [
        { name: "TypeScript", icon: "devicon-plain:typescript" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "Spotify", icon: "mdi:spotify" },
        {
          name: "Tailwind CSS",
          icon: "simple-icons:tailwindcss",
        },
      ],
      images: ["/static/images/projects/fandom/1.webp"],
    },
    {
      name: "Design System Template - Turborepo + TailwindCSS + Storybook",
      description:
        "This project is a design system template that makes it easy to create user-interface components with Storybook, TailwindCSS, and React (Next.js). With this template, you can get started building your own design system in minutes.",
      links: [
        {
          name: "Repository",
          link: "https://github.com/arevalolance/design-system-template",
        },
      ],
      tools: [
        { name: "Turborepo", icon: "simple-icons:turborepo" },
        { name: "Storybook", icon: "simple-icons:storybook" },
        { name: "TypeScript", icon: "devicon-plain:typescript" },
        {
          name: "Tailwind CSS",
          icon: "simple-icons:tailwindcss",
        },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
      ],
      images: [],
    },
    {
      name: "Calculator",
      description:
        "This was my first major project during my first year of college. This calculator application uses the Shunting Yard algorithm and Reverse Polish notation to calculate mathematical expressions.",
      links: [
        {
          name: "Application",
          link: "https://github.com/arevalolance/SimpleCalculator",
        },
      ],
      tools: [{ name: "Java", icon: "devicon-plain:java" }],
      images: [],
    },
  ],
  college: [
    {
      name: "Huffman Tree Visualizer",
      description:
        "This project is a visualizing tool for the Huffman encoding algorithm. Given a string or an input text file, the program outputs the step-by-step process to compress the data as well as a graph that visualizes the compression process.",
      links: [
        {
          name: "Application",
          link: "https://github.com/ABCD-EDU/huffman-tree-visualizer",
        },
      ],
      tools: [{ name: "Java", icon: "devicon-plain:java" }],
      images: [
        "/static/images/projects/huffman/1.webp",
        "/static/images/projects/huffman/2.webp",
      ],
    },
    {
      name: "Dijkstra Algorithm Visualizer",
      description: `This application provides a visual tool for understanding the basic search algorithms in a graph data structure. It shows the step-by-step process of how the search happens, making it easier to learn and understand these algorithms.
      `,
      links: [
        {
          name: "Application",
          link: "https://github.com/ABCD-EDU/dijkstra-algorithm-visualizer",
        },
      ],
      tools: [{ name: "Java", icon: "devicon-plain:java" }],
      images: [
        "/static/images/projects/dijkstra/1.webp",
        "/static/images/projects/dijkstra/2.webp",
        "/static/images/projects/dijkstra/3.webp",
      ],
    },
    {
      name: "Guessing Game Java/Python CORBA",
      description:
        "This project is a guessing game that was made using Python and Java. It uses CORBA on the server to manage the communication of messages between the two different languages.",
      links: [
        {
          name: "Application",
          link: "https://github.com/ABCD-EDU/python-java-corba-application",
        },
      ],
      tools: [
        { name: "Java", icon: "devicon-plain:java" },
        { name: "Python", icon: "devicon-plain:python" },
      ],
      images: ["/static/images/projects/corba/1.webp"],
    },
    {
      name: "Events Volunteer Management System",
      description:
        "This is a simple CRUD project that allows volunteers to join specific events in a local community. The program stores information about volunteers, events, and the relationships between them. Volunteers can use the system to find events that they are interested in, and event organizers can use it to manage their volunteers.",
      links: [
        {
          name: "Application",
          link: "https://github.com/ABCD-EDU/volunteer-management-system",
        },
      ],
      tools: [
        { name: "Java", icon: "devicon-plain:java" },
        { name: "MySQL", icon: "devicon-plain:mysql" },
      ],
      images: [],
    },
    {
      name: "Textra - Messaging App",
      description:
        "Textra is a messaging platform for students enrolled in a specific program. It uses socket programming to facilitate communication between users. Textra is a great way for students to stay connected with their classmates and professors, and to collaborate on projects. ",
      links: [
        {
          name: "Application",
          link: "https://github.com/ABCD-EDU/textra-messaging-app",
        },
      ],
      tools: [
        { name: "Java", icon: "devicon-plain:java" },
        { name: "MySQL", icon: "devicon-plain:mysql" },
      ],
      images: [
        "/static/images/projects/textra/1.webp",
        "/static/images/projects/textra/2.webp",
      ],
    },
    {
      name: "Hate Speech Moderation on Social Media",
      description:
        "This research project explored the use of a fine-tuned BERT model for hate speech moderation in social media. I was responsible for creating the web application as a proof of concept for our model. This project was inspired by Twitter and Mastodon.",
      links: [
        {
          name: "Web-app",
          link: "https://github.com/ABCD-EDU/gentoo-webapp",
        },
        {
          name: "Model (Backend)",
          link: "https://github.com/ABCD-EDU/hate-speech-backend",
        },
        {
          name: "Posts Service",
          link: "https://github.com/ABCD-EDU/gentoo-posts",
        },
        {
          name: "Users Service",
          link: "https://github.com/ABCD-EDU/gentoo-users",
        },
        {
          name: "Social Graph Service",
          link: "https://github.com/ABCD-EDU/gentoo-socialgraph",
        },
        {
          name: "Admin Service",
          link: "https://github.com/ABCD-EDU/gentoo-admin",
        },
      ],
      tools: [
        { name: "Go", icon: "devicon-plain:go" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "Python", icon: "devicon-plain:python" },
        { name: "MySQL", icon: "devicon-plain:mysql" },
        {
          name: "Tailwind CSS",
          icon: "simple-icons:tailwindcss",
        },
      ],
      images: [
        "/static/images/projects/gentoo/1.webp",
        "/static/images/projects/gentoo/2.webp",
        "/static/images/projects/gentoo/3.webp",
      ],
    },
    {
      name: "Voice Separation",
      description:
        "This project was our final thesis project. We focused on experimenting with different configurations that could improve the voice separation task with the assistance of an upsampling model. I was assigned to create the proof of concept's frontend and backend, which utilize the developed models.",
      links: [
        {
          name: "Mobile App",
          link: "https://github.com/arevalolance/murakami",
        },
        {
          name: "Backend",
          link: "https://github.com/ABCD-EDU/voice-backend",
        },
      ],
      tools: [
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "Python", icon: "devicon-plain:python" },
        { name: "PostgreSQL", icon: "devicon-plain:postgresql" },
        {
          name: "Apache Airflow",
          icon: "devicon-plain:apacheairflow",
        },
        { name: "Apache Kafka", icon: "simple-icons:apachekafka" },
        { name: "Amazon S3", icon: "simple-icons:amazons3" },
        { name: "FastAPI", icon: "simple-icons:fastapi" },
        { name: "Docker", icon: "simple-icons:docker" },
      ],
      images: [],
    },
    {
      name: "Semantics and Topic Labelling",
      description:
        "This project is an experimental study on using BERT for categorizing posts based on a set of topics provided by the user. I created a web application that can utilize the BERT model to produce metrics per post and a dashboard for analyzing data.",
      links: [
        {
          name: "Webapp",
          link: "https://github.com/arevalolance/kafka",
        },
      ],
      tools: [
        { name: "PostgreSQL", icon: "devicon-plain:postgresql" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        {
          name: "Tailwind CSS",
          icon: "simple-icons:tailwindcss",
        },
      ],
      images: [
        "/static/images/projects/kafka/1.webp",
        "/static/images/projects/kafka/2.webp",
      ],
    },
  ],
}
