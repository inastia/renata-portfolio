// Page-specific logic - projects

import notarySolutionsImg from "../../img/home/notary-solutions.png";
import vetClinicImg from "../../img/home/camelot-vet.png";
import raasinNonprofitImg from "../../img/home/raasin.png";

const projects = [
  {
    title: "Austin Notary Solutions",
    colorClass: "text-[#DFAA3F]",
    description:
      "A 6-page Squarespace website for a mobile notary service in Austin, TX — Kendra McCullough's first-ever website, built to turn 310+ five-star Google reviews into booked appointments.",
    liveUrl: "https://www.austinnotarysolutions.com/",
    image: notarySolutionsImg,
    alt: "Notary Solutions case study preview",
    url: "/projects/notary-solutions.html",
  },
  {
    title: "Camelot Vet Services",
    colorClass: "text-[#002B89]",
    description:
      "A 3-page Squarespace website for a private veterinary clinic in Uniontown, PA — their first web presence after 30+ years in business.",
    liveUrl: "https://www.camelotvetclinic.com/",
    image: vetClinicImg,
    alt: "Camelot Vet Clinic case study preview",
    url: "/projects/camelot-vet.html",
  },
  {
    title: "Raasin in the Sun",
    colorClass: "text-[#782016]",
    description:
      "A 10-page website redesign for an Austin-based nonprofit that transforms neighborhoods through murals, creative placemaking, and community activation.",
    liveUrl: "https://www.raasininthesun.org/",
    image: raasinNonprofitImg,
    alt: "Raasin in the Sun case study preview",
    url: "/projects/raasin-nonprofit.html",
  },
];

function createProjectCard(project, index) {
  const number = String(index + 1).padStart(2, "0");

  return `
    <article class="grid gap-8 border-b border-text-secondary pb-16 md:grid-cols-[2fr_3fr] md:gap-12 md:pb-18 lg:gap-16 lg:pb-24">
      <div class="flex flex-col items-start">
        <h2 class="font-bitter text-lg font-normal uppercase leading-[1.4] ${project.colorClass}">${number} / ${project.title}</h2>
        <p class="mt-6 font-bitter text-lg font-normal leading-[1.6] text-text-secondary">${project.description}</p>
        <a href="${project.url}" class="group/case-study mt-8 inline-flex items-center gap-1 font-bitter text-base font-medium leading-[1.4] ${project.colorClass} relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:content-[''] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 md:mt-10 lg:mt-auto lg:pt-12">
          See case study <span class="inline-block motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-in-out motion-safe:group-hover/case-study:translate-x-1" aria-hidden="true">→</span>
        </a>
      </div>
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} live site (opens in a new tab)" class="group block cursor-pointer overflow-hidden self-start shadow-sm focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4">
        <img src="${project.image}" alt="${project.alt}" loading="lazy" class="h-auto w-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out motion-safe:group-hover:scale-[1.03]" />
      </a>
    </article>
  `;
}

const grid = document.getElementById("projects-grid");
if (grid) {
  grid.innerHTML = projects.map(createProjectCard).join("");
}
