(function () {
    "use strict";

    const MAJOR_ARCANA = [
        ["0", "愚人", "The Fool", "天真出发、新开始、冒险精神", "盲目冲动、缺乏计划、鲁莽行事", "✦"],
        ["I", "魔术师", "The Magician", "资源整合、能力展现、主动创造", "能力不足、花言巧语、执行力差", "∞"],
        ["II", "女祭司", "The High Priestess", "直觉敏锐、神秘内敛、潜在可能", "情绪压抑、直觉失灵、过度保守", "☾"],
        ["III", "皇后", "The Empress", "丰饶滋养、稳定关系、温柔包容", "过度依赖、生产受阻、自我价值感低", "♀"],
        ["IV", "皇帝", "The Emperor", "权威秩序、结构稳固、承担责任", "控制欲强、滥用权力、缺乏自律", "♔"],
        ["V", "教皇", "The Hierophant", "传统信仰、导师指引、制度支持", "观念冲突、盲信权威、拒绝建议", "✥"],
        ["VI", "恋人", "The Lovers", "选择与结合、价值观一致、合作关系", "关系失衡、三角纠葛、错误选择", "♡"],
        ["VII", "战车", "The Chariot", "意志取胜、强势推进、掌控局面", "情绪失控、内部冲突、进度受阻", "♜"],
        ["VIII", "力量", "Strength", "以柔克刚、内在勇气、耐心经营", "软弱无力、以暴制暴、耐心不足", "♌"],
        ["IX", "隐士", "The Hermit", "内省探索、独自思考、寻求真理", "孤僻逃避、闭门造车、脱离现实", "⌁"],
        ["X", "命运之轮", "Wheel of Fortune", "命运转折、好运降临、周期变化", "运势低迷、反复无常、抗拒改变", "◉"],
        ["XI", "正义", "Justice", "公平公正、因果报应、理性平衡", "不公待遇、偏袒失衡、账目混乱", "⚖"],
        ["XII", "倒吊人", "The Hanged Man", "暂停等待、换位思考、牺牲奉献", "被动受害、拖延不决、固执己见", "▽"],
        ["XIII", "死神", "Death", "彻底结束、蜕变重生、放下过去", "死缠烂打、拒绝改变、转型失败", "♱"],
        ["XIV", "节制", "Temperance", "调和平衡、循序渐进、身心整合", "情绪失衡、极端行为、顾此失彼", "⚗"],
        ["XV", "恶魔", "The Devil", "欲望沉溺、物质束缚、现实枷锁", "摆脱控制、觉醒逃离、阴影浮现", "♑"],
        ["XVI", "塔", "The Tower", "突发剧变、旧结构崩塌、真相揭露", "长期隐患、压抑爆发、避免灾难", "ϟ"],
        ["XVII", "星星", "The Star", "希望疗愈、灵感涌现、心灵平静", "失望落空、信心不足、愿景模糊", "☆"],
        ["XVIII", "月亮", "The Moon", "潜意识、直觉幻象、隐藏真相", "谎言暴露、恐惧加剧、骗局浮现", "☽"],
        ["XIX", "太阳", "The Sun", "光明喜悦、成功公开、活力充沛", "表面繁荣、自我膨胀、盛极而衰", "☀"],
        ["XX", "审判", "Judgement", "觉醒召唤、旧事重提、重新出发", "拒绝面对、错过机会、评估失误", "♬"],
        ["XXI", "世界", "The World", "圆满完成、整合统一、长期稳定", "未完待续、留有遗憾、目标未达", "◎"]
    ];

    const MINOR_ARCANA = [
        ["A", "权杖 Ace", "Ace of Wands", "新火花、行动开始、灵感迸发", "火花熄灭、激情退去、行动受阻", "♧"],
        ["2", "权杖 2", "Two of Wands", "未来规划、选择权衡、准备行动", "犹豫不决、错失良机、计划搁置", "♧"],
        ["3", "权杖 3", "Three of Wands", "初步成果、团队协作、向外扩展", "合作破裂、扩张受阻、庆祝变味", "♧"],
        ["4", "权杖 4", "Four of Wands", "稳定基础、安全感、小型庆典", "安全感崩塌、职位不稳、基础动摇", "♧"],
        ["5", "权杖 5", "Five of Wands", "意见冲突、良性竞争、争吵博弈", "争吵收场、互不妥协、竞争失败", "♧"],
        ["6", "权杖 6", "Six of Wands", "胜利荣誉、公众认可、旧情重温", "旧情难忘、停滞不前、老客户流失", "♧"],
        ["7", "权杖 7", "Seven of Wands", "坚持立场、面临挑战、防守反击", "坚持无意义、徒劳等待、回报落空", "♧"],
        ["8", "权杖 8", "Eight of Wands", "快速行动、消息传来、高效推进", "进展停滞、延误受阻、效率低下", "♧"],
        ["9", "权杖 9", "Nine of Wands", "坚守防线、疲惫忍耐、最后坚持", "忍耐到极限、独自崩溃、精神透支", "♧"],
        ["10", "权杖 10", "Ten of Wands", "重任压身、长期压力、结果交付", "压力爆发、崩盘放弃、团队解散", "♧"],
        ["P", "权杖侍从", "Page of Wands", "热情新手、消息传来、探索尝试", "虎头蛇尾、不成熟、新人不适", "♧"],
        ["N", "权杖骑士", "Knight of Wands", "迅速行动、热情追求、冲动前行", "鲁莽收场、半途而废、激进失败", "♧"],
        ["Q", "权杖王后", "Queen of Wands", "热情开朗、充满魅力、社交达人", "情绪化、控制欲强、公关失败", "♧"],
        ["K", "权杖国王", "King of Wands", "领袖气质、远见行动、创业精神", "滥用权力、暴躁易怒、领导力危机", "♧"],

        ["A", "圣杯 Ace", "Ace of Cups", "情感萌芽、心动时刻、直觉感受", "情感封闭、无感冷漠、心门关闭", "♢"],
        ["2", "圣杯 2", "Two of Cups", "平等关系、情感交流、合作默契", "关系失衡、情绪不稳、情感拉扯", "♢"],
        ["3", "圣杯 3", "Three of Cups", "庆祝欢聚、情感满足、友谊支持", "过度沉溺、空虚寂寞、分心娱乐", "♢"],
        ["4", "圣杯 4", "Four of Cups", "冷静观望、情绪稳定、暂时休息", "拒绝机会、冷漠疏离、情感倦怠", "♢"],
        ["5", "圣杯 5", "Five of Cups", "失落悲伤、情感挫折、关注缺失", "自怜自艾、放不下过去、创伤残留", "♢"],
        ["6", "圣杯 6", "Six of Cups", "怀旧回忆、童年纯真、礼物馈赠", "怀旧成瘾、停滞不前、童年阴影", "♢"],
        ["7", "圣杯 7", "Seven of Cups", "多重选择、幻想憧憬、灵感涌现", "幻想破灭、不切实际、白日梦醒", "♢"],
        ["8", "圣杯 8", "Eight of Cups", "离开不满足、勇敢转身、放弃追寻", "不敢离开、回头纠缠、辞职失败", "♢"],
        ["9", "圣杯 9", "Nine of Cups", "愿望达成、情感满足、自我陶醉", "愿望落空、孤独空虚、内心匮乏", "♢"],
        ["10", "圣杯 10", "Ten of Cups", "家庭幸福、情感圆满、传承归属", "家庭矛盾、不幸福、归属感缺失", "♢"],
        ["P", "圣杯侍从", "Page of Cups", "情感讯息、纯真示好、敏感细腻", "情绪不稳定、玻璃心、情感脆弱", "♢"],
        ["N", "圣杯骑士", "Knight of Cups", "浪漫追求、情感邀约、理想主义", "浪漫幻想破灭、情绪失控、提案被拒", "♢"],
        ["Q", "圣杯王后", "Queen of Cups", "温柔体贴、情感滋养、同理心强", "过度溺爱、情绪化、母性失控", "♢"],
        ["K", "圣杯国王", "King of Cups", "情感成熟、稳重包容、艺术气质", "情感冷漠、压抑封闭、情感权威崩塌", "♢"],

        ["A", "宝剑 Ace", "Ace of Swords", "清晰真相、新想法、思维突破", "真相被掩盖、判断失误、思维混乱", "⚔"],
        ["2", "宝剑 2", "Two of Swords", "两难抉择、暂时平衡、内心冲突", "无法抉择、拖延逃避、犹豫不决", "⚔"],
        ["3", "宝剑 3", "Three of Swords", "心痛伤害、残酷真相、情感背叛", "伤口未愈、反复疼痛、阴影残留", "⚔"],
        ["4", "宝剑 4", "Four of Swords", "休养生息、暂时撤退、安静反思", "被迫休息、停滞过长、无法动弹", "⚔"],
        ["5", "宝剑 5", "Five of Swords", "言语冲突、恶性竞争、胜利空洞", "争吵收场、双输局面、纠纷不断", "⚔"],
        ["6", "宝剑 6", "Six of Swords", "平静离开、转移疗愈、慢慢放下", "和平假象、逃避现实、流动受阻", "⚔"],
        ["7", "宝剑 7", "Seven of Swords", "暗中行动、取巧策略、隐瞒事实", "谎言败露、投机失败、作弊被抓", "⚔"],
        ["8", "宝剑 8", "Eight of Swords", "自我束缚、思维受限、感到无助", "困在原地、无法挣脱、束缚加深", "⚔"],
        ["9", "宝剑 9", "Nine of Swords", "深度焦虑、彻夜难眠、极度压力", "失眠恶化、恶性循环、精神崩溃", "⚔"],
        ["10", "宝剑 10", "Ten of Swords", "彻底终结、创伤打击、最低谷", "长期创伤、余震不断、阴影笼罩", "⚔"],
        ["P", "宝剑侍从", "Page of Swords", "信息传来、好奇心强、思维活跃", "谣言四起、误解偏差、胡思乱想", "⚔"],
        ["N", "宝剑骑士", "Knight of Swords", "快速思考、犀利言辞、急进行动", "冲动鲁莽、思维冒进、快速亏损", "⚔"],
        ["Q", "宝剑王后", "Queen of Swords", "理性冷静、客观分析、独立思考", "理性过头、冷漠疏离、顾问失职", "⚔"],
        ["K", "宝剑国王", "King of Swords", "公正裁决、逻辑思维、权威决策", "专制独裁、偏执僵化、决策失误", "⚔"],

        ["A", "星币 Ace", "Ace of Pentacles", "物质新始、踏实基础、进账收入", "基础不稳、收入受阻、落地困难", "⛤"],
        ["2", "星币 2", "Two of Pentacles", "平衡协调、多任务处理、现实权衡", "现实压力、失衡混乱、兼顾不来", "⛤"],
        ["3", "星币 3", "Three of Pentacles", "技能学习、团队合作、初步成果", "技能不足、培训无效、合作破裂", "⛤"],
        ["4", "星币 4", "Four of Pentacles", "保守稳固、储蓄安全、物质保障", "财务危机、守不住财、安全感崩塌", "⛤"],
        ["5", "星币 5", "Five of Pentacles", "经济拮据、资源匮乏、孤立无援", "缺钱严重、生存焦虑、条件恶劣", "⛤"],
        ["6", "星币 6", "Six of Pentacles", "资源分配、施舍给予、上下级关照", "分配不公、施舍失衡、转账纠纷", "⛤"],
        ["7", "星币 7", "Seven of Pentacles", "耐心等待、长期投资、耕耘收获", "等待落空、无收获、耐心耗尽", "⛤"],
        ["8", "星币 8", "Eight of Pentacles", "专注投入、精益求精、技能磨练", "无法专注、半途而废、质量下降", "⛤"],
        ["9", "星币 9", "Nine of Pentacles", "独立富裕、物质满足、自给自足", "财务缩水、独立受损、资产减少", "⛤"],
        ["10", "星币 10", "Ten of Pentacles", "家族财富、长期稳定、物质传承", "家族矛盾、利益纠纷、根基动摇", "⛤"],
        ["P", "星币侍从", "Page of Pentacles", "学习基础、务实好奇、新手入门", "基础不牢、三分钟热度、零花钱不够", "⛤"],
        ["N", "星币骑士", "Knight of Pentacles", "稳健前进、务实行动、可靠收益", "收益短暂、不可持续、业务受阻", "⛤"],
        ["Q", "星币王后", "Queen of Pentacles", "务实稳重、物质安全感、照顾他人", "物质焦虑、不稳定、后勤出问题", "⛤"],
        ["K", "星币国王", "King of Pentacles", "商业头脑、财富掌控、现实权威", "财务失控、贪婪管理、资本运作失败", "⛤"]
    ];

    const TAROT_DECK = MAJOR_ARCANA.concat(MINOR_ARCANA);

    const STORAGE_KEY = "maya-daily-tarot-draw";
    let lastFocusedElement = null;

    function getDateKey() {
        const now = new Date();
        return [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0")
        ].join("-");
    }

    function getSavedDraw() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            const isValid = saved &&
                saved.dateKey === getDateKey() &&
                Number.isInteger(saved.cardIndex) &&
                saved.cardIndex >= 0 &&
                saved.cardIndex < TAROT_DECK.length &&
                typeof saved.isReversed === "boolean";
            return isValid ? saved : null;
        } catch (error) {
            return null;
        }
    }

    function randomInteger(maximum) {
        if (window.crypto && typeof window.crypto.getRandomValues === "function") {
            const randomValue = new Uint32Array(1);
            window.crypto.getRandomValues(randomValue);
            return randomValue[0] % maximum;
        }
        return Math.floor(Math.random() * maximum);
    }

    function createDailyDraw() {
        const draw = {
            dateKey: getDateKey(),
            cardIndex: randomInteger(TAROT_DECK.length),
            isReversed: randomInteger(2) === 1
        };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(draw));
        } catch (error) {
            // 存储不可用时仍允许本次抽牌。
        }
        return draw;
    }

    function syncDrawEntry(drawOverride) {
        const savedDraw = drawOverride || getSavedDraw();
        const widget = document.getElementById("daily-tarot");
        const previewCard = widget ? widget.querySelector(".tarot-draw-card") : null;
        const previewNumber = document.getElementById("tarot-preview-number");
        const previewSymbol = document.getElementById("tarot-preview-symbol");
        const previewTitle = document.getElementById("tarot-preview-title");
        const status = document.getElementById("tarot-draw-status");
        const buttonLabel = document.getElementById("tarot-draw-button-label");
        if (!widget || !previewCard || !previewNumber || !previewSymbol || !previewTitle || !status || !buttonLabel) {
            return;
        }

        if (savedDraw) {
            const card = TAROT_DECK[savedDraw.cardIndex];
            const position = savedDraw.isReversed ? "逆位" : "正位";
            const meaning = savedDraw.isReversed ? card[4] : card[3];

            previewNumber.textContent = card[0];
            previewSymbol.textContent = card[5];
            previewTitle.textContent = `${card[1]} · ${position}`;
            status.textContent = meaning.split("、").join(" · ");
            buttonLabel.textContent = "查看今日塔罗";
            previewCard.classList.toggle("is-reversed", savedDraw.isReversed);
            widget.classList.add("has-draw");
            widget.setAttribute("aria-label", `今日塔罗：${card[1]}，${position}。${meaning}`);
        } else {
            previewNumber.textContent = "✦";
            previewSymbol.textContent = "☾";
            previewTitle.textContent = "抽取你的今日指引";
            status.textContent = "静心片刻，凭第一感觉翻开属于你的牌";
            buttonLabel.textContent = "抽取今日塔罗";
            previewCard.classList.remove("is-reversed");
            widget.classList.remove("has-draw");
            widget.setAttribute("aria-label", "抽取你的今日塔罗牌");
        }
    }

    function renderTarotResult(draw) {
        const card = TAROT_DECK[draw.cardIndex];
        const position = draw.isReversed ? "逆位" : "正位";
        const meaning = draw.isReversed ? card[4] : card[3];
        const resultCard = document.getElementById("tarot-result-card");

        document.getElementById("tarot-result-number").textContent = card[0];
        document.getElementById("tarot-result-symbol").textContent = card[5];
        document.getElementById("tarot-position").textContent = position;
        document.getElementById("tarot-result-title").textContent = card[1];
        document.getElementById("tarot-result-english").textContent = card[2];
        document.getElementById("tarot-result-meaning").textContent = meaning.split("、").join(" · ");

        resultCard.classList.toggle("is-reversed", draw.isReversed);
        resultCard.setAttribute("aria-label", `${card[1]}，${position}`);
    }

    function openTarotModal() {
        const modal = document.getElementById("tarot-modal");
        const revealStage = document.getElementById("tarot-reveal-stage");
        const draw = getSavedDraw() || createDailyDraw();
        if (!modal || !revealStage) {
            return;
        }

        lastFocusedElement = document.activeElement;
        renderTarotResult(draw);
        syncDrawEntry(draw);
        modal.hidden = false;
        document.body.classList.add("tarot-modal-open");
        revealStage.classList.remove("is-revealing");
        void revealStage.offsetWidth;
        revealStage.classList.add("is-revealing");

        requestAnimationFrame(() => {
            modal.classList.add("is-visible");
            const closeButton = modal.querySelector(".tarot-modal-close");
            if (closeButton) {
                closeButton.focus();
            }
        });
    }

    function closeTarotModal() {
        const modal = document.getElementById("tarot-modal");
        if (!modal || modal.hidden) {
            return;
        }

        modal.classList.remove("is-visible");
        document.body.classList.remove("tarot-modal-open");
        window.setTimeout(() => {
            modal.hidden = true;
        }, 260);

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    function initDailyTarot() {
        const drawButton = document.getElementById("tarot-draw-button");
        const modal = document.getElementById("tarot-modal");
        if (!drawButton || !modal) {
            return;
        }

        syncDrawEntry();
        drawButton.addEventListener("click", openTarotModal);
        modal.querySelectorAll("[data-tarot-close]").forEach(element => {
            element.addEventListener("click", closeTarotModal);
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && !modal.hidden) {
                closeTarotModal();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDailyTarot);
    } else {
        initDailyTarot();
    }
})();
