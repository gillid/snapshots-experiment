import React from 'react';

export default class extends React.Component {
  render() {
    const { prop1, prop2, prop3, prop4, prop5 } = this.props;
    return (
      <div>
        {prop1 && <div>prop1</div>}
        {prop2 && <div>prop2</div>}
        {prop3 && <div>prop3</div>}
        {prop4 && <div>prop4</div>}
        {prop5 && <div>prop5</div>}
      </div>
    );
  }
};
