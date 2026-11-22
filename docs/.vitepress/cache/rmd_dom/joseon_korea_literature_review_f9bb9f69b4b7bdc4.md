---
title: "Demographic Trajectory of Korea During the Joseon Dynasty"
subtitle: "Household Registers, Eight Provincial Circulations, Famines and Dynastic Stagnation, 1392AD to 1910AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: joseon_korea_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_joseon_korea_spatial.png"
hero_caption: "Administrative partition and urban centres across the eight historical provinces of Joseon Korea from 1392AD to 1910AD."
hero_label: "fig:hero-joseon-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the provincial demography, settlement hierarchy and spatial population density of Korea under the Joseon Dynasty from the accession of King Taejo in 1392AD to the Japanese annexation and the residency-general census of 1910AD. Across the eight historical provinces (*Paldo*) covering 226.901 km² (3.462 five-arcminute raster cells), aggregate population expanded from 5,55M (5.550.000) in 1392AD to 7,05M (7.050.000) at the compilation of the *Sejong Sillok Jiriji* in 1450AD, climbed through agrarian reclamation and technological diffusion to 8,9M (8.900.000) by 1500AD and 11,2M (11.200.000) in 1550AD, and attained a pre-war apex of 14,06M (14.060.000) in 1591AD [@KwonShin1977Joseon; @Michell1979Fact; @March2024Gwon]. The catastrophic destruction of the Imjin War (1592AD to 1598AD) reduced total population by 20,3% to 11,2M (11.200.000) in 1600AD, followed by renewed devastation during the First and Second Manchu Invasions of 1627AD and 1636AD [@KwonShin1977Joseon; @Yang2016Japanese; @Min2018Joseon]. Severe climatic anomalies during the Little Ice Age provoked the devastating Gyeongsin Famine of 1670AD to 1671AD and the Eulbyeong Famine of 1695AD to 1699AD, temporarily checking post-war recovery before eighteenth-century agrarian intensification under Kings Yeongjo and Jeongjo propelled population to a dynastic peak of 18,66M (18.660.000) in 1750AD [@KwonShin1977Joseon; @Ji2023Technographical; @Kim2023Ancient]. Over the subsequent century, ecological degradation, severe deforesting of domestic watersheds, repeated cholera epidemics and structural administrative breakdown (*samjeong mulan*) precipitated prolonged demographic stagnation and decline, with population falling to 16,48M (16.480.000) in 1850AD before slowly recovering to 17,43M (17.430.000) at the close of the dynasty in 1910AD [@Cha2009LivingStandards; @Kim2023Reconstruction; @Kwon1977Demography]. Reconciling official household tax registers (*Hojeok*) for pervasive institutional under-enumeration, omitted females, unrecorded infants and runaway bondservants (*nobi*) through the demographic baselines of Kwon and Shin (1977) and Michell (1979), this paper calibrates local densities using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 domestic catchments, 90.926 heritage and archaeological site-records, and 471 catalogued historical settlements led by Hanseong (Seoul, 241k), Kaesong (120k), Pyongyang (95k), Changwon (65k) and Ulsan (56k) [@Paciorek2006Matern; @KwonShin1977Joseon; @EberstadtBanister1992].

# Background

## Dynastic Foundation and the Eight Provinces

The establishment of the Joseon Dynasty in 1392AD by Yi Seong-gye (King Taejo) inaugurated a profound institutional reorganisation of the Korean Peninsula following the collapse of the Goryeo state [@KwonShin1977Joseon; @March2024Gwon]. In 1394AD, the royal court transferred the primary seat of government from Kaesong south to Hanseong (modern Seoul), constructing royal palaces, confucian ancestral shrines and encircling stone ramparts along the ridgelines of Bugaksan, Namsan, Inwangsan and Naksan [@March2024Gwon; @Kim2023Reconstruction]. To ensure uniform bureaucratic governance, the kingdom was partitioned into eight administrative provinces (*Paldo*, 八道), an enduring spatial framework that persisted with minor adjustments throughout the five centuries of the dynastic era:

1. Gyeonggi Province (*Gyeonggi-do*, 京畿道): Encompassing the metropolitan capital of Hanseong, the royal tombs, maritime access along the Han River estuary and crucial agricultural hinterlands covering 9.974 km² [@March2024Gwon; @Kim2023Reconstruction].
2. Chungcheong Province (*Chungcheong-do*, 忠淸道): Situated in the fertile central-western plains along the Geum River basin, covering 15.018 km² with its provincial administrative seat (*gamyeong*) established at Gongju [@KwonShin1977Joseon; @Ji2023Technographical].
3. Jeolla Province (*Jeolla-do*, 全羅道): Comprising the southwestern agricultural heartland, the vast alluvial plains of Honam, major offshore archipelagos and Jeju Island, encompassing 23.499 km² with its provincial capital at Jeonju [@KwonShin1977Joseon; @Michell1979Fact].
4. Gyeongsang Province (*Gyeongsang-do*, 慶尙道): The expansive southeastern basin drained by the Nakdong River system, covering 32.586 km² and anchored by historic urban nodes at Sangju, Daegu, Gyeongju, Jinju, Andong and the maritime port of Busan [@KwonShin1977Joseon; @Yang2016Japanese; @Min2024Study].
5. Gangwon Province (*Gangwon-do*, 江原道): The rugged eastern mountainous spine traversed by the Taebaek Range, extending across 32.478 km² from the central plateau to the eastern littoral with its provincial seat at Wonju [@KwonShin1977Joseon; @Park2017Spatial].
6. Hwanghae Province (*Hwanghae-do*, 黃海道): The agricultural and coastal territory northwest of Gyeonggi covering 18.016 km², anchored by Haeju and the former royal capital of Kaesong [@KwonShin1977Joseon; @Michell1979Fact].
7. Pyongan Province (*Pyongan-do*, 平安道): The northwestern frontier march encompassing the fertile Daedong and Chongchon river basins and bordering Ming China along the Yalu River, covering 42.643 km² with its provincial headquarters at Pyongyang [@KwonShin1977Joseon; @March2024Gwon].
8. Hamgyong Province (*Hamgyong-do*, 咸鏡道): The long northeastern frontier corridor extending along the Sea of Japan (East Sea) and the Tumen River toward Jurchen lands, covering 52.687 km² with major administrative garrisons at Hamhung and Kyongsong [@KwonShin1977Joseon; @Han2018Retrospective].

During the fifteenth-century reign of King Sejong the Great (reigned 1418AD to 1450AD), the Joseon state completed the active pacification of its northern borderlands [@March2024Gwon; @Han2018Retrospective]. Through the establishment of the Four Forts (*Sagun*, 四郡) along the upper Yalu River and the Six Garrisons (*Yukjin*, 六鎭) along the lower Tumen River, royal forces secured the northern boundary against Jurchen raids [@March2024Gwon; @Min2018Joseon]. The court instituted systematic internal resettlement programmes (*saminjeongchaek*), transferring tens of thousands of peasant households from densely populated southern counties in Gyeongsang and Jeolla into the newly fortified valleys of Pyongan and Hamgyong [@KwonShin1977Joseon; @Min2018Joseon]. This state-directed colonisation lifted Pyongan from 611k inhabitants in 1392AD to 804k by 1450AD and Hamgyong from 389k to 501k, permanently establishing Korean agrarian settlement up to the international river frontiers [@KwonShin1977Joseon; @March2024Gwon].

## The Household Registration System and Fiscal Under-Enumeration

