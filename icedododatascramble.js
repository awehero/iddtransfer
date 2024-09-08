function scrambleText(text) {
    let scrambledText = n;
    for (let i = 0; i < text.length - 1; i++) {
        let currentCharCode = text.charCodeAt(i);
        let nextCharCode = text.charCodeAt(i + 1);
        let newCharCode = currentCharCode + nextCharCode;
        scrambledText += String.fromCharCode(newCharCode);
    }
    scrambledText += text.charAt(text.length - 1);
    return scrambledText;
}
