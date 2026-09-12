/**
 * Mahalle bazlı hizmet bölgesi sayfaları — toplu dışa aktarım.
 *
 * Yeni bir ilçeye mahalle sayfaları eklemek için:
 *  1. `src/data/neighborhoods/<ilce>.ts` dosyasında `Neighborhood[]` dizisi oluştur.
 *  2. Aşağıdaki listeye ekle.
 * Sayfalar `/hizmet-bolgeleri/<ilce-slug>/<mahalle-slug>` altında otomatik üretilir.
 */

import type { Neighborhood } from './types';
import { sincanNeighborhoods } from './sincan';
import { etimesgutNeighborhoods } from './etimesgut';
import { yenimahalleNeighborhoods } from './yenimahalle';
import { mamakNeighborhoods } from './mamak';
import { keciorenNeighborhoods } from './kecioren';
import { cankayaNeighborhoods } from './cankaya';

export type { Neighborhood, NeighborhoodContent } from './types';

export const neighborhoods: Neighborhood[] = [
  ...sincanNeighborhoods,
  ...etimesgutNeighborhoods,
  ...yenimahalleNeighborhoods,
  ...mamakNeighborhoods,
  ...keciorenNeighborhoods,
  ...cankayaNeighborhoods,
];

/** Bir ilçeye bağlı mahalle sayfaları */
export function getNeighborhoodsOf(districtSlug: string): Neighborhood[] {
  return neighborhoods.filter((n) => n.districtSlug === districtSlug);
}

export function getNeighborhood(districtSlug: string, slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.districtSlug === districtSlug && n.slug === slug);
}
