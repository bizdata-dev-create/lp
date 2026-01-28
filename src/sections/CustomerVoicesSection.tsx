import { UserIcon } from '../components/icons';

export default function CustomerVoicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h3>
          <p className="text-xl text-gray-900">ご利用いただいたお客様からの評価</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">製造業 A社様</h5>
                <p className="text-sm text-gray-900">従業員数: 50名</p>
              </div>
            </div>
            <blockquote className="text-gray-900 mb-4">
              <strong>「CPAがわかりやすく、安心して頼める。課金形態が他の業者は作業ベース、<strong className="bg-marker-yellow font-bold">bizdataさんは結果ベース</strong>なので、結果にコミットしてくれる。
                成果報酬だから安心して任せられるし、実際に費用対効果がはっきり出ている点が他社との決定的な違いでした。」</strong>
            </blockquote>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-blue-light rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 ">IT企業 B社様</h5>
                <p className="text-sm text-gray-900">従業員数: 30名</p>
              </div>
            </div>
            <blockquote className="text-gray-900 mb-4">
              <strong>「営業戦略自体も詳しく相談に乗っていただけた。<strong className="bg-marker-yellow font-bold">色々な業界や商材のユースケースを提案</strong>していただき、自分たちだけではできなかった新規開拓に成功した。」</strong>
            </blockquote>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">人材サービス C社様</h5>
                <p className="text-sm text-gray-900">従業員数: 80名</p>
              </div>
            </div>
            <blockquote className="text-gray-900 mb-4">
              <strong>「文章をすごい丁寧に準備してくれた。おかげで、<strong className="bg-marker-yellow font-bold">開始翌週からすぐに反響があり</strong>、案件獲得につながった。
                わざわざフォームから返信頂いたお客さんは基本的に興味を持ってくれる人たちなので商談の質も高く、本格導入につながりやすかった。」</strong>
            </blockquote>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <UserIcon className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">建設業 D社様</h5>
                <p className="text-sm text-gray-900">従業員数: 120名</p>
              </div>
            </div>
            <blockquote className="text-gray-900 mb-4">
              <strong>一件一件のヒアリングや提案内容が的確で、<strong className="bg-marker-yellow font-bold">単なるアポ代行ではなく伴走型の営業パートナー</strong>という印象です。
              </strong>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
