import React from "react";
const courses = [
    {
        id: 1,
        name: "HTML/CSS"
    },
    {
        id: 2,
        name: "JavaScript"
    },
    {
        id: 3,
        name: "ReactJS"
    },
]
const Main = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [checked, setChecked] = React.useState();
    const [checkedArr, setCheckedArr] = React.useState([]);
    const handleSubmit = () => {
        console.log({name, email});
        const course = courses.find(course => course.id === checked)
        const listCourse = courses.map(course => {
            checkedArr.map(checked => checked === course.id)
            return course;
        }) 
        console.log(course);
        console.log(listCourse);

        setName("");
        setEmail("");
        setChecked();
        setCheckedArr([]);
    };
    const handleChecked = (id) => {
        setCheckedArr(prevState => {
            const isChecked = checkedArr.includes(id);
            if (isChecked) {
                const checkedArrNew = checkedArr.filter(item => item !== id);
                setCheckedArr(checkedArrNew);
            }
            return [...prevState, id]
        });
    }
    return (
        <div>
            <br></br>
            <div>
                <label htmlFor="name">Name : </label>
                <input
                    id="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <br></br>
            <div>
                <label htmlFor="email">Email : </label>
                <input
                    id="email"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div style={{ textAlign: 'left', padding: '0px 90px' }}>
                <h5>Course radio:</h5>
                {courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input type="radio" id={course.id} checked={course.id === checked} onChange={(e) => setChecked(course.id)} />
                            <label htmlFor={course.id}>{ course.name}</label>
                        </div>
                    )
                })}
            </div>
            <div style={{ textAlign: 'left', padding: '0px 90px' }}>
                <h5>Course checkbox:</h5>
                {courses.map(course => {
                    return (
                        <div key={course.id}>
                            <input type="checkbox" checked={checkedArr.includes(course.id)} id={course.name} onChange={() => handleChecked(course.id)} />
                            <label htmlFor={course.name}>{ course.name}</label>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Main;
