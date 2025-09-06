import { defineStore } from "pinia";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null as any }),
  actions: {
    async signIn(email: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      this.user = data.user;
    },
    async signOut() {
      await supabase.auth.signOut();
      this.user = null;
    },
    init() {
      supabase.auth
        .getUser()
        .then(({ data }) => (this.user = data.user ?? null));
      supabase.auth.onAuthStateChange((_e, s) => {
        this.user = s?.user ?? null;
        return;
      });
    },
  },
});
