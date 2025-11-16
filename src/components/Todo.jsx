import { MdDeleteForever, MdEdit } from "react-icons/md";

function Todo() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-slate-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-4">
          To-Do List
        </h1>

       
        <form className="flex items-center border border-green-300 rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 p-2 outline-none text-gray-700"
          />
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition"
          >
            Add
          </button>
        </form>

      
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-white p-2 shadow rounded-lg hover:bg-pink-100 transition-all">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
              <p className="text-gray-700">Learn React Basics</p>
            </div>
            <div className="flex gap-2 justify-end">
              <span className="text-orange-500 text-2xl cursor-pointer">
                <MdEdit />
              </span>
              <span className="text-red-500 text-2xl cursor-pointer">
                <MdDeleteForever />
              </span>
            </div>
          </li>

          <li className="flex justify-between items-center bg-white p-2 shadow rounded-lg hover:bg-pink-100 transition-all">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
              <p className="text-gray-700">Build a To-Do App</p>
            </div>
            <div className="flex gap-2 justify-end">
              <span className="text-orange-500 text-2xl cursor-pointer">
                <MdEdit />
              </span>
              <span className="text-red-500 text-2xl cursor-pointer">
                <MdDeleteForever />
              </span>
            </div>
          </li>

          <li className="flex justify-between items-center bg-white p-2 shadow rounded-lg hover:bg-pink-100 transition-all">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
              <p className="line-through text-gray-400">Review Tailwind CSS</p>
            </div>
            <div className="flex gap-2 justify-end">
              <span className="text-orange-500 text-2xl cursor-pointer">
                <MdEdit />
              </span>
              <span className="text-red-500 text-2xl cursor-pointer">
                <MdDeleteForever />
              </span>
            </div>
          </li>
        </ul>

      
        <button
          type="button"
          className="bg-red-500 text-white rounded px-4 py-2 mt-4 hover:bg-red-700 transition w-full"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Todo;
