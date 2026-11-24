---
title: "Studies on Population"
subtitle: "MAGNETIC: Europe Excluding the Polaris Core and North Atlantic Islands, 10000BC-2025"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/magnetic_areal_coverage_hero.png"
hero_caption: "Historical coverage and shifting regional partitions of MAGNETIC across Europe excluding the Polaris Core, Greenland and the North Atlantic islands from 10000BC to 2025."
hero_label: "fig:hero-areal"
bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true
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
    latex_engine: xelatex
    template: _shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



# Abstract

Reconstructing long-run human settlement across Europe outside the East Slavic Polaris core requires harmonising prehistoric radiocarbon and national heritage registers, classical epigraphic and urban surveys, mediaeval hearth and tax rolls, early modern parish and fiscal cadastres, nineteenth-century imperial sub-administrative enumerations and contemporary national censuses. Global gridded databases such as HYDE disaggregate national historical totals onto 5-arcminute surfaces through environmental suitability weights and fractional allocation [@KleinGoldewijk2017], whereas global demographic compendia aggregate continental trajectories at modern sovereign state boundaries [@McEvedyJones1978; @Maddison2001; @LiviBacci2007]. Across Europe, where imperial borders, agrarian cores, industrial coalfields and frontier zones shifted repeatedly across millennia, reconstructing density from modern administrative geometries introduces anachronistic discontinuities such as twentieth-century borders appearing in pre-1945 maps. MAGNETIC addresses this problem across 7,15M km² covering Western, Central, Northern, Southern and South-Eastern Europe, the Baltic states, Greenland, Iceland, the Faroe Islands, the Azores, Madeira and the Canary Islands from 10000BC to 2025.

MAGNETIC comprises 42 constituent chapter documents (21 chronological and regional literature reviews paired with 21 coordinate-anchored settlement gazetteers), supported by 360 SHA-256-unique open-access scholarly PDFs, 223.180 historical settlement trajectories across 50 European and North Atlantic territories, and 31.380 scraped historical GIS sub-administrative enumerations spanning 37 strictly non-anachronistic territorial regimes across all 118 overlapping AD HYDE time steps from 0AD to 2025. For prehistoric and pre-statistical eras, MAGNETIC integrates regional archaeological corpora with a non-stationary Matérn ($\nu = 3/2$) kriging model ($\tau_1 = 1,37$, uninhabitable leakage ratio $0,0016$, HYDE log-correlation $0,8623$) tuned specifically for Europe to moderate excessive fluvial concentration and eliminate post-1945 border artefacts across the Oder-Neisse line, the Polish partitions and the Adriatic-Danubian frontier [@PaciorekSchervish2006; @Zimmermann2009]. From 1500 to 2025, MAGNETIC enforces mass-conserving pycnophylactic dasymetric scaling across period-authentic historical administrative divisions—ranging from the 1512–1792 Holy Roman Imperial Circles, Armand Brette's 1789 Ancien Régime *bailliages* and *généralités*, Polish-Lithuanian voivodeships (1619, 1772), Napoleonic and Restoration French departments, 1861–1971 Italian provinces, Imperial German and Weimar tax districts, GISta Hungarorum 1910 counties, RoHGIS 1930 inter-war Romanian *județe*, BKG FRG/GDR *Bezirke*, Czechoslovak *kraje*, SFR Yugoslavia municipalities and pre-1974 British and Irish historic counties—reserving Eurostat NUTS-3 boundaries strictly for 1990 to 2025.

Across the Holocene domain, gridded population rose from 67,88k in 10000BC and 423,4k in 6000BC to 5,94M by 1000BC and 30,81M at the early Roman imperial peak in 1AD. Late antique epidemics, political fragmentation and the Migration Period lowered domain numbers to 22,32M in 500AD and 18,6M in 700AD before high mediaeval agrarian clearance lifted totals to 26,91M in 1000AD and 61,69M by 1300AD. Following the Black Death trough of 45,52M in 1400AD, early modern recovery carried the domain smoothly to 73,25M in 1500AD, 84,55M in 1600, 97,69M in 1700, 119,05M in 1750, 153,83M in 1800 and 218,69M in 1850, before the industrial demographic transition expanded MAGNETIC Europe to 277,29M in 1880, 328,55M in 1900, 334,91M in 1910, 376,36M in 1930, 409,82M in 1940, 406,14M in 1950 (reflecting Second World War losses) and 561,16M in 2025.



# Background

Long-term historical population reconstruction in Europe faces a paradox of evidentiary abundance combined with extreme political and cartographic fragmentation. Unlike continental basins dominated for centuries by a single agrarian empire, Europe outside the East Slavic plain was partitioned across hundreds of shifting territorial jurisdictions—Greek poleis, Roman provinces, mediaeval duchies and marcher lordships, the Imperial Circles of the Holy Roman Empire, the Polish-Lithuanian Commonwealth, the Habsburg and Ottoman monarchies, Napoleonic departments, nineteenth-century nation-states and twentieth-century Cold War blocs. Conventional global demographic reconstructions deal with this complexity by projecting contemporary sovereign national borders backward across ten thousand years [@McEvedyJones1978; @Maddison2001; @KleinGoldewijk2017]. While analytically convenient for global carbon-cycle or land-use accounting, that convention creates three structural distortions across Europe.

First, modern sovereign borders cut directly across historical demographic units that operated as unified agrarian or industrial systems for centuries. The most conspicuous twentieth-century example is the Oder-Neisse line established in 1945, which divided historic Prussia, Pomerania, Brandenburg and Silesia between post-war Germany and Poland. When a gridded model disaggregates modern German and Polish national time series backward into 1880 or 1800, a sharp artificial density cliff appears along a river frontier that did not exist politically before 1945. Analogous anachronisms arise when modern Eurostat NUTS-3 statistical regions are projected backward into 1800 or 1880, imposing late twentieth-century metropolitan planning districts onto Napoleonic departments, Prussian *Regierungsbezirke*, Italian pre-unification states and Ottoman *sanjaks*.

Second, global suitability models frequently overweight major river corridors relative to rain-fed European uplands, loess plains and maritime hinterlands. In arid or semi-arid regions such as Egypt or Mesopotamia, settlement hugs perennial river valleys tightly. In temperate humid Europe, however, dense Neolithic loess farming, Roman villa agriculture, mediaeval three-field villages and nineteenth-century coalfield conurbations flourished across interfluves, piedmont basins, coastal lowlands and upland mining belts such as the Ruhr, Upper Silesia, Lancashire, Flanders, Brabant, Lombardy and Saxony. Excessive fluvial weighting produces ribbon-like artefacts along rivers while starving rain-fed agricultural basins and industrial hinterlands of realistic population mass.

