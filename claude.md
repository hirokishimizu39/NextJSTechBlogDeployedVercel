
実装指示書

指示書: Next.js App Router × Markdown 技術ブログ (タグ機能付き最小構成)

⸻

1. 環境
	•	フレームワーク: Next.js 15.2.1 (App Router)
	•	言語: TypeScript
	•	スタイリング: Tailwind CSS
	•	デプロイ: Vercel 無料プラン
	•	記事管理: Markdown ファイル (/content ディレクトリ)

⸻

2. 依存ライブラリ

"dependencies": {
  "next": "15.2.1",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-markdown": "^10.1.0",
  "remark-gfm": "^4.0.1",
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.47",
  "autoprefixer": "^10.4.20",
  "gray-matter": "^4.0.3"
}


⸻

3. ディレクトリ構成

/app
  page.tsx                ← トップページ (最新記事一覧)
/app/blog
  page.tsx                ← 全記事一覧
  [slug]/page.tsx         ← 記事詳細ページ
/app/tag
  [tag]/page.tsx          ← タグごとの記事一覧
/content
  first-post.md           ← 記事 (Markdown)
  second-post.md
/lib
  posts.ts                ← Markdown記事を読み込むユーティリティ


⸻

4. 記事フォーマット (Markdown)

/content/first-post.md

---
title: "My First Post"
date: "2025-09-05"
tags: ["Next.js", "TypeScript"]
---

# Hello World
This is my first tech blog post written in Markdown!

	•	--- で囲んだ部分は frontmatter
	•	title → 記事タイトル
	•	date → 投稿日
	•	tags → 記事タグ（複数可）
	•	本文は Markdown 記法で記述

⸻

5. 実装要件

5.1 /lib/posts.ts
	•	fs を使って /content 内の Markdown を読み込む
	•	gray-matter で frontmatter + 本文をパース
	•	返却データ構造：

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}


	•	提供関数：
	•	getAllPosts() → 全記事を返す
	•	getPostBySlug(slug) → 1記事を返す
	•	getPostsByTag(tag) → 指定タグの記事を返す
	•	getAllTags() → 全タグのユニーク一覧を返す

⸻

5.2 /app/page.tsx (トップページ)
	•	最新記事3件を表示
	•	記事タイトルをクリックすると /blog/[slug] へ遷移
	•	タグを小さなバッジ形式で表示

⸻

5.3 /app/blog/page.tsx (記事一覧ページ)
	•	全記事をタイトル・日付・タグ付きで表示

⸻

5.4 /app/blog/[slug]/page.tsx (記事詳細ページ)
	•	react-markdown + remark-gfm で本文をレンダリング
	•	タイトル・日付・タグを表示

⸻

5.5 /app/tag/[tag]/page.tsx (タグごとの記事一覧)
	•	URL パラメータ [tag] を受け取り、getPostsByTag(tag) で記事一覧を表示
	•	例: /tag/Next.js → 「Next.js タグ付き記事だけ」が表示される

⸻

5.6 スタイリング
	•	Tailwind CSS を設定 (globals.css)
	•	タグは以下のようなバッジ風にする：

<span className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mr-2">
  #Next.js
</span>



⸻

6. デプロイ
	1.	GitHub にプッシュ
	2.	Vercel に接続してデプロイ
	3.	https://your-blog.vercel.app が公開される
	4.	将来的に独自ドメイン (https://hiroki-blog.com) を追加可能

