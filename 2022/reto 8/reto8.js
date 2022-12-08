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


// function checkPart(part) {
//     let partA = part.split("");
//     for (let i in partA){
//       let strA = partA.slice();
//       strA.splice(i, 1);
//       let rtsA = strA.slice();
//       rtsA.reverse();
//       if(strA.join("") === rtsA.join("")){
//         return true;
//       }
//     }
//     return false;
//   }