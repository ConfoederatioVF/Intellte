---
title: "SETTLEMENT GAZETTEER OF THE LOWER VOLGA."
subtitle: "Supplementary Tabular Directory and Settlement Population Histories of the Saratov, Volgograd, Astrakhan, and Kalmyk Steppe Basins (10000BC - 1900AD)."
date: "8 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/lower_volga_regional_map.png"
hero_caption: "Cartographic basemap of the Lower Volga region (42,0°-51,5° E, 45,0°-53,5° N), showing administrative boundaries for Saratov, Volgograd and Astrakhan Oblasts and the Republic of Kalmykia and principal settlements catalogued in lower_volga_settlements.json."
hero_label: "fig:hero"
bibliography: lower_volga_literature_review.bib
csl: crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../../../core/rticles/intellte/resources/template.tex
    latex_engine: xelatex
    keep_tex: false
---








# Overview

This supplementary report presents the tabular settlement gazetteer (`lower_volga_settlements.json`) accompanying the regional demographic review of the Lower Volga (`lower_volga_literature_review.pdf`). The JSON dataset contains 146 individual settlements across the Volga Delta, Volga-Akhtuba Floodplain, Saratov-Volgograd river corridor, Kalmyk Steppe and Astrakhan-Volgograd Trans-Volga from 10000BC to 1900AD, formatted in the `population_Stadester` structure (keyed by `"<Name>-Russia"`, with `name`, `other_names`, `coords`, `country`, `key` and positive-integer `population` maps).

Population figures are derived from excavated pit-house floor areas and cemetery cohorts for Mesolithic, Neolithic, Eneolithic, Bronze Age Srubnaya and Sarmatian sites [@koltsov2005mezolit; @smagin2018mikrolitov; @yudin2004varfolomeyevka; @baratskov2015itogi; @vybornov2022khronologiya; @agapov1990khvalynskiy; @tsibin2019maksimovka; @malov2008nizhneye; @lopatin2014nachalo; @skripkin2012chislennosti; @balabanova2009khronologicheskiye], urban and rural settlement excavations for Khazar Itil, Pre-Mongol Saksin and Golden Horde cities [@solovyev2022semibugry; @vasilyev2015saksin; @vasilyev2020samosdelka; @zilivinskaya2014ocherki; @yegorov1985geografiya; @fyodorovdavydov1994goroda; @nedashkovsky2000ukek; @nedashkovsky2010goroda; @nedashkovsky2022predmety; @shigapov2022selishch; @zeleneev2018selitrennom; @pigarev2021topografii] and Russian garrison rolls, Imperial tax revisions (*revizii*), Volga German colony censuses, Kalmyk and Inner (Bukey) Kazakh Horde records and the 1897 Census [@zaitsev2006astrakhanskoye; @syzranov2014astrakhani; @trepavlov2016nogayskoy; @moiseev2015stepnyye; @kabuzan1963narodonaseleniye; @solovyov2013saratovskoy; @brylyov2018volgogradskoy; @pleve1998nemetskiye; @doenninghaus2011nemetskikh; @ochirov2008tyurkoyazychnyye; @okonova2012migratsii; @kyshpanakov2026kalmyki; @belousov2019bukeyevskoy; @pirova2020tatarakh; @troynitsky1904saratov; @troynitsky1904astrakhan].

# Prehistoric, Bronze Age, and Sarmatian Settlements (10000BC - 400AD)

<figure class="crd-table-figure" id="tab:volga-ancient">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical / Alternative Names</th><th class="crd-th">Coords</th><th class="crd-th">Occupied Span</th><th class="crd-th">Population Estimates by Date</th></tr></thead>
<tbody>
<tr><td class="crd-td">Seroglazovka</td><td class="crd-td">Seroglazovskaya stoyanka</td><td class="crd-td">47,03°N, 47,45°E</td><td class="crd-td">10000-8000BC</td><td class="crd-td">10000BC: 25; 8000BC: 35</td></tr>
<tr><td class="crd-td">Zhe-Kalgan</td><td class="crd-td">Zhe-Kalgan</td><td class="crd-td">47,18°N, 48,12°E</td><td class="crd-td">9500-7500BC</td><td class="crd-td">9500BC: 20; 7500BC: 35</td></tr>
<tr><td class="crd-td">Kairshak I</td><td class="crd-td">Kairshak I</td><td class="crd-td">46,78°N, 48,54°E</td><td class="crd-td">6800-6200BC</td><td class="crd-td">6800BC: 35; 6200BC: 45</td></tr>
<tr><td class="crd-td">Kairshak III</td><td class="crd-td">Kairshak III</td><td class="crd-td">46,78°N, 48,55°E</td><td class="crd-td">6700-6000BC</td><td class="crd-td">6700BC: 45; 6000BC: 55</td></tr>
<tr><td class="crd-td">Baibek</td><td class="crd-td">Baybek</td><td class="crd-td">46,70°N, 48,72°E</td><td class="crd-td">6500-5800BC</td><td class="crd-td">6500BC: 40; 5800BC: 50</td></tr>
<tr><td class="crd-td">Kugat</td><td class="crd-td">Kugat IV</td><td class="crd-td">46,82°N, 48,68°E</td><td class="crd-td">6400-5600BC</td><td class="crd-td">6400BC: 35; 5600BC: 45</td></tr>
<tr><td class="crd-td">Dzhangar</td><td class="crd-td">Dzhangar</td><td class="crd-td">47,42°N, 45,33°E</td><td class="crd-td">6000-5000BC</td><td class="crd-td">6000BC: 50; 5500BC: 60; 5000BC: 65</td></tr>
<tr><td class="crd-td">Varfolomeyevka</td><td class="crd-td">Varfolomeevskaya stoyanka</td><td class="crd-td">50,15°N, 48,55°E</td><td class="crd-td">6000-5000BC</td><td class="crd-td">6000BC: 75; 5500BC: 85; 5000BC: 90</td></tr>
<tr><td class="crd-td">Kombak-Te</td><td class="crd-td">Kombak-Te</td><td class="crd-td">47,24°N, 48,45°E</td><td class="crd-td">5800-5000BC</td><td class="crd-td">5800BC: 45; 5000BC: 60</td></tr>
<tr><td class="crd-td">Tenteksor I</td><td class="crd-td">Tenteksor I</td><td class="crd-td">46,85°N, 48,80°E</td><td class="crd-td">5500-5000BC</td><td class="crd-td">5500BC: 55; 5000BC: 65</td></tr>
<tr><td class="crd-td">Lebyazhinka IV</td><td class="crd-td">Lebyazhinka IV</td><td class="crd-td">53,42°N, 50,38°E</td><td class="crd-td">5200-3900BC</td><td class="crd-td">5200BC: 65; 4500BC: 80; 3900BC: 90</td></tr>
<tr><td class="crd-td">Maksimovka I</td><td class="crd-td">Maksimovskaya I stoyanka</td><td class="crd-td">52,85°N, 50,45°E</td><td class="crd-td">4800-4300BC</td><td class="crd-td">4800BC: 70; 4300BC: 85</td></tr>
<tr><td class="crd-td">Khvalynsk I</td><td class="crd-td">Khvalynskiy I mogilnik i poselenie</td><td class="crd-td">52,53°N, 48,10°E</td><td class="crd-td">4500-4200BC</td><td class="crd-td">4500BC: 95; 4200BC: 115</td></tr>
<tr><td class="crd-td">Syezzheye</td><td class="crd-td">Sezzhee</td><td class="crd-td">52,95°N, 51,35°E</td><td class="crd-td">4500-4000BC</td><td class="crd-td">4500BC: 75; 4000BC: 90</td></tr>
<tr><td class="crd-td">Khvalynsk II</td><td class="crd-td">Khvalynskiy II mogilnik i poselenie</td><td class="crd-td">52,54°N, 48,10°E</td><td class="crd-td">4300-4000BC</td><td class="crd-td">4300BC: 65; 4000BC: 80</td></tr>
<tr><td class="crd-td">Khlopkov Bugor</td><td class="crd-td">Khlopkov Bugor</td><td class="crd-td">51,65°N, 46,18°E</td><td class="crd-td">4200-3800BC</td><td class="crd-td">4200BC: 70; 3800BC: 85</td></tr>
<tr><td class="crd-td">Berezhnovka</td><td class="crd-td">Berezhnovka I-II</td><td class="crd-td">50,32°N, 46,38°E</td><td class="crd-td">3000-1500BC</td><td class="crd-td">3000BC: 110; 2400BC: 145; 1500BC: 210</td></tr>
<tr><td class="crd-td">Bykovo-Kurgans</td><td class="crd-td">Bykovskiy kompleks</td><td class="crd-td">49,76°N, 45,39°E</td><td class="crd-td">2800BC - 100AD</td><td class="crd-td">2800BC: 115; 2000BC: 140; 1500BC: 230; 100AD: 320</td></tr>
<tr><td class="crd-td">Politotdelskoye</td><td class="crd-td">Politotdelskoe</td><td class="crd-td">50,08°N, 45,95°E</td><td class="crd-td">2800-1500BC</td><td class="crd-td">2800BC: 105; 2200BC: 130; 1500BC: 195</td></tr>
<tr><td class="crd-td">Staraya Poltavka-Bronze</td><td class="crd-td">Staraya Poltavka (Epokha bronzy)</td><td class="crd-td">50,48°N, 46,48°E</td><td class="crd-td">2600-1500BC</td><td class="crd-td">2600BC: 140; 2200BC: 175; 1500BC: 220</td></tr>
<tr><td class="crd-td">Kalinovka-Bronze</td><td class="crd-td">Kalinovskoe poselenie i mogilnik</td><td class="crd-td">49,02°N, 44,78°E</td><td class="crd-td">2500BC - 100AD</td><td class="crd-td">2500BC: 120; 1500BC: 210; 100AD: 290</td></tr>
<tr><td class="crd-td">Pokrovsk-Srubnaya</td><td class="crd-td">Pokrovskoe srubnoe poselenie</td><td class="crd-td">51,48°N, 46,12°E</td><td class="crd-td">1800-1200BC</td><td class="crd-td">1800BC: 220; 1500BC: 360; 1200BC: 240</td></tr>
<tr><td class="crd-td">Komarovka-Bronze</td><td class="crd-td">Komarovka</td><td class="crd-td">51,80°N, 45,50°E</td><td class="crd-td">1700-1200BC</td><td class="crd-td">1700BC: 190; 1500BC: 280; 1200BC: 185</td></tr>
<tr><td class="crd-td">Smelovka</td><td class="crd-td">Smelovka</td><td class="crd-td">51,28°N, 46,02°E</td><td class="crd-td">1700-1200BC</td><td class="crd-td">1700BC: 165; 1500BC: 240; 1200BC: 160</td></tr>
<tr><td class="crd-td">Krivaya Luka</td><td class="crd-td">Krivaya Luka</td><td class="crd-td">47,92°N, 46,22°E</td><td class="crd-td">500BC - 100AD</td><td class="crd-td">500BC: 380; 300BC: 520; 100AD: 650</td></tr>
<tr><td class="crd-td">Prokhorovka-Sarmatian</td><td class="crd-td">Prokhorovka</td><td class="crd-td">52,12°N, 54,45°E</td><td class="crd-td">350-150BC</td><td class="crd-td">350BC: 580; 250BC: 720; 150BC: 540</td></tr>
<tr><td class="crd-td">Baranovka-Sarmatian</td><td class="crd-td">Baranovka</td><td class="crd-td">50,15°N, 45,42°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 420; 50AD: 580; 150AD: 640</td></tr>
<tr><td class="crd-td">Nikolskoye-Sarmatian</td><td class="crd-td">Nikolskoe (Sarmatskiy kompleks)</td><td class="crd-td">47,76°N, 46,42°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 480; 50AD: 680; 150AD: 740</td></tr>
<tr><td class="crd-td">Suslovskiy</td><td class="crd-td">Suslovskiy kurgannyy mogilnik i zimove</td><td class="crd-td">51,42°N, 46,85°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 350; 50AD: 480; 150AD: 520</td></tr>
<tr><td class="crd-td">Verkhneye Pogromnoye</td><td class="crd-td">Verkhnee Pogromnoe</td><td class="crd-td">48,88°N, 45,08°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 520; 50AD: 750; 150AD: 850</td></tr>
<tr><td class="crd-td">Kosika-Sarmatian</td><td class="crd-td">Kosika (Sarmatskiy tsentr)</td><td class="crd-td">47,12°N, 47,20°E</td><td class="crd-td">50BC - 150AD</td><td class="crd-td">50BC: 650; 50AD: 950; 150AD: 1,1k</td></tr>
<tr><td class="crd-td">Uspenka-Sarmatian</td><td class="crd-td">Uspenka</td><td class="crd-td">48,32°N, 45,88°E</td><td class="crd-td">1-250AD</td><td class="crd-td">1AD: 420; 150AD: 560; 250AD: 390</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Prehistoric, Eneolithic, Bronze Age Srubnaya and Sarmatian settlements of the Lower Volga (10000BC - 400AD) compiled from lower_volga_settlements.json.</figcaption>
</figure>

