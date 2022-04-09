import React from 'react';
import Content from './Content';
import ChildComponent from './ChildComponent';
const Main = () => {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const handleCount = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  const getData = React.useCallback((type) => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}`);
  }, [])
  const handleClick = () => {
    getData('todos')
      .then(res => res.json())
      .then((data) => {
        setTodos(data)
      });
  }
  return (
    <div>
      <h1>{count}</h1>
      <Content onIncrease={handleCount} />
      <button onClick={handleClick}>Click me</button>
      <p>{JSON.stringify(todos)}</p>
      <ChildComponent getData={getData} />
    </div>
  )
}
export default Main;