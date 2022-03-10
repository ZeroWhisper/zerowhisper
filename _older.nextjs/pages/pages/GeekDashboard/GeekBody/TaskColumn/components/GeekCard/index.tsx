import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Task } from '@/store/modules/geek/types';

import { Container, CardBadge, Salary } from './style';

interface GeekCardProps {
  task: Task;
  index: number;
}

const GeekCard: React.FC<GeekCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardBadge>ACCEPTED</CardBadge>
          <h2>FrontEnd Developer {task.id}</h2>
          <span>
            BovControl | <span>Sao Paulo - SP</span>
          </span>
          <Salary>(PJ) 5.5k - 7.5k</Salary>
          <p>{task.content}</p>
        </Container>
      )}
    </Draggable>
  );
};

export default GeekCard;
