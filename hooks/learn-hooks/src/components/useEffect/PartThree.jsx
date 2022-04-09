import React from 'react';
const tabs = ['posts', 'comments', 'albums']
const PartThree = () => {
  const [type, setType] = React.useState('posts');
  const [data, setData] = React.useState([]);
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  const [showGoToTop, setShowGoToTop] = React.useState(false);
  
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response => response.json()).then(data => setData(data));
  }, [type]);

  //Scroll listeners
  React.useEffect(() => {
    console.log("Mounted")
    const handelScroll = () => {
      if (window.scrollY > 200) {
        setShowGoToTop(true);
      }
      else {
        setShowGoToTop(false);
      }
    }
    window.addEventListener('scroll', handelScroll)
    return () => {
      console.log("Unmounted");
      window.removeEventListener('scroll', handelScroll);
    }
  }, []);


  //Resize
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    console.log("Add Resize");
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("Remove Resize")
    }
  }, [])

  //Go to top
  const goToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  console.log(windowSize);
  return (
    <div>
      {
        tabs.map((tab, index) => (
          <button style={type === tab ? { color: '#fff', background: '#333' } : {}} key={index} onClick={() => setType(tab)}>{tab}</button>
        ))
      }
      <ul>
        {
          data.map(item => <li key={item.id}>{item.name || item.title}</li>)
        }
      </ul>
      <div>
        {showGoToTop && <button onClick={goToTop} style={{position: 'fixed', right: '2rem', bottom: '2rem', cursor: 'pointer'}}>Go to top</button>}
      </div>
    </div>
  )
}

export default PartThree;