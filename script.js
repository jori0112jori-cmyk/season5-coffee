/* --- Static Data --- */
// 1. デフォルトデータの定義
const DEFAULT_DATA = {
    // 最新のコストデータを反映
    COSTS: [0, 700, 11200, 22400, 44800, 89600, 125400, 150500, 180600, 216800, 260100, 312100, 403900, 444300, 488800, 537600, 591400, 650500, 715600, 787200, 865900, 874500, 883300, 892100, 901000, 910000, 919100, 928300, 937600, 947000, 956500, 966000, 975700, 985500, 995300, 1005300, 1206300, 1326900, 1333600, 1340200, 1346900, 1353700, 1360400, 1367300, 1374100, 1381000, 1387900, 1394800, 1401800, 1408800, 1415800, 1422900],
    VIRUS: [0, 100, 200, 300, 400, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000, 5250, 5500, 5750, 6000, 6250, 6500, 6750, 7000, 7250, 7500, 7750, 8000, 8250, 8400, 8550, 8700, 8850, 9000, 9200, 9400, 9600, 9900, 10200, 10500, 10700, 10900, 11200, 11400, 11600, 11800, 12000, 12200, 12400, 13300,18000, 23000, 28000],
    TEXT: {
        ja: { 
            title: "コーヒー生産計算機", 
            h_prod: "生産設定", 
            weekly: "週間配達", 
            time: "基準時刻", 
            h_status: "目標設定（カフェイン研究所）",
            h_buff: "コーヒーバフ (ウイルス耐性)", // 追加
            cur_lv: "現在Lv", 
            tgt_lv: "目標Lv", 
            stock: "保有量", 
            disc: "消費減少率(%)", 
            h_res: "計算結果", 
            r_daily: "最大生産時間(24h)", 
            r_cost: "必要量", 
            r_virus: "合計ウイルス耐性", 
            r_short: "不足", 
            btn_save: "データ保存", 
            btn_reset: "リセット", 
            btn_now: "現在", 
            msg_ok: "達成済み", 
            msg_wait: "必要量確保予測", 
            msg_stop: "生産量 0", 
            f_prefix: "コーヒー工場" 
        },
        en: { 
            title: "Coffee Calc", 
            h_prod: "Production", 
            weekly: "Weekly", 
            time: "Base Time", 
            h_status: "Goal Setting (Caffeine Inst.)",
            h_buff: "Coffee Buff (Virus Res.)", // 追加
            cur_lv: "Current Lv", 
            tgt_lv: "Target Lv", 
            stock: "Stock", 
            disc: "Resource Reduction(%)", 
            h_res: "Result", 
            r_daily: "Max Production Time(24h)", 
            r_cost: "Required Amount", 
            r_virus: "Total Virus Resistance", 
            r_short: "Shortage", 
            btn_save: "Data Save", 
            btn_reset: "Reset", 
            btn_now: "Now", 
            msg_ok: "Completed", 
            msg_wait: "Prediction of required amount", 
            msg_stop: "No Prod", 
            f_prefix: "Coffee Factory" 
        }
    }
};

// 2. 稼働用変数の初期化
let DATA = {
    COSTS: [...DEFAULT_DATA.COSTS],
    VIRUS: [...DEFAULT_DATA.VIRUS],
    TEXT: DEFAULT_DATA.TEXT
};

// 安全に配列を拡張
while(DATA.COSTS.length <= 60) DATA.COSTS.push(0);
while(DATA.VIRUS.length <= 60) DATA.VIRUS.push(0);

