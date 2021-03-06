const root = document.getElementById('root');
const posts = [
    {
        "id": 65,
        "user_id": 1,
        "title": "Tổng hợp các sản phẩm của học viên tại F8 👏👏",
        "slug": "tong-hop-cac-san-pham-cua-hoc-vien-tai-f8",
        "description": null,
        "meta_title": "Tổng hợp các sản phẩm của học viên tại F8",
        "meta_description": "Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới...",
        "image": "blog_posts/65/6139fe28a9844.png",
        "thumbnail": "blog_posts/65/6139fe28a9844.png",
        "min_read": 6,
        "published_at": "2021-09-09 17:46:12",
        "is_approved": true,
        "created_at": "2021-09-09T02:35:13.000000Z",
        "reactions_count": 621,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 1,
            "username": "son-dang",
            "first_name": "Sơn",
            "last_name": "Đặng",
            "full_name": "Sơn Đặng",
            "avatar": "user_avatars/1/6207343556533.png",
            "avatar_url": "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/6207343556533.png",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 279,
        "user_id": 1,
        "title": "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
        "slug": "phan-1-tao-du-an-reactjs-voi-webpack-va-babel",
        "description": null,
        "meta_title": "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
        "meta_description": "Tự tạo dự án ReactJS với webpack và babel nhằm mục đích giúp chúng ta hiểu rõ hơn về về cách create-react-app đã tạo ra dự án ReactJS như thế nào và quan...",
        "image": "blog_posts/279/6153f692d366e.jpg",
        "thumbnail": "blog_posts/279/6153f6932dcea.jpg",
        "min_read": 12,
        "published_at": "2021-09-29 12:16:03",
        "is_approved": true,
        "created_at": "2021-09-13T08:14:19.000000Z",
        "reactions_count": 291,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f6932dcea.jpg",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 1,
            "username": "son-dang",
            "first_name": "Sơn",
            "last_name": "Đặng",
            "full_name": "Sơn Đặng",
            "avatar": "user_avatars/1/6207343556533.png",
            "avatar_url": "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/6207343556533.png",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 51,
        "user_id": 56767,
        "title": "Ký sự ngày thứ 25 học ở F8 ",
        "slug": "ky-su-ngay-thu-25-hoc-o-f8-1",
        "description": null,
        "meta_title": "Ký sự ngày thứ 25 học ở F8 ",
        "meta_description": "Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1....",
        "image": "blog_posts/51/6139c6453456e.png",
        "thumbnail": "blog_posts/51/6139c645e1a84.png",
        "min_read": 1,
        "published_at": "2021-09-09 15:31:02",
        "is_approved": true,
        "created_at": "2021-09-09T01:06:41.000000Z",
        "reactions_count": 238,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c645e1a84.png",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 56767,
            "username": "son-son-16",
            "first_name": "Sơn",
            "last_name": "Sơn",
            "full_name": "Sơn Sơn",
            "avatar": "https://graph.facebook.com/1642531882604203/picture?width=400&height=400",
            "avatar_url": "https://graph.facebook.com/1642531882604203/picture?width=400&height=400",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 107,
        "user_id": 8,
        "title": "Các nguồn tài nguyên hữu ích cho 1 front-end developer",
        "slug": "cac-nguon-tai-nguyen-huu-ich-cho-1-front-end-developer",
        "description": null,
        "meta_title": "Các nguồn tài nguyên hữu ích cho 1 front-end developer",
        "meta_description": null,
        "image": "blog_posts/107/613a1f3685814.png",
        "thumbnail": "blog_posts/107/613a1f36eed00.png",
        "min_read": 2,
        "published_at": "2021-09-09 21:50:31",
        "is_approved": true,
        "created_at": "2021-09-09T06:57:39.000000Z",
        "reactions_count": 210,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f36eed00.png",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 8,
            "username": "duong-vuong",
            "first_name": "Vương",
            "last_name": "Dương",
            "full_name": "Vương Dương",
            "avatar": "https://graph.facebook.com/547825429409669/picture?width=400&height=400",
            "avatar_url": "https://graph.facebook.com/547825429409669/picture?width=400&height=400",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 1671,
        "user_id": 9143,
        "title": "Thời gian và Động lực",
        "slug": "thoi-gian-va-dong-luc",
        "description": null,
        "meta_title": "Thời gian và Động lực",
        "meta_description": "Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là \"timetable\". Hay dân dã hơn thì người ta hay gọi là \"Lịch thường nhật\",...",
        "image": "blog_posts/1671/61b6368983c16.jpg",
        "thumbnail": "blog_posts/1671/61b6368a3a089.jpg",
        "min_read": 6,
        "published_at": "2021-12-13 05:00:00",
        "is_approved": true,
        "created_at": "2021-12-12T10:18:10.000000Z",
        "reactions_count": 204,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368983c16.jpg",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/61b6368a3a089.jpg",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 9143,
            "username": "dong-ngo",
            "first_name": "Dong",
            "last_name": "Ngo",
            "full_name": "Dong Ngo",
            "avatar": "user_avatars/9143/616309bb2f85f.png",
            "avatar_url": "https://files.fullstack.edu.vn/f8-prod/user_avatars/9143/616309bb2f85f.png",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 677,
        "user_id": 18159,
        "title": "Cách đưa code lên GitHub và tạo GitHub Pages",
        "slug": "cach-dua-code-len-github-va-tao-github-pages",
        "description": null,
        "meta_title": "Cách đưa code lên GitHub và tạo GitHub Pages",
        "meta_description": "Ở bài viết này, mình sẽ hướng dẫn cách để đưa code lên trên Github và tạo Github Pages để xem được trang web mà các bạn đưa lên  như thế nào.",
        "image": "blog_posts/677/615436b218d0a.png",
        "thumbnail": "blog_posts/677/615436b284513.png",
        "min_read": 4,
        "published_at": "2021-09-29 16:49:38",
        "is_approved": true,
        "created_at": "2021-09-29T01:20:27.000000Z",
        "reactions_count": 182,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b284513.png",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 18159,
            "username": "vo-minh-kha",
            "first_name": "Võ Minh",
            "last_name": "Kha",
            "full_name": "Võ Minh Kha",
            "avatar": "user_avatars/18159/61643a2b36731.jpg",
            "avatar_url": "https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/61643a2b36731.jpg",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    },
    {
        "id": 273,
        "user_id": 74901,
        "title": "Tổng hợp tài liệu tự học tiếng anh cơ bản.",
        "slug": "tong-hop-tai-lieu-tu-hoc-tieng-anh-co-ban",
        "description": null,
        "meta_title": "Tổng hợp tài liệu tự học tiếng anh cơ bản.",
        "meta_description": "Tài liệu tự học tiếng anh full không che. Bạn cần đọc 7749 lần các kiến thức sẽ thấm nhuần vào não bạn.",
        "image": "blog_posts/273/614043e523ad9.png",
        "thumbnail": "blog_posts/273/614043e58f413.png",
        "min_read": 7,
        "published_at": "2021-09-15 08:30:00",
        "is_approved": true,
        "created_at": "2021-09-13T05:09:09.000000Z",
        "reactions_count": 104,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/273/614043e523ad9.png",
        "thumbnail_url": "https://files.fullstack.edu.vn/f8-prod/blog_posts/273/614043e58f413.png",
        "is_bookmark": false,
        "is_published": true,
        "user": {
            "id": 74901,
            "username": "le-thanh-trung-5",
            "first_name": "Lê Thành",
            "last_name": "Trung",
            "full_name": "Lê Thành Trung",
            "avatar": "user_avatars/74901/6172af710d6d3.jpg",
            "avatar_url": "https://files.fullstack.edu.vn/f8-prod/user_avatars/74901/6172af710d6d3.jpg",
            "is_comment_blocked": false,
            "is_blocked": false
        }
    }
]


//Cách 1
// const PostItem = ({post}) => {
//     return (
//         <div>
//             <h1>{post.title}</h1>
//             <img src={post.thumbnail_url} alt={post.title} />
//             <p>{post.meta_title}</p>
//         </div>
//     )
// }

//Cách 2
const PostItem = ({ title, description, img }) => {
    console.log(title)
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p>{description}</p>
        </div>
    )
}
const App = () => {
    return (
        <div>
            {
                posts.map(post => <PostItem key={post.id} title={post.title} description={post.meta_title} img={post.thumbnail_url}/>)
            }
        </div>
    )
}
ReactDOM.render(<App />, root)