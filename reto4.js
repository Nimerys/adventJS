/*Solucion menos optima*/
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 1, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes)

function fitsInOneBox(boxes){
  boxesSorted = boxes.sort(function (a,b) {
    if (a.l > b.l && a.w > b.w && a.h > b.h) {
      return 1;
    } else if (a.l < b.l && a.w < b.w && a.h < b.h) {
      return -1;
    }else {
      return 0
    }
  } );
  for (i=0; i<boxesSorted.length;i++){
    if(boxesSorted[i].l <= boxesSorted[i].l || boxesSorted[i].w <= boxesSorted[i].w || boxesSorted[i].h <= boxesSorted[i].h ){
      return false
    }else {
      return true
    }
  }
}

/*Segunda solucion*/
function fitsInOneBox(boxes){
  const boxesSorted = boxes.sort((a,b) => (a.l > b.l && a.w > b.w && a.h > b.h ? 1 : a.l < b.l && a.w < b.w && a.h < b.h ? -1 : 0));
  for (let i=1; i<boxesSorted.length;i++){
    if(boxesSorted[i].l <= boxesSorted[i-1].l || boxesSorted[i].w <= boxesSorted[i-1].w || boxesSorted[i].h <= boxesSorted[i-1].h ){
      return false
    }
  }
  return true
}
