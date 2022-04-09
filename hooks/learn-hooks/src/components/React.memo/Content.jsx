import React from 'react';
const Content = () => {
    //Nếu nhận props từ component cha và props thay đổi thì component con nhận props đó ms bị re-render
    console.log("Render")
  return (
      <div>
          <h1>Content component</h1>
    </div>
  )
}

export default React.memo(Content);