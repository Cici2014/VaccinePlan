var dYG = {
    name: "乙型肝炎",
    schoolRequired: true
};
var dJHB = {name: "结核病", schoolRequired: true};
var dJSHZY = {name: "脊髓灰质炎", schoolRequired: true};
var dBRK = {name: "百日咳", schoolRequired: true};
var dBH = {name: "白喉", schoolRequired: true};
var dPSF = {name: "破伤风", schoolRequired: true};
var dMZ = {name: "麻疹", schoolRequired: true};
var dFZ = {name: "风疹"};
var dSXY = {name: "流行性腮腺炎"};
var dAQLN = {name: "A群流行性脑脊髓膜炎"};
var dCQLN = {name: "C群流行性脑脊髓膜炎"};
var dYQLN = {name: "Y群流行性脑脊髓膜炎"};
var dW135QLN = {name: "W135群流行性脑脊髓膜炎"};
var dYN = {name: "流行性乙型脑炎", schoolRequired: true};
var dJG = {name: "甲型肝炎"};
var dSD = {name: "水痘"};
var dHib = {name: "B型流感嗜血杆菌(Hib)感染"};
var dG1RV = {name: "血清型G1导致的婴幼儿轮状病毒胃肠炎"};
var dG2RV = {name: "血清型G2、G3、G4、G9导致的婴幼儿轮状病毒胃肠炎"};
var dEV71 = {name: "肠道病毒71型感染"};
var d13FY = {name: "由肺炎链球菌血清型1、3、4、5、6A、6B、7F、9V、14、18C、19A、19F和23F引起的侵袭性疾病（包括菌血症性肺炎、脑膜炎、败血症和菌血症等）"}
var d23FY = {name: "由肺炎链球菌血清型血清型1、2、3、4、5、6B、7F、8、9N、9V、10A、11A、12F、14、15B、17F、18C、19A、19F、20、22F、23F和33F引起的侵袭性疾病（包括菌血症性肺炎、脑膜炎、败血症和菌血症等）"}

var diseases = [dYG, dJHB, dJSHZY, dBRK, dBH, dPSF,
    dMZ, dFZ, dSXY, dAQLN, dCQLN, /*dYQLN, dW135QLN, */
    dYN, dJG, dSD, dHib, dG1RV, dG2RV, dEV71, d13FY, d23FY];

var vYGYM = {
    name: "乙肝疫苗",
    class: 1,
    diseases: [dYG],
    preferred: true,
    inoculated: false,
    brief: "乙肝疫苗是一种预防乙型肝炎的疫苗。",
    guide: "新生儿在出生后应尽快，一般在8小时内给予基因工程乙肝疫苗1支肌肉注射，注射部位为上臂三角肌（儿童、成人都一样），" +
    "1个月后，再打1支，" +
    "6个月后再打1支，" +
    "一共3针，" +
    "此方案称为0、1、6方案",
    schedules: [{
        name: "0、1、6 方案",
        start: 0,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 0,
                end: 30,
                interval: 0,
                inoculated: false
            },
            {
                start: 30,
                end: Number.MAX_VALUE,
                interval: 30,
                inoculated: false
            },
            {
                start: 30 * 6,
                end: Number.MAX_VALUE,
                interval: 30 * 6,
                inoculated: false
            }]
    }
    ]
};

