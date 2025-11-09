// giris.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("girisForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini önler

    
    const kullaniciAdi=document.getElementById("kullanici").value;
    const sifre = document.getElementById("sifre").value;
    

    // Örnek kontrol: kullanıcı adı = ogrenci, şifre = 1234
    if(kullaniciAdi === "ogrenci" && sifre === "1234") {
      // Giriş başarılıysa localStorage değişkenini atıyoruz
      localStorage.setItem("OgrenciGirdiMi", "evet");
      localStorage.setItem("KullaniciAdiSoyadi", "Kenan YARAMIŞ"); // Burayı dinamik de yapabiliriz
      alert("Giriş başarılı!");
      window.location.href = "dersler.html"; // Dersler sayfasına yönlendir
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  });
});
