import Nav from '../components/Nav'
import TodoListItem from '../components/TodoListItem'
import AddTask from '../components/AddTask'

export default function Home() {
  return (
    <div>
      <Nav />
      <center>
        <AddTask />
        <ul className='flex-col mt-9 max-w-sm mb-3 '>
          <span className='inline-block bg-blue-600 py-1 mb-2 px-9 text-sm text-white font-bold rounded-full '>
            Available Tasks
          </span>
          <TodoListItem />
        </ul>
      </center>
    </div>
  )
}
