let originalText = n;

// Scramble the text by adding 5 to each character's ASCII value
let scrambledText = '';
for (let i = 0; i < originalText.length; i++) {
    let charCode = originalText.charCodeAt(i);
    let newCharCode = charCode + 5;
    scrambledText += String.fromCharCode(newCharCode);
}

// Log the scrambled text
console.log('Scrambled Text:', scrambledText);
