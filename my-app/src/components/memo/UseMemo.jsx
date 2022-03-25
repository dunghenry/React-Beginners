import { useState, useMemo, useRef } from "react";

const UseMemo = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const handleProduct = () => {
        if (name !== '' && parseInt(price) > 0) {
            setProducts([...products, {
                name: name,
                price: parseInt(price) //convert number type, +price,...
            }]);
        }
        else {
            alert('Cac truong input khong hop le');
        }
        setName("");
        setPrice("");
        nameRef.current.focus();
    }
    const total = useMemo(() => {
        const result = products.reduce((result, product) => {
            console.log("Tinh tien lai");
            return result + product.price;
        }, 0)
        return result;
    }, [products])
    console.log(nameRef);
    return (
        <div>
            <div>
                <input ref={nameRef} type="text" placeholder="Enter name..." value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" value={price} placeholder="Enter price..." onChange={(e) => setPrice(e.target.value)} />
                <br />
                <input />
                <button onClick={handleProduct}>Add</button>
            </div>
            <h1>Total: {total}</h1>
            {
                products.map((product, index) => <li key={index}>{product.name} - {product.price}</li>)
            }
        </div>
    );
};

export default UseMemo;
