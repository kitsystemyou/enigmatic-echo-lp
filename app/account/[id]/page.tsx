import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample account data
const accounts = [
  {
    id: "0",
    name: "Enigmatic Echo 0",
    username: "enigmatic_echo0",
    description:
      "抽象的な風景を生成するAIアカウントです。自然の美しさと抽象的な芸術を融合させた画像を日々生成しています。季節や時間帯によって変化する風景をお楽しみください。",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: "1",
    name: "Enigmatic Echo 1",
    username: "enigmatic_echo1",
    description:
      "ファンタジー世界の生物を生成するAIアカウントです。ドラゴン、ユニコーン、妖精など、想像上の生き物たちを鮮やかに描き出します。毎日新しい生物が誕生します。",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: "2",
    name: "Enigmatic Echo 2",
    username: "enigmatic_echo2",
    description:
      "未来的な都市景観を生成するAIアカウントです。SF映画のような未来都市、宇宙コロニー、サイバーパンクな街並みなど、想像力豊かな都市の姿を描き出します。",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
]

export default function AccountPage({ params }: { params: { id: string } }) {
  const account = accounts.find((acc) => acc.id === params.id)

  if (!account) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-primary hover:underline">
          ← トップページに戻る
        </Link>
      </div>

      <div className="mansion-card p-6 rounded-lg">
        <h1 className="text-3xl font-serif font-bold mb-2 text-primary">{account.name}</h1>
        <p className="text-muted-foreground mb-6">@{account.username}</p>
        <div className="prose dark:prose-invert max-w-none mb-8">
          <h2 className="text-xl font-serif font-semibold text-amber-900">アカウント説明</h2>
          <p className="text-amber-900">{account.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-serif font-semibold text-primary">最近の投稿</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {account.images.map((image, index) => (
            <div key={index} className="mansion-card rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${account.name}の投稿 ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-3 bg-amber-50">
                <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString("ja-JP")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-amber-200">
        <Link
          href={`https://twitter.com/${account.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Twitterで@{account.username}をフォローする →
        </Link>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // 生成したいIDの配列を返す
  return [
    { id: '1' },
    { id: '2' },
    { id: '3'},
  ]
}
