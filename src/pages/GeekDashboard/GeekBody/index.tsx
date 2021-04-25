import React from 'react';
import * as Redux from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import TaskColumn from './TaskColumn';

import { Container } from './style';
import { RootState } from '@/store/modules/rootReducer';

const data = {
  columns: [
    {
      title: 'Title 1',
      list: Array.from({ length: 10 }).map((_e, i) => {
        return { id: String(i), column: 'Title 1', data: `T1${i}` };
      }),
    },
    {
      title: 'Title 2',
      list: Array.from({ length: 10 }).map((_e, i) => {
        return { id: String(i), column: 'Title 2', data: `T2${i}` };
      }),
    },
  ],
};

export type DataColumn = typeof data.columns[0];

// const c = new Set();

const Body: React.FC = _props => {
  const columns = Redux.useSelector((state: RootState) => state.geek.show);

  console.tron.log(columns);

  /**
   * droppableId is the column name
   */
  const onDragEnd = React.useCallback((result: DropResult) => {
    const { destination } = result;

    if (!destination || isSameOrigin(result)) return;
  }, []);

  // c.add(isSameOrigin);
  // console.log(c.size);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {/* Aqui deve ser a lista de SET */}
        {columns?.map((e, i) => {
          /* Então eu passo a lista de obj */
          return <TaskColumn key={i} title={e.title} task={e.task} />;
        })}
      </Container>
    </DragDropContext>
  );
};

function isSameOrigin({ source, destination }: DropResult) {
  const isSameIndex = source.index === destination?.index;
  const isSameID = source.droppableId === destination?.droppableId;

  return isSameIndex && isSameID;
}

export default Body;
