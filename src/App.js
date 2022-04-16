// import logo from './logo.svg';
import React,{ useState ,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Course from './component/Course/Course';
import Cart from './component/Cart/Cart';

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(()=>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  const handleAddCourse = (course) =>{
    
    const newCourse = [...cart, course];
    setCart(newCourse)
  } 
  return (
  
    <div className="App">
      <div>
          <Header></Header>
     </div>
      <h2>All amazing Courses</h2>
      <div className='courseWrapper'>
        <div className='courseContent'>
          {
            courses.map(course => <Course
               handleAddCourse={handleAddCourse}
               course={course}>
              </Course> )
          }
        </div>
        <div className='cart'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
