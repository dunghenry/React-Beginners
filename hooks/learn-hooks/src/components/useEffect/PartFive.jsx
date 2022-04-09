import React from 'react';
const PartFive = () => {
    const [count, setCount] = React.useState(1);
    const [urlImg, setUrlImg] = React.useState('');
    const handelClick = () => {
        setCount(count + 1);
    }
    //Sau lần re-render lần thứ nhất thì nếu tiếp tục re-render thì cleanup function chạy trước re-render
    React.useEffect(() => {
        console.log('Re-render')
        return () => console.log("Cleanup function!!");
    }, [count]);

    React.useEffect(() => {
        return () => {
            urlImg && URL.revokeObjectURL(urlImg)
        }
    }, [urlImg])
    const handelChangeAvatar = (e) => {
        const file = e.target.files[0]
        setUrlImg(URL.createObjectURL(file));
        //Cach chon lai anh cu
        //e.target.value = null
        console.log("Chon lai anh?")
    }
    console.log('Render');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handelClick}>Count++</button>
            <input type="file" onChange={handelChangeAvatar} />
            {
                urlImg && <img src={urlImg} alt="avatar"/>
            }
        </div>
    )
}
export default PartFive;