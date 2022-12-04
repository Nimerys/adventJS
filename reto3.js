const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
function distributeGifts(packOfGifts, reindeers) {
  reindeersWeight = 0;
  giftWeight = 0;
  for (reindeer of reindeers) {
    wordLenght = reindeer.length;
    reindeersWeight += 2 * wordLenght;
  }
  for (packOfGift of packOfGifts) {
    wordLenght = packOfGift.length;
    giftWeight += wordLenght;
  }
  return parseInt(reindeersWeight / giftWeight);
}
