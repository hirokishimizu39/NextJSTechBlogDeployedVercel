---
title: "TypeScript 5.3で始める型安全な開発"
date: "2024-11-15"
tags: ["TypeScript", "JavaScript", "開発効率"]
---

# TypeScript 5.3 で始める型安全な開発

TypeScript 5.3 では多くの新機能が追加され、より安全で効率的な開発が可能になりました。実践的なテクニックを紹介します。

## 新機能ハイライト

### 1. Import Attributes

```typescript
// JSON形式のファイルをインポート
import config from './config.json' with { type: 'json' };
```

### 2. 改善された型推論

```typescript
// より正確な型推論
function processData<T extends Record<string, unknown>>(data: T): T {
  return { ...data, processed: true };
}
```

## 実践的な TypeScript パターン

### 1. ユニオン型の活用

```typescript
type Status = "loading" | "success" | "error";

interface ApiResponse<T> {
  status: Status;
  data?: T;
  error?: string;
}
```

### 2. ジェネリクスの活用

```typescript
function createApiClient<T>() {
  return {
    get: (url: string): Promise<T> => fetch(url).then((r) => r.json()),
    post: (url: string, data: T): Promise<T> =>
      fetch(url, { method: "POST", body: JSON.stringify(data) }).then((r) =>
        r.json()
      ),
  };
}
```

### 3. 条件付き型

```typescript
type ApiResult<T, E = Error> = T extends string
  ? { message: T }
  : { data: T; error?: E };
```

## 開発効率化のコツ

### 1. strict 設定の活用

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### 2. 型ガードの実装

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // ここではvalueはstring型として扱われる
    console.log(value.toUpperCase());
  }
}
```

## まとめ

TypeScript 5.3 の新機能を活用することで、より安全で保守性の高いコードを書けます。型安全性を重視した開発で、バグの少ないアプリケーションを作りましょう。