var vKJM = {
    name: "卡介苗",
    class: 1,
    diseases: [dJHB],
    preferred: true,
    inoculated: false,
    brief: "卡介苗（BCG Vaccine）是由减毒牛型结核杆菌悬浮液制成的活菌苗，具有增强巨噬细胞活性，加强巨噬细胞杀灭肿瘤细胞的能力，活化T淋巴细胞，增强机体细胞免疫的功能。",
    guide: "(一)卡介苗接种时间卡介苗一般在你的宝宝出生后24小时内进行接种，接种部位是上臂三角肌外侧。" +
    "中国卫生部规定：没有接种卡介苗的宝宝，如果还不满3个月，可以直接补种；" +
    "如果在3个月～3岁之间，要进行结核菌素（PPD）试验，结果为阴性就可以补种；" +
    "4岁以及4岁以上的宝宝就不再补种了。" +
    "(二)卡介苗复查时间不管你的宝宝是什么时候接种的卡介苗，3个月后你都应该带他到指定的卫生防疫机构进行卡介苗接种后的效果检查，确保卡介苗已经种上，这叫卡介苗复查。",
    schedules: [{
        name: undefined,
        start: 0,
        end: 365 * 4,
        selected: true,
        schedule: [
            {
                start: 0,
                end: 365 * 4,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vJH = {
    name: "脊灰疫苗",
    class: 1,
    diseases: [dJSHZY],
    preferred: false,
    inoculated: false,
    brief: "脊髓灰质炎疫苗是预防和消灭脊髓灰质炎的有效手段。脊髓灰质炎是由脊髓灰质炎病毒引起的一种急性传染病。临床表现主要以发热、上呼吸道症状、肢体疼痛为主。病毒主要侵犯人体脊髓灰质前角的灰、白质部分，对灰质造成永久性损害，出现肢体弛缓性麻痹。部分患者可发生迟缓性神经麻痹并留下瘫痪后遗症，一般多见于5岁以下小儿，故俗称“小儿麻痹症”。接种疫苗是预防控制脊髓灰质炎传播的最经济、最有效的方法。本病可防难治，一旦引起肢体麻痹易成为终生残疾，甚至危及生命。",
    guide: "目前用来预防脊髓灰质炎的疫苗有两类：口服脊灰减毒活疫苗（OPV）、注射型脊灰灭活疫苗（IPV，包括含IPV成分的联合疫苗）。我国于2016年5月1日起，实施新的脊灰疫苗免疫策略（序贯程序），即2月龄时注射一剂脊灰灭活疫苗（IPV），3月、4月及4岁各口服一剂脊髓灰质炎减毒活疫苗（OPV）。",
    schedules: [{
        name: undefined,
        start: 30 * 2,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 30 * 2,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            },
            {
                start: 30 * 3,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            },
            {
                start: 30 * 4,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            },
            {
                start: 365 * 4,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vBBP = {
    name: "百白破",
    class: 1,
    diseases: [dBRK, dBH, dPSF],
    preferred: false,
    inoculated: false,
    brief: "百日咳、白喉、破伤风混合疫苗简称百白破疫苗，它是由百日咳疫苗、精制白喉和破伤风类毒素按适量比例配制而成，用于预防百日咳、白喉、破伤风三种疾病。使用的有吸附百日咳疫苗、白喉和破伤风类毒素混合疫苗（吸附百白破）和吸附无细胞百日咳疫苗、白喉和破伤风类毒类混合疫苗（吸附无细胞百白破）。",
    guide: "我国现行的免疫程序规定，新生儿出生后3足月就应开始接种百白破疫苗第一针，连续接种3针，每针间隔时间最短不得少于28天，在1岁半至2周岁时再用百白破疫苗加强免疫1针，如果超过三岁则不应再接种白百破疫苗,应等7周岁时用精制白喉疫苗或精制白破二联疫苗加强免疫1针。吸附百白破疫苗采用肌内注射，接种部位在上臂外侧三角肌附着处或臀部外上1/4处。",
    schedules: [{
        name: "3月龄-3岁 方案",
        start: 30 * 3,
        end: 365 * 4,
        selected: true,
        schedule: [
            {
                start: 30 * 3,
                end: 365 * 3,
                interval: 28,
                inoculated: false
            },
            {
                start: 30 * 4,
                end: 365 * 3,
                interval: 28,
                inoculated: false
            },
            {
                start: 30 * 5,
                end: 365 * 3,
                interval: 28,
                inoculated: false
            },
            {
                start: 365 * 1.5,
                end: 365 * 3,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

// TODO 精制白喉疫苗
// TODO 精制白破二联疫苗

/*var vBP = {
    name: "白破疫苗",
    class: 1,
    diseases: [dBH, dPSF],
    preferred: false,
    inoculated: false,
    brief: "白破疫苗是一种儿童疫苗，用于预防白喉、破伤风的发生。白破疫苗由白喉类毒素及破伤风类毒素原液混合而成。",
    guide: "现在一般推荐“百白破三联疫苗”，“百白破Hib四联”，或者“脊髓灰质炎、百白破和Hib五联疫苗”，少去医院，少打针。",
    count: 0,
    schedule: []
};*/
var vBBPHib = {
    name: "四联疫苗",
    fullName: "百白破b型流感嗜血杆菌联合疫苗",
    class: 2,
    diseases: [dBRK, dBH, dPSF, dHib],
    preferred: false,
    inoculated: false,
    brief: "四联疫苗是由百日咳、白喉、破伤风和Hib抗原经过灭活、纯化后联合在一起制成的。可以同时预防多种疾病：百日咳、白喉、破伤风、以及由b型流感嗜血杆菌引起的脑膜炎、肺炎、心包炎、菌血症、会厌炎等疾病。",
    guide: "推荐本品常规免疫接种程序：3、4、5月龄进行基础免疫。18～24月龄加强免疫。每1次人用剂量的无细胞百白破联合疫苗和b型流感嗜血杆菌结合疫苗各0.5ml，混合后肌肉注射。\n" +
    "本疫苗使用前应充分摇匀，将无细胞百白破联合疫苗和b型流感嗜血杆菌结合疫苗混合于同一注射器后肌肉注射。推荐部位为婴儿的大腿前外侧1/3处。基础免疫程序为出生后6个月内3剂接种，于3月龄开始接种，每剂至少间隔1个月，18～24月龄再加强接种1剂（与第3剂接种至少间隔6个月）。",
    schedules: [{
        name: undefined,
        start: 30 * 3,
        end: Number.MAX_VALUE,
        selected: true, schedule: [
            {
                start: 30 * 3,
                end: 30 * 6,
                interval: 30,
                inoculated: false
            },
            {
                start: 30 * 4,
                end: 30 * 6,
                interval: 30,
                inoculated: false
            },
            {
                start: 30 * 5,
                end: 30 * 6,
                interval: 30 * 6,
                inoculated: false
            },
            {
                start: 30 * 18,
                end: 30 * 24,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vJHBBPHib = {
    name: "五联疫苗",
    fullName: "吸附无细胞百白破灭活脊髓灰质炎和b型流感嗜血杆菌（结合）联合疫苗",
    class: 2,
    diseases: [dJSHZY, dBRK, dBH, dPSF, dHib],
    preferred: true,
    inoculated: false,
    brief: "五联疫苗是法国巴斯德生产的含有脊髓灰质炎灭活疫苗、无细胞百白破疫苗和B型流感嗜血杆菌疫苗的联合疫苗，可以替代脊髓灰质炎疫苗、百白破疫苗。接种五联疫苗，可同时预防五种疾病，包括白喉、百日咳、破伤风、脊髓灰质炎和b型流感嗜血杆菌引起的肺炎。",
    guide: "在2、3、4月龄，或3、4、5月龄进行3剂基础免疫；在18月龄进行1剂加强免疫。\n" +
    "本品采用肌肉注射。对婴儿推荐最佳注射部位为大腿前外侧（中间三分之一处）。\n" +
    "对于基础免疫程序接种没有完成（即接种少于3个剂次）的婴儿通常可考虑继续接种。",
    schedules: [{
        name: undefined,
        start: 30 * 2,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 30 * 2,
                end: 30 * 6,
                interval: 30,
                inoculated: false
            },
            {
                start: 30 * 3,
                end: 30 * 6,
                interval: 30,
                inoculated: false
            },
            {
                start: 30 * 4,
                end: 30 * 6,
                interval: 30 * 6,
                inoculated: false
            },
            {
                start: 30 * 18,
                end: 30 * 24,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vMSF = {
    name: "麻腮风疫苗",
    class: 1,
    diseases: [dMZ, dSXY, dFZ],
    preferred: true,
    inoculated: false,
    brief: "麻腮风三联疫苗可用于预防麻疹（Measles）、流行性腮腺炎（Mumps）、风疹（Rubella）三种儿童常见的急性呼吸道传染病。",
    guide: "8个月龄以上的麻疹、腮腺炎和风疹易感者。全年均适宜接种。",
    schedules: [{
        name: undefined,
        start: 30 * 8,
        end: Number.MAX_VALUE,
        selected: true, schedule: [
            {
                start: 30 * 8,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};
/*var vMF = {
    name: "麻风疫苗",
    class: 1,
    diseases: [dMZ, dFZ],
    preferred: false,
    inoculated: false,
    brief: "预防麻疹、风疹",
    guide: "现在一般推荐“麻腮风三联疫苗”",
    count: 0,
    schedule: []
};*/
/*var vMS = {
    name: "麻腮疫苗",
    class: 1,
    diseases: [dMZ, dSXY],
    preferred: false,
    inoculated: false,
    brief: "麻腮疫苗可用于预防麻疹（Measles）、流行性腮腺炎（Mumps）",
    guide: "现在一般推荐“麻腮风三联疫苗”",
    count: 0,
    schedule: []
};*/
/*var vMZ = {
    name: "麻疹疫苗",
    class: 1,
    diseases: [dMZ],
    preferred: false,
    inoculated: false,
    brief: "可用于预防麻疹（Measles）",
    guide: "现在一般推荐“麻腮风三联疫苗”",
    count: 0,
    schedule: []
};*/

var vALN = {
    name: "A群流脑疫苗",
    fullName: "A群流脑多糖疫苗",
    class: 1,
    diseases: [dAQLN],
    preferred: false,
    inoculated: false,
    brief: "本疫苗接种之后，可以使机体产生体液免疫应答，用于预防A群脑膜炎球菌引起的流行性脑脊髓膜炎",
    guide: "A群流脑疫苗接种4剂，儿童自6月龄接种第1剂，第1、2剂为基础免疫，2剂次间隔不少于3个月；第3、4剂次为加强免疫，3岁时接种第3剂，与第2剂间隔时间不少于1年；6岁时接种第4剂，与第3剂接种间隔不少于3年。",
    schedules: [{
        name: undefined,
        start: 30 * 6,
        end: Number.MAX_VALUE,
        selected: true, schedule: [
            {
                start: 30 * 6,
                end: 365 * 3,
                interval: 30 * 3,
                inoculated: false
            },
            {
                start: 30 * 9,
                end: 365 * 3,
                interval: 365 * 1,
                inoculated: false
            },
            {
                start: 365 * 3,
                end: 365 * 7,
                interval: 365 * 3,
                inoculated: false
            },
            {
                start: 365 * 6,
                end: 365 * 7,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};
// 要注意2剂次间隔≥3年;第1剂次与A群流脑疫苗第2剂次间隔≥12个月。
var vACLN = {
    name: "A+C群流脑疫苗",
    fullName: "A+C群流脑多糖疫苗",
    class: 1,
    diseases: [dAQLN, dCQLN],
    preferred: false,
    inoculated: false,
    brief: "接种A群C群脑膜炎球菌多糖疫苗(简称A群C群流脑疫苗)不但可预防A群流脑，同时还可以预防C群流脑。",
    guide: "儿童在3岁和6岁时接种A+C群流脑多糖疫苗是免费的。还有一种A+C群流脑结合疫苗，是二类疫苗，收费在100元上下，主要用于2岁以下儿童，用于替代6月龄、9月龄时应接种的A群流脑疫苗，自愿选择。\n" +
    "A+C流脑疫苗是为3周岁和6周岁的儿童接种的，一共需要接种2次，在上臂外侧三角肌附着处进行皮下注射，接种剂量为100μg/0.5ml。要注意2剂次间隔≥3年;第1剂次与A群流脑疫苗第2剂次间隔≥12个月。",
    schedules: [{
        name: undefined,
        start: 365 * 3,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 365 * 3,
                end: 365 * 7,
                interval: 365 * 3,
                inoculated: false
            },
            {
                start: 365 * 6,
                end: 365 * 7,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vACJHLN = {
    name: "流脑AC结合疫苗",
    fullName: "A群C群脑膜炎球菌多糖结合疫苗",
    class: 2,
    diseases: [dAQLN, dCQLN],
    preferred: true,
    inoculated: false,
    brief: "A群C群脑膜炎球菌多糖结合疫苗采用多糖-蛋白结合技术制备的第三代细菌性疫苗，可用于3月龄以上婴幼儿，克服了多糖疫苗在2岁以下人群低应答、无应答的缺陷。",
    guide: "根据目前国内临床试验结果，推荐以下免疫程序：" +
    "3～12月龄婴儿：" +
    "从3月龄开始，每隔1月接种1剂（0.5ml），共三剂。" +
    "13～24月龄婴儿：暂按照3～12月龄免疫程序和剂量。" +
    "2-5岁儿童：接种1剂（0.5ml）。" +
    "本疫苗的持续保护时间尚不明确，加强免疫的接种时间和剂量尚未确定，有待进一步临床研究。",
    schedules: [
        {
            name: "3-24月龄 方案",
            start: 30 * 3,
            end: 365 * 2,
            selected: true,
            schedule: [
                {
                    start: 30 * 3,
                    end: 365 * 5,
                    interval: 30,
                    inoculated: false
                },
                {
                    start: 30 * 4,
                    end: 365 * 5,
                    interval: 30,
                    inoculated: false
                },
                {
                    start: 30 * 5,
                    end: 365 * 5,
                    interval: 30,
                    inoculated: false
                }
            ]
        },
        {
            name: "2-5岁 方案",
            start: 365 * 2,
            end: 365 * 5,
            selected: false,
            schedule: [
                {
                    start: 365 * 2,
                    end: 365 * 5,
                    interval: 0,
                    inoculated: false
                }
            ]
        }
    ]
};

// TODO
var v4JLN = {
    name: "流脑4价多糖疫苗",
    fullName: "A,C,Y,W135群脑膜炎球菌多糖疫苗",
    class: 2,
    diseases: [dAQLN, dCQLN, dYQLN, dW135QLN],
    preferred: false,
    inoculated: false,
    brief: "用于预防A、C、Y 及W135 群奈瑟氏脑膜炎球菌引起的流行性脑脊髓膜炎",
    guide: "接种对象" +
    "目前在国内仅推荐本品在以下范围内，2 周岁以上儿童及成人的高危人群使用：" +
    "1.旅游到或居住在高危地区者，如非洲撒哈拉地区（A、C、Y 及W135 群奈瑟氏脑膜炎球菌传染流行区）。" +
    "2.从事实验室或疫苗生产工作可从空气中接触到A、C、Y 及W135 群奈瑟氏脑膜炎球菌者。" +
    "3.根据流行病学调查，由国家卫生部和疾病控制中心预测有Y 及W135 群脑膜炎奈瑟氏菌暴发地区的高危人群。" +
    "免疫程序和剂量" +
    "（1）按标示量加入所附疫苗稀释剂复溶，摇匀立即使用。\n" +
    "（2）上臂外侧三角肌下缘附着处皮下注射。\n" +
    "（3）接种1次，每1次人用剂量为0.5ml。接种应于流行性脑脊髓膜炎流行季节前完成。\n" +
    "（4）再次接种（国外推荐）：传染地区的高危个体，特别是第一次接种小于4岁的儿童，如果持续处于高危状态，应考虑初次免疫2-3年后再次接种；尽管还未确定大龄儿童和成人是否有再次接种的必要性，但如果疫苗接种2-3年后抗体水平快速下降，则应考虑初次免疫3-5年内进行再次接种。\n" +
    "本品目前尚无免疫持久性和加强免疫方面的研究资料。",
    schedules: [{
        name: "2岁以上高危人群",
        start: 365 * 2,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 365 * 2,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vYNJDH = {
    name: "乙脑减毒活疫苗",
    class: 1,
    diseases: [dYN],
    preferred: true,
    inoculated: false,
    brief: "乙型脑炎减毒活疫苗，用于预防流行性乙型脑炎。",
    guide: "8月龄儿童首次注射0.5ml；于2岁再注射0.5ml，以后不再免疫。",
    schedules: [{
        name: undefined,
        start: 30 * 8,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 30 * 8,
                end: 0,
                interval: 0,
                inoculated: false
            },
            {
                start: 365 * 2,
                end: 0,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vYNMH = {
    name: "乙脑灭活疫苗",
    class: 1,
    diseases: [dYN],
    preferred: false,
    inoculated: false,
    brief: "乙型脑炎灭活疫苗，适应症为用于预防流行性乙型脑炎。",
    guide: "6～12月龄接种第1针和第2针，时间间隔 7～10天，第2针6个月后和 4～10岁时分别接种第3针和第4针。每一次注射剂量为0.5ml。",
    schedules: [{
        name: undefined,
        start: 30 * 8,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 30 * 6,
                end: 365 * 1,
                interval: 7,
                inoculated: false
            },
            {
                start: 30 * 6 + 7,
                end: 365 * 1,
                interval: 30 * 6,
                inoculated: false
            },
            {
                start: 365 * 1,
                end: 0,
                interval: 0,
                inoculated: false
            },
            {
                start: 365 * 4,
                end: 365 * 10,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vJGJDH = {
    name: "甲肝减毒活疫苗",
    class: 1,
    diseases: [dJG],
    preferred: true,
    inoculated: false,
    brief: "接种对象为18月龄以上的甲型肝炎易感者。",
    guide: "每1人次用剂量为1.0ml，于上臂外侧三角肌附着处皮下注射。",
    schedules: [{
        name: undefined,
        start: 30 * 18,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 30 * 18,
                end: 0,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vJGMH = {
    name: "甲肝灭活疫苗",
    class: 1,
    diseases: [dJG],
    preferred: false,
    inoculated: false,
    brief: "甲型肝炎灭活疫苗，用于预防甲肝病毒感染。",
    guide: "免疫程序：上臂三角肌肌内注射，初次免疫用一支疫苗，间隔6个月加强免疫一支疫苗。\n" +
    "剂量：16岁以上用成人剂量；1～15岁用儿童剂量。",
    schedules: [{
        name: undefined,
        start: 365,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 365 * 1,
                end: 0,
                interval: 30 * 6,
                inoculated: false
            }, {
                start: 365 * 1.5,
                end: 0,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vSDYM = {
    name: "水痘疫苗",
    class: 2,
    diseases: [dSD],
    preferred: true,
    inoculated: false,
    brief: "水痘疫苗是经水痘病毒传代毒株制备而成，是预防水痘感染的唯一手段。接种水痘疫苗不仅能预防水痘，还能预防因水痘带状疱疹而引起的并发症。",
    guide: "推荐2岁儿童开始接种。1～12岁的儿童接种一剂量(0.5ml)；13岁及以上的儿童、青少年和成人接种2剂量，间隔6-10周。儿童及成人均于上臂皮下注射，绝不能静脉注射。疫苗应通过提供的稀释液复溶，并应完全溶解。应在消毒剂完全挥发后再行接种。对于健康人，水痘减毒疫苗可与其他减毒活疫苗或灭活疫苗同时接种；对于免疫缺陷患者及其他高危人群，水痘减毒疫苗可与其他灭活疫苗同时接种。但均需接种于不同部位，且不能在注射器中混合。如水痘减毒疫苗不能和麻疹疫苗同时接种，则接种间隔至少1个月。" +
    "美国疾病预防控制中心推荐对所有人群均采用2剂量接种，其数据显示2剂量接种的有效率可以达到98%。对于儿童推荐方法为：出生后12到15个月进行第一次接种，4到6岁时进行第二次接种。国内部分医疗机构也采用该方法对儿童进行2剂量接种。",
    schedules: [{
        name: undefined,
        start: 365,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 365,
                end: 0,
                interval: 7 * 6,
                inoculated: false
            }, {
                start: 365 * 4,
                end: 0,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vHib = {
    name: "Hib疫苗",
    fullName: "b型流感嗜血杆菌结合疫苗",
    class: 2,
    diseases: [dHib],
    preferred: false,
    inoculated: false,
    brief: "b型流感嗜血杆菌结合疫苗，适应症为预防由b型流感嗜血杆菌引起的侵袭性疾病。",
    guide: "2-14月龄的婴儿最好在2月龄时接种第一针疫苗（0.5mL），间隔两个月后（或此后尽早）接种第二针疫苗（0.5mL）。" +
    "若在12月龄之前已完成两针基础免疫接种，还须加强免疫接种一针。" +
    "15月或超过15月龄的幼儿只须接种一针本品。" +
    "在12月龄前已完成两针基础免疫接种的婴幼儿，应在12-15月龄期间再加强免疫接种一针本品（0.5mL），" +
    "加强免疫与基础免疫第二针之间的间隔不得少于2个月。",
    schedules: [
        {
            name: "2-14月龄 方案",
            start: 30 * 2,
            end: 30 * 15,
            selected: true,
            schedule: [
                {
                    start: 30 * 2,
                    end: 30 * 14,
                    interval: 30 * 2,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 4,
                    end: 30 * 14,
                    interval: 30 * 2,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 12,
                    end: Number.MAX_VALUE,
                    interval: 30 * 2,
                    inoculated: false,
                    alternative: false
                }
            ]
        },
        {
            name: "15+月龄 方案",
            start: 30 * 15,
            end: Number.MAX_VALUE,
            selected: false,
            schedule: [
                {
                    start: 30 * 15,
                    end: Number.MAX_VALUE,
                    interval: 30 * 2,
                    inoculated: false,
                    alternative: true
                }
            ]
        }]
};

var vEV71 = {
    name: "手足口病疫苗",
    fullName: "肠道病毒71型疫苗",
    class: 2,
    diseases: [dEV71],
    preferred: true,
    inoculated: false,
    brief: "目前上市的手足口病疫苗接种对象是6个月-3岁的孩子。" +
    "引起手足口病的肠道病毒，有柯萨奇病毒A组的16、4、5、9、10型，B组的2、5型，肠道病毒71型等多达20多种。" +
    "肠道病毒71型会引起疱疹性咽峡炎、支气管炎、肺炎、胃肠炎、无菌性脑膜炎、急性弛缓性麻痹等疾病。" +
    "目前生产的疫苗只能预防肠道病毒71型感染引起的手足口病，手足口病疫苗实际上应该被称为肠道病毒71型疫苗。",
    guide: "基础免疫2剂次，间隔1个月。是否需要加强免疫，暂未确定。",
    schedules: [{
        name: undefined,
        start: 30 * 6,
        end: 365 * 4,
        selected: true,
        schedule: [
            {
                start: 30 * 6,
                end: 365 * 3,
                interval: 30,
                inoculated: false
            }, {
                start: 30 * 7,
                end: 365 * 3,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

var vFYYM = {
    name: "13价肺炎球菌多糖结合疫苗",
    class: 2,
    diseases: [d13FY],
    preferred: false,
    inoculated: false,
    brief: "本品接种用于婴幼儿的主动免疫，以预防由肺炎链球菌血清型1、3、4、5、6A、6B、7F、9V、14、18C、19A、19F和23F引起的侵袭性疾病（包括菌血症性肺炎、脑膜炎、败血症和菌血症等）。肺炎链球菌是引起侵袭性疾病以及肺炎和上呼吸道感染的最常见病因。\n" +
    "本品只能对该疫苗所含肺炎球菌血清型具有预防保护作用，不能预防本品意外的血清型别和其它微生物导致的侵袭性疾病、肺炎或中耳炎。",
    guide: "本品使用前应充分摇匀，仅供肌肉注射。首选部位婴儿为大腿前外侧（股外侧肌），幼儿为上臂三角肌。肌肉注射计量为0.5ml，注意避免神经和血管中或其附近部位注射本品。\n" +
    "推荐常规免疫接种程序：基础免疫在2、4、6月龄各接种一剂，加强免疫在12-15月龄接种一剂。基础免疫首剂最早可以在6周龄接种，之后各剂间隔4-8周。\n" +
    "目前，国内尚无本品应用于6月龄以上婴幼儿相应免疫程序的临床试验数据。",
    schedules: [{
        name: "6周龄-6月龄 方案",
        start: 7 * 6,
        end: 30 * 7,
        selected: true,
        schedule: [
            {
                start: 7 * 6,
                end: 30 * 12,
                interval: 7 * 4,
                inoculated: false
            },
            {
                start: 30 * 4,
                end: 30 * 12,
                interval: 7 * 4,
                inoculated: false
            },
            {
                start: 30 * 6,
                end: 30 * 12,
                interval: 7 * 4,
                inoculated: false
            },
            {
                start: 30 * 12,
                end: 30 * 15,
                interval: 30,
                inoculated: false
            }
        ]
    }]
};

var vGCFYYM = {
    name: "国产13价肺炎球菌多糖结合疫苗",
    class: 2,
    diseases: [d13FY],
    inoculated: false,
    preferred: true,
    brief: "该疫苗主要适用于6周龄至5岁（6周岁生日前）婴幼儿和儿童接种，可用于预防由本疫苗包含的13种血清型（1型、3型、4型、5型、6A型、6B型、7F型、9V型、14型、18C型、19A型、19F型和23F型）肺炎球菌引起的感染性疾病，对中国5岁及以下儿童肺炎球菌相关疾病中侵袭性菌株的血清型覆盖接近90%。",
    guide: "国产13价肺炎疫苗6周龄-5岁（6周岁生日前）全年龄段儿童均可接种，预防由13种血清型肺炎球菌引起的感染性疾病（包括肺炎、脑膜炎、败血症和菌血症等），" +
    "这将让我国儿童接种时间区间段大幅延长，让更多的中国儿童可以远离肺炎球菌疾病的威胁。" +
    "建议在6周龄-7月龄完成三剂次的接种。" +
    "如果超过这个年龄段，仍可以在7月龄-11月龄完成两剂次的接种，并在11月龄-15月龄完成第三剂次的接种。" +
    "如果仍然超过这个年龄范围，1-2岁的孩子只需完成两剂次的接种即可；" +
    "2岁-5岁（6周岁以下）的孩子接种程序则只有1针。",
    schedules: [
        {
            name: "6周龄-7月龄 方案",
            start: 7 * 6,
            end: 30 * 8,
            selected: true,
            schedule: [
                {
                    start: 7 * 6,
                    end: 30 * 12,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 4,
                    end: 30 * 12,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 6,
                    end: 30 * 24,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                }
            ]
        },
        {
            name: "7月龄-11月龄 方案",
            start: 30 * 7,
            end: 365,
            selected: false,
            schedule: [
                {
                    start: 30 * 7,
                    end: 30 * 11,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 8,
                    end: 30 * 12,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 30 * 11,
                    end: 365 * 6,
                    interval: 30,
                    inoculated: false,
                    alternative: false
                }
            ]
        },
        {
            name: "1-2岁 方案",
            start: 365,
            end: 365 * 3,
            selected: false,
            schedule: [
                {
                    start: 365,
                    end: 365 * 3,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                },
                {
                    start: 365 + 30 * 2,
                    end: 365 * 3,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                }
            ]
        },
        {
            name: "2-5岁 方案",
            start: 365 * 2,
            end: 365 * 6,
            selected: false,
            schedule: [
                {
                    start: 365 * 2,
                    end: 365 * 6,
                    interval: 7 * 4,
                    inoculated: false,
                    alternative: true
                }
            ]
        }
    ]
};

// TODO
var v23JFYYM = {
    name: "23价肺炎球菌多糖疫苗",
    diseases: [d23FY],
    class: 2,
    preferred: false,
    inoculated: false,
    brief: "23价肺炎球菌多糖疫苗，本品适用于免疫预防该疫苗所含荚膜菌型的肺炎球菌疾病。",
    guide: "用于2岁以上的以下人群的接种： 1. 选择性接种 (1) 50岁及超过50岁以上者。 (2) 患有可增加肺炎球菌感染性疾病危险的慢性疾病者，如心血管疾病、肺部疾患、肝及肾脏功能受损者。 (3) 免疫缺陷病人，如脾切除者或是由镰状细胞性疾病及其它原因引起的脾功能障碍者。 (4) 患有其它慢性疾病而可能感染肺炎球菌的高危人群(如酒精滥用)及并存如糖尿病、慢性脑脊髓液渗漏、免疫抑制等因此可引起更严重的肺炎球菌病患者，或是反复发作的上呼吸道疾病，包括中耳炎、副鼻窦炎等。 (5) 何杰金氏病患者。 2. 群体接种 (1) 群体接触密切者，如寄宿学校、养老院及其它相似场所。 (2) 具有发生流行性感冒并发症高度危险者，特别是肺炎。 (3) 当疫苗中含有的某型肺炎球菌在社区人群中发生爆发流行时，社区人群为高危人群。 3. 再接种 (1) 一般无需对成年人常规再接种。 (2) 脾切除者。 (3) 10岁以下脾切除或患有镰状细胞性贫血症的儿童。 23价肺炎球菌多糖疫苗由23种血清型肺炎球菌多糖抗原组成，能诱导机体产生体液免疫。对由23种最常见血清型引起的肺炎球菌感染性疾病产生保护，其免疫覆盖率占引起肺炎球菌感染血清型的90%。用于预防在疫苗中含有的肺炎双球菌型引起的肺炎、脑炎、中耳炎和菌血症等疾病。本品不对疫苗中所含荚膜型以外的肺炎双球菌型产生免疫作用。" +
    "用法用量：上臂外侧三角肌皮下或肌内注射，每次注射0.5ml。 1. 何杰金氏病患者如需接种疫苗可在治疗开始前10天给予。如果进行放疗或化疗至少应在开始前14天给予，以产生最有效的抗体免疫应答。治疗开始前不足10天及治疗期间不主张免疫接种。 2. 免疫缺陷病人，应于术前两周接种。 3. 脾切除者，每5年加强免疫一次，每次注射剂量0.5ml。 4. 对10岁以下脾切除或患有镰状细胞性贫血的儿童，应每隔3～5年加强免疫一次，每次注射0.5ml。",
    schedules: [{
        name: "2岁以上易感人群",
        start: 365 * 2,
        end: Number.MAX_VALUE,
        selected: true,
        schedule: [
            {
                start: 365 * 2,
                end: Number.MAX_VALUE,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

// TODO
// HPV 疫苗

var vWJLZBD = {
    name: "五价轮状病毒疫苗",
    diseases: [dG1RV, dG2RV],
    class: 2,
    preferred: true,
    inoculated: false,
    brief: "五价轮状病疫苗是一种包含5种人牛轮状病毒重配株（G1、G2、G3、G4、P1A［8］）的口服减毒活疫苗。采用三剂口服免疫程序，对轮状病毒五种血清型重度胃肠炎保护效力高达95.5%，保护时间长达7年。",
    guide: "6-12周龄口服第一剂，其后剂次各间隔4-10周，并在32周龄内完成全部三剂次口服接种。",
    schedules: [{
        name: "6周龄-8月龄 方案",
        start: 7 * 6,
        end: 30 * 33,
        selected: true,
        schedule: [
            {
                start: 7 * 6,
                end: 30 * 5,
                interval: 7 * 4,
                inoculated: false
            },
            {
                start: 7 * 10,
                end: 30 * 6,
                interval: 30,
                inoculated: false
            },
            {
                start: 7 * 14,
                end: 30 * 7,
                interval: 30,
                inoculated: false
            }
        ]
    }]
};

var vDJLZBD = {
    name: "单价轮状病毒疫苗",
    diseases: [dG1RV],
    class: 2,
    preferred: false,
    inoculated: false,
    brief: "接种轮状病毒疫苗是预防轮状病毒肠炎最有效、最经济的医学手段。目前我国使用的轮状病毒减毒活疫苗，其保护率能够达到73.72%，对重症腹泻的保护率达90%以上，保护时间为1年。",
    guide: "轮状病毒疫苗是减毒重组的活疫苗，是一种口服制剂，主要用于2个月至3岁以下婴幼儿，用量为每人一次口服3mL，用手开启瓶盖，用吸管吸取本疫苗，直接喂于婴幼儿，切勿用热水送服。每年应服一次。",
    schedules: [{
        name: "2月龄-3岁 方案",
        start: 30 * 2,
        end: 365 * 3,
        selected: true,
        schedule: [
            {
                start: 30 * 2,
                end: 365 * 3,
                interval: 365,
                inoculated: false
            },
            {
                start: 365 + 30 * 2,
                end: 365 * 3,
                interval: 365,
                inoculated: false
            },
            {
                start: 365 * 2 + 30 * 2,
                end: 365 * 3,
                interval: 0,
                inoculated: false
            }
        ]
    }]
};

// TODO AC流脑Hib
var vACHib = {};

var vaccines = [
    vYGYM, vKJM, vJH, vBBP, /*vBP,*/ vBBPHib, vJHBBPHib,
    /*vMF,*/ vMSF, /* vMS, vMZ,*/ vALN, vACLN, vACJHLN, v4JLN, vYNJDH, vYNMH, vJGJDH, vJGMH,
    vSDYM, vFYYM, vGCFYYM, v23JFYYM, vWJLZBD, vDJLZBD, vHib, vEV71
];


Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

var birthday = new Date();

(function () {

    function sortVaccines(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j].schedules[0].start > arr[j + 1].schedules[0].start) {        // 相邻元素两两对比
                    var temp = arr[j + 1];        // 元素交换
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    function sortVaccinesByScheduleTime(vacs) {
        //生成疫苗计划时间表
        var arr = [];
        for (var k = 0; k < vacs.length; k++) {
            var vac = vacs[k];
            for (var j = 0; j < vac.schedules.length; j++) {
                if (vac.schedules[j].selected) {
                    for (var s = 0; s < vac.schedules[j].schedule.length; s++) {
                        if (vac.preferred) {
                            var item = {
                                time: vac.schedules[j].schedule[s].start,
                                name: vac.name,
                                fullName: vac.fullName,
                                class: vac.class,
                                num: s,
                                alternative: vac.schedules[j].schedule[s].alternative
                            };
                            arr.push(item);
                        }
                    }
                    break;
                }
            }
        }
        // 按时间从早到晚排序
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j].time > arr[j + 1].time) {        // 相邻元素两两对比
                    var temp = arr[j + 1];        // 元素交换
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    //模拟由于突发状况导致某个疫苗接种时间推迟，按实际情况调整时间
    function adjustTime(vac, num, day) {
        // 遍历该疫苗所有计划时间作相应调整
        for (var i = 0; i < vac.schedule.length; i++) {
            if (i === num) {
                vac.schedule[i].start = vac.schedule[i].start + day;
            } else if (i > num) {
                if (i > 0) {
                    if (vac.schedule[i].start > vac.schedule[i - 1].start + vac.schedule[i - 1].interval) {
                        // 本次接种时间 晚于 上次接种时间+间隔时间，则什么也不做
                    } else {
                        vac.schedule[i].start = vac.schedule[i].start + day;
                        if (vac.schedule[i].start < vac.schedule[i - 1].start + vac.schedule[i - 1].interval) {
                            vac.schedule[i].start = vac.schedule[i - 1].start + vac.schedule[i - 1].interval;
                        }
                    }
                }
            }
        }
        return vac;
    }

    function showVaccines(vacs) {
        $("table#chooseVac > tbody").empty();
        for (var i = 0; i < vacs.length; i++) {
            var vac = vacs[i];
            if (vac.count === 0) {
                continue;
            }

            var tableRow = '<tr> <th scope="row"> <div class="form-check"> ' +
                '<input class="form-check-input position-static" type="checkbox" value="preferred" ' + (vac.preferred ? 'checked="checked"' : '') + '/>' +
                '</div> </th> <td> <span class="text-primary">' +
                vac.name
                + '</span><br/><small class="font-weight-light">' +
                (vac.brief === undefined ? "" : vac.brief) +
                '</small> </td> <td>' +
                '第' + vac.class + '类'
                + '</td> <td>';

            tableRow += '<ol class="list-group">';

            for (var m = 0; m < vac.schedules.length; m++) {
                var selectedClass = vac.schedules[m].selected ? "list-group-item list-group-item-primary" : "list-group-item";
                tableRow += '<li class="' + selectedClass + '" id="' + m + '"><span class="text-primary">'
                    + (vac.schedules[m].name == undefined ? "" : vac.schedules[m].name)
                    + '</span><br/>';
                for (var n = 0; n < vac.schedules[m].schedule.length; n++) {
                    var date = birthday.addDays(vac.schedules[m].schedule[n].start);

                    tableRow +=
                        calAge(date, birthday) + ' ' +
                        jQuery.format.date(date, "yyyy/MM/dd") +
                        ' 第' + (n + 1) + '剂' + '<br/><br/>';
                }
                tableRow += '</li>';
            }
            $("table#chooseVac > tbody:last-child").append(tableRow);

            $("#chooseVac > tbody > tr > td > span.text-primary").click(function () {
                var vacName = $(this).html();
                var vac = findVacByName(vacName);
                $('#modal > div > div > div.modal-header > h5.modal-title').html(vacName);
                $('#modal > div > div > div.modal-body').html(vac.brief + '<br/>' + vac.guide);

                $('#modal').modal('show');
            });

            $("#chooseVac > tbody > tr > td > ol > li").click(function () {
                var vacName = $(this).parent().parent().prev().prev().children('span').html();
                var vac = findVacByName(vacName);
                for (var i = 0; i < vac.schedules.length; i++) {
                    vac.schedules[i].selected = false;
                }
                var selectedIndex = $(this).attr("id");
                vac.schedules[selectedIndex].selected = true;
                generateVacTab();
                showTimeTable();
            });
        }
    }

    function generateVacTab() {
        var sortedVacs = sortVaccines(vaccines);
        showVaccines(sortedVacs);
        addCheckEvent();
        showDiseases();
    }

    function findVacByName(vacName) {
        for (var i = 0; i < vaccines.length; i++) {
            if (vacName === vaccines[i].name) {
                return vaccines[i];
            }
        }
        return null;
    }

    generateVacTab();
    $('input#birthday[type="date"]').change(function () {
        birthday = new Date(this.value);
        generateVacTab();
        showTimeTable();
    });

    function addCheckEvent() {
        $('#chooseVac > tbody > tr > th > div > input').change(function () {
            var vacName = $(this).parent().parent().next().children().html();
            var vac = findVacByName(vacName);
            if (this.checked) {
                //编辑疫苗列表，改变preferred状态
                // 1 遍历疾病列表，检查疾病是否在于其他已选择的疫苗中
                // 2 如果存在，则其他包含相同疾病的疫苗的preferred状态为false
                for (var i = 0; i < vac.diseases.length; i++) {
                    for (var j = 0; j < vaccines.length; j++) {
                        for (var k = 0; k < vaccines[j].diseases.length; k++) {
                            if (vac.diseases[i] === vaccines[j].diseases[k]
                                && vac.name !== vaccines[j].name) {
                                if (vac.name === "A+C群流脑疫苗"
                                    || vac.name === "A群流脑疫苗"
                                    || vac.name === "流脑AC结合疫苗") {
                                    // A+C群3岁以后才开始接种，之前要接种A群流脑疫苗
                                } else {
                                    vaccines[j].preferred = false;
                                }
                            }
                            vac.preferred = true;
                        }
                    }
                }
            } else {
                vac.preferred = false;
            }
            // 重新生成表格
            generateVacTab();
            showTimeTable();
        });
    }

    addCheckEvent();

    function isInclude(disease) {
        for (var i = 0; i < vaccines.length; i++) {
            for (var j = 0; j < vaccines[i].diseases.length; j++) {
                if (vaccines[i].preferred && disease === vaccines[i].diseases[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    function showDiseases() {
        $("#diseases").empty();
        $(diseases).each(function (n, dis) {
            if (isInclude(dis)) {
                $("#diseases").append('<li class="list-group-item list-group-item-primary"><span class="dis-name">' +
                    this.name + (dis.schoolRequired ? '</span> <span class="badge badge-pill badge-primary">入学检查</span>' : '') + '</li>');
            } else {
                $("#diseases").append('<li class="list-group-item list-group-item-danger"><span>' +
                    this.name + (dis.schoolRequired ? '</span> <span class="badge badge-pill badge-primary">入学检查</span>' : '') + '</li>');
            }
        })

        $("#diseases > li").click(function () {
            var disName = $(this).children('span').html();

            var str = "可用疫苗:<br/>";
            for (var i = 0; i < vaccines.length; i++) {
                for (var j = 0; j < vaccines[i].diseases.length; j++) {
                    if (vaccines[i].diseases[j].name === disName) {
                        str += vaccines[i].name + '<br/>';
                    }
                }
            }


            $('#modal > div > div > div.modal-header > h5.modal-title').html(disName);
            $('#modal > div > div > div.modal-body').html(str);

            $('#modal').modal('show');
        });
    }

    showDiseases();

    function diff_months(dt2, dt1) {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 30);
        return Math.abs(Math.round(diff));

    }

    function calAge(date, birthday) {
        var month = diff_months(date, birthday);
        if (month < 12) {
            return month + '月龄';
        } else {
            var y = Math.floor((month + 1) / 12);
            // var m = month - y * 12;
            return y + '周岁';
        }
    }

    function showTimeTable() {
        $("table#timeTable > tbody").empty();
        var timeTab = sortVaccinesByScheduleTime(vaccines);

        var tableRow = "";
        for (var i = 0; i < timeTab.length; i++) {
            var item = timeTab[i];
            var date = birthday.addDays(item.time);
            var num = item.num + 1;

            if (date > new Date().addDays(-1)) {
                tableRow += '<tr class="table-primary">'
            } else {
                tableRow += '<tr>'
            }

            var age = calAge(date, birthday);

            tableRow += '<th scope="row" class="text-center">' + age + '</th>' +
                '<td>' + jQuery.format.date(date, "yyyy/MM/dd") +
                '</td>'
                + '</th> <td><span class="text-primary">' + item.name
                + '</span></td> <td>' + (item.class === 1 ? "第一类" : "第二类")
                + '</td> <td>第' + num
                + '剂</td></tr>';
        }

        $("table#timeTable > tbody:last-child").append(tableRow);

        $('#count').html(timeTab.length);

        $("#timeTable > tbody > tr > td > span").click(function () {
            var vacName = $(this).html();
            var vac = findVacByName(vacName);
            $('#modal > div > div > div.modal-header > h5.modal-title').html(vacName);
            $('#modal > div > div > div.modal-body').html(vac.brief + '<br/>' + vac.guide);

            $('#modal').modal('show');
        });
    }

    showTimeTable();
}());
