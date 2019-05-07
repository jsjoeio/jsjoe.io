import React from 'react'
import articles from '../../utils/articles'

const Writing = () => (
  <section>
    <h3>Writing</h3>
    {articles.map(article => (
      <li>
        <a href={article.link} alt={`Link to article ${article.title}.`} target='_blank' rel='noopener noreferrer'>{article.title}</a>
      </li>
    ))}
  </section>
)

export default Writing
