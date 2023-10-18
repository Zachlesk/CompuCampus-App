export const Search = () => {
  return (
    <div className="flex items-center p-4 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="Job name or keyword..." />
      </div>
    

      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
      >
        <option value="">Find by Enterprise</option>
        <option value="JM">John Mayer</option>
        <option value="SRV">Stevie Ray Vaughn</option>
        <option value="JH">Jimi Hendrix</option>
        <option value="BBK">B.B King</option>
        <option value="AK">Albert King</option>
        <option value="BG">Buddy Guy</option>
        <option value="EC">Eric Clapton</option>
      </select>
      <div className="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Search</span>
      </div>
    </div>
  )
}