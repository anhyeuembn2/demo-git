import React, { useState } from "react";

const TodoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const [edit, setEdit] = useState(0);

  const handleChange = () => {
    if (edit) {
      const idEdit = jobs.find((item) => item.id === edit);
      console.log(idEdit)
      const updateItem = jobs.map((t) =>
        t.id === idEdit.id ? (t = { id: t.id, job }) : { id: t.id, job: t.job }
      );
      setJobs(updateItem);
      setEdit(0);
      setJob("");
      return ;
    }
    
    setJobs([...jobs, { id: Math.floor(Math.random() * 10), job }]);

    setJob("");
  };
  const handleRemove = (id) => {
    const newArr = [...jobs].filter((item) => item.id !== id);
    setJobs(newArr);
  };
  const handleEdit = (id) => {
    const itemEdit = jobs.find((item) => item.id === id);
    setJob(itemEdit.job);
    setEdit(id);
  };
  console.log(jobs);

  return (
    <div style={{ padding: "20px" }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <ul>
        {jobs.length > 0 &&
          jobs.map((item) => (
            <li key={item.id}>
              {item.job}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </li>
          ))}
      </ul>
      <button onClick={handleChange}>{edit ? "Edit" : "Go"}</button>
    </div>
  );
};

export default TodoList;
