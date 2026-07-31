import { useState } from "react";
import { createTask } from "../../services/taskService";
function Form() {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    await createTask(title, deadline, isUrgent);
    alert("form submitted successfully");
    console.log({
      title,
      deadline,
      isUrgent,
    });
    setTitle("");
    setDeadline("");
    setIsUrgent(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Deadline</label>
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <label>Is the task Urgent?</label>
        <input
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => setIsUrgent(e.target.checked)}
        />
        <button>submit</button>
      </form>
    </>
  );
}
export default Form;