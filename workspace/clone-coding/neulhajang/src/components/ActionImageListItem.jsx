import React from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../modules/hajng_redux';

const ActionImageListItem = ({item}) => {
  const dispatch = useDispatch()
  return (
    <li class="action-image-list-item" onClick={()=>{dispatch(addImage(item))}}>
      <button class="image-button-box">
        <img
          class="action-participation-image"
          src={item.image}
          alt="몰라"
        />
      </button>
    </li>
  );
};

export default ActionImageListItem;
