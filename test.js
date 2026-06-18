const TOTEMS = {
    "红龙": { id: 1, color: "red" },
    "白风": { id: 2, color: "white" },
    "蓝夜": { id: 3, color: "blue" },
    "黄种子": { id: 4, color: "yellow" },
    "红蛇": { id: 5, color: "red" },
    "白世界桥": { id: 6, color: "white" },
    "蓝手": { id: 7, color: "blue" },
    "黄星星": { id: 8, color: "yellow" },
    "红月": { id: 9, color: "red" },
    "白狗": { id: 10, color: "white" },
    "蓝猴": { id: 11, color: "blue" },
    "黄人": { id: 12, color: "yellow" },
    "红天行者": { id: 13, color: "red" },
    "白巫师": { id: 14, color: "white" },
    "蓝鹰": { id: 15, color: "blue" },
    "黄战士": { id: 16, color: "yellow" },
    "红地球": { id: 17, color: "red" },
    "白镜子": { id: 18, color: "white" },
    "蓝风暴": { id: 19, color: "blue" },
    "黄太阳": { id: 20, color: "yellow" }
};

const CHAKRAS = [
    { key: "crown", label: "顶轮图腾", family: "极性家族", chakra: "顶轮" },
    { key: "throat", label: "喉轮图腾", family: "基本家族", chakra: "喉轮" },
    { key: "heart", label: "心轮图腾", family: "核心家族", chakra: "心轮" },
    { key: "solar", label: "太阳神经丛图腾", family: "信号家族", chakra: "太阳神经丛" },
    { key: "root", label: "海底轮图腾", family: "通道家族", chakra: "海底轮" }
];

