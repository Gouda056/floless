import React from 'react';
import { Box } from '@mui/material';

import CustomSwitch from '../../theme-elements/customSwitch';


const CustomExSwitch = () => (
    <Box textAlign="center">
        <CustomSwitch checked />
        <CustomSwitch />
        <CustomSwitch disabled defaultChecked />
        <CustomSwitch disabled />
    </Box>
);
export default CustomExSwitch;
