import React from "react";

const AddTodo = () => {
  return (
    <>
      <form noValidate autoComplete="off" className="container flex m-auto border p-4 rounded-lg border-blue-500 shadow-2xl">
        <div className="mb-6 grow mt-4">
          <input
            type="text"
            id="input-todo"
            placeholder="Enter ToDo"
            className="block w-full p-4 text-gray-900 border rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 rounded-xl ml-4 mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
