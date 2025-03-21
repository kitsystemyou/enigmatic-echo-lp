import Link from "next/link"
import { TwitterEmbed } from "@/components/twitter-embed"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="mansion-title">Enigmatic Echo Sister's</h1>
        <div className="mansion-card p-6 rounded-lg">
          <h2 className="mansion-heading">AI画像生成bot アカウント群について</h2>
          <p className="text-amber-900">
            Enigmatic Echo Sister'sは、AIを活用した画像生成を行う3つのTwitterアカウントのコレクションです。
            それぞれのアカウントは独自のスタイルとテーマを持ち、様々な画像を自動生成して投稿しています。
            最新のAI技術を駆使し、芸術的で魅力的なビジュアルコンテンツを日々提供しています。
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/0" className="hover:underline text-amber-900">
                Enigmatic Echo 0
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">抽象的な風景を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo0" />
          </div>
        </div>

        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/1" className="hover:underline text-amber-900">
                Enigmatic Echo 1
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">ファンタジー世界の生物を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo1" />
          </div>
        </div>

        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/2" className="hover:underline text-amber-900">
                Enigmatic Echo 2
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">未来的な都市景観を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo2" />
          </div>
        </div>
      </section>
    </div>
  )
}

