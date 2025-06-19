import { HttpResponse } from "msw";
import { ApiSchemas } from "../../schema";
import { http } from "../http";

const products: ApiSchemas["Product"][] = [
  {
    id: "Product-1",
    name: "iPhone 15 Pro",
    title: "iPhone 15 Pro",
    description:
      "Новейший смартфон Apple с титановым корпусом, камерой 48 МП и процессором A17 Pro. Идеально подходит для профессиональной фотографии и игр.",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-2",
    name: "MacBook Air M2",
    title: "MacBook Air M2",
    description:
      "Ультратонкий ноутбук с чипом M2, 13.6-дюймовым дисплеем Liquid Retina и до 18 часов автономной работы. Идеален для работы и творчества.",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-3",
    name: "Sony WH-1000XM5",
    title: "Sony WH-1000XM5",
    description:
      "Беспроводные наушники с активным шумоподавлением. 30 часов автономной работы, премиальное качество звука и комфортная посадка.",
    price: 349,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-4",
    name: "Nike Air Max 270",
    title: "Nike Air Max 270",
    description:
      "Кроссовки с максимальной амортизацией Air Max. Стильный дизайн, комфортная посадка и отличная поддержка для повседневной носки.",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-5",
    name: "Samsung 4K Smart TV",
    title: "Samsung 4K Smart TV",
    description:
      "55-дюймовый 4K телевизор с технологией QLED, HDR и встроенной системой Smart TV. Потрясающее качество изображения и звука.",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-6",
    name: "Canon EOS R6",
    title: "Canon EOS R6",
    description:
      "Беззеркальная камера с полнокадровым сенсором 20.1 МП, 4K видео и стабилизацией изображения. Профессиональное качество для фотографов.",
    price: 2499,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-7",
    name: "Dyson V15 Detect",
    title: "Dyson V15 Detect",
    description:
      "Беспроводной пылесос с лазерной технологией обнаружения пыли. До 60 минут автономной работы и мощное всасывание для идеальной чистоты.",
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-8",
    name: "Apple Watch Series 9",
    title: "Apple Watch Series 9",
    description:
      "Умные часы с новым чипом S9, улучшенным дисплеем и функциями здоровья. Отслеживание сна, ЭКГ и множество спортивных режимов.",
    price: 399,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-9",
    name: "Bose QuietComfort 45",
    title: "Bose QuietComfort 45",
    description:
      "Беспроводные наушники с премиальным шумоподавлением. 24 часа автономной работы, комфортная посадка и кристально чистый звук.",
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    ],
  },
  {
    id: "Product-10",
    name: "PlayStation 5",
    title: "PlayStation 5",
    description:
      "Новейшая игровая консоль с поддержкой 4K, ray tracing и SSD накопителем. Мгновенная загрузка игр и потрясающая графика нового поколения.",
    price: 499,
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    ],
  },
];

export const productsHandlers = [
  http.get("/products", () => {
    return HttpResponse.json(products);
  }),
];
