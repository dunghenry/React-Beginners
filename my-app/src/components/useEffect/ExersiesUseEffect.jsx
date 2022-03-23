import React, { useState, useEffect } from 'react';
const ContentComponent = () => {
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleAvatarPreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        // e.target.value = null; //Cach xu li khi chon lai 1 anh nhu anh truoc thi van dc
    }
    console.log(avatar);
    return (
        <div>
            <input type="file" onChange={handleAvatarPreview}/>
            {avatar && <img src={avatar.preview} width="80%"/>}
        </div>
    )
}

const ExersiesUseEffect = () => {
  const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    };
    return (
        <div>
            <button onClick={handelClick}>Toggle</button>
            {show && <ContentComponent />}
        </div>
    )
}

export default ExersiesUseEffect;