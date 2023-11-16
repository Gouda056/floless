import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  TableHead,
  Chip,
  Box,
  AvatarGroup,
  Pagination,
  Divider,
} from '@mui/material';
import { tableData, TableType } from './data';
import { Stack } from '@mui/system';
import BlankCard from '../../shared/BlankCard';


const GuestContactList = () => {
  return (
    <BlankCard>
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Guest name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email address</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Phone number</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Box>
                      <Typography variant="h6" fontWeight="400">
                        {basic.name}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6" fontWeight={400}>
                    {basic.date?.toDateString()}
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                    {basic.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {basic.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider></Divider>
      <Box my={2} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
    </BlankCard>
  );
};

export default GuestContactList;
