import React from 'react'

const projects = [
    {
        id: 10,
        name: 'Front-End: ServiYA',
        href: ' https://serviya-front.vercel.app/',
        imageSrc: '/images/ServiYA.png',
        imageAlt: "ServiYA.",
        detail: "Primer MVP de un Ecommerce de soluciones técnicas para el hogar, en los próximos MVP se construirán las funcionalidades completas y la capacidad responsive. Proyecto realizado en simulación laboral de No Country. Grupo de trabajo con 3 personas UX-UI, 2 Front-End y 2 Full Stack. Se implementaron metodologías ágiles SCRUM y control de versiones con Github. Desarrollado con HTML, CSS, Javascript, React, Zustand, Tailwind Css, socket.io-client. Esta experiencia nos permitió trabajar siguiendo un diseño confeccionado en Figma con un primer MVP. El grupo seguirá trabajando hasta confeccionar todas las funcionalidades completas de un ecommerce.",
        hrefGithub: 'https://github.com/No-Country/c16-22-n-node-react/tree/main/front',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-ServiYA.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 9,
        name: 'Back-End: ServiYA',
        href: 'https://serviya-back.vercel.app/',
        imageSrc: '/images/ServiYA-back.png',
        imageAlt: "ServiYA.",
        detail: "Back-End: API de ServiYA. Se utilizaron las tecnologías: NodeJs, Express, MongoDB, Mongoose, Cloudinary, Jsonwebtoken, Socket.io, Streamifier",
        hrefGithub: 'https://github.com/No-Country/c16-22-n-node-react/tree/main/back',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-ServiYA.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 8,
        name: 'Front-End: Cocina Amiga',
        href: 'https://cocina-amiga.vercel.app/',
        imageSrc: '/images/Cocina-Amiga.png',
        imageAlt: "Cocina Amiga.",
        detail: "Página Web totalmente responsive de cocina vegetariana, tortas y postres. Front-End desarrollado con HTML, CSS, JavaScript y framework React.",
        hrefGithub: 'https://github.com/crismurbaez/cocina_amiga',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-Mariana_Nails.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 7,
        name: 'Front-End: Mariana-Nails',
        href: 'https://mariana-nails.vercel.app/',
        imageSrc: '/images/Mariana_Nails.png',
        imageAlt: "Mariana_Nails.",
        detail: "Página Web de belleza de manos, pies y pestañas. Front-end desarrollado con el lenguaje Javascript y framework VueJs.",
        hrefGithub: 'https://github.com/crismurbaez/mariana_nails',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-Mariana_Nails.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 6,
        name: 'Back-End: Mariana-Nails',
        href: 'https://back-end-mariana-nails.vercel.app/',
        imageSrc: '/images/Api_servicios.png',
        imageAlt: "Back_Mariana_Nails.",
        detail: "API de inventario de servicios desarrollado con el lenguaje Python y Flask. Alimenta el Front-end de la página Web de Mariana-Nails.",
        hrefGithub: 'https://github.com/crismurbaez/mariana_nails_back',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-Back_Mariana_Nails.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 5,
        name: 'FOOD RECIPES APP',
        href: 'https://food-recipes-cris.vercel.app/',
        imageSrc: '/images/Food.png',
        imageAlt: "Food App.",
        detail: "App de recetas de comidas confeccionada con HTML, CSS, Javascrip, React y Redux. Se puede filtrar, ordenar y buscar recetas por su nombre además de crear nuevas recetas.",
        hrefGithub: 'https://github.com/crismurbaez/PI-Food/tree/main/client',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-food.",
        hrefVideo: 'https://www.youtube.com/watch?v=bg-3NY2NMLA',
        nameVideo: "Video Food App."
    },
    {
        id: 4,
        name: 'BACK-FOOD RECIPES APP',
        href: 'https://pi-food-yekv.onrender.com/recipes',
        imageSrc: '/images/API-FOOD.png',
        imageAlt: "Back Food App.",
        detail: "Back de la App de recetas de comidas, confeccionada con Node.js, Express, PostgreSQL y Sequelize.",
        hrefGithub: 'https://github.com/crismurbaez/PI-Food/tree/main/api',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-food-back.",
        hrefVideo: "",
        nameVideo: ""
    },

    {
        id: 3,
        name: 'ECOMMERCE - Clothes4Crew',
        href: 'https://clothes-4-crew.vercel.app/',
        imageSrc: '/images/Clothes1.png',
        imageAlt: "ECOMMERCE.",
        detail: "E-commerce 'Clothes4Crew' de ropa y accesorios. Se implementaron metodologías ágiles SCRUM y control de versiones con Github. Desarrollado con HTML, Javascript, React, Redux, Tailwind Css.",
        hrefGithub: 'https://github.com/AlejandroHELO/PF-Clothes-4Crew',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-ECOMMERCE.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 2,
        name: 'PORTFOLIO',
        href: 'https://cristinamurguia.xyz',
        imageSrc: '/images/Portfolio.png',
        imageAlt: "Portfolio.",
        detail: "Mi portafolio web personal responsive, donde te cuento un poco sobre mí, las habilidades técnicas que he adquirido y los proyectos desarrollados. Confeccionado con HTML, Javascrip, React, Tailwind Css",
        hrefGithub: 'https://github.com/crismurbaez/MyPortfolio',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-Portfolio.",
        hrefVideo: "",
        nameVideo: ""
    },
    {
        id: 1,
        name: 'BACK-PORTFOLIO',
        href: 'https://back-portfolio-cris.vercel.app',
        imageSrc: '/images/back-portfolio.png',
        imageAlt: "Back-Portfolio.",
        detail: "Back del protfolio creado con Python y flask, que se encarga de enviar emails a mi correo desde la sección de contactos.",
        hrefGithub: 'https://github.com/crismurbaez/back_portfolio',
        imageGithub: '/images/github.png',
        imageAltGithub: "github-back-portfolio.",
        hrefVideo: "",
        nameVideo: ""
    },





]




