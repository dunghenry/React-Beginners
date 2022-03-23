import React, { useEffect, useState } from "react";
const tabs = ["posts", "comments", "todos"];
const ContentComponent = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  //Callback sẽ đc gọi lại nếu dependency thay đổi
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, [type]);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
        console.log("set state");
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    //Cleanup function
    return () => {
      console.log("Unmounted")
      window.removeEventListener('scroll', handelScroll);
    }
  }, []);
  console.log("re-render");
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
          key={index}
        >
          {tab}
        </button>
      ))}
      {data.map((item, index) => (
        <li key={index}>{item.title || item.name}</li>
      ))}
      {showGoToTop && (
        <button style={{ position: "fixed", bottom: "10px", right: "20px" }}>
          Go to Top
        </button>
      )}
    </div>
  );
};
const UseEffectPartThree = () => {
  const [show, setShow] = useState(false);
  const handelClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handelClick}>Toggle</button>
      {show && <ContentComponent />}
    </div>
  );
};

export default UseEffectPartThree;
