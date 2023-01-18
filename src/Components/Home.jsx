export default function Home() {
    // overflow-hidden min-h-screen max-h-full min-w-[100vh] max-w-full

    return (
        <div className="bg-gray-900 min-w-full max-w-[100vw] min-h-screen max-h-full ">
            <div className="pt-16 pb-96  sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative  mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <div className="flex flex-row">
                            <h1 className="whitespace-nowrap p-1  w-[18ch] overflow-hidden animate-escribiendo font text-3xl font-['Elephant'] tracking-normal   text-orange-200 sm:w-[25ch] sm:text-5xl">
                                Cristina Murguía
                            </h1><span className="overflow-hidden animate-parpadeo font text-4xl font-['Elephant'] tracking-normal font-bold  text-orange-200 sm:text-5xl">|</span>
                        </div>

                        <h1 className=" p-4 text-3xl max-w-[300px] sm:max-w-full font-['Century-Gothic'] tracking-[.2em]  text-orange-200 sm:text-3xl">
                            Full stack web developer
                        </h1>
                        <p className=" mt-4 mr-2 text-xl max-w-[300px] sm:max-w-full text-orange-200 text-justify">
                            👋 Hola!! Bienvenidos a mi portfolio...
                            Recorran todos los apartados y luego envíenme un mensaje, para conversar con mayor profundidad. Saludos!!
                        </p>
                        <p className="mt-6">
                            <a className="rounded-xl p-2 bg-orange-200 text-gray-900" href="https://drive.google.com/file/d/1H8vkT84D_9J4inX8WFtSUOrF4zrFgQ0S/view?usp=share_link">
                                Descarga mi CV
                            </a>
                        </p>



                    </div>
                    <div>
                        <div className="mt-10 pb-28 mb-12 h-full w-full">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                // pointer-events-none  --> no permite que se active el hover
                                //pointer-event-auto --> se activa el hover PERO no funciona bien el NAVBAR!!!!
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid  grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="  w-28 sm:w-40 overflow-hidden rounded-lg
                                            transition 
                                            duration-1000
                                            ease-in-out 
                                            
                                            transform 
                                            hover:-translate-y-2 
                                            hover:rotate-6 
                                            hover:scale-125 
                                            ">
                                                <img
                                                    src="/images/hoja6.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="  w-20 sm:w-28 rotate-12 mt-8 ml-10 overflow-hidden rounded-lg
                                            transition 
                                            duration-1000
                                            ease-in-out 
                                            
                                            transform 
                                            hover:-translate-y-2 
                                            hover:rotate-6 
                                            hover:scale-125 
                                            ">
                                                <img
                                                    src="/images/hoja3.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid  grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className=" w-16 sm:w-24 rotate-180 overflow-hidden rounded-lg 
                                            transition 
                                            duration-1000
                                            ease-in-out 
                                            
                                            transform 
                                            hover:-translate-y-2 
                                            hover:rotate-[200deg]
                                            hover:scale-125
                                            ">
                                                <img
                                                    src="/images/hoja5.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />

                                            </div>
                                            <div className=" w-36 sm:w-44 overflow-hidden rounded-lg 
                                             transition 
                                             duration-1000
                                             ease-in-out 
                                             
                                             transform 
                                             hover:-translate-y-2 
                                             hover:rotate-12
                                             hover:scale-125 
                                            ">
                                                <img
                                                    src="/images/FlorGirasol.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className=" w-28 sm:w-44 rotate-45 overflow-hidden rounded-lg lg:opacity-100
                                               transition 
                                               duration-1000
                                               ease-in-out 
                                               
                                               transform 
                                               hover:-translate-y-2 
                                               hover:rotate-[30deg] 
                                               hover:scale-100 
                                            ">
                                                <img
                                                    src="/images/hoja8.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className=" hidden grid-none lg:grid  grid-cols-1 gap-y-0 lg:gap-y-8 opacity-0 lg:opacity-100">
                                            <div className=" w-32 overflow-hidden rounded-lg
                                             transition 
                                             duration-1000
                                             ease-in-out 
                                             
                                             transform 
                                             hover:-translate-y-2 
                                             hover:rotate-12
                                             hover:scale-125 
                                            ">
                                                <img
                                                    src="/images/hoja7.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className=" w-32  overflow-hidden rounded-lg  opacity-0 lg:opacity-100
                                             transition 
                                             duration-1000
                                             ease-in-out 
                                             
                                             transform 
                                             hover:-translate-y-2 
                                             hover:-rotate-6
                                             hover:scale-125 
                                            ">
                                                <img
                                                    src="/images/hoja6.png"
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
