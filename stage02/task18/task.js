var num = document.getElementById("inp").value
var data = [];
function handle(){
    var btn = document.getElementById("btn");
    EventUtil.addHandler(list,'click',function(event){
        event = EventUtil.getEvent('event');
        var target = EventUtil.getTarget(event);
        switch(target.id){
            case left-in:
                data.pop("num");
            case right-out:
                data.shift();
            case right-in:
                data.push("num");
            case left-out:
                data.unshift();
        }
    })
}
handle();
