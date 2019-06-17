/*
  Toggle between adding and removing the "responsive" class to header when
  the user clicks on the icon
*/
function toggleNavigation () {
  var x = document.getElementById('header')
  if (x.className === 'header') {
    x.className += ' responsive'
  } else {
    x.className = 'header'
  }
}
