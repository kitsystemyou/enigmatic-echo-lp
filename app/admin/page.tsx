import Image from "next/image"
import Link from "next/link"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || "";

export default function AdminPage() {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-primary hover:underline">
          ← トップページに戻る
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 space-y-6">
          <div className="mansion-card p-6 rounded-lg text-center">
            <div className="mx-auto w-32 h-32 relative mb-4 border-4 border-amber-200 rounded-full overflow-hidden">
              <Image
                src={`${basePath}/admin.png?height=128&width=128`}
                alt="管理者アイコン"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2 text-primary">シス管</h2>
            <p className="text-muted-foreground">Sister's 開発者</p>
          </div>

          <div className="mansion-card p-6 rounded-lg">
            <Image
              src={`${basePath}/placeholder.svg?height=600&width=400`}
              alt="管理者全身図"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg border border-amber-200"
            />
            <p className="text-sm text-center mt-2 text-muted-foreground">(TBD)</p>
          </div>
        </div>

        <div className="md:w-2/3 mansion-card p-6 rounded-lg">
          <h1 className="text-3xl font-serif font-bold mb-6 text-primary">サイト概要</h1>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="font-serif text-amber-900">Enigmatic Echo Sister'sについて</h2>
            <p className="text-amber-900">
              Enigmatic Echo Sister'sは、最先端のAI技術を活用した画像生成Botのコレクションです。
              3つの異なるテーマを持つアカウントが、それぞれ独自のアルゴリズムとプロンプト設計に基づいて画像を自動生成し、
              定期的にTwitter上で公開しています。
            </p>

            <h2 className="font-serif text-amber-900">システム概要</h2>
            <p className="text-amber-900">
              (WIP)
              各ボットは、OpenAI DALLE-3 をベースに、
              独自のプロンプトジェネレーターとスケジューラーを組み合わせたシステムで動作しています。
              画像生成のパラメータは定期的に更新され、常に新鮮で魅力的なコンテンツを提供します。
            </p>

            <div className="my-6">
              <Image
                src={`${basePath}/placeholder.svg?height=400&width=800`}
                alt="システム概要図"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg border border-amber-200"
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">Enigmatic Echo Sister'sシステム構成図(TBD)</p>
            </div>

            <h2 className="font-serif text-amber-900">開発の目的</h2>
            <p className="text-amber-900">
              このプロジェクトは、AIによる創造性の可能性を探求し、技術と芸術の融合を目指しています。
              また、自動化されたコンテンツ生成の新しい形を模索し、生成AIとソーシャルメディアの関係性について
              研究するための実験的な取り組みでもあります。
            </p>

            <h2 className="font-serif text-amber-900">今後の展望</h2>
            <p className="text-amber-900">
              今後は、生成モデルの多様化や他のメディア（動画、音楽など）との連携も検討しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

