
import emailjs from '@emailjs/browser';

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
            }, (err) => {
                console.log('FAILED...', err);
            });

    }




    return (
        <div className="bg-gray-900 h-full w-full">
            <div className="bg-gray-900 h-full w-full">
                <div className=" bg-gray-900 ">
                    <div className=" bg-gray-900">
                        <div className=" px-4 sm:px-0  bg-gray-900">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Contacto</h3>
                            <p className=" px-14 text-sm  text-orange-200">
                                Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.
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

