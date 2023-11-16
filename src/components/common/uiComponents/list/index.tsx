import { Grid } from "@mui/material";
import PageContainer from "../../container/PageContainer";
import Breadcrumb from "../../../../layouts/full/shared/breadcrumb/Breadcrumb";
import ParentCard from "../../../shared/ParentCard";
import ChildCard from "../../../shared/ChildCard";
import SimpleList from "../../../ui-components/lists/SimpleList";
import NestedList from "../../../ui-components/lists/NestedList";
import FolderList from "../../../ui-components/lists/FolderList";
import SelectedList from "../../../ui-components/lists/SelectedList";
import ControlsList from "../../../ui-components/lists/ControlsList";
import SwitchList from "../../../ui-components/lists/SwitchList";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "List",
  },
];

export default function MuiList() {
  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="List" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="List">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Simple">
              <SimpleList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Nested">
              <NestedList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Folder">
              <FolderList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Selected">
              <SelectedList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Controls">
              <ControlsList />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Switch">
              <SwitchList />
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
}
