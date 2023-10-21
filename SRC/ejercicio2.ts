
// Ejercicio 2: Clase CuentaBancaria
class CuentaBancaria {
  numeroCuenta: string;
  titular: string;
  saldo: number;

  constructor(numeroCuenta: string, titular: string, saldo: number) {
    this.numeroCuenta = numeroCuenta;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(monto: number) {
    this.saldo += monto;
    console.log(`Se depositaron ${monto} en la cuenta ${this.numeroCuenta}. Saldo actual: ${this.saldo}`);
  }

  retirar(monto: number) {
    if (monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Se retiraron ${monto} de la cuenta ${this.numeroCuenta}. Saldo actual: ${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente en la cuenta ${this.numeroCuenta}.`);
    }
  }

  consultarSaldo() {
    console.log(`Saldo actual de la cuenta ${this.numeroCuenta}: ${this.saldo}`);
  }
}

// Crear objetos CuentaBancaria
const cuenta1 = new CuentaBancaria("123456789", "Santiago", 1000);
const cuenta2 = new CuentaBancaria("987654321", "María", 500);

// Probar los métodos de los objetos CuentaBancaria
cuenta1.depositar(500); // Se depositaron 500 en la cuenta 123456789. Saldo actual: 1500
cuenta2.retirar(200); // Se retiraron 200 de la cuenta 987654321. Saldo actual: 300
cuenta1.consultarSaldo(); // Saldo actual de la cuenta 123456789: 1500
