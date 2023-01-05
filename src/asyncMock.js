const products = [
  {
    id: 1,
    name: "Notebook HP",
    price: 120000,
    category: "notebooks",
    img: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/4/348V5LA-1_T1632518517.png",
    stock: 10,
    description:
      "La HP EliteBook 840 está diseñada para su forma de trabajo y le ofrece una nueva experiencia de audio basada en inteligencia artificial. Este equipo profesional delgado y ultraligero que es fácil de transportar se ofrece con una relación pantalla-cuerpo del 85 por ciento y un teclado silencioso y cómodo para trabajar.",
  },
  {
    id: 2,
    name: "Celular Samsung",
    price: 75000,
    category: "celulares",
    img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2840_a_1_.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds",
    stock: 15,
    description:
      "Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
  },
  {
    id: 3,
    name: "Tablet Lenovo",
    price: 60000,
    category: "tablets",
    img: "https://images.fravega.com/f300/bae3680e437fc6f640248370ad086e39.jpg.webp",
    stock: 20,
    description:
      "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
  },
  {
    id: 4,
    name: "Notebook Lenovo",
    price: 110000,
    category: "notebooks",
    img: "https://http2.mlstatic.com/D_NQ_NP_734175-MLA47311793547_082021-O.webp",
    stock: 15,
    description:
      "La IdeaPad 3 rompe el molde de lo que puede hacer una laptop para los usuarios que la utilizan a diario. Gracias hasta los últimos procesadores Intel® Core™ i7 de 10ma generación y a una tarjeta gráfica independiente opcional, esta PC te permite hacer más y disfrutar de una excelente experiencia de entretenimiento.",
  },
  {
    id: 5,
    name: "Celular Motorola",
    price: 85000,
    category: "celulares",
    img: "http://medias.musimundo.com/medias/00537001-145928-145928-01-145928-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3OTM1OHxpbWFnZS9qcGVnfGhhOS9oMjYvMTAzODQxOTMzMjMwMzgvMDA1MzcwMDEtMTQ1OTI4LTE0NTkyOF8wMS0xNDU5MjhfMDEuanBnX3NpemU1MTV8ZWNkODFjYzAzNDQ0NDg4MWM2NjU0ZDE5OTc2MmFlZjJmYzljZGRlNzQ5ODQ0Mjc0MmRkN2E0NmFmZmQ3YjgwMQ",
    stock: 8,
    description:
      "Con la pantalla FHD+ de 6.6 y 90 Hz con tecnología pOLED, tu entretenimiento favorito cobrará vida. Disfrutarás de una visión ultra wide con un contraste infinito, tonos oscuros profundos y colores más brillantes acompañados de imágenes súper nítidas.",
  },
  {
    id: 6,
    name: "Tablet Xiaomi",
    price: 79000,
    category: "tablets",
    img: "https://http2.mlstatic.com/D_NQ_NP_607735-MLA48062564726_102021-O.webp",
    stock: 10,
    description:
      "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category == categoryId));
    }, 2000);
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == productId));
    }, 2000);
  });
};
