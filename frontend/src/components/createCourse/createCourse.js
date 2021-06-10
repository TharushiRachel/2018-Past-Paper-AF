import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class CreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelect=this.onSubjectSelect.bind(this);
        this.state={
            cname:'',
            cCode:'',
            cpassmark:0,
            clecturer:'',
            subjects:[],
            options:[],
            selectedSubjects:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/subject/')
        .then(response=>{
            this.setState({subjects: response.data.data},()=>{
                let data=[];
                this.state.subjects.map((item,index)=>{
                    let subject={
                        value:item._id,
                        label:item.name
                    }
                    data.push(subject)
                });
                this.setState({options:data});
            })
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubjectSelect(e){
        this.setState({selectedSubjects:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let course={
            name:this.state.cname,
            code:this.state.cCode,
            pass_mark:this.state.cpassmark,
            lecturer:this.state.lecturer,
            subjects:this.state.selectedSubjects
        }
        console.log('data to send',course);
        axios.post('http://localhost:8080/course/create',course)
        .then(response=>{
            alert('Data successfully inserted')
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div>
                <h1>Create Course</h1>
                <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="courseName" class="form-label">Name</label>
    <input type="text" class="form-control" id="courseName" name="cname" value={this.state.cname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label htmlFor="courseCode" class="form-label">Code</label>
    <input type="text" class="form-control" id="courseCode" name="cCode" value={this.state.cCode} onChange={this.onChange}/>
  </div>

  <div class="mb-3">
    <label htmlFor="coursePassmark" class="form-label">Pass Mark</label>
    <input type="Number" class="form-control" id="coursePassmark" name="cpassmark" value={this.state.cpassmark} onChange={this.onChange}/>
  </div>

  <div class="mb-3">
    <label htmlFor="courseLecturer" class="form-label">Lectuter In Charge</label>
    <input type="text" class="form-control" id="courseLecturer" name="clecturer" value={this.state.clecturer} onChange={this.onChange}/>
  </div>

<div class="mb-3">
    <label htmlFor="courseSubjects" class="form-label">Subjects</label>
    <Select
  options={this.state.options}
  onChange={this.onSubjectSelect}
  className="basic-multi-select"
  isMulti
  />
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}

export default CreateCourse;