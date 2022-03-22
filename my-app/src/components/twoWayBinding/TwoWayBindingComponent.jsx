import React, { useState } from 'react';

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

//RadioComponent

const RadioComponent = () => {
    const [checked, setChecked] = useState();
    const handleSubmit = () => {
       console.log(checked);
    }
    return (
        <div>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <input type='radio' id={course.id} checked={checked === course.id} onChange={() => setChecked(course.id)}/>
                        <label htmlFor={course.id}>{course.name}</label>
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

//CheckboxComponent
const CheckboxComponent = () => {
    const [checked, setChecked] = useState([]);
    
    const handleChecked = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id);
            }
            else {
                return [...checked, id];
            }
        })
        
    }
    const handleSubmit = () => {
        checked.forEach(id => {
            courses.map(course => {
                if (course.id === id) {
                    console.log(course);
                }
            })
        });
    }
    // console.log(checked);
    return (
        <div>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <input type='checkbox' id={course.id} checked={checked.includes(course.id)} onChange={() => handleChecked(course.id)}/>
                        <label htmlFor={course.id}>{course.name}</label>
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const TwoWayBindingComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log(name, email)
    }

    const [address, setAddress] = useState('');
    const changeAddress = () => {
        setAddress('Ha Noi');
       
    }

  return (
      <div>
          {/* Two way binding */}
          <div>
              <label htmlFor="name">Name: </label>
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
              <label htmlFor="email">Email: </label>
              <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
              <button type="submit" onClick={handleSubmit}>Register</button>
          </div>


          {/* One way binding */}
          <div>
              <label htmlFor="address">Address: </label>
              <input type="text" name="address" onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <div>
              <button onClick={changeAddress}>Change address</button>
          </div>

          <RadioComponent />
          <CheckboxComponent/>

    </div>
  )
}

export default TwoWayBindingComponent