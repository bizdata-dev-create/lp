import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/icons';
import customerVoice1 from '../img/dev/customer_voice/customer_voice_processed1.webp';
import customerVoice2 from '../img/dev/customer_voice/customer_voice_processed2.webp';
import customerVoice3 from '../img/dev/customer_voice/customer_voice_processed3.webp';
import customerVoice4 from '../img/dev/customer_voice/customer_voice_processed4.webp';

const CARDS = [
  {
    title: '製造業 A社様',
    sub: '従業員数: 50名',
    img: customerVoice1,
    quote: <>「CPAがわかりやすく、安心して頼める。課金形態が他の業者は作業ベース、<strong className="bg-marker-yellow font-bold">bizdataさんは結果ベース</strong>なので、結果にコミットしてくれる。成果報酬だから安心して任せられるし、実際に費用対効果がはっきり出ている点が他社との決定的な違いでした。」</>,
  },
  {
    title: 'IT企業 B社様',
    sub: '従業員数: 30名',
    img: customerVoice2,
    quote: <>「営業戦略自体も詳しく相談に乗っていただけた。<strong className="bg-marker-yellow font-bold">色々な業界や商材のユースケースを提案</strong>していただき、自分たちだけではできなかった新規開拓に成功した。」</>,
  },
  {
    title: '人材サービス C社様',
    sub: '従業員数: 80名',
    img: customerVoice3,
    quote: <>「文章をすごい丁寧に準備してくれた。おかげで、<strong className="bg-marker-yellow font-bold">開始翌週からすぐに反響があり</strong>、案件獲得につながった。わざわざフォームから返信頂いたお客さんは基本的に興味を持ってくれる人たちなので商談の質も高く、本格導入につながりやすかった。」</>,
  },
  {
    title: '建設業 D社様',
    sub: '従業員数: 120名',
    img: customerVoice4,
    quote: <>一件一件のヒアリングや提案内容が的確で、<strong className="bg-marker-yellow font-bold">単なるアポ代行ではなく伴走型の営業パートナー</strong>という印象です。</>,
  },
];

export default function CustomerVoicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.9;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h3>
          <p className="text-xl text-gray-900">ご利用いただいたお客様からの評価</p>
        </div>

        {/* スマホ: 横スクロールカルーセル + 左右ボタン（ボタンはカードの縦中央に配置） */}
        <div className="md:hidden">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-4 pb-4 items-stretch scroll-smooth px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CARDS.map((card, i) => (
                <article
                  key={i}
                  className="flex-shrink-0 w-[calc(100vw-3rem)] min-w-[calc(100vw-3rem)] snap-center bg-white p-4 shadow-lg border-2 border-gray-200 rounded-lg flex flex-col"
                >
                  <div className="mb-4">
                    <div className="bg-brand-blue text-white px-4 py-1 w-full text-center rounded-t">
                      <h5 className="font-semibold text-lg">{card.title}</h5>
                      <p className="text-[0.5rem]">{card.sub}</p>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4 flex-shrink-0">
                    <img src={card.img} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
                  </div>
                  <blockquote className="text-gray-900 mb-0 text-sm flex-1 min-h-0">{card.quote}</blockquote>
                </article>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-blue/90"
              aria-label="前へ"
            >
              <ArrowLeftIcon className="w-[13px] h-[13px]" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-brand-blue/90"
              aria-label="次へ"
            >
              <ArrowRightIcon className="w-[13px] h-[13px]" />
            </button>
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {CARDS.map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-brand-blue/40" aria-hidden />
            ))}
          </div>
        </div>

        {/* PC: グリッド */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {CARDS.map((card, i) => (
            <div key={i} className="bg-white p-4 shadow-lg border-2 border-gray-200">
              <div className="mb-6">
                <div className="bg-brand-blue text-white px-4 py-1 w-full text-center">
                  <h5 className="font-semibold text-lg">{card.title}</h5>
                  <p className="text-[0.5rem]">{card.sub}</p>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <img src={card.img} alt="" className="max-w-[60%] h-auto" loading="lazy" decoding="async" />
              </div>
              <blockquote className="text-gray-900 mb-0">{card.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
