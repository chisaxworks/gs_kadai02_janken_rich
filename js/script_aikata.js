$("#start-btn").on("click",function(){

    // 乱数を作るforボケチーム
    const rb = Math.ceil(Math.random()*3);
    console.log(rb);

    // 乱数を作るforツッコミチーム
    const rt = Math.ceil(Math.random()*3);
    console.log(rt);

    // 条件分岐forボケチーム
    if (rb === 1) {
        bokeName = 'くるま';
        $("#boke-name").html('<img src="img/kuruma.jpeg" alt=""></img>');
        $("#boke-words").html('ええやん ええやん');
    } else if (rb === 2){
        bokeName = '堂前';
        $("#boke-name").html('<img src="img/domae.jpeg" alt=""></img>');
        $("#boke-words").html('お前は肉うどんです');
    } else if (rb === 3){
        bokeName = '永見';
        $("#boke-name").html('<img src="img/nagami.jpeg" alt=""></img>');
        $("#boke-words").html('確かにお前の言うとおり');
    }
    console.log(bokeName);

    // 条件分岐forツッコミチーム
    if (rt === 1) {
        tukkomiName = 'けむり';
        $("#tukkomi-name").html('<img src="img/kemuri.jpeg" alt=""></img>');
        $("#tukkomi-words").html('吉本にはこういう人います');
    } else if (rt === 2){
        tukkomiName = '兎';
        $("#tukkomi-name").html('<img src="img/usagi.jpeg" alt=""></img>');
        $("#tukkomi-words").html('肉うどーーーん！？');
    } else if (rt === 3){
        tukkomiName = '浜田';
        $("#tukkomi-name").html('<img src="img/hamada.jpeg" alt=""></img>');
        $("#tukkomi-words").html('言うてないわ');
    }
    console.log(tukkomiName);

    // 判定
    if (bokeName === 'くるま' && tukkomiName === 'けむり') {
        combiMatch();
        $("#combi-name").html('令和ロマン');
    } else if(bokeName === '堂前' && tukkomiName === '兎'){
        combiMatch();
        $("#combi-name").html('ロングコートダディ');
    } else if(bokeName === '永見' && tukkomiName === '浜田'){
        combiMatch();
        $("#combi-name").html('カベポスター');
    } else {
        $("#combi-name").html('');
        $("#combi-name").css('display','none');
        $("#audience").css('display','none');
    }

    $("#boke-words").css('display','block');
    $("#tukkomi-words").css('display','block');
    $(".triangle").css('display','block');

});

// マッチした時の動作を下記にまとめる
function combiMatch(){
// 表示
    $("#combi-name").css('display','block');
    $("#audience").css('display','block');

// 音声
    const audio = new Audio('audio/cheer.mp3');
    audio.play();

// 紙吹雪
    var end = Date.now() + (15 * 50);
    var colors = ['#D0A900', '#fefeb2'];

    (function frame() {

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.75 },
            colors: colors
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.75 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// リセット
$("#reset-btn").on("click",function(){
    location.reload();  // ページを再読み込み
});