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
hero_caption: "Subregions and 618 catalogued settlements of Russian Transcaucasia from 1801AD to 1917AD."
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

This gazetteer compiles longitudinal population estimates for 618 individually assessed cities, uyezd seats, garrison fortresses, mining towns, railway junctions, port settlements and census-enumerated rural villages across Russian Transcaucasia between 1801AD and 1917AD. Anchored directly to Russian military cameral descriptions, the 1886AD Transcaucasian family-list surveys, the 1897AD First All-Russian General Census, the 1917AD Eastern Georgia enumeration and late-imperial *Kavkazskiy kalendar* yearbooks, the catalogue covers 471 settlements in Georgia, 101 in Azerbaijan and 46 in Armenia out of 843 evaluated candidates [@Shafiyev2015Russian; @Taghiyeva2026Social; @Amrahov2025Numeral]. Across the imperial century, Transcaucasian urbanism shifted from walled khanate capitals and mediaeval royal seats toward a bipolar metropolitan hierarchy anchored by Tbilisi (159,6k in 1897AD; 278k in 1917AD) and Baku (111,9k in 1897AD; 248k in 1917AD), supported by regional administrative, port and garrison centres including Ganja (60,2k in 1917AD), Kutaisi (52,8k), Gyumri (51,9k), Batumi (44,5k in 1915AD), Shusha (43,9k in 1917AD), Yerevan (29k in 1897AD; 34,2k in 1915AD; 42,5k in 1917AD), Shaki (38,9k) and Quba (24,6k in 1917AD) [@Anonymous2019Baku; @Anon2026Ethnodemog; @Chichekian1967Territoria]. Rank-size calibration across all 618 entries confirms a tight Zipf distribution ($\alpha = 1{,}16$, $R^2 = 0{,}96$; exact $\alpha = 1{,}163$, $R^2 = 0{,}964$), while explicit establishment-year flags prevent anachronistic back-projection onto 19 nineteenth-century colonial, resort, mining and garrison foundations.



# Background

At the outset of Russian rule in 1801AD, urban settlement across Transcaucasia reflected centuries of caravan commerce, highland fortification and agrarian administration under Bagrationi Georgia, Ottoman frontier pashaliks and autonomous Caucasian khanates [@LeDonne2006Building; @Bosworth2007Historic]. Tbilisi stood on the narrow Kura crossing as the historic royal capital of Kartli-Kakheti despite having suffered severe devastation during Agha Mohammad Khan Qajar's 1795AD sack, while Kutaisi anchored western Imereti above the Rioni plain [@Khonelidze2022Georgian; @Sadleir2025Spravedliv]. Across the Muslim khanates of eastern and southern Transcaucasia, walled seats such as Ganja, Shamakhi, Shaki, Shusha, Erivan, Nakhchivan and the small Caspian anchorage of Baku served primarily as regional craft bazaars and garrison citadels rather than industrial hubs [@Aliyev2026Impact; @Isaxanli2021Karabakh; @Amrahov2026History].

Over the ensuing century, Tsarist military highways, railway lines and mineral extraction completely reordered this settlement geography. The construction of the Georgian Military Highway over the Darial Pass, the opening of the Poti-Tbilisi railway in 1872AD and the Tbilisi-Baku and Batumi branches in 1883AD concentrated commercial capital along the central Kura-Rioni corridor [@LeDonne2006Building; @Taghiyeva2026Social]. Simultaneously, the abolition of state petroleum farming in 1872AD ignited an unprecedented industrial boom on the Absheron Peninsula, turning Baku from a modest provincial harbour into one of the Russian Empire's fastest-growing port cities and spawning satellite drilling settlements across Sabunçu, Balaxanı and Suraxanı [@Anonymous2019Baku; @Anon2026Ethnodemog; @Ibishov2023Migrations].

