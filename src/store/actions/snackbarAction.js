export const SET_SNACKBAR = "teamly/settings/SET_SNACKBAR";
export const setSnackbar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
  ) => ({
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
  });