import { EditIcon, UserIcon, CheckIcon } from '../components/icons';

export default function USPSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">独自の強み</h3>
          <p className="text-xl text-gray-900">他社との違い</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* USP 1 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-600">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EditIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                一社一社に「刺さる」<br className="md:hidden" />営業文を<strong>作成</strong>します
              </h4>
              <p className="text-gray-900 mb-6">
                営業の反応率を決めるのは、「<strong>相手にとって自分ごとに感じられるか</strong>」。
                これまで同じ商品でも、相手の業種や状況に合わせて言葉を変えることで、返信・成約率が<span className="text-brand-red font-bold text-3xl">180％以上</span>向上しています。
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-gray-900">一社一社に<strong className="bg-marker-yellow font-bold">営業文をカスタマイズ</strong></h5>
              <div className="space-y-2 text-sm text-gray-900">
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  企業サイトの内容（事業内容・強み・代表メッセージなど）
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  IR・有価証券報告書等
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  企業の最新動向（採用・展示会出航など）
                </div>
              </div>
              <p className="text-sm text-gray-900 mt-4">
                AIだけに任せず、すべての文章は人の目で最終確認。<strong>文面のトーンや敬語表現、企業の印象を損なわないか</strong>などをチェックします。
              </p>
            </div>
          </div>

          {/* USP 2 */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-green-600">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                人が最後に確認・送信。<br className="md:hidden" />品質を守ります。
              </h4>
              <p className="text-gray-900 mb-6">
                フォーム営業は、自動化すれば簡単に見えます。しかし実際には、フォーム構造の違いや入力制限、送信エラーなど、
                <strong>自動ツールだけでは対応できないケース</strong>が多く存在します。
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-gray-900"> システムだけでは気づけない"わずかな違い"を人が判断</h5>
              <div className="space-y-2 text-sm text-gray-900">
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  送信フォームの項目が特殊な企業
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  セキュリティが厳しく、自動送信をブロックする企業
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                  住所・電話番号など、独自形式を求めるフォーム
                </div>
              </div>
              <p className="text-sm text-gray-900 mt-4">
                AIや自動ツールでは止まってしまう部分を、<strong className="bg-marker-yellow font-bold">専門スタッフが一件ずつ確認・再送信</strong>。
                これにより、誤送信等による<strong>イメージダウンを防ぎ、品質が守られます</strong>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
