---
title: "DEMOGRAPHIC HISTORY OF CHERNIGOV AND NOVGOROD-SEVERSK (10000BC - 1300AD)."
subtitle: "Regional Boundaries, Devolved Principalities and Population Estimates in the Desna and Seym Basins."
date: "8 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/chernigov_and_novgorod_seversk_regional_map.png"
hero_caption: "Regional Boundaries and Fortified Settlement Hierarchy of the Principalities of Chernigov, Novgorod-Seversk, Putivl, Vorgol and Hlukhiv (10000BC - 1300AD)."
hero_label: "fig:chernigov-seversk-hero"
bibliography: chernigov_and_novgorod_seversk_literature_review.bib
csl: crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: template.tex
    latex_engine: xelatex
    keep_tex: false
  md_document:
    variant: gfm
---



# Executive Summary and Spatial Definition

## Scope of the Regional Synthesis (10000BC - 1300AD)

This monograph establishes the long-run prehistoric, proto-Slavic, Kievan Rus and Mongol-conquest demographic trajectory (10000BC - 1300AD) alongside the settlement-level archaeological and chronicle gazetteer (Stadester) for Region 2 of the Kievan Rus Synthesis: Left-Bank Desna, Seym, Snov and Lower Sozh (Chernigov and Novgorod-Seversk). During the eleventh to thirteenth centuries, the wider Chernigov-Seversk realm ruled by the Olgovichi branch of the Rurikid dynasty constituted the largest territorial conglomerate in Eastern Europe, stretching from the Dnieper-Desna-Sozh river junctions in the southwest to the Upper Oka, Moscow river approaches and Kursk Posemye in the northeast [@zaitsev1975chernigov; @dimnik1994dynasty; @dimnik2003olgovichi].

To ensure strict spatial non-overlap across the project's macro-regional pipelines, the wider Chernigov-Seversk realm is partitioned along modern international administrative boundaries into two complementary analytical masks:

1. **The Southern Core** (Chernigov and Novgorod-Seversk in Kievan Rus, 72 235 km²): Encompasses the historic dynastic capitals and southern forest-steppe heartland across Chernihivska Oblast (UA-74, Ukraine, 31 903 km²), Sumska Oblast (UA-59, Ukraine, 23 832 km²) and the Eastern Gomel and Lower Sozh-Dnieper Corridor (BY-HO east, Belarus, 16 500 km²). This mask contains the primary `saves/atlas_defacto.naissance` polygons of the Principality of Chernigov (2842, 3362, 3464), the Principality of Novgorod-Seversk (2846), the Principality of Putivl (2912), the Principality of Vorgol (3200) and the post-Mongol Principality of Hlukhiv (3389).
2. **The Northern Russian Half** (Cross-Referenced in European Russia, ~118 000 km²): Encompasses the northern forest and northeastern forest-steppe appanages inside the modern Russian Federation, already modelled in `russian_core_principalities_areal_masks_and_bins.pdf` under Cluster 5 (Upper Oka and Bryansk-Chernigov North: Bryansk 3361, Starodub 2982, Trubchevsk 3010, Vshchizh 2971, Karachev 3339, Novosil 3390, Tarusa 3391, Mtsensk 3392, Odoev 3756, Vorotynsk 3799, Belev 3800, Kozelsk 3801) and Cluster 6 (Kursk-Seversk Steppe Frontier: Kursk 2845, Rylsk 2956, Elets 3714).

At the 1200AD pre-Mongol apogee, the Southern Core reconstructed in this study supported 460 000 inhabitants ([360 000 - 560 000], mean density 6,37 inh/km²), anchored by the metropolitan complex of Chernigov (35 000 inhabitants across 330 ha) and the princely capitals of Novgorod-Seversk (12 000), Putivl (7 500), Gomel (5 000) and Hlukhiv (5 000) [@kovalenko2008chernihiv; @tolochko1989goroda; @kuza1989malye]. When combined with the 500 000 inhabitants modelled for the Northern Russian Half (210 000 in Bryansk-Starodub-Upper Oka plus 290 000 in Kursk-Rylsk Posemye), the Grand Principality of Chernigov-Seversk as a whole contained 960 000 inhabitants at 1200AD, rivalled within the Rus lands only by the combined Kievan-Galician-Volhynian south [@tolochko2001demography]. Following the catastrophic October 1239AD Mongol invasion under Mengu-Timur, the Southern Core contracted by 54,3% to 210 000 in 1250AD before recovering partially to 260 000 by 1300AD under the sheltered post-conquest principalities of Hlukhiv (3389), Putivl (2912) and post-Mongol Chernigov (3362).

## Summary Benchmark Table (10000BC - 1300AD)

Table 1 summarises the reconstructed population trajectory for the Southern Core (72 235 km²) across fifteen benchmark horizons from the Late Pleniglacial and Bølling-Allerød mammoth-hunter complexes to the post-Mongol devolved principalities at 1300AD.

Table: Regional Demographic and Archaeological Data Summary (Table 1).

