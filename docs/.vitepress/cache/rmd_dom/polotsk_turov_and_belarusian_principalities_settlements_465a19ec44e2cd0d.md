---
title: "SETTLEMENT GAZETTEER OF POLOTSK, TUROV AND BELARUSIAN RUS (10000BC - 1300AD)."
subtitle: "Archaeological Sites, Fortified Towns and Urban Population Estimates in North-Western Rus."
date: "8 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/polotsk_turov_and_belarusian_principalities_fig4_urban_archaeology.png"
hero_caption: "Walled Enclosures, Urban Populations and Post-1240 Settlement Continuity in North-Western Rus (1200AD - 1300AD)."
hero_label: "fig:polotsk-turov-settlements-hero"
bibliography: polotsk_turov_and_belarusian_principalities_literature_review.bib
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



# Gazetteer Overview and Summary (172 Sites, 10000BC - 1300AD)

This document accompanies `polotsk_turov_and_belarusian_principalities_settlements.json`, the standardised Stadester settlement gazetteer for Region 4: North-Western Rus (Polotsk, Turov and Belarusian Rus), strictly book-ended at the Mongol Conquests (1238-1241AD) and the immediate post-conquest devolved principalities (1240AD - 1300AD). The gazetteer catalogues 172 distinct pre-Mongol chronicle towns, fortified *gorodishcha* and prehistoric and Iron Age archaeological type-sites across all five sub-regional clusters:

Table: Regional Demographic and Archaeological Data Summary (Table 1).

|Sub-Regional Cluster (atlas_defacto Polity IDs)                          |Gazetteer Sites (N) |Major Capitals (>10 ha) |Secondary & Small Gorodishcha    |Largest Settlement (1200AD / 1300AD)         |
|:------------------------------------------------------------------------|:-------------------|:-----------------------|:--------------------------------|:--------------------------------------------|
|0. Prehistoric, Bronze & Iron Age Type-Sites                             |24                  |1 (Menka)               |23 (Palaeolithic - Early Slavic) |Menka (2,4k in 1000AD)                       |
|1. Polotsk, Vitebsk, Jersika & Koknese (2460, 2762, 2459, 3106)          |34                  |8                       |26                               |Polotsk (25,0k / 23,0k)                      |
|2. Minsk, Drutsk & Borisov (2761, 2760, 2759)                            |24                  |6                       |18                               |Minsk (9,0k / 8,8k)                          |
|3. Turov, Pinsk, Kletsk, Dubrovytsia & Berestye (2855, 3051, 2920, 3050) |38                  |14                      |24                               |Turov (12,0k / 7,5k)                         |
|4. Black Ruthenia: Grodno, Novogrudok & Volkovysk (2826, 3183, 3184)     |28                  |4                       |24                               |Grodno (8,5k) / Novogrudok (9,0k in 1300AD)  |
|5. Mstislavl, Western Smolensk & Upper Sozh (3079)                       |24                  |6                       |18                               |Gomel (6,5k / 4,0k), Mstislavl (5,0k / 4,5k) |
|Total Gazetteer (Region 4, 10000BC - 1300AD)                             |172                 |39                      |133                              |Polotsk (25,0k at 1200AD; 23,0k at 1300AD)   |

All population entries in `polotsk_turov_and_belarusian_principalities_settlements.json` use strictly chronological benchmark keys within -10000 to 1300 ("-10000", "-5000", "-2500", "-1200", "-500", "200", "500", "800", "900", "1000", "1100", "1150", "1200", "1240", "1250", "1300") and store strictly positive integers (> 0).

# Estimation Methodology by Historical Horizon (10000BC - 1300AD)

## Prehistoric, Neolithic, Bronze Age and Iron Age Sites (10000BC - 500AD)