Third, the primary historical evidence for European demography is distributed across incompatible national and chronological silos. Prehistoric and protohistoric settlement survives in national radiocarbon and archaeological monument registers across Britain, Ireland, France, Denmark, Finland, the Netherlands, Italy, Poland and Greenland [@Shennan2013; @Timpson2014; @Tallavaara2015]. Classical and Roman urbanism is documented in epigraphic corpora, polis inventories and provincial surveys [@Hansen2006; @Scheidel2007; @DeLigt2012; @Hanson2016]. Mediaeval and early modern populations are reconstructed from hearth taxes, Domesday manorial rolls, ecclesiastical visitations, parish registers and urban compilations [@Russell1958; @WrigleySchofield1981; @DeVries1984; @Bairoch1988; @Dupaquier1988; @Malanima1998; @Broadberry2015; @Buringh2021]. From 1749 onward, Swedish Tabellverket tables, French Statistique Générale de la France (SGF) departmental returns, British and Irish decennial censuses, German Reich and Prussian provincial counts, Habsburg Crownland enumerations, Spanish and Italian post-unification municipal censuses and late twentieth-century Eurostat demographic tables supply dense sub-administrative counts [@Gille1949; @CoaleWatkins1986; @Mitchell2007; @PfisterFertig2010; @RosesWolf2019].

MAGNETIC harmonises these disparate records into a single bottom-up spatial-demographic synthesis across 21 regional and chronological studies, maintaining continuous eastern and north-western frontier consistency with the neighbouring POLARIS (East Slavic and Siberian) and CENTAUR (North American) macro-regions while preserving strictly European historical boundaries and ecological weighting.

# Methodology

## Canonical 21-Chapter Architecture and Areal Masking

To preserve historical territorial coherence from the terminal Palaeolithic to contemporary censuses, MAGNETIC partitions its 7,15M km² spatial domain into 21 chronological and regional modules grouped into four major thematic epochs (Table 1 and Figure 1). Every module possesses an independent 4320x2160 pixel areal mask, a matched vector GeoJSON sub-regional partition, a primary literature review, a coordinate-anchored settlement gazetteer, an auditable source ledger and an archival library of at least 17 unique open-access scholarly PDFs.

The first five chapters establish the prehistoric and classical foundations from 10000BC to 500AD. Chapters 1 and 2 cover the pan-European domain across 12 organic HydroBASINS watershed zones during the Palaeolithic-Mesolithic transition (10000BC–6000BC) and the Neolithic-Bronze Age agrarian expansion (6000BC–1000BC). Chapter 3 isolates the Aegean and Greek polis world along natural Hellenic and Aegean watershed divides (1000BC–146BC, 282k km²), while Chapter 4 spans the Iron Age and Roman Empire directly along DARE provincial boundaries from Iberia and Britannia to the Rhine-Danube limes (1000BC–400AD, 2,57M km²) and Chapter 5 covers Germania Magna, Scandinavia, Hibernia, Caledonia and the Baltic-Slavic North-East outside Roman rule (1000BC–500AD, 4,72M km²).

Chapters 6 through 11 trace the millennium from Late Antiquity through the Late Mediaeval Crisis (250AD–1500AD). Chapter 6 captures the pan-European Late Antique contraction and Migration Period (250AD–800AD). Four complementary regional modules then cover the High Middle Ages: Western and Central Europe (Chapter 7, 800AD–1347AD), Al-Andalus and the Iberian Reconquista (Chapter 8, 711AD–1492AD), Scandinavia and the North Atlantic Norse-Inuit colonisation across Iceland, the Faroes and Greenland (Chapter 9, 800AD–1500AD) and East-Central Europe, the Baltic and the Balkans (Chapter 10, 800AD–1347AD). Chapter 11 reunites the full 7,15M km² continental and insular canvas for the Black Death, fourteenth-century agrarian contraction and Ottoman Balkan advance (1347AD–1500AD).

Chapters 12 through 17 span the Early Modern and Industrial periods (1350–1914). Four regional modules trace Early Modern Western and Northern Europe (Chapter 12), Central Europe including the Thirty Years' War (Chapter 13), Southern Europe and the Macaronesian Atlantic islands (Chapter 14) and Ottoman South-Eastern Europe (Chapter 15, 1350–1830). Two large nineteenth-century syntheses then track Industrialisation and the Demographic Revolution in Western and Northern Europe (Chapter 16, 1750–1914) alongside Southern and East-Central Europe including Austria-Hungary, partitioned Poland and the independent Balkan states (Chapter 17, 1750–1914).

Finally, Chapters 18 through 21 document the twentieth and twenty-first centuries (1914–2026). Chapter 18 covers the First World War, Inter-War Europe, the Spanish Civil War, the Second World War, the Holocaust and post-war population transfers across all 7,15M km². Chapters 19, 20 and 21 then partition post-1945 contemporary Europe into Western and Northern Europe (Chapter 19, 13 sub-regions), Southern Europe and the North Atlantic and Macaronesian islands (Chapter 20, 11 sub-regions) and East-Central Europe, the Balkans and the Baltic States (Chapter 21, 17 sub-regions).

