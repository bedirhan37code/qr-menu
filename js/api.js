const fetchMenu = async () => {
  // Apiya istek at
  const res = await fetch("../db.json");
  // Api dan gelen verileri js nesnesine çevir
  const data = await res.json();

  // Datayı içerisindeki menü dizisinireturn et
  return data.menu;
};

export default fetchMenu;
