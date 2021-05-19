import { useEffect, useState } from 'react';
import Todos from './Todos';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return await res.json();
}

async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await res.json();
}

async function fetchTodosWithUsers() {
  const todos = await fetchTodos();
  const todoUsers = await Promise.all(todos.map(({ userId }) => {
    return fetchUser(userId);
  }));

  return todos.map((todo, index) => {
    return { ...todo, user: todoUsers[index] };
  });
}

function ExampleWithFetch() {
  const [ todos, setTodos ] = useState();

  useEffect(() => {
    fetchTodosWithUsers().then(todos => setTodos(todos));
  }, []);

  return (
    <div>
      { todos === undefined && <>Loading</> }
      { todos && <Todos todos={todos} />}      
    </div>
  )
}

export default ExampleWithFetch;
