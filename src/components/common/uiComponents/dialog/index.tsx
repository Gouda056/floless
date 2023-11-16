import { Grid } from "@mui/material";
import PageContainer from "../../container/PageContainer";
import Breadcrumb from "../../../../layouts/full/shared/breadcrumb/Breadcrumb";
import ParentCard from "../../../shared/ParentCard";
import ChildCard from "../../../shared/ChildCard";
import SimpleDialog from "../../../ui-components/dialog/SimpleDialog";
import AlertDialog from "../../../ui-components/dialog/AlertDialog";
import TransitionDialog from "../../../ui-components/dialog/TransitionDialog";
import FormDialog from "../../../ui-components/dialog/FormDialog";
import FullscreenDialog from "../../../ui-components/dialog/FullscreenDialog";
import MaxWidthDialog from "../../../ui-components/dialog/MaxWidthDialog";
import ScrollContentDialog from "../../../ui-components/dialog/ScrollContentDialog";
import ResponsiveDialog from "../../../ui-components/dialog/ResponsiveDialog";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Dialog",
  },
];

export default function MuiDialog() {
  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Dialog" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Dialog">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Simple">
              <SimpleDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Alert">
              <AlertDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Transition">
              <TransitionDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Form">
              <FormDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Full screen">
              <FullscreenDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Max width">
              <MaxWidthDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Scrolling Content">
              <ScrollContentDialog />
            </ChildCard>
          </Grid>
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Responsive Fullscreen">
              <ResponsiveDialog />
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
}
