import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadVoteList,
  sendVoteId,
} from '../redux/slice';

import { get } from '../utils/utils';

import VoteList from '../components/VoteList';

export default function VoteContainer({ roomId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVoteList({ roomId }));
  }, []);

  const voteList = useSelector(get('voteList'));
  const voteId = useSelector(get('voteId'));

  function handleClick(id) {
    dispatch(sendVoteId(id));
    dispatch(loadVoteList({ roomId }));
  }

  return (
    <>
      <VoteList
        voteList={voteList}
        voteId={voteId}
        handleClick={handleClick}
      />
    </>
  );
}
