
const Button = ({label, iconURL}) => {
  return (
    <div>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none bg-coral-red rounded-md text-white">{label}
        
            {
              iconURL && <img className="ml-2 w-5 h-5 rounded-full" 
                          src={iconURL} alt="arrow right icon"></img> 
            }
        </button>
    </div>
  )
}

export default Button
