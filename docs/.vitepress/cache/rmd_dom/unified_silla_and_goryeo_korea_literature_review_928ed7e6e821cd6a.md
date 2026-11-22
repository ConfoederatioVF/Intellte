---
title: "Demographic Trajectory of Unified Silla and Goryeo Korea"
subtitle: "Administrative Cadastres, Monastic Networks, Invasions and Dynastic Resilience, 668AD to 1392AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: unified_silla_and_goryeo_korea_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_unified_silla_and_goryeo_korea_spatial.png"
hero_caption: "Administrative circuits and prefectural urban centres across the eight historical provinces of Korea from 668AD to 1392AD."
hero_label: "fig:hero-korea-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the regional demography, settlement hierarchy and spatial population density of the Korean peninsula from the Silla unification wars in 668AD through the Goryeo dynasty to the founding of Joseon in 1392AD. Across eight historical circuits covering 226.901 km² (3.462 five-arcminute raster cells), aggregate population expanded from 3,6M (3.600.000) in 668AD to a high Silla apex of 4,2M (4.200.000) in 750AD, contracted during late Silla dynastic disintegration to 3,8M (3.800.000) in 900AD, recovered under Goryeo reunification to 4,5M in 1000AD, climbed through intensive agricultural reclamation to 5,2M in 1100AD, and reached a mediaeval peak of 5,8M (5.800.000) in 1200AD [@Barnes2015Archaeology; @Lee2016Bioanthropological; @Anon2010Buddhist]. During the thirty-year Mongol invasions (1231AD to 1259AD) and the royal court's evacuation to Ganghwa Island, sustained mainland devastation, captivity, disease and famine reduced peninsular population by 25,9% to 4,3M (4.300.000) in 1260AD [@Schofield2024Famine; @Damodaran2006Famine; @Krug2018Food]. Demographic recovery under the late Goryeo administration, despite fourteenth-century Red Turban incursions and coastal piracy, brought peninsular population to 5,55M (5.550.000) at the dynastic transition to Joseon in 1392AD [@KwonShin1977Joseon; @Kwon1977Demography; @Michell1979Fact]. The study synthesises administrative cadastre records, the Shosoin village registers (*Silla Minjeongmunseo*), Goryeo circuit registers, and calibrates spatial densities using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 384 catchments and 424 geocoded settlements led by Gyeongju (350k), Kaesong (260k), Pyongyang (150k), Seoul (99,5k), Buyeo (69,9k) and Jeonju (30,3k) [@Paciorek2006Matern; @Cha2009LivingStandards; @Lee2015Sketch].

# Background

## Administrative Geography of Unified Silla: Nine Provinces and Five Secondary Capitals

The demographic trajectory of early mediaeval Korea began with the territorial consolidation achieved by the Kingdom of Silla following the conquest of Baekje (660AD) and Goguryeo (668AD) in alliance with Tang China, followed by the expulsion of Tang military garrisons south of the Taedong River by 676AD [@Barnes2015Archaeology; @Lee2016Bioanthropological]. To administer the newly unified peninsular realm, King Sinmun restructured imperial territory in 685AD into Nine Provinces (*Guju*) and Five Secondary Capitals (*O-Sogyeong*) [@Barnes2015Archaeology; @Jung2010Gene].

The nine provinces were partitioned symmetrically across the historical Three Kingdoms territories, maintaining three provinces within each antecedent domain:
1. Silla heartland: Saryang-ju (Gyeongsang core surrounding Geumseong), Sang-ju (inland upper Nakdong basin), and Gang-ju (southern coastal Jinju).
2. Former Baekje territories: Ungcheon-ju (modern Chungcheong with Gongju), Mujin-ju (southern Jeolla with Gwangju), and Wansan-ju (northern Jeolla with Jeonju).
3. Former Goguryeo territories south of the Taedong River: Han-ju (Gyeonggi and the lower Han River basin), Sak-ju (western Gangwon around Chuncheon), and Myeong-ju (eastern Gangwon along the coastal littoral).

To counterbalance the extreme southeastern geographic location of the primary capital at Geumseong (modern Gyeongju) and assimilate regional elites from conquered realms, Silla established five secondary capitals (*sogyeong*): Geumgwan-gyeong (ancient Gimhae in the Nakdong estuary), Namwon-gyeong (in eastern Jeolla beneath Mount Jiri), Seowon-gyeong (modern Cheongju in the Miho River basin), Jungwon-gyeong (modern Chungju along the upper Namhan River), and Bugwon-gyeong (modern Wonju in western Gangwon) [@Barnes2015Archaeology; @Lee2015Sketch]. These secondary centres acted as regional administrative nodes and military commands where royal kin and aristocratic families were settled alongside translocated local gentry [@Barnes2015Archaeology].

At the apex of the administrative hierarchy stood Geumseong (Gyeongju), an open metropolitan basin surrounded by fortified mountain redoubts (*sanseong*) [@Barnes2015Archaeology; @Lee2016Bioanthropological]. The capital featured an expansive gridded avenue layout (*bang-ri* system), monumental Buddhist state monasteries including Hwangnyongsa and Bunhwangsa, the royal Wolseong palace citadel, and opulent aristocratic residential compounds (*taek*) [@Barnes2015Archaeology; @Anon2010Buddhist]. At its demographic peak during the eighth century under King Gyeongdeok, Gyeongju accommodated an estimated urban population of 350k inhabitants, supported by extensive tax grain shipments from the Nakdong and Geum river basins [@Barnes2015Archaeology; @Lee2016Bioanthropological].

## Village Registers and Demography: The Shosoin Minjeongmunseo

Direct quantitative evidence for Silla rural demography emerged in 1933 with the discovery of the *Silla Minjeongmunseo* (also known as the Silla Village Registers) preserved in the Shosoin imperial storehouse at Todaiji in Nara, Japan [@Barnes2015Archaeology; @Cha2009LivingStandards]. Written on the reverse of discarded administrative paper rolls used to wrap Buddhist sutras, these registers document the socio-demographic composition of four agrarian villages (Saha-ri, Sara-ri, Mosansin-ri and an unnamed fourth hamlet) situated within the administrative jurisdiction of Seowon-gyeong (Cheongju), dating to 755AD or 815AD [@Barnes2015Archaeology; @Cha2009LivingStandards].

The registers demonstrate an extraordinary level of cadastral thoroughness by the Unified Silla state [@Barnes2015Archaeology; @Anon2010Buddhist]. Each village census records:
1. Total households categorized into nine wealth grades (*gu-deung-ho*) based on available labour capacity rather than mere landed area.
2. Complete population rosters classified into six distinct age grades for males and five age grades for females, ranging from infants (*chaja*) and young boys/girls (*jodong*) to able-bodied adults (*jeong*) and elders (*ro*).
3. Longitudinal demographic adjustments, detailing natural births, adult deaths, in-migration and out-migration over a three-year fiscal interval.
4. Productive economic capital, enumerating domestic draught cattle, horses, hemp fields, and cultivated nut and fruit trees (mulberry trees for sericulture, walnut trees, and pine nut trees), with exact counts of newly planted saplings and mature producing stocks [@Cha2009LivingStandards; @Koo2015Potential].

