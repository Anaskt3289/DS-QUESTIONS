const hashAsBackspace = (s)=>{
    let result = [];

  for (let ch of str) {
    if (ch === "#") {
      if (result.length > 0) result.pop();
    } else {
      result.push(ch);
    }
  }

  return result.join("");
}