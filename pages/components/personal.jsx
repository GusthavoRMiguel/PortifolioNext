export default function Personal(props) {
  return(
    <>
      <p className="border-b border-gray-300 mb-2 pb-2"><span className='font-medium '>{props.title}:</span> {props.description}</p>
    </>
  )
}