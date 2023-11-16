import { Grid } from "@mui/material";
import PageContainer from "../../container/PageContainer";
import Breadcrumb from "../../../../layouts/full/shared/breadcrumb/Breadcrumb";
import ParentCard from "../../../shared/ParentCard";
import ChildCard from "../../../shared/ChildCard";
import BasicTransferList from "../../../ui-components/transfer-list/BasicTransferList";
import EnhancedTransferList from "../../../ui-components/transfer-list/EnhancedTransferList";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Transfer List",
  },
];

export default function MuiTransferList() {
  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Transfer List" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Transfer List">
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" alignItems="stretch">
            <ChildCard title="Basic">
              <BasicTransferList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} display="flex" alignItems="stretch">
            <ChildCard title="Enhanced">
              <EnhancedTransferList />
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
}
