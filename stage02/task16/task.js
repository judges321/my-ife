/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var canAdd = false;
var cityInput = document.getElementById('aqi-city-input');
var valueInput = document.getElementById('aqi-value-input');
var table = document.getElementById("aqi-table");

var error = ''
function isHasNum(str){
        if(!str){
            error = "空气质量不能为空";
            return false;
        }
        if(!str.match(/^\d+$/)){
            error = "空气质量必须为整数";
            return false;
        }
    return true;
}
function notHasLetter(str){
        if(!str){
            error = "城市不能为空";
            return false;
        }
        if(!str.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
            error = "城市名必须为中英文字符"
            return false;
        }
    return true;
}
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var isDelete = false;

function addAqiData() {
    
    var city = cityInput.value.trim();
    var value = valueInput.value.trim();
    if (notHasLetter(city)){
        if(isHasNum){
            aqiData[city]=value;
            canAdd = true;
            
        }else{
            alert(error);
        }
    }else{
        alert(error);
    }
    
}


/**
 * 渲染aqi-table表格
 */
function renderAqiList(index) {
//        var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
//        for(var city in aqiData){
//            items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
//        }
//            table.innerHTML = city ? items : "";
    for(var city in aqiData){
       var tr = document.createElement("tr");
       var td1 = document.createElement("td");
        td1.innerHTML = city;
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = aqiData[city];
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerHTML = "删除";
        btn.addEventListener('click',delBtnHandle); 
        td3.appendChild(btn);
		tr.appendChild(td3);
		table.appendChild(tr);
    }
}


/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
    var tr = this.parentNode.parentNode
    var city = tr.firstElementChild.innerHTML;
    console.log(city);
    delete aqiData[city];
    table.removeChild(tr);
    renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn = document.getElementById("add-btn");
    btn.addEventListener('click',addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
}

init();
