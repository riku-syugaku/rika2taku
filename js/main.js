
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

const Bio1 = [
  {q:'道管が通っているのが葉の',c:['表側','裏側']},
  {q:'胚珠がむき出しになっているのは？',c:['裸子植物','被子植物']},
  {q:'夜間に植物が行うのが',c:['呼吸','光合成']},
  {q:'葉の表側にあるのが',c:['道管','師管']},
  {q:'維管束が輪の形に並んでいるのが',c:['双子葉類','単子葉類']},
  {q:'アブラナは？',c:['合弁花','離弁花']},
  {q:'師管が通っているのが茎の',c:['外側','内側']},
  {q:'葉で作られた栄養分が通るのが',c:['師管','道管']},
  {q:'道管が通っているのが茎の',c:['内側','外側']},
  {q:'単子葉類の維管束は？',c:['散らばっている','輪の形']},
  {q:'単子葉類の根は？',c:['ひげ根','主根と側根']},
  {q:'胚珠が子房の中にあるのは？',c:['被子植物','裸子植物']},
  {q:'植物が光合成のときに使う気体は',c:['二酸化炭素','酸素']},
  {q:'胚珠は成長して何になるか？',c:['種子','果実']},
  {q:'根から吸収された水などが通るのは',c:['道管','師管']},
  {q:'マツは？',c:['裸子植物','被子植物']},
  {q:'師管が通っているのが葉の',c:['裏側','表側']},
  {q:'根の水の吸い上げが盛んになるのが',c:['昼間','夜間']},
  {q:'ヨウ素液はデンプンに反応して',c:['青紫色','赤褐色']},
  {q:'維管束が輪の形に並んでいるのが',c:['双子葉類','単子葉類']},
  {q:'昼間に植物が全体として放出するのが',c:['酸素','二酸化炭素']},
  {q:'葉の裏側にあるのが',c:['師管','道管']},
  {q:'シダ植物に維管束は？',c:['ある','ない']},
  {q:'植物を着色した水にさしたとき、色がつくのが',c:['道管','師管']},
  {q:'孔辺細胞に葉緑体は',c:['ある','ない']},
  {q:'サクラは？',c:['離弁花','合弁花']},
  {q:'気孔が大きのが葉の',c:['裏側','表側']},
  {q:'タンポポは？',c:['合弁花','離弁花']},
  {q:'昼間は呼吸を行って',c:['いる','いない']},
  {q:'子房は成長して何になるか？',c:['果実','種子']},
  {q:'単子葉類の葉脈は？',c:['網状脈','平行脈']},
  {q:'イヌワラビは？',c:['シダ植物','コケ植物']},
  ];
  const Bio2 = [
      {q:'バッタやエビなどのような動物は',c:['節足動物','昆虫類']},
  {q:'クモは昆虫類で',c:['ない','ある']},
  {q:'哺乳類は',c:['恒温動物','変温動物']},
  {q:'空気の振動を捉える部分が',c:['鼓膜','うずまき管']},
  {q:'骨と骨をつなぐ部分は',c:['関節','けん']},
  {q:'無意識の反応で命令を出すのが',c:['脊髄','脳']},
  {q:'両生類なのが',c:['イモリ','ヤモリ']},
  {q:'ヤモリは',c:['爬虫類','両生類']},
  {q:'脳は',c:['中枢神経','末しょう神経']},
  {q:'骨についている筋肉の両端の部分を',c:['けん','関節']},
  {q:'爬虫類は',c:['変温動物','恒温動物']},
  {q:'感覚器官に意識は',c:['ない','ある']},
  {q:'イルカは',c:['哺乳類','魚類']},
  {q:'脊髄は',c:['中枢神経','末しょう神経']},
  {q:'イモリは',c:['両生類','爬虫類']},
  {q:'サメは',c:['魚類','哺乳類']},
  {q:'うでの筋肉を曲げると伸びるのが',c:['外側','内側']},
  {q:'軟体動物の内臓をおおっているものは',c:['外とう膜','外骨格']},
  {q:'両生類の卵に殻は',c:['ない','ある']},
  {q:'ミジンコは',c:['甲殻類','昆虫類']},
  {q:'感覚神経や運動神経は',c:['末しょう神経','中枢神経']},
  {q:'入ってくる光を屈折させるのが',c:['レンズ','虹彩']},
  {q:'ペンギンは？',c:['鳥類','哺乳類']},
  {q:'目が顔の正面についているのは？',c:['肉食動物','草食動物']},
  {q:'うでの筋肉を曲げると収縮するのが',c:['内側','外側']},
  {q:'鳥類は',c:['恒温動物','変温動物']},
  {q:'軟体動物にあるのは？',c:['外とう膜','外骨格']},
  {q:'哺乳類は',c:['胎生','卵生']},
  ];
  const Bio3 = [
      {q:'デンプンは分解されて',c:['ブドウ糖','アミノ酸']},
  {q:'赤血球に含まれるのは',c:['ヘモグロビン','トリプシン']},
  {q:'最近やウイルスを分解するのは',c:['白血球','赤血球']},
  {q:'脂肪が入るのが',c:['リンパ管','毛細血管']},
  {q:'タンパク質を分解するのが',c:['胃液','唾液']},
  {q:'体を作る材料になるのは',c:['タンパク質','炭水化物']},
  {q:'肺動脈に流れるのが',c:['静脈血','動脈血']},
  {q:'胆汁が作られるのが',c:['肝臓','胆のう']},
  {q:'胃液に含まれる消化酵素は',c:['ペプシン','アミラーゼ']},
  {q:'息を吸うとき上がるのが',c:['ろっ骨','横隔膜']},
  {q:'肺に血液を送り出すのが',c:['左心室','右心室']},
  {q:'弁があるのが',c:['静脈','動脈']},
  {q:'ベネジクト液が反応するのは',c:['ブドウ糖','デンプン']},
  {q:'肺静脈に流れるのが',c:['動脈血','静脈血']},
  {q:'大動脈に流れるのが',c:['動脈血','静脈血']},
  {q:'アンモニアを分解するのが',c:['肝臓','腎臓']},
  {q:'心臓に戻るのが',c:['静脈','動脈']},
  {q:'尿素をこし取るのが',c:['腎臓','ぼうこう']},
  {q:'血しょうがしみ出ると',c:['組織液','血液']},
  {q:'栄養分を蓄えるのが',c:['肝臓','腎臓']},
  {q:'デンプンを分解するのが',c:['唾液','胃液']},
  {q:'大静脈に流れるのが',c:['静脈血','動脈血']},
  {q:'唾液に含まれる消化酵素は',c:['アミラーゼ','ペプシン']},
  {q:'全身から血液が流れてくるのが',c:['右心房','左心房']},
  {q:'アンモニアが変化するのは',c:['尿素','窒素']},
  {q:'アミノ酸が入るのは',c:['毛細血管','リンパ管']},
  {q:'ヨウ素液が反応するのは',c:['デンプン','ブドウ糖']},
  {q:'息を吸うとき下がるのが',c:['横隔膜','ろっ骨']},
  {q:'全身に血液を送り出すのが',c:['右心室','左心室']},
  {q:'タンパク質は分解されて',c:['アミノ酸','ブドウ糖']},
  {q:'心臓から出るのが',c:['動脈','静脈']},
  {q:'ブドウ糖が入るのは',c:['毛細血管','リンパ管']},
  {q:'肺から血液が流れてくるのが',c:['左心房','右心房']},
  
  ];
  const Bio4 = [
    {q:'「まる : しわ」 が 1 : 1 になるのが、',c:['AAとAa','AaとAa']},
  {q:'むかごから目や根が出て、新しい個体ができるのが',c:['無性生殖','有性生殖']},
  {q:'受精卵の染色体の数はもと比べて',c:['同じ','半分']},
  {q:'裸子植物の受粉でつくのが',c:['胚珠','雌花']},
  {q:'受精卵が胚になり、成長していくのが',c:['発生','変態']},
  {q:'受粉して伸びるのが',c:['花粉管','根']},
  {q:'生殖細胞は染色体の数はもと比べて',c:['半分','同じ']},
  {q:'裸子植物は受粉から受精までに時間が',c:['かかる','かからない']},
  {q:'染色体の数が半分になるのが',c:['減数分裂','体細胞分裂']},
  {q:'プラナリアが増えるのが',c:['分裂','栄養生殖']},
  {q:'AAとAaとの子で、まる : しわ =',c:['全部まる','1 : 1']},
  {q:'体の一部から新しい個体を作るのが',c:['栄養生殖','分裂']},
  {q:'無性生殖のときは子の形質は親と',c:['変わらない','違うところもある']},
  {q:'子に現れない形質が',c:['潜性形質','顕性形質']},
  {q:'有性生殖のときは子の形質は親と',c:['違うところもある','変わらない']},
  {q:'子に現れる形質が',c:['顕性形質','潜性形質']},
  {q:'Aaとaaとの子で、まる : しわ =',c:['1 : 1','3 : 1']},
  {q:'体細胞分裂は染色体の数が',c:['変わらない','半分になる']},
  {q:'細胞分裂が盛んに行われるのが',c:['根の先端','根の付け根']},
  {q:'AaとAaとの子で、まる : しわ =',c:['3 : 1','1 : 1']},

  ];
  const Bio5 = [
  ];
  const Bio6 = [];
  const Bio7 = [];
  
  const Geo1 = [
  {q:'マグニチュードは震源距離が大きいほど',c:['変わらない','小さい']},
  {q:'横に引っ張られるのが',c:['正断層','逆断層']},
  {q:'主要動は',c:['S波','P波']},
  {q:'マグニチュードは１大きくなると',c:['32倍','100倍']},
  {q:'初期微動はゆれが',c:['小さい','大きい']},
  {q:'大地が沈むのが',c:['沈降','段丘']},
  {q:'震源距離が大きいほど初期微動継続時間が',c:['長い','短い']},
  {q:'海底の谷が',c:['海溝','海嶺']},
  {q:'波打つように曲がるのが',c:['しゅう曲','隆起']},
  {q:'初期微動は',c:['P波','S波']},
  {q:'地震は、',c:['10段階','7段階']},
  {q:'震度は距離が遠いほど',c:['大きい','変わらない']},
  {q:'上にあるのが',c:['大陸プレート','海洋プレート']},
  {q:'震度は最大',c:['7','10']},
  {q:'横に押されるのが',c:['逆断層','正断層']},
  {q:'距離が遠いのが',c:['震央距離','震源距離']},
  {q:'震源が深いのは',c:['日本海側','太平洋側']},
  {q:'引きずり込まれているのは',c:['海洋プレート','大陸プレート']},
  {q:'今後もずれる可能性があるのが',c:['活断層','逆断層']},
  {q:'強・弱があるのが、震度',c:['5と６','６と７']},
  {q:'大地が持ち上がるのが',c:['隆起','しゅう曲']},
  {q:'海底の山脈が',c:['海嶺','海溝']},
  ];

  const Geo2 = [
  {q:'ビカリアは',c:['新生代','古生代']},
  {q:'無色鉱物で不規則な形なのは',c:['セキエイ','チョウ石']},
  {q:'斑れい岩は',c:['深成岩','火山岩']},
  {q:'噴火が激しいのが',c:['ドーム状','ゆるやか']},
  {q:'サンヨウチュウは',c:['古生代','中生代']},
  {q:'示相化石としていいのが、',c:['狭い','広い']},
  {q:'玄武岩は',c:['火山岩','深成岩']},
  {q:'花こう岩は',c:['深成岩','火山岩']},
  {q:'火山の傾斜が低いほうが、溶岩の色が',c:['黒っぽい','白っぽい']},
  {q:'大きいほうが',c:['砂岩','泥岩']},
  {q:'流紋岩は',c:['火山岩','深成岩']},
  {q:'斑れい岩は',c:['黒っぽい','白っぽい']},
  {q:'大きい粒が堆積するのは',c:['河口付近','沖合']},
  {q:'マグマが地下でゆっくり冷え固まったのが',c:['等粒状組織','斑状組織']},
  {q:'マグマが地下でゆっくり冷え固まったのが',c:['深成岩','火山岩']},
  {q:'玄武岩は',c:['黒っぽい','白っぽい']},
  {q:'塩酸で二酸化炭素が出るのが',c:['石灰岩','チャート']},
  {q:'マグマが急に冷え固まったのが',c:['火山岩','深成岩']},
  {q:'流紋岩は',c:['白っぽい','黒っぽい']},
  {q:'閃緑岩は',c:['深成岩','火山岩']},
  {q:'示相化石としていいのが、',c:['長い','短い']},
  {q:'塩酸をかけても二酸化炭素が出ないのが',c:['チャート','石灰岩']},
  {q:'示準化石としていいのが、',c:['広い','狭い']},
  {q:'傷がつきにくいのが',c:['チャート','石灰岩']},
  {q:'花こう岩は',c:['白っぽい','黒っぽい']},
  {q:'時代が知れるのが',c:['示準化石','示相化石']},
  {q:'フズリナは',c:['古生代','中生代']},
  {q:'環境が知れるのが',c:['示相化石','示準化石']},
  {q:'マグマのねばりけが大きいほど、溶岩の色が',c:['白っぽい','黒っぽい']},
  {q:'示準化石としていいのが、',c:['短い','長い']},
  {q:'地層は下にあるそうほど',c:['古い','新しい']},
  {q:'マグマが地表付近で急に冷え固まったのが',c:['斑状組織','等粒状組織']},
  {q:'小さい方が',c:['泥岩','砂岩']},
  {q:'安山岩は',c:['火山岩','深成岩']},
  ];
  const Geo3 = [
  {q:'くもりは雲量が',c:['9~10','6~10']},
  {q:'圧力は面積が大きいほど',c:['小さい','大きい']},
  {q:'「◎」の天気記号は',c:['くもり','快晴']},
  {q:'圧力は力が小さいほど',c:['小さい','大きい']},
  {q:'雲量が「９」で',c:['くもり','雨']},
  {q:'大気圧がはたらく向きは',c:['あらゆる向き','上向き']},
  {q:'ピストンを引くとフラスコ内の空気が',c:['膨張する','収縮する']},
  {q:'山頂にいくと袋は',c:['膨らむ','しぼむ']},
  {q:'ピストンを引くと温度が',c:['下がる','上がる']},
  {q:'雲量が「７」で',c:['晴れ','くもり']},
  {q:'風が北から吹いてきたときの風向は',c:['北','南']},
  {q:'雲量が「１」で',c:['快晴','晴れ']},
  {q:'1hPaは',c:['100Pa','1000Pa']},
  {q:'「○」の天気記号は',c:['快晴','晴れ']},
  {q:'圧力は力が大きいほど',c:['大きい','小さい']},
  {q:'ピストンを引くと',c:['くもる','はれる']},
  {q:'ピストンを押すとフラスコ内の空気が',c:['収縮する','膨張する']},
  {q:'圧力は面積が小さいほど',c:['大きい','小さい']},
  {q:'空気はあたためられると',c:['上昇する','加工する']},
  {q:'１気圧は',c:['1013hPa','1031hPa']},
  {q:'大気圧は上に行くほど',c:['小さくなる','大きくなる']},
  {q:'けむりが東になびいているとき風向は',c:['西','東']},
  {q:'あたたかい空気は密度が',c:['小さい','大きい']},
  {q:'ピストンを押すと',c:['晴れる','くもる']},
  {q:'けむりが西になびいているとき風向は',c:['東','西']}
  ];

  const Geo4 = [
  {q:'急に温度が下がるのが',c:['寒冷前線','温暖前線']},
  {q:'上昇気流は',c:['低気圧','高気圧']},
  {q:'下降気流が',c:['高気圧','低気圧']},
  {q:'寒気が暖気を押し上げながら進むのが',c:['寒冷前線','温暖前線']},
  {q:'高気圧だと天気が',c:['よい','悪い']},
  {q:'低気圧は',c:['上昇気流','下降気流']},
  {q:'飽和水蒸気量は温度が下がると',c:['小さくなる','大きくなる']},
  {q:'飽和水蒸気量は温度が上がると',c:['大きくなる','小さくなる']},
  {q:'暖気が寒気の上をはい上がるように進むのが',c:['温暖前線','寒冷前線']},
  {q:'シベリア気団は',c:['冷たい','あたたかい']},
  {q:'積乱雲が発生するのが',c:['寒冷前線','温暖前線']},
  {q:'晴れた日の昼に吹く風は',c:['海風','陸風']},
  {q:'太平洋から大陸へ季節風が吹くのが',c:['夏','冬']},
  {q:'寒冷前線が通過すると風向は',c:['南寄りになる','北寄りになる']},
  {q:'寒気と暖気の勢力が同じくらいで動かないのが',c:['停滞前線','閉塞前線']},
  {q:'寒冷前線が温暖前線に追いついてできるのが',c:['閉塞前線','停滞前線']},
  {q:'長時間雨が降るのが',c:['温暖前線','寒冷前線']},
  {q:'等圧線の間隔は',c:['4hPa','5hPa']},
  {q:'高気圧は',c:['下降気流','上昇気流']},
  {q:'あたたまりやすいのが',c:['陸','海']},
  {q:'天気が悪いのが',c:['低気圧','高気圧']},
  {q:'温暖前線が通過すると風向は',c:['北寄りになる','南寄りになる']},
  {q:'激しい雨が降るのが',c:['寒冷前線','温暖前線']},
  {q:'乱層雲が発生するのが',c:['温暖前線','寒冷前線']},
  {q:'低気圧は',c:['反時計回り','時計回り']},
  {q:'シベリア気団は',c:['乾いている','湿っている']},
  {q:'高気圧は風が',c:['時計回り','反時計回り']},
  {q:'寒冷前線は',c:['積乱雲','乱層雲']},
  {q:'水蒸気量が増えると湿度は',c:['上がる','下がる']},
  {q:'日本付近の高気圧や低気圧が移動するのは',c:['西から東','東から西']},
  {q:'昼に上昇気流が生じるのは',c:['陸','海']},
  {q:'温度が上がると湿度は',c:['下がる','上がる']},
  {q:'風が強い場所の等圧線の間隔は',c:['狭い','広い']},
  {q:'温暖前線は',c:['乱層雲','積乱雲']},
  ];

  const Geo5 = [
    {q:'天球上の観測者の真上の位置は',c:['天頂','北極']},
    {q:'南半球で北極は',c:['見えない','見える']},
    {q:'地球の南側が傾いているとき、北半球は',c:['冬','夏']},
    {q:'地球の北側が傾いているとき、北半球は',c:['夏','冬']},
    {q:'夏至の日の日の出の位置は',c:['北寄り','南寄り']},
    {q:'太陽の日周運動は１時間に',c:['15°','30°']},
    {q:'星が南中する時刻は１ヶ月で何時間早くなるか',c:['2時間','1時間']},
    {q:'太陽と同じ方向にある星座は観察',c:['できない','できる']},
    {q:'北極側から見て月の公転の向きは',c:['反時計回り','時計回り']},
    {q:'地軸が傾いている角度は',c:['23.4°','24.3°']},
    {q:'南中高度が最も低いのが',c:['冬至','夏至']},
    {q:'星が１時間に動くのは',c:['15°','30°']},
    {q:'南中高度が最も高いのが',c:['夏至','冬至']},
    {q:'太陽が動いているのは',c:['東から西','西から東']},
    {q:'星の日周運動の向きは',c:['東から西','西から東']},
    {q:'北の空はどの向きで回転するか',c:['反時計回り','時計回り']},
    {q:'太陽が真南に来たときのことは',c:['南中','正午']},
    {q:'星が１ヶ月で移動するのは',c:['30°','15°']},
    {q:'星が地平線から垂直に昇るのは',c:['赤道','北極']},
    {q:'地球の自転の向きは',c:['西から東','東から西']},
    {q:'冬至の日の日の出の位置は',c:['南寄り','北寄り']},
  ];
  const Geo6 = [
    {q:'金星の見かけの大きさは地球に近いほど',c:['大きい','小さい']},
{q:'金星が東の空に見えるのが',c:['明け方','夕方']},
{q:'体積が大きいのが',c:['木星型惑星','地球型惑星']},
{q:'太陽と同じ向きにある月の形は',c:['新月','満月']},
{q:'月の左半分が輝いているのが、',c:['下弦の月','上弦の月']},
{q:'金星が西の空に見えるのが',c:['夕方','明け方']},
{q:'太陽の外側に広がる高温のガスの層は',c:['コロナ','プロミネンス']},
{q:'金星は真夜中に観察',c:['できない','できる']},
{q:'月の右半分が輝いているのが、',c:['上弦の月','下弦の月']},
{q:'太陽系の外側に広がる恒星の集団を',c:['銀河系','銀河']},
{q:'平均密度が小さいのが',c:['木星型惑星','地球型惑星']},
{q:'月は',c:['衛星','惑星']},
{q:'金星の見かけの形は地球に近いほど',c:['欠けている','円に近い']},
{q:'新月から満月になるまでにあるのが',c:['上弦の月','下弦の月']},
{q:'冥王星は惑星で',c:['ない','ある']},
{q:'同じ時刻に見える月は１日に何度動くか',c:['約12°','約15°']},
{q:'金星が明け方に見えるのが',c:['東の空','西の空']},
{q:'月食が起こるときの月の形は',c:['満月','新月']},
{q:'同じ時刻に見える月が動くのは',c:['西から東','東から西']},
{q:'金星が夕方に見えるのが',c:['西の空','東の空']},
{q:'太陽ー地球ー月、のときが',c:['月食','日食']},
{q:'月はみずから輝いて',c:['いない','いる']},
{q:'黒点は周りより温度が',c:['低い','高い']},
{q:'主にガスでできているのが',c:['木星型惑星','地球型惑星']},
{q:'主に岩石と金属からできているのが',c:['地球型惑星','木星型惑星']},
{q:'太陽の表面にのびる炎の動きは',c:['プロミネンス','コロナ']},
{q:'平均密度が大きいのが',c:['地球型惑星','木星型惑星']},
{q:'日食が起こるときの月の形は',c:['新月','満月']},
{q:'太陽ー月ー地球、のときが',c:['日食','月食']},

  ];
  const Geo7 = [];
  
  const Phy1 = [
      {q:'レンズ越しに見るのが',c:['虚像','実像']},
  {q:'速いのは',c:['光','音']},
  {q:'凸レンズから物体を離すとスクリーンは',c:['近づく','遠ざかる']},
  {q:'弦を強く弾くと音は',c:['大きくなる','高くなる']},
  {q:'真空中では音が',c:['伝わらない','伝わる']},
  {q:'凸レンズから物体を離すと実像は',c:['小さくなる','大きくなる']},
  {q:'ガラスから空気では',c:['屈折角＞入射角','入射角＞屈折角']},
  {q:'実像の向きは',c:['逆','同じ']},
  {q:'鏡に写るのが',c:['虚像','実像']},
  {q:'振幅が大きいと音が',c:['大きい','高い']},
  {q:'金属の中で音は',c:['伝わる','伝わらない']},
  {q:'上皿てんびんではかるのが',c:['質量','重さ']},
  {q:'ばねばかりではかるのが',c:['重さ','質量']},
  {q:'虚像は実物より',c:['大きい','小さい']},
  {q:'水中から空気では',c:['屈折角＞入射角','入射角＞屈折角']},
  {q:'焦点に物体を置くと',c:['見えない','同じ大きさ']},
  {q:'つり合っているとき物体の向きは',c:['逆','同じ']},
  {q:'弦が太いと音は',c:['低くなる','高くなる']},
  {q:'凸レンズの上半分を隠すと',c:['暗くなる','半分見える']},
  {q:'虚像の向きは',c:['同じ','逆']},
  {q:'カメラに映るのが',c:['実像','虚像']},
  {q:'弦が短いと音は',c:['高くなる','低くなる']},
  {q:'スクリーンに見えるのが',c:['実像','虚像']},
  {q:'焦点距離の２倍の位置に置くと大きさは',c:['等しい','小さい']},
  {q:'弦を強く張ると音は',c:['高くなる','低くなる']},
  {q:'水中から空気では',c:['入射角＞屈折角','屈折角＞入射角']},
  {q:'物質そのものの量は',c:['質量','重さ']},
  {q:'振動数が大きいと音が',c:['高い','大きい']},
  ];
  const Phy2 = [
      {q:'電子の動く向きと電流が動く向きは',c:['逆向き','同じ向き']},
  {q:'10Ωと15Ωの直列回路で全体の抵抗は',c:['25Ω','6Ω']},
  {q:'電圧×電流＝',c:['電力','抵抗']},
  {q:'電子が動くのは',c:['-から+','+から-']},
  {q:'熱量＝',c:['電力×時間（秒）','電力÷時間（秒）']},
  {q:'異なる電気は',c:['引き合う','しりぞけあう']},
  {q:'電子の流れは',c:['-から+','+から-']},
  {q:'抵抗を大きくすると電流は',c:['小さくなる','大きくなる']},
  {q:'電圧を大きくすると水の上昇温度は',c:['大きくなる','小さくなる']},
  {q:'電力＝',c:['電圧×電流','抵抗×電流']},
  {q:'抵抗を大きくすると水の上昇温度は',c:['小さくなる','大きくなる']},
  {q:'電流計のつなぎ方は',c:['直列','並列']},
  {q:'電圧を大きくすると電流は',c:['大きくなる','小さくなる']},
  {q:'直列回路で2つの電球の電圧は',c:['異なる','等しい']},
  {q:'電力×時間＝',c:['電力量','電力']},
  {q:'熱量の単位は',c:['J','W']},
  {q:'電流の流れる向きは',c:['+から-','-から+']},
  {q:'電流を大きくすると水の上昇温度は',c:['大きくなる','小さくなる']},
  {q:'10Ωと15Ωの並列回路で全体の抵抗は',c:['6Ω','25Ω']},
  {q:'並列回路で2つの電球の電圧は',c:['等しい','異なる']},
  {q:'電流の大きさがわからないときは',c:['5A','500mA']},
  {q:'２本のストローA,Bを紙でこすると、A,Bは',c:['同じ電気','異なる電気']},
  {q:'並列回路で2つの電球の電流は',c:['異なる','等しい']},
  {q:'電力×時間＝',c:['熱量','抵抗']},
  {q:'電圧の大きさがわからないときは',c:['300V','3V']},
  {q:'電流が流れにくいのは',c:['10Ω','５Ω']},
  {q:'抵抗＝',c:['電圧÷電流','電流×電圧']},
  {q:'電子が持っている電気は',c:['-','+']},
  {q:'電流が流れやすいのは',c:['10Ω','15Ω']},
  {q:'直列回路で2つの電球の電流は',c:['等しい','異なる']},
  {q:'電圧計のつなぎ方は',c:['並列','直列']},
  {q:'電気ではたらく力は離れているとき',c:['はたらく','はたらかない']},
  {q:'電力の単位は',c:['W','J']},
  {q:'1Aは',c:['1000mA','100mA']},
  {q:'「W」は',c:['電力','熱量']},
  ];
  const Phy3 = [
      {q:'下向きに電流を流すと磁界の向きは',c:['時計回り','反時計回り']},
  {q:'N極を遠ざけるときと同じなのは',c:['S極を近づける','N極を近づける']},
  {q:'コンセントから取り出す電流は',c:['交流','直流']},
  {q:'コイルに棒磁石をいたまま静止すると電流は',c:['流れない','流れる']},
  {q:'コイルの巻き数を少なくすると磁界は',c:['弱くなる','強くなる']},
  {q:'磁力線は交わることが',c:['ない','ある']},
  {q:'乾電池から取り出す電流は',c:['直流','交流']},
  {q:'上向きに電流を流すと磁界の向きは',c:['反時計回り','時計回り']},
  {q:'磁力線の間隔がせまいと磁力は',c:['強い','弱い']},
  {q:'N極を近づけるときと同じなのは',c:['S極を遠ざける','N極を遠ざける']},
  {q:'磁界は',c:['NからS','SからN']},
  {q:'S極を遠ざけるときと同じなのは',c:['N極を近づける','S極を近づける']},
  ];
  const Phy4 = [
      {q:'テープの打点の間隔が広いほど',c:['速い','遅い']},
  {q:'台車は斜面を下っていくとき、速さは',c:['大きくなる','変わらない']},
  {q:'物質の質量が大きいほど運動エネルギーは',c:['大きい','変わらない']},
  {q:'道具を使った場合、仕事は',c:['変わらない','大きくなる']},
  {q:'台車にはたらく斜面方向の力は斜面が急なほど',c:['大きい','変わらない']},
  {q:'1kg=',c:['10N','1N']},
  {q:'深くなるほど水圧は',c:['大きい','小さい']},
  {q:'体積が同じで質量が異なる２つの物体を沈めたとき浮力は',c:['同じ','異なる']},
  {q:'台車にはたらく斜面方向の力は下に行くほど',c:['変わらない','大きくなる']},
  {q:'浮力の大きさに関係があるのは',c:['体積','質量']},
  {q:'水圧がはたらく向きは',c:['全方向','上から']},
  {q:'東日本で５回打点すると',c:['0.1秒','0.5秒']},
  {q:'おたまが熱いのは',c:['熱伝導','熱放射']},
  {q:'仕事率＝',c:['仕事÷秒','仕事×秒']},
  {q:'たき火が温かいのは',c:['熱放射','熱伝導']},
  {q:'電車が右側に急発進すると人が倒れるのが',c:['左側','右側']},
  {q:'高いところにある物体が持っているエネルギーは',c:['位置エネルギー','運動エネルギー']},
  {q:'２つの物体が全体が水中に入っているとき浮力は',c:['等しい','深いほうが大きい']},
  {q:'物質の質量が大きいほど位置エネルギーは',c:['大きい','変わらない']},
  {q:'物体の速さが速いほどテープの打点の間隔が',c:['広い','狭い']},
  {q:'質量が大きいと浮力は',c:['変わらない','大きい']},
  {q:'仕事＝',c:['力×距離','力×時間']},
  {q:'鍋を熱して水全体が温まるのは',c:['対流','熱伝導']},
  {q:'水圧は',c:['下側が大きい','どこも等しい']},
  ];
  const Phy5 = [
  
  ];
  const Phy6 = [];
  const Phy7 = [];
  
  const Che1 = [
  {q:'気体から液体で質量は',c:['変わらない','大きくなる']},
  {q:'ガスバーナーで最初に開くネジは',c:['ガス調節ねじ','空気調節ねじ']},
  {q:'水から氷で体積は',c:['大きくなる','小さくなる']},
  {q:'ろうは液体→固体で質量が',c:['変わらない','大きくなる']},
  {q:'正八角形の結晶が',c:['ミョウバン','食塩']},
  {q:'体積が大きいのは',c:['氷','水']},
  {q:'沸点が高いのは',c:['水','エタノール']},
  {q:'エタノールは',c:['単体','混合物']},
  {q:'ガスバーナーで適切な炎の色は',c:['青色','赤色']},
  {q:'食塩水は時間が立つと',c:['溶けたまま','沈んで結晶になる']},
  {q:'ガラスは',c:['無機物','有機物']},
  {q:'蒸留は何によって分離をするか',c:['沸点','融点']},
  {q:'立方体の結晶が',c:['食塩','ミョウバン']},
  {q:'空気は',c:['混合物','化合物']},
  {q:'金属の特性は',c:['叩くと広がる','磁石につく']},
  {q:'ろうは液体→固体で体積が',c:['小さくなる','大きくなる']},
  {q:'密度が大きいのは',c:['水','エタノール']},
  {q:'二酸化炭素は',c:['無機物','有機物']},
  {q:'沸点は物質の何によって決まるか',c:['種類','質量']},
  {q:'気体から液体で体積は',c:['小さくなる','大きくなる']},
  {q:'プラスチックは',c:['有機物','無機物']},
  {q:'体積が小さいのは',c:['水','水蒸気']},
  {q:'上皿てんびんがつり合うときは',c:['左右に等しく振れる','中央で止まる']},
  ];
  const Che2 = [
  {q:'酸素を確かめるのが',c:['線香','マッチ']},
  {q:'BTB溶液はアルカリ性で',c:['青色','緑色']},
  {q:'空気より密度が小さい',c:['上方置換法','下方置換法']},
  {q:'酸素は水に',c:['溶けにくい','溶けやすい']},
  {q:'密度が小さいのは',c:['水素','酸素']},
  {q:'卵が腐ったような匂いなのが',c:['硫化水素','塩化水素']},
  {q:'アンモニアは空気より密度が',c:['小さい','大きい']},
  {q:'大根おろしにオキシドールで発生するのが',c:['酸素','二酸化炭素']},
  {q:'上方置換法で集める物質は空気より密度が',c:['小さい','大きい']},
  {q:'水に溶けにくい物質を集めるのが',c:['水上置換法','上方置換法']},
  {q:'風呂がま洗浄剤にお湯で発生するのが',c:['酸素','二酸化炭素']},
  {q:'フェノールフタレイン溶液中性で',c:['無色','緑色']},
  {q:'発泡入浴剤で発生するのが',c:['二酸化炭素','酸素']},
  {q:'マッチで確かめるのが',c:['水素','酸素']},
  {q:'フェノールフタレイン溶液は酸性で',c:['無色','赤色']},
  {q:'水素の集め方は',c:['水上置換法','下方置換法']},
  {q:'卵の殻に食酢で発生するのが',c:['二酸化炭素','酸素']},
  {q:'BTB溶液は酸性で',c:['黄色','緑色']},
  {q:'空気中に最も多く含まれるものは',c:['窒素','酸素']},
  {q:'黄緑色の気体は',c:['塩素','アンモニア']},
  {q:'水に溶けやすいのは',c:['アンモニア','水素']},
  {q:'アンモニアは',c:['アルカリ性','酸性']},
  {q:'フェノールフタレイン溶液はアルカリ性で',c:['赤色','青色']},
  {q:'水素を確かめるのが',c:['マッチ','線香']},
  {q:'BTB溶液は中性で',c:['緑色','無色']},
  ];
  const Che3 = [
  {q:'塩化コバルト紙は水につけると',c:['青→赤','赤→青']},
  {q:'塩化ナトリウムは',c:['化合物','単体']},
  {q:'炭酸水素ナトリウムを加熱すると発生するのが',c:['二酸化炭素','水素']},
  {q:'水の電気分解で陰極に発生するのが',c:['水素','酸素']},
  {q:'フェノールフタレイン溶液の元の色は',c:['無色','緑']},
  {q:'塩化銅水溶液を電気分解で陽極に発生するのが',c:['塩素','銅']},
  {q:'塩素は',c:['単体','化合物']},
  {q:'原子は種類によって質量が決まって',c:['いる','いない']},
  {q:'鉄と硫黄の混合物を加熱したものは磁石に',c:['つかない','つく']},
  {q:'水の電気分解では酸素：水素は',c:['１：２','２：１']},
  {q:'鉄と硫黄の混合物を加熱するのは',c:['上','下']},
  {q:'鉄に塩酸で',c:['水素','酸素']},
  {q:'亜鉛に塩酸で',c:['水素','窒素']},
  {q:'原子を新たに作られることは',c:['ない','ある']},
  {q:'鉄と硫黄の混合物を加熱すると質量は',c:['小さくなる','大きくなる']},
  {q:'フェノールフタレイン溶液はアルカリ性で',c:['赤色','青色']},
  {q:'塩化銅水溶液を電気分解で陰極に発生するのが',c:['銅','塩素']},
  {q:'炭酸水素ナトリウムと炭酸ナトリウムで水に溶けやすいのは',c:['炭酸ナトリウム','炭酸水素ナトリウム']},
  {q:'原子は化学変化で質量が',c:['変わらない','変わる']},
  {q:'水の電気分解で陽極に発生するのが',c:['酸素','水素']},
  
  ];
  const Che4 = [
  {q:'酸化物から酸素が離れるのが',c:['還元','酸化']},
  {q:'金属に結びつく酸素の量は決まって、',c:['いる','いない']},
  {q:'酸素：酸化マグネシウムは',c:['２：５','２：３']},
  {q:'銅：酸化銅は',c:['１：５','４：５']},
  {q:'炭酸水素ナトリウムとクエン酸で起こる反応は',c:['吸熱反応','発熱反応']},
  {q:'酸化銅：銅は',c:['５：４','４：１']},
  {q:'物質が酸素と結びつくのが',c:['酸化','還元']},
  {q:'鉄粉と活性炭で起こる反応は',c:['発熱反応','吸熱反応']},
  {q:'塩化アンモニウムと水酸化バリウムで起こる反応は',c:['吸熱反応','発熱反応']},
  {q:'硫酸と水酸化バリウムを混合すると質量は',c:['変わらない','減る']},
  {q:'銅を空気中で加熱すると質量は',c:['大きくなる','小さくなる']},
  {q:'ものを燃やすはたらきがあるのが',c:['酸素','窒素']},
  {q:'酸化銅と炭素を加熱したとき、還元されたのが',c:['酸化銅','炭素']},
  {q:'酸素：銅は',c:['１：４','２：３']},
  {q:'炭酸水素ナトリウムと塩酸を混合すると質量は',c:['減る','変わらない']},
  {q:'酸化銅と炭素を加熱したとき、酸化されたのが',c:['炭素','酸化銅']},
  {q:'酸素：マグネシウムは',c:['２：３','１：４']},
  {q:'炭酸水素ナトリウムと塩酸で発生るするのが',c:['二酸化炭素','塩素']},
  
  ];
  const Che5 = [
   {q:'ダニエル電池で電流の向きは',c:['銅板→亜鉛板','亜鉛板→銅板']},
  {q:'塩酸の電気分解で陽極から発生するのが',c:['塩素','酸素']},
  {q:'塩酸の電気分解で陰極から発生するのが',c:['水素','塩素']},
  {q:'ダニエル電池で亜鉛板は',c:['ー極','＋極']},
  {q:'電子がもつ電気は',c:['-','+']},
  {q:'イオンになりやすいほうが',c:['ー極','＋極']},
  {q:'陰イオンは電子を',c:['受け取ったもの','失ったもの']},
  {q:'イオンになりやすいのが',c:['銅','銀']},
  {q:'陽子がもつ電気は',c:['+','-']},
  {q:'ダニエル電池で電子が動くのが',c:['亜鉛板→銅板','銅板→亜鉛板']},
  {q:'イオンになりやすいのが',c:['マグネシウム','亜鉛']},
  {q:'燃料電池で生じる物質は',c:['水','塩']},
  {q:'原子が電子を失ったものが',c:['陽イオン','陰イオン']},
  {q:'陽イオンは電子を',c:['失ったもの','受け取ったもの']},
  {q:'イオンになりやすいのが',c:['亜鉛','銅']},
  {q:'塩化銅水溶液の青色の原因は',c:['銅イオン','塩化物イオン']},
  {q:'原子が電子を受け取ったものが',c:['陰イオン','陽イオン']},
  {q:'原子核がもつ電気は',c:['+','-']},
  {q:'塩化銅水溶液はの青色が動くのは',c:['陰極側','陽極側']},
  {q:'塩化銅水溶液の電気分解で気体が発生するのは',c:['陽極','陰極']},
  {q:'イオンになりやすいのが',c:['マグネシウム','銅']},
  ];
  const Che6 = [
  {q:'塩化コバルト紙は水で',c:['青→赤','赤→青']},
  {q:'硫酸に水酸化バリウムを入れると硫酸イオンは',c:['減っていく','変わらない']},
  {q:'中和のときアルカリの陰イオンと酸の陽イオンで',c:['水','塩']},
  {q:'塩化コバルト紙が反応するのは',c:['水','酸性']},
  {q:'アルカリ性のときリトマス紙は',c:['赤→青','青→赤']},
  {q:'フェノールフタレイン溶液は酸性で',c:['無色','赤色']},
  {q:'水素イオンを含む水溶液は',c:['酸性','アルカリ性']},
  {q:'フェノールフタレイン溶液はアルカリ性で',c:['赤','青']},
  {q:'酸性のときリトマス紙は',c:['青→赤','赤→青']},
  {q:'塩化コバルト紙の色は',c:['青色','赤色']},
  {q:'塩化コバルト紙が反応するのは',c:['水','アルカリ性']},
  {q:'BTB溶液はアルカリ性で',c:['青','黄']},
  {q:'水酸化ナトリウムに塩酸を入れると塩化物イオンは',c:['増えていく','変わらない']},
  {q:' pHが「７より小さい」と',c:['酸性','アルカリ性']},
  {q:' pHが「７より大きい」と',c:['アルカリ性','酸性']},
  {q:'中和は',c:['発熱反応','吸熱反応']},
  {q:'塩酸に水酸化ナトリウムを入れると塩化物イオンは',c:['変わらない','増えていく']},
  {q:'水酸化物イオンを含む水溶液は',c:['アルカリ性','酸性']},
  {q:'BTB溶液は中性で',c:['緑','無色']},
  {q:'中和のときアルカリの陽イオンと酸の陰イオンで',c:['塩','水']},
  {q:'中和でできるのは「塩」と',c:['水','イオン']},
  {q:' pHが「７」だと',c:['中性','酸性']},
  {q:'BTB溶液は酸性で',c:['黄','青']},
  {q:'水酸化ナトリウムに塩酸を入れるとナトリウムイオンは',c:['変わらない','増えていく']},
  {q:'酸性に含まれているのは',c:['水素イオン','水酸化物イオン']},
  {q:'アルカリ性に含まれているのは',c:['水酸化物イオン','水素イオン']},
  {q:'フェノールフタレイン溶液は中性で',c:['無色','赤色']},
  {q:'中和でできるのは「水」と',c:['塩','イオン']},
  {q:'硫酸に水酸化バリウムを入れるとバリウムイオンは',c:['減っていく','増えていく']},
  ];
  const Che7 = [];


