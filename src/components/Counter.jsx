import React, { Component } from "react";
import { observer } from "mobx-react";
import { makeObservable, observable, action } from "mobx";

// @observer
const Counter = observer(
  class extends Component {
    // @observable
    count = 0;
    // конструктор получает пропсы
    constructor(props) {
      // передает их родительскому конструктору
      super(props);
      makeObservable(this, {
        count: observable, // наблюдаемое значение
        decrement: action, // действие
        increment: action.bound, // действие с привязанным контекстом
      });

      // стейтиз React нам уже не нужен
      // this.state = {
      //   // Nullish coalescing operator
      //   count: this.props.initialCount ?? 0,
      // };

      // вместо него используем свойство класса
      this.count = this.props.initialCount ?? 0;

      // также уже не нужно
      // this.increment = this.increment.bind(this);
    }

    // обычная функция
    // здесь будет потеря контекста, если не байндить в конструкторе
    // или не использовать стрелочную функцию
    // @action
    increment() {
      this.count++;
    }

    // стрелочная функция
    // @action.bound
    decrement = () => this.count--;

    render() {
      return (
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      );
    }
  }
);

export default Counter;
