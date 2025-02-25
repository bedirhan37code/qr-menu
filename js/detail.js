//  Çok sayfalı projelerde eğer pek çok eleman için bir sayfayı render edeceksek bu
//  noktada sayfa içeriği dinamik şekilde render ederiz bunu yaparken her bir
// eleman için url'e bir parametre geçilirr devamında bu parametreye sahip ürün
// verileriyle sayfa renderlanır.

import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

// JS içerisindeki urlsearch params clası parametreleri alıp kullanma noktasında
// bize kolaylık sağlar

const params = new URLSearchParams(window.location.search);

// Urlden gelen id parametresini numbar a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // sayfa yülendiğinde apiya istek at
  const data = await fetchMenu("../db.json");

  // Urlden alınan idye sahip ürünü bul
  const product = data.find((item) => item.id === id);
  if (!product) {
    // Ürün bulunmadıysa not founded içeriğini render et
    renderNotFound(elements.detailContainer);
  } else {
    // Detay verisi bilinen ürün ile arayüzü renderla
    renderDetailPage(product, elements.detailContainer);
  }
});
