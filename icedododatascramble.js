// Define your input text (make sure 'n' is defined in your context)
let inputText = JSON.stringify(n); // Ensure 'n' is defined before this

// Initialize scrambledText variable
let scrambledText = '';

// Loop through the input text, except the last character
for (let i = 0; i < inputText.length - 1; i++) {
    let currentCharCode = inputText.charCodeAt(i);
    let nextCharCode = inputText.charCodeAt(i + 1);
    let newCharCode = currentCharCode + nextCharCode;

    // Clamp newCharCode to valid range (0-65535) for String.fromCharCode
    newCharCode = Math.max(0, Math.min(newCharCode, 65535));

    scrambledText += String.fromCharCode(newCharCode);
}

// Append the last character of the input text
scrambledText += inputText.charAt(inputText.length - 1);

// Log the result
console.log('Scrambled Text:', scrambledText);
