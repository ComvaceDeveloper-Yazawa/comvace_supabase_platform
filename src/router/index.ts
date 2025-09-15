// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeIndex.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/pc/assignment1",
    name: "pc/assignment1",
    component: () => import("@/views/html/pc/Ass1PC.vue"),
    meta: { title: "HTML課題1 PC" },
  },
  {
    path: "/sp/assignment1",
    name: "sp/assignment1",
    component: () => import("@/views/html/sp/Ass1SP.vue"),
    meta: { title: "HTML課題1 SP" },
  },
  {
    path: "/pc/assignment2",
    name: "pc/assignment2",
    component: () => import("@/views/html/pc/Ass2PC.vue"),
    meta: { title: "HTML課題2 PC" },
  },
  {
    path: "/sp/assignment2",
    name: "sp/assignment2",
    component: () => import("@/views/html/sp/Ass2SP.vue"),
    meta: { title: "HTML課題2 SP" },
  },
  {
    path: "/assignment3",
    name: "/assignment3",
    component: () => import("@/views/html/common/Ass3.vue"),
    meta: { title: "HTML課題3" },
  },
  {
    path: "/pc/assignment4",
    name: "pc/assignment4",
    component: () => import("@/views/html/pc/Ass4PC.vue"),
    meta: { title: "HTML課題4 PC" },
  },
  {
    path: "/sp/assignment4",
    name: "sp/assignment4",
    component: () => import("@/views/html/sp/Ass4SP.vue"),
    meta: { title: "HTML課題4 SP" },
  },
  {
    path: "/pc/assignment5",
    name: "pc/assignment5",
    component: () => import("@/views/html/pc/Ass5PC.vue"),
    meta: { title: "HTML課題5 PC" },
  },
  {
    path: "/sp/assignment5",
    name: "sp/assignment5",
    component: () => import("@/views/html/sp/Ass5SP.vue"),
    meta: { title: "HTML課題5 SP" },
  },
  {
    path: "/pc/assignment6",
    name: "pc/assignment6",
    component: () => import("@/views/html/layout/DefaultLayout.vue"),
    meta: { title: "HTML課題6 PC" },
    children: [
      {
        path: "home",
        name: "Ass6home",
        component: () => import("@/views/html/pc/Ass1PC.vue"),
        meta: { title: "HTML課題6 ホーム画面PC" },
      },
      {
        path: "cart",
        name: "Ass6cart",
        component: () => import("@/views/html/pc/Ass2PC.vue"),
        meta: { title: "HTML課題6 カート画面PC" },
      },
      {
        path: "inquiry",
        name: "Ass6inquiry",
        component: () => import("@/views/html/pc/Ass5PC.vue"),
        meta: { title: "HTML課題6 お問い合わせ画面PC" },
      },
    ],
  },
  {
    path: "/sp/assignment6",
    name: "sp/assignment6",
    component: () => import("@/views/html/layout/DefaultLayout.vue"),
    meta: { title: "HTML課題6 SP" },
    children: [
      {
        path: "home",
        name: "Ass6home_sp",
        component: () => import("@/views/html/sp/Ass1SP.vue"),
        meta: { title: "HTML課題6 ホーム画面SP" },
      },
      {
        path: "cart",
        name: "Ass6cart_sp",
        component: () => import("@/views/html/sp/Ass2SP.vue"),
        meta: { title: "HTML課題6 カート画面SP" },
      },
      {
        path: "inquiry",
        name: "Ass6inquiry_sp",
        component: () => import("@/views/html/sp/Ass5SP.vue"),
        meta: { title: "HTML課題6 お問い合わせ画面SP" },
      },
    ],
  },
  // vue curriculum
  {
    path: "/vue/assignment1",
    name: "/vue/assignment1",
    component: () => import("@/views/vue/pc/Ass1.vue"),
    meta: { title: "Vue課題1" },
  },
  {
    path: "/vue/assignment2",
    name: "/vue/assignment2",
    component: () => import("@/views/vue/pc/Ass2.vue"),
    meta: { title: "Vue課題2" },
  },
  // 404（キャッチオール）
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: () => import("@/views/NotFoundView.vue"),
  //   meta: { title: "Not Found" },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Viteのbaseに追従
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // 戻る/進む時は前の位置へ、それ以外はページトップへ
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash };
    return { top: 0 };
  },
});

// ルートごとに <title> を更新（任意）
router.afterEach((to) => {
  const title = (to.meta?.title as string | undefined) ?? "App";
  document.title = title;
});

// 認証ガード（必要なら有効化）
router.beforeEach(async (to) => {
  const auth = useAuthStore();
  // 初期化されていない場合に一度だけ同期（stores/auth.tsのinit()を呼ぶ設計なら不要）
  if (auth.user === undefined || auth.user === null) {
    // ここで auth.init() を呼ぶ設計なら await auth.init() を検討
    // 例）await auth.fetchSession()
  }

  const isAuthed = !!auth.user;
  const requiresAuth = Boolean(to.meta?.requiresAuth);
  const guestOnly = Boolean(to.meta?.guestOnly);

  if (requiresAuth && !isAuthed) {
    // ログインしていなければログインへ（リダイレクト元をクエリに保持）
    return { name: "login", query: { redirect: to.fullPath } };
  }
  if (guestOnly && isAuthed) {
    // ログイン済みユーザーはホーム/ダッシュボードへ
    return { name: "dashboard" };
  }
  // それ以外はそのまま通す
  return true;
});

export default router;
