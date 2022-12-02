/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const projects = [
    {
        id: 1,
        name: 'FULL STACK WEB DEVELOPER – Proyecto Individual',
        href: '#',
        imageSrc: '/images/Food.png',
        imageAlt: "PF.",
        detail: "Diseño y desarrollo de una app de recetas de comidas utilizando React, Redux, CSS puro, Node.js, Express y Sequelize. En la aplicación se pueden ver  distintas recetas de comidas junto con información relevante de las mismas utilizando la api externa spoonacular. Tiene un proceso de filtrados y ordenamientos. Se pueden buscar recetas por su nombre. Y crear nuevas recetas.",
    },
    {
        id: 2,
        name: 'FULL STACK WEB DEVELOPER – Proyecto Final',
        href: 'https://clothes-4-crew.vercel.app/',
        imageSrc: '/images/Clothes1.png',
        imageAlt: "PI.",
        detail: "Diseño y desarrollo de E-commerce 'Clothes4Crew' para la compra de ropa y accesorios. Se desarrolló de manera colaborativa con reuniones diarias y realizando sprints semanales a un product owner.Catálogo de productos, login de usuarios, carrito de compras, checkout de la orden, dashboard de admin para carga y edición de productos, pasarela de pago, entre otras. Se implementaron metodologías ágiles SCRUM y control de versiones con Github",
    },
    {
        id: 3,
        name: 'PORTFOLIO',
        href: 'https://my-portfolio-sigma-ashy.vercel.app/',
        imageSrc: '/images/Portfolio.png',
        imageAlt: "Portfolio.",
        detail: "Mi portafolio web personal, donde te cuento un poco sobre mí, las habilidades técnicas que he adquirido y los proyectos desarrollados.",
    },

]

export default function Projects() {



    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-2xl py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl font-bold tracking-tight text-orange-200">Proyectos y experiencia tech</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 ">
                    {projects?.map((project) => (
                        <div key={project.id} className="group relative rounded-md border-solid border-2 border-orange-200">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover object-center "
                                />
                            </div>
                            <div className="mt-4 flex justify-between  p-2">
                                <div>
                                    <h3 className=" text-3xl font-['Century-Gothic'] tracking-[.01em]  text-orange-200 sm:text-3xl">
                                        <a href={project.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {project.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-orange-200 text-justify">{project.detail}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
