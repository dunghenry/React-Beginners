import { useState, useEffect } from 'react';
const lessons = [
    {
        id: 1,
        name: "ReactJS la gi?"
    },
    {
        id: 2,
        name: "SPA/MPA la gi?"
    },
    {
        id: 3,
        name: "Arrow function"
    }
]
const ContentComponent = () => {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {
                    lessons.map(lesson =>
                    (
                        <li
                            key={lesson.id}
                            style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
                            onClick={() => setLessonId(lesson.id)}>{lesson.name}
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}
const FakeChatApp = () => {
    const [show, setShow] = useState(false);
    const handelClick = () => {
        setShow(!show);
    }
    return (
        <div>
            <button onClick={handelClick}>Toggle</button>
            {show && <ContentComponent />}
        </div>
    )
}

export default FakeChatApp