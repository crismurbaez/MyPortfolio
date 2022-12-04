import React from 'react'

const softSkills = [
    { name: '', description: 'Soy proactiva con actitud positiva😀, aprendizaje ágil y adaptabilidad.' },
    { name: '', description: 'Con capacidad para la comunicación, las relaciones interpersonales, el trabajo en equipo y la empatía.' },
    { name: '', description: ' Demuestro tenacidad y responsabilidad ante los proyectos y trabajos, competencia para la toma de decisiones, liderazgo y autonomía.' },
    { name: '', description: 'Habilidad para la resolución de problemas a través del pensamiento lógico, crítico y analítico.' },
]

export default function About() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-6 px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-orange-200 sm:text-4xl">Sobre mí...</h2>
                    <h2 className="text-2xl font-['Century-Gothic'] tracking-[.25em] text-orange-200 sm:text-4xl"> Cristina Murguía</h2>
                    <p className="mt-4 text-orange-200 text-justify">
                        Te cuento un poco sobre mí. Soy Full Stack Web Developer con formación como Profesora de Matemática y Profesora de 1 y 2 EGB.
                        <br></br>
                        ✒Toda mi vida trabajé en el sector de educación, pasando desde el nivel primario, secundario, educación de adultos y trabajando también desde la gestión escolar como directora de un centro de nivel secundario.
                        Aunque me apasiona enseñar, y le dediqué muchos años, mi mayor pasión es la programación❤.
                        <br></br>
                        Aprendí a los 8 años con un curso y a partir de allí seguí aprendiendo de forma autodidacta. Hoy HENRY me dio la oportunidad de poder actualizarme y dominar las tecnologías más pedidas por el sector.
                    </p>
                    <p className="mt-8 font-['Century-Gothic'] tracking-[.25em] text-orange-200">Soft Skills</p>
                    <dl className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {softSkills.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-orange-200">{feature.name}</dt>
                                <dd className="mt-1 text-sm text-orange-200 text-justify">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
                    <img
                        src="/images/matematica4.jpg"
                        alt="pluma."
                        className="rounded-lg bg-orange-200"
                    />
                    <img
                        src="/images/einstein.jpg"
                        alt="autodidacta."
                        className="rounded-lg bg-orange-200"
                    />
                    <img
                        src="/images/henry2.png"
                        alt="henry."
                        className="rounded-lg bg-orange-200"
                    />
                    <img
                        src="/images/codigo-binario-corazon.jpg"
                        alt="binario."
                        className="rounded-lg bg-orange-200"
                    />
                </div>
            </div>
        </div>
    )
}