The principal administrative instrument for documenting population throughout the dynastic era was the triennial census register (*Hojeok*, 戶籍), mandated by royal decree every three years in the cyclical years of the Rat, Rabbit, Horse and Cock [@KwonShin1977Joseon; @Michell1979Fact]. Under the statutory framework formalised in the *Gyeongguk Daejeon* (Complete Code of Law, 1485AD), local magistrates across all 330 counties (*gun* and *hyeon*) were charged with compiling detailed household rolls recording the name, age, ancestral clan seat (*bon-gwan*), official rank or status, and four paternal and maternal forebears for every resident household head, together with resident family members and private bondservants (*nobi*) [@KwonShin1977Joseon; @Michell1979Fact].

Administrative oversight was maintained through the *Ogapjakje* (five-household mutual responsibility system), which linked every five adjacent dwellings into a joint surveillance unit under an appointed tithing head, and the *hopae* (identification tag system), which required all males aged sixteen and older to carry an engraved wooden or bone identity tablet stamped with their legal status and military obligation [@KwonShin1977Joseon; @Michell1979Fact]. The *Sejong Sillok Jiriji* (Geographic Treatise of the Veritable Records of King Sejong, completed between 1432AD and 1454AD) preserved the earliest kingdom-wide compilation of these cadastral and household tallies, recording 153.403 registered households and 692.477 individuals across the Eight Provinces [@KwonShin1977Joseon; @March2024Gwon].

However, modern historical demography, led by Kwon Tae-hwan, Shin Yong-ha and Tony Michell, has established that official *Hojeok* tallies represent administrative fiscal instruments rather than true biological enumerations [@KwonShin1977Joseon; @Michell1979Fact; @Kwon1977Demography]. Because inclusion on civil registers formed the basis for burdensome corvée labour levies (*buyeok*), military service (*gunyeok*) and tributary tribute quotas (*gongnap*), peasant cultivators went to extraordinary lengths to evade registration [@KwonShin1977Joseon; @Michell1979Fact]. Local village elders and hereditary county clerks (*hyangni*) routinely conspired to omit adult females, yielding impossible official sex ratios ranging from 130 to over 160 males per 100 females across surviving fifteenth-century and sixteenth-century registers [@KwonShin1977Joseon; @Michell1979Fact]. Furthermore, infants and unweaned children were universally omitted, non-inheriting secondary sons were concealed, and large populations of landless agricultural labourers (*chong-gak*), runaway bondservants (*domang nobi*) and itinerant peddlers wandered outside the purview of county yamens [@KwonShin1977Joseon; @Michell1979Fact].

By applying life-table backward projection, balancing biological sex ratios toward normal demographic ranges (105 to 108 males per 100 females), and restoring infant cohorts from early twentieth-century stable population models, Kwon and Shin demonstrated that early Joseon biological population exceeded registered fiscal numbers by more than sevenfold [@KwonShin1977Joseon; @Kwon1977Demography]. Real aggregate population expanded from 5,55M at the founding accession in 1392AD to 7,05M by 1450AD, crossed 8,9M by 1500AD, reached 11,2M by 1550AD, and attained a pre-invasion peak of 14,06M on the eve of the Japanese invasions in 1591AD [@KwonShin1977Joseon; @Michell1979Fact].

## The Imjin War and Manchu Invasions

The prolonged demographic expansion of the early Joseon period came to a violent termination with the outbreak of the Imjin War (1592AD to 1598AD) [@KwonShin1977Joseon; @Yang2016Japanese]. In the fifth month of 1592AD, a Japanese expeditionary force exceeding 158.000 soldiers under Toyotomi Hideyoshi landed at Busan, advancing north along three primary routes to capture Hanseong within three weeks and pushing past Pyongyang to the Yalu River [@Yang2016Japanese; @Min2018Joseon]. Although naval campaigns led by Admiral Yi Sun-sin severed maritime supply lines and Ming military intervention alongside righteous peasant armies (*uibyeong*) forced a Japanese retreat to southern coastal fortifications (*wajō*), six years of warfare devastated the peninsula's agricultural heartlands [@Yang2016Japanese; @Han2018Retrospective].

The human toll of the conflict was immense. Beyond battlefield casualties, retreating armies enacted scorched-earth policies, burning state granaries, provincial archives and residential quarters [@Yang2016Japanese; @Woo2015Paleopathological]. In Gyeongsang Province, through which invading and retreating forces marched repeatedly, registered arable land plummeted from over 500k *gyeol* to under 70k *gyeol* in immediate post-war cadastral surveys [@KwonShin1977Joseon; @Michell1979Fact]. Epidemic disease, particularly typhus and hemorrhagic dysentery, swept through displaced refugee encampments and besieged fortresses, while unharvested fields caused severe nationwide famine from 1593AD to 1595AD [@KwonShin1977Joseon; @Woo2015Paleopathological]. Thousands of Korean artisans, scholars and peasants were forcibly deported to Japan, creating permanent diasporic enclaves [@Yang2016Japanese; @Shim2015Study].

Kwon and Shin calculated that the Imjin War resulted in the direct or indirect mortality of 2,86M people, causing the kingdom's aggregate population to contract by 20,3% from 14,06M in 1591AD to 11,2M in 1600AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon]. Gyeongsang lost 20,5% of its inhabitants, falling from 3,23M to 2,57M; Jeolla dropped from 2,48M to 1,98M; and Gyeonggi fell from 1,83M to 1,46M [@KwonShin1977Joseon].

Recovery in the early seventeenth century was severely interrupted by the northern invasions of the emerging Manchu state [@KwonShin1977Joseon; @Min2018Joseon]. In 1627AD, Later Jin armies launched the First Manchu Invasion (*Jeongmyo Horan*), devastating Pyongan and Hwanghae [@KwonShin1977Joseon]. Nine years later, in the winter of 1636AD, Hong Taiji led a massive invasion force of 100.000 Manchu, Mongol and Chinese banner troops in the Second Manchu Invasion (*Byeongja Horan*), isolating King Injo inside the mountain fortress of Namhansanseong [@KwonShin1977Joseon; @Min2018Joseon]. Following the royal capitulation at Samjeondo in early 1637AD, royal princes and an estimated 100k to 500k civilian captives were driven north into Manchuria as bondservants and hostages, depressing population in 1637AD to 11,6M and delaying recovery in the northwest for decades [@KwonShin1977Joseon; @Min2018Joseon].

## Little Ice Age Famines and Epidemiological Crises

During the middle and late seventeenth century, Korea entered the coldest and climatically most unstable phase of the Little Ice Age, characterised by sharp temperature depressions, unseasonal spring blizzards, summer flooding and prolonged spring droughts [@Kim2023Ancient; @Ji2023Technographical; @Park2017Spatial]. The Joseon administrative apparatus maintained systematic hydrological observation using the *Chugugi* (standardised cylindrical rain gauge network deployed across all county yamens after 1441AD) and the *Supyo* (graduated water-level bridge gauge on the Cheonggyecheon stream in Hanseong), leaving exceptionally detailed meteorological records in the *Joseon Wangjo Sillok* (Veritable Records of the Joseon Dynasty) [@Kim2023Ancient; @Kim2023Reconstruction].

These records document catastrophic environmental crises that struck the kingdom during consecutive reigns [@Kim2023Ancient; @Ji2023Technographical]. The most lethal was the Gyeongsin Great Famine (*Gyeongsin Dae-gigeun*, 庚辛大飢饉) of 1670AD to 1671AD under King Hyeonjong [@KwonShin1977Joseon; @Kim2023Ancient]. In 1670AD, late frosts in the fifth lunar month destroyed sprouting crops, followed by massive hailstorms, summer monsoon flooding across the southern river basins, and an unprecedented autumn drought accompanied by locust swarms [@Kim2023Ancient; @Ji2023Technographical]. In the subsequent spring of 1671AD, starving peasants consumed pine bark, acorns and grass roots, while virulent epidemics of typhus, dysentery and smallpox erupted across all eight provinces [@KwonShin1977Joseon; @Kim2014Radiological; @Woo2015Paleopathological]. The *Sillok* recorded reports from provincial governors estimating that between 500k and 1M people perished over these eighteen months [@KwonShin1977Joseon]. Bioarchaeological examinations of seventeenth-century Joseon burials and mummified remains confirm high rates of congenital distress, malnutrition, dental hypoplasia and parasitic infestations across both rural commoners and elite lineages during this crisis [@Kim2014Radiological; @Hershkovitz2014Possible; @Woo2015Paleopathological].

