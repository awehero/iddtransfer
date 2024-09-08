function scrambleText(text) {
    let scrambledText = '';
    for (let i = 0; i < text.length - 1; i++) {
        let currentCharCode = text.charCodeAt(i);
        let nextCharCode = text.charCodeAt(i + 1);
        let newCharCode = currentCharCode + nextCharCode;

        // Clamp newCharCode to valid range (0-65535) for String.fromCharCode
        newCharCode = Math.max(0, Math.min(newCharCode, 65535));

        scrambledText += String.fromCharCode(newCharCode);
    }
    scrambledText += text.charAt(text.length - 1);
    return scrambledText;
}

// Define your input text (make sure 'n' is defined in your context)
let inputText = JSON.stringify(n); // Ensure 'n' is defined before this
let scrambled = scrambleText(inputText);
console.log('Scrambled Text:', scrambled);
