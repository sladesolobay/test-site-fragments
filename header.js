(function () {
  var btn = document.querySelector('.x-menu-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    // add your show/hide logic here if you later add a menu element
  });
})();
