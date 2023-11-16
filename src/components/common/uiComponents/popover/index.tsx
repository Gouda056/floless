import { Grid } from '@mui/material';
import PageContainer from '../../container/PageContainer';
import Breadcrumb from '../../../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../../shared/ParentCard';
import ChildCard from '../../../shared/ChildCard';
import ClickPopover from '../../../ui-components/popover/ClickPopover';
import HoverPopover from '../../../ui-components/popover/HoverPopover';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Popover',
  },
];

export default function MuiPopover() {

  return (
    <PageContainer>
      {/* breadcrumb */}
      <Breadcrumb title="Popover" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Popover">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Click">
              <ClickPopover />
            </ChildCard>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Hover">
              <HoverPopover />
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
}
