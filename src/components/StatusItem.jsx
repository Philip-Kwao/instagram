
const StatusItem = ({username, img}) => {
  return (
    <div className='m-2'>
        <div className="flex flex-col items-center group ">
            <div className="w-[50px] h-[50px] border-gradient rounded-full group-hover:scale-110 duration-200 ease-in-out cursor-pointer">
                <img className='rounded-full w-full h-full border-white border' src={img} alt={username} />
            </div>
            <span className='text-xs font-light'>{username}</span>
        </div>
    </div>
  )
}

export default StatusItem