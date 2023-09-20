// import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '~/app/hooks';

import { decrement, increment, selectCount } from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return <div onClick={handleClick}>{count}</div>;
}
