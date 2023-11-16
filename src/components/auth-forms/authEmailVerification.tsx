import { Box, Button, Card, Typography } from "@mui/material";
import CustomTextField from "../forms/theme-elements/customTextField";
import Image from "next/image";
import { FormikValues, useFormik } from "formik";
interface props {
    onDataSubmitted: (data: FormikValues) => void;
    loading: boolean;
}

export default function AuthEmailVerification({onDataSubmitted, loading}: props) {
    const formik = useFormik({
        initialValues: {
            field1: "",
            field2: "",
            field3: "",
            field4: "",
            field5: "",
            field6: "",
        },
        onSubmit: (values) => {
            onDataSubmitted(values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "44rem",
              }}
            >
              <Card
                elevation={9}
                sx={{
                    padding: 0,
                    paddingX: 1,
                    paddingBottom: 2,
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "450px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image
                    alt={"floless-logo"}
                    src={"/images/logo.png"}
                    height={170}
                    width={200}
                  />
                </Box>
                <Typography variant="h5">
                  Enter 6 digits OTP sent to mail
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginTop: 2,
                  }}
                >
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field1"
                      name="field1"
                      value={formik.values.field1}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field2"
                      name="field2"
                      value={formik.values.field2}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field3"
                      name="field3"
                      value={formik.values.field3}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field4"
                      name="field4"
                      value={formik.values.field4}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field5"
                      name="field5"
                      value={formik.values.field5}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      customWidth="3.5rem"
                      type="number"
                      id ="field6"
                      name="field6"
                      value={formik.values.field6}
                      onChange={formik.handleChange}
                      textAlign="center"
                      onInput = {(e: any) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,1)
                    }}
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ marginTop: 2 }}
                  type="submit"
                  disabled={
                    !(
                      formik.values.field1 &&
                      formik.values.field2 &&
                      formik.values.field3 &&
                      formik.values.field4 &&
                      formik.values.field5 &&
                      formik.values.field6
                    ) && loading
                  }
                >
                  Verify email
                </Button>
              </Card>
            </Box>
        </form>
    )
    
};
