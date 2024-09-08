const _0x1b5c = (() => {
    const _0x2e3d = ['P', '5', 'x', '7', 'o', 'r', '2', 'l', 'a', '9', 'u', '3', 's', '8', 't', '1', 'w', 'h', '4', 'c', 'j', 'm', 'e', 'y', '6', 'n', 'f', 'q', 'v', 'i', '0', 'k', '7', 'd', 'z', '5', '3', '8', 'p', 'w', '2', '6', 'u', 'j', '9', 'a', 'l', 'c', '1', 'r', 'n', 'e', 's', 'h', 't', 'x', 'm', 'v', 'b', 'f', 'q', '4'];
    const _0x3c6f = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return _0x2e3d.reduce((acc, val, idx) => (acc[val] = _0x3c6f[idx], acc), {});
})();

let _0x2a3d = JSON.stringify(n);
let _0x5b6d = (function(_0x1d3e) {
    let _0x2f4d = '';
    for (let _0x3e5b = 0; _0x3e5b < _0x1d3e.length; _0x3e5b++) {
        _0x2f4d += String.fromCharCode(_0x1d3e.charCodeAt(_0x3e5b) ^ 0x4F);
    }
    return btoa(_0x2f4d);
})(_0x2a3d);

let _0x3e7b = (function() {
    let _0x7b2d = '';
    for (let _0x4c3e = 0; _0x4c3e < _0x5b6d.length; _0x4c3e++) {
        _0x7b2d += (_0x1b5c[_0x5b6d[_0x4c3e]] || _0x5b6d[_0x4c3e]);
    }
    return _0x7b2d;
})();

console.log(atob(_0x3e7b).split('').map(char => String.fromCharCode(char.charCodeAt(0) ^ 0x4F)).join(''));
