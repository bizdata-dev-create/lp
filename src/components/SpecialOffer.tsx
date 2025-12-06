import { CheckCircleIcon } from './icons';
import benefitImage from '../img/dev/special_offer.webp';

interface SpecialOfferProps {
  ctaId: string;
  benefitItems: string[];
}

export default function SpecialOffer({ ctaId, benefitItems }: SpecialOfferProps) {
  return (
    <section className="bg-brand-blue-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="bg-brand-blue text-yellow-300 px-3 py-1 rounded">お問い合わせ特典</span>
          </h3>
          <p className="text-xl text-gray-900 mb-6 text-left">
            お問い合わせいただいた方限定に、<br></br><strong className="bg-marker-yellow font-bold"><strong>「営業戦略の無料相談」と「反応率が3倍以上になる裏ワザ」</strong>をプレゼント！</strong>
          </p>
          <div className="grid md:grid-cols-[55%_45%] gap-8 mb-6">
            {/* 内容一例ボックス - リッチなデザイン（縦サイズは維持） */}
            <div className="text-left bg-blue-50 border-2 border-brand-blue rounded-lg p-4 flex flex-col justify-center shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                内容一例
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-base text-gray-900">
                {benefitItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-start bg-white rounded px-2 py-1 shadow-sm border border-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mr-4">
              <img 
                src={benefitImage}
                alt="特典資料"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <a 
            id={ctaId}
            href="https://timerex.net/s/qingyangliangjp_f186/5354f609/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-2 rounded-lg text-lg font-bold hover:bg-brand-red/90 whitespace-nowrap cursor-pointer inline-block btn-primary"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