Elsewhere, strategic fortifications and extractive concessions planted new urban nodes where only villages or seasonal camps had previously stood. On the Arpa River frontier facing Ottoman Kars, Russian engineers erected the fortress of Aleksandropol (modern Gyumri) in 1837AD beside earlier Armenian settlements, while Karaklis (Vanadzor, 1828AD), Nor Bayazet (Gavar, 1830AD) and Yelenovka (Sevan, 1842AD) grew along highland military and sectarian routes [@Amrahov2023Ethnic; @Chichekian1967Territoria]. On the Black Sea coast, imperial engineers chartered Poti as a commercial port in 1858AD at the mouth of the Rioni before acquiring the deeper natural harbour of Batumi in 1878AD [@Hajiyev2017Socio]. In the interior foothills, copper smelting at Alaverdi, Kapan and Siemens-run Gadabay (1865AD), manganese mining at Chiatura (1879AD) and cotton irrigation in the Mughan Steppe sustained fast-growing provincial towns down to the 1917AD Revolution [@Asadov2025Socio; @Ibishov2025Resettleme].

# Methodology

The settlement ledger was assembled through multi-wave cross-referencing of imperial cameral rolls, the 1886AD Transcaucasian family lists, exact 1897AD Russian Imperial Census volumes, the 1917AD Eastern Georgia enumeration, *Kavkazskiy kalendar* municipal returns and historical gazetteers [@Taghiyeva2026Social; @Amrahov2025Numeral; @Bosworth2007Historic]. Out of 843 candidate places evaluated across the 185,24k km² three-republic core, 618 individually assessed settlements met strict archival, spatial and demographic inclusion thresholds, whereas 225 duplicate variants or co-located localities within 2,2 km to 25 km were merged or excluded. Every retained settlement is linked to verified WGS84 decimal coordinates, canonical modern territory assignment (Georgia, Azerbaijan or Armenia) and evidence-anchored population benchmarks spanning 1801AD to 1917AD, combining full multi-benchmark trajectories for 94 principal cities and towns with exact census enumerations from the 1897AD Russian Imperial Census and 1917AD Eastern Georgia enumeration for 524 secondary market towns and villages.

Strict chronological truncation governs nineteenth-century foundations. Settlements established as imperial fortresses, Swabian German colonies, chartered ports, mineral-spring resorts or industrial mining towns after 1801AD are assigned null entries prior to their documented founding year so that backward interpolation never invents anachronistic populations. In the ledger, 19 catalogued settlements carry explicit post-1801AD establishment flags, including Stepanavan (1810AD), Bolnisi and Shamkir (1818AD), Goygol (1819AD), Vanadzor (1828AD), Borjomi (1829AD), Lagodekhi and Gavar (1830AD), Gyumri (1837AD), Sevan (1842AD), Poti (1858AD), Gadabay (1865AD), Chiatura (1879AD) and Sabirabad (1887AD). To prevent missing-glyph replacement boxes under XeLaTeX compilation, non-Latin Georgian, Armenian and Cyrillic aliases are excluded from printed table cells while preserving scholarly historical names in the prose. Table \ref{tab:urban-summary} summarises settlement counts and aggregate catalogued totals across all three territorial groupings.

