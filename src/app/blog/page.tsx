import Link from "next/link";
import { getAllPosts } from "../../../lib/posts";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function BlogListPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* ヘッダー */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Tech Blog
                </Link>
              </h1>
              <nav className="mt-4 flex gap-6">
                <Link 
                  href="/blog" 
                  className="text-blue-600 dark:text-blue-400 font-medium"
                >
                  全記事
                </Link>
              </nav>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            全記事一覧
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {allPosts.length}件の記事があります
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">記事がまだありません</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {allPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tag/${encodeURIComponent(tag)}`}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
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
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2025 Tech Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
