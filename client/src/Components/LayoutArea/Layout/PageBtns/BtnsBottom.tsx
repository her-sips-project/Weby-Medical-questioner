import React, { FC, useEffect } from "react";
import {
  SlQuestion,
  SlArrowRightCircle,
  SlArrowLeftCircle,
  SlArrowRight,
  SlArrowLeft,
} from "react-icons/sl";
import { BsQuestionLg } from "react-icons/bs";
import "bootstrap";
import "./BtnsBottom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface BtnsBottomProps {
  nextBtn?: boolean;
  clickNext?: ()=> void
  backBtn?: boolean;
  clickBack?: ()=> void
  descriptions?: string;
}

const BtnsBottom: FC<BtnsBottomProps> = ({
  nextBtn = true,
  clickNext,
  backBtn =true,
  clickBack,
  descriptions,
}) => {
  return (
    <div className="btns">
      {backBtn ? <SlArrowLeft className="icon"  onClick={clickBack}/> : <div></div>}
      <div className="div tooltip1">
        <BsQuestionLg className="icon" />
        <span className="tooltipText1">{descriptions}</span>
      </div>
      {nextBtn ? <SlArrowRight className="icon" onClick={clickNext}/> : <div></div>}
    </div>
  );
};

export default BtnsBottom;
