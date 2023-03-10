import Menu from './menu';


export default function Aside() {
  return (
    
    <div className='bg-gray-100 w-12 lg:w-72 min-h-screen border-r-2 border-fuchsia-600 md:none'>       
        <div className='flex flex-none w-full justify-center items-center  lg:py-16 text-center'>
          <div className='lg:visible invisible animate-pulse border-indigo-600 items-center text-center text-2xl font-extrabold text-purple-900'>GUS<span className='text-green-600'>TH</span>AVO</div>
        </div>
        <Menu page="Home" route="/" icon="/img/home-solid.svg"/>        
        <Menu page="About" route="/about" icon="/img/user-solid.svg"/>       
        <Menu page="Projects" route="/projects" icon="/img/briefcase-solid.svg"/> 
        <Menu page="Certificates" route="/certificates" icon="/img/certificate-solid.svg"/>     
        <Menu page="Contact" route="/contact" icon="/img/comments-solid.svg"/>        
        <p className='lg:visible invisible text-center  text-xs font-medium text-gray-400 w-full p-2'> Copyright © 2022  GUSTHAVO RAMOS MIGUEL </p> 
    </div>
    
  )
}