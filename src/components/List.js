import React from 'react';

import { connect } from 'react-redux';
import { add } from './../actions/add';
import { remove } from './../actions/remove';

import Link from './Link'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
  remove: () => dispatch(remove())
})


class List extends React.Component {
  constructor(props) {
    super(props)

    this.addAction = this.addAction.bind(this)
    this.removeAction = this.removeAction.bind(this)
  }

  addAction() {
    this.props.add()
  }

  removeAction() {
    this.props.remove()
  }

  render() {
    return (
      <div className="App">
        <Link />
        <header className="App-header">
          <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
          <button onClick={this.addAction}>Test redux action</button>
          <button onClick={this.removeAction}>Del redux action</button>
        </header>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