|Epoch   |Best Estimate |Uncertainty Band  |Density (inh/km2) |Urban Share (%) |Primary Evidentiary Basis                            |
|:-------|:-------------|:-----------------|:-----------------|:---------------|:----------------------------------------------------|
|10000BC |4 500         |2 500 - 7 500     |0,06              |0,0%            |Mezin, Pushkari I & Chulatovo mammoth-bone camps     |
|6000BC  |9 000         |5 500 - 14 000    |0,12              |0,0%            |Desna-Sozh Mesolithic & early Pit-Comb Ware sites    |
|4000BC  |18 000        |11 000 - 27 000   |0,25              |0,0%            |Dnieper-Donets II & Desna Neolithic fishers          |
|1500BC  |52 000        |34 000 - 74 000   |0,72              |0,0%            |Sosnytsia & Marianivka Bronze Age agro-pastoralists  |
|500BC   |85 000        |55 000 - 120 000  |1,18              |0,0%            |Yukhnovo, Milograd & Scythian Posemye hillforts      |
|0AD     |105 000       |70 000 - 145 000  |1,45              |0,0%            |Late Zarubintsy (Pochep-Harivka) & Late Scythian     |
|300AD   |140 000       |95 000 - 190 000  |1,94              |0,0%            |Kiev culture (Roishche) & northern Chernyakhov peak  |
|500AD   |115 000       |75 000 - 160 000  |1,59              |0,0%            |Kolochin culture forest-riverine refugia             |
|700AD   |165 000       |115 000 - 220 000 |2,28              |2,5%            |Volyntsevo & early Romny-Borshchevo Severian opoliya |
|800AD   |190 000       |135 000 - 250 000 |2,63              |4,8%            |Bititsa, Gornal & Romny fortified Severian hillforts |
|900AD   |220 000       |160 000 - 285 000 |3,05              |8,5%            |Shestovytsia, Chernigov barrows & Lyubech trade axis |
|1000AD  |280 000       |210 000 - 355 000 |3,88              |13,2%           |Early Rurikid tribute network & Severian integration |
|1100AD  |365 000       |285 000 - 450 000 |5,05              |17,8%           |Post-1097AD Lyubech Congress Olgovichi expansion     |
|1200AD  |460 000       |360 000 - 560 000 |6,37              |21,5%           |Olgovichi apogee (116 hillforts; Chernigov 35k)      |
|1250AD  |210 000       |155 000 - 275 000 |2,91              |10,5%           |October 1239AD Mongol destruction of Desna-Posemye   |
|1300AD  |260 000       |195 000 - 330 000 |3,60              |11,8%           |Hlukhiv (3389), Putivl (2912) & Chernigov (3362)     |

# Devolved Principalities and Areal Masks

## Devolved Principalities and Historical Boundaries (1097AD - 1300AD)

The political geography of the Left-Bank Desna, Seym, Snov and Lower Sozh basin in `saves/atlas_defacto.naissance` reflects the progressive dynastic ramification of the Olgovichi (descendants of Oleg Svyatoslavich, d. 1115AD, who secured hereditary rights to the Chernigov land at the Congress of Lyubech in 1097AD) [@dimnik1994dynasty; @dimnik2003olgovichi]. Following Vsevolod Olgovich's accession to the Kievan throne (1139AD), the realm divided into the senior Chernigov patrimony (*Отчина*) along the Lower and Middle Desna, Snov and Sozh (2842) and the junior Seversk (*Сѣверъ*) patrimony along the Middle Desna and Seym (2846, 2912, 3200). After the Mongol destruction of 1239AD and the martyrdom of Grand Prince Mikhail Vsevolodovich at the Golden Horde (1246AD), the southern lands reorganised into the post-Mongol devolved principalities of Chernigov (3362, 3464), Novgorod-Seversk (2846), Putivl (2912) and Hlukhiv (3389, founded 1247AD). Table 2 details the devolved polity polygons represented within the Southern Core mask.

Table: Regional Demographic and Archaeological Data Summary (Table 2).

|Polity ID |Polity Name (atlas_defacto)      |Active Span |Capital (Coords)                    |Core Basin & Modern Administrative Coverage                     |
|:---------|:--------------------------------|:-----------|:-----------------------------------|:---------------------------------------------------------------|
|2842      |Principality of Chernigov        |1133-1279AD |Chernigov (51,50°N, 31,29°E)        |Lower & Middle Desna, Snov, Oster & Lower Sozh (UA-74, BY-HO)   |
|3362      |Principality of Chernigov        |1279-1356AD |Chernigov (51,50°N, 31,29°E)        |Post-Mongol Desna-Snov-Sozh core under Bryansk-Chernigov line   |
|3464      |Principality of Chernigov        |1356-1358AD |Chernigov (51,50°N, 31,29°E)        |Late post-Mongol Chernigov polygon in atlas_defacto             |
|2846      |Principality of Novgorod-Seversk |1133-1363AD |Novgorod-Seversk (51,99°N, 33,27°E) |Middle Desna, Lower Seym & Ivot-Esman (UA-74 NE, UA-59 N)       |
|2912      |Principality of Putivl           |1147-1501AD |Putivl (51,32°N, 33,86°E)           |Middle Seym (Posemye), Vyr, Kleven & Upper Sula & Psyol (UA-59) |
|3200      |Principality of Vorgol           |1203-1241AD |Vorgol (51,48°N, 33,78°E)           |Kleven-Seym interfluve NW of Putivl (UA-59 Krolevets & Putyvl)  |
|3389      |Principality of Hlukhiv          |1247-1408AD |Hlukhiv (51,68°N, 33,92°E)          |Post-Mongol Esman-Kleven plateau (UA-59 Hlukhiv & Yampil)       |

