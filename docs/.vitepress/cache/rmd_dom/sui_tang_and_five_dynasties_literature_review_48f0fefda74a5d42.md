---
title: "China Under the Sui, Tang and Five Dynasties"
subtitle: "JADE: Imperial Reunification, Grand Canal Urbanism and Southward Migration, 589AD to 960AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: sui_tang_and_five_dynasties_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_sui_tang_and_five_dynasties_spatial.png"
hero_caption: "Sub-regional territorial mask and 4.673 catalogued settlements across thirteen historical circuits and borderlands of China from 589AD to 960AD."
hero_label: "fig:hero-sui-tang"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This monograph reconstructs the historical population and settlement geography of China across nearly four centuries from the Sui reunification of north and south in 589AD to the accession of the Song dynasty in 960AD under JADE. Covering 9.389.222 km² partitioned into thirteen historical circuits and frontier realms, the demographic trajectory follows the pioneering archival census syntheses of Dong Guodong, Denis Twitchett, Debin Ma and Richard von Glahn [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge; @ma_vonglahn_2022_cambridge; @chgis_v6_2016]. Following three centuries of political division after the fall of the Western Jin, the Sui dynasty reunified the realm in 589AD with an estimated baseline aggregate of 48M (48.000.000), expanding through the construction of the Grand Canal network and aggressive cadastral registration to a peak of 54,45M (54.450.000) at the Daye census of 609AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Flckiger2019Transport; @Lee2022Population]. Catastrophic civil warfare during the Sui-Tang transition precipitated demographic collapse to 31M (31.000.000) by the Zhenguan census of 639AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. Sustained pacification under Emperor Taizong, administrative consolidation under Empress Wu Zetian and economic florescence during Emperor Xuanzong's Kaiyuan era lifted imperial numbers to 54M in 700AD, 68,45M in 742AD and an imperial peak of 74M (74.000.000) on the eve of the An Lushan Rebellion in 755AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge; @xiong2000sui]. Primacy belonged to the twin imperial capitals of Chang'an (950k) and Luoyang (550k), supported by canal commercial emporia including Kaifeng (480k), Yangzhou (320k), Chengdu (280k) and Hangzhou (260k) [@xiong2000sui; @Chen2021Discussion; @Huang2021Rise; @Zhang2021Research]. The devastating rebellion of An Lushan (755AD to 763AD) shattered the northern plain, reducing the populations of Henan, Hebei and Guannei by nearly half and initiating an irreversible southward shift of demographic gravity [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Kempf2025Hydroclimatic]. Driven by massive refugee migration and wet-rice agricultural intensification, Jiangnan Circuit expanded from 6,72M in 589AD and 10,36M in 755AD to over 13,8M in 820AD and 12,72M in 960AD, permanently displacing the northern plain as China's demographic heartland [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform]. Across the Tibetan plateau, southwestern highlands and northeastern forests, the Tubo Empire, Nanzhao Kingdom and Bohai state developed autonomous urban and demographic systems [@hansen2012silk; @Beaujard2019Worlds]. Regional population settled at 55M in 800AD, 57,5M during the Yuanhe restoration in 820AD, 54M in 900AD and 53M (53.000.000) at the close of the Five Dynasties and Ten Kingdoms in 960AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Song2017State]. Intra-regional density surfaces are calibrated through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 87.810 East Asian archaeological site records and 648 domestic catchments ($\tau_1 = 1,50$, effective short range 73,43 km, regularised nugget-to-sill 0,04, WLS $R^2 = 0,9995$) harmonised with 4.673 catalogued settlements [@paciorek2006spatial; @hosner_2016_pangaea].

# Background

## Sui Reunification and the Daye Cadastral Zenith (589AD to 609AD)

