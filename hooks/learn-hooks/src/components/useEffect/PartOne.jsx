import React from 'react';
const PartOne = () => {
    const [title, setTitle] = React.useState("");
    const [posts, setPosts] = React.useState([]);
    //Được gọi sau khi component đc re-render
    //Được gọi sau khi component đc mounted
    //Callback goi sau khi component thm element vao DOM
    React.useEffect(() => {
        document.title = title;
        console.log('Mounted');
    })

    //Chỉ gọi callback 1 lần sau khi component mounted
    React.useEffect(() => {
        console.log('Mounted');
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(response => response.json()).then(data => setPosts(data));
    }, []);

  return (
      <div>
          <h1>Xin chào</h1>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          {console.log("Render")}
          <ul>
              {
                posts.map(post => <li key={post.id}>{ post.title }</li>)
              }
          </ul>
    </div>
  )
}

export default PartOne;