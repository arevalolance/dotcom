export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "LANCE",
  description: "Work in progress",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Mind",
      href: "/mind",
      content: [
        {
          title: "Blog",
          description: "I write about life and tech. Check it out.",
          href: "/mind/blog",
        },
        {
          title: "Reading",
          description: "Check out the books I've read recently.",
          href: "/mind/reading",
        },
        {
          title: "Watching",
          description: "Click this if you like watching movies and tv.",
          href: "/mind/watching",
        },
      ],
    },
  ],
}
