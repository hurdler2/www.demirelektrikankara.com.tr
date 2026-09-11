export interface FaqItem {
  q: string;
  a: string;
}

/** Genel SSS — ana sayfa ve /sss sayfasında kullanılır, FAQPage schema üretir */
export const faq: FaqItem[] = [
  {
    q: "Ankara'nın her ilçesine hizmet veriyor musunuz?",
    a: "Evet. Demir Elektrik olarak Sincan merkezli olmak üzere Ankara'nın tüm ilçelerinde elektrik hizmetleri sunuyoruz.",
  },
  {
    q: 'Elektrik arızalarına müdahale ediyor musunuz?',
    a: 'Evet. Elektrik tesisatında meydana gelen birçok farklı arızanın tespiti ve giderilmesi konusunda hizmet veriyoruz.',
  },
  {
    q: 'Ev elektrik tesisatı yapıyor musunuz?',
    a: 'Evet. Yeni elektrik tesisatı kurulumu, mevcut tesisatın yenilenmesi, priz, anahtar, sigorta kutusu ve aydınlatma sistemleri konusunda hizmet sunuyoruz.',
  },
  {
    q: 'Villa elektrik tesisatı yapıyor musunuz?',
    a: 'Evet. Villa iç ve dış mekan elektrik tesisatı, pano, priz, aydınlatma ve elektrik altyapısı uygulamaları yapıyoruz.',
  },
  {
    q: 'Mağaza elektrik tesisatı yapıyor musunuz?',
    a: 'Evet. Mağaza elektrik tesisatı, LED ve spot aydınlatma, priz sistemleri ve elektrik pano uygulamaları yapıyoruz.',
  },
  {
    q: 'Fabrika elektrik panosu yapıyor musunuz?',
    a: 'Fabrika ve endüstriyel işletmeler için elektrik pano montajı, kumanda sistemleri ve elektrik bağlantıları konusunda hizmet sunuyoruz.',
  },
  {
    q: 'İş makinelerine elektrik hizmeti veriyor musunuz?',
    a: 'Evet. İş makinelerinde elektrik tesisatı, elektrik arızaları, sensör, röle, kontaktör ve çeşitli kontrol sistemleri konusunda teknik hizmet veriyoruz.',
  },
  {
    q: 'Avize ve spot montajı yapıyor musunuz?',
    a: 'Evet. Avize, LED, spot ve farklı aydınlatma sistemlerinin elektrik bağlantısı ve montajını gerçekleştiriyoruz.',
  },
  {
    q: 'Çalışma saatleriniz nedir?',
    a: 'Her gün 08:00 – 23:00 saatleri arasında hizmet veriyoruz.',
  },
  {
    q: 'Nasıl iletişime geçebilirim?',
    a: '0506 254 76 78 numaralı telefon üzerinden arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.',
  },
];

/** Ana sayfada gösterilecek kısaltılmış liste */
export const homeFaq = faq.slice(0, 6);
