import React from 'react';

import {Grid2} from '@mui/material';

import {ApiProduct} from '~/api-client/types';
import {useDeleteItem} from '~/routes/products+/hooks/use-delete-item';

import {ProductCardMobile} from './product-card-mobile';
import {ProductCardSkeleton} from './product-card-skeleton';

type ProductListMobileProps = {
  data?: ApiProduct[];
  isLoading: boolean;
};

export const ProductListMobile: React.FC<ProductListMobileProps> = ({data, isLoading}) => {
  const {doDeleteItem} = useDeleteItem();

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <Grid2 container spacing={2}>
      {(data ?? [])?.map(product => (
        <ProductCardMobile key={product.productId} product={product} doDeleteItem={doDeleteItem} />
      ))}
    </Grid2>
  );
};
