---
title: "GAZETTEER OF LATE IMPERIAL RUSSIAN, POLISH, BALTIC, FINNISH, AND HABSBURG UKRAINIAN SETTLEMENTS (1815AD - 1917AD)."
subtitle: "Supplementary Tabular Compilation of Settlement Population Histories (1815AD - 1917AD)."
date: "11 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: imperial_russia_post_1815_literature_review.bib
csl: crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/imperial_russia_post_1815_regional_map.png"
hero_caption: "Governorates, oblasts, crownlands, railways, and major urban centres of Late Imperial Russia and Austro-Hungarian Ukraine (1815AD - 1917AD)."
hero_label: "fig:hero-map"
output:
  pdf_document:
    latex_engine: xelatex
    keep_tex: false
    template: ../../../../../core/rticles/intellte/resources/template.tex
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



# Warsaw, Plock & Lomza Governorates

Table \ref{tab:reg1-sites} lists the 6 catalogued settlements in Region 1 (1. Warsaw, Plock & Lomza Governorates (Congress Poland Capital Core: Warsaw 884k in 1914AD)), where total regional population grew from 1 020k in 1815AD to 3 536k at the 1897AD Census and 5 050k in 1914AD (+395,1%), shifting to 4 420k in 1917AD (-12,5% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Warsaw</td><td class="crd-td">Warszawa; Varshava</td><td class="crd-td">52,23, 21,01 (Poland)</td><td class="crd-td">81k</td><td class="crd-td">162,8k</td><td class="crd-td">683,7k</td><td class="crd-td">884,5k</td><td class="crd-td">758k</td></tr>
<tr><td class="crd-td">Plock</td><td class="crd-td">Plotsk; Plock Governorate</td><td class="crd-td">52,55, 19,71 (Poland)</td><td class="crd-td">6,2k</td><td class="crd-td">13,2k</td><td class="crd-td">27k</td><td class="crd-td">35,2k</td><td class="crd-td">28,5k</td></tr>
<tr><td class="crd-td">Lomza</td><td class="crd-td">Lomzha; Lomza Governorate</td><td class="crd-td">53,18, 22,06 (Poland)</td><td class="crd-td">3,1k</td><td class="crd-td">5,9k</td><td class="crd-td">26,1k</td><td class="crd-td">29,8k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td">Wloclawek</td><td class="crd-td">Vlotslavsk; Leslau</td><td class="crd-td">52,65, 19,07 (Poland)</td><td class="crd-td">3,3k</td><td class="crd-td">6,8k</td><td class="crd-td">22,9k</td><td class="crd-td">37,4k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td">Zyrardow</td><td class="crd-td">Zhirardov; Ruda Guzowska</td><td class="crd-td">52,05, 20,45 (Poland)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">24,5k</td><td class="crd-td">38,6k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td">Ostroleka</td><td class="crd-td">Ostrolenka; Ostroleka Lomza</td><td class="crd-td">53,09, 21,58 (Poland)</td><td class="crd-td">2,2k</td><td class="crd-td">3,9k</td><td class="crd-td">12,9k</td><td class="crd-td">15,2k</td><td class="crd-td">9,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Urban settlements and benchmark population series in Warsaw, Plock &amp; Lomza Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Piotrkow & Kalisz Governorates

Table \ref{tab:reg2-sites} lists the 7 catalogued settlements in Region 2 (2. Piotrkow & Kalisz Governorates (Lodz Textile Metropolis & Dabrowa Coal-Steel Basin)), where total regional population grew from 720k in 1815AD to 2 245k at the 1897AD Census and 3 320k in 1914AD (+361,1%), shifting to 2 950k in 1917AD (-11,1% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Lodz</td><td class="crd-td">Lodz Piotrkow; Polish Manchester</td><td class="crd-td">51,76, 19,46 (Poland)</td><td class="crd-td">800</td><td class="crd-td">29,5k</td><td class="crd-td">314k</td><td class="crd-td">477,9k</td><td class="crd-td">342k</td></tr>
<tr><td class="crd-td">Sosnowiec</td><td class="crd-td">Sosnovitsy; Dabrowa Basin</td><td class="crd-td">50,29, 19,10 (Poland)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">61k</td><td class="crd-td">118,5k</td><td class="crd-td">94k</td></tr>
<tr><td class="crd-td">Czestochowa</td><td class="crd-td">Chenstokhov; Czestochowa Piotrkow</td><td class="crd-td">50,81, 19,12 (Poland)</td><td class="crd-td">4,5k</td><td class="crd-td">9,2k</td><td class="crd-td">45k</td><td class="crd-td">92,9k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td">Kalisz</td><td class="crd-td">Kalish; Kalisz Governorate</td><td class="crd-td">51,77, 18,09 (Poland)</td><td class="crd-td">7,8k</td><td class="crd-td">12,6k</td><td class="crd-td">24,4k</td><td class="crd-td">65,4k</td><td class="crd-td">29k</td></tr>
<tr><td class="crd-td">Piotrkow</td><td class="crd-td">Piotrkow Trybunalski; Petrokov</td><td class="crd-td">51,41, 19,70 (Poland)</td><td class="crd-td">4,2k</td><td class="crd-td">10,9k</td><td class="crd-td">31,2k</td><td class="crd-td">44,8k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td">Bendzin</td><td class="crd-td">Bedzin; Bendin Dabrowa</td><td class="crd-td">50,32, 19,13 (Poland)</td><td class="crd-td">2,1k</td><td class="crd-td">4,4k</td><td class="crd-td">23,8k</td><td class="crd-td">54,8k</td><td class="crd-td">43,5k</td></tr>
<tr><td class="crd-td">Pabianice</td><td class="crd-td">Pabianitsy; Pabianice Lodz</td><td class="crd-td">51,66, 19,35 (Poland)</td><td class="crd-td">900</td><td class="crd-td">4,9k</td><td class="crd-td">26,8k</td><td class="crd-td">48,3k</td><td class="crd-td">36,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Urban settlements and benchmark population series in Piotrkow &amp; Kalisz Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Lublin & Siedlce Governorates

Table \ref{tab:reg3-sites} lists the 5 catalogued settlements in Region 3 (3. Lublin & Siedlce Governorates (Eastern Vistula & 1912AD Kholm Governorate Split)), where total regional population grew from 780k in 1815AD to 1 933k at the 1897AD Census and 2 680k in 1914AD (+243,6%), shifting to 2 080k in 1917AD (-22,4% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Lublin</td><td class="crd-td">Lyublin; Lublin Governorate</td><td class="crd-td">51,25, 22,57 (Poland)</td><td class="crd-td">10,2k</td><td class="crd-td">18,5k</td><td class="crd-td">50,4k</td><td class="crd-td">72,2k</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td">Siedlce</td><td class="crd-td">Sedlets; Siedlce Governorate</td><td class="crd-td">52,17, 22,29 (Poland)</td><td class="crd-td">3,1k</td><td class="crd-td">7,8k</td><td class="crd-td">26,2k</td><td class="crd-td">34k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td">Kholm</td><td class="crd-td">Chelm; Kholm 1912 Governorate</td><td class="crd-td">51,14, 23,47 (Poland)</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">18,5k</td><td class="crd-td">24,6k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td">Zamosc</td><td class="crd-td">Zamostye; Zamosc Fortress</td><td class="crd-td">50,72, 23,25 (Poland)</td><td class="crd-td">4,2k</td><td class="crd-td">5,7k</td><td class="crd-td">14,7k</td><td class="crd-td">18,9k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td">Biala Podlaska</td><td class="crd-td">Bela; Biala Siedlce</td><td class="crd-td">52,03, 23,12 (Poland)</td><td class="crd-td">2,9k</td><td class="crd-td">5,1k</td><td class="crd-td">13,1k</td><td class="crd-td">16,8k</td><td class="crd-td">11,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Urban settlements and benchmark population series in Lublin &amp; Siedlce Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Radom, Kielce & Suwalki Governorates

Table \ref{tab:reg4-sites} lists the 5 catalogued settlements in Region 4 (4. Radom, Kielce & Suwalki Governorates (Old Polish Mining Belt & Lithuanian Northern Suwalki)), where total regional population grew from 780k in 1815AD to 2 160k at the 1897AD Census and 2 600k in 1914AD (+233,3%), shifting to 2 180k in 1917AD (-16,2% across 1914-1917AD) [@WarsawStat1914; @Troinitsky1905Goroda; @Corrsin1989; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Radom</td><td class="crd-td">Radom Governorate; Radom Sandomierz</td><td class="crd-td">51,40, 21,15 (Poland)</td><td class="crd-td">3,2k</td><td class="crd-td">9,8k</td><td class="crd-td">29,9k</td><td class="crd-td">49,2k</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td">Kielce</td><td class="crd-td">Keltse; Keltsy</td><td class="crd-td">50,87, 20,63 (Poland)</td><td class="crd-td">3,1k</td><td class="crd-td">5,2k</td><td class="crd-td">23,2k</td><td class="crd-td">37,6k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td">Suwalki</td><td class="crd-td">Suvalki; Suwalki Governorate</td><td class="crd-td">54,11, 22,93 (Poland)</td><td class="crd-td">2,1k</td><td class="crd-td">11,4k</td><td class="crd-td">22,6k</td><td class="crd-td">27,1k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td">Ostrowiec</td><td class="crd-td">Ostrowiec Swietokrzyski; Ostrovets</td><td class="crd-td">50,93, 21,39 (Poland)</td><td class="crd-td">1,6k</td><td class="crd-td">3,9k</td><td class="crd-td">9,8k</td><td class="crd-td">18,4k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td">Mariampol</td><td class="crd-td">Marijampole; Mariampol Suwalki</td><td class="crd-td">54,56, 23,35 (Lithuania)</td><td class="crd-td">1,4k</td><td class="crd-td">3,6k</td><td class="crd-td">6,7k</td><td class="crd-td">8,6k</td><td class="crd-td">5,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Urban settlements and benchmark population series in Radom, Kielce &amp; Suwalki Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Estland Governorate

Table \ref{tab:reg5-sites} lists the 4 catalogued settlements in Region 5 (5. Estland Governorate (Reval/Tallinn; 1816AD Emancipation & Early Demographic Transition)), where total regional population grew from 232k in 1815AD to 413k at the 1897AD Census and 505k in 1914AD (+117,7%), shifting to 515k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Reval</td><td class="crd-td">Tallinn; Revel</td><td class="crd-td">59,44, 24,75 (Estonia)</td><td class="crd-td">12,9k</td><td class="crd-td">21,6k</td><td class="crd-td">64,6k</td><td class="crd-td">137,6k</td><td class="crd-td">159k</td></tr>
<tr><td class="crd-td">Narva</td><td class="crd-td">Kreenholm; Rugodiv</td><td class="crd-td">59,38, 28,18 (Estonia)</td><td class="crd-td">3,8k</td><td class="crd-td">6,2k</td><td class="crd-td">16,6k</td><td class="crd-td">27,4k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td">Wesenberg</td><td class="crd-td">Rakvere; Vezenberg</td><td class="crd-td">59,35, 26,36 (Estonia)</td><td class="crd-td">900</td><td class="crd-td">2,2k</td><td class="crd-td">5,9k</td><td class="crd-td">7,4k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td">Hapsal</td><td class="crd-td">Haapsalu; Gapsal</td><td class="crd-td">58,94, 23,54 (Estonia)</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4,4k</td><td class="crd-td">4,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Urban settlements and benchmark population series in Estland Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Livland Governorate

Table \ref{tab:reg6-sites} lists the 6 catalogued settlements in Region 6 (6. Livland Governorate (Riga Port-Industrial Metropolis: 517k in 1914AD & Dorpat University)), where total regional population grew from 615k in 1815AD to 1 299k at the 1897AD Census and 1 565k in 1914AD (+154,5%), shifting to 1 420k in 1917AD (-9,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Riga</td><td class="crd-td">Riia; Livland Capital</td><td class="crd-td">56,95, 24,11 (Latvia)</td><td class="crd-td">36k</td><td class="crd-td">72,1k</td><td class="crd-td">282,2k</td><td class="crd-td">517,5k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td">Dorpat</td><td class="crd-td">Tartu; Yuryev</td><td class="crd-td">58,38, 26,73 (Estonia)</td><td class="crd-td">7,2k</td><td class="crd-td">14,3k</td><td class="crd-td">42,3k</td><td class="crd-td">48,6k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td">Pernau</td><td class="crd-td">Parnu; Pernov</td><td class="crd-td">58,39, 24,50 (Estonia)</td><td class="crd-td">3,4k</td><td class="crd-td">6,6k</td><td class="crd-td">12,9k</td><td class="crd-td">19,2k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td">Walk</td><td class="crd-td">Valka; Valga</td><td class="crd-td">57,78, 26,05 (Latvia)</td><td class="crd-td">950</td><td class="crd-td">2,6k</td><td class="crd-td">10,9k</td><td class="crd-td">18,5k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td">Wenden</td><td class="crd-td">Cesis; Venden</td><td class="crd-td">57,31, 25,27 (Latvia)</td><td class="crd-td">1,3k</td><td class="crd-td">2,8k</td><td class="crd-td">6,4k</td><td class="crd-td">8,9k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td">Arensburg</td><td class="crd-td">Kuressaare; Arensburg Oesel</td><td class="crd-td">58,25, 22,49 (Estonia)</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td><td class="crd-td">5,4k</td><td class="crd-td">4,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Urban settlements and benchmark population series in Livland Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Courland Governorate

Table \ref{tab:reg7-sites} lists the 5 catalogued settlements in Region 7 (7. Courland Governorate (Mitau/Jelgava & Libau/Liepaja Transatlantic Emigration Port)), where total regional population grew from 418k in 1815AD to 674k at the 1897AD Census and 800k in 1914AD (+91,4%), shifting to 380k in 1917AD (-52,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Gortfelder2023BalticFertility; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Libau</td><td class="crd-td">Liepaja; Libava</td><td class="crd-td">56,50, 21,01 (Latvia)</td><td class="crd-td">5,6k</td><td class="crd-td">10,4k</td><td class="crd-td">64,5k</td><td class="crd-td">90,7k</td><td class="crd-td">43,2k</td></tr>
<tr><td class="crd-td">Mitau</td><td class="crd-td">Jelgava; Mitava</td><td class="crd-td">56,65, 23,72 (Latvia)</td><td class="crd-td">12,5k</td><td class="crd-td">21,8k</td><td class="crd-td">35,1k</td><td class="crd-td">45,7k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td">Windau</td><td class="crd-td">Ventspils; Vindava</td><td class="crd-td">57,39, 21,56 (Latvia)</td><td class="crd-td">1,6k</td><td class="crd-td">3,5k</td><td class="crd-td">7,1k</td><td class="crd-td">28,8k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td">Goldingen</td><td class="crd-td">Kuldiga; Goldingen Courland</td><td class="crd-td">56,97, 21,97 (Latvia)</td><td class="crd-td">2,2k</td><td class="crd-td">4,9k</td><td class="crd-td">9,7k</td><td class="crd-td">12,1k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td">Jakobstadt</td><td class="crd-td">Jekabpils; Yakobshtadt</td><td class="crd-td">56,50, 25,88 (Latvia)</td><td class="crd-td">1,9k</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k</td><td class="crd-td">7,4k</td><td class="crd-td">3,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Urban settlements and benchmark population series in Courland Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Southern Finland Governorates: Nyland

Table \ref{tab:reg8-sites} lists the 6 catalogued settlements in Region 8 (8. Southern Finland Governorates: Nyland (Helsingfors), Abo-Bjorneborg, Tavastehus & Vyborg), where total regional population grew from 590k in 1815AD to 1 425k at the 1897AD Census and 1 840k in 1914AD (+211,9%), shifting to 1 890k in 1917AD (+2,7% across 1914-1917AD) [@FinlandStat1870_1915; @Pitkanen1993; @Luostarinen2026FinlandMortality].

<figure class="crd-table-figure" id="tab:reg8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Helsingfors</td><td class="crd-td">Helsinki; Gelsingfors</td><td class="crd-td">60,17, 24,94 (Finland)</td><td class="crd-td">4,8k</td><td class="crd-td">22,2k</td><td class="crd-td">84,5k</td><td class="crd-td">170,5k</td><td class="crd-td">187,5k</td></tr>
<tr><td class="crd-td">Abo</td><td class="crd-td">Turku; Abo-Bjorneborg</td><td class="crd-td">60,45, 22,27 (Finland)</td><td class="crd-td">11,8k</td><td class="crd-td">16,8k</td><td class="crd-td">36,8k</td><td class="crd-td">54,6k</td><td class="crd-td">56,2k</td></tr>
<tr><td class="crd-td">Tammerfors</td><td class="crd-td">Tampere; Tavastehus Mill Hub</td><td class="crd-td">61,50, 23,76 (Finland)</td><td class="crd-td">850</td><td class="crd-td">4,9k</td><td class="crd-td">30,2k</td><td class="crd-td">45,2k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td">Viipuri</td><td class="crd-td">Vyborg; Viborg</td><td class="crd-td">60,71, 28,75 (Russia)</td><td class="crd-td">3,3k</td><td class="crd-td">5,5k</td><td class="crd-td">23,5k</td><td class="crd-td">29,3k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td">Bjorneborg</td><td class="crd-td">Pori; Bjorneborg Port</td><td class="crd-td">61,49, 21,80 (Finland)</td><td class="crd-td">3,1k</td><td class="crd-td">7,1k</td><td class="crd-td">13,9k</td><td class="crd-td">17,6k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td">Kotka</td><td class="crd-td">Kotka Timber Port; Svensksund</td><td class="crd-td">60,47, 26,95 (Finland)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">11,2k</td><td class="crd-td">11,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Urban settlements and benchmark population series in Southern Finland Governorates: Nyland (1815AD - 1917AD).</figcaption>
</figure>

# Interior & Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel & Uleaborg

Table \ref{tab:reg9-sites} lists the 5 catalogued settlements in Region 9 (9. Interior & Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel & Uleaborg (1866-68AD Famine)), where total regional population grew from 520k in 1815AD to 1 130k at the 1897AD Census and 1 400k in 1914AD (+169,2%), shifting to 1 430k in 1917AD (+2,1% across 1914-1917AD) [@FinlandStat1870_1915; @Pitkanen1993; @Luostarinen2026FinlandMortality].

<figure class="crd-table-figure" id="tab:reg9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Vasa</td><td class="crd-td">Vaasa; Nikolaistad</td><td class="crd-td">63,10, 21,62 (Finland)</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">13,8k</td><td class="crd-td">24,2k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td">Uleaborg</td><td class="crd-td">Oulu; Uleaborg Governorate</td><td class="crd-td">65,01, 25,47 (Finland)</td><td class="crd-td">3,7k</td><td class="crd-td">6,8k</td><td class="crd-td">14,9k</td><td class="crd-td">21,5k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td">Kuopio</td><td class="crd-td">Kuopio Savo; Kuopio Governorate</td><td class="crd-td">62,89, 27,68 (Finland)</td><td class="crd-td">1,2k</td><td class="crd-td">4,1k</td><td class="crd-td">10,2k</td><td class="crd-td">17,5k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td">Sankt-Michel</td><td class="crd-td">Mikkeli; Sankt-Mikhel</td><td class="crd-td">61,69, 27,27 (Finland)</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">3,4k</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td">Gamlakarleby</td><td class="crd-td">Kokkola; Gamla-Karleby</td><td class="crd-td">63,84, 23,13 (Finland)</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">4,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Urban settlements and benchmark population series in Interior &amp; Northern Finland Governorates: Vasa, Kuopio, Sankt-Michel &amp; Uleaborg (1815AD - 1917AD).</figcaption>
</figure>

# Kovno Governorate

Table \ref{tab:reg10-sites} lists the 5 catalogued settlements in Region 10 (10. Kovno Governorate (Ethnic Lithuania / Samogitia; 1843AD Creation, 1863AD Rising & Emigration)), where total regional population grew from 660k in 1815AD to 1 545k at the 1897AD Census and 1 840k in 1914AD (+178,8%), shifting to 1 320k in 1917AD (-28,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kovno</td><td class="crd-td">Kaunas; Kovna</td><td class="crd-td">54,90, 23,90 (Lithuania)</td><td class="crd-td">5,2k</td><td class="crd-td">22,5k</td><td class="crd-td">70,9k</td><td class="crd-td">91,4k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td">Shavli</td><td class="crd-td">Siauliai; Szawle</td><td class="crd-td">55,93, 23,31 (Lithuania)</td><td class="crd-td">2,2k</td><td class="crd-td">6,1k</td><td class="crd-td">16,1k</td><td class="crd-td">23,5k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td">Ponevezh</td><td class="crd-td">Panevezys; Poniewiez</td><td class="crd-td">55,73, 24,36 (Lithuania)</td><td class="crd-td">1,8k</td><td class="crd-td">5,9k</td><td class="crd-td">13k</td><td class="crd-td">17,8k</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td">Telshi</td><td class="crd-td">Telsiai; Telsze Samogitia</td><td class="crd-td">55,98, 22,25 (Lithuania)</td><td class="crd-td">1,5k</td><td class="crd-td">3,8k</td><td class="crd-td">6,2k</td><td class="crd-td">8,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td">Vilkomir</td><td class="crd-td">Ukmerge; Wilkomierz</td><td class="crd-td">55,25, 24,76 (Lithuania)</td><td class="crd-td">3,1k</td><td class="crd-td">7,3k</td><td class="crd-td">13,5k</td><td class="crd-td">16,8k</td><td class="crd-td">10,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Urban settlements and benchmark population series in Kovno Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Vilna & Grodno Governorates

Table \ref{tab:reg11-sites} lists the 6 catalogued settlements in Region 11 (11. Vilna & Grodno Governorates (Vilnius, Bialystok Textile Hub & Pale Urban Shtetls)), where total regional population grew from 1 145k in 1815AD to 3 195k at the 1897AD Census and 3 940k in 1914AD (+244,1%), shifting to 2 880k in 1917AD (-26,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg11-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Vilna</td><td class="crd-td">Vilnius; Wilno</td><td class="crd-td">54,69, 25,28 (Lithuania)</td><td class="crd-td">32k</td><td class="crd-td">58,2k</td><td class="crd-td">154,5k</td><td class="crd-td">204,3k</td><td class="crd-td">138,9k</td></tr>
<tr><td class="crd-td">Bialystok</td><td class="crd-td">Belostok; Bialystok Grodno Gub</td><td class="crd-td">53,13, 23,17 (Poland)</td><td class="crd-td">6,2k</td><td class="crd-td">16,2k</td><td class="crd-td">66k</td><td class="crd-td">91,5k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td">Grodno</td><td class="crd-td">Hrodna; Gardinas</td><td class="crd-td">53,67, 23,81 (Belarus)</td><td class="crd-td">7,2k</td><td class="crd-td">19,2k</td><td class="crd-td">46,9k</td><td class="crd-td">61,6k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td">Brest-Litovsk</td><td class="crd-td">Brest; Brisk</td><td class="crd-td">52,10, 23,73 (Belarus)</td><td class="crd-td">6,4k</td><td class="crd-td">19,3k</td><td class="crd-td">46,6k</td><td class="crd-td">57,4k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td">Slonim</td><td class="crd-td">Slonim Grodno; Slonim Pale</td><td class="crd-td">53,09, 25,32 (Belarus)</td><td class="crd-td">3,8k</td><td class="crd-td">9,8k</td><td class="crd-td">15,9k</td><td class="crd-td">21,2k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td">Lida</td><td class="crd-td">Lida Vilna Gub; Lyda</td><td class="crd-td">53,89, 25,30 (Belarus)</td><td class="crd-td">1,8k</td><td class="crd-td">4,4k</td><td class="crd-td">9,3k</td><td class="crd-td">14,8k</td><td class="crd-td">11,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Urban settlements and benchmark population series in Vilna &amp; Grodno Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Minsk Governorate & Pripyat Polesia

Table \ref{tab:reg12-sites} lists the 6 catalogued settlements in Region 12 (12. Minsk Governorate & Pripyat Polesia (Central Belarus / Pale of Settlement)), where total regional population grew from 920k in 1815AD to 2 148k at the 1897AD Census and 3 040k in 1914AD (+230,4%), shifting to 2 890k in 1917AD (-4,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg12-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Minsk</td><td class="crd-td">Mensk; Miensk</td><td class="crd-td">53,90, 27,56 (Belarus)</td><td class="crd-td">13,2k</td><td class="crd-td">26,7k</td><td class="crd-td">90,9k</td><td class="crd-td">117,6k</td><td class="crd-td">134k</td></tr>
<tr><td class="crd-td">Bobruisk</td><td class="crd-td">Babruysk; Bobrujsk Fortress</td><td class="crd-td">53,14, 29,22 (Belarus)</td><td class="crd-td">5,4k</td><td class="crd-td">19,5k</td><td class="crd-td">34,3k</td><td class="crd-td">44,2k</td><td class="crd-td">46,5k</td></tr>
<tr><td class="crd-td">Pinsk</td><td class="crd-td">Pinsk Polesia; Pinska</td><td class="crd-td">52,11, 26,10 (Belarus)</td><td class="crd-td">5,8k</td><td class="crd-td">12,9k</td><td class="crd-td">28,4k</td><td class="crd-td">38,6k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td">Baranovichi</td><td class="crd-td">Baranavichy; Baranowicze Junction</td><td class="crd-td">53,13, 26,01 (Belarus)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,7k</td><td class="crd-td">30,5k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td">Borisov</td><td class="crd-td">Barysaw; Borisow</td><td class="crd-td">54,22, 28,51 (Belarus)</td><td class="crd-td">3,9k</td><td class="crd-td">7,1k</td><td class="crd-td">15,1k</td><td class="crd-td">21,5k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td">Mozyr</td><td class="crd-td">Mazyr; Mozyr Pripyat</td><td class="crd-td">52,05, 29,25 (Belarus)</td><td class="crd-td">2,8k</td><td class="crd-td">5,8k</td><td class="crd-td">8,1k</td><td class="crd-td">12,4k</td><td class="crd-td">12,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Urban settlements and benchmark population series in Minsk Governorate &amp; Pripyat Polesia (1815AD - 1917AD).</figcaption>
</figure>

# Vitebsk & Mogilev Governorates

Table \ref{tab:reg13-sites} lists the 6 catalogued settlements in Region 13 (13. Vitebsk & Mogilev Governorates (Upper Dvina-Dnieper & Latgalian Uezds)), where total regional population grew from 1 245k in 1815AD to 3 176k at the 1897AD Census and 4 020k in 1914AD (+222,9%), shifting to 3 860k in 1917AD (-4,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rowland1986; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg13-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Dvinsk</td><td class="crd-td">Daugavpils; Dinaburg</td><td class="crd-td">55,87, 26,54 (Latvia)</td><td class="crd-td">4,2k</td><td class="crd-td">25,7k</td><td class="crd-td">69,7k</td><td class="crd-td">112,8k</td><td class="crd-td">68,5k</td></tr>
<tr><td class="crd-td">Vitebsk</td><td class="crd-td">Vitsebsk; Witebsk</td><td class="crd-td">55,19, 30,20 (Belarus)</td><td class="crd-td">14,5k</td><td class="crd-td">29,8k</td><td class="crd-td">65,9k</td><td class="crd-td">108,9k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td">Mogilev</td><td class="crd-td">Mahilyow; Mogilev Stavka</td><td class="crd-td">53,90, 30,33 (Belarus)</td><td class="crd-td">16,8k</td><td class="crd-td">31,2k</td><td class="crd-td">43,1k</td><td class="crd-td">69,7k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td">Gomel</td><td class="crd-td">Homyel; Homel Mogilev Gub</td><td class="crd-td">52,43, 30,98 (Belarus)</td><td class="crd-td">5,8k</td><td class="crd-td">15,4k</td><td class="crd-td">36,8k</td><td class="crd-td">104,5k</td><td class="crd-td">106,8k</td></tr>
<tr><td class="crd-td">Polotsk</td><td class="crd-td">Polatsk; Polock</td><td class="crd-td">55,49, 28,79 (Belarus)</td><td class="crd-td">7,2k</td><td class="crd-td">12,2k</td><td class="crd-td">20,3k</td><td class="crd-td">31,1k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td">Rezhitsa</td><td class="crd-td">Rezekne; Rositten Latgale</td><td class="crd-td">56,51, 27,33 (Latvia)</td><td class="crd-td">1,6k</td><td class="crd-td">5,4k</td><td class="crd-td">10,8k</td><td class="crd-td">21,8k</td><td class="crd-td">16,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 13.</span> Urban settlements and benchmark population series in Vitebsk &amp; Mogilev Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Austro-Hungarian Eastern Galicia

Table \ref{tab:reg14-sites} lists the 6 catalogued settlements in Region 14 (14. Austro-Hungarian Eastern Galicia (Lemberg/Lviv, Boryslav Oil Basin & Overseas Emigration)), where total regional population grew from 2 580k in 1815AD to 4 420k at the 1897AD Census and 5 020k in 1914AD (+94,6%), shifting to 4 450k in 1917AD (-11,4% across 1914-1917AD) [@OsterreichischeStatistik1912; @MagyarStatisztika1912; @Himka1988; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg14-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Lemberg</td><td class="crd-td">Lviv; Lwow</td><td class="crd-td">49,84, 24,03 (Ukraine)</td><td class="crd-td">44,5k</td><td class="crd-td">70,4k</td><td class="crd-td">152k</td><td class="crd-td">212k</td><td class="crd-td">178k</td></tr>
<tr><td class="crd-td">Tarnopol</td><td class="crd-td">Ternopil; Tarnopol Galicia</td><td class="crd-td">49,55, 25,59 (Ukraine)</td><td class="crd-td">9,8k</td><td class="crd-td">17,8k</td><td class="crd-td">29,6k</td><td class="crd-td">35,2k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td">Stanislau</td><td class="crd-td">Ivano-Frankivsk; Stanislawow</td><td class="crd-td">48,92, 24,71 (Ukraine)</td><td class="crd-td">7,2k</td><td class="crd-td">13,4k</td><td class="crd-td">29,2k</td><td class="crd-td">36,8k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td">Drohobych</td><td class="crd-td">Drogobych; Drohobycz</td><td class="crd-td">49,35, 23,51 (Ukraine)</td><td class="crd-td">7,6k</td><td class="crd-td">14,1k</td><td class="crd-td">19,1k</td><td class="crd-td">36,5k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td">Boryslav</td><td class="crd-td">Boryslaw; Tustanowice Oilfield</td><td class="crd-td">49,29, 23,42 (Ukraine)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">12,2k</td><td class="crd-td">16,8k</td><td class="crd-td">13,5k</td></tr>
<tr><td class="crd-td">Kolomyia</td><td class="crd-td">Kolomea; Kolomyja</td><td class="crd-td">48,53, 25,04 (Ukraine)</td><td class="crd-td">8,4k</td><td class="crd-td">15,8k</td><td class="crd-td">33,2k</td><td class="crd-td">43,8k</td><td class="crd-td">34k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 14.</span> Urban settlements and benchmark population series in Austro-Hungarian Eastern Galicia (1815AD - 1917AD).</figcaption>
</figure>

# Austro-Hungarian Bukovina

Table \ref{tab:reg15-sites} lists the 5 catalogued settlements in Region 15 (15. Austro-Hungarian Bukovina (Czernowitz) & Hungarian Subcarpathian Rus (Uzhhorod/Mukachevo)), where total regional population grew from 770k in 1815AD to 1 400k at the 1897AD Census and 1 630k in 1914AD (+111,7%), shifting to 1 500k in 1917AD (-8,0% across 1914-1917AD) [@OsterreichischeStatistik1912; @MagyarStatisztika1912; @Himka1988; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg15-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Czernowitz</td><td class="crd-td">Chernivtsi; Cernauti</td><td class="crd-td">48,29, 25,94 (Ukraine)</td><td class="crd-td">7,2k</td><td class="crd-td">26,3k</td><td class="crd-td">65,4k</td><td class="crd-td">94k</td><td class="crd-td">76k</td></tr>
<tr><td class="crd-td">Ungvar</td><td class="crd-td">Uzhhorod; Uzhgorod</td><td class="crd-td">48,62, 22,29 (Ukraine)</td><td class="crd-td">4,8k</td><td class="crd-td">9,1k</td><td class="crd-td">14,3k</td><td class="crd-td">17,6k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td">Munkacs</td><td class="crd-td">Mukachevo; Mukacheve</td><td class="crd-td">48,44, 22,72 (Ukraine)</td><td class="crd-td">4,1k</td><td class="crd-td">8,2k</td><td class="crd-td">13,9k</td><td class="crd-td">18,2k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td">Beregszasz</td><td class="crd-td">Berehove; Beregovo</td><td class="crd-td">48,21, 22,64 (Ukraine)</td><td class="crd-td">2,9k</td><td class="crd-td">5,8k</td><td class="crd-td">9,4k</td><td class="crd-td">13,2k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td">Huszt</td><td class="crd-td">Khust; Maramaros Huszt</td><td class="crd-td">48,18, 23,30 (Ukraine)</td><td class="crd-td">2,7k</td><td class="crd-td">5,3k</td><td class="crd-td">8,5k</td><td class="crd-td">10,9k</td><td class="crd-td">10,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 15.</span> Urban settlements and benchmark population series in Austro-Hungarian Bukovina (1815AD - 1917AD).</figcaption>
</figure>

# Bessarabia Governorate

Table \ref{tab:reg16-sites} lists the 6 catalogued settlements in Region 16 (16. Bessarabia Governorate (Kishinev/Chisinau, 1856-78AD Cahul-Ismail Shift & 1903AD Pogrom)), where total regional population grew from 385k in 1815AD to 1 935k at the 1897AD Census and 2 660k in 1914AD (+590,9%), shifting to 2 620k in 1917AD (-1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg16-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kishinev</td><td class="crd-td">Chisinau; Kishinyov</td><td class="crd-td">47,01, 28,86 (Moldova)</td><td class="crd-td">14,5k</td><td class="crd-td">85,2k</td><td class="crd-td">108,5k</td><td class="crd-td">128,7k</td><td class="crd-td">131k</td></tr>
<tr><td class="crd-td">Bender</td><td class="crd-td">Bendery; Tighina</td><td class="crd-td">46,83, 29,47 (Moldova)</td><td class="crd-td">6,8k</td><td class="crd-td">21,4k</td><td class="crd-td">31,8k</td><td class="crd-td">38,6k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td">Akkerman</td><td class="crd-td">Bilhorod-Dnistrovskyi; Cetatea Alba</td><td class="crd-td">46,20, 30,34 (Ukraine)</td><td class="crd-td">8,2k</td><td class="crd-td">22,8k</td><td class="crd-td">28,3k</td><td class="crd-td">39,8k</td><td class="crd-td">40,2k</td></tr>
<tr><td class="crd-td">Ismail</td><td class="crd-td">Izmail; Tuchkov</td><td class="crd-td">45,35, 28,83 (Ukraine)</td><td class="crd-td">9,5k</td><td class="crd-td">21,2k</td><td class="crd-td">22,3k</td><td class="crd-td">35,7k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td">Beltsy</td><td class="crd-td">Balti; Beltsy Bessarabia</td><td class="crd-td">47,76, 27,93 (Moldova)</td><td class="crd-td">2,4k</td><td class="crd-td">8,9k</td><td class="crd-td">18,5k</td><td class="crd-td">31,2k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td">Khotin</td><td class="crd-td">Khotyn; Hotin</td><td class="crd-td">48,51, 26,49 (Ukraine)</td><td class="crd-td">5,2k</td><td class="crd-td">13,6k</td><td class="crd-td">18,4k</td><td class="crd-td">24,5k</td><td class="crd-td">21,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 16.</span> Urban settlements and benchmark population series in Bessarabia Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Volhynia Governorate

Table \ref{tab:reg17-sites} lists the 5 catalogued settlements in Region 17 (17. Volhynia Governorate (Southwestern Krai / Pale of Settlement)), where total regional population grew from 1 520k in 1815AD to 2 989k at the 1897AD Census and 4 120k in 1914AD (+171,1%), shifting to 3 680k in 1917AD (-10,7% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg17-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Zhitomir</td><td class="crd-td">Zhytomyr; Zytomierz</td><td class="crd-td">50,25, 28,66 (Ukraine)</td><td class="crd-td">10,8k</td><td class="crd-td">36,8k</td><td class="crd-td">65,9k</td><td class="crd-td">92,6k</td><td class="crd-td">89,4k</td></tr>
<tr><td class="crd-td">Rovno</td><td class="crd-td">Rivne; Rowne</td><td class="crd-td">50,62, 26,25 (Ukraine)</td><td class="crd-td">3,4k</td><td class="crd-td">6,1k</td><td class="crd-td">24,6k</td><td class="crd-td">36,8k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td">Kovel</td><td class="crd-td">Kowel; Kovel Junction</td><td class="crd-td">51,21, 24,71 (Ukraine)</td><td class="crd-td">2,8k</td><td class="crd-td">4,9k</td><td class="crd-td">17,7k</td><td class="crd-td">29,2k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td">Lutsk</td><td class="crd-td">Luck; Lutsk Volhynia</td><td class="crd-td">50,75, 25,33 (Ukraine)</td><td class="crd-td">3,6k</td><td class="crd-td">7,1k</td><td class="crd-td">15,8k</td><td class="crd-td">28,1k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td">Kremenets</td><td class="crd-td">Krzemieniec; Kremenets Volhynia</td><td class="crd-td">50,10, 25,73 (Ukraine)</td><td class="crd-td">6,8k</td><td class="crd-td">11,4k</td><td class="crd-td">17,7k</td><td class="crd-td">22,4k</td><td class="crd-td">19,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 17.</span> Urban settlements and benchmark population series in Volhynia Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Podolia Governorate

Table \ref{tab:reg18-sites} lists the 5 catalogued settlements in Region 18 (18. Podolia Governorate (Southwestern Krai / Pale of Settlement)), where total regional population grew from 1 440k in 1815AD to 3 018k at the 1897AD Census and 3 980k in 1914AD (+176,4%), shifting to 3 820k in 1917AD (-4,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg18-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kamenets-Podolsky</td><td class="crd-td">Kamianets-Podilskyi; Kamieniec Podolski</td><td class="crd-td">48,68, 26,59 (Ukraine)</td><td class="crd-td">11,2k</td><td class="crd-td">20,8k</td><td class="crd-td">35,9k</td><td class="crd-td">50,5k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td">Vinnitsa</td><td class="crd-td">Vinnytsia; Winnica</td><td class="crd-td">49,23, 28,47 (Ukraine)</td><td class="crd-td">4,8k</td><td class="crd-td">10,9k</td><td class="crd-td">30,6k</td><td class="crd-td">53,8k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td">Proskurov</td><td class="crd-td">Khmelnytskyi; Ploskyriv</td><td class="crd-td">49,42, 26,99 (Ukraine)</td><td class="crd-td">3,1k</td><td class="crd-td">7,8k</td><td class="crd-td">22,9k</td><td class="crd-td">40,6k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td">Balta</td><td class="crd-td">Balta Podolia; Balta Fair Town</td><td class="crd-td">47,94, 29,62 (Ukraine)</td><td class="crd-td">6,4k</td><td class="crd-td">14,6k</td><td class="crd-td">23,4k</td><td class="crd-td">28,9k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td">Mogilev-Podolsky</td><td class="crd-td">Mohyliv-Podilskyi; Mogilev on Dniester</td><td class="crd-td">48,45, 27,80 (Ukraine)</td><td class="crd-td">7,1k</td><td class="crd-td">13,4k</td><td class="crd-td">22,3k</td><td class="crd-td">32,6k</td><td class="crd-td">31,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 18.</span> Urban settlements and benchmark population series in Podolia Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Kyiv Governorate

Table \ref{tab:reg19-sites} lists the 5 catalogued settlements in Region 19 (19. Kyiv Governorate (Sugar-Beet Agro-Industrial Core & Kyiv Metropolis)), where total regional population grew from 940k in 1815AD to 3 559k at the 1897AD Census and 4 780k in 1914AD (+408,5%), shifting to 4 840k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Perlmann2006PaleEmigration; @Gatrell1999].

<figure class="crd-table-figure" id="tab:reg19-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kyiv</td><td class="crd-td">Kiev; Kijow</td><td class="crd-td">50,45, 30,52 (Ukraine)</td><td class="crd-td">23,5k</td><td class="crd-td">62,5k</td><td class="crd-td">247,7k</td><td class="crd-td">626,3k</td><td class="crd-td">644k</td></tr>
<tr><td class="crd-td">Berdichev</td><td class="crd-td">Berdychiv; Berdyczow</td><td class="crd-td">49,89, 28,60 (Ukraine)</td><td class="crd-td">16,5k</td><td class="crd-td">51,8k</td><td class="crd-td">53,4k</td><td class="crd-td">79,1k</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td">Bila Tserkva</td><td class="crd-td">Belaya Tserkov; Biala Cerkiew</td><td class="crd-td">49,80, 30,12 (Ukraine)</td><td class="crd-td">6,8k</td><td class="crd-td">14,8k</td><td class="crd-td">35,4k</td><td class="crd-td">60,5k</td><td class="crd-td">61,2k</td></tr>
<tr><td class="crd-td">Uman</td><td class="crd-td">Human; Uman Kyiv Gub</td><td class="crd-td">48,75, 30,22 (Ukraine)</td><td class="crd-td">6,2k</td><td class="crd-td">14,4k</td><td class="crd-td">31k</td><td class="crd-td">50,2k</td><td class="crd-td">50,8k</td></tr>
<tr><td class="crd-td">Cherkassy</td><td class="crd-td">Cherkasy; Czerkasy</td><td class="crd-td">49,44, 32,06 (Ukraine)</td><td class="crd-td">5,4k</td><td class="crd-td">13,5k</td><td class="crd-td">29,6k</td><td class="crd-td">43,8k</td><td class="crd-td">44,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 19.</span> Urban settlements and benchmark population series in Kyiv Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Little Russian Governorates: Chernigov & Poltava

Table \ref{tab:reg20-sites} lists the 6 catalogued settlements in Region 20 (20. Little Russian Governorates: Chernigov & Poltava (Agrarian Overpopulation & Stolypin Source)), where total regional population grew from 3 350k in 1815AD to 5 076k at the 1897AD Census and 6 650k in 1914AD (+98,5%), shifting to 6 720k in 1917AD (+1,1% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

<figure class="crd-table-figure" id="tab:reg20-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kremenchug</td><td class="crd-td">Kremenchuk; Kremenchug Kryukov</td><td class="crd-td">49,07, 33,42 (Ukraine)</td><td class="crd-td">9,2k</td><td class="crd-td">23,2k</td><td class="crd-td">63k</td><td class="crd-td">98,7k</td><td class="crd-td">99,5k</td></tr>
<tr><td class="crd-td">Poltava</td><td class="crd-td">Poltava Governorate; Pultawa</td><td class="crd-td">49,59, 34,55 (Ukraine)</td><td class="crd-td">10,4k</td><td class="crd-td">24,6k</td><td class="crd-td">53,7k</td><td class="crd-td">83,5k</td><td class="crd-td">85,2k</td></tr>
<tr><td class="crd-td">Chernigov</td><td class="crd-td">Chernihiv; Czernihow</td><td class="crd-td">51,50, 31,29 (Ukraine)</td><td class="crd-td">7,6k</td><td class="crd-td">15,2k</td><td class="crd-td">27,7k</td><td class="crd-td">38,4k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td">Nezhin</td><td class="crd-td">Nizhyn; Niezyn</td><td class="crd-td">51,05, 31,89 (Ukraine)</td><td class="crd-td">14,2k</td><td class="crd-td">19,4k</td><td class="crd-td">32,1k</td><td class="crd-td">52,4k</td><td class="crd-td">53k</td></tr>
<tr><td class="crd-td">Konotop</td><td class="crd-td">Konotop Rail Hub; Konotop Chernigov</td><td class="crd-td">51,24, 33,20 (Ukraine)</td><td class="crd-td">5,8k</td><td class="crd-td">9,6k</td><td class="crd-td">18,8k</td><td class="crd-td">28,6k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td">Romny</td><td class="crd-td">Romny Fair; Romen</td><td class="crd-td">50,75, 33,47 (Ukraine)</td><td class="crd-td">5,4k</td><td class="crd-td">9,2k</td><td class="crd-td">22,5k</td><td class="crd-td">35,8k</td><td class="crd-td">36,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 20.</span> Urban settlements and benchmark population series in Little Russian Governorates: Chernigov &amp; Poltava (1815AD - 1917AD).</figcaption>
</figure>

# Kharkov Governorate

Table \ref{tab:reg21-sites} lists the 5 catalogued settlements in Region 21 (21. Kharkov Governorate (Sloboda Ukraine & Kharkov Rail-University Hub)), where total regional population grew from 1 100k in 1815AD to 2 492k at the 1897AD Census and 3 440k in 1914AD (+212,7%), shifting to 3 510k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

<figure class="crd-table-figure" id="tab:reg21-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kharkov</td><td class="crd-td">Kharkiv; Sloboda Capital</td><td class="crd-td">49,99, 36,23 (Ukraine)</td><td class="crd-td">14,8k</td><td class="crd-td">50,3k</td><td class="crd-td">174k</td><td class="crd-td">258k</td><td class="crd-td">285k</td></tr>
<tr><td class="crd-td">Sumy</td><td class="crd-td">Sumy Sugar Hub; Sumy Sloboda</td><td class="crd-td">50,91, 34,80 (Ukraine)</td><td class="crd-td">10,8k</td><td class="crd-td">14,2k</td><td class="crd-td">27,6k</td><td class="crd-td">50,4k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td">Akhtyrka</td><td class="crd-td">Okhtyrka; Akhtyrka Sloboda</td><td class="crd-td">50,31, 34,90 (Ukraine)</td><td class="crd-td">12,6k</td><td class="crd-td">16,8k</td><td class="crd-td">23,4k</td><td class="crd-td">31,8k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td">Slavyansk</td><td class="crd-td">Sloviansk; Tor Salt Works</td><td class="crd-td">48,85, 37,61 (Ukraine)</td><td class="crd-td">4,9k</td><td class="crd-td">9,6k</td><td class="crd-td">15,8k</td><td class="crd-td">25,4k</td><td class="crd-td">26,1k</td></tr>
<tr><td class="crd-td">Izyum</td><td class="crd-td">Izium; Izyum Donets</td><td class="crd-td">49,21, 37,26 (Ukraine)</td><td class="crd-td">5,6k</td><td class="crd-td">9,8k</td><td class="crd-td">13k</td><td class="crd-td">19,6k</td><td class="crd-td">20,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 21.</span> Urban settlements and benchmark population series in Kharkov Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Kherson Governorate

Table \ref{tab:reg22-sites} lists the 5 catalogued settlements in Region 22 (22. Kherson Governorate (Odessa Grain Port: 630k in 1914AD & Nikolaev Naval Shipyards)), where total regional population grew from 620k in 1815AD to 2 734k at the 1897AD Census and 3 750k in 1914AD (+504,8%), shifting to 3 780k in 1917AD (+0,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

<figure class="crd-table-figure" id="tab:reg22-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Odessa</td><td class="crd-td">Odesa; Khadzhibey</td><td class="crd-td">46,48, 30,72 (Ukraine)</td><td class="crd-td">35k</td><td class="crd-td">114,2k</td><td class="crd-td">403,8k</td><td class="crd-td">630k</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td">Nikolaev</td><td class="crd-td">Mykolaiv; Black Sea Shipyard</td><td class="crd-td">46,98, 31,99 (Ukraine)</td><td class="crd-td">11,5k</td><td class="crd-td">44,2k</td><td class="crd-td">92k</td><td class="crd-td">108,8k</td><td class="crd-td">116k</td></tr>
<tr><td class="crd-td">Elisavetgrad</td><td class="crd-td">Kropyvnytskyi; Zinovievsk</td><td class="crd-td">48,51, 32,26 (Ukraine)</td><td class="crd-td">10,2k</td><td class="crd-td">25,4k</td><td class="crd-td">61,5k</td><td class="crd-td">78,2k</td><td class="crd-td">79,4k</td></tr>
<tr><td class="crd-td">Kherson</td><td class="crd-td">Kherson Port; Kherson Governorate</td><td class="crd-td">46,64, 32,62 (Ukraine)</td><td class="crd-td">14,2k</td><td class="crd-td">40,4k</td><td class="crd-td">59,1k</td><td class="crd-td">98,6k</td><td class="crd-td">99,2k</td></tr>
<tr><td class="crd-td">Tiraspol</td><td class="crd-td">Tiraspol Dniester; Tiraspol Kherson Gub</td><td class="crd-td">46,84, 29,64 (Moldova)</td><td class="crd-td">4,2k</td><td class="crd-td">10,2k</td><td class="crd-td">31,6k</td><td class="crd-td">37,8k</td><td class="crd-td">38,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 22.</span> Urban settlements and benchmark population series in Kherson Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Ekaterinoslav Governorate

Table \ref{tab:reg23-sites} lists the 7 catalogued settlements in Region 23 (23. Ekaterinoslav Governorate (Dnieper Bend, Krivoy Rog Iron & Yuzovka-Donbas Coal Boom)), where total regional population grew from 820k in 1815AD to 2 114k at the 1897AD Census and 3 450k in 1914AD (+320,7%), shifting to 3 580k in 1917AD (+3,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

<figure class="crd-table-figure" id="tab:reg23-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Ekaterinoslav</td><td class="crd-td">Dnipro; Dnipropetrovsk</td><td class="crd-td">48,46, 35,05 (Ukraine)</td><td class="crd-td">6,8k</td><td class="crd-td">18,9k</td><td class="crd-td">112,8k</td><td class="crd-td">220,4k</td><td class="crd-td">231k</td></tr>
<tr><td class="crd-td">Yuzovka</td><td class="crd-td">Donetsk; Hughesovka</td><td class="crd-td">48,02, 37,80 (Ukraine)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,1k</td><td class="crd-td">54k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td">Lugansk</td><td class="crd-td">Luhansk; Lugansky Zavod</td><td class="crd-td">48,57, 39,31 (Ukraine)</td><td class="crd-td">2,4k</td><td class="crd-td">8,6k</td><td class="crd-td">20,4k</td><td class="crd-td">68k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td">Mariupol</td><td class="crd-td">Mariupol Azov Port; Mariupol Metallurgical</td><td class="crd-td">47,10, 37,54 (Ukraine)</td><td class="crd-td">3,1k</td><td class="crd-td">5,9k</td><td class="crd-td">31,1k</td><td class="crd-td">58k</td><td class="crd-td">61,2k</td></tr>
<tr><td class="crd-td">Krivoy Rog</td><td class="crd-td">Kryvyi Rih; Krivbass Iron</td><td class="crd-td">47,91, 33,39 (Ukraine)</td><td class="crd-td">2,2k</td><td class="crd-td">3,8k</td><td class="crd-td">15,4k</td><td class="crd-td">26,8k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td">Aleksandrovsk</td><td class="crd-td">Zaporizhzhia; Alexandrovsk</td><td class="crd-td">47,84, 35,14 (Ukraine)</td><td class="crd-td">2,1k</td><td class="crd-td">4,6k</td><td class="crd-td">18,8k</td><td class="crd-td">53,4k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td">Bakhmut</td><td class="crd-td">Artemovsk; Bakhmut Salt-Coal</td><td class="crd-td">48,60, 38,00 (Ukraine)</td><td class="crd-td">3,8k</td><td class="crd-td">9,8k</td><td class="crd-td">19,3k</td><td class="crd-td">33,5k</td><td class="crd-td">34,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 23.</span> Urban settlements and benchmark population series in Ekaterinoslav Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Taurida Governorate

Table \ref{tab:reg24-sites} lists the 6 catalogued settlements in Region 24 (24. Taurida Governorate (Crimean Peninsula, 1854-55AD Crimean War, Tatar Exodus & Tavria Steppe)), where total regional population grew from 370k in 1815AD to 1 448k at the 1897AD Census and 2 060k in 1914AD (+456,8%), shifting to 2 080k in 1917AD (+1,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Friedgut1989].

<figure class="crd-table-figure" id="tab:reg24-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Sevastopol</td><td class="crd-td">Sebastopol; Akhtiar Naval Base</td><td class="crd-td">44,62, 33,53 (Ukraine)</td><td class="crd-td">18,5k</td><td class="crd-td">11,2k</td><td class="crd-td">53,6k</td><td class="crd-td">77,5k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td">Simferopol</td><td class="crd-td">Aqmescit; Taurida Capital</td><td class="crd-td">44,95, 34,10 (Ukraine)</td><td class="crd-td">4,2k</td><td class="crd-td">15,8k</td><td class="crd-td">49,1k</td><td class="crd-td">81,2k</td><td class="crd-td">84,5k</td></tr>
<tr><td class="crd-td">Kerch</td><td class="crd-td">Kerch-Yenikale; Panticapaeum</td><td class="crd-td">45,36, 36,47 (Ukraine)</td><td class="crd-td">2,8k</td><td class="crd-td">13,4k</td><td class="crd-td">33,3k</td><td class="crd-td">55,8k</td><td class="crd-td">56,4k</td></tr>
<tr><td class="crd-td">Berdyansk</td><td class="crd-td">Berdiansk; Berdyansk Azov Port</td><td class="crd-td">46,76, 36,80 (Ukraine)</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">26,5k</td><td class="crd-td">40,2k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td">Melitopol</td><td class="crd-td">Novoaleksandrovka; Melitopol Tavria</td><td class="crd-td">46,85, 35,37 (Ukraine)</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">15,5k</td><td class="crd-td">23,6k</td><td class="crd-td">24,2k</td></tr>
<tr><td class="crd-td">Feodosiya</td><td class="crd-td">Theodosia; Kefe</td><td class="crd-td">45,03, 35,38 (Ukraine)</td><td class="crd-td">3,6k</td><td class="crd-td">8,4k</td><td class="crd-td">24,1k</td><td class="crd-td">43,1k</td><td class="crd-td">43,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 24.</span> Urban settlements and benchmark population series in Taurida Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Saint Petersburg Governorate

Table \ref{tab:reg25-sites} lists the 5 catalogued settlements in Region 25 (25. Saint Petersburg Governorate (2,12M Imperial Capital in 1914AD & Putilov Industrial Core)), where total regional population grew from 760k in 1815AD to 2 112k at the 1897AD Census and 3 150k in 1914AD (+314,5%), shifting to 3 380k in 1917AD (+7,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Saint Petersburg</td><td class="crd-td">Petrograd; Sankt-Peterburg</td><td class="crd-td">59,93, 30,34 (Russia)</td><td class="crd-td">385k</td><td class="crd-td">520,1k</td><td class="crd-td">1,26M</td><td class="crd-td">2,12M</td><td class="crd-td">2,30M</td></tr>
<tr><td class="crd-td">Kronstadt</td><td class="crd-td">Kronshtadt; Baltic Fleet Base</td><td class="crd-td">59,99, 29,77 (Russia)</td><td class="crd-td">28k</td><td class="crd-td">48,4k</td><td class="crd-td">59,5k</td><td class="crd-td">68,2k</td><td class="crd-td">74,5k</td></tr>
<tr><td class="crd-td">Tsarskoe Selo</td><td class="crd-td">Pushkin; Detskoe Selo</td><td class="crd-td">59,72, 30,40 (Russia)</td><td class="crd-td">8,2k</td><td class="crd-td">14,1k</td><td class="crd-td">22,5k</td><td class="crd-td">31,8k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td">Gatchina</td><td class="crd-td">Gatchina Palace; Trotsk</td><td class="crd-td">59,57, 30,13 (Russia)</td><td class="crd-td">4,8k</td><td class="crd-td">9,1k</td><td class="crd-td">14,8k</td><td class="crd-td">21,5k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td">Luga</td><td class="crd-td">Luga Ingria; Luga St Petersburg</td><td class="crd-td">58,74, 29,85 (Russia)</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">5,6k</td><td class="crd-td">11,2k</td><td class="crd-td">12,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 25.</span> Urban settlements and benchmark population series in Saint Petersburg Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Novgorod, Pskov & Olonets Governorates

Table \ref{tab:reg26-sites} lists the 6 catalogued settlements in Region 26 (26. Novgorod, Pskov & Olonets Governorates (Northwestern Lakes & Karelia)), where total regional population grew from 1 770k in 1815AD to 2 853k at the 1897AD Census and 3 580k in 1914AD (+102,3%), shifting to 3 680k in 1917AD (+2,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg26-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Pskov</td><td class="crd-td">Pleskov; Pskov Governorate</td><td class="crd-td">57,82, 28,33 (Russia)</td><td class="crd-td">9,8k</td><td class="crd-td">16,8k</td><td class="crd-td">30,5k</td><td class="crd-td">38,3k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td">Novgorod</td><td class="crd-td">Veliky Novgorod; Novgorod Governorate</td><td class="crd-td">58,52, 31,28 (Russia)</td><td class="crd-td">10,5k</td><td class="crd-td">17,5k</td><td class="crd-td">25,7k</td><td class="crd-td">28,4k</td><td class="crd-td">29,8k</td></tr>
<tr><td class="crd-td">Staraya Russa</td><td class="crd-td">Russa; Staraya Russa Spa</td><td class="crd-td">57,98, 31,37 (Russia)</td><td class="crd-td">6,4k</td><td class="crd-td">11,2k</td><td class="crd-td">15,2k</td><td class="crd-td">18,6k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td">Petrozavodsk</td><td class="crd-td">Olonets Capital; Petrovskaya Sloboda</td><td class="crd-td">61,78, 34,35 (Russia)</td><td class="crd-td">5,2k</td><td class="crd-td">10,8k</td><td class="crd-td">12,5k</td><td class="crd-td">18,8k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td">Velikie Luki</td><td class="crd-td">Velikiye Luki; Luki on Lovat</td><td class="crd-td">56,34, 30,55 (Russia)</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">8,5k</td><td class="crd-td">15,2k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td">Cherepovets</td><td class="crd-td">Cherepovets Mariinsk Canal; Cherepovets Novgorod</td><td class="crd-td">59,13, 37,90 (Russia)</td><td class="crd-td">1,5k</td><td class="crd-td">3,6k</td><td class="crd-td">6,9k</td><td class="crd-td">10,8k</td><td class="crd-td">12,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 26.</span> Urban settlements and benchmark population series in Novgorod, Pskov &amp; Olonets Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Arkhangelsk & Vologda Governorates

Table \ref{tab:reg27-sites} lists the 5 catalogued settlements in Region 27 (27. Arkhangelsk & Vologda Governorates (Pomorye, Murman Coast & Northern Peasantry)), where total regional population grew from 920k in 1815AD to 1 688k at the 1897AD Census and 2 220k in 1914AD (+141,3%), shifting to 2 280k in 1917AD (+2,7% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg27-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Vologda</td><td class="crd-td">Vologda Governorate; Vologda Rail Junction</td><td class="crd-td">59,22, 39,89 (Russia)</td><td class="crd-td">11,8k</td><td class="crd-td">17,9k</td><td class="crd-td">27,7k</td><td class="crd-td">43,8k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td">Arkhangelsk</td><td class="crd-td">Archangel; Pomorye Port</td><td class="crd-td">64,54, 40,52 (Russia)</td><td class="crd-td">13,5k</td><td class="crd-td">19,5k</td><td class="crd-td">20,9k</td><td class="crd-td">43,6k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td">Veliky Ustyug</td><td class="crd-td">Ustyug Veliky; Sukhona Port</td><td class="crd-td">60,76, 46,30 (Russia)</td><td class="crd-td">7,8k</td><td class="crd-td">9,1k</td><td class="crd-td">11,1k</td><td class="crd-td">18,2k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td">Ust-Sysolsk</td><td class="crd-td">Syktyvkar; Komi Ust-Sysolsk</td><td class="crd-td">61,67, 50,84 (Russia)</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k</td><td class="crd-td">6,2k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td">Romanov-on-Murman</td><td class="crd-td">Murmansk; Murman Terminus</td><td class="crd-td">68,97, 33,07 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 27.</span> Urban settlements and benchmark population series in Arkhangelsk &amp; Vologda Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Moscow Governorate

Table \ref{tab:reg28-sites} lists the 5 catalogued settlements in Region 28 (28. Moscow Governorate (1,76M Textile-Rail Metropolis in 1914AD)), where total regional population grew from 1 120k in 1815AD to 2 431k at the 1897AD Census and 3 560k in 1914AD (+217,9%), shifting to 3 820k in 1917AD (+7,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg28-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Moscow</td><td class="crd-td">Moskva; Second Imperial Capital</td><td class="crd-td">55,76, 37,62 (Russia)</td><td class="crd-td">251k</td><td class="crd-td">386,4k</td><td class="crd-td">1,04M</td><td class="crd-td">1,76M</td><td class="crd-td">1,85M</td></tr>
<tr><td class="crd-td">Serpukhov</td><td class="crd-td">Serpukhov Textile; Serpukhov Oka</td><td class="crd-td">54,92, 37,41 (Russia)</td><td class="crd-td">6,8k</td><td class="crd-td">15,2k</td><td class="crd-td">30,6k</td><td class="crd-td">41,5k</td><td class="crd-td">43,2k</td></tr>
<tr><td class="crd-td">Orekhovo-Zuevo</td><td class="crd-td">Morozov Mills; Nikolskoe-Orekhovo</td><td class="crd-td">55,81, 38,96 (Russia)</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">43,2k</td><td class="crd-td">69,8k</td><td class="crd-td">72,4k</td></tr>
<tr><td class="crd-td">Kolomna</td><td class="crd-td">Kolomna Locomotive Works; Kolomna Oka</td><td class="crd-td">55,08, 38,78 (Russia)</td><td class="crd-td">9,8k</td><td class="crd-td">16,2k</td><td class="crd-td">20,3k</td><td class="crd-td">34,6k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td">Bogorodsk</td><td class="crd-td">Noginsk; Bogorodsk Klyazma</td><td class="crd-td">55,85, 38,44 (Russia)</td><td class="crd-td">1,9k</td><td class="crd-td">5,4k</td><td class="crd-td">11,1k</td><td class="crd-td">25,6k</td><td class="crd-td">27,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 28.</span> Urban settlements and benchmark population series in Moscow Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk & Kaluga Governorates

Table \ref{tab:reg29-sites} lists the 8 catalogued settlements in Region 29 (29. Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk & Kaluga Governorates), where total regional population grew from 6 750k in 1815AD to 9 160k at the 1897AD Census and 11 520k in 1914AD (+70,7%), shifting to 11 880k in 1917AD (+3,1% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg29-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Yaroslavl</td><td class="crd-td">Yaroslavl Volga; Yaroslavl Governorate</td><td class="crd-td">57,63, 39,88 (Russia)</td><td class="crd-td">22,5k</td><td class="crd-td">36,2k</td><td class="crd-td">71,6k</td><td class="crd-td">120,4k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td">Ivanovo-Voznesensk</td><td class="crd-td">Ivanovo; Russian Manchester</td><td class="crd-td">57,00, 40,97 (Russia)</td><td class="crd-td">5,4k</td><td class="crd-td">14,8k</td><td class="crd-td">54,2k</td><td class="crd-td">146k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td">Tver</td><td class="crd-td">Kalinin; Tver Governorate</td><td class="crd-td">56,86, 35,92 (Russia)</td><td class="crd-td">17,5k</td><td class="crd-td">28,6k</td><td class="crd-td">53,5k</td><td class="crd-td">64,3k</td><td class="crd-td">68,5k</td></tr>
<tr><td class="crd-td">Smolensk</td><td class="crd-td">Smolensk Dnieper; Smolensk Governorate</td><td class="crd-td">54,78, 32,05 (Russia)</td><td class="crd-td">9,4k</td><td class="crd-td">21,2k</td><td class="crd-td">46,7k</td><td class="crd-td">75,8k</td><td class="crd-td">82,4k</td></tr>
<tr><td class="crd-td">Kaluga</td><td class="crd-td">Kaluga Oka; Kaluga Governorate</td><td class="crd-td">54,53, 36,28 (Russia)</td><td class="crd-td">23,2k</td><td class="crd-td">34,5k</td><td class="crd-td">49,5k</td><td class="crd-td">57,6k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td">Kostroma</td><td class="crd-td">Kostroma Textile; Kostroma Governorate</td><td class="crd-td">57,77, 40,93 (Russia)</td><td class="crd-td">12,4k</td><td class="crd-td">21,8k</td><td class="crd-td">41,4k</td><td class="crd-td">73,2k</td><td class="crd-td">74,8k</td></tr>
<tr><td class="crd-td">Vladimir</td><td class="crd-td">Vladimir Klyazma; Vladimir Governorate</td><td class="crd-td">56,13, 40,41 (Russia)</td><td class="crd-td">7,4k</td><td class="crd-td">14,4k</td><td class="crd-td">28,5k</td><td class="crd-td">43,5k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td">Rybinsk</td><td class="crd-td">Rybinsk Grain Port; Rybinsk Yaroslavl</td><td class="crd-td">58,05, 38,86 (Russia)</td><td class="crd-td">3,8k</td><td class="crd-td">11,8k</td><td class="crd-td">25,3k</td><td class="crd-td">33,4k</td><td class="crd-td">35,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 29.</span> Urban settlements and benchmark population series in the Central Industrial Ring governorates (1815AD - 1917AD).</figcaption>
</figure>

# Western Central Black-Earth Governorates: Kursk, Oryol & Tula

Table \ref{tab:reg30-sites} lists the 6 catalogued settlements in Region 30 (30. Western Central Black-Earth Governorates: Kursk, Oryol & Tula), where total regional population grew from 4 520k in 1815AD to 6 207k at the 1897AD Census and 7 980k in 1914AD (+76,5%), shifting to 8 180k in 1917AD (+2,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Tula</td><td class="crd-td">Tula Imperial Arsenal; Tula Governorate</td><td class="crd-td">54,20, 37,62 (Russia)</td><td class="crd-td">36,5k</td><td class="crd-td">57,8k</td><td class="crd-td">114,7k</td><td class="crd-td">140,6k</td><td class="crd-td">158k</td></tr>
<tr><td class="crd-td">Kursk</td><td class="crd-td">Kursk Governorate; Kursk Fair</td><td class="crd-td">51,74, 36,19 (Russia)</td><td class="crd-td">18,6k</td><td class="crd-td">38,2k</td><td class="crd-td">75,7k</td><td class="crd-td">89,8k</td><td class="crd-td">91,5k</td></tr>
<tr><td class="crd-td">Oryol</td><td class="crd-td">Orel; Oryol Governorate</td><td class="crd-td">52,97, 36,08 (Russia)</td><td class="crd-td">24,5k</td><td class="crd-td">37,4k</td><td class="crd-td">69,7k</td><td class="crd-td">97,2k</td><td class="crd-td">98,4k</td></tr>
<tr><td class="crd-td">Yelets</td><td class="crd-td">Elets; Yelets Grain Hub</td><td class="crd-td">52,62, 38,50 (Russia)</td><td class="crd-td">11,2k</td><td class="crd-td">27,4k</td><td class="crd-td">47k</td><td class="crd-td">58,4k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td">Bryansk</td><td class="crd-td">Bryansk Works; Bezhitsa-Bryansk</td><td class="crd-td">53,24, 34,36 (Russia)</td><td class="crd-td">5,8k</td><td class="crd-td">12,2k</td><td class="crd-td">24,8k</td><td class="crd-td">34,5k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td">Belgorod</td><td class="crd-td">Belgorod Kursk Gub; Belgorod Chalk</td><td class="crd-td">50,60, 36,59 (Russia)</td><td class="crd-td">8,8k</td><td class="crd-td">14,6k</td><td class="crd-td">26,6k</td><td class="crd-td">31,2k</td><td class="crd-td">31,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 30.</span> Urban settlements and benchmark population series in Western Central Black-Earth Governorates: Kursk, Oryol &amp; Tula (1815AD - 1917AD).</figcaption>
</figure>

# Eastern Central Black-Earth Governorates: Voronezh, Tambov & Ryazan

Table \ref{tab:reg31-sites} lists the 6 catalogued settlements in Region 31 (31. Eastern Central Black-Earth Governorates: Voronezh, Tambov & Ryazan), where total regional population grew from 5 120k in 1815AD to 7 037k at the 1897AD Census and 9 220k in 1914AD (+80,1%), shifting to 9 450k in 1917AD (+2,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg31-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Voronezh</td><td class="crd-td">Voronezh Don; Voronezh Governorate</td><td class="crd-td">51,67, 39,18 (Russia)</td><td class="crd-td">19,5k</td><td class="crd-td">40,2k</td><td class="crd-td">80,6k</td><td class="crd-td">94,8k</td><td class="crd-td">99,2k</td></tr>
<tr><td class="crd-td">Tambov</td><td class="crd-td">Tambov Governorate; Tambov Tsna</td><td class="crd-td">52,72, 41,45 (Russia)</td><td class="crd-td">14,2k</td><td class="crd-td">32,4k</td><td class="crd-td">48k</td><td class="crd-td">71,4k</td><td class="crd-td">73,5k</td></tr>
<tr><td class="crd-td">Kozlov</td><td class="crd-td">Michurinsk; Kozlov Rail Hub</td><td class="crd-td">52,90, 40,49 (Russia)</td><td class="crd-td">10,8k</td><td class="crd-td">24,6k</td><td class="crd-td">40,3k</td><td class="crd-td">53,2k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td">Ryazan</td><td class="crd-td">Pereyaslavl-Ryazansky; Ryazan Governorate</td><td class="crd-td">54,63, 39,69 (Russia)</td><td class="crd-td">11,5k</td><td class="crd-td">21,8k</td><td class="crd-td">46,1k</td><td class="crd-td">49,6k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td">Morshansk</td><td class="crd-td">Morshansk Tsna Port; Morshansk Tambov</td><td class="crd-td">53,44, 41,81 (Russia)</td><td class="crd-td">6,8k</td><td class="crd-td">16,4k</td><td class="crd-td">26,5k</td><td class="crd-td">31,8k</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td">Lipetsk</td><td class="crd-td">Lipetsk Ironworks; Lipetsk Spa</td><td class="crd-td">52,60, 39,57 (Russia)</td><td class="crd-td">5,9k</td><td class="crd-td">12,2k</td><td class="crd-td">20,5k</td><td class="crd-td">25,8k</td><td class="crd-td">26,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 31.</span> Urban settlements and benchmark population series in Eastern Central Black-Earth Governorates: Voronezh, Tambov &amp; Ryazan (1815AD - 1917AD).</figcaption>
</figure>

# Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk & Penza

Table \ref{tab:reg32-sites} lists the 6 catalogued settlements in Region 32 (32. Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk & Penza (1891-92AD Famine)), where total regional population grew from 4 280k in 1815AD to 6 755k at the 1897AD Census and 8 350k in 1914AD (+95,1%), shifting to 8 550k in 1917AD (+2,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg32-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Kazan</td><td class="crd-td">Qazan; Kazan University Hub</td><td class="crd-td">55,79, 49,12 (Russia)</td><td class="crd-td">35,2k</td><td class="crd-td">61,8k</td><td class="crd-td">130k</td><td class="crd-td">195,3k</td><td class="crd-td">206k</td></tr>
<tr><td class="crd-td">Nizhny Novgorod</td><td class="crd-td">Makaryev Fair; Nizhegorodskaya Yarmarka</td><td class="crd-td">56,30, 43,94 (Russia)</td><td class="crd-td">15,8k</td><td class="crd-td">38,5k</td><td class="crd-td">90,1k</td><td class="crd-td">112,3k</td><td class="crd-td">127k</td></tr>
<tr><td class="crd-td">Penza</td><td class="crd-td">Penza Sura; Penza Governorate</td><td class="crd-td">53,20, 45,00 (Russia)</td><td class="crd-td">13,2k</td><td class="crd-td">26,4k</td><td class="crd-td">60k</td><td class="crd-td">83,1k</td><td class="crd-td">86,5k</td></tr>
<tr><td class="crd-td">Simbirsk</td><td class="crd-td">Ulyanovsk; Sinbirsk</td><td class="crd-td">54,31, 48,40 (Russia)</td><td class="crd-td">13,8k</td><td class="crd-td">24,8k</td><td class="crd-td">41,7k</td><td class="crd-td">64k</td><td class="crd-td">66,2k</td></tr>
<tr><td class="crd-td">Syzran</td><td class="crd-td">Syzran Rail Bridge; Syzran Simbirsk Gub</td><td class="crd-td">53,16, 48,47 (Russia)</td><td class="crd-td">7,8k</td><td class="crd-td">18,6k</td><td class="crd-td">32,4k</td><td class="crd-td">47,8k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td">Saransk</td><td class="crd-td">Saransk Penza Gub; Mordovian Hub</td><td class="crd-td">54,18, 45,17 (Russia)</td><td class="crd-td">8,2k</td><td class="crd-td">11,8k</td><td class="crd-td">14,6k</td><td class="crd-td">18,2k</td><td class="crd-td">18,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 32.</span> Urban settlements and benchmark population series in Middle Volga Governorates: Nizhny Novgorod, Kazan, Simbirsk &amp; Penza (1815AD - 1917AD).</figcaption>
</figure>

# Samara & Saratov Governorates

Table \ref{tab:reg33-sites} lists the 6 catalogued settlements in Region 33 (33. Samara & Saratov Governorates (Volga Wheat Frontier & Volga German Colonies)), where total regional population grew from 1 580k in 1815AD to 5 157k at the 1897AD Census and 6 880k in 1914AD (+335,4%), shifting to 7 120k in 1917AD (+3,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg33-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Saratov</td><td class="crd-td">Saratov Grain Capital; Saratov Governorate</td><td class="crd-td">51,53, 46,03 (Russia)</td><td class="crd-td">27,5k</td><td class="crd-td">63,8k</td><td class="crd-td">137,1k</td><td class="crd-td">235,9k</td><td class="crd-td">242k</td></tr>
<tr><td class="crd-td">Samara</td><td class="crd-td">Kuybyshev; Samara Wheat Hub</td><td class="crd-td">53,20, 50,15 (Russia)</td><td class="crd-td">5,4k</td><td class="crd-td">26,8k</td><td class="crd-td">90k</td><td class="crd-td">143,8k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td">Tsaritsyn</td><td class="crd-td">Volgograd; Stalingrad</td><td class="crd-td">48,71, 44,51 (Russia)</td><td class="crd-td">3,8k</td><td class="crd-td">7,2k</td><td class="crd-td">55,2k</td><td class="crd-td">101k</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td">Pokrovskaya Sloboda</td><td class="crd-td">Engels; Pokrovsk Volga German</td><td class="crd-td">51,48, 46,12 (Russia)</td><td class="crd-td">4,2k</td><td class="crd-td">13,8k</td><td class="crd-td">21,5k</td><td class="crd-td">34,3k</td><td class="crd-td">35,6k</td></tr>
<tr><td class="crd-td">Volsk</td><td class="crd-td">Volgsk; Volsk Cement</td><td class="crd-td">52,04, 47,38 (Russia)</td><td class="crd-td">8,6k</td><td class="crd-td">21,9k</td><td class="crd-td">27,1k</td><td class="crd-td">36,2k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td">Kamyshin</td><td class="crd-td">Dmitrievsk; Kamyshin Saratov</td><td class="crd-td">50,10, 45,42 (Russia)</td><td class="crd-td">3,6k</td><td class="crd-td">10,9k</td><td class="crd-td">16,3k</td><td class="crd-td">24,1k</td><td class="crd-td">24,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 33.</span> Urban settlements and benchmark population series in Samara &amp; Saratov Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Astrakhan Governorate

Table \ref{tab:reg34-sites} lists the 5 catalogued settlements in Region 34 (34. Astrakhan Governorate (Caspian Fishery, Kalmyk & Bukey Steppe)), where total regional population grew from 380k in 1815AD to 1 004k at the 1897AD Census and 1 380k in 1914AD (+263,2%), shifting to 1 410k in 1917AD (+2,2% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg34-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Astrakhan</td><td class="crd-td">Hajitarkhan; Caspian Fishery Port</td><td class="crd-td">46,35, 48,04 (Russia)</td><td class="crd-td">36,8k</td><td class="crd-td">46,2k</td><td class="crd-td">112,9k</td><td class="crd-td">162,5k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td">Tsarev</td><td class="crd-td">Tsarev Akhtuba; Sarai-Berke</td><td class="crd-td">48,66, 45,37 (Russia)</td><td class="crd-td">2,4k</td><td class="crd-td">5,8k</td><td class="crd-td">7k</td><td class="crd-td">8,6k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td">Cherny Yar</td><td class="crd-td">Chyorny Yar; Cherny Yar Volga</td><td class="crd-td">48,06, 46,11 (Russia)</td><td class="crd-td">2,9k</td><td class="crd-td">4,4k</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td">Krasny Yar</td><td class="crd-td">Krasny Yar Delta; Buzan Fortress</td><td class="crd-td">46,53, 48,35 (Russia)</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td">Khanskaya Stavka</td><td class="crd-td">Urda; Bukey Horde Capital</td><td class="crd-td">48,77, 47,45 (Russia)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 34.</span> Urban settlements and benchmark population series in Astrakhan Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Province of the Don Cossack Host

Table \ref{tab:reg35-sites} lists the 5 catalogued settlements in Region 35 (35. Province of the Don Cossack Host (Rostov-Taganrog Port Hub & Eastern Donbas Coal)), where total regional population grew from 680k in 1815AD to 2 564k at the 1897AD Census and 3 880k in 1914AD (+470,6%), shifting to 3 940k in 1917AD (+1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:reg35-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Rostov-on-Don</td><td class="crd-td">Rostov &amp; Nakhichevan; Don Grain Port</td><td class="crd-td">47,24, 39,70 (Russia)</td><td class="crd-td">4,8k</td><td class="crd-td">29,4k</td><td class="crd-td">147,9k</td><td class="crd-td">204,8k</td><td class="crd-td">218k</td></tr>
<tr><td class="crd-td">Novocherkassk</td><td class="crd-td">Don Host Capital; Novocherkassk Stanitsa</td><td class="crd-td">47,42, 40,09 (Russia)</td><td class="crd-td">8,2k</td><td class="crd-td">19,8k</td><td class="crd-td">52k</td><td class="crd-td">69,1k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td">Taganrog</td><td class="crd-td">Taganrog Azov Port; Troitsk on Tagan-Rog</td><td class="crd-td">47,24, 38,90 (Russia)</td><td class="crd-td">9,6k</td><td class="crd-td">22,6k</td><td class="crd-td">51,4k</td><td class="crd-td">78,6k</td><td class="crd-td">82,4k</td></tr>
<tr><td class="crd-td">Aleksandrovsk-Grushevsky</td><td class="crd-td">Shakhty; Grushevsky Anthracite</td><td class="crd-td">47,71, 40,21 (Russia)</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">16,5k</td><td class="crd-td">42,8k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td">Kamenskaya</td><td class="crd-td">Kamensk-Shakhtinsky; Kamenskaya Stanitsa</td><td class="crd-td">48,32, 40,26 (Russia)</td><td class="crd-td">4,2k</td><td class="crd-td">10,2k</td><td class="crd-td">12,2k</td><td class="crd-td">23,5k</td><td class="crd-td">24,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 35.</span> Urban settlements and benchmark population series in Province of the Don Cossack Host (1815AD - 1917AD).</figcaption>
</figure>

# Kuban Oblast & Black Sea Governorate

Table \ref{tab:reg36-sites} lists the 6 catalogued settlements in Region 36 (36. Kuban Oblast & Black Sea Governorate (1864AD Circassian Muhajir Zone & Cossack Boom)), where total regional population grew from 420k in 1815AD to 1 976k at the 1897AD Census and 3 060k in 1914AD (+628,6%), shifting to 3 120k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

<figure class="crd-table-figure" id="tab:reg36-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Ekaterinodar</td><td class="crd-td">Krasnodar; Kuban Cossack Capital</td><td class="crd-td">45,04, 38,98 (Russia)</td><td class="crd-td">3,8k</td><td class="crd-td">9,6k</td><td class="crd-td">65,6k</td><td class="crd-td">107,1k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td">Novorossiysk</td><td class="crd-td">Sudzhuk-Kale; Black Sea Governorate Seat</td><td class="crd-td">44,72, 37,77 (Russia)</td><td class="crd-td">-</td><td class="crd-td">900</td><td class="crd-td">16,9k</td><td class="crd-td">66,7k</td><td class="crd-td">69,5k</td></tr>
<tr><td class="crd-td">Maykop</td><td class="crd-td">Maikop; Meotida Foothills</td><td class="crd-td">44,61, 40,10 (Russia)</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">34,3k</td><td class="crd-td">52,6k</td><td class="crd-td">54,1k</td></tr>
<tr><td class="crd-td">Armavir</td><td class="crd-td">Armavirskiy Aul; Armavir Kuban Rail</td><td class="crd-td">44,99, 41,12 (Russia)</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">18,1k</td><td class="crd-td">49,8k</td><td class="crd-td">52,4k</td></tr>
<tr><td class="crd-td">Yeysk</td><td class="crd-td">Eisk; Yeysk Azov Grain Port</td><td class="crd-td">46,71, 38,27 (Russia)</td><td class="crd-td">-</td><td class="crd-td">16,8k</td><td class="crd-td">35,4k</td><td class="crd-td">51,4k</td><td class="crd-td">52,2k</td></tr>
<tr><td class="crd-td">Sochi</td><td class="crd-td">Fort Aleksandiya; Dakhovsky Posad</td><td class="crd-td">43,59, 39,72 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">13,2k</td><td class="crd-td">14,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 36.</span> Urban settlements and benchmark population series in Kuban Oblast &amp; Black Sea Governorate (1815AD - 1917AD).</figcaption>
</figure>

# Stavropol Governorate & Terek Oblast

Table \ref{tab:reg37-sites} lists the 6 catalogued settlements in Region 37 (37. Stavropol Governorate & Terek Oblast (Grozny Oil, Cossack Lines & Vainakh-Ossetian Highlands)), where total regional population grew from 545k in 1815AD to 1 807k at the 1897AD Census and 2 610k in 1914AD (+378,9%), shifting to 2 650k in 1917AD (+1,5% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

<figure class="crd-table-figure" id="tab:reg37-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Vladikavkaz</td><td class="crd-td">Terek Oblast Capital; Dzaudzhikau</td><td class="crd-td">43,02, 44,68 (Russia)</td><td class="crd-td">2,9k</td><td class="crd-td">8,6k</td><td class="crd-td">43,7k</td><td class="crd-td">79,3k</td><td class="crd-td">81,5k</td></tr>
<tr><td class="crd-td">Stavropol</td><td class="crd-td">Stavropol-Kavkazsky; Stavropol Governorate</td><td class="crd-td">45,04, 41,97 (Russia)</td><td class="crd-td">4,2k</td><td class="crd-td">17,4k</td><td class="crd-td">41,6k</td><td class="crd-td">64,4k</td><td class="crd-td">66,2k</td></tr>
<tr><td class="crd-td">Grozny</td><td class="crd-td">Krepost Groznaya; Grozny Oilfields</td><td class="crd-td">43,32, 45,70 (Russia)</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">15,6k</td><td class="crd-td">38,2k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td">Pyatigorsk</td><td class="crd-td">Konstantinogorsk; Caucasian Mineral Waters</td><td class="crd-td">44,05, 43,06 (Russia)</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">18,4k</td><td class="crd-td">36,8k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td">Georgievsk</td><td class="crd-td">Georgievsk Fortress; Caucasus Line</td><td class="crd-td">44,15, 43,46 (Russia)</td><td class="crd-td">2,8k</td><td class="crd-td">5,8k</td><td class="crd-td">12k</td><td class="crd-td">21,4k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td">Mozdok</td><td class="crd-td">Mozdok Terek Line; Mezdeug</td><td class="crd-td">43,75, 44,66 (Russia)</td><td class="crd-td">4,6k</td><td class="crd-td">9,2k</td><td class="crd-td">9,3k</td><td class="crd-td">15,6k</td><td class="crd-td">16,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 37.</span> Urban settlements and benchmark population series in Stavropol Governorate &amp; Terek Oblast (1815AD - 1917AD).</figcaption>
</figure>

# Dagestan Oblast

Table \ref{tab:reg38-sites} lists the 4 catalogued settlements in Region 38 (38. Dagestan Oblast (1817-1859AD Caucasian Imamate War, Temir-Khan-Shura & Petrovsk-Port)), where total regional population grew from 450k in 1815AD to 571k at the 1897AD Census and 715k in 1914AD (+58,9%), shifting to 725k in 1917AD (+1,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Richmond2013; @Dagestan1897Census].

<figure class="crd-table-figure" id="tab:reg38-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Petrovsk-Port</td><td class="crd-td">Makhachkala; Petrovskoe Caspian</td><td class="crd-td">42,98, 47,50 (Russia)</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">9,8k</td><td class="crd-td">24,8k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td">Derbent</td><td class="crd-td">Bab al-Abwab; Derbent Caspian Gate</td><td class="crd-td">42,06, 48,29 (Russia)</td><td class="crd-td">9,2k</td><td class="crd-td">12,4k</td><td class="crd-td">14,6k</td><td class="crd-td">32,7k</td><td class="crd-td">33,4k</td></tr>
<tr><td class="crd-td">Temir-Khan-Shura</td><td class="crd-td">Buynaksk; Dagestan Oblast Capital</td><td class="crd-td">42,82, 47,12 (Russia)</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">9,2k</td><td class="crd-td">14,6k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td">Khunzakh</td><td class="crd-td">Avar Nutsalate; Khunzakh Fortress</td><td class="crd-td">42,55, 46,70 (Russia)</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">3,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 38.</span> Urban settlements and benchmark population series in Dagestan Oblast (1815AD - 1917AD).</figcaption>
</figure>

# Perm & Vyatka Governorates

Table \ref{tab:reg39-sites} lists the 6 catalogued settlements in Region 39 (39. Perm & Vyatka Governorates (Trans-Ural Ekaterinburg Mining & Kama Peasantry)), where total regional population grew from 1 920k in 1815AD to 6 025k at the 1897AD Census and 7 880k in 1914AD (+310,4%), shifting to 8 040k in 1917AD (+2,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Kabuzan1992].

<figure class="crd-table-figure" id="tab:reg39-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Ekaterinburg</td><td class="crd-td">Yekaterinburg; Sverdlovsk</td><td class="crd-td">56,84, 60,61 (Russia)</td><td class="crd-td">11,5k</td><td class="crd-td">19,8k</td><td class="crd-td">43,2k</td><td class="crd-td">70k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td">Perm</td><td class="crd-td">Perm Kama; Motovilikha Cannon Works</td><td class="crd-td">58,01, 56,25 (Russia)</td><td class="crd-td">6,8k</td><td class="crd-td">16,4k</td><td class="crd-td">45,2k</td><td class="crd-td">68,1k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td">Izhevsky Zavod</td><td class="crd-td">Izhevsk; Izhevsk Rifle Arsenal</td><td class="crd-td">56,85, 53,21 (Russia)</td><td class="crd-td">8,4k</td><td class="crd-td">21,5k</td><td class="crd-td">41,1k</td><td class="crd-td">64,2k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td">Vyatka</td><td class="crd-td">Kirov; Khlynov</td><td class="crd-td">58,60, 49,67 (Russia)</td><td class="crd-td">6,2k</td><td class="crd-td">14,6k</td><td class="crd-td">25k</td><td class="crd-td">48,6k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td">Nizhny Tagil</td><td class="crd-td">Nizhnetagilsky Zavod; Demidov Ironworks</td><td class="crd-td">57,92, 59,97 (Russia)</td><td class="crd-td">14,5k</td><td class="crd-td">25,4k</td><td class="crd-td">31,4k</td><td class="crd-td">38,5k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td">Sarapul</td><td class="crd-td">Sarapul Kama Port; Sarapul Vyatka Gub</td><td class="crd-td">56,48, 53,80 (Russia)</td><td class="crd-td">4,2k</td><td class="crd-td">9,6k</td><td class="crd-td">21,4k</td><td class="crd-td">32,4k</td><td class="crd-td">33,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 39.</span> Urban settlements and benchmark population series in Perm &amp; Vyatka Governorates (1815AD - 1917AD).</figcaption>
</figure>

# Ufa & Orenburg Governorates

Table \ref{tab:reg40-sites} lists the 6 catalogued settlements in Region 40 (40. Ufa & Orenburg Governorates (Bashkir Steppe Colonisation & Trans-Siberian Gateway)), where total regional population grew from 1 400k in 1815AD to 3 797k at the 1897AD Census and 5 350k in 1914AD (+282,1%), shifting to 5 480k in 1917AD (+2,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @Kabuzan1992].

<figure class="crd-table-figure" id="tab:reg40-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Orenburg</td><td class="crd-td">Orenburg Steppe Gateway; Chkalov</td><td class="crd-td">51,77, 55,10 (Russia)</td><td class="crd-td">10,8k</td><td class="crd-td">24,8k</td><td class="crd-td">72,4k</td><td class="crd-td">100,1k</td><td class="crd-td">108,5k</td></tr>
<tr><td class="crd-td">Ufa</td><td class="crd-td">Ufa Governorate; Bashkiria Seat</td><td class="crd-td">54,74, 55,97 (Russia)</td><td class="crd-td">7,6k</td><td class="crd-td">16,8k</td><td class="crd-td">49,3k</td><td class="crd-td">106,2k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td">Chelyabinsk</td><td class="crd-td">Chelyaba; Trans-Siberian Migration Depot</td><td class="crd-td">55,16, 61,44 (Russia)</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k</td><td class="crd-td">20k</td><td class="crd-td">70,5k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td">Troitsk</td><td class="crd-td">Troitsk Caravan Mart; Troitsk Orenburg</td><td class="crd-td">54,10, 61,57 (Russia)</td><td class="crd-td">3,4k</td><td class="crd-td">7,8k</td><td class="crd-td">23,3k</td><td class="crd-td">41,6k</td><td class="crd-td">43,2k</td></tr>
<tr><td class="crd-td">Zlatoust</td><td class="crd-td">Zlatoustovsky Zavod; Zlatoust Steel</td><td class="crd-td">55,17, 59,65 (Russia)</td><td class="crd-td">6,2k</td><td class="crd-td">14,6k</td><td class="crd-td">20,5k</td><td class="crd-td">34,8k</td><td class="crd-td">39,5k</td></tr>
<tr><td class="crd-td">Sterlitamak</td><td class="crd-td">Sterlitamak Salt Wharf; Sterlitamak Ufa Gub</td><td class="crd-td">53,62, 55,95 (Russia)</td><td class="crd-td">2,4k</td><td class="crd-td">6,8k</td><td class="crd-td">15,6k</td><td class="crd-td">22,4k</td><td class="crd-td">23,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 40.</span> Urban settlements and benchmark population series in Ufa &amp; Orenburg Governorates (1815AD - 1917AD).</figcaption>
</figure>

# West Siberian Trans-Siberian Belt: Southern Tobolsk

Table \ref{tab:reg41-sites} lists the 5 catalogued settlements in Region 41 (41. West Siberian Trans-Siberian Belt: Southern Tobolsk (Tyumen, Kurgan, Ishim) & Omsk), where total regional population grew from 545k in 1815AD to 1 740k at the 1897AD Census and 3 180k in 1914AD (+483,5%), shifting to 3 320k in 1917AD (+4,4% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg41-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Omsk</td><td class="crd-td">Omskaya Krepost; Steppe &amp; Rail Capital</td><td class="crd-td">54,99, 73,32 (Russia)</td><td class="crd-td">6,8k</td><td class="crd-td">18,4k</td><td class="crd-td">37,4k</td><td class="crd-td">135,8k</td><td class="crd-td">148k</td></tr>
<tr><td class="crd-td">Tyumen</td><td class="crd-td">Chimgi-Tura; Siberian Gateway</td><td class="crd-td">57,15, 65,53 (Russia)</td><td class="crd-td">8,4k</td><td class="crd-td">14,2k</td><td class="crd-td">29,5k</td><td class="crd-td">42,6k</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td">Kurgan</td><td class="crd-td">Tsaryovo Gorodishche; Kurgan Butter Hub</td><td class="crd-td">55,45, 65,33 (Russia)</td><td class="crd-td">1,6k</td><td class="crd-td">4,2k</td><td class="crd-td">10,3k</td><td class="crd-td">38,5k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td">Ishim</td><td class="crd-td">Korkina Sloboda; Ishim Fair</td><td class="crd-td">56,11, 69,49 (Russia)</td><td class="crd-td">1,8k</td><td class="crd-td">4,6k</td><td class="crd-td">7,2k</td><td class="crd-td">14,6k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td">Tara</td><td class="crd-td">Tara Irtysh; Tara Tobolsk Gub</td><td class="crd-td">56,89, 74,37 (Russia)</td><td class="crd-td">3,8k</td><td class="crd-td">5,6k</td><td class="crd-td">7,2k</td><td class="crd-td">11,8k</td><td class="crd-td">12,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 41.</span> Urban settlements and benchmark population series in West Siberian Trans-Siberian Belt: Southern Tobolsk (1815AD - 1917AD).</figcaption>
</figure>

# Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym

Table \ref{tab:reg42-sites} lists the 5 catalogued settlements in Region 42 (42. Ob-Irtysh River Trail & Polar Tundra: Tobolsk, Surgut, Berezov & Narym), where total regional population grew from 160k in 1815AD to 375k at the 1897AD Census and 505k in 1914AD (+215,6%), shifting to 520k in 1917AD (+3,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg42-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Tobolsk</td><td class="crd-td">Tobolsk Governorate Seat; Irtysh-Tobol Confluence</td><td class="crd-td">58,20, 68,25 (Russia)</td><td class="crd-td">15,4k</td><td class="crd-td">18,2k</td><td class="crd-td">20,4k</td><td class="crd-td">24,5k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td">Berezov</td><td class="crd-td">Beryozovo; Sugmut-Vosh Exile Ostrog</td><td class="crd-td">63,94, 65,04 (Russia)</td><td class="crd-td">950</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td">Surgut</td><td class="crd-td">Surgutsky Ostrog; Middle Ob Yasak</td><td class="crd-td">61,25, 73,42 (Russia)</td><td class="crd-td">750</td><td class="crd-td">980</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td">Obdorsk</td><td class="crd-td">Salekhard; Poluy Yamal Fair</td><td class="crd-td">66,53, 66,60 (Russia)</td><td class="crd-td">520</td><td class="crd-td">780</td><td class="crd-td">880</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td">Narym</td><td class="crd-td">Narymsky Ostrog; Narym Exile Post</td><td class="crd-td">58,93, 81,59 (Russia)</td><td class="crd-td">850</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 42.</span> Urban settlements and benchmark population series in Ob-Irtysh River Trail &amp; Polar Tundra: Tobolsk, Surgut, Berezov &amp; Narym (1815AD - 1917AD).</figcaption>
</figure>

# Tomsk Railway Trunk

Table \ref{tab:reg43-sites} lists the 6 catalogued settlements in Region 43 (43. Tomsk Railway Trunk (Novonikolaevsk, Tomsk) & Altai Cabinet Stolypin Magnet (Barnaul, Biysk)), where total regional population grew from 300k in 1815AD to 1 928k at the 1897AD Census and 3 980k in 1914AD (+1226,7%), shifting to 4 180k in 1917AD (+5,0% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg43-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Tomsk</td><td class="crd-td">Tomsk Governorate; Siberian University City</td><td class="crd-td">56,50, 84,97 (Russia)</td><td class="crd-td">9,6k</td><td class="crd-td">20,8k</td><td class="crd-td">52,2k</td><td class="crd-td">116,7k</td><td class="crd-td">108,5k</td></tr>
<tr><td class="crd-td">Novonikolaevsk</td><td class="crd-td">Novosibirsk; Ob Railway Crossing</td><td class="crd-td">55,01, 82,94 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">85k</td><td class="crd-td">107k</td></tr>
<tr><td class="crd-td">Barnaul</td><td class="crd-td">Altai Cabinet Capital; Barnaulsky Zavod</td><td class="crd-td">53,35, 83,78 (Russia)</td><td class="crd-td">7,4k</td><td class="crd-td">11,6k</td><td class="crd-td">21,1k</td><td class="crd-td">61k</td><td class="crd-td">58,4k</td></tr>
<tr><td class="crd-td">Biysk</td><td class="crd-td">Bikatunskaya Krepost; Chuysky Trakt Terminus</td><td class="crd-td">52,54, 85,21 (Russia)</td><td class="crd-td">2,4k</td><td class="crd-td">5,8k</td><td class="crd-td">17,2k</td><td class="crd-td">33,5k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td">Mariinsk</td><td class="crd-td">Kiyskoe; Mariinsk Gold-Rail</td><td class="crd-td">56,21, 87,75 (Russia)</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">8,2k</td><td class="crd-td">19,8k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td">Kuznetsk</td><td class="crd-td">Novokuznetsk; Kuznetsky Ostrog</td><td class="crd-td">53,76, 87,11 (Russia)</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 43.</span> Urban settlements and benchmark population series in Tomsk Railway Trunk (1815AD - 1917AD).</figcaption>
</figure>

# Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate

Table \ref{tab:reg44-sites} lists the 4 catalogued settlements in Region 44 (44. Altai-Sayan Highlands: Gorny Altai, Minusinsk & Uriankhai Protectorate (Tuva 1914AD)), where total regional population grew from 125k in 1815AD to 330k at the 1897AD Census and 565k in 1914AD (+352,0%), shifting to 575k in 1917AD (+1,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg44-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Minusinsk</td><td class="crd-td">Minusinsk Hollow; Minusinsk Yeniseysk Gub</td><td class="crd-td">53,71, 91,69 (Russia)</td><td class="crd-td">1,1k</td><td class="crd-td">3,8k</td><td class="crd-td">10,2k</td><td class="crd-td">15,8k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td">Ulala</td><td class="crd-td">Gorno-Altaysk; Altai Spiritual Mission</td><td class="crd-td">51,96, 85,96 (Russia)</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,5k</td><td class="crd-td">6,8k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td">Ust-Abakanskoe</td><td class="crd-td">Abakan; Khakassia Steppe Duma</td><td class="crd-td">53,72, 91,43 (Russia)</td><td class="crd-td">650</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td">Belotsarsk</td><td class="crd-td">Kyzyl; Uriankhai 1914 Protectorate</td><td class="crd-td">51,72, 94,44 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 44.</span> Urban settlements and benchmark population series in Altai-Sayan Highlands: Gorny Altai, Minusinsk &amp; Uriankhai Protectorate (1815AD - 1917AD).</figcaption>
</figure>

# Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk

Table \ref{tab:reg45-sites} lists the 5 catalogued settlements in Region 45 (45. Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk & Irkutsk), where total regional population grew from 210k in 1815AD to 795k at the 1897AD Census and 1 540k in 1914AD (+633,3%), shifting to 1 560k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg45-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Irkutsk</td><td class="crd-td">East Siberian Capital; Angara-Irkut</td><td class="crd-td">52,29, 104,31 (Russia)</td><td class="crd-td">14,8k</td><td class="crd-td">26,5k</td><td class="crd-td">51,5k</td><td class="crd-td">129,7k</td><td class="crd-td">118,5k</td></tr>
<tr><td class="crd-td">Krasnoyarsk</td><td class="crd-td">Krasny Yar on Yenisei; Yeniseysk Capital</td><td class="crd-td">56,02, 92,89 (Russia)</td><td class="crd-td">4,8k</td><td class="crd-td">9,6k</td><td class="crd-td">26,7k</td><td class="crd-td">87,5k</td><td class="crd-td">82,4k</td></tr>
<tr><td class="crd-td">Kansk</td><td class="crd-td">Kansky Ostrog; Kansk Trans-Siberian</td><td class="crd-td">56,20, 95,72 (Russia)</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k</td><td class="crd-td">7,5k</td><td class="crd-td">17,8k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td">Achinsk</td><td class="crd-td">Achinsky Ostrog; Chulym Crossing</td><td class="crd-td">56,27, 90,50 (Russia)</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">6,7k</td><td class="crd-td">12,4k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td">Nizhneudinsk</td><td class="crd-td">Pokrovsky Gorodok; Uda Rail Depot</td><td class="crd-td">54,91, 99,03 (Russia)</td><td class="crd-td">1,2k</td><td class="crd-td">2,8k</td><td class="crd-td">5,8k</td><td class="crd-td">10,6k</td><td class="crd-td">11,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 45.</span> Urban settlements and benchmark population series in Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk &amp; Irkutsk (1815AD - 1917AD).</figcaption>
</figure>

# Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields

Table \ref{tab:reg46-sites} lists the 4 catalogued settlements in Region 46 (46. Yenisei-Turukhansk Polar North & Bodaibo Lena Goldfields (1912AD Massacre)), where total regional population grew from 68k in 1815AD to 195k at the 1897AD Census and 270k in 1914AD (+297,1%), shifting to 265k in 1917AD (-1,9% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg46-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Yeniseysk</td><td class="crd-td">Eniseisk; Yenisey Gold Boomtown</td><td class="crd-td">58,45, 92,17 (Russia)</td><td class="crd-td">5,8k</td><td class="crd-td">9,8k</td><td class="crd-td">11,5k</td><td class="crd-td">11,9k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td">Bodaibo</td><td class="crd-td">Bodaybo; Lena Goldfields 1912</td><td class="crd-td">57,85, 114,19 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">11,8k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td">Kirensk</td><td class="crd-td">Ust-Kirensky Ostrog; Upper Lena Portage</td><td class="crd-td">57,79, 108,10 (Russia)</td><td class="crd-td">900</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td">Turukhansk</td><td class="crd-td">Monastyrskoe; Novaya Mangazeya</td><td class="crd-td">65,79, 87,95 (Russia)</td><td class="crd-td">480</td><td class="crd-td">380</td><td class="crd-td">212</td><td class="crd-td">450</td><td class="crd-td">520</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 46.</span> Urban settlements and benchmark population series in Yenisei-Turukhansk Polar North &amp; Bodaibo Lena Goldfields (1815AD - 1917AD).</figcaption>
</figure>

# Transbaikal Oblast

Table \ref{tab:reg47-sites} lists the 6 catalogued settlements in Region 47 (47. Transbaikal Oblast (Chita, Verkhneudinsk) & Yakutsk Oblast (Sakha, Okhotsk, Chukotka, Kamchatka)), where total regional population grew from 278k in 1815AD to 942k at the 1897AD Census and 1 295k in 1914AD (+365,8%), shifting to 1 305k in 1917AD (+0,8% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg47-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Chita</td><td class="crd-td">Transbaikal Capital; Chita Rail Hub</td><td class="crd-td">52,05, 113,47 (Russia)</td><td class="crd-td">650</td><td class="crd-td">3,2k</td><td class="crd-td">11,5k</td><td class="crd-td">79,2k</td><td class="crd-td">74,5k</td></tr>
<tr><td class="crd-td">Verkhneudinsk</td><td class="crd-td">Ulan-Ude; Udinsky Ostrog</td><td class="crd-td">51,83, 107,58 (Russia)</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">8,1k</td><td class="crd-td">19,8k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td">Troitskosavsk</td><td class="crd-td">Kyakhta Tea Entrepot; Troitskosavsk-Kyakhta</td><td class="crd-td">50,35, 106,45 (Russia)</td><td class="crd-td">3,8k</td><td class="crd-td">5,6k</td><td class="crd-td">8,8k</td><td class="crd-td">11,2k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td">Nerchinsk</td><td class="crd-td">Nerchinsky Zavod Katorga; Shilka Silver-Gold</td><td class="crd-td">51,98, 116,58 (Russia)</td><td class="crd-td">2,4k</td><td class="crd-td">4,4k</td><td class="crd-td">6,8k</td><td class="crd-td">12,4k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td">Yakutsk</td><td class="crd-td">Tuimaada; Yakutsk Oblast Seat</td><td class="crd-td">62,04, 129,68 (Russia)</td><td class="crd-td">2,7k</td><td class="crd-td">5,3k</td><td class="crd-td">6,5k</td><td class="crd-td">10,8k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td">Petropavlovsk</td><td class="crd-td">Petropavlovsk-Kamchatsky; Avacha Bay</td><td class="crd-td">53,05, 158,65 (Russia)</td><td class="crd-td">650</td><td class="crd-td">1,1k</td><td class="crd-td">395</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 47.</span> Urban settlements and benchmark population series in Transbaikal Oblast (1815AD - 1917AD).</figcaption>
</figure>

# Priamurye Governor-Generalship: Amur, Primorskaya

Table \ref{tab:reg48-sites} lists the 6 catalogued settlements in Region 48 (48. Priamurye Governor-Generalship: Amur, Primorskaya (Vladivostok) & Sakhalin (1858-1860AD Annexation)), where total regional population grew from 30k in 1815AD to 372k at the 1897AD Census and 1 135k in 1914AD (+3683,3%), shifting to 1 150k in 1917AD (+1,3% across 1914-1917AD) [@Troinitsky1905Goroda; @TsSK1915; @Treadgold1957; @Dameshek2007; @Stephan1994].

<figure class="crd-table-figure" id="tab:reg48-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Local Names</th><th class="crd-th">Coords &amp; Country</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Vladivostok</td><td class="crd-td">Golden Horn Fortress; Primorskaya Capital</td><td class="crd-td">43,12, 131,89 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,9k</td><td class="crd-td">91,5k</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td">Blagoveshchensk</td><td class="crd-td">Ust-Zeysky Post; Amur Oblast Capital</td><td class="crd-td">50,29, 127,53 (Russia)</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">32,8k</td><td class="crd-td">62,5k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td">Khabarovsk</td><td class="crd-td">Khabarovka; Priamurye Seat</td><td class="crd-td">48,48, 135,08 (Russia)</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">15k</td><td class="crd-td">51,3k</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td">Nikolsk-Ussuriysky</td><td class="crd-td">Ussuriysk; Nikolskoe Green Wedge</td><td class="crd-td">43,80, 131,95 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">47,4k</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td">Nikolaevsk-on-Amur</td><td class="crd-td">Nikolaevsky Post; Amur Estuary</td><td class="crd-td">53,14, 140,73 (Russia)</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,7k</td><td class="crd-td">14,9k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td">Aleksandrovsky Post</td><td class="crd-td">Aleksandrovsk-Sakhalinsky; Sakhalin Katorga Seat</td><td class="crd-td">50,90, 142,16 (Russia)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td><td class="crd-td">6,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 48.</span> Urban settlements and benchmark population series in Priamurye Governor-Generalship: Amur, Primorskaya (1815AD - 1917AD).</figcaption>
</figure>

# Regional Urban Sample Summary

Table \ref{tab:regional-summary} aggregates the combined urban population of all 265 catalogued settlements across the 48 period-authentic regions from 1815AD to 1917AD [@Troinitsky1905Goroda; @TsSK1915; @Rashin1956; @AgCensus1917].

<figure class="crd-table-figure" id="tab:regional-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Region (Catalogued Cities)</th><th class="crd-th">1815AD</th><th class="crd-th">1858AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1917AD</th><th class="crd-th">1815-1914AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">1. Warsaw, Plock &amp; Lomza Gubs. (n = 6)</td><td class="crd-td">95,8k</td><td class="crd-td">196,4k</td><td class="crd-td">797,1k</td><td class="crd-td">1,04M</td><td class="crd-td">877,3k</td><td class="crd-td">+986,3%</td></tr>
<tr><td class="crd-td">2. Piotrkow &amp; Kalisz Gubs. (n = 7)</td><td class="crd-td">20,3k</td><td class="crd-td">73,7k</td><td class="crd-td">526,2k</td><td class="crd-td">902,6k</td><td class="crd-td">663k</td><td class="crd-td">+4346,1%</td></tr>
<tr><td class="crd-td">3. Lublin &amp; Siedlce Gubs. (n = 5)</td><td class="crd-td">23k</td><td class="crd-td">41,2k</td><td class="crd-td">122,9k</td><td class="crd-td">166,5k</td><td class="crd-td">131,5k</td><td class="crd-td">+623,9%</td></tr>
<tr><td class="crd-td">4. Radom, Kielce &amp; Suwalki Gubs. (n = 5)</td><td class="crd-td">11,4k</td><td class="crd-td">33,9k</td><td class="crd-td">92,3k</td><td class="crd-td">140,9k</td><td class="crd-td">112,6k</td><td class="crd-td">+1136,0%</td></tr>
<tr><td class="crd-td">5. Estland Gub. (n = 4)</td><td class="crd-td">18,7k</td><td class="crd-td">32,1k</td><td class="crd-td">90,3k</td><td class="crd-td">176,8k</td><td class="crd-td">200k</td><td class="crd-td">+845,5%</td></tr>
<tr><td class="crd-td">6. Livland Gub. (n = 6)</td><td class="crd-td">50,6k</td><td class="crd-td">101,6k</td><td class="crd-td">359,3k</td><td class="crd-td">618,1k</td><td class="crd-td">301,4k</td><td class="crd-td">+1120,4%</td></tr>
<tr><td class="crd-td">7. Courland Gub. (n = 5)</td><td class="crd-td">23,8k</td><td class="crd-td">44,7k</td><td class="crd-td">122,3k</td><td class="crd-td">184,7k</td><td class="crd-td">87,1k</td><td class="crd-td">+676,1%</td></tr>
<tr><td class="crd-td">8. Southern Finland Gubs.: Nyland (n = 6)</td><td class="crd-td">23,9k</td><td class="crd-td">56,5k</td><td class="crd-td">194,7k</td><td class="crd-td">328,4k</td><td class="crd-td">350,7k</td><td class="crd-td">+1276,9%</td></tr>
<tr><td class="crd-td">9. Interior &amp; Northern Finland Gubs.: Vasa, Kuopio, Sankt-Michel &amp; Uleaborg (n = 5)</td><td class="crd-td">9,5k</td><td class="crd-td">18k</td><td class="crd-td">44,9k</td><td class="crd-td">72k</td><td class="crd-td">74,2k</td><td class="crd-td">+657,9%</td></tr>
<tr><td class="crd-td">10. Kovno Gub. (n = 5)</td><td class="crd-td">13,8k</td><td class="crd-td">45,6k</td><td class="crd-td">119,8k</td><td class="crd-td">157,6k</td><td class="crd-td">81,4k</td><td class="crd-td">+1042,0%</td></tr>
<tr><td class="crd-td">11. Vilna &amp; Grodno Gubs. (n = 6)</td><td class="crd-td">57,4k</td><td class="crd-td">127,1k</td><td class="crd-td">339,2k</td><td class="crd-td">450,8k</td><td class="crd-td">272,8k</td><td class="crd-td">+685,4%</td></tr>
<tr><td class="crd-td">12. Minsk Gub. &amp; Pripyat Polesia (n = 6)</td><td class="crd-td">31,1k</td><td class="crd-td">72k</td><td class="crd-td">197,5k</td><td class="crd-td">264,8k</td><td class="crd-td">256,4k</td><td class="crd-td">+751,4%</td></tr>
<tr><td class="crd-td">13. Vitebsk &amp; Mogilev Gubs. (n = 6)</td><td class="crd-td">50,1k</td><td class="crd-td">119,7k</td><td class="crd-td">246,5k</td><td class="crd-td">448,8k</td><td class="crd-td">412,4k</td><td class="crd-td">+795,8%</td></tr>
<tr><td class="crd-td">14. Austro-Hungarian Eastern Galicia (n = 6)</td><td class="crd-td">77,5k</td><td class="crd-td">133,3k</td><td class="crd-td">275,3k</td><td class="crd-td">381,1k</td><td class="crd-td">311,6k</td><td class="crd-td">+391,7%</td></tr>
<tr><td class="crd-td">15. Austro-Hungarian Bukovina (n = 5)</td><td class="crd-td">21,7k</td><td class="crd-td">54,7k</td><td class="crd-td">111,5k</td><td class="crd-td">153,9k</td><td class="crd-td">131,9k</td><td class="crd-td">+609,2%</td></tr>
<tr><td class="crd-td">16. Bessarabia Gub. (n = 6)</td><td class="crd-td">46,6k</td><td class="crd-td">173,1k</td><td class="crd-td">227,7k</td><td class="crd-td">298,5k</td><td class="crd-td">299,1k</td><td class="crd-td">+540,6%</td></tr>
<tr><td class="crd-td">17. Volhynia Gub. (n = 5)</td><td class="crd-td">27,4k</td><td class="crd-td">66,3k</td><td class="crd-td">141,7k</td><td class="crd-td">209,1k</td><td class="crd-td">182,7k</td><td class="crd-td">+663,1%</td></tr>
<tr><td class="crd-td">18. Podolia Gub. (n = 5)</td><td class="crd-td">32,6k</td><td class="crd-td">67,5k</td><td class="crd-td">135k</td><td class="crd-td">206,4k</td><td class="crd-td">199,6k</td><td class="crd-td">+533,1%</td></tr>
<tr><td class="crd-td">19. Kyiv Gub. (n = 5)</td><td class="crd-td">58,4k</td><td class="crd-td">157k</td><td class="crd-td">397,1k</td><td class="crd-td">859,9k</td><td class="crd-td">878k</td><td class="crd-td">+1372,4%</td></tr>
<tr><td class="crd-td">20. Little Russian Gubs.: Chernigov &amp; Poltava (n = 6)</td><td class="crd-td">52,6k</td><td class="crd-td">101,2k</td><td class="crd-td">217,8k</td><td class="crd-td">337,4k</td><td class="crd-td">342,4k</td><td class="crd-td">+541,4%</td></tr>
<tr><td class="crd-td">21. Kharkov Gub. (n = 5)</td><td class="crd-td">48,7k</td><td class="crd-td">100,7k</td><td class="crd-td">253,7k</td><td class="crd-td">385,2k</td><td class="crd-td">414,8k</td><td class="crd-td">+691,0%</td></tr>
<tr><td class="crd-td">22. Kherson Gub. (n = 5)</td><td class="crd-td">75,1k</td><td class="crd-td">234,4k</td><td class="crd-td">648k</td><td class="crd-td">953,4k</td><td class="crd-td">953k</td><td class="crd-td">+1169,5%</td></tr>
<tr><td class="crd-td">23. Ekaterinoslav Gub. (n = 7)</td><td class="crd-td">20,4k</td><td class="crd-td">51,6k</td><td class="crd-td">246k</td><td class="crd-td">514,1k</td><td class="crd-td">544,7k</td><td class="crd-td">+2420,1%</td></tr>
<tr><td class="crd-td">24. Taurida Gub. (n = 6)</td><td class="crd-td">29,1k</td><td class="crd-td">64,9k</td><td class="crd-td">202,1k</td><td class="crd-td">321,4k</td><td class="crd-td">333,7k</td><td class="crd-td">+1004,5%</td></tr>
<tr><td class="crd-td">25. Saint Petersburg Gub. (n = 5)</td><td class="crd-td">427,6k</td><td class="crd-td">594,8k</td><td class="crd-td">1,37M</td><td class="crd-td">2,25M</td><td class="crd-td">2,44M</td><td class="crd-td">+426,5%</td></tr>
<tr><td class="crd-td">26. Novgorod, Pskov &amp; Olonets Gubs. (n = 6)</td><td class="crd-td">37,6k</td><td class="crd-td">66,7k</td><td class="crd-td">99,3k</td><td class="crd-td">130,1k</td><td class="crd-td">158,5k</td><td class="crd-td">+246,0%</td></tr>
<tr><td class="crd-td">27. Arkhangelsk &amp; Vologda Gubs. (n = 5)</td><td class="crd-td">35,2k</td><td class="crd-td">49,9k</td><td class="crd-td">64,2k</td><td class="crd-td">111,8k</td><td class="crd-td">155,3k</td><td class="crd-td">+217,6%</td></tr>
<tr><td class="crd-td">28. Moscow Gub. (n = 5)</td><td class="crd-td">269,5k</td><td class="crd-td">429,7k</td><td class="crd-td">1,14M</td><td class="crd-td">1,93M</td><td class="crd-td">2,04M</td><td class="crd-td">+617,7%</td></tr>
<tr><td class="crd-td">29. Central Industrial Ring: Vladimir, Yaroslavl, Kostroma, Tver, Smolensk &amp; Kaluga Gubs. (n = 8)</td><td class="crd-td">101,6k</td><td class="crd-td">183,3k</td><td class="crd-td">370,7k</td><td class="crd-td">614,2k</td><td class="crd-td">642,2k</td><td class="crd-td">+504,5%</td></tr>
<tr><td class="crd-td">30. Western Central Black-Earth Gubs.: Kursk, Oryol &amp; Tula (n = 6)</td><td class="crd-td">105,4k</td><td class="crd-td">187,6k</td><td class="crd-td">358,5k</td><td class="crd-td">451,7k</td><td class="crd-td">478,7k</td><td class="crd-td">+328,6%</td></tr>
<tr><td class="crd-td">31. Eastern Central Black-Earth Gubs.: Voronezh, Tambov &amp; Ryazan (n = 6)</td><td class="crd-td">68,7k</td><td class="crd-td">147,6k</td><td class="crd-td">262k</td><td class="crd-td">326,6k</td><td class="crd-td">337,1k</td><td class="crd-td">+375,4%</td></tr>
<tr><td class="crd-td">32. Middle Volga Gubs.: Nizhny Novgorod, Kazan, Simbirsk &amp; Penza (n = 6)</td><td class="crd-td">94k</td><td class="crd-td">181,9k</td><td class="crd-td">368,6k</td><td class="crd-td">520,7k</td><td class="crd-td">553,5k</td><td class="crd-td">+453,9%</td></tr>
<tr><td class="crd-td">33. Samara &amp; Saratov Gubs. (n = 6)</td><td class="crd-td">53,1k</td><td class="crd-td">144,4k</td><td class="crd-td">347,2k</td><td class="crd-td">575,3k</td><td class="crd-td">606k</td><td class="crd-td">+983,4%</td></tr>
<tr><td class="crd-td">34. Astrakhan Gub. (n = 5)</td><td class="crd-td">44,7k</td><td class="crd-td">62,8k</td><td class="crd-td">133,1k</td><td class="crd-td">188,7k</td><td class="crd-td">191,7k</td><td class="crd-td">+322,1%</td></tr>
<tr><td class="crd-td">35. Don Cossack Host (n = 5)</td><td class="crd-td">26,8k</td><td class="crd-td">84,4k</td><td class="crd-td">280k</td><td class="crd-td">418,8k</td><td class="crd-td">443,3k</td><td class="crd-td">+1462,7%</td></tr>
<tr><td class="crd-td">36. Kuban Oblast &amp; Black Sea Gub. (n = 6)</td><td class="crd-td">3,8k</td><td class="crd-td">32,9k</td><td class="crd-td">171,7k</td><td class="crd-td">340,8k</td><td class="crd-td">354,3k</td><td class="crd-td">+8868,4%</td></tr>
<tr><td class="crd-td">37. Stavropol Gub. &amp; Terek Oblast (n = 6)</td><td class="crd-td">14,5k</td><td class="crd-td">50,2k</td><td class="crd-td">140,7k</td><td class="crd-td">255,7k</td><td class="crd-td">269,4k</td><td class="crd-td">+1663,4%</td></tr>
<tr><td class="crd-td">38. Dagestan Oblast (n = 4)</td><td class="crd-td">12k</td><td class="crd-td">19,9k</td><td class="crd-td">36,6k</td><td class="crd-td">75,7k</td><td class="crd-td">78,8k</td><td class="crd-td">+530,8%</td></tr>
<tr><td class="crd-td">39. Perm &amp; Vyatka Gubs. (n = 6)</td><td class="crd-td">51,6k</td><td class="crd-td">107,3k</td><td class="crd-td">207,4k</td><td class="crd-td">321,8k</td><td class="crd-td">381,7k</td><td class="crd-td">+523,6%</td></tr>
<tr><td class="crd-td">40. Ufa &amp; Orenburg Gubs. (n = 6)</td><td class="crd-td">33,3k</td><td class="crd-td">75,7k</td><td class="crd-td">201k</td><td class="crd-td">375,6k</td><td class="crd-td">400,9k</td><td class="crd-td">+1027,9%</td></tr>
<tr><td class="crd-td">41. West Siberian Trans-Siberian Belt: Southern Tobolsk (n = 5)</td><td class="crd-td">22,4k</td><td class="crd-td">47k</td><td class="crd-td">91,6k</td><td class="crd-td">243,3k</td><td class="crd-td">261,5k</td><td class="crd-td">+986,2%</td></tr>
<tr><td class="crd-td">42. Ob-Irtysh River Trail &amp; Polar Tundra: Tobolsk, Surgut, Berezov &amp; Narym (n = 5)</td><td class="crd-td">18,5k</td><td class="crd-td">22,2k</td><td class="crd-td">24,6k</td><td class="crd-td">30,6k</td><td class="crd-td">30,1k</td><td class="crd-td">+65,4%</td></tr>
<tr><td class="crd-td">43. Tomsk Railway Trunk (n = 6)</td><td class="crd-td">21,1k</td><td class="crd-td">44,6k</td><td class="crd-td">109,7k</td><td class="crd-td">320,2k</td><td class="crd-td">334,1k</td><td class="crd-td">+1417,5%</td></tr>
<tr><td class="crd-td">44. Altai-Sayan Highlands: Gorny Altai, Minusinsk &amp; Uriankhai Protectorate (n = 4)</td><td class="crd-td">1,8k</td><td class="crd-td">6k</td><td class="crd-td">15,4k</td><td class="crd-td">25,9k</td><td class="crd-td">28,4k</td><td class="crd-td">+1377,1%</td></tr>
<tr><td class="crd-td">45. Central Siberian Trans-Siberian Corridor: Achinsk-Krasnoyarsk-Kansk &amp; Irkutsk (n = 5)</td><td class="crd-td">23,4k</td><td class="crd-td">44,4k</td><td class="crd-td">98,2k</td><td class="crd-td">258k</td><td class="crd-td">243,1k</td><td class="crd-td">+1002,6%</td></tr>
<tr><td class="crd-td">46. Yenisei-Turukhansk Polar North &amp; Bodaibo Lena Goldfields (n = 4)</td><td class="crd-td">7,2k</td><td class="crd-td">11,8k</td><td class="crd-td">18,2k</td><td class="crd-td">28,4k</td><td class="crd-td">24,2k</td><td class="crd-td">+294,8%</td></tr>
<tr><td class="crd-td">47. Transbaikal Oblast (n = 6)</td><td class="crd-td">13k</td><td class="crd-td">23,7k</td><td class="crd-td">42,1k</td><td class="crd-td">135,1k</td><td class="crd-td">131,2k</td><td class="crd-td">+939,2%</td></tr>
<tr><td class="crd-td">48. Priamurye Gov.-Gen.: Amur, Primorskaya (n = 6)</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">97,2k</td><td class="crd-td">273,4k</td><td class="crd-td">297,4k</td><td class="crd-td">Post-1850AD</td></tr>
<tr><td class="crd-td">Total Gazetteer Sample (n = 265)</td><td class="crd-td">2,41M</td><td class="crd-td">4,79M</td><td class="crd-td">12,16M</td><td class="crd-td">19,78M</td><td class="crd-td">19,29M</td><td class="crd-td">+722,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 49.</span> Combined Urban Population Across All 265 Gazetteer Settlements by 48 Period-Authentic Regions (1815AD - 1917AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::
