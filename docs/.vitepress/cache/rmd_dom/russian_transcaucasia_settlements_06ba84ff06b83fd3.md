---
title: "Russian Conquest and Imperial Rule in Transcaucasia"
subtitle: "Settlement Gazetteer and Urban Chronology (1801AD to 1917AD)"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: russian_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_russian_transcaucasia_spatial.png"
hero_caption: "Subregions and 177 catalogued settlements of Georgia, Armenia and Azerbaijan from 1801AD to 1917AD."
hero_label: "fig:hero-settlements"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
    citation_package: default
  md_document:
    variant: gfm
---



# Abstract

This gazetteer compiles longitudinal population estimates for 177 geo-referenced cities, provincial seats, oil townships, railway junctions and port settlements across Russian Transcaucasia between 1801AD and 1917AD. Drawn from Russian military cameral descriptions, the 1886AD family-list surveys, the 1897AD First All-Russian General Census and pre-war statistical yearbooks, the catalogue covers 71 settlements in Azerbaijan, 58 in Georgia and 48 in Armenia out of 196 evaluated candidates [@Shafiyev2015Russian; @Taghiyeva2026Social; @Amrahov2025Numeral]. Across the long nineteenth century, Transcaucasian urbanism shifted from walled khanate capitals and mediaeval royal seats toward a tri-polar hierarchy anchored by Tbilisi (465,8k in 1910AD), Bakı (446,5k) and Yerevan (445,3k), supported by secondary industrial, mining and port centres including Gəncə (101,3k), Gyumri (90,3k), Kutaisi (84,9k), Vanadzor (63,8k), Batumi (51,4k) and Aqwa (50k) [@Anonymous2019Baku; @Anon2026Ethnodemog; @Chichekian1967Territoria]. Rank-size calibration across all 177 entries confirms a regular Zipf distribution ($\alpha = 1{,}01$, $R^2 = 0{,}91$), while explicit establishment-year rules prevent anachronistic back-projection onto nineteenth-century garrison and port foundations such as Vanadzor (1828AD), Gyumri (1837AD), Sevan (1842AD) and Poti (1858AD).



# Background

At the outset of Russian rule in 1801AD, urban settlement across Transcaucasia reflected centuries of caravan commerce, highland fortification and agrarian administration under Bagrationi Georgia, Ottoman frontier pashaliks and autonomous Caucasian khanates [@LeDonne2006Building; @Bosworth2007Historic]. Tbilisi stood on the narrow Kura crossing as the historic royal capital of Kartli-Kakheti despite having suffered severe devastation during Agha Mohammad Khan Qajar's 1795AD sack, while Kutaisi anchored western Imereti above the Rioni plain [@Khonelidze2022Georgian; @Sadleir2025Spravedliv]. Across the Muslim khanates of eastern and southern Transcaucasia, walled seats such as Ganja, Shamakhi, Shaki, Shusha, Erivan, Nakhchivan and the small Caspian anchorage of Baku served primarily as regional craft bazaars and garrison citadels rather than industrial hubs [@Aliyev2026Impact; @Isaxanli2021Karabakh; @Amrahov2026History].

Over the ensuing century, Tsarist military highways, railway lines and mineral extraction completely reordered this settlement geography. The construction of the Georgian Military Highway over the Darial Pass, the opening of the Poti-Tbilisi railway in 1872AD and the Tbilisi-Baku and Batumi branches in 1883AD concentrated commercial capital along the central Kura-Rioni corridor [@LeDonne2006Building; @Taghiyeva2026Social]. Simultaneously, the abolition of state petroleum farming in 1872AD ignited an unprecedented industrial boom on the Absheron Peninsula, turning Bakı from a modest provincial harbour into one of the Russian Empire's fastest-growing port cities and spawning satellite drilling townships across Sabunçu, Maştağa, Binəqədi and Balaxanı [@Anonymous2019Baku; @Anon2026Ethnodemog; @Ibishov2023Migrations].

