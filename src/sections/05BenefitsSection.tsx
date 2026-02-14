import benefit1Image from '../img/dev/feature/feature1_0127.webp';
import benefit2Image from '../img/dev/feature/feature2_0127.webp';
import benefit3Image from '../img/dev/feature/feature3_0127.webp';
import benefit4Image from '../img/dev/feature/feature4_0127.webp';
import { CheckIcon } from '../components/icons';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="Price_Head mb-12">
        <h2 className="Price-Headline">4つの特徴</h2>
        <p className="Price-Text">なぜ選ばれるのか</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-16">
          {/* Feature 1 - 初期費用ゼロ */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-brand-blue p-4">
            <div className="order-2 md:order-1">
              <img
                src={benefit1Image}
                alt="初期費用0円の成果報酬制"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                特徴①
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                <strong>初期費用ゼロ</strong>。成果報酬<br className="md:hidden" />だけの安心料金
              </h4>
              <p className="text-gray-900 mb-6 leading-relaxed">
                一般的な営業代行や広告のように、<strong className="bg-marker-yellow font-bold">初期費用として数十万円の費用を払う必要は「一切」ありません</strong>。
                フォーム営業では、「送信が行われた分だけ」のシンプルな成果報酬制です。
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                  <div className="text-2xl font-bold text-brand-red">0円</div>
                  <div className="text-sm text-gray-900 font-bold">初期費用</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                  <div className="text-2xl font-bold text-brand-red">0円</div>
                  <div className="text-sm text-gray-900 font-bold">リスト作成</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                  <div className="text-2xl font-bold text-brand-red">0円</div>
                  <div className="text-sm text-gray-900 font-bold">文章作成<br />（何度でも）</div>
                </div>
              </div>

              <p className="text-gray-900">
                営業に必要な準備はすべて弊社にお任せください。
                お客様にご負担いただくのは、<strong>送信完了分の料金（1通あたり13円）のみ</strong>。
              </p>
            </div>
          </div>

          {/* Feature 2 - 量・質ともに圧倒的な営業リスト */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
            <div>
              <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                特徴②
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                量・質ともに圧倒的な<br className="md:hidden" />営業リストを保有
              </h4>
              <p className="text-gray-900 mb-6 leading-relaxed">
                営業の成果を決める最大の要因は、「<strong>誰に届けるか</strong>」。
                どれだけ良い文章を書いても、送る相手がズレていれば<strong>結果は出ません</strong>。
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-4"><strong className="bg-marker-yellow font-bold"><span className="text-brand-red font-bold text-xl">200万件</span>以上の企業リストを独自に保有</strong></h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">業種・業界別</h6>
                    <p className="text-gray-900">IT、製造、建設、飲食、美容、人材など</p>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">企業規模別</h6>
                    <p className="text-gray-900">従業員数・資本金・エリア</p>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">ニーズ別</h6>
                    <p className="text-gray-900">採用中・店舗拡大中・検討中など</p>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">特殊条件</h6>
                    <p className="text-gray-900">新規法人登記企業・広告出稿企業など</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={benefit2Image}
                alt="200万件以上の企業リスト"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* リストアップできる媒体例セクション - 一時非表示
          <div className="w-full">
            <div className="bg-brand-blue-light p-8 rounded-lg border-2 border-brand-blue">
              <h5 className="font-semibold text-gray-900 mb-6 text-center text-xl">リストアップできる媒体例<br /><span className="text-sm">（ご希望の媒体を付け加え可能）</span></h5>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">採用媒体</span></h6>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-900">
                    <div>リクナビ</div>
                    <div>マイナビ</div>
                    <div>リクナビNEXT</div>
                    <div>マイナビ転職</div>
                    <div>エン転職</div>
                    <div>DODA</div>
                    <div>ビズリーチ</div>
                    <div>Wantedly</div>
                    <div>Green</div>
                    <div>type</div>
                    <div>Amateras</div>
                    <div>エンゲージ</div>
                    <div>バイトル</div>
                    <div>タウンワーク</div>
                    <div>フロムエー</div>
                    <div>イーアイデム</div>
                    <div>Indeed</div>
                  </div>
                </div>

                <div>
                  <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">営業・PR系媒体</span></h6>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-900">
                    <div>BOXIL</div>
                    <div>LISKUL</div>
                    <div>アイミツ</div>
                    <div>メディアレーダー</div>
                    <div>比較biz</div>
                    <div>PR TIMES</div>
                    <div>@Press</div>
                    <div>valuepress</div>
                  </div>
                </div>

                <div>
                  <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">業界特化媒体</span></h6>
                  <div className="space-y-3 text-sm text-gray-900">
                    <div>
                      <strong>①美容系媒体</strong><br />
                      ホットペッパービューティー、ヘアログ
                    </div>
                    <div>
                      <strong>②飲食系媒体</strong><br />
                      ぐるなび、食べログ、ホットペッパーグルメ
                    </div>
                    <div>
                      <strong>③EC系媒体</strong><br />
                      Shopify、Base、EC-CUBE、メイクショップ、カラーミーショップ、futureshop
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Feature 3 - 特典としてリストを無料提供 */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
            <div className="order-2 md:order-1">
              <img
                src={benefit3Image}
                alt="多様な営業手法への対応"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                特徴③
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                特典としてリストを<br className="md:hidden" /><strong className="bg-marker-yellow font-bold">無料提供</strong>
              </h4>
              <p className="text-gray-900 mb-6 leading-relaxed">
                例えば自社でテレアポ営業をしたい場合、DMやFAXを送付したい場合など、
                <strong>お問合せフォーム送信以外の様々な用途</strong>でも営業リストを作成したい場合があり、あり、その際にご利用頂けます。
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-4"> <strong className="bg-marker-yellow font-bold">完全無料＆取得件数は無制限</strong>でリスト提供</h5>
                <p className="text-gray-900 text-sm mb-4">
                  弊社のお問い合わせフォーム送信代行をご利用いただいているお客様であれば、完全無料＆取得件数は無制限で「URL、電話番号、FAX番号、住所などの情報を削除していない」営業リストを取得できますので、
                  お問い合わせフォーム営業以外の様々な営業手段で弊社のリストをご利用いただけます。
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 - 営業戦略の見直し */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
            <div>
              <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                特徴④
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                <strong>営業戦略の見直し</strong>まで、<br className="md:hidden" />一緒に考えます
              </h4>
              <p className="text-gray-900 mb-6 leading-relaxed">
                どんなに良い営業手法を使っても、「戦略の方向性」が間違っていれば<strong>成果は出ません</strong>。
                単に送信だけでなく、<strong className="bg-marker-yellow font-bold">「誰に・何を・どう伝えるべきか」という営業戦略の見直し</strong>までサポートします。
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-4"> ご契約前でも、営業戦略のご相談を<strong>無料で実施</strong></h5>
                <div className="space-y-2 text-sm text-gray-900">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    「今の営業のやり方でいいのか分からない」
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    「どの業界を狙うのがいいか見直したい」
                  </div>
                </div>
              </div>

              <p className="text-gray-900 mb-4">
                上場企業から中小企業、ベンチャー企業に至るまで、<strong>数多くの企業の営業を支援</strong>してきたプロのコンサル出身メンバーが、
                具体的な改善ポイントをわかりやすく整理します。
              </p>

              <p className="text-xs text-gray-900">
                ※各種データ・リサーチを踏まえた戦略設計は別途有償で承ります。業界・競合分析、社内データを基に確実な営業戦略を設計いたします。
              </p>
            </div>
            <div>
              <img
                src={benefit4Image}
                alt="営業戦略コンサルティング"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
