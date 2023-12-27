import React, { FC } from "react";
import "./QuestNum.scss"

interface QuestNumProps {
  currentQuestNum: number;
}

const QuestNum: FC<QuestNumProps> = ({ currentQuestNum }) => {
  return (
    <div className="numPage">
        <span  className="currentNum number circle">{currentQuestNum}</span>
      <span className="slash">/</span>
        <span className="number circle">10</span>
    </div>
  );
};

export default QuestNum;
