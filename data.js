const namaSaya = "Rahmat";
let Tahun = 2000;

let Golongan = document.getElementById("Golongan");
console.log(Golongan);

function generateBiodata() {
  let GOLONGAN;

  if (Tahun > 1964 && Tahun < 1980) {
    GOLONGAN = "Generasi X";
  } else if (Tahun > 1979 && Tahun < 1995) {
    GOLONGAN = "Generasi Y";
  } else if (Tahun > 1994 && Tahun < 2010) {
    GOLONGAN = "Generasi Z";
  } else if (Tahun > 2009 && Tahun < 2025) {
    GOLONGAN = "Generasi ALPHA";
  } else {
    GOLONGAN = "Tidak Terdeteksi";
  }

  return (Golongan.innerHTML = GOLONGAN);
}
generateBiodata();
