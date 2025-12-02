const MOCK_DATA = [
    {
        name: "나유출",
        address: "서울시 해킹구 털렸동 101-202",
        contact: "010-4321-5678",
        email: "leaked@coupang.net",
        orders: ["🍎", "💻", "🧦", "📚", "💊"]
    },
    {
        name: "김바보",
        address: "경기도 바보시 바보로 77",
        contact: "010-2959-0192",
        email: "babo@naver.com",
        orders: ["🍌", "📱", "👟", "🎮", "🧴"]
    },
    {
        name: "박비번",
        address: "부산시 비밀구 1234번지",
        contact: "010-0203-9481",
        email: "password123@gmail.com",
        orders: ["🍇", "⌚", "🧢", "🎧", "🧻"]
    },
    {
        name: "이공유",
        address: "대구시 모두의구 공공재로 1",
        contact: "010-1122-2931",
        email: "public_info@daum.net",
        orders: ["🍊", "📷", "👕", "🧸", "🧼"]
    },
    {
        name: "최털림",
        address: "인천시 보안없구 숭숭뚫렸로 0",
        contact: "010-9812-0129",
        email: "hacked_again@nate.com",
        orders: ["🍉", "📺", "👖", "🧩", "🪥"]
    },
    {
        name: "정스팸",
        address: "광주시 광고구 문자폭탄로 99",
        contact: "010-9980-8080",
        email: "spam_lover@yahoo.com",
        orders: ["🍓", "📠", "👗", "🎲", "🩹"]
    },
    {
        name: "강피싱",
        address: "대전시 낚시구 월척이로 82",
        contact: "010-7003-1023",
        email: "click_me@korea.com",
        orders: ["🍒", "📟", "🧥", "🎨", "💊"]
    },
    {
        name: "조해커",
        address: "울산시 침투구 백도어로 404",
        contact: "010-1010-1010",
        email: "admin@root.com",
        orders: ["🍑", "💾", "🧤", "🎻", "💉"]
    },
    {
        name: "윤보안",
        address: "세종시 방화벽구 뚫렸네로 500",
        contact: "010-4009-2424",
        email: "security_fail@outlook.com",
        orders: ["🍍", "🔋", "🧣", "🎺", "🌡️"]
    },
    {
        name: "장로그",
        address: "제주시 기록구 다남았로 11",
        contact: "010-9178-3758",
        email: "log_everything@icloud.com",
        orders: ["🥝", "🔌", "👔", "🥁", "🩹"]
    },
    {
        name: "오배송",
        address: "서울시 분실구 못찾겠동 404",
        contact: "010-4040-4040",
        email: "where_is_it@delivery.com",
        orders: ["📦", "📪", "🚲", "🛴"]
    },
    {
        name: "김반품",
        address: "경기도 환불시 다시가군 18",
        contact: "010-8282-8282",
        email: "refund_king@coupang.net",
        orders: ["🧾"]
    },
    {
        name: "박스만",
        address: "부산시 빈박스구 내용없로 0",
        contact: "010-2859-0001",
        email: "empty_box@scam.com",
        orders: ["📦"]
    },
    {
        name: "효도왕",
        address: "서울시 효도구 효도로 1",
        contact: "010-5959-5959",
        email: "momcard_limit@sorry.com",
        orders: ["💎", "👜", "👠", "🥂"]
    },
    {
        name: "월급순",
        address: "인천시 스쳐가구 로그인만해 3",
        contact: "010-2000-8258",
        email: "salary_gone@bank.com",
        orders: ["🍜", "🚬"]
    },
    {
        name: "나낚임",
        address: "강원도 파닥시 월척이오 7",
        contact: "010-1023-8124",
        email: "hooked_fish@phishing.net",
        orders: ["🎣", "🐟", "🐠", "🐡", "🦈"]
    },
    {
        name: "새벽배",
        address: "서울시 잠못자구 문앞에놔로 2",
        contact: "010-0700-0700",
        email: "dawn_delivery@fast.com",
        orders: ["🥛", "🥗"]
    },
    {
        name: "지름신",
        address: "대구시 파산구 다사재기로 100",
        contact: "010-1000-1000",
        email: "buy_now@shopping.com",
        orders: ["🛒", "🛍️", "🎁", "💳", "👗"]
    },
    {
        name: "지원금",
        address: "광주시 지원금없로 0",
        contact: "010-0110-0110",
        email: "change_phone@agency.com",
        orders: ["📱", "📲", "📡", "🔋"]
    },
    {
        name: "랜섬우",
        address: "사이버시 암호화구 랜섬로 500",
        contact: "010-1102-9911",
        email: "lock_your_file@ransom.com",
        orders: ["🔒", "🔑", "💰", "📁", "🧱"]
    },
    {
        name: "김인증",
        address: "제주시 확인구 번호틀림 6",
        contact: "010-1234-4321",
        email: "verify_code@sms.com",
        orders: ["📲"]
    },
    {
        name: "이중결",
        address: "결제시 오류구 돈은나갔로 22",
        contact: "010-9928-1123",
        email: "double_pay@error.com",
        orders: ["💳", "💳"]
    },
    {
        name: "박품절",
        address: "재고시 없음구 입고지연로 0",
        contact: "010-9912-0010",
        email: "out_of_stock@sorry.com",
        orders: ["📅"]
    },
    {
        name: "최리뷰",
        address: "별점시 테러구 악플달기로 1",
        contact: "010-1818-1818",
        email: "one_star@review.com",
        orders: ["📝"]
    },
    {
        name: "정구독",
        address: "매달시 자동구 결제되네로 12",
        contact: "010-3650-3650",
        email: "subscribe@monthly.com",
        orders: ["📅", "📺", "🎬", "🎵"]
    },
    {
        name: "강광고",
        address: "알림시 동의구 마케팅활용 100",
        contact: "010-5050-5050",
        email: "ad_bomb@marketing.com",
        orders: ["📫"]
    },
    {
        name: "조택배",
        address: "물류시 던지구 파손주의로 13",
        contact: "010-8282-1234",
        email: "fragile@broken.com",
        orders: ["🔨", "📦", "🩹"]
    },
    {
        name: "윤본인",
        address: "명의시 도용구 나아닌데 5",
        contact: "010-9876-5432",
        email: "who_are_you@identity.com",
        orders: ["🆔"]
    },
    {
        name: "장장바",
        address: "담기시 결제는구 안함동 99",
        contact: "010-8462-9484",
        email: "cart_full@nocheckout.com",
        orders: ["🛒", "🛒", "🛒"]
    },
    {
        name: "한환불",
        address: "고객시 센터구 전화안받아 0",
        contact: "010-1588-8649",
        email: "call_center@busy.com",
        orders: ["📞", "🤖"]
    },
    {
        name: "서버다운",
        address: "접속시 폭주구 502에러 502",
        contact: "010-0502-0502",
        email: "server_error@down.com",
        orders: ["🖥️", "🚧"]
    },
    {
        name: "김쿠폰",
        address: "할인시 적용구 기간만료 1",
        contact: "010-9900-9900",
        email: "expired@coupon.com",
        orders: ["🎫", "✂️"]
    },
    {
        name: "이해지",
        address: "탈퇴시 복잡구 못찾겠네 8",
        contact: "010-5124-5400",
        email: "leave_me@alone.com",
        orders: ["🚪", "🔒"]
    },
    {
        name: "박무료",
        address: "체험시 유료구 전환주의 30",
        contact: "010-0030-0030",
        email: "free_trial@paylater.com",
        orders: ["💳"]
    },
    {
        name: "최직구",
        address: "해외시 통관구 세금폭탄 20",
        contact: "010-8200-8200",
        email: "customs@tax.com",
        orders: ["📦"]
    },
    {
        name: "정당근",
        address: "중고시 쿨거래구 네고사절 5",
        contact: "010-4989-4989",
        email: "carrot@market.com",
        orders: ["🥕", "💰", "📦"]
    },
    {
        name: "강링크",
        address: "클릭시 감염구 바이러스 1",
        contact: "010-1001-1001",
        email: "malware@virus.com",
        orders: ["🔗", "🖱️", "💊"]
    },
    {
        name: "조가품",
        address: "명품시 이미구 테이션 10",
        contact: "010-0101-0101",
        email: "fake@gucci.net",
        orders: ["👜", "🕶️", "⌚"]
    },
    {
        name: "윤배달",
        address: "음식시 식었구 맛없어 0",
        contact: "010-9923-9922",
        email: "cold_food@delivery.com",
        orders: ["🍕", "🍔", "🧊"]
    },
    {
        name: "장설치",
        address: "액티브시 엑스구 깔지마 1",
        contact: "010-9151-8715",
        email: "activex@hate.com",
        orders: ["💿", "🛡️", "🖱️"]
    },
    {
        name: "한비번",
        address: "찾기시 기억구 안나네 0",
        contact: "010-9123-1234",
        email: "forgot_pw@help.com",
        orders: ["🔒"]
    },
    {
        name: "송로켓",
        address: "와우시 회원구 월회비 4990",
        contact: "010-4990-4990",
        email: "rocket_wow@member.com",
        orders: ["📦", "📅", "💳"]
    },
    {
        name: "임품절",
        address: "입고시 알림구 오긴오냐 0",
        contact: "010-0185-9912",
        email: "restock@wait.com",
        orders: ["📅"]
    },
    {
        name: "배송비",
        address: "제주도 도서구 산간지역 3000",
        contact: "010-3000-3000",
        email: "extra_charge@jeju.com",
        orders: ["📦"]
    },
    {
        name: "게임맨",
        address: "게임시 아이템구 현질해 10",
        contact: "010-0010-0010",
        email: "game_item@momcard.com",
        orders: ["🎮", "💎", "⚔️", "🛡️"]
    },
    {
        name: "김먹튀",
        address: "공구시 입금후 잠수탐 0",
        contact: "010-1121-1298",
        email: "run_away@money.com",
        orders: ["💰", "🍹"]
    },
    {
        name: "이알바",
        address: "리뷰시 건당구 오백원 500",
        contact: "010-0500-0500",
        email: "part_time@review.com",
        orders: ["💰"]
    },
    {
        name: "박옵션",
        address: "추가시 금액구 플러스 1",
        contact: "010-1000-8237",
        email: "option_plus@price.com",
        orders: ["💰", "🧾"]
    },
    {
        name: "최낚시",
        address: "썸네일 어그로구 내용없음 0",
        contact: "010-8214-1281",
        email: "aggro@youtube.com",
        orders: ["🎣", "📺"]
    },
    {
        name: "정해킹",
        address: "비트시 코인구 채굴중 24",
        contact: "010-2424-2424",
        email: "mining@hidden.com",
        orders: ["⛏️", "💻", "🔋", "💰"]
    },
    {
        name: "조와이",
        address: "파이시 연결구 안됨 404",
        contact: "010-0404-0404",
        email: "no_wifi@disconnect.com",
        orders: ["🔌"]
    },
    {
        name: "윤캐시",
        address: "삭제시 복구구 불가함 0",
        contact: "010-8237-1192",
        email: "clear_cache@browser.com",
        orders: ["🗑️", "🧹", "💾"]
    },
    {
        name: "장보안",
        address: "인증서 만료구 갱신해 1",
        contact: "010-8751-8040",
        email: "cert_expired@bank.com",
        orders: ["📜", "🔒"]
    },
    {
        name: "한매크로",
        address: "티켓시 예매구 1초컷 1",
        contact: "010-0001-0001",
        email: "macro@ticket.com",
        orders: ["🎫", "🖱️"]
    },
    {
        name: "오당첨",
        address: "이벤트 축하구 스팸임 1",
        contact: "010-1234-5678",
        email: "congrats@spam.com",
        orders: ["🎁", "🔗"]
    },
    {
        name: "배터리",
        address: "충전시 방전구 방전동 10",
        contact: "010-0010-0100",
        email: "low_battery@power.com",
        orders: ["🔋", "🔌"]
    },
    {
        name: "신호등",
        address: "빨간불 멈춤구 위반딱지 7",
        contact: "010-0007-0007",
        email: "fine@police.com",
        orders: ["📷", "✉️"]
    },
    {
        name: "고구마",
        address: "답답시 사이다구 없음 0",
        contact: "010-9958-2816",
        email: "stuffy@sweetpotato.com",
        orders: ["🍠", "🥛"]
    }
];

// Items to mix in for confusion
const CONFUSION_ITEMS = [
    "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🎱", "🥏",
    "🥐", "🥯", "🍞", "🥖", "🥨", "🥞", "🧇", "🧀", "🍖", "🍗",
    "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥗", "🥘", "🥫",
    "⌚", "📱", "📲", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️",
    "💿", "📀", "💾", "📷", "📸", "📹", "🎥", "📽️", "🎞️", "📞"
];