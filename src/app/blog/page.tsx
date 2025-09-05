import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";

export default function BlogListPage() {
  const allPosts = getAllPosts();

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
              className="text-blue-600 font-medium"
            >
              全記事
            </Link>
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            全記事一覧
          </h2>
          <p className="text-gray-600">
            {allPosts.length}件の記事があります
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">記事がまだありません</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {allPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tag/${encodeURIComponent(tag)}`}
                        className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        #{tag}
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
        )}
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
