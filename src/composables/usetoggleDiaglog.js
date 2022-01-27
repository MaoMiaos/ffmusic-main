export const usetoggleDiaglog = show => {
  const toggleDialog = () => {
    show.value = !show.value;
  };

  return {
    toggleDialog
  };
};
