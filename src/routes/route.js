const express = require('express');
const router = express.Router();


router.get("/persons-query" , function(req, res) {
    let voteAge=req.query.votingAge
    let newArr=[]
    
for(let i=0;i<persons.length;i++)
{
    if(persons[i].age>voteAge)
    {
        persons[i].votingStatus=true
         newArr.push(persons[i])      
    }
     
}
res.send(newArr) 
})
    

module.exports = router;