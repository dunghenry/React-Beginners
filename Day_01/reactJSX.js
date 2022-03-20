const courses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'ReactJS'
    }, 
    {
        name: "Responsive web design"
    }
]
const ul = <ul>
    <li>ReactJS</li>
    <li>JavaScript</li>
</ul>

const content = <ul>
    {courses.map((course, index) => <li key={index}>{course.name}</li>)}
</ul>

//Cách 1
const jsx = (
    <React.Fragment>
        <h1>Hello các bạn</h1>
        <h2>Học ReactJS</h2>
    </React.Fragment>
)

//Cách 2
const jsx1 = React.createElement(
    React.Fragment,
    {},
    React.createElement('h1', null, "Xin chao"),
    React.createElement('h2', null, "Hoc ReactJS")
    )

const root = document.getElementById('root');
ReactDOM.render(jsx1, root);