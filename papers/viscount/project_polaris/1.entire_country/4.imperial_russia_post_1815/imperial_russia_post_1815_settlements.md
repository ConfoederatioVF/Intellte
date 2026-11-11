---
title: "GAZETTEER OF LATE IMPERIAL RUSSIAN, POLISH, BALTIC, FINNISH, AND HABSBURG UKRAINIAN SETTLEMENTS (1815AD - 1917AD)."
subtitle: "Supplementary Tabular Compilation of Settlement Population Histories (1815AD - 1917AD)."
date: "11 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: imperial_russia_post_1815_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/imperial_russia_post_1815_regional_map.png"
hero_caption: "Governorates, oblasts, crownlands, railways, and major urban centres of Late Imperial Russia and Austro-Hungarian Ukraine (1815AD - 1917AD)."
hero_label: "fig:hero-map"
output:
  pdf_document:
    latex_engine: xelatex
    keep_tex: false
    template: ../../_shared/template/template.tex
    citation_package: default
  md_document:
    variant: gfm
---



```{=latex}
\emergencystretch=1.5em
```



# Overview and 48-Region Gazetteer Methodology

This supplementary gazetteer compiles 265 individual urban, industrial, fortress, and administrative settlements across all 48 period-authentic Governorates (*Guberniyas*), Oblasts, Finnish Provinces, Vistula Provinces, and Habsburg Ukrainian Crownlands of Late Imperial Russia and its western borderlands (excluding Central Asia and the Southern Caucasus) from the Congress of Vienna in 1815AD to the revolutions of 1917AD. Every settlement record is catalogued with full municipal metadata (name, other_names, coords, country, key, and population), keyed as Name-Country according to contemporary sovereign country labels (Russia, Ukraine, Belarus, Poland, Lithuania, Latvia, Estonia, Finland, and Moldova) with georeferenced decimal coordinates and positive integer population series across up to six benchmark dates (1815AD, 1833AD, 1858AD, 1897AD, 1914AD, and 1917AD; tables below display 1815AD, 1858AD, 1897AD, 1914AD, and 1917AD for concise portrait readability while full 1833AD returns remain in the JSON archive).

For each settlement, headcounts are anchored in primary fiscal, statistical, and census enumerations: the Seventh (1815-1816AD), Eighth (1833-1835AD), and Tenth (1857-1858AD) Imperial Soul Revisions and Ministry of Internal Affairs town tables [@Troinitsky1861; @Kabuzan1971; @Rashin1956], the First All-Russian General Census of 28 January 1897AD across all 89 guberniya volumes and the Central Statistical Committee synthesis of settlements exceeding 500 inhabitants [@Troinitsky1905; @Troinitsky1905Goroda], the 1 January 1914AD Central Statistical Committee and Warsaw Statistical Committee pre-war municipal yearbooks [@TsSK1915; @WarsawStat1914], the Finnish decennial statistical censuses of Tilastollinen paatoimisto [@FinlandStat1870_1915], the Austro-Hungarian and Hungarian decennial censuses of 1869-1910AD for Galicia, Bukovina, and Subcarpathia [@OsterreichischeStatistik1912; @MagyarStatisztika1912], and the 1916-1917AD All-Russian Urban and Agricultural Censuses paired with Tatiana Committee wartime refugee records [@AgCensus1917; @Gatrell1999]. In strict compliance with the population_Stadester specification, only inhabited benchmark dates (population > 0) are stored in the JSON dictionary; industrial, coal, rail, and Arctic boomtowns founded after 1815AD (such as Yuzovka in 1869AD, Novonikolaevsk in 1893AD, Bodaibo in 1864AD, Belotsarsk in 1914AD, and Romanov-on-Murman in 1916AD) display "-" prior to their establishment.

<div class="figure" style="text-align: center">
<img src="figures/imperial_russia_post_1815_regional_map.png" alt="plot of chunk fig1-md-only"  />
<p class="caption">plot of chunk fig1-md-only</p>
</div>

# Warsaw, Plock & Lomza Governorates

