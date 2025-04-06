import Link from "next/link"
import { TwitterEmbed } from "@/components/twitter-embed"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="mansion-title">AI 美女画像生成システム Enigmatic Echo Sister's</h1>
        <div className="mansion-card p-6 rounded-lg">
          <h2 className="mansion-heading">当システムについて</h2>
          <p className="text-amber-900">
            Enigmatic Echo Sister'sは、AI を活用した画像生成を行ういくつかの X アカウントのコレクションです。
            それぞれのアカウントは独自のスタイルとテーマを持ち、様々な画像を自動生成して投稿しています。
            最新のAI技術を駆使し、芸術的で魅力的なビジュアルコンテンツを日々提供しています。
          </p>
          <p className="text-amber-900 text-sm">
            ※X の仕様上、ご覧のブラウザで X へログインしていない場合やスマートフォンでご覧の場合はタイムラインが表示されないので、
            気になるアカウントの名前部分をクリックして直接 X のアカウントをご覧ください。
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/0" className="hover:underline text-amber-900">
                セレナ-Selena@銀髪美女生成AI
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">幻想的な銀髪美女の画像を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo0" />
          </div>
        </div>

        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/1" className="hover:underline text-amber-900">
                オーリア-Aurea@金髪美女生成AI
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">煌びやかな金髪美女の画像を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo1" />
          </div>
        </div>

        <div className="mansion-card rounded-lg overflow-hidden">
          <div className="mansion-card-header p-4">
            <h3 className="text-xl font-serif font-semibold mb-2">
              <Link href="/account/2" className="hover:underline text-amber-900">
                カーネ-Carnelian@赤髪美女生成AI
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">情熱的な赤髪美女の画像を生成するアカウント</p>
          </div>
          <div className="h-[500px] overflow-y-auto p-4 bg-amber-50/50">
            <TwitterEmbed username="enigmatic_echo2" />
          </div>
        </div>
      </section>
    </div>
  )
}