# Medieval Khazar, Pre-Mongol Saksin, and Golden Horde Settlements (750 - 1550AD)

<figure class="crd-table-figure" id="tab:volga-medieval">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Historical Names</th><th class="crd-th">Coords</th><th class="crd-th">800-900AD</th><th class="crd-th">1150-1200AD</th><th class="crd-th">1260-1320AD</th><th class="crd-th">1340AD</th><th class="crd-th">1380-1550AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Semibugry</td><td class="crd-td">Itil; Atil</td><td class="crd-td">46,16°N, 48,29°E</td><td class="crd-td">24,0k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Barany Bugor</td><td class="crd-td">Baraniy Bugor; Zapadnyy Itil</td><td class="crd-td">46,16°N, 48,27°E</td><td class="crd-td">8,0k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Mayachnoye</td><td class="crd-td">Mayachnoe gorodishche i mogilnik</td><td class="crd-td">46,32°N, 48,18°E</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Samosdelka</td><td class="crd-td">Samosdelskoe gorodishche; Saksin</td><td class="crd-td">46,03°N, 47,84°E</td><td class="crd-td">14,0k</td><td class="crd-td">20,0k</td><td class="crd-td">9,0k</td><td class="crd-td">8,0k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td">Sarai Batu</td><td class="crd-td">Saray-Batu; Saray al-Makhrusa</td><td class="crd-td">47,17°N, 47,44°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55,0k</td><td class="crd-td">68,0k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td">Ukek</td><td class="crd-td">Uvekskoe gorodishche</td><td class="crd-td">51,43°N, 45,96°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">9,5k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td">Beldzhamen</td><td class="crd-td">Bezdezh; Vodyanskoe gorodishche</td><td class="crd-td">49,09°N, 44,88°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">7,5k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td">Bagaevskoye Selishche</td><td class="crd-td">Bagaevskoe selishche</td><td class="crd-td">51,38°N, 45,85°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">950</td><td class="crd-td">350</td></tr>
<tr><td class="crd-td">Khmelevskoye Selishche</td><td class="crd-td">Khmelevskoe I selishche</td><td class="crd-td">51,32°N, 45,78°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">850</td><td class="crd-td">320</td></tr>
<tr><td class="crd-td">Krasnoyarskoye Gorodishche</td><td class="crd-td">Krasnoyarskoe gorodishche</td><td class="crd-td">46,53°N, 48,35°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,0k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td">Moshayk</td><td class="crd-td">Gorodishche Moshaik</td><td class="crd-td">46,35°N, 48,15°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,5k</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td">Saraichik</td><td class="crd-td">Saraychik; Saray-Dzhuk</td><td class="crd-td">47,52°N, 51,92°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">16,0k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td">Alexeyevskoye Selishche</td><td class="crd-td">Alekseevskoe selishche</td><td class="crd-td">52,31°N, 47,92°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">650</td><td class="crd-td">250</td></tr>
<tr><td class="crd-td">Hajji-Tarkhan</td><td class="crd-td">Khadzhi-Tarkhan; Sharenyy Bugor</td><td class="crd-td">46,42°N, 48,03°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">21,5k</td><td class="crd-td">11,0k</td></tr>
<tr><td class="crd-td">Kolotov Buyerak</td><td class="crd-td">Kolotov Buerak</td><td class="crd-td">51,40°N, 45,89°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">380</td><td class="crd-td">550</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Podgornoye Selishche</td><td class="crd-td">Podgornoe selishche</td><td class="crd-td">51,46°N, 45,92°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">350</td><td class="crd-td">520</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Shirokiy Buyerak</td><td class="crd-td">Shirokiy Buerak</td><td class="crd-td">51,28°N, 45,81°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">600</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Akhmat Gorodishche</td><td class="crd-td">Akhmatskoe gorodishche</td><td class="crd-td">50,92°N, 45,75°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">900</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Chardymskoye Gorodishche</td><td class="crd-td">Chardymskoe gorodishche</td><td class="crd-td">51,82°N, 46,38°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">780</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Lapas</td><td class="crd-td">Gorodishche Ak-Saray; Davlet-Khana</td><td class="crd-td">47,01°N, 47,62°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">600</td></tr>
<tr><td class="crd-td">Mechetnoye Gorodishche</td><td class="crd-td">Mechetnoe gorodishche</td><td class="crd-td">50,65°N, 45,50°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">650</td></tr>
<tr><td class="crd-td">Ternovskoye Gorodishche</td><td class="crd-td">Ternovskoe gorodishche</td><td class="crd-td">50,32°N, 45,45°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">550</td></tr>
<tr><td class="crd-td">Bezrodnoye-Medieval</td><td class="crd-td">Bezrodnoe zolotoordynskoe poselenie</td><td class="crd-td">48,78°N, 44,78°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">1,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td">Sarai al-Jadid</td><td class="crd-td">Saray al-Dzhedid; Saray-Berke</td><td class="crd-td">48,66°N, 45,37°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35,0k</td><td class="crd-td">62,0k</td><td class="crd-td">4,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Medieval Khazar (Itil), Pre-Mongol Saksin, Golden Horde and Astrakhan/Nogai Khanate cities and rural settlements of the Lower Volga (750 - 1550AD) compiled from lower_volga_settlements.json.</figcaption>
</figure>

# Early Modern and Imperial Settlements, Volga German Colonies, and Steppe Centres (1558 - 1900AD)

