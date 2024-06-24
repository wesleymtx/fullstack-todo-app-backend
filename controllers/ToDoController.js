const ToDoModel = require('../model/TodoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong' });
    }
};

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    try {
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error:", error);
        res.status(500).send({ error: 'Something went wrong' });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, {text})
        .then(()=>res.send("Updated SuccessFull.... "))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    ToDoModel
        .deleteOne({_id: _id})
        .then(()=>res.send("Deleted Succefull...."))
        .catch((e)=>console.log(e))
}

// module.exports.deleteToDo = async (req, res) => {
//     try {
//         const result = await ToDoModel.deleteMany({});
//         console.log(`${result.deletedCount} documents were deleted.`);
//         res.send("Deleted Successfully...");
//     } catch (error) {
//         console.log("error:", error);
//         res.status(500).send({ error: 'Something went wrong' });
//     }
// };
