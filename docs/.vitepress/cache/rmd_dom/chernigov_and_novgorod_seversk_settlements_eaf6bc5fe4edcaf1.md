---
title: "SETTLEMENT GAZETTEER OF CHERNIGOV AND NOVGOROD-SEVERSK (10000BC - 1300AD)."
subtitle: "Archaeological Sites, Severian Hillforts and Urban Population Estimates in the Desna and Seym Basins."
date: "8 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/chernigov_and_novgorod_seversk_fig4_urban_archaeology.png"
hero_caption: "Walled Enclosures, Urban Populations and the 1239AD Mongol Destruction Horizon in the Chernigov-Seversk Lands."
hero_label: "fig:chernigov-seversk-settlements-hero"
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



# Gazetteer Overview and Methodology (10000BC - 1300AD)

## Structure of the 142-Settlement Dataset

This companion document details the settlement-level dataset stored in `chernigov_and_novgorod_seversk_settlements.json` under the top-level key "chernigov_and_novgorod_seversk". Book-ended at the Mongol Conquests (1239AD) and the immediate post-conquest devolved principalities (1240AD - 1300AD), the gazetteer catalogues 142 verified archaeological type-sites, Severian and Radimichi promontory hillforts, tenth-century Varangian-Rus retinue complexes and Olgovichi chronicle towns (*gorodishcha*) across the 72 235 km² Southern Core of the Chernigov-Seversk realm (Chernihivska Oblast UA-74, Sumska Oblast UA-59 and Eastern Gomel and Lower Sozh BY-HO).

Each entry adheres strictly to the Stadester JSON specification:
- **name**: Canonical English and historical designation with Ukrainian, Belarusian and chronicle equivalents.
- **other_names**: Array of alternative orthographies across Old East Slavic chronicles, archaeological corpora and modern Ukrainian and Belarusian standards.
- **coords**: Geographic coordinates ([lat, lon] in decimal degrees, verified within 50,14°N - 53,13°N and 29,83°E - 35,26°E).
- **type**: Functional classification (regional_capital, principality_capital, chronicle_fortress, archaeological_site).
- **population**: Dictionary mapping compact string year keys strictly within 10000BC - 1300AD ("-10000", "-6000", "-4000", "-1500", "-500", "0", "300", "500", "700", "800", "900", "1000", "1050", "1100", "1150", "1200", "1239", "1250", "1300") to strictly positive integer populations (> 0). Unoccupied horizons are omitted rather than encoded as zero or null.

## Calibration Multipliers Across Pre-Mongol Horizons (10000BC - 1300AD)

1. **Upper Palaeolithic to Early Iron Age** (10000BC - 500AD, 22 Type-Sites): Mammoth-hunter winter base camps on the middle Desna (Mezin, Pushkari I, Chulatovo I-II, Novgorod-Seversky, Buzhany) are scaled at 75 - 120 persons per multi-dwelling bone-hut complex [@shovkoplyas1965mezinskaya; @boriskovsky1953paleolit; @velichko1997mammoth]. Yukhnovo and Milograd Early Iron Age promontory hillforts (0,5 - 3,0 ha) are calibrated at 380 - 780 inhabitants [@tretyakov1966finno], while Late Zarubintsy, Kiev culture (Roishche, Harivka-Desna) and Kolochin (Kolochin I) riverside complexes are scaled at 580 - 850 inhabitants [@byrnya1991ranneslavyanskie; @symonovich1983chernyakhov].
2. **Volyntsevo, Romny-Severian and Viking-Age Centres** (700AD - 1000AD): Major Severian and Radimichi *opoliya* citadels (Volyntsevo, Bytytsia, Gornal, Novotroitske, Romny) and Varangian-Rus retinue complexes (Shestovytsia 3 200, Boldyni Hory 2 500, Mokhov 1 950, Lyubech 3 500) are reconstructed from excavated sunken-dwelling (*poluzemlyanka*) density and barrow necropolis mortality tables [@sukhobokov1975slaviane; @motsia2011shestovytsia; @androschuk2013vikings].
3. **Olgovichi Principalities at Apogee** (1050AD - 1239AD): Fortified *detinets* and *okolny gorod* ramparts (120 - 150 inh/ha) and unfortified *posad* and *podol* craft suburbs (75 - 100 inh/ha) follow the archaeological syntheses of V. P. Kovalenko [@kovalenko2008chernihiv], A. V. Kuza [@kuza1989malye; @kuza1996gorodishcha], P. P. Tolochko [@tolochko1989goroda], A. K. Zaitsev [@zaitsev1975chernigov], Yu. Yu. Morgunov [@morgunov2003posemye] and H. V. Shtykhov [@shtykhov1992goroda].
4. **October 1239AD Mongol Destruction and Post-Conquest Devolved Principalities** (1250AD - 1300AD): Calibrated from excavated destruction horizons across the Posemye and Desna corridors (Putivl, Vyr, Vorgol, Vsevolozh, Chernigov) and the post-conquest survival of Hlukhiv (3389, 4 500 in 1300AD), Novgorod-Seversk (2846, 4 500), Putivl (2912, 3 800), Gomel (3 400) and Chernigov (3362, 6 000) [@dimnik2003olgovichi; @kuczynski1936ziemie].

