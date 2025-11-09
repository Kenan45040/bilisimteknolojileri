// ===============================
//  DERSLER SAYFASI — KİLİT KONTROLÜ ve YÖNLENDİRME
//  Kenan YARAMIŞ | Bilişim Teknolojileri Öğretmeni
// ===============================

// Tüm kilitli butonları seç
const kilitliButonlar = document.querySelectorAll(".btn.kilitli");

// localStorage'dan giriş durumunu al
const girisYapildiMi = localStorage.getItem("OgrenciGirdiMi"); // "evet" veya null

// Eğer kullanıcı giriş yapmadıysa
if (girisYapildiMi !== "evet") {
  kilitliButonlar.forEach(buton => {
    buton.addEventListener("click", () => {
      alert("🔒 Bu bölüme yalnızca giriş yapan kullanıcılar erişebilir.");
    });
  });
} 
// Kullanıcı giriş yaptıysa
else {
  
  kilitliButonlar.forEach(buton => {
    // Kilit görseli ve uyarı metnini kaldır
    buton.classList.remove("kilitli");
    buton.removeAttribute("title");

    // Eğer bu buton bir sayfaya yönlendirme içeriyorsa
    const hedefSayfa = buton.getAttribute("data-link");
    if (hedefSayfa) {
      buton.addEventListener("click", () => {
        window.location.href = hedefSayfa;
      });
    }
  });
}
