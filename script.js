const accountant = () => {
  const letters = document.getElementById('letters-box').value
  document.getElementById(
    'result',
  ).innerText = `The sentence you entered has ${letters.length} words.`
}
