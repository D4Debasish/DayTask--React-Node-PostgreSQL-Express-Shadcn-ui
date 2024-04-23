const pool = require('../db')


const createuser = async (req, res) => {
    try {
        
        const {description} = req.body;
        const createtask = await pool.query("INSERT INTO tasks (description) VALUES ($1)",[description])
        res.json(createtask.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

const getallTasks = async (req,res)=>{
    try {
       const allTasks = await pool.query("SELECT * FROM tasks");
       res.json(allTasks.rows) 
    } catch (error) {
        console.error("error:",error)
    }
}

const getaTasks = async(req,res)=>{
   try {
    const {id} = req.params;
    const getaTasks = await pool.query("SELECT * FROM tasks WHERE task_id = $1",[id]) 
    res.json(getaTasks);  
    console.log(getaTasks.rows[0])
    } catch (error) {
        console.error("error:",error)
    }
}

const updateTasks = async(req,res)=>{
    try {
        
        const {id} = req.params;
        const {description} = req.body;

        const updatetheTask = await pool.query("UPDATE tasks SET description = $1 WHERE task_id = $2",[description,id])
        res.status(200).json(updatetheTask.rows[0])
        console.log(updatetheTask.rows[0]);
        console.log("update complete")
        
    } catch (error) {
        console.error("update error:",error) 
    }
}

const delTasks = async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteTask = await pool.query("DELETE FROM tasks WHERE task_id = $1",[id]);
        res.status(200).json(deleteTask)
        
    } catch (error) {
        console.error("error:",error)
    }
}

module.exports = { createuser, getallTasks , getaTasks, updateTasks,delTasks};
