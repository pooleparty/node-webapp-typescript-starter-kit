import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';

interface Props {
  className?: string;
}

export class HomePage extends React.Component<Props, {}> {
  render() {
    return (
      <div className={this.props.className}>
        <h1>Home Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {};
}

export default {
  loadData: ({ dispatch }: Store<any>) => Promise.resolve(),
  component: connect(mapStateToProps)(HomePage),
};
