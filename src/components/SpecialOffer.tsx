import { CheckCircleIcon } from './icons';
import benefitImage from '../img/dev/special_offer.webp';
import AnchorLink from './AnchorLink';

interface SpecialOfferProps {
  ctaId: string;
  materialCtaId?: string;
  benefitItems: string[];
  onOpenModal?: () => void;
}

export default function SpecialOffer({
  ctaId,
  materialCtaId: _materialCtaId,
  benefitItems,
  onOpenModal: _onOpenModal,
}: SpecialOfferProps) {
  return (
    <section className="bg-brand-blue-soft bg-dot-grid-blue bg-dot-grid py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <div className="w-full bg-white rounded-lg p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="bg-brand-blue text-yellow-300 px-3 py-1 rounded">お問い合わせ特典</span>
          </h3>
          <p className="text-xl text-gray-900 mb-6 text-left">
            お問い合わせいただいた方限定に、<br></br>「営業戦略の<strong className="bg-marker-yellow font-bold">無料相談</strong>」と「反応率が<strong className="bg-marker-yellow font-bold">3倍以上</strong>になる裏ワザ」をプレゼント！
          </p>
          <div className="grid gap-8 mb-6 md:grid-cols-[1fr_auto] md:h-[240px] md:items-stretch">
            {/* 内容一例ボックス - リッチなデザイン（縦サイズは維持） */}
            <div className="text-left bg-blue-50 border-2 border-brand-blue rounded-lg p-4 flex flex-col justify-center shadow-md md:h-full">
              <h4 className="font-bold mb-2 flex items-center">
                <span className="inline-block bg-brand-blue text-white px-3 py-1">
                  内容一例
                </span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-base text-gray-900">
                {benefitItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-start bg-white rounded px-2 py-1 shadow-sm border border-gray-200">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mr-4 md:h-full md:w-[360px] md:flex-none">
              <img
                src={benefitImage}
                alt="特典資料"
                className="w-full h-auto md:h-full md:object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-base text-gray-600 mb-0 font-bold">＼ <span className="text-red-600">10秒</span>でお申し込み完了 ／</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnchorLink
                to="/#contact-form"
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-9 py-[0.65rem] rounded-lg text-2xl font-bold hover:from-green-500 hover:to-green-400 whitespace-nowrap cursor-pointer inline-block btn-primary transition-all hover-pulse-ring"
              >
                <span id={ctaId}>無料で相談する 》</span>
              </AnchorLink>
              {/* <a 
                id={ctaId}
                href="https://timerex.net/s/info_cbe9_f3ff/48c82dac"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-brand-green/90 whitespace-nowrap cursor-pointer inline-block btn-primary shadow-md hover:shadow-lg transition-shadow"
              >
                お問い合わせ
              </a> */}
              {/* {onOpenModal && (
                <button
                  id={materialCtaId}
                  onClick={onOpenModal}
                  className="bg-brand-blue text-yellow-400 px-6 py-2 rounded-lg text-lg font-bold hover:bg-brand-blue/90 whitespace-nowrap cursor-pointer btn-primary shadow-md hover:shadow-lg transition-shadow"
                >
                  資料請求
                </button>
              )} */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
