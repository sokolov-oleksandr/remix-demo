import {CustomContentProps, useSnackbar} from 'notistack';

import {SnackNotificationProps} from '~/global/components/snack-notification';

type CustomSnackbarOptions = Partial<Omit<CustomContentProps, 'variant'>> & SnackNotificationProps;

export const useCustomSnackbar = () => {
  const snackbar = useSnackbar();

  const enqueueSnackbar = (options?: CustomSnackbarOptions) => {
    if (!options?.message && !options?.messages) {
      return;
    }

    //TODO: incapsulate the logic of the snackbar here, to refactor when we have more resources
    return snackbar.enqueueSnackbar(options as unknown as string, options as CustomContentProps);
  };

  return {...snackbar, enqueueSnackbar};
};