## Cross-Reference to the Northern Russian Appanages (Clusters 5 and 6)

Because historical and archaeological monographs by A. K. Zaitsev [@zaitsev1975chernigov], V. P. Kovalenko [@kovalenko2008chernihiv], A. V. Kuza [@kuza1989malye; @kuza1996gorodishcha] and M. Dimnik [@dimnik2003olgovichi] frequently cite aggregate figures for the entire Chernigov-Seversk realm from the Desna mouth to the Upper Oka and Kursk Posemye, explicit accounting is required to link this Southern Core report with the Northern Russian appanages documented in European Russia (`russian_core_principalities_areal_masks_and_bins.pdf`).

In European Russia, the northern and northeastern wings of the Olgovichi patrimony are partitioned into two clusters:
- **Cluster 5** (Upper Oka and Bryansk-Chernigov North, ~70 000 km²): Covers modern Bryansk, Kaluga, Orel and western Tula Oblasts, comprising Bryansk (3361), Starodub (2982), Trubchevsk (3010), Vshchizh (2971), Karachev (3339), Novosil (3390), Tarusa (3391), Mtsensk (3392), Odoev (3756), Vorotynsk (3799), Belev (3800) and Kozelsk (3801). Following the 1239AD sack of southern Chernigov, Prince Roman Mikhailovich transferred the senior Chernigov-Bryansk throne northward into the Bryansk forest (Debryansk), triggering a durable demographic shift toward the wooded Upper Oka *Verchovskie* principalities.
- **Cluster 6** (Kursk-Seversk Steppe Frontier, ~48 000 km²): Covers modern Kursk and western Lipetsk and Belgorod Oblasts, comprising Kursk (2845), Rylsk (2956) and Elets (3714) along the Tuskar, Upper Seym, Svapa and Upper Psyol rivers.

Table 3 demonstrates how the four devolved sub-regions of the Southern Core (Chernigov Core, Novgorod-Seversk, Putivl-Vorgol-Hlukhiv and Lower Sozh and Gomel) combine with Clusters 5 and 6 in European Russia to reconstruct the complete demographic trajectory of the wider Chernigov-Seversk lands (800AD - 1300AD) without boundary overlap.

Table: Regional Demographic and Archaeological Data Summary (Table 3).

|Sub-Region / Devolved Principality Cluster        |800AD   |1000AD  |1100AD  |1200AD  |1250AD  |1300AD  |
|:-------------------------------------------------|:-------|:-------|:-------|:-------|:-------|:-------|
|1. Chernigov Core (2842, 3362, UA-74)             |100 000 |150 000 |195 000 |240 000 |100 000 |130 000 |
|2. Novgorod-Seversk (2846, Middle Desna)          |30 000  |42 000  |55 000  |70 000  |35 000  |42 000  |
|3. Putivl, Vorgol & Hlukhiv (2912, 3200, 3389)    |26 000  |38 000  |50 000  |70 000  |35 000  |38 000  |
|4. Lower Sozh & Dnieper (BY-HO East, Gomel)       |34 000  |50 000  |65 000  |80 000  |40 000  |50 000  |
|Southern Core Subtotal (kievan_rus, 72 235 km2)   |190 000 |280 000 |365 000 |460 000 |210 000 |260 000 |
|5. [RU Cross-Ref] Bryansk, Starodub & Oka (Cl. 5) |90 000  |130 000 |170 000 |210 000 |120 000 |140 000 |
|6. [RU Cross-Ref] Kursk & Rylsk Posemye (Cl. 6)   |100 000 |150 000 |200 000 |290 000 |100 000 |120 000 |
|Northern Half Subtotal (european_russia)          |190 000 |280 000 |370 000 |500 000 |220 000 |260 000 |
|Grand Principality of Chernigov-Seversk Total     |380 000 |560 000 |735 000 |960 000 |430 000 |520 000 |

<figure class="crd-figure-block" id="fig:chernigov-and-novgorod-seversk-fig-1">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-chernigov-novgorod-seversk/chernigov_and_novgorod_seversk_fig3_principality_breakdown.png" alt="fig:chernigov-and-novgorod-seversk-fig-1" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Fortified Settlement Hierarchy and Sub-Regional Population by Devolved Principality (800AD - 1300AD). Panel A classifies the 194 excavated tenth- to early thirteenth-century <em>gorodishcha</em> across the wider Chernigov-Seversk realm (116 in the Southern Core and 78 in the cross-referenced Russian North) by enclosed rampart area (&lt;2,5 ha, 2,5 - 10 ha, and &gt;10 ha, after Kuza 1989/1996 and Kovalenko 2008). Panel B compares the demographic trajectory of the four Southern Core principalities against the cross-referenced Northern Russian Half across seven medieval benchmarks.</figcaption>
</figure>

