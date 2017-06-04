interface Action {
  type: string;
  payload?: any;
}

export const ActionTypes = {
  LOAD: 'book/LOAD',
  LOAD_COMPLETE: 'book/LOAD_COMPLETE',
  LOAD_ERROR: 'book/LOAD_ERROR'
};

export class LoadCompleteAction implements Action {
  type = ActionTypes.LOAD_COMPLETE;

  constructor(public payload: any) {
  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: number) {
  }
}

export class LoadErrorAction implements Action {
  type = ActionTypes.LOAD_ERROR;

  constructor(public payload: any) {
  }
}

export type MyAction
  = LoadErrorAction
  | LoadCompleteAction
  | LoadAction;
