import customerVoice1 from '../img/dev/customer_voice/customer_voice_processed1.webp';
import customerVoice2 from '../img/dev/customer_voice/customer_voice_processed2.webp';
import customerVoice3 from '../img/dev/customer_voice/customer_voice_processed3.webp';
import customerVoice4 from '../img/dev/customer_voice/customer_voice_processed4.webp';

export default function CustomerVoicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h3>
          <p className="text-xl text-gray-900">ご利用いただいたお客様からの評価</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-4 shadow-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="bg-brand-blue text-white px-4 py-1 w-full text-center">
                <h5 className="font-semibold text-lg">製造業 A社様</h5>
                <p className="text-[0.5rem]">従業員数: 50名</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={customerVoice1} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
            </div>
            <blockquote className="text-gray-900 mb-0">
              「CPAがわかりやすく、安心して頼める。課金形態が他の業者は作業ベース、<strong className="bg-marker-yellow font-bold">bizdataさんは結果ベース</strong>なので、結果にコミットしてくれる。
                成果報酬だから安心して任せられるし、実際に費用対効果がはっきり出ている点が他社との決定的な違いでした。」
            </blockquote>
          </div>

          <div className="bg-white p-4 shadow-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="bg-brand-blue text-white px-4 py-1 w-full text-center">
                <h5 className="font-semibold text-lg">IT企業 B社様</h5>
                <p className="text-[0.5rem]">従業員数: 30名</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={customerVoice2} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
            </div>
            <blockquote className="text-gray-900 mb-0">
              「営業戦略自体も詳しく相談に乗っていただけた。<strong className="bg-marker-yellow font-bold">色々な業界や商材のユースケースを提案</strong>していただき、自分たちだけではできなかった新規開拓に成功した。」
            </blockquote>
          </div>

          <div className="bg-white p-4 shadow-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="bg-brand-blue text-white px-4 py-1 w-full text-center">
                <h5 className="font-semibold text-lg">人材サービス C社様</h5>
                <p className="text-[0.5rem]">従業員数: 80名</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={customerVoice3} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
            </div>
            <blockquote className="text-gray-900 mb-0">
              「文章をすごい丁寧に準備してくれた。おかげで、<strong className="bg-marker-yellow font-bold">開始翌週からすぐに反響があり</strong>、案件獲得につながった。
                わざわざフォームから返信頂いたお客さんは基本的に興味を持ってくれる人たちなので商談の質も高く、本格導入につながりやすかった。」
            </blockquote>
          </div>

          <div className="bg-white p-4 shadow-lg border-2 border-gray-200">
            <div className="mb-6">
              <div className="bg-brand-blue text-white px-4 py-1 w-full text-center">
                <h5 className="font-semibold text-lg">建設業 D社様</h5>
                <p className="text-[0.5rem]">従業員数: 120名</p>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img src={customerVoice4} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
            </div>
            <blockquote className="text-gray-900 mb-0">
              一件一件のヒアリングや提案内容が的確で、<strong className="bg-marker-yellow font-bold">単なるアポ代行ではなく伴走型の営業パートナー</strong>という印象です。
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
