function handleSubmit(e) {
  e.preventDefault()
  let input = e.target.querySelector('[type="text"]').value
  let ident = new Identicon(input)
  ident.render()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
