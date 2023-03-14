import Image from 'next/image'

export default function Card(props) {
  return(
    <>
    <div className='py-2 px-2 md:px-4'>
      <a href="#">
        <div className='bg-white w-full  relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg hover:bg-indigo-400 hover:border-2 hover:border-indigo-600 hover:text-gray-200 hover:opacity-75'>
          <div className=' min-h-32 rounded-lg w-full object-cover'> <img src={props.img} /></div>
          <div className='right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-red-500'>15 Stars</div>
          <div className='flex justify-center'>
            <Image src={props.icon} width={64} height={64} className='rounded-full  border-4 object-center object-cover border-white mr-2 h-16 w-16' />
          </div>
          <div className="py-2 px-2">
          <div className="font-bold font-title text-center">{props.title}</div>

          <div className="text-sm font-light text-center my-2">{props.description}</div>
        </div>
        </div>
      </a>
    </div>
    </>
  )
}