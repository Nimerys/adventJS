const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */

function wrapping(gifts) {
  return gifts.map((gift) => {
    wordLength = gift.length;

    gift = '*'.repeat(wordLength+ 2) + '\n' + '*' + gift
    gift = gift + '*' + '\n' + '*'.repeat(wordLength + 2)
    return gift
  })
}
