import React, {useState} from 'react';
const courses = [
    {
        id: 1,
        name: "HTML, CSS"
    },
    {
        id: 2,
        name: "JavaScript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
]
const RadioComponent = () => {
    const [checked, setChecked] = useState();
    const handleSubmit = () => {
        const data = courses.find(course => {
            if (course.id === checked)
                return course;
        })
        console.log(data);
    }
    return (
        <div>
            {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input type="radio" id={course.id} checked={course.id === checked} onChange={ () => setChecked(course.id)}/>
                            <label htmlFor={course.id}>{ course.name}</label>
                        </div>
                    )
                })
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const CheckboxComponent = () => {
    const [checkeds, setCheckeds] = useState([]);
    const handleChange = (id) => {
        setCheckeds(prev => {
            const isChecked = checkeds.includes(id);//Kiểm tra nếu cái id này nếu tồn tại trong arr state thì dùng filter loại bỏ khỏi arr state, nếu không có thì ta thêm vào arr state
            if (isChecked) {
                return checkeds.filter(item => item !== id);
            }
            return [...prev, id]
        })
    }
    const handleSubmit = () => {
        let data = [];
        checkeds.map(id => {
            courses.map(course => {
                if (course.id === id) {
                    data = [...data, course]
                }
            })
        })
        console.log(data);
    }
    return (
        <div>
            {
                courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input type="checkbox" id={course.id} checked={checkeds.includes(course.id)} onChange={() => handleChange(course.id)}/>
                            <label htmlFor={course.id} >{ course.name }</label>
                        </div>
                    )
                })
                
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
const ExersiesComponent = () => {
  return (
      <div>
          {/* <RadioComponent /> */}
          <CheckboxComponent/>
    </div>
  )
}

export default ExersiesComponent