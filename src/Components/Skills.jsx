const skills = [
    {
        id: 1,
        name: 'HTML',
        href: '#',
        imageSrc: '/images/html.png',
        imageAlt: 'HTML.',
    },
    {
        id: 2,
        name: 'CSS',
        href: '#',
        imageSrc: '/images/css.png',
        imageAlt: 'CSS.',
    },
    {
        id: 3,
        name: 'Java Script',
        href: '#',
        imageSrc: '/images/js.png',
        imageAlt: 'Java Script.',
    },
    {
        id: 10,
        name: 'NodeJs',
        href: '#',
        imageSrc: '/images/nodejs.png',
        imageAlt: 'NodeJs.',
    },
    {
        id: 8,
        name: 'React',
        href: '#',
        imageSrc: '/images/react.png',
        imageAlt: 'React.',
    },
    {
        id: 7,
        name: 'Redux',
        href: '#',
        imageSrc: '/images/redux.png',
        imageAlt: 'Redux.',
    },

    {
        id: 2,
        name: 'GIT',
        href: '#',
        imageSrc: '/images/git.png',
        imageAlt: 'GIT.',
    },
    {
        id: 13,
        name: 'GitHub',
        href: '#',
        imageSrc: '/images/github.png',
        imageAlt: 'github.',
    },


    {
        id: 5,
        name: 'MUI',
        href: '#',
        imageSrc: '/images/mui.png',
        imageAlt: 'MUI.',
    },
    {
        id: 6,
        name: 'Tailwind',
        href: '#',
        imageSrc: '/images/icon-tailwind.png',
        imageAlt: 'tailwind.',
    },
    {
        id: 4,
        name: 'SQL',
        href: '#',
        imageSrc: '/images/sql.png',
        imageAlt: 'SQL.',
    },
    {
        id: 12,
        name: 'PostgreSql',
        href: '#',
        imageSrc: '/images/postgresql.png',
        imageAlt: 'PostgreSql.',
    },


    {
        id: 11,
        name: 'MongoDb',
        href: '#',
        imageSrc: '/images/mongodb.png',
        imageAlt: 'mongodb.',
    },
    {
        id: 9,
        name: 'Sequelize',
        href: '#',
        imageSrc: '/images/sequelize.png',
        imageAlt: 'Sequelize.',
    },

    {
        id: 12,
        name: 'Postman',
        href: '#',
        imageSrc: '/images/postman.png',
        imageAlt: 'postman.png.',
    },

    {
        id: 12,
        name: 'Vercel',
        href: '#',
        imageSrc: '/images/vercel.png',
        imageAlt: 'vercel.png.',
    },


]


export default function Skills() {
    return (
        <div className=" bg-gray-900  min-h-screen max-h-full">
            <div className="bg-gray-900 pt-6 pb-80 sm:pt-6 sm:pb-40 lg:pt-6 lg:pb-48 ">
                <div className="bg-gray-900 relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
                    <div className="bg-gray-900 sm:max-w-lg">
                        <div className="bg-gray-900 flex flex-row">
                            <h1 className="bg-gray-900 whitespace-nowrap w-[22ch] font text-3xl font-bold tracking-tight text-orange-200 sm:text-4xl">
                                Habilidades técnicas</h1>
                        </div>

                        <h1 className="bg-gray-900 font text-2xl font-bold tracking-tight text-orange-200 sm:text-3xl">
                            (Tech Skills)
                        </h1>

                    </div>
                    <div>
                        <div className="bg-gray-900 mt-4 mb-4">
                            {/* Decorative image grid */}
                            <div className="bg-gray-900 mx-auto max-w-2xl py-2 px-4 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-2">
                                <h2 className="sr-only">skills</h2>

                                <div className="bg-gray-900 grid grid-cols-4 gap-y-10 gap-x-6  sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 xl:gap-x-8">
                                    {skills.map((product) => (
                                        <a key={product.id} href={product.href} className="bg-gray-900 group">
                                            <div className="bg-gray-900 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="bg-gray-900 h-full w-full object-cover object-center group-hover:opacity-75"
                                                />
                                            </div>
                                            <h3 className="bg-gray-900 mt-4 text-sm text-orange-200 text-center">{product.name}</h3>

                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
