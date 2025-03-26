export type Options = {
  tags: Tag[]
  classification: Classification[]
}

type Tag = {
  tag: string
  class_id: number
  ja: string
  en: string
  zh: string
}

type Classification = {
  id: number
  NSFW: number
  ja: string
  en: string
  zh: string
}

export const options: Options = {
  tags: [
    {
      tag: 'pixel art',
      class_id: 0,
      ja: 'ピクセルアート',
      en: 'PixelArt',
      zh: '点阵图',
    },
    {
      tag: 'sketch',
      class_id: 0,
      ja: 'スケッチ',
      en: 'Sketch',
      zh: '素描',
    },
    {
      tag: 'watercolor',
      class_id: 0,
      ja: '水彩',
      en: 'Watercolor',
      zh: '水彩',
    },
    {
      tag: '1990s style',
      class_id: 0,
      ja: '1990s',
      en: '1990SStyle',
      zh: '1990年代',
    },
    {
      tag: 'retro artstyle',
      class_id: 0,
      ja: 'レトロ',
      en: 'RetroArtstyle',
      zh: '复古的',
    },
    {
      tag: 'Chinese ink painting',
      class_id: 0,
      ja: '水墨画',
      en: 'ChineseInkPainting',
      zh: '墨水绘画',
    },
    {
      tag: 'oil painting',
      class_id: 0,
      ja: '油絵',
      en: 'OilPainting',
      zh: '油',
    },
    {
      tag: 'colored pencil painting',
      class_id: 0,
      ja: '色鉛筆',
      en: 'ColoredPencilPainting',
      zh: '彩色铅笔',
    },
    {
      tag: 'pastel painting',
      class_id: 0,
      ja: 'パステル',
      en: 'PastelPainting',
      zh: '柔和',
    },
    {
      tag: 'pov',
      class_id: 1,
      ja: '正面',
      en: 'Pov',
      zh: '正面',
    },
    {
      tag: 'from side',
      class_id: 1,
      ja: '横から',
      en: 'FromSide',
      zh: '从侧面',
    },
    {
      tag: 'from behind',
      class_id: 1,
      ja: '後ろから',
      en: 'FromBehind',
      zh: '从后面',
    },
    {
      tag: 'from above',
      class_id: 1,
      ja: '上から',
      en: 'FromAbove',
      zh: '从上面',
    },
    {
      tag: 'from below',
      class_id: 1,
      ja: '下から',
      en: 'FromBelow',
      zh: '从下面',
    },
    {
      tag: 'fisheye',
      class_id: 1,
      ja: '魚眼',
      en: 'Fisheye',
      zh: '鱼眼',
    },
    {
      tag: 'day',
      class_id: 2,
      ja: '日中',
      en: 'Day',
      zh: '白天',
    },
    {
      tag: 'dusk',
      class_id: 2,
      ja: '夕方',
      en: 'Dusk',
      zh: '黄昏',
    },
    {
      tag: 'night',
      class_id: 2,
      ja: '夜',
      en: 'Night',
      zh: '夜晚',
    },
    {
      tag: 'sun',
      class_id: 2,
      ja: '晴れ',
      en: 'Sun',
      zh: '太阳',
    },
    {
      tag: 'overcast',
      class_id: 2,
      ja: 'くもり',
      en: 'Overcast',
      zh: '多云',
    },
    {
      tag: 'rain',
      class_id: 2,
      ja: '雨',
      en: 'Rain',
      zh: '雨',
    },
    {
      tag: 'cityscape',
      class_id: 3,
      ja: '街並み',
      en: 'Cityscape',
      zh: '街道',
    },
    {
      tag: 'landscape',
      class_id: 3,
      ja: '田舎の風景',
      en: 'Landscape',
      zh: '风景',
    },
    {
      tag: 'shore',
      class_id: 3,
      ja: '海岸',
      en: 'Shore',
      zh: '海岸',
    },
    {
      tag: 'forest',
      class_id: 3,
      ja: '森林',
      en: 'Forest',
      zh: '森林',
    },
    {
      tag: 'mountain',
      class_id: 3,
      ja: '山',
      en: 'Mountain',
      zh: '山',
    },
    {
      tag: 'nature',
      class_id: 3,
      ja: '自然',
      en: 'Nature',
      zh: '自然',
    },
    {
      tag: 'water',
      class_id: 3,
      ja: '水',
      en: 'Water',
      zh: '水',
    },
    {
      tag: 'lake',
      class_id: 3,
      ja: '湖',
      en: 'Lake',
      zh: '湖',
    },
    {
      tag: 'ocean',
      class_id: 3,
      ja: '海洋',
      en: 'Ocean',
      zh: '海洋',
    },
    {
      tag: 'river',
      class_id: 3,
      ja: '川',
      en: 'River',
      zh: '河',
    },
    {
      tag: 'waterfall',
      class_id: 3,
      ja: '滝',
      en: 'Waterfall',
      zh: '瀑布',
    },
    {
      tag: 'bridge',
      class_id: 3,
      ja: '橋',
      en: 'Bridge',
      zh: '桥',
    },
    {
      tag: 'city',
      class_id: 3,
      ja: '街',
      en: 'City',
      zh: '镇',
    },
    {
      tag: 'field',
      class_id: 3,
      ja: '野原',
      en: 'Field',
      zh: '场地',
    },
    {
      tag: 'pond',
      class_id: 3,
      ja: '池',
      en: 'Pond',
      zh: '池塘',
    },
    {
      tag: 'windmill',
      class_id: 3,
      ja: '風車',
      en: 'Windmill',
      zh: '风车',
    },
    {
      tag: 'indoors',
      class_id: 4,
      ja: '屋内共通',
      en: 'Indoors',
      zh: '室内常见',
    },
    {
      tag: 'bathroom',
      class_id: 4,
      ja: '風呂',
      en: 'Bathroom',
      zh: '洗澡',
    },
    {
      tag: 'bathtub',
      class_id: 4,
      ja: 'バスタブ',
      en: 'Bathtub',
      zh: '浴缸',
    },
    {
      tag: 'shower',
      class_id: 4,
      ja: 'シャワー',
      en: 'Shower',
      zh: '淋浴',
    },
    {
      tag: 'bedroom',
      class_id: 4,
      ja: '寝室',
      en: 'Bedroom',
      zh: '卧室',
    },
    {
      tag: 'classroom',
      class_id: 4,
      ja: 'クラスルーム',
      en: 'Classroom',
      zh: '课堂',
    },
    {
      tag: 'locker room',
      class_id: 4,
      ja: 'ロッカールーム',
      en: 'LockerRoom',
      zh: '更衣室',
    },
    {
      tag: 'kitchen',
      class_id: 4,
      ja: 'キッチン',
      en: 'Kitchen',
      zh: '厨房',
    },
    {
      tag: 'library',
      class_id: 4,
      ja: '図書室',
      en: 'Library',
      zh: '图书馆',
    },
    {
      tag: 'cafe',
      class_id: 4,
      ja: 'カフェ',
      en: 'Cafe',
      zh: '咖啡店',
    },
    {
      tag: 'prison',
      class_id: 4,
      ja: '刑務所',
      en: 'Prison',
      zh: '监狱',
    },
    {
      tag: 'outdoors',
      class_id: 5,
      ja: '屋外共通',
      en: 'Outdoors',
      zh: '常见的',
    },
    {
      tag: 'rooftop',
      class_id: 5,
      ja: '屋上',
      en: 'Rooftop',
      zh: '屋顶',
    },
    {
      tag: 'school',
      class_id: 5,
      ja: '学校',
      en: 'School',
      zh: '学校',
    },
    {
      tag: 'beach',
      class_id: 5,
      ja: 'ビーチ',
      en: 'Beach',
      zh: '海滩',
    },
    {
      tag: 'pool',
      class_id: 5,
      ja: 'プール',
      en: 'Pool',
      zh: '水池',
    },
    {
      tag: 'poolside',
      class_id: 5,
      ja: 'プールサイド',
      en: 'Poolside',
      zh: '池畔',
    },
    {
      tag: 'park',
      class_id: 5,
      ja: '公園',
      en: 'Park',
      zh: '公园',
    },
    {
      tag: 'shrine',
      class_id: 5,
      ja: '神社',
      en: 'Shrine',
      zh: '神社',
    },
    {
      tag: 'train station',
      class_id: 5,
      ja: '駅',
      en: 'TrainStation',
      zh: '车站',
    },
    {
      tag: 'ferris wheel',
      class_id: 5,
      ja: '観覧車',
      en: 'FerrisWheel',
      zh: '摩天轮',
    },
    {
      tag: 'crosswalk',
      class_id: 5,
      ja: '横断歩道',
      en: 'Crosswalk',
      zh: '行人穿越',
    },
    {
      tag: 'bus stop',
      class_id: 5,
      ja: 'バス停',
      en: 'BusStop',
      zh: '公车站',
    },
    {
      tag: 'cafe',
      class_id: 5,
      ja: 'カフェ',
      en: 'Cafe',
      zh: '咖啡店',
    },
    {
      tag: 'hospital',
      class_id: 5,
      ja: '病院',
      en: 'Hospital',
      zh: '医院',
    },
    {
      tag: 'onsen',
      class_id: 5,
      ja: '温泉',
      en: 'Onsen',
      zh: '温泉',
    },
    {
      tag: 'road',
      class_id: 5,
      ja: '道',
      en: 'Road',
      zh: '路',
    },
    {
      tag: 'street',
      class_id: 5,
      ja: 'ストリート',
      en: 'Street',
      zh: '街道',
    },
    {
      tag: 'ruins',
      class_id: 5,
      ja: '遺跡',
      en: 'Ruins',
      zh: '遗迹',
    },
    {
      tag: 'castle',
      class_id: 5,
      ja: '城',
      en: 'Castle',
      zh: '城堡',
    },
    {
      tag: 'graveyard',
      class_id: 5,
      ja: '墓地',
      en: 'Graveyard',
      zh: '墓地',
    },
    {
      tag: 'prison',
      class_id: 5,
      ja: '刑務所',
      en: 'Prison',
      zh: '监狱',
    },
    {
      tag: '1girl',
      class_id: 6,
      ja: '1人の女の子',
      en: '1Girl',
      zh: '一个女孩',
    },
    {
      tag: '2girls',
      class_id: 6,
      ja: '2人の女の子',
      en: '2Girls',
      zh: '两个女孩',
    },
    {
      tag: '1boy',
      class_id: 6,
      ja: '1人の男の子',
      en: '1Boy',
      zh: '一个男孩',
    },
    {
      tag: '2boys',
      class_id: 6,
      ja: '2人の男の子',
      en: '2Boys',
      zh: '两个男孩',
    },
    {
      tag: 'solo',
      class_id: 6,
      ja: 'ソロ',
      en: 'Solo',
      zh: '独奏',
    },
    {
      tag: 'multiple girls',
      class_id: 6,
      ja: '複数',
      en: 'MultipleGirls',
      zh: '多',
    },
    {
      tag: 'smile',
      class_id: 7,
      ja: '笑顔',
      en: 'Smile',
      zh: '微笑',
    },
    {
      tag: 'crying',
      class_id: 7,
      ja: '泣く',
      en: 'Crying',
      zh: '哭',
    },
    {
      tag: 'sad',
      class_id: 7,
      ja: '悲しみ',
      en: 'Sad',
      zh: '悲伤的',
    },
    {
      tag: 'shy',
      class_id: 7,
      ja: '照れ',
      en: 'Shy',
      zh: '羞吗',
    },
    {
      tag: 'embarrassed',
      class_id: 7,
      ja: '羞恥',
      en: 'Embarrassed',
      zh: '害羞',
    },
    {
      tag: 'blush',
      class_id: 7,
      ja: '頬染め',
      en: 'Blush',
      zh: '脸红',
    },
    {
      tag: 'angry',
      class_id: 7,
      ja: '怒り',
      en: 'Angry',
      zh: '生气',
    },
    {
      tag: 'scared',
      class_id: 7,
      ja: '怯え',
      en: 'Scared',
      zh: '受惊',
    },
    {
      tag: 'seductive smile',
      class_id: 7,
      ja: '誘惑（蠱惑）',
      en: 'SeductiveSmile',
      zh: '诱惑笑',
    },
    {
      tag: 'long hair',
      class_id: 8,
      ja: 'ロングヘア',
      en: 'LongHair',
      zh: '长发',
    },
    {
      tag: 'short hair',
      class_id: 8,
      ja: 'ショートヘア',
      en: 'ShortHair',
      zh: '短发',
    },
    {
      tag: 'medium hair',
      class_id: 8,
      ja: 'セミロング',
      en: 'MediumHair',
      zh: '中发',
    },
    {
      tag: 'twintails',
      class_id: 8,
      ja: 'ツインテール',
      en: 'Twintails',
      zh: '双马尾',
    },
    {
      tag: 'ponytail',
      class_id: 8,
      ja: 'ポニーテール',
      en: 'Ponytail',
      zh: '马尾辫',
    },
    {
      tag: 'side ponytail',
      class_id: 8,
      ja: 'サイドテール',
      en: 'SidePonytail',
      zh: '侧尾',
    },
    {
      tag: 'two side up',
      class_id: 8,
      ja: 'ツーサイドアップ',
      en: 'TwoSideUp',
      zh: '两个旁边',
    },
    {
      tag: 'bob cut',
      class_id: 8,
      ja: 'ボブ',
      en: 'BobCut',
      zh: '妹妹切',
    },
    {
      tag: 'ahoge',
      class_id: 8,
      ja: 'アホ毛',
      en: 'Ahoge',
      zh: '呆毛',
    },
    {
      tag: 'messy hair',
      class_id: 8,
      ja: 'くせっ毛（モジャ）',
      en: 'MessyHair',
      zh: '凌乱发型',
    },
    {
      tag: 'wavy hair',
      class_id: 8,
      ja: 'ウェーブヘア',
      en: 'WavyHair',
      zh: '波浪头',
    },
    {
      tag: 'hair over one eye',
      class_id: 8,
      ja: '片目隠れ',
      en: 'HairOverOneEye',
      zh: '一只眼睛上的头发',
    },
    {
      tag: 'hair over eyes',
      class_id: 8,
      ja: '目にかかった前髪',
      en: 'HairOverEyes',
      zh: '头发遮住眼睛',
    },
    {
      tag: 'braid',
      class_id: 8,
      ja: '三つ編み',
      en: 'Braid',
      zh: '辫子',
    },
    {
      tag: 'french braid',
      class_id: 8,
      ja: 'フランスの三つ編み',
      en: 'FrenchBraid',
      zh: '法式辫子',
    },
    {
      tag: 'hair bun',
      class_id: 8,
      ja: 'おだんごヘア',
      en: 'HairBun',
      zh: '发髻',
    },
    {
      tag: 'blunt bangs',
      class_id: 8,
      ja: 'ぱっつん',
      en: 'BluntBangs',
      zh: '齐刘海',
    },
    {
      tag: 'crossed bangs',
      class_id: 8,
      ja: '目のところでばってんの毛',
      en: 'CrossedBangs',
      zh: '眼睛的头发',
    },
    {
      tag: 'hair between eyes',
      class_id: 8,
      ja: '目の間の髪',
      en: 'HairBetweenEyes',
      zh: '眼睛之间的头发',
    },
    {
      tag: 'black hair',
      class_id: 9,
      ja: '黒髪',
      en: 'BlackHair',
      zh: '黑色',
    },
    {
      tag: 'brown hair',
      class_id: 9,
      ja: '茶髪',
      en: 'BrownHair',
      zh: '棕色',
    },
    {
      tag: 'blonde hair',
      class_id: 9,
      ja: '金髪',
      en: 'BlondeHair',
      zh: '金色',
    },
    {
      tag: 'pink hair',
      class_id: 9,
      ja: 'ピンク髪',
      en: 'PinkHair',
      zh: '粉红',
    },
    {
      tag: 'red hair',
      class_id: 9,
      ja: '赤髪',
      en: 'RedHair',
      zh: '红色',
    },
    {
      tag: 'green hair',
      class_id: 9,
      ja: '緑髪',
      en: 'GreenHair',
      zh: '绿色',
    },
    {
      tag: 'blue hair',
      class_id: 9,
      ja: '青髪',
      en: 'BlueHair',
      zh: '蓝色',
    },
    {
      tag: 'aqua hair',
      class_id: 9,
      ja: '青緑髪（アクア）',
      en: 'AquaHair',
      zh: '水色',
    },
    {
      tag: 'grey hair',
      class_id: 9,
      ja: '銀髪',
      en: 'GreyHair',
      zh: '灰色',
    },
    {
      tag: 'purple hair',
      class_id: 9,
      ja: '紫髪',
      en: 'PurpleHair',
      zh: '紫色',
    },
    {
      tag: 'white hair',
      class_id: 9,
      ja: '白髮',
      en: 'WhiteHair',
      zh: '白色',
    },
    {
      tag: 'black eyes',
      class_id: 10,
      ja: '黒目',
      en: 'BlackEyes',
      zh: '黑色',
    },
    {
      tag: 'brown eyes',
      class_id: 10,
      ja: '茶目',
      en: 'BrownEyes',
      zh: '棕色',
    },
    {
      tag: 'yellow eyes',
      class_id: 10,
      ja: '黄眼',
      en: 'YellowEyes',
      zh: '黄色',
    },
    {
      tag: 'pink eyes',
      class_id: 10,
      ja: 'ピンク目',
      en: 'PinkEyes',
      zh: '粉红',
    },
    {
      tag: 'red eyes',
      class_id: 10,
      ja: '赤目',
      en: 'RedEyes',
      zh: '红色',
    },
    {
      tag: 'green eyes',
      class_id: 10,
      ja: '緑目',
      en: 'GreenEyes',
      zh: '绿色',
    },
    {
      tag: 'blue eyes',
      class_id: 10,
      ja: '青眼',
      en: 'BlueEyes',
      zh: '蓝色',
    },
    {
      tag: 'aqua eyes',
      class_id: 10,
      ja: '青緑眼',
      en: 'AquaEyes',
      zh: '水蓝色',
    },
    {
      tag: 'grey eyes',
      class_id: 10,
      ja: '銀目',
      en: 'GreyEyes',
      zh: '灰色',
    },
    {
      tag: 'purple eyes',
      class_id: 10,
      ja: '紫目',
      en: 'PurpleEyes',
      zh: '紫色',
    },
    {
      tag: 'white eyes',
      class_id: 10,
      ja: '白眼',
      en: 'WhiteEyes',
      zh: '白色',
    },
    {
      tag: 'shirt',
      class_id: 11,
      ja: 'シャツ',
      en: 'Shirt',
      zh: '衬衫',
    },
    {
      tag: 't-shirt',
      class_id: 11,
      ja: 'Tシャツ',
      en: 'T-Shirt',
      zh: '汗衫',
    },
    {
      tag: 'collared shirt',
      class_id: 11,
      ja: '襟付きのシャツ',
      en: 'CollaredShirt',
      zh: '有领衬衣',
    },
    {
      tag: 'sleeveless shirt',
      class_id: 11,
      ja: 'ノースリーブシャツ',
      en: 'SleevelessShirt',
      zh: '无袖上衣',
    },
    {
      tag: 'crop top',
      class_id: 11,
      ja: 'クロップトップ',
      en: 'CropTop',
      zh: '漏脐装',
    },
    {
      tag: 'dress shirt',
      class_id: 11,
      ja: 'ドレスシャツ',
      en: 'DressShirt',
      zh: '礼服衬衫',
    },
    {
      tag: 'dress',
      class_id: 11,
      ja: 'ドレス',
      en: 'Dress',
      zh: '裙子',
    },
    {
      tag: 'blouse',
      class_id: 11,
      ja: 'ブラウス',
      en: 'Blouse',
      zh: '女式衬衫',
    },
    {
      tag: 'camisole',
      class_id: 11,
      ja: 'キャミソール',
      en: 'Camisole',
      zh: '吊带',
    },
    {
      tag: 'jacket',
      class_id: 11,
      ja: 'ジャケット',
      en: 'Jacket',
      zh: '夹克',
    },
    {
      tag: 'vest',
      class_id: 11,
      ja: 'ベスト',
      en: 'Vest',
      zh: '背心',
    },
    {
      tag: 'blazer',
      class_id: 11,
      ja: 'ブレザー',
      en: 'Blazer',
      zh: '西装外套',
    },
    {
      tag: 'sweater vest',
      class_id: 11,
      ja: 'セーターベスト',
      en: 'SweaterVest',
      zh: '毛衣背心',
    },
    {
      tag: 'turtleneck',
      class_id: 11,
      ja: 'タートルネック',
      en: 'Turtleneck',
      zh: '高领',
    },
    {
      tag: 'sweater',
      class_id: 11,
      ja: 'セーター',
      en: 'Sweater',
      zh: '毛衣',
    },
    {
      tag: 'coat',
      class_id: 11,
      ja: 'コート',
      en: 'Coat',
      zh: '外套',
    },
    {
      tag: 'hoodie',
      class_id: 11,
      ja: 'パーカー',
      en: 'Hoodie',
      zh: '连帽衫，卫衣',
    },
    {
      tag: 'cardigan',
      class_id: 11,
      ja: 'カーディガン',
      en: 'Cardigan',
      zh: '羊毛衫',
    },
    {
      tag: 'tank top',
      class_id: 11,
      ja: 'タンクトップ',
      en: 'TankTop',
      zh: '女用背心',
    },
    {
      tag: 'hat',
      class_id: 12,
      ja: '帽子',
      en: 'Hat',
      zh: '帽子',
    },
    {
      tag: 'mask',
      class_id: 12,
      ja: 'マスク',
      en: 'Mask',
      zh: '面具',
    },
    {
      tag: 'gloves',
      class_id: 12,
      ja: '手袋',
      en: 'Gloves',
      zh: '手套',
    },
    {
      tag: 'choker',
      class_id: 12,
      ja: 'チョーカー',
      en: 'Choker',
      zh: 'choker',
    },
    {
      tag: 'ribbon',
      class_id: 12,
      ja: 'リボン',
      en: 'Ribbon',
      zh: '丝带',
    },
    {
      tag: 'flat chest',
      class_id: 13,
      ja: '無乳',
      en: 'FlatChest',
      zh: '極小',
    },
    {
      tag: 'small breasts',
      class_id: 13,
      ja: '貧乳',
      en: 'SmallBreasts',
      zh: '小',
    },
    {
      tag: 'large breasts',
      class_id: 13,
      ja: '巨乳',
      en: 'LargeBreasts',
      zh: '大',
    },
    {
      tag: 'huge breasts',
      class_id: 13,
      ja: '爆乳',
      en: 'HugeBreasts',
      zh: '超大',
    },
    {
      tag: 'mole',
      class_id: 14,
      ja: 'ほくろ',
      en: 'Mole',
      zh: '痣',
    },
    {
      tag: 'mole under eye',
      class_id: 14,
      ja: '泣きぼくろ',
      en: 'MoleUnderEye',
      zh: '泪痣',
    },
    {
      tag: 'dark skin',
      class_id: 14,
      ja: '褐色',
      en: 'DarkSkin',
      zh: '棕色的',
    },
    {
      tag: 'tan',
      class_id: 14,
      ja: '日焼け',
      en: 'Tan',
      zh: '晒伤',
    },
    {
      tag: 'cat ears',
      class_id: 14,
      ja: '猫耳',
      en: 'CatEars',
      zh: '猫耳',
    },
    {
      tag: 'cat tail',
      class_id: 14,
      ja: '猫しっぽ',
      en: 'CatTail',
      zh: '猫的尾巴',
    },
    {
      tag: 'nail polish',
      class_id: 14,
      ja: 'マニキュア',
      en: 'NailPolish',
      zh: '修指甲',
    },
    {
      tag: 'standing',
      class_id: 15,
      ja: '立ち姿',
      en: 'Standing',
      zh: '站立外观',
    },
    {
      tag: 'lying',
      class_id: 15,
      ja: '寝そべり',
      en: 'Lying',
      zh: '躺着',
    },
    {
      tag: 'on back',
      class_id: 15,
      ja: '仰向け',
      en: 'OnBack',
      zh: '躺在他的背上',
    },
    {
      tag: 'on stomach',
      class_id: 15,
      ja: 'うつ伏せ',
      en: 'OnStomach',
      zh: '趴着',
    },
    {
      tag: 'all fours',
      class_id: 15,
      ja: '四つん這い',
      en: 'AllFours',
      zh: '四肢趴地',
    },
    {
      tag: 'running',
      class_id: 15,
      ja: '走っている姿',
      en: 'Running',
      zh: '跑步图',
    },
    {
      tag: 'sitting',
      class_id: 15,
      ja: '座っている',
      en: 'Sitting',
      zh: '坐',
    },
    {
      tag: 'spread legs',
      class_id: 15,
      ja: '開脚',
      en: 'SpreadLegs',
      zh: '開脚',
    },
    {
      tag: 'kneeling',
      class_id: 15,
      ja: '膝立ち',
      en: 'Kneeling',
      zh: '下跪',
    },
    {
      tag: 'crossed legs',
      class_id: 15,
      ja: '足組み',
      en: 'CrossedLegs',
      zh: '二郎腿',
    },
    {
      tag: 'hugging own legs',
      class_id: 15,
      ja: '体育座り',
      en: 'HuggingOwnLegs',
      zh: '体育坐着',
    },
    {
      tag: 'seiza',
      class_id: 15,
      ja: '正座',
      en: 'Seiza',
      zh: '正坐',
    },
    {
      tag: 'wariza',
      class_id: 15,
      ja: '女の子座り',
      en: 'Wariza',
      zh: '坐在女孩身上',
    },
    {
      tag: 'closed mouth',
      class_id: 15,
      ja: '閉口',
      en: 'ClosedMouth',
      zh: '闭嘴',
    },
    {
      tag: 'open mouse',
      class_id: 15,
      ja: '開口',
      en: 'OpenMouse',
      zh: '开场',
    },
    {
      tag: 'tongue out',
      class_id: 15,
      ja: '舌出し',
      en: 'TongueOut',
      zh: '吐舌',
    },
    {
      tag: 'hand between legs',
      class_id: 15,
      ja: '手を足にかける',
      en: 'HandBetweenLegs',
      zh: '把手放在脚上',
    },
    {
      tag: 'nsfw',
      class_id: 16,
      ja: 'NSFW',
      en: 'NSFW',
      zh: 'NSFW',
    },
    {
      tag: 'sex',
      class_id: 16,
      ja: 'セックス',
      en: 'Sex',
      zh: '做爱',
    },
    {
      tag: 'straddling',
      class_id: 16,
      ja: '馬乗り、騎乗位',
      en: 'Straddling',
      zh: '跨坐',
    },
    {
      tag: 'sex from behind',
      class_id: 16,
      ja: 'バック',
      en: 'SexFromBehind',
      zh: '背部',
    },
    {
      tag: 'suspended congress',
      class_id: 16,
      ja: '駅弁',
      en: 'SuspendedCongress',
      zh: '车站午餐',
    },
    {
      tag: 'cowgirl position',
      class_id: 16,
      ja: '騎乗位',
      en: 'CowgirlPosition',
      zh: '女牛仔',
    },
    {
      tag: 'reverse cowgirl position',
      class_id: 16,
      ja: '背面騎乗位',
      en: 'ReverseCowgirlPosition',
      zh: '后女牛仔',
    },
    {
      tag: 'missionary',
      class_id: 16,
      ja: '正常位',
      en: 'Missionary',
      zh: '传教士职位',
    },
    {
      tag: 'clothing aside',
      class_id: 16,
      ja: 'ずらし挿入',
      en: 'ClothingAside',
      zh: '衣服放一旁',
    },
    {
      tag: 'ejaculation',
      class_id: 18,
      ja: '射精',
      en: 'Ejaculation',
      zh: '射精',
    },
    {
      tag: 'facial',
      class_id: 18,
      ja: '顔射',
      en: 'Facial',
      zh: '面部射液',
    },
    {
      tag: 'cum in mouth',
      class_id: 18,
      ja: '口内射精（ごっくん）',
      en: 'CumInMouth',
      zh: '口腔射精（Gokkun）',
    },
    {
      tag: 'cum in pussy',
      class_id: 18,
      ja: '腟内射精（中出し）',
      en: 'CumInPussy',
      zh: '阴道射精（阴道暨射击）',
    },
    {
      tag: 'cumdrip',
      class_id: 18,
      ja: '溢れ精液',
      en: 'Cumdrip',
      zh: '精液溢出',
    },
    {
      tag: 'fellatio',
      class_id: 19,
      ja: 'フェラチオ',
      en: 'Fellatio',
      zh: '口交',
    },
    {
      tag: 'paizuri',
      class_id: 19,
      ja: 'パイズリ',
      en: 'Paizuri',
      zh: '他妈的',
    },
    {
      tag: 'handjob',
      class_id: 19,
      ja: '手コキ',
      en: 'Handjob',
      zh: '打手枪',
    },
    {
      tag: 'testicle_sucking',
      class_id: 19,
      ja: 'タマ舐め',
      en: 'Testicle_Sucking',
      zh: '舔球',
    },
    {
      tag: 'breast press',
      class_id: 19,
      ja: 'あててんのよ',
      en: 'BreastPress',
      zh: '对不起',
    },
    {
      tag: 'areola slip',
      class_id: 19,
      ja: '乳輪チラリ',
      en: 'AreolaSlip',
      zh: '乳晕',
    },
    {
      tag: 'lifted by self',
      class_id: 19,
      ja: 'たくし上げ',
      en: 'LiftedBySelf',
      zh: '搜集',
    },
    {
      tag: 'pussy juice',
      class_id: 19,
      ja: '愛液',
      en: 'PussyJuice',
      zh: '爱果汁',
    },
    {
      tag: 'after sex',
      class_id: 19,
      ja: '事後、射精直後',
      en: 'AfterSex',
      zh: '之后，射精后立即',
    },
    {
      tag: 'breast grab',
      class_id: 19,
      ja: '乳揉み',
      en: 'BreastGrab',
      zh: '疯狂',
    },
    {
      tag: 'peeing',
      class_id: 19,
      ja: 'おしっこ',
      en: 'Peeing',
      zh: '撒尿',
    },
    {
      tag: 'futanari',
      class_id: 19,
      ja: 'フタナリ',
      en: 'Futanari',
      zh: 'Futanari',
    },
    {
      tag: 'precum',
      class_id: 19,
      ja: 'ガマン汁',
      en: 'Precum',
      zh: 'Gaman Juice',
    },
    {
      tag: 'pubic hair',
      class_id: 19,
      ja: '陰毛',
      en: 'PubicHair',
      zh: '阴毛',
    },
    {
      tag: 'hanging breasts',
      class_id: 19,
      ja: '垂れ乳',
      en: 'HangingBreasts',
      zh: '晃来晃去',
    },
  ],
  classification: [
    {
      id: 0,
      NSFW: 0,
      ja: '画風',
      en: 'Artistic style',
      zh: '艺术风格',
    },
    {
      id: 1,
      NSFW: 0,
      ja: '視線・画角',
      en: 'Gaze / Angle',
      zh: '凝视 / 视角',
    },
    {
      id: 2,
      NSFW: 0,
      ja: '天気・時間',
      en: 'Weather / Time',
      zh: '天气 / 时区',
    },
    {
      id: 3,
      NSFW: 0,
      ja: '風景',
      en: 'Landscape',
      zh: '景观',
    },
    {
      id: 4,
      NSFW: 0,
      ja: '屋内',
      en: 'Indoor',
      zh: '室内',
    },
    {
      id: 5,
      NSFW: 0,
      ja: '屋外',
      en: 'Outdoors',
      zh: '户外',
    },
    {
      id: 6,
      NSFW: 0,
      ja: 'キャラ全般',
      en: 'General characters',
      zh: '人物',
    },
    {
      id: 7,
      NSFW: 0,
      ja: '表情',
      en: 'Expression',
      zh: '表达',
    },
    {
      id: 8,
      NSFW: 0,
      ja: '髪型',
      en: 'Hairstyle',
      zh: '发型',
    },
    {
      id: 9,
      NSFW: 0,
      ja: '髪色',
      en: 'Hair color',
      zh: '发色',
    },
    {
      id: 10,
      NSFW: 0,
      ja: '目の色',
      en: 'Eye color',
      zh: '眼睛',
    },
    {
      id: 11,
      NSFW: 0,
      ja: '服装',
      en: 'Clothes',
      zh: '衣服',
    },
    {
      id: 12,
      NSFW: 0,
      ja: '装飾',
      en: 'Decoration',
      zh: '装饰',
    },
    {
      id: 13,
      NSFW: 0,
      ja: '胸囲',
      en: 'Chest',
      zh: '胸部',
    },
    {
      id: 14,
      NSFW: 0,
      ja: '身体',
      en: 'Body',
      zh: '身体',
    },
    {
      id: 15,
      NSFW: 0,
      ja: 'ポーズ',
      en: 'Pose',
      zh: '暂停',
    },
    {
      id: 16,
      NSFW: 1,
      ja: '性行為 (R18)',
      en: 'Sex (NSFW)',
      zh: '性交 (NSFW)',
    },
    {
      id: 17,
      NSFW: 1,
      ja: '服装 (R18)',
      en: 'Clothing (NSFW)',
      zh: '服装 (NSFW)',
    },
    {
      id: 18,
      NSFW: 1,
      ja: '射精 (R18)',
      en: 'Ejaculation (NSFW)',
      zh: '射精 (NSFW)',
    },
    {
      id: 19,
      NSFW: 1,
      ja: 'その他 (R18)',
      en: 'Others (NSFW)',
      zh: '其他 (NSFW)',
    },
  ],
}
