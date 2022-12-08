const part = 'miidim';

checkPart(part);

function checkPart(part) {
    if (part.split('').reverse().join('') === part) return true;
  const combinations = part.split('').map((n,i,a)=> {
    if (i === 0) {
      return a.slice(1);
    }else {
      return [].concat(a.slice(0,i),a.slice(i+1));
    } 
  })
  return combinations.some(n=> [...n].reverse().join('') === n.join(''))
}