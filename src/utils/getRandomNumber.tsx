export const getRandomNumber = (): number => {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  console.log('🚀 ~ getRandomNumber ~ randomNumber:', randomNumber)
  return randomNumber
}
