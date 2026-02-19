import './style.css'

// Custom cursor
const cursor = document.getElementById('cursor')

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
})

document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('expanded'))
  el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'))
})

// Scroll fade-up observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.15 })

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// Navbar hide on scroll down, show on scroll up
let lastScroll = 0
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  const current = window.scrollY

  if (current > lastScroll && current > 100) {
    navbar.style.transform = 'translateY(-100%)'
  } else {
    navbar.style.transform = 'translateY(0)'
  }

  lastScroll = current
})

// Horizontal scroll for projects section (drag to scroll)
const slider = document.getElementById('projects-slider')
let isDown = false
let startX
let scrollLeft

if (slider) {
  slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('cursor-grabbing')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
  })

  slider.addEventListener('mouseleave', () => { isDown = false })
  slider.addEventListener('mouseup', () => { isDown = false })

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 2
    slider.scrollLeft = scrollLeft - walk
  })
}
