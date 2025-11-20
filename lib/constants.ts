// Centralized events data for use across the app
// Images referenced here should exist in /public/images

export type EventItem = {
  title: string;
  image: string; // path under /public
  slug: string;
  location: string;
  date: string; // human-readable date
  time: string; // human-readable time range
};

export const events: EventItem[] = [
  {
    title: "React Conf 2025",
    image: "/images/event1.png",
    slug: "react-conf-2025",
    location: "Las Vegas, NV, USA",
    date: "April 22–24, 2025",
    time: "9:00 AM – 5:30 PM PT",
  },
  {
    title: "Google I/O 2025",
    image: "/images/event2.png",
    slug: "google-io-2025",
    location: "Shoreline Amphitheatre, Mountain View, CA, USA + Online",
    date: "May 13–15, 2025",
    time: "8:30 AM – 6:00 PM PT",
  },
  {
    title: "WWDC 2025 (Apple Worldwide Developers Conference)",
    image: "/images/event3.png",
    slug: "wwdc-2025",
    location: "Cupertino, CA, USA + Online",
    date: "June 9–13, 2025",
    time: "10:00 AM – 6:00 PM PT",
  },
  {
    title: "AWS re:Invent 2025",
    image: "/images/event4.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "December 1–5, 2025",
    time: "9:00 AM – 6:00 PM PT",
  },
  {
    title: "JSNation 2025",
    image: "/images/event5.png",
    slug: "jsnation-2025",
    location: "Amsterdam, Netherlands + Online",
    date: "June 12–13, 2025",
    time: "9:30 AM – 5:30 PM CEST",
  },
  {
    title: "HackMIT 2025",
    image: "/images/event6.png",
    slug: "hackmit-2025",
    location: "Cambridge, MA, USA",
    date: "September 20–21, 2025",
    time: "48-hour hackathon",
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event2.png",
    slug: "nextjs-conf-2025",
    location: "San Francisco, CA, USA + Online",
    date: "October 7, 2025",
    time: "9:00 AM – 5:00 PM PT",
  },
  {
    title: "KubeCon + CloudNativeCon North America 2025",
    image: "/images/event3.png",
    slug: "kubecon-na-2025",
    location: "Austin, TX, USA",
    date: "November 18–21, 2025",
    time: "9:00 AM – 6:00 PM CT",
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event4.png",
    slug: "github-universe-2025",
    location: "San Jose, CA, USA + Online",
    date: "October 22–23, 2025",
    time: "9:00 AM – 5:30 PM PT",
  },
  {
    title: "DevFest 2025 (GDG Global)",
    image: "/images/event5.png",
    slug: "devfest-2025",
    location: "Multiple cities worldwide",
    date: "Sept–Dec 2025",
    time: "Varies by location",
  },
];

export default events;
