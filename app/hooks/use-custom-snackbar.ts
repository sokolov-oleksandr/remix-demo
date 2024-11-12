import {useSnackbar} from 'notistack';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Options = any;

export const useCustomSnackbar = () => {
  const snackbar = useSnackbar();

  const enqueueSnackbar = (options?: Options) => {
    if (!options?.message && !options?.messages) {
      return;
    }

    //TODO: incapsulate the logic of the snackbar here, to refactor when we have more resources
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return snackbar.enqueueSnackbar(options, options);
  };

  return {...snackbar, enqueueSnackbar};
};
