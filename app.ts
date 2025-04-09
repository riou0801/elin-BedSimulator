
// app.ts
// First, include your existing types and data (bed and materials)
import { bed, materials, bedSpec } from './main.ts';

// Populate select options when page loads
globalThis.onload = () => {
    const bedSelect = document.getElementById('bedSelect') as HTMLSelectElement;
    const materialSelect = document.getElementById('materialSelect') as HTMLSelectElement;

    // Populate bed options
    bed.forEach(bedItem => {
        const option = document.createElement('option');
        option.value = bedItem.name;
        option.textContent = `${bedItem.name} (${bedItem.skill} Lv.${bedItem.skillLevel})`;
        bedSelect.appendChild(option);
    });

    // Populate material options
    Object.entries(materials).forEach(([material, level]) => {
        const option = document.createElement('option');
        option.value = material;
        option.textContent = `${material} (Lv.${level})`;
        materialSelect.appendChild(option);
    });
};

function calculateSpec() {
    const bedName = (document.getElementById('bedSelect') as HTMLSelectElement).value;
    const materialName = (document.getElementById('materialSelect') as HTMLSelectElement).value;
    const craftQuality = parseInt((document.getElementById('craftQuality') as HTMLInputElement).value);

    const result = bedSpec(bedName, materialName, craftQuality);

    const resultDiv = document.getElementById('result');
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
(window as any).calculateSpec = calculateSpec;
