import Head from 'next/head'
import Aside from './components/aside'
import PageName from './components/pageName'
import Card from './components/card'


function Certificates() {
  return (
  <div className="flex flex-row min-h-screen overflow-x-hidden">
    <Head>
        <title>Certificates | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Certificates" />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6'>
            <Card img="/img/certificados/client-server.jpg" icon="/img/icons8-mysql.svg" title="Entendendo Comunicação Client x Server" description="11/10/2022" />
            <Card img="/img/certificados/construindo-bootstrap.jpg" icon="/img/icons8-bootstrap.svg" title="Construindo páginas para internet com Bootstrap" description="23/06/2022" />
            <Card img="/img/certificados/debugging-js.jpg" icon="/img/icons8-javascript.svg" title="Debugging e Error Handling com JavaScript" description="04/07/2022" />
            <Card img="/img/certificados/dev-moderno.jpg" icon="/img/icons8-dev.svg" title="Introdução ao Desenvolvimento Moderno de Software" description="29/08/2022" />
            <Card img="/img/certificados/forms.jpg" icon="/img/icons8-html.svg" title="Trabalhando com Formulários" description="18/10/2022" />
            <Card img="/img/certificados/html-format.jpg" icon="/img/icons8-html.svg" title="Estruturando seu HTML + Formatações" description="27/10/2022" />
            <Card img="/img/certificados/html-napratica.jpg" icon="/img/icons8-html.svg" title="Introdução ao HTML na Prática" description="11/10/2022" />
            <Card img="/img/certificados/intro-bdados.jpg" icon="/img/icons8-mysql.svg" title="Introdução a Banco de Dados" description="05/09/2022" />
            <Card img="/img/certificados/intro-git.jpg" icon="/img/icons8-git.svg" title="Introdução ao Git e ao GitHub" description="12/09/2022" />
            <Card img="/img/certificados/intro-html5.jpg" icon="/img/icons8-html.svg" title="Introdução a Criação de Websites com HTML5 e CSS3" description="20/06/2022" />
            <Card img="/img/certificados/intro-prog.jpg" icon="/img/icons8-dev.svg" title="Introdução à Programação e Pensamento Computacional" description="07/10/2022" />
            <Card img="/img/certificados/intro-tailwind.jpg" icon="/img/icons8-tailwind.svg" title="Introdução ao Tailwind CSS" description="23/08/2022" />
            <Card img="/img/certificados/js-async.jpg" icon="/img/icons8-javascript.svg" title="Fundamentos de JavaScript AssíncronoClone Netflix" description="05/07/2022" />
            <Card img="/img/certificados/logica-essencial.jpg" icon="/img/icons8-dev.svg" title="Lógica de Programação Essencial" description="25/04/2022" />
            <Card img="/img/image-1.jpg/" icon="/img/icons8-kotlin.svg" title="Clone Netflix" description="00/00/2022" />
          </div>
        </div>
      </div>
  </div>
  )
}

export default Certificates