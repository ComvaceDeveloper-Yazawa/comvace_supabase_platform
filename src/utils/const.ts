import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";

interface ProductCartListHeaderModel {
  id: number;
  header: string;
}

interface ProductCartListModel {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
  alt: string;
}

export const productCartListHeader: ProductCartListHeaderModel[] = [
  {
    id: 1,
    header: "商品",
  },
  {
    id: 2,
    header: "金額",
  },
  {
    id: 3,
    header: "数量",
  },
];

export const productCartList: ProductCartListModel[] = [
  {
    id: 1,
    name: "アロマブレンド珈琲豆",
    price: "¥3350",
    quantity: 1,
    image: menu1,
    alt: "アロマブレンド珈琲豆の写真",
  },
  {
    id: 2,
    name: "マイルドブレンド珈琲豆",
    price: "¥3350",
    quantity: 1,
    image: menu2,
    alt: "マイルドブレンド珈琲豆の写真",
  },
  {
    id: 3,
    name: "カリビアンクイーン珈琲豆",
    price: "¥5850",
    quantity: 1,
    image: menu6,
    alt: "カリビアンクイーン珈琲豆の写真",
  },
  {
    id: 4,
    name: "クリスタルマウンテン珈琲豆",
    price: "¥7850",
    quantity: 1,
    image: menu5,
    alt: "クリスタルマウンテン珈琲豆の写真",
  },
];
