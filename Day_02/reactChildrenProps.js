const root = document.getElementById('root');
function Input({ label, ...inputProps }) { //rest props
    return (
        <div>
            <label htmlFor="input">{label}</label>
            <input {...inputProps}/>
        </div>
    )
}

//Children props 
const Button = ({children}) => {
    return (
        <button>{ children }</button>
    )
}

// const List = ({data}) => {
//     return(
//         <uL>
//             {
//                 data.map((item, index) => <li key={index}>{ item }</li>)
//             }
//         </uL>
//     )
// }

const List = ({ data, children }) => {
    // console.log(data, children )
    return(
        <ul>
            {/* Cach 1 */}
            {
                data.map((item, index) => children(item, index))
            }
            
            {/* Cach 2 */}
            {
                data.map((...props) => children(...props))
            }

            {/* Cach 3 */}
            {
                data.map(children)
            }

        </ul>
    )
}
const App = () => {
    const cars = ['Honda', 'Mazda', 'Mercedes'];
    return (
        <div>
            <Input
                label="Full name: "
                type="text"
                placeholder="Enter name..."
                onFocus={() => console.log(Math.random())}
            />
            <Button>Click me!</Button>
            <Button>{ false || "default title" }</Button>
            <Button>{true && "Display"}</Button>

            {/* <List data={cars} /> */}

            {/* formik */}
            <List data={ cars }>{(item, index) => <li key={index}>{ item }</li>}</List>
        </div>
    )
}

ReactDOM.render(<App />, root)