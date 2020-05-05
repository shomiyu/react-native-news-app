export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    // clip: clip
    clip,
  };
};

export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