# Prehistoric and Early Slavic Settlement (10000BC - 1000AD)

## Upper Palaeolithic Mammoth-Hunter Optimum to Bronze Age (10000BC - 1000BC)

The middle Desna incised chalk gorge between Pushkari, Novgorod-Seversk and Mezin (Mizyn) formed one of the premier Upper Palaeolithic periglacial refugia in Eurasia [@shovkoplyas1965mezinskaya; @boriskovsky1953paleolit; @velichko1997mammoth]. At Mezin (51,83°N, 33,08°E), I. G. Shovkoplyas excavated five circular mammoth-bone *yaranga*-type dwellings enclosing hearths fuel-fed by bone ash, marine amber ornaments transported over 600 km and geometric meander-engraved ivory bracelets dated to the late Pleniglacial and Bølling-Allerød transition (13000BC - 10000BC). Directly upstream along the Desna bluffs, Pushkari I (Pogon), Chulatovo I-II, Buzhany and the Novgorod-Seversky rock-shelter document multi-family winter aggregation camps of 60 to 120 inhabitants each. Across the 72 235 km² regional mask, the 10000BC Late Palaeolithic population is calibrated at 4 500 inhabitants ([2 500 - 7 500], 0,06 inh/km²).

During the Holocene climatic optimum (6000BC - 3000BC), Mesolithic hunter-fishers of the Desna-Sozh tradition transitioned into the Dnieper-Donets II and Pit-Comb Ware Neolithic cultures, occupying low sandy river terraces along the Desna, Snov, Seym and Sozh (9 000 inhabitants at 6000BC, rising to 18 000 by 4000BC). In the Middle and Late Bronze Age (2000BC - 1000BC), the Sosnytsia variant of the Trzciniec-Komariv cultural horizon and the Marianivka culture along the Seym introduced mixed millet-barley cultivation and floodplain cattle pastoralism, raising the regional population to 52 000 at 1500BC (0,72 inh/km²) [@tretyakov1966finno].

## Yukhnovo, Milograd, Kiev and Kolochin Horizons (1000BC - 700AD)

In the Early Iron Age (700BC - 200BC), the region was divided between two fortified hillfort cultures that established the enduring promontory settlement network of the Desna and Sozh basins [@tretyakov1966finno; @lyapushkin1961dneprovskoe]:
- The Yukhnovo Culture (named after the Yukhnovo type-hillfort near Novgorod-Seversk) occupied the Middle Desna and Seym valleys, constructing timber-laced earthen ramparts on high right-bank chalk headlands (0,5 - 2,5 ha per hillfort, housing 60 - 150 inhabitants at sites such as Kurove-Yukhnovo, Khorobor, Ponornytsia and Novgorod-Seversk).
- The Milograd Culture (named after the Milograd hillfort on the Dnieper south of Rechitsa) occupied the Lower Sozh, Braginka and Dnieper-Desna interfluve (Gomel, Khalch, Milograd, Lyubech, Gorval), while Scythian forest-steppe farmers fortified the Upper Sula, Psyol and Vorskla valleys (Vovkivtsi, Pustoviitivka, Kuzemyn, Romny). By 500BC, regional population reached 85 000 (1,18 inh/km²).

During the Late La Tène and Roman Iron Age (200BC - 400AD), Late Zarubintsy (Pochep-Harivka horizon, 105 000 at 0AD) and Kiev culture (200AD - 450AD, excavated at Roishche, Desna-Harivka and Ulianyky) unfortified riverside hamlets proliferated along the Desna, Snov and Lower Sozh, while the northernmost Chernyakhov culture settlements reached the Sula, Psyol and southern Seym, driving a Roman-era demographic peak of 140 000 inhabitants at 300AD (1,94 inh/km²) [@symonovich1983chernyakhov; @byrnya1991ranneslavyanskie]. Following the Hunnic collapse of the Chernyakhov frontier in the late fourth century, the early Slavic Kolochin culture (450AD - 700AD, named after the Kolochin I promontory hillfort near Rechitsa) consolidated along the wooded Dnieper-Sozh-Desna valleys, supporting 115 000 inhabitants at 500AD (1,59 inh/km²) [@byrnya1991ranneslavyanskie; @baran1998early].

## Volyntsevo, Romny-Severian Expansion and Viking-Age Shestovytsia (700AD - 1000AD)