const TEST_DATA = {
    boss: {
        icon: "💼",
        title: "老板版 · 财富炼金",
        subtitle: "解码本自具足的财富通道",
        audience: "创业者、高管、职场精英",
        guide: "你不是赚不到钱，而是用错了自己的出厂设置。",
        questions: [
            {
                text: "做重大决策时，你最信任的依据？",
                answers: [
                    { label: "身体直觉", totem: "红蛇" },
                    { label: "爱与忠诚", totem: "白狗" },
                    { label: "宏观视野", totem: "蓝鹰" },
                    { label: "内在光芒", totem: "黄太阳" }
                ]
            },
            {
                text: "你如何向世界宣告商业主张？",
                answers: [
                    { label: "起源故事", totem: "红龙" },
                    { label: "打破壁垒", totem: "白世界桥" },
                    { label: "幽默包装", totem: "蓝猴" },
                    { label: "质疑现状", totem: "黄战士" }
                ]
            },
            {
                text: "你的产品/团队核心传递什么？",
                answers: [
                    { label: "归属感", totem: "红地球" },
                    { label: "思想流动", totem: "白风" },
                    { label: "治愈实现", totem: "蓝手" },
                    { label: "自由意志", totem: "黄人" }
                ]
            },
            {
                text: "什么最能点燃赚钱动力？",
                answers: [
                    { label: "探索未知", totem: "红天行者" },
                    { label: "还原真相", totem: "白镜子" },
                    { label: "丰盛梦想", totem: "蓝夜" },
                    { label: "艺术溢价", totem: "黄星星" }
                ]
            },
            {
                text: "你的财富根基建立在什么？",
                answers: [
                    { label: "情绪净化", totem: "红月" },
                    { label: "当下临在", totem: "白巫师" },
                    { label: "蜕变重组", totem: "蓝风暴" },
                    { label: "潜力播种", totem: "黄种子" }
                ]
            }
        ]
    },
    soul: {
        icon: "🔮",
        title: "灵魂版 · 天命觉醒",
        subtitle: "记起你灵魂原本的设计",
        audience: "寻找意义者、身心灵爱好者",
        guide: "你不是在找工作，你是在回忆你来地球前的承诺。",
        questions: [
            {
                text: "什么样的高维体验让你灵魂震颤？",
                answers: [
                    { label: "生命力", totem: "红蛇" },
                    { label: "无条件的爱", totem: "白狗" },
                    { label: "俯瞰清明", totem: "蓝鹰" },
                    { label: "全然圆满", totem: "黄太阳" }
                ]
            },
            {
                text: "你来到地球的核心任务？",
                answers: [
                    { label: "滋养守护", totem: "红龙" },
                    { label: "平等连接", totem: "白世界桥" },
                    { label: "游戏幻象", totem: "蓝猴" },
                    { label: "探寻真理", totem: "黄战士" }
                ]
            },
            {
                text: "你最享受的创造过程？",
                answers: [
                    { label: "共时行走", totem: "红地球" },
                    { label: "灵性沟通", totem: "白风" },
                    { label: "亲手实现", totem: "蓝手" },
                    { label: "自由意志", totem: "黄人" }
                ]
            },
            {
                text: "你生命中最强烈的信号？",
                answers: [
                    { label: "探索渴望", totem: "红天行者" },
                    { label: "还原真相", totem: "白镜子" },
                    { label: "丰盛直觉", totem: "蓝夜" },
                    { label: "创造美感", totem: "黄星星" }
                ]
            },
            {
                text: "你的安全感来源于？",
                answers: [
                    { label: "情绪流动", totem: "红月" },
                    { label: "当下永恒", totem: "白巫师" },
                    { label: "变革重生", totem: "蓝风暴" },
                    { label: "潜力生长", totem: "黄种子" }
                ]
            }
        ]
    },
    student: {
        icon: "🎓",
        title: "学生版 · 学业开挂",
        subtitle: "唤醒本自具足的学习天赋",
        audience: "小学生到大学生、考研党",
        guide: "补课补的是知识，天赋唤醒补的是频率。你不是要更努力，你是要开挂。",
        questions: [
            {
                text: "考试前，你最需要哪种状态？",
                answers: [
                    { label: "体能充沛", totem: "红蛇" },
                    { label: "心态平和", totem: "白狗" },
                    { label: "冷静俯瞰", totem: "蓝鹰" },
                    { label: "自信光芒", totem: "黄太阳" }
                ]
            },
            {
                text: "你最喜欢的复习方式？",
                answers: [
                    { label: "朗读背诵", totem: "红龙" },
                    { label: "思维导图", totem: "白世界桥" },
                    { label: "编口诀", totem: "蓝猴" },
                    { label: "提问辩论", totem: "黄战士" }
                ]
            },
            {
                text: "你最容易在哪学会东西？",
                answers: [
                    { label: "行走中", totem: "红地球" },
                    { label: "听讲时", totem: "白风" },
                    { label: "动手做", totem: "蓝手" },
                    { label: "自主阅读", totem: "黄人" }
                ]
            },
            {
                text: "遇到卡壳难题第一反应？",
                answers: [
                    { label: "换角度", totem: "红天行者" },
                    { label: "审题意", totem: "白镜子" },
                    { label: "凭直觉", totem: "蓝夜" },
                    { label: "求优美", totem: "黄星星" }
                ]
            },
            {
                text: "考前一晚怎样稳住？",
                answers: [
                    { label: "写日记", totem: "红月" },
                    { label: "静坐", totem: "白巫师" },
                    { label: "查漏补缺", totem: "蓝风暴" },
                    { label: "早睡", totem: "黄种子" }
                ]
            }
        ]
    },
    parent: {
        icon: "👁",
        title: "家长版 · 智慧陪跑",
        subtitle: "看清孩子的出厂设置",
        audience: "陪读父母、教育焦虑者",
        guide: "最好的教育，不是灌满一桶水，而是点燃一把火。",
        questions: [
            {
                text: "观察孩子，最让你印象深刻的特质？",
                answers: [
                    { label: "精力旺", totem: "红蛇" },
                    { label: "敏感黏人", totem: "白狗" },
                    { label: "大格局", totem: "蓝鹰" },
                    { label: "小太阳", totem: "黄太阳" }
                ]
            },
            {
                text: "孩子表达自己最典型的方式？",
                answers: [
                    { label: "讲故事", totem: "红龙" },
                    { label: "撮合朋友", totem: "白世界桥" },
                    { label: "搞笑扮鬼脸", totem: "蓝猴" },
                    { label: "爱提问", totem: "黄战士" }
                ]
            },
            {
                text: "孩子最让你放心/操心的状态？",
                answers: [
                    { label: "走到哪学到哪", totem: "红地球" },
                    { label: "听课眼睛发亮", totem: "白风" },
                    { label: "刷题忘食", totem: "蓝手" },
                    { label: "自主规划", totem: "黄人" }
                ]
            },
            {
                text: "孩子面对竞争/考试最突出的特质？",
                answers: [
                    { label: "越换环境越兴奋", totem: "红天行者" },
                    { label: "先检查错误", totem: "白镜子" },
                    { label: "梦到考题", totem: "蓝夜" },
                    { label: "卷面美观", totem: "黄星星" }
                ]
            },
            {
                text: "孩子崩溃/压力大时，你最该做什么？",
                answers: [
                    { label: "让他哭/写", totem: "红月" },
                    { label: "陪他静坐", totem: "白巫师" },
                    { label: "大扫除整理", totem: "蓝风暴" },
                    { label: "养花宠物", totem: "黄种子" }
                ]
            }
        ]
    }
};

