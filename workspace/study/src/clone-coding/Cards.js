import React from 'react';
import Card from './Card';

const Cards = ({posts}) => {
const cardList = posts.map((post,i)=><Card key={post.id} post={post}></Card>)
    return (
        <div className="list_fund">
            {cardList}
        </div>
    );
};

export default Cards;