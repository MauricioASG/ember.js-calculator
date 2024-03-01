
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CalculatorComponent extends Component {
  // Variables de estado rastreadas para el primer operando, segundo operando y resultado
  //@traked sirve para rastrear los cambios en las variables y reflejarlos en la vista
  @tracked firstOperand = 0;
  @tracked secondOperand = 0;
  @tracked result = 0;

  // Método para realizar operaciones
  performOperation(operation) {
    // Convertir las entradas a números
    const num1 = parseFloat(this.firstOperand);
    const num2 = parseFloat(this.secondOperand);

    // Switch para determinar la operación y calcular el resultado
    switch (operation) {
      case 'add':
        this.result = num1 + num2;
        break;
      case 'subtract':
        this.result = num1 - num2;
        break;
      case 'multiply':
        this.result = num1 * num2;
        break;
      case 'divide':
        // Verificar si el segundo operando no es cero antes de realizar la división
        this.result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        this.result = 'Error';
    }
  }
}
