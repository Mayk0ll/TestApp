import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ITask from "../interfaces/Task.interface";
import { faCheckCircle, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

interface TaskProps extends ITask {
    edit: (task: ITask) => void;
    eliminate: (id: string) => void;
    completed: (id: string) => void;
}

const CartTasks = ({ id = '', title, description, status, user_id, edit, eliminate, completed }: TaskProps) => {

    const editTask = () => {
        edit({ title, description, status, user_id, id });
    };

    const eliminateTask = () => {
        eliminate(id);
    };

    const completeTask = () => {
        completed(id);
    };

    return (
        <div className="d-flex flex-column justify-content-between border rounded p-2 task">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{status}</p>
            <div className="d-flex justify-content-around">
                <button type="button" onClick={editTask} className="btn btn-warning">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button type="button" onClick={completeTask} className="btn btn-success">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </button>
                <button type="button" onClick={eliminateTask} className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default CartTasks;
