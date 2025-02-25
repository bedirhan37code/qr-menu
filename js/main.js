import fetchMenu from "./api.js";
import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Sayfa yüklendiğinde api isteiği at ve gelen veriyi dataya aktar
  const data = await fetchMenu();
  // Card elemanlarını render et
  renderCards(data);

  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      // inputun idsine eriş
      const selected = input.id;
      // Eğer seçili kategori all ise tüm ürünleri render et ama başka bir
      //  kategori eçiliyse bu kategorideki ürünleri render et
      if (selected === "all") {
        renderCards(data);
      } else {
        const filtred = data.filter((item) => item.category == selected);

        renderCards(filtred);
      }
    });
  });
});
