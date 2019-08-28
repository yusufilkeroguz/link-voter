import React from 'react';

import { connect } from 'react-redux';
import { remove } from './../actions/remove';
import { up_vote } from './../actions/up_vote';
import { down_vote } from './../actions/down_vote';

import { css } from '@emotion/core'

import Header from './../components/Header'
import Container from './../components/Container'
import Item from './../components/Item'
import Button from './../components/Button'
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    links: [
      ...state
    ]
  }
}

const mapDispatchToProps = dispatch => ({
  up_vote: (payload) => dispatch(up_vote(payload)),
  down_vote: (payload) => dispatch(down_vote(payload)),
  remove: (payload) => dispatch(remove(payload))
})

class List extends React.Component {
  constructor(props) {
    super(props)

    this.removeAction = this.removeAction.bind(this)
    this.upVoteAction = this.upVoteAction.bind(this)
    this.downVoteAction = this.downVoteAction.bind(this)
  }

  removeAction(id) {
    this.props.remove(id)
  }

  upVoteAction(id) {
    this.props.up_vote(id)
    this.forceUpdate();

    return true;
  }

  downVoteAction(id) {
    this.props.down_vote(id)
    this.forceUpdate();

    return true;
  }

  render() {
    const { links } = this.props

    let html = (
      <>
        No links added yet. Please&nbsp;<Link to="/add-link">Add Link</Link>.
      </>
    )

    if(links.length > 0) {
      html = links.map((link, key) => (
        <Item
          key={key}
          id={key}
          link={link}
          up_vote={this.upVoteAction}
          down_vote={this.downVoteAction}
          remove={this.removeAction}
        />
      ))
    }

    return (
      <>
        <Header />

        <Container>
          <Link to="/add-link" style={{ marginBottom: '2rem' }}>Add Link</Link>
        </Container>

        <Container>
          {html}
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