In the eighth and ninth centuries, Slavic demographic growth accelerated dramatically under the Volyntsevo culture (700AD - 820AD, named after the type-site near Putivl, alongside the fortified Khazar-Severian administrative citadel at Bytytsia on the Psyol) and its direct successor, the Romny-Borshchevo culture (800AD - 1000AD, named after the *Monastyryshche* hillfort at Romny on the Sula) [@lyapushkin1961dneprovskoe; @sukhobokov1975slaviane; @sukhobokov1992romny]. Identified with the chronicle Severians (*Severyane*) on the Desna, Seym and Sula and the southern Radimichi on the Lower Sozh, the Romny population combined fortified promontory refuges (Novotroitske, Gornal, Putivl, Vyr, Romny, Chernigov, Snovsk, Gomel) with dense clusters of open *selyshcha* equipped with sunken-featured dwellings (*poluzemlyanki*) and domed clay ovens. Archaeological surveys by O. V. Sukhobokov document over 320 Volyntsevo and Romny settlements across the Southern Core, supporting 165 000 inhabitants by 700AD, 190 000 by 800AD and 220 000 by 900AD.

Simultaneously, the Lower Desna and Dnieper-Sozh corridor became a vital artery of trans-continental Varangian-Rus trade and military organisation [@rybakov1949drevnosti; @motsia2011shestovytsia; @androschuk2013vikings]:
- **Shestovytsia** (Korovel, 18 km SW of Chernigov): Excavations by P. Smolychev, D. I. Blifeld, V. P. Kovalenko and O. P. Motsia revealed a 16 ha fortified hillfort and harbour suburb accompanied by five barrow cemeteries (>400 mounds) containing tenth-century Scandinavian chamber graves with Frankish swords, warhorses, folding balances and Abbasid and Samanid silver dirhams (2 400 inhabitants in 900AD, peaking at 3 200 in 1000AD).
- **Chernigov Retinue Necropolises** (Chorna Mohyla, Hulbyshche, Boldyni Hory): B. A. Rybakov's analysis of the monumental *Chorna Mohyla* princely tumulus (40 m diameter, 11 m height, ca. 960AD) and the 230+ barrows of Boldyni Hory demonstrates that tenth-century Chernigov already functioned as the seat of an autonomous princely and boyar *druzhina* (9 500 inhabitants in 900AD, rising to 18 000 by 1000AD).
- **Lyubech** (51,70°N, 30,66°E) and Mokhov (52,02°N, 30,73°E): Guarded the Dnieper-Sozh-Desna confluence, listed by Constantine Porphyrogenitus (*De Administrando Imperio*, ca. 948AD) as *Telioutza*, one of the key fortified ship-assembly stations on the route from the Varangians to the Greeks (3 500 at Lyubech and 1 950 at Mokhov in 1000AD).

By 1000AD, following Grand Prince Vladimir Svyatoslavich's integration of the Severian and Radimichi lands (984AD Battle on the Pishchana) and the construction of the Desna-Oster-Sula frontier ramparts (Gorodets Ostersky, Pryluky, Romny, Vovkivtsi), the Southern Core reached 280 000 inhabitants (3,88 inh/km²), with an urban population of 37 000 (13,2%).

<figure class="crd-figure-block" id="fig:chernigov-and-novgorod-seversk-fig-2">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-chernigov-novgorod-seversk/chernigov_and_novgorod_seversk_fig2_population_trajectory.png" alt="fig:chernigov-and-novgorod-seversk-fig-2" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Demographic Trajectory of Left-Bank Desna, Seym, Snov, and Lower Sozh (10000BC - 1300AD). Panel A reconstructs the prehistoric and early Iron Age settlement trajectory (10000BC - 500AD) from the middle Desna Upper Palaeolithic mammoth-hunter camps (Mezin, Pushkari I) to the Roman-era Chernyakhov/Kiev culture peak (140k at 300AD) and Kolochin transition (115k at 500AD). Panel B charts the Severian, Kievan Rus, and Mongol Conquest era (500AD - 1300AD), comparing the Southern Core (460k at 1200AD, dropping to 210k after the 1239AD invasion) against the Wider Chernigov-Seversk Realm (960k at 1200AD including Clusters 5 and 6 in european_russia).</figcaption>
</figure>

# The Olgovichi Principalities (1000AD - 1239AD)

## Dynastic Consolidation from Mstislav Vsevolodovich (1024AD) to the Olgovichi

Following the Battle of Listven (1024AD, fought beside the Listven hillfort 22 km north of Chernigov), Prince Mstislav Vladimirovich established Chernigov as the capital of Left-Bank Rus, founding the stone Transfiguration Cathedral (*Spaso-Preobrazhensky Sobor*, 1030-1036AD) inside the 16 ha *Detinets* [@rybakov1949drevnosti; @dimnik1994dynasty]. Under Svyatoslav Yaroslavich (1054-1076AD) and his son Oleg Svyatoslavich (d. 1115AD), recognized at the Congress of Lyubech (1097AD) as hereditary ruler of the Chernigov-Seversk land, the dynasty fostered intensive internal colonisation across the *Chernigov Opolye*, the middle Desna, the Lower Sozh and the Posemye steppe frontier [@zaitsev1975chernigov; @dimnik2003olgovichi].