A second catastrophic mortality crisis, the Eulbyeong Great Famine (*Eulbyeong Dae-gigeun*, 乙丙大飢饉), struck the kingdom between 1695AD and 1699AD during the reign of King Sukjong [@KwonShin1977Joseon]. Once again, cold summer temperatures, early winter frosts and consecutive harvest failures killed an estimated 1M to 1,4M persons across the peninsula, driving hundreds of thousands of dispossessed peasants to flee their ancestral villages and register under powerful aristocratic lineages (*yangban*) for protection [@KwonShin1977Joseon; @Michell1979Fact]. These twin seventeenth-century catastrophes severely checked demographic growth, keeping aggregate population at 12,3M in 1650AD, 13,4M in 1678AD and 13,8M in 1700AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon].

## Eighteenth-Century Agrarian Expansion and the Demographic Apex

The eighteenth century witnessed a dramatic recovery and expansion in Korean demography, coinciding with the long reigns of King Yeongjo (reigned 1724AD to 1776AD) and King Jeongjo (reigned 1776AD to 1800AD) [@KwonShin1977Joseon; @Michell1979Fact; @Cha2009LivingStandards]. Under their enlightened statecraft (*tangpyeongchaek*), the Joseon state enacted fundamental institutional and fiscal reforms designed to stabilise peasant livelihoods and restore royal finances [@KwonShin1977Joseon; @Min2024Study].

In 1750AD, King Yeongjo promulgated the Equalised Tax Act (*Gyunyeokbeop*, 均役法), which halved the annual military cloth levy on commoner males from two bolts of cotton cloth to one bolt, offsetting the state revenue shortfall by taxing luxury fisheries, salt works and requiring wealthy *yangban* landowners to pay an additional land surcharge (*gyeoljak*) [@KwonShin1977Joseon; @Michell1979Fact]. Concurrently, Korean agriculture underwent a technological revolution through the widespread adoption of the wet-field transplantation method (*yangi-beop*, 移秧法) [@Ji2023Technographical; @Kim2025Droughtproof]. While earlier Joseon law had discouraged transplantation due to the catastrophic risk of spring droughts, eighteenth-century local communities and state authorities constructed thousands of stone-and-earth diversion weirs (*bo*), agricultural ponds (*jeonji*) and river embankments along the Nakdong, Geum, Mangyeong and Yeongsan river basins [@Ji2023Technographical; @Kim2023Ancient]. Transplantation allowed simultaneous weeding, cut labour requirements by half, and permitted systematic double-cropping of barley or winter wheat on paddy fields before the summer rice planting [@Ji2023Technographical; @Kim2025Droughtproof].

Agricultural productivity was further reinforced by the introduction and dispersion of New World crops [@Ji2023Technographical; @Kim2025Droughtproof]. Chili peppers (*gochu*), introduced in the late sixteenth century, revolutionized food preservation and nutritional uptake; tobacco (*dambaek*) expanded across upland hillsides; and in 1763AD, scholar-official Gang Pil-ju introduced the sweet potato (*goguma*) from the Japanese island of Tsushima, establishing drought-resilient starch cultivation across southern coastal districts and Jeju Island [@Shim2015Study; @Jeong2017Study; @Kim2025Droughtproof]. The expansion of rural market networks (*jangsi*, 場市) operating on a five-day periodic cycle linked remote mountain hamlets to coastal and riverine trade nodes, lubricated by the widespread minting and circulation of standard copper coinage (*sangpyeong tongbo*, 常平通寶) [@Min2024Study; @Shim2015Study].

Under these favourable conditions, Korea experienced rapid natural increase, expanding by 35,2% over five decades to reach an all-time dynastic peak of 18,66M (18.660.000) in 1750AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon; @Michell1979Fact]. Gyeongsang Province became the kingdom's foremost demographic anchor, sustaining 4,09M people; Jeolla reached 3,21M; Pyongan climbed to 2,7M; Gyeonggi expanded to 2,37M; and Chungcheong reached 2,32M [@KwonShin1977Joseon].

## Nineteenth-Century Stagnation, Agrarian Crisis and Annexation

After reaching its peak in the mid-eighteenth century, the Joseon demographic system encountered severe structural limits, entering more than a century of stagnation, localized economic contraction and demographic decline [@Cha2009LivingStandards; @KwonShin1977Joseon]. As documented by Cha Myung Soo (2009), real agricultural wages, grain yields per unit of land and living standards trended downward throughout the nineteenth century [@Cha2009LivingStandards].

Several interlocking factors provoked this protracted crisis. First, intense population pressure on arable land exhausted available lowland soils, forcing cultivators to clear steep hillside plots (*hwajeon*, slash-and-burn agriculture) across Gangwon, Hamgyong and northern Pyongan [@Cha2009LivingStandards; @Ji2023Technographical]. Massive deforestation for firewood, building timber and charcoal stripped domestic hillsides, resulting in catastrophic soil erosion and the heavy silting of primary riverbeds [@Ji2023Technographical; @Kim2023Reconstruction]. During torrential summer monsoons, elevated riverbeds breached levees, causing destructive sand deposition on fertile lowland paddies and inundating urban centres, as exemplified by the catastrophic Hanseong flood of 1855AD [@Kim2023Reconstruction; @Ji2023Technographical].

Second, the royal administration deteriorated following the death of King Jeongjo in 1800AD [@Cha2009LivingStandards]. During the succeeding decades of in-law factional dominance (*sedo jeongchi*) by the Andong Kim and Pungyang Jo aristocratic lineages, central supervision collapsed, leading to the systemic breakdown of the Three Forms of Taxation (*samjeong mulan*, 三政紊亂): the land tax (*jeonjeong*), the militarycloth tax (*gunjeong*) and the state grain loan granary system (*hwangok*) [@Cha2009LivingStandards; @KwonShin1977Joseon]. Local county magistrates and corrupt clerks transformed the *hwangok* relief loan system into an extortionate usury mechanism, forcing rotten grain mixed with sand upon starving peasants and demanding excessive repayment at harvest [@Cha2009LivingStandards].

Third, virulent cholera pandemics (*horan*, 虎亂) arrived from South Asia via China, striking Korea in 1821AD, 1822AD, 1858AD to 1860AD and the 1880s [@KwonShin1977Joseon; @Cha2009LivingStandards]. The first pandemic of 1821AD killed an estimated 300k to 500k people across the peninsula within a single season, paralyzing commerce and emptying provincial towns [@KwonShin1977Joseon]. Despairing peasants launched large-scale uprisings, including the Hong Gyeong-nae Rebellion in Pyongan (1811AD to 1812AD), the Jinju Uprising and Imsul Peasant Revolts across the south in 1862AD, and the revolutionary Donghak Movement of 1894AD [@Cha2009LivingStandards; @KwonShin1977Joseon].

