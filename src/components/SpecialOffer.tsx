import { CheckCircleIcon } from './icons';
import benefitImage from '../img/benfit.jpg';

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
            <span className="text-orange-500">🎁 お問い合わせ特典</span>
          </h3>
          <p className="text-xl text-gray-900 mb-6 text-left">
            問い合わせいただいた方に、<br></br><strong className="bg-marker-yellow font-bold"><strong className="text-brand-red text-[1.3em] font-bold">無料で</strong><strong>「営業戦略の相談」と「反応率が2倍以上になる裏ワザ」</strong>をプレゼント！</strong>
          </p>
          <div className="grid md:grid-cols-[60%_40%] gap-8 mb-6">
            <div className="text-left border border-gray-300 rounded-lg p-4 flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 mb-2">内容一例</h4>
              <div className="grid grid-cols-1 gap-1.5 text-base text-gray-900">
                {benefitItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mr-4">
              <img 
                src={benefitImage}
                alt="特典資料"
                className="w-full h-auto rounded-lg"
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
            className="bg-brand-red text-white px-8 py-2 rounded-lg text-lg font-bold hover:bg-brand-red/90 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}