Archaeological syntheses by V. P. Kovalenko [@kovalenko2008chernihiv], A. V. Kuza [@kuza1989malye; @kuza1996gorodishcha], P. P. Tolochko [@tolochko1989goroda], Yu. Yu. Morgunov [@morgunov2003posemye] and H. V. Shtykhov [@shtykhov1992goroda] catalogue 116 excavated tenth- to early thirteenth-century fortified *gorodishcha* within the Southern Core (48 in the Chernigov Core, 26 in Novgorod-Seversk, 24 in Putivl-Vorgol-Hlukhiv and 18 in the Lower Sozh and Gomel corridor), plus 78 *gorodishcha* in the cross-referenced Russian North (194 fortified towns in total across the Grand Principality), surrounded by over 2 100 unfortified rural *selyshcha* (such as the extensively excavated 12 ha rural craft village of Avtunichi).

## Urban Archaeology and Fortified Settlement Hierarchy (1200AD)

Applying the standard Rus urban archaeological multipliers calibrated by P. P. Tolochko and A. V. Kuza (120 - 150 inh/ha for densely built *detinets* and *okolny gorod* ramparts; 75 - 100 inh/ha for outer *posad* and *podol* craft quarters, corresponding to 20 - 25 homesteads per hectare at 5,5 - 6,0 persons per household), Table 4 details the reconstructed 1200AD urban hierarchy across the Southern Core and key cross-referenced northern centres.

Table: Regional Demographic and Archaeological Data Summary (Table 4).

|Town (Polity ID)        |Rampart (ha) |Posad (ha) |Total (ha) |1200AD Pop. |1250AD Pop. |
|:-----------------------|:------------|:----------|:----------|:-----------|:-----------|
|Chernigov (2842)        |160 ha       |170 ha     |330 ha     |35 000      |5 000       |
|Novgorod-Seversk (2846) |32 ha        |43 ha      |75 ha      |12 000      |3 800       |
|Putivl (2912)           |22 ha        |23 ha      |45 ha      |7 500       |3 200       |
|Gomel (Homiy) (2842)    |18 ha        |24 ha      |42 ha      |5 000       |2 800       |
|Hlukhiv (3389)          |15 ha        |17 ha      |32 ha      |5 000       |4 000       |
|Lyubech (2842)          |14 ha        |16 ha      |30 ha      |4 500       |2 100       |
|Vyr (2912)              |15 ha        |20 ha      |35 ha      |4 500       |800         |
|Romny (Romen) (2912)    |12 ha        |16 ha      |28 ha      |4 200       |1 500       |
|Snovsk (Sedniv) (2842)  |12 ha        |12 ha      |24 ha      |4 000       |1 200       |
|Oster (2842)            |10 ha        |12 ha      |22 ha      |3 500       |1 400       |
|Pryluky (2842)          |10 ha        |11 ha      |21 ha      |3 200       |1 100       |
|Vsevolozh (2842)        |10 ha        |10 ha      |20 ha      |3 000       |600         |
|Vorgol (3200)           |9 ha         |11 ha      |20 ha      |3 000       |700         |
|Bragin (2842)           |9 ha         |11 ha      |20 ha      |3 000       |1 400       |
|Khorobor (2842)         |9 ha         |9 ha       |18 ha      |2 800       |900         |
|Unenezh (Nizhyn) (2842) |9 ha         |9 ha       |18 ha      |2 800       |950         |
|Sosnytsia (2842)        |9 ha         |9 ha       |18 ha      |2 800       |1 150       |
|Rechitsa (2842)         |8 ha         |8 ha       |16 ha      |2 500       |1 500       |
|[RU] Kursk (2845)       |24 ha        |31 ha      |55 ha      |8 000       |2 200       |
|[RU] Bryansk (3361)     |20 ha        |20 ha      |40 ha      |6 000       |6 500       |
|[RU] Starodub (2982)    |16 ha        |18 ha      |34 ha      |5 000       |2 400       |
|[RU] Vshchizh (2971)    |14 ha        |14 ha      |28 ha      |4 500       |400         |

<figure class="crd-figure-block" id="fig:chernigov-and-novgorod-seversk-fig-3">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-chernigov-novgorod-seversk/chernigov_and_novgorod_seversk_fig4_urban_archaeology.png" alt="fig:chernigov-and-novgorod-seversk-fig-3" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Urban Archaeology, Walled Enclosures and the 1239AD Mongol Destruction Horizon. Panel A plots total fortified and <em>posad</em> area (ha, log scale) against reconstructed 1200AD urban population (log scale) across the sixteen principal towns of the Chernigov-Seversk realm, alongside reference density lines of 150 inh/ha and 110 inh/ha. Panel B compares pre-Mongol apogee populations (1200AD) against the post-conquest demographic trough (1250AD).</figcaption>
</figure>

## Sub-Regional Synthesis at the 1200AD Apogee (460 000 Inhabitants)

