const root = document.getElementById('root');
const Form = {
    Input() {
        return <input/>
    },
    Checkbox() {
        return <input type="checkbox"/>
    }
}
function Button({ title, href, onClick }) {
    let Component = 'button';
    const props = {}
    if (onClick) {
        props.onClick = onClick;
    }
        
    if (href) {
        props.href = href;
        Component = 'a'
    }
    return (
        <Component {...props}>{ title}</Component>
    )
}
const App = () => {
    const type = 'Input';
    const InputComponent = Form[type];
    let isRender = true;
    let title = '';
    let valueDefault = 'Value default';
    let a = '';
    return (
        <div>
            {/* <Form.Input />
            <InputComponent /> */}
            <Button
                title="Click me!"
                href="https://github.com/dunghenry"
                onClick={() => console.log(Math.random())}
            />
            {isRender && <h1>Nội dung được render</h1>}

            {
                title ? <h1>{title}</h1> : <h1>Không có nội dung(Nội dung tự thay thế)</h1>
            }

            {
                a || valueDefault
            }
        </div>
    )
}

ReactDOM.render(<App />, root)