Across the four surveyed villages, the registers document 462 living individuals residing within 43 households, yielding a high average household size of 10,7 persons [@Barnes2015Archaeology; @Cha2009LivingStandards]. This demographic structure indicates extended co-residential kin networks incorporating dependent collateral relatives and unfree domestic labourers (*nobi*), who comprised approximately 10% to 15% of the enumerated population [@Kwon1977Demography; @Michell1979Fact]. Adult sex ratios stood near parity (approximately 104 males per 100 females), demonstrating that unlike late imperial Chinese tax rolls that obscured unmarried daughters, Silla village registers recorded all family members regardless of sex [@Barnes2015Archaeology; @Lee2016Bioanthropological].

## The Northern Marches and Balhae

Following the fall of Pyongyang in 668AD, the northern third of the Korean peninsula and the vast plains of eastern Manchuria were transformed into a contested frontier zone [@Barnes2015Archaeology; @Lee2015Sketch]. In 698AD, former Goguryeo military officers led by Dae Jo-yeong (King Go) rallied surviving Goguryeo populations and Mohe tribes to establish the Kingdom of Balhae (Parhae, 698AD to 926AD) [@Barnes2015Archaeology; @Jin2009Peopling].

Balhae developed an elaborate administrative structure modeled on the Tang dynasty, comprising five secondary capitals, fifteen superior prefectures (*bu*), and 62 prefectures (*ju*), extending across modern southern Primorsky Krai, Jilin, Heilongjiang and the northern borderlands of the Korean peninsula along the Yalu and Tumen rivers [@Barnes2015Archaeology; @EberstadtBanister1992]. In the northern peninsular marches (corresponding to modern Bukgye and Donggye), Balhae established major fortified frontier centres, including Namgyeong Namhaebu (modern Bukcheong in southern Hamgyong) and Seogyeong Amnokbu (along the middle Yalu River) [@Barnes2015Archaeology; @Spoorenberg2012DPRK].

The coexistence between Silla in the south and Balhae in the north created the Northern and Southern States period (*Nambukguk sidae*) [@Barnes2015Archaeology]. While diplomatic relations between Gyeongju and Balhae remained cool, formal border fortresses were maintained along the line connecting the mouth of the Taedong River to Wonsan Bay [@Barnes2015Archaeology]. The northern peninsular population supported hunting, iron working, horse breeding and cold-hardy millet cultivation in river valleys, maintaining an estimated population of 450k to 550k across the northern interior [@EberstadtBanister1992; @Spoorenberg2012DPRK].

In 926AD, the pastoral Khitan Empire (Liao dynasty) launched a rapid winter offensive that captured the Balhae capital at Sanggyeong Yongcheonbu, destroying the state [@Barnes2015Archaeology]. This geopolitical cataclysm caused tens of thousands of Balhae aristocrats, soldiers and peasants to flee southward into the newly emergent Goryeo dynasty [@Barnes2015Archaeology; @Jin2009Peopling]. In 934AD, Balhae Crown Prince Dae Gwang-hyeon led several tens of thousands of Balhae refugee households across the northern frontier, where Goryeo King Taejo welcomed them as kin, granted the prince an imperial surname, and resettled his followers across strategic agricultural colonies in Hwanghae and Pyongan [@Barnes2015Archaeology; @Jin2009Peopling].

## Goryeo Administrative Hierarchy: Odo Yanggye

The collapse of Unified Silla in the early tenth century arose from aristocratic factional conflict in Gyeongju, regional peasant rebellions, and the rise of local military magnates (*hojok*) during the Later Three Kingdoms period (892AD to 936AD) [@Barnes2015Archaeology; @Anon2010Buddhist]. Wang Geon (King Taejo), a powerful maritime magnate from Songak (Kaesong), unified the peninsula under the Goryeo dynasty in 936AD by absorbing Silla peacefully and subjugating Later Baekje [@Barnes2015Archaeology; @Anon2010Buddhist].

The Goryeo state established a distinctive dual administrative structure known as the Five Provinces and Two Frontier Circuits (*Odo Yanggye*) [@Barnes2015Archaeology; @Seungyeon2013Formation]:
1. The Five Civil Provinces (*Odo*): Gyeonggi (the metropolitan province surrounding Kaesong), Yanggwang (encompassing modern Chungcheong and southern Gyeonggi), Gyeongsang (the old Silla heartland in the southeast), Jeolla (the fertile agricultural basins of the southwest), and Seohae (the coastal and agricultural plains of Hwanghae).
2. The Two Military Frontier Circuits (*Yanggye*): Bukgye (Northern Border Circuit or Pyongan March) extending from the Chongchon River north to the Yalu River, and Donggye (Eastern Border Circuit or Hamgyong March) encompassing the coastal strip and mountain passes from Gangwon north along the Sea of Japan (East Sea) to the Tumen River basin [@Anon2010Buddhist; @Seungyeon2013Formation].

Civil provinces were administered by regional commissioners (*anchalsa*) and divided into prefectures (*ju*, *bu*), sub-prefectures (*hyeon*), and specialized status villages (*hyang*, *so*, *bugok*) that provided craft items, minerals, charcoal and agricultural goods to the central court [@Barnes2015Archaeology; @Biccone2017Medieval]. The Two Frontier Circuits operated under military commissioners (*byeongmasea*) tasked with border defence against Khitan, Jurchen and Mongol threats, garrisoning stone citadels and earthen border walls (*Cheolli Jangseong*) completed in 1044AD [@Barnes2015Archaeology].

Goryeo institutionalised a multi-capital system: Gaegyeong (Kaesong) served as the primary imperial seat, Seogyeong (Pyongyang) as the western capital projecting military power northwards, Namgyeong (Seoul/Hanyang) as the auspicious southern capital, and Donggyeong (Gyeongju) preserving ancestral continuity in the southeast [@Barnes2015Archaeology; @Seungyeon2013Formation]. Under Goryeo rule, agricultural reclamation expanded into coastal mudflats and inland mountain valleys, driving peninsular population from 4,5M in 1000AD to 5,8M by 1200AD [@KwonShin1977Joseon; @Cha2009LivingStandards].

## The Thirteenth-Century Crisis: Mongol Invasions and Ganghwa Exile

Between 1231AD and 1259AD, Goryeo was convulsed by six massive Mongol invasions initiated under Ögedei Khan and continuing under Güyük and Möngke Khans [@Schofield2024Famine; @Krug2018Food]. Led by Mongol generals Sartai, Tangqu and Jalairtai Qorchi, imperial Mongol armies repeatedly traversed the peninsula, besieging walled cities, burning Buddhist monasteries, and seizing provisions [@Barnes2015Archaeology; @Krug2018Food].

In 1232AD, the military dictator Choe U, head of the Choe military regime, took the fateful strategic decision to evacuate the royal family, civil court and military garrisons from the continental capital at Kaesong to the fortified island of Ganghwa (*Ganghwado*) situated off the mouth of the Han River [@Barnes2015Archaeology; @Schofield2024Famine]. Protected by treacherous tidal currents and naval defences, Ganghwa Island served as Goryeo's wartime capital for nearly three decades [@Barnes2015Archaeology].

