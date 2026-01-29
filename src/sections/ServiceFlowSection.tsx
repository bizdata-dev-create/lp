import {
  UserIcon,
  FileTextIcon,
  SendPlaneIcon,
  BarChartIcon,
} from '../components/icons';

export default function ServiceFlowSection() {
  return (
    <section id="service-flow" className="py-20 bg-brand-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">サービスの流れ</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* Step 1 */}
          <div className="flex-1 bg-white p-6 shadow-md border-4 border-brand-blue">
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                <UserIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">会社・商材情報のご共有</h4>
            </div>
            <p className="text-gray-900 mb-2">・御社の営業戦略や商材の強み、顧客の理解についての認識合わせを行います。</p>
            <p className="text-gray-900 mb-2">・送信NGリスト等についてもご共有頂きます。</p>
            <p className="text-gray-900">・御社の労力は基本的にここのみとなります。</p>
          </div>

          <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[20px] border-t-gray-700"></div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white p-6 shadow-md border-4 border-brand-blue">
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                <FileTextIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">リストと文章の作成</h4>
            </div>
            <p className="text-gray-900 mb-2">・御社の商材に最適リスト、及び営業文章をこちらから作成・提案します。</p>
            <p className="text-gray-900">・既存のリストや文章がある場合は持ち寄っていただいても問題ありません。改善提案もできます。</p>
          </div>

          <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[20px] border-t-gray-700"></div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white p-6 shadow-md border-4 border-brand-blue">
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                <SendPlaneIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">目標達成に向けてアプローチ</h4>
            </div>
            <p className="text-gray-900 mb-2">・リストと文章について、御社の了承をいただけ次第、送信をすぐに開始します。</p>
            <p className="text-gray-900">・目標が達成されるよう送信を続けます。</p>
          </div>

          <div className="flex justify-center my-4">
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[20px] border-t-gray-700"></div>
          </div>

          {/* Step 4 */}
          <div className="flex-1 bg-white p-6 shadow-md border-4 border-brand-blue">
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                <BarChartIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">送信結果のご共有</h4>
            </div>
            <p className="text-gray-900">・隔週~月1で営業状況及び改善提案について報告させて頂きます。また、返信率を高める施策を一緒に考えます。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
