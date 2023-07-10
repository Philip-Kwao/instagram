
const SideItem = ({icon, title}) => {
  return (
    <div className='flex items-center cursor-pointer hover:bg-stone-200 h-14 px-4 mx-4 rounded-lg group'>
        <div className="text-3xl group-hover:scale-105 group-hover:duration-200 group-hover:ease-in-out">
            {icon}
        </div>
        <span className='ml-3'>{title}</span>
    </div>
  )
}

export default SideItem