import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, TitleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
    {
      allArticles {
        id
        title
        category
        content
        image {
          url
        }
      }
    }
    `,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        },
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
        console.log(data);
      })
      .catch((err) => setError(`Sorry, we couldn't load articles.`));
  }, []);

  return (
    <Wrapper>
      <h2>University news feed</h2>

      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => {
          return (
            <ArticleWrapper>
              <TitleWrapper key={title}>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="article" /> : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <h2>{error ? { error } : 'Loading...'}</h2>
      )}
    </Wrapper>
  );
};

export default NewsSection;
