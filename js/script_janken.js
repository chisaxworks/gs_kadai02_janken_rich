// グーの時
$("#gu_btn").on("click",function(){

    // 乱数を作る（共通）
    const r = Math.ceil(Math.random()*3);
    console.log(r);

    // 相手の手（共通）
    if (r === 1) {
        pc_hand = 'グー';
    } else if (r === 2){
        pc_hand = 'チョキ';
    } else if (r === 3){
        pc_hand = 'パー';
    }
    console.log(pc_hand, "PCの手");

    // 自分の手（グー）
    let my_hand = 'グー';
    console.log(my_hand, "自分の手");
    $("#user_hand").html('<img src="img/user_gu.png" alt=""></img>');

    // 結果判定
    if (pc_hand === 'グー') {
        $("#pc_hand").html('<img src="img/pc_gu.png" alt=""></img>');
        let result = 'あいこ';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#222222');
        }, 300);

    } else if(pc_hand === 'チョキ'){
        $("#pc_hand").html('<img src="img/pc_choki.png" alt=""></img>');
        let result = 'あなたの勝ち';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#0066CC');
        }, 300);

    } else if(pc_hand === 'パー'){
        $("#pc_hand").html('<img src="img/pc_par.png" alt=""></img>');
        let result = 'あなたの負け';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#ff3333');
        }, 300);
    }
});

// チョキの時
$("#cho_btn").on("click",function(){

    // 乱数を作る（共通）
    const r = Math.ceil(Math.random()*3);
    console.log(r);

    // 相手の手（共通）
    if (r === 1) {
        pc_hand = 'グー';
    } else if (r === 2){
        pc_hand = 'チョキ';
    } else if (r === 3){
        pc_hand = 'パー';
    }
    console.log(pc_hand, "PCの手");

    // 自分の手（チョキ）
    let my_hand = 'チョキ';
    console.log(my_hand, "自分の手");
    $("#user_hand").html('<img src="img/user_choki.png" alt=""></img>');

    // 判定分岐
    if (pc_hand === 'チョキ') {
        $("#pc_hand").html('<img src="img/pc_choki.png" alt=""></img>');
        let result = 'あいこ';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#222222');
        }, 300);

    } else if(pc_hand === 'パー'){
        $("#pc_hand").html('<img src="img/pc_par.png" alt=""></img>');
        let result = 'あなたの勝ち';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#0066CC');
        }, 300);

    } else if(pc_hand === 'グー'){
        $("#pc_hand").html('<img src="img/pc_gu.png" alt=""></img>');
        let result = 'あなたの負け';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#ff3333');
        }, 300);
    }
});

// パーの時
$("#par_btn").on("click",function(){

    // 乱数を作る（共通）
    const r = Math.ceil(Math.random()*3);
    console.log(r);

    // 相手の手（共通）
    if (r === 1) {
        pc_hand = 'グー';
    } else if (r === 2){
        pc_hand = 'チョキ';
    } else if (r === 3){
        pc_hand = 'パー';
    }
    console.log(pc_hand, "PCの手");

    // 自分の手（パー）
    let my_hand = 'パー';
    console.log(my_hand, "自分の手");
    $("#user_hand").html('<img src="img/user_par.png" alt=""></img>');

    // 判定分岐
    if (pc_hand === 'パー') {
        $("#pc_hand").html('<img src="img/pc_par.png" alt=""></img>');
        let result = 'あいこ';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#222222');
        }, 300);

    } else if(pc_hand === 'グー'){
        $("#pc_hand").html('<img src="img/pc_gu.png" alt=""></img>');
        let result = 'あなたの勝ち';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#0066CC');
        }, 300);

    } else if(pc_hand === 'チョキ'){
        $("#pc_hand").html('<img src="img/pc_choki.png" alt=""></img>');
        let result = 'あなたの負け';
        console.log(result, "結果")
        setTimeout(function(){
            $("#result").html(result);
            $("#result").css('color', '#ff3333');
        }, 300);
    }
});