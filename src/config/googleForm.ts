// Google Form設定
// FORM_IDはGoogle FormのURLから取得してください
// 例: https://docs.google.com/forms/d/e/FORM_ID/viewform
export const GOOGLE_FORM_CONFIG = {
  // Google FormのID（後で変更可能）
  FORM_ID: "1FAIpQLScAzEd3YYnW_zELrdoBQWoCNx2eiN1JhANR4is2GIlY3mtLUw",
  
  // Entry ID（後で変更可能）
  // Google Formの各フィールドのentry IDを設定してください
  ENTRY: {
    company: "entry.1927350659",
    name: "entry.1866246276",
    email: "entry.1765924240",
    phone: "entry.1609350815",
  },
};

// Google FormへのPOST URLを生成
export const getFormPostUrl = () => {
  return `https://docs.google.com/forms/d/e/${GOOGLE_FORM_CONFIG.FORM_ID}/formResponse`;
};