function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;

let form = document.forms[0];
//let form2 = document.forms[0];
let selectbox = form.selectbox;
let selectbox1 = form.selectbox1;
let selectbox2 = form.selectbox2;
let selectbox3 = form.selectbox3;

selectbox.addEventListener('change', ()=> {
}, false);
// selectbox1.addEventListener('change', ()=> {
// }, false);
// selectbox2.addEventListener('change', ()=> {
// }, false);
// selectbox3.addEventListener('change', ()=> {
// }, false);

let a = 0;
let h = 0;
let end = 0; 
let QuizBuild = 0;

selectbox.onchange = function(){
 if(selectbox.value === "Phy1"){
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
  else if(selectbox.value === "Phy4"){
    QuizBuild = Phy4;
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

selectbox1.onchange = function(){
  if(selectbox1.value === "Che1"){
    QuizBuild = Che1;
      end = QuizBuild.length;
      Quizset();
      }
    else if(selectbox1.value === "Che2"){
        QuizBuild = Che2;
        end = QuizBuild.length;
        Quizset();
      }
      else if(selectbox1.value === "Che3"){
        QuizBuild = Che3;
        end = QuizBuild.length;
        Quizset();
      }
      else if(selectbox1.value === "Che4"){
        QuizBuild = Che4;
        end = QuizBuild.length;
        Quizset();
      }
      else if(selectbox1.value === "Che5"){
        QuizBuild = Che5;
        end = QuizBuild.length;
        Quizset();
      }
      else if(selectbox1.value === "Che6"){
        QuizBuild = Che6;
        end = QuizBuild.length;
        Quizset();
      }
      else if(selectbox1.value === "Che7"){
        QuizBuild = Che7;
        end = QuizBuild.length;
        Quizset();
      }
      else{
        location.reload();
      }
     
      
    }
selectbox2.onchange = function(){
 
      if(selectbox2.value === "b-1"){
       
        QuizBuild = Bio1;
        end = QuizBuild.length;
        Quizset();
        }
      else if(selectbox2.value === "b-2"){
          QuizBuild = Bio2;
          end = QuizBuild.length;
          Quizset();
        }
        else if(selectbox2.value === "b-3"){
          QuizBuild = Bio3;
          end = QuizBuild.length;
          Quizset();
        }
        else if(selectbox2.value === "b-4"){
          QuizBuild = Bio4;
          end = QuizBuild.length;
          Quizset();
        }
        else if(selectbox2.value === "b-5"){
          QuizBuild = Bio5;
          end = QuizBuild.length;
          Quizset();
        }
        else if(selectbox2.value === "b-6"){
          QuizBuild = Bio6;
          end = QuizBuild.length;
          Quizset();
        }
        else if(selectbox2.value === "b-7"){
          QuizBuild = Bio7;
          end = QuizBuild.length;
          Quizset();
        }
        else{
          location.reload();
        }
       
        
      }
    
selectbox3.onchange = function(){

        if(selectbox3.value === "Geo1"){
          QuizBuild = Geo1;
          end = QuizBuild.length;
          Quizset();
          }
        else if(selectbox3.value === "Geo2"){
            QuizBuild = Geo2;
            end = QuizBuild.length;
            Quizset();
          }
          else if(selectbox3.value === "Geo3"){
            QuizBuild = Geo3;
            end = QuizBuild.length;
            Quizset();
          }
          else if(selectbox3.value === "Geo4"){
            QuizBuild = Geo4;
            end = QuizBuild.length;
            Quizset();
          }
          else if(selectbox3.value === "Geo5"){
            QuizBuild = Geo5;
            end = QuizBuild.length;
            Quizset();
          }
          else if(selectbox3.value === "Geo6"){
            QuizBuild = Geo6;
            end = QuizBuild.length;
            Quizset();
          }
          else if(selectbox3.value === "Geo7"){
            QuizBuild = Geo7;
            end = QuizBuild.length;
            Quizset();
          }
          else{
            location.reload();
          }
         
          
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
  
              if(a > end-2 ){
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