Between 1750AD and 1850AD, Korea's population declined by 11,7%, contracting from 18,66M to 16,48M (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon; @Cha2009LivingStandards]. A modest recovery occurred in the late nineteenth century as maritime trade expanded through open treaty ports (Busan, Wonsan, Incheon) following the Treaty of Ganghwa in 1876AD, lifting population to 16,8M in 1876AD and 17,08M by 1900AD [@KwonShin1977Joseon; @Kwon1977Demography]. Following the Russo-Japanese War and the establishment of the Japanese Residency-General (*Tonggambu*) in 1905AD, colonial authorities conducted a kingdom-wide civil registration survey in 1909AD to 1910AD, which recorded 13,3M residents [@Kwon1977Demography; @KwonShin1977Joseon]. Back-projecting from the rigorous modern colonial censuses of 1925AD and 1930AD, Kwon Tae-hwan demonstrated that this initial police survey missed approximately 23% of the biological population, establishing a true nationwide baseline of 17,43M (17.430.000) at annexation in 1910AD [@Kwon1977Demography; @KwonShin1977Joseon; @EberstadtBanister1992].

# Methodology

## Territorial Partition and Provincial Masks

To reconcile historical territorial definitions with spatial raster modeling across the 518-year dynastic span, this study partitions the Korean Peninsula into eight provincial units covering 226.901 km² across 3.462 five-arcminute grid cells (Table \ref{tab:regions-joseon}):

1. Gyeonggi Province (including Hanseong Metropolitan Domain): 9.974 km² (148 valid land cells).
2. Chungcheong Province: 15.018 km² (228 valid land cells).
3. Jeolla Province (including Jeju Island): 23.499 km² (367 valid land cells).
4. Gyeongsang Province: 32.586 km² (472 valid land cells).
5. Gangwon Province: 32.478 km² (506 valid land cells).
6. Hwanghae Province: 18.016 km² (275 valid land cells).
7. Pyongan Province: 42.643 km² (653 valid land cells).
8. Hamgyong Province: 52.687 km² (813 valid land cells).

At each historical benchmark year $t \in \{1392, 1450, 1500, 1550, 1591, 1600, 1637, 1650, 1678, 1700, 1750, 1800, 1850, 1876, 1900, 1905, 1910\}$, regional population $P_r(t)$ synthesises corrected civil household tallies $H_r(t)$, unrecorded infant and female cohorts $U_r(t)$, and institutional military and bondservant populations $M_r(t)$:

$$P_r(t) = H_r(t) \cdot \mu_r(t) + U_r(t) + M_r(t)$$

where $\mu_r(t)$ denotes the empirically calibrated provincial household multiplier, derived from genealogical records (*jokbo*), private diaries and demographic life tables [@KwonShin1977Joseon; @Michell1979Fact].

## Household Multipliers and Civil Roll Correction

Following the analytical framework of Kwon Tae-hwan and Shin Yong-ha (1977), raw *Hojeok* returns are adjusted through systematic correction factors [@KwonShin1977Joseon; @Michell1979Fact]. For the early Joseon period (1392AD to 1591AD), official returns recorded an average household size of only 3,2 to 4,1 persons, an artifact of concealing secondary sons, women and young children [@KwonShin1977Joseon; @Michell1979Fact]. Reconstructed biological household multipliers range from 5,6 persons per dwelling in southern agricultural plains to 6,2 persons in northern frontier extended households [@KwonShin1977Joseon].

For the mid-to-late Joseon era, registered numbers fossilised as local officials sought to prevent escalating tax grain quotas [@KwonShin1977Joseon; @Michell1979Fact]. By comparing registered *Hojeok* totals against salt tax yields, military cloth revenues and clan expansion rates, Kwon and Shin developed province-specific under-registration multipliers:
- Gyeonggi and Chungcheong: Under-registration factors ranging from 1,85 to 2,2 across the eighteenth century [@KwonShin1977Joseon].
- Jeolla and Gyeongsang: Multipliers of 2,1 to 2,45 reflecting extensive tax evasion among southern rice farmers and hidden bondservant populations [@KwonShin1977Joseon].
- Gangwon and Hwanghae: Multipliers of 1,75 to 2,05 [@KwonShin1977Joseon].
- Pyongan and Hamgyong: Multipliers of 1,6 to 1,95 reflecting stronger administrative incentives for northern frontier recruitment and trade [@KwonShin1977Joseon].

Applying these empirical adjustments reconciles the historical narrative with biological survival requirements, yielding the benchmark trajectories documented in Table \ref{tab:validation-joseon}.

## Non-Stationary Kriging and Biophysical Covariates

Spatial allocation within the eight provincial territorial masks draws on the Korean Peninsula and Japanese Archipelago kriging domain, which coordinates 90.926 domestic heritage and archaeological site-records across 384 active domestic catchments (covering 9.224 valid land cells across Korea and Japan) [@Paciorek2006Matern; @Park2017Spatial].

Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,42$ and $\tau_2 = 2,63$, with nugget-to-sill ratios of 0,04 for early Joseon and 0,22 for late Joseon horizons (Table \ref{tab:kriging-joseon}). The model incorporates five biophysical covariates:
1. Habitable land fraction ($\beta_0 = 0,0435$ in Horizon 8, $0,0385$ in Horizon 9): Penalizing high alpine terrain in the Taebaek and Kaema plateaus [@Park2017Spatial].
2. Natural vegetative productivity index ($\beta_1 = 0,0100$): Reflecting forest and grassland carrying capacity [@Park2017Spatial].
3. Ecozone terrain suitability ($\beta_2 = 0,0100$): Calibrated for wet-paddy rice and double-cropped dry grains [@Ji2023Technographical].
4. Fluvial decay ($\beta_3 = 0,0712$ in Horizon 8, $0,0623$ in Horizon 9): Modeling intense human concentration along major river valleys, specifically the Han, Geum, Nakdong, Yeongsan, Daedong and Yalu rivers [@Ji2023Technographical; @Kim2023Reconstruction].
5. Coastal proximity ($\beta_4 = 0,0171$ in Horizon 8, $0,0247$ in Horizon 9): Capturing maritime commerce, fishing villages and port settlements [@Min2024Study; @Jeong2017Study].

Urban populations from 471 catalogued historical settlements (led by Hanseong, Kaesong, Pyongyang, Changwon, Ulsan, Daegu, Jeonju and Busan) are conditioned locally, with urban population masks subtracted to preserve rural densities inside each provincial boundary [@KwonShin1977Joseon; @EberstadtBanister1992].

# Testing and Validation

Arithmetic cross-checks confirm exact consistency between the provincial series generated here and the demographic benchmarks established by Kwon and Shin (1977) and Michell (1979). Table \ref{tab:validation-joseon} details the longitudinal trajectory across all seventeen benchmark years from 1392AD to 1910AD, decomposed into macro-regional groupings.

