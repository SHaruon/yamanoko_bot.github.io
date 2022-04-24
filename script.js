//brain.js   var brain;

var push_flag = 0;
var reply = document.getElementById('reply');
var talk_button = document.getElementById('talk_button');
var talk_content = document.getElementById('talk_content');

talk_button.addEventListener('click',function(){
    if(push_flag == 0){
        push_flag = 1;
        var input = talk_content.value;
        var output;

        //それぞれのエレメントがどれくらい文章に入っているか数える
        var count_list = new Array();

        brain.elements.forEach(function(ele){
            var word_num = 0;
            ele.words.forEach(function(word){
                if(input.indexOf(word) != -1){
                    word_num++;
                }
            });
            count_list.push({'name':ele.name,'num':word_num});
        });


        //要素の合計が一番大きくなるresponseを出力
        var max_count=0,max_index=0;
        var score = 0;

        brain.responses.forEach(function(res,index){
            score = 0;
            res.ele.forEach(function(res_ele_name){
                count_list.forEach(function(cnt_ele){
                    if(res_ele_name == cnt_ele.name){
                        score += cnt_ele.num;
                    }
                });
            });
            //scoreの大きさを判定
            if(score > max_count){
                max_count = score;
                max_index = index;
            }
        });

        var selected_array = brain.responses[max_index].responses;
        output = selected_array[Math.floor(Math.random()*selected_array.length)];

        reply.innerHTML = output;
        push_flag = 0;

        console.log(count_list);
    }
})


