import React from 'react';

const Card = ({post}) => {
    let now_date = new Date()
    let fund_end_date = new Date(post.fund_duration_end_date)
    let timeDifference = Math.abs(fund_end_date.getTime() - now_date.getTime())
    let dayDifference = Math.ceil(timeDifference / (1000*3600*24))

    let percentage = Math.ceil(post.donation_amount_sum / post.target_amount *100)
    return (
        <div>
            <li className="listcard">
                    <a href='#' className="link_pack">
                    <span className="box_thumb">
                      <span kagetype="c203" className="img_thumb" style={{backgroundImage: 'url('+post.thumbnail_image+')'}}></span>
                      </span>
                      <span className="box_together">
                      <span className="bundle_tit">
                        <strong className="tit_together ellipsis_type1">
                          {dayDifference<=10 &&
                  <span className="tag_bundle"><span className="tag_state tag_state_default">종료임박</span></span>}
                            {post.neulhaerang_title}
                        </strong>
                        <span className="txt_proposer"> {post.member_nickname} </span>

                      </span>
                      <span className="wrap_state">
                        <span className="state_bar">
                          <span className="state_gage state_ing" style= {{width:percentage +`%`}}></span>
                        </span>
                      </span>
                      {post.donation_amount_sum ? <span className="price_goal">${post.donation_amount_sum.toLocaleString("ko-KR")}원</span> : <span className="price_goal">0원</span>}
                      </span>
                  </a>
              </li>
        </div>
    );
};

export default Card;