<figure class="crd-table-figure" id="tab:validation-joseon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Capital and Central</th><th class="crd-th">Southern Core</th><th class="crd-th">Northern Frontier</th><th class="crd-th">Kingdom Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1392AD</strong></td><td class="crd-td">1,5M</td><td class="crd-td">3,05M</td><td class="crd-td">999k</td><td class="crd-td">5,55M</td></tr>
<tr><td class="crd-td"><strong>1450AD</strong></td><td class="crd-td">1,9M</td><td class="crd-td">3,85M</td><td class="crd-td">1,3M</td><td class="crd-td">7,05M</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">2,39M</td><td class="crd-td">4,83M</td><td class="crd-td">1,69M</td><td class="crd-td">8,9M</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">2,99M</td><td class="crd-td">6,04M</td><td class="crd-td">2,17M</td><td class="crd-td">11,2M</td></tr>
<tr><td class="crd-td"><strong>1591AD</strong></td><td class="crd-td">3,75M</td><td class="crd-td">7,54M</td><td class="crd-td">2,78M</td><td class="crd-td">14,06M</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">2,98M</td><td class="crd-td">6M</td><td class="crd-td">2,22M</td><td class="crd-td">11,2M</td></tr>
<tr><td class="crd-td"><strong>1637AD</strong></td><td class="crd-td">3,08M</td><td class="crd-td">6,18M</td><td class="crd-td">2,34M</td><td class="crd-td">11,6M</td></tr>
<tr><td class="crd-td"><strong>1650AD</strong></td><td class="crd-td">3,27M</td><td class="crd-td">6,54M</td><td class="crd-td">2,49M</td><td class="crd-td">12,3M</td></tr>
<tr><td class="crd-td"><strong>1678AD</strong></td><td class="crd-td">3,55M</td><td class="crd-td">7,1M</td><td class="crd-td">2,75M</td><td class="crd-td">13,4M</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">3,63M</td><td class="crd-td">7,25M</td><td class="crd-td">2,92M</td><td class="crd-td">13,8M</td></tr>
<tr><td class="crd-td"><strong>1750AD</strong></td><td class="crd-td">4,83M</td><td class="crd-td">9,61M</td><td class="crd-td">4,21M</td><td class="crd-td">18,66M</td></tr>
<tr><td class="crd-td"><strong>1800AD</strong></td><td class="crd-td">4,59M</td><td class="crd-td">9,09M</td><td class="crd-td">4,32M</td><td class="crd-td">18M</td></tr>
<tr><td class="crd-td"><strong>1850AD</strong></td><td class="crd-td">4,22M</td><td class="crd-td">8,47M</td><td class="crd-td">3,78M</td><td class="crd-td">16,48M</td></tr>
<tr><td class="crd-td"><strong>1876AD</strong></td><td class="crd-td">4,32M</td><td class="crd-td">8,72M</td><td class="crd-td">3,77M</td><td class="crd-td">16,8M</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">4,4M</td><td class="crd-td">8,94M</td><td class="crd-td">3,74M</td><td class="crd-td">17,08M</td></tr>
<tr><td class="crd-td"><strong>1905AD</strong></td><td class="crd-td">4,45M</td><td class="crd-td">9,04M</td><td class="crd-td">3,76M</td><td class="crd-td">17,25M</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">4,5M</td><td class="crd-td">9,15M</td><td class="crd-td">3,78M</td><td class="crd-td">17,43M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Joseon Korea, 1392AD to 1910AD, harmonised from Kwon and Shin (1977) and Michell (1979).</figcaption>
</figure>

Across all nine horizons in the Korean Peninsula and Japanese Archipelago kriging domain, Table \ref{tab:kriging-joseon} documents tightly regularised variogram parameters. Residual $R^2$ exceeds 0,93 across all epochs and reaches 0,998 in the Early Joseon horizon, with effective short ranges constrained to 35,66 km.

<figure class="crd-table-figure" id="tab:kriging-joseon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Jomon or Chulmun (before 3500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Jomon and Chulmun (3500BC to 2000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Jomon and Mumun Bronze (2000BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Yayoi, Gojoseon and Han Commanderies (300BC to 300AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Kofun and Three Kingdoms (300AD to 700AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Nara, Heian and Unified Silla (700AD to 1000AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Late Heian, Kamakura and Goryeo (1000AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Muromachi, Sengoku and Early Joseon (1392AD to 1600AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Edo, Late Joseon and Imperial Era (1600AD to 1910AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Korean and Japanese kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-joseon} details the component archaeological and historical registries aggregated into the kriging domain, highlighting the integration of Korean heritage databases, historical cadastres and radiocarbon inventories.

<figure class="crd-table-figure" id="tab:source-corpora-joseon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History Radiocarbon Database v1,3</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>National Museum of Japanese History Archaeological Site Register</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Japan Archaeological Society Kanto Archaeological Site Compendium</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Japan Archaeological Society Metropolitan Tokyo Site Survey</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure, Transport and Tourism Cultural Assets P32</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>National Historic Sites and Monuments Registry of Japan</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Cultural Heritage Register</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Korean Neolithic and Bronze Age Radiocarbon Inventory</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Archaeological Radiocarbon Series</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>National Archaeological Heritage Database of South Korea</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>Historical Monuments and Relics Registry of North Korea</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage North Korean Survey</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Sejong Sillok Jiriji Northern Boundary Settlement Extraction</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>East Asian Frontier Archaeological Buffer Survey</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the Korean Peninsula and Japanese Archipelago kriging domain.</figcaption>
</figure>

# Results

## Foundation and Early Dynastic Growth (1392AD to 1591AD)

Following the formal founding of Joseon in 1392AD, Korea experienced two centuries of uninterrupted demographic expansion (Figure \ref{fig:traj-joseon}) [@KwonShin1977Joseon; @Michell1979Fact]. The kingdom's aggregate population expanded from 5,55M in 1392AD to 7,05M in 1450AD, reached 8,9M in 1500AD, climbed to 11,2M in 1550AD, and attained a pre-war apex of 14,06M in 1591AD (Table \ref{tab:regions-joseon}) [@KwonShin1977Joseon].

<figure class="crd-figure-block" id="fig:traj-joseon">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-joseon-korea/fig2_joseon_korea_trajectory.png" alt="fig:traj-joseon" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Joseon Korea from 1392AD to 1910AD across the eight historical provinces with historical uncertainty intervals.</figcaption>
</figure>

During this foundational epoch, political stability under Kings Taejong, Sejong and Seongjong enabled massive expansion of arable acreage [@March2024Gwon; @Ji2023Technographical]. Land reclamation (*gae-gan*) focused on reclaiming tidal salt flats along the western coast of Gyeonggi and Chungcheong and draining inland valley swamps in Jeolla and Gyeongsang [@Ji2023Technographical]. Official registered arable land (*gyeol*) rose from approximately 500k *gyeol* in the late fourteenth century to over 1,5M *gyeol* on the eve of the Imjin War [@KwonShin1977Joseon; @Michell1979Fact].

Gyeongsang Province served as the primary demographic anchor of the early dynasty, growing from 1,33M in 1392AD to 3,23M in 1591AD (23% of the kingdom total) [@KwonShin1977Joseon]. Jeolla expanded from 1M to 2,48M, while Chungcheong and Gyeonggi each grew from 722k to 1,83M [@KwonShin1977Joseon]. In the northern frontier, state-directed peasant migrations and pacification campaigns lifted Pyongan from 611k to 1,74M and Hamgyong from 389k to 1,03M, cementing the northern borders along the Yalu and Tumen rivers [@KwonShin1977Joseon; @March2024Gwon; @Min2018Joseon].

## Wartime Cataclysm and Seventeenth-Century Mortality (1591AD to 1678AD)

The six years of the Imjin War (1592AD to 1598AD) inflicted unprecedented destruction across the Korean Peninsula [@Yang2016Japanese; @KwonShin1977Joseon]. Over 2,86M people died from military action, scorched-earth starvation and sweeping epidemics of typhus and dysentery, reducing total population by 20,3% to 11,2M in 1600AD (Table \ref{tab:regions-joseon}) [@KwonShin1977Joseon].

<figure class="crd-figure-block" id="fig:shares-joseon">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-joseon-korea/fig3_joseon_korea_shares.png" alt="fig:shares-joseon" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and comparative peak versus terminal 1910AD totals across the eight Joseon territories.</figcaption>
</figure>

The southern granaries bore the brunt of the Japanese occupation [@Yang2016Japanese]. Gyeongsang lost 662k people (-20,5%), Jeolla lost 507k (-20,4%), and Chungcheong contracted by 372k (-20,3%) [@KwonShin1977Joseon]. In Gyeonggi, Hanseong was occupied and largely burned, with its urban population fleeing into the surrounding hills [@Kim2023Reconstruction]. Following the Japanese withdrawal, the First and Second Manchu Invasions of 1627AD and 1636AD devastated Pyongan, Hwanghae and Gyeonggi, causing thousands of civilian deaths and the abduction of tens of thousands into Manchuria [@Min2018Joseon; @KwonShin1977Joseon].

