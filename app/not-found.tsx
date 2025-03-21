import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-serif font-bold mb-4 text-primary">404 - ページが見つかりません</h1>
      <p className="text-muted-foreground mb-8">お探しのページは存在しないか、移動された可能性があります。</p>
      <Link href="/" className="text-primary hover:underline">
        トップページに戻る
      </Link>
    </div>
  )
}

