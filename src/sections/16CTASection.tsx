interface CTASectionProps {
  onOpenModal?: () => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-6">
          営業の「手間」をなくし「<strong>成果</strong>」に集中
        </h3>
        <p className="text-xl text-blue-100 mb-4">
          「営業労力を最小化し、<strong>成果を最大化する仕組み</strong>」を私たちは提供します。
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            id="cta_schedule_last_section"
            href="https://timerex.net/s/info_cbe9_f3ff/48c82dac"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-brand-blue px-4 py-2 rounded-lg text-lg font-bold hover:bg-yellow-300 whitespace-nowrap cursor-pointer btn-primary"
          >
            お問い合わせ
          </a>
          <button
            id="cta_material_last_section"
            onClick={onOpenModal}
            className="bg-yellow-400 text-brand-blue px-4 py-2 rounded-lg text-lg font-bold hover:bg-yellow-300 whitespace-nowrap cursor-pointer btn-primary"
          >
            資料請求
          </button>
        </div> */}
      </div>
    </section>
  );
}
