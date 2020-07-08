import React from 'react';
import PropTypes from 'prop-types';

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
      items: [
        ...props.items,
      ],
    };

    this.moveSlide = this.moveSlide.bind(this);
  }

  moveSlide(dir) {
    const { state } = this;
    let next = 0;
    if (dir === 'left') {
      next = state.focused === 0 ? (state.items.length / 4) - 1 : state.focused - 1;
    } else if (dir === 'right') {
      next = state.focused === (state.items.length / 4) - 1 ? 0 : state.focused + 1;
    }

    this.setState(() => ({ focused: next }));
  }

  render() {
    const { state } = this;
    const items = [];
    const indicators = [];
    let counter = 1;

    state.items.forEach((item, i) => {
      if (counter === 1) {
        items.push([]);
      }
      items[items.length - 1].push(
        <div className="item" key={`${i}_item`}>
          {item.content}
          <p className="item-label">{item.label}</p>
        </div>,
      );
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      /*  indicators.push(<li
        className={`${state.focused === i ? 'active' : ''}`}
        key={`${i}_indicator`}
        onClick={() => {
          this.setState(() => ({ focused: i }));
        }}
      />); */
      counter = counter === 4 ? 1 : counter + 1;
    });

    return (
      <div data-slideshow className="slide-show-container">
        <div className="screen">
          <div className="items" style={{ transform: `translate(-${state.focused}00%, 0)` }}>
            {items.map((itemGroup) => <div className="item-group">{itemGroup}</div>)}
          </div>
          <ul className="indicators">{indicators} </ul>

          <span
            className="controller left icon-chevron-left"
            onClick={() => {
              this.moveSlide('left');
            }}
          />
          <span
            className="controller right icon-chevron-right"
            onClick={() => {
              this.moveSlide('right');
            }}
          />
        </div>

        {/* <p className="label">{state.items[state.focused].label}</p> */}
      </div>

    );
  }
}

SlideShow.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SlideShow;
