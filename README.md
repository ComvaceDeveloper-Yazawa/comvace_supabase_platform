<!-- es lint -->

1. JavaScript の基本チェック（js.configs.recommended）
   構文エラー
   未定義変数の使用（ただし "no-undef": "off" で無効化）
   未使用変数の検出（ただし "no-unused-vars": "off" で無効化）
   その他、ESLint 公式推奨ルール
2. Vue ファイル（src/\*_/_.vue）のチェック
   eslint-plugin-vue による Vue 構文・スタイルチェック
   コンポーネント名や属性の命名規則
   テンプレート内の構文エラー
   不要なタグや属性の検出
   @typescript-eslint/no-unused-vars
   TypeScript コードの未使用変数・未使用引数の警告
   引数名が \_ で始まる場合は警告しない
   "no-undef"・"no-unused-vars" は無効化
3. TypeScript ファイル（src/**/\*.ts, src/**/\*.tsx）のチェック
   @typescript-eslint/eslint-plugin による TypeScript コードの静的解析
   型安全性や構文エラー
   未使用変数・未使用引数の警告（引数名が \_ で始まる場合は警告しない）
   "no-undef"・"no-unused-vars" は無効化
4. 共通
   グローバル変数（console, document など）の未定義エラーは無効化
   未使用変数の警告は TypeScript ルールのみ有効

   npm install --save-dev eslint
   npm install --save-dev @eslint/js
   npm install --save-dev eslint-plugin-vue
   npm install --save-dev @typescript-eslint/eslint-plugin
   npm install --save-dev @typescript-eslint/parser
   npm install --save-dev vue-eslint-parser
   npm install --save-dev jiti
