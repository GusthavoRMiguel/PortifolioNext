import Head from 'next/head'
import Aside from '../components/aside'
import PageName from '../components/pageName'

function Contact() {
  return (
    <div className="flex flex-row min-h-screen overflow-hidden">
    <Head>
        <title>Contact | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Contact" />
        <div className='relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0'>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <div className='w-full justify-center' ><img src="/img/contact.png" className='w-full object-contain	 h-40		' /></div>
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Entrar em contato
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Preencha o formulário ao lado
                </p>
                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>                
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                Rua Manuel Gaya, Vila Mazzei, São Paulo-SP,
                    02313-001
                </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      011 98273-5663
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40 max-w-screen-sm:break-all ">
                        gusthavo.rmiguel@gmail.com
                    </div>
                </div>               
              </div>
              <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label for="name" className="hidden">Nome Completo</label>
                            <input type="name" name="name" id="name" placeholder="Nome Completo" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label for="tel" className="hidden">Celular</label>
                            <input type="tel" name="tel" id="tel" placeholder="Celular" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label for="message" className="hidden">Message</label>
                          <textarea type="message" id="message" name="message" placeholder="Message" rows="4" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"> </textarea>
                      </div>

                        <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Enviar
                        </button>
                    </form> 
            </div>
           </div>
        </div>      
    </div>
  </div>
  )
}

export default Contact