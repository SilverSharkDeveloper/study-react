import React, { useEffect, useState } from 'react';
import { useAsync } from 'react-async';
import Cards from './Cards';
import './category.css';
async function getPosts({category}){
    // category="전체"
    const response = await fetch(`http://localhost:10000/neulhaerang/list-api-view/?page=1&category=${category}&sort=최신순`);
    const posts = await response.json();
    return posts;
  }




const Category = () => {
    const[category,setCategory] = useState("전체")
    const { value: result, isResolved } = useAsync({
        promiseFn:getPosts,
        category,
        watch:category,
    });

    const categoryClick = (e)=>{
        if(e.target.classList.contains("txt-cate")){
            console.log(e.target.innerText)
            setCategory(e.target.innerText)
        }
        
    }
    
    console.log(result)




  return (
    <div>
      <div className="wrap">
        <main>
          <div className="main-content">
            <div className="article">
              <div className="list-header">
                <ul className="list-tab">
                  <li className="on">
                    <a href="#" className="link-tab">
                      <span className="txt-tab">모금중</span>
                    </a>
                  </li>
                  <li>
                    <a href="{% url 'neulhaerang_review:review/list' %}" className="link-tab">
                      <span className="txt-tab">모금후기</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="group-catelist">
                <div className="inner-catelist">
                  <ul className="list-cate">
                    <li className="on">
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="//t1.kakaocdn.net/together_image/ico_all_221018.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">전체</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_kidz.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">어린이</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_young.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">청년</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_woman_221018.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">여성</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_old_221018.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">어르신</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_accessible.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">장애인</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_social.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">우리사회</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_earth.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">지구촌</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_neighborhood.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">어려운이웃</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_animal.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">동물</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="link-cate" onClick={categoryClick}>
                        <svg>
                          <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            href="https://t1.kakaocdn.net/together_image/ico_culture.png"
                          ></image>
                        </svg>
                        <span className="txt-cate">환경</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group_fundlist">
                <div className="sort_cate">
                  <span className="inner_sort_cate">
                    <span className="box_sorting sort_on">
                      <input type="radio" className="inp_sort" name="sort0" />
                      <label for="sort0" className="lab_sort">
                        추천순
                      </label>
                    </span>
                    <span className="box_sorting">
                      <input type="radio" className="inp_sort" name="sort1" />
                      <label for="sort1" className="lab_sort">
                        최신순
                      </label>
                    </span>
                    <span className="box_sorting">
                      <input type="radio" className="inp_sort" name="sort2" />
                      <label for="sort2" className="lab_sort">
                        종료임박순
                      </label>
                    </span>
                  </span>
                </div>
                {isResolved && <Cards posts={result.posts}></Cards>}
                {/* <div className="list_fund"></div> */}

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Category;
