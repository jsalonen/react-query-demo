function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            &nbsp;
            (<a href={todo.user.email}>{todo.user.name}</a>)
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Todos;