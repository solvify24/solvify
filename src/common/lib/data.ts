import BAASHAImg from '@/../public/images/BAASHA.jpeg';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import LOGO from '@/../public/logo.svg';

export const logo = LOGO;

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'Products',
    id: 'products',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Approach',
    id: 'approach',
  },
  {
    name: 'Benefits',
    id: 'benefits',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const approachData = [
  {
    title: 'Discover & Define',
    description: `We begin by discovering the core issues and defining the scope of impact, ensuring we address the most pressing needs.`,
  },
  {
    title: 'Innovate & Strategize',
    description: `Through comprehensive market research and strategic planning, we devise innovative solutions that are both practical and impactful.`,
  },
  {
    title: 'Create & Refine',
    description: `We develop prototypes and refine them through an iterative process, incorporating continuous feedback to perfect the final product.`,
  },
] as const;

export const benefitsData = [
  {
    title: 'Customer-Centric Solutions',
    description: `We prioritize our customers' needs and ensure our solutions are tailored to meet their specific requirements.`,
  },
  {
    title: 'Cutting-Edge Technology',
    description: `We leverage the latest advancements in technology to deliver innovative and effective solutions.`,
  },
  {
    title: 'Unmatched Expertise',
    description: `Our team comprises skilled professionals with a deep understanding of the industry and the challenges we aim to address. We benefit from industry expertise and guidance that enhances our capabilities.`,
  },
  {
    title: 'Proactive Support',
    description: `We provide exceptional support to our customers, ensuring their needs are met proactively and efficiently.`,
  },
] as const;

export const images = {
  BAASHAImg,
};

export const socialLinks = [
  {
    title: "Linked In",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/solvify-touching-the-untouched-89590631b/"
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/solvify2024?utm_source=qr&igsh=MTFyNDE2cGM0eTEzYQ=="
  },
  {
    title: "Mail",
    icon: IoIosMail,
    link: "mailto:solvify.founders@gmail.com"
  }
] as const;

export const productsData = [
  {
    title: 'BAASHA',
    description:
      'Baasha is an innovative solution that enhances road safety by providing real-time alerts for hotspot regions using geofencing technology. With automated updates and speed limit notifications, Baasha promotes cautious driving and helps reduce accident rates effectively.',
    imageUrl: BAASHAImg,
    link: '#',
  },
] as const;
