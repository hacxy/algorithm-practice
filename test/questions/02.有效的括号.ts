const isValid = (s: string) => {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (s[i]) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (c !== stack.pop()) return false;
        break;
    }
  }
  // console.log(stack.isEmpty(), '-------');

  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
