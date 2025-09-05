import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByTag, getAllTags } from "../../../../lib/posts";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Tech Blog
            </Link>
          </h1>
          <nav className="mt-4 flex gap-6">
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              全記事
            </Link>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-lg px-4 py-2 rounded-full">
              #{decodedTag}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            「{decodedTag}」タグの記事一覧
          </h2>
          <p className="text-gray-600">
            {posts.length}件の記事があります
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((postTag) => (
                    <Link
                      key={postTag}
                      href={`/tag/${encodeURIComponent(postTag)}`}
                      className={`inline-block text-sm px-3 py-1 rounded-full hover:opacity-80 transition-opacity ${
                        postTag === decodedTag 
                          ? 'bg-blue-200 text-blue-900 font-medium'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      #{postTag}
                    </Link>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <time className="text-sm text-gray-500">
                    {post.date}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ナビゲーション */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            全記事一覧に戻る
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500">
            © 2025 Tech Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// 静的生成のためのパス生成
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}
