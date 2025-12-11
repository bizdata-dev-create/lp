import Layout from '../../components/Layout';

export default function Company() {
  return (
    <Layout>
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">会社概要</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">会社名</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                合同会社bizdata
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">設立</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                2024年
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">事業内容</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>営業戦略コンサルティング</li>
                <li>営業代行サービス</li>
                <li>営業リスト作成サービス</li>
                <li>データ分析・活用支援</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">代表者</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                代表：梁清揚（りょう せいよう）
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">所在地</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                〒150-0043 <br />
                東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F-C
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>メールアドレス:</strong> <a href="mailto:info@bizdata-official.jp" className="text-brand-blue hover:underline">info@bizdata-official.jp</a><br />
                  <strong>営業時間:</strong> 平日 9:00-18:00
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">理念</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                私たちは、「お客様が自社の営業を自信を持って回せる状態」をゴールとしています。
                単なる代行業ではなく、成果が出る仕組みを設計するチームとして、戦略コンサルタントとして培った分析・検証・改善力により、
                確実に結果が出る営業プロセスをお客様と共に構築します。
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

