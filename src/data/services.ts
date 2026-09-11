export type ServiceCategory = 'ariza' | 'konut' | 'ticari' | 'endustriyel' | 'aydinlatma';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Kısa başlık (footer, menü, breadcrumb) */
  shortTitle: string;
  /** Lucide ikon adı — Icon.astro içinde tanımlı olmalı */
  icon: string;
  category: ServiceCategory;
  /** Kart üzerinde görünen 1 cümlelik açıklama */
  excerpt: string;
  /** Detay sayfası giriş paragrafları */
  description: string[];
  /** Hizmet kapsamı */
  scope: string[];
  /** Çözülen problemler */
  problems: string[];
  /** Çalışma şekli — hizmete özel adımlar */
  process: { title: string; text: string }[];
  faq: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
  /** Ana sayfadaki hızlı kartlarda gösterilsin mi */
  featured: boolean;
  order: number;
}

export const services: Service[] = [
  {
    slug: 'elektrik-ariza',
    title: 'Elektrik Arıza Servisi',
    shortTitle: 'Elektrik Arıza',
    icon: 'zap',
    category: 'ariza',
    excerpt:
      'Sigorta atması, elektrik kesintisi, kaçak ve priz arızaları için Ankara genelinde hızlı arıza tespiti ve onarım.',
    description: [
      'Evinizde ya da iş yerinizde elektrik aniden kesildiğinde, sigorta sürekli attığında ya da bir priz çalışmadığında sorunun kaynağını tahmin etmek zordur. Demir Elektrik olarak Ankara genelinde elektrik arızalarının tespiti ve giderilmesi konusunda 15 yılı aşkın tecrübeyle hizmet veriyoruz.',
      'Arızaya müdahale ederken önce sorunun kaynağını ölçüm cihazlarıyla tespit ediyor, ardından tesisatınızın güvenliğini tehlikeye atmadan kalıcı çözümü uyguluyoruz. Geçici çözümler yerine arızanın tekrar etmemesini hedefliyoruz.',
    ],
    scope: [
      'Sigorta atması ve kaçak akım rölesi arızaları',
      'Elektrik kesintileri ve faz problemleri',
      'Kaçak akım tespiti ve giderilmesi',
      'Priz ve anahtar arızaları',
      'Aydınlatma arızaları',
      'Elektrik tesisatı problemleri',
      'Kablo ve bağlantı problemleri',
      'Sigorta kutusu ve pano arızaları',
    ],
    problems: [
      'Sigorta sürekli atıyor veya kaçak akım rölesi düşüyor',
      'Evin bir bölümünde elektrik yok, diğer bölümünde var',
      'Prizler çalışmıyor ya da ısınıyor',
      'Lambalar titriyor veya yanıp sönüyor',
      'Duvarlarda ya da panoda yanık kokusu var',
      'Su ısıtıcısı, klima veya fırın çalıştığında elektrik gidiyor',
      'Elektrik faturası açıklanamayacak kadar yüksek geliyor',
    ],
    process: [
      { title: 'Arayın', text: 'Telefon veya WhatsApp üzerinden arızayı kısaca anlatın. Konumunuzu ve aciliyeti öğreniyoruz.' },
      { title: 'Tespit', text: 'Yerinde ölçüm ve kontrol ile arızanın gerçek kaynağını belirliyoruz.' },
      { title: 'Onarım', text: 'Arızalı parça ya da hattı güvenli şekilde onarıyor veya yeniliyoruz.' },
      { title: 'Test', text: 'Tesisatı yük altında test edip sorunun tekrar etmeyeceğinden emin oluyoruz.' },
    ],
    faq: [
      {
        q: 'Sigorta atınca ne yapmalıyım?',
        a: 'Önce yüksek güç çeken cihazları (fırın, ısıtıcı, klima) kapatıp sigortayı bir kez kaldırın. Tekrar atıyorsa veya yanık kokusu varsa sigortayı kaldırmayı denemeyin ve bizi arayın.',
      },
      {
        q: 'Arıza için ne kadar sürede geliyorsunuz?',
        a: 'Ankara içindeki konumunuza ve o anki iş yoğunluğuna göre size net bir süre veriyoruz. Arıza çağrılarını 08:00 – 23:00 saatleri arasında değerlendiriyoruz.',
      },
      {
        q: 'Arıza tespiti için ücret alıyor musunuz?',
        a: 'Arızanın niteliğine göre işçilik ve malzeme bilgisini işe başlamadan önce paylaşıyoruz. Sürpriz maliyet çıkarmıyoruz.',
      },
    ],
    seoTitle: 'Ankara Elektrik Arıza Servisi | Sigorta, Kaçak, Priz Arızası',
    seoDescription:
      'Ankara genelinde elektrik arıza servisi. Sigorta atması, elektrik kesintisi, kaçak akım, priz ve aydınlatma arızalarına hızlı müdahale. 08:00 – 23:00. Tel: 0506 254 76 78.',
    featured: true,
    order: 1,
  },
  {
    slug: 'elektrik-tesisati',
    title: 'Elektrik Tesisatı',
    shortTitle: 'Elektrik Tesisatı',
    icon: 'cable',
    category: 'konut',
    excerpt:
      'Ev, villa, bina ve iş yerleri için yeni elektrik tesisatı kurulumu, eski tesisat yenileme ve tesisat kontrolü.',
    description: [
      'Elektrik tesisatı bir yapının görünmeyen ama en kritik altyapısıdır. Doğru kablo kesiti, doğru sigorta değeri ve düzgün topraklama; hem güvenliğinizi hem de cihazlarınızın ömrünü belirler. Demir Elektrik olarak Ankara genelinde sıfırdan tesisat kurulumu ve mevcut tesisatların yenilenmesi konusunda hizmet veriyoruz.',
      'Konut, ticari işletme ve endüstriyel tesislerde projeye uygun tesisat çekiyor; işi bitirmeden önce tüm hatları test ediyoruz. Eski binalarda sık görülen alüminyum kablo, topraklamasız hat ve yetersiz sigorta gibi riskleri tespit edip kalıcı olarak çözüyoruz.',
    ],
    scope: [
      'Yeni elektrik tesisatı kurulumu',
      'Eski tesisat yenileme',
      'Elektrik hattı çekilmesi',
      'Sigorta kutusu ve dağıtım panosu kurulumu',
      'Topraklama hattı',
      'Priz ve anahtar tesisatı',
      'Aydınlatma hattı tesisatı',
      'Tesisat kontrolü ve raporlama',
    ],
    problems: [
      'Eski binada sık sık sigorta atıyor ya da kablolar ısınıyor',
      'Tesisatta topraklama yok, cihazlar çarpıyor',
      'Tadilat sonrası yeni priz ve hatlara ihtiyaç var',
      'Klima, kombi veya ankastre için ayrı güçlü hat gerekiyor',
      'Yeni yapıda projeye uygun tesisat çekilmesi gerekiyor',
    ],
    process: [
      { title: 'Keşif', text: 'Yapıyı yerinde inceliyor, ihtiyaçları ve mevcut tesisatın durumunu belirliyoruz.' },
      { title: 'Planlama', text: 'Hat sayısı, kablo kesitleri, sigorta değerleri ve pano düzenini planlıyoruz.' },
      { title: 'Uygulama', text: 'Tesisatı standartlara uygun şekilde çekiyor, pano ve topraklama bağlantılarını yapıyoruz.' },
      { title: 'Test ve Teslim', text: 'Tüm hatları test ediyor, sistemi çalışır halde teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Eski tesisatımın yenilenmesi gerekip gerekmediğini nasıl anlarım?',
        a: 'Sık sigorta atması, ısınan priz ve kablolar, topraklama olmaması ve 25–30 yaşını geçmiş tesisat yenileme için güçlü işaretlerdir. Yerinde kontrol ile net durumu paylaşıyoruz.',
      },
      {
        q: 'Tesisat yenilemede duvarlar kırılıyor mu?',
        a: 'Mevcut kanal ve borular kullanılabiliyorsa kırım minimumda kalır. Kırım gereken noktaları çalışmaya başlamadan önce sizinle netleştiriyoruz.',
      },
    ],
    seoTitle: 'Ankara Elektrik Tesisatı | Yeni Tesisat ve Tesisat Yenileme',
    seoDescription:
      'Ankara genelinde ev, villa, bina ve iş yerleri için elektrik tesisatı kurulumu, eski tesisat yenileme, hat çekme ve topraklama hizmeti. Demir Elektrik: 0506 254 76 78.',
    featured: false,
    order: 2,
  },
  {
    slug: 'ev-elektrik-tesisati',
    title: 'Ev Elektrik Tesisatı',
    shortTitle: 'Ev Elektrik Tesisatı',
    icon: 'house',
    category: 'konut',
    excerpt:
      'Yeni tesisat, eski tesisat yenileme, priz ve anahtar montajı, sigorta kutusu ve hat çekme işleri.',
    description: [
      'Evinizin elektrik tesisatı her gün kullandığınız cihazların güvenli çalışmasını sağlar. Demir Elektrik olarak Ankara genelinde daire ve müstakil evler için yeni tesisat kurulumu, eski tesisat yenileme ve her türlü ek hat çekme işini yapıyoruz.',
      'Ev tadilatı sırasında mutfak, banyo ve salon için doğru sayıda priz ve doğru güçte hatların planlanması ileride yaşanacak arızaların önüne geçer. İşi yaparken evinizde mümkün olduğunca az kırım ve az kirlilik oluşturmaya özen gösteriyoruz.',
    ],
    scope: [
      'Yeni elektrik tesisatı',
      'Eski tesisat yenileme',
      'Priz montajı',
      'Anahtar montajı',
      'Sigorta kutusu kurulumu ve yenileme',
      'Elektrik hattı çekilmesi',
      'Tesisat kontrolü',
    ],
    problems: [
      'Evde yeterli priz yok, uzatma kablolarıyla idare ediliyor',
      'Mutfakta ankastre veya bulaşık makinesi için ayrı hat gerekiyor',
      'Sigorta kutusu eski tip, kaçak akım rölesi yok',
      'Tadilat sonrası anahtar ve prizlerin yerleri değişecek',
      'Prizlerden çarpılma hissediliyor',
    ],
    process: [
      { title: 'Görüşme', text: 'Evinizdeki ihtiyacı telefon veya WhatsApp üzerinden anlatıyorsunuz.' },
      { title: 'Yerinde İnceleme', text: 'Mevcut tesisatı ve yapılacak işi yerinde görüp netleştiriyoruz.' },
      { title: 'Uygulama', text: 'Hat çekme, priz, anahtar ve sigorta kutusu işlerini düzenli şekilde yapıyoruz.' },
      { title: 'Kontrol', text: 'Tüm noktaları test edip evi temiz ve çalışır halde teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Sadece birkaç priz ekletmek için de gelir misiniz?',
        a: 'Evet. Priz ekleme, anahtar değişimi gibi küçük işler için de Ankara genelinde hizmet veriyoruz.',
      },
      {
        q: 'Kaçak akım rölesi taktırmalı mıyım?',
        a: 'Kesinlikle. Kaçak akım rölesi elektrik çarpmasına ve yangına karşı en temel koruma elemanıdır. Eski sigorta kutularına da kolayca eklenebilir.',
      },
    ],
    seoTitle: 'Ankara Ev Elektrik Tesisatı | Priz, Anahtar, Sigorta Kutusu',
    seoDescription:
      'Ankara genelinde ev elektrik tesisatı: yeni tesisat, eski tesisat yenileme, priz ve anahtar montajı, sigorta kutusu ve hat çekme. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 3,
  },
  {
    slug: 'villa-elektrik-tesisati',
    title: 'Villa Elektrik Tesisatı',
    shortTitle: 'Villa Elektrik Tesisatı',
    icon: 'home',
    category: 'konut',
    excerpt:
      'Villa elektrik altyapısı, iç ve dış mekan aydınlatması, bahçe aydınlatması, pano ve otomasyon altyapısı.',
    description: [
      'Villalar; bahçe, garaj, havuz ve çok katlı yaşam alanlarıyla standart bir daireden çok daha kapsamlı bir elektrik altyapısına ihtiyaç duyar. Demir Elektrik olarak Ankara genelinde villa projelerinde elektrik tesisatının planlanmasından aydınlatma ve otomasyon altyapısına kadar tüm süreci üstleniyoruz.',
      'Dış mekan hatlarında neme ve hava koşullarına dayanıklı malzeme kullanıyor, bahçe ve peyzaj aydınlatmasını yapının mimarisine uygun şekilde tasarlıyoruz. İleride akıllı ev sistemi kurmak isterseniz altyapıyı buna hazır bırakıyoruz.',
    ],
    scope: [
      'Villa elektrik altyapısı ve ana pano',
      'İç aydınlatma tesisatı',
      'Dış mekan aydınlatması',
      'Bahçe ve peyzaj aydınlatması',
      'Pano sistemleri',
      'LED sistemleri',
      'Otomasyon ve akıllı ev altyapısı',
      'Garaj, havuz ve teknik hacim elektriği',
    ],
    problems: [
      'Yeni villa inşaatında projeye uygun tesisat gerekiyor',
      'Bahçe ve dış cephe aydınlatması yetersiz veya arızalı',
      'Çok katlı yapıda güç dağılımı ve pano düzeni yetersiz',
      'Havuz ve sulama sistemleri için güvenli hat gerekiyor',
      'Akıllı ev sistemine geçiş için altyapı hazırlanacak',
    ],
    process: [
      { title: 'Keşif', text: 'Villayı ve projeyi yerinde inceliyor, ihtiyaç listesini birlikte oluşturuyoruz.' },
      { title: 'Planlama', text: 'Pano düzeni, hat dağılımı, aydınlatma ve otomasyon altyapısını planlıyoruz.' },
      { title: 'Uygulama', text: 'İç ve dış mekan tesisatını aşama aşama uyguluyoruz.' },
      { title: 'Teslim', text: 'Tüm sistemleri test edip çalışır halde teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Villa için kaç amperlik pano gerekir?',
        a: 'Bu; villanın büyüklüğüne, ısıtma tipine, klima ve havuz gibi yüklerine göre değişir. Keşif sırasında toplam yükü hesaplayarak doğru pano ve sigorta değerlerini belirliyoruz.',
      },
      {
        q: 'Bahçe aydınlatmasında hangi ürünleri kullanıyorsunuz?',
        a: 'Dış mekan için IP koruma sınıfı uygun, neme ve UV\'ye dayanıklı armatür ve kablolar kullanıyoruz. Ürün seçimini bütçenize ve peyzaj tasarımına göre birlikte yapıyoruz.',
      },
    ],
    seoTitle: 'Ankara Villa Elektrik Tesisatı | Bahçe Aydınlatma ve Otomasyon',
    seoDescription:
      'Ankara genelinde villa elektrik tesisatı: villa elektrik altyapısı, iç ve dış aydınlatma, bahçe aydınlatması, pano ve otomasyon altyapısı. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 4,
  },
  {
    slug: 'bina-elektrik-tesisati',
    title: 'Bina Elektrik Tesisatı',
    shortTitle: 'Bina Elektrik Tesisatı',
    icon: 'building',
    category: 'konut',
    excerpt:
      'Apartman ve site elektrik tesisatı, ortak alan sistemleri, merdiven aydınlatması, pano ve sayaç bağlantıları.',
    description: [
      'Apartman ve sitelerde elektrik tesisatı; dairelerin yanı sıra ortak alanlar, asansör, hidrofor, merdiven aydınlatması ve sayaç panolarını da kapsar. Demir Elektrik olarak Ankara genelinde bina yöneticileri ve müteahhitlerle çalışarak bina elektrik tesisatının kurulumunu ve yenilenmesini yapıyoruz.',
      'Eski binalarda ana kolon hattı ve sayaç panosu yenilemesi hem güvenlik hem de kapasite açısından büyük fark yaratır. Çalışmayı bina sakinlerinin günlük hayatını en az etkileyecek şekilde planlıyoruz.',
    ],
    scope: [
      'Apartman elektrik tesisatı',
      'Ortak alan elektrik sistemi',
      'Merdiven ve otomat aydınlatması',
      'Pano kurulumu ve yenileme',
      'Sayaç bağlantıları ve sayaç panosu',
      'Ana kolon hattı yenileme',
      'Asansör, hidrofor ve kazan dairesi elektriği',
      'Elektrik hattı yenileme',
    ],
    problems: [
      'Merdiven otomatı ve ortak alan aydınlatması sık arızalanıyor',
      'Sayaç panosu eski, kablolar düzensiz ve güvensiz',
      'Ana kolon hattı kapasitesi yeni yüklere yetmiyor',
      'Yeni inşa edilen binada tesisat çekilecek',
      'Ortak alan elektrik tüketimi yüksek, LED dönüşüm isteniyor',
    ],
    process: [
      { title: 'Görüşme', text: 'Bina yönetimi veya müteahhit ile ihtiyaç ve kapsamı netleştiriyoruz.' },
      { title: 'Keşif', text: 'Mevcut tesisatı, pano ve kolon hatlarını yerinde inceliyoruz.' },
      { title: 'Uygulama', text: 'Çalışmayı bina sakinlerini en az etkileyecek şekilde planlayıp uyguluyoruz.' },
      { title: 'Teslim', text: 'Sistemi test edip bina yönetimine çalışır halde teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Apartman ortak alanlarını LED\'e çevirebilir misiniz?',
        a: 'Evet. Merdiven, koridor ve otopark aydınlatmasını sensörlü LED armatürlerle yenileyerek hem tüketimi düşürüyor hem de bakım ihtiyacını azaltıyoruz.',
      },
      {
        q: 'Sayaç panosu yenilenirken elektrik uzun süre kesilir mi?',
        a: 'Çalışmayı önceden planladığımız için kesinti süresi kısa tutulur ve bina sakinleri önceden bilgilendirilir.',
      },
    ],
    seoTitle: 'Ankara Bina ve Apartman Elektrik Tesisatı | Pano, Sayaç, Ortak Alan',
    seoDescription:
      'Ankara genelinde apartman ve site elektrik tesisatı: ortak alan elektriği, merdiven aydınlatması, pano kurulumu, sayaç bağlantıları ve hat yenileme. Tel: 0506 254 76 78.',
    featured: true,
    order: 5,
  },
  {
    slug: 'magaza-elektrik-tesisati',
    title: 'Mağaza Elektrik Tesisatı',
    shortTitle: 'Mağaza Elektrik Tesisatı',
    icon: 'store',
    category: 'ticari',
    excerpt:
      'Mağaza elektrik altyapısı, dekoratif aydınlatma, spot ve LED sistemleri, priz sistemleri ve tadilat elektrik işleri.',
    description: [
      'Bir mağazanın aydınlatması ürünlerinizi nasıl gösterdiğinizi, elektrik altyapısı ise kasa, soğutucu ve klima gibi cihazlarınızın kesintisiz çalışmasını belirler. Demir Elektrik olarak Ankara genelinde mağaza, showroom ve ticari alanların elektrik tesisatı ve aydınlatma uygulamalarını yapıyoruz.',
      'Mağaza açılış tarihleri genellikle sıkışıktır. Tadilat ekibiyle koordineli çalışarak elektrik işlerini zamanında teslim etmeyi ve açılışı geciktirmemeyi önceliğimiz olarak görüyoruz.',
    ],
    scope: [
      'Mağaza elektrik altyapısı',
      'Dekoratif aydınlatma',
      'Spot sistemleri (ray spot, gömme spot)',
      'LED sistemleri ve LED şerit',
      'Priz sistemleri ve kasa hatları',
      'Pano kurulumu',
      'Tadilat elektrik işleri',
      'Tabela ve vitrin aydınlatma bağlantıları',
    ],
    problems: [
      'Yeni mağaza açılıyor, tesisat ve aydınlatma sıfırdan yapılacak',
      'Mevcut aydınlatma ürünleri yeterince iyi göstermiyor',
      'Soğutucu, klima ve kasa için ayrı güçlü hatlar gerekiyor',
      'Tadilat sonrası pano ve hat düzeni değişecek',
      'Vitrin ve tabela aydınlatması arızalı',
    ],
    process: [
      { title: 'Görüşme', text: 'Mağazanın büyüklüğü, konsepti ve açılış takvimini öğreniyoruz.' },
      { title: 'Planlama', text: 'Aydınlatma yerleşimi, priz noktaları ve pano düzenini planlıyoruz.' },
      { title: 'Uygulama', text: 'Tadilat ekibiyle koordineli çalışarak tesisatı ve aydınlatmayı kuruyoruz.' },
      { title: 'Açılışa Hazır', text: 'Tüm sistemleri test edip mağazayı açılışa hazır teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Mağaza için hangi aydınlatma daha uygun: ray spot mu gömme spot mu?',
        a: 'Ürün teşhiri öne çıkacaksa yönlendirilebilir ray spot, genel aydınlatma için gömme spot ve LED panel tercih edilir. Konseptinize göre karma bir çözüm de öneriyoruz.',
      },
      {
        q: 'AVM içindeki mağazalarda da çalışıyor musunuz?',
        a: 'Evet. AVM yönetimlerinin teknik şartnamelerine uygun çalışıyor ve gerekli koordinasyonu sağlıyoruz.',
      },
    ],
    seoTitle: 'Ankara Mağaza Elektrik Tesisatı | Spot, LED ve Dekoratif Aydınlatma',
    seoDescription:
      'Ankara genelinde mağaza elektrik tesisatı, dekoratif aydınlatma, ray spot ve LED sistemleri, priz ve pano kurulumu, tadilat elektrik işleri. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 6,
  },
  {
    slug: 'fabrika-elektrik',
    title: 'Fabrika Elektrik Sistemleri',
    shortTitle: 'Fabrika Elektrik',
    icon: 'factory',
    category: 'endustriyel',
    excerpt:
      'Fabrika ve üretim tesisleri için endüstriyel elektrik tesisatı, pano montajı, makine enerji bağlantıları ve güç dağıtımı.',
    description: [
      'Üretim tesislerinde elektrik altyapısı doğrudan üretim sürekliliği demektir. Demir Elektrik olarak Ankara genelinde fabrika, atölye ve endüstriyel işletmeler için elektrik tesisatı, güç dağıtımı, pano montajı ve makine enerji bağlantıları konusunda hizmet veriyoruz.',
      'Endüstriyel tesislerde üç faz güç dağıtımı, motor beslemeleri, kompanzasyon ve pano düzeni doğru kurulmadığında hem enerji kaybı hem de plansız duruşlar yaşanır. Yeni makine yatırımlarında enerji bağlantısını, mevcut tesislerde ise arıza kaynaklarını sistematik şekilde ele alıyoruz.',
    ],
    scope: [
      'Fabrika elektrik tesisatı',
      'Endüstriyel elektrik altyapısı',
      'Elektrik pano montajı',
      'Makine enerji bağlantıları',
      'Güç dağıtımı ve busbar sistemleri',
      'Kablo tesisatı ve kablo tavası uygulamaları',
      'Elektrik arıza tespiti',
      'Kompanzasyon panosu bağlantıları',
      'Endüstriyel aydınlatma',
    ],
    problems: [
      'Yeni alınan makinenin enerji bağlantısı yapılacak',
      'Tesiste voltaj düşümü, ısınan kablolar ve sık duruşlar yaşanıyor',
      'Üretim hattı genişliyor, mevcut pano kapasitesi yetmiyor',
      'Kompanzasyon cezası geliyor',
      'Tesis elektrik altyapısı düzensiz, arıza kaynağı bulunamıyor',
    ],
    process: [
      { title: 'Teknik Görüşme', text: 'Tesis sorumlusuyla ihtiyacı, makine güçlerini ve yerleşimi konuşuyoruz.' },
      { title: 'Keşif ve Planlama', text: 'Yük hesabı, pano düzeni ve kablo güzergahını planlıyoruz.' },
      { title: 'Uygulama', text: 'Üretimi mümkün olduğunca aksatmadan tesisat ve pano işlerini uyguluyoruz.' },
      { title: 'Devreye Alma', text: 'Sistemi yük altında test edip devreye alıyoruz.' },
    ],
    faq: [
      {
        q: 'Üretimi durdurmadan çalışabiliyor musunuz?',
        a: 'Çoğu işi vardiya dışı saatlere ya da hafta sonuna planlayarak üretim kaybını en aza indiriyoruz. Zorunlu kesintileri önceden bildiriyoruz.',
      },
      {
        q: 'Ankara dışındaki OSB\'lere de geliyor musunuz?',
        a: 'Hizmet bölgemiz Ankara ilidir. Sincan, Kahramankazan, Polatlı ve Ankara\'daki diğer organize sanayi bölgelerine hizmet veriyoruz.',
      },
    ],
    seoTitle: 'Ankara Fabrika Elektrik | Endüstriyel Tesisat, Pano ve Güç Dağıtımı',
    seoDescription:
      'Ankara genelinde fabrika ve endüstriyel tesisler için elektrik tesisatı, pano montajı, makine enerji bağlantıları, güç dağıtımı ve arıza tespiti. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 7,
  },
  {
    slug: 'elektrik-pano-montaji',
    title: 'Elektrik Pano Montajı',
    shortTitle: 'Elektrik Pano',
    icon: 'circuit-board',
    category: 'endustriyel',
    excerpt:
      'Dağıtım, kumanda, motor ve otomasyon panoları; kontaktör, röle ve sigorta sistemleri; pano revizyonu.',
    description: [
      'Elektrik panosu bir tesisatın kalbidir; koruma, dağıtım ve kumanda işlevlerinin tamamı burada toplanır. Demir Elektrik olarak Ankara genelinde konut, ticari işletme ve fabrikalar için elektrik pano montajı, yeni pano kurulumu ve mevcut panoların revizyonu konusunda hizmet veriyoruz.',
      'Panoyu kurarken kablo etiketleme, doğru bara ve sigorta seçimi, kontaktör ve röle bağlantılarının şemaya uygunluğu gibi detaylara önem veriyoruz. Düzenli ve şemalı bir pano ileride oluşacak arızaların dakikalar içinde bulunmasını sağlar.',
    ],
    scope: [
      'Dağıtım panoları',
      'Kumanda panoları',
      'Motor panoları ve yol verme sistemleri',
      'Otomasyon panoları',
      'Kontaktör sistemleri',
      'Röle sistemleri',
      'Sigorta ve koruma sistemleri',
      'Pano revizyonu ve bakım',
      'Kompanzasyon panoları',
    ],
    problems: [
      'Mevcut pano düzensiz, etiketsiz ve arıza bulmak saatler alıyor',
      'Panoda ısınma, kararmış bağlantılar ve yanık kokusu var',
      'Yeni makine ya da hat için pano kapasitesi yetersiz',
      'Motorlar için yol verme ve koruma sistemi kurulacak',
      'Pano yenilenerek kaçak akım ve aşırı akım koruması eklenecek',
    ],
    process: [
      { title: 'İhtiyaç Analizi', text: 'Panonun besleyeceği yükleri ve kumanda gereksinimlerini belirliyoruz.' },
      { title: 'Tasarım', text: 'Pano şemasını, malzeme listesini ve yerleşimi hazırlıyoruz.' },
      { title: 'Montaj', text: 'Panoyu atölyede ya da yerinde düzenli ve etiketli şekilde monte ediyoruz.' },
      { title: 'Devreye Alma', text: 'Bağlantıları test edip panoyu şemasıyla birlikte teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Pano şeması veriyor musunuz?',
        a: 'Evet. Montajını yaptığımız panoları etiketli ve şemasıyla birlikte teslim ediyoruz. Böylece ileride yapılacak müdahaleler kolaylaşır.',
      },
      {
        q: 'Eski bir panoyu tamamen değiştirmek mi yoksa revize etmek mi gerekir?',
        a: 'Gövde ve bara sistemi sağlamsa revizyon yeterli olabilir. Yerinde kontrol ederek en ekonomik ve güvenli seçeneği öneriyoruz.',
      },
    ],
    seoTitle: 'Ankara Elektrik Pano Montajı | Dağıtım, Kumanda ve Otomasyon Panoları',
    seoDescription:
      'Ankara genelinde elektrik pano montajı: dağıtım, kumanda, motor ve otomasyon panoları, kontaktör ve röle sistemleri, pano revizyonu. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 8,
  },
  {
    slug: 'is-makinesi-elektrik-otomasyonu',
    title: 'İş Makineleri Elektrik ve Otomasyon',
    shortTitle: 'İş Makinesi Elektrik',
    icon: 'tractor',
    category: 'endustriyel',
    excerpt:
      'İş makinelerinde elektrik arızası, tesisat, sensör, röle, kontaktör ve kontrol sistemleri için teknik hizmet.',
    description: [
      'İş makineleri zorlu şartlarda çalışır; titreşim, toz, nem ve sıcaklık elektrik tesisatını ve sensörleri zamanla yıpratır. Demir Elektrik olarak Ankara genelinde iş makineleri, şantiye ekipmanları ve sabit endüstriyel makinelerin elektrik tesisatı, arızaları ve kontrol sistemleri konusunda teknik hizmet veriyoruz.',
      'Makinenin durması şantiyede ya da tesiste doğrudan zaman ve para kaybıdır. Arızayı ölçüm cihazlarıyla sistematik olarak tespit ediyor, dayanıklı malzemeyle kalıcı onarım yapıyoruz.',
    ],
    scope: [
      'İş makinesi elektrik arızaları',
      'Makine elektrik tesisatı ve kablo yenileme',
      'Sensör bağlantıları',
      'Röle sistemleri',
      'Kontaktör sistemleri',
      'Kontrol üniteleri ve kumanda sistemleri',
      'Elektrik otomasyonu',
      'Arıza tespiti ve raporlama',
    ],
    problems: [
      'Makine aniden duruyor ya da çalışmıyor, nedeni bulunamıyor',
      'Sensörler hatalı sinyal veriyor',
      'Kablo tesisatı yıpranmış, kısa devre riski var',
      'Kontaktör ya da röle sürekli yanıyor',
      'Kontrol paneli ya da kumanda sistemi yenilenecek',
    ],
    process: [
      { title: 'Bilgi Alma', text: 'Makinenin tipini, arızanın belirtilerini ve konumu öğreniyoruz.' },
      { title: 'Yerinde Tespit', text: 'Şantiye ya da tesiste ölçüm yaparak arızanın kaynağını buluyoruz.' },
      { title: 'Onarım', text: 'Arızalı bileşeni onarıyor veya dayanıklı muadiliyle değiştiriyoruz.' },
      { title: 'Test', text: 'Makineyi çalışma koşullarında test ederek teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Şantiyeye gelip yerinde müdahale ediyor musunuz?',
        a: 'Evet. Ankara genelindeki şantiye, tesis ve depolara giderek makinenin bulunduğu yerde arıza tespiti ve onarım yapıyoruz.',
      },
      {
        q: 'Hangi tür makinelerle çalışıyorsunuz?',
        a: 'Şantiye iş makineleri, forklift ve sabit endüstriyel makinelerin elektrik ve kontrol sistemleri üzerinde çalışıyoruz. Makinenizin tipini iletirseniz net bilgi veririz.',
      },
    ],
    seoTitle: 'Ankara İş Makinesi Elektrik ve Otomasyon | Arıza, Sensör, Kontrol',
    seoDescription:
      'Ankara genelinde iş makineleri elektrik arızası, tesisat, sensör, röle, kontaktör ve kontrol sistemleri için yerinde teknik hizmet. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 9,
  },
  {
    slug: 'led-aydinlatma',
    title: 'LED Aydınlatma',
    shortTitle: 'LED Aydınlatma',
    icon: 'lightbulb',
    category: 'aydinlatma',
    excerpt:
      'İç ve dış mekan LED aydınlatma montajı, LED şerit uygulamaları ve dekoratif LED sistemleri.',
    description: [
      'LED aydınlatma düşük tüketimi ve uzun ömrüyle hem konutlarda hem ticari alanlarda standart haline geldi. Demir Elektrik olarak Ankara genelinde ev, villa, mağaza, ofis ve endüstriyel alanlar için LED aydınlatma montajı ve LED şerit uygulamaları yapıyoruz.',
      'Asma tavan LED şerit uygulamaları, dolap içi aydınlatma, dış cephe ve bahçe LED sistemleri gibi uygulamalarda doğru sürücü ve doğru güç hesabı ürün ömrünü belirler. Estetik sonucun yanı sıra güvenli bağlantı ve düzgün gizlenmiş kablolamaya önem veriyoruz.',
    ],
    scope: [
      'LED aydınlatma montajı',
      'LED şerit uygulamaları',
      'İç mekan LED sistemleri',
      'Dış mekan LED sistemleri',
      'Dekoratif LED uygulamaları',
      'Asma tavan ve gizli ışık uygulamaları',
      'LED panel ve armatür dönüşümü',
    ],
    problems: [
      'Asma tavana gizli LED şerit aydınlatma yapılacak',
      'Mevcut floresan ve halojen armatürler LED\'e dönüştürülecek',
      'LED şeritler yanıp sönüyor ya da bir bölümü yanmıyor',
      'Dış cephe ve bahçe için LED aydınlatma planlanıyor',
      'Mağaza ya da ofiste enerji tüketimi düşürülmek isteniyor',
    ],
    process: [
      { title: 'Görüşme', text: 'Uygulama alanını ve istenen görünümü konuşuyoruz.' },
      { title: 'Planlama', text: 'LED tipi, güç, sürücü ve kablo güzergahını belirliyoruz.' },
      { title: 'Montaj', text: 'LED sistemini temiz ve gizlenmiş kablolamayla monte ediyoruz.' },
      { title: 'Kontrol', text: 'Tüm hatları test edip sistemi teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'LED şeritler neden bir süre sonra bozuluyor?',
        a: 'En sık nedenler yetersiz güçte sürücü, uzun hatlarda voltaj düşümü ve kötü bağlantıdır. Doğru hesaplanmış sürücü ve besleme noktalarıyla bu sorunlar önlenir.',
      },
      {
        q: 'Mevcut armatürlerimi LED\'e çevirebilir misiniz?',
        a: 'Evet. Floresan, halojen ve klasik armatürleri LED panel, LED spot ya da LED tüp ile değiştiriyoruz.',
      },
    ],
    seoTitle: 'Ankara LED Aydınlatma Montajı | LED Şerit ve Dekoratif LED',
    seoDescription:
      'Ankara genelinde LED aydınlatma montajı, LED şerit uygulamaları, iç ve dış mekan LED sistemleri, dekoratif LED ve armatür dönüşümü. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 10,
  },
  {
    slug: 'spot-montaji',
    title: 'Spot Montajı',
    shortTitle: 'Spot Montajı',
    icon: 'sun',
    category: 'aydinlatma',
    excerpt:
      'Gömme spot, ray spot ve dekoratif spot sistemlerinin elektrik tesisatı ve montajı; ev, ofis ve mağaza uygulamaları.',
    description: [
      'Spot aydınlatma; salon, mutfak, ofis ve mağazalarda hem genel hem de vurgu aydınlatması için en çok tercih edilen çözümdür. Demir Elektrik olarak Ankara genelinde gömme spot, sıva üstü spot ve ray spot sistemlerinin elektrik tesisatını ve montajını yapıyoruz.',
      'Spotların sayısı, yerleşimi ve ışık rengi mekanın atmosferini belirler. Montaj öncesinde yerleşimi sizinle birlikte planlıyor, asma tavan ya da alçıpan üzerinde delikleri düzgün ve simetrik açıyoruz.',
    ],
    scope: [
      'Spot aydınlatma tesisatı',
      'Gömme spot montajı',
      'Ray spot montajı',
      'Sıva üstü ve dekoratif spot',
      'Mağaza spot sistemleri',
      'Ev spot sistemleri',
      'Ofis spot sistemleri',
    ],
    problems: [
      'Asma tavan yapıldı, spot yerleşimi ve montajı gerekiyor',
      'Mevcut spotlar yanmıyor ya da trafo arızalı',
      'Mağazada ürünleri öne çıkaracak ray spot sistemi kurulacak',
      'Halojen spotlar LED spot ile değiştirilecek',
      'Ofis çalışma alanlarında aydınlatma yetersiz',
    ],
    process: [
      { title: 'Görüşme', text: 'Mekanı ve istediğiniz aydınlatma düzenini konuşuyoruz.' },
      { title: 'Yerleşim Planı', text: 'Spot sayısını, yerleşimi ve ışık rengini birlikte belirliyoruz.' },
      { title: 'Montaj', text: 'Tesisatı çekip spotları düzgün ve simetrik şekilde monte ediyoruz.' },
      { title: 'Kontrol', text: 'Tüm spotları test edip mekanı temiz teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Bir odaya kaç spot gerekir?',
        a: 'Odanın büyüklüğüne, tavan yüksekliğine ve kullanım amacına göre değişir. Yerinde inceleme sırasında ideal sayıyı ve yerleşimi öneriyoruz.',
      },
      {
        q: 'Sıcak beyaz mı soğuk beyaz mı tercih etmeliyim?',
        a: 'Yaşam alanları için genellikle sıcak beyaz (2700–3000K), mutfak, ofis ve mağazalar için doğal ya da soğuk beyaz (4000K ve üzeri) tercih edilir.',
      },
    ],
    seoTitle: 'Ankara Spot Montajı | Gömme Spot ve Ray Spot Sistemleri',
    seoDescription:
      'Ankara genelinde gömme spot, ray spot ve dekoratif spot sistemlerinin elektrik tesisatı ve montajı. Ev, ofis ve mağaza spot uygulamaları. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 11,
  },
  {
    slug: 'avize-montaji',
    title: 'Avize Montajı',
    shortTitle: 'Avize Montajı',
    icon: 'lamp',
    category: 'aydinlatma',
    excerpt:
      'Avize kurulumu, sarkıt montajı, tavan aydınlatması ve büyük avizelerin güvenli elektrik bağlantısı.',
    description: [
      'Avize montajı basit görünse de ağır avizelerin tavana güvenli şekilde sabitlenmesi ve elektrik bağlantısının doğru yapılması uzmanlık ister. Demir Elektrik olarak Ankara genelinde standart ve dekoratif avizelerin, sarkıtların ve tavan aydınlatmalarının montajını yapıyoruz.',
      'Büyük ve ağır avizelerde tavan tipine uygun dübel ve askı sistemi kullanıyor, bağlantıyı klemensle güvenli şekilde yapıyoruz. Montaj sonrasında avizenin dengesini ve tüm lambaların çalıştığını kontrol ediyoruz.',
    ],
    scope: [
      'Avize kurulumu',
      'Sarkıt montajı',
      'Tavan aydınlatması',
      'Dekoratif aydınlatma montajı',
      'Büyük ve ağır avize montajları',
      'Avize elektrik bağlantıları',
      'Avize sökme ve taşıma sonrası yeniden montaj',
    ],
    problems: [
      'Yeni alınan avizenin montajı yapılacak',
      'Ağır avize için tavanın taşıyıp taşımayacağı bilinmiyor',
      'Taşınma sonrası avizeler yeniden takılacak',
      'Avize yanmıyor ya da bazı kolları çalışmıyor',
      'Tavanda avize çıkışı yok, yeni hat çekilmesi gerekiyor',
    ],
    process: [
      { title: 'Görüşme', text: 'Avizenin tipini, ağırlığını ve monte edileceği tavanı öğreniyoruz.' },
      { title: 'Hazırlık', text: 'Tavan tipine uygun askı ve sabitleme malzemesini belirliyoruz.' },
      { title: 'Montaj', text: 'Avizeyi güvenli şekilde sabitleyip elektrik bağlantısını yapıyoruz.' },
      { title: 'Kontrol', text: 'Denge ve çalışma kontrolü yaparak teslim ediyoruz.' },
    ],
    faq: [
      {
        q: 'Alçıpan tavana ağır avize takılabilir mi?',
        a: 'Doğru askı sistemiyle mümkündür. Ağır avizelerde alçıpanın arkasındaki beton tavana ya da taşıyıcı profile sabitleme yapıyoruz.',
      },
      {
        q: 'Tek bir avize montajı için de geliyor musunuz?',
        a: 'Evet. Ankara genelinde tek avize montajı için de hizmet veriyoruz.',
      },
    ],
    seoTitle: 'Ankara Avize Montajı | Sarkıt ve Tavan Aydınlatma Montajı',
    seoDescription:
      'Ankara genelinde avize montajı, sarkıt montajı, tavan aydınlatması ve büyük avizelerin güvenli elektrik bağlantısı. Demir Elektrik: 0506 254 76 78.',
    featured: true,
    order: 12,
  },
];

export const servicesSorted = [...services].sort((a, b) => a.order - b.order);

export const featuredServices = servicesSorted.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  ariza: 'Arıza Servisi',
  konut: 'Konut Elektrik',
  ticari: 'Ticari Elektrik',
  endustriyel: 'Endüstriyel Elektrik',
  aydinlatma: 'Aydınlatma',
};
