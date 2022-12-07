const cube = createCube(3)

function createCube(size) {
    let face = []
    let side = []
    
    for (let i = 0; i < size; i++){
        face.push((' ').repeat(size - i - 1) + ('/\\').repeat(i + 1) + ("_\\").repeat(size));
        side.push((' ').repeat(i) + ('\\/').repeat(size - i) + ('_/').repeat(size));
    }
    let result = [...face, ...side].join("\n");
    
  return result;
}