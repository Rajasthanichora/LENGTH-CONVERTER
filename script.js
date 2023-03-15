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
