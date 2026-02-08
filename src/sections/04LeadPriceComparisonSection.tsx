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

      {/* カードコンテナ：スマホは横バー縦並び、MD以上はカード横並び */}
      <div className="max-w-[1200px] mx-auto mt-12 pb-8 px-4">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 md:justify-center md:items-center">
          {/* お問い合わせフォーム営業 */}
          <div className="w-full md:max-w-[320px] min-h-[80px] md:min-h-[260px] border-[3px] border-brand-blue flex flex-row md:flex-col bg-transparent box-border overflow-hidden">
            <div className="bg-brand-blue py-3 md:py-7 px-3 md:px-[18px] text-center relative z-[2] flex items-center justify-center flex-none w-[165px] md:w-auto min-w-0 shrink-0 md:shrink">
              <div className="flex flex-col md:block items-center">
                <div className="flex justify-center mb-0.5 md:mb-2">
                  <img src={priceCrown} alt="" width={28} height="auto" loading="lazy" className="block md:w-9" />
                </div>
                <p className="text-[1.15em] md:text-[27.6px] leading-tight font-black text-yellow-400 m-0">
                  お問い合わせ<br />フォーム営業
                </p>
              </div>
            </div>
            <div className={`${styles.triangle} ${styles.isRed} hidden md:block`} aria-hidden />
            <div className={`${styles.triangleRight} ${styles.triangleRightBlue} flex md:hidden`} aria-hidden />
            <div className="bg-white md:bg-transparent py-3 md:py-9 px-3 md:px-[18px] text-center relative z-[1] flex items-center justify-center flex-1 min-w-0 md:min-h-40">
              <p className="text-[28.8px] md:text-[53.76px] text-brand-blue m-0 font-bold">
                <span>~8,000</span>円
              </p>
            </div>
          </div>

          {/* テレアポ */}
          <div className="w-full md:max-w-[260px] min-h-[80px] md:h-[278px] border-[3px] border-[#7C95A7] bg-gray-100 flex flex-row md:flex-col box-border overflow-hidden">
            <div className="min-h-[80px] md:h-[88px] py-0 px-3 md:px-[18px] flex items-center justify-center text-center text-gray-900 font-extrabold text-base md:text-xl bg-[#7C95A7] m-0 flex-none w-[165px] md:w-auto shrink-0 md:shrink">
              テレアポ
            </div>
            <div className={`${styles.triangle} ${styles.isBlueGray} hidden md:block`} aria-hidden />
            <div className={`${styles.triangleRight} ${styles.triangleRightBlueGray} flex md:hidden`} aria-hidden />
            <div className="bg-gray-100 py-3 md:py-8 px-3 md:px-[18px] flex-1 flex items-center justify-center text-center min-w-0 md:min-h-[128px]">
              <p className="text-2xl md:text-[34px] text-gray-900 m-0 font-bold">
                <span>~15,000</span>円
              </p>
            </div>
          </div>

          {/* インターネット広告 */}
          <div className="w-full md:max-w-[260px] min-h-[80px] md:h-[278px] border-[3px] border-[#7C95A7] bg-gray-100 flex flex-row md:flex-col box-border overflow-hidden">
            <div className="min-h-[80px] md:h-[88px] py-0 px-3 md:px-[18px] flex items-center justify-center text-center text-gray-900 font-extrabold text-base md:text-xl bg-[#7C95A7] m-0 flex-none w-[165px] md:w-auto shrink-0 md:shrink">
              ネット<br className="hidden md:block" />広告
            </div>
            <div className={`${styles.triangle} ${styles.isBlueGray} hidden md:block`} aria-hidden />
            <div className={`${styles.triangleRight} ${styles.triangleRightBlueGray} flex md:hidden`} aria-hidden />
            <div className="bg-gray-100 py-3 md:py-8 px-3 md:px-[18px] flex-1 flex items-center justify-center text-center min-w-0 md:min-h-[128px]">
              <p className="text-2xl md:text-[34px] text-gray-900 m-0 font-bold">
                <span>~30,000</span>円
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
