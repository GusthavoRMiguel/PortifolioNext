export function Timeline(props) {
  return(
    <li className="mb-2">
      <div className="flex items-center mb-1">
        <div className="bg-indigo-500 rounded-full h-3 w-3"></div>
        <div className="flex-1 ml-4 text-gray-400 text-sm font-medium"> {props.ano}</div>        
      </div>
      <div className="ml-12">
        <div className="flex-1 ml-4 text-lg font-semibold"> {props.title}</div>
        {props.description}
      </div>
    </li>
  )
}