<figure class="crd-table-figure" id="tab:magnetic-chapters">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ch.</th><th class="crd-th">Regional / Chronological Module</th><th class="crd-th">Span</th><th class="crd-th">Area (km²)</th><th class="crd-th">Zones</th><th class="crd-th">Setts</th><th class="crd-th">HGIS</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>01</strong></td><td class="crd-td">Prehistoric Palaeolithic and Mesolithic Europe</td><td class="crd-td">10000BC-6000BC</td><td class="crd-td">7,15M</td><td class="crd-td">12</td><td class="crd-td">1.846</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>02</strong></td><td class="crd-td">Neolithic and Bronze Age Europe</td><td class="crd-td">6000BC-1000BC</td><td class="crd-td">7,15M</td><td class="crd-td">12</td><td class="crd-td">9.694</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>03</strong></td><td class="crd-td">Classical Greece and the Aegean World</td><td class="crd-td">1000BC-146BC</td><td class="crd-td">282k</td><td class="crd-td">5</td><td class="crd-td">1.649</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>04</strong></td><td class="crd-td">Iron Age and Roman Europe</td><td class="crd-td">1000BC-400</td><td class="crd-td">2,57M</td><td class="crd-td">11</td><td class="crd-td">8.889</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>05</strong></td><td class="crd-td">Free Germany, Scandinavia and the Baltic-Slavic North-East</td><td class="crd-td">1000BC-500</td><td class="crd-td">4,72M</td><td class="crd-td">7</td><td class="crd-td">2.399</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>06</strong></td><td class="crd-td">Late Antiquity, the Migration Period and Early Mediaeval Europe</td><td class="crd-td">250-800</td><td class="crd-td">7,15M</td><td class="crd-td">10</td><td class="crd-td">9.485</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>07</strong></td><td class="crd-td">Mediaeval Western and Central Europe</td><td class="crd-td">800-1347</td><td class="crd-td">1,79M</td><td class="crd-td">9</td><td class="crd-td">2.905</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>08</strong></td><td class="crd-td">Mediaeval Iberia</td><td class="crd-td">711-1492</td><td class="crd-td">605k</td><td class="crd-td">5</td><td class="crd-td">537</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>09</strong></td><td class="crd-td">Mediaeval Scandinavia and North Atlantic Colonisation</td><td class="crd-td">800-1500</td><td class="crd-td">3,34M</td><td class="crd-td">7</td><td class="crd-td">2.073</td><td class="crd-td">226</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Mediaeval East-Central Europe, the Baltic and the Balkans</td><td class="crd-td">800-1347</td><td class="crd-td">1,5M</td><td class="crd-td">7</td><td class="crd-td">1.291</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">The Black Death and the Late Mediaeval Crisis across Europe</td><td class="crd-td">1347-1500</td><td class="crd-td">7,15M</td><td class="crd-td">11</td><td class="crd-td">5.815</td><td class="crd-td">624</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Early Modern Western and Northern Europe</td><td class="crd-td">1500-1750</td><td class="crd-td">4,27M</td><td class="crd-td">10</td><td class="crd-td">2.649</td><td class="crd-td">3.219</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Early Modern Central Europe</td><td class="crd-td">1500-1750</td><td class="crd-td">1,49M</td><td class="crd-td">7</td><td class="crd-td">1.379</td><td class="crd-td">2.724</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Early Modern Southern Europe and Atlantic Islands</td><td class="crd-td">1500-1750</td><td class="crd-td">929,5k</td><td class="crd-td">8</td><td class="crd-td">1.764</td><td class="crd-td">1.396</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Ottoman Balkans and South-Eastern Europe</td><td class="crd-td">1350-1830</td><td class="crd-td">668,8k</td><td class="crd-td">7</td><td class="crd-td">528</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Industrialisation and Demographic Revolution in Western and Northern Europe</td><td class="crd-td">1750-1914</td><td class="crd-td">4,89M</td><td class="crd-td">9</td><td class="crd-td">30.465</td><td class="crd-td">5.205</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Early Modern and Nineteenth-Century Southern and East-Central Europe</td><td class="crd-td">1750-1914</td><td class="crd-td">2,4M</td><td class="crd-td">9</td><td class="crd-td">27.350</td><td class="crd-td">5.146</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">First World War, Inter-War Europe and the Second World War</td><td class="crd-td">1914-1945</td><td class="crd-td">7,15M</td><td class="crd-td">11</td><td class="crd-td">54.754</td><td class="crd-td">7.039</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Western and Northern Europe after 1945</td><td class="crd-td">1945-2026</td><td class="crd-td">2,63M</td><td class="crd-td">13</td><td class="crd-td">30.643</td><td class="crd-td">8.406</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Southern Europe and European Islands after 1945</td><td class="crd-td">1945-2026</td><td class="crd-td">3,28M</td><td class="crd-td">11</td><td class="crd-td">13.603</td><td class="crd-td">5.111</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">East-Central Europe, the Balkans and the Baltic States after 1945</td><td class="crd-td">1945-2026</td><td class="crd-td">1,4M</td><td class="crd-td">17</td><td class="crd-td">13.462</td><td class="crd-td">8.835</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Canonical 21-chapter itinerary of MAGNETIC showing chronological spans, equal-area footprints, regional divisions, settlement trajectories and scraped historical GIS sub-administrative enumerations.</figcaption>
</figure>

## Non-Stationary Matérn Kriging and European Fluvial Moderation

Pre-statistical spatial surfaces (10000BC through 1500AD, plus sub-district rural allocation in later periods) are constructed using non-stationary Matérn ($\nu = 3/2$) kriging over geodesic Voronoi catchments, paired with a MAGNETIC-specific dasymetric admixture configuration [@PaciorekSchervish2006]. Primary archaeological site registers—combining European radiocarbon corpora (c14bazAAR), INRAP and Mérimée in France, Historic England and ADS in Britain, the National Monuments Service of Ireland, Fund og Fortidsminder in Denmark, Museovirasto in Finland, RCE in the Netherlands, ICCD in Italy, NID in Poland, DARE and Pleiades for the classical Mediterranean and NKA Nunniffiit for Greenland—supply 90,86% regional institutional provenance with only 1,03% crowd fallback.

Two MAGNETIC-specific adjustments were calibrated against historical settlement geography without altering any shared cross-regional pipeline modules. First, fluvial attraction weights were moderated relative to arid-basin defaults so that rain-fed European agricultural plains (the Paris Basin, East Anglia, Flanders, the Magdeburg Börde, Lombardy, Silesia, Little Poland and the Pannonian lowlands) retain realistic rural density rather than collapsing into narrow river corridors. Second, pre-1945 environmental suitability priors were de-cliffed across twentieth-century state borders so that post-1945 frontiers such as the Oder-Neisse line do not bleed backward into prehistoric, classical, mediaeval or imperial rasters. Cross-frontier harmonisation along the eastern POLARIS boundary (Baltic states, Poland, Romania and Moldova) and the north-western CENTAUR seam in Greenland ensures smooth spatial continuity during continental compositing.

## Strictly Non-Anachronistic Historical GIS Sub-Administrative Architecture

Across all 118 overlapping AD HYDE epochs from 0AD to 2025, MAGNETIC replaces generic national downscaling with a 37-regime historical GIS architecture comprising 31.380 period-authentic sub-administrative enumerations sourced from 398 verified European HGIS archives (Table 2). Each raster strictly enforces non-anachronistic territorial geometry: Roman provincial geometries (DARE 1–200AD, DARMC Diocletian 303AD, AWMC *Notitia Dignitatum* 400AD, DARMC 500AD) and mediaeval ecclesiastical dioceses (DARMC 1250 and 1450) anchor Antiquity and the Middle Ages, while modern Eurostat NUTS-3 divisions (1.427 districts) are restricted exclusively to 1990–2025.

From 1500 to 1800, Western, Central and Eastern Europe are partitioned into Oxford/HistoGIS Holy Roman Empire territories and Imperial Circles (1512, 1555, 1648, 1792), Armand Brette and Victor Gay's 1789 Ancien Régime France (435 *bailliages* and 33 *généralités*), Polish-Lithuanian Commonwealth voivodeships from IH PAN (1619 and 1772), Spanish *reinos* (1500) and *Antiguo Régimen* provinces (1812), Italian pre-unification states (1500), Ottoman Rumelian *eyalets* and *sanjaks*, Danish DigDag historic *amter* and Swedish *swehist* counties (*län*) starting in 1750 [@HistoGIS2022; @Riksarkivet2023]. Between 1800 and 1850, Napoleonic and Restoration French departments (SGF 85–89 departments), Historic Counties Trust pre-1844/post-1844 UK counties (92 historic English, Welsh and Scottish counties), Ireland's 32 historic counties, Congress Poland and partitioned Polish voivodeships, Dutch pre-Flevoland provinces (DANS NLGis 1830), Norwegian Kartverket *amt* (1831), CTU Bohemian *kraje* (1850) and Austrian Crownlands enter the raster stack [@INSEE2024; @CSOIreland2023; @ONS2024].

From 1871 to 1910, coverage reaches continental high resolution through HGIS Germany (1880 and 1914) combined with the Galloway Prussia database, Univie Cisleithania and GISta Hungarorum 1910 (63 Hungarian *vármegyék* and 8 Croatia-Slavonia counties), 1900 all-three-partitions Polish gubernias, French 87-department SGF/INSEE returns excluding Alsace-Lorraine, University of Bologna DEMOPAST and ISTAT Italian provincial censuses (1861–1911), Spanish 1833 historic provinces (INE), Portuguese 1835 *distritos*, 22 Swiss pre-Jura cantons and Balkan kingdom divisions [@HGISGermany2014; @DEMOPAST2023; @INE2024; @BFS2024]. Inter-war (1920–1940) and post-war Cold War snapshots (1950–1989) follow authentic Versailles-Trianon and Yalta-Potsdam sub-national units—Weimar and Reich tax districts (809–901 units), Inter-war Second Polish Republic 17 voivodeships (1921/1931), RoHGIS Greater Romania 71 *județe* (1930), Czechoslovak 1920 *župy*, 1949–1960 19 *kraje* and 1960–1990 11 *kraje*, KOTUS 1938 pre-Winter War Finland, BKG VG-Hist FRG *Regierungsbezirke* and 15 GDR *Bezirke* (1955–1989), PRL 17/49 Polish voivodeships and SFR Yugoslavia 1953–1981 municipalities—before transitioning cleanly to Eurostat GISCO NUTS-3 in 1990–2025 [@Eurostat2024].

