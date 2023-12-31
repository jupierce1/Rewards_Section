import { useCallback, useState, forwardRef } from "react";
import LoyaltyProgramSection from "../LoyaltyProgramSection";
import "./style.css";

function ComponentYouSelected() {
  return (
    <div className={`rewards-program-container`}>
      <LoyaltyProgramSection />
    </div>
  );
}

export default ComponentYouSelected;
