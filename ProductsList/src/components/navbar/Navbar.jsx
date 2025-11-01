
const Navbar = () => {
  return (
    <header className="flex justify-between top-0 bg-white w-full h-16 items-center shadow-md px-4">
        <div>
        <a href="#" className="font-bold text-2xl text-black no-underline">./amazon </a>
      </div>

      <div className="flex items-center">
        <input type="text" placeholder="Search" className="px-4 w-200" />
        <button className="cursor-pointer hover:text-gray-700">search</button>
      </div>

      <div className="flex items-center gap-10">
        <a href="#" className="cursor-pointer hover:text-gray-700">Cart</a>
        <a href="#" className="cursor-pointer hover:text-gray-700">Return & Orders</a>
      </div>

    </header>
  )
}

export default Navbar