Table \ref{tab:reg1-sites} lists the 6 catalogued settlements in Region 1 (1. Warsaw, Plock & Lomza Governorates (Congress Poland Capital Core: Warsaw 884k in 1914AD)), where total regional population grew from 1 020k in 1815AD to 3 536k at the 1897AD Census and 5 050k in 1914AD (+395,1%), shifting to 4 420k in 1917AD (-12,5% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

Table: Urban settlements and benchmark population series in Warsaw, Plock & Lomza Governorates (1815AD - 1917AD).

|Settlement |Historical / Local Names    |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------|:---------------------|:------|:------|:------|:------|:------|
|Warsaw     |Warszawa; Varshava          |52,23, 21,01 (Poland) |81k    |162,8k |683,7k |884,5k |758k   |
|Plock      |Plotsk; Plock Governorate   |52,55, 19,71 (Poland) |6,2k   |13,2k  |27k    |35,2k  |28,5k  |
|Lomza      |Lomzha; Lomza Governorate   |53,18, 22,06 (Poland) |3,1k   |5,9k   |26,1k  |29,8k  |22,1k  |
|Wloclawek  |Vlotslavsk; Leslau          |52,65, 19,07 (Poland) |3,3k   |6,8k   |22,9k  |37,4k  |32,5k  |
|Zyrardow   |Zhirardov; Ruda Guzowska    |52,05, 20,45 (Poland) |-      |3,8k   |24,5k  |38,6k  |26,4k  |
|Ostroleka  |Ostrolenka; Ostroleka Lomza |53,09, 21,58 (Poland) |2,2k   |3,9k   |12,9k  |15,2k  |9,8k   |

# Piotrkow & Kalisz Governorates

Table \ref{tab:reg2-sites} lists the 7 catalogued settlements in Region 2 (2. Piotrkow & Kalisz Governorates (Lodz Textile Metropolis & Dabrowa Coal-Steel Basin)), where total regional population grew from 720k in 1815AD to 2 245k at the 1897AD Census and 3 320k in 1914AD (+361,1%), shifting to 2 950k in 1917AD (-11,1% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

Table: Urban settlements and benchmark population series in Piotrkow & Kalisz Governorates (1815AD - 1917AD).

|Settlement  |Historical / Local Names          |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------|:---------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Lodz        |Lodz Piotrkow; Polish Manchester  |51,76, 19,46 (Poland) |800    |29,5k  |314k   |477,9k |342k   |
|Sosnowiec   |Sosnovitsy; Dabrowa Basin         |50,29, 19,10 (Poland) |-      |2,2k   |61k    |118,5k |94k    |
|Czestochowa |Chenstokhov; Czestochowa Piotrkow |50,81, 19,12 (Poland) |4,5k   |9,2k   |45k    |92,9k  |78,5k  |
|Kalisz      |Kalish; Kalisz Governorate        |51,77, 18,09 (Poland) |7,8k   |12,6k  |24,4k  |65,4k  |29k    |
|Piotrkow    |Piotrkow Trybunalski; Petrokov    |51,41, 19,70 (Poland) |4,2k   |10,9k  |31,2k  |44,8k  |39,2k  |
|Bendzin     |Bedzin; Bendin Dabrowa            |50,32, 19,13 (Poland) |2,1k   |4,4k   |23,8k  |54,8k  |43,5k  |
|Pabianice   |Pabianitsy; Pabianice Lodz        |51,66, 19,35 (Poland) |900    |4,9k   |26,8k  |48,3k  |36,8k  |

# Lublin & Siedlce Governorates

Table \ref{tab:reg3-sites} lists the 5 catalogued settlements in Region 3 (3. Lublin & Siedlce Governorates (Eastern Vistula & 1912AD Kholm Governorate Split)), where total regional population grew from 780k in 1815AD to 1 933k at the 1897AD Census and 2 680k in 1914AD (+243,6%), shifting to 2 080k in 1917AD (-22,4% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

Table: Urban settlements and benchmark population series in Lublin & Siedlce Governorates (1815AD - 1917AD).

|Settlement     |Historical / Local Names      |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:--------------|:-----------------------------|:---------------------|:------|:------|:------|:------|:------|
|Lublin         |Lyublin; Lublin Governorate   |51,25, 22,57 (Poland) |10,2k  |18,5k  |50,4k  |72,2k  |64,5k  |
|Siedlce        |Sedlets; Siedlce Governorate  |52,17, 22,29 (Poland) |3,1k   |7,8k   |26,2k  |34k    |24,8k  |
|Kholm          |Chelm; Kholm 1912 Governorate |51,14, 23,47 (Poland) |2,6k   |4,1k   |18,5k  |24,6k  |16,2k  |
|Zamosc         |Zamostye; Zamosc Fortress     |50,72, 23,25 (Poland) |4,2k   |5,7k   |14,7k  |18,9k  |14,8k  |
|Biala Podlaska |Bela; Biala Siedlce           |52,03, 23,12 (Poland) |2,9k   |5,1k   |13,1k  |16,8k  |11,2k  |

# Radom, Kielce & Suwalki Governorates

Table \ref{tab:reg4-sites} lists the 5 catalogued settlements in Region 4 (4. Radom, Kielce & Suwalki Governorates (Old Polish Mining Belt & Lithuanian Northern Suwalki)), where total regional population grew from 780k in 1815AD to 2 160k at the 1897AD Census and 2 600k in 1914AD (+233,3%), shifting to 2 180k in 1917AD (-16,2% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

Table: Urban settlements and benchmark population series in Radom, Kielce & Suwalki Governorates (1815AD - 1917AD).

|Settlement |Historical / Local Names            |Coords & Country         |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-----------------------------------|:------------------------|:------|:------|:------|:------|:------|
|Radom      |Radom Governorate; Radom Sandomierz |51,40, 21,15 (Poland)    |3,2k   |9,8k   |29,9k  |49,2k  |41,5k  |
|Kielce     |Keltse; Keltsy                      |50,87, 20,63 (Poland)    |3,1k   |5,2k   |23,2k  |37,6k  |33,2k  |
|Suwalki    |Suvalki; Suwalki Governorate        |54,11, 22,93 (Poland)    |2,1k   |11,4k  |22,6k  |27,1k  |16,8k  |
|Ostrowiec  |Ostrowiec Swietokrzyski; Ostrovets  |50,93, 21,39 (Poland)    |1,6k   |3,9k   |9,8k   |18,4k  |15,2k  |
|Mariampol  |Marijampole; Mariampol Suwalki      |54,56, 23,35 (Lithuania) |1,4k   |3,6k   |6,7k   |8,6k   |5,9k   |

# Estland Governorate

Table \ref{tab:reg5-sites} lists the 4 catalogued settlements in Region 5 (5. Estland Governorate (Reval/Tallinn; 1816AD Emancipation & Early Demographic Transition)), where total regional population grew from 232k in 1815AD to 413k at the 1897AD Census and 505k in 1914AD (+117,7%), shifting to 515k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

Table: Urban settlements and benchmark population series in Estland Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:------------------------|:----------------------|:------|:------|:------|:------|:------|
|Reval      |Tallinn; Revel           |59,44, 24,75 (Estonia) |12,9k  |21,6k  |64,6k  |137,6k |159k   |
|Narva      |Kreenholm; Rugodiv       |59,38, 28,18 (Estonia) |3,8k   |6,2k   |16,6k  |27,4k  |29,2k  |
|Wesenberg  |Rakvere; Vezenberg       |59,35, 26,36 (Estonia) |900    |2,2k   |5,9k   |7,4k   |7,6k   |
|Hapsal     |Haapsalu; Gapsal         |58,94, 23,54 (Estonia) |1,1k   |2,1k   |3,2k   |4,4k   |4,2k   |

# Livland Governorate

Table \ref{tab:reg6-sites} lists the 6 catalogued settlements in Region 6 (6. Livland Governorate (Riga Port-Industrial Metropolis: 517k in 1914AD & Dorpat University)), where total regional population grew from 615k in 1815AD to 1 299k at the 1897AD Census and 1 565k in 1914AD (+154,5%), shifting to 1 420k in 1917AD (-9,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

Table: Urban settlements and benchmark population series in Livland Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names    |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------|:----------------------|:------|:------|:------|:------|:------|
|Riga       |Riia; Livland Capital       |56,95, 24,11 (Latvia)  |36k    |72,1k  |282,2k |517,5k |210k   |
|Dorpat     |Tartu; Yuryev               |58,38, 26,73 (Estonia) |7,2k   |14,3k  |42,3k  |48,6k  |46,2k  |
|Pernau     |Parnu; Pernov               |58,39, 24,50 (Estonia) |3,4k   |6,6k   |12,9k  |19,2k  |16,5k  |
|Walk       |Valka; Valga                |57,78, 26,05 (Latvia)  |950    |2,6k   |10,9k  |18,5k  |16,8k  |
|Wenden     |Cesis; Venden               |57,31, 25,27 (Latvia)  |1,3k   |2,8k   |6,4k   |8,9k   |7,8k   |
|Arensburg  |Kuressaare; Arensburg Oesel |58,25, 22,49 (Estonia) |1,8k   |3,2k   |4,6k   |5,4k   |4,1k   |

# Courland Governorate

Table \ref{tab:reg7-sites} lists the 5 catalogued settlements in Region 7 (7. Courland Governorate (Mitau/Jelgava & Libau/Liepaja Transatlantic Emigration Port)), where total regional population grew from 418k in 1815AD to 674k at the 1897AD Census and 800k in 1914AD (+91,4%), shifting to 380k in 1917AD (-52,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

Table: Urban settlements and benchmark population series in Courland Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names    |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------|:---------------------|:------|:------|:------|:------|:------|
|Libau      |Liepaja; Libava             |56,50, 21,01 (Latvia) |5,6k   |10,4k  |64,5k  |90,7k  |43,2k  |
|Mitau      |Jelgava; Mitava             |56,65, 23,72 (Latvia) |12,5k  |21,8k  |35,1k  |45,7k  |21,5k  |
|Windau     |Ventspils; Vindava          |57,39, 21,56 (Latvia) |1,6k   |3,5k   |7,1k   |28,8k  |12,4k  |
|Goldingen  |Kuldiga; Goldingen Courland |56,97, 21,97 (Latvia) |2,2k   |4,9k   |9,7k   |12,1k  |6,8k   |
|Jakobstadt |Jekabpils; Yakobshtadt      |56,50, 25,88 (Latvia) |1,9k   |4,1k   |5,8k   |7,4k   |3,2k   |

# Southern Finland Governorates: Nyland

Table \ref{tab:reg8-sites} lists the 6 catalogued settlements in Region 8 (8. Southern Finland Governorates: Nyland (Helsingfors), Abo-Bjorneborg, Tavastehus & Vyborg), where total regional population grew from 590k in 1815AD to 1 425k at the 1897AD Census and 1 840k in 1914AD (+211,9%), shifting to 1 890k in 1917AD (+2,7% across 1914-1917AD) [@FinlandStat1870_1915; @Pitkanen1993; @Luostarinen2026FinlandMortality].

Table: Urban settlements and benchmark population series in Southern Finland Governorates: Nyland (1815AD - 1917AD).

|Settlement  |Historical / Local Names      |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------|:-----------------------------|:----------------------|:------|:------|:------|:------|:------|
|Helsingfors |Helsinki; Gelsingfors         |60,17, 24,94 (Finland) |4,8k   |22,2k  |84,5k  |170,5k |187,5k |
|Abo         |Turku; Abo-Bjorneborg         |60,45, 22,27 (Finland) |11,8k  |16,8k  |36,8k  |54,6k  |56,2k  |
|Tammerfors  |Tampere; Tavastehus Mill Hub  |61,50, 23,76 (Finland) |850    |4,9k   |30,2k  |45,2k  |46,8k  |
|Viipuri     |Vyborg; Viborg                |60,71, 28,75 (Russia)  |3,3k   |5,5k   |23,5k  |29,3k  |30,5k  |
|Bjorneborg  |Pori; Bjorneborg Port         |61,49, 21,80 (Finland) |3,1k   |7,1k   |13,9k  |17,6k  |18,1k  |
|Kotka       |Kotka Timber Port; Svensksund |60,47, 26,95 (Finland) |-      |-      |5,8k   |11,2k  |11,6k  |

# Interior & Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel & Uleaborg

Table \ref{tab:reg9-sites} lists the 5 catalogued settlements in Region 9 (9. Interior & Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel & Uleaborg (1866-68AD Famine)), where total regional population grew from 520k in 1815AD to 1 130k at the 1897AD Census and 1 400k in 1914AD (+169,2%), shifting to 1 430k in 1917AD (+2,1% across 1914-1917AD) [@FinlandStat1870_1915; @Pitkanen1993; @Luostarinen2026FinlandMortality].

Table: Urban settlements and benchmark population series in Interior & Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel & Uleaborg (1815AD - 1917AD).

|Settlement   |Historical / Local Names        |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------|:-------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Vasa         |Vaasa; Nikolaistad              |63,10, 21,62 (Finland) |2,8k   |3,9k   |13,8k  |24,2k  |24,8k  |
|Uleaborg     |Oulu; Uleaborg Governorate      |65,01, 25,47 (Finland) |3,7k   |6,8k   |14,9k  |21,5k  |22,1k  |
|Kuopio       |Kuopio Savo; Kuopio Governorate |62,89, 27,68 (Finland) |1,2k   |4,1k   |10,2k  |17,5k  |18,1k  |
|Sankt-Michel |Mikkeli; Sankt-Mikhel           |61,69, 27,27 (Finland) |-      |950    |3,4k   |4,7k   |4,9k   |
|Gamlakarleby |Kokkola; Gamla-Karleby          |63,84, 23,13 (Finland) |1,8k   |2,3k   |2,6k   |4,1k   |4,3k   |

# Kovno Governorate

Table \ref{tab:reg10-sites} lists the 5 catalogued settlements in Region 10 (10. Kovno Governorate (Ethnic Lithuania / Samogitia; 1843AD Creation, 1863AD Rising & Emigration)), where total regional population grew from 660k in 1815AD to 1 545k at the 1897AD Census and 1 840k in 1914AD (+178,8%), shifting to 1 320k in 1917AD (-28,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

Table: Urban settlements and benchmark population series in Kovno Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names  |Coords & Country         |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-------------------------|:------------------------|:------|:------|:------|:------|:------|
|Kovno      |Kaunas; Kovna             |54,90, 23,90 (Lithuania) |5,2k   |22,5k  |70,9k  |91,4k  |42k    |
|Shavli     |Siauliai; Szawle          |55,93, 23,31 (Lithuania) |2,2k   |6,1k   |16,1k  |23,5k  |11,2k  |
|Ponevezh   |Panevezys; Poniewiez      |55,73, 24,36 (Lithuania) |1,8k   |5,9k   |13k    |17,8k  |11,8k  |
|Telshi     |Telsiai; Telsze Samogitia |55,98, 22,25 (Lithuania) |1,5k   |3,8k   |6,2k   |8,1k   |5,8k   |
|Vilkomir   |Ukmerge; Wilkomierz       |55,25, 24,76 (Lithuania) |3,1k   |7,3k   |13,5k  |16,8k  |10,6k  |

# Vilna & Grodno Governorates

Table \ref{tab:reg11-sites} lists the 6 catalogued settlements in Region 11 (11. Vilna & Grodno Governorates (Vilnius, Bialystok Textile Hub & Pale Urban Shtetls)), where total regional population grew from 1 145k in 1815AD to 3 195k at the 1897AD Census and 3 940k in 1914AD (+244,1%), shifting to 2 880k in 1917AD (-26,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

Table: Urban settlements and benchmark population series in Vilna & Grodno Governorates (1815AD - 1917AD).

|Settlement    |Historical / Local Names       |Coords & Country         |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------|:------------------------------|:------------------------|:------|:------|:------|:------|:------|
|Vilna         |Vilnius; Wilno                 |54,69, 25,28 (Lithuania) |32k    |58,2k  |154,5k |204,3k |138,9k |
|Bialystok     |Belostok; Bialystok Grodno Gub |53,13, 23,17 (Poland)    |6,2k   |16,2k  |66k    |91,5k  |58k    |
|Grodno        |Hrodna; Gardinas               |53,67, 23,81 (Belarus)   |7,2k   |19,2k  |46,9k  |61,6k  |34,8k  |
|Brest-Litovsk |Brest; Brisk                   |52,10, 23,73 (Belarus)   |6,4k   |19,3k  |46,6k  |57,4k  |16,5k  |
|Slonim        |Slonim Grodno; Slonim Pale     |53,09, 25,32 (Belarus)   |3,8k   |9,8k   |15,9k  |21,2k  |13,4k  |
|Lida          |Lida Vilna Gub; Lyda           |53,89, 25,30 (Belarus)   |1,8k   |4,4k   |9,3k   |14,8k  |11,2k  |

# Minsk Governorate & Pripyat Polesia

Table \ref{tab:reg12-sites} lists the 6 catalogued settlements in Region 12 (12. Minsk Governorate & Pripyat Polesia (Central Belarus / Pale of Settlement)), where total regional population grew from 920k in 1815AD to 2 148k at the 1897AD Census and 3 040k in 1914AD (+230,4%), shifting to 2 890k in 1917AD (-4,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

Table: Urban settlements and benchmark population series in Minsk Governorate & Pripyat Polesia (1815AD - 1917AD).

|Settlement  |Historical / Local Names          |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------|:---------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Minsk       |Mensk; Miensk                     |53,90, 27,56 (Belarus) |13,2k  |26,7k  |90,9k  |117,6k |134k   |
|Bobruisk    |Babruysk; Bobrujsk Fortress       |53,14, 29,22 (Belarus) |5,4k   |19,5k  |34,3k  |44,2k  |46,5k  |
|Pinsk       |Pinsk Polesia; Pinska             |52,11, 26,10 (Belarus) |5,8k   |12,9k  |28,4k  |38,6k  |21,5k  |
|Baranovichi |Baranavichy; Baranowicze Junction |53,13, 26,01 (Belarus) |-      |-      |20,7k  |30,5k  |18,4k  |
|Borisov     |Barysaw; Borisow                  |54,22, 28,51 (Belarus) |3,9k   |7,1k   |15,1k  |21,5k  |23,2k  |
|Mozyr       |Mazyr; Mozyr Pripyat              |52,05, 29,25 (Belarus) |2,8k   |5,8k   |8,1k   |12,4k  |12,8k  |

# Vitebsk & Mogilev Governorates

Table \ref{tab:reg13-sites} lists the 6 catalogued settlements in Region 13 (13. Vitebsk & Mogilev Governorates (Upper Dvina-Dnieper & Latgalian Uezds)), where total regional population grew from 1 245k in 1815AD to 3 176k at the 1897AD Census and 4 020k in 1914AD (+222,9%), shifting to 3 860k in 1917AD (-4,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

Table: Urban settlements and benchmark population series in Vitebsk & Mogilev Governorates (1815AD - 1917AD).

|Settlement |Historical / Local Names  |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-------------------------|:----------------------|:------|:------|:------|:------|:------|
|Dvinsk     |Daugavpils; Dinaburg      |55,87, 26,54 (Latvia)  |4,2k   |25,7k  |69,7k  |112,8k |68,5k  |
|Vitebsk    |Vitsebsk; Witebsk         |55,19, 30,20 (Belarus) |14,5k  |29,8k  |65,9k  |108,9k |112k   |
|Mogilev    |Mahilyow; Mogilev Stavka  |53,90, 30,33 (Belarus) |16,8k  |31,2k  |43,1k  |69,7k  |76,5k  |
|Gomel      |Homyel; Homel Mogilev Gub |52,43, 30,98 (Belarus) |5,8k   |15,4k  |36,8k  |104,5k |106,8k |
|Polotsk    |Polatsk; Polock           |55,49, 28,79 (Belarus) |7,2k   |12,2k  |20,3k  |31,1k  |32,4k  |
|Rezhitsa   |Rezekne; Rositten Latgale |56,51, 27,33 (Latvia)  |1,6k   |5,4k   |10,8k  |21,8k  |16,2k  |

# Austro-Hungarian Eastern Galicia

Table \ref{tab:reg14-sites} lists the 6 catalogued settlements in Region 14 (14. Austro-Hungarian Eastern Galicia (Lemberg/Lviv, Boryslav Oil Basin & Overseas Emigration)), where total regional population grew from 2 580k in 1815AD to 4 420k at the 1897AD Census and 5 020k in 1914AD (+94,6%), shifting to 4 450k in 1917AD (-11,4% across 1914-1917AD) [@OsterreichischeStatistik1912; @MagyarStatisztika1912; @Himka1988; @Gatrell1999].

Table: Urban settlements and benchmark population series in Austro-Hungarian Eastern Galicia (1815AD - 1917AD).

|Settlement |Historical / Local Names       |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Lemberg    |Lviv; Lwow                     |49,84, 24,03 (Ukraine) |44,5k  |70,4k  |152k   |212k   |178k   |
|Tarnopol   |Ternopil; Tarnopol Galicia     |49,55, 25,59 (Ukraine) |9,8k   |17,8k  |29,6k  |35,2k  |26,5k  |
|Stanislau  |Ivano-Frankivsk; Stanislawow   |48,92, 24,71 (Ukraine) |7,2k   |13,4k  |29,2k  |36,8k  |28,4k  |
|Drohobych  |Drogobych; Drohobycz           |49,35, 23,51 (Ukraine) |7,6k   |14,1k  |19,1k  |36,5k  |31,2k  |
|Boryslav   |Boryslaw; Tustanowice Oilfield |49,29, 23,42 (Ukraine) |-      |1,8k   |12,2k  |16,8k  |13,5k  |
|Kolomyia   |Kolomea; Kolomyja              |48,53, 25,04 (Ukraine) |8,4k   |15,8k  |33,2k  |43,8k  |34k    |

# Austro-Hungarian Bukovina

Table \ref{tab:reg15-sites} lists the 5 catalogued settlements in Region 15 (15. Austro-Hungarian Bukovina (Czernowitz) & Hungarian Subcarpathian Rus (Uzhhorod/Mukachevo)), where total regional population grew from 770k in 1815AD to 1 400k at the 1897AD Census and 1 630k in 1914AD (+111,7%), shifting to 1 500k in 1917AD (-8,0% across 1914-1917AD) [@OsterreichischeStatistik1912; @MagyarStatisztika1912; @Himka1988; @Gatrell1999].

Table: Urban settlements and benchmark population series in Austro-Hungarian Bukovina (1815AD - 1917AD).

|Settlement |Historical / Local Names |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:------------------------|:----------------------|:------|:------|:------|:------|:------|
|Czernowitz |Chernivtsi; Cernauti     |48,29, 25,94 (Ukraine) |7,2k   |26,3k  |65,4k  |94k    |76k    |
|Ungvar     |Uzhhorod; Uzhgorod       |48,62, 22,29 (Ukraine) |4,8k   |9,1k   |14,3k  |17,6k  |16,4k  |
|Munkacs    |Mukachevo; Mukacheve     |48,44, 22,72 (Ukraine) |4,1k   |8,2k   |13,9k  |18,2k  |16,9k  |
|Beregszasz |Berehove; Beregovo       |48,21, 22,64 (Ukraine) |2,9k   |5,8k   |9,4k   |13,2k  |12,4k  |
|Huszt      |Khust; Maramaros Huszt   |48,18, 23,30 (Ukraine) |2,7k   |5,3k   |8,5k   |10,9k  |10,2k  |

# Bessarabia Governorate

Table \ref{tab:reg16-sites} lists the 6 catalogued settlements in Region 16 (16. Bessarabia Governorate (Kishinev/Chisinau, 1856-78AD Cahul-Ismail Shift & 1903AD Pogrom)), where total regional population grew from 385k in 1815AD to 1 935k at the 1897AD Census and 2 660k in 1914AD (+590,9%), shifting to 2 620k in 1917AD (-1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

Table: Urban settlements and benchmark population series in Bessarabia Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names            |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-----------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Kishinev   |Chisinau; Kishinyov                 |47,01, 28,86 (Moldova) |14,5k  |85,2k  |108,5k |128,7k |131k   |
|Bender     |Bendery; Tighina                    |46,83, 29,47 (Moldova) |6,8k   |21,4k  |31,8k  |38,6k  |39,2k  |
|Akkerman   |Bilhorod-Dnistrovskyi; Cetatea Alba |46,20, 30,34 (Ukraine) |8,2k   |22,8k  |28,3k  |39,8k  |40,2k  |
|Ismail     |Izmail; Tuchkov                     |45,35, 28,83 (Ukraine) |9,5k   |21,2k  |22,3k  |35,7k  |35,1k  |
|Beltsy     |Balti; Beltsy Bessarabia            |47,76, 27,93 (Moldova) |2,4k   |8,9k   |18,5k  |31,2k  |31,8k  |
|Khotin     |Khotyn; Hotin                       |48,51, 26,49 (Ukraine) |5,2k   |13,6k  |18,4k  |24,5k  |21,8k  |

# Volhynia Governorate

Table \ref{tab:reg17-sites} lists the 5 catalogued settlements in Region 17 (17. Volhynia Governorate (Southwestern Krai / Pale of Settlement)), where total regional population grew from 1 520k in 1815AD to 2 989k at the 1897AD Census and 4 120k in 1914AD (+171,1%), shifting to 3 680k in 1917AD (-10,7% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

Table: Urban settlements and benchmark population series in Volhynia Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names        |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Zhitomir   |Zhytomyr; Zytomierz             |50,25, 28,66 (Ukraine) |10,8k  |36,8k  |65,9k  |92,6k  |89,4k  |
|Rovno      |Rivne; Rowne                    |50,62, 26,25 (Ukraine) |3,4k   |6,1k   |24,6k  |36,8k  |32,5k  |
|Kovel      |Kowel; Kovel Junction           |51,21, 24,71 (Ukraine) |2,8k   |4,9k   |17,7k  |29,2k  |19,4k  |
|Lutsk      |Luck; Lutsk Volhynia            |50,75, 25,33 (Ukraine) |3,6k   |7,1k   |15,8k  |28,1k  |21,6k  |
|Kremenets  |Krzemieniec; Kremenets Volhynia |50,10, 25,73 (Ukraine) |6,8k   |11,4k  |17,7k  |22,4k  |19,8k  |

# Podolia Governorate

Table \ref{tab:reg18-sites} lists the 5 catalogued settlements in Region 18 (18. Podolia Governorate (Southwestern Krai / Pale of Settlement)), where total regional population grew from 1 440k in 1815AD to 3 018k at the 1897AD Census and 3 980k in 1914AD (+176,4%), shifting to 3 820k in 1917AD (-4,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

Table: Urban settlements and benchmark population series in Podolia Governorate (1815AD - 1917AD).

|Settlement        |Historical / Local Names                |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------------|:---------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Kamenets-Podolsky |Kamianets-Podilskyi; Kamieniec Podolski |48,68, 26,59 (Ukraine) |11,2k  |20,8k  |35,9k  |50,5k  |46,2k  |
|Vinnitsa          |Vinnytsia; Winnica                      |49,23, 28,47 (Ukraine) |4,8k   |10,9k  |30,6k  |53,8k  |54,6k  |
|Proskurov         |Khmelnytskyi; Ploskyriv                 |49,42, 26,99 (Ukraine) |3,1k   |7,8k   |22,9k  |40,6k  |38,9k  |
|Balta             |Balta Podolia; Balta Fair Town          |47,94, 29,62 (Ukraine) |6,4k   |14,6k  |23,4k  |28,9k  |28,4k  |
|Mogilev-Podolsky  |Mohyliv-Podilskyi; Mogilev on Dniester  |48,45, 27,80 (Ukraine) |7,1k   |13,4k  |22,3k  |32,6k  |31,5k  |

# Kyiv Governorate

Table \ref{tab:reg19-sites} lists the 5 catalogued settlements in Region 19 (19. Kyiv Governorate (Sugar-Beet Agro-Industrial Core & Kyiv Metropolis)), where total regional population grew from 940k in 1815AD to 3 559k at the 1897AD Census and 4 780k in 1914AD (+408,5%), shifting to 4 840k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

Table: Urban settlements and benchmark population series in Kyiv Governorate (1815AD - 1917AD).

|Settlement   |Historical / Local Names      |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------|:-----------------------------|:----------------------|:------|:------|:------|:------|:------|
|Kyiv         |Kiev; Kijow                   |50,45, 30,52 (Ukraine) |23,5k  |62,5k  |247,7k |626,3k |644k   |
|Berdichev    |Berdychiv; Berdyczow          |49,89, 28,60 (Ukraine) |16,5k  |51,8k  |53,4k  |79,1k  |77,5k  |
|Bila Tserkva |Belaya Tserkov; Biala Cerkiew |49,80, 30,12 (Ukraine) |6,8k   |14,8k  |35,4k  |60,5k  |61,2k  |
|Uman         |Human; Uman Kyiv Gub          |48,75, 30,22 (Ukraine) |6,2k   |14,4k  |31k    |50,2k  |50,8k  |
|Cherkassy    |Cherkasy; Czerkasy            |49,44, 32,06 (Ukraine) |5,4k   |13,5k  |29,6k  |43,8k  |44,5k  |

# Little Russian Governorates: Chernigov & Poltava

Table \ref{tab:reg20-sites} lists the 6 catalogued settlements in Region 20 (20. Little Russian Governorates: Chernigov & Poltava (Agrarian Overpopulation & Stolypin Source)), where total regional population grew from 3 350k in 1815AD to 5 076k at the 1897AD Census and 6 650k in 1914AD (+98,5%), shifting to 6 720k in 1917AD (+1,1% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

Table: Urban settlements and benchmark population series in Little Russian Governorates: Chernigov & Poltava (1815AD - 1917AD).

|Settlement |Historical / Local Names            |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-----------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Kremenchug |Kremenchuk; Kremenchug Kryukov      |49,07, 33,42 (Ukraine) |9,2k   |23,2k  |63k    |98,7k  |99,5k  |
|Poltava    |Poltava Governorate; Pultawa        |49,59, 34,55 (Ukraine) |10,4k  |24,6k  |53,7k  |83,5k  |85,2k  |
|Chernigov  |Chernihiv; Czernihow                |51,50, 31,29 (Ukraine) |7,6k   |15,2k  |27,7k  |38,4k  |39,1k  |
|Nezhin     |Nizhyn; Niezyn                      |51,05, 31,89 (Ukraine) |14,2k  |19,4k  |32,1k  |52,4k  |53k    |
|Konotop    |Konotop Rail Hub; Konotop Chernigov |51,24, 33,20 (Ukraine) |5,8k   |9,6k   |18,8k  |28,6k  |29,4k  |
|Romny      |Romny Fair; Romen                   |50,75, 33,47 (Ukraine) |5,4k   |9,2k   |22,5k  |35,8k  |36,2k  |

# Kharkov Governorate

Table \ref{tab:reg21-sites} lists the 5 catalogued settlements in Region 21 (21. Kharkov Governorate (Sloboda Ukraine & Kharkov Rail-University Hub)), where total regional population grew from 1 100k in 1815AD to 2 492k at the 1897AD Census and 3 440k in 1914AD (+212,7%), shifting to 3 510k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

Table: Urban settlements and benchmark population series in Kharkov Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names     |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:----------------------------|:----------------------|:------|:------|:------|:------|:------|
|Kharkov    |Kharkiv; Sloboda Capital     |49,99, 36,23 (Ukraine) |14,8k  |50,3k  |174k   |258k   |285k   |
|Sumy       |Sumy Sugar Hub; Sumy Sloboda |50,91, 34,80 (Ukraine) |10,8k  |14,2k  |27,6k  |50,4k  |51,2k  |
|Akhtyrka   |Okhtyrka; Akhtyrka Sloboda   |50,31, 34,90 (Ukraine) |12,6k  |16,8k  |23,4k  |31,8k  |32,1k  |
|Slavyansk  |Sloviansk; Tor Salt Works    |48,85, 37,61 (Ukraine) |4,9k   |9,6k   |15,8k  |25,4k  |26,1k  |
|Izyum      |Izium; Izyum Donets          |49,21, 37,26 (Ukraine) |5,6k   |9,8k   |13k    |19,6k  |20,4k  |

# Kherson Governorate

Table \ref{tab:reg22-sites} lists the 5 catalogued settlements in Region 22 (22. Kherson Governorate (Odessa Grain Port: 630k in 1914AD & Nikolaev Naval Shipyards)), where total regional population grew from 620k in 1815AD to 2 734k at the 1897AD Census and 3 750k in 1914AD (+504,8%), shifting to 3 780k in 1917AD (+0,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

Table: Urban settlements and benchmark population series in Kherson Governorate (1815AD - 1917AD).

|Settlement   |Historical / Local Names                |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------|:---------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Odessa       |Odesa; Khadzhibey                       |46,48, 30,72 (Ukraine) |35k    |114,2k |403,8k |630k   |620k   |
|Nikolaev     |Mykolaiv; Black Sea Shipyard            |46,98, 31,99 (Ukraine) |11,5k  |44,2k  |92k    |108,8k |116k   |
|Elisavetgrad |Kropyvnytskyi; Zinovievsk               |48,51, 32,26 (Ukraine) |10,2k  |25,4k  |61,5k  |78,2k  |79,4k  |
|Kherson      |Kherson Port; Kherson Governorate       |46,64, 32,62 (Ukraine) |14,2k  |40,4k  |59,1k  |98,6k  |99,2k  |
|Tiraspol     |Tiraspol Dniester; Tiraspol Kherson Gub |46,84, 29,64 (Moldova) |4,2k   |10,2k  |31,6k  |37,8k  |38,4k  |

# Ekaterinoslav Governorate

Table \ref{tab:reg23-sites} lists the 7 catalogued settlements in Region 23 (23. Ekaterinoslav Governorate (Dnieper Bend, Krivoy Rog Iron & Yuzovka-Donbas Coal Boom)), where total regional population grew from 820k in 1815AD to 2 114k at the 1897AD Census and 3 450k in 1914AD (+320,7%), shifting to 3 580k in 1917AD (+3,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

Table: Urban settlements and benchmark population series in Ekaterinoslav Governorate (1815AD - 1917AD).

|Settlement    |Historical / Local Names                   |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------|:------------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Ekaterinoslav |Dnipro; Dnipropetrovsk                     |48,46, 35,05 (Ukraine) |6,8k   |18,9k  |112,8k |220,4k |231k   |
|Yuzovka       |Donetsk; Hughesovka                        |48,02, 37,80 (Ukraine) |-      |-      |28,1k  |54k    |58,5k  |
|Lugansk       |Luhansk; Lugansky Zavod                    |48,57, 39,31 (Ukraine) |2,4k   |8,6k   |20,4k  |68k    |72,5k  |
|Mariupol      |Mariupol Azov Port; Mariupol Metallurgical |47,10, 37,54 (Ukraine) |3,1k   |5,9k   |31,1k  |58k    |61,2k  |
|Krivoy Rog    |Kryvyi Rih; Krivbass Iron                  |47,91, 33,39 (Ukraine) |2,2k   |3,8k   |15,4k  |26,8k  |28,2k  |
|Aleksandrovsk |Zaporizhzhia; Alexandrovsk                 |47,84, 35,14 (Ukraine) |2,1k   |4,6k   |18,8k  |53,4k  |58,5k  |
|Bakhmut       |Artemovsk; Bakhmut Salt-Coal               |48,60, 38,00 (Ukraine) |3,8k   |9,8k   |19,3k  |33,5k  |34,8k  |

# Taurida Governorate

Table \ref{tab:reg24-sites} lists the 6 catalogued settlements in Region 24 (24. Taurida Governorate (Crimean Peninsula, 1854-55AD Crimean War, Tatar Exodus & Tavria Steppe)), where total regional population grew from 370k in 1815AD to 1 448k at the 1897AD Census and 2 060k in 1914AD (+456,8%), shifting to 2 080k in 1917AD (+1,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

Table: Urban settlements and benchmark population series in Taurida Governorate (1815AD - 1917AD).

|Settlement |Historical / Local Names            |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-----------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Sevastopol |Sebastopol; Akhtiar Naval Base      |44,62, 33,53 (Ukraine) |18,5k  |11,2k  |53,6k  |77,5k  |84k    |
|Simferopol |Aqmescit; Taurida Capital           |44,95, 34,10 (Ukraine) |4,2k   |15,8k  |49,1k  |81,2k  |84,5k  |
|Kerch      |Kerch-Yenikale; Panticapaeum        |45,36, 36,47 (Ukraine) |2,8k   |13,4k  |33,3k  |55,8k  |56,4k  |
|Berdyansk  |Berdiansk; Berdyansk Azov Port      |46,76, 36,80 (Ukraine) |-      |10,8k  |26,5k  |40,2k  |40,8k  |
|Melitopol  |Novoaleksandrovka; Melitopol Tavria |46,85, 35,37 (Ukraine) |-      |5,3k   |15,5k  |23,6k  |24,2k  |
|Feodosiya  |Theodosia; Kefe                     |45,03, 35,38 (Ukraine) |3,6k   |8,4k   |24,1k  |43,1k  |43,8k  |

# Saint Petersburg Governorate

Table \ref{tab:reg25-sites} lists the 5 catalogued settlements in Region 25 (25. Saint Petersburg Governorate (2,12M Imperial Capital in 1914AD & Putilov Industrial Core)), where total regional population grew from 760k in 1815AD to 2 112k at the 1897AD Census and 3 150k in 1914AD (+314,5%), shifting to 3 380k in 1917AD (+7,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Saint Petersburg Governorate (1815AD - 1917AD).

|Settlement       |Historical / Local Names        |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------------|:-------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Saint Petersburg |Petrograd; Sankt-Peterburg      |59,93, 30,34 (Russia) |385k   |520,1k |1,26M  |2,12M  |2,30M  |
|Kronstadt        |Kronshtadt; Baltic Fleet Base   |59,99, 29,77 (Russia) |28k    |48,4k  |59,5k  |68,2k  |74,5k  |
|Tsarskoe Selo    |Pushkin; Detskoe Selo           |59,72, 30,40 (Russia) |8,2k   |14,1k  |22,5k  |31,8k  |34,2k  |
|Gatchina         |Gatchina Palace; Trotsk         |59,57, 30,13 (Russia) |4,8k   |9,1k   |14,8k  |21,5k  |23,4k  |
|Luga             |Luga Ingria; Luga St Petersburg |58,74, 29,85 (Russia) |1,6k   |3,1k   |5,6k   |11,2k  |12,8k  |

# Novgorod, Pskov & Olonets Governorates

Table \ref{tab:reg26-sites} lists the 6 catalogued settlements in Region 26 (26. Novgorod, Pskov & Olonets Governorates (Northwestern Lakes & Karelia)), where total regional population grew from 1 770k in 1815AD to 2 853k at the 1897AD Census and 3 580k in 1914AD (+102,3%), shifting to 3 680k in 1917AD (+2,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Novgorod, Pskov & Olonets Governorates (1815AD - 1917AD).

|Settlement    |Historical / Local Names                         |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------|:------------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Pskov         |Pleskov; Pskov Governorate                       |57,82, 28,33 (Russia) |9,8k   |16,8k  |30,5k  |38,3k  |52k    |
|Novgorod      |Veliky Novgorod; Novgorod Governorate            |58,52, 31,28 (Russia) |10,5k  |17,5k  |25,7k  |28,4k  |29,8k  |
|Staraya Russa |Russa; Staraya Russa Spa                         |57,98, 31,37 (Russia) |6,4k   |11,2k  |15,2k  |18,6k  |19,4k  |
|Petrozavodsk  |Olonets Capital; Petrovskaya Sloboda             |61,78, 34,35 (Russia) |5,2k   |10,8k  |12,5k  |18,8k  |26,4k  |
|Velikie Luki  |Velikiye Luki; Luki on Lovat                     |56,34, 30,55 (Russia) |4,2k   |6,8k   |8,5k   |15,2k  |18,5k  |
|Cherepovets   |Cherepovets Mariinsk Canal; Cherepovets Novgorod |59,13, 37,90 (Russia) |1,5k   |3,6k   |6,9k   |10,8k  |12,4k  |

# Arkhangelsk & Vologda Governorates

Table \ref{tab:reg27-sites} lists the 5 catalogued settlements in Region 27 (27. Arkhangelsk & Vologda Governorates (Pomorye, Murman Coast & Northern Peasantry)), where total regional population grew from 920k in 1815AD to 1 688k at the 1897AD Census and 2 220k in 1914AD (+141,3%), shifting to 2 280k in 1917AD (+2,7% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Arkhangelsk & Vologda Governorates (1815AD - 1917AD).

|Settlement        |Historical / Local Names                   |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------------|:------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Vologda           |Vologda Governorate; Vologda Rail Junction |59,22, 39,89 (Russia) |11,8k  |17,9k  |27,7k  |43,8k  |49,5k  |
|Arkhangelsk       |Archangel; Pomorye Port                    |64,54, 40,52 (Russia) |13,5k  |19,5k  |20,9k  |43,6k  |68k    |
|Veliky Ustyug     |Ustyug Veliky; Sukhona Port                |60,76, 46,30 (Russia) |7,8k   |9,1k   |11,1k  |18,2k  |18,8k  |
|Ust-Sysolsk       |Syktyvkar; Komi Ust-Sysolsk                |61,67, 50,84 (Russia) |2,1k   |3,4k   |4,5k   |6,2k   |6,5k   |
|Romanov-on-Murman |Murmansk; Murman Terminus                  |68,97, 33,07 (Russia) |-      |-      |-      |-      |12,5k  |

# Moscow Governorate

Table \ref{tab:reg28-sites} lists the 5 catalogued settlements in Region 28 (28. Moscow Governorate (1,76M Textile-Rail Metropolis in 1914AD)), where total regional population grew from 1 120k in 1815AD to 2 431k at the 1897AD Census and 3 560k in 1914AD (+217,9%), shifting to 3 820k in 1917AD (+7,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Moscow Governorate (1815AD - 1917AD).

|Settlement     |Historical / Local Names              |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:--------------|:-------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Moscow         |Moskva; Second Imperial Capital       |55,76, 37,62 (Russia) |251k   |386,4k |1,04M  |1,76M  |1,85M  |
|Serpukhov      |Serpukhov Textile; Serpukhov Oka      |54,92, 37,41 (Russia) |6,8k   |15,2k  |30,6k  |41,5k  |43,2k  |
|Orekhovo-Zuevo |Morozov Mills; Nikolskoe-Orekhovo     |55,81, 38,96 (Russia) |-      |6,5k   |43,2k  |69,8k  |72,4k  |
|Kolomna        |Kolomna Locomotive Works; Kolomna Oka |55,08, 38,78 (Russia) |9,8k   |16,2k  |20,3k  |34,6k  |38,9k  |
|Bogorodsk      |Noginsk; Bogorodsk Klyazma            |55,85, 38,44 (Russia) |1,9k   |5,4k   |11,1k  |25,6k  |27,2k  |

# Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk & Kaluga Governorates

Table \ref{tab:reg29-sites} lists the 8 catalogued settlements in Region 29 (29. Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk & Kaluga Governorates), where total regional population grew from 6 750k in 1815AD to 9 160k at the 1897AD Census and 11 520k in 1914AD (+70,7%), shifting to 11 880k in 1917AD (+3,1% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in the Central Industrial Ring governorates (1815AD - 1917AD).

|Settlement         |Historical / Local Names               |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------------|:--------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Yaroslavl          |Yaroslavl Volga; Yaroslavl Governorate |57,63, 39,88 (Russia) |22,5k  |36,2k  |71,6k  |120,4k |125k   |
|Ivanovo-Voznesensk |Ivanovo; Russian Manchester            |57,00, 40,97 (Russia) |5,4k   |14,8k  |54,2k  |146k   |152k   |
|Tver               |Kalinin; Tver Governorate              |56,86, 35,92 (Russia) |17,5k  |28,6k  |53,5k  |64,3k  |68,5k  |
|Smolensk           |Smolensk Dnieper; Smolensk Governorate |54,78, 32,05 (Russia) |9,4k   |21,2k  |46,7k  |75,8k  |82,4k  |
|Kaluga             |Kaluga Oka; Kaluga Governorate         |54,53, 36,28 (Russia) |23,2k  |34,5k  |49,5k  |57,6k  |59,2k  |
|Kostroma           |Kostroma Textile; Kostroma Governorate |57,77, 40,93 (Russia) |12,4k  |21,8k  |41,4k  |73,2k  |74,8k  |
|Vladimir           |Vladimir Klyazma; Vladimir Governorate |56,13, 40,41 (Russia) |7,4k   |14,4k  |28,5k  |43,5k  |45,2k  |
|Rybinsk            |Rybinsk Grain Port; Rybinsk Yaroslavl  |58,05, 38,86 (Russia) |3,8k   |11,8k  |25,3k  |33,4k  |35,1k  |

# Western Central Black-Earth Governorates: Kursk, Oryol & Tula

Table \ref{tab:reg30-sites} lists the 6 catalogued settlements in Region 30 (30. Western Central Black-Earth Governorates: Kursk, Oryol & Tula), where total regional population grew from 4 520k in 1815AD to 6 207k at the 1897AD Census and 7 980k in 1914AD (+76,5%), shifting to 8 180k in 1917AD (+2,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Western Central Black-Earth Governorates: Kursk, Oryol & Tula (1815AD - 1917AD).

|Settlement |Historical / Local Names                |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Tula       |Tula Imperial Arsenal; Tula Governorate |54,20, 37,62 (Russia) |36,5k  |57,8k  |114,7k |140,6k |158k   |
|Kursk      |Kursk Governorate; Kursk Fair           |51,74, 36,19 (Russia) |18,6k  |38,2k  |75,7k  |89,8k  |91,5k  |
|Oryol      |Orel; Oryol Governorate                 |52,97, 36,08 (Russia) |24,5k  |37,4k  |69,7k  |97,2k  |98,4k  |
|Yelets     |Elets; Yelets Grain Hub                 |52,62, 38,50 (Russia) |11,2k  |27,4k  |47k    |58,4k  |59,2k  |
|Bryansk    |Bryansk Works; Bezhitsa-Bryansk         |53,24, 34,36 (Russia) |5,8k   |12,2k  |24,8k  |34,5k  |39,8k  |
|Belgorod   |Belgorod Kursk Gub; Belgorod Chalk      |50,60, 36,59 (Russia) |8,8k   |14,6k  |26,6k  |31,2k  |31,8k  |

# Eastern Central Black-Earth Governorates: Voronezh, Tambov & Ryazan

Table \ref{tab:reg31-sites} lists the 6 catalogued settlements in Region 31 (31. Eastern Central Black-Earth Governorates: Voronezh, Tambov & Ryazan), where total regional population grew from 5 120k in 1815AD to 7 037k at the 1897AD Census and 9 220k in 1914AD (+80,1%), shifting to 9 450k in 1917AD (+2,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Eastern Central Black-Earth Governorates: Voronezh, Tambov & Ryazan (1815AD - 1917AD).

|Settlement |Historical / Local Names                  |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-----------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Voronezh   |Voronezh Don; Voronezh Governorate        |51,67, 39,18 (Russia) |19,5k  |40,2k  |80,6k  |94,8k  |99,2k  |
|Tambov     |Tambov Governorate; Tambov Tsna           |52,72, 41,45 (Russia) |14,2k  |32,4k  |48k    |71,4k  |73,5k  |
|Kozlov     |Michurinsk; Kozlov Rail Hub               |52,90, 40,49 (Russia) |10,8k  |24,6k  |40,3k  |53,2k  |54,6k  |
|Ryazan     |Pereyaslavl-Ryazansky; Ryazan Governorate |54,63, 39,69 (Russia) |11,5k  |21,8k  |46,1k  |49,6k  |51,2k  |
|Morshansk  |Morshansk Tsna Port; Morshansk Tambov     |53,44, 41,81 (Russia) |6,8k   |16,4k  |26,5k  |31,8k  |32,2k  |
|Lipetsk    |Lipetsk Ironworks; Lipetsk Spa            |52,60, 39,57 (Russia) |5,9k   |12,2k  |20,5k  |25,8k  |26,4k  |

# Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk & Penza

Table \ref{tab:reg32-sites} lists the 6 catalogued settlements in Region 32 (32. Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk & Penza (1891-92AD Famine)), where total regional population grew from 4 280k in 1815AD to 6 755k at the 1897AD Census and 8 350k in 1914AD (+95,1%), shifting to 8 550k in 1917AD (+2,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk & Penza (1815AD - 1917AD).

|Settlement      |Historical / Local Names                |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:---------------|:---------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Kazan           |Qazan; Kazan University Hub             |55,79, 49,12 (Russia) |35,2k  |61,8k  |130k   |195,3k |206k   |
|Nizhny Novgorod |Makaryev Fair; Nizhegorodskaya Yarmarka |56,30, 43,94 (Russia) |15,8k  |38,5k  |90,1k  |112,3k |127k   |
|Penza           |Penza Sura; Penza Governorate           |53,20, 45,00 (Russia) |13,2k  |26,4k  |60k    |83,1k  |86,5k  |
|Simbirsk        |Ulyanovsk; Sinbirsk                     |54,31, 48,40 (Russia) |13,8k  |24,8k  |41,7k  |64k    |66,2k  |
|Syzran          |Syzran Rail Bridge; Syzran Simbirsk Gub |53,16, 48,47 (Russia) |7,8k   |18,6k  |32,4k  |47,8k  |48,9k  |
|Saransk         |Saransk Penza Gub; Mordovian Hub        |54,18, 45,17 (Russia) |8,2k   |11,8k  |14,6k  |18,2k  |18,9k  |

# Samara & Saratov Governorates

Table \ref{tab:reg33-sites} lists the 6 catalogued settlements in Region 33 (33. Samara & Saratov Governorates (Volga Wheat Frontier & Volga German Colonies)), where total regional population grew from 1 580k in 1815AD to 5 157k at the 1897AD Census and 6 880k in 1914AD (+335,4%), shifting to 7 120k in 1917AD (+3,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Samara & Saratov Governorates (1815AD - 1917AD).

|Settlement          |Historical / Local Names                   |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------------|:------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Saratov             |Saratov Grain Capital; Saratov Governorate |51,53, 46,03 (Russia) |27,5k  |63,8k  |137,1k |235,9k |242k   |
|Samara              |Kuybyshev; Samara Wheat Hub                |53,20, 50,15 (Russia) |5,4k   |26,8k  |90k    |143,8k |152k   |
|Tsaritsyn           |Volgograd; Stalingrad                      |48,71, 44,51 (Russia) |3,8k   |7,2k   |55,2k  |101k   |115k   |
|Pokrovskaya Sloboda |Engels; Pokrovsk Volga German              |51,48, 46,12 (Russia) |4,2k   |13,8k  |21,5k  |34,3k  |35,6k  |
|Volsk               |Volgsk; Volsk Cement                       |52,04, 47,38 (Russia) |8,6k   |21,9k  |27,1k  |36,2k  |36,8k  |
|Kamyshin            |Dmitrievsk; Kamyshin Saratov               |50,10, 45,42 (Russia) |3,6k   |10,9k  |16,3k  |24,1k  |24,6k  |

# Astrakhan Governorate

Table \ref{tab:reg34-sites} lists the 5 catalogued settlements in Region 34 (34. Astrakhan Governorate (Caspian Fishery, Kalmyk & Bukey Steppe)), where total regional population grew from 380k in 1815AD to 1 004k at the 1897AD Census and 1 380k in 1914AD (+263,2%), shifting to 1 410k in 1917AD (+2,2% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Astrakhan Governorate (1815AD - 1917AD).

|Settlement       |Historical / Local Names          |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------------|:---------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Astrakhan        |Hajitarkhan; Caspian Fishery Port |46,35, 48,04 (Russia) |36,8k  |46,2k  |112,9k |162,5k |165k   |
|Tsarev           |Tsarev Akhtuba; Sarai-Berke       |48,66, 45,37 (Russia) |2,4k   |5,8k   |7k     |8,6k   |8,8k   |
|Cherny Yar       |Chyorny Yar; Cherny Yar Volga     |48,06, 46,11 (Russia) |2,9k   |4,4k   |4,2k   |5,4k   |5,5k   |
|Krasny Yar       |Krasny Yar Delta; Buzan Fortress  |46,53, 48,35 (Russia) |2,6k   |4,2k   |5,6k   |7,4k   |7,5k   |
|Khanskaya Stavka |Urda; Bukey Horde Capital         |48,77, 47,45 (Russia) |-      |2,2k   |3,4k   |4,8k   |4,9k   |

# Province of the Don Cossack Host

Table \ref{tab:reg35-sites} lists the 5 catalogued settlements in Region 35 (35. Province of the Don Cossack Host (Rostov-Taganrog Port Hub & Eastern Donbas Coal)), where total regional population grew from 680k in 1815AD to 2 564k at the 1897AD Census and 3 880k in 1914AD (+470,6%), shifting to 3 940k in 1917AD (+1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Urban settlements and benchmark population series in Province of the Don Cossack Host (1815AD - 1917AD).

|Settlement               |Historical / Local Names                 |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------------------|:----------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Rostov-on-Don            |Rostov & Nakhichevan; Don Grain Port     |47,24, 39,70 (Russia) |4,8k   |29,4k  |147,9k |204,8k |218k   |
|Novocherkassk            |Don Host Capital; Novocherkassk Stanitsa |47,42, 40,09 (Russia) |8,2k   |19,8k  |52k    |69,1k  |72,5k  |
|Taganrog                 |Taganrog Azov Port; Troitsk on Tagan-Rog |47,24, 38,90 (Russia) |9,6k   |22,6k  |51,4k  |78,6k  |82,4k  |
|Aleksandrovsk-Grushevsky |Shakhty; Grushevsky Anthracite           |47,71, 40,21 (Russia) |-      |2,4k   |16,5k  |42,8k  |46,2k  |
|Kamenskaya               |Kamensk-Shakhtinsky; Kamenskaya Stanitsa |48,32, 40,26 (Russia) |4,2k   |10,2k  |12,2k  |23,5k  |24,2k  |

# Kuban Oblast & Black Sea Governorate

Table \ref{tab:reg36-sites} lists the 6 catalogued settlements in Region 36 (36. Kuban Oblast & Black Sea Governorate (1864AD Circassian Muhajir Zone & Cossack Boom)), where total regional population grew from 420k in 1815AD to 1 976k at the 1897AD Census and 3 060k in 1914AD (+628,6%), shifting to 3 120k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

Table: Urban settlements and benchmark population series in Kuban Oblast & Black Sea Governorate (1815AD - 1917AD).

|Settlement   |Historical / Local Names                 |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------|:----------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Ekaterinodar |Krasnodar; Kuban Cossack Capital         |45,04, 38,98 (Russia) |3,8k   |9,6k   |65,6k  |107,1k |112k   |
|Novorossiysk |Sudzhuk-Kale; Black Sea Governorate Seat |44,72, 37,77 (Russia) |-      |900    |16,9k  |66,7k  |69,5k  |
|Maykop       |Maikop; Meotida Foothills                |44,61, 40,10 (Russia) |-      |2,2k   |34,3k  |52,6k  |54,1k  |
|Armavir      |Armavirskiy Aul; Armavir Kuban Rail      |44,99, 41,12 (Russia) |-      |3,4k   |18,1k  |49,8k  |52,4k  |
|Yeysk        |Eisk; Yeysk Azov Grain Port              |46,71, 38,27 (Russia) |-      |16,8k  |35,4k  |51,4k  |52,2k  |
|Sochi        |Fort Aleksandiya; Dakhovsky Posad        |43,59, 39,72 (Russia) |-      |-      |1,4k   |13,2k  |14,1k  |

# Stavropol Governorate & Terek Oblast

Table \ref{tab:reg37-sites} lists the 6 catalogued settlements in Region 37 (37. Stavropol Governorate & Terek Oblast (Grozny Oil, Cossack Lines & Vainakh-Ossetian Highlands)), where total regional population grew from 545k in 1815AD to 1 807k at the 1897AD Census and 2 610k in 1914AD (+378,9%), shifting to 2 650k in 1917AD (+1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

Table: Urban settlements and benchmark population series in Stavropol Governorate & Terek Oblast (1815AD - 1917AD).

|Settlement  |Historical / Local Names                   |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------|:------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Vladikavkaz |Terek Oblast Capital; Dzaudzhikau          |43,02, 44,68 (Russia) |2,9k   |8,6k   |43,7k  |79,3k  |81,5k  |
|Stavropol   |Stavropol-Kavkazsky; Stavropol Governorate |45,04, 41,97 (Russia) |4,2k   |17,4k  |41,6k  |64,4k  |66,2k  |
|Grozny      |Krepost Groznaya; Grozny Oilfields         |43,32, 45,70 (Russia) |-      |2,8k   |15,6k  |38,2k  |45k    |
|Pyatigorsk  |Konstantinogorsk; Caucasian Mineral Waters |44,05, 43,06 (Russia) |-      |6,4k   |18,4k  |36,8k  |38,5k  |
|Georgievsk  |Georgievsk Fortress; Caucasus Line         |44,15, 43,46 (Russia) |2,8k   |5,8k   |12k    |21,4k  |22,1k  |
|Mozdok      |Mozdok Terek Line; Mezdeug                 |43,75, 44,66 (Russia) |4,6k   |9,2k   |9,3k   |15,6k  |16,1k  |

# Dagestan Oblast

Table \ref{tab:reg38-sites} lists the 4 catalogued settlements in Region 38 (38. Dagestan Oblast (1817-1859AD Caucasian Imamate War, Temir-Khan-Shura & Petrovsk-Port)), where total regional population grew from 450k in 1815AD to 571k at the 1897AD Census and 715k in 1914AD (+58,9%), shifting to 725k in 1917AD (+1,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

Table: Urban settlements and benchmark population series in Dagestan Oblast (1815AD - 1917AD).

|Settlement       |Historical / Local Names           |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------------|:----------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Petrovsk-Port    |Makhachkala; Petrovskoe Caspian    |42,98, 47,50 (Russia) |-      |1,8k   |9,8k   |24,8k  |26,5k  |
|Derbent          |Bab al-Abwab; Derbent Caspian Gate |42,06, 48,29 (Russia) |9,2k   |12,4k  |14,6k  |32,7k  |33,4k  |
|Temir-Khan-Shura |Buynaksk; Dagestan Oblast Capital  |42,82, 47,12 (Russia) |-      |3,6k   |9,2k   |14,6k  |15,2k  |
|Khunzakh         |Avar Nutsalate; Khunzakh Fortress  |42,55, 46,70 (Russia) |2,8k   |2,1k   |3k     |3,6k   |3,7k   |

# Perm & Vyatka Governorates

Table \ref{tab:reg39-sites} lists the 6 catalogued settlements in Region 39 (39. Perm & Vyatka Governorates (Trans-Ural Ekaterinburg Mining & Kama Peasantry)), where total regional population grew from 1 920k in 1815AD to 6 025k at the 1897AD Census and 7 880k in 1914AD (+310,4%), shifting to 8 040k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Kabuzan1992].

Table: Urban settlements and benchmark population series in Perm & Vyatka Governorates (1815AD - 1917AD).

|Settlement     |Historical / Local Names                |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:--------------|:---------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Ekaterinburg   |Yekaterinburg; Sverdlovsk               |56,84, 60,61 (Russia) |11,5k  |19,8k  |43,2k  |70k    |78,5k  |
|Perm           |Perm Kama; Motovilikha Cannon Works     |58,01, 56,25 (Russia) |6,8k   |16,4k  |45,2k  |68,1k  |82k    |
|Izhevsky Zavod |Izhevsk; Izhevsk Rifle Arsenal          |56,85, 53,21 (Russia) |8,4k   |21,5k  |41,1k  |64,2k  |95k    |
|Vyatka         |Kirov; Khlynov                          |58,60, 49,67 (Russia) |6,2k   |14,6k  |25k    |48,6k  |51,2k  |
|Nizhny Tagil   |Nizhnetagilsky Zavod; Demidov Ironworks |57,92, 59,97 (Russia) |14,5k  |25,4k  |31,4k  |38,5k  |41,2k  |
|Sarapul        |Sarapul Kama Port; Sarapul Vyatka Gub   |56,48, 53,80 (Russia) |4,2k   |9,6k   |21,4k  |32,4k  |33,8k  |

# Ufa & Orenburg Governorates

Table \ref{tab:reg40-sites} lists the 6 catalogued settlements in Region 40 (40. Ufa & Orenburg Governorates (Bashkir Steppe Colonisation & Trans-Siberian Gateway)), where total regional population grew from 1 400k in 1815AD to 3 797k at the 1897AD Census and 5 350k in 1914AD (+282,1%), shifting to 5 480k in 1917AD (+2,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Kabuzan1992].

Table: Urban settlements and benchmark population series in Ufa & Orenburg Governorates (1815AD - 1917AD).

|Settlement  |Historical / Local Names                    |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-----------|:-------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Orenburg    |Orenburg Steppe Gateway; Chkalov            |51,77, 55,10 (Russia) |10,8k  |24,8k  |72,4k  |100,1k |108,5k |
|Ufa         |Ufa Governorate; Bashkiria Seat             |54,74, 55,97 (Russia) |7,6k   |16,8k  |49,3k  |106,2k |112k   |
|Chelyabinsk |Chelyaba; Trans-Siberian Migration Depot    |55,16, 61,44 (Russia) |2,9k   |4,9k   |20k    |70,5k  |74,2k  |
|Troitsk     |Troitsk Caravan Mart; Troitsk Orenburg      |54,10, 61,57 (Russia) |3,4k   |7,8k   |23,3k  |41,6k  |43,2k  |
|Zlatoust    |Zlatoustovsky Zavod; Zlatoust Steel         |55,17, 59,65 (Russia) |6,2k   |14,6k  |20,5k  |34,8k  |39,5k  |
|Sterlitamak |Sterlitamak Salt Wharf; Sterlitamak Ufa Gub |53,62, 55,95 (Russia) |2,4k   |6,8k   |15,6k  |22,4k  |23,5k  |

# West Siberian Trans-Siberian Belt: Southern Tobolsk

Table \ref{tab:reg41-sites} lists the 5 catalogued settlements in Region 41 (41. West Siberian Trans-Siberian Belt: Southern Tobolsk (Tyumen, Kurgan, Ishim) & Omsk), where total regional population grew from 545k in 1815AD to 1 740k at the 1897AD Census and 3 180k in 1914AD (+483,5%), shifting to 3 320k in 1917AD (+4,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in West Siberian Trans-Siberian Belt: Southern Tobolsk (1815AD - 1917AD).

|Settlement |Historical / Local Names                |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Omsk       |Omskaya Krepost; Steppe & Rail Capital  |54,99, 73,32 (Russia) |6,8k   |18,4k  |37,4k  |135,8k |148k   |
|Tyumen     |Chimgi-Tura; Siberian Gateway           |57,15, 65,53 (Russia) |8,4k   |14,2k  |29,5k  |42,6k  |44,8k  |
|Kurgan     |Tsaryovo Gorodishche; Kurgan Butter Hub |55,45, 65,33 (Russia) |1,6k   |4,2k   |10,3k  |38,5k  |41,2k  |
|Ishim      |Korkina Sloboda; Ishim Fair             |56,11, 69,49 (Russia) |1,8k   |4,6k   |7,2k   |14,6k  |15,4k  |
|Tara       |Tara Irtysh; Tara Tobolsk Gub           |56,89, 74,37 (Russia) |3,8k   |5,6k   |7,2k   |11,8k  |12,1k  |

# Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym

Table \ref{tab:reg42-sites} lists the 5 catalogued settlements in Region 42 (42. Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym), where total regional population grew from 160k in 1815AD to 375k at the 1897AD Census and 505k in 1914AD (+215,6%), shifting to 520k in 1917AD (+3,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym (1815AD - 1917AD).

|Settlement |Historical / Local Names                          |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:-------------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Tobolsk    |Tobolsk Governorate Seat; Irtysh-Tobol Confluence |58,20, 68,25 (Russia) |15,4k  |18,2k  |20,4k  |24,5k  |23,8k  |
|Berezov    |Beryozovo; Sugmut-Vosh Exile Ostrog               |63,94, 65,04 (Russia) |950    |1,1k   |1,1k   |1,4k   |1,4k   |
|Surgut     |Surgutsky Ostrog; Middle Ob Yasak                 |61,25, 73,42 (Russia) |750    |980    |1,1k   |1,6k   |1,6k   |
|Obdorsk    |Salekhard; Poluy Yamal Fair                       |66,53, 66,60 (Russia) |520    |780    |880    |1,4k   |1,5k   |
|Narym      |Narymsky Ostrog; Narym Exile Post                 |58,93, 81,59 (Russia) |850    |1k     |1,1k   |1,6k   |1,8k   |

# Tomsk Railway Trunk

Table \ref{tab:reg43-sites} lists the 6 catalogued settlements in Region 43 (43. Tomsk Railway Trunk (Novonikolaevsk, Tomsk) & Altai Cabinet Stolypin Magnet (Barnaul, Biysk)), where total regional population grew from 300k in 1815AD to 1 928k at the 1897AD Census and 3 980k in 1914AD (+1226,7%), shifting to 4 180k in 1917AD (+5,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Tomsk Railway Trunk (1815AD - 1917AD).

|Settlement     |Historical / Local Names                     |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:--------------|:--------------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Tomsk          |Tomsk Governorate; Siberian University City  |56,50, 84,97 (Russia) |9,6k   |20,8k  |52,2k  |116,7k |108,5k |
|Novonikolaevsk |Novosibirsk; Ob Railway Crossing             |55,01, 82,94 (Russia) |-      |-      |7,8k   |85k    |107k   |
|Barnaul        |Altai Cabinet Capital; Barnaulsky Zavod      |53,35, 83,78 (Russia) |7,4k   |11,6k  |21,1k  |61k    |58,4k  |
|Biysk          |Bikatunskaya Krepost; Chuysky Trakt Terminus |52,54, 85,21 (Russia) |2,4k   |5,8k   |17,2k  |33,5k  |35,2k  |
|Mariinsk       |Kiyskoe; Mariinsk Gold-Rail                  |56,21, 87,75 (Russia) |-      |3,8k   |8,2k   |19,8k  |20,5k  |
|Kuznetsk       |Novokuznetsk; Kuznetsky Ostrog               |53,76, 87,11 (Russia) |1,7k   |2,6k   |3,1k   |4,2k   |4,5k   |

# Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate

Table \ref{tab:reg44-sites} lists the 4 catalogued settlements in Region 44 (44. Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate (Tuva 1914AD)), where total regional population grew from 125k in 1815AD to 330k at the 1897AD Census and 565k in 1914AD (+352,0%), shifting to 575k in 1917AD (+1,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate (1815AD - 1917AD).

|Settlement     |Historical / Local Names                  |Coords & Country      |1815AD |1858AD |1897AD |1914AD |1917AD |
|:--------------|:-----------------------------------------|:---------------------|:------|:------|:------|:------|:------|
|Minusinsk      |Minusinsk Hollow; Minusinsk Yeniseysk Gub |53,71, 91,69 (Russia) |1,1k   |3,8k   |10,2k  |15,8k  |16,4k  |
|Ulala          |Gorno-Altaysk; Altai Spiritual Mission    |51,96, 85,96 (Russia) |-      |1,1k   |3,5k   |6,8k   |7,4k   |
|Ust-Abakanskoe |Abakan; Khakassia Steppe Duma             |53,72, 91,43 (Russia) |650    |1k     |1,7k   |2,6k   |2,8k   |
|Belotsarsk     |Kyzyl; Uriankhai 1914 Protectorate        |51,72, 94,44 (Russia) |-      |-      |-      |650    |1,8k   |

# Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk

Table \ref{tab:reg45-sites} lists the 5 catalogued settlements in Region 45 (45. Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk), where total regional population grew from 210k in 1815AD to 795k at the 1897AD Census and 1 540k in 1914AD (+633,3%), shifting to 1 560k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk (1815AD - 1917AD).

|Settlement   |Historical / Local Names                 |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:------------|:----------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Irkutsk      |East Siberian Capital; Angara-Irkut      |52,29, 104,31 (Russia) |14,8k  |26,5k  |51,5k  |129,7k |118,5k |
|Krasnoyarsk  |Krasny Yar on Yenisei; Yeniseysk Capital |56,02, 92,89 (Russia)  |4,8k   |9,6k   |26,7k  |87,5k  |82,4k  |
|Kansk        |Kansky Ostrog; Kansk Trans-Siberian      |56,20, 95,72 (Russia)  |1,1k   |2,4k   |7,5k   |17,8k  |18,2k  |
|Achinsk      |Achinsky Ostrog; Chulym Crossing         |56,27, 90,50 (Russia)  |1,5k   |3,1k   |6,7k   |12,4k  |12,8k  |
|Nizhneudinsk |Pokrovsky Gorodok; Uda Rail Depot        |54,91, 99,03 (Russia)  |1,2k   |2,8k   |5,8k   |10,6k  |11,2k  |

# Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields

Table \ref{tab:reg46-sites} lists the 4 catalogued settlements in Region 46 (46. Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields (1912AD Massacre)), where total regional population grew from 68k in 1815AD to 195k at the 1897AD Census and 270k in 1914AD (+297,1%), shifting to 265k in 1917AD (-1,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields (1815AD - 1917AD).

|Settlement |Historical / Local Names                |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:----------|:---------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Yeniseysk  |Eniseisk; Yenisey Gold Boomtown         |58,45, 92,17 (Russia)  |5,8k   |9,8k   |11,5k  |11,9k  |9,8k   |
|Bodaibo    |Bodaybo; Lena Goldfields 1912           |57,85, 114,19 (Russia) |-      |-      |4,2k   |11,8k  |9,5k   |
|Kirensk    |Ust-Kirensky Ostrog; Upper Lena Portage |57,79, 108,10 (Russia) |900    |1,6k   |2,3k   |4,2k   |4,4k   |
|Turukhansk |Monastyrskoe; Novaya Mangazeya          |65,79, 87,95 (Russia)  |480    |380    |212    |450    |520    |

# Transbaikal Oblast

Table \ref{tab:reg47-sites} lists the 6 catalogued settlements in Region 47 (47. Transbaikal Oblast (Chita, Verkhneudinsk) & Yakutsk Oblast (Sakha, Okhotsk, Chukotka, Kamchatka)), where total regional population grew from 278k in 1815AD to 942k at the 1897AD Census and 1 295k in 1914AD (+365,8%), shifting to 1 305k in 1917AD (+0,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Transbaikal Oblast (1815AD - 1917AD).

|Settlement    |Historical / Local Names                     |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------|:--------------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Chita         |Transbaikal Capital; Chita Rail Hub          |52,05, 113,47 (Russia) |650    |3,2k   |11,5k  |79,2k  |74,5k  |
|Verkhneudinsk |Ulan-Ude; Udinsky Ostrog                     |51,83, 107,58 (Russia) |2,8k   |4,1k   |8,1k   |19,8k  |21,5k  |
|Troitskosavsk |Kyakhta Tea Entrepot; Troitskosavsk-Kyakhta  |50,35, 106,45 (Russia) |3,8k   |5,6k   |8,8k   |11,2k  |10,8k  |
|Nerchinsk     |Nerchinsky Zavod Katorga; Shilka Silver-Gold |51,98, 116,58 (Russia) |2,4k   |4,4k   |6,8k   |12,4k  |11,9k  |
|Yakutsk       |Tuimaada; Yakutsk Oblast Seat                |62,04, 129,68 (Russia) |2,7k   |5,3k   |6,5k   |10,8k  |10,6k  |
|Petropavlovsk |Petropavlovsk-Kamchatsky; Avacha Bay         |53,05, 158,65 (Russia) |650    |1,1k   |395    |1,7k   |1,9k   |

# Priamurye Governor-Generalship: Amur, Primorskaya

Table \ref{tab:reg48-sites} lists the 6 catalogued settlements in Region 48 (48. Priamurye Governor-Generalship: Amur, Primorskaya (Vladivostok) & Sakhalin (1858-1860AD Annexation)), where total regional population grew from 30k in 1815AD to 372k at the 1897AD Census and 1 135k in 1914AD (+3683,3%), shifting to 1 150k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

Table: Urban settlements and benchmark population series in Priamurye Governor-Generalship: Amur, Primorskaya (1815AD - 1917AD).

|Settlement          |Historical / Local Names                         |Coords & Country       |1815AD |1858AD |1897AD |1914AD |1917AD |
|:-------------------|:------------------------------------------------|:----------------------|:------|:------|:------|:------|:------|
|Vladivostok         |Golden Horn Fortress; Primorskaya Capital        |43,12, 131,89 (Russia) |-      |-      |28,9k  |91,5k  |108k   |
|Blagoveshchensk     |Ust-Zeysky Post; Amur Oblast Capital             |50,29, 127,53 (Russia) |-      |1,3k   |32,8k  |62,5k  |64,2k  |
|Khabarovsk          |Khabarovka; Priamurye Seat                       |48,48, 135,08 (Russia) |-      |450    |15k    |51,3k  |53,5k  |
|Nikolsk-Ussuriysky  |Ussuriysk; Nikolskoe Green Wedge                 |43,80, 131,95 (Russia) |-      |-      |10,9k  |47,4k  |50,2k  |
|Nikolaevsk-on-Amur  |Nikolaevsky Post; Amur Estuary                   |53,14, 140,73 (Russia) |-      |2,6k   |5,7k   |14,9k  |15,4k  |
|Aleksandrovsky Post |Aleksandrovsk-Sakhalinsky; Sakhalin Katorga Seat |50,90, 142,16 (Russia) |-      |-      |3,9k   |5,8k   |6,1k   |

# Regional Urban Sample Summary

Table \ref{tab:regional-summary} aggregates the combined urban population of all 265 catalogued settlements across the 48 period-authentic regions from 1815AD to 1917AD [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

Table: Combined Urban Population Across All 265 Gazetteer Settlements by 48 Period-Authentic Regions (1815AD - 1917AD).

|Region (Catalogued Cities)                                                                        |1815AD |1858AD |1897AD |1914AD |1917AD |1815-1914AD |
|:-------------------------------------------------------------------------------------------------|:------|:------|:------|:------|:------|:-----------|
|1. Warsaw, Plock & Lomza Gubs. (n = 6)                                                            |95,8k  |196,4k |797,1k |1,04M  |877,3k |+986,3%     |
|2. Piotrkow & Kalisz Gubs. (n = 7)                                                                |20,3k  |73,7k  |526,2k |902,6k |663k   |+4346,1%    |
|3. Lublin & Siedlce Gubs. (n = 5)                                                                 |23k    |41,2k  |122,9k |166,5k |131,5k |+623,9%     |
|4. Radom, Kielce & Suwalki Gubs. (n = 5)                                                          |11,4k  |33,9k  |92,3k  |140,9k |112,6k |+1136,0%    |
|5. Estland Gub. (n = 4)                                                                           |18,7k  |32,1k  |90,3k  |176,8k |200k   |+845,5%     |
|6. Livland Gub. (n = 6)                                                                           |50,6k  |101,6k |359,3k |618,1k |301,4k |+1120,4%    |
|7. Courland Gub. (n = 5)                                                                          |23,8k  |44,7k  |122,3k |184,7k |87,1k  |+676,1%     |
|8. Southern Finland Gubs.: Nyland (n = 6)                                                         |23,9k  |56,5k  |194,7k |328,4k |350,7k |+1276,9%    |
|9. Interior & Northern Finland Gubs.: Vasa, Kuopio, Sankt-Michel & Uleaborg (n = 5)               |9,5k   |18k    |44,9k  |72k    |74,2k  |+657,9%     |
|10. Kovno Gub. (n = 5)                                                                            |13,8k  |45,6k  |119,8k |157,6k |81,4k  |+1042,0%    |
|11. Vilna & Grodno Gubs. (n = 6)                                                                  |57,4k  |127,1k |339,2k |450,8k |272,8k |+685,4%     |
|12. Minsk Gub. & Pripyat Polesia (n = 6)                                                          |31,1k  |72k    |197,5k |264,8k |256,4k |+751,4%     |
|13. Vitebsk & Mogilev Gubs. (n = 6)                                                               |50,1k  |119,7k |246,5k |448,8k |412,4k |+795,8%     |
|14. Austro-Hungarian Eastern Galicia (n = 6)                                                      |77,5k  |133,3k |275,3k |381,1k |311,6k |+391,7%     |
|15. Austro-Hungarian Bukovina (n = 5)                                                             |21,7k  |54,7k  |111,5k |153,9k |131,9k |+609,2%     |
|16. Bessarabia Gub. (n = 6)                                                                       |46,6k  |173,1k |227,7k |298,5k |299,1k |+540,6%     |
|17. Volhynia Gub. (n = 5)                                                                         |27,4k  |66,3k  |141,7k |209,1k |182,7k |+663,1%     |
|18. Podolia Gub. (n = 5)                                                                          |32,6k  |67,5k  |135k   |206,4k |199,6k |+533,1%     |
|19. Kyiv Gub. (n = 5)                                                                             |58,4k  |157k   |397,1k |859,9k |878k   |+1372,4%    |
|20. Little Russian Gubs.: Chernigov & Poltava (n = 6)                                             |52,6k  |101,2k |217,8k |337,4k |342,4k |+541,4%     |
|21. Kharkov Gub. (n = 5)                                                                          |48,7k  |100,7k |253,7k |385,2k |414,8k |+691,0%     |
|22. Kherson Gub. (n = 5)                                                                          |75,1k  |234,4k |648k   |953,4k |953k   |+1169,5%    |
|23. Ekaterinoslav Gub. (n = 7)                                                                    |20,4k  |51,6k  |246k   |514,1k |544,7k |+2420,1%    |
|24. Taurida Gub. (n = 6)                                                                          |29,1k  |64,9k  |202,1k |321,4k |333,7k |+1004,5%    |
|25. Saint Petersburg Gub. (n = 5)                                                                 |427,6k |594,8k |1,37M  |2,25M  |2,44M  |+426,5%     |
|26. Novgorod, Pskov & Olonets Gubs. (n = 6)                                                       |37,6k  |66,7k  |99,3k  |130,1k |158,5k |+246,0%     |
|27. Arkhangelsk & Vologda Gubs. (n = 5)                                                           |35,2k  |49,9k  |64,2k  |111,8k |155,3k |+217,6%     |
|28. Moscow Gub. (n = 5)                                                                           |269,5k |429,7k |1,14M  |1,93M  |2,04M  |+617,7%     |
|29. Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk & Kaluga Gubs. (n = 8) |101,6k |183,3k |370,7k |614,2k |642,2k |+504,5%     |
|30. Western Central Black-Earth Gubs.: Kursk, Oryol & Tula (n = 6)                                |105,4k |187,6k |358,5k |451,7k |478,7k |+328,6%     |
|31. Eastern Central Black-Earth Gubs.: Voronezh, Tambov & Ryazan (n = 6)                          |68,7k  |147,6k |262k   |326,6k |337,1k |+375,4%     |
|32. Middle Volga Gubs.: Nizhny Novgorod, Kazan, Simbirsk & Penza (n = 6)                          |94k    |181,9k |368,6k |520,7k |553,5k |+453,9%     |
|33. Samara & Saratov Gubs. (n = 6)                                                                |53,1k  |144,4k |347,2k |575,3k |606k   |+983,4%     |
|34. Astrakhan Gub. (n = 5)                                                                        |44,7k  |62,8k  |133,1k |188,7k |191,7k |+322,1%     |
|35. Don Cossack Host (n = 5)                                                                      |26,8k  |84,4k  |280k   |418,8k |443,3k |+1462,7%    |
|36. Kuban Oblast & Black Sea Gub. (n = 6)                                                         |3,8k   |32,9k  |171,7k |340,8k |354,3k |+8868,4%    |
|37. Stavropol Gub. & Terek Oblast (n = 6)                                                         |14,5k  |50,2k  |140,7k |255,7k |269,4k |+1663,4%    |
|38. Dagestan Oblast (n = 4)                                                                       |12k    |19,9k  |36,6k  |75,7k  |78,8k  |+530,8%     |
|39. Perm & Vyatka Gubs. (n = 6)                                                                   |51,6k  |107,3k |207,4k |321,8k |381,7k |+523,6%     |
|40. Ufa & Orenburg Gubs. (n = 6)                                                                  |33,3k  |75,7k  |201k   |375,6k |400,9k |+1027,9%    |
|41. West Siberian Trans-Siberian Belt: Southern Tobolsk (n = 5)                                   |22,4k  |47k    |91,6k  |243,3k |261,5k |+986,2%     |
|42. Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym (n = 5)                |18,5k  |22,2k  |24,6k  |30,6k  |30,1k  |+65,4%      |
|43. Tomsk Railway Trunk (n = 6)                                                                   |21,1k  |44,6k  |109,7k |320,2k |334,1k |+1417,5%    |
|44. Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate (n = 4)                |1,8k   |6k     |15,4k  |25,9k  |28,4k  |+1377,1%    |
|45. Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk (n = 5)         |23,4k  |44,4k  |98,2k  |258k   |243,1k |+1002,6%    |
|46. Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields (n = 4)                              |7,2k   |11,8k  |18,2k  |28,4k  |24,2k  |+294,8%     |
|47. Transbaikal Oblast (n = 6)                                                                    |13k    |23,7k  |42,1k  |135,1k |131,2k |+939,2%     |
|48. Priamurye Gov.-Gen.: Amur, Primorskaya (n = 6)                                                |-      |4,3k   |97,2k  |273,4k |297,4k |Post-1850AD |
|Total Gazetteer Sample (n = 265)                                                                  |2,41M  |4,79M  |12,16M |19,78M |19,29M |+722,1%     |

# Sources

::: {#refs}
:::
