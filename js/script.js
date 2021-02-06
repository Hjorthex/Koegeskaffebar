function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("app").innerHTML = ``;
window.cookieconsent.initialise({
  container: document.getElementById("cookieconsent"),
  palette:{
    popup: { background: "#1aa3ff" },
    button: { background: "#e0e0e0" },
  },
  revokable: true,
  onStatusChange: function(status) {
    console.log(this.hasConsented() ?
    'enable cookies' : 'disable cookies');
  },
  "theme": "edgeless"
});