1. **Principality of Chernigov Core** (2842, UA-74 Chernihivska Oblast, 240 000 at 1200AD): Centred on the fertile *Chernigov Opolye* between the Desna, Snov and Bilous rivers (12 - 18 inh/km²), where princely domains (*sela*) such as Orgoshch (2 100), Listven (1 850), Blestovit (2 000), Gurichev (1 800), Snovsk (4 000) and Berezna (2 200) supplied grain, warhorses and ironwork to the 35 000-strong metropolitan capital of Chernigov (16 ha *Detinets*, 40 ha *Okolny Gorod*, 20 ha *Tretyak*, 85 ha walled *Peredgorodier* and 170 ha *Podol* and *Leskovitsa* craft suburbs, adorned by five twelfth- and early thirteenth-century brick cathedrals: the Transfiguration, Boris and Gleb, Dormition at Yeletsky Monastery, St Elias and St Paraskeva Pyatnitsa) [@rybakov1949drevnosti; @kovalenko2008chernihiv]. Along the Dnieper, middle Desna and Oster-Udai corridors, fortified *volost* centres - Lyubech (4 500, where B. A. Rybakov excavated the timber-and-earth princely castle of *Zamkova Hora*), Oster (3 500), Pryluky (3 200), Vsevolozh (3 000), Sosnytsia (2 800), Khorobor (2 800), Unenezh (Nizhyn) (2 800), Baturin (2 600), Bakhmach (2 400), Moroviisk (2 200), Varva (2 100) and Lutava (1 800) - anchored an urban network of 68 000 townspeople (28,3% of the core's population) and 172 000 rural inhabitants [@zaitsev1975chernigov].
2. **Principality of Novgorod-Seversk** (2846, Middle Desna and Ivot-Esman, 70 000 at 1200AD): Ruled from the high chalk headland of Novgorod-Seversk (12 000 inhabitants across 75 ha, comprising the 2,5 ha *Zamkova Hora* citadel, the 30 ha *Okolny Gorod* and the stone Spaso-Preobrazhensky princely monastery) - immortalised as the seat of Prince Igor Svyatoslavich (1151-1202AD) in the *Tale of Igor's Campaign* (1185AD) - this principality controlled the middle Desna crossings and the wooded Ivot, Znob and Esman tributaries (Voronizh 2 400, Krolevets-Retezh 1 100, Znob 950, Shalyhyne-Obesta 850, Ivot 780, Yampil 740 and Kurove-Yukhnovo 720) [@kovalenko2008chernihiv; @dimnik2003olgovichi].
3. **Principalities of Putivl** (2912), Vorgol (3200) and Hlukhiv (3389) (Posemye and Upper Sula and Psyol, 70 000 at 1200AD): Guarding the southern forest-steppe frontier against the Polovtsians (*Cumans*), Putivl (7 500 inhabitants across 45 ha, with a twelfth-century brick princely church excavated on *Nikolske Gorka*) formed a fortified dyad with Vyr (4 500 across 35 ha), Hlukhiv (5 000 across 32 ha), Romny (4 200 across 28 ha) and Vorgol (3 000 across 20 ha, seat of an autonomous appanage 3200 on the Kleven cliffs between 1203AD and 1241AD) [@sukhobokov1992romny; @morgunov2003posemye]. Secondary steppe-watch fortresses along the Seym, Tern, Sula, Psyol and Vorskla included Lipen (Sumy) (2 600), Okhtyrka (2 500), Hlinsk (2 300), Popash (2 200), Konotop (2 100), Viakhan (2 100), Zartyi (1 900), Lipovets (1 850), Nedryhailiv (1 350) and Igoreve Seltsye (1 250, the fortified princely estate with wine and honey cellars looted in the 1146AD chronicle).
4. **Lower Sozh and Dnieper-Braginka Corridor** (BY-HO Eastern Gomel, 80 000 at 1200AD): Incorporating the southern Radimichi and Dregovichi-Severian contact zone under Chernigov sovereignty, this riverine corridor was anchored by Gomel (*Homiy*) (5 000 inhabitants across 42 ha, with weapon-smithing workshops excavated by O. A. Makushnykov), Bragin (3 000), Rechitsa (2 500), Chechersk (2 300), Loyev (2 200), Khalch (1 450), Streshin (1 250), Gorval (1 150) and Zaspa (1 050) [@shtykhov1992goroda; @makushnykov2009gomel].

# Mongol Invasion and Post-Conquest Era (1239AD - 1300AD)

## Archaeological Destruction Horizon of October 1239AD

In the autumn of 1239AD, following the devastation of Ryazan (1237AD), Vladimir-Suzdal (1238AD) and Pereyaslavl-Yuzhny (March 1239AD), a Mongol army commanded by Batu's cousin Mengu-Timur (Möngke) and Kadan advanced up the Seym and Desna valleys against the Chernigov-Seversk principalities [@dimnik2003olgovichi; @kovalenko2008chernihiv]. Archaeological excavations across more than forty *gorodishcha* in the Southern Core reveal a synchronous mid-thirteenth-century destruction horizon marked by vitrified timber-and-earth ramparts, clusters of armour-piercing Mongol tanged arrowheads, hoard depositions of silver *grivnas* and temple rings and unburied skeletons in collapsed dwellings and church vaults:

1. **The Posemye Corridor** (Putivl, Vyr, Vorgol, Hlukhiv, Popash, Viakhan): Stormed during the initial autumn offensive along the Seym and Kleven (October 1239AD). At Putivl (2912) and Vyr, mass graves containing decapitated and arrow-pierced defenders alongside burned artisan quarters confirm the slaughter of the frontier garrisons [@sukhobokov1992romny]. Vorgol (3200), Popash, Viakhan and Zartyi suffered total destruction and permanent urban abandonment after 1239-1241AD.
2. **The Desna-Snov-Oster Approach** (Snovsk, Sosnytsia, Khorobor, Vsevolozh, Unenezh, Orgoshch, Listven, Blestovit): Systematically sacked along the middle Desna and Oster axes to sever communications before the investment of Chernigov. At Vsevolozh, Blestovit and Unenezh, burned rampart casemates yielded hundreds of skeletons of defenders and women and children who perished in the flames [@kovalenko2008chernihiv].
3. **Siege and Sack of Chernigov** (18 October 1239AD): As recorded in the Laurentian and Hypatian Chronicles, Mongol siege engineers surrounded the city and bombarded the walls with heavy counterweight trebuchets (*poroki*) that *"hurled stones a distance of a bowshot and a half and each stone required four men to lift it."* Despite a desperate relief sortie led outside the ramparts by Prince Mstislav Glebovich of Rylsk and Chernigov - whose troops were routed in open battle - the Mongols breached the *Okolny Gorod* on 18 October 1239AD, put the city to the torch, looted the five brick cathedrals and slaughtered or enslaved the population [@dimnik2003olgovichi; @kovalenko2008chernihiv]. Excavations across the 170 ha *Peredgorodier* and *Podol* confirm that the outer suburbs ceased to exist, leaving post-conquest occupation confined to the 16 ha *Detinets* (~5 000 inhabitants in 1250AD).

## Demographic Contraction (1250AD) and Post-Mongol Realignment (1240AD - 1300AD)

Between 1239AD and 1250AD, the population of the Southern Core plunged by 54,3%, falling from 460 000 (1200AD) to 210 000 (1250AD, 2,91 inh/km²), while urban share dropped from 21,5% to 10,5%. Over 65% of the 116 fortified *gorodishcha* in the Southern Core ceased to function as urban settlements. Following the execution of Grand Prince Mikhail Vsevolodovich of Chernigov and his boyar Fedor at the Golden Horde in September 1246AD for refusing to walk between sacred purification fires [@dimnik2003olgovichi], the political and demographic geography of the Chernigov-Seversk lands underwent a profound three-way realignment between 1246AD and 1300AD:

1. **Northward Shift of the Senior Throne to Bryansk** (3361) and Survival of Post-Mongol Chernigov (3362, 3464): Under Mikhail's younger son Roman Mikhailovich the Old (1246-1288AD), the senior princely seat was transferred from devastated Chernigov northward into the dense forests of Bryansk (3361 in European Russia Cluster 5), which expanded from 6 000 (1200AD) to 6 500 (1250AD). Nevertheless, Chernigov (3362, 1279-1356AD), Lyubech (2 500 in 1300AD) and the Lower Sozh towns (Gomel 3 400, Rechitsa 1 900, Bragin 1 750, Chechersk 1 650) preserved a reduced episcopal and princely administration (130 000 in the Chernigov Core and 50 000 in the Lower Sozh by 1300AD) [@kuczynski1936ziemie; @makushnykov2009gomel].
2. **Foundation of the Principality of Hlukhiv** (3389, 1247-1408AD): In 1247AD, Mikhail Vsevolodovich's second son Simeon Mikhailovich established an autonomous hereditary principality at Hlukhiv (3389) on the wooded Esman-Kleven plateau (51,68°N, 33,92°E). Sheltered by marshy forests north of the steppe corridor, Hlukhiv retained 4 000 inhabitants in 1250AD and 4 500 in 1300AD, serving as the most resilient urban refuge in the southern Seversk lands until the mid-fourteenth century.
3. **Persistence of the Principality of Putivl** (2912, 1147-1501AD) and the Posemye Baskakate (1283-1285AD): Descendants of the Igorichi line maintained the Principality of Putivl (2912) (3 200 inhabitants in 1250AD, recovering to 3 800 by 1300AD) alongside Novgorod-Seversk (2846, 3 800 in 1250AD, 4 500 in 1300AD) and Romny (1 950 in 1300AD). Under Golden Horde suzerainty, the Posemye was supervised by the Mongol *baskak* Akhmad, whose creation of tax-exempt *slobody* near Lipovets and Vorgol provoked the famous 1283-1285AD uprising of Princes Oleg of Rylsk-Vorgol and Svyatoslav of Lipovets recorded in the Laurentian Chronicle [@kuczynski1936ziemie; @sukhobokov1992romny]. By 1300AD, natural recovery across these wooded riverine refugia restored the Southern Core to 260 000 inhabitants (3,60 inh/km²), while the wider Chernigov-Seversk realm (including the cross-referenced Russian North) stood at 520 000 inhabitants.

# References