export default function Projects() {



    return (
        <div className="bg-gray-900 min-w-full max-w-[100vw] min-h-screen max-h-full">
            <div className="mx-auto max-w-2xl py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl font-bold tracking-tight text-orange-200">Proyectos</h2>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6">
                    {projects?.map((project) => (
                        <div>
                            <a
                                target={"_blank"}
                                href={project.href}
                                name={project.href}
                                className=" text-slate-900" rel="noreferrer"
                            >
                                <div key={project.id} className="group relative rounded-md border-solid border-2 border-orange-200">
                                    <div className="h-80  aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">

                                        <img
                                            src={project.imageSrc}
                                            alt={project.imageAlt}
                                            className="h-full w-full object-cover object-center "
                                        />

                                    </div>
                                    <div className="mt-4 flex justify-between  p-2">
                                        <div>
                                            <h3 className=" text-base  font-['Century-Gothic'] tracking-[.01em]  text-orange-200 sm:text-xl">

                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {project.name}

                                            </h3>
                                            <p className="text-sm text-orange-200 text-justify">{project.detail}</p>
                                        </div>

                                    </div>
                                    <div>


                                    </div>

                                </div>
                            </a>
                            <div className='flex flex-row'>
                                <div className=' bg-orange-200 m-3 rounded-md p-2'>
                                    <a
                                        target={"_blank"}
                                        href={project.href}
                                        name={project.href}
                                        className=" text-slate-900" rel="noreferrer"
                                    >
                                        Ir a {project.imageAlt}
                                    </a>
                                </div>

                                <div className='m-3 rounded-full'>
                                    <a
                                        target={"_blank"}
                                        href={project.hrefGithub} rel="noreferrer">
                                        <img

                                            src={project.imageGithub}
                                            alt={project.imageAltGithub}
                                            className=" w-10"

                                        />
                                    </a>
                                </div>
                                {project.hrefVideo != "" ?
                                    <div className=' bg-orange-200 m-3 rounded-md p-2'>
                                        <a
                                            target={"_blank"}
                                            href={project.hrefVideo}
                                            name={project.nameVideo}
                                            className=" text-slate-900" rel="noreferrer"
                                        >
                                            Ir a {project.nameVideo}
                                        </a>
                                    </div>

                                    : <div></div>}



                            </div>


                        </div>

                    ))}
                </div>
            </div>
        </div >
    )
}
