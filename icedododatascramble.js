// Define your input text (make sure 'n' is defined in your context)
let inputText = JSON.stringify(n); // Ensure 'n' is defined before this

// Initialize scrambledText variable
let scrambledText = '';

// Array of offsets to alternate between
const offsets = [3, 4, 5, 6];
let offsetIndex = 0;

for (let i = 0; i < inputText.length; i++) {
    let currentCharCode = inputText.charCodeAt(i);

    // Determine the position to look ahead using the current offset
    let lookaheadPosition = i + offsets[offsetIndex];
    if (lookaheadPosition >= inputText.length) {
        // If out of bounds, use the last character's code
        lookaheadPosition = inputText.length - 1;
    }

    let lookaheadCharCode = inputText.charCodeAt(lookaheadPosition);

    // Calculate the new character code
    let newCharCode = currentCharCode + lookaheadCharCode;

    // Clamp newCharCode to valid range (0-65535) for String.fromCharCode
    newCharCode = Math.max(0, Math.min(newCharCode, 65535));

    // Append the new character to scrambledText
    scrambledText += String.fromCharCode(newCharCode);

    // Move to the next offset in the array, wrapping around if necessary
    offsetIndex = (offsetIndex + 1) % offsets.length;
}

// Log the result
console.log('Scrambled Text:', scrambledText);
