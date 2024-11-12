import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {formatRelative} from 'date-fns';

import {Card, CardContent, CardMedia, Typography, Box, Stack, Button} from '@mui/material';
import {DeleteOutline} from '@mui/icons-material';

import {AppButton} from '~/global/components/app-button';

import {ApiProduct} from '~/api-client/types';

import {CardRowDetails} from './card-row-details';

const IMAGE_HEIGHT = 200;
const DEFAULT_IMAGE = 'https://prd.place/400';
const SPACING_UNIT = 1;
const SPACING_LARGE = 2;
const SPACING_XLARGE = 4;
const NA_VALUE = '---';

type ProductCardMobileProps = {
  product: ApiProduct;
  doDeleteItem: (item: ApiProduct) => void;
};

export const ProductCardMobile: FC<ProductCardMobileProps> = ({product, doDeleteItem}) => {
  const {t} = useTranslation(['products', 'common']);

  const title = product.title.en || product.title.ar || t('common:noTitle');
  const formattedPrice = product.price ? `$${Number(product.price).toLocaleString()}` : NA_VALUE;
  const formattedSalePrice = product.priceSale
    ? `$${Number(product.priceSale).toLocaleString()}`
    : NA_VALUE;
  const formattedCreatedDate = formatRelative(new Date(product.createdAt), new Date());
  const formattedUpdatedDate =
    product.updatedAt && product.updatedAt !== product.createdAt
      ? formatRelative(new Date(product.updatedAt), new Date())
      : NA_VALUE;

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', mb: SPACING_LARGE}}>
      <CardMedia
        component="img"
        height={IMAGE_HEIGHT}
        image={product.image || DEFAULT_IMAGE}
        alt={title}
        sx={{
          width: '100%',
          objectFit: 'cover',
          padding: 1,
        }}
      />
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
          mb={SPACING_LARGE}
        >
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          {product.isActive && (
            <Typography variant="h6" gutterBottom color="success.main">
              {t('common:active')}
            </Typography>
          )}
        </Box>

        <Stack spacing={SPACING_LARGE} width="100%">
          <Stack spacing={SPACING_UNIT}>
            <CardRowDetails label={t('products:sku')} value={product.sku || NA_VALUE} />
            <CardRowDetails label={t('products:quantity')} value={product.quantity || NA_VALUE} />
          </Stack>

          <Stack spacing={SPACING_UNIT}>
            <CardRowDetails label={t('products:price')} value={formattedPrice} color="success" />

            <CardRowDetails
              label={t('products:priceSale')}
              value={formattedSalePrice}
              color="error"
            />
          </Stack>

          <Stack spacing={SPACING_UNIT}>
            <CardRowDetails label={t('common:createdAt')} value={formattedCreatedDate} />
            <CardRowDetails label={t('common:updatedAt')} value={formattedUpdatedDate} />
          </Stack>

          <Stack
            direction="row"
            spacing={SPACING_UNIT}
            mt={SPACING_XLARGE}
            justifyContent="flex-end"
          >
            <Button variant="text" onClick={() => doDeleteItem(product)}>
              <DeleteOutline />
            </Button>
            <AppButton to={`/products/${product.productId}`} variant="contained">
              {t('common:edit')}
            </AppButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
