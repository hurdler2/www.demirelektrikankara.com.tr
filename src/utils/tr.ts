/**
 * Türkçe ek yardımcıları.
 *
 * Özel isimlere kesme işaretiyle gelen bulunma hâli (-da/-de/-ta/-te) ekini
 * büyük ve küçük ünlü uyumu ile ünsüz sertleşmesine göre üretir.
 *
 *   locative('Sincan')    → "Sincan'da"
 *   locative('Yenikent')  → "Yenikent'te"
 *   locative('Etimesgut') → "Etimesgut'ta"
 *   locative('Keçiören')  → "Keçiören'de"
 *
 * "Gölbaşı" gibi iyelik ekiyle biten adlar ("Gölbaşı'nda") kural dışıdır;
 * bunlar için ikinci parametreyle hazır biçim verilebilir.
 */

const BACK_VOWELS = 'aıouAIOU';
const FRONT_VOWELS = 'eiöüEİÖÜ';
const HARD_CONSONANTS = 'fstkçşhpFSTKÇŞHP';

function lastVowel(word: string): string | undefined {
  for (let i = word.length - 1; i >= 0; i--) {
    const ch = word[i];
    if (BACK_VOWELS.includes(ch) || FRONT_VOWELS.includes(ch)) return ch;
  }
  return undefined;
}

/** "<ad>'da" / "'de" / "'ta" / "'te" */
export function locative(name: string, override?: string): string {
  if (override) return override;
  const trimmed = name.trim();
  const last = trimmed[trimmed.length - 1] ?? '';
  const vowel = lastVowel(trimmed);
  const front = vowel !== undefined && FRONT_VOWELS.includes(vowel);
  const hard = HARD_CONSONANTS.includes(last);
  const consonant = hard ? 't' : 'd';
  const suffixVowel = front ? 'e' : 'a';
  return `${trimmed}'${consonant}${suffixVowel}`;
}
