import Head from 'next/head'
import Aside from '../components/aside'
import PageName from '../components/pageName'
import Card from '../components/card'


function Projects() {
  return (
  <div className="flex flex-row min-h-screen overflow-x-hidden">
    <Head>
        <title>Projects | Gusthavo Ramos</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Aside />  
    <div className='flex-grow bg-gray-200  w-full min-h-screen'>
      <div className='container mx-auto px-8 py-5'>
        <PageName name="Projects" />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6'>

        <Card link="https://mult-flix.vercel.app/" image="/img/image-1.jpg" icon="/img/icons8-kotlin.svg" title="MultiFlix" description="Clone da Netflix feito em HTML com carrossel feito em Javasript " color="bg-green-500" status="online" />

        <Card link="https://me-gustha-devnext.vercel.app/" image="/img/image-1.jpg" icon="/img/icons8-typescript.svg" title="Portifolio usando NextJS" description="Pagina de portifolio utilizando nextjs e jsx.                                           " color="bg-green-500" status="online" />

        <Card link="#" image="/img/image-1.jpg" icon="/img/icons8-typescript.svg" title="Portifolio usando Angular" description="Pagina de portifolio utilizando Angular                             " color="bg-red-500"     status="em breve" />

        <Card link="#" image="/img/image-1.jpg" icon="/img/icons8-dart.svg" title="Pagina Web utilizando Bootstrap" description="Pagina HTML utilizando bootstrap                                       " color="bg-red-500" status="em breve"/>

        <Card link="#" image="/img/image-1.jpg" icon="/img/icons8-python.svg" title="Site estilizado com Tailwind CSS" description="Projeto de site utilizando HTML/Javascript e estilizacção com Tailwind CSS   " color="bg-red-500" status="em breve"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects