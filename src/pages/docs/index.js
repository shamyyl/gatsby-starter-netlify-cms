import React from 'react'

import Layout from '../../components/Layout'
import DocsRoll from '../../components/DocsRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <DocsRoll />
          </div>
        </div>
      </section>
    )
  }
}