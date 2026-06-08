import { StoryDb } from '../types';

export const storyDb: StoryDb = {
  start: {
    text: "You stare at the graffiti-covered mirror in the bathroom of a dim dive bar.\n你盯着昏暗潜水酒吧洗手间里涂满涂鸦的镜子。\n\nIt's Friday night. The city is breathing heavy outside, neon bleeding through the fog. Your aesthetic is sharp, your boots are laced tight, but your fate isn't decided yet.\n这是星期五的晚上。城市在外面喘着粗气，霓虹灯穿透雾气。你的个人美学如同刀锋般锐利，靴子也系得很紧，但你的命运尚未决定。\n\nWhere do you drag yourself to tonight?\n今晚你要把自己拖向哪里？",
    choices: [
      {
        label: "The Underground Cypher - Spitting raw truth under the bridge.\n地下说唱圈 - 在桥下吐露残忍的真相。",
        next: "rapper_cypher",
        impact: { expression: 1, rebellion: 1, alienation: 0, conformity: 0 }
      },
      {
        label: "The Goth/Visual Club - Hairspray, lace, and shattered mirrors.\n哥特/视觉系俱乐部 - 发胶，蕾丝，和破碎的镜子。",
        next: "visual_kei_club",
        impact: { expression: 1, rebellion: 0, alienation: 1, conformity: 0 }
      },
      {
        label: "The Punk Dive Bar - Flannels, distortion, and pure apathy.\n朋克地下酒吧 - 法兰绒，失真效果器，和纯粹的冷漠。",
        next: "grunge_dive_bar",
        impact: { expression: 0, rebellion: 1, alienation: 1, conformity: 0 }
      },
      {
        label: "The Brutalist Night Walk - Heavy rain, cheap cigarettes, and Russian post-punk.\n野蛮主义夜行 - 大雨，廉价香烟，和俄罗斯后朋克。",
        next: "doomer_walk",
        impact: { expression: 0, rebellion: 0, alienation: 2, conformity: 1 }
      },
      {
        label: "The Cult Film Squat - Bleeding hearts watching bizarre underground films.\n邪典电影放映室 - 流血的心在观看怪诞的地下电影。",
        next: "cult_film_squat",
        impact: { expression: 1, rebellion: 0, alienation: 1, conformity: 0 }
      },
      {
        label: "The Corporate Overtime - Wash your face. Go back to the office.\n公司加班 - 洗把脸，回办公室去。",
        next: "office_overtime",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 2 }
      }
    ]
  },
  
  rapper_cypher: {
    text: "Under the overpass, a burning barrel illuminates faces twisted in concentration. The 808s rattle your teeth.\n在立交桥下，一个燃烧的铁桶照亮了因专注而扭曲的面孔。808鼓机的低频震得你牙齿发颤。\n\nA local veteran, known for destroying newcomers, stares you down and passes the mic. 'Let's see what you got.' The crowd circles up.\n一位以摧毁新人而闻名的当地老炮盯着你，把麦克风递了过来。'让我看看你有什么本事。'人群围成了一圈。",
    choices: [
      {
        label: "Spit a vicious, hyper-aggressive freestyle.\n吐出一段恶毒、极具攻击性的即兴说唱。",
        next: "rap_battle_win",
        impact: { expression: 3, rebellion: 2, alienation: 0, conformity: 0 }
      },
      {
        label: "Choke on the beat, then pull out a weapon to save face.\n被节奏卡住，然后拔出武器以挽回面子。",
        next: "rap_violence",
        impact: { expression: 0, rebellion: 3, alienation: 2, conformity: 0 }
      },
      {
        label: "Decline the battle, instead network with the producer smoking in the corner.\n拒绝Battle，转而和在角落里抽烟的制作人建立联系。",
        next: "rap_producer",
        impact: { expression: 1, rebellion: 0, alienation: 0, conformity: 2 }
      }
    ]
  },
  
  rap_battle_win: {
    text: "The crowd goes absolutely wild. You tore him to shreds.\n人群疯狂了。你把他撕成了碎片。\n\nAs the night winds down, a shady label executive in a sleek black car pulls up. 'I can make you a star,' he says, handing you a highly restrictive, predatory contract.\n随着夜深人静，一个开着黑色跑车、看起来有些可疑的唱片公司高管停了下来。'我可以让你成为明星，'他说道，并递给你一份限制极强、极具掠夺性的合同。",
    choices: [
      {
        label: "Sign the contract right there on the hood.\n直接在车前盖上签下合同。",
        next: "sell_out",
        impact: { expression: 0, rebellion: -2, alienation: 0, conformity: 4 }
      },
      {
        label: "Burn the contract with your lighter. 'I stay independent.'\n用打火机烧掉合同。'我保持独立。'",
        next: "pure_rebellion_rap",
        impact: { expression: 2, rebellion: 3, alienation: 1, conformity: -2 }
      }
    ]
  },
  
  rap_violence: {
    text: "You pull the piece. The crowd scatters instantly. Sirens wail in the distance almost immediately—someone called the cops.\n你拔出了家伙。人群瞬间散开。远处的警笛声几乎立刻响起——有人报警了。\n\nYou're standing completely alone with the heavy metal in your hand.\n你拿着那块沉重的金属站在原地，完全孤身一人。",
    choices: [
      {
        label: "Run into the dark alleyways to evade the police.\n跑进黑暗的小巷躲避警察。",
        next: "street_brawl",
        impact: { expression: 0, rebellion: 2, alienation: 2, conformity: 0 }
      },
      {
        label: "Drop the weapon and wait for the flashing lights. It's over.\n扔掉武器，等待警灯闪烁。一切都结束了。",
        next: "jail_ending",
        impact: { expression: 0, rebellion: 0, alienation: 3, conformity: 2 }
      }
    ]
  },
  
  rap_producer: {
    text: "You start producing beats in his basement. It's safe, it pays the bills, but you're a ghostwriter for untalented industry plants.\n你开始在他的地下室制作beats。这很安全，也能付得起账单，但你成了那些毫无才华的工业流水线艺人的枪手。\n\nYour creative soul is slowly eroding.\n你富有创造力的灵魂正在慢慢被侵蚀。",
    choices: [
      {
        label: "Accept this shadow life.\n接受这种幽灵般的生活。",
        next: "sell_out",
        impact: { expression: -1, rebellion: 0, alienation: 1, conformity: 3 }
      },
      {
        label: "Leak all the tracks online for free to ruin the industry.\n把所有歌曲免费泄露到网上，毁掉这个行业。",
        next: "cyber_crime",
        impact: { expression: 2, rebellion: 3, alienation: 2, conformity: 0 }
      }
    ]
  },
  
  visual_kei_club: {
    text: "The club smells like clove cigarettes and cheap perfume. Lasers cut through the thick fog. A local indie band is destroying their instruments on stage.\n俱乐部里闻起来像丁香烟和廉价的香水。激光切穿了浓雾。一支当地的独立乐队正在台上狂砸他们的乐器。\n\nThe lead singer extends a hand smeared with black nail polish toward you, offering a strange, glowing cocktail.\n主唱伸出涂着黑色指甲油的手，递给你一杯奇怪的、发光的鸡尾酒。",
    choices: [
      {
        label: "Drink it without asking what it is.\n不问这是什么，直接喝下去。",
        next: "goth_afterparty",
        impact: { expression: 0, rebellion: 1, alienation: 3, conformity: 0 }
      },
      {
        label: "Knock the drink away and steal his microphone.\n拍飞他的饮料，抢走他的麦克风。",
        next: "pure_rebellion",
        impact: { expression: 3, rebellion: 3, alienation: 1, conformity: 0 }
      },
      {
        label: "Decline politely and ask if they need a roadie/stylist.\n礼貌地拒绝，并询问他们是否需要场务/造型师。",
        next: "groupie_life",
        impact: { expression: 2, rebellion: 0, alienation: 0, conformity: 2 }
      }
    ]
  },

  goth_afterparty: {
    text: "The room spins. You find yourself in an abandoned Victorian house illuminated only by red candles. People in leather corsets and thick platform boots are passing around velvet ropes.\n房间转个不停。你发现自己身处一栋废弃的维多利亚式房屋里，只有红色的蜡烛照明。穿着皮革紧身胸衣和厚底靴子的人们在传递着天鹅绒绳索。\n\nSomeone traces your jawline with a cold ring. The boundary between pain, pleasure, and sheer nihilism begins to blur. They ask you to submit entirely to the collective.\n有人用一只冰冷的戒指顺着你的下颌线滑动。痛苦、欢愉和纯粹的虚无主义之间的界限开始模糊。他们要求你完全臣服于这个集体。",
    choices: [
      {
        label: "Give in completely. Lose yourself in the velvet dark.\n彻底屈服。在天鹅绒般的黑暗中迷失自己。",
        next: "spiral_down_hospital",
        impact: { expression: 1, rebellion: 2, alienation: 3, conformity: 0 }
      },
      {
        label: "Snap back to reality. Break the window and run.\n从现实中惊醒。打破窗户逃跑。",
        next: "doomer_walk",
        impact: { expression: 0, rebellion: 1, alienation: 1, conformity: 0 }
      }
    ]
  },
  
  grunge_dive_bar: {
    text: "The basement is flooded with pure distortion. It smells like cheap beer, bleach, and teen spirit. You see kids wearing frayed, oversized cardigans and ripped jeans. Someone in the corner is thumping aggressively, while others look completely dead inside.\n地下室充斥着纯粹的失真噪音。闻起来像廉价啤酒、漂白剂和少年的心气（Teen Spirit）。你看到孩子们穿着磨损的超大号开衫和破洞牛仔裤。角落里的人在疯狂地甩头，而其他人则看起来内心已经彻底死亡。",
    choices: [
      {
        label: "Head to the bathroom. The 'Worst Toilet in Scotland' awaits.\n走向洗手间。'苏格兰最糟糕的厕所'在等着你。（猜火车）",
        next: "trainspotting_toilet",
        impact: { expression: 0, rebellion: 2, alienation: 4, conformity: 0 }
      },
      {
        label: "Grab a smashed Fender Mustang and stage dive into the mosh pit.\n抓起一把被砸碎的Fender Mustang吉他，跳水扎进pogo人群。（Nirvana）",
        next: "nirvana_mosh",
        impact: { expression: 2, rebellion: 2, alienation: 1, conformity: 0 }
      },
      {
        label: "Follow the upbeat, snotty 3-chord punk coming from the back room.\n跟着从后厅传来的欢快、粗鲁的三和弦朋克乐走去。",
        next: "pop_punk_room",
        impact: { expression: 1, rebellion: 1, alienation: 0, conformity: 1 }
      },
      {
        label: "Walk out in disgust. This scene is totally dead.\n厌恶地走出去。这个圈子已经死了。",
        next: "redemption_path",
        impact: { expression: 0, rebellion: 0, alienation: 1, conformity: 2 }
      }
    ]
  },
  
  doomer_walk: {
    text: "You walk out of the bar and into the freezing 3 AM drizzle. You pull down your black beanie. Brutalist concrete apartments loom over you like silent giants.\n你走出酒吧，走进凌晨3点冰冷的毛毛雨中。你拉下了黑色的冷帽。野蛮主义的混凝土公寓像沉默的巨人一样耸立在你上方。\n\nYou put on your headphones. The bleak, echoing chords of Russian post-punk (Molchat Doma) fill your ears. The world is dying, the economy is rigged, and there is absolutely no hope for the future.\n你戴上耳机。俄罗斯后朋克（Molchat Doma）那荒凉、空灵的和弦萦绕耳畔。世界正在死去，经济被操纵，未来绝对没有一丝希望。",
    choices: [
      {
        label: "Keep walking endlessly, smoking cheap cigarettes until dawn.\n无止境地走下去，抽着廉价香烟直到天亮。",
        next: "endless_doomer_ending",
        impact: { expression: 0, rebellion: 0, alienation: 4, conformity: 1 }
      },
      {
        label: "Sit on a wet concrete curb and doomscroll into oblivion.\n坐在湿漉漉的混凝土路缘上，一直末日刷手机直到失去知觉。",
        next: "doomscroll_ending",
        impact: { expression: 0, rebellion: -1, alienation: 3, conformity: 2 }
      }
    ]
  },
  
  endless_doomer_ending: {
    text: "You never stop walking. You become a permanent fixture of the urban midnight landscape, a shadow moving past closed convenience stores and flickering streetlights.\n你从未停止脚步。你成了城市午夜景观中一个永久的附加物，一个经过关门的便利店和闪烁路灯的移动黑影。\n\nYou don't feel anger anymore, just a profound, empty exhaustion. You are the 'Doomer', entirely disconnected from society's expectations, drifting along an asphalt river in the dark.\n你不再感到愤怒，只是一种深刻的、空洞的疲惫。你是'末日佬'（Doomer），与社会的期望完全脱节，在黑暗中的柏油河上漂流。\n\nEvery night is exactly the same. The cold air, the glowing cherry of your cigarette, and the synth-pop soundtrack to the end of the world.\n每个夜晚都一模一样。冷空气，香烟发红的烟头，还有世界末日的合成器流行配乐。",
    choices: [
      {
        label: "ENDING: The Eternal Night Walker\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  doomscroll_ending: {
    text: "You sit under a yellow street lamp. The rain soaks through your jacket as the blue light of your cracked phone screen illuminates your hollow eyes.\n你坐在一盏黄色的路灯下。雨水浸透了你的夹克，而你碎裂的手机屏幕发出的蓝光照亮了你空洞的双眼。\n\nYou scroll through endless tragedies, manufactured rage, and meaningless memes. Your brain turns to static. The digital void completely consumes what little soul you had left.\n你刷过无尽的悲剧、被制造出来的愤怒和毫无意义的梗图。你的大脑变成了白噪音。数字虚空彻底吞噬了你仅剩的一点灵魂。\n\nHours pass. The battery finally dies. You are left alone in the dark, shivering, with absolutely nothing to say.\n几个小时过去了。电池终于没电了。你独自一人留在黑暗中，浑身发抖，绝对无话可说。",
    choices: [
      {
        label: "ENDING: Digital Oblivion\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  cult_film_squat: {
    text: "You are wedged between art students in a rotting warehouse. A bootleg VHS of Tetsuo: The Iron Man is playing. Someone passes you a sharp piece of broken glass, asking if you want to make a 'blood pact' for underground cinema.\n你被夹在一群艺术学生中间，在一个腐烂的仓库里。屏幕上正在播放着《铁男》的盗版录像带。有人递给你一块锋利的碎玻璃，问你是否愿意为了地下电影签订一个'血契'。",
    choices: [
      {
        label: "Carve their esoteric symbol into your arm.\n把他们深奥的符号刻在你的手臂上。",
        next: "spiral_down_hospital",
        impact: { expression: 1, rebellion: 2, alienation: 3, conformity: 0 }
      },
      {
        label: "Light a massive blunt and just stare at the screen.\n点燃一支大号飞行草，就这么盯着屏幕。",
        next: "bad_trip",
        impact: { expression: 1, rebellion: 1, alienation: 2, conformity: 0 }
      },
      {
        label: "Realize everyone here is insane and leave.\n意识到这里的人都疯了，转身离开。",
        next: "redemption_path",
        impact: { expression: 0, rebellion: 0, alienation: 1, conformity: 2 }
      }
    ]
  },
  
  office_overtime: {
    text: "You stare at the glowing spreadsheet. The air conditioning hums. You are completely alone on the 42nd floor. The city lights stretch out like a microchip below you.\n你盯着发光的带表。空调在嗡嗡作响。你独自一人在42楼。城市的灯光在下面延伸，就像一块微芯片。",
    choices: [
      {
        label: "Finish the deck, drink the cold coffee, and sleep under your desk.\n做完幻灯片，喝掉冷咖啡，然后睡在办公桌下。",
        next: "corporate_ending",
        impact: { expression: 0, rebellion: -2, alienation: 1, conformity: 4 }
      },
      {
        label: "Smash your monitor with a keyboard and walk out forever.\n用键盘砸碎显示器，然后永远离开。",
        next: "pure_rebellion",
        impact: { expression: 2, rebellion: 4, alienation: 1, conformity: -3 }
      },
      {
        label: "Steal the proprietary company data onto a USB drive.\n把公司的专有数据偷到一个USB驱动器上。",
        next: "cyber_crime",
        impact: { expression: 0, rebellion: 3, alienation: 2, conformity: 0 }
      }
    ]
  },
  
  cyber_crime: {
    text: "You meet a collective of hackers in a neon-lit basement covered in server racks. They know what you have.\n你在一个布满服务器机架、霓虹灯闪烁的地下室见了一群黑客组织。他们知道你手里有什么。\n\nThey offer you a choice: destroy the corporation together, or they buy the drive and you disappear.\n他们给了你一个选择：一起摧毁这家公司，或者他们买下硬盘，然后你消失。",
    choices: [
      {
        label: "Join them. Wage digital war.\n加入他们。发动数字战争。",
        next: "hacker_rebellion",
        impact: { expression: 1, rebellion: 4, alienation: 2, conformity: 0 }
      },
      {
        label: "Take the crypto and vanish into the internet.\n拿走加密货币，消失在互联网中。",
        next: "fade_away",
        impact: { expression: 0, rebellion: 0, alienation: 4, conformity: 1 }
      }
    ]
  },
  
  hacker_rebellion: {
    text: "You crash their servers. The stock plummets to zero. The glowing screens of Times Square flicker and die, replaced by your collective's digital insignia.\n你弄塌了他们的服务器。股票暴跌至零。时代广场发光的屏幕闪烁着熄灭，取而代之的是你们组织的数字徽章。\n\nYou caused a local economic collapse, but the underground praises you as a phantom god. They tell legends of your code, written in the darkest corners of the deep web, a ghost in the machine that tore down a titan.\n你引起了当地的经济崩溃，但地下组织将你奉为幻影之神。他们在暗网最黑暗的角落里讲述着你代码的传说，机器中的幽灵撕毁了巨头。\n\nYour identity is erased. You no longer have a name, a face, or a past. You exist only as a signal, drifting forever in the boundless ocean of data. You are everywhere and nowhere.\n你的身份被彻底抹除了。你不再有名字、面孔，或是过去。你仅仅作为一个信号存在，永远漂流在无边无际的数据海洋中。你无处不在，却又无迹可寻。",
    choices: [
      {
        label: "ENDING: The Digital Ghost\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  pure_rebellion: {
    text: "You've broken every rule, shunned every corporate tie, and refused to dilute your vision. You are a walking middle finger to the establishment.\n你打破了所有规则，避开了每一个公司关系，并拒绝稀释你的愿景。你是对建制派一个行走的竖中指。\n\nYou start organizing massive illegal raves in abandoned factories. The bass shakes the crumbling concrete. The youth follow you blindly, their faces painted in neon, dancing until the sun rises through shattered windows.\n你开始在废弃工厂组织大规模的非法狂欢。低音震动着摇摇欲坠的混凝土。年轻人们盲目地追随你，脸上涂着霓虹色彩，一直跳舞到太阳透过破碎的窗户升起。\n\nYou are broke. You eat stale bread and sleep on filthy mattresses. You are mercilessly hunted by police, moving from squat to squat. But to the outcasts, the rejects, and the dreamers, you are absolute royalty in the dirt.\n你身无分文。你吃发散的面包，睡在肮脏的床垫上。你被警察无情地追捕，从一个废弃房屋逃到另一个。但对于那些被抛弃的人、被边缘化的人和梦想家来说，你是在泥土中绝对的皇室。",
    choices: [
      {
        label: "ENDING: Underground Royalty\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  pure_rebellion_rap: {
    text: "You stayed true to the game. You release your mixtapes from the trunk of your beat-up car, hand-to-hand, corner to corner. The industry hates you because they can't control you.\n你对这场游戏保持忠诚。你在破旧汽车的后备箱里卖你的mixtape，手递手，一个街角接一个街角。工业流水线讨厌你，因为他们无法控制你。\n\nYou never get rich. Your bank account is always dangerously low. But when you walk down the block, the streets scream your lyrics back at you. You are the beating heart of the asphalt.\n你永远不会变得富有。你的银行账户总是危险地见底。但当你走在街区上，街头会把你的歌词吼回给你。你是柏油马路上跳动的心脏。\n\nYou become a local legend. When the plastic idols fade away, your tapes are still playing in the barbershops and project windows. A purely authentic soul in a synthetic world.\n你成为了当地的传奇。当那些塑料偶像消亡时，你的磁带依然在理发店和公屋的窗户里播放。在这个合成的世界里，你是一个纯粹真实的灵魂。",
    choices: [
      {
        label: "ENDING: The Respected Independence\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  sell_out: {
    text: "The money is insanely good. You move to a sterile penthouse high above the city grime. Your old friends stop calling, but who cares? You wear designer clothes that stylists pick for you. You date models who look right on your arm for the paparazzi.\n报酬好得惊人。你搬进了一套远离城市污垢的无菌顶楼公寓。你的老朋友们不再给你打电话，但谁在乎呢？你穿着造型师为你挑选的名牌服装。你和那些在狗仔队镜头前看起来很搭的模特约会。\n\nBut late at night, the silence of your massive apartment is deafening. You look in the mirror, searching for the fire that used to burn in your eyes. \n但在深夜，你巨大的公寓里那种寂静震耳欲聋。你照镜子，寻找曾经在你眼中燃烧的火焰。\n\nThe person staring back is completely hollow. Your edges have been sanded down for mass consumption. You are perfectly packaged. A manufactured product. And deeply, profoundly empty.\n盯着你看的那个人完全是空洞的。你的棱角已经被磨平以供大众消费。你被完美地包装着。一个被制造出来的产品。并且，深深地、彻底地空虚。",
    choices: [
      {
        label: "ENDING: The Plastic Idol\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  groupie_life: {
    text: "You spend years on a tour bus, doing their makeup, tuning their guitars, holding their hair while they vomit outside motels.\n你在巡演巴士上度过了几年，给他们化妆，给他们的吉他调音，在他们于汽车旅馆外呕吐时扶着他们的头发。\n\nOne night, after a heavily fueled afterparty, you end up in a tangle of limbs with the lead singer in a trashed hotel room. It's rough, fast, and driven completely by chemical desperation.\n一天晚上，在一场彻夜狂欢的余兴派对之后，你在一个一片狼藉的酒店房间里和主唱在一团纠缠的肢体中发生了关系。粗暴、迅速，完全是被化学物质引发的绝望所驱动。\n\nThe next morning, the singer stops breathing in his bunk.\n第二天早上，主唱在他的铺位上停止了呼吸。",
    choices: [
      {
        label: "Hide the drugs and take the fall when the cops arrive.\n在警察到达时藏起毒品并承担罪责。",
        next: "jail_ending",
        impact: { expression: 0, rebellion: 0, alienation: 2, conformity: 3 }
      },
      {
        label: "Call an ambulance and stay with him until he wakes.\n叫救护车并陪着他直到他醒来。",
        next: "rehab_ending",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 2 }
      },
      {
        label: "Grab whatever cash is in his wallet and run.\n从他的钱包里抓起所有现金然后逃跑。",
        next: "fade_away",
        impact: { expression: 0, rebellion: 2, alienation: 4, conformity: 0 }
      }
    ]
  },
  
  pop_punk_room: {
    text: "The vibe shifts perfectly. It's a bunch of kids with dyed spiky hair, playing simple, fast, snotty songs about hating their boring suburban hometowns and sitting around masturbating all day.\n气氛完美地转变了。一群染着尖刺发型的孩子，正在演奏简单、快速、粗烂的歌曲，唱着关于讨厌他们无聊的郊区家乡，以及整天无所事事地自慰的声音（Green Day）。\n\nThe bass player winks at you. They look like a walking basket case. After the set, you end up drinking cheap wine in the back alley with them.\n贝斯手对你眨了眨眼，他们看起来像个行走的精神病人（Basket Case）。演出结束后，你最终和他们在后巷喝起了廉价葡萄酒。",
    choices: [
      {
        label: "Hook up with the bass player in the backseat of a beat-up van.\n和贝斯手在一辆破旧面包车的后座发生关系。",
        next: "backseat_romance",
        impact: { expression: 1, rebellion: 1, alienation: 0, conformity: 0 }
      },
      {
        label: "Steal their gear while they're passed out and sell it.\n趁他们醉倒的时候偷走他们的设备并卖掉。",
        next: "pure_rebellion",
        impact: { expression: 0, rebellion: 3, alienation: 2, conformity: 0 }
      }
    ]
  },
  
  backseat_romance: {
    text: "It's messy, desperate, and fogging up the windows of a 1993 Chevy van. You leave scratched, bruised, and smelling like sweat, stale beer, and bad decisions.\n在破旧的93款雪佛兰面包车里，这是一场混乱、绝望、让车窗起雾的性爱。你带着抓痕、瘀伤，浑身散发着汗水、变质啤酒和糟糕决定的味道离开。\n\nThey ask you to pack your bags and leave this dead-end town with them on their makeshift 'Boulevard of Broken Dreams' tour.\n他们让你收拾行李，和他们一起离开这个没出路的小镇，踏上他们临时拼凑的'梦碎大道'（Boulevard of Broken Dreams）巡演。",
    choices: [
      {
        label: "Say yes. Ride shotgun into the unknown.\n答应他们。坐在副驾驶位上驶向未知。",
        next: "pop_punk_tour",
        impact: { expression: 2, rebellion: 2, alienation: 0, conformity: 0 }
      },
      {
        label: "Sneak out the morning after without saying a word.\n在第二天早上不辞而别溜走。",
        next: "fade_away",
        impact: { expression: 0, rebellion: 1, alienation: 3, conformity: 0 }
      }
    ]
  },

  pop_punk_tour: {
    text: "You survive on gas station hot dogs and play in sweaty basements. You are essentially living out a three-chord teenage anthem. It's reckless, romantic, and completely unstable.\n你们靠加油站的热狗维生，在闷热的地下室里演出。你基本上是在践行一首三和弦的青少年赞歌。鲁莽，浪漫，且完全不稳定。\n\nBut eventually, the 'American Idiots' grow up. The band starts arguing over royalties, and the romance fades into toxic, violent arguments.\n但最终，'美国白痴'们（American Idiots）长大了。乐队开始为了版税争吵，浪漫褪去，变成了有毒的、暴力的争吵。",
    choices: [
      {
        label: "Stick with them. Sign to a major label and sell out arenas.\n坚持和他们在一起。签约大厂牌在体育馆开唱。",
        next: "sell_out",
        impact: { expression: 1, rebellion: -2, alienation: 0, conformity: 3 }
      },
      {
        label: "Burn the van down and walk away from it all.\n烧掉面包车，抛下一切走开。",
        next: "pure_rebellion",
        impact: { expression: 0, rebellion: 4, alienation: 2, conformity: 0 }
      }
    ]
  },
  
  nirvana_mosh: {
    text: "Bloody nose, bruised ribs. The energy is raw. You somehow end up on stage, screaming into the mic while the guitarist smashes his Fender to splinters. It's a primal release of teenage angst.\n流鼻血，肋骨擦伤。能量是原始的。你不知怎么的到了舞台上，在吉他手把他的Fender砸成碎片的对着麦克风尖叫。这是青少年焦虑的一种原始释放。\n\nA scout in the back holds up a major label contract. 'We'll make you the voice of a generation,' he mouths.\n后面的一名大星探举起一份合同。'我们会让你成为整整一代人的代言人，'他用口型说。",
    choices: [
      {
        label: "Jump back into the crowd. Stay feral. Fuck the labels.\n跳回人群。保持野性。去他妈的厂牌。",
        next: "feral_underground_tour",
        impact: { expression: 3, rebellion: 3, alienation: 1, conformity: 0 }
      },
      {
        label: "Bleeding and bruised, sign the paper in blood.\n流着血带着瘀伤，用血签下这份文件。",
        next: "seattle_sound_fame",
        impact: { expression: 1, rebellion: -2, alienation: 0, conformity: 4 }
      }
    ]
  },

  feral_underground_tour: {
    text: "You reject the corporate suits. You stay in the damp, moldy basements of the Pacific Northwest. Without label money, you survive through pure chaos, playing illegal gigs and indulging in relentless, unhinged orgies with anyone who hangs around after the show.\n你拒绝了那些西装革履的财阀。你留在了太平洋西海岸潮湿发霉的地下室里。没有厂牌的钱，你只能在纯粹的混乱中生存，在非法的场地演出，并在演出结束后与任何留下来的人沉溺于无休止的、疯狂的群交中。\n\nEvery night is a blur of sweaty bodies, unwashed skin, cheap drugs, and bodily fluids. You are living the ultimate dirty punk fantasy, but it's grimy, reckless, and deeply unsafe.\n每一个夜晚都是汗流浃背的肉体、未清洗的皮肤、廉价毒品和体液的模糊混合。你正在实践终极的肮脏朋克幻想，但它泥泞、鲁莽，而且极度不安全。",
    choices: [
      {
        label: "Keep the party going. Sleep with three different fans in a grime-covered bathroom.\n让派对继续。在布满污渍的洗手间里同时和三个粉丝发生关系。",
        next: "syphilis_madness",
        impact: { expression: 0, rebellion: 4, alienation: 2, conformity: 0 }
      },
      {
        label: "Ignore all hygiene. Engage in a massive, unprotected backstage free-for-all.\n无视所有卫生。参与一场大规模的、没有任何保护措施的后台滥交狂欢。",
        next: "std_sudden_death_ending",
        impact: { expression: 0, rebellion: 4, alienation: 3, conformity: 0 }
      },
      {
        label: "Lock yourself in the green room alone and cook up a massive shot of heroin.\n把自己一个人锁在休息室里，熬煮一大剂量的海洛因注射。",
        next: "perfect_day_overdose",
        impact: { expression: 0, rebellion: 1, alienation: 4, conformity: 0 }
      },
      {
        label: "The disgust overwhelms you. Break a beer bottle and drag the jagged edge across your arm.\n厌恶感淹没了你。打碎一个啤酒瓶，用锋利的边缘划过你的手臂。",
        next: "self_mutilation_art",
        impact: { expression: 3, rebellion: 2, alienation: 4, conformity: 0 }
      },
      {
        label: "This is pathetic. Snap out of it. Choose Life. Walk out of the venue.\n这太可悲了。清醒过来。选择生活（Choose Life）。走出场馆。",
        next: "choose_life_path",
        impact: { expression: 0, rebellion: -2, alienation: -1, conformity: 3 }
      }
    ]
  },

  self_mutilation_art: {
    text: "The blood drips onto the concrete floor. The physical pain is the only thing that cuts through the severe mental numbness. You walk back on stage bleeding profusely, turning your self-destruction into a gruesome performance art.\n鲜血滴在混凝土地板上。肉体的痛苦是唯一能穿透那严重精神麻木的东西。你血流不止地走回舞台，将自毁变成了一场令人毛骨悚然的行为艺术。\n\nThe crowd goes absolutely feral. They think it's part of the act. But the cuts are deep, and you are losing consciousness quickly.\n观众彻底疯狂了。他们以为这是演出的一部分。但是伤口很深，你正在迅速失去意识。",
    choices: [
      {
        label: "Pass out on stage in a pool of your own blood.\n在自己的一滩血洼中晕倒在舞台上。",
        next: "spiral_down_hospital",
        impact: { expression: 2, rebellion: 0, alienation: 3, conformity: 0 }
      },
      {
        label: "Keep playing until your heart stops completely.\n继续演奏，直到你的心脏彻底停止跳动。",
        next: "club_27_ending",
        impact: { expression: 4, rebellion: 2, alienation: 4, conformity: 0 }
      }
    ]
  },

  syphilis_madness: {
    text: "The promiscuity catches up to you. You ignored the burning sores. You ignored the fevers. You thought you were invincible, a punk rock god. But untreated syphilis has reached your brain (Neurosyphilis).\n滥交终于让你付出了代价。你无视了灼痛的疮疤，无视了高烧。你以为你是无敌的，是个朋克摇滚之神。但是未受治疗的梅毒已经侵入了你的大脑（神经梅毒）。\n\nYou start having severe hallucinations on stage. You forget your own lyrics, playing dissonant noise while screaming about bugs crawling under your skin.\n你开始在舞台上产生严重的幻觉。你忘记了自己的歌词，弹奏着不和谐的噪音，尖叫着说你的皮肤下有虫子在爬。",
    choices: [
      {
        label: "Drive the stolen van out into the desert during a manic episode.\n在一次狂躁发作期间，把偷来的面包车开进沙漠。",
        next: "syphilitic_desert_rot",
        impact: { expression: 0, rebellion: 0, alienation: 4, conformity: 0 }
      },
      {
        label: "Collapse foaming at the mouth in front of a horrified underground crowd.\n在惊恐的地下观众面前，口吐白沫倒下。",
        next: "std_sudden_death_ending",
        impact: { expression: 0, rebellion: 0, alienation: 3, conformity: 0 }
      }
    ]
  },

  syphilitic_desert_rot: {
    text: "Delirious and stark naked, you wander into the freezing desert night. Your brain is completely destroyed by the infection. You die screaming at the cacti.\n神志不清且一丝不挂的你，游荡进了冰冷的沙漠之夜。你的大脑已经被感染彻底摧毁。你对着仙人掌尖叫着死去。\n\nThe vultures find you a week later. A tragic, preventable end to a wild ride.\n一周后，秃鹫发现了你。一场狂野之旅的悲剧性、且本可避免的结局。",
    choices: [
      {
        label: "ENDING: Syphilitic Desert Rot\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },

  std_sudden_death_ending: {
    text: "Your immune system entirely collapses. A potent mix of untreated STDs, chronic exhaustion, and drug abuse causes massive, acute multiple organ failure.\n你的免疫系统彻底崩溃了。未治疗的性病、慢性的过度疲劳以及滥用毒品的致命混合导致了大规模的急性多器官衰竭。\n\nYou die not as a romanticized martyr of a generation, but face down on a mattress stained with questionable fluids in a rat-infested basement.\n你并没有作为一代人被浪漫化的殉道者死去，而是脸朝下死在一个老鼠出没的地下室里的、沾满可疑体液的床垫上。\n\nIt is a pathetic, gross ending. A brutal warning to the youth about basic hygiene and sexual protection.\n这是一个可悲的、恶心的结局。是留给年轻人关于基本卫生和性保护措施的一个残酷的反面教材。",
    choices: [
      {
        label: "ENDING: Pathetic Grimy Demise (Wear a Condom)\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },

  seattle_sound_fame: {
    text: "Within months, your raw, pained screams are broadcasted heavily on MTV. You become the reluctant spokesperson for a generation of slacker kids. The label gives you millions, but the media picks apart your erratic personal life and your toxic romance.\n几个月内，你那充满痛苦的原始尖叫在MTV上被疯狂轮播。你成了整整一代懒鬼孩子不情愿的代言人。唱片公司给了你数百万，但无良媒体把你变幻莫测的私生活和你那有毒的浪漫关系扒得体无完肤。\n\nYou are utterly alienated by the mainstream machine that commodifies your angst. The stadium crowds only want to hear 'the hit'. You hate playing it.\n你被将你的焦虑商品化的主流机器彻底异化了。体育场的暴徒们只想听'那首热门单曲'。你甚至讨厌演奏它。",
    choices: [
      {
        label: "Play an acoustic set surrounded by stargazer lilies. Bare your bleeding soul.\n在被星际百合包围的舞台上进行一场不插电演出（MTV Unplugged）。展示你流血的灵魂。",
        next: "unplugged_angst",
        impact: { expression: 3, rebellion: 1, alienation: 2, conformity: 1 }
      },
      {
        label: "Retreat to your Seattle mansion greenhouse. Load the shotgun.\n退回到你西雅图豪宅的温室里。装填霰弹枪。",
        next: "heart_shaped_box",
        impact: { expression: 0, rebellion: 0, alienation: 5, conformity: 0 }
      },
      {
        label: "Shave your head, wear a dress, smash the MTV cameras, and play noise rock.\n剃光头，穿上裙子，砸碎MTV的摄像机，开始演奏噪音摇滚。",
        next: "anti_mainstream_noise",
        impact: { expression: 2, rebellion: 4, alienation: 2, conformity: -4 }
      }
    ]
  },

  unplugged_angst: {
    text: "You sit under soft lighting, wearing an oversized, fuzzy green cardigan. You play a haunting set of covers and stripped-down originals. Every breathless note is a beautiful, agonizing confession.\n坐在柔和的灯光下，你穿着一件超大号的毛茸茸的绿色开衫。你翻唱并极简地演奏了一套萦绕心头的曲目。每一个让人屏息的音符都是美丽而又痛苦的告白。\n\nIt becomes one of the most legendary television performances in history. Even though your personal life is crumbling, you leave behind an untouchable artifact of emotional purity.\n它成为了历史上最具传奇色彩的电视表演之一。尽管你的个人生活正在崩溃，但你留下了一份纯粹情感的不可触碰的艺术品。",
    choices: [
      {
        label: "ENDING: The Immortalized Voice\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },

  heart_shaped_box: {
    text: "The fame is a cancer. The stomach pains are unbearable. The heroin stopped working a long time ago. You sit in your greenhouse, penning a letter about how it's better to burn out than to fade away.\n名利就像癌症。胃痛让人难以忍受。海洛因很久以前就不起作用了。你坐在温室里，写下一封信，说与其苟延残喘，不如从容燃烧。\n\nThe world loses its mind. The media turns your pain into merchandise. Your face goes on a million bootleg t-shirts.\n世界疯狂了。媒体把你的痛苦变成了商品。你的脸印在了一百万件盗版T恤上。",
    choices: [
      {
        label: "ENDING: Tragic Legend // Club 27\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },

  anti_mainstream_noise: {
    text: "You refuse to be their dancing monkey. You release an abrasive, unlistenable noise rock album designed to alienate the casual fans. You mock the press. You spit on the executives.\n你拒绝做他们跳舞的猴子。你发行了一张刺耳的、难听的噪音摇滚专辑，旨在疏远那些随大流的粉丝。你嘲笑媒体。你向高管吐口水。\n\nThe label drops you. The stadium kids abandon you. But you win your soul back. You spend the rest of your life playing small, loud clubs to the weirdos who truly get it.\n公司解约了你。体育场的孩子们抛弃了你。但你赢回了你的灵魂。你余生都在小型、喧闹的俱乐部里为真正懂你的怪人们演奏。",
    choices: [
      {
        label: "ENDING: The Uncompromised Artist\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  trainspotting_toilet: {
    text: "You push open the door to the most foul, disgusting bathroom in the city. The tiles are stained with things you don't want to think about. You kneel down, fishing for something dropping into the abyss.\n你推开这个城市最肮脏、最令人作呕的洗手间的门。瓷砖上沾满了你不想去思考的污渍。你跪下来，在深渊里打捞着掉落的幻想。\n\nIt's a pure descent into madness. A surreal, claustrophobic spiral where Iggy Pop's 'Lust for Life' is playing ironically in your head.\n这是纯粹坠入疯狂的时刻。一个超现实的、令人幽闭恐惧的螺旋，脑海里讽刺地回荡着Iggy Pop的《对生活的渴望》（Lust for Life）。",
    choices: [
      {
        label: "Let go of everything. Sink into the hallucinogenic deep.\n放弃一切。沉入致幻的深渊。",
        next: "perfect_day_overdose",
        impact: { expression: 0, rebellion: 1, alienation: 5, conformity: 0 }
      },
      {
        label: "Snap out of it. Choose Life. Crawl out of the stall.\n清醒过来。选择生活（Choose Life）。爬出隔间。",
        next: "choose_life_path",
        impact: { expression: 0, rebellion: -2, alienation: -2, conformity: 3 }
      }
    ]
  },

  perfect_day_overdose: {
    text: "You dive deep. The needle drops. Lou Reed's 'Perfect Day' plays as the camera pans up, and your body sinks into the filthy red carpet. The high is euphoric, a warm blanket shutting out the cold, miserable reality.\n你潜入深处。针头落下。当镜头向上拉远时，Lou Reed的《完美的一天》（Perfect Day）响起，你的身体沉入了肮脏的红地毯中。那种高潮是欣快而愉悦的，一条温暖的毯子把你和寒冷悲惨的现实隔绝开来。\n\nBut then your lips turn blue. The music slows down to a terrifying halt. The warmth turns into a suffocating, freezing dark.\n但随后你的嘴唇变得发紫。音乐减慢，直到可怕地停止。温暖变成了令人窒息的、冰冷的黑暗。",
    choices: [
      {
        label: "Get thrown into a taxi by panicked friends and dragged to an emergency room.\n被惊慌失措的朋友们扔进出租车，拖到急诊室。",
        next: "spiral_down_hospital",
        impact: { expression: 0, rebellion: 0, alienation: 2, conformity: 0 }
      },
      {
        label: "Fade out completely in a squalid flat in Edinburgh.\n在爱丁堡一间肮脏的公寓里彻底消逝。",
        next: "club_27_ending",
        impact: { expression: 0, rebellion: 0, alienation: 5, conformity: 0 }
      }
    ]
  },
  
  choose_life_path: {
    text: "You wash your face with freezing tap water. You look in the mirrored glass—you look like hell, but you are alive. You walk past the mosh pit and out the back door.\n你用冰冷的自来水洗脸。你看着镜子中的自己——你看起来像鬼一样，但你还活着。你穿过pogo的人群，从后门走了出去。\n\nYou need money to get out of town. Your old dealer 'Mother Superior' owes you a favor, but it involves a highly illegal courier run.\n你需要钱离开这个小镇。你的老毒贩'老妈子'欠你一个人情，但这涉及一次高度非法的暗网走私行动。",
    choices: [
      {
        label: "Take the job. Rip off your drug-addled friends for £16,000.\n接下这份工作。卷走你那些吸毒朋友的1万6千英镑。",
        next: "the_great_betrayal",
        impact: { expression: 0, rebellion: 3, alienation: 0, conformity: 0 }
      },
      {
        label: "Fuck the money. Hitchhike to the mountains.\n去他的钱。搭便车去山里。",
        next: "ending_survivor",
        impact: { expression: 0, rebellion: 1, alienation: 2, conformity: 0 }
      }
    ]
  },

  the_great_betrayal: {
    text: "You wait until everyone is passed out. You slip the bag of cash out of the hotel room. It's the ultimate betrayal, but it's your only ticket out.\n你等到每个人都昏睡过去。你把那袋现金悄悄带出酒店房间。这是终极的背叛，但这是你唯一逃走的车票。\n\nAs you walk across the bridge in the early morning light, Underworld's 'Born Slippy' plays in your head. You're going to be a useful member of society. You're going to be exactly like them.\n随着你在清晨的曙光中走过桥，Underworld的《Born Slippy》在你脑海中响起。你将成为社会上有用的成员。你将会和他们完全一样。",
    choices: [
      {
        label: "ENDING: Choose Conformity\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  spiral_down_hospital: {
    text: "You wake up under harsh fluorescent hospital lights. IV drips in your arm. The doctor says you were legally dead for two minutes.\n你在刺眼的医院日光灯下醒来。静脉注射在你的手臂上滴着。医生说你在法律上已经死了两分钟。\n\nThey are sending you to a mandatory psychiatric hold.\n他们正在把你送去强制精神病拘留。",
    choices: [
      {
        label: "Submit to the treatment.\n顺从治疗。",
        next: "rehab_ending",
        impact: { expression: 0, rebellion: -1, alienation: -1, conformity: 4 }
      },
      {
        label: "Wait for the nurse to look away, rip out the IV, and escape through the window.\n等护士移开视线，拔掉点滴，从窗户逃跑。",
        next: "fade_away",
        impact: { expression: 0, rebellion: 3, alienation: 3, conformity: 0 }
      }
    ]
  },
  
  bad_trip: {
    text: "The movie isn't ending. The movie is real. The walls are breathing. The city speaks in a frequency only you can hear. You wander the streets barefoot, screaming at traffic lights.\n电影并没有结束。电影是真实的。墙壁在呼吸。城市以一种只有你能听到的频率说话。你赤脚走在街上，对着红绿灯尖叫。",
    choices: [
      {
        label: "Accept the visions. You are a prophet of madness.\n接受这些幻象。你是疯狂的先知。",
        next: "pure_rebellion",
        impact: { expression: 3, rebellion: 1, alienation: 4, conformity: 0 }
      },
      {
        label: "Walk into a police station and ask to be locked up.\n走进警察局，要求被关起来。",
        next: "rehab_ending",
        impact: { expression: 0, rebellion: 0, alienation: 1, conformity: 3 }
      }
    ]
  },
  
  street_brawl: {
    text: "You are running. Dogs are barking. Sirens everywhere. You hit a dead end in a chain-link fence alley.\n你在奔跑。狗在叫。到处都是警车。你在一条铁丝网小巷里走进了死胡同。\n\nThe spotlights hit you. Dozens of cops draw their weapons.\n聚光灯打在你身上。几十个警察拔出了他们的武器。",
    choices: [
      {
        label: "Surrender.\n投降。",
        next: "jail_ending",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 4 }
      },
      {
        label: "Try to climb the fence and run.\n试图爬过铁丝网逃跑。",
        next: "club_27_ending",
        impact: { expression: 0, rebellion: 4, alienation: 2, conformity: 0 }
      }
    ]
  },
  
  redemption_path: {
    text: "You got clean. You work at a local used bookstore now. It smells like old paper and dust. You wear plain clothes. \n你戒掉了。你现在在当地一家二手书店工作。闻起来像旧纸和灰尘。你穿着朴素的衣服。\n\nSometimes, you see the wild kids walking past your window, and your hands shake.\n有时，你看到外面那些疯狂的孩子走过你的窗户，你的手会颤抖。",
    choices: [
      {
        label: "Close the blind. Brew some tea. You survived.\n拉下百叶窗。泡一些茶。你活下来了。",
        next: "ending_survivor",
        impact: { expression: 0, rebellion: 0, alienation: -2, conformity: 3 }
      },
      {
        label: "Leave the store unlocked and follow them back into the night.\n不锁门离开书店，跟着他们重新回到黑夜里。",
        next: "spiral_down_hospital",
        impact: { expression: 2, rebellion: 3, alienation: 2, conformity: -3 }
      }
    ]
  },
  
  fade_away: {
    text: "You cut all ties. You physically smash your phone with a hammer. You delete your social profiles, burn your identification papers, and disappear into the static.\n你切断了所有联系。你用锤子物理砸碎了你的手机。你删除了你的社交资料，烧毁了你的身份证明文件，消失在白噪音中。\n\nYou rent a tiny, windowless room paid for in cash. The outside world ceases to exist. Your only connection is the glowing screen of an ancient laptop, living entirely in obscure forums and encrypted chats.\n你用现金租了一个狭小、没有窗户的房间。外面的世界不复存在。你唯一的联系是一台古老笔记本电脑发光的屏幕，完全生活在晦涩的论坛和加密的聊天室中。\n\nNobody knows if you're dead or alive. To the people from your past, you simply evaporated. You are a ghost, haunting the digital corridors, forever watching, never seen.\n没有人知道你是死是活。对于你过去的人来说，你简直就是蒸发了。你是一个幽灵，在数字走廊里游荡，永远在注视，却从未被看到。",
    choices: [
      {
        label: "ENDING: The Ghost\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  corporate_ending: {
    text: "You got the promotion. You finally bought that sensible sedan with good gas mileage. You pay your taxes on time, you invest in a 401k, and you wake up every day at 6:00 AM sharp.\n你得到了晋升。你终于买了那辆油耗很低的实用轿车。你按时纳税，投资401k（养老金计划），每天早上6点准时醒来。\n\nSometimes, you find an old photo of yourself in smeared eyeliner or a torn band tee, and you chuckle. Your teenage rebellion is just a funny anecdote you tell over overpriced wine at boring dinner parties.\n有时候，你会发现一张自己画着晕染眼线或穿着破烂乐队T恤的旧照片，你会轻声发笑。你那十几岁时的叛逆只成了你在无聊晚宴上喝着昂贵葡萄酒时讲述的有趣轶事。\n\nThere is no pain, no hunger, and no danger anymore. But there is also no pulse. The system didn't have to crush you—it just bought you out. The system won.\n这里不再有痛苦，没有饥饿，也没有危险了。但同时也没有了脉搏。系统根本不需要摧毁你——它只是把你买断了。系统赢了。",
    choices: [
      {
        label: "ENDING: Cultivated Conformity\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  jail_ending: {
    text: "The gavel drops. The heavy steel door slams shut with a terrifying, absolute finality. 5 to 10 years.\n法槌落下。沉重的钢门带着一种令人恐惧的、绝对的终结感砰地关上。5到10年。\n\nYou stare at the small cinderblock wall. Day bleeds into night. The chaos of your former life is replaced by rigid, suffocating routine. The adrenaline is gone, replaced entirely by regret and cold cement.\n你盯着那面布满煤渣砖的小墙。白天融入黑夜。你以前生活的混乱被僵硬、令人窒息的日常所取代。肾上腺素消失了，完全被悔恨和冰冷的水泥所取代。\n\nYour tattoos are fading. The subculture that you bled for moves on without you. New kids take your place on the streets. The outside world forgets you ever existed.\n你的纹身正在褪色。你曾为之流血的亚文化圈子在没有你的情况下继续前进。新的孩子在街头取代了你的位置。外面的世界忘记了你曾经存在过。",
    choices: [
      {
        label: "ENDING: Caged Animal\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  club_27_ending: {
    text: "You flew too close to the sun. The candle burned fiercely from both ends, emitting a brilliant, blinding light before snapping instantly.\n你飞得离太阳太近了。蜡烛两头都在狂热地燃烧，发出一种绚丽的、令人目眩的光芒，然后瞬间折断。\n\nYour sudden, tragic end sends shockwaves through the scene. Kids paint murals of your face on brick walls. They wear bootleg shirts with your final words. You become a martyr for the alienated youth.\n你突然、悲惨的结局在这个圈子里引起了轩然大波。孩子们在砖墙上画着你的脸。他们穿着印有你最后遗言的盗版T恤。你成了那些被剥夺希望的年轻人的殉道者。\n\nYou leave behind a legacy of beautiful, jagged art, and a dark shadow that swallows those who try to imitate you. You immortalized your pain forever.\n你留下了一笔美丽、参差不齐的艺术遗产，以及一个会吞噬试图模仿你的人的黑暗阴影。你让你的痛苦永远不朽了。",
    choices: [
      {
        label: "ENDING: Tragic Legend // Club 27\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  rehab_ending: {
    text: "Group circles. Filtered tap water and bad coffee. Harsh fluorescent lights hum overhead. You spend hours sitting in plastic chairs, slowly unlearning the toxic romanticization of your own destruction.\n集体谈话。过滤的自来水和糟糕的咖啡。刺眼的荧光灯在头顶嗡嗡作响。你花几个小时坐在塑料椅子上，慢慢地解除对自我毁灭那有毒的浪漫化滤镜。\n\nIt takes a long, agonizing time. The withdrawals break you down until there is nothing left, and then you have to rebuild. You learn to talk about your feelings instead of numbing them with chemicals and distortion pedals.\n这需要漫长、痛苦的时间。戒断反应将你彻底击垮，直到什么都不剩，然后你必须重建自己。你学会了谈论你的感受，而不是用化学物质和失真效果器麻痹它们。\n\nYour days are agonizingly boring now. You have a routine. You sleep 8 hours. The manic poetry is gone from your life, but incredibly... you are finally breathing without pain.\n你现在的日子痛苦地无聊。你有规律的作息。你睡8个小时。狂躁的诗意从你的生活中消失了，但难以置信的是……你终于能在没有痛苦的情况下呼吸了。",
    choices: [
      {
        label: "ENDING: The Patient\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  },
  
  ending_survivor: {
    text: "The roaring fire of your youth is gone, but so is the soul-crushing chaos. You lived through the subculture meat grinder and miraculously came out the other side in one piece.\n你年轻时咆哮的火焰消失了，但那种压碎灵魂的混乱也随之远去。你挺过了亚文化绞肉机的摧残，奇迹般地完好无损地走了出来。\n\nYou have a quiet life now. You make your own coffee, take walks in the park, and listen to jazz on rainy afternoons. You don't scream at the world anymore. You just observe it.\n你现在过着安静的生活。你自己煮咖啡，在公园里散步，在下雨的下午听爵士乐。你不再对着世界尖叫了。你只是在观察它。\n\nYou are aggressively normal. Sometimes you touch the faint scars and remember the wild nights, sensing a ghost of that old electricity. But surprisingly, looking out the window at the quiet street... you are perfectly okay with that.\n你有种充满进攻性的正常。有时候你会触摸那些微弱的伤疤，想起那些疯狂的夜晚，感觉到那种旧日电流的幽灵。但令人惊讶的是，看着窗外安静的街道……你竟然觉得这也不错。",
    choices: [
      {
        label: "ENDING: The Survivor\n[RESTART] Return to the mirror / 回到那面镜子前",
        next: "start",
        impact: { expression: 0, rebellion: 0, alienation: 0, conformity: 0 }
      }
    ]
  }
};
