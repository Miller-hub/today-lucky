
const dict = {
  "入殓": "入殮", "动土": "動土", "开光": "開光", "订盟": "訂盟", "纳采": "納采",
  "纳财": "納財", "开市": "開市", "开仓": "開倉", "盖屋": "蓋屋", "造庙": "造廟",
  "修坟": "修墳", "祭奠": "祭奠", "针灸": "針灸", "经络": "經絡", "塑绘": "塑繪",
  "动工": "動工", "扫舍": "掃舍", "结网": "結網", "会亲友": "會親友", "迁徙": "遷徙",
  "问名": "問名", "纳畜": "納畜", "栽种": "栽種", "造仓": "造倉", "塞穴": "塞穴",
  "拆卸": "拆卸", "启攒": "啟塚", "祈福": "祈福", "造船": "造船", "开池": "開池",
  "掘井": "掘井", "修饰垣墙": "修飾垣牆", "安门": "安門", "立券": "立券",
  "安香": "安香", "平治道涂": "平治道塗", "整手足甲": "整手足甲", "纳婿": "納婿",
  "塑像": "塑像", "装门": "裝門", "上梁": "上樑", "结婚": "結婚", "订婚": "訂婚",
  "补垣": "補垣", "启钻": "啟塚", "谢土": "謝土", "探病": "探病"
};
function convert(word) {
  return dict[word] || word;
}
function updateLunarInfo(date) {
  const solar = new Date(date);
  const lunar = Lunar.fromDate(solar);
  document.getElementById('solar').textContent = `${solar.getFullYear()}年${solar.getMonth() + 1}月${solar.getDate()}日`;
  document.getElementById('lunar').textContent = lunar.getMonthInChinese() + '月' + lunar.getDayInChinese();
  document.getElementById('ganzhi').textContent = `${lunar.getYearInGanZhi()}年 ${lunar.getMonthInGanZhi()}月 ${lunar.getDayInGanZhi()}日`;
  document.getElementById('zodiac').textContent = lunar.getYearShengXiao() + "年";
  document.getElementById('yi').textContent = lunar.getDayYi().map(convert).join("、") || "查無資料";
  document.getElementById('ji').textContent = lunar.getDayJi().map(convert).join("、") || "查無資料";
}
updateLunarInfo(new Date());
document.getElementById('datepicker').addEventListener('change', function () {
  if (this.value) updateLunarInfo(new Date(this.value));
});
