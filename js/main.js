
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');

//modal.classList.remove('hidden');
//生物
const quizSet = [
  {q:'アブラナは？',c:['合弁花','離弁花']},
  {q:'胚珠が子房の中にあるのは？',c:['被子植物','裸子植物']},
  {q:'子房は成長して何になるか？',c:['果実','種子']},
  {q:'胚珠がむき出しになっているのは？',c:['裸子植物','被子植物']},
  {q:'胚珠は成長して何になるか？',c:['種子','果実']},
  {q:'単子葉類の根は？',c:['ひげ根','主根と側根']},
  {q:'単子葉類の葉脈は？',c:['平行脈','網状脈']},
  {q:'単子葉類の維管束は？',c:['散らばっている','輪の形']},
  {q:'イヌワラビは？',c:['シダ植物','コケ植物']},
  {q:'シダ植物に維管束は？',c:['ある','ない']},
  {q:'タンポポは？',c:['合弁花','離弁花']},
  {q:'サクラは？',c:['離弁花','合弁花']},
  {q:'マツは？',c:['裸子植物','被子植物']},
 

];
const Bio2 = [
  {q:'目が顔の正面についているのは？',c:['肉食動物','草食動物']},
  {q:'軟体動物にあるのは？',c:['外とう膜','外骨格']},
  {q:'ペンギンは？',c:['鳥類','哺乳類']},
  {q:'イルカは？',c:['哺乳類','魚類']},
  {q:'イモリは？',c:['両生類','ハチュウ類']}
];
const Bio3 = [{q:'イルカは？',c:['哺乳類','魚類']},];
//地学
const Geo1 = [
  {q:'地震は、',c:['10段階','7段階']},
  {q:'震度は最大',c:['7','10']},
  {q:'引きずり込まれているのは',c:['海洋プレート','大陸プレート']},
  {q:'初期微動は',c:['P波','S波']},
  {q:'震源距離が大きいほど初期微動継続時間が',c:['長い','短い']},
  {q:'主要動は',c:['S波','P波']},
  {q:'震源が深いのは',c:['日本海側','太平洋側']},
  {q:'マグニチュードは震源距離が大きいほど',c:['変わらない','小さい']},
  {q:'無色鉱物で不規則な形なのは',c:['セキエイ','チョウ石']},
  {q:'火山の傾斜が低いほうが、溶岩の色が',c:['黒っぽい','白っぽい']},
  {q:'噴火が激しいのが',c:['ドーム状','ゆるやか']},
  {q:'マグマのねばりけが大きいほど、溶岩の色が',c:['白っぽい','黒っぽい']},
  {q:'マグマが急に冷え固まったのが',c:['火山岩','深成岩']},
  {q:'玄武岩は',c:['火山岩','深成岩']},
  {q:'安山岩は',c:['火山岩','深成岩']},
  {q:'花こう岩は',c:['深成岩','火山岩']},
  {q:'閃緑岩は',c:['深成岩','火山岩']},
  {q:'流紋岩は',c:['火山岩','深成岩']},
  {q:'斑れい岩は',c:['深成岩','火山岩']},
  {q:'玄武岩は',c:['黒っぽい','白っぽい']},
  {q:'斑れい岩は',c:['黒っぽい','白っぽい']},
  {q:'花こう岩は',c:['白っぽい','黒っぽい']},
  {q:'流紋岩は',c:['白っぽい','黒っぽい']},
  {q:'マグマが地表付近で急に冷え固まったのが',c:['斑状組織','等粒状組織']},
  {q:'マグマが地下でゆっくり冷え固まったのが',c:['等粒状組織','斑状組織']},
  {q:'マグマが地下でゆっくり冷え固まったのが',c:['深成岩','火山岩']},
  {q:'大きいほうが',c:['砂岩','泥岩']},
  {q:'小さい方が',c:['泥岩','砂岩']},
  {q:'傷がつきにくいのが',c:['チャート','石灰岩']},
  {q:'塩酸で二酸化炭素が出るのが',c:['石灰岩','チャート']},
  {q:'塩酸をかけても二酸化炭素が出ないのが',c:['チャート','石灰岩']},
  {q:'時代が知れるのが',c:['示準化石','示相化石']},
  {q:'環境が知れるのが',c:['示相化石','示準化石']},
  {q:'示準化石としていいのが、',c:['短い','長い']},
  {q:'示準化石としていいのが、',c:['広い','狭い']},
  {q:'示相化石としていいのが、',c:['長い','短い']},
  {q:'示相化石としていいのが、',c:['狭い','広い']},
  {q:'地層は下にあるそうほど',c:['古い','新しい']},
  {q:'大きい粒が堆積するのは',c:['河口付近','沖合']},
  {q:'フズリナは',c:['古生代','中生代']},
  {q:'ビカリアは',c:['新生代','古生代']},
  {q:'サンヨウチュウは',c:['古生代','中生代']},

]
const Geo2 = [
{q:'低気圧は',c:['上昇気流','下降気流']},
{q:'高気圧は',c:['下降気流','上昇気流']},
];
const Geo3 = [  
  {q:'自転は',c:['西から東','東から西']},
  {q:'太陽は○からのぼり、○に沈む',c:['東から西','西から東']},
];
const Phy1 = [
  {q:'	真空中では音が	',c:['	伝わらない	','	伝わる	']},
  {q:'	振幅が大きいと音が	',c:['	大きい	','	高い	']},
  {q:'	鏡に写るのが	',c:['	虚像	','	実像	']},
  {q:'	スクリーンに見えるのが	',c:['	実像	','	虚像	']},
  {q:'	虚像は実物より	',c:['	大きい	','	小さい	']},
  {q:'	弦が太いと音は	',c:['	低くなる	','	高くなる	']},
  {q:'	レンズ越しに見るのが	',c:['	虚像	','	実像	']},
  {q:'	物質そのものの量は	',c:['	質量	','	重さ	']},
  {q:'	水中から空気では	',c:['	入射角＞屈折角	','	屈折角＞入射角	']},
  {q:'	凸レンズから物体を離すとスクリーンは	',c:['	近づく	','	遠ざかる	']},
  {q:'	速いのは	',c:['	光	','	音	']},
  {q:'	ばねばかりではかるのが	',c:['	重さ	','	質量	']},
  {q:'	焦点距離の２倍の位置に置くと大きさは	',c:['	等しい	','	小さい	']},
  {q:'	虚像の向きは	',c:['	同じ	','	逆	']},
  {q:'	焦点に物体を置くと	',c:['	見えない	','	同じ大きさ	']},
  {q:'	弦を強く張ると音は	',c:['	高くなる	','	低くなる	']},
  {q:'	凸レンズから物体を離すと実像は	',c:['	小さくなる	','	大きくなる	']},
  {q:'	凸レンズの上半分を隠すと	',c:['	暗くなる	','	半分見える	']},
  {q:'	上皿てんびんではかるのが	',c:['	質量	','	重さ	']},
  {q:'	実像の向きは	',c:['	逆	','	同じ	']},
  {q:'	金属の中で音は	',c:['	伝わる	','	伝わらない	']},
  {q:'	弦を強く弾くと音は	',c:['	大きくなる	','	高くなる	']},
  {q:'	カメラに映るのが	',c:['	実像	','	虚像	']},
  {q:'	水中から空気では	',c:['	屈折角＞入射角	','	入射角＞屈折角	']},
  {q:'	ガラスから空気では	',c:['	屈折角＞入射角	','	入射角＞屈折角	']},
  {q:'	弦が短いと音は	',c:['	高くなる	','	低くなる	']},
  {q:'	振動数が大きいと音が	',c:['	高い	','	大きい	']},
  {q:'	つり合っているとき物体の向きは	',c:['	逆	','	同じ	']},
];
const Phy2 = [
  {q:'電子の流れは',c:['-から+','+から-']},
  {q:'磁界の向きは',c:['NからS','SからN']},
];
const Phy3 = [
  {q:'右に急発進したら',c:['左に','右に']},
  {q:'自転は',c:['西から東','東から西']},
];
const Che1 = [
  {q:'	体積が小さいのは	',c:['	水	','	水蒸気	']},
  {q:'	ろうは液体→固体で質量が	',c:['	変わらない	','	大きくなる	']},
  {q:'	BTB溶液は酸性で	',c:['	黄色	','	緑色	']},
  {q:'	酸素を確かめるのが	',c:['	線香	','	マッチ	']},
  {q:'	沸点が高いのは	',c:['	水	','	エタノール	']},
  {q:'	金属の特性は	',c:['	叩くと広がる	','	磁石につく	']},
  {q:'	BTB溶液は中性で	',c:['	緑色	','	無色	']},
  {q:'	気体から液体で体積は	',c:['	小さくなる	','	大きくなる	']},
  {q:'	密度が小さいのは	',c:['	水素	','	酸素	']},
  {q:'	大根おろしにオキシドールで発生するのが	',c:['	酸素	','	二酸化炭素	']},
  {q:'	水素を確かめるのが	',c:['	マッチ	','	線香	']},
  {q:'	ろうは液体→固体で体積が	',c:['	小さくなる	','	大きくなる	']},
  {q:'	BTB溶液はアルカリ性で	',c:['	青色	','	緑色	']},
  {q:'	立方体の結晶が	',c:['	食塩	','	ミョウバン	']},
  {q:'	水に溶けにくい物質を集めるのが	',c:['	水上置換法	','	上方置換法	']},
  {q:'	体積が大きいのは	',c:['	氷	','	水	']},
  {q:'	エタノールは	',c:['	単体	','	混合物	']},
  {q:'	フェノールフタレイン溶液は酸性で	',c:['	無色	','	赤色	']},
  {q:'	水素の集め方は	',c:['	水上置換法	','	下方置換法	']},
  {q:'	水から氷で体積は	',c:['	小さくなる	','	大きくなる	']},
  {q:'	卵が腐ったような匂いなのが	',c:['	硫化水素	','	塩化水素	']},
  {q:'	酸素は水に	',c:['	溶けやすい	','	溶けやすい	']},
  {q:'	卵の殻に食酢で発生するのが	',c:['	二酸化炭素	','	酸素	']},
  {q:'	アンモニアは空気より密度が	',c:['	小さい	','	大きい	']},
  {q:'	空気は	',c:['	混合物	','	化合物	']},
  {q:'	フェノールフタレイン溶液中性で	',c:['	無色	','	緑色	']},
  {q:'	ガスバーナーで適切な炎の色は	',c:['	青色	','	赤色	']},
  {q:'	蒸留は何によって分離をするか	',c:['	沸点	','	融点	']},
  {q:'	密度が大きいのは	',c:['	水	','	エタノール	']},
  {q:'	マッチで確かめるのが	',c:['	水素	','	酸素	']},
  {q:'	発泡入浴剤で発生するのが	',c:['	二酸化炭素	','	酸素	']},
  {q:'	アンモニアは	',c:['	アルカリ性	','	酸性	']},
  {q:'	プラスチックは	',c:['	有機物	','	無機物	']},
  {q:'	風呂がま洗浄剤にお湯で発生するのが	',c:['	酸素	','	二酸化炭素	']},
  {q:'	上皿てんびんがつり合うときは	',c:['	左右に等しく振れる	','	中央で止まる	']},
  {q:'	空気より密度が小さい	',c:['	下方置換法	','	上方置換法	']},
  {q:'	沸点は物質の何によって決まるか	',c:['	種類	','	質量	']},
  {q:'	気体から液体で質量は	',c:['	変わらない	','	大きくなる	']},
  {q:'	二酸化炭素は	',c:['	無機物	','	有機物	']},
  {q:'	正八角形の結晶が	',c:['	ミョウバン	','	食塩	']},
  {q:'	黄緑色の気体は	',c:['	塩素	','	アンモニア	']},
  {q:'	上方置換法で集める物質は空気より密度が	',c:['	小さい	','	大きい	']},
  {q:'	ガスバーナーで最初に開くネジは	',c:['	ガス調節ねじ	','	空気調節ねじ	']},
  {q:'	食塩水は時間が立つと	',c:['	溶けたまま	','	沈んで結晶になる	']},
  {q:'	空気中に最も多く含まれるものは	',c:['	窒素	','	酸素	']},
  {q:'	ガラスは	',c:['	無機物	','	有機物	']},
  {q:'	水に溶けやすいのは	',c:['	アンモニア	','	水素	']},
  {q:'	フェノールフタレイン溶液はアルカリ性で	',c:['	赤色	','	青色	']},
];
const Che2 = [
  {q:'自転は',c:['西から東','東から西']},
];
const Che3 = [
  {q:'自転は',c:['西から東','東から西']},
];