/* --- App Logic --- */
const app = (() => {
    const CONFIG = {
        SAVE_KEY: 's5_coffee_v3_safe',
        DATA_KEY: 's5_custom_data_v1',
        MAX_LV: 60,
        PROD_BASE: 720
    };

    let lang = 'ja';
    
    const $ = id => document.getElementById(id);
    const $$ = sel => document.querySelectorAll(sel);
    const roman = n => ['','Ⅰ','Ⅱ','Ⅲ','Ⅳ'][n] || n;
    
    const init = () => {
        try {
            loadMasterData();

            const maxDataLv = DATA.COSTS.findLastIndex(n => n > 0);
            const subTitle = document.querySelector('.subtitle');
            if(subTitle) subTitle.textContent = `LastWar S5 Coffee Calc (Data: Lv.${maxDataLv})`;
            
            lang = localStorage.getItem('s5_lang') || 'ja';
            renderUI();
            try { loadData(); } catch(e) { console.warn("Load skipped", e); }
            setLang(lang);
            setTimeout(() => {
                if(!($('now-time').value)) setNow();
                calc();
            }, 50);
        } catch(err) {
            console.error("Init Error:", err);
            alert("初期化エラーが発生しました。");
        }
    };

    const loadMasterData = () => {
        const raw = localStorage.getItem(CONFIG.DATA_KEY);
        if(raw) {
            try {
                const custom = JSON.parse(raw);
                if(custom.COSTS && Array.isArray(custom.COSTS)) {
                    DATA.COSTS = custom.COSTS;
                }
                if(custom.VIRUS && Array.isArray(custom.VIRUS)) {
                    DATA.VIRUS = custom.VIRUS;
                }
                console.log("Custom data loaded");
            } catch(e) {
                console.error("Data Load Error", e);
            }
        }
        while(DATA.COSTS.length <= 60) DATA.COSTS.push(0);
        while(DATA.VIRUS.length <= 60) DATA.VIRUS.push(0);
    };

    const renderUI = () => {
        const fArea = $('factory-area');
        if(fArea) {
            fArea.innerHTML = '';
            for(let i=1; i<=4; i++) {
                const div = document.createElement('div');
                div.innerHTML = `
                    <label><span data-t="f_prefix"></span> ${roman(i)}</label>
                    <select id="f${i}" onchange="app.calc()"></select>
                `;
                fArea.appendChild(div);
                fillSel(`f${i}`, 0, 30);
            }
        }
        fillSel('weekly-lv', 0, 30);
        fillSel('lab-cur', 0, CONFIG.MAX_LV);
        fillSel('lab-tgt', 1, CONFIG.MAX_LV);
        
        const dSel = $('discount');
        for(let i=0; i<=20; i+=0.5) dSel.add(new Option(i.toFixed(1)+'%', i));
    };

    const fillSel = (id, min, max) => {
        const s = $(id);
        if(!s) return;
        s.innerHTML = '';
        if(min===0) s.add(new Option('-', 0));

        const isLab = id.startsWith('lab-');

        for(let i=Math.max(1, min); i<=max; i++) {
            let label = 'Lv.' + i;
            
            if(isLab) {
                const v = DATA.VIRUS[i] || 0;
                label += ` [${v.toLocaleString()}]`;
            } else {
                const prod = i * CONFIG.PROD_BASE;
                let prodStr = "";
                if(prod >= 1000) {
                    prodStr = (prod / 1000).toFixed(2) + 'K';
                } else {
                    prodStr = prod;
                }
                label += ` [${prodStr}/h]`;
            }
            
            s.add(new Option(label, i));
        }
    };

    // ★新規追加: コーヒーバフの排他制御
    const toggleBuff = (val) => {
        const b250 = $('buff-250');
        const b500 = $('buff-500');
        
        // 重複不可ロジック
        if (val === 250 && b250.checked) {
            b500.checked = false;
        } else if (val === 500 && b500.checked) {
            b250.checked = false;
        }
        calc();
    };

    const calc = () => {
        let hourlyProd = 0;
        for(let i=1; i<=4; i++) {
            const lv = parseInt($(`f${i}`)?.value || 0);
            const val = lv * CONFIG.PROD_BASE;
            hourlyProd += val;
        }
        
        // 週間配達Lvを取得
        const weeklyLv = parseInt($('weekly-lv')?.value || 0);
        hourlyProd += (weeklyLv * CONFIG.PROD_BASE);

        $('total-prod').innerHTML = fmtKM(hourlyProd, true) + '/h';
        $('res-daily').innerHTML = fmtKM(hourlyProd * 24, true);

        const cLv = parseInt($('lab-cur')?.value || 0);
        const tLv = parseInt($('lab-tgt')?.value || 0);
        const rate = parseFloat($('discount')?.value || 0);

        let realCost = 0; 

        if(cLv < tLv) {
            for(let i = cLv; i < tLv; i++) {
                const baseCost = DATA.COSTS[i+1] || 0;
                const discountedCost = Math.ceil(baseCost * (1 - rate/100));
                realCost += discountedCost;
            }
        }
        
        $('res-cost').innerHTML = fmtKM(realCost, true);

        // ★修正: 週間配達ボーナス + コーヒーバフ
        const weeklyBonus = weeklyLv >= 1 ? 250 : 0;
        
        // コーヒーバフ値取得
        let buffVal = 0;
        if($('buff-250')?.checked) buffVal = 250;
        if($('buff-500')?.checked) buffVal = 500;

        const totalBonus = weeklyBonus + buffVal;

        const curVirus = (DATA.VIRUS[cLv] || 0) + totalBonus;
        const tgtVirus = (DATA.VIRUS[tLv] || 0) + totalBonus;

        $('res-virus').textContent = `${fmt(curVirus)} → ${fmt(tgtVirus)}`;

        const stock = parseStock($('stock')?.value || 0);
        const shortage = Math.max(0, realCost - stock);
        $('res-short').innerHTML = fmtKM(shortage, true);

        updateStatus(shortage, hourlyProd);
    };

    const updateStatus = (shortage, hourlyProd) => {
        const elTime = $('res-time');
        const elDate = $('res-date');
        const elMsg = $('status-msg');

        if(shortage <= 0) {
            setMsg(elMsg, elTime, "msg_ok", "OK", "#4E342E");
            elDate.textContent = "";
            return;
        }
        if(hourlyProd <= 0) {
            setMsg(elMsg, elTime, "msg_stop", "---", "#8D6E63");
            elDate.textContent = "--/--";
            return;
        }

        const hoursNeeded = shortage / hourlyProd;
        const nowVal = $('now-time').value.split(':');
        const d = new Date();
        d.setHours(nowVal[0]||0, nowVal[1]||0, 0, 0);
        d.setMinutes(d.getMinutes() + (hoursNeeded * 60));

        setMsg(elMsg, elTime, "msg_wait", `${pz(d.getHours())}:${pz(d.getMinutes())}`, "#BF360C");
        elDate.textContent = `${d.getMonth()+1}/${d.getDate()}`;
    };

    const setMsg = (msgEl, timeEl, msgKey, timeText, color) => {
        msgEl.textContent = DATA.TEXT[lang][msgKey];
        msgEl.style.color = color === "#BF360C" ? "#5D4037" : color; 
        timeEl.textContent = timeText;
        timeEl.style.color = color;
    };

    const fmt = n => n.toLocaleString();
    const pz = n => String(n).padStart(2, '0');
    
    const parseStock = v => {
        if(!v) return 0;
        let s = v.toString().toLowerCase().replace(/,/g,'');
        let m = 1;
        if(s.endsWith('k')) { m=1000; s=s.slice(0,-1); }
        else if(s.endsWith('m')) { m=1000000; s=s.slice(0,-1); }
        return Math.floor((parseFloat(s)||0) * m); 
    };

    const fmtKM = (n, detailed=false) => {
        if(n >= 1000000) return (n/1000000).toFixed(2) + '<span class="unit">M</span>';
        if(n >= 1000) return (n/1000).toFixed(2) + '<span class="unit">K</span>';
        return fmt(n);
    };

    const setNow = () => {
        const d = new Date();
        $('now-time').value = `${pz(d.getHours())}:${pz(d.getMinutes())}`;
        const elDate = $('now-date');
        if(elDate) {
            elDate.textContent = `${d.getMonth()+1}/${d.getDate()}`;
        }
        calc();
    };

    const save = () => {
        // バフ設定も保存
        let bf = 0;
        if($('buff-250').checked) bf = 250;
        if($('buff-500').checked) bf = 500;

        const data = {
            fs: [1,2,3,4].map(i => $(`f${i}`).value),
            wk: $('weekly-lv').value,
            lc: $('lab-cur').value,
            lt: $('lab-tgt').value,
            st: $('stock').value,
            ds: $('discount').value,
            bf: bf // 追加
        };
        localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(data));
        alert(lang === 'ja' ? '保存しました' : 'Saved');
    };

    const loadData = () => {
        const raw = localStorage.getItem(CONFIG.SAVE_KEY);
        if(!raw) return;
        const d = JSON.parse(raw);
        if(d.fs) d.fs.forEach((v,i) => { if($(`f${i+1}`)) $(`f${i+1}`).value = v; });
        if(d.wk) $('weekly-lv').value = d.wk;
        if(d.lc) $('lab-cur').value = d.lc;
        if(d.lt) $('lab-tgt').value = d.lt;
        if(d.st) $('stock').value = d.st;
        if(d.ds) $('discount').value = d.ds;
        // バフ設定復元
        if(d.bf) {
            if(d.bf === 250 && $('buff-250')) $('buff-250').checked = true;
            if(d.bf === 500 && $('buff-500')) $('buff-500').checked = true;
        }
    };

    const reset = () => {
        if(confirm('Reset?')) { localStorage.removeItem(CONFIG.SAVE_KEY); location.reload(); }
    };

    const setLang = (l) => {
        lang = l;
        localStorage.setItem('s5_lang', l);
        $$('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if(DATA.TEXT[l][key]) el.textContent = DATA.TEXT[l][key];
        });
        $$('.flag-icon').forEach(e => e.classList.toggle('active', e.getAttribute('onclick').includes(l)));
        calc();
    };

    const onCurChange = () => {
        const cLv = parseInt($('lab-cur')?.value || 0);
        const tEl = $('lab-tgt');
        if(tEl) {
            if(cLv < CONFIG.MAX_LV) {
                tEl.value = cLv + 1;
            } else {
                tEl.value = CONFIG.MAX_LV;
            }
        }
        calc();
    };

    /* --- 管理者機能（パスワードなし） --- */
    const toggleAdmin = () => {
        const p = $('admin-panel');
        if(p.style.display === 'none') {
            p.style.display = 'block';
            $('admin-costs').value = DATA.COSTS.join(', ');
            $('admin-virus').value = DATA.VIRUS.join(', ');
        } else {
            p.style.display = 'none';
        }
    };

    const saveAdmin = () => {
        try {
            const strCost = $('admin-costs').value;
            const strVirus = $('admin-virus').value;

            const newCosts = strCost.split(',').map(s => parseInt(s.trim()) || 0);
            const newVirus = strVirus.split(',').map(s => parseInt(s.trim()) || 0);

            const customData = { COSTS: newCosts, VIRUS: newVirus };
            localStorage.setItem(CONFIG.DATA_KEY, JSON.stringify(customData));
            
            alert('データを更新しました。リロードします。');
            location.reload();
        } catch(e) {
            alert('入力データに誤りがあります。');
        }
    };

    const resetAdmin = () => {
        if(confirm('マスタデータを初期値に戻しますか？')) {
            localStorage.removeItem(CONFIG.DATA_KEY);
            location.reload();
        }
    };
    
    return { init, calc, save, reset, setLang, setNow, onCurChange, toggleAdmin, saveAdmin, resetAdmin, toggleBuff };
})();

document.addEventListener('DOMContentLoaded', app.init);
