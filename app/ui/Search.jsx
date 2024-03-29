const Search = () => {
    return (
        <div>
        <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input type="text" name="search" id="search" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search..."/>
            <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="search" className="sr-only">Search</label>
            </div>
        </div>
        </div>
    )
}

export { Search }