import Empty_Cart from "../assets/images/projects/kh-shop/Empty_Cart.png";
import khShopHome from "../assets/images/projects/kh-shop/home_page.png";
import Product_Details from "../assets/images/projects/kh-shop/Product_Details.png";
import Products_Page from "../assets/images/projects/kh-shop/Products_Page.png";
import Shopping_Cart from "../assets/images/projects/kh-shop/Your_Cart.png";

import khalaf_Online_Store from "../assets/images/projects/khalaf_Online_Store/khalaf_Online_Store.png";

import dashboard from "../assets/images/projects/dashboard/dashboard.png";
import dashboard2 from "../assets/images/projects/dashboard/dashboard2.png";
import dashboard3 from "../assets/images/projects/dashboard/dashboard3.png";
import dashboard4 from "../assets/images/projects/dashboard/dashboard4.png";
import dashboard5 from "../assets/images/projects/dashboard/dashboard5.png";

import healthy_food from "../assets/images/projects/healthy-Food/Healthy-Food.png";

import lasles_vpn from "../assets/images/projects/Lasles-VPN-Service/image1.png";
import lasles_vpn2 from "../assets/images/projects/Lasles-VPN-Service/image2.png";
import lasles_vpn3 from "../assets/images/projects/Lasles-VPN-Service/image3.png";
import lasles_vpn4 from "../assets/images/projects/Lasles-VPN-Service/image4.png";

import Leon_Template1 from "../assets/images/projects/leon-Template/image1.png";
import Leon_Template2 from "../assets/images/projects/leon-Template/image2.png";
import Leon_Template3 from "../assets/images/projects/leon-Template/image3.png";
import Leon_Template4 from "../assets/images/projects/leon-Template/image4.png";
import Leon_Template5 from "../assets/images/projects/leon-Template/image5.png";

import kasper_template1 from "../assets/images/projects/kasper-template/image1.png";
import kasper_template2 from "../assets/images/projects/kasper-template/image2.png";
import kasper_template3 from "../assets/images/projects/kasper-template/image3.png";
import kasper_template4 from "../assets/images/projects/kasper-template/image4.png";
import kasper_template5 from "../assets/images/projects/kasper-template/image5.png";

import calculator1 from "../assets/images/projects/calculator/image1.png";
import calculator2 from "../assets/images/projects/calculator/image2.png";

import todoApp1 from "../assets/images/projects/todo-app/image1.png";
import todoApp2 from "../assets/images/projects/todo-app/image2.png";

import special_design1 from "../assets/images/projects/special-design/image1.png";
import special_design2 from "../assets/images/projects/special-design/image2.png";
import special_design3 from "../assets/images/projects/special-design/image3.png";
import special_design4 from "../assets/images/projects/special-design/image4.png";