Subsequent recovery was severely hampered by Little Ice Age climatic extremes [@Kim2023Ancient; @Ji2023Technographical]. The Gyeongsin Great Famine of 1670AD to 1671AD killed hundreds of thousands through combined summer floods and autumn crop failure, followed by widespread epidemics [@Kim2023Ancient; @Kim2014Radiological]. By 1678AD, population stood at 13,4M, still below the pre-invasion level attained eighty-seven years earlier [@KwonShin1977Joseon].

## Eighteenth-Century Renewal and the Dynastic Peak (1678AD to 1750AD)

Between 1678AD and 1750AD, Korea underwent a sustained agrarian renaissance, lifted by internal institutional reforms and agricultural innovations [@KwonShin1977Joseon; @Michell1979Fact; @Ji2023Technographical]. Kingdom-wide population expanded by 39,3%, rising from 13,4M in 1678AD to an all-time dynastic apex of 18,66M in 1750AD (Table \ref{tab:regions-joseon}) [@KwonShin1977Joseon].

<figure class="crd-table-figure" id="tab:regions-joseon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1392AD</th><th class="crd-th">1500AD</th><th class="crd-th">1591AD</th><th class="crd-th">1600AD</th><th class="crd-th">1678AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Gyeonggi (incl. Hanseong)</strong></td><td class="crd-td">9.974</td><td class="crd-td">721,5k</td><td class="crd-td">1,16M</td><td class="crd-td">1,83M</td><td class="crd-td">1,46M</td><td class="crd-td">1,74M</td><td class="crd-td">1,78M</td><td class="crd-td">2,37M</td><td class="crd-td">2,25M</td><td class="crd-td">2,02M</td><td class="crd-td">2,09M</td></tr>
<tr><td class="crd-td"><strong>2. Chungcheong Province</strong></td><td class="crd-td">15.018</td><td class="crd-td">721,5k</td><td class="crd-td">1,16M</td><td class="crd-td">1,83M</td><td class="crd-td">1,46M</td><td class="crd-td">1,74M</td><td class="crd-td">1,77M</td><td class="crd-td">2,32M</td><td class="crd-td">2,16M</td><td class="crd-td">1,96M</td><td class="crd-td">2,06M</td></tr>
<tr><td class="crd-td"><strong>3. Jeolla Province (incl. Jeju)</strong></td><td class="crd-td">23.499</td><td class="crd-td">999k</td><td class="crd-td">1,59M</td><td class="crd-td">2,48M</td><td class="crd-td">1,98M</td><td class="crd-td">2,35M</td><td class="crd-td">2,4M</td><td class="crd-td">3,21M</td><td class="crd-td">3,06M</td><td class="crd-td">2,89M</td><td class="crd-td">3,17M</td></tr>
<tr><td class="crd-td"><strong>4. Gyeongsang Province</strong></td><td class="crd-td">32.586</td><td class="crd-td">1,33M</td><td class="crd-td">2,09M</td><td class="crd-td">3,23M</td><td class="crd-td">2,57M</td><td class="crd-td">3,02M</td><td class="crd-td">3,08M</td><td class="crd-td">4,09M</td><td class="crd-td">3,87M</td><td class="crd-td">3,62M</td><td class="crd-td">3,92M</td></tr>
<tr><td class="crd-td"><strong>5. Gangwon Province</strong></td><td class="crd-td">32.478</td><td class="crd-td">277,5k</td><td class="crd-td">445k</td><td class="crd-td">703k</td><td class="crd-td">560k</td><td class="crd-td">670k</td><td class="crd-td">685k</td><td class="crd-td">911k</td><td class="crd-td">864k</td><td class="crd-td">880,9k</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>6. Hwanghae Province</strong></td><td class="crd-td">18.016</td><td class="crd-td">499,5k</td><td class="crd-td">784,2k</td><td class="crd-td">1,22M</td><td class="crd-td">967,3k</td><td class="crd-td">1,14M</td><td class="crd-td">1,17M</td><td class="crd-td">1,55M</td><td class="crd-td">1,48M</td><td class="crd-td">1,32M</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>7. Pyongan Province</strong></td><td class="crd-td">42.643</td><td class="crd-td">610,5k</td><td class="crd-td">1,05M</td><td class="crd-td">1,74M</td><td class="crd-td">1,39M</td><td class="crd-td">1,74M</td><td class="crd-td">1,86M</td><td class="crd-td">2,7M</td><td class="crd-td">2,79M</td><td class="crd-td">2,38M</td><td class="crd-td">2,3M</td></tr>
<tr><td class="crd-td"><strong>8. Hamgyong Province</strong></td><td class="crd-td">52.687</td><td class="crd-td">388,5k</td><td class="crd-td">639,8k</td><td class="crd-td">1,03M</td><td class="crd-td">824,7k</td><td class="crd-td">1M</td><td class="crd-td">1,06M</td><td class="crd-td">1,51M</td><td class="crd-td">1,53M</td><td class="crd-td">1,4M</td><td class="crd-td">1,48M</td></tr>
<tr><td class="crd-td"><strong>Kingdom Total</strong></td><td class="crd-td">226.901</td><td class="crd-td">5,55M</td><td class="crd-td">8,9M</td><td class="crd-td">14,06M</td><td class="crd-td">11,2M</td><td class="crd-td">13,4M</td><td class="crd-td">13,8M</td><td class="crd-td">18,66M</td><td class="crd-td">18M</td><td class="crd-td">16,48M</td><td class="crd-td">17,43M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across the eight Joseon territories, 1392AD to 1910AD, calculated from regional JSON registers.</figcaption>
</figure>

The adoption of wet-field rice transplantation (*yangi-beop*) accompanied by the widespread construction of reservoir embankments doubled rice yields across the southern basins [@Ji2023Technographical; @Kim2025Droughtproof]. Combined with winter barley cropping and the spread of drought-resistant New World crops, living standards and natural population growth reached their highest historical equilibrium [@Ji2023Technographical; @Cha2009LivingStandards]. At the 1750AD peak, Gyeongsang attained 4,09M (125,5 persons per km²), Jeolla reached 3,21M (136,6 persons per km²), Pyongan expanded to 2,7M (63,3 persons per km²), Gyeonggi reached 2,37M (237,7 persons per km²), and Chungcheong reached 2,32M (154,2 persons per km²) (Table \ref{tab:density-joseon}) [@KwonShin1977Joseon].

## Nineteenth-Century Stagnation and Decline (1750AD to 1910AD)

From 1750AD onward, the Joseon population entered a protracted contraction and stagnation that lasted for more than a century [@Cha2009LivingStandards; @KwonShin1977Joseon]. Total population contracted from 18,66M in 1750AD to 18M in 1800AD and reached a low of 16,48M in 1850AD, representing a net loss of 2,18M people (-11,7%) (Table \ref{tab:regions-joseon}) [@KwonShin1977Joseon; @Cha2009LivingStandards].

