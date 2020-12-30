function Vehiculo(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;

};
class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio)
        this.puertas = puertas;
        this.info = `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`;
    };
};
class Moto extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada;
        this.info = `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: $${this.precio}`;
    };
};
const peugeot1 = new Auto("Peugeot", "206", "200.000,00", "4");
const honda = new Moto("Honda", "Titan", "60.000,00", "125cc");
const peugeot2 = new Auto("Peugeot", "208", "250.000,00", "5");
const yamaha = new Moto("Yamaha", "YBR", "80.500,50", "160cc");

const vehiculos = [peugeot1, honda, peugeot2, yamaha];
vehiculos.forEach(vehiculo => {
    console.log(vehiculo.info);
});
console.log("=============================");
for (let i = 0; i < vehiculos.length; i++) {
    const { marca, modelo, precio } = vehiculos[i];
    let preciO = Number(vehiculos[i].precio.substring(0, 5));
    if (preciO >= 250) console.log(`Vehiculo mas caro: ${marca} ${modelo}.`);
    if (preciO <= 80) console.log(`Vehiculo mas barato: ${marca} ${modelo}.`);
    let y = vehiculos[i].marca.substring(0, 1);
    if (y.includes("Y")) {
        console.log(`Vehiculo que contiene en el modelo la letra 'Y': ${marca} ${modelo} ${precio}`);
    };
};
console.log("=============================");