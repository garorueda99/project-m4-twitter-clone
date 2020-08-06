import React from 'react';

const Tweet = ({
  author,
  id,
  isLiked,
  isRetweeted,
  media,
  numLikes,
  numRetweets,
  status,
  timestamp,
}) => {
  return <div>{JSON.stringify(author)}</div>;
};

export default Tweet;
