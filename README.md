# Demir Elektrik – Kurumsal Web Sitesi

Ankara genelinde elektrik hizmeti veren Demir Elektrik için Astro ile geliştirilmiş, statik, mobile-first ve yerel SEO odaklı kurumsal site.

## Kurulum ve çalıştırma

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # görselleri üretir + dist/ klasörüne statik çıktı alır
npm run preview   # build çıktısını yerelde önizler
```

Node.js 18+ gerekir.

Yayın: GitHub'a push edilen her commit Vercel tarafından otomatik yayınlanır (`vercel.json`). Vercel kurulumu ve alternatif cPanel yükleme adımları için [DEPLOY.md](DEPLOY.md) dosyasına bak.

## Yayına almadan önce

1. **Alan adı:** `src/data/site-url.mjs` içindeki `SITE_URL` değerini gerçek alan adıyla değiştir. Canonical, sitemap, Open Graph ve JSON-LD bu değeri kullanır. `public/robots.txt` içindeki sitemap adresini de güncelle.
2. **Hero fotoğrafı:** `public/images/hero.webp` olarak gerçek bir elektrik teknisyeni / pano fotoğrafı koy ve `src/components/Hero.astro` içindeki `<img src>` yolunu değiştir.
3. **Proje fotoğrafları:** `public/images/projects/` altına WebP fotoğrafları koy, `src/data/projects.ts` içine kayıt ekle ve `placeholder: false` yap.
4. **İletişim formu:** Varsayılan olarak talebi WhatsApp'a ön-yazılı mesaj olarak yönlendirir. Backend/form servisi eklendiğinde `src/components/ContactForm.astro` içinde `data-mode="post"` ve `action` ayarla.

## Klasör yapısı

```
src/
├── components/   Header, Footer, Hero, ServiceCard, CTASection, FAQAccordion, ...
├── data/         site.ts (firma bilgileri), services.ts, districts.ts, faq.ts, projects.ts
├── layouts/      BaseLayout.astro (meta, OG, JSON-LD, header/footer)
├── pages/        Route'lar (hizmetler/[slug], hizmet-bolgeleri/[slug], ...)
├── styles/       global.css (renk sistemi, tipografi, yardımcı sınıflar)
└── utils/        seo.ts (schema.org üreticileri)
public/           robots.txt, manifest, favicon, SVG görseller
scripts/          generate-images.mjs (OG image, PWA ikonları, galeri placeholder'ları)
```

## İçerik yönetimi

- **Yeni hizmet:** `src/data/services.ts` dizisine kayıt ekle. Sayfa, kart, footer ve sitemap otomatik güncellenir.
- **Yeni ilçe landing page:** `src/data/districts.ts` içinde ilgili ilçeye `content` alanı ekle. İçeriği olmayan ilçeler sadece etiket olarak listelenir (duplicate content oluşmaz).
- **Firma bilgileri:** Telefon, adres ve çalışma saatleri yalnızca `src/data/site.ts` içinde tanımlıdır.

## Sayfalar

| URL | Açıklama |
| --- | --- |
| `/` | Ana sayfa |
| `/hizmetler` ve `/hizmetler/<slug>` | 12 hizmet detay sayfası |
| `/hizmet-bolgeleri` ve `/hizmet-bolgeleri/<slug>` | 11 özgün ilçe/semt landing page |
| `/hakkimizda`, `/projeler`, `/sss`, `/iletisim` | Kurumsal sayfalar |
| `/kvkk-aydinlatma-metni`, `/gizlilik-politikasi`, `/cerez-politikasi` | Yasal sayfalar |
| `/404` | Hata sayfası |
