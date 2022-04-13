import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Link,BrowserRouter as Router,Routes,Route , Navigate,Outlet,useParams} from 'react-router-dom'

ReactDOM.render(
  <Router>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myapps' element={<Navigate to="/learn " />} />
         <Route path='/learn' element={<Learn />}>
            <Route path='course' element={<Courses />} >
               <Route path=':courseid' element={<CourseId />}/>
            </Route>
            <Route path='bundle' element={<Bundles />} />
          </Route>
     </Routes>
  </Router>,
  document.getElementById('root')
);

function Home(){
  return(
    <div>
      <h1>Home route</h1>
    </div>
  )
}

function Learn(){
  return (
    <div>
       <h1>course</h1>
       <h4>All course listed here</h4>
       <Link className='btn btn-success' to="/learn/course">Course</Link>
        {" "}
       <Link className='btn btn-primary' to="/learn/bundle">Bundle</Link>
    </div>
  );
}

function Courses(){
  return(
    <div>
      <h1>Courses</h1>
      <Outlet/>
    </div>
  )
}

function Bundles(){
  return(
    <div>
      <h1>Bundle</h1>
    </div>
  )
}

function CourseId(){
   const {courseid} = useParams()
  return(
    <div>
      <h1>Url  parameter id:}{courseid}</h1>
    </div>
  )
}
reportWebVitals();
