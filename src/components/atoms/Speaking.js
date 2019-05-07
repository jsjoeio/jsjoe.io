import React from 'react'
import talks from '../../utils/talks'

const Speaking = () => (
  <section>
    <h3>Speaking</h3>
    <table>
      <tr>
        <th>Title</th>
        <th>Date</th>
      </tr>
      {talks.map(talk => (
        <tr>
          <td><a href={talk.link} alt={`Link for information related to ${talk.title}`} target='_blank' rel='noopener noreferrer'>{talk.title}</a></td>
          <td>{talk.date}</td>
        </tr>
      ))}
    </table>
  </section>
)

export default Speaking