<figure class="crd-table-figure" id="tab:volga-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Coords</th><th class="crd-th">1700-1740AD</th><th class="crd-th">1750-1790AD</th><th class="crd-th">1800-1826AD</th><th class="crd-th">1850-1880AD</th><th class="crd-th">1897AD</th><th class="crd-th">1900AD</th></tr></thead>
<tbody>
<tr><td class="crd-td">Astrakhan</td><td class="crd-td">Zayachiy ostrov</td><td class="crd-td">46,35°N, 48,04°E</td><td class="crd-td">14,0k</td><td class="crd-td">21,5k</td><td class="crd-td">32,5k</td><td class="crd-td">48,0k</td><td class="crd-td">112,9k</td><td class="crd-td">118,0k</td></tr>
<tr><td class="crd-td">Tsaritsyn</td><td class="crd-td">Volgograd</td><td class="crd-td">48,71°N, 44,51°E</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">12,5k</td><td class="crd-td">55,2k</td><td class="crd-td">62,0k</td></tr>
<tr><td class="crd-td">Saratov</td><td class="crd-td">Saratov</td><td class="crd-td">51,53°N, 46,03°E</td><td class="crd-td">5,5k</td><td class="crd-td">11,5k</td><td class="crd-td">24,5k</td><td class="crd-td">86,0k</td><td class="crd-td">137,1k</td><td class="crd-td">143,0k</td></tr>
<tr><td class="crd-td">Chyorny Yar</td><td class="crd-td">Chyornyy Yar; Chernoyarskaya krepost</td><td class="crd-td">48,06°N, 46,11°E</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td">Khvalynsk</td><td class="crd-td">Sosnovyy Ostrov</td><td class="crd-td">52,49°N, 48,11°E</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">5,8k</td><td class="crd-td">11,2k</td><td class="crd-td">15,1k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td">Krasny Yar</td><td class="crd-td">Krasnyy Yar</td><td class="crd-td">46,53°N, 48,35°E</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td">Kamyshin</td><td class="crd-td">Dmitrievsk</td><td class="crd-td">50,10°N, 45,42°E</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">9,4k</td><td class="crd-td">16,3k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td">Kamyzyak</td><td class="crd-td">Kamyzyak</td><td class="crd-td">46,12°N, 48,08°E</td><td class="crd-td">400</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">4,0k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td">Balanda</td><td class="crd-td">Kalininsk</td><td class="crd-td">51,50°N, 44,47°E</td><td class="crd-td">650</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">5,9k</td><td class="crd-td">8,9k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td">Voskresenskoye</td><td class="crd-td">Voskresenskoe</td><td class="crd-td">51,83°N, 46,90°E</td><td class="crd-td">600</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">5,1k</td><td class="crd-td">7,6k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td">Zolotoye</td><td class="crd-td">Zolotoe</td><td class="crd-td">50,83°N, 45,93°E</td><td class="crd-td">650</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">5,6k</td><td class="crd-td">8,4k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td">Bazarny Karabulak</td><td class="crd-td">Bazarnyy Karabulak</td><td class="crd-td">52,27°N, 46,41°E</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">5,2k</td><td class="crd-td">8,4k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td">Petrovsk</td><td class="crd-td">Petrovsk</td><td class="crd-td">52,31°N, 45,39°E</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td><td class="crd-td">9,2k</td><td class="crd-td">13,3k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td">Yelan</td><td class="crd-td">Elan</td><td class="crd-td">50,95°N, 43,73°E</td><td class="crd-td">650</td><td class="crd-td">1,9k</td><td class="crd-td">3,8k</td><td class="crd-td">6,8k</td><td class="crd-td">11,8k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td">Kuznetsk</td><td class="crd-td">Naryshkino</td><td class="crd-td">53,12°N, 46,60°E</td><td class="crd-td">1,2k</td><td class="crd-td">2,8k</td><td class="crd-td">5,4k</td><td class="crd-td">12,1k</td><td class="crd-td">20,5k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td">Novye Burasy</td><td class="crd-td">Novye Burasy</td><td class="crd-td">52,13°N, 46,08°E</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">4,1k</td><td class="crd-td">6,8k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td">Rtishchevo</td><td class="crd-td">Rtishchevo</td><td class="crd-td">52,25°N, 43,78°E</td><td class="crd-td">400</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td">Serdobsk</td><td class="crd-td">Bolshaya Serdoba</td><td class="crd-td">52,46°N, 44,22°E</td><td class="crd-td">950</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">5,4k</td><td class="crd-td">7,3k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td">Solenoye Zaymishche</td><td class="crd-td">Solenoe Zaymishche</td><td class="crd-td">47,91°N, 46,16°E</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,9k</td><td class="crd-td">5,2k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td">Volsk</td><td class="crd-td">Malykovka</td><td class="crd-td">52,04°N, 47,38°E</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">8,4k</td><td class="crd-td">18,9k</td><td class="crd-td">27,1k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td">Rudnya</td><td class="crd-td">Rudnya</td><td class="crd-td">50,80°N, 44,55°E</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,9k</td><td class="crd-td">8,1k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td">Selitrennoye</td><td class="crd-td">Selitrennoe (selo)</td><td class="crd-td">47,17°N, 47,44°E</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td">Atkarsk</td><td class="crd-td">Etkara</td><td class="crd-td">51,87°N, 45,01°E</td><td class="crd-td">750</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">4,1k</td><td class="crd-td">7,3k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td">Arkadak</td><td class="crd-td">Arkadak</td><td class="crd-td">51,93°N, 43,50°E</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">4,2k</td><td class="crd-td">7,0k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Antipovka</td><td class="crd-td">Antipovka</td><td class="crd-td">49,83°N, 45,31°E</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">3,3k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td">Dubovka</td><td class="crd-td">Posad Dubovka</td><td class="crd-td">49,06°N, 44,83°E</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">6,4k</td><td class="crd-td">11,8k</td><td class="crd-td">16,3k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td">Gorny Balykley</td><td class="crd-td">Gornyy Balykley</td><td class="crd-td">49,55°N, 45,06°E</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">5,2k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td">Verkhniy Balykley</td><td class="crd-td">Verkhniy Balykley</td><td class="crd-td">49,49°N, 45,09°E</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td><td class="crd-td">6,8k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td">Yenotayevsk</td><td class="crd-td">Enotaevsk; Enotaevskaya krepost</td><td class="crd-td">47,24°N, 47,03°E</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,0k</td></tr>
<tr><td class="crd-td">Nikolayevskaya Sloboda</td><td class="crd-td">Nikolaevskaya sloboda; Nikolaevsk-Volzhskiy</td><td class="crd-td">50,03°N, 45,46°E</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">3,6k</td><td class="crd-td">9,8k</td><td class="crd-td">18,4k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td">Pokrovskaya Sloboda</td><td class="crd-td">Pokrovsk; Engels</td><td class="crd-td">51,48°N, 46,12°E</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">4,8k</td><td class="crd-td">11,2k</td><td class="crd-td">21,6k</td><td class="crd-td">23,0k</td></tr>
<tr><td class="crd-td">Balashov</td><td class="crd-td">Balashov</td><td class="crd-td">51,55°N, 43,17°E</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">5,8k</td><td class="crd-td">10,3k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td">Elton</td><td class="crd-td">Eltonskiy solyanoy promysel</td><td class="crd-td">49,13°N, 46,85°E</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">4,6k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td">Kamenny Yar</td><td class="crd-td">Kamennyy Yar</td><td class="crd-td">48,44°N, 45,52°E</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,6k</td><td class="crd-td">3,2k</td><td class="crd-td">5,7k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td">Samoylovka</td><td class="crd-td">Samoylovka</td><td class="crd-td">51,18°N, 43,70°E</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">2,7k</td><td class="crd-td">5,4k</td><td class="crd-td">9,6k</td><td class="crd-td">10,0k</td></tr>
<tr><td class="crd-td">Srednyaya Akhtuba</td><td class="crd-td">Akhtubinskoe</td><td class="crd-td">48,70°N, 44,87°E</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">1,8k</td><td class="crd-td">3,9k</td><td class="crd-td">6,4k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td">Dergachi</td><td class="crd-td">Dergachi</td><td class="crd-td">51,23°N, 48,77°E</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">6,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Novouzensk</td><td class="crd-td">Chertanla</td><td class="crd-td">50,46°N, 48,14°E</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,8k</td><td class="crd-td">5,6k</td><td class="crd-td">13,3k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td">Nikolskoye-Volga</td><td class="crd-td">Nikolskoe (Astrakhanskaya gub.)</td><td class="crd-td">47,77°N, 46,42°E</td><td class="crd-td">-</td><td class="crd-td">600</td><td class="crd-td">1,6k</td><td class="crd-td">3,3k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td">Balakovo</td><td class="crd-td">Balakovo</td><td class="crd-td">52,03°N, 47,78°E</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">2,4k</td><td class="crd-td">7,8k</td><td class="crd-td">15,9k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td">Nikolayevsk-Irgiz</td><td class="crd-td">Nikolaevsk; Mechetnaya sloboda</td><td class="crd-td">52,02°N, 48,80°E</td><td class="crd-td">-</td><td class="crd-td">900</td><td class="crd-td">2,4k</td><td class="crd-td">5,9k</td><td class="crd-td">12,6k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td">Zamyany</td><td class="crd-td">Zamyanovskaya stanitsa</td><td class="crd-td">46,81°N, 47,62°E</td><td class="crd-td">-</td><td class="crd-td">500</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td">Kamenka</td><td class="crd-td">Ber; Bähr</td><td class="crd-td">50,56°N, 45,45°E</td><td class="crd-td">-</td><td class="crd-td">345</td><td class="crd-td">950</td><td class="crd-td">2,5k</td><td class="crd-td">5,0k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td">Sarepta</td><td class="crd-td">Sarepta</td><td class="crd-td">48,52°N, 44,55°E</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">780</td><td class="crd-td">1,4k</td><td class="crd-td">5,6k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td">Vetlyanka</td><td class="crd-td">Vetlyanskaya stanitsa</td><td class="crd-td">47,55°N, 46,78°E</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,0k</td></tr>
<tr><td class="crd-td">Mariental</td><td class="crd-td">Tonkoshurovka; Sovetskoe</td><td class="crd-td">51,41°N, 46,70°E</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">1,4k</td><td class="crd-td">4,1k</td><td class="crd-td">7,2k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td">Nachalovo</td><td class="crd-td">Cherepakha</td><td class="crd-td">46,34°N, 48,20°E</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,7k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td">Balzer</td><td class="crd-td">Golyy Karamysh; Baltser</td><td class="crd-td">51,02°N, 45,70°E</td><td class="crd-td">-</td><td class="crd-td">534</td><td class="crd-td">1,4k</td><td class="crd-td">4,1k</td><td class="crd-td">8,2k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td">Doenhof</td><td class="crd-td">Gololobovka; Dengof</td><td class="crd-td">50,98°N, 45,55°E</td><td class="crd-td">-</td><td class="crd-td">510</td><td class="crd-td">1,4k</td><td class="crd-td">3,9k</td><td class="crd-td">6,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Frank</td><td class="crd-td">Medveditskiy Krestovyy Buerak; Medveditsa</td><td class="crd-td">50,80°N, 44,83°E</td><td class="crd-td">-</td><td class="crd-td">552</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k</td><td class="crd-td">9,6k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td">Grimm</td><td class="crd-td">Lesnoy Karamysh; Kamenskiy</td><td class="crd-td">50,92°N, 45,45°E</td><td class="crd-td">-</td><td class="crd-td">780</td><td class="crd-td">1,9k</td><td class="crd-td">5,8k</td><td class="crd-td">10,8k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td">Hussenbach</td><td class="crd-td">Linevo Ozero; Gussenbakh</td><td class="crd-td">50,70°N, 44,87°E</td><td class="crd-td">-</td><td class="crd-td">525</td><td class="crd-td">1,4k</td><td class="crd-td">4,2k</td><td class="crd-td">8,2k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td">Katharinenstadt</td><td class="crd-td">Ekaterinenshtadt; Baronsk</td><td class="crd-td">51,70°N, 46,75°E</td><td class="crd-td">-</td><td class="crd-td">725</td><td class="crd-td">1,6k</td><td class="crd-td">5,2k</td><td class="crd-td">10,3k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td">Krasny Yar-German</td><td class="crd-td">Krasnyy Yar (Valter); Walter</td><td class="crd-td">50,70°N, 45,28°E</td><td class="crd-td">-</td><td class="crd-td">430</td><td class="crd-td">1,1k</td><td class="crd-td">3,3k</td><td class="crd-td">6,2k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td">Kukkus</td><td class="crd-td">Volskoe; Privolzhskoe</td><td class="crd-td">51,02°N, 45,95°E</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">900</td><td class="crd-td">2,6k</td><td class="crd-td">4,6k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td">Messer</td><td class="crd-td">Ust-Zolikha</td><td class="crd-td">50,92°N, 45,60°E</td><td class="crd-td">-</td><td class="crd-td">415</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k</td><td class="crd-td">5,4k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td">Norka</td><td class="crd-td">Nekrasovo</td><td class="crd-td">51,15°N, 45,38°E</td><td class="crd-td">-</td><td class="crd-td">957</td><td class="crd-td">2,4k</td><td class="crd-td">7,3k</td><td class="crd-td">11,6k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td">Schaffhausen</td><td class="crd-td">Volkovo; Shafgauzen</td><td class="crd-td">51,74°N, 46,92°E</td><td class="crd-td">-</td><td class="crd-td">330</td><td class="crd-td">950</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k</td><td class="crd-td">5,0k</td></tr>
<tr><td class="crd-td">Schoenchen</td><td class="crd-td">Paninskoe; Shenkhen</td><td class="crd-td">51,59°N, 46,60°E</td><td class="crd-td">-</td><td class="crd-td">295</td><td class="crd-td">850</td><td class="crd-td">2,4k</td><td class="crd-td">4,4k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td">Seelmann</td><td class="crd-td">Rovnoe; Zelman</td><td class="crd-td">50,77°N, 46,05°E</td><td class="crd-td">-</td><td class="crd-td">465</td><td class="crd-td">1,3k</td><td class="crd-td">3,9k</td><td class="crd-td">7,0k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Warenburg</td><td class="crd-td">Privalnoe; Varenburg</td><td class="crd-td">50,95°N, 46,02°E</td><td class="crd-td">-</td><td class="crd-td">610</td><td class="crd-td">1,6k</td><td class="crd-td">4,6k</td><td class="crd-td">8,3k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td">Bykovo</td><td class="crd-td">Bykovskaya sloboda</td><td class="crd-td">49,77°N, 45,38°E</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">7,8k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td">Raygorod</td><td class="crd-td">Popovskoe</td><td class="crd-td">48,55°N, 44,97°E</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,0k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td">Zaplavnoye</td><td class="crd-td">Zaplavnoe</td><td class="crd-td">48,70°N, 45,02°E</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,1k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td">Kharabali</td><td class="crd-td">Kharabalinskoe</td><td class="crd-td">47,42°N, 47,25°E</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td">Vladimirovka</td><td class="crd-td">Akhtubinsk</td><td class="crd-td">48,28°N, 46,17°E</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">7,9k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td">Sasykoli</td><td class="crd-td">Sasykoli</td><td class="crd-td">47,55°N, 46,99°E</td><td class="crd-td">-</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,1k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td">Alexandrov Gay</td><td class="crd-td">Aleksandrov Gay</td><td class="crd-td">50,13°N, 48,57°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">3,6k</td><td class="crd-td">7,4k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td">Kolobovka</td><td class="crd-td">Kolobovka</td><td class="crd-td">48,66°N, 45,48°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">700</td><td class="crd-td">2,4k</td><td class="crd-td">4,6k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td">Kalmyk Bazar</td><td class="crd-td">Kalmytskiy Bazar; Privolzhe</td><td class="crd-td">46,40°N, 47,97°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td">Prishib</td><td class="crd-td">Leninsk</td><td class="crd-td">48,70°N, 45,20°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td">Bolkhuny</td><td class="crd-td">Bolkhuny</td><td class="crd-td">47,98°N, 46,41°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">800</td><td class="crd-td">3,1k</td><td class="crd-td">6,0k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td">Kapustin Yar</td><td class="crd-td">Kapustin Yar</td><td class="crd-td">48,58°N, 45,73°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">3,8k</td><td class="crd-td">6,9k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Tsarev</td><td class="crd-td">Sloboda Tsarevka</td><td class="crd-td">48,66°N, 45,38°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">4,6k</td><td class="crd-td">7,0k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td">Ikryanoye</td><td class="crd-td">Ikryanoe</td><td class="crd-td">46,09°N, 47,73°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">1,8k</td><td class="crd-td">3,8k</td><td class="crd-td">4,0k</td></tr>
<tr><td class="crd-td">Pologoye Zaymishche</td><td class="crd-td">Pologoe Zaymishche</td><td class="crd-td">48,42°N, 45,95°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">2,3k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td">Khosheutovo</td><td class="crd-td">Khosheutovskiy khurul</td><td class="crd-td">47,09°N, 47,59°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">850</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td">Zolotukha</td><td class="crd-td">Zolotukha</td><td class="crd-td">47,77°N, 46,66°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">5,0k</td></tr>
<tr><td class="crd-td">Khanskaya Stavka</td><td class="crd-td">Urda; Khan-Ordasy</td><td class="crd-td">48,77°N, 47,44°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">450</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td">Remontnoye</td><td class="crd-td">Remontnoe</td><td class="crd-td">46,56°N, 43,66°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">5,8k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td">Volnoye</td><td class="crd-td">Volnoe; Knyazhevo</td><td class="crd-td">47,06°N, 47,56°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td">Baskunchak</td><td class="crd-td">Baskunchakskiy promysel</td><td class="crd-td">48,20°N, 46,88°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">8,2k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td">Gnadenflur</td><td class="crd-td">Florskoe; Gnadenflyur</td><td class="crd-td">51,19°N, 47,66°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td">Oranzherei</td><td class="crd-td">Oranzherei</td><td class="crd-td">45,84°N, 47,56°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td">Priyutnoye</td><td class="crd-td">Priyutnoe</td><td class="crd-td">46,10°N, 43,50°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">2,0k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td">Marfino</td><td class="crd-td">Marfino</td><td class="crd-td">46,41°N, 48,72°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td">Talovka-Bukey</td><td class="crd-td">Talovka; Kaztalovka</td><td class="crd-td">49,77°N, 48,59°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td">Tsvetnoye</td><td class="crd-td">Tsvetnoe</td><td class="crd-td">46,23°N, 48,62°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td">Elista</td><td class="crd-td">Elista</td><td class="crd-td">46,31°N, 44,26°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td">Novaya Kazanka</td><td class="crd-td">Zhangala</td><td class="crd-td">49,22°N, 49,09°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">650</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Russian fortress cities, uyezd towns, slobodas, Volga German colonies and Kalmyk/Kazakh steppe centres of the Lower Volga (1558 - 1900AD) compiled from lower_volga_settlements.json.</figcaption>
</figure>

