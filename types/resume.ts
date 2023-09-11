export type Resume = typeof resume

export const resume = {
  experiences: [
    {
      company: "NOAH Business Applications",
      link: "https://noahapplication.com/",
      duration: "2022",
      responsibilities: [
        {
          title: "Business Application Developer",
          description:
            "Ensured system quality, managed documentation, and improved data validation.",
        },
      ],
    },
    {
      company: "Saint Louis University - COMELEC",
      duration: "2020",
      responsibilities: [
        {
          title: "Student Developer",
          description:
            "Designed dashboard, performed quality assurance, and provided on-site technical support for fair voting.",
        },
      ],
    },
    {
      company: "Cabanatuan City Police Station",
      duration: "2018",
      responsibilities: [
        {
          title: "Trainee",
          description:
            "Managed case documents, handled police clearances, and led efficient team.",
        },
      ],
    },
  ],
  now: [
    {
      company: "Freelance",
      duration: "Now",
      responsibilities: [
        {
          title: "Front-end Developer",
          description:
            "Playing a key role in the creation of a small SaaS product, with a current focus on crafting a landing page.",
        },
        {
          title: "Web Developer",
          description:
            "Building landing pages for wrestling organizations while upgrading and migrating the project to modern technologies.",
        },
      ],
    },
  ],
}
