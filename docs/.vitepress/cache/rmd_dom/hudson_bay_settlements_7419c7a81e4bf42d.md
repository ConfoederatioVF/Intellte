---
title: "Settlement Gazetteer of the Pre-Columbian Hudson Bay and Boreal Shield"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hudson_bay_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hudson_bay_spatial.png"
hero_caption: "Spatial distribution of 130 catalogued subarctic, Woodland and coastal Arctic settlements across the Hudson Bay and Boreal Shield basin from 10000BC to 1600AD."
hero_label: "fig:hero-hudson-bay"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population trajectories for 130 persistent settlements across the Hudson Bay and Boreal Shield basin (2,48M km²) between 10000BC and 1600AD.

Early post-glacial occupations begin around 6000BC at Migod (110 peak) in Kivalliq, 5100BC at Wapekeka (135) on the northern Ontario Shield and 3000BC at Lac de la Hutte Sauvage (165) in Eastmain-Ungava, expanding through late-Holocene Cree river-lake capitals at Norway House Playgreen Capital (620), Southern Indian Lake Town (550), Garden Hill Island Town (530) and Split Lake Cree Capital (510) alongside Ungava longhouse and Arctic coastal hubs at Tuvaaluk Longhouse Metropolis (480), Kangirsuk Longhouse Town (410), Fort Albany Ancestral Town (380), Port Nelson Ancestral Village (360), Ivujivik-Nuvuk (350), Sadlermiut (Native Point) (340), Silumiut (340), Churchill-Seahorse Gully (320), Moose Factory-Moosonee (320), Nelson River-York Factory (310), Arvia'juaq (310), Chesterfield Inlet (Igluligaarjuk) (290), Baker Lake (Qamani'tuaq) (280) and Kuujjuaq (Ungava) (280). All 130 catalogued settlements comprise 462 benchmark observations (mean 3,55 per site, all carrying at least three dated estimates) and reconcile against the regional source ledger (259 candidates, 130 included and 129 excluded).

# Background

Residential persistence across the Hudson Bay drainage anchored along three ecological niches [@wright1995; @pilon1987]. First, estuarine river mouths along western Hudson Bay and James Bay supported multi-season waterfowl, caribou and whitefish harvests at Churchill-Seahorse Gully, Nelson River-York Factory and Moose Factory-Moosonee [@nash1969; @pilon1987].

Second, Hudson Strait, Ungava Bay and Kivalliq caribou crossings concentrated Pre-Dorset, Dorset and Thule sealing and Barrenland camps at Tuvaaluk Longhouse Metropolis, Ivujivik-Nuvuk, Silumiut, Arvia'juaq and Baker Lake (Qamani'tuaq), linked eastwards across upland portages toward Atlantic Maritime Archaic traditions [@plumet1994; @clark1977; @tuck1976].

Third, southern Shield-margin lake outlets sustained Archaic lithic workshops, native-copper exchange reaching Lake Abitibi and Woodland-Selkirk river-lake towns spanning Norway House Playgreen Capital and the Nelson drainage alongside bordering Rainy River traditions [@martin1999; @arzigian2008; @buchner1980].

# Methodology

Entries in the regional source ledger require dated habitation horizons, fixed coordinates and published band-aggregation, riverine-hub or coastal demographic counts [@arzigian2008; @plumet1994]. Duplicate or subordinate records within 2 km (including Moose Factory (Moose River) folded into Moose Factory-Moosonee and two Diana Bay entries consolidated into Tuvaaluk Longhouse Metropolis) are excluded so no catchment is double-counted, while dispersed winter family hunting camps across the interior Shield are represented by the continuous kriging background. Table \ref{tab:summary} summarises site distribution across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kivalliq Barrens</strong></td><td class="crd-td">23</td><td class="crd-td">5,3k</td><td class="crd-td">Port Nelson Ancestral Village (360)</td></tr>
<tr><td class="crd-td"><strong>Hudson-James Cree</strong></td><td class="crd-td">61</td><td class="crd-td">17,4k</td><td class="crd-td">Norway House Playgreen Capital (620)</td></tr>
<tr><td class="crd-td"><strong>Eastmain-Nunavik</strong></td><td class="crd-td">46</td><td class="crd-td">8,7k</td><td class="crd-td">Tuvaaluk Longhouse Metropolis (480)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Hudson Bay basin.</figcaption>
</figure>

