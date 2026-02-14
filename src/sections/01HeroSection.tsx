import AnchorLink from '../components/AnchorLink';
import heroGeneralMobile1 from '../img/dev/hero_general_mobile1.webp';
import heroGeneralMobile2 from '../img/dev/hero_general_mobile2.webp';
import heroImagePC from '../img/dev/hero_general_pc.webp';

// モバイルヒーロー: 2に差し替える場合は 2 に変更
const MOBILE_HERO_VERSION = 1;
const heroImageMobile = MOBILE_HERO_VERSION === 1 ? heroGeneralMobile1 : heroGeneralMobile2;

// 会社ロゴ（流れ用）を一括取得
const companyLogoModules = import.meta.glob<{ default: string }>(
  '../img/original/v3_0203/company_logos/*.png',
  { eager: true }
);
const companyLogoUrls = Object.keys(companyLogoModules)
  .sort()
  .map((path) => companyLogoModules[path].default);
const mid = Math.ceil(companyLogoUrls.length / 2);
const companyLogosTop = companyLogoUrls.slice(0, mid);
const companyLogosBottom = companyLogoUrls.slice(mid);

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-brand-blue p-0">
      <div className="w-full">
        <img
          src={heroImageMobile}
          alt="hero"
          className="w-full h-auto md:hidden"
          fetchPriority="high"
        />
        {/* PCヒーロー: 画像＋オーバーレイボタン（上から80%・左から70%の位置） */}
        <div className="relative w-full hidden md:block">
          <img
            src={heroImagePC}
            alt="hero"
            className="w-full h-auto"
            fetchPriority="high"
          />
          <AnchorLink
            to="/#contact-form"
            className="absolute top-[81.8%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:from-green-500 hover:to-green-400 whitespace-nowrap cursor-pointer font-bold btn-primary transition-all hover-pulse-ring shadow-lg text-[clamp(0.875rem,1.2vw,1.5rem)] px-[clamp(0.75rem,1.5vw,2rem)] py-[clamp(0.18rem,0.38vw,0.52rem)]"
          >
            無料で相談する 》
          </AnchorLink>
        </div>

        {/* 会社ロゴ 流れセクション：上段は左→右、下段は右→左。同時表示されるロゴは重ならないよう二分 */}
        <div className="py-1.5 overflow-hidden space-y-0.5 bg-white" aria-hidden>
          <div className="overflow-hidden">
            <div className="flex w-max logo-marquee-track-right">
              {[...companyLogosTop, ...companyLogosTop].map((src, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-4 h-9">
                  <img src={src} alt="" className="max-h-8 w-auto object-contain opacity-80" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max logo-marquee-track-left">
              {[...companyLogosBottom, ...companyLogosBottom].map((src, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-4 h-9">
                  <img src={src} alt="" className="max-h-8 w-auto object-contain opacity-80" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
