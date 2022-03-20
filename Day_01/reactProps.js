const root = document.getElementById('root');
function PostItem(props) {
    const { img, title, description, publisheAt, callback } = props
    if (typeof callback === 'function') {
        console.log(callback)
        callback((Math.random()));
    }
    return (
        <div className="post-item">
            <img src={img} alt={title} />
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{description}</p>
            <p className="post-published">{publisheAt}</p>
        </div>
    )
}

const App = () => {
    return (
        <div className="posts-list">
            <PostItem
                img="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                title="Kiến thức nhập môn IT"
                description="Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé."
                publisheAt="Một ngày trước.  5 phút đọc"
                callback={(value) => {console.log(value);}}
            />
            <PostItem
                img="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                title="HTML, CSS từ Zero đến Hero"
                description="Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee."
                publisheAt="Một ngày trước.  5 phút đọc"
            />
        </div>
    )
}

ReactDOM.render(<App/>, root);

