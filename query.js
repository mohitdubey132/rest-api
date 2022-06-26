const getStudents= "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1 ";
 const checkEmailExists ="SELECT s from students s  WHERE s.email = $1";
 const addStudent= "INSERT INTO students (name,email,age,dob)VALUES ( $1 , $2, $3, $4)";
const removeStudent="DELETE  FROM students WHERE id = $1";
const checkidExist ="SELECT s from students s  WHERE s.id = $1";


module.exports ={
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    checkidExist,
    removeStudent,

};