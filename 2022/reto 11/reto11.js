// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5

const part = '01:00:00';
const total = '03:00:00';

getCompleted(part,total);

function getCompleted(part, total) {
    const MCD = (a, b) => {
      let c;
      while (b) {
        c = b;
        b = a % b;
        a = c;
      }
      return a
    }
  
    part = part.split(":");
    total = total.split(":");
  
    let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2];
    let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2];
    const MCDof = MCD(partRed, totalRed);
  
    const partEnd = partRed / MCDof;
    const totalEnd = totalRed / MCDof;
  
    return partEnd + "/" + totalEnd;
  }