While the aristocratic court maintained safety on Ganghwa, ordering the carving of the 81.258 woodblocks of the *Tripitaka Koreana* to solicit divine Buddhist protection against the invaders, the mainland population was left largely defenceless [@Barnes2015Archaeology; @Anon2010Buddhist; @Schofield2024Famine]. Peasant communities abandoned river valleys to seek refuge in mountain citadels (*sanseong*). The human toll was catastrophic [@Schofield2024Famine; @Damodaran2006Famine]:
- The Mongol invasion of 1238AD resulted in the burning of the monumental nine-story timber pagoda of Hwangnyongsa in Gyeongju, destroying Korea's largest religious sanctuary [@Barnes2015Archaeology].
- Contemporary chronicles record that in the single invasion campaign of 1254AD led by Jalairtai, Mongol forces captured over 206.800 Korean prisoners who were marched north into slave markets in Liaoyang and Khanbaliq [@Schofield2024Famine; @Krug2018Food].
- Widespread devastation of irrigation dikes, abandonment of rice paddies, and unharvested crops caused severe famines and pestilence [@Damodaran2006Famine; @Schofield2024Famine].

As documented in Table \ref{tab:validation-korea}, the peninsular population contracted by 1,5M people (-25,9%), dropping from 5,8M in 1200AD to 4,3M in 1260AD. The capital province of Gyeonggi contracted by 27,8% (888k to 641k), Gyeongsang lost 322k inhabitants (1,32M to 993k), Jeolla fell by 251k (1,01M to 755k), and Yanggwang contracted by 195k (754k to 559k).

## Late Goryeo Upheaval: Red Turbans, Wokou Raids and the Joseon Transition

In 1259AD, Crown Prince Wonjong negotiated terms of peace with Kublai Khan, leading to the dissolution of the military regime, the court's return to Kaesong in 1270AD, and the suppression of the rebellious Sambyeolcho military units on Jindo and Jeju islands [@Barnes2015Archaeology]. For the next eighty years, Goryeo retained internal autonomy while operating as an imperial son-in-law (*fuma*) state within the Mongol Yuan world order [@Barnes2015Archaeology; @Cha2009LivingStandards]. Under conditions of regional peace, agricultural production rebounded, with peninsular population recovering to 4,8M by 1300AD (Table \ref{tab:regions-korea}) [@KwonShin1977Joseon; @Cha2009LivingStandards].

However, the collapse of Yuan authority in the mid-fourteenth century exposed the peninsula to renewed military crises [@Barnes2015Archaeology; @Krug2018Food]:
1. The Red Turban Invasions: Chinese rebel armies fleeing Mongol counter-offensives invaded Korea across the frozen Yalu River. In 1259AD and 1261AD, Red Turban forces totaling over 100k soldiers sacked Pyongyang and Kaesong, forcing King Gongmin to flee into southern exile at Andong [@Barnes2015Archaeology; @Krug2018Food].
2. The Wokou Pirate Devastation: Between 1350AD and 1388AD, Japanese maritime raiders (*Wokou*) launched hundreds of coastal incursions along the southern and western coasts of Jeolla, Gyeongsang and Chungcheong [@Barnes2015Archaeology; @Damodaran2006Famine]. The raiders intercepted coastal tax grain fleets, burnt state warehouses, and forced littoral fishing and agricultural communities to abandon the seashore and relocate up to 30 km inland [@Barnes2015Archaeology; @Michell1979Fact].

The military crises elevated talented border commanders, most notably General Yi Seong-gye, who won decisive battlefield victories against the Red Turbans in the north and annihilated major Wokou fleets at the Battle of Hwangsan in 1280AD [@Barnes2015Archaeology]. In 1388AD, ordered by the conservative Goryeo court to lead an invasion force against the newly established Ming dynasty in Liaodong, Yi Seong-gye halted his army at Wihwa Island on the Yalu River, engineered the Wihwado Retreat, deposed King U, and initiated sweeping cadastral land reforms (*Gwajeonbeop*) [@Barnes2015Archaeology; @KwonShin1977Joseon]. In 1392AD, Yi ascended the throne as King Taejo, establishing the Joseon dynasty [@KwonShin1977Joseon; @Michell1979Fact]. At this pivotal transition, the peninsular population had recovered to 5,55M (5.550.000), providing the fiscal and demographic foundation for early Joseon administrative surveys [@KwonShin1977Joseon; @Kwon1977Demography; @Michell1979Fact].

# Methodology

## Territorial Partition and Circuit Masking

To maintain spatial consistency across the 724-year dynastic span, this study partitions the Korean peninsula into eight historical administrative units covering 226.901 km² across 3.462 five-arcminute raster cells (Table \ref{tab:regions-korea}):
1. Gyeonggi and Gaegyeong Capital Core: The metropolitan territory encompassing Kaesong, Ganghwa Island, the Han River estuary and surrounding capital districts (9.974 km², 148 cells).
2. Yanggwang (Chungcheong): Encompassing the fertile Miho and Geum river agricultural plains, including Gongju, Buyeo and Cheongju (15.018 km², 228 cells).
3. Jeolla and Tamna (Jeju): The southwestern rice basket encompassing Jeonju, Naju, Gwangju, coastal archipelagoes and the volcanic offshore island of Jeju (23.499 km², 367 cells).
4. Gyeongsang (Silla Heartland): The southeastern basin formed by the Nakdong River system, including Gyeongju, Daegu, Jinju, Andong and Gimhae (32.586 km², 472 cells).
5. Gyoju (Gangwon): The rugged Taebaek mountain spine and eastern coastal strip, including Gangneung, Chuncheon and Wonju (32.478 km², 506 cells).
6. Seohae (Hwanghae): The western agricultural and coastal plain encompassing Haeju, Hwangju and coastal trading stations (18.016 km², 275 cells).
7. Bukgye (Northern Pyongan March): The strategic northwestern border circuit between the Taedong and Yalu rivers, centered on Pyongyang, Anju and Uiju (42.643 km², 653 cells).
8. Donggye (Eastern Hamgyong March): The rugged northeastern frontier circuit extending along the Hamgyong mountain range to the Tumen River, centered on Hamhung and Gilju (52.687 km², 813 cells).

At each historical benchmark year $t \in \{668, 700, 750, 800, 900, 1000, 1100, 1200, 1260, 1300, 1392\}$, total regional population $P_r(t)$ synthesises enumerated civil households $H_r(t)$, military garrison populations $M_r(t)$, and unrecorded fringe inhabitants $U_r(t)$:

$$P_r(t) = H_r(t) \cdot \mu_r(t) + M_r(t) + U_r(t)$$

where $\mu_r(t)$ denotes the empirically calibrated mean household multiplier for province $r$, harmonised from cadastral surveys and demographic reconstructions [@KwonShin1977Joseon; @Cha2009LivingStandards].

## Calibration of Household Size and Cadastral Registers

