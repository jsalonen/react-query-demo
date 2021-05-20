import { useQuery } from 'react-query';
import { fetchTodos, fetchUser } from './api';

function useTodos() {
  return useQuery('todos', fetchTodos);
}

function useUser(userId) {
	return useQuery(['users', userId], () => fetchUser(userId));
}

function Todo({ todo }) {
  const { data: user } = useUser(todo.userId);

	return (
		<li key={todo.id}>
			{todo.title}
			&nbsp;
			{user && (<a href={user.email}>{user.name}</a>)}
		</li>
	);
}

function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(todo => <Todo todo={todo} />)}
      </ul>
    </div>
  )
};

function ExampleWithReactQuery() {
	const { isLoading, error, data } = useTodos();

  return (
    <div>
      <h1>react-query</h1>
      { isLoading && <>Loading</> }
			{ error && <>ERROR</> }
      { data && <Todos todos={data} />}      
    </div>
  )
}

export default ExampleWithReactQuery;
