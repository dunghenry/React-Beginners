import React from 'react';
const ChildComponent = ({ getData }) => {
    const [comments, setComments] = React.useState([]);
    React.useEffect(() => {
        console.log('re-render');
        getData('comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [getData]);
  return (
      <div>
          <h1>ChildComponent</h1>
          <p>{JSON.stringify(comments)}</p>
    </div>
  )
}

export default ChildComponent;