import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || "";

// Sample account data
const accounts = [
  {
    id: "0",
    name: "えに子@銀髪美女生成AI",
    username: "enigmatic_echo0",
    description:
      "幻想的な銀髪美女の画像を生成するAIアカウントです。独特の神秘さと気品溢れる美しさをお楽しみください。",
    images: [
      `${basePath}/silver/1.png?height=400&width=400`,
      `${basePath}/silver/2.png?height=400&width=400`,
      `${basePath}/silver/3.png?height=400&width=400`,
      `${basePath}/silver/4.png?height=400&width=400`,
    ],
  },
  {
    id: "1",
    name: "にー子@金髪美女生成AI",
    username: "enigmatic_echo1",
    description:
      "煌びやかな金髪美女の画像を生成するAIアカウントです。太陽のような活発さや明るさをお楽しみください。",
    images: [
      `${basePath}/gold/1.png?height=400&width=400`,
      `${basePath}/gold/2.png?height=400&width=400`,
      `${basePath}/gold/3.png?height=400&width=400`,
      `${basePath}/gold/4.png?height=400&width=400`,
    ],
  },
  {
    id: "2",
    name: "えー子@赤髪美女生成AI",
    username: "enigmatic_echo2",
    description:
      "情熱的な赤髪美女の画像を生成するAIアカウントです。時に強く、時に優しい色彩をお楽しみください。",
    images: [
      `${basePath}/red/1.png?height=400&width=400`,
      `${basePath}/red/2.png?height=400&width=400`,
      `${basePath}/red/3.png?height=400&width=400`,
      `${basePath}/red/4.png?height=400&width=400`,
    ],
  },
]

export default async function AccountPage({ params }: { params: { id: string } }) {

  const { id } = await params;
  const account = accounts.find((acc) => acc.id === id);

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
          Twitterで『{account.name}』をフォローする →
        </Link>
      </div>
    </div>
  )
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  // 生成したいIDの配列を返す
  return [
    { id: '0'},
    { id: '1' },
    { id: '2' },
  ]
}