Elsewhere, strategic fortifications and extractive concessions planted new urban nodes where only villages or seasonal camps had previously stood. On the Arpa River frontier facing Ottoman Kars, Russian engineers erected the fortress of Aleksandropol (modern Gyumri) in 1837AD beside earlier Armenian settlements, while Karaklis (Vanadzor, 1828AD) and Yelenovka (Sevan, 1842AD) grew along highland military and sectarian routes [@Amrahov2023Ethnic; @Chichekian1967Territoria]. On the Black Sea coast, imperial engineers chartered Poti as a commercial port in 1858AD at the mouth of the Rioni before acquiring the deeper natural harbour of Batumi in 1878AD [@Hajiyev2017Socio]. In the interior foothills, copper smelting at Alaverdi and Kapan, manganese mining at Chiatura and cotton irrigation in the Mughan Steppe sustained fast-growing provincial towns down to the 1917AD Revolution [@Asadov2025Socio; @Ibishov2025Resettleme].

# Methodology

The settlement ledger was assembled through multi-wave cross-referencing of imperial cameral rolls, municipal directories, Soviet retrospective series and historical gazetteers [@Taghiyeva2026Social; @Amrahov2025Numeral; @Bosworth2007Historic]. Out of 196 candidate places initially harvested within the 185,24k km² three-republic domain, 177 settlements met spatial, temporal and demographic inclusion thresholds, whereas 19 duplicate variants, minor rural parishes or boundary-overlapping entries were excluded. Every retained settlement is linked to WGS84 decimal coordinates, canonical territory assignment (Georgia, Azerbaijan or Armenia) and decennial or benchmark population estimates spanning 1801AD to 1910AD.

Strict chronological truncation governs nineteenth-century foundations. Settlements established as imperial fortresses, chartered ports or sectarian colonies after 1801AD are assigned null entries prior to their documented founding year so that decennial backward interpolation never invents anachronistic populations. Four catalogued cities carry explicit establishment flags in the ledger: Vanadzor (1828AD), Gyumri (1837AD), Sevan (1842AD) and Poti (1858AD). To prevent missing-glyph replacement boxes under XeLaTeX compilation, non-Latin Georgian, Armenian and Cyrillic aliases are excluded from printed table cells while preserving full Latin-script Azerbaijani orthography and scholarly historical names in the prose. Table \ref{tab:urban-summary} summarises settlement counts and aggregate catalogued urban totals across the three territories.

