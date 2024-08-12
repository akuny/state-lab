import { ZustandState } from "../store";

export const setFormValueAction = (clientState: ZustandState, {key, value}: {key: string, value: string}) => {
  return {
    ...clientState,
    form: {
      ...clientState.form,
      [key]: value
    }
  }
};