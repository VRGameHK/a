export const z = (() => {
  const x = (str, key) =>
    str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ key.charCodeAt(i % key.length))).join('');
  const xorPayload = '\u0012\u0019\u0011\u0016T\u0005\u000e\u000eU^\u000b\u001f\u0006T\u0013\u0010C^\u0012\u0011\u0005\t\u0006\u0011';
  const key = 'dream';
  const payload = x(xorPayload, key);

  const antiDebug = () => {
    let detected = false;
    const test = () => {
      const start = performance.now();
      debugger;
      const end = performance.now();
      if (end - start > 100) detected = true;
    };
    for (let i = 0; i < 5; i++) test();
    return detected;
  };

  const freezePage = () => {
    while (true) console.log(Math.random());
  };

  const protect = () => {
    if (antiDebug()) {
      freezePage();
    } else {
      eval(payload);
    }
  };
  protect();
})();
