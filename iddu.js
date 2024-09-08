 const substitutionMap = {
            'A': 'P', 'B': '5', 'C': 'x', 'D': '7', 'E': 'o', 'F': 'r',
            'G': '2', 'H': 'l', 'I': 'a', 'J': '9', 'K': 'u', 'L': '3',
            'M': 's', 'N': '8', 'O': 't', 'P': '1', 'Q': 'w', 'R': 'h',
            'S': '4', 'T': 'c', 'U': 'j', 'V': 'm', 'W': 'e', 'X': 'y',
            'Y': '6', 'Z': 'n', 'a': 'f', 'b': 'q', 'c': 'v', 'd': 'i',
            'e': '0', 'f': 'k', 'g': '7', 'h': 'd', 'i': 'z', 'j': '5',
            'k': '3', 'l': '8', 'm': 'p', 'n': 'w', 'o': '2', 'p': '6',
            'q': 'u', 'r': 'j', 's': '9', 't': 'a', 'u': 'l', 'v': 'c',
            'w': '1', 'x': 'r', 'y': 'n', 'z': 'e', '0': 's', '1': 'h',
            '2': 't', '3': 'x', '4': 'm', '5': 'v', '6': 'b', '7': 'f',
            '8': 'q', '9': '4'
        };

        // Function to unscramble the text based on the substitution mapping
        function unscramble(text) {
            const reverseSubstitutionMap = Object.fromEntries(
                Object.entries(substitutionMap).map(([key, value]) => [value, key])
            );
            return text.split('').map(char => reverseSubstitutionMap[char] || char).join('');
        }

        // Prompt user for input
        let userInput = prompt('Enter the text to unscramble:');
        
        // Unscramble the input
        let unscrambledText = unscramble(userInput);
        
        // Display the unscrambled text
        console.log('Unscrambled text: ' + unscrambledText);
