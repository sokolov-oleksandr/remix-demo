import {useTranslation} from 'react-i18next';

import {useMutationProductsDelete} from '~/services/products';

import {useCustomSnackbar} from '~/hooks/use-custom-snackbar';
import {ApiProduct} from '~/api-client/types';

export const useDeleteItem = () => {
  const {t} = useTranslation(['common']);
  const {enqueueSnackbar} = useCustomSnackbar();
  const deleteItem = useMutationProductsDelete();

  const doDeleteItem = (item: ApiProduct) => {
    if (!window.confirm(t('common:deleteConfirm', {item: item.title.en || item.title.ar}))) return;

    deleteItem.mutate(
      {id: item.productId},
      {
        onSuccess: async result => {
          enqueueSnackbar({message: result.meta?.message, variant: 'success'});
        },
        onError: err => {
          enqueueSnackbar({message: err?.message || t('common:unknownError'), variant: 'error'});
        },
      },
    );
  };

  return {doDeleteItem};
};
