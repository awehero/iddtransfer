const _0x8b4d = (function() {
    const _0x7c3f = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    const _0x2f5e = ['P', '5', 'x', '7', 'o', 'r', '2', 'l', 'a', '9', 'u', '3', 's', '8', 't', '1', 'w', 'h', '4', 'c', 'j', 'm', 'e', 'y', '6', 'n', 'f', 'q', 'v', 'i', '0', 'k', '7', 'd', 'z', '5', '3', '8', 'p', 'w', '2', '6', 'u', 'j', '9', 'a', 'l', 'c', '1', 'r', 'n', 'e', 's', 'h', 't', 'x', 'm', 'v', 'b', 'f', 'q', '4'];
    return _0x7c3f.reduce((acc, val, idx) => (acc[val] = _0x2f5e[idx], acc), {});
})();

function _0x1f5d(_0x1a2b) {
    let _0x2f4e = '';
    for (let _0x3e6a = 0; _0x3e6a < _0x1a2b.length; _0x3e6a++) {
        _0x2f4e += String.fromCharCode(_0x1a2b.charCodeAt(_0x3e6a) ^ 0x4F);
    }
    return btoa(_0x2f4e);
}

function _0x6d3e(_0x4a7e) {
    let _0x2f6a = atob(_0x4a7e);
    let _0x1c6b = '';
    for (let _0x3e6a = 0; _0x3e6a < _0x2f6a.length; _0x3e6a++) {
        _0x1c6b += String.fromCharCode(_0x2f6a.charCodeAt(_0x3e6a) ^ 0x4F);
    }
    return _0x1c6b;
}

let _0x7d3e = JSON.stringify(n);
let _0x3e1b = (function() {
    let _0x5c2a = _0x1f5d(_0x7d3e);
    let _0x1a7b = (function(_0x5e4c) {
        let _0x3b7c = '';
        for (let _0x6e5a = 0; _0x6e5a < _0x5c2a.length; _0x6e5a++) {
            _0x3b7c += (_0x8b4d[_0x5c2a[_0x6e5a]] || _0x5c2a[_0x6e5a]);
        }
        return _0x3b7c;
    })(_0x5c2a);
    return _0x1a7b;
})();

console.log(_0x3e1b);
