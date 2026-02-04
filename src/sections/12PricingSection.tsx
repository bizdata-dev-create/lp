import { CheckCircleIcon } from '../components/icons';

export default function PricingSection() {
  return (
    <section id="anchor04" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">料金プラン</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card - 単発利用 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden max-w-full">
            <div className="bg-brand-blue text-white text-center py-6">
              <h3 className="text-3xl font-bold underline underline-offset-8">単発利用プラン</h3>
            </div>
            <div className="p-6">
              <p className="text-xl text-center text-gray-700 mb-6">
                利用期間、最低送信数の<br />
                縛り一切なし
              </p>

              <div className="text-center mb-6">
                <div className="text-7xl font-extrabold text-brand-blue">17</div>
                <div className="text-base text-gray-500 mt-1">(税別) 円/件</div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg">こんな方にオススメ</div>
              </div>

              <p className="text-base text-gray-600 mb-6">
                お手軽にフォーム営業を試してみたいお客様向けのプランです。<br />
                フォーム営業代行で<span className="font-bold">利用期間や最低送信数の縛りがない</span>のは弊社の単発プランだけです。
              </p>

              <div className="space-y-1.5">
                {[
                  '完全手動のお問い合わせフォーム配信',
                  '営業文添削',
                  '営業リスト作成',
                  '各種媒体からのリスト作成',
                  'URLのクリック計測',
                  '送信先ごとカスタム文章作成',
                  '宛名挿入',
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-[1.4875rem] h-[1.4875rem] md:w-7 md:h-7 text-brand-blue flex-shrink-0" />
                    <div className="text-[0.956rem] md:text-lg text-gray-700 font-bold whitespace-nowrap">
                      {it}
                      {i === 2 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 3 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 4 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+5円/件</span>}
                      {i === 5 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 6 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      </div>
                  </div>
                ))}
              </div>

              <p className="text-base text-gray-600 mt-6 font-bold">※料金発生は送信成功分のみ</p>
            </div>
          </div>

          {/* Card - 定期利用 */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden max-w-full">
            <div className="bg-brand-blue text-white text-center py-6">
              <h3 className="text-3xl font-bold underline underline-offset-8">定期利用プラン</h3>
            </div>
            <div className="p-6">
              <p className="text-xl text-center text-gray-700 mb-6">
                利用期間：3ヶ月<br />
                最低送信数：5,000件/月
              </p>

              <div className="text-center mb-6">
                <div className="text-7xl font-extrabold text-brand-blue">13</div>
                <div className="text-base text-gray-500 mt-1">(税別) 円/件</div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg">こんな方にオススメ</div>
              </div>

              <p className="text-base text-gray-600 mb-6">
                毎月コンスタントにフォーム営業を実施したいお客様向けです。<br />
                <span className="font-bold">業界最安級のお手軽価格</span>で、高品質のフォーム営業を実施することができます。
              </p>

              <div className="space-y-1.5">
                {[
                  '完全手動のお問い合わせフォーム配信',
                  '営業文添削',
                  '営業リスト作成',
                  '各種媒体からのリスト作成',
                  'URLのクリック計測',
                  '送信先ごとカスタム文章作成',
                  '宛名挿入',
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-[1.4875rem] h-[1.4875rem] md:w-7 md:h-7 text-brand-blue flex-shrink-0" />
                    <div className="text-[0.956rem] md:text-lg text-gray-700 font-bold whitespace-nowrap">
                      {it}
                      {i === 2 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 3 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 4 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 5 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      {i === 6 && <span className="ml-3 inline-block bg-brand-blue text-white px-2 rounded">+0円/件</span>}
                      </div>
                  </div>
                ))}
              </div>

              <p className="text-base text-gray-600 mt-6 font-bold">※料金発生は送信成功分のみ</p>
            </div>
          </div>
        </div>

        {/* Options area */}
        {/* <div className="mt-10">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">独自機能オプション</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-4 flex items-start gap-4">
              <img src="/others/Jobs html_files/optionset-icon-plus.png" className="w-12 h-12" alt="" />
              <div>
                <div className="font-bold text-lg">URLのクリック計測オプション <span className="text-sm text-gray-500">通常5円/件</span></div>
                <p className="text-sm text-gray-600">文章内に記載したURLを計測用URLに切り替え、そのクリックを計測するオプションです。</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-start gap-4">
              <img src="/others/Jobs html_files/optionset-icon-plus.png" className="w-12 h-12" alt="" />
              <div>
                <div className="font-bold text-lg">宛名挿入オプション <span className="text-sm text-gray-500">通常5円/件</span></div>
                <p className="text-sm text-gray-600">本文の冒頭に「株式会社〇〇 ご担当者様」など宛名を挿入するオプションです。</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

