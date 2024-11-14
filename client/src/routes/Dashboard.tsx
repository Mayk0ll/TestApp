import { useEffect, useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { completedTask, createTask, deleteTask, getTasks, updateTask } from "../services/Taks.services";
import CartTasks from "../components/CartTasks";
import ITask from "../interfaces/Task.interface";
import Task from "../interfaces/Task.interface";

const Dashboard = () => {

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Nuevo");
  const [isNew, setIsNew] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async ()=>{
      const { data } = await getTasks();
      console.log(data);
      setTasks(data);
    })();
  }, []);

  const handleEditTask = (task: Task) => {
    console.log("Edit Task", task);
    setTitle(task.title);
    setDescription(task.description);
    setId(task.id || '');
    setStatus(task.status || 'Nuevo');
    setIsNew(false);
  }

  const handleDeleteTask = async (id: string) => {
    const { data } = await deleteTask(id);
    setTasks(data);
  }

  const handleComplete = async (id: string) => {
    const { data } = await completedTask(id);
    setTasks(data);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew){
      const { data } = await createTask({  title, description, status: "Nuevo" });
      setTasks(data);
    } else {
      const { data } = await updateTask(id, { title, description, status: "Nuevo" });
      setTasks(data);
      setIsNew(true);
    }
  }


  return (
    <DefaultLayout>
      <div className="row">
          <h1 className="col-12 text-center">Dashboard</h1>
          <div className="col-12 col-md-4 ">
            <form className="bg-white text-black border rounded d-flex flex-column gap-4 p-3">
              <h4 className="text-center">{isNew? 'Agregar':'Editar'} tarea</h4>
              <div>
                <label htmlFor="title" className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="description" className="form-label">Descripcion:</label>
                <input type="text" className="form-control" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div>
              <button className="btn btn-primary" onClick={handleSave}>{isNew? 'Agregar':'Editar'}</button>
            </form>
          </div>
          <div className="col-12 col-md-8 bg-white text-black border rounded">
            <h4 className="text-center">Tareas</h4>
            <div className="d-flex align-items-center flex-wrap gap-3">
              { tasks.map((task: ITask) => ( <CartTasks key={task.id} id={task.id} title={task.title} description={task.description} status={task.status} user_id={task.user_id} edit={handleEditTask} eliminate={handleDeleteTask} completed={handleComplete} ></CartTasks> ))}
            </div>
          </div>
      </div>
    </DefaultLayout>
      
  )
}

export default Dashboard