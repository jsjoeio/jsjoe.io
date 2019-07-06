import React from 'react'
import talks from '../../utils/talks'

const Speaking = () => (
  <section>
    <h3>Speaking</h3>
    <table>
      <tbody>
      <tr>
        <th style={{ paddingTop: '0' }}>Title</th>
        <th style={{ paddingTop: '0' }}>Date</th>
      </tr>
      {talks.map(talk => (
        <tr key={talk.title}>
          <td><a href={talk.link} alt={`Link for information related to ${talk.title}`} target='_blank' rel='noopener noreferrer'>{talk.title}</a></td>
          <td>{talk.date}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </section>
)

export default Speaking
