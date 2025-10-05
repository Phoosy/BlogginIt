import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "phoosy.dev",
  DESCRIPTION: "A one-stop shop for all of my yapping",
  EMAIL: "phoosy@phoosy.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const ABOUT: Metadata = {
    TITLE: "About",
    DESCRIPTION: "about me lul",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Bloggin It",
  DESCRIPTION: "and by “it” , haha, well let’s justr say. My pages",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "I dunno if I'm gonna keep this or not, we'll see.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Blue Sky",
    HREF: "https://bsky.app/profile/phoosy.bsky.social",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/phoosy",
  },
  {
    NAME: "Website",
    HREF: "https://phoosy.dev",
  },
  {
    NAME: "Infosec.Exchange (Mastodon)",
    HREF: "https://infosec.exchange/@Phoosy",
  },
  {
    NAME: "x (Twitter)",
    HREF: "https://x.com/PhoosyCat",
  },
];