const TOTEM_DESCRIPTIONS = {
    boss: {
        "红龙": "你的财富基因是源头供养者。你是平台的搭建者，适合供应链、母婴、养老产业。你的开挂方式是：先给予，后收获。",
        "白风": "你的财富基因是灵性信使。你的话语就是频率，适合传媒、教育、写作。你的开挂方式是：言出法随。",
        "蓝夜": "你的财富基因是丰盛梦想家。你的直觉就是地图，适合投资、艺术、夜经济。你的开挂方式是：梦想成真。",
        "黄种子": "你的财富基因是潜力播种者。你的专注就是复利，适合科研、农业、长周期投资。你的开挂方式是：静待花开。",
        "红蛇": "你的财富基因是本能捕猎者。你的身体就是雷达，适合医疗、健身、餐饮。你的开挂方式是：向死而生。",
        "白世界桥": "你的财富基因是平等终结者。你的连接就是资源，适合中介、公关、猎头。你的开挂方式是：断舍离后的新生。",
        "蓝手": "你的财富基因是精准显化者。你的双手就是魔法，适合外科、工匠、编程。你的开挂方式是：知行合一。",
        "黄星星": "你的财富基因是宇宙艺术家。你的审美就是溢价，适合设计、音乐、奢侈品。你的开挂方式是：美即是真。",
        "红月": "你的财富基因是情绪炼金师。你的共情就是容器，适合疗愈、文案、情感博主。你的开挂方式是：顺势而为。",
        "白狗": "你的财富基因是无条件的爱。你的忠诚就是品牌，适合教育、宠物、高端服务。你的开挂方式是：爱满自溢。",
        "蓝猴": "你的财富基因是魔法营销师。你的幽默就是传播，适合演艺、脱口秀、新媒体。你的开挂方式是：游戏人间。",
        "黄人": "你的财富基因是自由意志王。你的选择就是权威，适合顾问、教练、知识付费。你的开挂方式是：我选故我在。",
        "红天行者": "你的财富基因是时空探险家。你的探索就是蓝海，适合旅行、游学、跨境电商。你的开挂方式是：跳出框架。",
        "白巫师": "你的财富基因是永恒感召者。你的心流就是时间，适合灵性导师、音乐家、冥想。你的开挂方式是：当下即是。",
        "蓝鹰": "你的财富基因是宇宙战略家。你的视野就是布局，适合投资分析、战略顾问、导演。你的开挂方式是：居高临下。",
        "黄战士": "你的财富基因是无畏破局者。你的质疑就是真相，适合律师、调查记者、改革者。你的开挂方式是：质疑一切。",
        "红地球": "你的财富基因是共时导航者。你的脚印就是路线，适合导游、城市规划、社群运营。你的开挂方式是：跟随脚印。",
        "白镜子": "你的财富基因是绝对秩序者。你的反射就是质检，适合审计、编辑、风控。你的开挂方式是：照见真实。",
        "蓝风暴": "你的财富基因是催化变革者。你的瓦解就是重组，适合危机公关、整形、行业颠覆。你的开挂方式是：不破不立。",
        "黄太阳": "你的财富基因是宇宙开悟者。你的存在就是光明，适合公益、精神领袖、内容创作。你的开挂方式是：光耀四方。"
    },
    soul: {
        "红龙": "你的灵魂原型是源头守护者。你来到地球是为了给予无条件的滋养，让他人感到安全。你的使命是：成为母体。",
        "白风": "你的灵魂原型是灵性信使。你来到地球是为了传递高维信息，唤醒沉睡的意识。你的使命是：言说真理。",
        "蓝夜": "你的灵魂原型是丰盛梦想家。你来到地球是为了展示宇宙的富足，证明梦想可成真。你的使命是：活出梦境。",
        "黄种子": "你的灵魂原型是觉醒潜伏者。你来到地球是为了在静默中积蓄力量，等待时机成熟。你的使命是：耐心花开。",
        "红蛇": "你的灵魂原型是本能觉醒者。你来到地球是为了体验生命的热力，教会他人活在当下。你的使命是：燃烧激情。",
        "白世界桥": "你的灵魂原型是平等终结者。你来到地球是为了连接对立面，终结旧的轮回。你的使命是：架设桥梁。",
        "蓝手": "你的灵魂原型是精准实现者。你来到地球是为了将灵性显化为物质，治愈伤痛。你的使命是：亲手创造。",
        "黄星星": "你的灵魂原型是宇宙艺术家。你来到地球是为了将丑陋转化为美丽，提升振动频率。你的使命是：创造和谐。",
        "红月": "你的灵魂原型是宇宙净化者。你来到地球是为了清洗集体的创伤，让情绪自由流动。你的使命是：臣服流动。",
        "白狗": "你的灵魂原型是无条件的爱。你来到地球是为了展示忠诚与奉献，连接每一颗心。你的使命是：敞开心扉。",
        "蓝猴": "你的灵魂原型是魔法幻术师。你来到地球是为了提醒众生：现实是一场游戏，不必过于认真。你的使命是：嬉笑怒骂。",
        "黄人": "你的灵魂原型是自由意志王。你来到地球是为了行使选择的权力，影响他人的觉醒。你的使命是：明智抉择。",
        "红天行者": "你的灵魂原型是时空探险家。你来到地球是为了探索未知领域，拓展人类的意识边界。你的使命是：勇敢跨越。",
        "白巫师": "你的灵魂原型是永恒感召者。你来到地球是为了示现时间的幻象，活在永恒的当下。你的使命是：安住当下。",
        "蓝鹰": "你的灵魂原型是宇宙视野者。你来到地球是为了提供宏观视角，看清因果与未来。你的使命是：俯瞰全局。",
        "黄战士": "你的灵魂原型是无畏追问者。你来到地球是为了挑战权威，揭开遮蔽真相的面纱。你的使命是：追寻真理。",
        "红地球": "你的灵魂原型是共时导航者。你来到地球是为了在行走中校准方向，信任每一步的指引。你的使命是：同步共时。",
        "白镜子": "你的灵魂原型是绝对秩序者。你来到地球是为了反射真实的自我，还原事物的本貌。你的使命是：如实观照。",
        "蓝风暴": "你的灵魂原型是催化变革者。你来到地球是为了通过震荡带来进化，摧毁陈旧结构。你的使命是：蜕变重生。",
        "黄太阳": "你的灵魂原型是宇宙开悟者。你来到地球是为了散发无条件的爱，照亮前行的道路。你的使命是：成为光。"
    },
    student: {
        "红龙": "你的学业基因是起源滋养者。你适合通过讲故事、建立知识体系来学习。开挂方式是：构建知识树。",
        "白风": "你的学业基因是灵性倾听者。你适合通过听讲、讨论、录制音频来学习。开挂方式是：听风辨位。",
        "蓝夜": "你的学业基因是直觉梦想家。你适合通过想象、预演、睡前复习来学习。开挂方式是：梦中解题。",
        "黄种子": "你的学业基因是专注潜伏者。你适合通过刷题、做笔记、长期积累来学习。开挂方式是：水滴石穿。",
        "红蛇": "你的学业基因是动能感知者。你适合通过边走边读、实验操作、体能锻炼来学习。开挂方式是：动中求静。",
        "白世界桥": "你的学业基因是连接整合者。你适合通过画思维导图、建立学科联系来学习。开挂方式是：融会贯通。",
        "蓝手": "你的学业基因是精准实现者。你适合通过动手实验、抄写、修复错题来学习。开挂方式是：熟能生巧。",
        "黄星星": "你的学业基因是美学鉴赏者。你适合通过美化笔记、艺术联想、追求卷面美观来学习。开挂方式是：以美启真。",
        "红月": "你的学业基因是情绪净化者。你适合通过写日记、倾诉、释放压力来学习。开挂方式是：清空缓存。",
        "白狗": "你的学业基因是忠诚服务者。你适合通过帮助同学、教别人做题来学习。开挂方式是：教学相长。",
        "蓝猴": "你的学业基因是趣味游戏者。你适合通过编口诀、搞笑记忆、游戏化应用来学习。开挂方式是：寓教于乐。",
        "黄人": "你的学业基因是自由意志者。你适合通过自主阅读、制定计划、独立研究来学习。开挂方式是：我的学习我做主。",
        "红天行者": "你的学业基因是时空探索者。你适合通过游学、换环境、跨学科学习来学习。开挂方式是：读万卷书，行万里路。",
        "白巫师": "你的学业基因是心流感召者。你适合通过冥想、进入忘我状态、直觉解题来学习。开挂方式是：无我之境。",
        "蓝鹰": "你的学业基因是全景视野者。你适合通过俯瞰考纲、把握重点、宏观规划来学习。开挂方式是：高屋建瓴。",
        "黄战士": "你的学业基因是无畏追问者。你适合通过质疑老师、深究原理、辩论来学习。开挂方式是：刨根问底。",
        "红地球": "你的学业基因是共时导航者。你适合通过跟随老师节奏、同步复习、脚踏实地来学习。开挂方式是：步步为营。",
        "白镜子": "你的学业基因是绝对秩序者。你适合通过整理错题、检查卷面、逻辑推演来学习。开挂方式是：明察秋毫。",
        "蓝风暴": "你的学业基因是催化变革者。你适合通过考前突击、彻底重构知识体系来学习。开挂方式是：涅槃重生。",
        "黄太阳": "你的学业基因是宇宙开悟者。你适合通过自信暗示、正向激励、享受学习过程来学习。开挂方式是：光芒万丈。"
    },
    parent: {
        "红龙": "你的教育天赋是源头滋养。你擅长给孩子提供安全感。建议：多抱抱孩子，建立依恋关系。",
        "白风": "你的教育天赋是灵性沟通。你擅长用语言引导孩子。建议：多和孩子聊天，少说教，多倾听。",
        "蓝夜": "你的教育天赋是丰盛信念。你擅长给孩子植入自信。建议：相信孩子本自具足，多用积极的预言。",
        "黄种子": "你的教育天赋是耐心守望。你擅长等待孩子成长。建议：尊重孩子的花期，不急不躁。",
        "红蛇": "你的教育天赋是动能激发。你擅长带孩子动起来。建议：学习间隙多运动，劳逸结合。",
        "白世界桥": "你的教育天赋是平等连接。你擅长化解亲子冲突。建议：做孩子和朋友之间的桥梁，而非高高在上。",
        "蓝手": "你的教育天赋是精准示范。你擅长手把手教孩子。建议：多做示范，少动口，用行动影响孩子。",
        "黄星星": "你的教育天赋是美学熏陶。你擅长提升孩子的审美。建议：鼓励孩子把作业写工整，房间收拾美。",
        "红月": "你的教育天赋是情绪涵容。你擅长接住孩子的情绪。建议：允许孩子哭，情绪流淌后理智才回来。",
        "白狗": "你的教育天赋是无条件的爱。你擅长给孩子归属感。建议：告诉孩子，无论成绩如何，你都爱他。",
        "蓝猴": "你的教育天赋是趣味引导。你擅长让学习变好玩。建议：把知识编成游戏或笑话，孩子记得牢。",
        "黄人": "你的教育天赋是尊重自由。你擅长支持孩子做主。建议：多问孩子“你想怎么做？”，培养独立性。",
        "红天行者": "你的教育天赋是探索支持。你擅长带孩子看世界。建议：多带孩子旅行、逛博物馆，增长见识。",
        "白巫师": "你的教育天赋是当下陪伴。你擅长高质量的陪伴。建议：放下手机，全心全意陪孩子一小时胜过一天敷衍。",
        "蓝鹰": "你的教育天赋是宏观规划。你擅长帮孩子把握方向。建议：帮孩子制定长远目标，不被眼前分数迷惑。",
        "黄战士": "你的教育天赋是真理引导。你擅长培养孩子思辨力。建议：鼓励孩子提问，一起寻找答案，而非直接给结果。",
        "红地球": "你的教育天赋是共时导航。你擅长带孩子脚踏实地。建议：重视孩子的每一步进步，稳扎稳打。",
        "白镜子": "你的教育天赋是如实反馈。你擅长客观评价孩子。建议：像镜子一样反映事实，不夸大，不贬低。",
        "蓝风暴": "你的教育天赋是催化成长。你擅长在孩子瓶颈期推一把。建议：当孩子卡住时，帮他打破旧模式，建立新习惯。",
        "黄太阳": "你的教育天赋是光芒照耀。你本身就是孩子的榜样。建议：活出你自己的精彩，孩子自然会向阳而生。"
    }
};

