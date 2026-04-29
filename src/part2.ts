import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    (s:string)=>stringToArray(s),
    R.filter((char:string)=>vowels.includes(char.toLowerCase())),
    (arr:string[])=>arr.length
);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean =>R.pipe(
    (s:string)=>s.toLowerCase(),
    (s:string)=>stringToArray(s),
    R.filter((char:string)=>(char>='a' &&char<='z')||(char>='0'&&char<='9')),
    (arr:string[])=>{
        const org:string=arr.join('');
        const fliped:string=arr.reduce((acc,char)=>char+acc,"");
        return org===fliped;
    }
)(text);
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string =>R.pipe(
    (t: WordTree)=>t.children.map((a: WordTree)=>treeToSentence(a)),
    R.prepend(t.root),
    R.join(' ')
)(t);
