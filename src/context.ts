export type TagGroup = {
  name: {
    ja: string
    en: string
    zh: string
  }
  nsfw: boolean
  tags: Tag[]
}

type Tag = {
  tag: string
  name: {
    ja: string
    en: string
    zh: string
  }
}

export const options: TagGroup[] = [
  {
    name: {
      ja: '品質',
      en: 'Quality',
      zh: '质量',
    },
    nsfw: false,
    tags: [
      {
        tag: 'masterpiece',
        name: {
          ja: '傑作',
          en: 'Masterpiece',
          zh: '杰作',
        },
      },
      {
        tag: 'best quality',
        name: {
          ja: '最高品質',
          en: 'Best Quality',
          zh: '最高品质',
        },
      },
      {
        tag: 'high quality',
        name: {
          ja: '高品質',
          en: 'High Quality',
          zh: '高品质',
        },
      },
      {
        tag: 'detailed',
        name: {
          ja: '細部に描写',
          en: 'Detailed',
          zh: '细节',
        },
      },
      {
        tag: 'ultra detailed',
        name: {
          ja: '非常に詳細な描写',
          en: 'Ultra Detailed',
          zh: '超详细',
        },
      },
      {
        tag: 'hyper detailed',
        name: {
          ja: '超詳細な描写',
          en: 'Hyper Detailed',
          zh: '超级详细',
        },
      },
      {
        tag: 'insanely detailed',
        name: {
          ja: '極度に精密',
          en: 'Insanely Detailed',
          zh: '极其详细',
        },
      },
      {
        tag: 'exquisite',
        name: {
          ja: '絶妙な',
          en: 'Exquisite',
          zh: '精致的',
        },
      },
      {
        tag: 'beautiful',
        name: {
          ja: '美しい',
          en: 'Beautiful',
          zh: '美丽的',
        },
      },
    ],
  },
  {
    name: {
      ja: '画質',
      en: 'Resolution',
      zh: '分辨率',
    },
    nsfw: false,
    tags: [
      {
        tag: 'FHD',
        name: {
          ja: 'フルHD',
          en: 'FHD',
          zh: '全高清',
        },
      },
      {
        tag: 'Full-HD',
        name: {
          ja: 'フルHD',
          en: 'Full-HD',
          zh: '全高清',
        },
      },
      {
        tag: '4K',
        name: {
          ja: '4K',
          en: '4K',
          zh: '4K',
        },
      },
      {
        tag: '8K',
        name: {
          ja: '8K',
          en: '8K',
          zh: '8K',
        },
      },
      {
        tag: '16K',
        name: {
          ja: '16K',
          en: '16K',
          zh: '16K',
        },
      },
      {
        tag: 'highres',
        name: {
          ja: '高解像度',
          en: 'High Resolution',
          zh: '高分辨率',
        },
      },
      {
        tag: 'absurdres',
        name: {
          ja: '超高解像度',
          en: 'Ultra High Resolution',
          zh: '超高分辨率',
        },
      },
    ],
  },
  {
    name: {
      ja: '画風',
      en: 'Artistic style',
      zh: '艺术风格',
    },
    nsfw: false,
    tags: [
      {
        tag: 'pixel art',
        name: {
          ja: 'ピクセルアート',
          en: 'PixelArt',
          zh: '点阵图',
        },
      },
      {
        tag: 'sketch',
        name: {
          ja: 'スケッチ',
          en: 'Sketch',
          zh: '素描',
        },
      },
      {
        tag: 'watercolor',
        name: {
          ja: '水彩',
          en: 'Watercolor',
          zh: '水彩',
        },
      },
      {
        tag: '1990s style',
        name: {
          ja: '1990s',
          en: '1990SStyle',
          zh: '1990年代',
        },
      },
      {
        tag: 'retro artstyle',
        name: {
          ja: 'レトロ',
          en: 'RetroArtstyle',
          zh: '复古的',
        },
      },
      {
        tag: 'Chinese ink painting',
        name: {
          ja: '水墨画',
          en: 'ChineseInkPainting',
          zh: '墨水绘画',
        },
      },
      {
        tag: 'oil painting',
        name: {
          ja: '油絵',
          en: 'OilPainting',
          zh: '油',
        },
      },
      {
        tag: 'colored pencil painting',
        name: {
          ja: '色鉛筆',
          en: 'ColoredPencilPainting',
          zh: '彩色铅笔',
        },
      },
      {
        tag: 'pastel painting',
        name: {
          ja: 'パステル',
          en: 'PastelPainting',
          zh: '柔和',
        },
      },
    ],
  },
  {
    name: {
      ja: '視線・画角',
      en: 'Gaze / Angle',
      zh: '凝视 / 视角',
    },
    nsfw: false,
    tags: [
      {
        tag: 'pov',
        name: {
          ja: '正面',
          en: 'Pov',
          zh: '正面',
        },
      },
      {
        tag: 'from side',
        name: {
          ja: '横から',
          en: 'FromSide',
          zh: '从侧面',
        },
      },
      {
        tag: 'from behind',
        name: {
          ja: '後ろから',
          en: 'FromBehind',
          zh: '从后面',
        },
      },
      {
        tag: 'from above',
        name: {
          ja: '上から',
          en: 'FromAbove',
          zh: '从上面',
        },
      },
      {
        tag: 'from below',
        name: {
          ja: '下から',
          en: 'FromBelow',
          zh: '从下面',
        },
      },
      {
        tag: 'fisheye',
        name: {
          ja: '魚眼',
          en: 'Fisheye',
          zh: '鱼眼',
        },
      },
    ],
  },
  {
    name: {
      ja: '天気・時間',
      en: 'Weather / Time',
      zh: '天气 / 时区',
    },
    nsfw: false,
    tags: [
      {
        tag: 'day',
        name: {
          ja: '日中',
          en: 'Day',
          zh: '白天',
        },
      },
      {
        tag: 'dusk',
        name: {
          ja: '夕方',
          en: 'Dusk',
          zh: '黄昏',
        },
      },
      {
        tag: 'night',
        name: {
          ja: '夜',
          en: 'Night',
          zh: '夜晚',
        },
      },
      {
        tag: 'sun',
        name: {
          ja: '晴れ',
          en: 'Sun',
          zh: '太阳',
        },
      },
      {
        tag: 'overcast',
        name: {
          ja: 'くもり',
          en: 'Overcast',
          zh: '多云',
        },
      },
      {
        tag: 'rain',
        name: {
          ja: '雨',
          en: 'Rain',
          zh: '雨',
        },
      },
    ],
  },
  {
    name: {
      ja: '風景',
      en: 'Landscape',
      zh: '景观',
    },
    nsfw: false,
    tags: [
      {
        tag: 'cityscape',
        name: {
          ja: '街並み',
          en: 'Cityscape',
          zh: '街道',
        },
      },
      {
        tag: 'landscape',
        name: {
          ja: '田舎の風景',
          en: 'Landscape',
          zh: '风景',
        },
      },
      {
        tag: 'shore',
        name: {
          ja: '海岸',
          en: 'Shore',
          zh: '海岸',
        },
      },
      {
        tag: 'forest',
        name: {
          ja: '森林',
          en: 'Forest',
          zh: '森林',
        },
      },
      {
        tag: 'mountain',
        name: {
          ja: '山',
          en: 'Mountain',
          zh: '山',
        },
      },
      {
        tag: 'nature',
        name: {
          ja: '自然',
          en: 'Nature',
          zh: '自然',
        },
      },
      {
        tag: 'water',
        name: {
          ja: '水',
          en: 'Water',
          zh: '水',
        },
      },
      {
        tag: 'lake',
        name: {
          ja: '湖',
          en: 'Lake',
          zh: '湖',
        },
      },
      {
        tag: 'ocean',
        name: {
          ja: '海洋',
          en: 'Ocean',
          zh: '海洋',
        },
      },
      {
        tag: 'river',
        name: {
          ja: '川',
          en: 'River',
          zh: '河',
        },
      },
      {
        tag: 'waterfall',
        name: {
          ja: '滝',
          en: 'Waterfall',
          zh: '瀑布',
        },
      },
      {
        tag: 'bridge',
        name: {
          ja: '橋',
          en: 'Bridge',
          zh: '桥',
        },
      },
      {
        tag: 'city',
        name: {
          ja: '街',
          en: 'City',
          zh: '镇',
        },
      },
      {
        tag: 'field',
        name: {
          ja: '野原',
          en: 'Field',
          zh: '场地',
        },
      },
      {
        tag: 'pond',
        name: {
          ja: '池',
          en: 'Pond',
          zh: '池塘',
        },
      },
      {
        tag: 'windmill',
        name: {
          ja: '風車',
          en: 'Windmill',
          zh: '风车',
        },
      },
    ],
  },
  {
    name: {
      ja: '屋内',
      en: 'Indoor',
      zh: '室内',
    },
    nsfw: false,
    tags: [
      {
        tag: 'indoors',
        name: {
          ja: '屋内共通',
          en: 'Indoors',
          zh: '室内常见',
        },
      },
      {
        tag: 'bathroom',
        name: {
          ja: '風呂',
          en: 'Bathroom',
          zh: '洗澡',
        },
      },
      {
        tag: 'bathtub',
        name: {
          ja: 'バスタブ',
          en: 'Bathtub',
          zh: '浴缸',
        },
      },
      {
        tag: 'shower',
        name: {
          ja: 'シャワー',
          en: 'Shower',
          zh: '淋浴',
        },
      },
      {
        tag: 'bedroom',
        name: {
          ja: '寝室',
          en: 'Bedroom',
          zh: '卧室',
        },
      },
      {
        tag: 'classroom',
        name: {
          ja: 'クラスルーム',
          en: 'Classroom',
          zh: '课堂',
        },
      },
      {
        tag: 'locker room',
        name: {
          ja: 'ロッカールーム',
          en: 'LockerRoom',
          zh: '更衣室',
        },
      },
      {
        tag: 'kitchen',
        name: {
          ja: 'キッチン',
          en: 'Kitchen',
          zh: '厨房',
        },
      },
      {
        tag: 'library',
        name: {
          ja: '図書室',
          en: 'Library',
          zh: '图书馆',
        },
      },
      {
        tag: 'cafe',
        name: {
          ja: 'カフェ',
          en: 'Cafe',
          zh: '咖啡店',
        },
      },
      {
        tag: 'prison',
        name: {
          ja: '刑務所',
          en: 'Prison',
          zh: '监狱',
        },
      },
    ],
  },
  {
    name: {
      ja: '屋外',
      en: 'Outdoors',
      zh: '户外',
    },
    nsfw: false,
    tags: [
      {
        tag: 'outdoors',
        name: {
          ja: '屋外共通',
          en: 'Outdoors',
          zh: '常见的',
        },
      },
      {
        tag: 'rooftop',
        name: {
          ja: '屋上',
          en: 'Rooftop',
          zh: '屋顶',
        },
      },
      {
        tag: 'school',
        name: {
          ja: '学校',
          en: 'School',
          zh: '学校',
        },
      },
      {
        tag: 'beach',
        name: {
          ja: 'ビーチ',
          en: 'Beach',
          zh: '海滩',
        },
      },
      {
        tag: 'pool',
        name: {
          ja: 'プール',
          en: 'Pool',
          zh: '水池',
        },
      },
      {
        tag: 'poolside',
        name: {
          ja: 'プールサイド',
          en: 'Poolside',
          zh: '池畔',
        },
      },
      {
        tag: 'park',
        name: {
          ja: '公園',
          en: 'Park',
          zh: '公园',
        },
      },
      {
        tag: 'shrine',
        name: {
          ja: '神社',
          en: 'Shrine',
          zh: '神社',
        },
      },
      {
        tag: 'train station',
        name: {
          ja: '駅',
          en: 'TrainStation',
          zh: '车站',
        },
      },
      {
        tag: 'ferris wheel',
        name: {
          ja: '観覧車',
          en: 'FerrisWheel',
          zh: '摩天轮',
        },
      },
      {
        tag: 'crosswalk',
        name: {
          ja: '横断歩道',
          en: 'Crosswalk',
          zh: '行人穿越',
        },
      },
      {
        tag: 'bus stop',
        name: {
          ja: 'バス停',
          en: 'BusStop',
          zh: '公车站',
        },
      },
      {
        tag: 'cafe',
        name: {
          ja: 'カフェ',
          en: 'Cafe',
          zh: '咖啡店',
        },
      },
      {
        tag: 'hospital',
        name: {
          ja: '病院',
          en: 'Hospital',
          zh: '医院',
        },
      },
      {
        tag: 'onsen',
        name: {
          ja: '温泉',
          en: 'Onsen',
          zh: '温泉',
        },
      },
      {
        tag: 'road',
        name: {
          ja: '道',
          en: 'Road',
          zh: '路',
        },
      },
      {
        tag: 'street',
        name: {
          ja: 'ストリート',
          en: 'Street',
          zh: '街道',
        },
      },
      {
        tag: 'ruins',
        name: {
          ja: '遺跡',
          en: 'Ruins',
          zh: '遗迹',
        },
      },
      {
        tag: 'castle',
        name: {
          ja: '城',
          en: 'Castle',
          zh: '城堡',
        },
      },
      {
        tag: 'graveyard',
        name: {
          ja: '墓地',
          en: 'Graveyard',
          zh: '墓地',
        },
      },
      {
        tag: 'prison',
        name: {
          ja: '刑務所',
          en: 'Prison',
          zh: '监狱',
        },
      },
    ],
  },
  {
    name: {
      ja: 'キャラ全般',
      en: 'General characters',
      zh: '人物',
    },
    nsfw: false,
    tags: [
      {
        tag: '1girl',
        name: {
          ja: '1人の女の子',
          en: '1Girl',
          zh: '一个女孩',
        },
      },
      {
        tag: '2girls',
        name: {
          ja: '2人の女の子',
          en: '2Girls',
          zh: '两个女孩',
        },
      },
      {
        tag: '1boy',
        name: {
          ja: '1人の男の子',
          en: '1Boy',
          zh: '一个男孩',
        },
      },
      {
        tag: '2boys',
        name: {
          ja: '2人の男の子',
          en: '2Boys',
          zh: '两个男孩',
        },
      },
      {
        tag: 'solo',
        name: {
          ja: 'ソロ',
          en: 'Solo',
          zh: '独奏',
        },
      },
      {
        tag: 'multiple girls',
        name: {
          ja: '複数',
          en: 'MultipleGirls',
          zh: '多',
        },
      },
      {
        tag: '6+girls',
        name: {
          ja: '6人以上の女の子',
          en: '6+Girls',
          zh: '6个以上的女孩',
        },
      },
      {
        tag: 'twins',
        name: {
          ja: 'ツインズ',
          en: 'Twins',
          zh: '双胞胎',
        },
      },
      {
        tag: 'couple',
        name: {
          ja: 'カップル',
          en: 'Couple',
          zh: '情侣',
        },
      },
      {
        tag: 'yuri',
        name: {
          ja: '百合',
          en: 'Yuri',
          zh: '百合',
        },
      },
      {
        tag: 'group shot',
        name: {
          ja: '集合写真',
          en: 'Group Shot',
          zh: '集体照',
        },
      },
      {
        tag: 'no humans',
        name: {
          ja: '人物なし',
          en: 'No Humans',
          zh: '无人物',
        },
      },
    ],
  },
  {
    name: {
      ja: '表情',
      en: 'Expression',
      zh: '表达',
    },
    nsfw: false,
    tags: [
      {
        tag: 'smile',
        name: {
          ja: '笑顔',
          en: 'Smile',
          zh: '微笑',
        },
      },
      {
        tag: 'crying',
        name: {
          ja: '泣く',
          en: 'Crying',
          zh: '哭',
        },
      },
      {
        tag: 'sad',
        name: {
          ja: '悲しみ',
          en: 'Sad',
          zh: '悲伤的',
        },
      },
      {
        tag: 'shy',
        name: {
          ja: '照れ',
          en: 'Shy',
          zh: '羞吗',
        },
      },
      {
        tag: 'embarrassed',
        name: {
          ja: '羞恥',
          en: 'Embarrassed',
          zh: '害羞',
        },
      },
      {
        tag: 'blush',
        name: {
          ja: '頬染め',
          en: 'Blush',
          zh: '脸红',
        },
      },
      {
        tag: 'angry',
        name: {
          ja: '怒り',
          en: 'Angry',
          zh: '生气',
        },
      },
      {
        tag: 'scared',
        name: {
          ja: '怯え',
          en: 'Scared',
          zh: '受惊',
        },
      },
      {
        tag: 'seductive smile',
        name: {
          ja: '誘惑（蠱惑）',
          en: 'SeductiveSmile',
          zh: '诱惑笑',
        },
      },
    ],
  },
  {
    name: {
      ja: '髪型',
      en: 'Hairstyle',
      zh: '发型',
    },
    nsfw: false,
    tags: [
      {
        tag: 'long hair',
        name: {
          ja: 'ロングヘア',
          en: 'LongHair',
          zh: '长发',
        },
      },
      {
        tag: 'short hair',
        name: {
          ja: 'ショートヘア',
          en: 'ShortHair',
          zh: '短发',
        },
      },
      {
        tag: 'medium hair',
        name: {
          ja: 'セミロング',
          en: 'MediumHair',
          zh: '中发',
        },
      },
      {
        tag: 'twintails',
        name: {
          ja: 'ツインテール',
          en: 'Twintails',
          zh: '双马尾',
        },
      },
      {
        tag: 'ponytail',
        name: {
          ja: 'ポニーテール',
          en: 'Ponytail',
          zh: '马尾辫',
        },
      },
      {
        tag: 'side ponytail',
        name: {
          ja: 'サイドテール',
          en: 'SidePonytail',
          zh: '侧尾',
        },
      },
      {
        tag: 'two side up',
        name: {
          ja: 'ツーサイドアップ',
          en: 'TwoSideUp',
          zh: '两个旁边',
        },
      },
      {
        tag: 'bob cut',
        name: {
          ja: 'ボブ',
          en: 'BobCut',
          zh: '妹妹切',
        },
      },
      {
        tag: 'ahoge',
        name: {
          ja: 'アホ毛',
          en: 'Ahoge',
          zh: '呆毛',
        },
      },
      {
        tag: 'messy hair',
        name: {
          ja: 'くせっ毛（モジャ）',
          en: 'MessyHair',
          zh: '凌乱发型',
        },
      },
      {
        tag: 'wavy hair',
        name: {
          ja: 'ウェーブヘア',
          en: 'WavyHair',
          zh: '波浪头',
        },
      },
      {
        tag: 'hair over one eye',
        name: {
          ja: '片目隠れ',
          en: 'HairOverOneEye',
          zh: '一只眼睛上的头发',
        },
      },
      {
        tag: 'hair over eyes',
        name: {
          ja: '目にかかった前髪',
          en: 'HairOverEyes',
          zh: '头发遮住眼睛',
        },
      },
      {
        tag: 'braid',
        name: {
          ja: '三つ編み',
          en: 'Braid',
          zh: '辫子',
        },
      },
      {
        tag: 'french braid',
        name: {
          ja: 'フランスの三つ編み',
          en: 'FrenchBraid',
          zh: '法式辫子',
        },
      },
      {
        tag: 'hair bun',
        name: {
          ja: 'おだんごヘア',
          en: 'HairBun',
          zh: '发髻',
        },
      },
      {
        tag: 'blunt bangs',
        name: {
          ja: 'ぱっつん',
          en: 'BluntBangs',
          zh: '齐刘海',
        },
      },
      {
        tag: 'crossed bangs',
        name: {
          ja: '目のところでばってんの毛',
          en: 'CrossedBangs',
          zh: '眼睛的头发',
        },
      },
      {
        tag: 'hair between eyes',
        name: {
          ja: '目の間の髪',
          en: 'HairBetweenEyes',
          zh: '眼睛之间的头发',
        },
      },
    ],
  },
  {
    name: {
      ja: '髪色',
      en: 'Hair color',
      zh: '发色',
    },
    nsfw: false,
    tags: [
      {
        tag: 'black hair',
        name: {
          ja: '黒髪',
          en: 'BlackHair',
          zh: '黑色',
        },
      },
      {
        tag: 'brown hair',
        name: {
          ja: '茶髪',
          en: 'BrownHair',
          zh: '棕色',
        },
      },
      {
        tag: 'blonde hair',
        name: {
          ja: '金髪',
          en: 'BlondeHair',
          zh: '金色',
        },
      },
      {
        tag: 'pink hair',
        name: {
          ja: 'ピンク髪',
          en: 'PinkHair',
          zh: '粉红',
        },
      },
      {
        tag: 'red hair',
        name: {
          ja: '赤髪',
          en: 'RedHair',
          zh: '红色',
        },
      },
      {
        tag: 'green hair',
        name: {
          ja: '緑髪',
          en: 'GreenHair',
          zh: '绿色',
        },
      },
      {
        tag: 'blue hair',
        name: {
          ja: '青髪',
          en: 'BlueHair',
          zh: '蓝色',
        },
      },
      {
        tag: 'aqua hair',
        name: {
          ja: '青緑髪（アクア）',
          en: 'AquaHair',
          zh: '水色',
        },
      },
      {
        tag: 'grey hair',
        name: {
          ja: '銀髪',
          en: 'GreyHair',
          zh: '灰色',
        },
      },
      {
        tag: 'purple hair',
        name: {
          ja: '紫髪',
          en: 'PurpleHair',
          zh: '紫色',
        },
      },
      {
        tag: 'white hair',
        name: {
          ja: '白髮',
          en: 'WhiteHair',
          zh: '白色',
        },
      },
    ],
  },
  {
    name: {
      ja: '目の色',
      en: 'Eye color',
      zh: '眼睛',
    },
    nsfw: false,
    tags: [
      {
        tag: 'black eyes',
        name: {
          ja: '黒目',
          en: 'BlackEyes',
          zh: '黑色',
        },
      },
      {
        tag: 'brown eyes',
        name: {
          ja: '茶目',
          en: 'BrownEyes',
          zh: '棕色',
        },
      },
      {
        tag: 'yellow eyes',
        name: {
          ja: '黄眼',
          en: 'YellowEyes',
          zh: '黄色',
        },
      },
      {
        tag: 'pink eyes',
        name: {
          ja: 'ピンク目',
          en: 'PinkEyes',
          zh: '粉红',
        },
      },
      {
        tag: 'red eyes',
        name: {
          ja: '赤目',
          en: 'RedEyes',
          zh: '红色',
        },
      },
      {
        tag: 'green eyes',
        name: {
          ja: '緑目',
          en: 'GreenEyes',
          zh: '绿色',
        },
      },
      {
        tag: 'blue eyes',
        name: {
          ja: '青眼',
          en: 'BlueEyes',
          zh: '蓝色',
        },
      },
      {
        tag: 'aqua eyes',
        name: {
          ja: '青緑眼',
          en: 'AquaEyes',
          zh: '水蓝色',
        },
      },
      {
        tag: 'grey eyes',
        name: {
          ja: '銀目',
          en: 'GreyEyes',
          zh: '灰色',
        },
      },
      {
        tag: 'purple eyes',
        name: {
          ja: '紫目',
          en: 'PurpleEyes',
          zh: '紫色',
        },
      },
      {
        tag: 'white eyes',
        name: {
          ja: '白眼',
          en: 'WhiteEyes',
          zh: '白色',
        },
      },
    ],
  },
  {
    name: {
      ja: '服装',
      en: 'Clothes',
      zh: '衣服',
    },
    nsfw: false,
    tags: [
      {
        tag: 'shirt',
        name: {
          ja: 'シャツ',
          en: 'Shirt',
          zh: '衬衫',
        },
      },
      {
        tag: 't-shirt',
        name: {
          ja: 'Tシャツ',
          en: 'T-Shirt',
          zh: '汗衫',
        },
      },
      {
        tag: 'collared shirt',
        name: {
          ja: '襟付きのシャツ',
          en: 'CollaredShirt',
          zh: '有领衬衣',
        },
      },
      {
        tag: 'sleeveless shirt',
        name: {
          ja: 'ノースリーブシャツ',
          en: 'SleevelessShirt',
          zh: '无袖上衣',
        },
      },
      {
        tag: 'crop top',
        name: {
          ja: 'クロップトップ',
          en: 'CropTop',
          zh: '漏脐装',
        },
      },
      {
        tag: 'dress shirt',
        name: {
          ja: 'ドレスシャツ',
          en: 'DressShirt',
          zh: '礼服衬衫',
        },
      },
      {
        tag: 'dress',
        name: {
          ja: 'ドレス',
          en: 'Dress',
          zh: '裙子',
        },
      },
      {
        tag: 'blouse',
        name: {
          ja: 'ブラウス',
          en: 'Blouse',
          zh: '女式衬衫',
        },
      },
      {
        tag: 'camisole',
        name: {
          ja: 'キャミソール',
          en: 'Camisole',
          zh: '吊带',
        },
      },
      {
        tag: 'jacket',
        name: {
          ja: 'ジャケット',
          en: 'Jacket',
          zh: '夹克',
        },
      },
      {
        tag: 'vest',
        name: {
          ja: 'ベスト',
          en: 'Vest',
          zh: '背心',
        },
      },
      {
        tag: 'blazer',
        name: {
          ja: 'ブレザー',
          en: 'Blazer',
          zh: '西装外套',
        },
      },
      {
        tag: 'sweater vest',
        name: {
          ja: 'セーターベスト',
          en: 'SweaterVest',
          zh: '毛衣背心',
        },
      },
      {
        tag: 'turtleneck',
        name: {
          ja: 'タートルネック',
          en: 'Turtleneck',
          zh: '高领',
        },
      },
      {
        tag: 'sweater',
        name: {
          ja: 'セーター',
          en: 'Sweater',
          zh: '毛衣',
        },
      },
      {
        tag: 'coat',
        name: {
          ja: 'コート',
          en: 'Coat',
          zh: '外套',
        },
      },
      {
        tag: 'hoodie',
        name: {
          ja: 'パーカー',
          en: 'Hoodie',
          zh: '连帽衫，卫衣',
        },
      },
      {
        tag: 'cardigan',
        name: {
          ja: 'カーディガン',
          en: 'Cardigan',
          zh: '羊毛衫',
        },
      },
      {
        tag: 'tank top',
        name: {
          ja: 'タンクトップ',
          en: 'TankTop',
          zh: '女用背心',
        },
      },
    ],
  },
  {
    name: {
      ja: '装飾',
      en: 'Decoration',
      zh: '装饰',
    },
    nsfw: false,
    tags: [
      {
        tag: 'hat',
        name: {
          ja: '帽子',
          en: 'Hat',
          zh: '帽子',
        },
      },
      {
        tag: 'mask',
        name: {
          ja: 'マスク',
          en: 'Mask',
          zh: '面具',
        },
      },
      {
        tag: 'gloves',
        name: {
          ja: '手袋',
          en: 'Gloves',
          zh: '手套',
        },
      },
      {
        tag: 'choker',
        name: {
          ja: 'チョーカー',
          en: 'Choker',
          zh: 'choker',
        },
      },
      {
        tag: 'ribbon',
        name: {
          ja: 'リボン',
          en: 'Ribbon',
          zh: '丝带',
        },
      },
    ],
  },
  {
    name: {
      ja: '胸囲',
      en: 'Chest',
      zh: '胸部',
    },
    nsfw: false,
    tags: [
      {
        tag: 'flat chest',
        name: {
          ja: '無乳',
          en: 'FlatChest',
          zh: '極小',
        },
      },
      {
        tag: 'small breasts',
        name: {
          ja: '貧乳',
          en: 'SmallBreasts',
          zh: '小',
        },
      },
      {
        tag: 'large breasts',
        name: {
          ja: '巨乳',
          en: 'LargeBreasts',
          zh: '大',
        },
      },
      {
        tag: 'huge breasts',
        name: {
          ja: '爆乳',
          en: 'HugeBreasts',
          zh: '超大',
        },
      },
    ],
  },
  {
    name: {
      ja: '身体',
      en: 'Body',
      zh: '身体',
    },
    nsfw: false,
    tags: [
      {
        tag: 'mole',
        name: {
          ja: 'ほくろ',
          en: 'Mole',
          zh: '痣',
        },
      },
      {
        tag: 'mole under eye',
        name: {
          ja: '泣きぼくろ',
          en: 'MoleUnderEye',
          zh: '泪痣',
        },
      },
      {
        tag: 'dark skin',
        name: {
          ja: '褐色',
          en: 'DarkSkin',
          zh: '棕色的',
        },
      },
      {
        tag: 'tan',
        name: {
          ja: '日焼け',
          en: 'Tan',
          zh: '晒伤',
        },
      },
      {
        tag: 'cat ears',
        name: {
          ja: '猫耳',
          en: 'CatEars',
          zh: '猫耳',
        },
      },
      {
        tag: 'cat tail',
        name: {
          ja: '猫しっぽ',
          en: 'CatTail',
          zh: '猫的尾巴',
        },
      },
      {
        tag: 'nail polish',
        name: {
          ja: 'マニキュア',
          en: 'NailPolish',
          zh: '修指甲',
        },
      },
    ],
  },
  {
    name: {
      ja: 'ポーズ',
      en: 'Pose',
      zh: '暂停',
    },
    nsfw: false,
    tags: [
      {
        tag: 'standing',
        name: {
          ja: '立ち姿',
          en: 'Standing',
          zh: '站立外观',
        },
      },
      {
        tag: 'lying',
        name: {
          ja: '寝そべり',
          en: 'Lying',
          zh: '躺着',
        },
      },
      {
        tag: 'on back',
        name: {
          ja: '仰向け',
          en: 'OnBack',
          zh: '躺在他的背上',
        },
      },
      {
        tag: 'on stomach',
        name: {
          ja: 'うつ伏せ',
          en: 'OnStomach',
          zh: '趴着',
        },
      },
      {
        tag: 'all fours',
        name: {
          ja: '四つん這い',
          en: 'AllFours',
          zh: '四肢趴地',
        },
      },
      {
        tag: 'running',
        name: {
          ja: '走っている姿',
          en: 'Running',
          zh: '跑步图',
        },
      },
      {
        tag: 'sitting',
        name: {
          ja: '座っている',
          en: 'Sitting',
          zh: '坐',
        },
      },
      {
        tag: 'spread legs',
        name: {
          ja: '開脚',
          en: 'SpreadLegs',
          zh: '開脚',
        },
      },
      {
        tag: 'kneeling',
        name: {
          ja: '膝立ち',
          en: 'Kneeling',
          zh: '下跪',
        },
      },
      {
        tag: 'crossed legs',
        name: {
          ja: '足組み',
          en: 'CrossedLegs',
          zh: '二郎腿',
        },
      },
      {
        tag: 'hugging own legs',
        name: {
          ja: '体育座り',
          en: 'HuggingOwnLegs',
          zh: '体育坐着',
        },
      },
      {
        tag: 'seiza',
        name: {
          ja: '正座',
          en: 'Seiza',
          zh: '正坐',
        },
      },
      {
        tag: 'wariza',
        name: {
          ja: '女の子座り',
          en: 'Wariza',
          zh: '坐在女孩身上',
        },
      },
      {
        tag: 'closed mouth',
        name: {
          ja: '閉口',
          en: 'ClosedMouth',
          zh: '闭嘴',
        },
      },
      {
        tag: 'open mouse',
        name: {
          ja: '開口',
          en: 'OpenMouse',
          zh: '开场',
        },
      },
      {
        tag: 'tongue out',
        name: {
          ja: '舌出し',
          en: 'TongueOut',
          zh: '吐舌',
        },
      },
      {
        tag: 'hand between legs',
        name: {
          ja: '手を足にかける',
          en: 'HandBetweenLegs',
          zh: '把手放在脚上',
        },
      },
    ],
  },
  {
    name: {
      ja: '性行為 (R18)',
      en: 'Sex (NSFW)',
      zh: '性交 (NSFW)',
    },
    nsfw: true,
    tags: [
      {
        tag: 'nsfw',
        name: {
          ja: 'NSFW',
          en: 'NSFW',
          zh: 'NSFW',
        },
      },
      {
        tag: 'sex',
        name: {
          ja: 'セックス',
          en: 'Sex',
          zh: '做爱',
        },
      },
      {
        tag: 'straddling',
        name: {
          ja: '馬乗り、騎乗位',
          en: 'Straddling',
          zh: '跨坐',
        },
      },
      {
        tag: 'sex from behind',
        name: {
          ja: 'バック',
          en: 'SexFromBehind',
          zh: '背部',
        },
      },
      {
        tag: 'suspended congress',
        name: {
          ja: '駅弁',
          en: 'SuspendedCongress',
          zh: '车站午餐',
        },
      },
      {
        tag: 'cowgirl position',
        name: {
          ja: '騎乗位',
          en: 'CowgirlPosition',
          zh: '女牛仔',
        },
      },
      {
        tag: 'reverse cowgirl position',
        name: {
          ja: '背面騎乗位',
          en: 'ReverseCowgirlPosition',
          zh: '后女牛仔',
        },
      },
      {
        tag: 'missionary',
        name: {
          ja: '正常位',
          en: 'Missionary',
          zh: '传教士职位',
        },
      },
      {
        tag: 'clothing aside',
        name: {
          ja: 'ずらし挿入',
          en: 'ClothingAside',
          zh: '衣服放一旁',
        },
      },
    ],
  },
  {
    name: {
      ja: '射精 (R18)',
      en: 'Ejaculation (NSFW)',
      zh: '射精 (NSFW)',
    },
    nsfw: true,
    tags: [
      {
        tag: 'ejaculation',
        name: {
          ja: '射精',
          en: 'Ejaculation',
          zh: '射精',
        },
      },
      {
        tag: 'facial',
        name: {
          ja: '顔射',
          en: 'Facial',
          zh: '面部射液',
        },
      },
      {
        tag: 'cum in mouth',
        name: {
          ja: '口内射精（ごっくん）',
          en: 'CumInMouth',
          zh: '口腔射精（Gokkun）',
        },
      },
      {
        tag: 'cum in pussy',
        name: {
          ja: '腟内射精（中出し）',
          en: 'CumInPussy',
          zh: '阴道射精（阴道暨射击）',
        },
      },
      {
        tag: 'cumdrip',
        name: {
          ja: '溢れ精液',
          en: 'Cumdrip',
          zh: '精液溢出',
        },
      },
    ],
  },
  {
    name: {
      ja: 'その他 (R18)',
      en: 'Others (NSFW)',
      zh: '其他 (NSFW)',
    },
    nsfw: true,
    tags: [
      {
        tag: 'fellatio',
        name: {
          ja: 'フェラチオ',
          en: 'Fellatio',
          zh: '口交',
        },
      },
      {
        tag: 'paizuri',
        name: {
          ja: 'パイズリ',
          en: 'Paizuri',
          zh: '他妈的',
        },
      },
      {
        tag: 'handjob',
        name: {
          ja: '手コキ',
          en: 'Handjob',
          zh: '打手枪',
        },
      },
      {
        tag: 'testicle_sucking',
        name: {
          ja: 'タマ舐め',
          en: 'Testicle_Sucking',
          zh: '舔球',
        },
      },
      {
        tag: 'breast press',
        name: {
          ja: 'あててんのよ',
          en: 'BreastPress',
          zh: '对不起',
        },
      },
      {
        tag: 'areola slip',
        name: {
          ja: '乳輪チラリ',
          en: 'AreolaSlip',
          zh: '乳晕',
        },
      },
      {
        tag: 'lifted by self',
        name: {
          ja: 'たくし上げ',
          en: 'LiftedBySelf',
          zh: '搜集',
        },
      },
      {
        tag: 'pussy juice',
        name: {
          ja: '愛液',
          en: 'PussyJuice',
          zh: '爱果汁',
        },
      },
      {
        tag: 'after sex',
        name: {
          ja: '事後、射精直後',
          en: 'AfterSex',
          zh: '之后，射精后立即',
        },
      },
      {
        tag: 'breast grab',
        name: {
          ja: '乳揉み',
          en: 'BreastGrab',
          zh: '疯狂',
        },
      },
      {
        tag: 'peeing',
        name: {
          ja: 'おしっこ',
          en: 'Peeing',
          zh: '撒尿',
        },
      },
      {
        tag: 'futanari',
        name: {
          ja: 'フタナリ',
          en: 'Futanari',
          zh: 'Futanari',
        },
      },
      {
        tag: 'precum',
        name: {
          ja: 'ガマン汁',
          en: 'Precum',
          zh: 'Gaman Juice',
        },
      },
      {
        tag: 'pubic hair',
        name: {
          ja: '陰毛',
          en: 'PubicHair',
          zh: '阴毛',
        },
      },
      {
        tag: 'hanging breasts',
        name: {
          ja: '垂れ乳',
          en: 'HangingBreasts',
          zh: '晃来晃去',
        },
      },
    ],
  },
]
