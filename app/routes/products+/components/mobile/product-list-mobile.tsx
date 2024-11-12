import React from 'react';

import {Grid2} from '@mui/material';

import {ApiProduct} from '~/api-client/types';
import {useDeleteItem} from '~/routes/products+/hooks/use-delete-item';

import {ProductCardMobile} from './product-card-mobile';

type ProductListMobileProps = {
  data?: ApiProduct[];
  isLoading: boolean;
};

const ProductListMobile: React.FC<ProductListMobileProps> = ({data}) => {
  const {doDeleteItem} = useDeleteItem();

  return (
    <Grid2 container spacing={2}>
      {(data ?? [])?.map(product => (
        <ProductCardMobile key={product.productId} product={product} doDeleteItem={doDeleteItem} />
      ))}
    </Grid2>
  );
};

export default ProductListMobile;
