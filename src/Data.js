import { FaGithub, FaTwitter, FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGitAlt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiHashnode, SiExpress, SiMongodb } from "react-icons/si";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaGithub />,
  <FaLinkedin />,
  <FaTwitter />,
  <SiHashnode />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    keys: "Name:",
    value: "Mrinmoy Porel"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    keys: "Phone:",
    value: "+91-8013081806"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    keys: "Email :",
    value: "mrinmoy202000@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <SiTailwindcss />, <FaSass />, <FaNodeJs />, <SiExpress />, <SiMongodb />, <FaGitAlt />]

export const experiences = [
  {
    id: 1,
    year: "Aug'22",
    position: "Freelance Technical Writer",
    company: "mrinnnmoy.hashnode.dev"
  },
  {
    id: 2,
    year: "June'22",
    position: "Smart India Hackathon",
    company: ""
  },
  {
    id: 3,
    year: "Nov'21",
    position: "Freelance Web Developer",
    company: "github.com/mrinnnmoy"
  },
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "45+",
    itemName: "Projects Build"
  },
  {
    id: 3,
    number: "14+",
    itemName: "Articles Written"
  },
  {
    id: 4,
    number: "3+",
    itemName: "Hackathons Participated"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Front-end", "Full-Stack", "BlockChain"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Kolkata WB, India."
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "mrinmoy202000@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-8013081806"
  }
]
