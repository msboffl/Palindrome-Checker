const inputValue = document.querySelector('input');
const btnCheck = document.querySelector('button');

btnCheck.addEventListener('click', () => {

    const inputWord = inputValue.value.toLocaleLowerCase();
    console.log(inputWord);

    const string = inputWord.split("");


    const revArray = string.reverse();
    console.log(revArray);

    const joinArray = revArray.join("");
    console.log(joinArray);

    if(inputWord == joinArray) {
        document.querySelector('.output-text').innerHTML = `
        "${inputWord} = ${joinArray}" - is a Palindrome `;

    }
    else {
        document.querySelector('.output-text').innerHTML = `
        "${inputWord} = ${joinArray}" - is not Palindrome `;
    }
});

