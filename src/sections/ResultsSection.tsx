export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">bizdata式フォーム営業<br className="md:hidden" />の圧倒的な実績</h3>
          <p className="text-xl text-gray-900">数々の企業で確実な成果を実現</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Result 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
            <div className="text-center mb-6">
              <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">BPO業</div>
              <div className="text-5xl font-bold text-brand-red mb-2">+418%</div>
              <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                リード獲得数
              </div>
            </div>
            <blockquote className="text-gray-900 italic mb-6">
              <strong>「見逃していた層からも反応があり、営業活動の勢いがつきました。」</strong>
            </blockquote>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                <p className="text-sm text-gray-900">テレアポ中心の新規開拓で、在宅勤務の広がりにより電話がつながらず、メール営業も反応が少なくリード獲得数が減少。</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                <p className="text-sm text-gray-900">フォーム送信代行により企業の公式サイト経由で確実に担当者へ情報を届け、<strong>リード獲得数418％向上</strong>を実現。</p>
              </div>
            </div>
          </div>

          {/* Result 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
            <div className="text-center mb-6">
              <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">システム開発業</div>
              <div className="text-5xl font-bold text-brand-red mb-2">+210%</div>
              <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                新規受注数
              </div>
            </div>
            <blockquote className="text-gray-900 italic mb-6">
              <strong>「営業リソースを削減しながら、質の高い商談を増やすことができた。」</strong>
            </blockquote>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                <p className="text-sm text-gray-900">紹介や展示会頼みで新規案件獲得に波があり、テレアポでは時間と人件費がかかり費用対効果が合わない状況。</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                <p className="text-sm text-gray-900">ターゲット業種に特化した送信リストを構築し、確度の高い商談が増加。<strong>新規受注数約210%増加</strong>を達成。</p>
              </div>
            </div>
          </div>

          {/* Result 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
            <div className="text-center mb-6">
              <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">WEB制作業</div>
              <div className="text-5xl font-bold text-brand-red mb-2">+135%</div>
              <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                新規顧客売上
              </div>
            </div>
            <blockquote className="text-gray-900 italic mb-6">
              <strong>「紹介だけに頼らない"攻めの営業"ができるようになりました。」</strong>
            </blockquote>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                <p className="text-sm text-gray-900">既存顧客の紹介頼みで売上が頭打ち。フォーム営業を試したがノウハウがなく結果が出せない状況。</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                <p className="text-sm text-gray-900">営業リスト作成から送信文章作成まで全て代行し、狙った業界に効率よくアプローチ。<strong>月間売上約135％向上</strong>。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
