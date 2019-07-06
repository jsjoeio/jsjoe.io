import React from 'react'
import articles from '../../utils/articles'
import Title from '../atoms/Title'

const Writing = () => (
  <section>
    <Title>Writing</Title>
    <ul style={{ marginBottom: '1.666rem', marginLeft: '1rem' }}>
      {articles.map(article => (
        <li>
          <a href={article.link} alt={`Link to article ${article.title}.`} target='_blank' rel='noopener noreferrer'>{article.title}</a>
        </li>
      ))}
    </ul>
  </section>
)

export default Writing
