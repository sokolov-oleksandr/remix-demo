import {FC} from 'react';

import {Typography, Box} from '@mui/material';

type CardRowDetailsProps = {
  label: string;
  value: string | number;
  color?: string;
};

export const CardRowDetails: FC<CardRowDetailsProps> = ({label, value, color}) => (
  <Box display="flex" gap={1}>
    <Typography variant="body2" fontWeight={500}>
      {label}:
    </Typography>
    <Typography variant="body2" color={color}>
      {value}
    </Typography>
  </Box>
);
