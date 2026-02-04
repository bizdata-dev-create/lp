import priceCrown from '../img/dev/price-crown.png';
import styles from './04LeadPriceComparisonSection.module.css';

export default function LeadPriceComparisonSection() {
  return (
    <section className="w-full">
      {/* ヘッダー */}
      <div className="bg-brand-blue text-white text-center py-9 px-4">
        <h2 className="text-[40px] md:text-4xl font-extrabold m-0 leading-none">
          リード単価比較
        </h2>
        <p className="mt-2 opacity-95 text-sm">※当社の実績データに基づく目安費用</p>
      </div>

      {/* カードコンテナ：下余白を抑える */}
      <div className="max-w-[1200px] mx-auto mt-12 pb-8 px-4">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
          {/* お問い合わせフォーム営業 */}
          <div className="w-full max-w-[320px] min-h-[260px] border-[3px] border-brand-blue flex flex-col bg-transparent box-border">
            <div className="bg-brand-blue py-7 px-[18px] text-center relative z-[2]">
              <div className="flex justify-center mb-2">
                <img src={priceCrown} alt="" width={36} height="auto" loading="lazy" className="block" />
              </div>
              <p className="text-[24px] leading-tight font-black text-yellow-400 m-0">
                お問い合わせ<br />フォーム営業
              </p>
            </div>
            <div className={`${styles.triangle} ${styles.isRed}`} aria-hidden />
            <div className="bg-transparent py-9 px-[18px] text-center relative z-[1] flex items-center justify-center min-h-40">
              <p className="text-[56px] text-brand-blue m-0 font-bold">
                <span>~8,000</span>円
              </p>
            </div>
          </div>

          {/* テレアポ */}
          <div className="w-full max-w-[260px] h-[278px] border-[3px] border-[#0f1416] bg-gray-100 flex flex-col box-border">
            <p className="h-[88px] py-0 px-[18px] flex items-center justify-center text-center text-white font-extrabold text-xl bg-[#0f1416] m-0">
              テレアポ
            </p>
            <div className={`${styles.triangle} ${styles.isBlack}`} aria-hidden />
            <div className="bg-gray-100 py-8 px-[18px] min-h-[128px] flex items-center justify-center text-center">
              <p className="text-[34px] text-gray-900 m-0 font-bold">
                <span>~15,000</span>円
              </p>
            </div>
          </div>

          {/* インターネット広告 */}
          <div className="w-full max-w-[260px] h-[278px] border-[3px] border-[#0f1416] bg-gray-100 flex flex-col box-border">
            <p className="h-[88px] py-0 px-[18px] flex items-center justify-center text-center text-white font-extrabold text-xl bg-[#0f1416] m-0">
              インターネット<br />広告
            </p>
            <div className={`${styles.triangle} ${styles.isBlack}`} aria-hidden />
            <div className="bg-gray-100 py-8 px-[18px] min-h-[128px] flex items-center justify-center text-center">
              <p className="text-[34px] text-gray-900 m-0 font-bold">
                <span>~30,000</span>円
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
