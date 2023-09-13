import React from 'react';
import ActionImageList from '../components/ActionImageList'

const Temp = () => {
  return (
    <div className="project-detail-information">
      <div class="floating-action-buttons">
        <strong class="floating-action-buttons-title-text">
          <svg
            class="floating-action-buttons-title-icon"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 28 28"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="m15.414.566 2.934 2.933L22.5 3.5a2 2 0 0 1 2 2v4.15l2.934 2.936a2 2 0 0 1 0 2.828L24.5 18.35 24.5 22.5a2 2 0 0 1-2 2h-4.15l-2.936 2.934a2 2 0 0 1-2.828 0L9.65 24.5 5.5 24.5a2 2 0 0 1-2-2v-4.152L.565 15.414a2 2 0 0 1 0-2.828L3.499 9.65 3.5 5.5a2 2 0 0 1 2-2h4.151L12.586.565a2 2 0 0 1 2.828 0z"
                fill="#ad4cfe"
              ></path>
              <path
                d="M18.02 9.62a1 1 0 0 1 1.677 1.082l-.068.106-6.066 8.21a1 1 0 0 1-1.443.175l-.09-.085-3.506-3.73a1 1 0 0 1 1.366-1.456l.091.086 2.685 2.857 5.354-7.246z"
                fill="#fff"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
          행동 인증
        </strong>
        <ActionImageList/>
        <div class="floating-action-button-container">
          <button type="button" class="floating-action-button">
            행동하기
          </button>
          <div class="floating-end-button">종료</div>
          <div class="neulhajang-like-container">
            <button class="action-like-button">
              <div class="action-like-icon"></div>
              <span class="action-count-label">1</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div id="action-board" class="project-board-tab" style={{ display: 'none' }}>
        <h5 class="authen-feed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 28 28"
            width="14"
            height="14"
            opacity="1"
            aria-hidden="true"
            class="sc-62ee9b1b-0 hEia-DX"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="m15.414.566 2.934 2.933L22.5 3.5a2 2 0 0 1 2 2v4.15l2.934 2.936a2 2 0 0 1 0 2.828L24.5 18.35 24.5 22.5a2 2 0 0 1-2 2h-4.15l-2.936 2.934a2 2 0 0 1-2.828 0L9.65 24.5 5.5 24.5a2 2 0 0 1-2-2v-4.152L.565 15.414a2 2 0 0 1 0-2.828L3.499 9.65 3.5 5.5a2 2 0 0 1 2-2h4.151L12.586.565a2 2 0 0 1 2.828 0z"
                fill="#ad4cfe"
              ></path>
              <path
                d="M18.02 9.62a1 1 0 0 1 1.677 1.082l-.068.106-6.066 8.21a1 1 0 0 1-1.443.175l-.09-.085-3.506-3.73a1 1 0 0 1 1.366-1.456l.091.086 2.685 2.857 5.354-7.246z"
                fill="#fff"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
          <div role="text">
            행동 인증
            <span padding="[object Object]" class="sc-8aeb359-0 dxHAmn sc-5dc55ca7-0 jhsjgK">
              5
            </span>
            <span class="sc-695c2ba5-0 WfZZU">개</span>
          </div>
        </h5>
        <div style={{ position: 'relative', display: 'flex' }}>
          <div class="sort-list-buttons">
            <button type="button" class="select-box-list">
              <span class="display-selected">최신순</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                class="select-box-arrow"
              >
                <path
                  d="M16.53.912a1.5 1.5 0 0 1 2.17 2.065l-.105.111-9.4 8.916 9.384 8.653a1.5 1.5 0 0 1 .184 2.002l-.098.118a1.5 1.5 0 0 1-2.002.184l-.118-.098-10.562-9.741a1.5 1.5 0 0 1-.12-2.082l.105-.11L16.53.913z"
                  fill="#202020"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </button>
            <div class="tooltip">
              <div class="tooltip-content">
                <div betweencolor="#f2f2f2" class="option-menu" style={{ display: 'none' }}>
                  <button type="button" color="gray40" class="sort-button">
                    최신순
                  </button>
                  <button type="button" color="gray40" class="sort-button">
                    응원순
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Temp;
