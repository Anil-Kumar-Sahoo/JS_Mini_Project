// Variable Declaration

const inputText = document.querySelector('#inputText');
const charOutput = document.querySelector('#char');
const wordOutput = document.querySelector('#word');
const alphaOutput = document.querySelector('#alpha');
const numOutput = document.querySelector('#num');
const sentOutput = document.querySelector('#sen');
const paraOutput = document.querySelector('#para');
const btn = document.querySelector('#btn');

let inputFun = () => {

    let text = inputText.value;

    // =========== Count Characters with spaces ===========

    charOutput.textContent = text.length;

    // =========== Count Words without spaces ===========

    // Removing spaces from first and last 

    let trimedText = text.trim();

    // Removing spaces between words

    let words = trimedText.split(' ');
    let wordCount = words.filter((elm) => {
        return elm != '';
    });

    wordOutput.textContent = wordCount.length;

    // =========== Alphabet & Number Count ===========

    let alphaCount = 0;
    let numCount = 0;

    for (let i = 0; i < text.length; i++) {

        // Counting Alphabet

        if ((text[i] >= 'a' && text[i] <= 'z') || text[i] >= 'A' && text[i] <= 'Z') {
            alphaCount++;
        }

        // Counting Number

        if (text[i] >= '0' && text[i] <= '9') {
            numCount++;
        }
    }

    alphaOutput.textContent = alphaCount;
    numOutput.textContent = numCount;

    // =========== Sentence Count ===========

    sentOutput.textContent = text.split(".").length;

    // =========== Paragraph Count ===========

    paraOutput.textContent = text.split("\n").length;
}

// Value Reset 

let clear = () => {

    inputText.value = '';

    charOutput.textContent = 0;
    wordOutput.textContent = 0;
    alphaOutput.textContent = 0;
    numOutput.textContent = 0;
    sentOutput.textContent = 0;
    paraOutput.textContent = 0;
}


inputText.addEventListener('input', inputFun);
btn.addEventListener('click', clear);