let activeVersionKey = "boss";

document.addEventListener("DOMContentLoaded", () => {
    initBottomNavEffects();

    if (document.getElementById("version-grid")) {
        renderVersionCards();
    }

    if (document.getElementById("quiz-form")) {
        initQuizPage();
    }
});

function initQuizPage() {
    const params = new URLSearchParams(window.location.search);
    const requestedVersion = params.get("version");
    activeVersionKey = TEST_DATA[requestedVersion] ? requestedVersion : "boss";
    const version = TEST_DATA[activeVersionKey];

    const title = document.getElementById("quiz-title");
    const guide = document.getElementById("quiz-guide");
    const kicker = document.getElementById("quiz-version-kicker");
    if (title) title.textContent = version.title;
    if (guide) guide.textContent = version.guide;
    if (kicker) kicker.textContent = "五题天赋测试";

    renderQuestions(version);
    document.getElementById("show-result").addEventListener("click", showResult);
    document.getElementById("quiz-form").addEventListener("change", syncSelectedAnswers);
}

function initBottomNavEffects() {
    document.querySelectorAll(".bottom-nav .nav-item").forEach(item => {
        item.addEventListener("click", function () {
            this.classList.add("nav-clicked");
            setTimeout(() => this.classList.remove("nav-clicked"), 300);
        });
    });
}

