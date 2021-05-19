import { useEffect, useState } from 'react';
import Todos from './Todos';
import { fetchTodos, fetchUser } from './api';

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
      <h1>Fetch</h1>
      { todos === undefined && <>Loading</> }
      { todos && <Todos todos={todos} />}      
    </div>
  )
}

export default ExampleWithFetch;
