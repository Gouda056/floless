import { Avatar, Button, Chip, Divider } from "@mui/material";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { IconCurrencyRupee } from "@tabler/icons-react";

export default function PlanUpgrade() {
  return (
    <div className="shadow-md plan-upgrade-card">
      <div className="flex-container">
          <div>
            <Chip label="My plan name" color="primary" />
            <p className="plan-upgrade-title ">Startup</p>
          </div>
          <div className="flex-container">
            <IconCurrencyRupee height={26} color="rgb(67 56 202)" />
            <p className="plan-upgrade-space "> <span className="plan-upgrade-price">599</span> / 1MB</p>
          </div>
      </div>
      <Divider></Divider>
      <ul style={{padding: "10px"}}>
        <li className="plan-upgrade-points">
            <IconCircleCheckFilled height={16} color="rgb(67 56 202)" />
            Lorem ipsum dolor sit amet.
        </li>
        <li className="plan-upgrade-points">
            <IconCircleCheckFilled height={16} color="rgb(67 56 202)" />
            Lorem ipsum dolor sit amet.
        </li>
        <li className="plan-upgrade-points">
            <IconCircleCheckFilled height={16} color="rgb(67 56 202)" />
            Lorem ipsum dolor sit amet.
        </li>
        <li className="plan-upgrade-points">
            <IconCircleCheckFilled height={16} color="rgb(67 56 202)" />
            Lorem ipsum dolor sit amet.
        </li>
      </ul>
      <Button>Upgrade</Button>
    </div>
  );
}
