---
title: "Tailwind CSS 4.0の新機能と実践的な使い方"
date: "2024-12-20"
tags: ["Tailwind CSS", "CSS", "フロントエンド"]
---

# Tailwind CSS 4.0 の新機能と実践的な使い方

Tailwind CSS 4.0 がリリースされ、より柔軟で強力なスタイリングが可能になりました。この記事では、新機能と実践的な使い方を紹介します。

## Tailwind CSS 4.0 の新機能

### 1. 新しいエンジン

Oxide Engine という新しい CSS エンジンが導入され、パフォーマンスが大幅に向上しました。

### 2. ネイティブ CSS 機能の活用

```css
@layer utilities {
  .custom-gradient {
    background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  }
}
```

### 3. 改善されたカスタマイゼーション

設定ファイルでより柔軟なカスタマイゼーションが可能になりました。

## 実践的な使い方

### レスポンシブデザイン

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- コンテンツ -->
</div>
```

### ダークモード対応

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- コンテンツ -->
</div>
```

## 最適化のコツ

1. **PurgeCSS**: 未使用のスタイルを削除
2. **JIT Mode**: Just-In-Time コンパイル
3. **カスタムコンポーネント**: 再利用可能なスタイル

## まとめ

Tailwind CSS 4.0 は、開発者体験とパフォーマンスの両面で大きな進歩を遂げています。新機能を活用して、より効率的なスタイリングを実現しましょう。
