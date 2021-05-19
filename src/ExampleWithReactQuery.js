import { useQuery, useQueryClient } from 'react-query';
import { fetchTodos, fetchUser } from './api';

function Todo({ todo }) {
	const user = useQuery(['users', todo.userId], () => fetchUser(todo.userId));

	return (
		<li key={todo.id}>
			{todo.title}
			&nbsp;
			{user.data && (<a href={user.data.email}>{user.data.name}</a>)}
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
	const { isLoading, error, data } = useQuery('todos', fetchTodos);
	const queryClient = useQueryClient();

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
