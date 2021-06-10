import './App.css';
import NavBar from './components/navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateSubject from './components/createSubject/createSubject';
import CreateCourse from './components/createCourse/createCourse';
import ViewCourses from './components/Course/course';
import Subjects from './components/Course/subject';

function App() {
  return (
    <div className="App">
     
     <Router>
     <NavBar/>
     <section>
       <Switch>
         <Route path="/create-subject" component={CreateSubject}/>
         <Route path="/create-course" component={CreateCourse} />
         <Route path="/view-course" component={ViewCourses}/>
         <Route path="/:id" component={Subjects}/>
       </Switch>
     </section>
     </Router>
    </div>
  );
}

export default App;