For the 24 prehistoric and Iron Age type-sites (type: "archaeological_site"), site populations are derived from excavated dwelling counts, cultural layer area (m² or ha) and palaeodemographic household multipliers (5 - 7 persons per hearth or pit-dwelling) established by M. M. Charniauski, U. F. Isaenko, A. G. Mitrofanov and L. D. Pobol [@charniauski1997arkhealogiya; @mitrofanov1978zhelezny; @pobol1983arkheologicheskie; @isaenko1999arkhealogiya]:

- **Final Palaeolithic and Mesolithic Camps** (10000BC - 5000BC): *Yurevichi* (51,9442°N, 29,5314°E) on the Pripyat, *Berdizh* (52,8331°N, 30,9325°E) and *Grensk* (52,9711°N, 30,8922°E) on the Sozh, *Korma*, *Ankovichi* and *Borok* represent reindeer- and mammoth-hunter base camps of 40 - 65 residents at 10000BC, expanding to 70 - 110 inhabitants in Mesolithic lacustrine settlements at 5000BC.
- **Neolithic Pile Dwellings and Flint-Mining Settlements** (5000BC - 2500BC): The waterlogged pile-dwelling cluster of Asavets (*Krivina peat bog*, 54,9614°N, 29,4231°E), Kryvina 1 and the Krasnoselsky flint-mining complex (53,2642°N, 24,4319°E) supported semi-permanent communities of 160 - 340 inhabitants across 5000BC - 2500BC.
- **Bronze Age and Iron Age Hillforts** (1200BC - 500AD): Large lowland enclosures of the Milograd and Zarubintsy cultures in southern Belarus (*Milograd* 480 at 500BC, *Chaplin* 560 at 200AD, *Goroshkov* 490 at 200AD, *Mokhov* 450 at 500AD) outsized the smaller fortified promontory hillforts of the Brushed Pottery and Dnieper-Dvina cultures (*Malyshki* 350 at 200AD, *Zazony* 320 at 200AD, *Bancerovshchina* 490 at 500AD).
- **The Menka Complex** (menka_gorodishche, 800AD - 1300AD): Located at the confluence of the Menka and Dunai streams 16 km west of modern Minsk, the *Menka* complex (1,5 ha ramparted hillfort and 40,0 ha open craft settlement excavated by E. M. Zagorulsky) served as the initial tribal and early Rurikid centre of *Mensk* (850 in 800AD, 1 600 in 900AD, peaking at 2 400 in 1000AD) before the 1067AD Battle on the Nemiga River and the transfer of the princely seat to the Svisloch-Nemiga *Zamchishche* (minsk), declining thereafter to an unfortified rural *selyshche* (950 in 1100AD; 500 in 1200AD; 420 in 1300AD) [@zagorulsky1982vozniknovenie].

## Pre-Mongol Kievan Rus and Post-1240 Principality Centres (800AD - 1300AD)

For the 148 fortified medieval towns and *gorodishcha* active between 800AD and 1300AD, urban populations are calibrated from archaeologically surveyed fortified areas (*Detinets* (*Zamchishche*) plus *Okolny Gorod*) and unfortified craft suburbs (*Posady*), applying the homestead density models of G. V. Shtykhov (1975, 1992), S. V. Tarasov (1998), P. F. Lysenko (1974, 1985, 2004), E. M. Zagorulsky (1982, 2001), F. D. Gurevich (1981), Ya. G. Zverugo (1989) and A. V. Kuza (1989, 1996) (110 - 150 persons/ha inside densely built timber-street *detinets* and *okolny gorod* quarters and 60 - 90 persons/ha across outer *posady*) [@shtykhov1975drevniy; @shtykhov1992goroda; @tarasov1998polotsk; @lysenko1974goroda; @lysenko1985berestye; @kuza1989malye; @kuza1996drevnerusskie]:

Table: Regional Demographic and Archaeological Data Summary (Table 2).

