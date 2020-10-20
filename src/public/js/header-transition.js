const header = document.getElementById('header')
const headerClassList = header.classList
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    if (!headerClassList.contains('BackgroundScrollHide')) {
      headerClassList.add('BackgroundScrollHide')
    }
  } else {
    if (headerClassList.contains('BackgroundScrollHide')) {
      headerClassList.remove('BackgroundScrollHide')
    }
  }
})