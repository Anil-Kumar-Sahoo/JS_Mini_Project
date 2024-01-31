let cel = document.querySelector("#cel");
let fah = document.querySelector("#fah");
let kel = document.querySelector("#kel");

// Reduce Decimal Precision for floating point numbers

let DecPrecision = (elm) => {
    if (!Number.isInteger(elm)) {
        return elm = elm.toFixed(2);
    }
    else
        return elm;
}

let celcious = () => {

    let c = Number(cel.value);

    // Celcious to Fahrenheit

    let f = (c * (9 / 5)) + 32;
    f = DecPrecision(f);
    fah.value = f;

    // Celcious to Kelvin

    let k = c + 273.15;
    k = DecPrecision(k);
    kel.value = k;
}

let fahrenheit = () => {

    let f = Number(fah.value);

    // Fahrenheit to Celsius

    let c = (f - 32) * (5 / 9);
    c = DecPrecision(c);
    cel.value = c;

    // Fahrenheit to Kelvin

    let k = (f - 32) * (5 / 9) + 273.15;
    k = DecPrecision(k);
    kel.value = k;
}

let kelvin = () => {

    let k = Number(kel.value);

    // Kelvin to Celcious

    let c = k - 273.15;
    c = DecPrecision(c);
    cel.value = c;

    // Kelvin to Fahrenheit

    let f = (k - 273.15) * (9 / 5) + 32;
    f = DecPrecision(f);
    fah.value = f;
}


cel.addEventListener('input', celcious);
fah.addEventListener('input', fahrenheit);
kel.addEventListener('input', kelvin);