|Settlement (snake_case Key)        |Principality (Polity ID) |Coordinates (Lat, Lon) |Area (1200AD) |1000AD |1100AD |1200AD |1250AD |1300AD |
|:----------------------------------|:------------------------|:----------------------|:-------------|:------|:------|:------|:------|:------|
|polotsk (Polotsk)                  |Polotsk (2460)           |55,4879, 28,7856       |190,0 ha      |10 000 |18 000 |25 000 |22 000 |23 000 |
|turov (Turov)                      |Turov (2855)             |52,0692, 27,7358       |45,0 ha       |6 500  |9 200  |12 000 |7 000  |7 500  |
|vitebsk (Vitebsk)                  |Vitebsk (2762)           |55,1904, 30,2049       |50,0 ha       |4 200  |6 800  |9 500  |8 800  |9 500  |
|minsk (Minsk (Mensk))              |Minsk (2761)             |53,9006, 27,5590       |38,0 ha       |1 500  |5 200  |9 000  |8 200  |8 800  |
|grodno (Grodno (Goroden))          |Grodno (2826)            |53,6884, 23,8258       |35,0 ha       |2 800  |5 500  |8 500  |8 000  |8 500  |
|pinsk (Pinsk (Pinesk))             |Pinsk (3051)             |52,1153, 26,1031       |38,0 ha       |2 500  |5 000  |8 000  |6 500  |7 200  |
|brest_berestye (Berestye)          |Berestye Land            |52,0975, 23,6877       |34,0 ha       |2 800  |5 000  |7 500  |5 200  |6 000  |
|novogrudok (Novogrudok)            |Novogrudok (3183)        |53,5942, 25,8192       |32,0 ha       |2 200  |4 800  |7 500  |8 200  |9 000  |
|gomel (Gomel (Homiy))              |Lower Sozh               |52,4345, 30,9754       |30,0 ha       |3 200  |4 800  |6 500  |3 500  |4 000  |
|mstislavl (Mstislavl)              |Mstislavl (3079)         |54,0203, 31,7258       |26,0 ha       |750    |1 800  |5 000  |4 000  |4 500  |
|slutsk (Slutsk (Sluchesk))         |Turov & Slutsk           |53,0275, 27,5594       |25,0 ha       |1 800  |3 200  |5 000  |4 300  |4 800  |
|volkovysk (Volkovysk)              |Volkovysk (3184)         |53,1561, 24,4514       |24,0 ha       |1 800  |3 300  |5 000  |4 700  |5 100  |
|drutsk (Drutsk)                    |Drutsk (2760)            |54,3414, 29,7547       |35,0 ha       |1 800  |3 100  |4 500  |4 100  |4 300  |
|orsha (Orsha (Rsha))               |Vitebsk (2762)           |54,5081, 30,4172       |22,0 ha       |1 500  |2 700  |4 000  |3 600  |3 900  |
|zaslavl (Zaslavl (Izyaslavl))      |Polotsk & Minsk          |54,0003, 27,2917       |20,0 ha       |2 200  |3 100  |4 000  |3 600  |3 800  |
|borisov (Borisov)                  |Borisov (2759)           |54,2279, 28,5050       |18,0 ha       |-      |1 800  |3 500  |3 200  |3 400  |
|kletsk (Kletsk)                    |Kletsk (2920)            |53,0636, 26,6322       |18,0 ha       |1 200  |2 200  |3 500  |3 000  |3 300  |
|dubrovytsia (Dubrovytsia)          |Dubrovytsia (3050)       |51,5744, 26,5650       |18,0 ha       |1 100  |2 200  |3 500  |2 200  |2 500  |
|mozyr (Mozyr)                      |Turov (2855)             |52,0494, 29,2456       |16,5 ha       |1 200  |2 200  |3 500  |2 100  |2 500  |
|lukoml (Lukoml)                    |Polotsk (2460)           |54,7078, 29,1497       |15,0 ha       |1 500  |2 500  |3 500  |3 100  |3 300  |
|logoisk (Logoisk (Logozhsk))       |Polotsk (2460)           |54,2006, 27,8489       |15,0 ha       |1 300  |2 400  |3 500  |3 100  |3 300  |
|slonim (Slonim (Uslonim))          |Volkovysk (3184)         |53,0869, 25,3164       |15,0 ha       |1 200  |2 300  |3 500  |3 300  |3 600  |
|braslav (Braslav (Bryachislavl))   |Polotsk (2460)           |55,6419, 27,0419       |13,5 ha       |1 100  |2 000  |3 000  |2 700  |2 900  |
|david_gorodok (David-Gorodok)      |Turov & Pinsk            |52,0558, 27,2133       |14,0 ha       |850    |1 800  |3 000  |2 200  |2 500  |
|rogachev (Rogachev)                |Turov (2855)             |53,0833, 30,0500       |14,0 ha       |1 000  |1 900  |3 000  |2 000  |2 300  |
|krichev (Krichev (Krechut))        |Smolensk & Mstislavl     |53,7131, 31,7139       |13,5 ha       |950    |1 900  |3 000  |2 200  |2 500  |
|usvyaty (Usvyaty)                  |Polotsk & Vitebsk        |55,7469, 30,7539       |13,0 ha       |1 000  |1 900  |2 800  |2 500  |2 600  |
|kopys (Kopys)                      |Vitebsk & Orsha          |54,3239, 30,2928       |12,5 ha       |900    |1 800  |2 800  |2 500  |2 600  |
|bragin (Bragin)                    |Turov (2855)             |51,7878, 30,2678       |12,5 ha       |900    |1 800  |2 800  |1 500  |1 800  |
|slavgorod_propoisk (Propoisk)      |Smolensk & Mstislavl     |53,4439, 31,0014       |12,5 ha       |950    |1 800  |2 800  |2 000  |2 300  |
|jersika (Jersika (Gerzike))        |Jersika (2459)           |56,2528, 26,1964       |13,5 ha       |1 200  |1 900  |2 500  |1 200  |1 100  |
|svisloch_berezina (Svisloch)       |Minsk (2761)             |53,4289, 28,9781       |12,0 ha       |900    |1 600  |2 500  |2 100  |2 300  |
|kopyl (Kopyl)                      |Kletsk & Slutsk          |53,1500, 27,0917       |11,5 ha       |850    |1 600  |2 500  |2 200  |2 400  |
|rechitsa (Rechitsa)                |Turov & Chernigov        |52,3617, 30,3917       |11,0 ha       |850    |1 600  |2 500  |1 500  |1 800  |
|stepan_horyn (Stepan)              |Dubrovytsia (3050)       |51,1286, 26,3042       |10,0 ha       |800    |1 450  |2 200  |1 500  |1 750  |
|loev_gora (Loev Gorodishche)       |Turov & Chernigov        |51,9458, 30,7953       |9,5 ha        |980    |1 500  |2 100  |1 100  |1 300  |
|koknese (Koknese (Kukenois))       |Koknese (3106)           |56,6406, 25,4194       |10,0 ha       |950    |1 500  |2 000  |1 200  |1 300  |
|kobrin (Kobrin)                    |Berestye Land            |52,2139, 24,3564       |9,5 ha        |750    |1 350  |2 000  |1 650  |1 950  |
|chechersk (Chechersk)              |Sozh Corridor            |52,9167, 30,9167       |9,5 ha        |720    |1 350  |2 000  |1 300  |1 550  |
|mogilev_zmeevka (Mogilev)          |Drutsk & Smolensk        |53,9000, 30,3333       |9,0 ha        |850    |1 350  |1 950  |1 650  |2 100  |
|kamenets (Kamenets (Belaya Vezha)) |Berestye & Volhynia      |52,4008, 23,8194       |12,0 ha       |-      |650    |1 200  |1 800  |3 000  |

# References
