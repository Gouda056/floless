import {
  Avatar,
  Box,
  CardContent,
  Grid,
  Typography,
  Tooltip,
  Button,
  Divider,
  LinearProgress,
} from "@mui/material";
import { useState, useEffect } from "react";

// components

import { Stack } from "@mui/system";
import {
  IconDatabase,
  IconDatabaseImport,
  IconPackage,
} from "@tabler/icons-react";
import BlankCard from "../shared/BlankCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router, useRouter } from "next/router";
import GlobalLoader from "../common/globalLoader";
import ConfirmDeleteModal from "../common/confirmDeleteModal";
import { IconCalendarDue } from "@tabler/icons-react";

const BillsTab = () => {
  const [billingDetails, setBillingDetails] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [spaceUsed, setSpaceUsed] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isActivePlan, setIsActivePlan] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const router = useRouter();

  function calculatePercentageUsed(inputKB: any, totalGB: any) {
    const totalKB = totalGB * 1073741824; // 1 GB = 1073741824 KB
    const usedKB = inputKB;
    const percentageUsed = (usedKB / totalKB) * 100;
    return percentageUsed.toFixed(4); // Rounds to 2 decimal places
  }

  const handleBillingDetails = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/stripe-billing`)
      .then((response) => {
        setBillingDetails(response?.data?.data);
        setIsActivePlan(response?.data?.data?.active === true ? false : true);
        if (response?.data?.data?.allocated_size) {
          let space_used: any = calculatePercentageUsed(
            response?.data?.data?.used_storage,
            response?.data?.data?.allocated_size
          );
          setSpaceUsed(space_used * 1000);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleBillingDetails();
  }, []);

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setConfirmDelete(false);
  };

  // On confirm delete
  const onConfirmDelete = (value: boolean) => {
    if (value) {
      handleDeleteSubscription();
    }
  };

  const handleDeleteSubscription = () => {
    setLoading(true);
    axios
      .delete(`${BASEURL}/stripe-subscription-cancel`)
      .then((response) => {
        if (response.status === 200) {
          handleBillingDetails();
          toast.success(response?.data?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading && <GlobalLoader />}
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={9}>
          <BlankCard>
            <CardContent>
              <Typography variant="h4" mb={1}>
                Billing Information
              </Typography>
              <Divider></Divider>
              <Typography variant="h5" display="flex" mb={2} mt={2}>
                Current Plan :
                <Typography
                  variant="h5"
                  component="div"
                  ml="2px"
                  color="success.main"
                >
                  {billingDetails?.plan_name}
                </Typography>
              </Typography>
              <Typography color="textSecondary">
                Thanks for being a premium member and supporting our
                development.
              </Typography>

              {/* list 1 */}
              <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                  <Stack direction="row" spacing={2} mt={4} mb={2}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "grey.100",
                        color: "grey.500",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <IconPackage size="22" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" color="textSecondary">
                        Price
                      </Typography>
                      <Typography variant="h6" mb={1}>
                        {!loading
                          ? `${billingDetails.price}.00 /${billingDetails.interval}`
                          : "Loading..."}
                      </Typography>
                    </Box>
                    {/* <Box sx={{ ml: "auto !important" }}>
                      <Tooltip title="Add">
                        <IconButton>
                          <IconCirclePlus size="22" />
                        </IconButton>
                      </Tooltip>
                    </Box> */}
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack direction="row" spacing={2} mt={4} mb={2}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "grey.100",
                        color: "grey.500",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <IconDatabase size="22" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" color="textSecondary">
                        Space Provided
                      </Typography>
                      <Typography variant="h6" mb={1}>
                        {billingDetails?.allocated_storage
                          ? billingDetails?.allocated_storage
                          : "Loading..."}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack direction="row" spacing={2} mt={4} mb={2}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "grey.100",
                        color: "grey.500",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <IconDatabaseImport size="22" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" color="textSecondary">
                        Space Consumed
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box width="100%">
                          <LinearProgress
                            variant="determinate"
                            value={spaceUsed}
                            color="primary"
                          />
                        </Box>
                        <Typography variant="subtitle2" color="textSecondary">
                          {spaceUsed}%
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <Stack direction="row" spacing={2} mt={4} mb={2}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "grey.100",
                        color: "grey.500",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <IconCalendarDue size="22" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" color="textSecondary">
                        Due date
                      </Typography>
                      <Typography variant="h6" mb={1}>
                        {billingDetails?.due_date
                          ? billingDetails?.due_date
                          : "Loading..."}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction="row" spacing={2} mt={3}>
                <Button
                  onClick={() => router.push("/plans")}
                  variant="contained"
                  color="primary"
                >
                  Upgrade Plan
                </Button>
                <Button
                  disabled={isActivePlan}
                  onClick={() => setConfirmDelete(true)}
                  variant="outlined"
                  color="error"
                >
                  Cancel Plan
                </Button>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
        <ToastContainer />
        <ConfirmDeleteModal
          open={confirmDelete}
          handleClose={handleCloseDeleteModal}
          onConfirmDelete={onConfirmDelete}
          title={"Cancel your plan subscription?"}
          description="On canceling plan all your data will be lost"
          cancel={"Cancel"}
          close={"Close"}
        />
      </Grid>
    </>
  );
};

export default BillsTab;