# Prehistoric, Proto-Slavic and Viking-Age Sites (22 Sites)

Table 1 presents the 22 prehistoric, Early Iron Age, Kiev and Kolochin, Romny-Severian and Viking-Age type-sites included in the gazetteer (10000BC - 1300AD).

Table: Regional Demographic and Archaeological Data Summary (Table 1).

|Site Key (Coords)                  |Cultural Horizon                           |10000BC / Early |500BC / 300AD |900AD |1200AD (1300AD) |
|:----------------------------------|:------------------------------------------|:---------------|:-------------|:-----|:---------------|
|mezin (51,83°N, 33,08°E)           |Upper Palaeolithic Desna Type-Site         |120 (10000BC)   |250 (500BC)   |400   |650 (390)       |
|pushkari (52,22°N, 33,29°E)        |Pushkari I (Pogon) Mammoth Camp            |110 (10000BC)   |220 (500BC)   |340   |520 (310)       |
|chulatovo (51,95°N, 33,32°E)       |Chulatovo I-II Desna Cliff Camp            |95 (10000BC)    |190 (500BC)   |380   |580 (350)       |
|novgorod_seversky_palaeolithic     |Desna Rock-Shelter (52,01°N, 33,26°E)      |85 (10000BC)    |320 (500BC)   |-     |-               |
|mezhyrich_desna_palaeolithic       |Buzhany Desna Terrace (51,69°N)            |75 (10000BC)    |260 (500BC)   |410   |560 (330)       |
|kurove_yukhnovo (52,07°N, 33,29°E) |Yukhnovo Iron Age Type-Hillfort            |280 (1500BC)    |650 (500BC)   |520   |720 (410)       |
|mnogopillya_sosnytsia_bronze       |Sosnytsia Bronze Age (51,51°N)             |520 (1500BC)    |480 (500BC)   |540   |690 (400)       |
|marianivka (51,36°N, 33,52°E)      |Marianivka Neolithic/Bronze (Seym)         |490 (1500BC)    |430 (500BC)   |530   |680 (380)       |
|pochep_lyubech_zarubintsy          |Harivka-Desna Zarubintsy/Kiev (51,45°N)    |-               |790 (300AD)   |820   |1 100 (560)     |
|roishche_chernyakhov (51,65°N)     |Roishche Kiev/Chernyakhov Complex          |-               |850 (300AD)   |790   |1 180 (640)     |
|volyntsevo (51,40°N, 33,94°E)      |Volyntsevo 8th-9th c. Type-Site            |-               |420 (300AD)   |1 150 |980 (520)       |
|harivka (51,34°N, 33,89°E)         |Harivka Severian Hoard & Hillfort          |-               |420 (500AD)   |820   |890 (460)       |
|gornal (51,06°N, 35,22°E)          |Gornal Romny-Severian Citadel              |-               |420 (500BC)   |1 850 |1 250 (580)     |
|novotroitske (50,62°N, 34,48°E)    |Lyapushkin Excavated Romny Hillfort        |-               |380 (500AD)   |950   |640 (340)       |
|kamyane_psel (50,55°N, 34,39°E)    |Psyol Romny-Rus Complex                    |-               |340 (500AD)   |740   |1 120 (540)     |
|shestovytsia (51,38°N, 31,19°E)    |Korovel Viking-Age Retinue (1000AD: 3 200) |-               |420 (500AD)   |2 400 |1 850 (780)     |
|chorna_mohyla_boldyni (51,48°N)    |Boldyni Hory & Chorna Mohyla Suburb        |-               |750 (700AD)   |1 800 |3 400 (1 100)   |
|kolochin (52,27°N, 30,52°E)        |Kolochin I 5th-7th c. Type-Site            |-               |850 (500AD)   |750   |950 (540)       |
|milograd (52,24°N, 30,56°E)        |Milograd Iron Age Type-Hillfort            |320 (1500BC)    |780 (500BC)   |710   |920 (520)       |
|mokhov (52,02°N, 30,73°E)          |Dnieper-Sozh Retinue (1000AD: 1 950)       |-               |410 (500AD)   |1 450 |1 250 (680)     |
|vetka_neolithic_sozh (52,56°N)     |Sozh Neolithic/Radimichi (4000BC: 320)     |140 (6000BC)    |590 (500BC)   |750   |980 (580)       |
|avtunichi (51,79°N, 31,42°E)       |Excavated Opolye Rural Craft Village       |-               |320 (700AD)   |540   |1 100 (520)     |

