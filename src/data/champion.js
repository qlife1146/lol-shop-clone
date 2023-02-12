const rp = [975, 880, 790, 585, 260];
const be = [6300, 4800, 3150, 1350, 450];
//			0		1	2		3	4
const champion = [
    {
        id: 1,
        name: "누누와 윌럼프",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "소년과 설인",
        skin: [
            { id: 1, name: "폭신폭신 누누와 윌럼프", rpPrice: 750, discountRate: 0 },
            { id: 2, name: "종이로 접은 누누와 윌럼프", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "누누와 윌럼프 봇", rpPrice: 1820, discountRate: 0 },
        ],
    },
    {
        id: 2,
        name: "라이즈",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "룬 마법사",
        skin: [
            { id: 1, name: "엉클샘 라이즈", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "암흑 수정 라이즈", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "아르카나 라이즈", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 3,
        name: "마스터 이",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "우주 검사",
        skin: [
            { id: 1, name: "아이오니아 마스터 이", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "선택받은 마스터 이", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "암살자 마스터 이", rpPrice: 390, discountRate: 0 },
        ],
    },
    {
        id: 4,
        name: "모르가나",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "타락한 자",
        skin: [
            { id: 1, name: "칼날천사 모르가나", rpPrice: 750, discountRate: 0 },
            { id: 2, name: "검은 가시 모르가나", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "유령 신부 모르가나", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 5,
        name: "사이온",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "언데드 학살병기",
        skin: [
            { id: 1, name: "야만전사 사이온", rpPrice: 750, discountRate: 0 },
            { id: 2, name: "나무꾼 사이온", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "전쟁광 사이온", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 6,
        name: "소라카",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "별의 아이",
        skin: [
            { id: 1, name: "나무 요정 소라카", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "신성한 소라카", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "천상의 빛 소라카", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 7,
        name: "시비르",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "전장의 여제",
        skin: [
            { id: 1, name: "전장의 공주 시비르", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "약탈자 시비르", rpPrice: 750, discountRate: 0 },
            { id: 3, name: "심판자 시비르", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 8,
        name: "알리스타",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "미노타우로스",
        skin: [
            { id: 1, name: "황금 알리스타", rpPrice: 390, discountRate: 0 },
            { id: 2, name: "지옥의 알리스타", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "습격자 알리스타", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 9,
        name: "애니",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "어둠의 아이",
        skin: [
            { id: 1, name: "얼음불꽃 애니", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "판다 애니", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "슈퍼 갤럭시 애니", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 10,
        name: "애쉬",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "서리 궁수",
        skin: [
            { id: 1, name: "로빈훗 애쉬", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "자수정 애쉬", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "습격자 애쉬", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 11,
        name: "워윅",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "자운의 고삐 풀린 분노",
        skin: [
            { id: 1, name: "극지 사냥꾼 워윅", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "불송곳니 워윅", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "하이에나 워윅", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 12,
        name: "잭스",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "무기의 달인",
        skin: [
            { id: 1, name: "잭시무스", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "소림사 잭스", rpPrice: 750, discountRate: 0 },
            { id: 3, name: "응징자 잭스", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 13,
        name: "케일",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "정의로운 자",
        skin: [
            { id: 1, name: "청록의 심판자 케일", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "전장을 누빕는 케일", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "에테르 날개 케일", rpPrice: 1820, discountRate: 0 },
        ],
    },
    {
        id: 14,
        name: "트리스타나",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "요들 사수",
        skin: [
            { id: 1, name: "해적 트리스타나", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "로켓걸 트리스타나", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "용 조련사 트리스타나", rpPrice: 1820, discountRate: 0 },
        ],
    },
    {
        id: 15,
        name: "트위스티드 페이트",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "카드의 달인",
        skin: [
            { id: 1, name: "하트의 잭 트위스티드 페이트", rpPrice:520, discountRate: 0 },
            { id: 2, name: "탱고 트위스티드 페이트", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "하이 눈 트위스티드 페이트", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 16,
        name: "티모",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "날쌘 정찰병",
        skin: [
            { id: 1, name: "우주비행사 티모", rpPrice: 1350, discountRate: 0 },
            { id: 2, name: "복실복실 티모", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "슈퍼 티모", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 17,
        name: "피들스틱",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "오래된 공포",
        skin: [
            { id: 1, name: "노상강도 피들스틱", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "유령 피들스틱", rpPrice:520, discountRate: 0 },
            { id: 3, name: "깜짝 파티 피들스틱", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 18,
        name: "신지드",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "미친 화학자",
        skin: [
            { id: 1, name: "서퍼 신지드", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "강화형 신지드", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "암흑의 무법자 신지드", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 19,
        name: "질리언",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "시간의 수호자",
        skin: [
            { id: 1, name: "슈리마 사막의 질리언", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "신바람난 질리언", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "핏빛달 질리언", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 20,
        name: "이블린",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "고통스런 포옹",
        skin: [
            { id: 1, name: "그림자 이블린", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "탱고 이블린", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "금고털이 이블린", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 21,
        name: "트린다미어",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "야만전사 왕",
        skin: [
            { id: 1, name: "국왕 트린다미어", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "마검 트린다미어", rpPrice: 1820, discountRate: 0 },
            { id: 3, name: "술탄 트린다미어", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 22,
        name: "트위치",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "역병 쥐",
    },
    {
        id: 23,
        name: "카서스",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "죽음을 노래하는 자",
    },
    {
        id: 24,
        name: "아무무",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "슬픈 미라",
    },
    {
        id: 25,
        name: "초가스",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "공허의 공포",
    },
    {
        id: 26,
        name: "람머스",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "중무장 아르마딜로",
    },
    {
        id: 27,
        name: "애니비아",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "얼음 불사조",
    },
    {
        id: 28,
        name: "베이가",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "악의 작은 지배자",
    },
    {
        id: 29,
        name: "카사딘",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "공허의 방랑자",
    },
    {
        id: 30,
        name: "갱플랭크",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "바다의 무법자",
    },
    {
        id: 31,
        name: "타릭",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "발로란의 방패",
    },
    {
        id: 32,
        name: "말파이트",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "거석의 파편",
    },
    {
        id: 33,
        name: "문도 박사",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "자운의 광인",
    },
    {
        id: 34,
        name: "블리츠크랭크",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "거대 증기 골렘",
    },
    {
        id: 35,
        name: "잔나",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "폭풍의 분노",
    },
    {
        id: 36,
        name: "카타리나",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "사악한 칼날",
    },
    {
        id: 37,
        name: "코르키",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "대담한 폭격수",
    },
    {
        id: 38,
        name: "나서스",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "사막의 관리자",
    },
    {
        id: 39,
        name: "샤코",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "악마 어릿광대",
    },
    {
        id: 40,
        name: "하이머딩거",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "위대한 발명가",
    },
    {
        id: 41,
        name: "우디르",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "정령 주술사",
    },
    {
        id: 42,
        name: "니달리",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "야성의 사냥꾼",
    },
    {
        id: 43,
        name: "뽀삐",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "망치의 수호자",
    },
    {
        id: 44,
        name: "그라가스",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "술취한 난동꾼",
    },
    {
        id: 45,
        name: "판테온",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "불굴의 창",
    },
    {
        id: 46,
        name: "모데카이저",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "강철의 망령",
    },
    {
        id: 47,
        name: "이즈리얼",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "무모한 탐험가",
        skin: [
            { id: 1, name: "서릿빛 이즈리얼", rpPrice: 520, discountRate: 30 },
            { id: 2, name: "펄스 건 이즈리얼", rpPrice: 3250, discountRate: 0 },
            { id: 3, name: "연미복 이즈리얼", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 48,
        name: "쉔",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "황혼의 눈",
    },
    {
        id: 49,
        name: "케넨",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "폭풍의 심장",
    },
    {
        id: 50,
        name: "가렌",
        rpPrice: rp[4],
        bePrice: be[4],
        nickName: "데마시아의 힘",
    },
    {
        id: 51,
        name: "아칼리",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "섬기는 이 없는 암살자",
    },
    {
        id: 52,
        name: "말자하",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "공허의 예언자",
    },
    {
        id: 53,
        name: "올라프",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "광전사",
    },
    {
        id: 54,
        name: "코그모",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "심연의 아귀",
        skin: [
            { id: 1, name: "왕나비 코그모", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "사자춤 코그모", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "코그멍", rpPrice: 975, discountRate: 0 },
        ],
    },
    {
        id: 55,
        name: "신 짜오",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "데마시아의 호위무사",
    },
    {
        id: 56,
        name: "블라디미르",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "진홍빛 사신",
    },
    {
        id: 57,
        name: "갈리오",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "위대한 석상",
    },
    {
        id: 58,
        name: "우르곳",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "살상 병기",
    },
    {
        id: 59,
        name: "미스 포츈",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "현상금 사냥꾼",
    },
    {
        id: 60,
        name: "소나",
        rpPrice: rp[3],
        bePrice: be[3],
        nickName: "현의 명인",
    },
    {
        id: 61,
        name: "스웨인",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "녹서스 대장군",
    },
    {
        id: 62,
        name: "럭스",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "광명의 소녀",
        skin: [
            { id: 1, name: "마법사 럭스", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "마법도둑 럭스", rpPrice: 750, discountRate: 0 },
            { id: 3, name: "원소술사 럭스", rpPrice: 3250, discountRate: 0 },
        ],
    },
    {
        id: 63,
        name: "르블랑",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "환술사",
        skin: [
            { id: 1, name: "사악한 르블랑", rpPrice: 750, discountRate: 60 },
            { id: 2, name: "마술사 르블랑", rpPrice: 520, discountRate: 0 },
            { id: 3, name: "나무정령 르블랑", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 64,
        name: "이렐리아",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "칼날 무희",
    },
    {
        id: 65,
        name: "트런들",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "트롤 왕",
    },
    {
        id: 66,
        name: "카시오페아",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "독사의 포옹",
    },
    {
        id: 67,
        name: "케이틀린",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "필트오버의 보안관",
    },
    {
        id: 68,
        name: "레넥톤",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "사막의 도살자",
    },
    {
        id: 69,
        name: "카르마",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "깨우친 자",
    },
    {
        id: 70,
        name: "마오카이",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "뒤틀린 나무 정령",
    },
    {
        id: 71,
        name: "자르반 4세",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "데마시아의 귀감",
    },
    {
        id: 72,
        name: "녹턴",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "영원한 악몽",
    },
    {
        id: 73,
        name: "리 신",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "눈 먼 수도승",
    },
    {
        id: 74,
        name: "브랜드",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "타오르는 복수",
    },
    {
        id: 75,
        name: "럼블",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "기계 악동",
    },
    {
        id: 76,
        name: "베인",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "어둠 사냥꾼",
    },
    {
        id: 77,
        name: "오리아나",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "시계태엽 소녀",
    },
    {
        id: 78,
        name: "요릭",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "영혼의 길잡이",
    },
    {
        id: 79,
        name: "레오나",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "여명의 빛",
    },
    {
        id: 80,
        name: "오공",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "원숭이 왕",
    },
    {
        id: 81,
        name: "스카너",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "수정 선봉장",
    },
    {
        id: 82,
        name: "탈론",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "검의 그림자",
    },
    {
        id: 83,
        name: "리븐",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "추방자",
    },
    {
        id: 84,
        name: "제라스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "초월한 마법사",
        skin: [
            { id: 1, name: "전투 기계 제라스", rpPrice: 520, discountRate: 0 },
            { id: 2, name: "룬 제라스", rpPrice: 750, discountRate: 0 },
            { id: 3, name: "용광로 제라스", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 85,
        name: "그레이브즈",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "무법자",
    },
    {
        id: 86,
        name: "쉬바나",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "하프 드래곤",
    },
    {
        id: 87,
        name: "피즈",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "대양의 말썽꾸러기",
    },
    {
        id: 88,
        name: "볼리베어",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "무자비한 폭풍",
    },
    {
        id: 89,
        name: "아리",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "구미호",
    },
    {
        id: 90,
        name: "빅토르",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "기계화의 전령관",
    },
    {
        id: 91,
        name: "세주아니",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "혹한의 분노",
        skin: [
            { id: 1, name: "암흑 기수 세주아니", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "곰 기병 세주아니", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "괴물 사냥꾼 세주아니", rpPrice: 750, discountRate: 0 },
        ],
    },
    {
        id: 92,
        name: "직스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "마법공학 폭파병",
    },
    {
        id: 93,
        name: "노틸러스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "심해의 타이탄",
        skin: [
            { id: 1, name: "지하 세계 노틸러스", rpPrice: 975, discountRate: 0 },
            { id: 2, name: "아틀란티스 노틸러스", rpPrice: 975, discountRate: 0 },
            { id: 3, name: "우주비행사 노틸러스", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 94,
        name: "피오라",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "결투의 대가",
    },
    {
        id: 95,
        name: "룰루",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "요정 마법사",
    },
    {
        id: 96,
        name: "헤카림",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "전쟁의 전조",
    },
    {
        id: 97,
        name: "바루스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "응징의 화살",
    },
    {
        id: 98,
        name: "다리우스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "녹서스의 실력자",
    },
    {
        id: 99,
        name: "드레이븐",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "화려한 처형자",
    },
    {
        id: 100,
        name: "제이스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "미래의 수호자",
    },
    {
        id: 101,
        name: "자이라",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "가시 덩굴의 복수",
    },
    {
        id: 102,
        name: "다이애나",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "차가운 달의 분노",
    },
    {
        id: 103,
        name: "렝가",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "추적하는 사과",
    },
    {
        id: 104,
        name: "신드라",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "어둠의 여제",
    },
    {
        id: 105,
        name: "카직스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "공허의 약탈자",
    },
    {
        id: 106,
        name: "엘리스",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "거미 여왕",
    },
    {
        id: 107,
        name: "제드",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "그림자의 주인",
    },
    {
        id: 108,
        name: "나미",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "파도 소환사",
    },
    {
        id: 109,
        name: "바이",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "필트오버의 집행자",
    },
    {
        id: 110,
        name: "쓰레쉬",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "지옥의 간수",
    },
    {
        id: 111,
        name: "퀸",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "데마시아의 날개",
    },
    {
        id: 112,
        name: "자크",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "비밀 병기",
    },
    {
        id: 113,
        name: "리산드라",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "얼음 마녀",
    },
    {
        id: 114,
        name: "아트록스",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "다르킨의 검",
    },
    {
        id: 115,
        name: "루시안",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "정화의 사도",
    },
    {
        id: 116,
        name: "징크스",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "난폭한 말괄량이",
    },
    {
        id: 117,
        name: "야스오",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "용서받지 못한 자",
    },
    {
        id: 118,
        name: "벨코즈",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "공허의 눈",
    },
    {
        id: 119,
        name: "브라움",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "프렐요드의 심장",
    },
    {
        id: 120,
        name: "나르",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "잃어버린 고리",
    },
    {
        id: 121,
        name: "아지르",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "사막의 황제",
    },
    {
        id: 122,
        name: "칼리스타",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "복수의 화신",
    },
    {
        id: 123,
        name: "렉사이",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "공허의 복병",
    },
    {
        id: 124,
        name: "바드",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "영겁의 수호자",
    },
    {
        id: 125,
        name: "에코",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "시간을 달리는 소년",
    },
    {
        id: 126,
        name: "탐 켄치",
        rpPrice: rp[2],
        bePrice: be[2],
        nickName: "강의 폭군",
    },
    {
        id: 127,
        name: "킨드레드",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "영겁의 사냥꾼",
    },
    {
        id: 128,
        name: "일라오이",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "크라켄의 여사제",
        skin: [
            { id: 1, name: "공허 인도자 일라오이", rpPrice:1350 , discountRate: 55 },
            { id: 2, name: "저항군 일라오이", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "우주 기원자 일라오이", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 129,
        name: "진",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "잔혹극의 거장",
    },
    {
        id: 130,
        name: "아우렐리온 솔",
        rpPrice: rp[1],
        bePrice: be[1],
        nickName: "별의 창조자",
    },
    {
        id: 131,
        name: "탈리야",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "바위술사",
    },
    {
        id: 132,
        name: "클레드",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "망나니 기사",
    },
    {
        id: 133,
        name: "아이번",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "자연의 아버지",
        skin: [
            { id: 1, name: "새콤달콤 아이번", rpPrice: 1350, discountRate: 0 },
            { id: 2, name: "덩크왕 아이번", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "고대 신 아이번", rpPrice: 1350, discountRate: 0 },
        ],
    },
    {
        id: 134,
        name: "카밀",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "강철의 그림자",
    },
    {
        id: 135,
        name: "자야",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "저항하는 자",
    },
    {
        id: 136,
        name: "라칸",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "매혹하는 자",
    },
    {
        id: 137,
        name: "케인",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "그림자 사신",
    },
    {
        id: 138,
        name: "오른",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "거산의 화염",
    },
    {
        id: 139,
        name: "조이",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "여명의 성위",
    },
    {
        id: 140,
        name: "카이사",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "공허의 딸",
    },
    {
        id: 141,
        name: "파이크",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "핏빛 항구의 학살자",
    },
    {
        id: 142,
        name: "니코",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "알쏭달쏭 카멜레온",
    },
    {
        id: 143,
        name: "사일러스",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "해방된 자",
    },
    {
        id: 144,
        name: "유미",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "마법 고양이",
    },
    {
        id: 145,
        name: "키아나",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "원소의 여왕",
    },
    {
        id: 146,
        name: "세나",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "구원자",
    },
    {
        id: 147,
        name: "아펠리오스",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "신념의 무기",
    },
    {
        id: 148,
        name: "세트",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "우두머리",
    },
    {
        id: 149,
        name: "릴리아",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "수줍은 꽃",
    },
    {
        id: 150,
        name: "요네",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "잊히지 못한 자",
    },
    {
        id: 151,
        name: "사미라",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "사막의 장미",
    },
    {
        id: 152,
        name: "세라핀",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "노래하는 별",
        skin: [
            { id: 1, name: "K/DA ALL OUT 세라핀", rpPrice: 3250, discountRate: 60 },
            { id: 2, name: "우아한 불사조 세라핀", rpPrice: 1350, discountRate: 0 },
            { id: 3, name: "바다의 노래 세라핀", rpPrice: 1350, discountRate: 25 },
        ],
    },
    {
        id: 153,
        name: "렐",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "철의 여인",
    },
    {
        id: 154,
        name: "비에고",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "몰락한 왕",
    },
    {
        id: 155,
        name: "그웬",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "신성한 재봉사",
    },
    {
        id: 156,
        name: "아크샨",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "떠도는 감시자",
    },
    {
        id: 157,
        name: "벡스",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "우울주의자",
    },
    {
        id: 158,
        name: "제리",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "자운의 불꽃",
    },
    {
        id: 159,
        name: "레나타 글라스크",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "화공 남작",
    },
    {
        id: 160,
        name: "벨베스",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "공허의 여제",
    },
    {
        id: 161,
        name: "닐라",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "해방된 기쁨",
    },
    {
        id: 162,
        name: "크산테",
        rpPrice: rp[0],
        bePrice: be[0],
        nickName: "나주마의 긍지",
    },
];

export default champion;
