import React from 'react';
const Main = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const inputRef = React.useRef();
    const handleSubmit = () => {
        const product = {
            name,
            price: parseInt(price),
        }
        if (name !== "" && product.price) {
            setProducts(prev => [...prev, product]);
            setName('');
            setPrice('');
            inputRef.current.focus();
        }
        else {
            alert("Du lieu khong dung")
        }
    }
    const total = React.useMemo(() => {
        console.log("Tinh tien "); //tinh toan lai neu products thay doi 
        const result = products.reduce((total, product) => {
            return total + product.price;
        }, 0)
        return result;
    }, [products]);
    return (
        <div>
            <div>
                <label>Product name: </label>
                <input ref={inputRef} value={name} type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                <p>Total: {total} </p>
                {
                    products.map((product, index) => {
                        return (
                            <div key={index}>
                                {product.name} - {product.price}
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Main;