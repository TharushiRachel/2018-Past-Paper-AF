const Subject = require('../models/subject.model');

const createSubject = async(req,res)=>{
    if(req.body){
        const subject = new Subject(req.body);
        subject.save()
        .then(data=>{
            res.status(200).send({data:data});
        })
        .catch(error=>{
            res.status(500).send({error: error.message});
        });
    }
}

const getSubject = async (req, res) => {
    await Subject.find({}).populate('subjects','name description amount')
    .then(data => {
      res.status(200).send({ data: data });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
  }
// const updateSubject = async(req,res)=>{
//     let userId= req.params.id;
//     const {name, description, amount }= req.body;

//     const updateSub={
//        name,
//        description,
//        amount
//     }
//     const updateSubject = await Subject.findByIdAndUpdate(userId, this.updateSub)
//     .then(data =>{
//         res.status(200).send({data:data});
//     })
//     .catch(error=>{
//         res.status(500).send({error: error.message});
//     })
// }

const updateSubject = async(req,res)=>{
    let userId= req.params.id;
    const {name, description, amount }= req.body;

    const updateSub={
               name,
               description,
               amount
            }
    await Subject.findByIdAndUpdate(userId, this.updateSub)
    .then(data=>{
        res.status(200).send({ subjects: data.subjects });
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

module.exports={
    createSubject,
    updateSubject,
    getSubject
};