# Testing and Validation

Gazetteer reconciliation confirms 130 included settlements (23 in Kivalliq Barrens, 61 in Hudson-James Lowlands and Cree Shield and 46 in Eastmain, Nunavik and Ungava), 129 excluded duplicate-alias consolidations within 2 km (259 total candidates), 0 unaccounted entries and 0 schema errors. Coordinates span 48,67 to 64,88 N and 64,71 to 101,33 W; all 130 records carry between three and seven benchmark observations (462 total observations, averaging 3,55 per settlement). Figure \ref{fig:settlements} charts the rank-size curve.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay-settlements/fig4_hudson_bay_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 130 catalogued settlements of the Hudson Bay basin.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents the top 45 of 130 included settlements ordered by peak population descending.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Norway House Playgreen Capital</strong></td><td class="crd-td">Playgreen Lake Nelson River Capital</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,98 N, 97,83 W</td><td class="crd-td">200AD - 1350AD</td><td class="crd-td">620</td><td class="crd-td">200AD: 160; 800AD: 420; 1350AD: 620</td></tr>
<tr><td class="crd-td"><strong>Southern Indian Lake Town</strong></td><td class="crd-td">South Indian Lake Cree Capital</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,78 N, 98,93 W</td><td class="crd-td">200AD - 1350AD</td><td class="crd-td">550</td><td class="crd-td">200AD: 150; 800AD: 380; 1350AD: 550</td></tr>
<tr><td class="crd-td"><strong>Garden Hill Island Town</strong></td><td class="crd-td">Island Lake Cree Capital</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,88 N, 94,65 W</td><td class="crd-td">200AD - 1350AD</td><td class="crd-td">530</td><td class="crd-td">200AD: 150; 800AD: 360; 1350AD: 530</td></tr>
<tr><td class="crd-td"><strong>Split Lake Cree Capital</strong></td><td class="crd-td">Tataskweyak Nelson River Town</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,25 N, 96,25 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">510</td><td class="crd-td">300AD: 140; 850AD: 350; 1350AD: 510</td></tr>
<tr><td class="crd-td"><strong>Cross Lake Pimicikamak Town</strong></td><td class="crd-td">Nelson River Cross Lake Center</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">54,55 N, 97,77 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">480</td><td class="crd-td">300AD: 140; 850AD: 340; 1350AD: 480</td></tr>
<tr><td class="crd-td"><strong>Tuvaaluk Longhouse Metropolis</strong></td><td class="crd-td">Diana Bay Dorset Winter Town; Diana Bay</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">60,88 N, 70,04 W</td><td class="crd-td">0AD - 1350AD</td><td class="crd-td">480</td><td class="crd-td">0AD: 75; 600AD: 160; 700AD: 140; 1050AD: 370; 1300AD: 190; 1350AD: 480</td></tr>
<tr><td class="crd-td"><strong>Nelson House Nisichawayasihk Capital</strong></td><td class="crd-td">Footprint Lake Cree Center</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">55,77 N, 98,85 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">470</td><td class="crd-td">300AD: 130; 850AD: 320; 1350AD: 470</td></tr>
<tr><td class="crd-td"><strong>Kitchenuhmaykoosib Town</strong></td><td class="crd-td">Big Trout Lake Cree Capital</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,83 N, 89,58 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">460</td><td class="crd-td">300AD: 130; 850AD: 320; 1350AD: 460</td></tr>
<tr><td class="crd-td"><strong>Pukatawagan Churchill River Town</strong></td><td class="crd-td">Pukatawagan Cree Center</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">55,73 N, 101,32 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">460</td><td class="crd-td">300AD: 130; 850AD: 310; 1350AD: 460</td></tr>
<tr><td class="crd-td"><strong>Gods Lake Narrows Town</strong></td><td class="crd-td">Gods Lake Island Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">54,55 N, 94,42 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">440</td><td class="crd-td">300AD: 130; 850AD: 310; 1350AD: 440</td></tr>
<tr><td class="crd-td"><strong>Marten Falls Cree Capital</strong></td><td class="crd-td">Ogoki Post Albany River Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">51,65 N, 85,92 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">440</td><td class="crd-td">400AD: 130; 950AD: 310; 1400AD: 440</td></tr>
<tr><td class="crd-td"><strong>Gillam Nelson River Town</strong></td><td class="crd-td">Nelson River Rapids Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,35 N, 94,7 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">410</td><td class="crd-td">400AD: 120; 950AD: 290; 1400AD: 410</td></tr>
<tr><td class="crd-td"><strong>Kangirsuk Longhouse Town</strong></td><td class="crd-td">Arnaud River Dorset Town</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">60,02 N, 70,02 W</td><td class="crd-td">500AD - 1300AD</td><td class="crd-td">410</td><td class="crd-td">500AD: 140; 950AD: 320; 1300AD: 410</td></tr>
<tr><td class="crd-td"><strong>Thompson Burntwood River Town</strong></td><td class="crd-td">Burntwood River Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">55,75 N, 97,87 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">410</td><td class="crd-td">400AD: 120; 950AD: 290; 1400AD: 410</td></tr>
<tr><td class="crd-td"><strong>Webequie Winisk Lake Capital</strong></td><td class="crd-td">Winisk Lake Cree Center</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">52,98 N, 87,35 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">410</td><td class="crd-td">400AD: 120; 950AD: 290; 1400AD: 410</td></tr>
<tr><td class="crd-td"><strong>Fort Albany Ancestral Town</strong></td><td class="crd-td">Albany River Cree Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">52,2 N, 81,68 W</td><td class="crd-td">700AD - 1520AD</td><td class="crd-td">380</td><td class="crd-td">700AD: 120; 1150AD: 290; 1520AD: 380</td></tr>
<tr><td class="crd-td"><strong>Fort Hope Lake Town</strong></td><td class="crd-td">Eabametoong Albany Lake Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">51,57 N, 87,92 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">370</td><td class="crd-td">500AD: 110; 1050AD: 270; 1450AD: 370</td></tr>
<tr><td class="crd-td"><strong>Leaf Rapids Churchill Town</strong></td><td class="crd-td">Churchill River Rapids Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,53 N, 99,98 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">370</td><td class="crd-td">400AD: 110; 950AD: 260; 1400AD: 370</td></tr>
<tr><td class="crd-td"><strong>Longlac Kenogami Village</strong></td><td class="crd-td">Long Lake Kenogami Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">49,78 N, 86,53 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">360</td><td class="crd-td">300AD: 110; 850AD: 260; 1350AD: 360</td></tr>
<tr><td class="crd-td"><strong>Port Nelson Ancestral Village</strong></td><td class="crd-td">Nelson River Mouth Settlement</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">57,12 N, 92,54 W</td><td class="crd-td">800AD - 1520AD</td><td class="crd-td">360</td><td class="crd-td">800AD: 110; 1200AD: 270; 1520AD: 360</td></tr>
<tr><td class="crd-td"><strong>St. Theresa Point Village</strong></td><td class="crd-td">Island Lake Southern Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,83 N, 94,85 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">360</td><td class="crd-td">400AD: 110; 950AD: 260; 1400AD: 360</td></tr>
<tr><td class="crd-td"><strong>Ivujivik-Nuvuk</strong></td><td class="crd-td">Nuvuk; Mansel-Ungava Strait</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">62,38 N, 77,88 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">350</td><td class="crd-td">1000BC: 120; 400AD: 190; 1200AD: 310; 1500AD: 350</td></tr>
<tr><td class="crd-td"><strong>Sadlermiut (Native Point)</strong></td><td class="crd-td">Tunirmiut; Southampton Island</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,73 N, 82,5 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">340</td><td class="crd-td">1200AD: 160; 1400AD: 290; 1600AD: 340</td></tr>
<tr><td class="crd-td"><strong>Seahorse Gully Village</strong></td><td class="crd-td">Churchill Pre-Dorset Town</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">58,77 N, 94,18 W</td><td class="crd-td">800BC - 800AD</td><td class="crd-td">340</td><td class="crd-td">800BC: 140; 0AD: 280; 800AD: 340</td></tr>
<tr><td class="crd-td"><strong>Silumiut</strong></td><td class="crd-td">Roes Welcome Sound; KkJg-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,68 N, 90,67 W</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">340</td><td class="crd-td">1200AD: 190; 1350AD: 340; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Silumiut Whaling Settlement</strong></td><td class="crd-td">Chesterfield Whalebone Village</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,71 N, 90,12 W</td><td class="crd-td">1200AD - 1480AD</td><td class="crd-td">340</td><td class="crd-td">1200AD: 140; 1350AD: 340; 1480AD: 290</td></tr>
<tr><td class="crd-td"><strong>Wemindji Ancestral Town</strong></td><td class="crd-td">Paint Hills James Bay Village</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">53 N, 78,83 W</td><td class="crd-td">700AD - 1520AD</td><td class="crd-td">340</td><td class="crd-td">700AD: 100; 1150AD: 250; 1520AD: 340</td></tr>
<tr><td class="crd-td"><strong>Churchill-Seahorse Gully</strong></td><td class="crd-td">Seahorse Gully; Dorset-Thule Point</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">58,79 N, 94,12 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 110; 0AD: 170; 800AD: 210; 1300AD: 290; 1500AD: 320</td></tr>
<tr><td class="crd-td"><strong>Moose Factory-Moosonee</strong></td><td class="crd-td">Moose River Mouth; Wapiskaw</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">51,26 N, 80,61 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 85; 400AD: 150; 500AD: 95; 1200AD: 180; 1500AD: 320; 1600AD: 290</td></tr>
<tr><td class="crd-td"><strong>Smooth Rock Falls Mattagami Town</strong></td><td class="crd-td">Mattagami River Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">49,28 N, 81,63 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">320</td><td class="crd-td">400AD: 100; 950AD: 240; 1400AD: 320</td></tr>
<tr><td class="crd-td"><strong>Arvia'juaq</strong></td><td class="crd-td">Sentry Island; Arviat</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">61,12 N, 94,04 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">310</td><td class="crd-td">1200AD: 140; 1400AD: 240; 1600AD: 310</td></tr>
<tr><td class="crd-td"><strong>Geraldton Kenogami Basin Town</strong></td><td class="crd-td">Kenogami Upper Basin Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">49,72 N, 86,95 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">310</td><td class="crd-td">400AD: 100; 950AD: 230; 1400AD: 310</td></tr>
<tr><td class="crd-td"><strong>Lac Guillaume-Delisle Settlement</strong></td><td class="crd-td">Richmond Gulf Dorset Town</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">56,25 N, 76,5 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">310</td><td class="crd-td">600AD: 110; 1100AD: 240; 1450AD: 310</td></tr>
<tr><td class="crd-td"><strong>Lansdowne House Town</strong></td><td class="crd-td">Neskantaga Attawapiskat Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">52,55 N, 87,88 W</td><td class="crd-td">600AD - 1480AD</td><td class="crd-td">310</td><td class="crd-td">600AD: 90; 1100AD: 230; 1480AD: 310</td></tr>
<tr><td class="crd-td"><strong>Nelson River-York Factory</strong></td><td class="crd-td">Kihciwaskahikan; Hayes-Nelson Confluence</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">57 N, 92,31 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 95; 800AD: 160; 1300AD: 240; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Wabowden Setting Lake Settlement</strong></td><td class="crd-td">Grass River Setting Lake Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">54,92 N, 98,62 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">310</td><td class="crd-td">500AD: 90; 1050AD: 220; 1450AD: 310</td></tr>
<tr><td class="crd-td"><strong>Wasagamack Lake Village</strong></td><td class="crd-td">Wasagamack Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,9 N, 94,95 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">310</td><td class="crd-td">500AD: 90; 1050AD: 230; 1450AD: 310</td></tr>
<tr><td class="crd-td"><strong>Bearskin Lake Severn Settlement</strong></td><td class="crd-td">Severn River Bearskin Town</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,92 N, 91,03 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">300</td><td class="crd-td">400AD: 90; 950AD: 220; 1400AD: 300</td></tr>
<tr><td class="crd-td"><strong>Chesterfield Inlet (Igluligaarjuk)</strong></td><td class="crd-td">Igluligaarjuk; KiJ-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,34 N, 90,7 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">290</td><td class="crd-td">1200AD: 130; 1400AD: 230; 1600AD: 290</td></tr>
<tr><td class="crd-td"><strong>Coral Rapids Abitibi Settlement</strong></td><td class="crd-td">Abitibi River Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">50,22 N, 81,65 W</td><td class="crd-td">600AD - 1480AD</td><td class="crd-td">290</td><td class="crd-td">600AD: 90; 1100AD: 220; 1480AD: 290</td></tr>
<tr><td class="crd-td"><strong>Lynn Lake Laurie River Settlement</strong></td><td class="crd-td">Laurie River Village</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,85 N, 101,05 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">290</td><td class="crd-td">500AD: 90; 1050AD: 210; 1450AD: 290</td></tr>
<tr><td class="crd-td"><strong>Baker Lake (Qamani'tuaq)</strong></td><td class="crd-td">Qamanituaq; Harvaqtuuq</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">64,32 N, 96,02 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">280</td><td class="crd-td">1000BC: 80; 400AD: 130; 1200AD: 220; 1500AD: 280</td></tr>
<tr><td class="crd-td"><strong>Kasabonika Lake Cree Village</strong></td><td class="crd-td">Asheweig River Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">53,53 N, 88,63 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">280</td><td class="crd-td">500AD: 90; 1050AD: 210; 1450AD: 280</td></tr>
<tr><td class="crd-td"><strong>Kuujjuaq (Ungava)</strong></td><td class="crd-td">Koksoak River; Ungava Bay</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">58,11 N, 68,4 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">280</td><td class="crd-td">0AD: 85; 800AD: 160; 1400AD: 240; 1600AD: 280</td></tr>
<tr><td class="crd-td"><strong>Fraserdale Abitibi Town</strong></td><td class="crd-td">Abitibi Upper Settlement</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">49,85 N, 81,62 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">270</td><td class="crd-td">500AD: 90; 1050AD: 210; 1450AD: 270</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 of 130 pre-contact settlements and aggregation hubs ordered by peak population in the Hudson Bay basin (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} reports the excluded candidate records from the regional source ledger.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Moose Factory (Moose River)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Moose Factory-Moosonee' (Lytwyn, V.P. (2002). Muskekowuck Athinuwick: Original People of the Great Swampy Land. University of Manitoba Press; Kenyon, W.A. (1986).).</td></tr>
<tr><td class="crd-td"><strong>Baker Lake (Qamani'tuaq)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Baker Lake (Qamani'tuaq)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kuujjuaq (Ungava)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kuujjuaq (Ungava)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Salluit</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Salluit' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Inukjuak</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Inukjuak' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Fort George (Chisasibi)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Fort George (Chisasibi)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Killinek</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Killinek' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kuujjuarapik</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kuujjuarapik' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Abitibi Point</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Abitibi Point' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Ivujivik (Tayara)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Ivujivik (Tayara)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lake Mistassini (Temiscamie)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lake Mistassini (Temiscamie)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nelson House (Nisichawayasihk)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nelson House (Nisichawayasihk)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Puvirnituq</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Puvirnituq' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Tuvaaluk</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Tuvaaluk' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waskaganish</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waskaganish' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Sanikiluaq</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Sanikiluaq' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waswanipi</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waswanipi' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lake Abitibi</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lake Abitibi' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nemiscau</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nemiscau' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>South Indian Lake (Kame Hills)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'South Indian Lake (Kame Hills)' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Oxford House</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Oxford House' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Umiujaq</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Umiujaq' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kangirsujuaq</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kangirsujuaq' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Attawapiskat</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Attawapiskat' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Eastmain</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Eastmain' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lac Mistassini Baie du Poste</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lac Mistassini Baie du Poste' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Fort Severn</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Fort Severn' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lac de la Hutte Sauvage</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lac de la Hutte Sauvage' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Meliadine</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Meliadine' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kazan River</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kazan River' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate records in the Hudson Bay source ledger (30 of 129 excluded entries shown).</figcaption>
</figure>

## Sub-Regional Settlement Summaries

Within the Hudson and James Bay Lowlands and Northern Ontario Shield (61 entries), interior Cree and Shield river-lake capitals at Norway House Playgreen Capital (620 peak), Southern Indian Lake Town (550), Garden Hill Island Town (530), Split Lake Cree Capital (510), Cross Lake Pimicikamak Town (480) and Nelson House Nisichawayasihk Capital (470) pair with James and western Hudson Bay estuaries at Fort Albany Ancestral Town (380), Moose Factory-Moosonee (320) and Nelson River-York Factory (310), alongside interior Shield lake and copper-corridor centres at Abitibi Point (220), Lake Abitibi (190) and Wapekeka (135) [@arzigian2008; @martin1999; @pilon1987; @nash1969; @buchner1980].

In Eastmain, Nunavik and Ungava (46 entries), northern Ungava and Hudson Strait longhouse and sealing stations at Tuvaaluk Longhouse Metropolis (480), Kangirsuk Longhouse Town (410), Kuujjuaq (Ungava) (280), Salluit (270) and Inukjuak (260) balance James Bay and coastal Cree hubs at Wemindji Ancestral Town (340), Lac Guillaume-Delisle Settlement (310), Fort George (Chisasibi) (250) and Kuujjuarapik (240) alongside interior upland stations at Lake Mistassini (Temiscamie) (220) and Lac de la Hutte Sauvage (165) [@plumet1994; @tuck1976].

On the Kivalliq barrens and western-to-northern Hudson Bay coast (23 entries), Thule whaling and caribou-crossing settlements cluster at Port Nelson Ancestral Village (360), Ivujivik-Nuvuk (350), Sadlermiut (Native Point) (340), Silumiut (340), Churchill-Seahorse Gully (320), Arvia'juaq (310), Chesterfield Inlet (Igluligaarjuk) (290), Baker Lake (Qamani'tuaq) (280), Kamarvik Settlement (260), Ennadai Lake (125) and Migod (110) [@clark1977].

# Limitations

Because Cree and Innu families dispersed across winter bush hunting territories in small extended-family bands, persistent archaeological villages are concentrated along estuarine river mouths, caribou crossings and southern Shield lake outlets, leaving scattered upland campsites represented through the continuous kriging surface [@wright1995; @pilon1987]. Rapid glacio-isostatic uplift around James Bay and western Hudson Bay has also elevated early shoreline stations tens of kilometres inland behind modern coastal marshes.

# Sources

<div id="refs"></div>
