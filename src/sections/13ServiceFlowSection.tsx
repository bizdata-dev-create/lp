import type { ReactNode } from 'react';
import serviceFlow1PC from '../img/dev/service_flow_pc/service_flow1_pc.webp';
import serviceFlow2PC from '../img/dev/service_flow_pc/service_flow2_pc.webp';
import serviceFlow3PC from '../img/dev/service_flow_pc/service_flow3_pc.webp';
import serviceFlow4PC from '../img/dev/service_flow_pc/service_flow4_pc.webp';
import serviceFlow5PC from '../img/dev/service_flow_pc/service_flow5_pc.webp';
import serviceFlow1Mobile from '../img/dev/service_flow_mobile/service_flow1.webp';
import serviceFlow2Mobile from '../img/dev/service_flow_mobile/service_flow2.webp';
import serviceFlow3Mobile from '../img/dev/service_flow_mobile/service_flow3.webp';
import serviceFlow4Mobile from '../img/dev/service_flow_mobile/service_flow4.webp';
import serviceFlow5Mobile from '../img/dev/service_flow_mobile/service_flow5.webp';

function StepBlock({ stepNum, imagePC, imageMobile, title, children }: { stepNum: string; imagePC: string; imageMobile: string; title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md border-4 border-brand-blue overflow-hidden md:h-[147px]">
      {/* STEP block - mobile: full width banner, desktop: vertical sidebar */}
      <div className="w-full md:w-20 md:h-full bg-brand-blue flex flex-row md:flex-col items-center justify-center text-white py-3 md:py-3">
        <span className="text-[0.975rem] font-semibold tracking-wider leading-none">STEP</span>
        <span className="text-2xl font-bold leading-none md:mt-1 ml-2 md:ml-0">{stepNum}</span>
      </div>
      {/* Image - mobile: full width below STEP, desktop: fixed width on left */}
      <div className="w-full md:flex-shrink-0 md:w-56 md:h-full bg-gray-100 overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet={imageMobile} />
          <img src={imagePC} alt="" className="w-full h-auto md:h-full md:object-cover" loading="lazy" decoding="async" />
        </picture>
      </div>
      {/* Text - mobile: below image, desktop: on right */}
      <div className="flex-1 flex flex-col justify-center p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-shrink-0 w-1 h-6 bg-brand-blue" aria-hidden />
          <h4 className="text-xl font-bold text-gray-900">{title}</h4>
        </div>
        <div className="text-gray-900 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ServiceFlowSection() {
  return (
    <section id="service-flow" className="py-20 bg-brand-blue-soft bg-dot-grid-blue bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">サービスの流れ</h3>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <StepBlock stepNum="01" imagePC={serviceFlow1PC} imageMobile={serviceFlow1Mobile} title="ご契約">
            <p className="mb-2">・契約書をメールにて送付いたします。</p>
            <p>・郵送不要ですぐにサービスをご利用いただけるよう電子署名を採用しております。</p>
          </StepBlock>

          <div className="flex justify-center my-4">
            <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-t-[20px] border-t-gray-800" aria-hidden />
          </div>

          <StepBlock stepNum="02" imagePC={serviceFlow2PC} imageMobile={serviceFlow2Mobile} title="会社・商材情報のご共有">
            <p className="mb-2">・御社の営業戦略や商材の強み、顧客の理解についての認識合わせを行います。</p>
            <p className="mb-2">・送信NGリスト等についてもご共有頂きます。御社の労力は基本的にここのみとなります。</p>
          </StepBlock>

          <div className="flex justify-center my-4">
            <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-t-[20px] border-t-gray-800" aria-hidden />
          </div>

          <StepBlock stepNum="03" imagePC={serviceFlow3PC} imageMobile={serviceFlow3Mobile} title="リストと文章の作成">
            <p className="mb-2">・御社の商材に最適リスト、及び営業文章をこちらから作成・提案します。</p>
            <p>・既存のリストや文章がある場合は持ち寄っていただいても問題ありません。改善提案もできます。</p>
          </StepBlock>

          <div className="flex justify-center my-4">
            <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-t-[20px] border-t-gray-800" aria-hidden />
          </div>

          <StepBlock stepNum="04" imagePC={serviceFlow4PC} imageMobile={serviceFlow4Mobile} title="目標達成に向けてアプローチ">
            <p className="mb-2">・リストと文章について、御社の了承をいただけ次第、送信をすぐに開始します。</p>
            <p>・目標が達成されるよう送信を続けます。</p>
          </StepBlock>

          <div className="flex justify-center my-4">
            <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-t-[20px] border-t-gray-800" aria-hidden />
          </div>

          <StepBlock stepNum="05" imagePC={serviceFlow5PC} imageMobile={serviceFlow5Mobile} title="送信結果のご共有">
            <p className="mb-2">・隔週~月1で営業状況及び改善提案について報告させて頂きます。</p>
            <p>・返信率を高める施策を一緒に考えます。</p>
          </StepBlock>
        </div>
      </div>
    </section>
  );
}
