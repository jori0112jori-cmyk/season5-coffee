/* --- Static Data --- */
const DEFAULT_DATA = {
    COSTS: [0, 700, 11200, 22400, 44800, 89600, 125400, 150500, 180600, 216800, 260100, 312100, 403900, 444300, 488800, 537600, 591400, 650500, 715600, 787200, 865900, 874500, 883300, 892100, 901000, 910000, 919100, 928300, 937600, 947000, 956500, 966000, 975700, 985500, 995300, 1005300, 1206300, 1326900, 1333600, 1340200, 1346900, 1353700, 1360400, 1367300, 1374100, 1381000, 1387900, 1394800, 1401800, 1408800, 1415800, 1422900, 1430000, 1436700, 1444400, 1451600, 1458800, 1466100, 1473500, 1480800, 1488200],
    VIRUS: [0, 100, 200, 300, 400, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000, 5250, 5500, 5750, 6000, 6250, 6500, 6750, 7000, 7250, 7500, 7750, 8000, 8250, 8400, 8550, 8700, 8850, 9000, 9200, 9400, 9600, 9900, 10200, 10500, 10700, 10900, 11200, 11400, 11600, 11800, 12000, 12200, 12400, 13300,18000, 23000, 28000],
    ENEMIES: [0, 200, 400, 600, 750, 850, 1000, 1250, 1500, 1750, 2000, 2150, 2300, 2450, 2600, 2750, 2900, 3050, 3200, 3350, 3500, 3650, 3850, 4050, 4350, 4650, 4950, 5250, 5550, 5850, 6150, 6450, 6750, 6950, 7050, 7250, 7450, 7650, 7750, 7950, 8100, 8400, 8500, 8700, 8800, 9000, 9250, 9500, 9750, 10000, 10250, 10500, 10750, 11000, 11250, 11500, 11750, 12000, 12250, 12400, 12550, 12950, 13250, 13650, 13950, 14350, 14650, 15050, 15450, 15750, 16150, 16450, 16850, 17150, 17550, 17950, 18250, 18650, 18950, 19350, 19650, 20050, 20350, 20750, 21150, 21450, 21850, 22150, 22550, 22850, 23250, 23450, 23600, 23800, 24000, 24150, 24350, 24550, 24700, 24900, 25100, 25250, 25450, 25650, 25800, 26000, 26200, 26350, 26550, 26750, 26900, 27100, 27300, 27450, 27650, 27850, 28000, 28200, 28400, 28550, 28750],
    
    TEXT: {
        ja: { 
            title: "コーヒー生産計算機", 
            tab_main: "生産計算", 
            tab_battle: "討伐シミュレータ",

            h_prod: "生産設定", 
            weekly: "週間配達", 
            time: "基準時刻", 
            h_status: "目標設定（カフェイン研究所）",
            h_buff: "コーヒーバフ (ウイルス耐性)", 
            h_battle: "討伐シミュレーション", 
            
            cur_lv: "現在ステータス",
            tgt_lv: "目標ステータス",
            lbl_lv: "Lv:",
            lbl_res: "耐性:",
            
            lbl_cur_buffed: "現在のステータス (バフ込)",
            lbl_next_target: "次の目標 (NEXT TARGET)",
            lbl_req_res: "必要耐性",
            lbl_skill: "戦術スキル: 悪魔狩・怪物殺し +250",
            lbl_max_win: "討伐可能ライン (最大)",
            lbl_bonus: "強化設定 (Buff & Skill)",
            lbl_indiv_check: "終末精鋭Lv & 必要耐性 (個別判定)",
            
            res_over: "超過",
            res_short: "不足",
            res_dmg: "ダメージ",
            res_pena: "与ダメージ",

            stock: "保有量", 
            disc: "消費減少率(%)", 
            h_res: "計算結果", 
            r_daily: "最大生産時間(24h)", 
            r_cost: "必要量", 
            r_virus: "合計ウイルス耐性", 
            r_short: "不足 (切り上げ)", 
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
            tab_main: "Main Calc", 
            tab_battle: "Battle Sim",

            h_prod: "Production", 
            weekly: "Weekly", 
            time: "Base Time", 
            h_status: "Goal Setting (Caffeine Inst.)",
            h_buff: "Coffee Buff (Virus Res.)",
            h_battle: "Battle Sim (Enemy)",

            cur_lv: "Current Status",
            tgt_lv: "Target Status",
            lbl_lv: "Lv:",
            lbl_res: "Res:",

            lbl_cur_buffed: "Current Status (Buffed)",
            lbl_enemy_lv: "Doom Elite Lv",
            lbl_req_res: "Req Res",
            lbl_skill: "Tactical Skill: Monster Slayer (+250)",
            lbl_max_win: "Max Defeatable Limit",
            lbl_bonus: "Bonus Settings (Buff & Skill)",
            lbl_indiv_check: "Enemy Lv & Req Res (Individual)",

            res_over: "Surplus",
            res_short: "Shortage",
            res_dmg: "Damage",
            res_pena: "Penalty",

            stock: "Stock", 
            disc: "Resource Reduction(%)", 
            h_res: "Result", 
            r_daily: "Max Production Time(24h)", 
            r_cost: "Required Amount", 
            r_virus: "Total Virus Resistance", 
            r_short: "Shortage (Rounded Up)", 
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

let DATA = { COSTS: [...DEFAULT_DATA.COSTS], VIRUS: [...DEFAULT_DATA.VIRUS], ENEMIES: [...DEFAULT_DATA.ENEMIES], TEXT: DEFAULT_DATA.TEXT };
// 配列の安全確保
while(DATA.COSTS.length <= 60) DATA.COSTS.push(0);
while(DATA.VIRUS.length <= 60) DATA.VIRUS.push(0);
while(DATA.ENEMIES.length <= 120) DATA.ENEMIES.push(0);

/* --- App Logic --- */
const app = (() => {
    const CONFIG = {
        SAVE_KEY: 's5_coffee_v3_safe',
        DATA_KEY: 's5_custom_data_v1',
        MAX_LV: 60,
        PROD_BASE: 720
    };

    let lang = 'ja';
    let activeBuff = 0; 
    let skillActive = false; 
    let currentTab = 'main'; 
    
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
            alert("初期化エラーが発生しました。リセットボタンを押すか、キャッシュをクリアしてください。");
        }
    };

    const loadMasterData = () => {
        const raw = localStorage.getItem(CONFIG.DATA_KEY);
        if(raw) {
            try {
                const custom = JSON.parse(raw);
                if(custom.COSTS) DATA.COSTS = custom.COSTS;
                if(custom.VIRUS) DATA.VIRUS = custom.VIRUS;
                if(custom.ENEMIES) DATA.ENEMIES = custom.ENEMIES;
            } catch(e) {}
        }
        while(DATA.COSTS.length <= 60) DATA.COSTS.push(0);
        while(DATA.VIRUS.length <= 60) DATA.VIRUS.push(0);
        while(DATA.ENEMIES.length <= 120) DATA.ENEMIES.push(0);
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
                label += ` [${v}]`; 
            } else {
                const prod = i * CONFIG.PROD_BASE;
                const prodStr = prod >= 1000 ? (prod/1000).toFixed(2)+'K' : prod;
                label += ` [${prodStr}/h]`;
            }
            s.add(new Option(label, i));
        }
    };

    const step = (type, delta) => {
        if(type === 'disc') {
            const el = $('discount'); 
            let val = parseFloat(el.value || 0);
            val += delta;
            if(val < 0) val = 0;
            if(val > 20) val = 20;
            val = Math.round(val * 10) / 10;
            el.value = val;
            $('disp-disc').textContent = val.toFixed(1);
            calc();
            return;
        }

        if(type === 'enemy') {
            const el = $('enemy-lv');
            let val = parseInt(el.value || 1);
            val += delta;
            if(val < 1) val = 1;
            
            let realMax = DATA.ENEMIES.findLastIndex(v => v > 0);
            if (realMax === -1) realMax = DATA.ENEMIES.length - 1;

            if(val > realMax) val = realMax;
            
            el.value = val;
            calc(); 
            return;
        }

        const id = `lab-${type}`;
        const el = $(id);
        if(!el) return;
        let val = parseInt(el.value || 0);
        val += delta;
        if(val < 0) val = 0;
        if(val > CONFIG.MAX_LV) val = CONFIG.MAX_LV;
        el.value = val;
        
        if(type === 'cur') onCurChange();
        else calc();
    };

    const toggleWeekly = () => {
        const isActive = $('weekly-active').checked;
        const sel = $('weekly-lv');
        if (isActive) {
            sel.classList.remove('disabled-item');
        } else {
            sel.classList.add('disabled-item');
        }
        calc(true);
    };

    const toggleBuffBtn = (val) => {
        const btn250 = $('btn-buff-250');
        const btn500 = $('btn-buff-500');
        if (activeBuff === val) {
            activeBuff = 0;
            if(btn250) btn250.classList.remove('active');
            if(btn500) btn500.classList.remove('active');
        } else {
            activeBuff = val;
            if(val === 250) {
                if(btn250) btn250.classList.add('active');
                if(btn500) btn500.classList.remove('active');
            } else {
                if(btn500) btn500.classList.add('active');
                if(btn250) btn250.classList.remove('active');
            }
        }
        calc(true);
    };

    const toggleSkill = () => {
        skillActive = !skillActive;
        const btn = $('btn-skill');
        if(btn) {
            if (skillActive) btn.classList.add('active');
            else btn.classList.remove('active');
        }
        calc(true);
    };

    const switchTab = (tabName) => {
        currentTab = tabName;
        const viewMain = $('view-main');
        const viewBattle = $('view-battle');
        const btnMain = $('tab-btn-main');
        const btnBattle = $('tab-btn-battle');

        if(tabName === 'main') {
            if(viewMain) viewMain.style.display = 'block';
            if(viewBattle) viewBattle.style.display = 'none';
            if(btnMain) btnMain.classList.add('active');
            if(btnBattle) btnBattle.classList.remove('active');
        } else {
            if(viewMain) viewMain.style.display = 'none';
            if(viewBattle) viewBattle.style.display = 'block';
            if(btnMain) btnMain.classList.remove('active');
            if(btnBattle) btnBattle.classList.add('active');
        }
        calc();
    };

    const updateSteppers = () => {
        const curLv = parseInt($('lab-cur').value || 0);
        const curBase = DATA.VIRUS[curLv] || 0;
        if($('disp-cur-lv')) $('disp-cur-lv').textContent = curLv;
        if($('disp-cur-res')) $('disp-cur-res').textContent = curBase.toLocaleString();

        const tgtLv = parseInt($('lab-tgt').value || 0);
        const tgtBase = DATA.VIRUS[tgtLv] || 0;
        if($('disp-tgt-lv')) $('disp-tgt-lv').textContent = tgtLv;
        if($('disp-tgt-res')) $('disp-tgt-res').textContent = tgtBase.toLocaleString();
        
        const discVal = parseFloat($('discount').value || 0);
        if($('disp-disc')) $('disp-disc').textContent = discVal.toFixed(1);

        const enemyLv = parseInt($('enemy-lv').value || 1);
        const enemyReq = DATA.ENEMIES[enemyLv] || 0;
        if($('disp-enemy-lv')) $('disp-enemy-lv').textContent = enemyLv;
        if($('disp-enemy-req')) $('disp-enemy-req').textContent = enemyReq.toLocaleString();
    };

    const onCurChange = () => {
        const cLv = parseInt($('lab-cur')?.value || 0);
        const tEl = $('lab-tgt');
        if(tEl && parseInt(tEl.value) <= cLv) {
            tEl.value = Math.min(cLv + 1, CONFIG.MAX_LV);
        }
        calc(true);
    };

    const addUnit = (unit) => {
        const el = $('stock');
        if (!el) return;
        el.value = (el.value || "") + unit;
        calc();
        el.focus();
    };

    // ★修正: バックスペース機能
    const backspace = () => {
        const el = $('stock');
        if (!el) return;
        const val = el.value || "";
        el.value = val.slice(0, -1);
        calc();
        el.focus();
    };

    const calc = (resetTarget = false) => {
        updateSteppers();

        let hourlyProd = 0;
        for(let i=1; i<=4; i++) {
            const el = $(`f${i}`);
            const lv = parseInt(el ? el.value : 0);
            hourlyProd += (lv * CONFIG.PROD_BASE);
        }
        
        const weeklyActive = $('weekly-active') ? $('weekly-active').checked : false;
        const weeklyLv = parseInt($('weekly-lv') ? $('weekly-lv').value : 0);
        if (weeklyActive) {
            hourlyProd += (weeklyLv * CONFIG.PROD_BASE);
        }

        if($('total-prod')) $('total-prod').innerHTML = fmtKM(hourlyProd, true) + '/h';
        if($('res-daily')) $('res-daily').innerHTML = fmtKM(hourlyProd * 24, true);

        const cLv = parseInt($('lab-cur')?.value || 0);
        const tLv = parseInt($('lab-tgt')?.value || 0);
        const rate = parseFloat($('discount')?.value || 0);

        const rateInt = Math.round(rate * 10);
        const factor = 1000 - rateInt;

        let realCost = 0; 
        if(cLv < tLv) {
            for(let i = cLv; i < tLv; i++) {
                const baseCost = DATA.COSTS[i+1] || 0;
                const discountedCost = Math.ceil((baseCost * factor) / 1000);
                realCost += discountedCost;
            }
        }
        if($('res-cost')) $('res-cost').innerHTML = fmt(realCost);

        const wBonus = (weeklyActive && weeklyLv >= 1) ? 250 : 0;
        const totalBonus = wBonus + activeBuff;
        const curVirusBase = DATA.VIRUS[cLv] || 0;
        const curVirusTotal = curVirusBase + totalBonus;
        
        const tgtVirusBase = DATA.VIRUS[tLv] || 0;
        const tgtVirusTotal = tgtVirusBase + totalBonus;

        if($('res-virus')) $('res-virus').textContent = `${fmt(curVirusTotal)} → ${fmt(tgtVirusTotal)}`;

        // ★討伐シミュレーション
        const skillBonus = skillActive ? 250 : 0;
        const battleVirusTotal = curVirusTotal + skillBonus;

        if($('disp-battle-my-lv')) $('disp-battle-my-lv').textContent = cLv;
        if($('disp-battle-my-res')) $('disp-battle-my-res').textContent = fmt(battleVirusTotal);

        let maxWinLv = 0;
        let maxWinReq = 0;
        
        for (let i = 1; i < DATA.ENEMIES.length; i++) {
            if (DATA.ENEMIES[i] === 0) break;
            if (DATA.ENEMIES[i] <= battleVirusTotal) {
                maxWinLv = i;
                maxWinReq = DATA.ENEMIES[i];
            } else {
                break;
            }
        }
        if ($('disp-max-win-lv')) $('disp-max-win-lv').textContent = maxWinLv;
        if ($('disp-max-win-res')) $('disp-max-win-res').textContent = fmt(maxWinReq);

        // ターゲット自動更新
        let enemyLv = parseInt($('enemy-lv').value || 1);
        const nextTargetLv = maxWinLv + 1;
        
        let realMax = DATA.ENEMIES.findLastIndex(v => v > 0);
        if (realMax === -1) realMax = DATA.ENEMIES.length - 1;
        
        const safeNextTarget = (nextTargetLv <= realMax) ? nextTargetLv : realMax;

        if (resetTarget || enemyLv <= maxWinLv) {
            enemyLv = safeNextTarget;
            $('enemy-lv').value = enemyLv;
        }
        
        const enemyReq = DATA.ENEMIES[enemyLv] || 0;
        if($('disp-enemy-lv')) $('disp-enemy-lv').textContent = enemyLv;
        if($('disp-enemy-req')) $('disp-enemy-req').textContent = fmt(enemyReq);

        // 判定結果
        const battleStatus = $('battle-status');
        const battleDetail = $('battle-detail');
        const box = $('battle-result');

        if (box && battleDetail) {
            if (enemyReq === 0) {
                 if(battleStatus) battleStatus.textContent = "";
                 battleDetail.textContent = "";
                 box.className = "battle-result-box";
            } else if (battleVirusTotal >= enemyReq) {
                if(battleStatus) battleStatus.textContent = ""; 
                const txtOver = DATA.TEXT[lang].res_over;
                battleDetail.innerHTML = `<span style="color:#2E7D32; font-weight:bold;">${txtOver}: +${fmt(battleVirusTotal - enemyReq)}</span>`;
                box.className = "battle-result-box win";
            } else {
                if(battleStatus) battleStatus.textContent = "";
                const diff = enemyReq - battleVirusTotal;
                const rawRatio = diff / enemyReq;
                const percentCeiled = Math.ceil(rawRatio * 100);
                
                const penaltyPercent = percentCeiled * 2;
                let damageRate = 100 - penaltyPercent;
                if (damageRate < 0) damageRate = 0;

                let displayPenalty = penaltyPercent;
                if (displayPenalty >= 100) displayPenalty = 99.9;

                const txtShort = DATA.TEXT[lang].res_short;
                const txtDmg = DATA.TEXT[lang].res_dmg;
                const txtPena = DATA.TEXT[lang].res_pena;

                battleDetail.innerHTML = `
                    ${txtShort}: ${fmt(diff)}<br>
                    <div style="margin-top:4px; font-weight:bold; color:#C62828;">
                        ${txtDmg}: ${damageRate}% (${txtPena}: -${displayPenalty}%)
                    </div>
                `;
                box.className = "battle-result-box lose";
            }
        }

        const stock = parseStock($('stock')?.value || 0);
        let shortage = Math.max(0, realCost - stock);
        
        let safeShortage = 0;
        if (shortage > 0) {
            safeShortage = Math.ceil(shortage / 1000) * 1000;
        }

        if($('res-short')) $('res-short').innerHTML = fmtKM(safeShortage, true);
        updateStatus(safeShortage, hourlyProd);
    };

    const updateStatus = (shortage, hourlyProd) => {
        const elTime = $('res-time');
        const elDate = $('res-date');
        const elMsg = $('status-msg');
        if(!elTime || !elDate || !elMsg) return;

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

        setMsg(elMsg, elTime, "msg_wait", `${d.getHours()}:${pz(d.getMinutes())}`, "#BF360C");
        elDate.textContent = `${d.getMonth()+1}/${d.getDate()}`;
    };

    const setMsg = (msgEl, timeEl, msgKey, timeText, color) => {
        if(DATA.TEXT[lang] && DATA.TEXT[lang][msgKey]) {
            msgEl.textContent = DATA.TEXT[lang][msgKey];
        }
        msgEl.style.color = color === "#BF360C" ? "#5D4037" : color; 
        timeEl.textContent = timeText;
        timeEl.style.color = color;
    };
    const fmt = n => n.toLocaleString();
    const pz = n => String(n).padStart(2, '0');
    
    const fmtKM = (n, detailed=false) => {
        if(n >= 1000000) return parseFloat((n/1000000).toFixed(2)) + '<span class="unit">M</span>';
        if(n >= 1000) return parseFloat((n/1000).toFixed(2)) + '<span class="unit">K</span>';
        return fmt(n);
    };

    const parseStock = v => {
        if(!v) return 0;
        let s = v.toString().toLowerCase().replace(/,/g,'');
        let m = 1;
        if(s.endsWith('k')) { m=1000; s=s.slice(0,-1); }
        else if(s.endsWith('m')) { m=1000000; s=s.slice(0,-1); }
        return Math.floor((parseFloat(s)||0) * m); 
    };
    
    const setNow = () => {
        const d = new Date();
        const tEl = $('now-time');
        if(tEl) tEl.value = `${pz(d.getHours())}:${pz(d.getMinutes())}`;
        const elDate = $('now-date');
        if(elDate) elDate.textContent = `${d.getMonth()+1}/${d.getDate()}`;
        calc();
    };

    const save = () => {
        const data = {
            fs: [1,2,3,4].map(i => { const e=$( `f${i}` ); return e?e.value:0; }),
            wk: $('weekly-lv').value,
            wa: $('weekly-active').checked,
            lc: $('lab-cur').value,
            lt: $('lab-tgt').value,
            st: $('stock').value,
            ds: $('discount').value,
            bf: activeBuff,
            elv: $('enemy-lv').value,
            sa: skillActive
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
        if(d.wa !== undefined) {
            $('weekly-active').checked = d.wa;
        } else {
            $('weekly-active').checked = true;
        }
        toggleWeekly();

        if(d.lc) $('lab-cur').value = d.lc;
        if(d.lt) $('lab-tgt').value = d.lt;
        if(d.st) $('stock').value = d.st;
        if(d.ds) {
            $('discount').value = d.ds;
            if($('disp-disc')) $('disp-disc').textContent = parseFloat(d.ds).toFixed(1);
        }
        if(d.bf) {
            activeBuff = parseInt(d.bf);
            const btn250 = $('btn-buff-250');
            const btn500 = $('btn-buff-500');
            if(activeBuff === 250 && btn250) btn250.classList.add('active');
            if(activeBuff === 500 && btn500) btn500.classList.add('active');
        }
        if(d.elv) $('enemy-lv').value = d.elv;
        
        if(d.sa !== undefined) {
            skillActive = d.sa;
            const btn = $('btn-skill');
            if(btn) {
                if(skillActive) btn.classList.add('active');
                else btn.classList.remove('active');
            }
        }
    };

    const reset = () => {
        if(confirm('設定をリセットしますか？\n(OK=通常リセット / キャンセル=中断)')) { 
            localStorage.removeItem(CONFIG.SAVE_KEY); 
            location.reload(); 
        }
    };

    const setLang = (l) => {
        lang = l;
        localStorage.setItem('s5_lang', l);
        $$('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            if(DATA.TEXT[l] && DATA.TEXT[l][key]) el.textContent = DATA.TEXT[l][key];
        });
        $$('.flag-icon').forEach(e => e.classList.toggle('active', e.getAttribute('onclick').includes(l)));
        calc();
    };

    const toggleAdmin = () => {
        const p = $('admin-panel');
        if(p) p.style.display = (p.style.display === 'none') ? 'block' : 'none';
        if(p.style.display === 'block') {
            $('admin-costs').value = DATA.COSTS.join(', ');
            $('admin-virus').value = DATA.VIRUS.join(', ');
            $('admin-enemies').value = DATA.ENEMIES.join(', ');
        }
    };
    const saveAdmin = () => {
        try {
            const newCosts = $('admin-costs').value.split(',').map(s => parseInt(s.trim()) || 0);
            const newVirus = $('admin-virus').value.split(',').map(s => parseInt(s.trim()) || 0);
            const newEnemies = $('admin-enemies').value.split(',').map(s => parseInt(s.trim()) || 0);
            
            const customData = { COSTS: newCosts, VIRUS: newVirus, ENEMIES: newEnemies };
            localStorage.setItem(CONFIG.DATA_KEY, JSON.stringify(customData));
            alert('Updated. Reloading...');
            location.reload();
        } catch(e) { alert('Error'); }
    };
    const resetAdmin = () => {
        if(confirm('Reset Master Data?')) {
            localStorage.removeItem(CONFIG.DATA_KEY);
            location.reload();
        }
    };
    
    window.app = { 
        init, calc, save, reset, setLang, setNow, onCurChange, 
        toggleAdmin, saveAdmin, resetAdmin, 
        toggleBuffBtn, step, toggleWeekly, switchTab, toggleSkill, addUnit, backspace
    };
    
    return window.app;
})();

document.addEventListener('DOMContentLoaded', app.init);
