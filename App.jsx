
import BookList from "./components/books"
import MovieList from "./components/movie"
import ToDo from "./components/todo"
const  App = () => {


  return (
    <>
      <div>
        <div className="flex justify-center p-3 w-full bg-[#d6d3d1]">
          <div ><p className="text-xl text-white">Components Activity</p></div>
        </div>
        <div className="flex flex-row w-full justify-around pt-10">

        <ToDo/>
        <MovieList/>
        <BookList/></div>
      </div>
    </>
  )
}

export default App
