import Link from 'next/link'
import Image from 'next/image'


export default function Menu(props) {
  return (
    <div>      
      <nav className="flex w-screen">                          
        <ul className='text-left text-base'>       
          <li className='lg:visible invisible list-inside border-b-2 w-52 border-indigo-600 border-opacity-25 mx-8 mb-2  pb-2 font-bold text-gray-900 hover:text-purple-900'>
            <Link href={props.route}>              
              <Image src={props.icon} width={15} height={15} /> {props.page}
            </Link>
          </li>     
          <li className='visible lg:invisible list-inside mx-4'>
            <Link href={props.route}>              
              <Image src={props.icon} width={15} height={15} />
            </Link>
          </li>     
        </ul>  
        <Link className="lg:hidden self-center mr-12 hover:text-gray-900" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </Link>
      </nav>
    </div>
  )
}