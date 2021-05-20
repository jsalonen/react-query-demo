export async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return await res.json();
}

export async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await res.json();
}