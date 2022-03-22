import React, {useEffect, useState} from 'react'

const UseEffectPartOne = () => {
    const [title, setTitle] = useState('');
    //Callback dc thuc hien ngay sau khi component dc mounted()
    //Goi callback sau khi component re-render
    //Goi call back sau khi dua element vao DOM
    //Syntax: useEffect(() => {})
    // useEffect(() => {
    //     document.title = title;
    // })

    //Call API: Chỉ gọi callback đúng 1 lần sau khi component đc mounted
    //Syntax: useEffect(() => {}, [])
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

  return (
      <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <ul>
              {
                  data.map(item => <li key={item.id}>{item.title }</li>)
              }
          </ul>
    </div>
  )
}

export default UseEffectPartOne