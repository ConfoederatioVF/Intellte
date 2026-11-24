Studies on Population
================
Aust Kätzchen
22 November 2026















- [Abstract](#abstract)
- [Background](#background)
- [Methodology](#methodology)
  - [Canonical 21-Chapter Architecture and Areal
    Masking](#canonical-21-chapter-architecture-and-areal-masking)
  - [Non-Stationary Matérn Kriging and European Fluvial
    Moderation](#non-stationary-matérn-kriging-and-european-fluvial-moderation)
  - [Strictly Non-Anachronistic Historical GIS Sub-Administrative
    Architecture](#strictly-non-anachronistic-historical-gis-sub-administrative-architecture)
  - [Settlement Gazetteer Saturation and Provenance
    Control](#settlement-gazetteer-saturation-and-provenance-control)
- [Testing and Validation](#testing-and-validation)
- [Results](#results)
  - [Long-Run Holocene Demographic Trajectory
    (10000BC–2025)](#long-run-holocene-demographic-trajectory-10000bc2025)
  - [Regional Divergence across Mediaeval, Early Modern and Industrial
    Europe
    (800–1914)](#regional-divergence-across-mediaeval-early-modern-and-industrial-europe-8001914)
  - [Twentieth-Century Shocks and Contemporary Stabilisation
    (1914–2025)](#twentieth-century-shocks-and-contemporary-stabilisation-19142025)
  - [Comparative Benchmarking against Global Historical
    Compendia](#comparative-benchmarking-against-global-historical-compendia)
- [Limitations](#limitations)
- [Conclusion](#conclusion)
- [Appendix](#appendix)
- [Sources](#sources)

# Abstract

Reconstructing long-run human settlement across Europe outside the East
Slavic Polaris core requires harmonising prehistoric radiocarbon and
national heritage registers, classical epigraphic and urban surveys,
mediaeval hearth and tax rolls, early modern parish and fiscal
cadastres, nineteenth-century imperial sub-administrative enumerations
and contemporary national censuses. Global gridded databases such as
HYDE disaggregate national historical totals onto 5-arcminute surfaces
through environmental suitability weights and fractional allocation
[\[1\]](#ref-KleinGoldewijk2017), whereas global demographic compendia
aggregate continental trajectories at modern sovereign state boundaries
[\[2\]](#ref-McEvedyJones1978)[\[3\]](#ref-Maddison2001)[\[4\]](#ref-LiviBacci2007).
Across Europe, where imperial borders, agrarian cores, industrial
coalfields and frontier zones shifted repeatedly across millennia,
reconstructing density from modern administrative geometries introduces
anachronistic discontinuities such as twentieth-century borders
appearing in pre-1945 maps. MAGNETIC addresses this problem across 7,15M
km² covering Western, Central, Northern, Southern and South-Eastern
Europe, the Baltic states, Greenland, Iceland, the Faroe Islands, the
Azores, Madeira and the Canary Islands from 10000BC to 2025.

MAGNETIC comprises 42 constituent chapter documents (21 chronological
and regional literature reviews paired with 21 coordinate-anchored
settlement gazetteers), supported by 360 SHA-256-unique open-access
scholarly PDFs, 563.980 historical settlement trajectories across 50
European and North Atlantic territories, and 31.380 scraped historical
GIS sub-administrative enumerations spanning 37 strictly
non-anachronistic territorial regimes across all 118 overlapping AD HYDE
time steps from 0AD to 2025. For prehistoric and pre-statistical eras,
MAGNETIC integrates regional archaeological corpora with a
non-stationary Matérn ($\nu = 3/2$) kriging model ($\tau_1 = 1,37$,
uninhabitable leakage ratio $0,0016$, HYDE log-correlation $0,8623$)
tuned specifically for Europe to moderate excessive fluvial
concentration and eliminate post-1945 border artefacts across the
Oder-Neisse line, the Polish partitions and the Adriatic-Danubian
frontier
[\[5\]](#ref-PaciorekSchervish2006)[\[6\]](#ref-Zimmermann2009). From
1500 to 2025, MAGNETIC enforces mass-conserving pycnophylactic
dasymetric scaling across period-authentic historical administrative
divisions—ranging from the 1512–1792 Holy Roman Imperial Circles, Armand
Brette’s 1789 Ancien Régime *bailliages* and *généralités*,
Polish-Lithuanian voivodeships (1619, 1772), Napoleonic and Restoration
French departments, 1861–1971 Italian provinces, Imperial German and
Weimar tax districts, GISta Hungarorum 1910 counties, RoHGIS 1930
inter-war Romanian *județe*, BKG FRG/GDR *Bezirke*, Czechoslovak
*kraje*, SFR Yugoslavia municipalities and pre-1974 British and Irish
historic counties—reserving Eurostat NUTS-3 boundaries strictly for 1990
to 2025.

Across the Holocene domain, gridded population rose from 67,88k in
10000BC and 423,4k in 6000BC to 5,94M by 1000BC and 30,81M at the early
Roman imperial peak in 1AD. Late antique epidemics, political
fragmentation and the Migration Period lowered domain numbers to 22,32M
in 500AD and 18,60M in 700AD before high mediaeval agrarian clearance
lifted totals to 26,91M in 1000AD and 61,69M by 1300AD. Following the
Black Death trough of 45,52M in 1400AD, early modern recovery carried
the domain smoothly to 73,25M in 1500AD, 84,55M in 1600, 97,69M in 1700,
119,05M in 1750, 153,83M in 1800 and 218,69M in 1850, before the
industrial demographic transition expanded MAGNETIC Europe to 277,29M in
1880, 328,55M in 1900, 334,91M in 1910, 376,36M in 1930, 409,82M in
1940, 406,14M in 1950 (reflecting Second World War losses) and 561,16M
in 2025.

<img src="figures/magnetic_areal_coverage_hero.png" alt="" width="100%" style="display: block; margin: auto;" />

# Background

Long-term historical population reconstruction in Europe faces a paradox
of evidentiary abundance combined with extreme political and
cartographic fragmentation. Unlike continental basins dominated for
centuries by a single agrarian empire, Europe outside the East Slavic
plain was partitioned across hundreds of shifting territorial
jurisdictions—Greek poleis, Roman provinces, mediaeval duchies and
marcher lordships, the Imperial Circles of the Holy Roman Empire, the
Polish-Lithuanian Commonwealth, the Habsburg and Ottoman monarchies,
Napoleonic departments, nineteenth-century nation-states and
twentieth-century Cold War blocs. Conventional global demographic
reconstructions deal with this complexity by projecting contemporary
sovereign national borders backward across ten thousand years
[\[1\]](#ref-KleinGoldewijk2017)[\[2\]](#ref-McEvedyJones1978)[\[3\]](#ref-Maddison2001).
While analytically convenient for global carbon-cycle or land-use
accounting, that convention creates three structural distortions across
Europe.

First, modern sovereign borders cut directly across historical
demographic units that operated as unified agrarian or industrial
systems for centuries. The most conspicuous twentieth-century example is
the Oder-Neisse line established in 1945, which divided historic
Prussia, Pomerania, Brandenburg and Silesia between post-war Germany and
Poland. When a gridded model disaggregates modern German and Polish
national time series backward into 1880 or 1800, a sharp artificial
density cliff appears along a river frontier that did not exist
politically before 1945. Analogous anachronisms arise when modern
Eurostat NUTS-3 statistical regions are projected backward into 1800 or
1880, imposing late twentieth-century metropolitan planning districts
onto Napoleonic departments, Prussian *Regierungsbezirke*, Italian
pre-unification states and Ottoman *sanjaks*.

Second, global suitability models frequently overweight major river
corridors relative to rain-fed European uplands, loess plains and
maritime hinterlands. In arid or semi-arid regions such as Egypt or
Mesopotamia, settlement hugs perennial river valleys tightly. In
temperate humid Europe, however, dense Neolithic loess farming, Roman
villa agriculture, mediaeval three-field villages and nineteenth-century
coalfield conurbations flourished across interfluves, piedmont basins,
coastal lowlands and upland mining belts such as the Ruhr, Upper
Silesia, Lancashire, Flanders, Brabant, Lombardy and Saxony. Excessive
fluvial weighting produces ribbon-like artefacts along rivers while
starving rain-fed agricultural basins and industrial hinterlands of
realistic population mass.

Third, the primary historical evidence for European demography is
distributed across incompatible national and chronological silos.
Prehistoric and protohistoric settlement survives in national
radiocarbon and archaeological monument registers across Britain,
Ireland, France, Denmark, Finland, the Netherlands, Italy, Poland and
Greenland
[\[7\]](#ref-Shennan2013)[\[8\]](#ref-Timpson2014)[\[9\]](#ref-Tallavaara2015).
Classical and Roman urbanism is documented in epigraphic corpora, polis
inventories and provincial surveys
[\[10\]](#ref-Hansen2006)[\[11\]](#ref-Scheidel2007)[\[12\]](#ref-DeLigt2012)[\[13\]](#ref-Hanson2016).
Mediaeval and early modern populations are reconstructed from hearth
taxes, Domesday manorial rolls, ecclesiastical visitations, parish
registers and urban compilations
[\[14\]](#ref-Russell1958)[\[15\]](#ref-WrigleySchofield1981)[\[16\]](#ref-DeVries1984)[\[17\]](#ref-Bairoch1988)[\[18\]](#ref-Dupaquier1988)[\[19\]](#ref-Malanima1998)[\[20\]](#ref-Broadberry2015)[\[21\]](#ref-Buringh2021).
From 1749 onward, Swedish Tabellverket tables, French Statistique
Générale de la France (SGF) departmental returns, British and Irish
decennial censuses, German Reich and Prussian provincial counts,
Habsburg Crownland enumerations, Spanish and Italian post-unification
municipal censuses and late twentieth-century Eurostat demographic
tables supply dense sub-administrative counts
[\[22\]](#ref-Gille1949)[\[23\]](#ref-CoaleWatkins1986)[\[24\]](#ref-Mitchell2007)[\[25\]](#ref-PfisterFertig2010)[\[26\]](#ref-RosesWolf2019).

MAGNETIC harmonises these disparate records into a single bottom-up
spatial-demographic synthesis across 21 regional and chronological
studies, maintaining continuous eastern and north-western frontier
consistency with the neighbouring POLARIS (East Slavic and Siberian) and
CENTAUR (North American) macro-regions while preserving strictly
European historical boundaries and ecological weighting.

# Methodology

## Canonical 21-Chapter Architecture and Areal Masking

To preserve historical territorial coherence from the terminal
Palaeolithic to contemporary censuses, MAGNETIC partitions its 7,15M km²
spatial domain into 21 chronological and regional modules grouped into
four major thematic epochs (Table 1 and Figure 1). Every module
possesses an independent 4320x2160 pixel areal mask, a matched vector
GeoJSON sub-regional partition, a primary literature review, a
coordinate-anchored settlement gazetteer, an auditable source ledger and
an archival library of at least 17 unique open-access scholarly PDFs.

The first five chapters establish the prehistoric and classical
foundations from 10000BC to 500AD. Chapters 1 and 2 cover the
pan-European domain across 12 organic HydroBASINS watershed zones during
the Palaeolithic-Mesolithic transition (10000BC–6000BC) and the
Neolithic-Bronze Age agrarian expansion (6000BC–1000BC). Chapter 3
isolates the Aegean and Greek polis world along natural Hellenic and
Aegean watershed divides (1000BC–146BC, 282,0k km²), while Chapter 4
spans the Iron Age and Roman Empire directly along DARE provincial
boundaries from Iberia and Britannia to the Rhine-Danube limes
(1000BC–400AD, 2,57M km²) and Chapter 5 covers Germania Magna,
Scandinavia, Hibernia, Caledonia and the Baltic-Slavic North-East
outside Roman rule (1000BC–500AD, 4,72M km²).

Chapters 6 through 11 trace the millennium from Late Antiquity through
the Late Mediaeval Crisis (250AD–1500AD). Chapter 6 captures the
pan-European Late Antique contraction and Migration Period
(250AD–800AD). Four complementary regional modules then cover the High
Middle Ages: Western and Central Europe (Chapter 7, 800AD–1347AD),
Al-Andalus and the Iberian Reconquista (Chapter 8, 711AD–1492AD),
Scandinavia and the North Atlantic Norse-Inuit colonisation across
Iceland, the Faroes and Greenland (Chapter 9, 800AD–1500AD) and
East-Central Europe, the Baltic and the Balkans (Chapter 10,
800AD–1347AD). Chapter 11 reunites the full 7,15M km² continental and
insular canvas for the Black Death, fourteenth-century agrarian
contraction and Ottoman Balkan advance (1347AD–1500AD).

Chapters 12 through 17 span the Early Modern and Industrial periods
(1350–1914). Four regional modules trace Early Modern Western and
Northern Europe (Chapter 12), Central Europe including the Thirty Years’
War (Chapter 13), Southern Europe and the Macaronesian Atlantic islands
(Chapter 14) and Ottoman South-Eastern Europe (Chapter 15, 1350–1830).
Two large nineteenth-century syntheses then track Industrialisation and
the Demographic Revolution in Western and Northern Europe (Chapter 16,
1750–1914) alongside Southern and East-Central Europe including
Austria-Hungary, partitioned Poland and the independent Balkan states
(Chapter 17, 1750–1914).

Finally, Chapters 18 through 21 document the twentieth and twenty-first
centuries (1914–2026). Chapter 18 covers the First World War, Inter-War
Europe, the Spanish Civil War, the Second World War, the Holocaust and
post-war population transfers across all 7,15M km². Chapters 19, 20 and
21 then partition post-1945 contemporary Europe into Western and
Northern Europe (Chapter 19, 13 sub-regions), Southern Europe and the
North Atlantic and Macaronesian islands (Chapter 20, 11 sub-regions) and
East-Central Europe, the Balkans and the Baltic States (Chapter 21, 17
sub-regions).

| Ch. | Regional / Chronological Module | Span | Area (km²) | Zones | Setts | HGIS |
|:---|:---|:---|:---|:---|:---|:---|
| **01** | Prehistoric Palaeolithic and Mesolithic Europe | 10000BC-6000BC | 7,15M | 12 | 1.845 | 0 |
| **02** | Neolithic and Bronze Age Europe | 6000BC-1000BC | 7,15M | 12 | 9.712 | 0 |
| **03** | Classical Greece and the Aegean World | 1000BC-146BC | 282k | 5 | 1.756 | 0 |
| **04** | Iron Age and Roman Europe | 1000BC-400 | 2,57M | 11 | 9.840 | 0 |
| **05** | Free Germany, Scandinavia and the Baltic-Slavic North-East | 1000BC-500 | 4,72M | 7 | 2.408 | 0 |
| **06** | Late Antiquity, the Migration Period and Early Mediaeval Europe | 250-800 | 7,15M | 10 | 19.420 | 0 |
| **07** | Mediaeval Western and Central Europe | 800-1347 | 1,79M | 9 | 52.011 | 0 |
| **08** | Mediaeval Iberia | 711-1492 | 605k | 5 | 8.963 | 0 |
| **09** | Mediaeval Scandinavia and North Atlantic Colonisation | 800-1500 | 3,34M | 7 | 2.483 | 226 |
| **10** | Mediaeval East-Central Europe, the Baltic and the Balkans | 800-1347 | 1,5M | 7 | 14.423 | 0 |
| **11** | The Black Death and the Late Mediaeval Crisis across Europe | 1347-1500 | 7,15M | 11 | 82.551 | 625 |
| **12** | Early Modern Western and Northern Europe | 1500-1750 | 4,27M | 10 | 39.212 | 3.223 |
| **13** | Early Modern Central Europe | 1500-1750 | 1,49M | 7 | 32.854 | 2.724 |
| **14** | Early Modern Southern Europe and Atlantic Islands | 1500-1750 | 929,5k | 8 | 16.805 | 1.428 |
| **15** | Ottoman Balkans and South-Eastern Europe | 1350-1830 | 668,8k | 7 | 6.637 | 798 |
| **16** | Industrialisation and Demographic Revolution in Western and Northern Europe | 1750-1914 | 4,89M | 9 | 50.638 | 5.205 |
| **17** | Early Modern and Nineteenth-Century Southern and East-Central Europe | 1750-1914 | 2,4M | 9 | 38.411 | 5.146 |
| **18** | First World War, Inter-War Europe and the Second World War | 1914-1945 | 7,15M | 11 | 84.596 | 7.039 |
| **19** | Western and Northern Europe after 1945 | 1945-2026 | 2,63M | 13 | 51.133 | 8.406 |
| **20** | Southern Europe and European Islands after 1945 | 1945-2026 | 3,28M | 11 | 19.894 | 5.111 |
| **21** | East-Central Europe, the Balkans and the Baltic States after 1945 | 1945-2026 | 1,4M | 17 | 18.388 | 8.835 |

Canonical 21-chapter itinerary of MAGNETIC showing chronological spans,
equal-area footprints, regional divisions, settlement trajectories and
scraped historical GIS sub-administrative enumerations.

## Non-Stationary Matérn Kriging and European Fluvial Moderation

Pre-statistical spatial surfaces (10000BC through 1500AD, plus
sub-district rural allocation in later periods) are constructed using
non-stationary Matérn ($\nu = 3/2$) kriging over geodesic Voronoi
catchments, paired with a MAGNETIC-specific dasymetric admixture
configuration [\[5\]](#ref-PaciorekSchervish2006). Primary
archaeological site registers—combining European radiocarbon corpora
(c14bazAAR), INRAP and Mérimée in France, Historic England and ADS in
Britain, the National Monuments Service of Ireland, Fund og
Fortidsminder in Denmark, Museovirasto in Finland, RCE in the
Netherlands, ICCD in Italy, NID in Poland, DARE and Pleiades for the
classical Mediterranean and NKA Nunniffiit for Greenland—supply 90,86%
regional institutional provenance with only 1,03% crowd fallback.

Two MAGNETIC-specific adjustments were calibrated against historical
settlement geography without altering any shared cross-regional pipeline
modules. First, fluvial attraction weights were moderated relative to
arid-basin defaults so that rain-fed European agricultural plains (the
Paris Basin, East Anglia, Flanders, the Magdeburg Börde, Lombardy,
Silesia, Little Poland and the Pannonian lowlands) retain realistic
rural density rather than collapsing into narrow river corridors.
Second, pre-1945 environmental suitability priors were de-cliffed across
twentieth-century state borders so that post-1945 frontiers such as the
Oder-Neisse line do not bleed backward into prehistoric, classical,
mediaeval or imperial rasters. Cross-frontier harmonisation along the
eastern POLARIS boundary (Baltic states, Poland, Romania and Moldova)
and the north-western CENTAUR seam in Greenland ensures smooth spatial
continuity during continental compositing.

## Strictly Non-Anachronistic Historical GIS Sub-Administrative Architecture

Across all 118 overlapping AD HYDE epochs from 0AD to 2025, MAGNETIC
replaces generic national downscaling with a 37-regime historical GIS
architecture comprising 31.380 period-authentic sub-administrative
enumerations sourced from 398 verified European HGIS archives (Table 2).
Each raster strictly enforces non-anachronistic territorial geometry:
Roman provincial geometries (DARE 1–200AD, DARMC Diocletian 303AD, AWMC
*Notitia Dignitatum* 400AD, DARMC 500AD) and mediaeval ecclesiastical
dioceses (DARMC 1250 and 1450) anchor Antiquity and the Middle Ages,
while modern Eurostat NUTS-3 divisions (1.427 districts) are restricted
exclusively to 1990–2025.

From 1500 to 1800, Western, Central and Eastern Europe are partitioned
into Oxford/HistoGIS Holy Roman Empire territories and Imperial Circles
(1512, 1555, 1648, 1792), Armand Brette and Victor Gay’s 1789 Ancien
Régime France (435 *bailliages* and 33 *généralités*), Polish-Lithuanian
Commonwealth voivodeships from IH PAN (1619 and 1772), Spanish *reinos*
(1500) and *Antiguo Régimen* provinces (1812), Italian pre-unification
states (1500), Ottoman Rumelian *eyalets* and *sanjaks*, Danish DigDag
historic *amter* and Swedish *swehist* counties (*län*) starting in 1750
[\[27\]](#ref-HistoGIS2022)[\[28\]](#ref-Riksarkivet2023). Between 1800
and 1850, Napoleonic and Restoration French departments (SGF 85–89
departments), Historic Counties Trust pre-1844/post-1844 UK counties (92
historic English, Welsh and Scottish counties), Ireland’s 32 historic
counties, Congress Poland and partitioned Polish voivodeships, Dutch
pre-Flevoland provinces (DANS NLGis 1830), Norwegian Kartverket *amt*
(1831), CTU Bohemian *kraje* (1850) and Austrian Crownlands enter the
raster stack
[\[29\]](#ref-INSEE2024)[\[30\]](#ref-CSOIreland2023)[\[31\]](#ref-ONS2024).

From 1871 to 1910, coverage reaches continental high resolution through
HGIS Germany (1880 and 1914) combined with the Galloway Prussia
database, Univie Cisleithania and GISta Hungarorum 1910 (63 Hungarian
*vármegyék* and 8 Croatia-Slavonia counties), 1900 all-three-partitions
Polish gubernias, French 87-department SGF/INSEE returns excluding
Alsace-Lorraine, University of Bologna DEMOPAST and ISTAT Italian
provincial censuses (1861–1911), Spanish 1833 historic provinces (INE),
Portuguese 1835 *distritos*, 22 Swiss pre-Jura cantons and Balkan
kingdom divisions
[\[32\]](#ref-HGISGermany2014)[\[33\]](#ref-DEMOPAST2023)[\[34\]](#ref-INE2024)[\[35\]](#ref-BFS2024).
Inter-war (1920–1940) and post-war Cold War snapshots (1950–1989) follow
authentic Versailles-Trianon and Yalta-Potsdam sub-national units—Weimar
and Reich tax districts (809–901 units), Inter-war Second Polish
Republic 17 voivodeships (1921/1931), RoHGIS Greater Romania 71 *județe*
(1930), Czechoslovak 1920 *župy*, 1949–1960 19 *kraje* and 1960–1990 11
*kraje*, KOTUS 1938 pre-Winter War Finland, BKG VG-Hist FRG
*Regierungsbezirke* and 15 GDR *Bezirke* (1955–1989), PRL 17/49 Polish
voivodeships and SFR Yugoslavia 1953–1981 municipalities—before
transitioning cleanly to Eurostat GISCO NUTS-3 in 1990–2025
[\[36\]](#ref-Eurostat2024).

Within every polygon of every post-1500 snapshot, MAGNETIC applies
pycnophylactic mass-conserving dasymetric disaggregation: continuous
environmental and kriged suitability weights distribute population
across 5-arcminute cells inside each historical district while
iteratively rescaling cell sums to match the exact recorded
administrative census total (worst unit relative error
$5,7 \times 10^{-8}$ across 103 scaled years).

| Epoch | Steps | Period-Authentic Administrative Geometries | NUTS-3 Status |
|:---|:---|:---|:---|
| **0-500AD** | 6 | DARE Roman Provinces (1-200AD); DARMC Diocletian (303AD) & 500AD; AWMC Notitia (400AD) | Zero NUTS-3 |
| **600-1400AD** | 9 | DARMC Mediaeval Dioceses (1250, 1450); IH PAN Late Mediaeval Poland; Detailed Borders | Zero NUTS-3 |
| **1500-1780** | 11 | Oxford/HistoGIS HRE; Brette-Gay 1789 France (435 bailliages); IH PAN PLC (1619, 1772); Spain/Italy 1500 | Zero NUTS-3 |
| **1790-1850** | 7 | SGF France (85-89 deps); UK 92 & Ireland 32 Historic Counties; DANS NLGis 1830; DigDag DK; Kartverket NO | Zero NUTS-3 |
| **1860-1910** | 6 | HGIS Germany & Galloway; Univie Cisleithania & GISta HU (63+8); 1900 Polish Gubernias; DEMOPAST IT; INE ES | Zero NUTS-3 |
| **1920-1940** | 3 | Weimar/Reich Tax Districts; II RP 17 Voiv.; RoHGIS 71 Judete; CSR 1920 Zupy; KOTUS 1938 FI; SGF 90 deps | Zero NUTS-3 |
| **1950-1989** | 40 | BKG VG-Hist FRG RB & 15 GDR Bezirke; PRL 17/49 Voiv.; CSR 19/11 Kraje; SFRY Municipalities; pre-1974 UK | Zero NUTS-3 |
| **1990-2025** | 36 | Eurostat GISCO NUTS-3 (1.427 districts) + StatGL, Hagstofa, UK/NO/CH/Balkans | Active (1990-2025) |

Strictly non-anachronistic 37-regime historical GIS sub-administrative
architecture spanning all 118 overlapping AD HYDE steps (0AD-2025).

## Settlement Gazetteer Saturation and Provenance Control

Across all 21 chapters, settlement gazetteers were constructed through
an explicit four-wave saturation protocol combining OXREP Hanson (2016)
Roman Cities (964 European walled-area-scaled cities), Stanford
POLIS/Hansen (2006) Classical Greek Poleis (735 poleis), Chandler and
Modelski historical cities (541 cities), Jan de Vries (1984) European
Urbanization (376 cities, 1500–1800), DARMC Mediaeval Major Towns (1.584
records, 814–1450), Buringh European Urban Population (1.989 cities,
700–2000AD), Eurostat GISCO Urban Audit (717 cities, 1990–2024), INSEE
historical commune censuses (1876–2023), INE historical Spanish
municipal censuses (1857–1991), DEMOPAST/ISTAT Italian cities
(1861–1971), settlement-filtered Pleiades and DARE places (13.107
habitation sites), multi-date radiocarbon and NKA Greenland sites
(19.055 sites) and national municipal directories across all 50 European
and North Atlantic territories
[\[10\]](#ref-Hansen2006)[\[13\]](#ref-Hanson2016)[\[16\]](#ref-DeVries1984)[\[21\]](#ref-Buringh2021)[\[29\]](#ref-INSEE2024)[\[33\]](#ref-DEMOPAST2023)[\[34\]](#ref-INE2024)[\[36\]](#ref-Eurostat2024).
Deduplication enforces exact and Dice-bigram ($\ge 0,80$) variant
merging within 25 km, subordinate suburb consolidation within 2 km and
strict sovereign-polygon containment, capping secondary crowd-sourced
fallbacks below 14% in every jurisdiction across every chapter.

# Testing and Validation

Validation across MAGNETIC encompasses four independent quantitative
checks: archaeological kriging calibration, sub-administrative mass
conservation, historical border-cliff diagnostics and settlement
gazetteer exhaustiveness (Table 3).

First, the non-stationary Matérn ($\nu = 3/2$) kriging calibration
achieved a global variance ratio $\tau_1 = 1,3698$, uninhabitable
landmass leakage ratio of $0,0016$ (uninhabitable mass share $0,0001$),
HYDE log-density correlation $0,8623$, urban core median ratio $1,002$
and urban back-projection 95th-percentile ratio $0,426$. Across all 128
output time-step rasters, high-pass spatial contrast averaged $0,2739$
on kriged surfaces and $0,2727$ on final scaled population rasters,
confirming crisp settlement definition without blocky county polka-dots
or blurred Gaussian halos.

Second, automated pycnophylactic verification across all 103 scaled
post-1500 historical GIS rasters confirmed exact mass conservation:
maximum relative discrepancy between summed raster cells and primary
archival enumerations never exceeded $5,7 \times 10^{-8}$ at the
sub-administrative unit level ($4,7 \times 10^{-8}$ at country level),
with automated non-anachronism assertions passing across all 118 Common
Era snapshots (zero NUTS-3 polygons prior to 1990, zero Flevoland prior
to 1986, zero Jura canton prior to 1979 and zero post-1974 British
metropolitan counties prior to 1974).

Third, cross-frontier continuity checks along the Oder-Neisse corridor
verified elimination of anachronistic modern borders prior to 1945.
Local border-cliff audits across all 128 rasters passed with zero
failures (maximum cliff wall run $\le 11$ pixels across all 128 rasters,
well below the 18-pixel threshold).

Fourth, Gatekeeper A settlement exhaustiveness checks passed across all
21 chapters (21/21 pass, zero errors), confirming 57.885
chapter-settlement trajectories, zero empty areal-mask sub-regions,
empirically stratified population hierarchies across every epoch, smooth
decennial census continuity (no jump exceeding $3,0\times$), zero
variant-spelling near-duplicates within 25 km and crowd-fallback
provenance strictly at or below 14% in every macro-jurisdiction.

| Diagnostic Metric | Observed Value | Benchmark Criterion |
|:---|:---|:---|
| **Matérn kriging global ratio (tau1)** | 1,37 | 0,8-1,6 |
| **Uninhabitable leakage / mass share** | 0,0016 / 0,0001 | \<= 0,05 / \<= 0,02 |
| **Log-density correlation with HYDE** | 0,8623 | \>= 0,75 |
| **Urban core median / back-proj. P95 ratio** | 1,002 / 0,426 | 0,85-1,15 / \<= 0,8 |
| **HGIS pycnophylactic max unit rel. error** | 0,000000057 | \<= 0,001 |
| **Border-cliff max wall run (128 rasters)** | 9-11 px (0 fails) | \< 18 px |
| **Gazetteer Gatekeeper A chapter pass rate** | 21 / 21 (57.885 traj.) | 100% pass, 0 empty zones |
| **Archival open-access PDFs / distinct domains** | 360 PDFs (5-12 / ch.) | \>= 15 PDFs, \>= 5 domains |

Quantitative diagnostics for Stage B settlement saturation, Stage C
Matérn kriging, pycnophylactic HGIS mass conservation and pre-1945
border continuity.

# Results

## Long-Run Holocene Demographic Trajectory (10000BC–2025)

MAGNETIC reveals five long-run demographic regimes across Europe
excluding the Polaris core between the end of the Younger Dryas and 2025
(Figure 2 and Table 4). During the Palaeolithic and Mesolithic
(10000BC–6000BC), hunter-gatherer numbers within the 7,15M km² gridded
domain rose from roughly 67,88k in 10000BC (around 0,01 inhabitants/km²,
concentrated in Franco-Cantabrian, Italian and Balkan refugia) to 130,5k
in 8000BC and 423,4k by 6000BC as Boreal forests and coastal estuaries
opened across north-western and Nordic Europe
[\[9\]](#ref-Tallavaara2015)[\[37\]](#ref-BocquetAppel2005).
Recolonisation of the North European Plain, Britain and Scandinavia
tracked the retreat of the Fennoscandian ice sheet and the progressive
submergence of the North Sea Doggerland shelf, while coastal
shell-midden economies along the Atlantic littoral and the Danish
Ertebølle fjords achieved substantially higher local carrying capacities
than interior boreal woodlands.

The Neolithic and Bronze Age transformation (6000BC–1000BC) multiplied
continental population by more than an order of magnitude. Maritime
Cardial farmers along the Mediterranean and Linearbandkeramik (LBK)
cultivators across the Danube, Rhine and Elbe loess belts lifted gridded
totals to 634,7k by 4000BC and 5,94M by 1000BC (with regional survey
aggregates reaching 14,19M across densely settled Aegean, Italian,
Balkan and Danubian cores), punctuated by mid-Holocene boom-and-bust
oscillations and Corded Ware and Bell Beaker steppe migrations
[\[7\]](#ref-Shennan2013)[\[38\]](#ref-Pinhasi2005)[\[39\]](#ref-Haak2015)[\[40\]](#ref-Olalde2018).
Radiocarbon summed probability distributions across Britain, Ireland,
France, Germany and Scandinavia corroborate sharp regional contractions
around 3500BC–3000BC followed by Bronze Age metallurgical integration,
alpine mining communities and fortified Urnfield settlements across
Central Europe and northern Italy [\[8\]](#ref-Timpson2014).

<img src="figures/magnetic_holocene_trajectories.png" alt="" width="100%" style="display: block; margin: auto;" />

Classical urbanisation and Roman imperial integration raised domain
totals sharply during the first millennium BC. Greek poleis across the
Aegean (3,17M by 146BC) and Iron Age oppida across temperate Gaul,
Iberia and Central Europe laid the urban foundation for imperial
consolidation [\[10\]](#ref-Hansen2006)[\[12\]](#ref-DeLigt2012). By
1AD, gridded population reached 30,81M—holding near 30,53M through the
Antonine era in 200AD—with Italy, southern Gaul, Baetica, Greece and the
Rhineland-Danube limes forming the highest-density belt (Figure 3 and
Figure 4). Urban networks documented in the Roman settlement gazetteer
(1.670 strictly settlement-filtered cities and towns in Chapter 4,
anchored on OXREP Hanson’s walled-area corpus) reveal a sharply tiered
provincial hierarchy anchored by Rome, Carthage’s Mediterranean trading
links, Lugdunum, Tarraco, Narbo, Mediolanum, Aquileia, Colonia Claudia
Ara Agrippinensium, Londinium, Sirmium and Thessalonica
[\[13\]](#ref-Hanson2016)[\[41\]](#ref-BowmanWilson2011). Beyond the
Roman frontiers, Free Germany, Scandinavia, Hibernia and the
Baltic-Slavic North-East grew more gradually from 2,32M in 1000BC to
4,87M by 500AD, displaying dense Jutlandic, Scanian and Przeworsk
iron-working clusters alongside sparse boreal forests in northern
Fennoscandia.

Late Antiquity and the Migration Period (250AD–800AD) produced the
longest sustained contraction of the historical era. Recurrent pandemic
waves (Cyprian and Justinianic plagues), fiscal disintegration, frontier
warfare and climate cooling during the Late Antique Little Ice Age
lowered gridded domain totals from 30,53M in 200AD to 24,44M in 400AD,
22,32M in 500AD and a nadir of 18,6M around 700AD
[\[42\]](#ref-Harper2017). Urban contraction was sharpest across Italy,
the Danube provinces and post-Roman Britain, whereas rural continuity
held firmer in Aquitaine, Galicia and parts of the Rhineland. Recovery
began under Carolingian agrarian reorganisation, reaching 21,22M by
800AD and 26,91M in 1000AD before accelerating rapidly through the High
Mediaeval warm optimum—driven by mouldboard ploughing, three-field
rotation, Baltic-Slavic *Ostsiedlung*, Iberian Reconquista resettlement
and Mediterranean commercial revival—to a pre-plague crest of 61,69M in
the gridded series (and 85,66M in chapter upper-bound reconstructions
including late thirteenth-century regional maxima) around 1300–1347AD
[\[20\]](#ref-Broadberry2015)[\[43\]](#ref-Campbell2016).

<img src="figures/magnetic_kriging_mosaic.png" alt="" width="100%" style="display: block; margin: auto;" />

## Regional Divergence across Mediaeval, Early Modern and Industrial Europe (800–1914)

Comparing the regional sub-chapters illuminates a profound geographical
rotation in European demographic density over the past millennium.
Around 1000AD, the highest population concentrations in MAGNETIC Europe
sat in northern and central Italy, Islamic Al-Andalus (Cordoba, Seville,
Toledo and Valencia), the Byzantine Balkans and the Paris-Flanders core
[\[17\]](#ref-Bairoch1988)[\[19\]](#ref-Malanima1998). High mediaeval
colonisation simultaneously opened the North Atlantic
archipelago—settling the Faroe Islands, Iceland and the Eastern and
Western Settlements of Norse Greenland (Chapter 9)—and expanded rural
villages across Poland, Bohemia, Moravia, Hungary, Silesia and the
Baltic littoral (Chapter 10)
[\[44\]](#ref-Guzowski2013)[\[45\]](#ref-Dugmore2012).

The arrival of *Yersinia pestis* in 1347AD triggered the sharpest
short-run demographic shock in recorded European history, slashing
gridded domain totals from 61,69M in 1300AD to 45,52M in 1400AD (a 26,2%
century-scale net decline, concealing 35% to 50% peak-to-trough losses
in England, France, Italy, Norway and parts of Iberia alongside lower
mortality in Poland and Bohemia)
[\[46\]](#ref-Benedictow2004)[\[47\]](#ref-Izdebski2022). In the extreme
North Atlantic, cooling climate and trade severance ended Norse
Greenlandic settlement by the mid-fifteenth century while Thule Inuit
communities consolidated along the western fjords
[\[45\]](#ref-Dugmore2012). Meanwhile, the Ottoman advance across
Thrace, Bulgaria, Serbia, Bosnia, Albania and Greece initiated two
centuries of upland refugia retreat balanced by urban foundation and
*timar* fiscal reorganisation in Edirne, Plovdiv, Sofia, Skopje,
Sarajevo and Salonica (Chapter 15)
[\[48\]](#ref-Todorov1983)[\[49\]](#ref-Palairet1997).

Sustained recovery resumed after 1450, bringing MAGNETIC Europe to
73,25M in 1500AD and 84,55M in 1600 before the seventeenth-century
crisis intervened. Between 1618 and 1660, the Thirty Years’ War
devastated Central Europe—cutting German imperial circle populations by
25% to 40% across Pomerania, Mecklenburg, Württemberg and the
Palatinate—while severe plague waves in 1629–1631 and 1656–1657 stalled
northern and southern Italy, and Castilian fiscal crises slowed central
Spain
[\[25\]](#ref-PfisterFertig2010)[\[50\]](#ref-Alfani2013)[\[51\]](#ref-Reher1990).
Meanwhile, Atlantic maritime economies (the Dutch Republic, England and
France) expanded steadily, shifting Europe’s demographic and urban
centre of gravity northward from the Mediterranean toward the North Sea
basin
[\[15\]](#ref-WrigleySchofield1981)[\[16\]](#ref-DeVries1984)[\[18\]](#ref-Dupaquier1988).
Across the Atlantic islands, sugar, wine and maritime provisioning built
durable colonial towns across the Azores, Madeira and the Canary Islands
(Chapter 14).

By 1700, MAGNETIC Europe reached 97,69M, entering the eighteenth-century
proto-industrial acceleration that lifted totals smoothly to 119,05M in
1750, 153,83M in 1800 and 218,69M in 1850, before surging during the
industrial demographic transition to 277,29M by 1880, 328,55M by 1900
and 334,91M by 1910 (Figure 4 and Figure 5). Crucially, the scraped
sub-administrative HGIS series captures stark intra-national divergence
invisible in national totals: the Great Famine cut Ireland from 8,18M in
1841 to 4,39M by 1911 even as industrial Lancashire, Yorkshire, London,
the Ruhr, Saxony, Upper Silesia, Belgian Hainaut and Lombardy quadrupled
their densities
[\[30\]](#ref-CSOIreland2023)[\[31\]](#ref-ONS2024)[\[32\]](#ref-HGISGermany2014)[\[33\]](#ref-DEMOPAST2023).
France exhibited the earliest sustained fertility decline in Europe,
growing slowly from 29,3M in 1801 to 39,6M in 1911 while Germany
expanded from 24,8M in 1816 to 64,9M in 1910
[\[23\]](#ref-CoaleWatkins1986)[\[24\]](#ref-Mitchell2007)[\[29\]](#ref-INSEE2024).

<img src="figures/magnetic_premodern_choropleths.png" alt="" width="100%" style="display: block; margin: auto;" />

## Twentieth-Century Shocks and Contemporary Stabilisation (1914–2025)

The twentieth century opened at an unprecedented pace of industrial
urbanisation across Britain, Germany, Belgium, the Netherlands, northern
France, northern Italy, Bohemia and Saxony, coupled with mass overseas
emigration from Ireland, Italy, Iberia, Austria-Hungary, Poland and
Scandinavia [\[23\]](#ref-CoaleWatkins1986)[\[24\]](#ref-Mitchell2007).
Between 1914 and 1945, however, Europe experienced the sharpest
political and human upheavals of the modern age (Chapter 18). Military
and civilian losses in the First World War, the 1918–1919 influenza
pandemic, the dissolution of the German, Austro-Hungarian and Ottoman
empires into Versailles-Trianon successor states, the Spanish Civil War
(1936–1939), the Second World War, the Holocaust—which murdered roughly
six million European Jews, disproportionately in Poland, Hungary, the
Baltic states, Greece, the Netherlands and Central Europe—and post-1945
forced population transfers of more than 12M Germans, Poles and others
fundamentally reconfigured Central and Eastern European settlement
geography.

Despite catastrophic wartime losses, overall MAGNETIC domain population
expanded from 334,91M in 1910 to 376,36M in 1930 and 409,82M in 1940
before slipping to 406,14M in 1950 under the immediate toll of the
Second World War. Post-war baby booms, antibiotics, urban housing
reconstruction and rapid Southern and East-Central European
industrialisation pushed totals to 439,23M in 1960, 471,79M in 1970,
496,48M in 1980 and 527,37M in 1990. Following 1990, Europe bifurcated
into three distinct demographic regimes captured in Chapters 19, 20 and
21 (Table 5). Western and Northern Europe continued growing through
positive net migration and metropolitan agglomeration around London,
Paris, the Randstad, Rhine-Ruhr, Munich, Stockholm and Oslo (reaching
302,12M in Chapter 19 by 2025). Southern Europe and the North Atlantic
and Macaronesian islands aged rapidly while absorbing substantial
immigration into Madrid, Barcelona, Milan, Rome, Lisbon and Athens
(142,33M in Chapter 20 by 2025, alongside 56,8k in Greenland, 398k in
Iceland and 54,5k in the Faroe Islands)
[\[52\]](#ref-StatGL2024)[\[53\]](#ref-Hagstofa2024). East-Central
Europe, the Balkans and the Baltic States experienced steep
post-socialist fertility decline and westward labour out-migration
across Poland, Romania, Bulgaria, Hungary, Serbia, Croatia, Bosnia and
Herzegovina, Albania, Latvia and Lithuania (stabilising around 120,54M
in Chapter 21), yielding a consolidated MAGNETIC domain total of 561,16M
inhabitants in 2025 (Figure 5 and Table 4)
[\[54\]](#ref-GUSPoland2024)[\[55\]](#ref-KSHHungary2024)[\[56\]](#ref-StatBalkans2024)[\[57\]](#ref-StatBaltics2024).

<img src="figures/magnetic_modern_choropleths.png" alt="" width="100%" style="display: block; margin: auto;" />

| Contemporary Module | Area (km²) | 1950 Pop. | 2025 Pop. | Change | HGIS Rows |
|:---|:---|:---|:---|:---|:---|
| **Western and Northern Europe (Ch. 19)** | 2,63M | 214,01M | 302,12M | +41,2% | 7.885 |
| **Southern Europe and Islands (Ch. 20)** | 3,28M | 93,29M | 142,33M | +52,6% | 3.733 |
| **East-Central, Balkans and Baltics (Ch. 21)** | 1,4M | 95,63M | 120,54M | +26% | 6.020 |

Post-1945 macro-regional demographic divergence across the three
contemporary census modules of MAGNETIC.

| Year | Population | Inhab./km² | Demographic Horizon |
|:---|:---|:---|:---|
| **10000BC** | 67,9k | 0,01 | Terminal Palaeolithic refugia and post-glacial recolonisation |
| **6000BC** | 423,4k | 0,06 | Late Mesolithic to Cardial-LBK Neolithic transition |
| **1000BC** | 5,94M | 0,83 | Late Bronze Age to Early Iron Age horizon |
| **1AD** | 30,81M | 4,31 | Early Roman Imperial peak and Free Germanic frontier |
| **500AD** | 22,32M | 3,12 | Migration Period contraction and post-Roman transition |
| **700AD** | 18,6M | 2,6 | Early Mediaeval nadir following Justinianic plague |
| **1000AD** | 26,91M | 3,76 | High Mediaeval agrarian clearance and urban revival |
| **1300AD** | 61,69M | 8,63 | Pre-Black Death mediaeval demographic peak |
| **1400AD** | 45,52M | 6,37 | Post-plague late mediaeval contraction trough |
| **1500AD** | 73,25M | 10,25 | Renaissance recovery and HRE Imperial Circles |
| **1700** | 97,69M | 13,67 | Post-Thirty Years’ War recovery and Atlantic shift |
| **1800** | 153,83M | 21,52 | Napoleonic era and onset of European census statistics |
| **1880** | 277,29M | 38,79 | Industrialisation and sub-administrative HGIS coverage |
| **1910** | 334,91M | 46,85 | Belle Époque peak on eve of First World War |
| **1950** | 406,14M | 56,81 | Post-Second World War reconstruction and border shift |
| **1990** | 527,37M | 73,77 | Late Cold War convergence and entry of Eurostat NUTS-3 |
| **2025** | 561,16M | 78,5 | Contemporary European census and demographic ageing |

Consolidated MAGNETIC macro-regional population totals and mean
densities across 7,15M km² from 10000BC to 2025.

| Historical Jurisdiction | Primary GIS & Statistical Source | Spatial Granularity | Active Epochs |
|:---|:---|:---|:---|
| **Holy Roman Empire (1512-1792)** | HistoGIS OEAW Imperial Circles | 11 Circles | 1500-1800 |
| **German Empire & Prussia (1820-1914)** | HGIS Germany & Galloway Prussia | 36-62 States/RB | 1820-1910 |
| **Austrian Empire & Austria-Hungary (1820-1910)** | HistoGIS OEAW & k.k. Censuses | 16-21 Crownlands | 1820-1910 |
| **France (1801-2020)** | SGF & INSEE Departements | 85-96 Deps | 1800-2020 |
| **Italy (1861-1971)** | DEMOPAST Bologna & ISTAT | 59-94 Provinces | 1871-1970 |
| **Spain & Portugal (1850-1980)** | INE 1833 Prov. & 1835 Distritos | 49-50 Prov. / 18 Dist. | 1850-1980 |
| **United Kingdom & Ireland (1801-1980)** | ONS Historic Counties & CSO CNA13 | 54-80 / 26 Counties | 1800-1980 |
| **Sweden, Switzerland & Netherlands (1750-1980)** | Riksarkivet swehist, BFS & CBS | 20-24 / 22 / 11 | 1750-1980 |
| **Inter-War & Cold War Europe (1920-1980)** | CShapes-Europe 2 & National Censuses | 31-38 States + Sub-Adm. | 1920-1980 |
| **Contemporary Europe (1990-2020)** | Eurostat GISCO NUTS-3 & StatGL | 1.427 NUTS-3 + North Atl. | 1990-2020 |

Primary historical GIS administrative boundary series and census sources
ingested into MAGNETIC pycnophylactic dasymetric scaling.

## Comparative Benchmarking against Global Historical Compendia

Comparing MAGNETIC against established global historical syntheses
highlights where bottom-up regional reconstruction refines continental
totals and sub-regional allocation (Table 6). For the prehistoric and
classical worlds, MAGNETIC’s regional archaeological kriging and
epigraphic surveys yield 30,81M inhabitants in 1AD across Europe
excluding the Polaris core—closely aligned with standard low-to-middle
Roman provincial estimates while capturing the sharp urban gradient
between peninsular Italy, southern Gaul, Baetica and the Danube
provinces versus temperate Germania Magna
[\[1\]](#ref-KleinGoldewijk2017)[\[2\]](#ref-McEvedyJones1978)[\[3\]](#ref-Maddison2001).

During the High Middle Ages and the Black Death (1000AD–1500AD),
MAGNETIC preserves both the steep agrarian expansion to 61,69M in the
gridded benchmark by 1300AD (and 85,66M in upper-bound chapter syntheses
incorporating dense Northern Italian, Flemish, French and English
manorial reconstructions) and the spatial heterogeneity of
fourteenth-century plague mortality documented by palaeoecological
pollen records and hearth registers
[\[20\]](#ref-Broadberry2015)[\[46\]](#ref-Benedictow2004)[\[47\]](#ref-Izdebski2022).

From 1500 through 1910, the principal divergence between MAGNETIC and
global baselines lies not merely in continental totals—which remain
broadly consistent with HYDE 3.2 and Maddison—but in sub-national
spatial fidelity. By anchoring cell-level population strictly to 31.380
period-authentic historical GIS enumerations rather than
backward-projected late twentieth-century administrative weights,
MAGNETIC accurately registers the seventeenth-century devastation of the
Holy Roman Empire’s northern and central corridors, the
eighteenth-century rise of Atlantic port hinterlands, the
nineteenth-century depopulation of post-Famine Ireland and southern
Italian uplands, and the rapid concentration of industrial density
across Lancashire, the Ruhr, Saxony, Upper Silesia, Wallonia and
Lombardy.

| Year | MAGNETIC | Primary Evidentiary Pillar |
|:---|:---|:---|
| **10000BC** | 67,9k | Radiocarbon SPD and national Palaeolithic registers |
| **1000BC** | 5,94M | National Bronze-Iron Age heritage surveys and kriging |
| **1AD** | 30,81M | Roman provincial censuses, poleis surveys and DARE |
| **1000AD** | 26,91M | Carolingian-Ottonian surveys, Domesday precursors and Al-Andalus |
| **1300AD** | 61,69M | Hearth rolls, urban compendia and high mediaeval surveys |
| **1400AD** | 45,52M | Post-Black Death tax rolls, Catasto and Wüstungen records |
| **1500AD** | 73,25M | HRE Imperial Circles, Renaissance fiscal censuses and Buringh |
| **1700** | 97,69M | HRE post-Westphalia circles, parish reconstitutions and Ottoman rolls |
| **1800** | 153,83M | SGF departments, UK 1801 census, Tabellverket and HRE |
| **1900** | 328,55M | HGIS Germany, k.k. Habsburg, INSEE, DEMOPAST, INE and ONS |
| **1950** | 406,14M | Post-war national censuses across 1945 sovereign frontiers |
| **2025** | 561,16M | Eurostat NUTS-3, Urban Audit and national statistical offices |

Benchmark comparison of MAGNETIC gridded population totals and primary
historical evidentiary pillars from 10000BC to 2025.

# Limitations

Three methodological limitations warrant explicit documentation. First,
prehistoric and early mediaeval population totals remain subject to
substantial uncertainty regarding archaeological site visibility,
radiocarbon taphonomic decay and average household multipliers. While
the non-stationary Matérn kriging model narrows local spatial variance
by conditioning on national heritage registers, absolute continental
levels before 500BC still carry $\pm 25\%$ to $\pm 40\%$ confidence
intervals relative to documented classical and mediaeval series.

Second, early modern sub-administrative GIS resolution remains
asymmetric across Europe between 1500 and 1850. While the Holy Roman
Empire (1512–1792), Sweden (1750 onward), France (1801 onward), Britain
(1801 onward) and Ireland (1841 onward) provide genuine sub-national
administrative polygons and enumerations, Ottoman South-Eastern Europe
and pre-1833 Iberia rely on coarser provincial or sovereign territorial
aggregates prior to nineteenth-century cadastral reforms. Where
sub-national boundaries are unavailable in a given epoch, MAGNETIC
deliberately retains authentic contemporary sovereign polygons rather
than injecting anachronistic twentieth-century districts.

Third, comparing chapter-level totals against gridded raster sums
reveals expected boundary-overlap and calibration differences during
transitional centuries (particularly between 1750 and 1850, where rapid
transition from pre-statistical back-projections to full imperial
sub-administrative censuses creates sharper apparent acceleration in the
continuous raster series than in individual regional monographs).
Readers analysing single national territories between 1750 and 1850
should consult the corresponding sub-chapter literature reviews
(Chapters 12 through 17), which tabulate every primary historical census
and parish-reconstitution estimate individually.

# Conclusion

MAGNETIC establishes an integrated, bottom-up historical demographic
reconstruction for Europe excluding the Polaris core, plus Greenland and
the North Atlantic islands, spanning 10000BC to 2025. By uniting 21
specialised regional literature reviews, 57.885 coordinate-anchored
settlement trajectories, 360 archived open-access scholarly studies,
non-stationary Matérn archaeological kriging calibrated for European
rain-fed ecology and 31.380 strictly non-anachronistic historical GIS
sub-administrative enumerations across 37 territorial regimes and 118
Common Era rasters, the project resolves two persistent defects in
global demographic gridding: anachronistic modern borders bleeding
backward into pre-1945 Europe and unrealistic fluvial
over-concentration. All 128 population rasters and 21 chapter gazetteers
are harmonised along the POLARIS and CENTAUR frontiers for direct
integration into pan-Eurasian and global demographic syntheses.

# Appendix

All 21 constituent regional chapters are organised into four thematic
folders under MAGNETIC: Prehistoric and Classical Europe (Chapters 1–5),
Late Antiquity and Mediaeval Europe (Chapters 6–11), Early Modern and
Nineteenth-Century Europe (Chapters 12–17) and Twentieth-Century and
Contemporary Europe (Chapters 18–21). Each chapter folder contains a
paired literature review, settlement gazetteer report, machine-readable
settlement trajectories, source saturation ledger, staged summary cache,
vector regional figures, visual inspection manifest and archival
scholarly PDF library.

# Sources

<div id="refs" class="references csl-bib-body" data-entry-spacing="0">

<div id="ref-KleinGoldewijk2017" class="csl-entry">

<span class="csl-left-margin">1.
</span><span class="csl-right-inline">Klein Goldewijk, Kees, et al.
“<span class="nocase">Anthropogenic land use estimates for the Holocene
— HYDE 3.2</span>.” *Earth System Science Data*, 2017,
<https://doi.org/10.5194/essd-9-927-2017>.</span>

</div>

<div id="ref-McEvedyJones1978" class="csl-entry">

<span class="csl-left-margin">2.
</span><span class="csl-right-inline">McEvedy, Colin, and Richard Jones.
*<span class="nocase">Atlas of World Population History</span>*. Penguin
Books, 1978,
<https://archive.org/details/atlasofworldpopu00mcev>.</span>

</div>

<div id="ref-Maddison2001" class="csl-entry">

<span class="csl-left-margin">3.
</span><span class="csl-right-inline">Maddison, Angus. *The World
Economy: A Millennial Perspective*. OECD Development Centre, 2001,
<https://doi.org/10.1787/9789264189980-en>.</span>

</div>

<div id="ref-LiviBacci2007" class="csl-entry">

<span class="csl-left-margin">4.
</span><span class="csl-right-inline">Livi-Bacci, Massimo.
*<span class="nocase">A Concise History of World Population</span>*.
Blackwell Publishing, 2007,
<https://doi.org/10.1002/9781118294406>.</span>

</div>

<div id="ref-PaciorekSchervish2006" class="csl-entry">

<span class="csl-left-margin">5.
</span><span class="csl-right-inline">Paciorek, Christopher J., and Mark
J. Schervish. “<span class="nocase">Spatial modelling using a new class
of nonstationary covariance functions</span>.” *Environmetrics*, 2006,
<https://doi.org/10.1002/env.785>.</span>

</div>

<div id="ref-Zimmermann2009" class="csl-entry">

<span class="csl-left-margin">6.
</span><span class="csl-right-inline">Zimmermann, Andreas, et al.
“<span class="nocase">Estimations of Population Density for Selected
Periods Between the Neolithic and AD 1800</span>.” *Human Biology*,
2009, <https://doi.org/10.3378/027.081.0313>.</span>

</div>

<div id="ref-Shennan2013" class="csl-entry">

<span class="csl-left-margin">7.
</span><span class="csl-right-inline">Shennan, Stephen, et al.
“<span class="nocase">Regional population collapse followed initial
agriculture booms in mid-Holocene Europe</span>.” *Nature
Communications*, 2013, <https://doi.org/10.1038/ncomms3486>.</span>

</div>

<div id="ref-Timpson2014" class="csl-entry">

<span class="csl-left-margin">8.
</span><span class="csl-right-inline">Timpson, Adrian, et al.
“<span class="nocase">Reconstructing regional population fluctuations in
the European Neolithic using radiocarbon dates</span>.” *Journal of
Archaeological Science*, 2014,
<https://doi.org/10.1016/j.jas.2014.08.011>.</span>

</div>

<div id="ref-Tallavaara2015" class="csl-entry">

<span class="csl-left-margin">9.
</span><span class="csl-right-inline">Tallavaara, Miikka, et al.
“<span class="nocase">Human population dynamics in Europe over the Last
Glacial Maximum</span>.” *Proceedings of the National Academy of
Sciences*, 2015, <https://doi.org/10.1073/pnas.1503784112>.</span>

</div>

<div id="ref-Hansen2006" class="csl-entry">

<span class="csl-left-margin">10.
</span><span class="csl-right-inline">Hansen, Mogens Herman.
*<span class="nocase">The Shotgun Method: The Demography of the Ancient
Greek City-State Culture</span>*. University of Missouri Press, 2006,
<https://press.umsystem.edu/>.</span>

</div>

<div id="ref-Scheidel2007" class="csl-entry">

<span class="csl-left-margin">11.
</span><span class="csl-right-inline">Scheidel, Walter. “Demography.”
*The Cambridge Economic History of the Greco-Roman World*, Cambridge
University Press, 2007,
<https://doi.org/10.1017/CHOL9780521780537.004>.</span>

</div>

<div id="ref-DeLigt2012" class="csl-entry">

<span class="csl-left-margin">12.
</span><span class="csl-right-inline">Ligt, Luuk de.
*<span class="nocase">Peasants, Citizens and Soldiers: Studies in the
Demographic History of Roman Italy 225 BC–AD 100</span>*. Cambridge
University Press, 2012,
<https://doi.org/10.1017/CBO9781139003834>.</span>

</div>

<div id="ref-Hanson2016" class="csl-entry">

<span class="csl-left-margin">13.
</span><span class="csl-right-inline">Hanson, John W.
*<span class="nocase">An Urban Geography of the Roman World, 100 BC to
AD 300</span>*. Archaeopress, 2016,
<https://doi.org/10.2307/j.ctv17db2z0>.</span>

</div>

<div id="ref-Russell1958" class="csl-entry">

<span class="csl-left-margin">14.
</span><span class="csl-right-inline">Russell, Josiah Cox.
“<span class="nocase">Late Ancient and Medieval Population</span>.”
*Transactions of the American Philosophical Society*, 1958,
<https://doi.org/10.2307/1005708>.</span>

</div>

<div id="ref-WrigleySchofield1981" class="csl-entry">

<span class="csl-left-margin">15.
</span><span class="csl-right-inline">Wrigley, E. A., and R. S.
Schofield. *<span class="nocase">The Population History of England,
1541–1871: A Reconstruction</span>*. Cambridge University Press, 1981,
<https://doi.org/10.1017/CBO9780511660344>.</span>

</div>

<div id="ref-DeVries1984" class="csl-entry">

<span class="csl-left-margin">16.
</span><span class="csl-right-inline">Vries, Jan de. *European
Urbanization, 1500–1800*. Harvard University Press, 1984,
<https://doi.org/10.4324/9780203716526>.</span>

</div>

<div id="ref-Bairoch1988" class="csl-entry">

<span class="csl-left-margin">17.
</span><span class="csl-right-inline">Bairoch, Paul, et al.
*<span class="nocase">La population des villes européennes de 800 à
1850</span>*. Librairie Droz, 1988, <https://www.droz.org/>.</span>

</div>

<div id="ref-Dupaquier1988" class="csl-entry">

<span class="csl-left-margin">18.
</span><span class="csl-right-inline">Dupâquier, Jacques.
*<span class="nocase">Histoire de la population française</span>*.
Presses Universitaires de France, 1988,
<https://doi.org/10.3917/puf.dupaq.1988.01>.</span>

</div>

<div id="ref-Malanima1998" class="csl-entry">

<span class="csl-left-margin">19.
</span><span class="csl-right-inline">Malanima, Paolo. “Italian Cities
1300–1800: A Quantitative Approach.” *Rivista Di Storia Economica*,
1998, <https://doi.org/10.1410/9797>.</span>

</div>

<div id="ref-Broadberry2015" class="csl-entry">

<span class="csl-left-margin">20.
</span><span class="csl-right-inline">Broadberry, Stephen, et al.
*British Economic Growth, 1270–1870*. Cambridge University Press, 2015,
<https://doi.org/10.1017/CBO9781107707603>.</span>

</div>

<div id="ref-Buringh2021" class="csl-entry">

<span class="csl-left-margin">21.
</span><span class="csl-right-inline">Buringh, Eltjo.
“<span class="nocase">The Population of European Cities from 700 to
2000: Social and Economic History</span>.” IISH Data Collection, 2021,
<https://doi.org/10.1163/24523666-06010001>.</span>

</div>

<div id="ref-Gille1949" class="csl-entry">

<span class="csl-left-margin">22.
</span><span class="csl-right-inline">Gille, Halvor.
“<span class="nocase">The Demographic History of the Northern European
Countries in the Eighteenth Century</span>.” *Population Studies*, 1949,
<https://doi.org/10.1080/00324728.1949.10416356>.</span>

</div>

<div id="ref-CoaleWatkins1986" class="csl-entry">

<span class="csl-left-margin">23.
</span><span class="csl-right-inline">Coale, Ansley J., and Susan Cotts
Watkins. *<span class="nocase">The Decline of Fertility in
Europe</span>*. Princeton University Press, 1986,
<https://doi.org/10.1515/9781400886692>.</span>

</div>

<div id="ref-Mitchell2007" class="csl-entry">

<span class="csl-left-margin">24.
</span><span class="csl-right-inline">Mitchell, B. R. *International
Historical Statistics: Europe, 1750–2005*. Palgrave Macmillan, 2007,
<https://doi.org/10.1057/9780230279322>.</span>

</div>

<div id="ref-PfisterFertig2010" class="csl-entry">

<span class="csl-left-margin">25.
</span><span class="csl-right-inline">Pfister, Ulrich, and Georg Fertig.
“<span class="nocase">The Population History of Germany: Research
Strategy and Preliminary Results</span>.” *MPIDR Working Paper*, 2010,
<https://doi.org/10.4054/MPIDR-WP-2010-035>.</span>

</div>

<div id="ref-RosesWolf2019" class="csl-entry">

<span class="csl-left-margin">26.
</span><span class="csl-right-inline">Rosés, Joan R., and Nikolaus Wolf.
*<span class="nocase">The Economic Development of Europe’s Regions: A
Quantitative History Since 1900</span>*. Routledge, 2019,
<https://doi.org/10.4324/9780429449789>.</span>

</div>

<div id="ref-HistoGIS2022" class="csl-entry">

<span class="csl-left-margin">27.
</span><span class="csl-right-inline">Wissenschaften (ACDH-CH),
Österreichische Akademie der. “<span class="nocase">HistoGIS: Historical
Administrative Boundaries of Central Europe</span>.” Austrian Academy of
Sciences, 2022, <https://histogis.acdh.oeaw.ac.at/>.</span>

</div>

<div id="ref-Riksarkivet2023" class="csl-entry">

<span class="csl-left-margin">28.
</span><span class="csl-right-inline">Riksarkivet, and Statistiska
centralbyrån (SCB). “<span class="nocase">Historical Administrative
Boundaries of Sweden and Tabellverket/SCB County Enumerations
1749–2023</span>.” Swedish National Archives, 2023,
<https://riksarkivet.se/>.</span>

</div>

<div id="ref-INSEE2024" class="csl-entry">

<span class="csl-left-margin">29.
</span><span class="csl-right-inline">(INSEE), Institut national de la
statistique et des études économiques. “<span class="nocase">Séries
historiques des résultats du recensement de la population
1876–2023</span>.” INSEE, 2024,
<https://www.insee.fr/fr/statistiques/3698339>.</span>

</div>

<div id="ref-CSOIreland2023" class="csl-entry">

<span class="csl-left-margin">30.
</span><span class="csl-right-inline">Ireland, Central Statistics
Office. “<span class="nocase">CNA13: Population at Each Census by
Province and County 1841–2022</span>.” CSO Ireland, 2023,
<https://data.cso.ie/>.</span>

</div>

<div id="ref-ONS2024" class="csl-entry">

<span class="csl-left-margin">31.
</span><span class="csl-right-inline">National Statistics (ONS), Office
for, and National Records of Scotland. “<span class="nocase">Historic
Censuses of England, Wales, Scotland and Northern Ireland
1801–2021</span>.” ONS United Kingdom, 2024,
<https://www.ons.gov.uk/>.</span>

</div>

<div id="ref-HGISGermany2014" class="csl-entry">

<span class="csl-left-margin">32.
</span><span class="csl-right-inline">Kunz, Andreas, and Alexander Zipf.
“<span class="nocase">HGIS Germany: Historical GIS of the German States
1820–1914</span>.” Leibniz-Institut für Europäische Geschichte Mainz,
2014, <https://www.hgisg-germany.de/>.</span>

</div>

<div id="ref-DEMOPAST2023" class="csl-entry">

<span class="csl-left-margin">33.
</span><span class="csl-right-inline">Bologna — Dipartimento di Scienze
Statistiche, Università di. “<span class="nocase">DEMOPAST: Historical
Demographic Atlas of Italian Provinces and Cities 1861–1971</span>.”
University of Bologna / ISTAT, 2023,
<https://demopast.unibo.it/>.</span>

</div>

<div id="ref-INE2024" class="csl-entry">

<span class="csl-left-margin">34.
</span><span class="csl-right-inline">Estadística (INE), Instituto
Nacional de. “<span class="nocase">Alteraciones de los municipios en los
Censos de Población desde 1842</span>.” INE Spain, 2024,
<https://www.ine.es/intercensal/>.</span>

</div>

<div id="ref-BFS2024" class="csl-entry">

<span class="csl-left-margin">35.
</span><span class="csl-right-inline">(BFS), Federal Statistical Office
Switzerland, and Statistics Netherlands (CBS).
“<span class="nocase">Historical Cantonal and Provincial Population
Series 1850–2024</span>.” BFS / CBS, 2024,
<https://www.bfs.admin.ch/>.</span>

</div>

<div id="ref-Eurostat2024" class="csl-entry">

<span class="csl-left-margin">36.
</span><span class="csl-right-inline">Commission), Eurostat (European.
“<span class="nocase">Population on 1 January by NUTS 3 Region (demo r
pjanaggr3) and Urban Audit Cities (urb cpop1)</span>.” Publications
Office of the European Union, 2024,
<https://ec.europa.eu/eurostat/>.</span>

</div>

<div id="ref-BocquetAppel2005" class="csl-entry">

<span class="csl-left-margin">37.
</span><span class="csl-right-inline">Bocquet-Appel, Jean-Pierre, et al.
“<span class="nocase">Estimates of Upper Palaeolithic meta-population
size in Europe from archaeological data</span>.” *Journal of
Archaeological Science*, 2005,
<https://doi.org/10.1016/j.jas.2005.05.006>.</span>

</div>

<div id="ref-Pinhasi2005" class="csl-entry">

<span class="csl-left-margin">38.
</span><span class="csl-right-inline">Pinhasi, Ron, et al.
“<span class="nocase">Tracing the Origin and Spread of Agriculture in
Europe</span>.” *PLOS Biology*, 2005,
<https://doi.org/10.1371/journal.pbio.0030410>.</span>

</div>

<div id="ref-Haak2015" class="csl-entry">

<span class="csl-left-margin">39.
</span><span class="csl-right-inline">Haak, Wolfgang, et al.
“<span class="nocase">Massive migration from the steppe was a source for
Indo-European languages in Europe</span>.” *Nature*, 2015,
<https://doi.org/10.1038/nature14317>.</span>

</div>

<div id="ref-Olalde2018" class="csl-entry">

<span class="csl-left-margin">40.
</span><span class="csl-right-inline">Olalde, Iñigo, et al.
“<span class="nocase">The Beaker phenomenon and the genomic
transformation of northwest Europe</span>.” *Nature*, 2018,
<https://doi.org/10.1038/nature25738>.</span>

</div>

<div id="ref-BowmanWilson2011" class="csl-entry">

<span class="csl-left-margin">41.
</span><span class="csl-right-inline">Bowman, Alan, and Andrew Wilson.
*<span class="nocase">Settlement, Urbanization, and Population</span>*.
Oxford University Press, 2011,
<https://doi.org/10.1093/acprof:oso/9780199602353.001.0001>.</span>

</div>

<div id="ref-Harper2017" class="csl-entry">

<span class="csl-left-margin">42.
</span><span class="csl-right-inline">Harper, Kyle.
*<span class="nocase">The Fate of Rome: Climate, Disease, and the End of
an Empire</span>*. Princeton University Press, 2017,
<https://doi.org/10.2307/j.ctv9b2txr>.</span>

</div>

<div id="ref-Campbell2016" class="csl-entry">

<span class="csl-left-margin">43.
</span><span class="csl-right-inline">Campbell, Bruce M. S.
*<span class="nocase">The Great Transition: Climate, Disease and Society
in the Late-Medieval World</span>*. Cambridge University Press, 2016,
<https://doi.org/10.1017/CBO9781139031110>.</span>

</div>

<div id="ref-Guzowski2013" class="csl-entry">

<span class="csl-left-margin">44.
</span><span class="csl-right-inline">Guzowski, Piotr.
“<span class="nocase">Village Court Records and Peasant Credit in
Fifteenth- and Sixteenth-Century Poland</span>.” *Continuity and
Change*, 2013, <https://doi.org/10.1017/S0268416013000106>.</span>

</div>

<div id="ref-Dugmore2012" class="csl-entry">

<span class="csl-left-margin">45.
</span><span class="csl-right-inline">Dugmore, Andrew J., et al.
“<span class="nocase">Cultural adaptation, compounding vulnerabilities
and conjunctures in Norse Greenland</span>.” *Proceedings of the
National Academy of Sciences*, 2012,
<https://doi.org/10.1073/pnas.1115292109>.</span>

</div>

<div id="ref-Benedictow2004" class="csl-entry">

<span class="csl-left-margin">46.
</span><span class="csl-right-inline">Benedictow, Ole J. *The Black
Death 1346–1353: The Complete History*. Boydell Press, 2004,
<https://doi.org/10.1017/9781787449312>.</span>

</div>

<div id="ref-Izdebski2022" class="csl-entry">

<span class="csl-left-margin">47.
</span><span class="csl-right-inline">Izdebski, Adam, et al.
“<span class="nocase">Palaeoecological data indicates land-use changes
across Europe linked to spatial heterogeneity in mortality during the
Black Death pandemic</span>.” *Nature Ecology & Evolution*, 2022,
<https://doi.org/10.1038/s41559-021-01652-4>.</span>

</div>

<div id="ref-Todorov1983" class="csl-entry">

<span class="csl-left-margin">48.
</span><span class="csl-right-inline">Todorov, Nikolai. *The Balkan
City, 1400–1900*. University of Washington Press, 1983,
<https://uwapress.uw.edu/>.</span>

</div>

<div id="ref-Palairet1997" class="csl-entry">

<span class="csl-left-margin">49.
</span><span class="csl-right-inline">Palairet, Michael.
*<span class="nocase">The Balkan Economies c. 1800–1914: Evolution
without Development</span>*. Cambridge University Press, 1997,
<https://doi.org/10.1017/CBO9780511582141>.</span>

</div>

<div id="ref-Alfani2013" class="csl-entry">

<span class="csl-left-margin">50.
</span><span class="csl-right-inline">Alfani, Guido.
“<span class="nocase">Plague in seventeenth-century Europe and the
decline of Italy: an epidemiological hypothesis</span>.” *European
Review of Economic History*, 2013,
<https://doi.org/10.1093/ereh/het013>.</span>

</div>

<div id="ref-Reher1990" class="csl-entry">

<span class="csl-left-margin">51.
</span><span class="csl-right-inline">Reher, David Sven.
*<span class="nocase">Town and Country in Pre-Industrial Spain: Cuenca,
1550–1870</span>*. Cambridge University Press, 1990,
<https://doi.org/10.1017/CBO9780511523458>.</span>

</div>

<div id="ref-StatGL2024" class="csl-entry">

<span class="csl-left-margin">52.
</span><span class="csl-right-inline">(Naatsorsueqqissaartarfik),
Statistics Greenland. “<span class="nocase">Population in Greenland
Districts and Settlements 1901–2024</span>.” Statistics Greenland, 2024,
<https://bank.stat.gl/>.</span>

</div>

<div id="ref-Hagstofa2024" class="csl-entry">

<span class="csl-left-margin">53.
</span><span class="csl-right-inline">Íslands), Statistics Iceland
(Hagstofa. “<span class="nocase">Historical Population Series of Iceland
1703–2024</span>.” Statistics Iceland, 2024,
<https://px.hagstofa.is/>.</span>

</div>

<div id="ref-GUSPoland2024" class="csl-entry">

<span class="csl-left-margin">54.
</span><span class="csl-right-inline">Urząd Statystyczny), Statistics
Poland (Główny. “<span class="nocase">National Censuses and Voivodeship
Population Series 1921–2024</span>.” GUS Poland, 2024,
<https://stat.gov.pl/>.</span>

</div>

<div id="ref-KSHHungary2024" class="csl-entry">

<span class="csl-left-margin">55.
</span><span class="csl-right-inline">(KSH), Hungarian Central
Statistical Office. “<span class="nocase">Historical Census Series of
Hungary 1870–2022</span>.” KSH Budapest, 2024,
<https://www.ksh.hu/>.</span>

</div>

<div id="ref-StatBalkans2024" class="csl-entry">

<span class="csl-left-margin">56.
</span><span class="csl-right-inline">Statistical Office of the Republic
of Serbia, NSI Bulgaria, INS Romania, and ELSTAT Greece.
“<span class="nocase">Post-War Population and Housing Censuses of
South-Eastern Europe 1948–2023</span>.” National Statistical Institutes
of South-Eastern Europe, 2024, <https://insse.ro/>.</span>

</div>

<div id="ref-StatBaltics2024" class="csl-entry">

<span class="csl-left-margin">57.
</span><span class="csl-right-inline">Statistics Estonia, Central
Statistical Bureau of Latvia, and State Data Agency of Lithuania.
“<span class="nocase">Population Censuses of the Baltic States
1922–2024</span>.” Baltic National Statistical Offices, 2024,
<https://andmed.stat.ee/>.</span>

</div>

</div>
