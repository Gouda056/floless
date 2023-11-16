import { List } from "@mui/material";
import EmailListItem from "./EmailListItem";
import Scrollbar from "../../custom-scroll/scrollbar";

interface Props {
  emails: any;
  selecetdMessageId: number;
  onSelectedEmail: (email: number) => void;
}

const EmailList = ({ emails, selecetdMessageId, onSelectedEmail }: Props) => {
  return (
    <List>
      <Scrollbar
        sx={{
          height: { lg: "calc(100vh - 100px)", md: "100vh" },
          maxHeight: "800px",
        }}
      >
        {/* ------------------------------------------- */}
        {/* Email page */}
        {/* ------------------------------------------- */}
        {emails?.map((email: any, i: number) => (
          <EmailListItem
            key={i}
            email={email}
            onClick={() => {
              onSelectedEmail(email.id);
            }}
            isSelected={email?.id === selecetdMessageId}
          />
        ))}
      </Scrollbar>
    </List>
  );
};

export default EmailList;
