const BG_COLORS = [
    "rgb(0, 255, 153)", // Green
    "rgb(0, 204, 255)", // SkyBlue
    "rgb(153, 51, 255)", // Violet
    "rgb(255, 102, 102)", // Red
    "rgb(255, 243, 92)", // Yellow
]

// Selecciona un BG pseudo-aleatorio
export default function* getRandomBgColor(ignoreYellow = false) {
    let lastNumber = null;

    while (true) {
        let randNumber;

        // Genera un nuevo número único que no sea igual al anterior
        do {
            randNumber = Math.floor(Math.random() * (ignoreYellow? 4 : 5)); // Números entre 0 y 5
        } while (randNumber === lastNumber);

        // Actualiza el último número generado
        lastNumber = randNumber;

        // Devuelve el color en el índice generado
        yield BG_COLORS[randNumber];
    }
}

