const  pool = require('../../db');
const querys = require('./query');
const getstudents = (req ,res)=>{
pool.query(querys.getStudents, (error, results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
});

};

//------------------------ get student by id-------------
const getstudentById = (req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(querys.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
//-----add students methos---------------------------------
const addStudent= (req,res)=>{
    const {name, email,age,dob}= req.body;
    // check if email already exists ;
    pool.query(querys.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length ){    /**   if(results.rows.length) is true if ______ inresults.rows.length >0 _____________ */
           var ch= res.send("Email is already exist");
        }
        else pool.query(querys.addStudent,[name, email,age,dob],(error,results)=>{
            if (error) throw error;
            res.status(201).send(`Students Created successfuly ${ch} `);
        });

    });
    // add students to db   
};
//=========================================================
//----------removing students------------------------------
const removeStudents=(req,res)=>{
    //check id exists or not
    const id= parseInt(req.params.id);
    pool.query(querys.checkidExist,[id],(error,results)=>{
        const noStudents= ! results.rows.length;
        if(noStudents)
        res,send("this id doesn't exist ");
        else pool.query(querys.removeStudent,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("successfuly removed ");
        });
    });

};


//------------------------------------------------------------
 module.exports ={
     getstudents,
     getstudentById,
     addStudent, 
     removeStudents,
    };