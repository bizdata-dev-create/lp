import compareTableFormMobile from '../img/dev/compare_table_form_mobile.webp';
import compareTableFormPC from '../img/dev/compare_table_form_pc.webp';

export default function ServiceIntroductionSection() {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">フォーム営業と他営業<br className="md:hidden" />手法の比較</h3>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            フォーム営業は<strong className="bg-marker-yellow font-bold">決裁者の目に届きやすく、興味の高い人のみ返信する</strong>ため、受注率の高い営業手法です。
          </p>
        </div>

        {/* Comparison Table */}
        <div>
          {/* スマホ用画像（モバイルで表示、PCで非表示） */}
          <img
            src={compareTableFormMobile}
            alt="比較表"
            className="w-full h-auto rounded-lg md:hidden"
            loading="lazy"
            decoding="async"
          />

          {/* PC用画像（モバイルで非表示、PCで表示） */}
          <img
            src={compareTableFormPC}
            alt="比較表"
            className="w-full h-auto rounded-lg hidden md:block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
