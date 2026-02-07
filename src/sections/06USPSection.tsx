import { EditIcon, UserIcon, CheckCircleIcon } from '../components/icons';
import uspImage from '../img/dev/usp.webp';

export default function USPSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  企業サイトの内容（事業内容・強み・代表メッセージなど）
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  IR・有価証券報告書等
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
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
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  送信フォームの項目が特殊な企業
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                  セキュリティが厳しく、自動送信をブロックする企業
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
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

        {/* 他社にはない強み：「人の手で丁寧に対応」ブロック構成 */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue inline-block bg-marker-yellow px-4 py-2 rounded">
              「他社にはない強み：<span className="text-brand-blue">人の手で丁寧に対応</span>」
            </h3>
            <div className="flex justify-center gap-4 mt-4">
              {/* <span className="text-2xl text-brand-blue">﹁</span> */}
              <div className="flex gap-5 items-center px-0">
                <span className="text-brand-blue">▼</span>
                <span className="text-brand-blue">▼</span>
                <span className="text-brand-blue">▼</span>
              </div>
              {/* <span className="text-2xl text-brand-blue">﹂</span> */}
            </div>
          </div>

          <div className="flex flex-col gap-5 max-w-6xl md:max-w-[57.6rem] mx-auto">
            {/* ブロック① 他社にはない強み①：左にbrand-blueラベル → 淡い青1行題名 → 本文 */}
            <div>
              <div className="flex">
                <div className="bg-brand-blue text-white px-4 py-1 font-bold flex items-center gap-2">
                  他社にはない強み①
                </div>
              </div>
              <div className="border border-brand-blue">
                <div className="bg-blue-50 px-4 py-1">
                  <h4 className="font-bold text-gray-900 text-center">一社一社に刺さる営業文を作成します</h4>
                </div>
                <div className="bg-white border-t border-brand-blue p-4">
                  <div className="space-y-2 text-sm text-gray-900">
                  {/* 営業の反応率を決めるのは、「<strong>相手にとって自分ごとに感じられるか</strong>」。 */}
                  {/* 同じ商品でも、相手の業種や状況に合わせて言葉を変えることで、返信・成約率が<span className="text-brand-red font-bold">180％以上</span>向上します。 */}
                  <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      同じ商品でも、相手の業種や状況に合わせて言葉を変えることで、返信率が<span className="text-brand-red font-bold">180％以上</span>向上します。
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      一社一社に刺さる営業文を、会社の情報をAIが収集し、自然な文章に反映させて作成します。
                    </div>
                    
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      文面のトーンや敬語表現、企業の印象を損なわないかなどを人の目で最終確認し,確実に届けます。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 中央：PCは左右に吹き出し、スマホは上下に吹き出し */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch flex-nowrap gap-4 py-2 min-h-0 md:min-h-[200px] max-w-6xl mx-auto">
              {/* 上/左の吹き出し：スマホでは上・しっぽ下向き、PCでは左・しっぽ右向き */}
              <div className="w-full md:flex-1 flex items-stretch justify-center md:justify-end min-w-0 md:pr-2 order-1">
                <div className="relative max-w-[220px] w-full flex self-stretch">
                  <p className="bg-white rounded-2xl px-4 py-3 shadow-md border-2 border-black text-sm text-gray-800 w-full min-h-full flex items-center justify-center">
                    Bizdataの社員が一社一社丁寧に対応。
                  </p>
                  {/* スマホ用：しっぽ下向き（画像を指す） */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-black md:hidden" aria-hidden />
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white md:hidden" aria-hidden />
                  {/* PC用：しっぽ右向き（枠は2pxで吹き出しの外枠と同太さ） */}
                  <span className="hidden md:block absolute right-[2px] top-1/2 translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-black" aria-hidden />
                  <span className="hidden md:block absolute right-[4px] top-1/2 translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-white" aria-hidden />
                </div>
              </div>
              <img
                src={uspImage}
                alt="人の手で丁寧に対応"
                className="w-64 h-auto object-contain flex-shrink-0 order-2"
                loading="lazy"
                decoding="async"
              />
              {/* 下/右の吹き出し：スマホでは下・しっぽ上向き、PCでは右・しっぽ左向き */}
              <div className="w-full md:flex-1 flex items-stretch justify-center md:justify-start min-w-0 md:pl-2 order-3">
                <div className="relative max-w-[220px] w-full flex self-stretch">
                  <p className="bg-white rounded-2xl px-4 py-3 shadow-md border-2 border-black text-sm text-gray-800 text-center md:text-right w-full min-h-full flex items-center justify-center md:justify-end">
                    システムだけでは気づけない違いを人が判断
                  </p>
                  {/* スマホ用：しっぽ上向き（画像を指す） */}
                  <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-black md:hidden" aria-hidden />
                  <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-white md:hidden" aria-hidden />
                  {/* PC用：しっぽ左向き（枠は2pxで吹き出しの外枠と同太さ） */}
                  <span className="hidden md:block absolute left-[2px] top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-black" aria-hidden />
                  <span className="hidden md:block absolute left-[4px] top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[12px] border-t-transparent border-b-transparent border-r-white" aria-hidden />
                </div>
              </div>
            </div>

            {/* ブロック② 他社にはない強み②：右にbrand-blueラベル → 淡い青1行題名 → 本文 */}
            <div>
              <div className="flex justify-end">
                <div className="bg-brand-blue text-white px-4 py-1 font-bold flex items-center gap-2">
                  他社にはない強み②
                </div>
              </div>
              <div className="border border-brand-blue">
                <div className="bg-blue-50 px-4 py-1">
                  <h4 className="font-bold text-gray-900 text-center">人が最後に確認・送信。品質を守ります。</h4>
                </div>
                <div className="bg-white border-t border-brand-blue p-4">
                  <div className="space-y-2 text-sm text-gray-900">
                  {/* フォーム営業は、自動化すれば簡単に見えます。しかし実際には、フォーム構造の違いや入力制限、送信エラーなど、
                  <strong>自動ツールだけでは対応できないケース</strong>が多く存在します。 */}
                  <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      フォーム構造の違いや入力制限、送信エラーなど、<strong>自動ツールだけでは対応できないケース</strong>が多く存在します。
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      上記のシステムだけでは対応できないケースに専門スタッフが対応します。
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                      住所・電話番号など、独自形式を求めるフォームに入力ミスがないように最後まで丁寧に対応します。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
