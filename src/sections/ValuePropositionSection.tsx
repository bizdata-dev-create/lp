import valuePropositionMobile from '../img/dev/value_proposition_mobile.webp';
import valuePropositionPC from '../img/dev/value_proposition_pc.webp';
import { ArrowRightIcon, ShieldCheckIcon, TimeIcon } from '../components/icons';

export default function ValuePropositionSection() {
  return (
    <section className="py-7 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">提供価値</h3>
          <p className="text-xl text-gray-900">初期準備（営業戦略とリストの取得、文章作成等）とアプローチをお任せ頂くことで、<br></br><strong className="bg-marker-yellow font-bold">御社は業務品質の向上に集中できる</strong>ようになります。</p>
        </div>

        {/* Image Space */}
        <div className="mb-8">
          {/* スマホ用画像（モバイルで表示、PCで非表示） */}
          <img
            src={valuePropositionMobile}
            alt="提供価値 - 導入前後の比較"
            className="w-full h-auto rounded-lg md:hidden"
            loading="lazy"
            decoding="async"
          />

          {/* PC用画像（モバイルで非表示、PCで表示、80%サイズ） */}
          <div className="hidden md:flex md:justify-center">
            <img
              src={valuePropositionPC}
              alt="提供価値 - 導入前後の比較"
              className="w-4/5 h-auto rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-brand-blue-light to-teal-50 rounded-lg p-8 text-center border-4 border-blue-600">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-brand-blue-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <ArrowRightIcon className="w-4 h-4 text-brand-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">初期準備</h4>
            </div>
            <p className="text-gray-900">
              一部上場企業(現プライム上場)にて、BtoBの営業戦略を検討してきたコンサルタントが、御社のターゲット選定をご支援することで、見込みの高い顧客獲得に繋がります
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 text-center border-4 border-green-600">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <ShieldCheckIcon className="w-4 h-4 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">アプローチ</h4>
            </div>
            <p className="text-gray-900">
              一社一社に最適な文章を考え、送信を外部パートナーと連携することで営業文章の質の向上と送信量の確保を両立し、効率的な営業を実施できます
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 text-center border-4 border-pink-600">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <TimeIcon className="w-4 h-4 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">その他（全体）</h4>
            </div>
            <p className="text-gray-900">
              これまでかけてきた初期準備、アポ依頼の時間を、
              業務品質の向上に寄与します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
