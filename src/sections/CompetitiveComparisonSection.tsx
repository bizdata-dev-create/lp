import compareTableMobile from '../img/dev/compare_table_mobile.webp';
import compareTablePC from '../img/dev/compare_table_pc.webp';

export default function CompetitiveComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">他サービスと比較</h3>
          <p className="text-xl text-gray-900">他社と比べても<strong className="bg-marker-yellow font-bold">費用の割に営業のクオリティ・スピードともに高い</strong>ところが強みとなっています。</p>
        </div>

        {/* Table Space for Future Use */}
        <div className="bg-white rounded-lg p-2 text-center">
          <div className="mt-2">
            {/* スマホ用画像（モバイルで表示、タブレット以上で非表示） */}
            <img
              src={compareTableMobile}
              alt="詳細比較表"
              className="w-full h-auto rounded-lg md:hidden"
              loading="lazy"
              decoding="async"
            />

            {/* PC用画像（タブレット以上で表示、モバイルで非表示） */}
            <img
              src={compareTablePC}
              alt="詳細比較表"
              className="w-full h-auto rounded-lg hidden md:block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
