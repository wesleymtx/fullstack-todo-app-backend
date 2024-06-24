const { Router } = require("express");
const { getToDo, saveTodo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.post('/save', saveTodo);

router.get('/', getToDo);

router.post('/update', updateToDo);

router.post('/delete', deleteToDo);


module.exports = router;
