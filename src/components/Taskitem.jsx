


export default function Taskitem({index, task, deleteTask}) {
    return (
        <li
            key={index}
            className="flex justify-between items-center bg-gray-200 p-2 rounded"
        >
            <span>{task}</span>
            <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
        </li>
    )
}