Calibrating population totals from mediaeval Korean historical sources requires reconciling three distinct documentary genres [@KwonShin1977Joseon; @Cha2009LivingStandards; @Michell1979Fact]:
1. Silla village registers (*Silla Minjeongmunseo*): Confirming large rural household sizes averaging 10,7 persons per domestic unit in the eighth century, reflecting multi-generational kin cores, collateral branches and resident unfree servants [@Barnes2015Archaeology; @Cha2009LivingStandards].
2. Goryeo dynastic registers: Historical accounts in the *Goryeosa* and *Goryeosa Jeolyo* document registered taxable households (*ho*) that understate actual inhabitants because local administrators recorded only tax-liable free adult males (*jeong*) while omitting young children, females and non-free labour populations [@Cha2009LivingStandards; @Michell1979Fact].
3. Early Joseon national censuses: The comprehensive household surveys conducted under King Taejo and King Sejong (recorded in the *Sejong Sillok Jiriji* of 1454AD) documented 5,5M to 6M inhabitants across the peninsula, establishing a definitive baseline for late fourteenth-century population [@KwonShin1977Joseon; @Kwon1977Demography].

Following Kwon and Shin (1977) and Cha (2009), civil registers are corrected for institutional under-enumeration, adjusting mean household multipliers from official fiscal ratios (4,5 to 5 persons) to biologically plausible social units (6 to 7,5 persons in regular agrarian settlements, and 9 to 11 persons in aristocratic and capital compounds) [@KwonShin1977Joseon; @Cha2009LivingStandards].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the eight provincial units draws on the Korean and Japanese kriging domain, which aggregates 103.889 domestic archaeological and architectural monument records across 384 domestic catchments (9.224 valid land cells) [@Barnes2015Archaeology; @Lee2016Bioanthropological].

Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with nugget-to-sill ratio 0,04 across all historical horizons (Table \ref{tab:kriging-korea}). The model incorporates five biophysical covariates: habitable land fraction, natural vegetative productivity index, ecozone terrain suitability, fluvial decay along primary river corridors (specifically the Han, Nakdong, Geum, Taedong and Yalu rivers), and coastal proximity [@Koo2015Potential; @Kim2023Population; @Chen2012Phylogeography]. High-density urban populations from 461 catalogued settlements (led by Gyeongju, Kaesong, Pyongyang and Seoul) condition local settlement cores, with urban masks subtracted to preserve rural totals inside each territorial boundary [@Barnes2015Archaeology; @Lee2015Sketch].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the provincial totals presented here and the regional aggregates synthesised from historical cadastral benchmarks. Table \ref{tab:validation-korea} presents the longitudinal trajectory across all eleven benchmark years from 668AD to 1392AD, decomposed into macro-regions.

<figure class="crd-table-figure" id="tab:validation-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Central Core</th><th class="crd-th">Southern Heartland</th><th class="crd-th">Frontier Marches</th><th class="crd-th">Peninsular Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>668AD</strong></td><td class="crd-td">1,15M</td><td class="crd-td">1,58M</td><td class="crd-td">864k</td><td class="crd-td">3,6M</td></tr>
<tr><td class="crd-td"><strong>700AD</strong></td><td class="crd-td">1,25M</td><td class="crd-td">1,68M</td><td class="crd-td">921,1k</td><td class="crd-td">3,85M</td></tr>
<tr><td class="crd-td"><strong>750AD</strong></td><td class="crd-td">1,39M</td><td class="crd-td">1,81M</td><td class="crd-td">1M</td><td class="crd-td">4,2M</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">1,39M</td><td class="crd-td">1,74M</td><td class="crd-td">971,5k</td><td class="crd-td">4,1M</td></tr>
<tr><td class="crd-td"><strong>900AD</strong></td><td class="crd-td">1,34M</td><td class="crd-td">1,57M</td><td class="crd-td">891,6k</td><td class="crd-td">3,8M</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">1,65M</td><td class="crd-td">1,81M</td><td class="crd-td">1,05M</td><td class="crd-td">4,5M</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">1,98M</td><td class="crd-td">2,03M</td><td class="crd-td">1,2M</td><td class="crd-td">5,2M</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">2,16M</td><td class="crd-td">2,32M</td><td class="crd-td">1,31M</td><td class="crd-td">5,8M</td></tr>
<tr><td class="crd-td"><strong>1260AD</strong></td><td class="crd-td">1,59M</td><td class="crd-td">1,75M</td><td class="crd-td">965,4k</td><td class="crd-td">4,3M</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">1,76M</td><td class="crd-td">1,97M</td><td class="crd-td">1,07M</td><td class="crd-td">4,8M</td></tr>
<tr><td class="crd-td"><strong>1392AD</strong></td><td class="crd-td">2M</td><td class="crd-td">2,33M</td><td class="crd-td">1,22M</td><td class="crd-td">5,55M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Unified Silla and Goryeo Korea, 668AD to 1392AD, harmonised from cadastral and historical registers.</figcaption>
</figure>

Across all nine horizons in the Korean and Japanese kriging domain, Table \ref{tab:kriging-korea} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,93 across all epochs (and exceeds 0,997 for historical Silla and Goryeo horizons), with regularised nugget-to-sill ratios fixed at 0,04 and effective short ranges spanning 35,66 km.

<figure class="crd-table-figure" id="tab:kriging-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Chulmun-Jomon (before 4000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Chulmun and Middle Jomon (4000BC to 1500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Mumun Pottery and Late Jomon (1500BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Gojoseon and Han Commanderies (300BC to 100BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Proto-Three Kingdoms and Three Kingdoms (100BC to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Unified Silla and Nara-Heian Eras (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Goryeo Dynasty and Kamakura Eras (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Early Joseon and Muromachi Eras (1392AD to 1592AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Late Joseon and Edo Eras (1592AD to 1910AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Korean and Japanese kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:source-corpora-korea} details the component archaeological, heritage and historical gazetteer registries aggregated into the Korean and Japanese kriging domain, highlighting the integration of national heritage databases, archaeological settlement surveys and classical cadastres.

<figure class="crd-table-figure" id="tab:source-corpora-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Museum of Japanese History Radiocarbon Compendium (Rekihaku v1,3)</strong></td><td class="crd-td">14.536</td><td class="crd-td">15,57%</td></tr>
<tr><td class="crd-td"><strong>Rekihaku Japanese Archaeological Settlement Registry (25k)</strong></td><td class="crd-td">12.717</td><td class="crd-td">13,62%</td></tr>
<tr><td class="crd-td"><strong>Japanese Association for Settlement Archaeology Kanto Survey</strong></td><td class="crd-td">20.209</td><td class="crd-td">21,65%</td></tr>
<tr><td class="crd-td"><strong>Settlement Archaeology Tokyo Metropolitan Monument Inventory</strong></td><td class="crd-td">6.388</td><td class="crd-td">6,84%</td></tr>
<tr><td class="crd-td"><strong>Ministry of Land, Infrastructure and Transport Cultural Properties (P32)</strong></td><td class="crd-td">17.728</td><td class="crd-td">18,99%</td></tr>
<tr><td class="crd-td"><strong>Wikidata Japanese Heritage and Protected Historic Citadels</strong></td><td class="crd-td">5.651</td><td class="crd-td">6,05%</td></tr>
<tr><td class="crd-td"><strong>Korea Heritage Service National Heritage Time-Series Database</strong></td><td class="crd-td">10.696</td><td class="crd-td">11,46%</td></tr>
<tr><td class="crd-td"><strong>Korean Archaeological Society Radiocarbon Chronological Synthesis</strong></td><td class="crd-td">437</td><td class="crd-td">0,47%</td></tr>
<tr><td class="crd-td"><strong>Hanseong Baekje Museum Stratified AMS Radiocarbon Ledger</strong></td><td class="crd-td">77</td><td class="crd-td">0,08%</td></tr>
<tr><td class="crd-td"><strong>South Korean Archaeological Sites and Fortress Registries</strong></td><td class="crd-td">1.173</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>North Korean Protected Historical Monuments and Citadels Register</strong></td><td class="crd-td">129</td><td class="crd-td">0,14%</td></tr>
<tr><td class="crd-td"><strong>National Research Institute of Cultural Heritage Northern Site Corpus</strong></td><td class="crd-td">85</td><td class="crd-td">0,09%</td></tr>
<tr><td class="crd-td"><strong>Geographic Monograph of the Veritable Records of King Sejong Cadastre</strong></td><td class="crd-td">217</td><td class="crd-td">0,23%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">2.082</td><td class="crd-td">2,23%</td></tr>
<tr><td class="crd-td"><strong>East Asian Frontier Settlement and Fortress Buffer Synthesis</strong></td><td class="crd-td">1.234</td><td class="crd-td">1,32%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, heritage and historical gazetteer registries aggregated into the Korean and Japanese kriging domain.</figcaption>
</figure>

