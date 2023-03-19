// inches.addEventListener("input", function () {
//   let ghh = this.value;
//   let jhh = ghh / 36;
//   if (!Number.isInteger(jhh)) {
//     jhh = jhh.toFixed(3);
//   }
//   yards.value = jhh;
// });

// function myInput() {
// 	option_from = yardsection.value;
// 	option_to = inchsection.value;

// 	if (option_from === "YARD" && option_to === "INCH") {
// 	  input.value = Number(result.value) * 6350;
// 	}
//   }

var yardsection = document.getElementById("yardsection");
var inchsection = document.getElementById("inchsection");
var input = document.getElementById("input");
var result = document.getElementById("result");

// result.addEventListener("keyup", myInput);
input.addEventListener("keyup", myResult);
yardsection.addEventListener("change", myResult);
inchsection.addEventListener("change", myResult);

option_from = yardsection.value;
option_to = inchsection.value;

function myResult() {
  option_from = yardsection.value;
  option_to = inchsection.value;

  // ? meter to ======

  if (option_from === "Meter" && option_to === "Kilometer") {
    result.value = Number(input.value) * 0.001;
  } else if (option_from === "Meter" && option_to === "Centimeter") {
    result.value = Number(input.value) * 100;
  } else if (option_from === "Meter" && option_to === "INCH") {
    result.value = Number(input.value) * 39.37;
  } else if (option_from === "Meter" && option_to === "Millimeter") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "Meter" && option_to === "Micrometer") {
    result.value = Number(input.value) * 1e6;
  } else if (option_from === "Meter" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1e9;
  } else if (option_from === "Meter" && option_to === "Mile") {
    result.value = Number(input.value) * 0.000621371;
  } else if (option_from === "Meter" && option_to === "Foot") {
    result.value = Number(input.value) * 3.28084;
  } else if (option_from === "Meter" && option_to === "Nautical") {
    result.value = Number(input.value) * 0.000539957;
  } else if (option_from === "Meter" && option_to === "Meter") {
    result.value = input.value;
  }

  // ? Yard to ======

  if (option_from === "YARD" && option_to === "Kilometer") {
    result.value = Number(input.value) * 0.0009144;
  } else if (option_from === "YARD" && option_to === "Centimeter") {
    result.value = Number(input.value) * 91.44;
  } else if (option_from === "YARD" && option_to === "INCH") {
    result.value = Number(input.value) * 36;
  } else if (option_from === "YARD" && option_to === "Meter") {
    result.value = Number(input.value) * 0.9144;
  } else if (option_from === "YARD" && option_to === "Millimeter") {
    result.value = Number(input.value) * 914.4;
  } else if (option_from === "YARD" && option_to === "Micrometer") {
    result.value = Number(input.value) * 914400;
  } else if (option_from === "YARD" && option_to === "Nanometer") {
    result.value = Number(input.value) * 914400000;
  } else if (option_from === "YARD" && option_to === "Mile") {
    result.value = Number(input.value) * 0.00056818;
  } else if (option_from === "YARD" && option_to === "Foot") {
    result.value = Number(input.value) * 3;
  } else if (option_from === "YARD" && option_to === "Nautical") {
    result.value = Number(input.value) * 0.0004937;
  } else if (option_from === "YARD" && option_to === "YARD") {
    result.value = input.value;
  }

  // ? INCH to ======

  if (option_from === "INCH" && option_to === "Kilometer") {
    result.value = Number(input.value) / 39370;
  } else if (option_from === "INCH" && option_to === "Centimeter") {
    result.value = Number(input.value) * 2.54;
  } else if (option_from === "INCH" && option_to === "YARD") {
    result.value = Number(input.value) / 36;
  } else if (option_from === "INCH" && option_to === "Meter") {
    result.value = Number(input.value) / 39.37;
  } else if (option_from === "INCH" && option_to === "Millimeter") {
    result.value = Number(input.value) * 25.4;
  } else if (option_from === "INCH" && option_to === "Micrometer") {
    result.value = Number(input.value) * 25400;
  } else if (option_from === "INCH" && option_to === "Nanometer") {
    result.value = Number(input.value) * 2.54e7;
  } else if (option_from === "INCH" && option_to === "Mile") {
    result.value = Number(input.value) / 63360;
  } else if (option_from === "INCH" && option_to === "Foot") {
    result.value = Number(input.value) / 12;
  } else if (option_from === "INCH" && option_to === "Nautical") {
    result.value = Number(input.value) / 72910;
  } else if (option_from === "INCH" && option_to === "INCH") {
    result.value = input.value;
  }

  // ? Centimeter to ======

  if (option_from === "Centimeter" && option_to === "Kilometer") {
    result.value = Number(input.value) / 100000;
  } else if (option_from === "Centimeter" && option_to === "INCH") {
    result.value = Number(input.value) / 2.54;
  } else if (option_from === "Centimeter" && option_to === "YARD") {
    result.value = Number(input.value) / 91.44;
  } else if (option_from === "Centimeter" && option_to === "Meter") {
    result.value = Number(input.value) / 100;
  } else if (option_from === "Centimeter" && option_to === "Millimeter") {
    result.value = Number(input.value) * 10;
  } else if (option_from === "Centimeter" && option_to === "Micrometer") {
    result.value = Number(input.value) * 10000;
  } else if (option_from === "Centimeter" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1e7;
  } else if (option_from === "Centimeter" && option_to === "Mile") {
    result.value = Number(input.value) / 160900;
  } else if (option_from === "Centimeter" && option_to === "Foot") {
    result.value = Number(input.value) / 30.48;
  } else if (option_from === "Centimeter" && option_to === "Nautical") {
    result.value = Number(input.value) / 185200;
  } else if (option_from === "Centimeter" && option_to === "Centimeter") {
    result.value = input.value;
  }

  // ? MILIMETER to ======

  if (option_from === "Millimeter" && option_to === "Kilometer") {
    result.value = Number(input.value) / 1e6;
  } else if (option_from === "Millimeter" && option_to === "INCH") {
    result.value = Number(input.value) / 25.4;
  } else if (option_from === "Millimeter" && option_to === "YARD") {
    result.value = Number(input.value) / 914.4;
  } else if (option_from === "Millimeter" && option_to === "Meter") {
    result.value = Number(input.value) / 1000;
  } else if (option_from === "Millimeter" && option_to === "Micrometer") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "Millimeter" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1e6;
  } else if (option_from === "Millimeter" && option_to === "Mile") {
    result.value = Number(input.value) / 1.609e6;
  } else if (option_from === "Millimeter" && option_to === "Foot") {
    result.value = Number(input.value) / 304.8;
  } else if (option_from === "Millimeter" && option_to === "Nautical") {
    result.value = Number(input.value) / 1.852e6;
  } else if (option_from === "Millimeter" && option_to === "Centimeter") {
    result.value = Number(input.value) / 10;
  } else if (option_from === "Millimeter" && option_to === "Millimeter") {
    result.value = input.value;
  }

  // ? MIcrometer to ======

  if (option_from === "Micrometer" && option_to === "Kilometer") {
    result.value = Number(input.value) / 1e9;
  } else if (option_from === "Micrometer" && option_to === "INCH") {
    result.value = Number(input.value) / 25400;
  } else if (option_from === "Micrometer" && option_to === "YARD") {
    result.value = Number(input.value) / 914400;
  } else if (option_from === "Micrometer" && option_to === "Meter") {
    result.value = Number(input.value) / 1e6;
  } else if (option_from === "Micrometer" && option_to === "Millimeter") {
    result.value = Number(input.value) / 1000;
  } else if (option_from === "Micrometer" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "Micrometer" && option_to === "Mile") {
    result.value = Number(input.value) / 1.609e9;
  } else if (option_from === "Micrometer" && option_to === "Foot") {
    result.value = Number(input.value) / 304800;
  } else if (option_from === "Micrometer" && option_to === "Nautical") {
    result.value = Number(input.value) / 1.852e9;
  } else if (option_from === "Micrometer" && option_to === "Centimeter") {
    result.value = Number(input.value) / 10000;
  } else if (option_from === "Micrometer" && option_to === "Micrometer") {
    result.value = input.value;
  }

  // ? nanometer to ======

  if (option_from === "Nanometer" && option_to === "Kilometer") {
    result.value = Number(input.value) / 1e12;
  } else if (option_from === "Nanometer" && option_to === "INCH") {
    result.value = Number(input.value) / 2.54e7;
  } else if (option_from === "Nanometer" && option_to === "YARD") {
    result.value = Number(input.value) / 9.144e8;
  } else if (option_from === "Nanometer" && option_to === "Meter") {
    result.value = Number(input.value) / 1e9;
  } else if (option_from === "Nanometer" && option_to === "Millimeter") {
    result.value = Number(input.value) / 1e6;
  } else if (option_from === "Nanometer" && option_to === "Micrometer") {
    result.value = Number(input.value) / 1000;
  } else if (option_from === "Nanometer" && option_to === "Mile") {
    result.value = Number(input.value) / 1.609e12;
  } else if (option_from === "Nanometer" && option_to === "Foot") {
    result.value = Number(input.value) / 3.048e8;
  } else if (option_from === "Nanometer" && option_to === "Nautical") {
    result.value = Number(input.value) / 1.852e12;
  } else if (option_from === "Nanometer" && option_to === "Centimeter") {
    result.value = Number(input.value) / 1e7;
  } else if (option_from === "Nanometer" && option_to === "Nanometer") {
    result.value = input.value;
  }

  // ? mile to ======

  if (option_from === "Mile" && option_to === "Kilometer") {
    result.value = Number(input.value) * 1.609;
  } else if (option_from === "Mile" && option_to === "Centimeter") {
    result.value = Number(input.value) * 160900;
  } else if (option_from === "Mile" && option_to === "INCH") {
    result.value = Number(input.value) * 63360;
  } else if (option_from === "Mile" && option_to === "Meter") {
    result.value = Number(input.value) * 1609;
  } else if (option_from === "Mile" && option_to === "Millimeter") {
    result.value = Number(input.value) * 1.609e6;
  } else if (option_from === "Mile" && option_to === "Micrometer") {
    result.value = Number(input.value) * 1.609e9;
  } else if (option_from === "Mile" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1.609e12;
  } else if (option_from === "Mile" && option_to === "YARD") {
    result.value = Number(input.value) * 1760;
  } else if (option_from === "Mile" && option_to === "Foot") {
    result.value = Number(input.value) * 5280;
  } else if (option_from === "Mile" && option_to === "Nautical") {
    result.value = Number(input.value) / 1.151;
  } else if (option_from === "Mile" && option_to === "Mile") {
    result.value = input.value;
  }

  // ? foot to ======

  if (option_from === "Foot" && option_to === "Kilometer") {
    result.value = Number(input.value) / 3281;
  } else if (option_from === "Foot" && option_to === "Centimeter") {
    result.value = Number(input.value) * 30.48;
  } else if (option_from === "Foot" && option_to === "INCH") {
    result.value = Number(input.value) * 12;
  } else if (option_from === "Foot" && option_to === "Meter") {
    result.value = Number(input.value) / 3.281;
  } else if (option_from === "Foot" && option_to === "Millimeter") {
    result.value = Number(input.value) * 304.8;
  } else if (option_from === "Foot" && option_to === "Micrometer") {
    result.value = Number(input.value) * 304800;
  } else if (option_from === "Foot" && option_to === "Nanometer") {
    result.value = Number(input.value) * 3.048e8;
  } else if (option_from === "Foot" && option_to === "YARD") {
    result.value = Number(input.value) / 3;
  } else if (option_from === "Foot" && option_to === "Mile") {
    result.value = Number(input.value) / 5280;
  } else if (option_from === "Foot" && option_to === "Nautical") {
    result.value = Number(input.value) / 6076;
  } else if (option_from === "Foot" && option_to === "Foot") {
    result.value = input.value;
  }

  // ? kilometer to ======

  if (option_from === "Kilometer" && option_to === "Foot") {
    result.value = Number(input.value) * 3281;
  } else if (option_from === "Kilometer" && option_to === "Centimeter") {
    result.value = Number(input.value) * 100000;
  } else if (option_from === "Kilometer" && option_to === "INCH") {
    result.value = Number(input.value) * 39370;
  } else if (option_from === "Kilometer" && option_to === "Meter") {
    result.value = Number(input.value) * 1000;
  } else if (option_from === "Kilometer" && option_to === "Millimeter") {
    result.value = Number(input.value) * 1e6;
  } else if (option_from === "Kilometer" && option_to === "Micrometer") {
    result.value = Number(input.value) * 1e9;
  } else if (option_from === "Kilometer" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1e12;
  } else if (option_from === "Kilometer" && option_to === "YARD") {
    result.value = Number(input.value) * 1094;
  } else if (option_from === "Kilometer" && option_to === "Mile") {
    result.value = Number(input.value) / 1.609;
  } else if (option_from === "Kilometer" && option_to === "Nautical") {
    result.value = Number(input.value) / 1.852;
  } else if (option_from === "Kilometer" && option_to === "Kilometer") {
    result.value = input.value;
  }

  // ? Nautical miles to ======

  if (option_from === "Nautical" && option_to === "Foot") {
    result.value = Number(input.value) * 6076;
  } else if (option_from === "Nautical" && option_to === "Centimeter") {
    result.value = Number(input.value) * 185200;
  } else if (option_from === "Nautical" && option_to === "INCH") {
    result.value = Number(input.value) * 72910;
  } else if (option_from === "Nautical" && option_to === "Meter") {
    result.value = Number(input.value) * 1852;
  } else if (option_from === "Nautical" && option_to === "Millimeter") {
    result.value = Number(input.value) * 1.852e6;
  } else if (option_from === "Nautical" && option_to === "Micrometer") {
    result.value = Number(input.value) * 1.852e9;
  } else if (option_from === "Nautical" && option_to === "Nanometer") {
    result.value = Number(input.value) * 1.852e12;
  } else if (option_from === "Nautical" && option_to === "YARD") {
    result.value = Number(input.value) * 2025;
  } else if (option_from === "Nautical" && option_to === "Mile") {
    result.value = Number(input.value) * 1.151;
  } else if (option_from === "Nautical" && option_to === "Kilometer") {
    result.value = Number(input.value) * 1.852;
  } else if (option_from === "Nautical" && option_to === "Nautical") {
    result.value = input.value;
  }
}
