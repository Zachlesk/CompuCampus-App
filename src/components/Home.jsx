import { VacantCardView } from "../views/VacantCard"
import { Search } from "./Search"

export const Home = () => {

  return (
    <>
      <section className="w-full">
        <div
          className="flex flex-col  mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center h-full">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Compu

              <span className="sm:block"> CampusLand </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Find the job of your dreams
            </p>

            <Search />

          <VacantCardView />
          <VacantCardView />

          <VacantCardView />
          </div>
        </div>
      </section>


    </>
  )
}