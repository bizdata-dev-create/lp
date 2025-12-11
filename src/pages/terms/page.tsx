import Layout from '../../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">利用規約</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本規約は、合同会社bizdata（以下「当社」といいます。）が提供する営業代行サービス（以下「本サービス」といいます。）の利用条件を定めるものです。
                本サービスをご利用いただく際には、本規約にご同意いただいたものとみなします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（サービスの内容）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本サービスは、お客様の営業活動を代行するサービスであり、以下の内容を含みます。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>営業リストの作成</li>
                <li>営業文章の作成</li>
                <li>お問い合わせフォームへの送信代行</li>
                <li>営業戦略のご相談</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（料金）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本サービスの料金は、成果報酬制となっており、送信完了分の料金（1通あたり15円〜）のみをいただきます。
                初期費用、リスト作成費用、文章作成費用は一切かかりません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                お客様は、本サービスの利用にあたり、以下の行為を行ってはなりません。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のお客様に関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセス、不正な方法によるサービスの利用</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（サービスの停止・中断）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下のいずれかの事由があると判断した場合、お客様に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（保証の否認および免責）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                当社は、本サービスに起因してお客様に生じたあらゆる損害について一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（サービス内容の変更等）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、お客様への事前の告知をもって、本サービスの内容を変更、追加または廃止することがあります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第8条（利用規約の変更）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は以下の場合には、お客様の個別の同意なく、本規約を変更することができるものとします。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>本規約の変更がお客様の一般の利益に適合するとき</li>
                <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第9条（個人情報の取扱い）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第10条（通知または連絡）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                お客様と当社との間の通知または連絡は、当社の定める方法によって行うものとします。
                当社は、お客様から、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時に、お客様へ到達したものとみなします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第11条（権利義務の譲渡の禁止）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                お客様は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第12条（準拠法・裁判管轄）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                制定日：2025年8月1日<br />
                最終改定日：2025年11月13日
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

