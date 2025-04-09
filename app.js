const bed = [
  {
    name: "藁の山",
    skill: "木工",
    skillLevel: 9,
  },
  {
    name: "藁の床",
    skill: "木工",
    skillLevel: 9,
  },
  {
    name: "簡易ベッド",
    skill: "制作",
    skillLevel: 2,
  },
  {
    name: "寝袋",
    skill: "制作",
    skillLevel: 6,
  },
  {
    name: "石のベッド",
    skill: "彫刻",
    skillLevel: 10,
  },
  {
    name: "粗末なベッド",
    skill: "木工",
    skillLevel: 5,
  },
  {
    name: "パンクベッド",
    skill: "鍛冶",
    skillLevel: 11,
  },
  {
    name: "二段ベッド",
    skill: "鍛冶",
    skillLevel: 17,
  },
  {
    name: "ベッド",
    skill: "木工",
    skillLevel: 20,
  },
  {
    name: "モダンなベッド",
    skill: "鍛冶",
    skillLevel: 25,
  },
  {
    name: "ハンモック",
    skill: "木工",
    skillLevel: 32,
  },
  {
    name: "お布団",
    skill: "裁縫",
    skillLevel: 30,
  },
  {
    name: "王子様ベッド",
    skill: "木工",
    skillLevel: 60,
  },
];
const materials = {
  紙: 7,
  ゼリー: 10,
  なま物: 10,
  草: 2,
  藁: 5,
  麻: 6,
  綿: 8,
  シルク: 17,
  蜘蛛糸: 26,
  砂: 1,
  鱗: 11,
  革: 22,
  ウール: 25,
  カシミア: 28,
  ザイロン: 30,
  ミカ: 12,
  珊瑚: 18,
  霊布: 45,
  宵晒: 46,
  プラスチック: 11,
  骨: 8,
  翼鳥鱗: 42,
  竜鱗: 44,
  フィライト: 8,
  氷: 5,
  珪砂: 12,
  グラナイト: 6,
  オーク: 10,
  水晶: 25,
  シルト: 12,
  金: 34,
  銀: 16,
  ライムストーン: 6,
  真珠: 29,
  銅: 7,
  スレート: 11,
  大理石: 16,
  ラピス: 12,
  青銅: 12,
  ダイオライト: 13,
  白金: 28,
  オニキス: 8,
  バサルト: 11,
  オパール: 29,
  コバルト: 12,
  鉄: 14,
  翡翠: 18,
  ターコイズ: 28,
  黒曜石: 16,
  トパーズ: 28,
  ローズクオーツ: 35,
  鋼: 21,
  アクアマリン: 36,
  サファイア: 38,
  アメジスト: 38,
  エメラルド: 38,
  クロム: 30,
  タイタニアム: 40,
  メテオライト: 40,
  ミスリル: 38,
  ダイヤモンド: 48,
  ルビナス: 46,
  アダマンタイト: 42,
  エーテル: 48,
};
const getBedObj = (name) => {
  return bed.find((obj) => obj.name === name);
};
const getSkillLevel = (name) => {
  return getBedObj(name)?.skillLevel || 0;
};
function bedSpec(name, mName, craftQuality) {
  return (
    (5 + getSkillLevel(name) + materials[mName]) * (1 + 0.1 * craftQuality)
  );
}
// console.log(bedSpec("お布団", "ルビナス", 7));
globalThis.onload = () => {
  const bedSelect = document.getElementById("bedSelect");
  const materialSelect = document.getElementById("materialSelect");
  bed.forEach((bedItem) => {
    const option = document.createElement("option");
    option.value = bedItem.name;
    option.textContent = `${bedItem.name} (${bedItem.skill} Lv.${bedItem.skillLevel})`;
    bedSelect.appendChild(option);
  });
  Object.entries(materials).forEach(([material, level]) => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = `${material} (品質 ${level})`;
    materialSelect.appendChild(option);
  });
};
function calculateSpec() {
  const bedName = document.getElementById("bedSelect").value;
  const materialName = document.getElementById("materialSelect").value;
  const craftQuality = parseInt(document.getElementById("craftQuality").value);
  const result = bedSpec(bedName, materialName, craftQuality);
  const resultDiv = document.getElementById("result");
  const selectedBed = getBedObj(bedName);
  if (resultDiv) {
    resultDiv.innerHTML = `
            <h3>計算結果:</h3>
            <p>ベッド: ${bedName}</p>
            <p>必要スキル: ${selectedBed?.skill} Lv.${selectedBed?.skillLevel}</p>
            <p>材料: ${materialName} (Lv.${materials[materialName]})</p>
            <p>制作品質: ${craftQuality}</p>
            <p>最終スペック: ${result.toFixed(1)}</p>
        `;
  }
}
window.calculateSpec = calculateSpec;