function renderVersionCards() {
    const versionGrid = document.getElementById("version-grid");
    versionGrid.innerHTML = Object.entries(TEST_DATA).map(([key, version]) => `
        <button class="version-card" type="button" data-version="${key}">
            <span class="version-icon">${version.icon}</span>
            <span class="version-title">${version.title}</span>
            <span class="version-subtitle">${version.subtitle}</span>
            <span class="version-audience">${version.audience}</span>
        </button>
    `).join("");

    versionGrid.querySelectorAll(".version-card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = `test-quiz.html?version=${encodeURIComponent(card.dataset.version)}`;
        });
    });
}

function renderQuestions(version) {
    const form = document.getElementById("quiz-form");
    form.innerHTML = version.questions.map((question, questionIndex) => {
        const chakra = CHAKRAS[questionIndex];
        const options = question.answers.map((answer, answerIndex) => {
            const letter = String.fromCharCode(65 + answerIndex);
            const totem = TOTEMS[answer.totem];
            return `
                <label class="answer-option">
                    <input type="radio" name="q${questionIndex}" value="${answer.totem}">
                    <span class="answer-letter">${letter}</span>
                    <span class="answer-content">
                        <span class="answer-text">${answer.label}</span>
                        <span class="answer-totem ${totem.color}">${answer.totem}</span>
                    </span>
                </label>
            `;
        }).join("");

        return `
            <section class="question-card" aria-labelledby="question-${questionIndex + 1}-title">
                <div class="question-header">
                    <span class="question-number">Q${questionIndex + 1}</span>
                    <div>
                        <strong id="question-${questionIndex + 1}-title">${chakra.family}</strong>
                        <span>${chakra.chakra}</span>
                    </div>
                </div>
                <p>${question.text}</p>
                <div class="answer-grid">${options}</div>
            </section>
        `;
    }).join("");
    syncSelectedAnswers();
}