Within every polygon of every post-1500 snapshot, MAGNETIC applies pycnophylactic mass-conserving dasymetric disaggregation: continuous environmental and kriged suitability weights distribute population across 5-arcminute cells inside each historical district while iteratively rescaling cell sums to match the exact recorded administrative census total (worst unit relative error $5,7 \times 10^{-8}$ across 103 scaled years).

<figure class="crd-table-figure" id="tab:hgis-regimes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Epoch</th><th class="crd-th">Steps</th><th class="crd-th">Period-Authentic Administrative Geometries</th><th class="crd-th">NUTS-3 Status</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>0-500AD</strong></td><td class="crd-td">6</td><td class="crd-td">DARE Roman Provinces (1-200AD); DARMC Diocletian (303AD) &amp; 500AD; AWMC Notitia (400AD)</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>600-1400AD</strong></td><td class="crd-td">9</td><td class="crd-td">DARMC Mediaeval Dioceses (1250, 1450); IH PAN Late Mediaeval Poland; Detailed Borders</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1500-1780</strong></td><td class="crd-td">11</td><td class="crd-td">Oxford/HistoGIS HRE; Brette-Gay 1789 France (435 bailliages); IH PAN PLC (1619, 1772); Spain/Italy 1500</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1790-1850</strong></td><td class="crd-td">7</td><td class="crd-td">SGF France (85-89 deps); UK 92 &amp; Ireland 32 Historic Counties; DANS NLGis 1830; DigDag DK; Kartverket NO</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1860-1910</strong></td><td class="crd-td">6</td><td class="crd-td">HGIS Germany &amp; Galloway; Univie Cisleithania &amp; GISta HU (63+8); 1900 Polish Gubernias; DEMOPAST IT; INE ES</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1920-1940</strong></td><td class="crd-td">3</td><td class="crd-td">Weimar/Reich Tax Districts; II RP 17 Voiv.; RoHGIS 71 Judete; CSR 1920 Zupy; KOTUS 1938 FI; SGF 90 deps</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1950-1989</strong></td><td class="crd-td">40</td><td class="crd-td">BKG VG-Hist FRG RB &amp; 15 GDR Bezirke; PRL 17/49 Voiv.; CSR 19/11 Kraje; SFRY Municipalities; pre-1974 UK</td><td class="crd-td">Zero NUTS-3</td></tr>
<tr><td class="crd-td"><strong>1990-2025</strong></td><td class="crd-td">36</td><td class="crd-td">Eurostat GISCO NUTS-3 (1.427 districts) + StatGL, Hagstofa, UK/NO/CH/Balkans</td><td class="crd-td">Active (1990-2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Strictly non-anachronistic 37-regime historical GIS sub-administrative architecture spanning all 118 overlapping AD HYDE steps (0AD-2025).</figcaption>
</figure>

## Settlement Gazetteer Saturation and Provenance Control

Across all 21 chapters, settlement gazetteers were constructed through an explicit four-wave saturation protocol combining OXREP Hanson (2016) Roman Cities (964 European walled-area-scaled cities), Stanford POLIS/Hansen (2006) Classical Greek Poleis (735 poleis), Chandler and Modelski historical cities (541 cities), Jan de Vries (1984) European Urbanization (376 cities, 1500–1800), DARMC Mediaeval Major Towns (1.584 records, 814–1450), Buringh European Urban Population (1.989 cities, 700–2000AD), Eurostat GISCO Urban Audit (717 cities, 1990–2024), INSEE historical commune censuses (1876–2023), INE historical Spanish municipal censuses (1857–1991), DEMOPAST/ISTAT Italian cities (1861–1971), settlement-filtered Pleiades and DARE places (13.107 habitation sites), multi-date radiocarbon and NKA Greenland sites (19.055 sites) and national municipal directories across all 50 European and North Atlantic territories [@Hanson2016; @Hansen2006; @DeVries1984; @Buringh2021; @Eurostat2024; @INSEE2024; @INE2024; @DEMOPAST2023]. Deduplication enforces exact and Dice-bigram ($\ge 0,80$) variant merging within 25 km, subordinate suburb consolidation within 2 km and strict sovereign-polygon containment, capping secondary crowd-sourced fallbacks below 14% in every jurisdiction across every chapter.

# Testing and Validation

Validation across MAGNETIC encompasses four independent quantitative checks: archaeological kriging calibration, sub-administrative mass conservation, historical border-cliff diagnostics and settlement gazetteer exhaustiveness (Table 3).

First, the non-stationary Matérn ($\nu = 3/2$) kriging calibration achieved a global variance ratio $\tau_1 = 1,3698$, uninhabitable landmass leakage ratio of $0,0016$ (uninhabitable mass share $0,0001$), HYDE log-density correlation $0,8623$, urban core median ratio $1,002$ and urban back-projection 95th-percentile ratio $0,426$. Across all 128 output time-step rasters, high-pass spatial contrast averaged $0,2739$ on kriged surfaces and $0,2727$ on final scaled population rasters, confirming crisp settlement definition without blocky county polka-dots or blurred Gaussian halos.

Second, automated pycnophylactic verification across all 103 scaled post-1500 historical GIS rasters confirmed exact mass conservation: maximum relative discrepancy between summed raster cells and primary archival enumerations never exceeded $5,7 \times 10^{-8}$ at the sub-administrative unit level ($4,7 \times 10^{-8}$ at country level), with automated non-anachronism assertions passing across all 118 Common Era snapshots (zero NUTS-3 polygons prior to 1990, zero Flevoland prior to 1986, zero Jura canton prior to 1979 and zero post-1974 British metropolitan counties prior to 1974).

Third, cross-frontier continuity checks along the Oder-Neisse corridor verified elimination of anachronistic modern borders prior to 1945. Local border-cliff audits across all 128 rasters passed with zero failures (maximum cliff wall run $\le 11$ pixels across all 128 rasters, well below the 18-pixel threshold).

Fourth, Gatekeeper A settlement exhaustiveness checks passed across all 21 chapters (21/21 pass, zero errors), confirming 57.885 chapter-settlement trajectories, zero empty areal-mask sub-regions, empirically stratified population hierarchies across every epoch, smooth decennial census continuity (no jump exceeding $3,0\times$), zero variant-spelling near-duplicates within 25 km and crowd-fallback provenance strictly at or below 14% in every macro-jurisdiction.

<figure class="crd-table-figure" id="tab:stage-c-val">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Diagnostic Metric</th><th class="crd-th">Observed Value</th><th class="crd-th">Benchmark Criterion</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Matérn kriging global ratio (tau1)</strong></td><td class="crd-td">1,37</td><td class="crd-td">0,8-1,6</td></tr>
<tr><td class="crd-td"><strong>Uninhabitable leakage / mass share</strong></td><td class="crd-td">0,0016 / 0,0001</td><td class="crd-td">&lt;= 0,05 / &lt;= 0,02</td></tr>
<tr><td class="crd-td"><strong>Log-density correlation with HYDE</strong></td><td class="crd-td">0,8623</td><td class="crd-td">&gt;= 0,75</td></tr>
<tr><td class="crd-td"><strong>Urban core median / back-proj. P95 ratio</strong></td><td class="crd-td">1,002 / 0,426</td><td class="crd-td">0,85-1,15 / &lt;= 0,8</td></tr>
<tr><td class="crd-td"><strong>HGIS pycnophylactic max unit rel. error</strong></td><td class="crd-td">0,000000057</td><td class="crd-td">&lt;= 0,001</td></tr>
<tr><td class="crd-td"><strong>Border-cliff max wall run (128 rasters)</strong></td><td class="crd-td">9-11 px (0 fails)</td><td class="crd-td">&lt; 18 px</td></tr>
<tr><td class="crd-td"><strong>Gazetteer Gatekeeper A chapter pass rate</strong></td><td class="crd-td">21 / 21 (57.885 traj.)</td><td class="crd-td">100% pass, 0 empty zones</td></tr>
<tr><td class="crd-td"><strong>Archival open-access PDFs / distinct domains</strong></td><td class="crd-td">360 PDFs (5-12 / ch.)</td><td class="crd-td">&gt;= 15 PDFs, &gt;= 5 domains</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Quantitative diagnostics for Stage B settlement saturation, Stage C Matérn kriging, pycnophylactic HGIS mass conservation and pre-1945 border continuity.</figcaption>
</figure>

# Results

## Long-Run Holocene Demographic Trajectory (10000BC–2025)

MAGNETIC reveals five long-run demographic regimes across Europe excluding the Polaris core between the end of the Younger Dryas and 2025 (Figure 2 and Table 4). During the Palaeolithic and Mesolithic (10000BC–6000BC), hunter-gatherer numbers within the 7,15M km² gridded domain rose from roughly 67,88k in 10000BC (around 0,01 inhabitants/km², concentrated in Franco-Cantabrian, Italian and Balkan refugia) to 130,5k in 8000BC and 423,4k by 6000BC as Boreal forests and coastal estuaries opened across north-western and Nordic Europe [@BocquetAppel2005; @Tallavaara2015]. Recolonisation of the North European Plain, Britain and Scandinavia tracked the retreat of the Fennoscandian ice sheet and the progressive submergence of the North Sea Doggerland shelf, while coastal shell-midden economies along the Atlantic littoral and the Danish Ertebølle fjords achieved substantially higher local carrying capacities than interior boreal woodlands.

The Neolithic and Bronze Age transformation (6000BC–1000BC) multiplied continental population by more than an order of magnitude. Maritime Cardial farmers along the Mediterranean and Linearbandkeramik (LBK) cultivators across the Danube, Rhine and Elbe loess belts lifted gridded totals to 634,7k by 4000BC and 5,94M by 1000BC (with regional survey aggregates reaching 14,19M across densely settled Aegean, Italian, Balkan and Danubian cores), punctuated by mid-Holocene boom-and-bust oscillations and Corded Ware and Bell Beaker steppe migrations [@Pinhasi2005; @Shennan2013; @Haak2015; @Olalde2018]. Radiocarbon summed probability distributions across Britain, Ireland, France, Germany and Scandinavia corroborate sharp regional contractions around 3500BC–3000BC followed by Bronze Age metallurgical integration, alpine mining communities and fortified Urnfield settlements across Central Europe and northern Italy [@Timpson2014].

<figure class="crd-figure-block" id="fig:holocene-traj">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0/magnetic_holocene_trajectories.png" alt="fig:holocene-traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Long-run Holocene demographic trajectory of MAGNETIC Europe from 10000BC to 2025 on semi-logarithmic (Panel A) and post-1500 linear scales (Panel B).</figcaption>
</figure>

Classical urbanisation and Roman imperial integration raised domain totals sharply during the first millennium BC. Greek poleis across the Aegean (3,17M by 146BC) and Iron Age oppida across temperate Gaul, Iberia and Central Europe laid the urban foundation for imperial consolidation [@Hansen2006; @DeLigt2012]. By 1AD, gridded population reached 30,81M—holding near 30,53M through the Antonine era in 200AD—with Italy, southern Gaul, Baetica, Greece and the Rhineland-Danube limes forming the highest-density belt (Figure 3 and Figure 4). Urban networks documented in the Roman settlement gazetteer (1.670 strictly settlement-filtered cities and towns in Chapter 4, anchored on OXREP Hanson's walled-area corpus) reveal a sharply tiered provincial hierarchy anchored by Rome, Carthage's Mediterranean trading links, Lugdunum, Tarraco, Narbo, Mediolanum, Aquileia, Colonia Claudia Ara Agrippinensium, Londinium, Sirmium and Thessalonica [@Hanson2016; @BowmanWilson2011]. Beyond the Roman frontiers, Free Germany, Scandinavia, Hibernia and the Baltic-Slavic North-East grew more gradually from 2,32M in 1000BC to 4,87M by 500AD, displaying dense Jutlandic, Scanian and Przeworsk iron-working clusters alongside sparse boreal forests in northern Fennoscandia.

Late Antiquity and the Migration Period (250AD–800AD) produced the longest sustained contraction of the historical era. Recurrent pandemic waves (Cyprian and Justinianic plagues), fiscal disintegration, frontier warfare and climate cooling during the Late Antique Little Ice Age lowered gridded domain totals from 30,53M in 200AD to 24,44M in 400AD, 22,32M in 500AD and a nadir of 18,6M around 700AD [@Harper2017]. Urban contraction was sharpest across Italy, the Danube provinces and post-Roman Britain, whereas rural continuity held firmer in Aquitaine, Galicia and parts of the Rhineland. Recovery began under Carolingian agrarian reorganisation, reaching 21,22M by 800AD and 26,91M in 1000AD before accelerating rapidly through the High Mediaeval warm optimum—driven by mouldboard ploughing, three-field rotation, Baltic-Slavic *Ostsiedlung*, Iberian Reconquista resettlement and Mediterranean commercial revival—to a pre-plague crest of 61,69M in the gridded series (and 85,66M in chapter upper-bound reconstructions including late thirteenth-century regional maxima) around 1300–1347AD [@Broadberry2015; @Campbell2016].

<figure class="crd-figure-block" id="fig:kriging-mosaic">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0/magnetic_kriging_mosaic.png" alt="fig:kriging-mosaic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Reprojected Albers Equal-Area population surfaces for MAGNETIC Europe across four structural thresholds: 1000BC kriged Iron Age, 1AD Roman peak, 1500AD Renaissance HRE circles and 1880AD industrial sub-administrative HGIS.</figcaption>
</figure>

## Regional Divergence across Mediaeval, Early Modern and Industrial Europe (800–1914)

Comparing the regional sub-chapters illuminates a profound geographical rotation in European demographic density over the past millennium. Around 1000AD, the highest population concentrations in MAGNETIC Europe sat in northern and central Italy, Islamic Al-Andalus (Cordoba, Seville, Toledo and Valencia), the Byzantine Balkans and the Paris-Flanders core [@Malanima1998; @Bairoch1988]. High mediaeval colonisation simultaneously opened the North Atlantic archipelago—settling the Faroe Islands, Iceland and the Eastern and Western Settlements of Norse Greenland (Chapter 9)—and expanded rural villages across Poland, Bohemia, Moravia, Hungary, Silesia and the Baltic littoral (Chapter 10) [@Guzowski2013; @Dugmore2012].

The arrival of *Yersinia pestis* in 1347AD triggered the sharpest short-run demographic shock in recorded European history, slashing gridded domain totals from 61,69M in 1300AD to 45,52M in 1400AD (a 26,2% century-scale net decline, concealing 35% to 50% peak-to-trough losses in England, France, Italy, Norway and parts of Iberia alongside lower mortality in Poland and Bohemia) [@Benedictow2004; @Izdebski2022]. In the extreme North Atlantic, cooling climate and trade severance ended Norse Greenlandic settlement by the mid-fifteenth century while Thule Inuit communities consolidated along the western fjords [@Dugmore2012]. Meanwhile, the Ottoman advance across Thrace, Bulgaria, Serbia, Bosnia, Albania and Greece initiated two centuries of upland refugia retreat balanced by urban foundation and *timar* fiscal reorganisation in Edirne, Plovdiv, Sofia, Skopje, Sarajevo and Salonica (Chapter 15) [@Todorov1983; @Palairet1997].

Sustained recovery resumed after 1450, bringing MAGNETIC Europe to 73,25M in 1500AD and 84,55M in 1600 before the seventeenth-century crisis intervened. Between 1618 and 1660, the Thirty Years' War devastated Central Europe—cutting German imperial circle populations by 25% to 40% across Pomerania, Mecklenburg, Württemberg and the Palatinate—while severe plague waves in 1629–1631 and 1656–1657 stalled northern and southern Italy, and Castilian fiscal crises slowed central Spain [@PfisterFertig2010; @Alfani2013; @Reher1990]. Meanwhile, Atlantic maritime economies (the Dutch Republic, England and France) expanded steadily, shifting Europe's demographic and urban centre of gravity northward from the Mediterranean toward the North Sea basin [@DeVries1984; @WrigleySchofield1981; @Dupaquier1988]. Across the Atlantic islands, sugar, wine and maritime provisioning built durable colonial towns across the Azores, Madeira and the Canary Islands (Chapter 14).

By 1700, MAGNETIC Europe reached 97,69M, entering the eighteenth-century proto-industrial acceleration that lifted totals smoothly to 119,05M in 1750, 153,83M in 1800 and 218,69M in 1850, before surging during the industrial demographic transition to 277,29M by 1880, 328,55M by 1900 and 334,91M by 1910 (Figure 4 and Figure 5). Crucially, the scraped sub-administrative HGIS series captures stark intra-national divergence invisible in national totals: the Great Famine cut Ireland from 8,18M in 1841 to 4,39M by 1911 even as industrial Lancashire, Yorkshire, London, the Ruhr, Saxony, Upper Silesia, Belgian Hainaut and Lombardy quadrupled their densities [@CSOIreland2023; @ONS2024; @HGISGermany2014; @DEMOPAST2023]. France exhibited the earliest sustained fertility decline in Europe, growing slowly from 29,3M in 1801 to 39,6M in 1911 while Germany expanded from 24,8M in 1816 to 64,9M in 1910 [@CoaleWatkins1986; @INSEE2024; @Mitchell2007].

<figure class="crd-figure-block" id="fig:premod-choro">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0/magnetic_premodern_choropleths.png" alt="fig:premod-choro" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Pre-modern sub-regional population density choropleths (inhabitants/km²) across MAGNETIC Europe in 3000BC, 1AD, 1000AD and 1400AD.</figcaption>
</figure>

## Twentieth-Century Shocks and Contemporary Stabilisation (1914–2025)

The twentieth century opened at an unprecedented pace of industrial urbanisation across Britain, Germany, Belgium, the Netherlands, northern France, northern Italy, Bohemia and Saxony, coupled with mass overseas emigration from Ireland, Italy, Iberia, Austria-Hungary, Poland and Scandinavia [@CoaleWatkins1986; @Mitchell2007]. Between 1914 and 1945, however, Europe experienced the sharpest political and human upheavals of the modern age (Chapter 18). Military and civilian losses in the First World War, the 1918–1919 influenza pandemic, the dissolution of the German, Austro-Hungarian and Ottoman empires into Versailles-Trianon successor states, the Spanish Civil War (1936–1939), the Second World War, the Holocaust—which murdered roughly six million European Jews, disproportionately in Poland, Hungary, the Baltic states, Greece, the Netherlands and Central Europe—and post-1945 forced population transfers of more than 12M Germans, Poles and others fundamentally reconfigured Central and Eastern European settlement geography.

Despite catastrophic wartime losses, overall MAGNETIC domain population expanded from 334,91M in 1910 to 376,36M in 1930 and 409,82M in 1940 before slipping to 406,14M in 1950 under the immediate toll of the Second World War. Post-war baby booms, antibiotics, urban housing reconstruction and rapid Southern and East-Central European industrialisation pushed totals to 439,23M in 1960, 471,79M in 1970, 496,48M in 1980 and 527,37M in 1990. Following 1990, Europe bifurcated into three distinct demographic regimes captured in Chapters 19, 20 and 21 (Table 5). Western and Northern Europe continued growing through positive net migration and metropolitan agglomeration around London, Paris, the Randstad, Rhine-Ruhr, Munich, Stockholm and Oslo (reaching 302,12M in Chapter 19 by 2025). Southern Europe and the North Atlantic and Macaronesian islands aged rapidly while absorbing substantial immigration into Madrid, Barcelona, Milan, Rome, Lisbon and Athens (142,33M in Chapter 20 by 2025, alongside 56,8k in Greenland, 398k in Iceland and 54,5k in the Faroe Islands) [@StatGL2024; @Hagstofa2024]. East-Central Europe, the Balkans and the Baltic States experienced steep post-socialist fertility decline and westward labour out-migration across Poland, Romania, Bulgaria, Hungary, Serbia, Croatia, Bosnia and Herzegovina, Albania, Latvia and Lithuania (stabilising around 120,54M in Chapter 21), yielding a consolidated MAGNETIC domain total of 561,16M inhabitants in 2025 (Figure 5 and Table 4) [@GUSPoland2024; @KSHHungary2024; @StatBalkans2024; @StatBaltics2024].

<figure class="crd-figure-block" id="fig:mod-choro">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0/magnetic_modern_choropleths.png" alt="fig:mod-choro" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Early modern, industrial, inter-war and contemporary sub-regional density choropleths (inhabitants/km²) across MAGNETIC Europe in 1700, 1880, 1930 and 2020.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:postwar-macro">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Contemporary Module</th><th class="crd-th">Area (km²)</th><th class="crd-th">1950 Pop.</th><th class="crd-th">2025 Pop.</th><th class="crd-th">Change</th><th class="crd-th">HGIS Rows</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western and Northern Europe (Ch. 19)</strong></td><td class="crd-td">2,63M</td><td class="crd-td">214,01M</td><td class="crd-td">302,12M</td><td class="crd-td">+41,2%</td><td class="crd-td">7.885</td></tr>
<tr><td class="crd-td"><strong>Southern Europe and Islands (Ch. 20)</strong></td><td class="crd-td">3,28M</td><td class="crd-td">93,29M</td><td class="crd-td">142,33M</td><td class="crd-td">+52,6%</td><td class="crd-td">3.733</td></tr>
<tr><td class="crd-td"><strong>East-Central, Balkans and Baltics (Ch. 21)</strong></td><td class="crd-td">1,4M</td><td class="crd-td">95,63M</td><td class="crd-td">120,54M</td><td class="crd-td">+26%</td><td class="crd-td">6.020</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Post-1945 macro-regional demographic divergence across the three contemporary census modules of MAGNETIC.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:macro-series">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Population</th><th class="crd-th">Inhab./km²</th><th class="crd-th">Demographic Horizon</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">67,9k</td><td class="crd-td">0,01</td><td class="crd-td">Terminal Palaeolithic refugia and post-glacial recolonisation</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">423,4k</td><td class="crd-td">0,06</td><td class="crd-td">Late Mesolithic to Cardial-LBK Neolithic transition</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">5,94M</td><td class="crd-td">0,83</td><td class="crd-td">Late Bronze Age to Early Iron Age horizon</td></tr>
<tr><td class="crd-td"><strong>1AD</strong></td><td class="crd-td">30,81M</td><td class="crd-td">4,31</td><td class="crd-td">Early Roman Imperial peak and Free Germanic frontier</td></tr>
<tr><td class="crd-td"><strong>500AD</strong></td><td class="crd-td">22,32M</td><td class="crd-td">3,12</td><td class="crd-td">Migration Period contraction and post-Roman transition</td></tr>
<tr><td class="crd-td"><strong>700AD</strong></td><td class="crd-td">18,6M</td><td class="crd-td">2,6</td><td class="crd-td">Early Mediaeval nadir following Justinianic plague</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">26,91M</td><td class="crd-td">3,76</td><td class="crd-td">High Mediaeval agrarian clearance and urban revival</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">61,69M</td><td class="crd-td">8,63</td><td class="crd-td">Pre-Black Death mediaeval demographic peak</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">45,52M</td><td class="crd-td">6,37</td><td class="crd-td">Post-plague late mediaeval contraction trough</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">73,25M</td><td class="crd-td">10,25</td><td class="crd-td">Renaissance recovery and HRE Imperial Circles</td></tr>
<tr><td class="crd-td"><strong>1700</strong></td><td class="crd-td">97,69M</td><td class="crd-td">13,67</td><td class="crd-td">Post-Thirty Years' War recovery and Atlantic shift</td></tr>
<tr><td class="crd-td"><strong>1800</strong></td><td class="crd-td">153,83M</td><td class="crd-td">21,52</td><td class="crd-td">Napoleonic era and onset of European census statistics</td></tr>
<tr><td class="crd-td"><strong>1880</strong></td><td class="crd-td">277,29M</td><td class="crd-td">38,79</td><td class="crd-td">Industrialisation and sub-administrative HGIS coverage</td></tr>
<tr><td class="crd-td"><strong>1910</strong></td><td class="crd-td">334,91M</td><td class="crd-td">46,85</td><td class="crd-td">Belle Époque peak on eve of First World War</td></tr>
<tr><td class="crd-td"><strong>1950</strong></td><td class="crd-td">406,14M</td><td class="crd-td">56,81</td><td class="crd-td">Post-Second World War reconstruction and border shift</td></tr>
<tr><td class="crd-td"><strong>1990</strong></td><td class="crd-td">527,37M</td><td class="crd-td">73,77</td><td class="crd-td">Late Cold War convergence and entry of Eurostat NUTS-3</td></tr>
<tr><td class="crd-td"><strong>2025</strong></td><td class="crd-td">561,16M</td><td class="crd-td">78,5</td><td class="crd-td">Contemporary European census and demographic ageing</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Consolidated MAGNETIC macro-regional population totals and mean densities across 7,15M km² from 10000BC to 2025.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:hgis-detail">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Jurisdiction</th><th class="crd-th">Primary GIS &amp; Statistical Source</th><th class="crd-th">Spatial Granularity</th><th class="crd-th">Active Epochs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Holy Roman Empire (1512-1792)</strong></td><td class="crd-td">HistoGIS OEAW Imperial Circles</td><td class="crd-td">11 Circles</td><td class="crd-td">1500-1800</td></tr>
<tr><td class="crd-td"><strong>German Empire &amp; Prussia (1820-1914)</strong></td><td class="crd-td">HGIS Germany &amp; Galloway Prussia</td><td class="crd-td">36-62 States/RB</td><td class="crd-td">1820-1910</td></tr>
<tr><td class="crd-td"><strong>Austrian Empire &amp; Austria-Hungary (1820-1910)</strong></td><td class="crd-td">HistoGIS OEAW &amp; k.k. Censuses</td><td class="crd-td">16-21 Crownlands</td><td class="crd-td">1820-1910</td></tr>
<tr><td class="crd-td"><strong>France (1801-2020)</strong></td><td class="crd-td">SGF &amp; INSEE Departements</td><td class="crd-td">85-96 Deps</td><td class="crd-td">1800-2020</td></tr>
<tr><td class="crd-td"><strong>Italy (1861-1971)</strong></td><td class="crd-td">DEMOPAST Bologna &amp; ISTAT</td><td class="crd-td">59-94 Provinces</td><td class="crd-td">1871-1970</td></tr>
<tr><td class="crd-td"><strong>Spain &amp; Portugal (1850-1980)</strong></td><td class="crd-td">INE 1833 Prov. &amp; 1835 Distritos</td><td class="crd-td">49-50 Prov. / 18 Dist.</td><td class="crd-td">1850-1980</td></tr>
<tr><td class="crd-td"><strong>United Kingdom &amp; Ireland (1801-1980)</strong></td><td class="crd-td">ONS Historic Counties &amp; CSO CNA13</td><td class="crd-td">54-80 / 26 Counties</td><td class="crd-td">1800-1980</td></tr>
<tr><td class="crd-td"><strong>Sweden, Switzerland &amp; Netherlands (1750-1980)</strong></td><td class="crd-td">Riksarkivet swehist, BFS &amp; CBS</td><td class="crd-td">20-24 / 22 / 11</td><td class="crd-td">1750-1980</td></tr>
<tr><td class="crd-td"><strong>Inter-War &amp; Cold War Europe (1920-1980)</strong></td><td class="crd-td">CShapes-Europe 2 &amp; National Censuses</td><td class="crd-td">31-38 States + Sub-Adm.</td><td class="crd-td">1920-1980</td></tr>
<tr><td class="crd-td"><strong>Contemporary Europe (1990-2020)</strong></td><td class="crd-td">Eurostat GISCO NUTS-3 &amp; StatGL</td><td class="crd-td">1.427 NUTS-3 + North Atl.</td><td class="crd-td">1990-2020</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Primary historical GIS administrative boundary series and census sources ingested into MAGNETIC pycnophylactic dasymetric scaling.</figcaption>
</figure>

## Comparative Benchmarking against Global Historical Compendia

Comparing MAGNETIC against established global historical syntheses highlights where bottom-up regional reconstruction refines continental totals and sub-regional allocation (Table 6). For the prehistoric and classical worlds, MAGNETIC's regional archaeological kriging and epigraphic surveys yield 30,81M inhabitants in 1AD across Europe excluding the Polaris core—closely aligned with standard low-to-middle Roman provincial estimates while capturing the sharp urban gradient between peninsular Italy, southern Gaul, Baetica and the Danube provinces versus temperate Germania Magna [@McEvedyJones1978; @Maddison2001; @KleinGoldewijk2017].

During the High Middle Ages and the Black Death (1000AD–1500AD), MAGNETIC preserves both the steep agrarian expansion to 61,69M in the gridded benchmark by 1300AD (and 85,66M in upper-bound chapter syntheses incorporating dense Northern Italian, Flemish, French and English manorial reconstructions) and the spatial heterogeneity of fourteenth-century plague mortality documented by palaeoecological pollen records and hearth registers [@Benedictow2004; @Broadberry2015; @Izdebski2022].

From 1500 through 1910, the principal divergence between MAGNETIC and global baselines lies not merely in continental totals—which remain broadly consistent with HYDE 3.2 and Maddison—but in sub-national spatial fidelity. By anchoring cell-level population strictly to 31.380 period-authentic historical GIS enumerations rather than backward-projected late twentieth-century administrative weights, MAGNETIC accurately registers the seventeenth-century devastation of the Holy Roman Empire's northern and central corridors, the eighteenth-century rise of Atlantic port hinterlands, the nineteenth-century depopulation of post-Famine Ireland and southern Italian uplands, and the rapid concentration of industrial density across Lancashire, the Ruhr, Saxony, Upper Silesia, Wallonia and Lombardy.

<figure class="crd-table-figure" id="tab:global-comp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">MAGNETIC</th><th class="crd-th">Primary Evidentiary Pillar</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">67,9k</td><td class="crd-td">Radiocarbon SPD and national Palaeolithic registers</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">5,94M</td><td class="crd-td">National Bronze-Iron Age heritage surveys and kriging</td></tr>
<tr><td class="crd-td"><strong>1AD</strong></td><td class="crd-td">30,81M</td><td class="crd-td">Roman provincial censuses, poleis surveys and DARE</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">26,91M</td><td class="crd-td">Carolingian-Ottonian surveys, Domesday precursors and Al-Andalus</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">61,69M</td><td class="crd-td">Hearth rolls, urban compendia and high mediaeval surveys</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">45,52M</td><td class="crd-td">Post-Black Death tax rolls, Catasto and Wüstungen records</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">73,25M</td><td class="crd-td">HRE Imperial Circles, Renaissance fiscal censuses and Buringh</td></tr>
<tr><td class="crd-td"><strong>1700</strong></td><td class="crd-td">97,69M</td><td class="crd-td">HRE post-Westphalia circles, parish reconstitutions and Ottoman rolls</td></tr>
<tr><td class="crd-td"><strong>1800</strong></td><td class="crd-td">153,83M</td><td class="crd-td">SGF departments, UK 1801 census, Tabellverket and HRE</td></tr>
<tr><td class="crd-td"><strong>1900</strong></td><td class="crd-td">328,55M</td><td class="crd-td">HGIS Germany, k.k. Habsburg, INSEE, DEMOPAST, INE and ONS</td></tr>
<tr><td class="crd-td"><strong>1950</strong></td><td class="crd-td">406,14M</td><td class="crd-td">Post-war national censuses across 1945 sovereign frontiers</td></tr>
<tr><td class="crd-td"><strong>2025</strong></td><td class="crd-td">561,16M</td><td class="crd-td">Eurostat NUTS-3, Urban Audit and national statistical offices</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Benchmark comparison of MAGNETIC gridded population totals and primary historical evidentiary pillars from 10000BC to 2025.</figcaption>
</figure>

# Limitations

Three methodological limitations warrant explicit documentation. First, prehistoric and early mediaeval population totals remain subject to substantial uncertainty regarding archaeological site visibility, radiocarbon taphonomic decay and average household multipliers. While the non-stationary Matérn kriging model narrows local spatial variance by conditioning on national heritage registers, absolute continental levels before 500BC still carry $\pm 25\%$ to $\pm 40\%$ confidence intervals relative to documented classical and mediaeval series.

Second, early modern sub-administrative GIS resolution remains asymmetric across Europe between 1500 and 1850. While the Holy Roman Empire (1512–1792), Sweden (1750 onward), France (1801 onward), Britain (1801 onward) and Ireland (1841 onward) provide genuine sub-national administrative polygons and enumerations, Ottoman South-Eastern Europe and pre-1833 Iberia rely on coarser provincial or sovereign territorial aggregates prior to nineteenth-century cadastral reforms. Where sub-national boundaries are unavailable in a given epoch, MAGNETIC deliberately retains authentic contemporary sovereign polygons rather than injecting anachronistic twentieth-century districts.

Third, comparing chapter-level totals against gridded raster sums reveals expected boundary-overlap and calibration differences during transitional centuries (particularly between 1750 and 1850, where rapid transition from pre-statistical back-projections to full imperial sub-administrative censuses creates sharper apparent acceleration in the continuous raster series than in individual regional monographs). Readers analysing single national territories between 1750 and 1850 should consult the corresponding sub-chapter literature reviews (Chapters 12 through 17), which tabulate every primary historical census and parish-reconstitution estimate individually.

# Conclusion

MAGNETIC establishes an integrated, bottom-up historical demographic reconstruction for Europe excluding the Polaris core, plus Greenland and the North Atlantic islands, spanning 10000BC to 2025. By uniting 21 specialised regional literature reviews, 57.885 coordinate-anchored settlement trajectories, 360 archived open-access scholarly studies, non-stationary Matérn archaeological kriging calibrated for European rain-fed ecology and 31.380 strictly non-anachronistic historical GIS sub-administrative enumerations across 37 territorial regimes and 118 Common Era rasters, the project resolves two persistent defects in global demographic gridding: anachronistic modern borders bleeding backward into pre-1945 Europe and unrealistic fluvial over-concentration. All 128 population rasters and 21 chapter gazetteers are harmonised along the POLARIS and CENTAUR frontiers for direct integration into pan-Eurasian and global demographic syntheses.

# Appendix

All 21 constituent regional chapters are organised into four thematic folders under MAGNETIC: Prehistoric and Classical Europe (Chapters 1–5), Late Antiquity and Mediaeval Europe (Chapters 6–11), Early Modern and Nineteenth-Century Europe (Chapters 12–17) and Twentieth-Century and Contemporary Europe (Chapters 18–21). Each chapter folder contains a paired literature review, settlement gazetteer report, machine-readable settlement trajectories, source saturation ledger, staged summary cache, vector regional figures, visual inspection manifest and archival scholarly PDF library.

# Sources
