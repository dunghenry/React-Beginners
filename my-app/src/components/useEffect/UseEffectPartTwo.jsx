import React, { useEffect, useState } from 'react';
const tabs = ['posts', 'comments', 'todos'];
const UseEffectPartTwo = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState('posts');

    //Callback sẽ đc gọi lại nếu dependency thay đổi
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(response => setData(response));
    }, [type]);
    console.log(type);
  return (
      <div>
          {
            tabs.map((tab, index) => <button style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}} onClick={() => setType(tab)} key={index}>{ tab }</button>)
          }
          {
            data.map((item, index) => <li key={index}>{ item.title || item.name }</li>)
          }
    </div>
  )
}

export default UseEffectPartTwo