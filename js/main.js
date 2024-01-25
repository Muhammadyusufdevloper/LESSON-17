window.addEventListener("scroll", function () {
    shrink();
  });
  
  let header = document.getElementById("header");
  
  function shrink() {
    if (scrollY >0) {
      header.classList.add("header-shrink");
    } else {
          header.classList.remove("header-shrink");
      }
  };
  function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
  
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0
    ) {
      backtop.classList.add("backtop-show");
    } else {
      backtop.classList.remove("backtop-show");
    }
  }

  let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./image/dark.png";
  } else {
    this.firstElementChild.src = "./image/light.svg";
  }
  document.body.classList.toggle("light");
});