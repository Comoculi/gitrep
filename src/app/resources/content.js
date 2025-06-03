import { Logo } from "@/once-ui/components";

const person = {

};

const newsletter = {
  display: true,
  title: "Subscribe to Endeds Aerodynamics's Newsletter",
  description: (
      "Subscribe to Endeds Aero updates and be the first to hear about our latest tech, product launches, and future plans."
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/107081441",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${"javidanalizade@endedsaero.com"}`,
  },
];

const home = {
  path: "/",
  image: "src/app/resources/images/homepage.png",
  label: "Home",
  title: `Endeds Aerodynamics`,
  description: `Official website of Endeds Aerodynamics`,
  headline: <>Building the future</>,
  subline: (
    <>
      At Endeds Aero, we don’t just imagine the future — we build it.
      We exist to challenge the limits of technology and transform what once seemed impossible into everyday reality. From clean energy innovations to next-generation aerospace solutions, our mission is bold: to reshape the world through fearless engineering and visionary design.
    </>
  ),
};

const about = {

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Latest blog posts by Endeds Aerodynamics",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects`,
  description: ``,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};
const starcooler = {
  path: "/starcooler",
  label: "Starcooler",
  title: `Starcooler`,
  description: `The new gen AC technology`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
};

export { person, social, newsletter, home, about, blog, work, gallery, starcooler };