# Results

## The High Silla Demographic Zenith (668 to 800AD)

Following the cessation of the Three Kingdoms unification wars in 668AD, Korea entered a phase of sustained demographic recovery and agrarian expansion (Figure \ref{fig:traj-korea}). In 668AD, peninsular territory supported approximately 3,6M people, heavily concentrated in the agricultural heartland of Gyeongsang (1,01M, 28% of the peninsular total), Jeolla (576k) and the Han River basin of Gyeonggi (432k) [@Barnes2015Archaeology; @Lee2016Bioanthropological].

<figure class="crd-figure-block" id="fig:traj-korea">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-unified-silla-and-goryeo-korea/fig2_unified_silla_and_goryeo_korea_trajectory.png" alt="fig:traj-korea" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Korea from 668AD to 1392AD across central, southern and frontier provinces with historical uncertainty intervals.</figcaption>
</figure>

Over the subsequent eight decades of administrative stability, peace and agricultural reclamation, peninsular population expanded by 16,7%, reaching a High Silla peak of 4,2M in 750AD (Table \ref{tab:regions-korea}) [@Barnes2015Archaeology; @Cha2009LivingStandards]. Gyeongsang remained the demographic core of the kingdom, expanding to 1,13M inhabitants (34,6 persons per km²), anchored by the metropolitan capital at Geumseong (Gyeongju), which reached 350k inhabitants [@Barnes2015Archaeology; @Lee2016Bioanthropological].

In the southwest, Jeolla expanded to 680k residents, supported by wet-rice agriculture across the Honam plain, while Yanggwang climbed to 512k and Gyeonggi reached 536k [@Barnes2015Archaeology; @Cha2009LivingStandards]. Maritime commerce flourished along the southern coasts, coordinated through the Cheonghaejin naval garrison established by Jang Bogo on Wando island, connecting trade between Tang China, Silla and Heian Japan [@Barnes2015Archaeology; @Anon2010Buddhist].

## Dynastic Fracturing and the Later Three Kingdoms (800 to 936AD)

Between 800AD and 900AD, the Unified Silla state entered a protracted political and socio-economic decline [@Barnes2015Archaeology; @Seungyeon2013Formation]. Escalating succession disputes among the aristocratic true-bone (*jingol*) lineages in Gyeongju, mounting tax burdens on peasant smallholders, and recurrent droughts spurred widespread agrarian rebellions (Figure \ref{fig:shares-korea}) [@Barnes2015Archaeology; @Schofield2024Famine].

<figure class="crd-figure-block" id="fig:shares-korea">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-unified-silla-and-goryeo-korea/fig3_unified_silla_and_goryeo_korea_shares.png" alt="fig:shares-korea" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and comparative peak versus 1392AD terminal totals across the eight Korean territories.</figcaption>
</figure>

Peninsular population contracted from 4,2M in 750AD to 4,1M in 800AD and reached a low of 3,8M around 900AD (-9,5% from the 750AD zenith) [@KwonShin1977Joseon; @Cha2009LivingStandards]. The demographic contraction was sharpest in the Silla heartland of Gyeongsang, which plunged from 1,13M in 750AD to 942k in 900AD (-16,5%) as regional magnates refused to dispatch grain taxes to the capital and displaced peasants fled into semi-autonomous mountain estates [@Barnes2015Archaeology; @Seungyeon2013Formation].

During the Later Three Kingdoms era (892AD to 936AD), political authority fragmented among competing regional warlords: Gyeon Hwon established Later Baekje in Jeolla (anchored at Wansan/Jeonju, with 628k inhabitants in 900AD), Gung Ye founded Later Goguryeo (Taebong) in central Korea, and Wang Geon took command of the northern forces at Songak (Kaesong), reunifying the realm under the Goryeo dynasty in 936AD [@Barnes2015Archaeology].

## Goryeo Consolidation and Agrarian Expansion (936 to 1200AD)

Under the centralised bureaucratic administration of the early Goryeo kings, the Korean peninsula experienced more than two centuries of sustained economic expansion and demographic growth (Table \ref{tab:regions-korea}) [@Barnes2015Archaeology; @Cha2009LivingStandards]. Total population climbed by 52,6% from 3,8M in 900AD to 4,5M in 1000AD, 5,2M in 1100AD, and reached a mediaeval peak of 5,8M in 1200AD [@KwonShin1977Joseon; @Cha2009LivingStandards; @Michell1979Fact].

