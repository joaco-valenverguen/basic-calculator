class Display {
  constructor(displayValorActual, displayValorAnterior) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "%",
      multiplicar: "x",
      restar: "-",
    };
  }

  addNumber(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.printValues();
  }
  calculate() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);
    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
  clear() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.printValues();
  }
  compute(tipo) {
    this.tipoOperacion !== "igual" && this.calculate();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.printValues();
  }
  delete() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.printValues();
  }
  printValues() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.displayValorAnterior} ${this.signos.this.tipoOperacion}`;
  }
}