function syncSelectedAnswers() {
    document.querySelectorAll(".answer-option").forEach(option => {
        const input = option.querySelector("input");
        option.classList.toggle("selected", Boolean(input && input.checked));
    });
}

function showResult() {
    const selections = CHAKRAS.map((_, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        return selected ? selected.value : "";
    });

    if (selections.some(value => !value)) {
        const error = document.getElementById("quiz-error");
        error.textContent = "请先完成 5 道题，再生成五宫格天赋画像。";
        error.style.display = "block";
        error.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    const version = TEST_DATA[activeVersionKey];
    document.getElementById("portrait-version").textContent = version.title;
    document.getElementById("portrait-grid").innerHTML = selections.map((totemName, index) => {
        const chakra = CHAKRAS[index];
        const totem = TOTEMS[totemName];
        const description = TOTEM_DESCRIPTIONS[activeVersionKey][totemName];
        return `
            <article class="portrait-card ${totem.color}">
                <div class="portrait-card-top">
                    <span class="chakra-label">${chakra.label}</span>
                    <span class="family-label">${chakra.family}</span>
                </div>
                <img src="seal/${totem.id}.png" alt="${totemName}图腾">
                <h3>${totemName}</h3>
                <p>${description}</p>
            </article>
        `;
    }).join("");

    document.getElementById("quiz-error").textContent = "";
    document.getElementById("quiz-error").style.display = "none";
    document.getElementById("portrait-panel").hidden = false;
    document.getElementById("portrait-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}
