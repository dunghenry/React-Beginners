import React from 'react'
const tabs = ['posts', 'comments', 'albums']
const PartTwo = () => {
  const [type, setType] = React.useState('posts');
  const [data, setData] = React.useState([])
  console.log(type)
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=5`).then(response => response.json()).then(data => setData(data));
  }, [type])
  return (
    <div>
      {
        tabs.map((tab, index) => (
          <button style={type === tab ? {color: '#fff', background: '#333'} : {}} key={index} onClick={() => setType(tab)}>{tab}</button>
        ))
      }
      <ul>
        {
          data.map(item => <li key={item.id}>{ item.name || item.title }</li>)
        }
      </ul>
    </div>
  )
}

export default PartTwo;