import React from 'react';
import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const CustomSelect = styled((props: any) => <Select {...props} />)(({customWidth }) => ({
    width: customWidth ? customWidth : '100%',
}));

export default CustomSelect;
