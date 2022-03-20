const root = document.getElementById("root");

const title = React.createElement('h1', { title: "Hello", className: "Heading" }, 'Hello World');

const ul = React.createElement('ul',
  {
    id: 'ul-id',
    style: { color: 'red'},
  },
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'ReactJS')
)

const content = React.createElement('div',
  {className: 'post-item'},
  React.createElement('h2', { title: 'Học React tại F8' }, 'Học ReactJS'),
  React.createElement('p', {}, 'Học ReactJS từ cơ bản tới nâng cao')
)

ReactDOM.render(content, root);