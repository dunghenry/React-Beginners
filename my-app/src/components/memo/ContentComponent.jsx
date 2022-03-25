import { memo } from 'react';
const ContentComponent = () => {
    console.log("Render component");
  return (
      <div>
          <h1>Xin chao moi nguoi</h1>
    </div>
  )
}

export default memo(ContentComponent); //Sd toan tu  === de kiem tra neu props thay doi thi cmp dc re render