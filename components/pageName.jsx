export default function PageName(props) {

  return (
    <div>
      <h1 className='text-3xl font-bold text-left mt-10'>{props.name}</h1>
        <p className='border-t-4 border-indigo-600 w-10 mt-1'></p>
        <p className='border-t-4 border-indigo-600 w-6 mt-1'></p>
    </div>
  );  
}