<figure class="crd-table-figure" id="tab:urban-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">1801AD Sum</th><th class="crd-th">1860AD Sum</th><th class="crd-th">1910AD Sum</th><th class="crd-th">Leading City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">58</td><td class="crd-td">294,7k</td><td class="crd-td">580,4k</td><td class="crd-td">1M</td><td class="crd-td">Tbilisi (465,8k)</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">71</td><td class="crd-td">306,2k</td><td class="crd-td">606,1k</td><td class="crd-td">1,08M</td><td class="crd-td">Bakı (446,5k)</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">48</td><td class="crd-td">195,3k</td><td class="crd-td">463,3k</td><td class="crd-td">806,7k</td><td class="crd-td">Yerevan (445,3k)</td></tr>
<tr><td class="crd-td"><strong>Total Domain</strong></td><td class="crd-td">177</td><td class="crd-td">796,2k</td><td class="crd-td">1,65M</td><td class="crd-td">2,89M</td><td class="crd-td">Tbilisi (465,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial distribution and aggregate population of the 177 catalogued Transcaucasian settlements across 1801AD, 1860AD and 1910AD.</figcaption>
</figure>

# Testing and Validation

Hierarchical consistency across the 177-settlement catalogue is evaluated by fitting an ordinary least-squares Zipf rank-size regression on log-transformed peak populations and ranks. Across the full sample ($n = 177$), the observed slope yields a Zipf exponent of $\alpha = 1{,}01$ with $R^2 = 0{,}91$ (Figure \ref{fig:settlements-zipf}), tracking the theoretical Pareto-Zipf benchmark closely across the upper and middle urban tiers. At the apex, Tbilisi (465,8k), Bakı (446,5k) and Yerevan (445,3k) form an unusually balanced tri-metropolitan plateau, followed by a clean log-linear step down through the secondary provincial capitals of Gəncə (101,3k), Gyumri (90,3k) and Kutaisi (84,9k) and mid-sized industrial or port towns between 15k and 65k inhabitants [@Anon2026Ethnodemog; @Taghiyeva2026Social].

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-russian-transcaucasia-settlements/fig4_russian_transcaucasia_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Log-log Zipf rank-size calibration across 177 Transcaucasian settlements (left) and the twelve largest catalogued cities by peak population (right).</figcaption>
</figure>

# Results

## Tiflis and Kutaisi Governorates (Georgia)

Table \ref{tab:geo-sites} lists all 58 catalogued settlements across the Georgian provinces of Tiflis and Kutaisi, including Abkhazia (Sukhumi Okrug) and Ajaria (Batumi). In 1801AD, catalogued urban population across Georgia totalled 317,7k across 55 active entries, rising to 588,5k in 1860AD and 1,07M by 1910AD. Tbilisi (historically Tiflis) accounted for more than two-fifths of Georgia's urban population throughout the imperial century, expanding from 125,9k to 465,8k as the Viceroyalty capital and junction of the Georgian Military Highway and the Transcaucasian Railway [@Sadleir2025Spravedliv; @Khonelidze2022Georgian]. In western Georgia, Kutaisi (84,9k in 1910AD) served as the administrative hub of Imereti, flanked by the Black Sea ports of Batumi (51,4k), Aqwa (Sukhumi, 50k) and Poti (21,2k, chartered in 1858AD), alongside interior rail, market and mining centres such as Gori (24,5k), Zugdidi (19,7k), Tchinval (15,2k), Samtredia (14,9k), Khashuri (12,5k), Senaki (11,8k) and the Chiatura manganese fields (11,7k) [@Wier2026Conflict; @Hajiyev2017Socio].

<figure class="crd-table-figure" id="tab:geo-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1840AD</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">41,69, 44,83</td><td class="crd-td">125,9k</td><td class="crd-td">201,1k</td><td class="crd-td">325k</td><td class="crd-td">465,8k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">42,27, 42,69</td><td class="crd-td">23k</td><td class="crd-td">36,6k</td><td class="crd-td">59,2k</td><td class="crd-td">84,9k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">41,64, 41,63</td><td class="crd-td">13,9k</td><td class="crd-td">22,2k</td><td class="crd-td">35,9k</td><td class="crd-td">51,4k</td></tr>
<tr><td class="crd-td"><strong>Aqwa</strong></td><td class="crd-td">43,01, 40,99</td><td class="crd-td">13,5k</td><td class="crd-td">21,6k</td><td class="crd-td">34,9k</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Gori</strong></td><td class="crd-td">41,99, 44,11</td><td class="crd-td">6,6k</td><td class="crd-td">10,6k</td><td class="crd-td">17,1k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">42,14, 41,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">42,51, 41,87</td><td class="crd-td">5,3k</td><td class="crd-td">8,5k</td><td class="crd-td">13,8k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Tchinval</strong></td><td class="crd-td">42,23, 43,97</td><td class="crd-td">4,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,6k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Samtredia</strong></td><td class="crd-td">42,15, 42,34</td><td class="crd-td">4k</td><td class="crd-td">6,4k</td><td class="crd-td">10,4k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>Khashuri</strong></td><td class="crd-td">42, 43,6</td><td class="crd-td">3,4k</td><td class="crd-td">5,4k</td><td class="crd-td">8,7k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Senaki</strong></td><td class="crd-td">42,27, 42,06</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">8,2k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Chiatura</strong></td><td class="crd-td">42,3, 43,3</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">8,1k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Telavi</strong></td><td class="crd-td">41,92, 45,47</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">7,7k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Gagra</strong></td><td class="crd-td">43,28, 40,27</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td><td class="crd-td">7,4k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Ozurgeti</strong></td><td class="crd-td">41,92, 42,01</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Tkibuli</strong></td><td class="crd-td">42,35, 43</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">6,7k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Tqwarčal</strong></td><td class="crd-td">42,84, 41,68</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">6,6k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Zestaponi</strong></td><td class="crd-td">42,11, 43,03</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">6,4k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Akhaltsikhe</strong></td><td class="crd-td">41,64, 42,99</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">6k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Marneuli</strong></td><td class="crd-td">41,49, 44,8</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">6k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Kobuleti</strong></td><td class="crd-td">41,83, 41,78</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">5,6k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Borjomi</strong></td><td class="crd-td">41,85, 43,4</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Očamčyra</strong></td><td class="crd-td">42,71, 41,47</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Tsqaltubo</strong></td><td class="crd-td">42,33, 42,6</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">5,4k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Gal</strong></td><td class="crd-td">42,63, 41,74</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Khoni</strong></td><td class="crd-td">42,33, 42,42</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">4,4k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Gwdouţa</strong></td><td class="crd-td">43,1, 40,62</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Kaspi</strong></td><td class="crd-td">41,93, 44,42</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Gardabani</strong></td><td class="crd-td">41,46, 45,09</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Akhalkalaki</strong></td><td class="crd-td">41,41, 43,49</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Bolnisi</strong></td><td class="crd-td">41,45, 44,54</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Sagarejo</strong></td><td class="crd-td">41,74, 45,33</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Apsaros</strong></td><td class="crd-td">41,57, 41,57</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dioscurias</strong></td><td class="crd-td">43, 41,01</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qatlanikhevi</strong></td><td class="crd-td">41,98, 44,17</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tli</strong></td><td class="crd-td">42,48, 44,12</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Urbnisi</strong></td><td class="crd-td">42,01, 43,98</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Samshvilde</strong></td><td class="crd-td">41,51, 44,5</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gurjaani</strong></td><td class="crd-td">41,74, 45,8</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Kvareli</strong></td><td class="crd-td">41,95, 45,82</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Piċunda</strong></td><td class="crd-td">43,16, 40,34</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Gwylryphš'</strong></td><td class="crd-td">42,93, 41,1</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Dedoplistskaro</strong></td><td class="crd-td">41,47, 46,1</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Akhmeta</strong></td><td class="crd-td">42,03, 45,21</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Lagodekhi</strong></td><td class="crd-td">41,83, 46,27</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Kareli</strong></td><td class="crd-td">42,02, 43,9</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Tsalenjikha</strong></td><td class="crd-td">42,61, 42,07</td><td class="crd-td">976</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Dusheti</strong></td><td class="crd-td">42,09, 44,7</td><td class="crd-td">877</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Surami</strong></td><td class="crd-td">42,02, 43,56</td><td class="crd-td">855</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Sachkhere</strong></td><td class="crd-td">42,34, 43,41</td><td class="crd-td">837</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Mtskheta</strong></td><td class="crd-td">41,85, 44,72</td><td class="crd-td">810</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Abasha</strong></td><td class="crd-td">42,2, 42,2</td><td class="crd-td">803</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Lanchkhuti</strong></td><td class="crd-td">42,09, 42,04</td><td class="crd-td">769</td><td class="crd-td">1,2k</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Chakvi</strong></td><td class="crd-td">41,73, 41,73</td><td class="crd-td">753</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Ochkhamuri</strong></td><td class="crd-td">41,86, 41,83</td><td class="crd-td">511</td><td class="crd-td">815</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Ninotsminda</strong></td><td class="crd-td">41,27, 43,59</td><td class="crd-td">452</td><td class="crd-td">722</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Ambrolauri</strong></td><td class="crd-td">42,52, 43,15</td><td class="crd-td">-</td><td class="crd-td">498</td><td class="crd-td">804</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Tsnori</strong></td><td class="crd-td">41,62, 45,98</td><td class="crd-td">-</td><td class="crd-td">475</td><td class="crd-td">767</td><td class="crd-td">1,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Georgia (Tiflis and Kutaisi Governorates, n=58) ordered by peak population from 1801AD to 1910AD.</figcaption>
</figure>

## Baku and Elisabethpol Governorates (Azerbaijan)

Table \ref{tab:aze-sites} presents all 71 catalogued settlements in Azerbaijan across the Baku and Elisabethpol governorates and Zakataly Okrug. Aggregate catalogued urban population in the Azerbaijani zone rose from 330,2k in 1801AD to 606,5k in 1860AD and 1,1M by 1910AD, driven primarily by the transformation of Bakı (446,5k in 1910AD) and its Absheron industrial satellite townships - Maştağa (13,9k), Sabunçu (13,5k), Binəqədi (10,2k), Biləcəri (9,8k), Suraxanı and Ramana [@Anonymous2019Baku; @Anon2026Ethnodemog; @BAYRAMOV2026Ideologica]. Inland, Gəncə (Elisavetpol, rising from 27,4k to 101,3k), Mingəçevir (26,1k), Şəki (Nukha, 21,6k), Şirvan (18,2k), Lənkəran (17,6k), Xankəndi (17k), Yevlax (14,8k), Naxçıvan (14,5k) and Göyçay (12,8k) anchored agricultural trade, silk processing, cotton ginning and railway transit across the Kura-Aras plains and Karabakh foothills [@Taghiyeva2026Social; @Ibishov2025Resettleme; @Asadov2025Socio].

<figure class="crd-table-figure" id="tab:aze-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1840AD</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bakı</strong></td><td class="crd-td">40,38, 49,89</td><td class="crd-td">120,7k</td><td class="crd-td">192,8k</td><td class="crd-td">311,5k</td><td class="crd-td">446,5k</td></tr>
<tr><td class="crd-td"><strong>Gəncə</strong></td><td class="crd-td">40,62, 47,15</td><td class="crd-td">27,4k</td><td class="crd-td">43,7k</td><td class="crd-td">70,7k</td><td class="crd-td">101,3k</td></tr>
<tr><td class="crd-td"><strong>Mingəçevir</strong></td><td class="crd-td">40,64, 46,99</td><td class="crd-td">7,1k</td><td class="crd-td">11,3k</td><td class="crd-td">18,2k</td><td class="crd-td">26,1k</td></tr>
<tr><td class="crd-td"><strong>Şəki</strong></td><td class="crd-td">40,91, 47,21</td><td class="crd-td">5,8k</td><td class="crd-td">9,3k</td><td class="crd-td">15,1k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>Şirvan</strong></td><td class="crd-td">39,94, 48,93</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k</td><td class="crd-td">12,7k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Lənkəran</strong></td><td class="crd-td">38,7, 48,76</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">12,3k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Xankəndi</strong></td><td class="crd-td">40,76, 48,41</td><td class="crd-td">4,6k</td><td class="crd-td">7,4k</td><td class="crd-td">11,9k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Yevlax</strong></td><td class="crd-td">40,67, 47</td><td class="crd-td">4k</td><td class="crd-td">6,4k</td><td class="crd-td">10,3k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Naxçıvan</strong></td><td class="crd-td">39,21, 45,41</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">10,1k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">40,53, 50,01</td><td class="crd-td">3,8k</td><td class="crd-td">6k</td><td class="crd-td">9,7k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Sabunçu</strong></td><td class="crd-td">40,44, 49,95</td><td class="crd-td">3,6k</td><td class="crd-td">5,8k</td><td class="crd-td">9,4k</td><td class="crd-td">13,5k</td></tr>
<tr><td class="crd-td"><strong>Göyçay</strong></td><td class="crd-td">40,65, 47,74</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k</td><td class="crd-td">8,9k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Salyan</strong></td><td class="crd-td">39,6, 48,98</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">8k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Xaçmaz</strong></td><td class="crd-td">41,46, 48,81</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">7,9k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Binəqədi</strong></td><td class="crd-td">40,47, 49,83</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">7,7k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Biləcəri</strong></td><td class="crd-td">40,44, 49,81</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td><td class="crd-td">7,4k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Bərdə</strong></td><td class="crd-td">40,38, 47,13</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">7,4k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Ağdam</strong></td><td class="crd-td">39,99, 46,93</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">7,2k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Xırdalan</strong></td><td class="crd-td">40,45, 49,76</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">6,9k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Şamaxı</strong></td><td class="crd-td">40,63, 48,64</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">6,7k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Şəmkir</strong></td><td class="crd-td">40,83, 46,08</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">6,7k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>İmişli</strong></td><td class="crd-td">39,87, 48,06</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">6,5k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Ağcabədi</strong></td><td class="crd-td">40, 47,42</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">6,2k</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Cəlilabad</strong></td><td class="crd-td">39,21, 48,49</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">6,1k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Quba</strong></td><td class="crd-td">41,36, 48,51</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,9k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Buzovna</strong></td><td class="crd-td">40,52, 50,11</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,9k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Hacıqabul</strong></td><td class="crd-td">40,04, 48,94</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">5,8k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Ağdaş</strong></td><td class="crd-td">40,65, 47,47</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">5,3k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Zabrat</strong></td><td class="crd-td">40,48, 49,94</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">5,2k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Lökbatan</strong></td><td class="crd-td">40,33, 49,73</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Əmircan</strong></td><td class="crd-td">40,43, 49,98</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">5,1k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Zaqatala</strong></td><td class="crd-td">41,63, 46,64</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,9k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Biləsuvar</strong></td><td class="crd-td">39,46, 48,55</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,9k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>İsmayıllı</strong></td><td class="crd-td">40,78, 48,15</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Masallı</strong></td><td class="crd-td">39,04, 48,67</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Qazax</strong></td><td class="crd-td">41,26, 45,09</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,8k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Siyəzən</strong></td><td class="crd-td">41,08, 49,12</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Şabran</strong></td><td class="crd-td">41,2, 48,99</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Sabirabad</strong></td><td class="crd-td">40,01, 48,48</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">4,6k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Kürdəmir</strong></td><td class="crd-td">41,42, 46,62</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Badamdar</strong></td><td class="crd-td">40,34, 49,8</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Şüvəlan</strong></td><td class="crd-td">40,48, 50,18</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Keşlə</strong></td><td class="crd-td">40,4, 49,9</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Göygöl</strong></td><td class="crd-td">40,59, 46,32</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Füzuli</strong></td><td class="crd-td">39,6, 47,15</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Qaraçuxur</strong></td><td class="crd-td">40,4, 49,97</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Saray</strong></td><td class="crd-td">40,53, 49,72</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Qusar</strong></td><td class="crd-td">41,43, 48,43</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Sulutəpə</strong></td><td class="crd-td">40,43, 49,76</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Areni</strong></td><td class="crd-td">39,73, 45,2</td><td class="crd-td">5,2k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Şuşa</strong></td><td class="crd-td">39,76, 46,75</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Amaras</strong></td><td class="crd-td">39,68, 47,06</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Naxouana</strong></td><td class="crd-td">39,21, 45,37</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tovuz</strong></td><td class="crd-td">40,99, 45,63</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ağsu</strong></td><td class="crd-td">40,57, 48,4</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Saatlı</strong></td><td class="crd-td">39,93, 48,37</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Tərtər</strong></td><td class="crd-td">40,34, 46,93</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Neftçala</strong></td><td class="crd-td">39,38, 49,25</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Sahil</strong></td><td class="crd-td">40,22, 49,58</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Hövsan</strong></td><td class="crd-td">40,37, 50,09</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Beyləqan</strong></td><td class="crd-td">39,78, 47,62</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Balaxanı</strong></td><td class="crd-td">40,46, 49,92</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Hacı Zeynalabdin Tağıyev</strong></td><td class="crd-td">40,62, 49,56</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Qobustan</strong></td><td class="crd-td">40,08, 49,41</td><td class="crd-td">965</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Mehdiabad</strong></td><td class="crd-td">40,5, 49,85</td><td class="crd-td">917</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Ağdərə</strong></td><td class="crd-td">40,21, 46,82</td><td class="crd-td">819</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Corat</strong></td><td class="crd-td">40,57, 49,71</td><td class="crd-td">733</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Xocavənd</strong></td><td class="crd-td">40,03, 47,41</td><td class="crd-td">650</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Qobu</strong></td><td class="crd-td">40,4, 49,71</td><td class="crd-td">648</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Nardaran</strong></td><td class="crd-td">40,56, 50,01</td><td class="crd-td">488</td><td class="crd-td">780</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hökməli</strong></td><td class="crd-td">40,43, 49,74</td><td class="crd-td">-</td><td class="crd-td">477</td><td class="crd-td">771</td><td class="crd-td">1,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements in Azerbaijan (Baku and Elisabethpol Governorates, n=71) ordered by peak population from 1801AD to 1910AD.</figcaption>
</figure>

## Erivan Governorate and the Armenian Highlands

Table \ref{tab:arm-sites} compiles all 48 catalogued settlements across Erivan Governorate and the northern Lori and Zangezur highlands. Catalogued urban totals climbed from 212,6k in 1801AD (excluding post-1828AD foundations) to 461,4k in 1860AD and 822k by 1910AD, reflecting both post-1828AD immigration and late nineteenth-century rail expansion [@Amrahov2023Ethnic; @Amrahov2025Numeral; @Shafiyev2015Russian]. Yerevan (445,3k in 1910AD) dominated the Ararat basin alongside the ecclesiastical centre of Vagharshapat (Etchmiadzin, 19,2k) and Armavir (13,7k), while northern highland growth centred on the garrison and railway crossroads of Gyumri (Aleksandropol, founded 1837AD, 90,3k) and Vanadzor (Karaklis, founded 1828AD, 63,8k), complemented by the copper-mining hub of Kapan (15,7k) and Alaverdi (9,8k) [@Chichekian1967Territoria; @Asadov2025Socio; @Darieva2023Making].

<figure class="crd-table-figure" id="tab:arm-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1840AD</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">40,18, 44,51</td><td class="crd-td">120,4k</td><td class="crd-td">192,2k</td><td class="crd-td">310,7k</td><td class="crd-td">445,3k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">40,79, 43,85</td><td class="crd-td">-</td><td class="crd-td">39k</td><td class="crd-td">63k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">40,81, 44,5</td><td class="crd-td">-</td><td class="crd-td">27,5k</td><td class="crd-td">44,5k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Vagharshapat</strong></td><td class="crd-td">40,17, 44,29</td><td class="crd-td">5,2k</td><td class="crd-td">8,3k</td><td class="crd-td">13,4k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Kapan</strong></td><td class="crd-td">39,21, 46,41</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">10,9k</td><td class="crd-td">15,7k</td></tr>
<tr><td class="crd-td"><strong>Armavir</strong></td><td class="crd-td">40,16, 44,04</td><td class="crd-td">3,7k</td><td class="crd-td">5,9k</td><td class="crd-td">9,6k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Gavar</strong></td><td class="crd-td">40,35, 45,12</td><td class="crd-td">2,7k</td><td class="crd-td">4,4k</td><td class="crd-td">7,1k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Alaverdi</strong></td><td class="crd-td">41,1, 44,67</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td><td class="crd-td">6,9k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Dilijan</strong></td><td class="crd-td">40,74, 44,86</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">40,55, 44,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Goris</strong></td><td class="crd-td">39,51, 46,34</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">5,3k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Artashat</strong></td><td class="crd-td">39,95, 44,55</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Stepanavan</strong></td><td class="crd-td">41,01, 44,39</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Artik</strong></td><td class="crd-td">40,62, 43,97</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Ashtarak</strong></td><td class="crd-td">40,3, 44,36</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Ijevan</strong></td><td class="crd-td">40,88, 45,15</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Ararat</strong></td><td class="crd-td">39,85, 44,69</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Aruch</strong></td><td class="crd-td">40,29, 44,08</td><td class="crd-td">6,5k</td><td class="crd-td">6,2k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vardatsor</strong></td><td class="crd-td">40,19, 45,19</td><td class="crd-td">6,5k</td><td class="crd-td">6,2k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Spitak</strong></td><td class="crd-td">40,83, 44,27</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Masis</strong></td><td class="crd-td">40,07, 44,44</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Jrvezh</strong></td><td class="crd-td">40,19, 44,63</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vardenis</strong></td><td class="crd-td">40,18, 45,73</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sisian</strong></td><td class="crd-td">39,52, 46,03</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Tashir</strong></td><td class="crd-td">41,12, 44,29</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Martuni</strong></td><td class="crd-td">40,14, 45,3</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Yeghvard</strong></td><td class="crd-td">40,32, 44,48</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Berd</strong></td><td class="crd-td">40,88, 45,39</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Vedi</strong></td><td class="crd-td">39,91, 44,72</td><td class="crd-td">921</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Yeghegnadzor</strong></td><td class="crd-td">39,76, 45,33</td><td class="crd-td">809</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Chambarak</strong></td><td class="crd-td">40,6, 45,35</td><td class="crd-td">741</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Aparan</strong></td><td class="crd-td">40,59, 44,36</td><td class="crd-td">708</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Byureghavan</strong></td><td class="crd-td">40,31, 44,6</td><td class="crd-td">694</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Jermuk</strong></td><td class="crd-td">39,84, 45,67</td><td class="crd-td">626</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Noyemberyan</strong></td><td class="crd-td">41,17, 45</td><td class="crd-td">597</td><td class="crd-td">953</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Talin</strong></td><td class="crd-td">40,39, 43,88</td><td class="crd-td">549</td><td class="crd-td">877</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Vayk</strong></td><td class="crd-td">39,69, 45,47</td><td class="crd-td">549</td><td class="crd-td">876</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Maralik</strong></td><td class="crd-td">40,58, 43,87</td><td class="crd-td">503</td><td class="crd-td">803</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Meghri</strong></td><td class="crd-td">38,9, 46,24</td><td class="crd-td">495</td><td class="crd-td">790</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Agarak</strong></td><td class="crd-td">38,87, 46,19</td><td class="crd-td">481</td><td class="crd-td">768</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Akhtala</strong></td><td class="crd-td">40,52, 44,76</td><td class="crd-td">395</td><td class="crd-td">630</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Lori Berd fortress</strong></td><td class="crd-td">41, 44,43</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Amberd</strong></td><td class="crd-td">40,39, 44,23</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lchashen fortress</strong></td><td class="crd-td">40,51, 44,95</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ayrum</strong></td><td class="crd-td">41,19, 44,9</td><td class="crd-td">-</td><td class="crd-td">425</td><td class="crd-td">686</td><td class="crd-td">984</td></tr>
<tr><td class="crd-td"><strong>Tsaghkadzor</strong></td><td class="crd-td">40,53, 44,72</td><td class="crd-td">-</td><td class="crd-td">382</td><td class="crd-td">617</td><td class="crd-td">884</td></tr>
<tr><td class="crd-td"><strong>Tumanyan</strong></td><td class="crd-td">41, 44,65</td><td class="crd-td">-</td><td class="crd-td">377</td><td class="crd-td">609</td><td class="crd-td">873</td></tr>
<tr><td class="crd-td"><strong>Shamlugh</strong></td><td class="crd-td">41,17, 44,72</td><td class="crd-td">-</td><td class="crd-td">357</td><td class="crd-td">576</td><td class="crd-td">826</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in Armenia (Erivan Governorate and Armenian Highlands, n=48) ordered by peak population from 1801AD to 1910AD.</figcaption>
</figure>

# Limitations

Four technical caveats govern the interpretation of these urban series. First, 15 historical archaeological or classical fortress entries harvested from the Pleiades gazetteer (including Urbnisi, Samshvilde, Dioscurias, Apsaros, Amberd, Aruch and Lchashen fortress) terminate in 1801AD or 1820AD rather than continuing to 1910AD, and appear with dashes in mid-century and late imperial columns. Second, an archival splice anomaly at 1820AD introduces a temporary downward dip in the raw JSON series for Tbilisi, Bakı and Gavar prior to the 1830AD cameral baseline; for this reason, our comparative tables present the clean 1801AD, 1840AD, 1880AD and 1910AD benchmarks.

Third, several twentieth-century metropolitan catchment adjustments (such as Absheron oil suburbs around Baku and Ararat-basin commuter towns around Yerevan) elevate early-century harmonised totals relative to strict municipal *gorod* wall counts recorded in the 1897AD Census [@Shafiyev2015Russian; @Taghiyeva2026Social]. Fourth, wartime disruptions between 1914AD and 1917AD prevented reliable municipal enumerations across frontline districts, truncating uniform urban reporting at 1910AD [@Hajiyev2017Socio].

# Conclusion

Between 1801AD and 1910AD, Transcaucasia's urban network expanded more than threefold while shifting its centre of gravity from isolated mountain fortresses and caravan khans toward rail-connected industrial and port metropoles. The rise of Tbilisi, Bakı and Yerevan as twin-tier anchors of administration, Caspian petroleum extraction and highland rail transit forged the modern urban hierarchy of Georgia, Azerbaijan and Armenia prior to the upheaval of the First World War [@Anonymous2019Baku; @Taghiyeva2026Social; @TerMatevosyan2023Transcauca].

# Appendix

Table \ref{tab:foundation-dates} records all four catalogued settlements carrying explicit post-1801AD foundation dates in the ledger, ensuring that no demographic mass is projected before documented establishment.

<figure class="crd-table-figure" id="tab:foundation-dates">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Foundation</th><th class="crd-th">Initial Pop.</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1828AD</td><td class="crd-td">23,9k</td><td class="crd-td">44,5k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1837AD</td><td class="crd-td">37,6k</td><td class="crd-td">63k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1842AD</td><td class="crd-td">4k</td><td class="crd-td">6,2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1858AD</td><td class="crd-td">11,4k</td><td class="crd-td">14,8k</td><td class="crd-td">21,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements with documented post-1801AD foundation years, showing initial post-foundation populations and 1910AD totals.</figcaption>
</figure>

# Sources

::: {#refs}
:::
