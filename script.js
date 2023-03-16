var yards = document.getElementById("yard");
var inches = document.getElementById("inch");

yards.addEventListener("input", function () {
  let ggp = this.value;
  let ffp = ggp * 36;
  inches.value = ffp;
});

inches.addEventListener("input", function () {
  let ghh = this.value;
  let jhh = ghh / 36;
  if (!Number.isInteger(jhh)) {
    jhh = jhh.toFixed(3);
  }
  yards.value = jhh;
});

// YARD BUTTON

function unitbtn() {
  var x = document.getElementById("slidedropef");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  // close inch buttun
  var xvxgg = document.getElementById("slidedropeff");
  xvxgg.style.display = "none";
}

// INCH BUTTON

function unitbtnn() {
  var xvx = document.getElementById("slidedropeff");
  if (xvx.style.display === "none") {
    xvx.style.display = "block";
  } else {
    xvx.style.display = "none";
  }
  // close inch buttun
  var ffe = document.getElementById("slidedropef");
  ffe.style.display = "none";
}
