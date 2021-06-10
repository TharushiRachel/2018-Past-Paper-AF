import React from 'react';
import axios from 'axios';


class CreateSubject extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            sname:'',
            sdescription:'',
            samount:0
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let subject={
            name:this.state.sname,
            description:this.state.sdescription,
            amount:this.state.samount
        }
        console.log('data to send',subject);

        axios.post('http://localhost:8080/subject/create', subject)
    .then(response => {
      alert('Data successfully inserted')
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message)
    })
    }
    

    render(){
        return(
            <div>
                <h1>Create Subject</h1>
                <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="subjectName" class="form-label">Name</label>
    <input type="text" class="form-control" id="subjectName" name="sname" value={this.state.sname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="subjectDescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="subjectDescription"name="sdescription" value={this.state.sdescription} onChange={this.onChange}/>
  </div>

  <div class="mb-3">
    <label for="subjectAmount" class="form-label">Amount</label>
    <input type="Number" class="form-control" id="subjectAmount" name="samount" value={this.state.samount} onChange={this.onChange}/>
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

export default CreateSubject;