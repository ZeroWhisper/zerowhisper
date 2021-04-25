import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Task } from '@/store/modules/geek/types';

import GeekCard from './components/GeekCard';
import { Container } from './style';

// import { DataColumn } from '../';

interface TaskColumnProps {
  title: string;
  task: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, task }) => {
  console.tron.log('I AM LOG  ', task);

  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>
      <Droppable droppableId={title}>
        {provided => {
          return (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {task.map((e, i) => {
                return <GeekCard key={e.id} task={e} index={i} />;
              })}
              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </Container>
  );
};

export default TaskColumn;
