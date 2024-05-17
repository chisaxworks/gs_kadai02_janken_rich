// 配列の作成
let arr = ["domae","usagi","nagami","hamada","kuruma","kemuri","sakamoto","nakatani","urai","hirai","takeuchi","masumi","oda","ueda","niiyama","ishii","hayashi","mouri"];
let num = arr.length;

// 配列並び替え
for(let i = num; 1 < i; i--){
    let r = Math.floor(Math.random()*i);

    // 入れ替えることでランダムに並び変わったように見せている
    [arr[r],arr[i-1]] = [arr[i-1],arr[r]];
}

//重さ解消のため一旦背景に全ての画像を読み込む
for(let i = 0; i < 10; i++){
    $("#card0"+[i+1]).css('backgroundImage','url(img/'+arr[i]+'.jpeg)');
}

for(let i = 9; i < num; i++){
    $("#card"+[i+1]).css('backgroundImage','url(img/'+arr[i]+'.jpeg)');
}

// 変数宣言（グローバル）
let count = 0;
let firstCard = "";
let secondCard = "";
let firstCardId = "";
let secondCardId = "";
let startCard = 0;
let matchCount = 0;

// タイマー用
let setTimeoutId = undefined;
let startTime = 0; //開始時間
let currentTime = 0; //現在時間

$(".card").on("click",function(){

    // 既に表むいているものをクリックしたら終了
    if($(this).hasClass('front')){
        return;

    }else if (count === 0) {

        // 2周目以降のための初期化
        firstCardId = "";
        secondCardId = "";
        $("#combi-name").html('');
        $("#combi-name").css('backgroundColor','#faebd7');

        // 1枚目
        const index1 = $(".card").index($(this));

        count = 1;

        // このカードが全体の1枚目なのか
        if(startCard === 0){
            startCard = 1;
            startTime = Date.now();
            runTimer();
        }

        $(this).removeClass('back');
        $(this).addClass('front');
        //裏面画像imgを消す処理↓
        $(this).empty();

        firstCard = arr[index1];        
        firstCardId = $(this).attr("id");

    } else if(count === 1){

        // 2枚目
        const index2 = $(".card").index($(this));

        count = 0; //初期化のため0

        $(this).removeClass('back');
        $(this).addClass('front');
        //裏面画像imgを消す処理↓
        $(this).empty();

        secondCard = arr[index2];
        secondCardId = $(this).attr("id");

        // 判定
        checkCombi();

    } else {
        return;
    }

});

// ちょっとストップしたいとき用
$("#stop-btn").click(function(){
    clearTimeout(setTimeoutId);
});

// タイマー
function runTimer(){
    currentTime = Date.now(); //現在時刻
    showTime();
    // 0.01秒ごとにrunTimerが動作する？ぽい
    setTimeoutId = setTimeout(() => {runTimer();},10)
}

function showTime(){
    //Dateはnewで呼び出すことができる 引数の値を文字列で返す
    let d = new Date(currentTime - startTime);
    //Dateオブジェクトの分や秒を取得する
    const getMin = d.getMinutes();
    console.log(getMin);
    const getSec = d.getSeconds();
    const getMillisec = Math.floor(d.getMilliseconds() / 10);
    //padStartで0詰め2桁の数字を作る
    $("#timer").text(`${String(getMin).padStart(2,'0')}:${String(getSec).padStart(2,'0')}:${String(getMillisec).padStart(2,'0')}`);
}

// コンビごとの判定
function checkCombi() {
    if ((firstCard === "kuruma" && secondCard === "kemuri") || (firstCard === "kemuri" && secondCard === "kuruma")) {
        $("#combi-name").html('令和ロマン');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "domae" && secondCard === "usagi") || (firstCard === "usagi" && secondCard === "domae")){
        $("#combi-name").html('ロングコートダディ');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "nagami" && secondCard === "hamada") || (firstCard === "hamada" && secondCard === "nagami")){
        $("#combi-name").html('カベポスター');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "sakamoto" && secondCard === "nakatani") || (firstCard === "nakatani" && secondCard === "sakamoto")){
        $("#combi-name").html('マユリカ');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "urai" && secondCard === "hirai") || (firstCard === "hirai" && secondCard === "urai")){
        $("#combi-name").html('男性ブランコ');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "takeuchi" && secondCard === "masumi") || (firstCard === "masumi" && secondCard === "takeuchi")){
        $("#combi-name").html('天才ピアニスト');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "oda" && secondCard === "ueda") || (firstCard === "ueda" && secondCard === "oda")){
        $("#combi-name").html('オダウエダ');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "niiyama" && secondCard === "ishii") || (firstCard === "ishii" && secondCard === "niiyama")){
        $("#combi-name").html('さや香');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else if((firstCard === "hayashi" && secondCard === "mouri") || (firstCard === "mouri" && secondCard === "hayashi")){
        $("#combi-name").html('ギャロップ');
        matchCombi1();
        setTimeout(matchCombi2, 500);
    } else {
        $("#combi-name").html('合致してません');
        $("#combi-name").css('color','#ffffff');
        $("#combi-name").css('backgroundColor','#666666');
        setTimeout(unmatchCombi, 600);
    }
}

// マッチしたときの動作
function matchCombi1(){
    $("#combi-name").css('color','#ffffff');
    $("#combi-name").css('backgroundColor','#e94609');

    // 音声（WELL DONEと合わせる）
    const audio = new Audio('audio/match.mp3');
    audio.play();

    matchCount += 1; //全体のマッチ数

    // 9組全部マッチしたらタイマーストップ
    if(matchCount === 9){
        clearTimeout(setTimeoutId);
    }
}

function matchCombi2() {
    // 合致したときの不透明度効果（時差）
    $("#"+firstCardId).addClass('disabled');
    $("#"+secondCardId).addClass('disabled');

    // 9組全部マッチしたときのメッセージ
    if(matchCount === 9){
        $("#combi-name").html('WELL DONE!');
        $("#combi-name").css('color','#222222');
        $("#combi-name").css('backgroundImage','linear-gradient(135deg, #b8751e 0%, #ffce08 37%, #fefeb2 47%, #fafad6 50%, #fefeb2 53%, #e1ce08 63%, #b8751e 100%)');
    
        // 音声（WELL DONEと合わせる）
        const audio = new Audio('audio/cheer.mp3');
        audio.play();
    
    }
}

// マッチしなかったときの動作
function unmatchCombi() {
    // カードを裏返す
    $("#"+firstCardId).html('<img src="img/yoshimoto.jpg" alt="裏">');
    $("#"+secondCardId).html('<img src="img/yoshimoto.jpg" alt="裏">');
    $("#"+firstCardId).removeClass('front');
    $("#"+firstCardId).addClass('back');
    $("#"+secondCardId).removeClass('front');
    $("#"+secondCardId).addClass('back');
}


// リセット
$("#reset-btn").on("click",function(){
    location.reload();  // ページを再読み込み
});