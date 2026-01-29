export default function PriceDeclarationSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue"></div>
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue"></div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <div className="h-1 w-20 bg-brand-blue mx-auto mb-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            料金プラン
          </h2>
          <p className="text-center text-gray-700 mb-3 max-w-3xl mx-auto leading-relaxed">
            私達は、<strong className="bg-marker-yellow font-bold">初期費用、リスト作成、文章作成を全て0円</strong>で請け負います。
          </p>
          <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            リストと文章は<strong className="bg-marker-yellow font-bold">何度でも無料で</strong>作成・修正いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* 初期費用0円 */}
          <div className="bg-brand-blue rounded-xl py-3 md:py-4 px-4 md:px-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-blue-700/20">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-wide">
              初期費用
            </h3>
            <div className="flex items-baseline justify-center gap-1 ml-2">
              <span className="text-8xl md:text-9xl font-bold text-yellow-400 leading-none">0</span>
              <span className="text-2xl md:text-3xl font-semibold text-yellow-300">円</span>
            </div>
          </div>

          {/* リスト作成0円 */}
          <div className="bg-brand-blue rounded-xl py-3 md:py-4 px-4 md:px-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-blue-700/20">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-wide">
              営業リスト作成
            </h3>
            <div className="flex items-baseline justify-center gap-1 ml-2">
              <span className="text-8xl md:text-9xl font-bold text-yellow-400 leading-none">0</span>
              <span className="text-2xl md:text-3xl font-semibold text-yellow-300">円</span>
            </div>
          </div>

          {/* 営業文章作成0円 */}
          <div className="bg-brand-blue rounded-xl py-3 md:py-4 px-4 md:px-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-blue-700/20">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-wide">
              営業文章作成
            </h3>
            <div className="flex items-baseline justify-center gap-1 ml-2">
              <span className="text-8xl md:text-9xl font-bold text-yellow-400 leading-none">0</span>
              <span className="text-2xl md:text-3xl font-semibold text-yellow-300">円</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
