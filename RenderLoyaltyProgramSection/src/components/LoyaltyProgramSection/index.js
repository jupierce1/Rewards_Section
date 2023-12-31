import { useCallback, useState, forwardRef } from "react";
import { Button } from "@mui/base";
import "./style.css";
import messages from "./messages.json";

function LoyaltyProgramSection() {
  return (
    <div className={`rewards-program-container1`}>
      <p className={`loyalty-heading`}>{messages["rewards_program"]}</p>
      <p className={`loyalty-heading1`}>{messages["customer_loyalty"]}</p>
      <p className={`rewards-program-description`}>{messages["rewards_program_designed_show_appreciation_loyalty"]}</p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="rewards-program-join-button">{messages["join_now"]}</Button>
    </div>
  );
}

export default LoyaltyProgramSection;
