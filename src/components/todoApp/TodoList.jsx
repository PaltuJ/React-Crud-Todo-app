import React, { useEffect, useState } from "react";
import TodoModal from "./TodoModal";
import Card from "./Card";

const TodoList = () => {
  //usestate for popup modal
  const [modal, setModal] = useState(false);
  // usestate for add task
  const [taskList, setTaskList] = useState([]);

  //using useffect to fetch local storage data we saved
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    // console.log(arr);
    if (arr) {
      let eleObj = JSON.parse(arr);
      console.log(arr);
      setTaskList(eleObj);
    }
  }, []);

  // show modal on click
  const toggle = () => setModal(!modal);

  //add task on click
  const handleTaskOnAdd = (taskObj) => {
    let tempList = [...taskList];
    tempList.push(taskObj);
    console.log(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    // console.log(taskObj);
    setTaskList(tempList);
    setModal(false);
  };

  //delectite task on click
  const deleteTaskInCard = (index) => {
    // console.log(index);
    let tempList = [...taskList];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify([...tempList]));
    setTaskList([...tempList]);
  };
  // console.log(taskList);

  const updateListArray = (obj, ind) => {
    let tempList = [...taskList];
    tempList[ind] = obj;
    localStorage.setItem("taskList", JSON.stringify([...tempList]));
    setTaskList([...tempList]);
  };

  return (
    <>
      <div className="header text-center">
        <h1 className="pt-5">Todo App</h1>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setModal(!false)}
        >
          Add Task
        </button>
      </div>
      <div className="todoTask">
        <div className="task-container">
          {taskList.map((eleObj, ind) => (
            <Card
              eleObj={eleObj}
              ind={ind}
              key={ind}
              deleteTaskInCard={deleteTaskInCard}
              updateListArray={updateListArray}
            />
          ))}
        </div>
      </div>
      <TodoModal modal={modal} toggle={toggle} save={handleTaskOnAdd} />
    </>
  );
};

export default TodoList;
