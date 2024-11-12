import React from 'react';

import {Grid2, Skeleton, Card, CardContent, Stack, Box} from '@mui/material';

const ProductCardSkeleton: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
      <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', mb: 2}}>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
            <Skeleton variant="text" width="60%" height={32} />
            <Skeleton variant="text" width="20%" height={32} />
          </Box>
          <Stack spacing={2} width="100%">
            <Stack spacing={1}>
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="30%" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" width="35%" />
              <Skeleton variant="text" width="45%" />
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="text" width="40%" />
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={80} height={40} />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default ProductCardSkeleton;
