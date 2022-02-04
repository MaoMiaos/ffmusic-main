export const usetoggleDiaglog = show => {
  const hideDialog = () => {
    show.value = false;
  };
  const showDialog = () => {
    show.value = true;
  };
  return {
    hideDialog,
    showDialog
  };
};
