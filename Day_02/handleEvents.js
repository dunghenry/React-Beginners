const root = document.getElementById('root');

const App = () => {
    return (
        <div>
            <button
                onClick={() => console.log(Math.random())}
            >Click me!</button>
        </div>
    )
}

ReactDOM.render(<App />, root)