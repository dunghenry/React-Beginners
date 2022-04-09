import React from 'react';
const lessons = [
  {
    id: 1,
    name: "ReactJS la gi? Tai sao nen hoc react?"
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
const Content = () => {
  const [lessonId, setLessonId] = React.useState(1);
  React.useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => window.removeEventListener(`lesson-${lessonId}`, handleComment);
  }, [lessonId]);
  return (
    <div>
      <ul>
        {
          lessons.map(lesson => <li
            key={lesson.id}
            onClick={() => setLessonId(lesson.id)}
            style={{color: lessonId === lesson.id ? 'red' : '#333' }}
          >
            {lesson.name}
          </li>)
        }
      </ul>
    </div>
  )
}

export default Content;