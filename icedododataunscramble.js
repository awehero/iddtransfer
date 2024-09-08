let unscrambledText = '';
for (let i = 0; i < scrambledText.length; i++) {
    let currentCharCode = scrambledText.charCodeAt(i);
    let originalCharCode = currentCharCode - 5;
    unscrambledText += String.fromCharCode(originalCharCode);
}

// Log the unscrambled text
console.log('Unscrambled Text:', unscrambledText);
