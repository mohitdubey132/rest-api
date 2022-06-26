const { Router } =require ('express');
const controller = require('./controller');
const router = Router();
//-------------get student ---------------------
router.get('/',controller.getstudents);
//------------insert into----add students--------
router.post('/',controller.addStudent);
// here we use same points to add and show data 

//-------------remove students------------------
router.delete("/:id",controller.removeStudents);
/*=========================================== */
router.get("/:id",controller.getstudentById);
//---------------------------------------------


module.exports = router;