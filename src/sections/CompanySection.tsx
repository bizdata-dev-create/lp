import company1Image from '../img/dev/company1.webp';
import ryoImage from '../img/dev/ryo.webp';
import { GraduationCapIcon, BarChartIcon } from '../components/icons';

export default function CompanySection() {
  return (
    <section id="company" className="py-20 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <h3 className="text-3xl font-bold text-white mb-0.5">会社紹介</h3>
          <p className="text-white mb-6 leading-relaxed mb-8"></p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-white mb-6 leading-relaxed mb-8">
              弊社合同会社bizdataは、<strong>一部上場コンサルティング会社からスピンアウト</strong>し設立されました。
              戦略立案から実行支援まで、これまでに<strong>20社以上の営業・データ分析プロジェクト</strong>をご支援してきました。
            </p>
            <div className="space-y-6">
              <div className="mb-8">
                <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">① コンサル品質の「戦略 × 実行」アプローチ</h4>
                <p className="text-white">
                  私たちは、単なる代行業ではなく、<strong>"成果が出る仕組み"を設計するチーム</strong>として活動しています。
                  戦略コンサルタントとして培った分析・検証・改善力により、「確実に結果が出る営業プロセス」をお客様と共に構築します。
                </p>
              </div>

              <div className="mb-8">
                <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">② 現場から生まれた「本当に使えるノウハウ」</h4>
                <p className="text-white">
                  私たちが提供している仕組みや文章テンプレートは、実際に<strong>数多くのプロジェクトの中で、成果が出たものだけを体系化</strong>したノウハウです。
                  机上の理論ではなく、現場で"反応が取れた方法"だけをお伝えします。
                </p>
              </div>

              <div className="mb-8">
                <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">③ モットー：「顧客に本質的な価値を届ける」</h4>
                <p className="text-white">
                  「代行して終わり」ではなく、
                  <strong>「お客様が」自社の営業を自信を持って回せる状態</strong>をゴールとしています。
                  だからこそ、私たちは常に、
                  <strong>"本質的な価値を提供できているか？"</strong>を問いながら、プロジェクトを進めています。
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={company1Image}
              alt="コンサル出身の実行チーム"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Team Introduction */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">成果を追及し続けるチーム<br className="md:hidden" />でご支援します</h4>
          </div>

          <div className="grid md:grid-cols-[70%_30%] gap-8 items-start">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">代表：<br className="md:hidden" />梁清揚（りょう せいよう）</h5>
                <p className="text-sm text-gray-900">
                  コンサルティング会社での営業・マーケティング戦略の立案・実行支援を経て、企業の営業活動を効率化するプロジェクトを複数リード。
                  これまでに<strong>20社以上の企業で、営業・事業戦略立案・実行支援</strong>を支援。
                </p>
              </div>

              {/* スマホ版：写真を代表紹介とチーム構成の間に配置 */}
              <div className="mb-6 md:hidden">
                <div className="w-48 h-64 rounded-lg overflow-hidden border border-gray-200 mx-auto">
                  <img
                    src={ryoImage}
                    alt="社長写真"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <GraduationCapIcon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900">チーム構成</h6>
                    <p className="text-sm text-gray-900"><strong>東京大学・東京工業大学出身、数学オリンピックファイナリスト、大手コンサルティングファーム出身者</strong>など</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChartIcon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900">弊社の強み</h6>
                    <p className="text-sm text-gray-900"><strong>数字で物事を考える力と、課題の本質をつかむ洞察力</strong>。データをもとに最適な戦略とオペレーションを設計します。</p>
                  </div>
                </div>
              </div>
            </div>
            {/* PC版：写真を右側に配置 */}
            <div className="hidden md:flex md:justify-start">
              <div className="w-48 h-64 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={ryoImage}
                  alt="社長写真"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
