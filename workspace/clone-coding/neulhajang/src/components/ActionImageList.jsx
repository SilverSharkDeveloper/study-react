import React from 'react';
import { useSelector } from 'react-redux';
import ActionImage from './ActionImage';
import ActionImageListItem from './ActionImageListItem';
const ActionImageList = () => {
  const action_image_list = useSelector((state) => state.datas);
  const image_list = action_image_list.map((item, i) => (
    <ActionImageListItem item={item} key={i} />
  ));
  return <ul class="action-image-list">{image_list}</ul>;
};

export default ActionImageList;
