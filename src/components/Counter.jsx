import React, { Component } from "react";

export default class Counter extends Component {
  // конструктор получает пропсы
  constructor(props) {
    // передает их родительскому конструктору
    super(props);
    this.state = {
      // Nullish coalescing operator
      count: this.props.initialCount ?? 0,
    };
    this.increment = this.increment.bind(this);
  }

  // обычная функция
  // здесь будет потеря контекста, если не байндить в конструкторе
  // или не использовать стрелочную функцию
  increment() {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  }

  // стрелочная функция
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