<figure class="crd-table-figure" id="tab:regions-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">668AD</th><th class="crd-th">700AD</th><th class="crd-th">750AD</th><th class="crd-th">800AD</th><th class="crd-th">900AD</th><th class="crd-th">1000AD</th><th class="crd-th">1100AD</th><th class="crd-th">1200AD</th><th class="crd-th">1260AD</th><th class="crd-th">1300AD</th><th class="crd-th">1392AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Gyeonggi and Gaegyeong Capital Core</strong></td><td class="crd-td">9.974</td><td class="crd-td">432k</td><td class="crd-td">473,4k</td><td class="crd-td">535,9k</td><td class="crd-td">542,1k</td><td class="crd-td">537,6k</td><td class="crd-td">678,3k</td><td class="crd-td">832k</td><td class="crd-td">888,3k</td><td class="crd-td">640,9k</td><td class="crd-td">702,2k</td><td class="crd-td">777k</td></tr>
<tr><td class="crd-td"><strong>2. Yanggwang (Chungcheong)</strong></td><td class="crd-td">15.018</td><td class="crd-td">432k</td><td class="crd-td">464,9k</td><td class="crd-td">512k</td><td class="crd-td">504,5k</td><td class="crd-td">476,4k</td><td class="crd-td">574,6k</td><td class="crd-td">676k</td><td class="crd-td">754k</td><td class="crd-td">559k</td><td class="crd-td">624k</td><td class="crd-td">721,5k</td></tr>
<tr><td class="crd-td"><strong>3. Jeolla and Tamna (Jeju)</strong></td><td class="crd-td">23.499</td><td class="crd-td">576k</td><td class="crd-td">618,9k</td><td class="crd-td">680k</td><td class="crd-td">668,5k</td><td class="crd-td">628,4k</td><td class="crd-td">754,6k</td><td class="crd-td">884k</td><td class="crd-td">1,01M</td><td class="crd-td">754,6k</td><td class="crd-td">848,9k</td><td class="crd-td">999k</td></tr>
<tr><td class="crd-td"><strong>4. Gyeongsang (Silla Heartland)</strong></td><td class="crd-td">32.586</td><td class="crd-td">1,01M</td><td class="crd-td">1,06M</td><td class="crd-td">1,13M</td><td class="crd-td">1,07M</td><td class="crd-td">941,6k</td><td class="crd-td">1,05M</td><td class="crd-td">1,14M</td><td class="crd-td">1,32M</td><td class="crd-td">993,1k</td><td class="crd-td">1,12M</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>5. Gyoju (Gangwon)</strong></td><td class="crd-td">32.478</td><td class="crd-td">180k</td><td class="crd-td">192,5k</td><td class="crd-td">210k</td><td class="crd-td">205k</td><td class="crd-td">190k</td><td class="crd-td">225k</td><td class="crd-td">260k</td><td class="crd-td">290k</td><td class="crd-td">215k</td><td class="crd-td">240k</td><td class="crd-td">277,5k</td></tr>
<tr><td class="crd-td"><strong>6. Seohae (Hwanghae)</strong></td><td class="crd-td">18.016</td><td class="crd-td">288k</td><td class="crd-td">310,9k</td><td class="crd-td">344k</td><td class="crd-td">340,5k</td><td class="crd-td">324,4k</td><td class="crd-td">394,6k</td><td class="crd-td">468k</td><td class="crd-td">522k</td><td class="crd-td">387k</td><td class="crd-td">432k</td><td class="crd-td">499,5k</td></tr>
<tr><td class="crd-td"><strong>7. Bukgye (Northern Pyongan March)</strong></td><td class="crd-td">42.643</td><td class="crd-td">468k</td><td class="crd-td">497,6k</td><td class="crd-td">538k</td><td class="crd-td">520,5k</td><td class="crd-td">473,6k</td><td class="crd-td">550,4k</td><td class="crd-td">624k</td><td class="crd-td">676,1k</td><td class="crd-td">492,4k</td><td class="crd-td">543,1k</td><td class="crd-td">610,5k</td></tr>
<tr><td class="crd-td"><strong>8. Donggye (Eastern Hamgyong March)</strong></td><td class="crd-td">52.687</td><td class="crd-td">216k</td><td class="crd-td">231k</td><td class="crd-td">252k</td><td class="crd-td">246k</td><td class="crd-td">228k</td><td class="crd-td">270k</td><td class="crd-td">312k</td><td class="crd-td">348k</td><td class="crd-td">258k</td><td class="crd-td">288k</td><td class="crd-td">333k</td></tr>
<tr><td class="crd-td"><strong>Peninsula Total</strong></td><td class="crd-td">226.901</td><td class="crd-td">3,6M</td><td class="crd-td">3,85M</td><td class="crd-td">4,2M</td><td class="crd-td">4,1M</td><td class="crd-td">3,8M</td><td class="crd-td">4,5M</td><td class="crd-td">5,2M</td><td class="crd-td">5,8M</td><td class="crd-td">4,3M</td><td class="crd-td">4,8M</td><td class="crd-td">5,55M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across eight Korean territories, 668AD to 1392AD, calculated from regional registers.</figcaption>
</figure>

This sustained growth was propelled by several structural transformations [@Barnes2015Archaeology; @Cha2009LivingStandards]:
1. Agricultural Technology and Wet-Rice Reclamation: The spread of improved transplanting methods (*iangbeop*), extensive reclamation of tidal wetlands along the western coastline (Ganghwa, Hwanghae, Chungcheong and Jeolla), and the construction of stone weir irrigation systems enabled double cropping with winter barley [@Cha2009LivingStandards; @Michell1979Fact].
2. Administrative Integration of Peripheral Districts: The Goryeo state incorporated unfree status hamlets (*hyang*, *so*, *bugok*) into standard fiscal counties, encouraging landless cultivators to clear hillside terraces [@Barnes2015Archaeology; @Biccone2017Medieval].
3. Urban Primacy of Kaesong: The imperial capital at Gaegyeong (Kaesong) expanded from a regional fortress into a cosmopolitan metropolis of 260k inhabitants by 1200AD, connected to the Yellow Sea maritime trading hub at Byeongnando on the Yesong River [@Barnes2015Archaeology; @Anon2010Buddhist].

By 1200AD, Gyeongsang had attained 1,32M inhabitants (40,4 persons per km²), Jeolla exceeded 1,01M (42,8 persons per km²), Gyeonggi reached 888k (89,1 persons per km²), and Yanggwang expanded to 754k (50,2 persons per km²) (Table \ref{tab:density-korea}) [@KwonShin1977Joseon; @Cha2009LivingStandards].

## The Mongol Invasions and Peninsular Contraction (1200 to 1260AD)

Between 1231AD and 1259AD, the six Mongol invasion campaigns inflicted immense destruction across the Korean mainland (Figure \ref{fig:traj-korea}) [@Schofield2024Famine; @Krug2018Food]. With the Goryeo court ensconced behind island fortifications on Ganghwa, Mongol cavalry systematically ravaged the open river valleys of Hwanghae, Gyeonggi, Chungcheong, Gyeongsang and Jeolla [@Barnes2015Archaeology; @Schofield2024Famine].

Peninsular population collapsed by 25,9% over six decades, falling from 5,8M in 1200AD to 4,3M in 1260AD (Table \ref{tab:regions-korea}) [@KwonShin1977Joseon; @Cha2009LivingStandards]. The demographic contraction was compounded by multiple vectors of mortality [@Schofield2024Famine; @Damodaran2006Famine]:
- Massive civilian captivity: Over 200k captives were driven north into the Mongol empire in the 1254AD campaign alone [@Schofield2024Famine; @Krug2018Food].
- Widespread famine: The destruction of state granaries, slaughter of draught oxen, and burning of standing crops triggered extreme starvation across all eight circuits [@Damodaran2006Famine; @Krug2018Food].
- Epidemic disease: Crowded refugee encampments in mountain fortresses (*sanseong*) facilitated the rapid spread of typhus and enteric fevers [@Lee2016Bioanthropological; @Damodaran2006Famine].

Gyeonggi suffered a 27,8% reduction, falling from 888k to 641k; Gyeongsang contracted by 24,5% from 1,32M to 993k; Jeolla plunged by 25% from 1,01M to 755k; Yanggwang declined by 25,9% from 754k to 559k; and Bukgye dropped by 27,2% from 676k to 492k (Table \ref{tab:regions-korea}).

## Late Goryeo Resilience, Wokou Depredations and Joseon Transition (1260 to 1392AD)

