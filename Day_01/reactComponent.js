const root = document.getElementById('root');
//Function Component
function Header() {
    return (
        <div>Header</div>
    )
}

//Class Component
class Content extends React.Component{
    render() {
        return (
            <div>Content</div>
        )
    }
}

const Footer = () => {
    return (
        <div>Footer</div>
    )
}
const app = (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
)

ReactDOM.render(app, root)