
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function Contact() {

    const enviarMail = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.mail.value)
        console.log(e.target.asunto.value)
        console.log(e.target.mensaje.value)

        const templateParams = {
            name: e.target.name.value,
            mail: e.target.mail.value,
            asunto: e.target.asunto.value,
            mensaje: e.target.mensaje.value,
        };

        emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, templateParams, process.env.REACT_APP_YOUR_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El mensaje se ha enviado correctamente!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (err) => {
                console.log('FAILED...', err);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Ocurrió un error al enviar el mensaje!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            });


    }




    return (
        <div className="bg-gray-900 h-full w-full">
            <div className="bg-gray-900 h-full w-full">
                <div className=" bg-gray-900 ">
                    <div className=" bg-gray-900">
                        <div className=" px-4 sm:px-0  bg-gray-900">
                            <h2 className="text-6xl font-bold tracking-tight text-orange-200 px-14">Contacto</h2>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Contacto</h3>
                            <div className='flex flex-row'>
                                <p className=" px-14 text-sm  text-orange-200">
                                    Puedes encontrarme en:
                                </p>
                                <div className=' bg-orange-200  m-3 rounded-full w-10'>
                                    <a href="https://github.com/crismurbaez">
                                        <img

                                            src="/images/github.png"
                                            alt='img github'
                                            className=" w-10"

                                        />
                                    </a>
                                </div>
                                <div className=' bg-orange-200  m-3 rounded-lg p-1'>
                                    <a href="https://www.linkedin.com/in/cristina-murguia/">
                                        <img

                                            src="/images/Linkedin.png"
                                            alt='img linkedin'
                                            className=" h-8"

                                        />
                                    </a>
                                </div>
                            </div>


                            <p className=" px-14 text-sm  text-orange-200">
                                También puedes completar el siguiente formulario y me pondré en contacto contigo lo antes posible.
                            </p>
                        </div>
                    </div>
                    <div className="mt-2  md:m-1 bg-gray-900">
                        <form onSubmit={enviarMail}>
                            <div className="m-10 shadow sm:overflow-hidden sm:rounded-md bg-gray-900">
                                <div className="  space-y-6 bg-orange-200 px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                                Nombre
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">

                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className=" p-2 block w-full flex-1 rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                                    placeholder="Nombre"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="mail" className="block text-sm font-medium text-gray-900">
                                            E-mail
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="mail"
                                                name="mail"
                                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                                placeholder="you@example.com"
                                                defaultValue={''}
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <label htmlFor="asunto" className="block text-sm font-medium text-gray-900">
                                            Asunto
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="asunto"
                                                name="asunto"
                                                rows={3}
                                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                                placeholder="asunto"
                                                defaultValue={''}
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-900">
                                            Mensaje
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="mensaje"
                                                name="mensaje"
                                                rows={3}
                                                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                                placeholder="mensaje"
                                                defaultValue={''}
                                            />
                                        </div>

                                    </div>

                                </div>
                                <div className="bg-orange-200  px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* 
            <div className="bg-gray-900 hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div> */}



        </div>
    )
}

