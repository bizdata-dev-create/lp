import { useState } from 'react';
import heroImageMobile from '../../img/hero_mobile.webp';
import heroImagePC from '../../img/hero_pc.webp';
import benefit1Image from '../../img/benefit1.webp';
import benefit2Image from '../../img/benefit2.webp';
import benefit3Image from '../../img/benefit3.webp';
import benefit4Image from '../../img/benefit4.webp';
import company1Image from '../../img/company1.webp';
import valuePropositionMobile from '../../img/value_proposition_mobile.webp';
import valuePropositionPC from '../../img/value_proposition_pc.webp';
import logoDeeper from '../../img/logo_deeper.webp';
import compareTableFormMobile from '../../img/compare_table_form_mobile.webp';
import compareTableFormPC from '../../img/compare_table_form_pc.webp';
import compareTableMobile from '../../img/compare_table_mobile.webp';
import compareTablePC from '../../img/compare_table_pc.webp';
import ryoImage from '../../img/ryo.webp';
import SpecialOffer from '../../components/SpecialOffer';
import {
  ArrowRightIcon,
  BarChartIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  FileTextIcon,
  GraduationCapIcon,
  SendPlaneIcon,
  ShieldCheckIcon,
  TimeIcon,
  UserIcon,
} from '../../components/icons';

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Special Offer の共通データ
  const specialOfferBenefits = [
    '本物の営業代行業者の見極め方',
    '高品質LPの作成費用を【1/10】にする方法',
    '御社に最適な営業ルートの選び方',
    '反応率を200%上げる文章の"型"'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to external URL
    window.open('https://timerex.net/s/qingyangliangjp_f186/5354f609/', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-start">
                <img src={logoDeeper} alt="logo" className="h-12 scale-[0.68] md:scale-[0.85]" />
              </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#service" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">サービス概要</a>
              <a href="#results" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">実績</a>
              <a href="#benefits" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">当サービスの特徴</a>
              <a href="#company" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">会社概要</a>
            </nav>
            <a id="cta_schedule_header"
              href="https://timerex.net/s/qingyangliangjp_f186/5354f609/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-5 py-1.5 rounded-lg hover:bg-brand-red/90 whitespace-nowrap cursor-pointer font-bold text-lg btn-primary"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-brand-blue p-0">
        <div className="w-full">
          <img
            src={heroImageMobile}
            alt="hero"
            className="w-full h-auto md:hidden"
            fetchPriority="high"
          />
          <img
            src={heroImagePC}
            alt="hero"
            className="w-full h-auto hidden md:block"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Special Offer */}
      <SpecialOffer 
        ctaId="cta_schedule_special_offer_1"
        benefitItems={specialOfferBenefits}
      />

      {/* Results Section */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">bizdata式フォーム営業<br className="md:hidden" />の圧倒的な実績</h3>
            <p className="text-xl text-gray-900">数々の企業で確実な成果を実現</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Result 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
              <div className="text-center mb-6">
                <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">BPO業</div>
                <div className="text-5xl font-bold text-brand-red mb-2">+418%</div>
                <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                  リード獲得数
                </div>
              </div>
              <blockquote className="text-gray-900 italic mb-6">
                <strong>「見逃していた層からも反応があり、営業活動の勢いがつきました。」</strong>
              </blockquote>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                  <p className="text-sm text-gray-900">テレアポ中心の新規開拓で、在宅勤務の広がりにより電話がつながらず、メール営業も反応が少なくリード獲得数が減少。</p>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                  <p className="text-sm text-gray-900">フォーム送信代行により企業の公式サイト経由で確実に担当者へ情報を届け、<strong>リード獲得数418％向上</strong>を実現。</p>
                </div>
              </div>
            </div>

            {/* Result 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
              <div className="text-center mb-6">
                <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">システム開発業</div>
                <div className="text-5xl font-bold text-brand-red mb-2">+210%</div>
                <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                  新規受注数
                </div>
              </div>
              <blockquote className="text-gray-900 italic mb-6">
                <strong>「営業リソースを削減しながら、質の高い商談を増やすことができた。」</strong>
              </blockquote>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                  <p className="text-sm text-gray-900">紹介や展示会頼みで新規案件獲得に波があり、テレアポでは時間と人件費がかかり費用対効果が合わない状況。</p>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                  <p className="text-sm text-gray-900">ターゲット業種に特化した送信リストを構築し、確度の高い商談が増加。<strong>新規受注数約210%増加</strong>を達成。</p>
                </div>
              </div>
            </div>

            {/* Result 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-brand-red-light">
              <div className="text-center mb-6">
                <div className="bg-brand-red text-white px-4 py-3 rounded text-xl font-bold mb-2">WEB制作業</div>
                <div className="text-5xl font-bold text-brand-red mb-2">+135%</div>
                <div className="inline-block bg-white border border-black rounded-full px-6 py-2 text-xl font-bold text-black mb-2">
                  新規顧客売上
                </div>
              </div>
              <blockquote className="text-gray-900 italic mb-6">
                <strong>「紹介だけに頼らない"攻めの営業"ができるようになりました。」</strong>
              </blockquote>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">課題：</h5>
                  <p className="text-sm text-gray-900">既存顧客の紹介頼みで売上が頭打ち。フォーム営業を試したがノウハウがなく結果が出せない状況。</p>
                </div>
                <div className="flex items-center justify-center my-4">
                  <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">導入後：</h5>
                  <p className="text-sm text-gray-900">営業リスト作成から送信文章作成まで全て代行し、狙った業界に効率よくアプローチ。<strong>月間売上約135％向上</strong>。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section id="service" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">フォーム営業と他営業<br className="md:hidden" />手法の比較</h3>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              フォーム営業は<strong className="bg-marker-yellow font-bold">決裁者の目に届きやすく、興味の高い人のみ返信する</strong>ため、受注率の高い営業手法です。
            </p>
          </div>
          
          {/* Comparison Table */}
          <div>
            {/* スマホ用画像（モバイルで表示、PCで非表示） */}
            <img 
              src={compareTableFormMobile}
              alt="比較表"
              className="w-full h-auto rounded-lg md:hidden"
              loading="lazy"
              decoding="async"
            />
            
            {/* PC用画像（モバイルで非表示、PCで表示） */}
            <img 
              src={compareTableFormPC}
              alt="比較表"
              className="w-full h-auto rounded-lg hidden md:block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="py-20 bg-brand-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">サービスの流れ</h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Step 1 */}
            <div className="flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-200">
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
              <div className="w-0 h-0 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-200">
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
              <div className="w-0 h-0 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-200">
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
              <div className="w-0 h-0 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-t-[20px] border-t-gray-400"></div>
            </div>

            {/* Step 4 */}
            <div className="flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  <BarChartIcon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">定期的に報告</h4>
              </div>
              <p className="text-gray-900">・隔週~月1で営業状況及び改善提案について報告させて頂きます。また、返信率を高める施策を一緒に考えます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">4つの特徴</h3>
            <p className="text-xl text-gray-900">なぜ選ばれるのか</p>
          </div>
          
          <div className="space-y-16">
            {/* Feature 1 - 初期費用ゼロ */}
            <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-brand-blue p-4">
              <div className="order-2 md:order-1">
                <img 
                  src={benefit1Image}
                  alt="初期費用0円の成果報酬制"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                  特徴①
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  <strong>初期費用ゼロ</strong>。成果報酬<br className="md:hidden" />だけの安心料金
                </h4>
                <p className="text-gray-900 mb-6 leading-relaxed">
                  一般的な営業代行や広告のように、<strong className="bg-marker-yellow font-bold">初期費用として数十万円の費用を払う必要は「一切」ありません</strong>。
                  フォーム営業では、「送信が行われた分だけ」のシンプルな成果報酬制です。
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                    <div className="text-2xl font-bold text-brand-red">0円</div>
                    <div className="text-sm text-gray-900 font-bold">初期費用</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                    <div className="text-2xl font-bold text-brand-red">0円</div>
                    <div className="text-sm text-gray-900 font-bold">リスト作成</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-brand-red">
                    <div className="text-2xl font-bold text-brand-red">0円</div>
                    <div className="text-sm text-gray-900 font-bold">文章作成<br />（何度でも）</div>
                  </div>
                </div>
                
                <p className="text-gray-900">
                  営業に必要な準備はすべて弊社にお任せください。
                  お客様にご負担いただくのは、<strong>送信完了分の料金（1通あたり15円〜）のみ</strong>。
                </p>
              </div>
            </div>

            {/* Feature 2 - 量・質ともに圧倒的な営業リスト */}
            <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
              <div>
                <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                  特徴②
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  量・質ともに圧倒的な<br className="md:hidden" />営業リストを保有
                </h4>
                <p className="text-gray-900 mb-6 leading-relaxed">
                  営業の成果を決める最大の要因は、「<strong>誰に届けるか</strong>」。
                  どれだけ良い文章を書いても、送る相手がズレていれば<strong>結果は出ません</strong>。
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-4"><strong className="bg-marker-yellow font-bold"><span className="text-brand-red font-bold text-xl">200万件</span>以上の企業リストを独自に保有</strong></h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">業種・業界別</h6>
                      <p className="text-gray-900">IT、製造、建設、飲食、美容、人材など</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">企業規模別</h6>
                      <p className="text-gray-900">従業員数・資本金・エリア</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">ニーズ別</h6>
                      <p className="text-gray-900">採用中・店舗拡大中・検討中など</p>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900 mb-2">特殊条件</h6>
                      <p className="text-gray-900">新規法人登記企業・広告出稿企業など</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={benefit3Image}
                  alt="200万件以上の企業リスト"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Media List Section - Full width below Feature 2 */}
            <div className="w-full">
              <div className="bg-brand-blue-light p-8 rounded-lg border-2 border-brand-blue">
                <h5 className="font-semibold text-gray-900 mb-6 text-center text-xl">リストアップできる媒体例<br/><span className="text-sm">（ご希望の媒体を付け加え可能）</span></h5>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                  <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">採用媒体</span></h6>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-900">
                      <div>リクナビ</div>
                      <div>マイナビ</div>
                      <div>リクナビNEXT</div>
                      <div>マイナビ転職</div>
                      <div>エン転職</div>
                      <div>DODA</div>
                      <div>ビズリーチ</div>
                      <div>Wantedly</div>
                      <div>Green</div>
                      <div>type</div>
                      <div>Amateras</div>
                      <div>エンゲージ</div>
                      <div>バイトル</div>
                      <div>タウンワーク</div>
                      <div>フロムエー</div>
                      <div>イーアイデム</div>
                      <div>Indeed</div>
                    </div>
                  </div>

                  <div>
                   <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">営業・PR系媒体</span></h6>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-900">
                      <div>BOXIL</div>
                      <div>LISKUL</div>
                      <div>アイミツ</div>
                      <div>メディアレーダー</div>
                      <div>比較biz</div>
                      <div>PR TIMES</div>
                      <div>@Press</div>
                      <div>valuepress</div>
                    </div>
                  </div>

                  <div>
                  <h6 className="font-medium text-gray-900 mb-4 text-lg"><span className="inline-block border-b-2 border-blue-600 pb-2 w-1/2">業界特化媒体</span></h6>
                    <div className="space-y-3 text-sm text-gray-900">
                      <div>
                        <strong>①美容系媒体</strong><br />
                        ホットペッパービューティー、ヘアログ
                      </div>
                      <div>
                        <strong>②飲食系媒体</strong><br />
                        ぐるなび、食べログ、ホットペッパーグルメ
                      </div>
                      <div>
                        <strong>③EC系媒体</strong><br />
                        Shopify、Base、EC-CUBE、メイクショップ、カラーミーショップ、futureshop
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - 特典としてリストを無料提供 */}
            <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
              <div className="order-2 md:order-1">
                <img 
                  src={benefit4Image}
                  alt="多様な営業手法への対応"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                  特徴③
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  特典としてリストを<br className="md:hidden" /><strong className="bg-marker-yellow font-bold">無料提供</strong>
                </h4>
                <p className="text-gray-900 mb-6 leading-relaxed">
                  例えば自社でテレアポ営業をしたい場合、DMやFAXを送付したい場合など、 
                  <strong>お問合せフォーム送信以外の様々な用途</strong>でも営業リストを作成したい場合があります。
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-4"> <strong className="bg-marker-yellow font-bold">完全無料＆取得件数は無制限</strong>でリスト提供</h5>
                  <p className="text-gray-900 text-sm mb-4">
                    弊社のお問い合わせフォーム送信代行をご利用いただいているお客様であれば、完全無料＆取得件数は無制限で「URL、電話番号、FAX番号、住所などの情報を削除していない」営業リストを取得できますので、 
                    お問い合わせフォーム営業以外の様々な営業手段で弊社のリストをご利用いただけます。
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - 営業戦略の見直し */}
            <div className="grid md:grid-cols-2 gap-12 items-center border-4 border-blue-900 p-4">
              <div>
                <div className="bg-brand-blue text-white px-6 py-3 text-lg font-bold mb-4 inline-block">
                  特徴④
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  <strong>営業戦略の見直し</strong>まで、<br className="md:hidden" />一緒に考えます
                </h4>
                <p className="text-gray-900 mb-6 leading-relaxed">
                  どんなに良い営業手法を使っても、「戦略の方向性」が間違っていれば<strong>成果は出ません</strong>。
                  単に送信だけでなく、<strong className="bg-marker-yellow font-bold">「誰に・何を・どう伝えるべきか」という営業戦略の見直し</strong>までサポートします。
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-4"> ご契約前でも、営業戦略のご相談を<strong>無料で実施</strong></h5>
                  <div className="space-y-2 text-sm text-gray-900">
                    <div className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      「今の営業のやり方でいいのか分からない」
                    </div>
                    <div className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      「どの業界を狙うのがいいか見直したい」
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-900 mb-4">
                  上場企業から中小企業、ベンチャー企業に至るまで、<strong>数多くの企業の営業を支援</strong>してきたプロのコンサル出身メンバーが、
                  具体的な改善ポイントをわかりやすく整理します。
                </p>
                
                <p className="text-xs text-gray-900">
                  ※各種データ・リサーチを踏まえた戦略設計は別途有償で承ります。業界・競合分析、社内データを基に確実な営業戦略を設計いたします。
                </p>
              </div>
              <div>
                <img 
                  src={benefit2Image}
                  alt="営業戦略コンサルティング"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">独自の強み</h3>
            <p className="text-xl text-gray-900">他社との違い</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* USP 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-600">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EditIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  一社一社に「刺さる」<br className="md:hidden" />営業文を<strong>作成</strong>します
                </h4>
                <p className="text-gray-900 mb-6">
                  営業の反応率を決めるのは、「<strong>相手にとって自分ごとに感じられるか</strong>」。
                  これまで同じ商品でも、相手の業種や状況に合わせて言葉を変えることで、返信・成約率が<span className="text-brand-red font-bold text-3xl">180％以上</span>向上しています。
                </p>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900">一社一社に<strong className="bg-marker-yellow font-bold">営業文をカスタマイズ</strong></h5>
                <div className="space-y-2 text-sm text-gray-900">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    企業サイトの内容（事業内容・強み・代表メッセージなど）
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    IR・有価証券報告書等
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    企業の最新動向（採用・展示会出航など）
                  </div>
                </div>
                <p className="text-sm text-gray-900 mt-4">
                  AIだけに任せず、すべての文章は人の目で最終確認。<strong>文面のトーンや敬語表現、企業の印象を損なわないか</strong>などをチェックします。
                </p>
              </div>
            </div>

            {/* USP 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-green-600">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  人が最後に確認・送信。<br className="md:hidden" />品質を守ります。
                </h4>
                <p className="text-gray-900 mb-6">
                  フォーム営業は、自動化すれば簡単に見えます。しかし実際には、フォーム構造の違いや入力制限、送信エラーなど、
                  <strong>自動ツールだけでは対応できないケース</strong>が多く存在します。
                </p>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900"> システムだけでは気づけない"わずかな違い"を人が判断</h5>
                <div className="space-y-2 text-sm text-gray-900">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    送信フォームの項目が特殊な企業
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    セキュリティが厳しく、自動送信をブロックする企業
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    住所・電話番号など、独自形式を求めるフォーム
                  </div>
                </div>
                <p className="text-sm text-gray-900 mt-4">
                  AIや自動ツールでは止まってしまう部分を、<strong className="bg-marker-yellow font-bold">専門スタッフが一件ずつ確認・再送信</strong>。
                  これにより、誤送信等による<strong>イメージダウンを防ぎ、品質が守られます</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer 2 */}
      <SpecialOffer 
        ctaId="cta_schedule_special_offer_2"
        benefitItems={specialOfferBenefits}
      />

      {/* Competitive Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">他サービスと比較</h3>
            <p className="text-xl text-gray-900">他社と比べても<strong className="bg-marker-yellow font-bold">費用の割に営業のクオリティ・スピードともに高い</strong>ところが強みとなっています。</p>
          </div>
          
          {/* Table Space for Future Use */}
          <div className="bg-white rounded-lg p-2 text-center">
            <div className="mt-2">
              {/* スマホ用画像（モバイルで表示、タブレット以上で非表示） */}
              <img 
                src={compareTableMobile}
                alt="詳細比較表"
                className="w-full h-auto rounded-lg md:hidden"
                loading="lazy"
                decoding="async"
              />
              
              {/* PC用画像（タブレット以上で表示、モバイルで非表示） */}
              <img 
                src={compareTablePC}
                alt="詳細比較表"
                className="w-full h-auto rounded-lg hidden md:block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-7 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">提供価値</h3>
            <p className="text-xl text-gray-900">初期準備（営業戦略とリストの取得、文章作成等）とアプローチをお任せ頂くことで、<br></br><strong className="bg-marker-yellow font-bold">御社は業務品質の向上に集中できる</strong>ようになります。</p>
          </div>
          
          {/* Image Space */}
          <div className="mb-8">
            {/* スマホ用画像（モバイルで表示、PCで非表示） */}
            <img 
              src={valuePropositionMobile}
              alt="提供価値 - 導入前後の比較"
              className="w-full h-auto rounded-lg md:hidden"
              loading="lazy"
              decoding="async"
            />
            
            {/* PC用画像（モバイルで非表示、PCで表示、80%サイズ） */}
            <div className="hidden md:flex md:justify-center">
              <img 
                src={valuePropositionPC}
                alt="提供価値 - 導入前後の比較"
                className="w-4/5 h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-blue-light to-teal-50 rounded-lg p-8 text-center border-4 border-blue-600">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-brand-blue-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <ArrowRightIcon className="w-4 h-4 text-brand-blue" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">初期準備</h4>
              </div>
              <p className="text-gray-900">
                一部上場企業(現プライム上場)にて、BtoBの営業戦略を検討してきたコンサルタントが、御社のターゲット選定をご支援することで、見込みの高い顧客獲得に繋がります
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 text-center border-4 border-green-600">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">アプローチ</h4>
              </div>
              <p className="text-gray-900">
                一社一社に最適な文章を考え、送信を外部パートナーと連携することで営業文章の質の向上と送信量の確保を両立し、効率的な営業を実施できます
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 text-center border-4 border-pink-600">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <TimeIcon className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">その他（全体）</h4>
              </div>
              <p className="text-gray-900">
                これまでかけてきた初期準備、アポ依頼の時間を、
                業務品質の向上に寄与します
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Voices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">お客様の声</h3>
            <p className="text-xl text-gray-900">ご利用いただいたお客様からの評価</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <UserIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">製造業 A社様</h5>
                  <p className="text-sm text-gray-900">従業員数: 50名</p>
                </div>
              </div>
              <blockquote className="text-gray-900 mb-4">
                <strong>「CPAがわかりやすく、安心して頼める。課金形態が他の業者は作業ベース、<strong className="bg-marker-yellow font-bold">bizdataさんは結果ベース</strong>なので、結果にコミットしてくれる。
                成果報酬だから安心して任せられるし、実際に費用対効果がはっきり出ている点が他社との決定的な違いでした。」</strong>
              </blockquote>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-blue-light rounded-full flex items-center justify-center mr-4">
                  <UserIcon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 ">IT企業 B社様</h5>
                  <p className="text-sm text-gray-900">従業員数: 30名</p>
                </div>
              </div>
              <blockquote className="text-gray-900 mb-4">
                <strong>「営業戦略自体も詳しく相談に乗っていただけた。<strong className="bg-marker-yellow font-bold">色々な業界や商材のユースケースを提案</strong>していただき、自分たちだけではできなかった新規開拓に成功した。」</strong>
              </blockquote>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <UserIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">人材サービス C社様</h5>
                  <p className="text-sm text-gray-900">従業員数: 80名</p>
                </div>
              </div>
              <blockquote className="text-gray-900 mb-4">
                <strong>「文章をすごい丁寧に準備してくれた。おかげで、<strong className="bg-marker-yellow font-bold">開始翌週からすぐに反響があり</strong>、案件獲得につながった。
                わざわざフォームから返信頂いたお客さんは基本的に興味を持ってくれる人たちなので商談の質も高く、本格導入につながりやすかった。」</strong>
              </blockquote>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <UserIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">建設業 D社様</h5>
                  <p className="text-sm text-gray-900">従業員数: 120名</p>
                </div>
              </div>
              <blockquote className="text-gray-900 mb-4">
                <strong>一件一件のヒアリングや提案内容が的確で、<strong className="bg-marker-yellow font-bold">単なるアポ代行ではなく伴走型の営業パートナー</strong>という印象です。
                </strong>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">会社紹介</h3>
            <p className="text-xl text-white">コンサル出身の実行チームが、<strong>成果を出す営業</strong>を設計します</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-white mb-6 leading-relaxed mb-8">
                弊社合同会社bizdataは、<strong>一部上場コンサルティング会社からスピンアウト</strong>し設立されました。
                戦略立案から実行支援まで、これまでに<strong>20社以上の営業・データ分析プロジェクト</strong>をご支援してきました。
              </p>
              
              <div className="space-y-6">
                <div className="mb-8">
                  <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">① コンサル品質の「戦略 × 実行」アプローチ</h4>
                  <p className="text-white">
                    私たちは、単なる代行業ではなく、<strong>"成果が出る仕組み"を設計するチーム</strong>として活動しています。
                    戦略コンサルタントとして培った分析・検証・改善力により、「確実に結果が出る営業プロセス」をお客様と共に構築します。
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">② 現場から生まれた「本当に使えるノウハウ」</h4>
                  <p className="text-white">
                    私たちが提供している仕組みや文章テンプレートは、実際に<strong>数多くのプロジェクトの中で、成果が出たものだけを体系化</strong>したノウハウです。
                    机上の理論ではなく、現場で"反応が取れた方法"だけをお伝えします。
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="bg-white text-brand-blue px-2 py-1 font-black text-xl mb-3">③ モットー：「顧客に本質的な価値を届ける」</h4>
                  <p className="text-white">
                    「代行して終わり」ではなく、
                    <strong>「お客様が」自社の営業を自信を持って回せる状態</strong>をゴールとしています。
                    だからこそ、私たちは常に、
                    <strong>"本質的な価値を提供できているか？"</strong>を問いながら、プロジェクトを進めています。
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={company1Image}
                alt="コンサル出身の実行チーム"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          {/* Team Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">成果を追及し続けるチーム<br className="md:hidden" />でご支援します</h4>
            </div>
            
            <div className="grid md:grid-cols-[70%_30%] gap-8 items-start">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">代表：<br className="md:hidden" />梁清揚（りょう せいよう）</h5>
                  <p className="text-sm text-gray-900">
                    コンサルティング会社での営業・マーケティング戦略の立案・実行支援を経て、企業の営業活動を効率化するプロジェクトを複数リード。
                    これまでに<strong>20社以上の企業で、営業・事業戦略立案・実行支援</strong>を支援。
                  </p>
                </div>
                
                {/* スマホ版：写真を代表紹介とチーム構成の間に配置 */}
                <div className="flex justify-center mb-6 md:hidden">
                  <div className="w-48 h-64 rounded-lg overflow-hidden">
                    <img 
                      src={ryoImage}
                      alt="社長写真"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <GraduationCapIcon className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900">チーム構成</h6>
                      <p className="text-sm text-gray-900"><strong>東京大学・東京工業大学出身、数学オリンピックファイナリスト、大手コンサルティングファーム出身者</strong>など</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <BarChartIcon className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-900">弊社の強み</h6>
                      <p className="text-sm text-gray-900"><strong>数字で物事を考える力と、課題の本質をつかむ洞察力</strong>。データをもとに最適な戦略とオペレーションを設計します。</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* PC版：写真を右側に配置 */}
              <div className="hidden md:flex md:justify-start">
                <div className="w-48 h-64 rounded-lg overflow-hidden">
                  <img 
                    src={ryoImage}
                    alt="社長写真"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h3>
            <p className="text-xl text-gray-900">よくあるご質問</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 営業文章の作成は自社で行う必要がありますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 営業文章作成は弊社で行います。完成した営業文章は御社にご確認いただき、内容修正も可能です。すでに御社でご用意された営業文章がある場合は、そのまま活用することも、改善案を弊社がご提案することもできます。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 企業リストは誰が準備しますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 企業リストの作成はすべて弊社で対応いたします。追加・変更が発生しても、追加費用は一切いただきません。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 自社で保有しているリストでも送信できますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 可能です。御社からリストをお預かりすれば、そのリストにも同様に送信いたします。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 作成された企業リストを事前に確認できますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. はい、確認することができます。御社のお取引先など、送信を避けたい企業が含まれている場合は、除外チェックをお願いしています。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 送信ペースはどのくらいですか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 平均的には1日あたり500件ほど送信しますが、御社のご希望に合わせて調整も可能です。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 最低契約期間や件数の制限はありますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. ご依頼いただく件数によって異なりますので、詳細はお問い合わせください。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 送信結果のレポートはもらえますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 送信先が分かるよう、Excel形式でレポートを提出いたします。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 問い合わせにつながる割合はどのくらいですか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 平均では0.2〜0.3％（1,000件中2〜3件）程度です。案件によっては0.7〜1.0％に達するケースもあります。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. NGリストをスキップできますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. もちろんスキップすることが可能です。会社名ベースでも、HPベースでも可能です。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 営業代行を使うと、自社にノウハウが残らないかと心配してます。</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. ご商談以降のプロセスはお客様に対応した頂くため、営業活動の主要部分はノウハウとして残ります。また、弊社が使用している文章、リスト等もすべて提出を致しますので、御社のノウハウとして所持していただくことができます。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. どのような業種でも対応できますか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. BtoBであれば全業界で対応可能です。弊社で保有するリスト200万社の他、新規ですべての業界の情報を取得可能です(一般消費者へのアプローチは行っておりませんのでご了承ください)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. まずは相談だけでも大丈夫ですか？</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. 問題ございません。「プロのコンサル経験者から弊社の営業方針についての意見が欲しい」といった内容でご相談した事例もございます。お気軽にお問い合わせ下さい。</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4">
                <h4 className="font-bold text-lg">Q. 料金の支払い方法を教えてください</h4>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-900">A. クレジットカード決済、または請求書払いとなります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            営業の「手間」をなくし「<strong>成果</strong>」に集中
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            「営業労力を最小化し、<strong>成果を最大化する仕組み</strong>」を私たちは提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              id="cta_schedule_last_section"
              href="https://timerex.net/s/qingyangliangjp_f186/5354f609/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-brand-blue px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-300 whitespace-nowrap cursor-pointer btn-primary"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-gray-400 text-sm">
                成果報酬型の営業代行サービス。<br />
                <strong>初期費用0円</strong>で確実に結果を出します。
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">サービス</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#service" className="hover:text-white transition-colors cursor-pointer">フォーム営業代行</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors cursor-pointer">営業戦略コンサルティング</a></li>
                <li><a href="#results" className="hover:text-white transition-colors cursor-pointer">実績・事例</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://bizdata-official.jp/%e4%bc%9a%e7%a4%be%e6%a6%82%e8%a6%81/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">利用規約</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <a 
                id="cta_schedule_footer"
                href="https://timerex.net/s/qingyangliangjp_f186/5354f609/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-brand-red/90 text-sm whitespace-nowrap cursor-pointer mb-4 inline-block btn-primary"
              >
                お問い合わせ
              </a>
              <div className="text-sm text-gray-400">
                <p>営業時間: 平日 9:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 営業代行サービス. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">お問い合わせ</h3>
                <button 
                  onClick={() => setIsContactFormOpen(false)}
                  className="text-gray-400 hover:text-gray-900 cursor-pointer"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              
              <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
                    会社名 <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="株式会社○○"
                  />
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                    お名前 <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                    メールアドレス <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="example@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                    お問い合わせ内容 <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                    placeholder="ご相談内容をお聞かせください（500文字以内）"
                  ></textarea>
                  <p className="text-xs text-gray-900 mt-1">{formData.message.length}/500文字</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white py-2 rounded-lg font-bold hover:bg-brand-red/90 whitespace-nowrap cursor-pointer btn-primary"
                >
                  送信する
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🎁 特典</h4>
                <p className="text-sm text-orange-700">
                  お問い合わせいただいた方に「反応率が2倍以上になる営業の裏ワザ」資料をプレゼント！
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
