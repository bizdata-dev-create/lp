interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  remarks: string;
}

interface ContactFormSectionProps {
  contactFormData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  handleContactFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleContactFormSubmit: (e: React.FormEvent) => void;
  setSubmitStatus: (status: 'idle' | 'success' | 'error') => void;
}

export default function ContactFormSection({
  contactFormData,
  isSubmitting,
  submitStatus,
  handleContactFormChange,
  handleContactFormSubmit,
  setSubmitStatus,
}: ContactFormSectionProps) {
  return (
    <section id="contact-form" className="py-2 bg-white">
      <h2 className="text-2xl font-bold text-white bg-brand-blue px-4 py-4 mb-8 text-center w-full">お問い合わせフォーム</h2>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitStatus === 'success' ? (
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="text-green-600 text-lg font-bold mb-4">
              送信ありがとうございました。<br />
              メールにてご案内させて頂きます。
            </div>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-brand-green text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-green/90 btn-primary"
            >
              新しいお問い合わせを送信
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactFormSubmit} className="bg-white rounded-lg p-4">
            {/* スマホ用レイアウト */}
            <div className="md:hidden space-y-4">
              {/* 会社名 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-company" className="text-base font-bold text-gray-900">
                    会社名
                  </label>
                  <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                </div>
                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  required
                  value={contactFormData.company}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              {/* お名前 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-name" className="text-base font-bold text-gray-900">
                    お名前
                  </label>
                  <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                </div>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={contactFormData.name}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              {/* Eメール */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-email" className="text-base font-bold text-gray-900">
                    Eメール
                  </label>
                  <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                </div>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={contactFormData.email}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-phone" className="text-base font-bold text-gray-900">
                    電話番号
                  </label>
                  <span className="bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded">任意</span>
                </div>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              {/* 詳細 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-inquiry" className="text-base font-bold text-gray-900">
                    内容
                  </label>
                  <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                </div>
                <select
                  id="contact-inquiry"
                  name="inquiryType"
                  required
                  value={contactFormData.inquiryType}
                  onChange={handleContactFormChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">選択して下さい</option>
                  <option value="サービス資料が欲しい">サービス資料が欲しい</option>
                  <option value="無料相談を受けたい">無料相談を受けたい</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                </select>
              </div>

              {/* 備考 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor="contact-remarks" className="text-base font-bold text-gray-900">
                    備考
                  </label>
                  <span className="bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded">任意</span>
                </div>
                <textarea
                  id="contact-remarks"
                  name="remarks"
                  value={contactFormData.remarks}
                  onChange={handleContactFormChange}
                  placeholder="回答を入力"
                  rows={4}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* デスクトップ用テーブルレイアウト */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full table-fixed">
                <colgroup>
                  <col className="w-24" />
                  <col className="w-16" />
                  <col />
                </colgroup>
                <tbody>
                  {/* 会社名 */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-company-desktop" className="text-base font-bold text-gray-900">
                        会社名
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                    </td>
                    <td className="py-3">
                      <input
                        type="text"
                        id="contact-company-desktop"
                        name="company"
                        required
                        value={contactFormData.company}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </td>
                  </tr>

                  {/* お名前 */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-name-desktop" className="text-base font-bold text-gray-900">
                        お名前
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                    </td>
                    <td className="py-3">
                      <input
                        type="text"
                        id="contact-name-desktop"
                        name="name"
                        required
                        value={contactFormData.name}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </td>
                  </tr>

                  {/* Eメール */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-email-desktop" className="text-base font-bold text-gray-900">
                        Eメール
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                    </td>
                    <td className="py-3">
                      <input
                        type="email"
                        id="contact-email-desktop"
                        name="email"
                        required
                        value={contactFormData.email}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </td>
                  </tr>

                  {/* 電話番号 */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-phone-desktop" className="text-base font-bold text-gray-900">
                        電話番号
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded">任意</span>
                    </td>
                    <td className="py-3">
                      <input
                        type="tel"
                        id="contact-phone-desktop"
                        name="phone"
                        value={contactFormData.phone}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </td>
                  </tr>

                  {/* 詳細 */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-inquiry-desktop" className="text-base font-bold text-gray-900">
                        内容
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">必須</span>
                    </td>
                    <td className="py-3">
                      <select
                        id="contact-inquiry-desktop"
                        name="inquiryType"
                        required
                        value={contactFormData.inquiryType}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      >
                        <option value="">選択して下さい</option>
                        <option value="サービス資料が欲しい">サービス資料が欲しい</option>
                        <option value="無料相談を受けたい">無料相談を受けたい</option>
                        <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                      </select>
                    </td>
                  </tr>

                  {/* 備考 */}
                  <tr className="align-middle">
                    <td className="py-3 pr-2 text-left">
                      <label htmlFor="contact-remarks-desktop" className="text-base font-bold text-gray-900">
                        備考
                      </label>
                    </td>
                    <td className="py-3 pr-2 text-left">
                      <span className="bg-gray-400 text-white text-xs px-1.5 py-0.5 rounded">任意</span>
                    </td>
                    <td className="py-3">
                      <textarea
                        id="contact-remarks-desktop"
                        name="remarks"
                        value={contactFormData.remarks}
                        onChange={handleContactFormChange}
                        placeholder="お問い合わせ内容を入力してください"
                        rows={4}
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-9 py-[0.65rem] rounded-full text-2xl font-bold hover:from-green-500 hover:to-green-400 btn-primary transition-all hover-pulse-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover-pulse-ring"
              >
                {isSubmitting ? '送信中…' : '送信する 》'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