# Principality of Chernigov Core (52 Settlements)

Table 2 documents the 52 chronicle towns and excavated *gorodishcha* across the Chernigov Core (UA-74 Chernihivska Oblast) from 800AD to 1300AD.

Table: Regional Demographic and Archaeological Data Summary (Table 2).

|Settlement (Coords)                            |800AD |1000AD |1100AD |1200AD |1250AD (1300AD) |
|:----------------------------------------------|:-----|:------|:------|:------|:---------------|
|Chernigov (2842, 3362 Cap.) (51,50°N, 31,29°E) |6 800 |18 000 |26 840 |35 000 |5 000 (6 000)   |
|Lyubech (51,70°N, 30,66°E)                     |2 200 |3 500  |4 020  |4 500  |2 100 (2 500)   |
|Snovsk (Sedniv) (51,64°N, 31,57°E)             |1 950 |2 800  |3 424  |4 000  |1 200 (1 650)   |
|Oster (Gorodets) Ostersky (50,95°N, 30,88°E)   |1 150 |1 800  |2 684  |3 500  |1 400 (1 850)   |
|Pryluky (Priluk) (50,59°N, 32,39°E)            |1 250 |1 850  |2 552  |3 200  |1 100 (1 550)   |
|Vsevolozh (Syvolozh) (51,18°N, 32,36°E)        |1 150 |1 800  |2 424  |3 000  |600 (950)       |
|Unenezh (Nizhyn) (51,05°N, 31,89°E)            |1 050 |1 600  |2 224  |2 800  |950 (1 450)     |
|Sosnytsia (51,53°N, 32,50°E)                   |1 350 |1 900  |2 368  |2 800  |1 150 (1 500)   |
|Khorobor (Makoshyne) (51,47°N, 32,33°E)        |1 080 |1 600  |2 224  |2 800  |900 (1 250)     |
|Baturin (Baturyn) (51,34°N, 32,88°E)           |820   |1 200  |1 928  |2 600  |850 (1 200)     |
|Bakhmach (Bakhmatch) (51,18°N, 32,83°E)        |880   |1 350  |1 896  |2 400  |750 (1 100)     |
|Berezna (51,57°N, 31,78°E)                     |920   |1 300  |1 768  |2 200  |900 (1 250)     |
|Moroviisk (Morivsk) (51,09°N, 30,87°E)         |820   |1 200  |1 720  |2 200  |800 (1 050)     |
|Orgoshch (Rohoshchi) (51,63°N, 31,08°E)        |860   |1 250  |1 692  |2 100  |750 (950)       |
|Varva (Varin) (50,49°N, 32,72°E)               |880   |1 250  |1 692  |2 100  |720 (980)       |
|Blestovit (Blystova) (51,43°N, 31,93°E)        |820   |1 200  |1 616  |2 000  |700 (920)       |
|Mena (51,52°N, 32,22°E)                        |840   |1 150  |1 540  |1 900  |820 (1 150)     |
|Listven (51,69°N, 31,11°E)                     |940   |1 350  |1 610  |1 850  |620 (780)       |
|Nosivka (Nosov) (50,93°N, 31,58°E)             |660   |950    |1 418  |1 850  |720 (1 050)     |
|Gurichev (51,41°N, 31,22°E)                    |790   |1 150  |1 488  |1 800  |580 (760)       |
|Lutava (Karpilivka) (50,98°N, 30,82°E)         |660   |950    |1 392  |1 800  |620 (820)       |
|Korop (51,56°N, 32,95°E)                       |680   |950    |1 314  |1 650  |780 (1 150)     |
|Chemer (Chemerin) (51,10°N, 31,22°E)           |600   |850    |1 266  |1 650  |620 (820)       |
|Kovchyn (Pakul)-Bilous (51,46°N, 31,08°E)      |740   |1 050  |1 362  |1 650  |720 (950)       |
|Borzna (51,25°N, 32,43°E)                      |580   |820    |1 148  |1 450  |680 (980)       |
|Horodnya (51,89°N, 31,59°E)                    |530   |750    |1 062  |1 350  |680 (950)       |
|Kozelets (50,91°N, 31,12°E)                    |520   |750    |1 062  |1 350  |650 (920)       |
|Staryi Bilous (51,49°N, 31,20°E)               |530   |740    |1 021  |1 280  |480 (650)       |
|Bobrovytsia (50,74°N, 31,39°E)                 |500   |720    |996    |1 250  |580 (840)       |
|Kobyzhcha (50,83°N, 31,28°E)                   |480   |680    |950    |1 200  |560 (810)       |
|Ichnya (50,86°N, 32,39°E)                      |470   |680    |924    |1 150  |540 (780)       |
|Vypovziv (50,94°N, 30,80°E)                    |480   |680    |924    |1 150  |480 (650)       |
|Ripky (51,80°N, 31,09°E)                       |440   |620    |870    |1 100  |520 (740)       |
|Horbove (51,46°N, 31,59°E)                     |460   |640    |879    |1 100  |450 (620)       |
|Boiaro (Bruzhytsi) (51,55°N, 31,49°E)          |440   |620    |844    |1 050  |420 (580)       |
|Obmachiv (51,37°N, 32,81°E)                    |410   |580    |788    |980    |440 (620)       |
|Olyshivka (51,22°N, 31,33°E)                   |390   |550    |774    |980    |450 (640)       |
|Kyselivka (51,53°N, 31,41°E)                   |410   |580    |778    |960    |390 (540)       |
|Sribne (50,66°N, 32,92°E)                      |390   |550    |758    |950    |430 (610)       |
|Ponornytsia (51,72°N, 32,85°E)                 |390   |550    |742    |920    |420 (590)       |
|Petrushyn (51,63°N, 31,35°E)                   |380   |540    |738    |920    |380 (520)       |
|Novi Mlyny (51,42°N, 32,98°E)                  |360   |520    |712    |890    |410 (560)       |
|Kloniv (Klochkiv) (51,68°N, 31,60°E)           |370   |520    |707    |880    |370 (510)       |
|Tabayivka (51,62°N, 31,15°E)                   |360   |510    |692    |860    |360 (490)       |
|Berezivka-Udai (50,83°N, 33,14°E)              |360   |510    |692    |860    |360 (490)       |
|Kulykivka (51,37°N, 31,65°E)                   |360   |520    |692    |850    |390 (540)       |
|Sokyryntsi-Utkivka (50,70°N, 32,79°E)          |350   |490    |672    |840    |350 (480)       |
|Kruty (51,06°N, 32,11°E)                       |340   |480    |657    |820    |360 (510)       |
|Vykoniv (Desna) (50,93°N, 30,76°E)             |320   |450    |622    |780    |350 (490)       |
|Radul (51,83°N, 30,72°E)                       |340   |480    |620    |750    |380 (520)       |
|Revna-Snov (52,18°N, 32,58°E)                  |320   |440    |596    |740    |410 (560)       |
|Brech-Snov (51,77°N, 32,25°E)                  |300   |420    |576    |720    |390 (540)       |