<figure class="crd-table-figure" id="tab:density-joseon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">1392AD</th><th class="crd-th">1750AD</th><th class="crd-th">1750AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Gyeonggi (incl. Hanseong)</strong></td><td class="crd-td">47</td><td class="crd-td">721,5k</td><td class="crd-td">2,37M</td><td class="crd-td">237,7</td></tr>
<tr><td class="crd-td"><strong>2. Chungcheong Province</strong></td><td class="crd-td">40</td><td class="crd-td">721,5k</td><td class="crd-td">2,32M</td><td class="crd-td">154,2</td></tr>
<tr><td class="crd-td"><strong>3. Jeolla Province (incl. Jeju)</strong></td><td class="crd-td">45</td><td class="crd-td">999k</td><td class="crd-td">3,21M</td><td class="crd-td">136,6</td></tr>
<tr><td class="crd-td"><strong>4. Gyeongsang Province</strong></td><td class="crd-td">66</td><td class="crd-td">1,33M</td><td class="crd-td">4,09M</td><td class="crd-td">125,5</td></tr>
<tr><td class="crd-td"><strong>5. Gangwon Province</strong></td><td class="crd-td">48</td><td class="crd-td">277,5k</td><td class="crd-td">911k</td><td class="crd-td">28</td></tr>
<tr><td class="crd-td"><strong>6. Hwanghae Province</strong></td><td class="crd-td">51</td><td class="crd-td">499,5k</td><td class="crd-td">1,55M</td><td class="crd-td">86,2</td></tr>
<tr><td class="crd-td"><strong>7. Pyongan Province</strong></td><td class="crd-td">97</td><td class="crd-td">610,5k</td><td class="crd-td">2,7M</td><td class="crd-td">63,3</td></tr>
<tr><td class="crd-td"><strong>8. Hamgyong Province</strong></td><td class="crd-td">77</td><td class="crd-td">388,5k</td><td class="crd-td">1,51M</td><td class="crd-td">28,7</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1392AD and 1750AD population benchmarks, and peak 1750AD density (persons per km²).</figcaption>
</figure>

The primary drivers of this nineteenth-century reversal were ecological and institutional [@Cha2009LivingStandards; @Ji2023Technographical]. Exhaustion of arable land led to intense cultivation of marginal hillsides, resulting in severe deforestation, watershed degradation and catastrophic monsoon flooding [@Ji2023Technographical; @Kim2023Reconstruction]. Concurrently, the collapse of central fiscal discipline under factional rule (*sedo jeongchi*) transformed the grain loan system (*hwangok*) into an oppressive extraction mechanism, impoverishing peasant cultivators and provoking widespread rebellions in 1811AD, 1862AD and 1894AD [@Cha2009LivingStandards; @KwonShin1977Joseon]. Virulent cholera epidemics starting in 1821AD exacerbated mortality across crowded market towns [@KwonShin1977Joseon].

Modest recovery began after the opening of ports in 1876AD, with population climbing to 16,8M in 1876AD, 17,08M in 1900AD and 17,43M in 1910AD [@KwonShin1977Joseon; @Kwon1977Demography].

## Provincial Trajectories across the Eight Provinces

### Capital and Central Region: Gyeonggi, Gangwon and Hwanghae

The central macro-region (Gyeonggi, Gangwon and Hwanghae, encompassing 60.468 km²) served as the political, administrative and communication nexus of the kingdom [@KwonShin1977Joseon; @March2024Gwon]. Together, they expanded from 1,5M in 1392AD to 3,75M in 1591AD, fell to 2,98M during the Imjin War, rebounded to a peak of 4,83M in 1750AD, and closed the dynasty at 4,5M in 1910AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon].

Gyeonggi Province maintained the kingdom's highest demographic density throughout the dynastic era, rising from 72,3 persons per km² in 1392AD to 237,7 persons per km² in 1750AD and 209,7 persons per km² in 1910AD [@KwonShin1977Joseon]. Growth in Gyeonggi was driven by the political and commercial gravitational pull of Hanseong [@Kim2023Reconstruction; @March2024Gwon]. Food security for the capital required vast annual tribute grain deliveries (*daedongmi*) brought by coastal cargo vessels (*seounseon*) up the Han River estuary to Mapo and Yongsan ports [@Kim2023Reconstruction]. Around the capital, secondary fortress cities at Suwon (fortified by King Jeongjo in the 1790s), Gwangju (Namhansanseong) and Ganghwa served as defensive redoubts and administrative hubs [@March2024Gwon; @Kim2023Reconstruction].

Gangwon Province, constrained by the rugged topography of the Taebaek Mountains, remained the most sparsely settled province, supporting only 8,5 persons per km² in 1392AD and peaking at 28,1 persons per km² in 1750AD [@KwonShin1977Joseon; @Park2017Spatial]. In contrast, Hwanghae Province combined productive coastal grain plains along the Yellow Sea with the ancient commercial metropolis of Kaesong, maintaining moderate densities of 27,7 persons per km² in 1392AD and 86,2 persons per km² in 1750AD [@KwonShin1977Joseon].

### Southern Agricultural Core: Chungcheong, Jeolla and Gyeongsang

The southern granary provinces (Chungcheong, Jeolla and Gyeongsang, covering 71.103 km²) formed the economic and demographic backbone of Joseon Korea [@KwonShin1977Joseon; @Michell1979Fact]. Together, they contained 3,05M residents in 1392AD (55% of the kingdom total), reached 7,54M in 1591AD (53,6%), suffered 1,54M wartime deaths to contract to 6M in 1600AD, surged to a peak of 9,61M in 1750AD (51,5%), and stood at 9,15M in 1910AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon].

Gyeongsang was the largest and most populous single province, drained by the expansive Nakdong River basin and protected by surrounding mountain chains [@KwonShin1977Joseon; @Yang2016Japanese]. It supported intensive double-cropping of rice and barley, producing rich agricultural surpluses that sustained prominent regional centres at Daegu, Sangju, Jinju, Andong and Gyeongju [@KwonShin1977Joseon; @Ji2023Technographical]. At its 1750AD peak, Gyeongsang held 4,09M people, exhibiting average densities of 125,5 persons per km² [@KwonShin1977Joseon].

Jeolla Province encompassed the vast alluvial plains of Honam (Mangyeong, Dongjin and Yeongsan river basins), making it the kingdom's foremost rice producer [@KwonShin1977Joseon; @Michell1979Fact]. Jeolla grew from 999k in 1392AD to 3,21M in 1750AD, displaying peak densities of 136,6 persons per km² [@KwonShin1977Joseon]. Chungcheong Province, bridging the southern plains to the metropolitan region, expanded from 722k in 1392AD to 2,32M in 1750AD (154,2 persons per km²), anchored by the provincial capital of Gongju and coastal grain ports along Asan Bay [@KwonShin1977Joseon; @Ji2023Technographical].

### Northern Frontier Marches: Pyongan and Hamgyong

The northern frontier provinces (Pyongan and Hamgyong, covering 95.330 km² across the northern peninsula) represented the kingdom's primary frontier and military borderlands [@KwonShin1977Joseon; @March2024Gwon]. Together, they expanded from 999k in 1392AD (18% of the kingdom) to 2,78M in 1591AD (19,7%), fell to 2,22M in 1600AD, rebounded to 4,21M in 1750AD (22,6%), and finished at 3,78M in 1910AD (Table \ref{tab:validation-joseon}) [@KwonShin1977Joseon].

Pyongan Province benefited from fertile plains along the lower Daedong River and extensive overland commercial trade with Ming and Qing China along the diplomatic post road through Uiju [@KwonShin1977Joseon; @March2024Gwon]. Its population expanded from 611k in 1392AD to 2,7M in 1750AD, anchored by Pyongyang (the secondary capital and commercial metropolis of the north) [@KwonShin1977Joseon; @EberstadtBanister1992].

Hamgyong Province, extending along the rugged northeastern coast and Kaema Plateau, was settled through fifteenth-century military garrisoning and frontier farming colonies [@March2024Gwon; @Han2018Retrospective]. Constrained by cold winters, a short growing season and limited arable lowlands, Hamgyong focused on dry-field grains (millet, barley, oats), cattle pastoralism and marine fishing [@KwonShin1977Joseon; @Park2017Spatial]. Population expanded from 389k in 1392AD to 1,51M in 1750AD, maintaining an average density of 28,7 persons per km² [@KwonShin1977Joseon].

## Urban Hierarchy and Settlement Architecture

