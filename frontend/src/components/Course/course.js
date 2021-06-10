import React from 'react';
import axios from 'axios';

class ViewCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courses:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/course/')
        .then(responce=>{
          // console.log('Cou', responce.data);
            this.setState({courses: responce.data.data})
        })
    }

    navigateSubjectPage(e, courseId){
        window.location=`/${courseId}`
    }

    render(){
        return(
            <div>
                <h1>View Courses</h1>
                {this.state.courses.length>0 && this.state.courses.map((item,index)=>(
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e=>this.navigateSubjectPage(e, item._id)}>
                        <h5>Course Name : {item.name}</h5>
                        <h5>Course Code : {item.code}</h5>
                        <h5>Course Pass Mark : {item.pass_mark}</h5>
                        <h5>Lecturer In Charge : {item.lecturer}</h5>
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ViewCourses;