# Novgorod-Seversk, Putivl, Vorgol and Hlukhiv (44 Settlements)

Table 3 details the 44 princely capitals, chronicle fortresses and excavated *gorodishcha* across the Middle Desna, Seym (Posemye), Esman, Sula, Psyol and Vorskla valleys (800AD - 1300AD).

Table: Regional Demographic and Archaeological Data Summary (Table 3).

|Settlement (Coords)                             |800AD |1000AD |1100AD |1200AD |1250AD (1300AD) |
|:-----------------------------------------------|:-----|:------|:------|:------|:---------------|
|Novgorod-Seversk (2846 Cap.) (51,99°N, 33,27°E) |4 200 |7 500  |9 840  |12 000 |3 800 (4 500)   |
|Putivl (2912 Cap.) (51,32°N, 33,86°E)           |2 700 |4 500  |6 060  |7 500  |3 200 (3 800)   |
|Hlukhiv (3389 Cap.) (51,68°N, 33,92°E)          |1 750 |3 000  |4 040  |5 000  |4 000 (4 500)   |
|Vyr (Stari Vyrky) (51,16°N, 34,29°E)            |1 850 |2 900  |3 732  |4 500  |800 (1 050)     |
|Romny (Romen) (50,75°N, 33,47°E)                |2 400 |3 200  |3 720  |4 200  |1 500 (1 950)   |
|Vorgol (3200 Cap.) (51,48°N, 33,78°E)           |1 150 |1 850  |2 448  |3 000  |700 (820)       |
|Lipen (Sumy) (50,91°N, 34,80°E)                 |1 350 |1 950  |2 288  |2 600  |750 (920)       |
|Okhtyrka (Vorskla) (50,31°N, 34,90°E)           |1 300 |1 950  |2 236  |2 500  |680 (850)       |
|Voronizh (51,77°N, 33,46°E)                     |940   |1 400  |1 920  |2 400  |920 (1 150)     |
|Hlinsk (Glinsk) (50,62°N, 33,32°E)              |950   |1 350  |1 844  |2 300  |950 (1 350)     |
|Popash (51,02°N, 33,68°E)                       |920   |1 350  |1 792  |2 200  |520 (680)       |
|Konotop (51,24°N, 33,20°E)                      |840   |1 250  |1 692  |2 100  |750 (980)       |
|Viakhan (50,95°N, 33,85°E)                      |850   |1 250  |1 692  |2 100  |480 (620)       |
|Zartyi (51,44°N, 34,05°E)                       |790   |1 150  |1 540  |1 900  |520 (660)       |
|Lipovets (Posemye) (51,20°N, 34,15°E)           |740   |1 100  |1 490  |1 850  |680 (850)       |
|Nedryhailiv (50,83°N, 33,88°E)                  |530   |750    |1 062  |1 350  |480 (620)       |
|Igoreve Seltsye (51,35°N, 33,75°E)              |440   |650    |962    |1 250  |420 (540)       |
|Olshana (Lebedyn) (50,58°N, 34,48°E)            |510   |720    |970    |1 200  |440 (560)       |
|Zelenyi Hai (50,80°N, 34,85°E)                  |610   |780    |988    |1 180  |440 (560)       |
|Zarichne (Trostyanets) (50,48°N, 34,96°E)       |480   |680    |924    |1 150  |420 (540)       |
|Myropillya (51,02°N, 35,26°E)                   |510   |680    |924    |1 150  |440 (560)       |
|Vovkivtsi (50,81°N, 33,58°E)                    |620   |820    |992    |1 150  |460 (590)       |
|Bilopillia-Kryha (51,15°N, 34,31°E)             |510   |680    |909    |1 120  |410 (520)       |
|Retezh (Krolevets) (51,55°N, 33,38°E)           |470   |650    |884    |1 100  |480 (640)       |
|Pustoviitivka (50,79°N, 33,58°E)                |490   |640    |817    |980    |410 (520)       |
|Znob-Novhorodske (52,26°N, 33,59°E)             |400   |550    |758    |950    |460 (610)       |
|Kuzemyn (50,14°N, 34,68°E)                      |450   |590    |772    |940    |380 (480)       |
|Mezhyrich-Psel (50,70°N, 34,47°E)               |440   |580    |767    |940    |380 (480)       |
|Korovyntsi (50,81°N, 33,74°E)                   |420   |560    |747    |920    |370 (470)       |
|Chasha (Buryn) (51,20°N, 33,83°E)               |410   |540    |722    |890    |360 (460)       |
|Bytytsia (51,01°N, 34,93°E)                     |1 650 |620    |755    |880    |340 (430)       |
|Velyki Budky (50,88°N, 33,65°E)                 |420   |540    |706    |860    |350 (450)       |
|Nyzy (50,78°N, 34,77°E)                         |380   |520    |692    |850    |350 (460)       |
|Vorozhba (51,17°N, 34,22°E)                     |390   |520    |692    |850    |340 (440)       |
|Obesta (Shalyhyne) (51,57°N, 34,12°E)           |390   |520    |692    |850    |480 (580)       |
|Loknya (Yunakivka) (51,11°N, 35,03°E)           |380   |510    |676    |830    |320 (410)       |
|Syrovatka (Krasnopillia) (50,77°N, 35,26°E)     |370   |490    |656    |810    |310 (400)       |
|Khorol (Lypova) Dolyna (50,56°N, 33,79°E)       |360   |480    |641    |790    |310 (400)       |
|Ivot (Shostka) (51,86°N, 33,48°E)               |350   |480    |636    |780    |390 (490)       |
|Sumka (Stepanivka) (50,94°N, 34,61°E)           |350   |460    |611    |750    |290 (380)       |
|Yampil-Ivot (51,95°N, 33,79°E)                  |340   |450    |601    |740    |420 (530)       |
|Esman (51,77°N, 34,06°E)                        |290   |420    |555    |680    |480 (580)       |
|Znobka (Seredyna)-Buda (52,18°N, 34,04°E)       |310   |410    |550    |680    |380 (480)       |
|Banichi (51,51°N, 33,91°E)                      |270   |390    |510    |620    |380 (460)       |