# Complete Settlement Gazetteer

<figure class="crd-table-figure" id="tab:volga-all">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Stadester Key</th><th class="crd-th">Coords</th><th class="crd-th">Occupied Span</th><th class="crd-th">Complete Population Series (Year: Population)</th></tr></thead>
<tbody>
<tr><td class="crd-td">Seroglazovka-Russia</td><td class="crd-td">47,03°N, 47,45°E</td><td class="crd-td">10000-8000BC</td><td class="crd-td">10000BC: 25; 8000BC: 35</td></tr>
<tr><td class="crd-td">Zhe-Kalgan-Russia</td><td class="crd-td">47,18°N, 48,12°E</td><td class="crd-td">9500-7500BC</td><td class="crd-td">9500BC: 20; 7500BC: 35</td></tr>
<tr><td class="crd-td">Kairshak I-Russia</td><td class="crd-td">46,78°N, 48,54°E</td><td class="crd-td">6800-6200BC</td><td class="crd-td">6800BC: 35; 6200BC: 45</td></tr>
<tr><td class="crd-td">Kairshak III-Russia</td><td class="crd-td">46,78°N, 48,55°E</td><td class="crd-td">6700-6000BC</td><td class="crd-td">6700BC: 45; 6000BC: 55</td></tr>
<tr><td class="crd-td">Baibek-Russia</td><td class="crd-td">46,70°N, 48,72°E</td><td class="crd-td">6500-5800BC</td><td class="crd-td">6500BC: 40; 5800BC: 50</td></tr>
<tr><td class="crd-td">Kugat-Russia</td><td class="crd-td">46,82°N, 48,68°E</td><td class="crd-td">6400-5600BC</td><td class="crd-td">6400BC: 35; 5600BC: 45</td></tr>
<tr><td class="crd-td">Dzhangar-Russia</td><td class="crd-td">47,42°N, 45,33°E</td><td class="crd-td">6000-5000BC</td><td class="crd-td">6000BC: 50; 5500BC: 60; 5000BC: 65</td></tr>
<tr><td class="crd-td">Varfolomeyevka-Russia</td><td class="crd-td">50,15°N, 48,55°E</td><td class="crd-td">6000-5000BC</td><td class="crd-td">6000BC: 75; 5500BC: 85; 5000BC: 90</td></tr>
<tr><td class="crd-td">Kombak-Te-Russia</td><td class="crd-td">47,24°N, 48,45°E</td><td class="crd-td">5800-5000BC</td><td class="crd-td">5800BC: 45; 5000BC: 60</td></tr>
<tr><td class="crd-td">Tenteksor I-Russia</td><td class="crd-td">46,85°N, 48,80°E</td><td class="crd-td">5500-5000BC</td><td class="crd-td">5500BC: 55; 5000BC: 65</td></tr>
<tr><td class="crd-td">Lebyazhinka IV-Russia</td><td class="crd-td">53,42°N, 50,38°E</td><td class="crd-td">5200-3900BC</td><td class="crd-td">5200BC: 65; 4500BC: 80; 3900BC: 90</td></tr>
<tr><td class="crd-td">Maksimovka I-Russia</td><td class="crd-td">52,85°N, 50,45°E</td><td class="crd-td">4800-4300BC</td><td class="crd-td">4800BC: 70; 4300BC: 85</td></tr>
<tr><td class="crd-td">Khvalynsk I-Russia</td><td class="crd-td">52,53°N, 48,10°E</td><td class="crd-td">4500-4200BC</td><td class="crd-td">4500BC: 95; 4200BC: 115</td></tr>
<tr><td class="crd-td">Syezzheye-Russia</td><td class="crd-td">52,95°N, 51,35°E</td><td class="crd-td">4500-4000BC</td><td class="crd-td">4500BC: 75; 4000BC: 90</td></tr>
<tr><td class="crd-td">Khvalynsk II-Russia</td><td class="crd-td">52,54°N, 48,10°E</td><td class="crd-td">4300-4000BC</td><td class="crd-td">4300BC: 65; 4000BC: 80</td></tr>
<tr><td class="crd-td">Khlopkov Bugor-Russia</td><td class="crd-td">51,65°N, 46,18°E</td><td class="crd-td">4200-3800BC</td><td class="crd-td">4200BC: 70; 3800BC: 85</td></tr>
<tr><td class="crd-td">Berezhnovka-Russia</td><td class="crd-td">50,32°N, 46,38°E</td><td class="crd-td">3000-1500BC</td><td class="crd-td">3000BC: 110; 2400BC: 145; 1500BC: 210</td></tr>
<tr><td class="crd-td">Bykovo-Kurgans-Russia</td><td class="crd-td">49,76°N, 45,39°E</td><td class="crd-td">2800BC - 100AD</td><td class="crd-td">2800BC: 115; 2000BC: 140; 1500BC: 230; 100AD: 320</td></tr>
<tr><td class="crd-td">Politotdelskoye-Russia</td><td class="crd-td">50,08°N, 45,95°E</td><td class="crd-td">2800-1500BC</td><td class="crd-td">2800BC: 105; 2200BC: 130; 1500BC: 195</td></tr>
<tr><td class="crd-td">Staraya Poltavka-Bronze-Russia</td><td class="crd-td">50,48°N, 46,48°E</td><td class="crd-td">2600-1500BC</td><td class="crd-td">2600BC: 140; 2200BC: 175; 1500BC: 220</td></tr>
<tr><td class="crd-td">Kalinovka-Bronze-Russia</td><td class="crd-td">49,02°N, 44,78°E</td><td class="crd-td">2500BC - 100AD</td><td class="crd-td">2500BC: 120; 1500BC: 210; 100AD: 290</td></tr>
<tr><td class="crd-td">Pokrovsk-Srubnaya-Russia</td><td class="crd-td">51,48°N, 46,12°E</td><td class="crd-td">1800-1200BC</td><td class="crd-td">1800BC: 220; 1500BC: 360; 1200BC: 240</td></tr>
<tr><td class="crd-td">Komarovka-Bronze-Russia</td><td class="crd-td">51,80°N, 45,50°E</td><td class="crd-td">1700-1200BC</td><td class="crd-td">1700BC: 190; 1500BC: 280; 1200BC: 185</td></tr>
<tr><td class="crd-td">Smelovka-Russia</td><td class="crd-td">51,28°N, 46,02°E</td><td class="crd-td">1700-1200BC</td><td class="crd-td">1700BC: 165; 1500BC: 240; 1200BC: 160</td></tr>
<tr><td class="crd-td">Krivaya Luka-Russia</td><td class="crd-td">47,92°N, 46,22°E</td><td class="crd-td">500BC - 100AD</td><td class="crd-td">500BC: 380; 300BC: 520; 100AD: 650</td></tr>
<tr><td class="crd-td">Prokhorovka-Sarmatian-Russia</td><td class="crd-td">52,12°N, 54,45°E</td><td class="crd-td">350-150BC</td><td class="crd-td">350BC: 580; 250BC: 720; 150BC: 540</td></tr>
<tr><td class="crd-td">Baranovka-Sarmatian-Russia</td><td class="crd-td">50,15°N, 45,42°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 420; 50AD: 580; 150AD: 640</td></tr>
<tr><td class="crd-td">Nikolskoye-Sarmatian-Russia</td><td class="crd-td">47,76°N, 46,42°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 480; 50AD: 680; 150AD: 740</td></tr>
<tr><td class="crd-td">Suslovskiy-Russia</td><td class="crd-td">51,42°N, 46,85°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 350; 50AD: 480; 150AD: 520</td></tr>
<tr><td class="crd-td">Verkhneye Pogromnoye-Russia</td><td class="crd-td">48,88°N, 45,08°E</td><td class="crd-td">100BC - 150AD</td><td class="crd-td">100BC: 520; 50AD: 750; 150AD: 850</td></tr>
<tr><td class="crd-td">Kosika-Sarmatian-Russia</td><td class="crd-td">47,12°N, 47,20°E</td><td class="crd-td">50BC - 150AD</td><td class="crd-td">50BC: 650; 50AD: 950; 150AD: 1,1k</td></tr>
<tr><td class="crd-td">Uspenka-Sarmatian-Russia</td><td class="crd-td">48,32°N, 45,88°E</td><td class="crd-td">1-250AD</td><td class="crd-td">1AD: 420; 150AD: 560; 250AD: 390</td></tr>
<tr><td class="crd-td">Semibugry-Russia</td><td class="crd-td">46,16°N, 48,29°E</td><td class="crd-td">750-965AD</td><td class="crd-td">750AD: 11,0k; 800AD: 18,0k; 900AD: 24,0k; 965AD: 8,0k</td></tr>
<tr><td class="crd-td">Barany Bugor-Russia</td><td class="crd-td">46,16°N, 48,27°E</td><td class="crd-td">780-965AD</td><td class="crd-td">780AD: 5,5k; 850AD: 7,5k; 900AD: 8,0k; 965AD: 2,5k</td></tr>
<tr><td class="crd-td">Mayachnoye-Russia</td><td class="crd-td">46,32°N, 48,18°E</td><td class="crd-td">850-1340AD</td><td class="crd-td">850AD: 1,4k; 900AD: 1,8k; 1340AD: 2,4k</td></tr>
<tr><td class="crd-td">Samosdelka-Russia</td><td class="crd-td">46,03°N, 47,84°E</td><td class="crd-td">850-1395AD</td><td class="crd-td">850AD: 9,5k; 900AD: 14,0k; 1000AD: 8,5k; 1150AD: 18,0k; 1200AD: 20,0k; 1300AD: 9,0k; 1340AD: 8,0k; 1395AD: 2,2k</td></tr>
<tr><td class="crd-td">Sarai Batu-Russia</td><td class="crd-td">47,17°N, 47,44°E</td><td class="crd-td">1254-1480AD</td><td class="crd-td">1254AD: 18,0k; 1280AD: 42,0k; 1300AD: 55,0k; 1340AD: 68,0k; 1380AD: 28,0k; 1400AD: 14,0k; 1450AD: 12,0k; 1480AD: 6,5k</td></tr>
<tr><td class="crd-td">Ukek-Russia</td><td class="crd-td">51,43°N, 45,96°E</td><td class="crd-td">1260-1395AD</td><td class="crd-td">1260AD: 4,5k; 1300AD: 7,8k; 1340AD: 9,5k; 1380AD: 5,2k; 1395AD: 1,2k</td></tr>
<tr><td class="crd-td">Beldzhamen-Russia</td><td class="crd-td">49,09°N, 44,88°E</td><td class="crd-td">1270-1370AD</td><td class="crd-td">1270AD: 3,8k; 1300AD: 6,2k; 1340AD: 7,5k; 1370AD: 3,2k</td></tr>
<tr><td class="crd-td">Bagaevskoye Selishche-Russia</td><td class="crd-td">51,38°N, 45,85°E</td><td class="crd-td">1280-1390AD</td><td class="crd-td">1280AD: 650; 1340AD: 950; 1390AD: 350</td></tr>
<tr><td class="crd-td">Khmelevskoye Selishche-Russia</td><td class="crd-td">51,32°N, 45,78°E</td><td class="crd-td">1280-1390AD</td><td class="crd-td">1280AD: 600; 1340AD: 850; 1390AD: 320</td></tr>
<tr><td class="crd-td">Krasnoyarskoye Gorodishche-Russia</td><td class="crd-td">46,53°N, 48,35°E</td><td class="crd-td">1280-1395AD</td><td class="crd-td">1280AD: 2,6k; 1340AD: 4,0k; 1395AD: 1,1k</td></tr>
<tr><td class="crd-td">Moshayk-Russia</td><td class="crd-td">46,35°N, 48,15°E</td><td class="crd-td">1280-1395AD</td><td class="crd-td">1280AD: 2,2k; 1340AD: 3,5k; 1395AD: 950</td></tr>
<tr><td class="crd-td">Saraichik-Russia</td><td class="crd-td">47,52°N, 51,92°E</td><td class="crd-td">1280-1550AD</td><td class="crd-td">1280AD: 9,5k; 1340AD: 16,0k; 1400AD: 5,5k; 1500AD: 8,0k; 1550AD: 8,5k</td></tr>
<tr><td class="crd-td">Alexeyevskoye Selishche-Russia</td><td class="crd-td">52,31°N, 47,92°E</td><td class="crd-td">1290-1390AD</td><td class="crd-td">1290AD: 450; 1340AD: 650; 1390AD: 250</td></tr>
<tr><td class="crd-td">Hajji-Tarkhan-Russia</td><td class="crd-td">46,42°N, 48,03°E</td><td class="crd-td">1290-1550AD</td><td class="crd-td">1290AD: 8,5k; 1340AD: 21,5k; 1380AD: 14,0k; 1400AD: 5,5k; 1460AD: 8,5k; 1500AD: 10,0k; 1550AD: 11,0k</td></tr>
<tr><td class="crd-td">Kolotov Buyerak-Russia</td><td class="crd-td">51,40°N, 45,89°E</td><td class="crd-td">1290-1340AD</td><td class="crd-td">1290AD: 380; 1340AD: 550</td></tr>
<tr><td class="crd-td">Podgornoye Selishche-Russia</td><td class="crd-td">51,46°N, 45,92°E</td><td class="crd-td">1290-1340AD</td><td class="crd-td">1290AD: 350; 1340AD: 520</td></tr>
<tr><td class="crd-td">Shirokiy Buyerak-Russia</td><td class="crd-td">51,28°N, 45,81°E</td><td class="crd-td">1290-1340AD</td><td class="crd-td">1290AD: 420; 1340AD: 600</td></tr>
<tr><td class="crd-td">Akhmat Gorodishche-Russia</td><td class="crd-td">50,92°N, 45,75°E</td><td class="crd-td">1300-1340AD</td><td class="crd-td">1300AD: 650; 1340AD: 900</td></tr>
<tr><td class="crd-td">Chardymskoye Gorodishche-Russia</td><td class="crd-td">51,82°N, 46,38°E</td><td class="crd-td">1300-1340AD</td><td class="crd-td">1300AD: 550; 1340AD: 780</td></tr>
<tr><td class="crd-td">Lapas-Russia</td><td class="crd-td">47,01°N, 47,62°E</td><td class="crd-td">1300-1395AD</td><td class="crd-td">1300AD: 1,6k; 1340AD: 2,5k; 1395AD: 600</td></tr>
<tr><td class="crd-td">Mechetnoye Gorodishche-Russia</td><td class="crd-td">50,65°N, 45,50°E</td><td class="crd-td">1300-1390AD</td><td class="crd-td">1300AD: 1,4k; 1340AD: 1,9k; 1390AD: 650</td></tr>
<tr><td class="crd-td">Ternovskoye Gorodishche-Russia</td><td class="crd-td">50,32°N, 45,45°E</td><td class="crd-td">1300-1390AD</td><td class="crd-td">1300AD: 1,1k; 1340AD: 1,5k; 1390AD: 550</td></tr>
<tr><td class="crd-td">Bezrodnoye-Medieval-Russia</td><td class="crd-td">48,78°N, 44,78°E</td><td class="crd-td">1310-1340AD</td><td class="crd-td">1310AD: 850; 1340AD: 1,2k</td></tr>
<tr><td class="crd-td">Sarai al-Jadid-Russia</td><td class="crd-td">48,66°N, 45,37°E</td><td class="crd-td">1320-1395AD</td><td class="crd-td">1320AD: 35,0k; 1340AD: 85,0k; 1360AD: 62,0k; 1380AD: 32,0k; 1395AD: 4,5k</td></tr>
<tr><td class="crd-td">Astrakhan-Russia</td><td class="crd-td">46,35°N, 48,04°E</td><td class="crd-td">1558-1900AD</td><td class="crd-td">1558AD: 3,5k; 1600AD: 6,5k; 1650AD: 10,5k; 1700AD: 14,0k; 1750AD: 21,5k; 1800AD: 32,5k; 1850AD: 44,8k; 1870AD: 48,0k; 1897AD: 112,9k; 1900AD: 118,0k</td></tr>
<tr><td class="crd-td">Tsaritsyn-Russia</td><td class="crd-td">48,71°N, 44,51°E</td><td class="crd-td">1589-1900AD</td><td class="crd-td">1589AD: 800; 1600AD: 1,1k; 1700AD: 3,2k; 1750AD: 4,1k; 1800AD: 4,5k; 1850AD: 5,9k; 1870AD: 12,5k; 1897AD: 55,2k; 1900AD: 62,0k</td></tr>
<tr><td class="crd-td">Saratov-Russia</td><td class="crd-td">51,53°N, 46,03°E</td><td class="crd-td">1590-1900AD</td><td class="crd-td">1590AD: 1,1k; 1600AD: 1,5k; 1700AD: 5,5k; 1750AD: 11,5k; 1800AD: 24,5k; 1850AD: 61,6k; 1870AD: 86,0k; 1897AD: 137,1k; 1900AD: 143,0k</td></tr>
<tr><td class="crd-td">Chyorny Yar-Russia</td><td class="crd-td">48,06°N, 46,11°E</td><td class="crd-td">1627-1900AD</td><td class="crd-td">1627AD: 850; 1700AD: 2,1k; 1750AD: 2,6k; 1800AD: 3,1k; 1850AD: 3,8k; 1897AD: 4,2k; 1900AD: 4,4k</td></tr>
<tr><td class="crd-td">Khvalynsk-Russia</td><td class="crd-td">52,49°N, 48,11°E</td><td class="crd-td">1650-1900AD</td><td class="crd-td">1650AD: 750; 1700AD: 1,4k; 1750AD: 2,4k; 1800AD: 5,8k; 1850AD: 11,2k; 1897AD: 15,1k; 1900AD: 15,6k</td></tr>
<tr><td class="crd-td">Krasny Yar-Russia</td><td class="crd-td">46,53°N, 48,35°E</td><td class="crd-td">1667-1900AD</td><td class="crd-td">1667AD: 1,1k; 1700AD: 2,2k; 1750AD: 2,8k; 1800AD: 3,4k; 1850AD: 4,6k; 1897AD: 5,6k; 1900AD: 5,8k</td></tr>
<tr><td class="crd-td">Kamyshin-Russia</td><td class="crd-td">50,10°N, 45,42°E</td><td class="crd-td">1668-1900AD</td><td class="crd-td">1668AD: 950; 1700AD: 2,4k; 1750AD: 3,1k; 1800AD: 4,2k; 1850AD: 9,4k; 1897AD: 16,3k; 1900AD: 17,1k</td></tr>
<tr><td class="crd-td">Kamyzyak-Russia</td><td class="crd-td">46,12°N, 48,08°E</td><td class="crd-td">1670-1900AD</td><td class="crd-td">1670AD: 400; 1800AD: 1,1k; 1850AD: 2,1k; 1897AD: 4,0k; 1900AD: 4,2k</td></tr>
<tr><td class="crd-td">Balanda-Russia</td><td class="crd-td">51,50°N, 44,47°E</td><td class="crd-td">1680-1900AD</td><td class="crd-td">1680AD: 650; 1750AD: 1,8k; 1800AD: 3,4k; 1850AD: 5,9k; 1897AD: 8,9k; 1900AD: 9,3k</td></tr>
<tr><td class="crd-td">Voskresenskoye-Russia</td><td class="crd-td">51,83°N, 46,90°E</td><td class="crd-td">1680-1900AD</td><td class="crd-td">1680AD: 600; 1750AD: 1,6k; 1800AD: 2,9k; 1850AD: 5,1k; 1897AD: 7,6k; 1900AD: 7,9k</td></tr>
<tr><td class="crd-td">Zolotoye-Russia</td><td class="crd-td">50,83°N, 45,93°E</td><td class="crd-td">1690-1900AD</td><td class="crd-td">1690AD: 650; 1750AD: 1,6k; 1800AD: 3,1k; 1850AD: 5,6k; 1897AD: 8,4k; 1900AD: 8,7k</td></tr>
<tr><td class="crd-td">Bazarny Karabulak-Russia</td><td class="crd-td">52,27°N, 46,41°E</td><td class="crd-td">1692-1900AD</td><td class="crd-td">1692AD: 650; 1800AD: 2,8k; 1850AD: 5,2k; 1897AD: 8,4k; 1900AD: 8,7k</td></tr>
<tr><td class="crd-td">Petrovsk-Russia</td><td class="crd-td">52,31°N, 45,39°E</td><td class="crd-td">1698-1900AD</td><td class="crd-td">1698AD: 1,5k; 1700AD: 1,8k; 1750AD: 2,9k; 1800AD: 4,6k; 1850AD: 9,2k; 1897AD: 13,3k; 1900AD: 13,8k</td></tr>
<tr><td class="crd-td">Yelan-Russia</td><td class="crd-td">50,95°N, 43,73°E</td><td class="crd-td">1699-1900AD</td><td class="crd-td">1699AD: 650; 1750AD: 1,9k; 1800AD: 3,8k; 1850AD: 6,8k; 1897AD: 11,8k; 1900AD: 12,3k</td></tr>
<tr><td class="crd-td">Kuznetsk-Russia</td><td class="crd-td">53,12°N, 46,60°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 1,2k; 1750AD: 2,8k; 1800AD: 5,4k; 1850AD: 12,1k; 1897AD: 20,5k; 1900AD: 21,4k</td></tr>
<tr><td class="crd-td">Novye Burasy-Russia</td><td class="crd-td">52,13°N, 46,08°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 550; 1800AD: 2,2k; 1850AD: 4,1k; 1897AD: 6,8k; 1900AD: 7,1k</td></tr>
<tr><td class="crd-td">Rtishchevo-Russia</td><td class="crd-td">52,25°N, 43,78°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 400; 1850AD: 1,4k; 1871AD: 2,8k; 1897AD: 5,8k; 1900AD: 6,4k</td></tr>
<tr><td class="crd-td">Serdobsk-Russia</td><td class="crd-td">52,46°N, 44,22°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 950; 1750AD: 1,6k; 1800AD: 2,4k; 1850AD: 5,4k; 1897AD: 7,3k; 1900AD: 7,6k</td></tr>
<tr><td class="crd-td">Solenoye Zaymishche-Russia</td><td class="crd-td">47,91°N, 46,16°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 450; 1800AD: 1,4k; 1850AD: 2,9k; 1897AD: 5,2k; 1900AD: 5,4k</td></tr>
<tr><td class="crd-td">Volsk-Russia</td><td class="crd-td">52,04°N, 47,38°E</td><td class="crd-td">1700-1900AD</td><td class="crd-td">1700AD: 1,2k; 1750AD: 3,2k; 1800AD: 8,4k; 1850AD: 18,9k; 1897AD: 27,1k; 1900AD: 28,2k</td></tr>
<tr><td class="crd-td">Rudnya-Russia</td><td class="crd-td">50,80°N, 44,55°E</td><td class="crd-td">1705-1900AD</td><td class="crd-td">1705AD: 600; 1800AD: 2,6k; 1850AD: 4,9k; 1897AD: 8,1k; 1900AD: 8,4k</td></tr>
<tr><td class="crd-td">Selitrennoye-Russia</td><td class="crd-td">47,17°N, 47,44°E</td><td class="crd-td">1710-1900AD</td><td class="crd-td">1710AD: 450; 1800AD: 1,2k; 1850AD: 2,4k; 1897AD: 4,2k; 1900AD: 4,4k</td></tr>
<tr><td class="crd-td">Atkarsk-Russia</td><td class="crd-td">51,87°N, 45,01°E</td><td class="crd-td">1720-1900AD</td><td class="crd-td">1720AD: 750; 1780AD: 1,4k; 1800AD: 1,9k; 1850AD: 4,1k; 1897AD: 7,3k; 1900AD: 7,8k</td></tr>
<tr><td class="crd-td">Arkadak-Russia</td><td class="crd-td">51,93°N, 43,50°E</td><td class="crd-td">1721-1900AD</td><td class="crd-td">1721AD: 650; 1800AD: 2,2k; 1850AD: 4,2k; 1897AD: 7,0k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Antipovka-Russia</td><td class="crd-td">49,83°N, 45,31°E</td><td class="crd-td">1734-1900AD</td><td class="crd-td">1734AD: 550; 1800AD: 1,7k; 1850AD: 3,3k; 1897AD: 5,6k; 1900AD: 5,8k</td></tr>
<tr><td class="crd-td">Dubovka-Russia</td><td class="crd-td">49,06°N, 44,83°E</td><td class="crd-td">1734-1900AD</td><td class="crd-td">1734AD: 1,8k; 1750AD: 3,2k; 1800AD: 6,4k; 1850AD: 11,8k; 1897AD: 16,3k; 1900AD: 16,8k</td></tr>
<tr><td class="crd-td">Gorny Balykley-Russia</td><td class="crd-td">49,55°N, 45,06°E</td><td class="crd-td">1734-1900AD</td><td class="crd-td">1734AD: 600; 1800AD: 1,6k; 1850AD: 3,1k; 1897AD: 5,2k; 1900AD: 5,4k</td></tr>
<tr><td class="crd-td">Verkhniy Balykley-Russia</td><td class="crd-td">49,49°N, 45,09°E</td><td class="crd-td">1740-1900AD</td><td class="crd-td">1740AD: 650; 1800AD: 1,9k; 1850AD: 3,9k; 1897AD: 6,8k; 1900AD: 7,1k</td></tr>
<tr><td class="crd-td">Yenotayevsk-Russia</td><td class="crd-td">47,24°N, 47,03°E</td><td class="crd-td">1742-1900AD</td><td class="crd-td">1742AD: 850; 1800AD: 1,5k; 1850AD: 2,2k; 1897AD: 2,8k; 1900AD: 3,0k</td></tr>
<tr><td class="crd-td">Nikolayevskaya Sloboda-Russia</td><td class="crd-td">50,03°N, 45,46°E</td><td class="crd-td">1747-1900AD</td><td class="crd-td">1747AD: 750; 1800AD: 3,6k; 1850AD: 9,8k; 1897AD: 18,4k; 1900AD: 19,2k</td></tr>
<tr><td class="crd-td">Pokrovskaya Sloboda-Russia</td><td class="crd-td">51,48°N, 46,12°E</td><td class="crd-td">1747-1900AD</td><td class="crd-td">1747AD: 850; 1750AD: 1,1k; 1800AD: 4,8k; 1850AD: 11,2k; 1897AD: 21,6k; 1900AD: 23,0k</td></tr>
<tr><td class="crd-td">Balashov-Russia</td><td class="crd-td">51,55°N, 43,17°E</td><td class="crd-td">1750-1900AD</td><td class="crd-td">1750AD: 1,1k; 1800AD: 2,6k; 1850AD: 5,8k; 1897AD: 10,3k; 1900AD: 11,2k</td></tr>
<tr><td class="crd-td">Elton-Russia</td><td class="crd-td">49,13°N, 46,85°E</td><td class="crd-td">1750-1900AD</td><td class="crd-td">1750AD: 1,4k; 1800AD: 2,6k; 1850AD: 2,7k; 1897AD: 4,6k; 1900AD: 4,8k</td></tr>
<tr><td class="crd-td">Kamenny Yar-Russia</td><td class="crd-td">48,44°N, 45,52°E</td><td class="crd-td">1750-1900AD</td><td class="crd-td">1750AD: 650; 1800AD: 1,6k; 1850AD: 3,2k; 1897AD: 5,7k; 1900AD: 5,9k</td></tr>
<tr><td class="crd-td">Samoylovka-Russia</td><td class="crd-td">51,18°N, 43,70°E</td><td class="crd-td">1750-1900AD</td><td class="crd-td">1750AD: 950; 1800AD: 2,7k; 1850AD: 5,4k; 1897AD: 9,6k; 1900AD: 10,0k</td></tr>
<tr><td class="crd-td">Srednyaya Akhtuba-Russia</td><td class="crd-td">48,70°N, 44,87°E</td><td class="crd-td">1758-1900AD</td><td class="crd-td">1758AD: 750; 1800AD: 1,8k; 1850AD: 3,9k; 1897AD: 6,4k; 1900AD: 6,7k</td></tr>
<tr><td class="crd-td">Dergachi-Russia</td><td class="crd-td">51,23°N, 48,77°E</td><td class="crd-td">1760-1900AD</td><td class="crd-td">1760AD: 600; 1850AD: 3,2k; 1897AD: 6,9k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Novouzensk-Russia</td><td class="crd-td">50,46°N, 48,14°E</td><td class="crd-td">1760-1900AD</td><td class="crd-td">1760AD: 650; 1800AD: 1,8k; 1850AD: 5,6k; 1897AD: 13,3k; 1900AD: 13,9k</td></tr>
<tr><td class="crd-td">Nikolskoye-Volga-Russia</td><td class="crd-td">47,77°N, 46,42°E</td><td class="crd-td">1761-1900AD</td><td class="crd-td">1761AD: 600; 1800AD: 1,6k; 1850AD: 3,3k; 1897AD: 6,2k; 1900AD: 6,4k</td></tr>
<tr><td class="crd-td">Balakovo-Russia</td><td class="crd-td">52,03°N, 47,78°E</td><td class="crd-td">1762-1900AD</td><td class="crd-td">1762AD: 850; 1800AD: 2,4k; 1850AD: 7,8k; 1897AD: 15,9k; 1900AD: 17,2k</td></tr>
<tr><td class="crd-td">Nikolayevsk-Irgiz-Russia</td><td class="crd-td">52,02°N, 48,80°E</td><td class="crd-td">1764-1900AD</td><td class="crd-td">1764AD: 900; 1800AD: 2,4k; 1850AD: 5,9k; 1897AD: 12,6k; 1900AD: 13,1k</td></tr>
<tr><td class="crd-td">Zamyany-Russia</td><td class="crd-td">46,81°N, 47,62°E</td><td class="crd-td">1764-1900AD</td><td class="crd-td">1764AD: 500; 1850AD: 1,8k; 1897AD: 3,1k; 1900AD: 3,3k</td></tr>
<tr><td class="crd-td">Kamenka-Russia</td><td class="crd-td">50,56°N, 45,45°E</td><td class="crd-td">1765-1900AD</td><td class="crd-td">1765AD: 345; 1800AD: 950; 1850AD: 2,5k; 1897AD: 5,0k; 1900AD: 5,2k</td></tr>
<tr><td class="crd-td">Sarepta-Russia</td><td class="crd-td">48,52°N, 44,55°E</td><td class="crd-td">1765-1900AD</td><td class="crd-td">1765AD: 250; 1775AD: 420; 1800AD: 780; 1850AD: 1,4k; 1897AD: 5,6k; 1900AD: 5,9k</td></tr>
<tr><td class="crd-td">Vetlyanka-Russia</td><td class="crd-td">47,55°N, 46,78°E</td><td class="crd-td">1765-1900AD</td><td class="crd-td">1765AD: 450; 1850AD: 1,6k; 1897AD: 2,9k; 1900AD: 3,0k</td></tr>
<tr><td class="crd-td">Mariental-Russia</td><td class="crd-td">51,41°N, 46,70°E</td><td class="crd-td">1766-1900AD</td><td class="crd-td">1766AD: 540; 1800AD: 1,4k; 1850AD: 4,1k; 1897AD: 7,2k; 1900AD: 7,5k</td></tr>
<tr><td class="crd-td">Nachalovo-Russia</td><td class="crd-td">46,34°N, 48,20°E</td><td class="crd-td">1766-1900AD</td><td class="crd-td">1766AD: 550; 1850AD: 1,9k; 1897AD: 3,7k; 1900AD: 3,8k</td></tr>
<tr><td class="crd-td">Balzer-Russia</td><td class="crd-td">51,02°N, 45,70°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 534; 1800AD: 1,4k; 1850AD: 4,1k; 1897AD: 8,2k; 1900AD: 8,6k</td></tr>
<tr><td class="crd-td">Doenhof-Russia</td><td class="crd-td">50,98°N, 45,55°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 510; 1800AD: 1,4k; 1850AD: 3,9k; 1897AD: 6,9k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Frank-Russia</td><td class="crd-td">50,80°N, 44,83°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 552; 1800AD: 1,6k; 1850AD: 4,8k; 1897AD: 9,6k; 1900AD: 10,1k</td></tr>
<tr><td class="crd-td">Grimm-Russia</td><td class="crd-td">50,92°N, 45,45°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 780; 1800AD: 1,9k; 1850AD: 5,8k; 1897AD: 10,8k; 1900AD: 11,2k</td></tr>
<tr><td class="crd-td">Hussenbach-Russia</td><td class="crd-td">50,70°N, 44,87°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 525; 1800AD: 1,4k; 1850AD: 4,2k; 1897AD: 8,2k; 1900AD: 8,5k</td></tr>
<tr><td class="crd-td">Katharinenstadt-Russia</td><td class="crd-td">51,70°N, 46,75°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 702; 1769AD: 725; 1800AD: 1,6k; 1850AD: 5,2k; 1897AD: 10,3k; 1900AD: 10,8k</td></tr>
<tr><td class="crd-td">Krasny Yar-German-Russia</td><td class="crd-td">50,70°N, 45,28°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 430; 1800AD: 1,1k; 1850AD: 3,3k; 1897AD: 6,2k; 1900AD: 6,4k</td></tr>
<tr><td class="crd-td">Kukkus-Russia</td><td class="crd-td">51,02°N, 45,95°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 320; 1800AD: 900; 1850AD: 2,6k; 1897AD: 4,6k; 1900AD: 4,8k</td></tr>
<tr><td class="crd-td">Messer-Russia</td><td class="crd-td">50,92°N, 45,60°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 415; 1800AD: 1,1k; 1850AD: 3,1k; 1897AD: 5,4k; 1900AD: 5,6k</td></tr>
<tr><td class="crd-td">Norka-Russia</td><td class="crd-td">51,15°N, 45,38°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 957; 1800AD: 2,4k; 1850AD: 7,3k; 1897AD: 11,6k; 1900AD: 12,1k</td></tr>
<tr><td class="crd-td">Schaffhausen-Russia</td><td class="crd-td">51,74°N, 46,92°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 330; 1800AD: 950; 1850AD: 2,7k; 1897AD: 4,8k; 1900AD: 5,0k</td></tr>
<tr><td class="crd-td">Schoenchen-Russia</td><td class="crd-td">51,59°N, 46,60°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 295; 1800AD: 850; 1850AD: 2,4k; 1897AD: 4,4k; 1900AD: 4,5k</td></tr>
<tr><td class="crd-td">Seelmann-Russia</td><td class="crd-td">50,77°N, 46,05°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 465; 1800AD: 1,3k; 1850AD: 3,9k; 1897AD: 7,0k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Warenburg-Russia</td><td class="crd-td">50,95°N, 46,02°E</td><td class="crd-td">1767-1900AD</td><td class="crd-td">1767AD: 610; 1800AD: 1,6k; 1850AD: 4,6k; 1897AD: 8,3k; 1900AD: 8,6k</td></tr>
<tr><td class="crd-td">Bykovo-Russia</td><td class="crd-td">49,77°N, 45,38°E</td><td class="crd-td">1780-1900AD</td><td class="crd-td">1780AD: 950; 1850AD: 4,2k; 1897AD: 7,8k; 1900AD: 8,2k</td></tr>
<tr><td class="crd-td">Raygorod-Russia</td><td class="crd-td">48,55°N, 44,97°E</td><td class="crd-td">1780-1900AD</td><td class="crd-td">1780AD: 550; 1850AD: 2,1k; 1897AD: 4,0k; 1900AD: 4,1k</td></tr>
<tr><td class="crd-td">Zaplavnoye-Russia</td><td class="crd-td">48,70°N, 45,02°E</td><td class="crd-td">1780-1900AD</td><td class="crd-td">1780AD: 850; 1850AD: 3,6k; 1897AD: 6,1k; 1900AD: 6,3k</td></tr>
<tr><td class="crd-td">Kharabali-Russia</td><td class="crd-td">47,42°N, 47,25°E</td><td class="crd-td">1789-1900AD</td><td class="crd-td">1789AD: 850; 1850AD: 3,4k; 1897AD: 6,5k; 1900AD: 6,8k</td></tr>
<tr><td class="crd-td">Vladimirovka-Russia</td><td class="crd-td">48,28°N, 46,17°E</td><td class="crd-td">1793-1900AD</td><td class="crd-td">1793AD: 650; 1850AD: 2,8k; 1897AD: 7,9k; 1900AD: 8,4k</td></tr>
<tr><td class="crd-td">Sasykoli-Russia</td><td class="crd-td">47,55°N, 46,99°E</td><td class="crd-td">1795-1900AD</td><td class="crd-td">1795AD: 700; 1850AD: 2,6k; 1897AD: 5,1k; 1900AD: 5,3k</td></tr>
<tr><td class="crd-td">Alexandrov Gay-Russia</td><td class="crd-td">50,13°N, 48,57°E</td><td class="crd-td">1800-1900AD</td><td class="crd-td">1800AD: 950; 1850AD: 3,6k; 1897AD: 7,4k; 1900AD: 7,8k</td></tr>
<tr><td class="crd-td">Kolobovka-Russia</td><td class="crd-td">48,66°N, 45,48°E</td><td class="crd-td">1800-1900AD</td><td class="crd-td">1800AD: 700; 1850AD: 2,4k; 1897AD: 4,6k; 1900AD: 4,8k</td></tr>
<tr><td class="crd-td">Kalmyk Bazar-Russia</td><td class="crd-td">46,40°N, 47,97°E</td><td class="crd-td">1802-1900AD</td><td class="crd-td">1802AD: 450; 1850AD: 1,1k; 1897AD: 1,6k; 1900AD: 1,8k</td></tr>
<tr><td class="crd-td">Prishib-Russia</td><td class="crd-td">48,70°N, 45,20°E</td><td class="crd-td">1802-1900AD</td><td class="crd-td">1802AD: 850; 1850AD: 3,4k; 1897AD: 6,8k; 1900AD: 7,1k</td></tr>
<tr><td class="crd-td">Bolkhuny-Russia</td><td class="crd-td">47,98°N, 46,41°E</td><td class="crd-td">1805-1900AD</td><td class="crd-td">1805AD: 800; 1850AD: 3,1k; 1897AD: 6,0k; 1900AD: 6,2k</td></tr>
<tr><td class="crd-td">Kapustin Yar-Russia</td><td class="crd-td">48,58°N, 45,73°E</td><td class="crd-td">1805-1900AD</td><td class="crd-td">1805AD: 950; 1850AD: 3,8k; 1897AD: 6,9k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Tsarev-Russia</td><td class="crd-td">48,66°N, 45,38°E</td><td class="crd-td">1805-1900AD</td><td class="crd-td">1805AD: 1,4k; 1850AD: 4,6k; 1897AD: 7,0k; 1900AD: 7,2k</td></tr>
<tr><td class="crd-td">Ikryanoye-Russia</td><td class="crd-td">46,09°N, 47,73°E</td><td class="crd-td">1807-1900AD</td><td class="crd-td">1807AD: 550; 1850AD: 1,8k; 1897AD: 3,8k; 1900AD: 4,0k</td></tr>
<tr><td class="crd-td">Pologoye Zaymishche-Russia</td><td class="crd-td">48,42°N, 45,95°E</td><td class="crd-td">1810-1900AD</td><td class="crd-td">1810AD: 650; 1850AD: 2,3k; 1897AD: 4,4k; 1900AD: 4,6k</td></tr>
<tr><td class="crd-td">Khosheutovo-Russia</td><td class="crd-td">47,09°N, 47,59°E</td><td class="crd-td">1817-1900AD</td><td class="crd-td">1817AD: 450; 1850AD: 850; 1897AD: 1,4k; 1900AD: 1,4k</td></tr>
<tr><td class="crd-td">Zolotukha-Russia</td><td class="crd-td">47,77°N, 46,66°E</td><td class="crd-td">1820-1900AD</td><td class="crd-td">1820AD: 750; 1850AD: 2,5k; 1897AD: 4,8k; 1900AD: 5,0k</td></tr>
<tr><td class="crd-td">Khanskaya Stavka-Russia</td><td class="crd-td">48,77°N, 47,44°E</td><td class="crd-td">1826-1900AD</td><td class="crd-td">1826AD: 450; 1850AD: 1,8k; 1897AD: 2,6k; 1900AD: 2,7k</td></tr>
<tr><td class="crd-td">Remontnoye-Russia</td><td class="crd-td">46,56°N, 43,66°E</td><td class="crd-td">1848-1900AD</td><td class="crd-td">1848AD: 650; 1897AD: 5,8k; 1900AD: 6,2k</td></tr>
<tr><td class="crd-td">Volnoye-Russia</td><td class="crd-td">47,06°N, 47,56°E</td><td class="crd-td">1849-1900AD</td><td class="crd-td">1849AD: 950; 1897AD: 4,7k; 1900AD: 4,9k</td></tr>
<tr><td class="crd-td">Baskunchak-Russia</td><td class="crd-td">48,20°N, 46,88°E</td><td class="crd-td">1850-1900AD</td><td class="crd-td">1850AD: 1,8k; 1882AD: 4,5k; 1897AD: 8,2k; 1900AD: 8,8k</td></tr>
<tr><td class="crd-td">Gnadenflur-Russia</td><td class="crd-td">51,19°N, 47,66°E</td><td class="crd-td">1850-1900AD</td><td class="crd-td">1850AD: 650; 1897AD: 1,9k; 1900AD: 2,1k</td></tr>
<tr><td class="crd-td">Oranzherei-Russia</td><td class="crd-td">45,84°N, 47,56°E</td><td class="crd-td">1850-1900AD</td><td class="crd-td">1850AD: 1,1k; 1897AD: 3,6k; 1900AD: 3,8k</td></tr>
<tr><td class="crd-td">Priyutnoye-Russia</td><td class="crd-td">46,10°N, 43,50°E</td><td class="crd-td">1850-1900AD</td><td class="crd-td">1850AD: 550; 1897AD: 2,0k; 1900AD: 2,1k</td></tr>
<tr><td class="crd-td">Marfino-Russia</td><td class="crd-td">46,41°N, 48,72°E</td><td class="crd-td">1860-1900AD</td><td class="crd-td">1860AD: 1,4k; 1897AD: 3,9k; 1900AD: 4,1k</td></tr>
<tr><td class="crd-td">Talovka-Bukey-Russia</td><td class="crd-td">49,77°N, 48,59°E</td><td class="crd-td">1860-1900AD</td><td class="crd-td">1860AD: 550; 1897AD: 1,4k; 1900AD: 1,6k</td></tr>
<tr><td class="crd-td">Tsvetnoye-Russia</td><td class="crd-td">46,23°N, 48,62°E</td><td class="crd-td">1860-1900AD</td><td class="crd-td">1860AD: 1,2k; 1897AD: 3,4k; 1900AD: 3,6k</td></tr>
<tr><td class="crd-td">Elista-Russia</td><td class="crd-td">46,31°N, 44,26°E</td><td class="crd-td">1865-1900AD</td><td class="crd-td">1865AD: 150; 1880AD: 650; 1897AD: 1,4k; 1900AD: 1,6k</td></tr>
<tr><td class="crd-td">Novaya Kazanka-Russia</td><td class="crd-td">49,22°N, 49,09°E</td><td class="crd-td">1870-1900AD</td><td class="crd-td">1870AD: 650; 1897AD: 1,6k; 1900AD: 1,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Complete directory of all 146 settlement entries and population series in lower_volga_settlements.json (10000BC - 1900AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>
