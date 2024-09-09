function waitForDebuggerToExit(callback) {
    function checkDebugger() {
        try {
            new Function('debugger;')();
            setTimeout(checkDebugger, 100);
        } catch {
            callback();
        }
    }
    checkDebugger();
}

const a = { example: 'data' };

waitForDebuggerToExit(() => 
    navigator.clipboard.writeText(JSON.stringify(a))
        .then(() => console.log('Data copied to clipboard.'))
        .catch(err => console.error('Failed to copy data to clipboard:', err))
);
