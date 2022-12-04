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