const projects = [
  {
    id: "calculator",
    title: "Calculator",
    featured: false,
    category: "Web Application",
    description:
      "A responsive calculator built from scratch using HTML, CSS, and JavaScript, with arithmetic operations, theme switching, and keyboard support.",
    image: calculator1,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Responsive design",
      "Basic arithmetic operations",
      "Dark and light themes",
      "Keyboard support",
      "Interactive calculator UI",
    ],
    screenshots: [calculator1, calculator2],

    liveUrl: "https://calculator-tau-rouge-90.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/calculator",
  },
  {
    id: "todo-app",
    title: "Todo App",
    featured: false,
    category: "Web Application",
    description:
      "A responsive todo web application built with HTML, CSS, and JavaScript, featuring task management, filtering, theme switching, and local storage persistence.",
    image: todoApp1,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6 Modules",
      "LocalStorage",
    ],
    features: [
      "Add and delete tasks",
      "Complete and filter tasks",
      "Dark and light themes",
      "Local storage persistence",
      "Responsive design",
    ],
    screenshots: [todoApp1, todoApp2],

    liveUrl: "https://ahmed-khalaf1223.github.io/todo-app/",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/todo-app",
  },
  {
    id: "special-design",
    title: "Special Design",
    category: "Web Design",
    description:
      "A responsive creative agency website built from scratch using HTML, CSS, and JavaScript, featuring customizable themes, interactive sections, image galleries, and smooth navigation.",
    image: special_design1,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Local Storage",
    ],
    features: [
      "Fully responsive design",
      "Customizable color themes",
      "Random background slider",
      "Interactive image gallery",
      "Responsive navigation menu",
    ],

    screenshots: [special_design2, special_design3, special_design4],

    liveUrl: "https://special-design-one.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/special-design",
    featured: false,
  },
  {
    id: "healthy-food",
    title: "Healthy Food",
    featured: true,
    category: "Web Design",
    description:
      "A modern healthy food website with a responsive layout and attractive user interface.",
    image: healthy_food,

    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],

    features: [
      "Responsive layout",
      "Modern UI design",
      "Reusable sections",
      "Mobile friendly",
    ],

    screenshots: [
      "/projects/healthy-food/1.png",
      "/projects/healthy-food/2.png",
      "/projects/healthy-food/3.png",
    ],

    liveUrl: "https://healthy-food-site-rho.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/Healthy-Food-Site",
  },
  {
    id: "lasles-vpn",
    title: "LaslesVPN",
    featured: true,
    category: "Web Design",

    description:
      "A modern and responsive VPN service website designed to provide a clean, user-friendly experience with strong visual presentation and responsive layouts.",

    image: lasles_vpn,

    technologies: [
      "HTML5",
      "CSS3",
      "Font Awesome",
      "Google Fonts",
      "Flexbox",
      "CSS Grid",
      "Media Queries",
    ],

    features: [
      "Fully responsive design",
      "Responsive navigation",
      "VPN features & pricing plans",
      "Global network section",
      "Customer testimonials",
    ],

    screenshots: [lasles_vpn2, lasles_vpn3, lasles_vpn4],

    liveUrl: "https://lasles-vpn-best-vpn-service.vercel.app",
    githubUrl:
      "https://github.com/Ahmed-Khalaf1223/LaslesVPN---Best-VPN-Service",
  },
  {
    id: "website-template",
    title: "Website Template",
    featured: false,
    category: "Web Design",
    description:
      "A responsive personal portfolio website with a clean and modern design, featuring services, portfolio projects, about, contact, and responsive navigation sections.",
    image: Leon_Template1,

    technologies: [
      "HTML5",
      "CSS3",
      "Font Awesome",
      "Normalize.css",
      "Google Fonts",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
    ],

    features: [
      "Responsive design",
      "Modern and clean UI",
      "Responsive navigation menu",
      "Services & Portfolio sections",
      "CSS Grid & Flexbox layout",
      "Smooth scrolling & hover effects",
    ],

    screenshots: [
      Leon_Template2,
      Leon_Template3,
      Leon_Template4,
      Leon_Template5,
    ],

    liveUrl: "https://website-template-self-six.vercel.app",

    githubUrl: "https://github.com/Ahmed-Khalaf1223/Website-template",
  },
  {
    id: "kasper-template-two",
    title: "Kasper Template Two",
    category: "Web Design",
    description:
      "A modern and fully responsive landing page built from scratch using HTML5 and CSS3, featuring multiple sections, responsive layouts, hover effects, and clean UI design.",
    image: kasper_template1,

    technologies: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "Font Awesome",
      "Google Fonts",
    ],

    features: [
      "Fully responsive design",
      "Modern and clean UI",
      "Responsive navigation",
      "Interactive portfolio gallery",
      "Responsive multi-section layout",
    ],

    screenshots: [
      kasper_template2,
      kasper_template3,
      kasper_template4,
      kasper_template5,
    ],

    liveUrl: "https://kasper-template-beige.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/kasper-template",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    featured: true,
    category: "Dashboard",
    description:
      "A responsive admin dashboard built to manage data and display important information through a modern interface.",
    image: dashboard,

    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "React Router",
      "Axios",
    ],

    features: [
      "Responsive dashboard",
      "Data tables",
      "API integration",
      "Reusable React components",
      "React Router navigation",
    ],

    screenshots: [dashboard2, dashboard3, dashboard4, dashboard5],

    liveUrl: "https://react-admin-dashboard-lemon-phi.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/react-admin-dashboard",
  },
  {
    id: "kh-shop",
    title: "KH-SHOP",
    featured: true,
    category: "E-Commerce",
    description:
      "A complete e-commerce interface focused on creating a smooth and modern shopping experience.",

    image: khShopHome,

    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
    ],

    features: [
      "Product listing",
      "Product details",
      "Shopping cart",
      "API integration",
      "Responsive design",
      "Product management",
    ],

    screenshots: [Product_Details, Shopping_Cart, Products_Page, Empty_Cart],

    liveUrl: "https://kh-shop-e-commerce-react-app.vercel.app",
    githubUrl:
      "https://github.com/Ahmed-Khalaf1223/KH-Shop---E-commerce-React-App",
  },
  {
    id: "khalaf_Online_Store",
    title: "khalaf_Online_Store",
    featured: true,
    category: "E-Commerce",
    description:
      "A complete e-commerce interface focused on creating a smooth and modern shopping experience.",

    image: khalaf_Online_Store,

    technologies: ["React", "Redux Toolkit", "React Router", "Axios"],

    features: [
      "Product listing",
      "Product details",
      "Shopping cart",
      "API integration",
      "Responsive design",
      "Product management",
    ],

    screenshots: [Product_Details, Shopping_Cart, Products_Page],

    liveUrl: "https://khalaf-online-store.vercel.app",
    githubUrl: "https://github.com/Ahmed-Khalaf1223/khalaf_Online_Store",
  },
];

export default projects;
