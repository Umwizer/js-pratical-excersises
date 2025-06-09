async function fetchUserTodos() {
  try {
    const users1 = `https://jsonplaceholder.typicode.com/users`;
    const todos1 = `https://jsonplaceholder.typicode.com/todos`;
    const [users, todos] = await Promise.all([fetch(users1), fetch(todos1)]);
    if (!users.ok || !todos.ok) {
      throw new Error(`http error status`);
    }
    const [usersRes, todosRes] = await Promise.all([
      users.json(),
      todos.json(),
    ]);
    const combined = usersRes.map((user) => ({
      ...user,
      todos: todosRes.filter((todo) => todo.userId === user.id),
    }));
    return combined;
  } catch (err) {
    console.error(`network error: ${err.message}`);
  }
}
fetchUserTodos().then((data) => console.log(data));
