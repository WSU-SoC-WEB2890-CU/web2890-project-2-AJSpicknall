import * as bootstrap from "bootstrap"

// Bootstrap validation helper
const forms = document.querySelectorAll(".needs-validation")
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add("was-validated")
    },
    false
  )
})

// Collapse nav on link click for mobile
const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
const navCollapse = document.getElementById("mainNav")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapse && navCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navCollapse)?.hide() ||
        new bootstrap.Collapse(navCollapse, { toggle: true }).hide()
    }
  })
})
