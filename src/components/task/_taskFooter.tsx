import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../createTaskForm/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onStatusChange = (event) => console.log(event),
    onClick = (event) => console.log(event),
  } = props;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
      <FormControlLabel
        label="In progress"
        control={
          <Switch
            color="warning"
            defaultChecked={status === Status.inProgress}
            onChange={(event) => onStatusChange(event, id)}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(event) => onClick(event, id)}
      >
        completed
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};
