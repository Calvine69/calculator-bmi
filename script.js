function calculateBMI() {
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  if (berat === "" || tinggi === "" || berat <= 0 || tinggi <= 0) {
    alert("masukan data yang benar");
    return;
  }

  tinggi = tinggi / 100;

  let bmi = berat / (tinggi * tinggi);
  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    kategori = "Gemuk";
  } else {
    kategori = "Obesitas";
  }

  document.getElementById("bmiValue").innerText = bmi.toFixed(1);
  document.getElementById("bmikategori").innerText = kategori;
}