The settlement structure of Joseon Korea was shaped by the confucian bureaucratic framework, wherein every county (*eupchi*) served as an administrative seat housing a government yamen (*gwana*), a state confucian academy (*hyanggyo*), ritual altars (*sajikdan*) and military arsenals (Figure \ref{fig:sett-joseon}) [@March2024Gwon; @Kim2023Reconstruction]. Across the 471 catalogued historical settlements, urban populations living in centres exceeding 10k residents expanded from approximately 380k in 1392AD to 1,15M at the 1750AD peak [@KwonShin1977Joseon].

<figure class="crd-figure-block" id="fig:sett-joseon">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-joseon-korea/fig4_joseon_korea_settlements.png" alt="fig:sett-joseon" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen provincial and county urban centres across Joseon Korea.</figcaption>
</figure>

At the pinnacle of the national urban hierarchy stood the royal capital:
1. Hanseong (Seoul): The political, administrative and cultural capital throughout the dynasty, Hanseong expanded from 99,5k in 1392AD to 142,5k in 1500AD, reached 210k in 1750AD, and climbed to 241k in 1910AD [@Kim2023Reconstruction; @KwonShin1977Joseon]. The capital was protected by the 18,6 km Fortress Wall of Seoul (*Hanyangdoseong*), pierced by eight gates (led by Sungnyemun and Heunginjimun), and supported by commercial markets along Jongno and river transshipment ports along the Han River at Mapo, Seogang and Yongsan [@Kim2023Reconstruction; @March2024Gwon].

Below the primary capital, an elite group of historic metropolises and provincial capitals formed the secondary tier:
2. Kaesong: The former imperial capital of Goryeo, retaining 120,1k residents in 1392AD before contracting to 30k in 1750AD and recovering to 38k in 1910AD as a major domestic merchant hub specializing in Korean red ginseng (*Gaeseong insam*) cultivation and national distribution networks [@KwonShin1977Joseon].
3. Pyongyang: The ancient capital of Gojoseon and Goguryeo and provincial capital of Pyongan, reaching 95k residents at its 1750AD peak, dominating overland trade with China and regional manufacturing [@March2024Gwon; @EberstadtBanister1992].
4. Changwon and Ulsan: Key administrative and coastal defense centres in Gyeongsang, reaching 65,2k and 55,7k residents respectively in 1750AD, supporting maritime fisheries, military shipyards and regional commerce [@Yang2016Japanese].
5. Daegu: Selected as the permanent provincial capital (*gamyeong*) of Gyeongsang following the Imjin War in 1601AD, Daegu expanded from 16,5k in 1450AD to 48k in 1850AD, famed for the national Yangnyeongsi herbal medicine market [@KwonShin1977Joseon].
6. Jeonju: The ancestral seat of the royal Jeonju Yi clan and provincial capital of Jeolla, reaching 48k at its 1750AD peak, celebrated for paper manufacturing, calligraphy and grain commerce [@KwonShin1977Joseon; @March2024Gwon].
7. Busan (Dongnae): The primary southern maritime gateway, sustaining 46k residents in 1910AD, housing the Japanese trading house (*Waegwan*, 倭館) during the Edo period and transforming into the peninsula's premier deep-water modern port after 1876AD [@Yang2016Japanese; @Min2024Study; @Shim2015Study].
8. Pohang, Jinju and Gyeongju: Major southeastern urban centres ranging from 37k to 45k inhabitants, anchoring agriculture, confucian scholarship and coastal transport [@KwonShin1977Joseon; @Yang2016Japanese].
9. Hamhung: The provincial administrative capital of Hamgyong, reaching 35k in 1750AD as the economic center of the northeast [@KwonShin1977Joseon].
10. Suwon: Reconstructed in the 1790s by King Jeongjo as an innovative fortified city centered on Hwaseong Fortress, reaching 34,6k in 1800AD [@March2024Gwon].
11. Andong and Gongju: Intellectual and bureaucratic centres in Gyeongsang and Chungcheong, reaching 32,5k and 32k respectively in 1750AD [@KwonShin1977Joseon].

Below these leading centres, 330 walled county seats (*eupchi*) and over 1.000 periodic rural markets (*jangsi*) formed a dense, integrated spatial fabric mediating economic exchange between rural villages and administrative towns [@Min2024Study; @Shim2015Study].

# Limitations

Three principal methodological constraints affect precision in this historical demographic reconstruction. First, the progressive deterioration of *Hojeok* household registration after 1550AD means that mid-to-late Joseon demographic reconstructions rely on backward life-table projections, genealogical sample expansions and tax grain quota calibrations rather than comprehensive decennial headcounts [@KwonShin1977Joseon; @Michell1979Fact]. While checked against surviving clan genealogies (*jokbo*) and regional cadastral surveys, provincial population figures carry estimated historical uncertainty intervals of $\pm 7\%$ to $\pm 12\%$ during the sixteenth and seventeenth centuries [@KwonShin1977Joseon].

Second, surviving local documentary registers are geographically uneven across the Korean Peninsula [@KwonShin1977Joseon; @March2024Gwon]. Lineage genealogies and county records are exceptionally abundant in southern agricultural provinces such as Gyeongsang and Jeolla, whereas documentation in northern Pyongan and Hamgyong suffered greater losses during border conflicts, peasant uprisings and twentieth-century warfare [@KwonShin1977Joseon; @EberstadtBanister1992]. Kriging interpolation with environmental and biophysical covariates mitigates this spatial disparity but cannot entirely replace lost primary archival records [@Paciorek2006Matern].

Third, early modern urban populations were dynamic and fluctuated with cyclical five-day markets (*jangsi*) and seasonal agricultural cycles [@Min2024Study; @Shim2015Study]. Because administrative boundaries (*eupchi*) frequently encompassed both walled administrative cores and adjacent suburban farming hamlets, settlement totals capture functional urban-suburban agglomerations rather than strictly intramural populations [@Kim2023Reconstruction; @KwonShin1977Joseon].

# Synthesis and Dynastic Trajectory

Across more than five centuries from 1392AD to 1910AD, Joseon Korea experienced a complete macro-demographic cycle defined by foundational agrarian recovery, devastating wartime interruptions, eighteenth-century technological flourishing and nineteenth-century ecological stagnation. Under the administrative framework of the Eight Provinces (*Paldo*) established by King Taejo and King Sejong, universal registration, northern frontier pacification and intensive land reclamation lifted biological population from 5,55M in 1392AD to a pre-war peak of 14,06M in 1591AD.

The violent shock of the Imjin War (1592AD to 1598AD) severed this growth trajectory, destroying over 20% of the population and devastating the southern granaries, while subsequent Manchu invasions and severe Little Ice Age famines (Gyeongsin in 1670AD to 1671AD and Eulbyeong in 1695AD to 1699AD) held population in check for nearly a century.

The eighteenth-century renaissance under Kings Yeongjo and Jeongjo, propelled by the wet-paddy transplantation method, reservoir irrigation, New World crops and the Equalised Tax Act, enabled population to attain an all-time dynastic apex of 18,66M in 1750AD, anchored by an integrated urban hierarchy led by Hanseong (210k), Kaesong, Pyongyang, Changwon, Ulsan, Daegu, Jeonju and Busan.

The subsequent contraction to 16,48M in 1850AD and sluggish recovery to 17,43M in 1910AD reflect the severe constraints of environmental exhaustion, deforestation, catastrophic flooding, cholera pandemics and institutional breakdown (*samjeong mulan*). By synthesising the demographic corrections of Kwon and Shin with Paciorek-Schervish non-stationary kriging across 384 catchments and 471 catalogued historical settlements, this study establishes a quantitative spatial baseline for the demographic evolution of early modern and modern Korea.

# Sources

<div id="refs"></div>
