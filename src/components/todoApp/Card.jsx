import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";

const Card = ({ eleObj, ind, deleteTaskInCard, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
      deleteColor: "#fc7777",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
      deleteColor: "#fc7777",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
      deleteColor: "#fc7777",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
      deleteColor: "#fc7777",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
      deleteColor: "#fc7777",
    },
  ];

  const handleDeleteTask = () => {
    deleteTaskInCard(ind);
  };

  const toggle = () => {
    setModal(!modal);
  };
  const updateTask = (eleObj) => {
    updateListArray(eleObj, ind);
    setModal(false);
  };
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[ind % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[ind % 5].secondaryColor,
            borderradius: "10px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {eleObj.taskName}
        </span>
        <p className="mt-2 description">{eleObj.description}</p>

        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "10px",
            display: "flex",
            gap: "15px",
          }}
        >
          <i style={{}}>
            <FaEdit
              style={{ color: colors[ind % 5].primaryColor, cursor: "pointer" }}
              onClick={() => setModal(true)}
            />
          </i>
          <i style={{}}>
            <RiDeleteBin6Fill
              style={{ color: colors[ind % 5].deleteColor, cursor: "pointer" }}
              onClick={handleDeleteTask}
            />
          </i>
        </div>
      </div>
      <EditModal
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        eleObj={eleObj}
      />
    </div>
  );
};

export default Card;
