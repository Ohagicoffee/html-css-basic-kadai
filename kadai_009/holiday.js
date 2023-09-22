//配列(array)の宣言と代入をする
const holidaysArray=["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

//for文を用いて順番に並べる
//カウンタ変数の初期値(配列の先頭は0番),条件式(holidaysArrayの長さ未満まで繰り返す),カウンタ変数の増減値(配列を順番に1つずつ)
for(let i=0; i<holidaysArray.length; i++){
  console.log(holidaysArray[i]);
}

//while文を用いて順番に並べる
//カウンタ変数iの宣言と代入
let i=0;

//無限ループにならないように変数iをインクリメントする(falseを返すようにする)
while(i< holidaysArray.length){
  console.log(holidaysArray[i]);
  i++;
}