Following the conclusion of peace with the Yuan dynasty in 1259AD and the royal court's return to Kaesong in 1270AD, the Korean peninsula experienced a gradual demographic recovery [@Barnes2015Archaeology; @Cha2009LivingStandards]. Peninsular population rebounded to 4,8M by 1300AD (+11,6% over 1260AD levels) as displaced cultivators returned to abandoned valley floors and Goryeo participated in the extensive maritime and overland commercial networks of the Mongol peace (*Pax Mongolica*) [@Barnes2015Archaeology; @Cha2009LivingStandards].

<figure class="crd-table-figure" id="tab:density-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">750AD</th><th class="crd-th">1200AD</th><th class="crd-th">1392AD</th><th class="crd-th">1200AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Gyeonggi and Gaegyeong Capital Core</strong></td><td class="crd-td">141</td><td class="crd-td">535,9k</td><td class="crd-td">888,3k</td><td class="crd-td">777k</td><td class="crd-td">89,1</td></tr>
<tr><td class="crd-td"><strong>2. Yanggwang (Chungcheong)</strong></td><td class="crd-td">251</td><td class="crd-td">512k</td><td class="crd-td">754k</td><td class="crd-td">721,5k</td><td class="crd-td">50,2</td></tr>
<tr><td class="crd-td"><strong>3. Jeolla and Tamna (Jeju)</strong></td><td class="crd-td">410</td><td class="crd-td">680k</td><td class="crd-td">1,01M</td><td class="crd-td">999k</td><td class="crd-td">42,8</td></tr>
<tr><td class="crd-td"><strong>4. Gyeongsang (Silla Heartland)</strong></td><td class="crd-td">468</td><td class="crd-td">1,13M</td><td class="crd-td">1,32M</td><td class="crd-td">1,33M</td><td class="crd-td">40,4</td></tr>
<tr><td class="crd-td"><strong>5. Gyoju (Gangwon)</strong></td><td class="crd-td">261</td><td class="crd-td">210k</td><td class="crd-td">290k</td><td class="crd-td">277,5k</td><td class="crd-td">8,9</td></tr>
<tr><td class="crd-td"><strong>6. Seohae (Hwanghae)</strong></td><td class="crd-td">182</td><td class="crd-td">344k</td><td class="crd-td">522k</td><td class="crd-td">499,5k</td><td class="crd-td">29</td></tr>
<tr><td class="crd-td"><strong>7. Bukgye (Northern Pyongan March)</strong></td><td class="crd-td">383</td><td class="crd-td">538k</td><td class="crd-td">676,1k</td><td class="crd-td">610,5k</td><td class="crd-td">15,9</td></tr>
<tr><td class="crd-td"><strong>8. Donggye (Eastern Hamgyong March)</strong></td><td class="crd-td">457</td><td class="crd-td">252k</td><td class="crd-td">348k</td><td class="crd-td">333k</td><td class="crd-td">6,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 750AD, 1200AD and 1392AD population benchmarks, and peak 1200AD density (persons per km²).</figcaption>
</figure>

Although the fourteenth century brought secondary shocks from Red Turban incursions (1359AD and 1361AD) and persistent coastal devastation by Japanese *Wokou* raiders, demographic momentum continued upward [@Barnes2015Archaeology; @Krug2018Food]. By 1392AD, at the founding of the Joseon dynasty by King Taejo (Yi Seong-gye), peninsular population stood at 5,55M (5.550.000), representing a 29,1% net recovery from the 1260AD Mongol trough (Table \ref{tab:regions-korea}) [@KwonShin1977Joseon; @Kwon1977Demography; @Michell1979Fact].

Gyeongsang stood at 1,33M, Jeolla at 999k, Gyeonggi at 777k, Yanggwang at 722k, Bukgye at 611k, Seohae at 500k, Donggye at 333k, and Gyoju at 278k (Table \ref{tab:density-korea}). This 5,55M population formed the demographic foundation for the administrative, agricultural and fiscal surveys codified in the early fifteenth-century Joseon registers [@KwonShin1977Joseon; @Kwon1977Demography].

## Regional Demographic Trajectories and Density Patterns

### The Capital Core: Gyeonggi and Gaegyeong

The capital metropolitan province (Gyeonggi, covering 9.974 km²) exhibited the highest sustained population densities in the peninsula throughout the mediaeval era (Table \ref{tab:density-korea}) [@Barnes2015Archaeology; @Cha2009LivingStandards]. Centered on the Han River estuary and the royal capitals at Kaesong (Gaegyeong) and later Seoul (Namgyeong), Gyeonggi expanded from 432k in 668AD to 536k in 750AD, 678k in 1000AD, and reached a high Goryeo peak of 888k in 1200AD (89,1 persons per km²).

Following the Mongol destruction of the open capital and the court's exile to Ganghwa Island, Gyeonggi dropped to 641k in 1260AD before recovering to 702k in 1300AD and 777k in 1392AD (77,9 persons per km²). The relocation of the Joseon capital to Hanyang (Seoul) in 1394AD initiated a new phase of urban concentrating in the lower Han basin, transforming Seoul from an auxiliary capital of 99,5k into a metropolitan seat [@Barnes2015Archaeology; @KwonShin1977Joseon].

### The Southern Agricultural Heartland: Gyeongsang and Jeolla

Gyeongsang (32.586 km²) and Jeolla (23.499 km²) together formed the agrarian and demographic engine of the Korean peninsula, consistently holding between 42% and 45% of total peninsular inhabitants (Figure \ref{fig:shares-korea}) [@Barnes2015Archaeology; @Cha2009LivingStandards].

Gyeongsang expanded from 1,01M in 668AD to 1,13M at the 750AD Silla peak, contracted to 942k in 900AD, and expanded to 1,32M in 1200AD (40,4 persons per km²). Jeolla grew from 576k in 668AD to 680k in 750AD, 755k in 1000AD, and crossed the million threshold to reach 1,01M in 1200AD (42,8 persons per km²). Both provinces suffered severe depopulation during the Mongol invasions (falling to 993k and 755k in 1260AD) and were subjected to intense Wokou coastal raiding during the fourteenth century, before rebounding to 1,33M and 999k in 1392AD [@Barnes2015Archaeology; @KwonShin1977Joseon].

### The Central Agricultural Belt: Yanggwang and Seohae

Yanggwang (Chungcheong, 15.018 km²) and Seohae (Hwanghae, 18.016 km²) provided vital grain surpluses, riverine transport corridors and defensive depth between the northern frontier and the southern capitals [@Barnes2015Archaeology; @Cha2009LivingStandards]. Yanggwang grew from 432k in 668AD to 512k in 750AD, 575k in 1000AD, and peaked at 754k in 1200AD (50,2 persons per km²), before contracting to 559k in 1260AD and rebounding to 722k in 1392AD.

Seohae expanded from 288k in 668AD to 344k in 750AD, 395k in 1000AD, and peaked at 522k in 1200AD (29 persons per km²). Its coastal plains along the Yellow Sea suffered repeated amphibious Mongol raids and Red Turban marches, falling to 387k in 1260AD before recovering to 500k in 1392AD [@Barnes2015Archaeology; @Krug2018Food].

### The Northern and Mountain Frontier Marches: Bukgye, Donggye and Gyoju