//mask.classList.add('hidden');

function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;


let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {

}, false);

let a = 0;
let h = 0;
let end = 0; 
let QuizBuild = 0;

selectbox.onchange = function(){
if(selectbox.value === "b-1"){
  QuizBuild = quizSet;
  end = QuizBuild.length;
  Quizset();
  }
else if(selectbox.value === "b-2"){
  QuizBuild = Bio2;
  end = QuizBuild.length;
  Quizset();
  }
else if(selectbox.value === "b-3"){
  QuizBuild = Bio3;
  end = QuizBuild.length;
  Quizset();
  }
  else if(selectbox.value === "Geo1"){
    QuizBuild = Geo1;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Geo2"){
    QuizBuild = Geo2;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Geo3"){
    QuizBuild = Geo3;
    end = QuizBuild.length;
    Quizset();
  }

  else if(selectbox.value === "Phy1"){
    QuizBuild = Phy1;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Phy2"){
    QuizBuild = Phy2;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Phy3"){
    QuizBuild = Phy3;
    end = QuizBuild.length;
    Quizset();
  }

  else if(selectbox.value === "Che1"){
    QuizBuild = Che1;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Che2"){
    QuizBuild = Che2;
    end = QuizBuild.length;
    Quizset();
  }
  else if(selectbox.value === "Che3"){
    QuizBuild = Che3;
    end = QuizBuild.length;
    Quizset();
  }




  else{
    location.reload();
  }
 
  function Quizset () {
    choice1.removeEventListener('click',event);
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = QuizBuild[a].q;
    
    while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  
  item1.textContent = QuizBuild[a].c[0];
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = QuizBuild[a].c[1];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
       function shuffle() {
        const x = Math.floor(Math.random() * 2 + 1) ;
        if(x == 1){ 
          ul.insertBefore(item2,item1);
        }else{
          ul.insertBefore(item1,item2);
        }
      }
      shuffle();
  
      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
    
          if(t == item1){
    
          modal3.classList.remove('hidden');
          isCorrected.textContent = `正解！`;  
  
          setTimeout(()=>{
            modal3.classList.add('hidden');
  
            choice1.removeEventListener('click',event);
  
              if(a > end - 2 ){
              var Finish   = new SpeechSynthesisUtterance();
              Finish.text  = 'Great!!Good job!!';
              Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(Finish);
    
              modal.classList.remove('hidden');
                  
                close.addEventListener('click',()=>{
                  location.reload();
              })
            }else{
                //次の問題へ
              a++;
              Quizset();
            }
  
          },500);
                  }else{
          
            modal2.classList.remove('hidden');
  
          answer.textContent = ` "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
    
          var OMT   = new SpeechSynthesisUtterance();
          OMT.text  = 'one more time';
          OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
          OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
          OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
          speechSynthesis.speak(OMT);
  
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
          });
       
          function change(){a=0}
       change();

          Quizset();

          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();
  
  } 
  
}
