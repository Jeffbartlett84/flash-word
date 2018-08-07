import * as React from 'react';

export interface IProps {
    title: string;
}

const SingleTask = ({
    title
}: IProps) => {

  return (
    <div className="single-task-cmp">
      <h3 className="taskTitle">{title}</h3>
    </div>
  );
}

export default SingleTask;