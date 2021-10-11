import Container from '@mui/material/Container';
import React from 'react';
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard.js'

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
    return <Container maxWidth="md">
        <div className="content">
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best results use inshorts app on your smartphone
                </span>
            </div>
            {
                newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))
            }

            {
                loadmore<=newsResults && (
                    <>
                        <hr />
                        <button className="loadMore" onClick={() => setLoadmore(loadmore + 20)} >Load More</button>
                    </>
                )
            }
        </div>
    </Container>;
}

export default NewsContent;

