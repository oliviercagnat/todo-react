import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.low,
    status = Status.completed,
    onStatusChange = (event) => console.log(event),
    onClick = (event) => console.log(event),
    id,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderRadius: '8px',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter id={id} status={status} onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
