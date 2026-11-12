export type Project = {
  slug: string;
  img: string;
  title: string;
  tag: string;
  year: string;
  kind: string;
  contain?: boolean;
};

export const projects: Project[] = [
  {
    slug: "invoice-generator",
    img: "https://shibinsp45.lovable.app/projects/invoice-generator.jpg",
    title: "Billzy — Invoice Generator",
    tag: "A mobile invoice app — create bills faster, manage your shop better.",
    year: "2025",
    kind: "UI/UX Case Study",
  },
  {
    slug: "emergency-service",
    img: "https://shibinsp45.lovable.app/projects/tools-app.png",
    title: "Tools — Emergency Service App",
    tag: "On-demand tools and repair service — we're here to help you.",
    year: "2025",
    kind: "Web Development",
  },
  {
    slug: "ai-food-delivery",
    img: "https://shibinsp45.lovable.app/projects/fudit-app.png",
    title: "Fudit — AI Food Delivery",
    tag: "AI-powered food delivery — cravings, delivered to your home.",
    year: "2024",
    kind: "Generative AI",
  },
  {
    slug: "fitness-tracker",
    img: "https://shibinsp45.lovable.app/projects/fitness-app.jpg",
    title: "GetFit — Fitness Tracker",
    tag: "Personalized fitness tracking — where fitness meets passion.",
    year: "2024",
    kind: "Product Branding",
    contain: true,
  },
  {
    slug: "grocery-planner",
    img: "https://shibinsp45.lovable.app/projects/grocery-app.jpg",
    title: "GroPlan — Grocery Planner",
    tag: "Smart grocery & meal planning — your smart kitchen buddy.",
    year: "2023",
    kind: "UI/UX Case Study",
  },
  {
    slug: "emergency-medicine",
    img: "https://shibinsp45.lovable.app/projects/medicine-vending.png",
    title: "PROMedic — Emergency Medicine",
    tag: "Medicine vending — access meds faster during emergencies.",
    year: "2023",
    kind: "Blogs & Articles",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