# Lower Sozh and Dnieper Corridor (24 Settlements)

Table 4 documents the 24 chronicle fortresses and Radimichi-Rus *gorodishcha* in the eastern Gomel and Lower Sozh corridor (BY-HO, 800AD - 1300AD).

Table: Regional Demographic and Archaeological Data Summary (Table 4).

|Settlement (Coords)                         |800AD |1000AD |1100AD |1200AD |1250AD (1300AD) |
|:-------------------------------------------|:-----|:------|:------|:------|:---------------|
|Gomel (Homiy) (52,43°N, 30,98°E)            |2 400 |3 800  |4 424  |5 000  |2 800 (3 400)   |
|Bragin (51,78°N, 30,27°E)                   |1 250 |1 950  |2 496  |3 000  |1 400 (1 750)   |
|Rechitsa (52,36°N, 30,39°E)                 |1 250 |1 800  |2 164  |2 500  |1 500 (1 900)   |
|Chechersk (52,91°N, 30,91°E)                |1 100 |1 650  |1 988  |2 300  |1 300 (1 650)   |
|Loyev (51,94°N, 30,80°E)                    |1 080 |1 600  |1 912  |2 200  |1 150 (1 450)   |
|Khalch (52,57°N, 31,14°E)                   |860   |1 150  |1 306  |1 450  |780 (920)       |
|Streshin (52,73°N, 30,11°E)                 |540   |720    |996    |1 250  |750 (980)       |
|Gorval (52,57°N, 30,20°E)                   |540   |680    |924    |1 150  |680 (890)       |
|Zaspa (52,29°N, 30,48°E)                    |460   |620    |844    |1 050  |560 (720)       |
|Dobrush-Iput (52,41°N, 31,32°E)             |430   |580    |757    |920    |520 (650)       |
|Pridneprovskoe (Zhlobin) (52,89°N, 30,04°E) |420   |560    |742    |910    |520 (650)       |
|Korma-Sozh (53,13°N, 30,80°E)               |410   |540    |706    |860    |490 (620)       |
|Komarin (51,44°N, 30,56°E)                  |380   |520    |692    |850    |440 (560)       |
|Sharpylovka (52,10°N, 30,91°E)              |380   |520    |692    |850    |450 (580)       |
|Nisimkovichi (52,88°N, 31,04°E)             |390   |520    |686    |840    |470 (590)       |
|Svetilovichi-Besed (52,78°N, 31,30°E)       |380   |510    |671    |820    |460 (580)       |
|Tereshkovichi (52,27°N, 30,95°E)            |370   |490    |646    |790    |430 (550)       |
|Kholmichi (52,15°N, 30,63°E)                |350   |480    |636    |780    |420 (540)       |
|Raduga-Sozh (52,64°N, 31,08°E)              |340   |450    |606    |750    |400 (510)       |
|Neglyubka-Besed (52,66°N, 31,53°E)          |350   |460    |611    |750    |420 (540)       |
|Strumen (Khoiniki) (51,89°N, 29,96°E)       |350   |460    |606    |740    |420 (540)       |
|Uvarovichi-Uza (52,60°N, 30,73°E)           |340   |450    |596    |730    |410 (520)       |
|Vedrich (Vasilevichi) (52,25°N, 29,83°E)    |330   |440    |580    |710    |400 (510)       |
|Lipov (Buda)-Koshelevo (52,72°N, 30,57°E)   |320   |430    |570    |700    |390 (500)       |

# References
