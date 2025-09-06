// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    // 遅延ロード（コード分割）
    component: () => import("@/views/HomeIndex.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/pc/assignment1",
    name: "pc/assignment1",
    // 遅延ロード（コード分割）
    component: () => import("@/views/AssignmentHTML1.vue"),
    meta: { title: "PC Assignment 1" },
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
  scrollBehavior(to, from, savedPosition) {
    // 戻る/進む時は前の位置へ、それ以外はページトップへ
    console.log(from);
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
