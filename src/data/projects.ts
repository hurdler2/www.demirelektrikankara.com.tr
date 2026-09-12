/**
 * Projeler / uygulamalar galerisi.
 *
 * Gerçek iş fotoğrafları geldiğinde:
 *  1. Fotoğrafı `public/images/projects/` altına WebP olarak koy (önerilen: 1200x900).
 *  2. Aşağıya yeni bir kayıt ekle (ya da mevcut placeholder kaydı düzenle).
 *  3. `placeholder: false` yap.
 *
 * `placeholder: true` olan kayıtlar galeride "Örnek görsel" etiketiyle gösterilir;
 * böylece ziyaretçiye gerçek proje fotoğrafı izlenimi verilmez.
 *
 * Video eklemek için:
 *  1. Videoyu `public/videos/projects/` altına MP4 (H.264) olarak koy; önerilen en fazla 20 MB.
 *  2. İstersen kapak görselini `public/images/projects/` altına koy ve `image` alanına yaz.
 *     Kapak verilmezse tarayıcı videonun ilk karesini gösterir.
 *  3. Kayda `video: '/videos/projects/dosya.mp4'` ekle. Kart üzerinde oynat simgesi çıkar,
 *     lightbox'ta video kontrollerle oynatılır.
 */

export const projectCategories = [
  { key: 'tesisat', label: 'Elektrik Tesisatı' },
  { key: 'pano', label: 'Elektrik Panoları' },
  { key: 'fabrika', label: 'Fabrika Elektrik' },
  { key: 'aydinlatma', label: 'Aydınlatma' },
  { key: 'led', label: 'LED Uygulamaları' },
  { key: 'is-makinesi', label: 'İş Makineleri' },
  { key: 'villa', label: 'Villa Projeleri' },
  { key: 'magaza', label: 'Mağaza Projeleri' },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]['key'];

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  /** public/ altındaki görsel yolu. Video kayıtlarında kapak (poster) olarak kullanılır, isteğe bağlı. */
  image?: string;
  /** Lightbox'ta gösterilecek büyük görsel; boşsa image kullanılır */
  imageLarge?: string;
  /** public/ altındaki MP4 yolu. Verilirse kart ve lightbox video olarak çalışır. */
  video?: string;
  alt: string;
  /** İlçe / bölge (isteğe bağlı) */
  location?: string;
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    id: 'p-tesisat-1',
    title: 'Elektrik Tesisatı Uygulaması',
    category: 'tesisat',
    image: '/images/projects/placeholder-tesisat.svg',
    alt: 'Elektrik tesisatı uygulaması için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-pano-1',
    title: 'Elektrik Pano Montajı',
    category: 'pano',
    image: '/images/projects/placeholder-pano.svg',
    alt: 'Elektrik pano montajı için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-fabrika-1',
    title: 'Fabrika Elektrik Altyapısı',
    category: 'fabrika',
    image: '/images/projects/placeholder-fabrika.svg',
    alt: 'Fabrika elektrik altyapısı için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-aydinlatma-1',
    title: 'Mutfak Tezgah Altı LED Aydınlatma',
    category: 'aydinlatma',
    image: '/images/projects/aydinlatma-1.webp',
    video: '/videos/projects/aydinlatma-1.mp4',
    alt: 'Demir Elektrik teknisyeni mutfak dolabı altına LED şerit aydınlatma monte ediyor',
    location: 'Ankara',
    placeholder: false,
  },
  {
    id: 'p-led-1',
    title: 'LED Şerit Uygulaması',
    category: 'led',
    image: '/images/projects/placeholder-led.svg',
    alt: 'LED şerit uygulaması için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-is-makinesi-1',
    title: 'İş Makinesi Elektrik Sistemi',
    category: 'is-makinesi',
    image: '/images/projects/placeholder-is-makinesi.svg',
    alt: 'İş makinesi elektrik sistemi için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-villa-1',
    title: 'Villa Elektrik ve Aydınlatma',
    category: 'villa',
    image: '/images/projects/placeholder-villa.svg',
    alt: 'Villa elektrik ve aydınlatma projesi için örnek görsel',
    placeholder: true,
  },
  {
    id: 'p-magaza-1',
    title: 'Mağaza Aydınlatma Sistemi',
    category: 'magaza',
    image: '/images/projects/placeholder-magaza.svg',
    alt: 'Mağaza aydınlatma sistemi için örnek görsel',
    placeholder: true,
  },
];

export function getCategoryLabel(key: ProjectCategory): string {
  return projectCategories.find((c) => c.key === key)?.label ?? key;
}
