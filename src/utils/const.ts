import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu3 from "@/assets/menu3.png";
import menu4 from "@/assets/menu4.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";
import menu7 from "@/assets/menu7.png";
import menu8 from "@/assets/menu8.png";

// 商品カートのヘッダーと商品リストの定義
interface ProductCartListHeaderModel {
  id: number;
  header: string;
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

interface ProductCartListModel {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
  alt: string;
}
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

// 課題メニュー
interface HomeIndexMenuModel {
  id: string;
  text: string;
}
export const homeIndexHTMLMenu: HomeIndexMenuModel[] = [
  {
    id: "1",
    text: "課題1",
  },
  {
    id: "2",
    text: "課題2",
  },
  {
    id: "3",
    text: "課題3",
  },
  {
    id: "4",
    text: "課題4",
  },
  {
    id: "5",
    text: "課題5",
  },
  {
    id: "6",
    text: "課題6",
  },
];

export const homeIndexVueMenu: HomeIndexMenuModel[] = [
  {
    id: "1",
    text: "課題1",
  },
  {
    id: "2",
    text: "課題2",
  },
  // {
  //   id: "3",
  //   text: "課題3",
  // },
  // {
  //   id: "4",
  //   text: "課題4",
  // },
  // {
  //   id: "5",
  //   text: "課題5",
  // },
  // {
  //   id: "6",
  //   text: "課題6",
  // },
];

// ホーム画面の商品リスト定義
interface HomeMenuListModel {
  id: number;
  path: string;
  name: string;
  price: string;
}
export const homeMenuList: HomeMenuListModel[] = [
  {
    id: 1,
    path: menu1,
    name: "アロマブレンド珈琲豆",
    price: "￥3,350",
  },
  {
    id: 2,
    path: menu2,
    name: "マイルドブレンド珈琲豆",
    price: "￥3,350",
  },
  {
    id: 3,
    path: menu3,
    name: "リッチブレンド珈琲豆",
    price: "￥3,350",
  },
  {
    id: 4,
    path: menu4,
    name: "アメリカン珈琲豆",
    price: "￥3,350",
  },
  {
    id: 5,
    path: menu5,
    name: "クリスタルマウンテン珈琲豆",
    price: "￥7,850",
  },
  {
    id: 6,
    path: menu6,
    name: "カリビアンクイーン珈琲豆",
    price: "￥5,850",
  },
  {
    id: 7,
    path: menu7,
    name: "マンデリン珈琲豆",
    price: "￥4,350",
  },
  {
    id: 8,
    path: menu8,
    name: "ロブスタ珈琲豆",
    price: "￥3,350",
  },
];

// 都道府県リスト定義
interface PrefListModel {
  id: number;
  pref: string;
}
export const prefList: PrefListModel[] = [
  {
    id: 1,
    pref: "北海道",
  },
  {
    id: 2,
    pref: "青森県",
  },
  {
    id: 3,
    pref: "岩手県",
  },
  {
    id: 4,
    pref: "宮城県",
  },
  {
    id: 5,
    pref: "秋田県",
  },
  {
    id: 6,
    pref: "山形県",
  },
  {
    id: 7,
    pref: "福島県",
  },
  {
    id: 8,
    pref: "茨城県",
  },
  {
    id: 9,
    pref: "栃木県",
  },
];

export const placeHolder = {
  address: "例：東京都東京区東京1-10　マンション東京　102号室",
  name: "例：山田 花子",
  email: "例：contact@example.com",
  phone: "例：03-0000-0000",
  inquiry:
    "例：領収書の発行について不明点がありますので電話でのサポートを希望します",
  cardNumber: "例：1234 5678 9012 3456",
};
