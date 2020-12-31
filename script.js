$(document).ready(function () {
    $("body").css("display", "none");
    $("body").fadeIn(900);
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    console.log(randomR + "," + randomG + "," + randomB);
  
    $("html").css("--r", randomR);
    $("html").css("--g", randomG);
    $("html").css("--b", randomB);
    // $("body").css(
    //   "background",
    //   "rgb(" + randomR + ", " + randomG + ", " + randomB + ")"
    // );
    $("#color").append("rgb(" + randomR + ", " + randomG + ", " + randomB + ")");
  
    if (randomB > 150 && randomG > 150 && randomR > 150) {
      $(".container").css("color", "#000");
      $("button").css("color", "#000");
      $("button").css("border-color", "#000");
    }
  
    $("#getHex").click(function () {
      r = randomR.toString(16);
      g = randomG.toString(16);
      b = randomB.toString(16);
  
      if (r.length == 1) r = "0" + r;
      if (g.length == 1) g = "0" + g;
      if (b.length == 1) b = "0" + b;
  
      swal("#" + r + g + b);
    });
  
    $("#getHSL").click(function RGBToHSL() {
      // Make r, g, and b fractions of 1
      r = randomR / 255;
      g = randomG / 255;
      b = randomB / 255;
  
      // Find greatest and smallest channel values
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
      if (delta == 0) h = 0;
      // Red is max
      else if (cmax == r) h = ((g - b) / delta) % 6;
      // Green is max
      else if (cmax == g) h = (b - r) / delta + 2;
      // Blue is max
      else h = (r - g) / delta + 4;
  
      h = Math.round(h * 60);
  
      // Make negative hues positive behind 360°
      if (h < 0) h += 360;
      l = (cmax + cmin) / 2;
  
      // Calculate saturation
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
      // Multiply l and s by 100
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
  
      swal("hsl(" + h + "," + s + "%," + l + "%)");
    });
  });
  
  function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    swal("hsl(" + h + "," + s + "%," + l + "%)");
  }
  