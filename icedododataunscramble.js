// Define your scrambled text (make sure this is the scrambled text you want to unscramble)
let scrambledText = '...'; // Replace with the actual scrambled text

// Initialize unscrambledText variable
let unscrambledText = '';

// Array of offsets to alternate between
const offsets = [3, 4, 5, 6];
let offsetIndex = 0;

for (let i = 0; i < scrambledText.length; i++) {
    let currentCharCode = scrambledText.charCodeAt(i);

    // Determine the position to look ahead using the current offset
    let lookaheadPosition = i + offsets[offsetIndex];
    if (lookaheadPosition >= scrambledText.length) {
        // If out of bounds, use the last character's code
        lookaheadPosition = scrambledText.length - 1;
    }

    let lookaheadCharCode = scrambledText.charCodeAt(lookaheadPosition);

    // Calculate the original character code
    let originalCharCode = currentCharCode - lookaheadCharCode;

    // Clamp originalCharCode to valid range (0-65535) for String.fromCharCode
    originalCharCode = Math.max(0, Math.min(originalCharCode, 65535));

    // Append the original character to unscrambledText
    unscrambledText += String.fromCharCode(originalCharCode);

    // Move to the next offset in the array, wrapping around if necessary
    offsetIndex = (offsetIndex + 1) % offsets.length;
}

// Log the result
console.log('Unscrambled Text:', unscrambledText);
