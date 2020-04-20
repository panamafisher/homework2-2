'use strict';
const NInput = document.getElementById('numberN');
const resultDivided = document.getElementById('result-area');
const calcNButton = document.getElementById('calcN');

/**
    * 指定した要素の子供を全部削除する関数
    * @param {HTMLElement}element HTMLの要素
    */
   function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}  

calcNButton.onclick =()=>{
  var N = parseInt(NInput.value);
  if (N<0){ //ガード句
      return;
  }
  //
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '計算結果';
  resultDivided.appendChild(header);

  const paragragh = document.createElement('p');
  const result = algoresult(N);
  paragragh.innerText = result;
  resultDivided.appendChild(paragragh);
}
//TODO アルゴリズムの実装
function algoresult(N){
  var z=Array();
  let j = 0;
  if(N===1){
    return `(1,1)`;
  }else{
    for(let i=1; i< N+1; i++){
        if(N%i ===0){
          z[j] =`(${i},${N/i})`;
          j++;
        }
    }
  }  
  return z;
}

// enter で診断
NInput.onkeydown = (event) =>{
  if(event.key === 'Enter'){
      calcNButton.onclick();
  }
} 

//これで本人確認になるのかという疑問
console.log('提出課題です');