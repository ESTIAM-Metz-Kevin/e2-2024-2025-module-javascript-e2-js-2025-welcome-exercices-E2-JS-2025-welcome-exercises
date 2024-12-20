/**
 * Manipulation de chaîne de caractère
 */
console.log("EXERCICE 1");
console.log("----------------------------------");

/**
 * Ecrire une fonction qui renvoie la chaîne de caractères inverse
 * @example inverseLaChaineDeCaractere('hello') => 'olleh'
 * @example inverseLaChaineDeCaractere('world') => 'dlrow'
 */
export function inverseLaChaineDeCaractere(str: string): string {
  return str.split("").reverse().join("");
}

console.log(inverseLaChaineDeCaractere("hello"));
console.log(inverseLaChaineDeCaractere("world"));
console.log("----------------------------------");

/**
 * Ecrire une fonction qui renvoie le nombre de lettres d'une chaîne de caractère
 * @example jeCompteLesLettres('hello', 'l') => 2
 * @example jeCompteLesLettres('javascript', 'z') => 0
 * @example jeCompteLesLettres('world', 'o') => 1
 */
export function jeCompteLesLettres(str: string, letter: string): number {
  // return str.match(new RegExp(letter, "g"))?.length ?? 0;
  return str.split(letter).length - 1;
}

console.log(jeCompteLesLettres("hello", "l"));
console.log(jeCompteLesLettres("javascript", "z"));
console.log(jeCompteLesLettres("world", "o"));
console.log("----------------------------------");

/**
 * Ecrire une fonction qui vérifie sur un mot est un palindrome
 * @example estUnPalindrome('hello') => false
 * @example estUnPalindrome('madam') => true
 */
export function estUnPalindrome(str: string): boolean {
  return str === inverseLaChaineDeCaractere(str);
}

// console.log(estUnPalindrome("hello"));
// console.log(estUnPalindrome("madam"));
// console.log("----------------------------------");
