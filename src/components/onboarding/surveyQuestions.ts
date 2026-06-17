// Teşhis anketi soru bankası — Nextum Brain motoru "SURV" girdisi.
// Kaynak: NextumBrain_Motor_Kalibrasyon_v1 · Bölüm A (KV/yönetim perspektifi).
// Sorular motorun 9 Alt-Fonksiyon (AF) yapısına göre bölümlere ayrılmıştır.
// Not: Bu bir UI demosudur — tam 109 soruluk banka geldiğinde sadece bu dosya genişletilir.

export interface SurveyQuestion {
  /** Motor soru kimliği, örn. "SP-01" */
  id: string;
  /** Kısa konu etiketi */
  topic: string;
  /** İşletme (KV/yönetim) gözünden soru metni */
  text: string;
}

export interface SurveySection {
  /** Alt-fonksiyon kodu, örn. "AF3" */
  af: string;
  /** Alt-fonksiyon başlığı */
  title: string;
  questions: SurveyQuestion[];
}

export const SURVEY_SECTIONS: SurveySection[] = [
  {
    af: "AF1",
    title: "Satış Stratejisi & ICP",
    questions: [
      {
        id: "SS-11",
        topic: "Strateji Yayılımı",
        text: "Satış stratejinizi ve hedeflerinizi ekibinize net biçimde aktarıyor musunuz?",
      },
    ],
  },
  {
    af: "AF2",
    title: "Pipeline Yönetimi",
    questions: [
      {
        id: "PP-01",
        topic: "Pipeline Sağlığı",
        text: "Pipeline coverage oranınız hedeflerinizi karşılayacak sağlıkta mı?",
      },
    ],
  },
  {
    af: "AF3",
    title: "Satış Prosesi & Metodoloji",
    questions: [
      {
        id: "SP-01",
        topic: "Keşif Süreci",
        text: "Satıcılarınız keşif sürecinde standart bir çerçeve kullanıyor mu?",
      },
      {
        id: "SP-03",
        topic: "Demo Kalitesi",
        text: "Demo süreciniz standart ve tekrarlanabilir mi?",
      },
      {
        id: "SP-04",
        topic: "İtiraz Yönetimi",
        text: "Satıcılarınız itirazlara standart bir yanıt seti kullanıyor mu?",
      },
      {
        id: "SP-06",
        topic: "Metodoloji Uyumu",
        text: "Tanımlı satış metodolojiniz sahada gerçekten uygulanıyor mu?",
      },
      {
        id: "SP-12",
        topic: "Zaman Yönetimi",
        text: "Satıcılarınız zamanını değer yaratan aktivitelere harcıyor mu?",
      },
    ],
  },
  {
    af: "AF4",
    title: "Teklif & Fiyatlama",
    questions: [
      {
        id: "TY-05",
        topic: "Değer Tabanlı Teklif",
        text: "Teklifleriniz ROI ve somut değer kanıtı içeriyor mu?",
      },
      {
        id: "TY-06",
        topic: "Fiyat İtirazı",
        text: "Satıcılarınız fiyat itirazlarını indirim yerine değerle karşılıyor mu?",
      },
    ],
  },
  {
    af: "AF5",
    title: "Müşteri Deneyimi & CS",
    questions: [
      {
        id: "MD-01",
        topic: "Onboarding",
        text: "Yeni müşteri onboarding süreciniz tanımlı ve güçlü mü?",
      },
    ],
  },
  {
    af: "AF6",
    title: "Satış İK & Performans",
    questions: [
      {
        id: "IK-08",
        topic: "Koçluk Kalitesi",
        text: "Satıcılarınıza düzenli ve kaliteli koçluk yapıyor musunuz?",
      },
      {
        id: "IK-09",
        topic: "Eğitim Müfredatı",
        text: "Satıcılarınız için tanımlı bir eğitim programınız var mı?",
      },
      {
        id: "IK-10",
        topic: "Aktivite Takibi",
        text: "Satıcıların aktivitelerini (arama, demo, teklif) KPI'larla takip ediyor musunuz?",
      },
      {
        id: "IK-12",
        topic: "Motivasyon",
        text: "Satış ekibinizin motivasyonunu güçlü değerlendiriyor musunuz?",
      },
    ],
  },
  {
    af: "AF7",
    title: "Teknoloji & Enablement",
    questions: [
      {
        id: "TE-01",
        topic: "CRM Kullanımı",
        text: "CRM benimseme oranınız ekip genelinde yüksek mi?",
      },
      {
        id: "TE-03",
        topic: "İçerik Kütüphanesi",
        text: "Satış materyalleriniz merkezi ve kolay erişilebilir mi?",
      },
      {
        id: "TE-10",
        topic: "Teknoloji Benimseme",
        text: "Ekibiniz yeni araç ve teknolojileri benimsemekte istekli mi?",
      },
    ],
  },
  {
    af: "AF8",
    title: "Raporlama & Ritim",
    questions: [
      {
        id: "RR-01",
        topic: "Haftalık Ritim",
        text: "Haftalık satış ritminiz (toplantılar, takip) verimli işliyor mu?",
      },
    ],
  },
];

/** Ankette sorulan toplam soru sayısı. */
export const SURVEY_QUESTION_COUNT = SURVEY_SECTIONS.reduce(
  (sum, s) => sum + s.questions.length,
  0,
);

/** 1–5 Likert ölçeği (1 = zayıf, 5 = güçlü) — motorun DCBX puanlamasıyla uyumlu. */
export const SURVEY_SCALE = [1, 2, 3, 4, 5] as const;
