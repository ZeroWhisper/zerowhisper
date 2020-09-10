import { GeekActions, GeekState, Types, Task, Column } from './types';

const reducer = (state = INITIAL, action: GeekActions) => {
  switch (action.type) {
    case Types.SET:
      // const { key,  } = action.payload;
      return { ...state };
    // case Types.REQUEST:
    //   return state;
    default:
      return state;
  }
};

function getTasks() {
  const length = Math.round(Math.random() * 10);
  const tasks: Task[] = Array.from({ length }).map((_e, i) => {
    return { id: `Task-${i}`, content: `I am a content number: ${i}` };
  });

  return tasks;
}

function getColumns() {
  const length = Math.round(Math.random() * 3);

  const columns: Column[] = Array.from({ length }).map((_e, i) => {
    return {
      id: `column-${i}`,
      title: `I am a column number${i}`,
      task: getTasks(),
    };
  });

  return columns;
}

const INITIAL: GeekState<Column[]> = {
  loading: false,
  error: '',
  show: getColumns(),
};

export default reducer;
