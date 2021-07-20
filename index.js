// tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// scroll to mainTop
let tabs = document.querySelectorAll('[data-bs-toggle="tab"]')
let main = document.querySelector('main')

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    window.scrollTo({
      top: main.offsetTop,
      behavior: 'smooth'
    })
  })
})
// form validation
let forms = document.querySelectorAll(".needs-validation")
forms.forEach(form => {
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add("was-validated")
  },
    false
  )
})