In 589AD, the armies of Emperor Wen of Sui (Yang Jian) crossed the Yangtze River, captured the Chen capital of Jiankang (modern Nanjing) and extinguished the last of the Southern Dynasties [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. This conquest concluded more than two and a half centuries of political fragmentation that had endured since the fall of the Western Jin in 316AD. Re-establishing universal administrative hegemony required integrating two divergent agrarian and social worlds: the aristocratic, semi-pastoral and militarily militarised regimes of the northern plains and the riverine, emigre-dominated gentry societies of the southern river basins [@twitchett1979cambridge; @ma_vonglahn_2022_cambridge].

Emperor Wen instituted sweeping administrative reforms designed to curb private aristocratic evasion and restore taxable households to official registers. The most decisive fiscal measure was the Da Yue policy of 583AD, a nationwide household search and registration campaign that dispatched imperial commissioners into rural counties to root out concealed dependents and unfree clients (*yihu*) maintained by powerful magnate clans [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. Coupled with the standardisation of the equal-field (*juntian*) system, which distributed agricultural allotments in exchange for grain taxes (*su*), textile tribute (*diao*) and statutory corvée labour (*yong*), these measures dramatically expanded the fiscal base [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform].

Under Emperor Yang (reigned 604AD to 618AD), state mobilisation reached unprecedented proportions. The Daye census of 609AD, recorded in the *Suishu Dilizhi*, registered 8.907.546 households and 46.019.956 taxable individuals across 190 commanderies [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Dong Guodong's demographic analysis demonstrates that official registers systematically omitted infants, unfree serfs, Buddhist and Daoist clergy, and non-Han tribal populations across the mountainous frontiers. Adjusting for administrative undercounting and border populations yields an aggregate population of 54,45M (54.450.000) in 609AD, representing the demographic peak of the Sui dynasty [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

## Grand Canal Construction and Riverine Urbanisation

The construction of the Sui Grand Canal network between 605AD and 610AD created an integrated inland waterway corridor spanning more than 2.000 km across eastern China, fundamentally restructuring economic geography and urban hierarchy [@Flckiger2019Transport; @Lee2022Population; @Huang2021Rise]. Recognizing that the agricultural surpluses of the Yellow River valley were no longer sufficient to sustain the imperial armies and sprawling metropolitan populations of the Guanzhong basin, Emperor Yang mobilised millions of corvée labourers to excavate three interconnected waterways [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge].

The first segment, the Tongji Canal, opened in 605AD, connecting the eastern capital of Luoyang to the Huai River and the southern bend of the Yellow River [@Liu2025Heritage; @Flckiger2019Transport]. The second, the Yongji Canal, constructed in 608AD, extended north-eastward from the Yellow River to Zhuojun (modern Beijing), serving as the logistical conduit for imperial military expeditions against the kingdom of Goguryeo [@twitchett1979cambridge; @Zhao2023Situ]. The third, the Jiangnan Canal, completed in 610AD, linked Zhenjiang on the Yangtze to Hangzhou on the Qiantang estuary [@Huang2023Spatio; @Zhang2021Research].

The Grand Canal transformed riverine market towns into regional urban centres [@Huang2021Rise; @Flckiger2019Transport]. Yangzhou (Jiangdu), strategically situated at the junction of the Yangtze and the Grand Canal, emerged as the commercial entrepot of southern commerce, housing 320k residents by the High Tang [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2023Boat]. Bianzhou (modern Kaifeng), situated at the vital canal transshipment point where southern grain fleets transferred cargoes to shallow barges destined for Luoyang and Chang'an, expanded into a trading metropolis of 480k inhabitants [@Huang2021Rise; @Liang2025Hierarchical]. Luoyang, rebuilt by Emperor Yang on a monumental grid plan enclosing the commercial quarters of the North and South Markets, grew to 550k inhabitants and served as the empire's primary granary repository [@xiong2000sui; @Yin2021Comparative].

## The Sui-Tang Dynastic Collapse and Zhenguan Recovery (611AD to 649AD)

The fiscal and physical strain of repeated military expeditions against Goguryeo between 612AD and 614AD, combined with catastrophic floods along the Yellow River, ignited massive agrarian rebellions across the North China Plain [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge; @Lee2022Population]. Peasant insurgencies led by Dou Jiande in Hebei, Zhai Rang and Li Mi at the Xinghua Granary near Luoyang, and Du Fuwei in Huainan rapidly dismantled Sui central authority [@twitchett1979cambridge]. Following Emperor Yang's assassination at Jiangdu in 618AD, China descended into a multi-sided civil war between regional warlords that lasted until the Tang founder Li Yuan (Emperor Gaozu) and his son Li Shimin (Emperor Taizong) eliminated rival claimants in 624AD [@twitchett1979cambridge].

The demographic consequences of the transition were devastating. Famines, epidemics, military massacres and displacement ravaged the core agricultural zones of Henan, Hebei and Guannei [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Kempf2025Hydroclimatic]. When Emperor Taizong conducted the Zhenguan 13th year census in 639AD, the empire registered only 3.041.871 households and 12.351.681 persons [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. While part of this contraction reflected administrative breakdown and evasion, Dong Guodong's demographic reconstruction confirms that total population plummeted from 54,45M in 609AD to 31M (31.000.000) by 639AD, representing an aggregate contraction of 43,1% [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

Recovery took root under Emperor Taizong's Zhenguan reign (626AD to 649AD) and Emperor Gaozong's Yonghui era (650AD to 683AD) [@twitchett1979cambridge]. The court re-established the equal-field allotment registers, promulgated the Tang Code, lowered agricultural tax burdens to two bushels of grain per adult male, and instituted the *fubing* militia system, which distributed self-supporting military garrisons primarily across Guannei and Hedong Circuits [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. By 700AD, during the reign of Empress Wu Zetian, imperial numbers had recovered to 54M, matching the Sui peak [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

## High Tang Metropolises and the Tianbao Zenith (713AD to 755AD)

The Kaiyuan and Tianbao eras of Emperor Xuanzong (reigned 712AD to 756AD) marked the zenith of Tang demographic expansion and urban prosperity [@twitchett1979cambridge; @dong_guodong_2002_zhongguo_renkou_shi_vol2]. The empire was governed through fifteen administrative circuits (*dao*), established by Xuanzong in 733AD by sub-dividing the original ten circuits demarcated by Taizong in 627AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @chgis_v6_2016].

The registration rolls of 742AD (Tianbao 1st year) enumerated 8.525.763 households and 48.909.800 taxable individuals [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Synthesising unregistered infants, Buddhist and Daoist monastic populations, military garrisons along the northern frontiers and untaxed aboriginal groups in the southwest, Dong Guodong estimates the true imperial population at 68,45M in 742AD, climbing to 74M (74.000.000) on the eve of the An Lushan Rebellion in 755AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge].

High Tang urbanism was anchored by the supreme metropolis of Chang'an (modern Xi'an), capital of the realm and eastern terminus of the trans-Eurasian Silk Road [@xiong2000sui; @hansen2012silk; @Lv2024Ancient]. Chang'an was laid out on an orthogonal grid measuring 9,7 km east-west by 8,6 km north-south, enclosing 84 km² within massive rammed-earth walls [@xiong2000sui; @Chen2021Discussion]. Divided into 108 walled residential wards (*fang*), the palace city and the East and West Markets, Chang'an housed 950k residents in 742AD, including imperial guards, civil bureaucrats, Buddhist monks, foreign ambassadors, Central Asian Sogdian merchants, and domestic artisans [@xiong2000sui; @Chen2022Research; @Kyoko2022Dressing].

Luoyang, the auxiliary eastern capital, occupied 47 km² across the Luo River, housing 550k inhabitants and functioning as the administrative hub of the lower Yellow River plains [@xiong2000sui; @Yin2021Comparative]. Beyond the capitals, secondary provincial cities flourished: Chengdu in the fertile Red Basin of Sichuan reached 280k residents as the regional agricultural and textile centre, while Guangzhou on the southern coast housed 200k residents and supported a substantial foreign quarter of Arab, Persian and Malay maritime merchants [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Beaujard2019Worlds; @Zou2026Urban].

## The An Lushan Rebellion and the Collapse of Northern Registration (755AD to 763AD)

In December 755AD, An Lushan, the Sogdian-Turkic military commissioner (*jiedushi*) commanding the frontier armies of Fanyang, Pinglu and Hedong, rebelled against the Tang court with an army of 150.000 veteran cavalry [@twitchett1979cambridge; @dong_guodong_2002_zhongguo_renkou_shi_vol2]. The rebel forces swept across the North China Plain, captured Luoyang in January 756AD, broke through the strategic Tongguan Pass, and sacked Chang'an in July 756AD, forcing Emperor Xuanzong to flee to Chengdu in Sichuan [@twitchett1979cambridge; @xiong2000sui].

The rebellion inflicted catastrophic destruction across northern China [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Kempf2025Hydroclimatic]. Henan, Hebei and Guannei Circuits were repeatedly plundered by rebel armies, imperial loyalists and Uighur mercenary forces [@twitchett1979cambridge]. Agricultural irrigation canals fell into disrepair, hydraulic works breached, and famine swept the Yellow River basin [@Lee2022Population; @Kempf2025Hydroclimatic]. Historical records describe the central plains between the Yellow and Huai rivers as depopulated wilderness where towns were reduced to ash and farmlands reverted to scrub [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

The fiscal and demographic apparatus of the early Tang state collapsed permanently [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform]. The equal-field system disintegrated as land holdings were abandoned or seized by military warlords, while the *fubing* militia ceased to function [@twitchett1979cambridge]. In 760AD, official registers recorded only 1.933.174 households and 16.990.386 persons nationwide, an artificial administrative drop of nearly 70% caused by the collapse of central reporting rather than biological extinction [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Dong Guodong's demographic analysis demonstrates that while biological mortality and famine losses claimed approximately 19M lives across northern China, an equal or greater demographic force was the mass southward flight of refugees fleeing the war zones of Henan and Hebei [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

## The Southward Shift and the Mid-Tang Twice-Yearly Tax (780AD to 820AD)

The An Lushan Rebellion decisively accelerated the historical southward shift of China's demographic and economic centre of gravity [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge]. Hundreds of thousands of northern refugee households migrated across the Dabie Mountains and the Huai River into Jiangnan, Huainan, Shannan and Jiannan Circuits [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Southern prefectures welcomed northern cultivators to clear forested uplands, reclaim coastal marshes and construct polders (*weitian*) across the Lake Tai and Poyang Lake basins [@Zhang2021Research; @Huang2023Spatio].

To adapt to the reality of decentralized provincial administration and pervasive evasion, Chancellor Yang Yan promulgated the Twice-Yearly Tax (*liangshui fa*) in 780AD under Emperor Dezong [@twitchett1979cambridge; @Chen2025Reform]. The Twice-Yearly Tax abandoned the fictional equal-field system and the universal poll tax on adult males (*ding*). Instead, it assessed taxes twice annually (in summer and autumn) based on actual land holdings and household wealth, regardless of whether a cultivator was an indigenous resident (*tuhu*) or an immigrant guest worker (*kehu*) [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform].

The Twice-Yearly Tax legalised private land ownership and facilitated the formal registration of migrant families throughout the south [@Chen2025Reform]. During the Yuanhe reign (806AD to 820AD) of Emperor Xianzong, who reasserted imperial authority over rebellious northeastern *jiedushi*, the *Yuanhe Junxian Tuzhi* compiled by Li Jifu documented a robust recovery [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Total population climbed to 57,5M in 820AD. Crucially, the geographical distribution had been transformed: Jiangnan Circuit expanded from 6,72M in 589AD and 10,36M in 755AD to over 13,8M in 820AD, permanently surpassing Henan (7,48M) and Hebei (6,9M) combined [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

## Frontier Powers: Tubo, Nanzhao and Bohai (600AD to 960AD)

Beyond the direct administrative perimeter of the Tang circuits, powerful independent states emerged along China's borders, developing distinct demographic structures [@hansen2012silk; @twitchett1979cambridge].

On the Qinghai-Tibetan plateau, Songtsen Gampo (reigned 617AD to 649AD) unified disparate Tibetan clans to establish the Tubo Empire [@hansen2012silk; @Beaujard2019Worlds]. Adapting Tang administrative methods, Tubo mobilised a formidable army, conquered the Tuyuhun Kingdom around Qinghai Lake, seized the Tarim Basin oasis kingdoms (Khotan, Kucha, Kashgar and Karasahr) of Tang's Four Garrisons of Anxi, and briefly captured and plundered Chang'an in 763AD [@hansen2012silk; @twitchett1979cambridge]. Covering 2,431M km², the Tubo-Nanzhao domain supported 1,92M inhabitants in 589AD, expanding to 2,96M in 755AD and 2,3M in 820AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

In the southwestern highlands of Yunnan, the Nanzhao Kingdom was founded in 738AD by Piluoge with Tang diplomatic backing, uniting the six indigenous *zhao* confederacies of the Erhai basin [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. Nanzhao defeated major Tang punitive armies in 751AD and 754AD, established its capital at Taihe and later Dali (80k residents), and developed an intensive irrigated rice economy supplemented by copper mining and trans-Himalayan trade with Burma and India [@Beaujard2019Worlds].

In the northeast, the Bohai (Parhae) state arose in 698AD under Dae Jo-yeong, uniting Mohe and Goguryeo populations across Manchuria, the Liaodong peninsula and northern Korea [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Known diplomatically as the "Flourishing Land of the East" (*Haedong seongguk*), Bohai established five capital cities, anchored by Shangjing Longquanfu (modern Ning'an, Heilongjiang), which housed 75k inhabitants and mirrored Chang'an's walled grid plan on a scale of 16 km² [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Zou2026Urban]. The northeastern Liaodong-Bohai domain grew from 1,2M in 589AD to 1,85M in 755AD before its conquest by the Khitan Liao dynasty in 926AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

## Five Dynasties Fragmentation and Regional State Consolidation (907AD to 960AD)

The agrarian and military revolts of the late ninth century, led by Wang Xianzhi and Huang Chao between 874AD and 884AD, fatally crippled the Tang state [@twitchett1979cambridge; @dong_guodong_2002_zhongguo_renkou_shi_vol2]. Huang Chao's rebel army swept from Shandong through the southern provinces, capturing and sacking Guangzhou in 879AD, before marching north to capture Luoyang and Chang'an in 880AD [@twitchett1979cambridge; @Chen2021Discussion]. In 907AD, the warlord Zhu Wen deposed the last Tang puppet emperor and established the Later Liang at Bianzhou (Kaifeng), inaugurating the Five Dynasties and Ten Kingdoms period (907AD to 960AD) [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Song2017State].

For half a century, northern China suffered under five successive, fleeting military dynasties centered on Kaifeng and Luoyang: Later Liang (907AD to 923AD), Later Tang (923AD to 936AD), Later Jin (936AD to 947AD), Later Han (947AD to 951AD), and Later Zhou (951AD to 960AD) [@twitchett1979cambridge; @Song2017State]. Military conscription, fiscal extortion, Khitan incursions from the north (which annexed the Sixteen Prefectures of Yanyun including Beijing in 938AD), and continuous conflict along the Yellow River suppressed northern recovery, keeping Henan (6,89M) and Hebei (6,36M) at historical lows [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

Conversely, the Ten Kingdoms of southern and western China enjoyed relative peace, fiscal autonomy and sustained commercial expansion [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Song2017State]. The Southern Tang (capital Jinling/Nanjing, 210k), Wuyue (capital Hangzhou, 260k), Min (capital Fuzhou, 85k), Southern Han (capital Guangzhou, 200k), Former and Later Shu (capital Chengdu, 280k), and Chu (capital Changsha, 85k) promoted land reclamation, built sea walls along Hangzhou Bay, expanded tea and silk production, and stimulated international maritime trade [@Song2017State; @Zhang2021Research; @Huang2023Spatio]. When Emperor Taizu of Song (Zhao Kuangyin) seized power in Kaifeng in 960AD, China's total population stood at 53M (53.000.000), poised for the demographic and economic explosion of the Northern Song era [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge].

# Methodology

## Territorial Delimitation and Circuit Partitioning

The spatial reconstruction encompasses 9.389.222 km² (137.431 five-arcminute grid cells) matching the sovereign territorial footprint of historical China during the Sui-Tang era, including borderlands and frontier protectorates. To ensure analytical comparability across the four centuries of shifting administrative boundaries, the territory is partitioned into thirteen contiguous territorial units:

1. *Guannei Circuit*: Covering 236.787 km² (3.376 grid cells) across the Guanzhong basin, northern Shaanxi and the Ordos loop, anchored by the supreme imperial capital Chang'an.
2. *Henan Circuit*: Covering 307.562 km² (4.417 grid cells) across Henan and Shandong, encompassing the eastern capital Luoyang, the canal hub Bianzhou (Kaifeng), and the lower Yellow River plain.
3. *Hebei Circuit*: Covering 211.998 km² (3.185 grid cells) on the northern plain between the Taihang Mountains and the Bohai Gulf, extending north to Youzhou (Beijing).
4. *Hedong Circuit*: Covering 1.301.814 km² (20.757 grid cells) across Shanxi and the northern desert steppes, centered on the military and ancestral base of Taiyuan.
5. *Longyou Circuit and Western Regions*: Covering 2.036.928 km² (31.160 grid cells) across Gansu, Ningxia, Xinjiang and Central Asian protectorates (Anxi and Beiting), commanding the Silk Road corridors.
6. *Shannan Circuit*: Covering 178.837 km² (2.480 grid cells) in the Han River basin and northern Hubei, linking Guanzhong to the middle Yangtze.
7. *Huainan Circuit*: Covering 233.694 km² (3.347 grid cells) between the Huai and Yangtze rivers across Anhui and northern Jiangsu, anchored by the mercantile hub Yangzhou.
8. *Jiangnan Circuit*: Covering 602.994 km² (8.082 grid cells) across Zhejiang, Jiangxi, Hunan and Fujian, serving as the primary demographic recipient of northern migration.
9. *Jiannan Circuit*: Covering 560.138 km² (7.555 grid cells) across the Red Basin of Sichuan and the Three Gorges, centered on Chengdu.
10. *Lingnan Circuit*: Covering 449.260 km² (5.770 grid cells) across Guangdong, Guangxi and Hainan, anchored by the maritime port of Guangzhou.
11. *Liaodong and Bohai Northeast*: Covering 802.458 km² (13.360 grid cells) across Manchuria and the Korean frontier, encompassing the Bohai state capital Shangjing Longquanfu.
12. *Tubo Tibetan Empire and Nanzhao*: Covering 2.431.020 km² (33.451 grid cells) across the Tibetan plateau, Qinghai and the Yunnan-Guizhou highlands, anchored by Lhasa and Dali.
13. *Taiwan (Formosa)*: Covering 35.732 km² (491 grid cells) representing the pre-imperial Austronesian baseline of the island.

## Household Multipliers and Cadastral Synthesis

Demographic estimation across the ten historical benchmark years ($t \in [589, 609, 639, 700, 742, 755, 800, 820, 900, 960]$) integrates four distinct evidentiary corpora: the official dynastic histories (*Suishu*, *Jiu Tangshu*, *Xin Tangshu*, *Zizhi Tongjian*), administrative geographies (*Yuanhe Junxian Tuzhi*, *Taiping Huanyu Ji*), Dong Guodong's demographic reconstruction in *Zhongguo Renkou Shi*, and China Historical GIS (CHGIS V6) administrative layers [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge; @chgis_v6_2016].

In official dynastic returns, enumerations were conducted in registered households (*hu*) and taxable individuals (*kou* or *ding*). For the Sui Daye census of 609AD, registered households ($8,91M$) were converted to total population using regional household size multipliers derived by Dong Guodong:

$$P_r(t) = H_r(t) \times \bar{s}_r(t) + U_r(t)$$

where $H_r(t)$ denotes registered households, $\bar{s}_r(t)$ is the mean household multiplier (ranging from $5,4$ to $5,8$ persons per household in northern plain circuits down to $4,6$ to $5,1$ in frontier circuits), and $U_r(t)$ represents the estimated unrecorded population (monastic clergy, unfree household retainers, and non-Han aboriginal groups) [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge].

For the High Tang Tianbao rolls of 742AD and 755AD, household returns ($8,53M$ in 742AD and $8,91M$ in 755AD) were adjusted for fiscal evasion, which had escalated markedly following the decline of the equal-field distribution system [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform]. For the post-An Lushan period, where registered household counts shrank artificially due to warlord autonomy, estimates draw upon Li Jifu's *Yuanhe Junxian Tuzhi* (814AD) and Dong Guodong's circuit-by-circuit cadastral recalculations, which reconcile local rice tax yields and corvée quotas with biological demographic reality [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge].

## Non-Stationary Matérn Kriging Calibration Across East Asia

Spatial allocation within the thirteen territorial masks draws upon the East Asian kriging calibration, which aggregates 87.810 radiocarbon, epigraphic and archaeological site records across 1.274 domestic Voronoi catchments (163.892 valid five-arcminute grid cells) plus 562 frontier conditioning catchments extending into Central Asia, Siberia and Southeast Asia [@hosner_2016_pangaea; @chgis_v6_2016].

Following Freeman-Tukey square-root variance stabilisation and weighted least squares (WLS) regression on biophysical covariates (natural vegetation productivity, habitability fraction, terrain suitability, 13,5 km fluvial distance decay and smooth coastal proximity), residual spatial autocorrelation is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Across all ten Holocene horizons in the East Asian domain, regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ (raw 1,6277) and $\tau_2 = 2,775$, with an effective short range of 73,43 km, unregularised nugget-to-sill 0, regularised nugget-to-sill 0,04, and WLS goodness-of-fit $R^2 = 0,9995$ [@paciorek2006spatial]. Within each circuit mask, urban populations from 4.673 catalogued settlements are allocated directly to corresponding grid cells, with rural populations distributed across remaining habitable cells according to kriged agricultural potential surfaces [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @xiong2000sui].

# Testing and Validation

Cross-checking circuit cadastral totals against dynastic records and modern historical demography confirms exact arithmetic consistency across all ten benchmark years from 589AD to 960AD. Table \ref{tab:validation-sui-tang} sets out the population trajectory across all thirteen administrative and frontier territories.

<figure class="crd-table-figure" id="tab:validation-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Guannei</th><th class="crd-th">Henan</th><th class="crd-th">Hebei</th><th class="crd-th">Jiangnan</th><th class="crd-th">Jiannan</th><th class="crd-th">Huainan</th><th class="crd-th">Other Circuits</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>589AD</strong></td><td class="crd-td">4,8M</td><td class="crd-td">9,12M</td><td class="crd-td">7,68M</td><td class="crd-td">6,72M</td><td class="crd-td">4,08M</td><td class="crd-td">2,4M</td><td class="crd-td">13,2M</td><td class="crd-td">48M</td></tr>
<tr><td class="crd-td"><strong>609AD</strong></td><td class="crd-td">5,45M</td><td class="crd-td">10,36M</td><td class="crd-td">8,72M</td><td class="crd-td">7,63M</td><td class="crd-td">4,63M</td><td class="crd-td">2,73M</td><td class="crd-td">14,99M</td><td class="crd-td">54,5M</td></tr>
<tr><td class="crd-td"><strong>639AD</strong></td><td class="crd-td">3,1M</td><td class="crd-td">5,89M</td><td class="crd-td">4,96M</td><td class="crd-td">4,34M</td><td class="crd-td">2,63M</td><td class="crd-td">1,55M</td><td class="crd-td">8,53M</td><td class="crd-td">31M</td></tr>
<tr><td class="crd-td"><strong>700AD</strong></td><td class="crd-td">5,4M</td><td class="crd-td">10,26M</td><td class="crd-td">8,64M</td><td class="crd-td">7,56M</td><td class="crd-td">4,59M</td><td class="crd-td">2,7M</td><td class="crd-td">14,85M</td><td class="crd-td">54M</td></tr>
<tr><td class="crd-td"><strong>742AD</strong></td><td class="crd-td">6,85M</td><td class="crd-td">13,02M</td><td class="crd-td">10,96M</td><td class="crd-td">9,59M</td><td class="crd-td">5,82M</td><td class="crd-td">3,42M</td><td class="crd-td">18,84M</td><td class="crd-td">68,5M</td></tr>
<tr><td class="crd-td"><strong>755AD</strong></td><td class="crd-td">7,4M</td><td class="crd-td">14,06M</td><td class="crd-td">11,84M</td><td class="crd-td">10,36M</td><td class="crd-td">6,29M</td><td class="crd-td">3,7M</td><td class="crd-td">20,35M</td><td class="crd-td">74M</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">4,4M</td><td class="crd-td">7,15M</td><td class="crd-td">6,6M</td><td class="crd-td">13,2M</td><td class="crd-td">5,22M</td><td class="crd-td">3,58M</td><td class="crd-td">14,85M</td><td class="crd-td">55M</td></tr>
<tr><td class="crd-td"><strong>820AD</strong></td><td class="crd-td">4,6M</td><td class="crd-td">7,47M</td><td class="crd-td">6,9M</td><td class="crd-td">13,8M</td><td class="crd-td">5,46M</td><td class="crd-td">3,74M</td><td class="crd-td">15,53M</td><td class="crd-td">57,5M</td></tr>
<tr><td class="crd-td"><strong>900AD</strong></td><td class="crd-td">4,32M</td><td class="crd-td">7,02M</td><td class="crd-td">6,48M</td><td class="crd-td">12,96M</td><td class="crd-td">5,13M</td><td class="crd-td">3,51M</td><td class="crd-td">14,58M</td><td class="crd-td">54M</td></tr>
<tr><td class="crd-td"><strong>960AD</strong></td><td class="crd-td">4,24M</td><td class="crd-td">6,89M</td><td class="crd-td">6,36M</td><td class="crd-td">12,72M</td><td class="crd-td">5,04M</td><td class="crd-td">3,44M</td><td class="crd-td">14,31M</td><td class="crd-td">53M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Chinese population benchmarks across thirteen historical circuits and borderlands from 589AD to 960AD.</figcaption>
</figure>

Across the ten Holocene horizons of the East Asian kriging domain, Table \ref{tab:kriging-sui-tang} and Table \ref{tab:kriging-epochs-sui-tang} document the variogram parameter fits and empirical WLS regression slopes. Residual goodness-of-fit $R^2$ exceeds 0,9994 across all horizons, demonstrating stable spatial autocorrelation across the Chinese domain.

<figure class="crd-table-figure" id="tab:kriging-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (to 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0106</td><td class="crd-td">0,1177</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0471</td><td class="crd-td">0,7343</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00004</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0722</td><td class="crd-td">1,0729</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Zhou (2000 to 770BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000066</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1232</td><td class="crd-td">1,6294</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000038</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0654</td><td class="crd-td">0,9254</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00001</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0214</td><td class="crd-td">0,2085</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin, Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0323</td><td class="crd-td">0,3491</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0345</td><td class="crd-td">0,3384</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,05</td><td class="crd-td">0,9991</td><td class="crd-td">0,0367</td><td class="crd-td">0,3187</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial (1368 to 1912AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0879</td><td class="crd-td">0,706</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> East Asian kriging variogram diagnostics across ten Holocene horizons (163.892 valid land cells, regularised tau1 = 1,5, tau2 = 2,775).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Sites</th><th class="crd-th">Active Catchments</th><th class="crd-th">Habitability Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Fluvial Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (to 5000BC)</strong></td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,0487</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,0013</td><td class="crd-td">0,0185</td><td class="crd-td">0,0553</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,0034</td><td class="crd-td">0,0234</td><td class="crd-td">0,0566</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age Shang and Zhou (2000 to 770BC)</strong></td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,008</td><td class="crd-td">0,035</td><td class="crd-td">0,0549</td></tr>
<tr><td class="crd-td"><strong>5. Spring and Autumn and Warring States (770 to 221BC)</strong></td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,001</td><td class="crd-td">0,0315</td><td class="crd-td">0,0537</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,001</td><td class="crd-td">0,0204</td><td class="crd-td">0,049</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin, Northern and Southern Dynasties (220 to 589AD)</strong></td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,001</td><td class="crd-td">0,0256</td><td class="crd-td">0,0495</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,001</td><td class="crd-td">0,0278</td><td class="crd-td">0,0508</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,001</td><td class="crd-td">0,0282</td><td class="crd-td">0,0551</td></tr>
<tr><td class="crd-td"><strong>10. Ming and Qing Imperial (1368 to 1912AD)</strong></td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,0083</td><td class="crd-td">0,0409</td><td class="crd-td">0,0594</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Horizon archaeological site counts and WLS covariate slopes in the East Asian kriging domain.</figcaption>
</figure>

# Results

## Sui Expansion and the Daye Zenith (589AD to 609AD)

The reunification of 589AD initiated two decades of rapid demographic growth and agrarian consolidation (Figure \ref{fig:traj-sui-tang}). Total numbers rose from 48M in 589AD to 54,45M in 609AD, an expansion of 13,4% sustained by the clearing of new lands, the pacification of local warlords and the integration of the southern economy via the Grand Canal [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Flckiger2019Transport].

During this initial era, northern China maintained demographic supremacy. Henan Circuit held the largest concentration of population, expanding from 9,12M in 589AD to 10,36M in 609AD, followed by Hebei Circuit (7,68M rising to 8,72M) and Guannei Circuit (4,8M rising to 5,45M) [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Combined, these three northern core circuits accounted for 45,1% of the imperial total in 609AD. Jiangnan Circuit in the south was the fourth largest territory, holding 7,63M in 609AD (14% of the imperial total), followed by Jiannan in Sichuan (4,63M) and Hedong in Shanxi (4,09M) [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

<figure class="crd-figure-block" id="fig:traj-sui-tang">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-sui-tang-and-five-dynasties/fig2_sui_tang_and_five_dynasties_trajectory.png" alt="fig:traj-sui-tang" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of China from 589AD to 960AD across thirteen historical circuits and borderlands with sub-regional trajectory bands.</figcaption>
</figure>

Urban development during the Sui era was concentrated around the western and eastern capitals. Daxing (Chang'an), designed by Yuwen Kai in 582AD, grew to 450k residents by 609AD, while Luoyang reached 380k [@xiong2000sui; @Yin2021Comparative]. Commercial centres along the canal routes expanded rapidly: Yangzhou on the Yangtze reached 220k, Bianzhou (Kaifeng) grew to 180k, and Jiangling (Jingzhou) on the middle Yangtze reached 140k [@Huang2021Rise; @Chen2023Boat].

## High Tang Florescence and the Tianbao Peak (639AD to 755AD)

Following the severe contraction of the Sui-Tang transition, which depressed imperial numbers to 31M by 639AD, the Tang dynasty fostered an unprecedented demographic recovery (Figure \ref{fig:shares-sui-tang}). Aggregate population surged to 54M in 700AD, 68,45M in 742AD and peaked at 74M (74.000.000) in 755AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge].

<figure class="crd-figure-block" id="fig:shares-sui-tang">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-sui-tang-and-five-dynasties/fig3_sui_tang_and_five_dynasties_shares.png" alt="fig:shares-sui-tang" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Percentage demographic shares and benchmark population comparison across the thirteen Chinese territories between 589AD and 960AD.</figcaption>
</figure>

At the 755AD Tianbao zenith, Henan Circuit reached its historical peak of 14,06M inhabitants, supporting an average density of 45,71 persons per km² across the Yellow River floodplain [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. Hebei Circuit followed with 11,84M (55,85 persons per km²), while Guannei Circuit reached 7,4M (31,25 persons per km²). In the south, Jiangnan Circuit had climbed to 10,36M, while Jiannan Circuit in Sichuan reached 6,29M (Table \ref{tab:regions-sui-tang}).

<figure class="crd-table-figure" id="tab:regions-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">589AD</th><th class="crd-th">609AD</th><th class="crd-th">639AD</th><th class="crd-th">755AD</th><th class="crd-th">820AD</th><th class="crd-th">960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Guannei Circuit (Chang'an and Shaanxi-Ordos)</strong></td><td class="crd-td">236.787</td><td class="crd-td">4,8M</td><td class="crd-td">5,45M</td><td class="crd-td">3,1M</td><td class="crd-td">7,4M</td><td class="crd-td">4,6M</td><td class="crd-td">4,24M</td></tr>
<tr><td class="crd-td"><strong>Henan Circuit (Luoyang, Henan and Shandong)</strong></td><td class="crd-td">307.562</td><td class="crd-td">9,12M</td><td class="crd-td">10,36M</td><td class="crd-td">5,89M</td><td class="crd-td">14,06M</td><td class="crd-td">7,47M</td><td class="crd-td">6,89M</td></tr>
<tr><td class="crd-td"><strong>Hebei Circuit (North China Plain)</strong></td><td class="crd-td">211.998</td><td class="crd-td">7,68M</td><td class="crd-td">8,72M</td><td class="crd-td">4,96M</td><td class="crd-td">11,84M</td><td class="crd-td">6,9M</td><td class="crd-td">6,36M</td></tr>
<tr><td class="crd-td"><strong>Hedong Circuit (Shanxi and Inner Mongolia Steppe)</strong></td><td class="crd-td">1.301.814</td><td class="crd-td">3,6M</td><td class="crd-td">4,09M</td><td class="crd-td">2,33M</td><td class="crd-td">5,55M</td><td class="crd-td">3,74M</td><td class="crd-td">3,44M</td></tr>
<tr><td class="crd-td"><strong>Longyou Circuit and Western Regions (Anxi-Beiting)</strong></td><td class="crd-td">2.036.928</td><td class="crd-td">1,44M</td><td class="crd-td">1,64M</td><td class="crd-td">930k</td><td class="crd-td">2,22M</td><td class="crd-td">1,15M</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Shannan Circuit (Han River and Hubei)</strong></td><td class="crd-td">178.837</td><td class="crd-td">2,88M</td><td class="crd-td">3,27M</td><td class="crd-td">1,86M</td><td class="crd-td">4,44M</td><td class="crd-td">3,74M</td><td class="crd-td">3,44M</td></tr>
<tr><td class="crd-td"><strong>Huainan Circuit (Yangzhou, Anhui and Northern Jiangsu)</strong></td><td class="crd-td">233.694</td><td class="crd-td">2,4M</td><td class="crd-td">2,73M</td><td class="crd-td">1,55M</td><td class="crd-td">3,7M</td><td class="crd-td">3,74M</td><td class="crd-td">3,44M</td></tr>
<tr><td class="crd-td"><strong>Jiangnan Circuit (Zhejiang, Jiangxi, Hunan and Fujian)</strong></td><td class="crd-td">602.994</td><td class="crd-td">6,72M</td><td class="crd-td">7,63M</td><td class="crd-td">4,34M</td><td class="crd-td">10,36M</td><td class="crd-td">13,8M</td><td class="crd-td">12,72M</td></tr>
<tr><td class="crd-td"><strong>Jiannan Circuit (Sichuan Basin and Chongqing)</strong></td><td class="crd-td">560.138</td><td class="crd-td">4,08M</td><td class="crd-td">4,63M</td><td class="crd-td">2,63M</td><td class="crd-td">6,29M</td><td class="crd-td">5,46M</td><td class="crd-td">5,04M</td></tr>
<tr><td class="crd-td"><strong>Lingnan Circuit (Guangdong, Guangxi and Hainan)</strong></td><td class="crd-td">449.260</td><td class="crd-td">1,92M</td><td class="crd-td">2,18M</td><td class="crd-td">1,24M</td><td class="crd-td">2,96M</td><td class="crd-td">2,88M</td><td class="crd-td">2,65M</td></tr>
<tr><td class="crd-td"><strong>Liaodong and Bohai Northeast</strong></td><td class="crd-td">802.458</td><td class="crd-td">1,2M</td><td class="crd-td">1,36M</td><td class="crd-td">775k</td><td class="crd-td">1,85M</td><td class="crd-td">1,44M</td><td class="crd-td">1,32M</td></tr>
<tr><td class="crd-td"><strong>Tubo Tibetan Empire and Nanzhao (Tibet, Qinghai, Yunnan-Guizhou)</strong></td><td class="crd-td">2.431.020</td><td class="crd-td">1,92M</td><td class="crd-td">2,18M</td><td class="crd-td">1,24M</td><td class="crd-td">2,96M</td><td class="crd-td">2,3M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Formosa)</strong></td><td class="crd-td">35.732</td><td class="crd-td">240k</td><td class="crd-td">272,5k</td><td class="crd-td">155k</td><td class="crd-td">370k</td><td class="crd-td">287,5k</td><td class="crd-td">265k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.389.222</td><td class="crd-td">48M</td><td class="crd-td">54,5M</td><td class="crd-td">31M</td><td class="crd-td">74M</td><td class="crd-td">57,5M</td><td class="crd-td">53M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population benchmarks across thirteen Chinese circuits and borderlands at six historical benchmarks, 589AD to 960AD.</figcaption>
</figure>

The High Tang witnessed the development of an integrated metropolitan hierarchy [@xiong2000sui; @Yin2021Comparative]. Chang'an reached 950k inhabitants in 742AD, functioning as the premier bureaucratic, ecclesiastical and commercial hub of East Asia [@xiong2000sui; @Chen2021Discussion]. Luoyang housed 550k residents, supported by massive state granaries such as Hanjia Cang, which stored over 5,8M bushels of grain [@xiong2000sui]. Commercial port cities along the Grand Canal and the southern coastline attained substantial urban scale: Yangzhou reached 320k, Kaifeng grew to 350k, Chengdu reached 280k, Suzhou housed 240k, Taiyuan reached 220k, and Guangzhou reached 200k [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Huang2021Rise; @Zhang2021Research].

## An Lushan Shock and the Great Southward Shift (755AD to 960AD)

The outbreak of the An Lushan Rebellion in December 755AD broke the demographic balance of imperial China [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. Eight years of continuous warfare, accompanied by floods, famines and epidemic outbreaks, devastated Henan, Hebei and Guannei Circuits [@Kempf2025Hydroclimatic; @Lee2022Population]. By 800AD, the population of Henan Circuit had fallen by 49,1% from 14,06M to 7,15M, Hebei Circuit contracted by 44,3% from 11,84M to 6,6M, and Guannei Circuit declined by 40,5% from 7,4M to 4,4M [@dong_guodong_2002_zhongguo_renkou_shi_vol2].

In contrast, southern China received waves of northern emigrants fleeing the devastation [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform]. Jiangnan Circuit expanded from 10,36M in 755AD to 13,2M in 800AD and reached a pre-modern zenith of 13,8M during the Yuanhe period in 820AD [@dong_guodong_2002_zhongguo_renkou_shi_vol2]. The proportion of the imperial population residing in Jiangnan Circuit rose from 14% in 755AD to 24% in 820AD and 24% in 960AD (Figure \ref{fig:shares-sui-tang}).

Table \ref{tab:density-sui-tang} summarizes settlement counts and terminal densities across the thirteen territories. Overall human density in 960AD reached 5,64 persons per km² across the entire 9,389M km² domain. Across core agricultural regions, density remained intense, led by Hebei Circuit (30 persons per km²), Henan Circuit (22,4 persons per km²), Jiangnan Circuit (21,09 persons per km²), Shannan Circuit (19,26 persons per km²), and Guannei Circuit (17,91 persons per km²).

<figure class="crd-table-figure" id="tab:density-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">589AD</th><th class="crd-th">960AD</th><th class="crd-th">960AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Guannei Circuit (Chang'an and Shaanxi-Ordos)</strong></td><td class="crd-td">350</td><td class="crd-td">4,8M</td><td class="crd-td">4,24M</td><td class="crd-td">17,91</td></tr>
<tr><td class="crd-td"><strong>Henan Circuit (Luoyang, Henan and Shandong)</strong></td><td class="crd-td">707</td><td class="crd-td">9,12M</td><td class="crd-td">6,89M</td><td class="crd-td">22,4</td></tr>
<tr><td class="crd-td"><strong>Hebei Circuit (North China Plain)</strong></td><td class="crd-td">313</td><td class="crd-td">7,68M</td><td class="crd-td">6,36M</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>Hedong Circuit (Shanxi and Inner Mongolia Steppe)</strong></td><td class="crd-td">394</td><td class="crd-td">3,6M</td><td class="crd-td">3,44M</td><td class="crd-td">2,65</td></tr>
<tr><td class="crd-td"><strong>Longyou Circuit and Western Regions (Anxi-Beiting)</strong></td><td class="crd-td">190</td><td class="crd-td">1,44M</td><td class="crd-td">1,06M</td><td class="crd-td">0,52</td></tr>
<tr><td class="crd-td"><strong>Shannan Circuit (Han River and Hubei)</strong></td><td class="crd-td">242</td><td class="crd-td">2,88M</td><td class="crd-td">3,44M</td><td class="crd-td">19,26</td></tr>
<tr><td class="crd-td"><strong>Huainan Circuit (Yangzhou, Anhui and Northern Jiangsu)</strong></td><td class="crd-td">365</td><td class="crd-td">2,4M</td><td class="crd-td">3,44M</td><td class="crd-td">14,74</td></tr>
<tr><td class="crd-td"><strong>Jiangnan Circuit (Zhejiang, Jiangxi, Hunan and Fujian)</strong></td><td class="crd-td">646</td><td class="crd-td">6,72M</td><td class="crd-td">12,72M</td><td class="crd-td">21,09</td></tr>
<tr><td class="crd-td"><strong>Jiannan Circuit (Sichuan Basin and Chongqing)</strong></td><td class="crd-td">540</td><td class="crd-td">4,08M</td><td class="crd-td">5,04M</td><td class="crd-td">8,99</td></tr>
<tr><td class="crd-td"><strong>Lingnan Circuit (Guangdong, Guangxi and Hainan)</strong></td><td class="crd-td">634</td><td class="crd-td">1,92M</td><td class="crd-td">2,65M</td><td class="crd-td">5,9</td></tr>
<tr><td class="crd-td"><strong>Liaodong and Bohai Northeast</strong></td><td class="crd-td">31</td><td class="crd-td">1,2M</td><td class="crd-td">1,32M</td><td class="crd-td">1,65</td></tr>
<tr><td class="crd-td"><strong>Tubo Tibetan Empire and Nanzhao (Tibet, Qinghai, Yunnan-Guizhou)</strong></td><td class="crd-td">258</td><td class="crd-td">1,92M</td><td class="crd-td">2,12M</td><td class="crd-td">0,87</td></tr>
<tr><td class="crd-td"><strong>Taiwan (Formosa)</strong></td><td class="crd-td">3</td><td class="crd-td">240k</td><td class="crd-td">265k</td><td class="crd-td">7,42</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">4.673</td><td class="crd-td">48M</td><td class="crd-td">53M</td><td class="crd-td">5,64</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements (n=4.673), population benchmarks and terminal 960AD areal density (persons per km²).</figcaption>
</figure>

In the urban sector, the Five Dynasties and Ten Kingdoms period (907AD to 960AD) consolidated southern regional metropolises while northern capitals were restructured [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Song2017State]. Bianzhou (Kaifeng), serving as the capital of the Later Liang, Later Jin, Later Han and Later Zhou, grew to 480k residents by 960AD, becoming northern China's supreme commercial and administrative metropolis [@Huang2021Rise; @Liang2025Hierarchical]. In the south, Hangzhou expanded to 260k as the capital of Wuyue, Nanjing (Jinling) reached 210k under the Southern Tang, Chengdu maintained 240k under Former and Later Shu, and Guangzhou reached 180k under the Southern Han [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Zhang2021Research; @Zou2026Urban].

<figure class="crd-table-figure" id="tab:source-corpora-sui-tang">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. PANGAEA East Asian Archaeological Synthesis</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Administration Major Historical Sites</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>China Historical GIS (CHGIS V6) Dynastic Time Series</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>CHGIS 1820 Qing Administrative Centres and Towns</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource (AADR V66)</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Radiocarbon Database for East Asia</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Chronology</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Atlas Excavation Registry</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Taiwan Bureau of Cultural Heritage National Register</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Tibet and Kham Monastic Heritage Registry</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Russian Academy of Sciences Steppe Conditioning Belt</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Mongolian Steppe Archaeological Survey Corpus</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Component archaeological and historical registries aggregated into the East Asian kriging domain (87.981 site records).</figcaption>
</figure>

# Limitations

Three principal historiographical and evidentiary constraints govern demographic precision across the 589AD to 960AD period. First, official dynastic census returns (*hukou*) were conducted for taxation and military conscription rather than universal demographic enumeration [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. As a consequence, household returns systematically under-registered young children, unmarried women, Buddhist and Daoist monastic communities, and unfree agrarian dependents (*buqu*). While Dong Guodong's household multiplier adjustments correct for structural omissions, margins of uncertainty of plus or minus 10% to 15% remain inherent in early mediaeval statistical totals [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @ma_vonglahn_2022_cambridge].

Second, the collapse of central administrative reporting following the An Lushan Rebellion created an artificial divergence between registered households and biological population [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @twitchett1979cambridge]. Autonomous military commissioners (*jiedushi*) in Hebei and Henan routinely withheld fiscal registers from the central court, producing the illusion of catastrophic demographic extinction on imperial tax rolls [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Chen2025Reform]. Reconstructing mid-Tang and late-Tang population requires synthesising local tax grain shipments, corvée quotas and Buddhist ordination records with regional agricultural carrying capacity [@dong_guodong_2002_zhongguo_renkou_shi_vol2; @Lee2022Population].

Third, spatial allocation across vast frontier regions, particularly Tibet, Yunnan, Xinjiang and Manchuria, relies upon non-stationary density interpolation calibrated on biophysical covariates and archaeological settlement densities rather than continuous cadastral registers [@paciorek2006spatial; @hosner_2016_pangaea]. While major administrative seats and fortified capitals such as Shangjing Longquanfu, Dali, Lhasa and Gaochang are precisely documented, pastoral nomadic and tribal populations remained mobile, meaning localized grid densities reflect environmental carrying capacity rather than fixed municipal permanence [@hansen2012silk; @Beaujard2019Worlds].

# Conclusion

Between 589AD and 960AD, China traversed a transformative demographic cycle marked by imperial reunification, Grand Canal urbanisation, catastrophic mid-dynastic rebellion and a permanent southward shift of demographic gravity. The Sui dynasty reunified northern and southern populations at 48M in 589AD, expanding through canal construction and cadastral surveys to 54,45M in 609AD before civil warfare during the dynastic transition precipitated collapse to 31M by 639AD.

Under the High Tang, administrative consolidation and agricultural prosperity propelled numbers to an imperial zenith of 74M in 755AD, anchored by the primate capitals Chang'an (950k) and Luoyang (550k) alongside canal commercial hubs such as Yangzhou (320k) and Kaifeng (480k). The An Lushan Rebellion permanently shattered northern demographic supremacy, halving the populations of Henan and Hebei and driving millions of refugees across the Yangtze.

Supported by the Twice-Yearly Tax system of 780AD and wet-rice agricultural intensification, Jiangnan Circuit expanded from 6,72M in 589AD to over 13,8M in 820AD and 12,72M in 960AD, permanently displacing the northern plain as China's economic and human heartland. Across the Five Dynasties and Ten Kingdoms era, southern regional polities maintained demographic stability, establishing the economic and urban foundations upon which the Song dynasty achieved an aggregate population of 53M in 960AD.

# Sources

<div id="refs"></div>
