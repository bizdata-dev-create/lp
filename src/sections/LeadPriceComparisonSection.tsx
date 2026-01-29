import priceCrown from '../img/dev/price-crown.png';
import styles from './LeadPriceComparisonSection.module.css';

export default function LeadPriceComparisonSection() {
  return (
    <section className="Price">
      <div className="Price_Head">
        <h2 className="Price-Headline">リード単価比較</h2>
        <p className="Price-Text">※当社の実績データに基づく目安費用</p>
      </div>
      <div className="Price_Container">
        <div className="Price_Inner">
          <div className="Price_Content">
            <div className="Price-Card isRed">
              <div className="Price-Card-Box">
                <div className="Price-Card-Box-Crown">
                  <picture>
                    <source media="(max-width:768px)" srcSet={priceCrown} sizes="100vw" />
                    <img src={priceCrown} alt="" width={36} height="auto" loading="lazy" />
                  </picture>
                </div>
                <p className="Price-Card-Box-Title">お問い合わせ<br/>フォーム営業</p>
              </div>
              <div className={`${styles.triangle} ${styles.isRed}`} aria-hidden />
              <div className="Price-Card_Wrap isRed">
                <p className="Price-Card-Text isRed"><span>~8,000</span>円</p>
              </div>
            </div>

            <div className="Price-Card-Alt isBlack">
              <p className="Price-Card-Head">テレアポ</p>
              <div className={`${styles.triangle} ${styles.isBlack}`} aria-hidden />
              <div className="Price-Card_Wrap">
                <p className="Price-Card-Text"><span>~15,000</span>円</p>
              </div>
            </div>

            <div className="Price-Card-Alt isBlack">
              <p className="Price-Card-Head">インターネット<br/>広告</p>
              <div className={`${styles.triangle} ${styles.isBlack}`} aria-hidden />
              <div className="Price-Card_Wrap">
                <p className="Price-Card-Text"><span>~30,000</span>円</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

