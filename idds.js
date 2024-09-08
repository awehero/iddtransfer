const _0x4b1c = (() => {
    const _0x37d2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const _0x28b3 = ['P', '5', 'x', '7', 'o', 'r', '2', 'l', 'a', '9', 'u', '3', 's', '8', 't', '1', 'w', 'h', '4', 'c', 'j', 'm', 'e', 'y', '6', 'n', 'f', 'q', 'v', 'i', '0', 'k', '7', 'd', 'z', '5', '3', '8', 'p', 'w', '2', '6', 'u', 'j', '9', 'a', 'l', 'c', '1', 'r', 'n', 'e', 's', 'h', 't', 'x', 'm', 'v', 'b', 'f', 'q', '4'];
    return _0x37d2.reduce((acc, val, idx) => (acc[val] = _0x28b3[idx], acc), {});
})();

let _0x13f4 = JSON.stringify(n);
let _0x5b3e = atob((function(_0x2d3a) {
    let _0x7b5c = '';
    for (let _0x7a5d = 0; _0x7a5d < _0x2d3a.length; _0x7a5d++) {
        _0x7b5c += String.fromCharCode(_0x2d3a.charCodeAt(_0x7a5d) ^ 0x4F);
    }
    return btoa(_0x7b5c);
})(_0x13f4));

let _0x1e4d = '';
for (let _0x7b6c = 0; _0x7b6c < _0x5b3e.length; _0x7b6c++) {
    _0x1e4d += (_0x4b1c[_0x5b3e[_0x7b6c]] || _0x5b3e[_0x7b6c]);
}

console.log(_0x1e4d);
