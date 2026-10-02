// Page-specific logic - projects

import notarySolutionsImg from "../../img/home/notary-solutions.png";
import vetClinicImg from "../../img/home/camelot-vet.png";
import raasinNonprofitImg from "../../img/home/raasin.png";

const projects = [
  {
    title: "Notary Solutions",
    description:
      "A 6-page Squarespace website for a mobile notary service in Austin, TX — Kendra McCullough's first-ever website, built to turn 310+ five-star Google reviews into booked appointments.",
    liveUrl: "https://www.austinnotarysolutions.com/",
    image: notarySolutionsImg,
    alt: "Notary Solutions case study preview",
    url: "/notary-solutions",
    titleColor: "",
  },
  {
    title: "Camelot Vet Services",
    description:
      "A 3-page SquareSpace website for a private veterinary clinic in Uniontown, PA — their first web presence after 30+ years in business.",
    liveUrl: "https://www.camelotvetclinic.com/",
    image: vetClinicImg,
    alt: "Camelot Vet Clinic case study preview",
    url: "/camelot-vet",
    titleColor: "",
  },
  {
    title: "Raasin in the Sun",
    description:
      "A 10-page website redesign for an Austin-based nonprofit that transforms neighborhoods through murals, creative placemaking, and community activation.",
    liveUrl: "https://www.raasininthesun.org/",
    image: raasinNonprofitImg,
    alt: "Raasin in the Sun case study preview",
    url: "/raasin",
    titleColor: "",
  },
];

function createProjectCard(project) {
  return;
}

const card = document.getElementById("project-card");
card.innerHTML = projects.map((project) => createProjectCard(project)).join("");
