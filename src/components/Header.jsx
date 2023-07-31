const Header = ()=>{
    return(
        <div className="grid grid-cols-2 gap-4 container mx-auto">
            <div className="flex items-center justify-center">
                <h2 className="text-6xl font-semibold">View the Space with us.</h2>
            </div>
            <div>
                <img className=" mt-6 rounded-3xl" src="https://images.unsplash.com/photo-1517976384346-3136801d605d" alt="" />
            </div>
        </div>
    )
}

export  default Header