<figure class="crd-table-figure" id="tab:urban-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">1801AD Sum</th><th class="crd-th">1897AD Sum</th><th class="crd-th">1917AD Sum</th><th class="crd-th">Leading City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">461</td><td class="crd-td">65k</td><td class="crd-td">419,1k</td><td class="crd-td">877,7k</td><td class="crd-td">Tbilisi (278k)</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">104</td><td class="crd-td">72,6k</td><td class="crd-td">412,7k</td><td class="crd-td">569,6k</td><td class="crd-td">Baku (248k)</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">53</td><td class="crd-td">21,4k</td><td class="crd-td">145k</td><td class="crd-td">172,1k</td><td class="crd-td">Gyumri (51,9k)</td></tr>
<tr><td class="crd-td"><strong>Total Domain</strong></td><td class="crd-td">618</td><td class="crd-td">159,1k</td><td class="crd-td">976,8k</td><td class="crd-td">1,62M</td><td class="crd-td">Tbilisi (278k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial distribution and aggregate population of the 618 catalogued Transcaucasian settlements across 1801AD, 1897AD and 1917AD.</figcaption>
</figure>

# Testing and Validation

Hierarchical consistency across the 618-settlement catalogue is evaluated by fitting an ordinary least-squares Zipf rank-size regression on log-transformed peak populations and ranks. Across the full sample ($n = 618$), the observed slope yields a Zipf exponent of $\alpha = 1{,}16$ with $R^2 = 0{,}96$ (Figure \ref{fig:settlements-zipf}), tracking the Pareto-Zipf power law closely across every urban and rural settlement tier. At the apex, Tbilisi (278k in 1917AD) and Baku (248k) form a twin metropolitan peak far above the secondary provincial capitals of Ganja (60,2k), Kutaisi (52,8k), Gyumri (51,9k), Batumi (44,5k in 1915AD), Shusha (43,9k), Yerevan (42,5k), Shaki (38,9k) and Quba (24,6k), followed by a clean log-linear descent across uyezd seats, Black Sea ports, mining centres and census-enumerated rural villages [@Anon2026Ethnodemog; @Taghiyeva2026Social].

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-russian-transcaucasia-settlements/fig4_russian_transcaucasia_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Log-log Zipf rank-size calibration across 618 Transcaucasian settlements (left) and leading catalogued cities by peak population (right).</figcaption>
</figure>

# Results

## Tiflis, Kutaisi and Batumi Governorates (Georgia)

Table \ref{tab:geo-sites} lists the leading 40 of 471 catalogued settlements across the Georgian provinces of Tiflis and Kutaisi, including Abkhazia (Sukhumi Okrug) and Ajaria (Batumi Oblast), where the enriched register incorporates 438 additional towns and rural villages from the 1897AD Russian Imperial Census and the 1917AD Eastern Georgia enumeration. In 1801AD, catalogued population across Georgia totalled 65k, rising to 419,1k at the 1897AD Russian Imperial Census and 877,7k by 1917AD. Tbilisi (historically Tiflis) anchored Georgia's urban hierarchy throughout the late imperial period, expanding from 20k in 1801AD to 159,6k in 1897AD and 278k in 1917AD as the Viceroyalty capital and junction of the Georgian Military Highway and the Transcaucasian Railway [@Sadleir2025Spravedliv; @Khonelidze2022Georgian]. In western Georgia, Kutaisi (32,5k in 1897AD; 52,8k in 1917AD) served as the administrative hub of Imereti, flanked by the Black Sea ports of Batumi (28,5k in 1897AD; peaking at 44,5k in 1915AD before wartime evacuations lowered it to 31,2k in 1917AD), Sukhumi (21,8k in 1917AD) and Poti (chartered 1858AD; peaking at 18,2k in 1915AD), alongside interior administrative, rail and mining centres including Akhaltsikhe (22,4k in 1915AD), Telavi (16,9k in 1917AD), Gori (16,8k), Sighnaghi (11,2k), Ozurgeti (peaking at 11,2k in 1916AD; 6,8k in 1917AD), Chiatura (founded 1879AD; 9,4k in 1915AD), Samtredia (8,9k), Khashuri (7,2k), Akhalkalaki (7,1k), Tskhinvali (5,3k), Zugdidi (5,2k) and Borjomi (founded 1829AD; 4,9k) [@Wier2026Conflict; @Hajiyev2017Socio].

<figure class="crd-table-figure" id="tab:geo-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1886AD</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">41,72, 44,83</td><td class="crd-td">20k</td><td class="crd-td">128,5k</td><td class="crd-td">159,6k</td><td class="crd-td">278k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">42,27, 42,69</td><td class="crd-td">4k</td><td class="crd-td">22,6k</td><td class="crd-td">32,5k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">41,62, 41,64</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Akhaltsikhe</strong></td><td class="crd-td">41,64, 42,98</td><td class="crd-td">10,5k</td><td class="crd-td">16,1k</td><td class="crd-td">15,4k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Sukhumi</strong></td><td class="crd-td">43, 41,02</td><td class="crd-td">1,6k</td><td class="crd-td">4,1k</td><td class="crd-td">8k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">42,15, 41,67</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">7,3k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Telavi</strong></td><td class="crd-td">41,92, 45,47</td><td class="crd-td">4,6k</td><td class="crd-td">11,2k</td><td class="crd-td">13,9k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Gori</strong></td><td class="crd-td">41,98, 44,12</td><td class="crd-td">3,1k</td><td class="crd-td">7,2k</td><td class="crd-td">10,3k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Sighnaghi</strong></td><td class="crd-td">41,62, 45,92</td><td class="crd-td">3,4k</td><td class="crd-td">10,6k</td><td class="crd-td">9k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Ozurgeti</strong></td><td class="crd-td">41,92, 42,01</td><td class="crd-td">1,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,7k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Chiatura</strong></td><td class="crd-td">42,3, 43,3</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Samtredia</strong></td><td class="crd-td">42,15, 42,34</td><td class="crd-td">520</td><td class="crd-td">2,6k</td><td class="crd-td">4,4k</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Aqwa</strong></td><td class="crd-td">43,01, 40,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khashuri</strong></td><td class="crd-td">41,99, 43,6</td><td class="crd-td">450</td><td class="crd-td">2,6k</td><td class="crd-td">3,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Akhalkalaki</strong></td><td class="crd-td">41,41, 43,49</td><td class="crd-td">1,8k</td><td class="crd-td">4,3k</td><td class="crd-td">5,4k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Sagarejo</strong></td><td class="crd-td">41,74, 45,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Bodbiskhevi</strong></td><td class="crd-td">41,59, 45,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Khoni</strong></td><td class="crd-td">42,33, 42,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tskhinvali</strong></td><td class="crd-td">42,23, 43,97</td><td class="crd-td">1,4k</td><td class="crd-td">3,4k</td><td class="crd-td">4k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">42,51, 41,87</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Anaga</strong></td><td class="crd-td">41,67, 45,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Borjomi</strong></td><td class="crd-td">41,84, 43,39</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Shaumiani</strong></td><td class="crd-td">41,35, 44,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Velistsikhe</strong></td><td class="crd-td">41,9, 43,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Tkibuli</strong></td><td class="crd-td">42,35, 43</td><td class="crd-td">420</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Lanchkhuti</strong></td><td class="crd-td">42,09, 42,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Zestaponi</strong></td><td class="crd-td">42,11, 43,05</td><td class="crd-td">620</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Zemo Machkhaani</strong></td><td class="crd-td">41,57, 45,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Qvareli</strong></td><td class="crd-td">41,95, 45,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Gurjaani</strong></td><td class="crd-td">41,74, 45,8</td><td class="crd-td">980</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>K'avtiskhevi</strong></td><td class="crd-td">41,86, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Lagodekhi</strong></td><td class="crd-td">41,83, 46,28</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Kobuleti</strong></td><td class="crd-td">41,82, 41,78</td><td class="crd-td">650</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Vakiri</strong></td><td class="crd-td">41,65, 45,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Senaki</strong></td><td class="crd-td">42,27, 42,07</td><td class="crd-td">480</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Sakobo</strong></td><td class="crd-td">41,74, 46,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Surami</strong></td><td class="crd-td">42,02, 43,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">265</td></tr>
<tr><td class="crd-td"><strong>Manglisi</strong></td><td class="crd-td">41,7, 44,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Norio</strong></td><td class="crd-td">42,21, 42,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Vejini</strong></td><td class="crd-td">41,71, 45,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 of 471 catalogued settlements in Georgia (Tiflis, Kutaisi and Batumi Governorates) ordered by peak population from 1801AD to 1917AD.</figcaption>
</figure>

## Baku and Elisabethpol Governorates (Azerbaijan)

Table \ref{tab:aze-sites} presents the leading 40 of 101 catalogued settlements in Azerbaijan across the Baku and Elisabethpol governorates, Nakhchivan uyezd and Zakataly Okrug, integrating 62 additional 1897AD Russian Imperial Census and regional Azerbaijani settlement records (including Lahic at 6,9k in 1886AD and Mastaga at 6,4k in 1897AD). Aggregate catalogued population in the Azerbaijani zone rose from 72,6k in 1801AD (excluding Ganja's 1804AD conquest baseline of 10k and post-1801AD foundations) to 412,7k at the 1897AD Census and 569,6k by 1917AD, propelled primarily by the industrial transformation of Baku from 3,5k in 1801AD to 111,9k in 1897AD, 214,7k in 1913AD and 248k in 1917AD [@Anonymous2019Baku; @Anon2026Ethnodemog; @BAYRAMOV2026Ideologica]. Inland, Ganja (Elisavetpol, rising from 10k in 1804AD to 33,6k in 1897AD and 60,2k in 1917AD), Shusha (25,9k in 1897AD; 43,9k in 1917AD), Shaki (Nukha, 24,7k in 1897AD; 38,9k in 1917AD), Quba (24,6k), earthquake-affected Shamakhi (peaking at 22,4k in 1855AD before the 1859AD and 1902AD quakes; 20k in 1897AD; 21,8k in 1917AD), Salyan (17,2k), Lankaran (16,1k), Nakhchivan (11,9k), Ordubad (5,6k), Balakan (5,6k), Goychay (4,6k), Zaqatala (4,3k) and the Siemens copper-smelting town of Gadabay (founded 1865AD; 3,9k in 1915AD) anchored silk processing, cotton trade, fisheries and railway transit across the Kura-Aras plains and Karabakh foothills [@Taghiyeva2026Social; @Ibishov2025Resettleme; @Asadov2025Socio].

<figure class="crd-table-figure" id="tab:aze-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1886AD</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baku</strong></td><td class="crd-td">40,38, 49,89</td><td class="crd-td">3,5k</td><td class="crd-td">62k</td><td class="crd-td">111,9k</td><td class="crd-td">248k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">40,68, 46,36</td><td class="crd-td">-</td><td class="crd-td">20,3k</td><td class="crd-td">33,6k</td><td class="crd-td">60,2k</td></tr>
<tr><td class="crd-td"><strong>Shusha</strong></td><td class="crd-td">39,76, 46,75</td><td class="crd-td">8,5k</td><td class="crd-td">26,8k</td><td class="crd-td">25,9k</td><td class="crd-td">43,9k</td></tr>
<tr><td class="crd-td"><strong>Shaki</strong></td><td class="crd-td">41,19, 47,17</td><td class="crd-td">11,5k</td><td class="crd-td">25,9k</td><td class="crd-td">24,7k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Quba</strong></td><td class="crd-td">41,36, 48,51</td><td class="crd-td">6,2k</td><td class="crd-td">13,9k</td><td class="crd-td">15,4k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Shamakhi</strong></td><td class="crd-td">40,63, 48,64</td><td class="crd-td">14,5k</td><td class="crd-td">21,9k</td><td class="crd-td">20k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Salyan</strong></td><td class="crd-td">39,6, 48,98</td><td class="crd-td">3,8k</td><td class="crd-td">10,2k</td><td class="crd-td">11,8k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Lankaran</strong></td><td class="crd-td">38,75, 48,85</td><td class="crd-td">2,8k</td><td class="crd-td">7,4k</td><td class="crd-td">8,7k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Nakhchivan</strong></td><td class="crd-td">39,21, 45,41</td><td class="crd-td">4,6k</td><td class="crd-td">6,9k</td><td class="crd-td">8,8k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Lahıc</strong></td><td class="crd-td">40,84, 48,38</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">40,53, 50,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ordubad</strong></td><td class="crd-td">38,91, 46,03</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Nic</strong></td><td class="crd-td">40,93, 47,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balakan</strong></td><td class="crd-td">41,73, 46,4</td><td class="crd-td">1,6k</td><td class="crd-td">3,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Balaxanı</strong></td><td class="crd-td">40,46, 49,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Goychay</strong></td><td class="crd-td">40,65, 47,74</td><td class="crd-td">580</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Zaqatala</strong></td><td class="crd-td">41,63, 46,64</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Əliabad</strong></td><td class="crd-td">41,48, 46,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gadabay</strong></td><td class="crd-td">40,57, 45,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Kurdamir</strong></td><td class="crd-td">40,35, 48,15</td><td class="crd-td">460</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Aghdash</strong></td><td class="crd-td">40,65, 47,47</td><td class="crd-td">260</td><td class="crd-td">-</td><td class="crd-td">528</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Yevlakh</strong></td><td class="crd-td">40,62, 47,15</td><td class="crd-td">290</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Cəhri</strong></td><td class="crd-td">39,35, 45,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Julfa</strong></td><td class="crd-td">38,96, 45,63</td><td class="crd-td">440</td><td class="crd-td">980</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Agsu</strong></td><td class="crd-td">40,57, 48,4</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Khachmaz</strong></td><td class="crd-td">41,46, 48,81</td><td class="crd-td">410</td><td class="crd-td">860</td><td class="crd-td">1,2k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Sharur</strong></td><td class="crd-td">39,55, 44,98</td><td class="crd-td">620</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Aghdam</strong></td><td class="crd-td">39,99, 46,93</td><td class="crd-td">520</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Mədrəsə</strong></td><td class="crd-td">40,61, 48,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qazakh</strong></td><td class="crd-td">41,09, 45,37</td><td class="crd-td">640</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Jalilabad</strong></td><td class="crd-td">39,21, 48,49</td><td class="crd-td">420</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Qakh</strong></td><td class="crd-td">41,42, 46,92</td><td class="crd-td">890</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Fuzuli</strong></td><td class="crd-td">39,6, 47,14</td><td class="crd-td">460</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Nehrəm</strong></td><td class="crd-td">39,12, 45,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gusar</strong></td><td class="crd-td">41,43, 48,43</td><td class="crd-td">620</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Khankendi</strong></td><td class="crd-td">39,82, 46,75</td><td class="crd-td">340</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Masalli</strong></td><td class="crd-td">39,04, 48,67</td><td class="crd-td">580</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Gabala</strong></td><td class="crd-td">40,98, 47,85</td><td class="crd-td">740</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Goygol</strong></td><td class="crd-td">40,59, 46,32</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Oğuz</strong></td><td class="crd-td">41,07, 47,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 40 of 101 catalogued settlements in Azerbaijan (Baku and Elisabethpol Governorates) ordered by peak population from 1801AD to 1917AD.</figcaption>
</figure>

## Erivan Governorate and the Armenian Highlands

Table \ref{tab:arm-sites} compiles all 46 catalogued settlements across Erivan Governorate and the northern Lori and Zangezur highlands, incorporating 24 additional rural and market settlements documented in the 1897AD Russian Imperial Census and regional Armenian enumerations. Catalogued settlement totals climbed from 21,4k in 1801AD to 145k at the 1897AD Census and 172,1k by 1917AD, reflecting post-1828AD resettlement, late nineteenth-century rail expansion and First World War refugee inflows [@Amrahov2023Ethnic; @Amrahov2025Numeral; @Shafiyev2015Russian]. The fortress and railway hub of Gyumri (Aleksandropol, founded 1837AD) led the Armenian hierarchy throughout the late imperial period at 30,6k in 1897AD and 51,9k in 1917AD, outpacing the provincial capital of Yerevan (10,8k in 1801AD; 29k in 1897AD; 34,2k in 1915AD; 42,5k in 1917AD). Secondary towns included Gavar (Nor Bayazet, refounded 1830AD, 14,8k in 1917AD), the ecclesiastical seat of Vagharshapat (Etchmiadzin, 7,9k), Vanadzor (Karakilisa, settled 1828AD, 6,3k), Ashtarak (5k), Dilijan (3,8k), the copper-smelting towns of Alaverdi (4k in 1915AD; 3,7k in 1917AD) and Kapan (3,7k in 1915AD; 3,5k in 1917AD), Vardenis (3,5k) and Armavir (Sardarapat, 3,4k) [@Chichekian1967Territoria; @Asadov2025Socio; @Darieva2023Making].

<figure class="crd-table-figure" id="tab:arm-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1801AD</th><th class="crd-th">1886AD</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">40,79, 43,85</td><td class="crd-td">-</td><td class="crd-td">24,2k</td><td class="crd-td">30,6k</td><td class="crd-td">51,9k</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">40,18, 44,5</td><td class="crd-td">10,8k</td><td class="crd-td">14,7k</td><td class="crd-td">29k</td><td class="crd-td">42,5k</td></tr>
<tr><td class="crd-td"><strong>Gavar</strong></td><td class="crd-td">40,35, 45,12</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">8,5k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Vagharshapat</strong></td><td class="crd-td">40,17, 44,29</td><td class="crd-td">2,1k</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">40,81, 44,49</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,9k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Ashtarak</strong></td><td class="crd-td">40,3, 44,36</td><td class="crd-td">1,4k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Alaverdi</strong></td><td class="crd-td">41,1, 44,67</td><td class="crd-td">410</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Dilijan</strong></td><td class="crd-td">40,74, 44,86</td><td class="crd-td">620</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Kapan</strong></td><td class="crd-td">39,21, 46,41</td><td class="crd-td">560</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Vardenis</strong></td><td class="crd-td">40,18, 45,72</td><td class="crd-td">510</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Armavir</strong></td><td class="crd-td">40,15, 44,04</td><td class="crd-td">780</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Ararat</strong></td><td class="crd-td">39,85, 44,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Martuni</strong></td><td class="crd-td">40,14, 45,31</td><td class="crd-td">440</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Tashir</strong></td><td class="crd-td">41,12, 44,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Artik</strong></td><td class="crd-td">40,62, 43,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Stepanavan</strong></td><td class="crd-td">41,01, 44,39</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Vedi</strong></td><td class="crd-td">39,91, 44,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Masis</strong></td><td class="crd-td">40,07, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Goris</strong></td><td class="crd-td">39,51, 46,34</td><td class="crd-td">540</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Aparan</strong></td><td class="crd-td">40,59, 44,36</td><td class="crd-td">360</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Ijevan</strong></td><td class="crd-td">40,88, 45,15</td><td class="crd-td">520</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Spitak</strong></td><td class="crd-td">40,83, 44,27</td><td class="crd-td">480</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Yeghvard</strong></td><td class="crd-td">40,32, 44,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Artashat</strong></td><td class="crd-td">39,95, 44,55</td><td class="crd-td">340</td><td class="crd-td">860</td><td class="crd-td">1k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Sisian</strong></td><td class="crd-td">39,52, 46,03</td><td class="crd-td">490</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Meghri</strong></td><td class="crd-td">38,9, 46,24</td><td class="crd-td">640</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">40,55, 44,95</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Yeghegnadzor</strong></td><td class="crd-td">39,76, 45,33</td><td class="crd-td">480</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Chambarak</strong></td><td class="crd-td">40,6, 45,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pemzashen</strong></td><td class="crd-td">40,59, 43,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alashkert</strong></td><td class="crd-td">40,11, 44,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Talin</strong></td><td class="crd-td">40,39, 43,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Berd</strong></td><td class="crd-td">40,88, 45,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Maralik</strong></td><td class="crd-td">40,58, 43,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tavush</strong></td><td class="crd-td">40,91, 45,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Noyemberyan</strong></td><td class="crd-td">41,17, 45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dvin</strong></td><td class="crd-td">40, 44,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">700</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mosesgegh</strong></td><td class="crd-td">40,91, 45,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Darakert</strong></td><td class="crd-td">40,1, 44,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khachpar</strong></td><td class="crd-td">40,13, 44,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sarahart</strong></td><td class="crd-td">40,87, 44,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">839</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Getashen</strong></td><td class="crd-td">40,04, 43,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">779</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Voghji</strong></td><td class="crd-td">40,81, 43,75</td><td class="crd-td">-</td><td class="crd-td">551</td><td class="crd-td">747</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hovit</strong></td><td class="crd-td">40,77, 44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">608</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yeghegis</strong></td><td class="crd-td">39,87, 45,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">412</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ughedzor</strong></td><td class="crd-td">39,69, 45,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">417</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements in Armenia (Erivan Governorate and Armenian Highlands, n=46) ordered by peak population from 1801AD to 1917AD.</figcaption>
</figure>

## Kars Oblast, Artvin Okrug and Surmalu Uyezd (Frontier Annexes)

Although the Caucasus Viceroyalty ruled Kars Oblast, Artvin Okrug and Surmalu uyezd of Erivan Governorate until 1917AD—encompassing the fortress capital of Kars (20,8k in 1897AD; peaking at 31,8k in 1915AD after the 1899AD railway link) alongside Kagizman (10,5k in 1897AD), Artvin (7,1k), Igdir (4,7k), Ardahan (4,1k) and Oltu (2,4k)—those territories were retroceded to Turkey under the 1921AD Treaties of Moscow and Kars [@Hajiyev2017Socio; @Chichekian1967Territoria]. To maintain strict geometric consistency with the 185,24k km² three-republic spatial mask, retroceded Turkish frontier towns are excluded from the 618-settlement gazetteer while their 1897AD Imperial Census provincial aggregates are reported in the companion regional literature review.

# Limitations

Four technical caveats govern the interpretation of these settlement series. First, early nineteenth-century baselines (1801-1850sAD) precede systematic municipal enumerations and rely on Russian military cameral descriptions (*kameralnye opisaniya*) and hearth multipliers, carrying wider uncertainty envelopes than the exact 1886AD family lists, 1897AD Imperial Census and 1917AD Eastern Georgia anchors [@Shafiyev2015Russian; @Amrahov2025Numeral]. Second, whereas the 94 core cities and towns carry continuous longitudinal trajectories from 1801AD (or foundation) to 1917AD, the 524 additional settlements integrated from the 1897AD Russian Imperial Census and the 1917AD Eastern Georgia enumeration record exact populations only for their enumerated census years and therefore display dashes in unenumerated columns.

Third, wartime mobilisation forced cancellation of the planned 1915AD Second All-Russian Census [@Belova2018Dmitriy]; terminal 1917AD totals therefore combine the 1917AD Eastern Georgia enumeration and *Kavkazskiy kalendar* returns with wartime adjustments for Caucasus Front evacuations (notably Batumi) and Anatolian refugee inflows into Erivan, Gyumri and Tbilisi [@Hajiyev2017Socio; @Chichekian1967Territoria]. Fourth, retroceded imperial frontier towns in Kars Oblast, Artvin Okrug and Surmalu uyezd lie outside the 185,24k km² three-republic spatial mask and are excluded from the 618-settlement register to avoid cross-border leakage into modern Turkish territory.

# Conclusion

Between 1801AD and 1917AD, aggregate catalogued population across the 618 assessed Transcaucasian settlements expanded from 159,1k in 1801AD to 976,8k at the 1897AD Imperial Census and 1,62M in 1917AD as the region's centre of gravity shifted from walled caravan khanates toward rail-connected industrial and port metropoles. The ascent of Tbilisi and Baku as twin imperial metropoles - supported by Ganja, Kutaisi, Gyumri, Batumi, Shusha, Yerevan, Shaki and Quba - forged the modern urban hierarchy of Georgia, Azerbaijan and Armenia prior to the collapse of Tsarist rule [@Anonymous2019Baku; @Taghiyeva2026Social; @TerMatevosyan2023Transcauca].

# Appendix

Table \ref{tab:foundation-dates} records all 19 catalogued settlements carrying explicit post-1801AD foundation dates in the ledger, ensuring that no demographic mass is projected before documented establishment.

<figure class="crd-table-figure" id="tab:foundation-dates">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Foundation</th><th class="crd-th">Initial Pop.</th><th class="crd-th">1897AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Stepanavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1810AD</td><td class="crd-td">380</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Bolnisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1818AD</td><td class="crd-td">460</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Shamkir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1818AD</td><td class="crd-td">340</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Goygol</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1819AD</td><td class="crd-td">600</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1828AD</td><td class="crd-td">650</td><td class="crd-td">3,9k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Sarahart</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1828AD</td><td class="crd-td">-</td><td class="crd-td">839</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Borjomi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1829AD</td><td class="crd-td">280</td><td class="crd-td">2,5k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Darakert</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1829AD</td><td class="crd-td">445</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gavar</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1830AD</td><td class="crd-td">2,4k</td><td class="crd-td">8,5k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Lagodekhi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1830AD</td><td class="crd-td">520</td><td class="crd-td">2,7k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Pemzashen</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1831AD</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khachpar</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1831AD</td><td class="crd-td">326</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1837AD</td><td class="crd-td">3,8k</td><td class="crd-td">30,6k</td><td class="crd-td">51,9k</td></tr>
<tr><td class="crd-td"><strong>Privolnoye</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1839AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">1842AD</td><td class="crd-td">320</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1858AD</td><td class="crd-td">1,4k</td><td class="crd-td">7,3k</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Gadabay</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1865AD</td><td class="crd-td">720</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Chiatura</strong></td><td class="crd-td">Georgia</td><td class="crd-td">1879AD</td><td class="crd-td">850</td><td class="crd-td">4,2k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Sabirabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1887AD</td><td class="crd-td">420</td><td class="crd-td">890</td><td class="crd-td">1,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements with documented post-1801AD foundation years (n=19), showing initial post-foundation populations, exact 1897AD Imperial Census counts and 1917AD totals.</figcaption>
</figure>

# Sources

::: {#refs}
:::
