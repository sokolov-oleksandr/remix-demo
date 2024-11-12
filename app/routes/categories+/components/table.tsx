import {useTranslation} from 'react-i18next';

import {Paper, Table, TableBody, TableContainer} from '@mui/material';

import {useMutationCategoriesDelete} from '~/services/categories';

import {TableRowEmpty} from '~/global/components/table-row-empty';

import {ApiCategory} from '~/api-client/types';
import {useCustomSnackbar} from '~/hooks/use-custom-snackbar';

import {CategoriesTableRow} from './table-row';
import {CategoriesTableRowSkeleton} from './table-row-skeleton';
import {CategoriesTableHead} from './table-head';

//
//

export const CategoriesTable = ({data, isLoading}: {data?: ApiCategory[]; isLoading: boolean}) => {
  const {t} = useTranslation();
  const {enqueueSnackbar} = useCustomSnackbar();
  const deleteItem = useMutationCategoriesDelete();

  //

  const doDeleteItem = (item: ApiCategory) => {
    if (!window.confirm(t('common:deleteConfirm', {item: item.title.en || item.title.ar}))) return;

    deleteItem.mutate(
      {id: item.categoryId},
      {
        onSuccess: async result => {
          enqueueSnackbar({variant: 'success', message: result?.meta?.message});
        },
        onError: err => {
          enqueueSnackbar({variant: 'error', message: err?.message || 'unknown error'});
        },
      },
    );
  };

  //
  //

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}}>
        <CategoriesTableHead />

        <TableBody>
          {isLoading ? (
            <CategoriesTableRowSkeleton />
          ) : !data?.length ? (
            <TableRowEmpty actionURL="/categories/create" colSpan={4} />
          ) : (
            data?.map(row => (
              <CategoriesTableRow key={row.categoryId} row={row} doDeleteItem={doDeleteItem} />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