The frontier circuits—Bukgye (42.643 km²), Donggye (52.687 km²) and Gyoju (32.478 km²)—covered 56,3% of total peninsular landmass but supported lower aggregate population densities (Table \ref{tab:density-korea}) [@Barnes2015Archaeology; @EberstadtBanister1992].

Bukgye (Northern Pyongan March) was heavily fortified against Khitan, Jurchen and Mongol invasions, maintaining 94 catalogued settlement fortresses along the Chongchon and Yalu rivers. Its population grew from 468k in 668AD to 538k in 750AD, 550k in 1000AD, and peaked at 676k in 1200AD (15,9 persons per km²), anchored by the western capital at Pyongyang (150k in 668AD, 95k in 1100AD) and the Yalu border fortress of Uiju (15,8k) [@Barnes2015Archaeology; @Spoorenberg2012DPRK]. Following Mongol disruption, Bukgye fell to 492k in 1260AD before recovering to 611k in 1392AD.

Donggye (Eastern Hamgyong March) supported pastoralism, hunting, fishing and highland grain farming along the Sea of Japan coast, growing from 216k in 668AD to 252k in 750AD, 270k in 1000AD, 348k in 1200AD, and 333k in 1392AD (6,3 persons per km²), led by Hamhung (18k) [@Barnes2015Archaeology; @EberstadtBanister1992]. Gyoju (Gangwon) sustained 180k in 668AD, 210k in 750AD, 290k in 1200AD, and 278k in 1392AD (8,5 persons per km²), centered on Gangneung, Chuncheon and Wonju [@Barnes2015Archaeology].

## Urban Hierarchy and Settlement Networks

Urbanisation in Unified Silla and Goryeo Korea was structured by a distinct four-tiered settlement hierarchy (Figure \ref{fig:sett-korea}) [@Barnes2015Archaeology; @Lee2015Sketch]. Across the 461 settlements catalogued in this study, urban inhabitants living in centres exceeding 10k population expanded from 680k in 668AD to over 1,05M by 1200AD, representing an urbanisation ratio of approximately 18% in the capital cores and 6% to 8% across peripheral provinces [@Barnes2015Archaeology; @Cha2009LivingStandards].

<figure class="crd-figure-block" id="fig:sett-korea">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-unified-silla-and-goryeo-korea/fig4_unified_silla_and_goryeo_korea_settlements.png" alt="fig:sett-korea" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen prefectural and county urban centres across Korea.</figcaption>
</figure>

At the apex of the hierarchy stood the primary dynastic metropolises:
1. Gyeongju (Geumseong): The royal capital of Silla, reaching 350k residents in 750AD, featuring a gridded urban basin, royal palaces, Buddhist mega-monasteries, and aristocratic estates [@Barnes2015Archaeology; @Lee2016Bioanthropological].
2. Kaesong (Gaegyeong): The imperial capital of Goryeo, attaining 260k residents at its 1200AD peak, situated beneath Mount Songak with an inner palace citadel (*Manwoldae*), outer walled city (*Naseong*), and Yellow Sea port at Byeongnando [@Barnes2015Archaeology; @Anon2010Buddhist].
3. Pyongyang (Seogyeong): The ancient Goguryeo capital and Goryeo western capital, reaching 150k in 668AD and 95k in 1100AD, projecting defensive power along the northern frontier [@Barnes2015Archaeology; @Spoorenberg2012DPRK].
4. Seoul (Namgyeong): The southern capital of Goryeo and future Joseon seat, expanding from 19,5k in 668AD to 55,1k in 1200AD and 99,5k in 1392AD [@Barnes2015Archaeology; @KwonShin1977Joseon].

The second tier comprised regional administrative capitals and historic Three Kingdoms seats ranging between 25k and 70k inhabitants: Buyeo in Chungcheong (69,9k in 668AD), Jeonju in Jeolla (30,3k in 1392AD), Gimhae in Gyeongsang (28,3k in 668AD), and Gongju in Chungcheong (25k in 668AD) [@Barnes2015Archaeology; @Lee2015Sketch].

The third tier consisted of secondary capitals (*sogyeong*), military garrisons and provincial administrative seats ranging from 15k to 22k inhabitants: Changwon (21,2k), Daegu (20,1k), Gwangju (18,4k), Haeju (18,4k), Ulsan (18,1k), Hamhung (18k), and Uiju (15,8k) [@Barnes2015Archaeology].

Below these leading cities, over 400 local prefectural (*ju*), county (*hyeon*) and garrison (*jin*) seats formed a continuous administrative network with median populations of 2k to 8k, flanked by hundreds of rural market hamlets and Buddhist monastic complexes that mediated rural-urban exchange [@Barnes2015Archaeology; @Seungyeon2013Formation; @Biccone2017Medieval].

# Discussion and Limitations

Three primary analytical constraints govern precision in this Korean demographic reconstruction. First, the survival of primary documentary records varies considerably across the dynastic span [@KwonShin1977Joseon; @Cha2009LivingStandards; @Michell1979Fact]. For Unified Silla, our quantitative understanding rests upon the unique Shosoin village registers (*Silla Minjeongmunseo*), epigraphic stele inscriptions, and retroactive accounts preserved in the *Samguk Sagi* (1145AD) and *Samguk Yusa* (1281AD) [@Barnes2015Archaeology; @Lee2016Bioanthropological]. For the Goryeo dynasty, the loss of early cadastres during the Mongol sack of Kaesong and the Red Turban destructions leaves the *Goryeosa* as the principal textual repository, requiring demographic back-projection from early Joseon full-frame enumerations [@KwonShin1977Joseon; @Cha2009LivingStandards]. Regional uncertainty intervals are estimated at $\pm 10\%$ to $\pm 15\%$ for the Silla apex (750AD) and high Goryeo (1200AD), and $\pm 12\%$ to $\pm 18\%$ during the height of the Mongol invasions (1231AD to 1260AD).

Second, spatial allocation inside mountain-valley environments presents distinct cartographic challenges [@Paciorek2006Matern; @Koo2015Potential]. The Korean peninsula is over 70% mountainous, concentrating sedentary agriculture and urban settlements along narrow river floodplains and coastal inlets [@Koo2015Potential; @Chen2012Phylogeography]. Non-stationary Matérn kriging incorporating biophysical covariates effectively prevents the artificial smearing of population into uninhabited highland forest zones, but local micro-topographic shifts—such as seasonal refuge in mountain citadels (*sanseong*) during military invasions—cannot be fully captured at a five-arcminute grid resolution [@Paciorek2006Matern; @Kim2021Testing].

Third, demographic documentation across the northern frontier circuits (Bukgye and Donggye) was affected by intermittent boundary fluctuations and fluctuating tribal allegiances among Jurchen communities prior to the establishment of the Six Garrison Forts (*Yukjin*) and Four County Fortresses (*Sagun*) under King Sejong in the 1430s [@Barnes2015Archaeology; @EberstadtBanister1992]. Northern border populations in this study reflect sedentary Goryeo registered households and garrison forces, while un-administered Jurchen forest groups are accounted for through regional carrying-capacity allowances [@EberstadtBanister1992; @Spoorenberg2012DPRK].

# Sources

<div id="refs"></div>
