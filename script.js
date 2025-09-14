function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    alert("Harap masukkan data dengan benar!");
    return;
  }

  height = height / 100;

  let bmi = weight / (height * height);
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
