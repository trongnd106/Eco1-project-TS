const spinnerAction = (state: any, action: any) => {
  switch (action.type) {
    case "show":
      return true;
    case "close":
      return false;
  }
};

export default spinnerAction;
