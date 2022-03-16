import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const onDelete = (goalId) => {
    dispatch(deleteGoal(goalId));
  };
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => onDelete(goal._id)}>
        X
      </button>
    </div>
  );
};

export default GoalItem;
