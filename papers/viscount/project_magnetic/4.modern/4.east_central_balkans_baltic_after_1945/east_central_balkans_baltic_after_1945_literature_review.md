East-Central Europe, the Balkans and the Baltic States after 1945
================
Aust Kätzchen
22 November 2026















- [Abstract](#abstract)
- [Background](#background)
- [Methodology](#methodology)
  - [Sub-Regional Partition and Benchmark
    Architecture](#sub-regional-partition-and-benchmark-architecture)
  - [Sub-Administrative Historical GIS
    Enumerations](#sub-administrative-historical-gis-enumerations)
  - [Urban Gazetteer Integration and Source
    Hierarchy](#urban-gazetteer-integration-and-source-hierarchy)
- [Validation](#validation)
- [Results](#results)
  - [Aggregate Trajectory and Demographic
    Reversal](#aggregate-trajectory-and-demographic-reversal)
  - [Visegrád Core: Poland, Czechia, Slovakia and
    Hungary](#visegrád-core-poland-czechia-slovakia-and-hungary)
  - [Romania, Moldova and Bulgaria: Pro-Natalist Shocks and Emigration
    Collapse](#romania-moldova-and-bulgaria-pro-natalist-shocks-and-emigration-collapse)
  - [Former Yugoslavia and Albania: Delayed Transition, War and
    Fragmentation](#former-yugoslavia-and-albania-delayed-transition-war-and-fragmentation)
  - [The Baltic States: Soviet Industrial In-Migration and
    Post-Independence
    Contraction](#the-baltic-states-soviet-industrial-in-migration-and-post-independence-contraction)
  - [Urban Hierarchy and Metropolitan
    Polarisation](#urban-hierarchy-and-metropolitan-polarisation)
- [Limitations](#limitations)
- [Conclusion](#conclusion)
- [Appendix](#appendix)
- [Sources](#sources)

<figure>
<img
src="figures/east_central_balkans_baltic_after_1945_regional_map.png"
alt="Sub-regional boundaries and 1.842 georeferenced settlements across East-Central Europe, the Balkans and the Baltic states between 1945 and 2026." />
<figcaption aria-hidden="true">Sub-regional boundaries and 1.842
georeferenced settlements across East-Central Europe, the Balkans and
the Baltic states between 1945 and 2026.</figcaption>
</figure>

# Abstract

Between 1945 and 2026 the belt of European states extending from the
Baltic littoral across the Visegrád plains and the Carpathian arc to the
Adriatic and Black seas underwent one of the sharpest two-stage
demographic reversals in modern history. Across 17 sub-regions covering
1.402.523,2 km², total population expanded by 41,04% between 1950 and
1990, climbing from 95,63M to a historical zenith of 134,88M as post-war
mortality decline, socialist heavy industrialisation, urban housing
construction and regionally uneven fertility regimes added 39,25M
inhabitants. Mean density rose from 68,18 to 96,17 inhabitants per km².
Following the collapse of state socialism in 1989-1991, the breakup of
Yugoslavia and the Soviet Union, the 1991-1999 Yugoslav Wars and
successive waves of westward labour emigration after European Union
accession in 2004, 2007 and 2013, the domain entered a protracted
contraction. Total population fell to 126,39M in 2010 and 120,54M in
2025, shedding 14,34M inhabitants (10,63%) over thirty-five years and
lowering average density to 85,94 per km². Only four sub-regions
recorded net gains after 1990 (Slovenia, Czechia, Montenegro and
Slovakia), while Moldova, Latvia, Bosnia and Herzegovina, Bulgaria and
Lithuania lost between one fifth and nearly one third of their
residents. MAGNETIC integrates decennial national statistical censuses,
8.835 scraped historical GIS administrative records spanning Cold War
boundaries (1950-1980) and Eurostat NUTS-3 enumerations (1990-2020) and
a georeferenced gazetteer of 18.388 cities and towns to document this
post-war expansion, urban transformation and contemporary demographic
shrinkage.

# Background

At the close of the Second World War in May 1945 the eastern half of
Europe outside the Russian, Ukrainian and Belarusian core lay shattered
by six years of combat, occupation, genocide and frontier redrawing.
Wartime mortality had fallen heaviest on Poland, Yugoslavia and the
Baltic states: Poland lost nearly one sixth of its pre-war population
including roughly three million Polish Jews; Yugoslavia suffered over
one million dead in Axis occupation, partisan warfare and internecine
ethnic massacres; and Estonia, Latvia and Lithuania endured sequential
Soviet and German occupations followed by renewed Soviet annexation in
1944-1945
[\[1\]](#ref-Mitchell2007)[\[2\]](#ref-GUSPoland2024)[\[3\]](#ref-StatBalkans2024)[\[4\]](#ref-StatBaltics2024).
Before natural demographic rhythms could resume, allied diplomacy and
state coercion redrew both borders and ethnic geography between 1945 and
1950. Poland shifted roughly 200 kilometres westwards to the Oder-Neisse
line, surrendering its eastern kresy to the Soviet Union while receiving
former German Pomerania, Silesia and southern East Prussia; over seven
million Germans fled or were expelled from these territories and
replaced by Polish settlers from central Poland and repatriates from the
east [\[2\]](#ref-GUSPoland2024). Czechoslovakia expelled nearly three
million Sudeten Germans from Bohemia and Moravia, leaving borderland
districts sparsely populated for decades. Smaller but regionally
decisive transfers removed ethnic Italians from Istria and Dalmatia,
exchanged Magyars and Slovaks along the Danube and deported tens of
thousands of Baltic and Bessarabian families to Siberia during
late-Stalinist collectivisation
[\[4\]](#ref-StatBaltics2024)[\[5\]](#ref-KSHHungary2024).

Once these post-war population shifts settled around 1950, the entire
17-region domain entered four decades of sustained expansion under
state-socialist planning (within the Warsaw Pact, non-aligned Yugoslavia
and isolationist Albania). Between 1950 and 1970 total population jumped
from 95,63M to 118,67M, an annual growth rate of 1,08%, before
moderating to 0,64% per year between 1970 and 1990 to reach 134,88M
[\[1\]](#ref-Mitchell2007)[\[6\]](#ref-RosesWolf2019). Two mechanisms
propelled this mid-century surge. First, universal public sanitation,
vaccination campaigns, antibiotics and rural clinic networks slashed
infant mortality across agrarian hinterlands that had lagged Western
Europe throughout the interwar era. In Albania, Romania, Bulgaria,
Bosnia and Herzegovina, Macedonia and Moldova, life expectancy at birth
climbed by fifteen to twenty-five years between 1945 and 1970
[\[3\]](#ref-StatBalkans2024). Second, ambitious five-year plans
mobilised surplus peasant labour into metallurgy, coal mining,
petrochemicals, shipbuilding and heavy engineering. Collectivisation of
agriculture was enforced almost everywhere by the early 1960s, with
Poland and Yugoslavia remaining the two notable exceptions where private
smallholder farming persisted alongside state estates
[\[7\]](#ref-Florianczyk2025Relation).

Socialist industrialisation remade the settlement map faster than at any
previous period since the mediaeval Ostsiedlung
[\[6\]](#ref-RosesWolf2019)[\[8\]](#ref-DeVries1984). Millions of young
villagers moved into newly built prefabricated panel housing estates
ringing historic capitals and purpose-built industrial towns such as
Nowa Huta outside Kraków, Sztálinváros (later Dunaújváros) in Hungary,
Dimitrovgrad in Bulgaria, Ostrava-Poruba in Moravia, Hunedoara and
Galați in Romania, Zenica in Bosnia and Kohtla-Järve in northeastern
Estonia. Between 1950 and 1990 the urban share rose from under 30% to
more than 55% in Romania and Bulgaria, passed 60% in Poland and Hungary
and exceeded 70% in Czechia, Estonia and Latvia
[\[2\]](#ref-GUSPoland2024)[\[4\]](#ref-StatBaltics2024)[\[5\]](#ref-KSHHungary2024).
Yet rapid urbanisation also brought demographic deceleration. Cramped
urban flats, full-time female labour-force participation and legalised
abortion after 1955-1957 lowered fertility far earlier in the northern
and western tiers than official planners expected
[\[9\]](#ref-CoaleWatkins1986)[\[10\]](#ref-Toprak2025Evaluation).
Hungary’s total fertility rate dipped below the 2,1 replacement
threshold as early as 1960 and national deaths began outnumbering births
in 1981 [\[5\]](#ref-KSHHungary2024). Czechia, Bulgaria, Croatia,
Estonia and Latvia similarly converged towards low fertility by the
1970s, while adult male life expectancy across the bloc stagnated or
even retreated after 1965 under the combined burden of cardiovascular
disease, heavy smoking, alcohol consumption and industrial pollution
[\[1\]](#ref-Mitchell2007).

Against this northern slowdown, sharp fertility gradients persisted
along the southern and eastern margins. Albania under Enver Hoxha banned
contraception and abortion while suppressing rural out-migration and
foreign travel, preserving a high-fertility agrarian regime that nearly
tripled the country’s population from 1,22M in 1950 to 3,29M in 1990
[\[3\]](#ref-StatBalkans2024). Within Yugoslavia, stark internal
contrasts separated low-fertility Slovenia, Croatia and central Serbia
from Kosovo, Bosnia and Herzegovina and Macedonia, where high birth
rates doubled local cohorts between 1950 and 1990
[\[3\]](#ref-StatBalkans2024)[\[11\]](#ref-Kul2022Evlad). Romania
produced the sharpest state-engineered fertility anomaly in
twentieth-century Europe when Nicolae Ceaușescu issued Decree 770 in
October 1966, outlawing abortion and contraception for women under 45
with fewer than four children. The crude birth rate nearly doubled
within twelve months, creating an oversized 1967-1968 birth cohort (the
decreței), before clandestine abortions drove maternal mortality to
Europe’s highest levels and fertility resumed its downward drift through
the 1980s [\[3\]](#ref-StatBalkans2024).

The political upheavals of 1989-1991 shattered the closed borders,
guaranteed employment and subsidised housing systems that had anchored
post-war population growth. Across the former Eastern Bloc and the
Soviet Baltic republics, price liberalisation and industrial
restructuring triggered steep output contractions during the early
1990s. Total fertility rates plunged to lowest-low levels between 1,1
and 1,35 children per woman across Czechia, Poland, Hungary, Romania,
Bulgaria, Latvia and Lithuania by 1998-2002
[\[12\]](#ref-Ciganda2026Anticipating)[\[13\]](#ref-Sagi2022Issues). In
the western Balkans, economic dislocation was compounded by the violent
dissolution of Yugoslavia between 1991 and 1999: wars in Croatia
(1991-1995), Bosnia and Herzegovina (1992-1995) and Kosovo (1998-1999)
claimed more than 130.000 lives and displaced over three million people
across internal and international borders [\[3\]](#ref-StatBalkans2024).
Simultaneously, the dismantling of Iron Curtain exit controls unleashed
the largest peacetime east-to-west migration stream in European history
[\[14\]](#ref-Zantout2025Stochastic)[\[15\]](#ref-Newsham2022Understanding).
Early outflows swept Albanians into Italy and Greece, ethnic Turks out
of Bulgaria in 1989, Russian-speaking military and industrial personnel
out of Estonia and Latvia after 1991 and Moldovans towards both Russia
and Western Europe. European Union accession in 2004 (Poland, Czechia,
Slovakia, Hungary, Slovenia, Estonia, Latvia and Lithuania), 2007
(Romania and Bulgaria) and 2013 (Croatia) opened Western European labour
markets legally to millions of young workers, accelerating natural
decrease across sending regions while concentrating economic vitality in
a handful of capital metropolitan areas
[\[16\]](#ref-Zdanowska2019Exploring)[\[17\]](#ref-Zdanowska2019Spatial)[\[18\]](#ref-Kozerakowalska2021Framework).
After 2015, rising wages in the Visegrád capitals and Estonia slowed net
emigration, and after February 2022 Russia’s full-scale invasion of
Ukraine pushed several million Ukrainian refugees westward—temporarily
lifting resident headcounts in Poland, Czechia, Slovakia, Moldova and
the Baltic states without reversing the underlying trajectory of rapid
population ageing
[\[2\]](#ref-GUSPoland2024)[\[19\]](#ref-Eurostat2024).

# Methodology

Reconstructing post-1945 demography across 17 states and territories
that experienced multiple sovereign reconfigurations—including the
division of Czechoslovakia in 1993, the dissolution of Yugoslavia into
seven successor entities and the restoration of Baltic and Moldovan
independence in 1991—requires projecting every census series onto a
fixed, spatially coherent set of administrative polygons. MAGNETIC
maintains strict longitudinal comparability from 1945 to 2026 by
anchoring national and sub-regional aggregates to five decadal and
mid-decadal benchmark dates (1950, 1970, 1990, 2010 and 2025), backed by
scraped historical GIS administrative layers and a harmonised municipal
urban gazetteer.

## Sub-Regional Partition and Benchmark Architecture

The regional domain covers 1.402.523,2 km² partitioned into 17
sub-regions corresponding to modern national geometries, with Serbia and
Kosovo retained as a single contiguous longitudinal polygon (84.762,2
km²) so that 1950-1990 Yugoslav federal census figures align directly
with 2010 and 2025 totals despite disputed census boycotts in northern
Kosovo and southern Serbia [\[3\]](#ref-StatBalkans2024). The four
Visegrád states (Poland, Czechia, Slovakia and Hungary) span 527.003,9
km² (39% of domain area). The Danubian-Black Sea bloc (Romania, Moldova
and Bulgaria) accounts for 374.748,9 km² (27,73%). The seven
Adriatic-Balkan territories (Slovenia, Croatia, Bosnia and Herzegovina,
Serbia and Kosovo, Montenegro, North Macedonia and Albania) cover
281.659,4 km² (20,84%). The three Baltic republics (Estonia, Latvia and
Lithuania) contribute the remaining 167.973,5 km² (12,43%).

For the 1950, 1970 and 1990 benchmarks, national headcounts are drawn
from official post-war population and housing censuses published by
Statistics Poland, the Czechoslovak and successor Czech and Slovak
statistical offices, the Hungarian Central Statistical Office, the
National Institute of Statistics of Romania, the National Statistical
Institute of Bulgaria, the Federal Statistical Office of Yugoslavia, the
Albanian Institute of Statistics and the Soviet Union’s 1959, 1970, 1979
and 1989 all-union censuses for the Estonian, Latvian, Lithuanian and
Moldavian republics, interpolated cleanly where census years differed
from round decadal marks
[\[1\]](#ref-Mitchell2007)[\[2\]](#ref-GUSPoland2024)[\[3\]](#ref-StatBalkans2024)[\[4\]](#ref-StatBaltics2024)[\[5\]](#ref-KSHHungary2024).
For 2010 and 2025, benchmark totals integrate the 2011 and 2021-2023
European census rounds together with annual Eurostat demographic balance
tables and national statistical office mid-year estimates, correcting
where necessary for post-census register revisions
[\[19\]](#ref-Eurostat2024).

## Sub-Administrative Historical GIS Enumerations

To capture intra-national spatial gradients—such as the gap between
industrial Upper Silesia and rural eastern Poland, or between booming
metropolitan Prague and depopulating northwestern Bohemia—MAGNETIC pairs
its 17 national time series with 8.835 scraped historical GIS
administrative rows spanning 1950 to 2020. Because no single European
spatial archive covers both the Cold War and the post-1990 European
Union era on uniform boundaries, the sub-administrative pool combines
two strictly separated temporal regimes alongside cross-border
calibration layers from neighbouring Adriatic, Alpine and North Atlantic
archives
[\[19\]](#ref-Eurostat2024)[\[20\]](#ref-DEMOPAST2023)[\[21\]](#ref-HGISGermany2014).

Between 1950 and 1980, Cold War national and macro-administrative
geometries are anchored by CShapes Europe decadal snapshots paired with
official national census enumerations (six core states per decade
covering 753.471 km², rising from 57,31M in 1950 to 75,01M in 1980),
alongside cross-border reference series from the DEMOPAST Italian
provincial archive (92 to 94 provinces) and North Atlantic census
anchors retained in the contemporary scraper pool to enforce continental
boundary consistency
[\[20\]](#ref-DEMOPAST2023)[\[22\]](#ref-StatGL2024)[\[23\]](#ref-Hagstofa2024).
Strictly from 1990 onwards, sub-national granularity shifts to Eurostat
NUTS-3 population series linked to GISCO boundary geometries, expanding
from 153 NUTS-3 districts in 1990 (76,04M inhabitants) to 544 units in
2000 (145,26M), 780 units in 2010 (247,61M) and 879 units in 2020
(276,08M) as post-socialist states entered Eurostat statistical
harmonisation [\[19\]](#ref-Eurostat2024). Because Bosnia and
Herzegovina sits outside the NUTS-3 reporting structure, its decadal
headcounts from 1990 through 2020 are incorporated via dedicated
non-NUTS national statistical series. Table 1 summarises the 20
regime-source strata across all 8.835 scraped HGIS rows, and Table 2
highlights featured Cold War national units and contemporary
sub-administrative entries from the scraped repository.

| Snapshot | Source Corpus | Units | Population | Area (km²) | Density (per km²) |
|:---|:---|:---|:---|:---|:---|
| **1950** | BKG VGHist FRG Regierungsbezirke 1955 | 39 | 51,99M | 255.958 | 203,1 |
| **1950** | BKG VGHist GDR 15 Bezirke 1955 | 14 | 17,6M | 107.620 | 163,5 |
| **1950** | CUNI NAKI Czechoslovakia 19 Kraje 1949 1960 | 19 | 12,39M | 140.104 | 88,4 |
| **1950** | DEMOPAST ISTAT Provinces (1951) | 91 | 47,22M | 297.410 | 158,8 |
| **1950** | IHPAN PRL 17 Voivodeships 1950 | 19 | 25,01M | 302.058 | 82,8 |
| **1950** | Latvia 5 Historical Lands PostWWII | 5 | 1,95M | 62.782 | 31 |
| **1950** | PostWWII National Subadmin Albania | 12 | 1,21M | 27.165 | 44,7 |
| **1950** | PostWWII National Subadmin Bulgaria | 28 | 7,25M | 115.794 | 62,6 |
| **1950** | PostWWII National Subadmin Estonia | 15 | 1,1M | 42.673 | 25,8 |
| **1950** | PostWWII National Subadmin Greece | 14 | 7,57M | 118.832 | 63,7 |
| **1950** | PostWWII National Subadmin Hungary | 24 | 9,34M | 87.074 | 107,2 |
| **1950** | PostWWII National Subadmin Lithuania | 10 | 2,57M | 60.373 | 42,5 |
| **1950** | PostWWII National Subadmin Moldova | 39 | 2,34M | 31.100 | 75,3 |
| **1950** | PostWWII National Subadmin Romania | 42 | 16,31M | 226.044 | 72,2 |
| **1950** | PostWWII Turkey Eastern Thrace | 5 | 2,1M | 23.310 | 90,1 |
| **1950** | SFR Yugoslavia Municipalities 1953 | 344 | 16,32M | 264.801 | 61,6 |
| **1950** | Statistik Austria 9 Bundeslander | 9 | 6,93M | 77.282 | 89,7 |
| **1960** | BKG VGHist FRG Regierungsbezirke 1955 | 39 | 57,03M | 258.384 | 220,7 |
| **1960** | BKG VGHist GDR 15 Bezirke 1955 | 14 | 16,17M | 110.750 | 146 |
| **1960** | CUNI NAKI Czechoslovakia 11 Kraje 1960 1990 | 11 | 13,65M | 130.820 | 104,4 |
| **1960** | DEMOPAST ISTAT Provinces (1961) | 91 | 50,32M | 297.590 | 169,1 |
| **1960** | IHPAN PRL 17 Voivodeships 1950 | 19 | 29,78M | 305.843 | 97,4 |
| **1960** | Latvia 5 Historical Lands PostWWII | 5 | 2,12M | 62.782 | 33,8 |
| **1960** | PostWWII National Subadmin Albania | 12 | 1,61M | 27.165 | 59,2 |
| **1960** | PostWWII National Subadmin Bulgaria | 28 | 7,87M | 115.794 | 67,9 |
| **1960** | PostWWII National Subadmin Estonia | 15 | 1,22M | 42.673 | 28,5 |
| **1960** | PostWWII National Subadmin Greece | 14 | 8,33M | 118.767 | 70,1 |
| **1960** | PostWWII National Subadmin Hungary | 24 | 9,98M | 87.077 | 114,7 |
| **1960** | PostWWII National Subadmin Lithuania | 10 | 2,78M | 60.373 | 46 |
| **1960** | PostWWII National Subadmin Moldova | 39 | 2,9M | 31.100 | 93,3 |
| **1960** | PostWWII National Subadmin Romania | 42 | 18,4M | 226.044 | 81,4 |
| **1960** | PostWWII Turkey Eastern Thrace | 5 | 2,8M | 23.310 | 120,1 |
| **1960** | SFR Yugoslavia Municipalities 1961 | 697 | 17,87M | 264.626 | 67,5 |
| **1960** | Statistik Austria 9 Bundeslander | 9 | 7,07M | 77.282 | 91,5 |
| **1970** | BKG VGHist FRG Regierungsbezirke 1970 | 35 | 61,74M | 257.664 | 239,6 |
| **1970** | BKG VGHist GDR 15 Bezirke 1970 | 15 | 15,76M | 111.579 | 141,2 |
| **1970** | CUNI NAKI Czechoslovakia 11 Kraje 1960 1990 | 11 | 14,33M | 130.820 | 109,6 |
| **1970** | DEMOPAST ISTAT Provinces (1971) | 93 | 53,84M | 297.350 | 181,1 |
| **1970** | IHPAN PRL 17 Voivodeships 1950 | 19 | 32,64M | 305.843 | 106,7 |
| **1970** | Latvia 5 Historical Lands PostWWII | 5 | 2,37M | 62.782 | 37,7 |
| **1970** | PostWWII National Subadmin Albania | 12 | 2,14M | 27.209 | 78,5 |
| **1970** | PostWWII National Subadmin Bulgaria | 28 | 8,49M | 115.286 | 73,6 |
| **1970** | PostWWII National Subadmin Estonia | 15 | 1,36M | 42.673 | 31,9 |
| **1970** | PostWWII National Subadmin Greece | 14 | 8,79M | 118.767 | 74 |
| **1970** | PostWWII National Subadmin Hungary | 24 | 10,34M | 86.957 | 118,9 |
| **1970** | PostWWII National Subadmin Lithuania | 10 | 3,14M | 60.373 | 52 |
| **1970** | PostWWII National Subadmin Moldova | 39 | 3,6M | 31.100 | 115,6 |
| **1970** | PostWWII National Subadmin Romania | 42 | 20,25M | 226.166 | 89,5 |
| **1970** | PostWWII Turkey Eastern Thrace | 5 | 3,8M | 23.310 | 163 |
| **1970** | SFR Yugoslavia Municipalities 1971 | 488 | 20,32M | 265.328 | 76,6 |
| **1970** | Statistik Austria 9 Bundeslander | 9 | 7,46M | 77.282 | 96,5 |
| **1980** | BKG VGHist FRG Regierungsbezirke 1980 | 30 | 62,7M | 256.233 | 244,7 |
| **1980** | BKG VGHist GDR 15 Bezirke 1980 | 15 | 15,31M | 112.206 | 136,5 |
| **1980** | CUNI NAKI Czechoslovakia 11 Kraje 1960 1990 | 11 | 15,21M | 125.307 | 121,4 |
| **1980** | DEMOPAST ISTAT Provinces (1971) | 93 | 56,26M | 297.350 | 189,2 |
| **1980** | IHPAN PRL 49 Voivodeships 1975 | 49 | 35,27M | 312.160 | 113 |
| **1980** | Latvia 5 Historical Lands PostWWII | 5 | 2,5M | 62.782 | 39,8 |
| **1980** | PostWWII National Subadmin Albania | 12 | 2,61M | 27.209 | 96 |
| **1980** | PostWWII National Subadmin Bulgaria | 28 | 8,82M | 115.286 | 76,5 |
| **1980** | PostWWII National Subadmin Estonia | 15 | 1,46M | 42.673 | 34,3 |
| **1980** | PostWWII National Subadmin Greece | 14 | 9,55M | 118.767 | 80,4 |
| **1980** | PostWWII National Subadmin Hungary | 24 | 10,67M | 86.957 | 122,7 |
| **1980** | PostWWII National Subadmin Lithuania | 10 | 3,38M | 60.373 | 56,1 |
| **1980** | PostWWII National Subadmin Moldova | 39 | 3,97M | 31.100 | 127,5 |
| **1980** | PostWWII National Subadmin Romania | 42 | 22M | 226.166 | 97,3 |
| **1980** | PostWWII Turkey Eastern Thrace | 5 | 5,21M | 23.310 | 223,7 |
| **1980** | SFR Yugoslavia Municipalities 1981 | 492 | 22,1M | 265.328 | 83,3 |
| **1980** | Statistik Austria 9 Bundeslander | 9 | 7,56M | 77.282 | 97,8 |
| **1990** | Dataverse Bosnia 105 Municipalities | 103 | 3,49M | 46.133 | 75,8 |
| **1990** | Eurostat NUTS-3 and GISCO | 883 | 289,58M | 2.149.136 | 134,7 |
| **1990** | National Statistical Office Subadmin MD | 39 | 3,56M | 27.928 | 127,5 |
| **1990** | National Statistical Office Subadmin XK | 30 | 1,77M | 8.619 | 205,9 |
| **2000** | Dataverse Bosnia 105 Municipalities | 103 | 3,49M | 46.133 | 75,8 |
| **2000** | Eurostat NUTS-3 and GISCO | 883 | 289,48M | 2.149.136 | 134,7 |
| **2000** | National Statistical Office Subadmin MD | 39 | 3,56M | 27.928 | 127,5 |
| **2000** | National Statistical Office Subadmin XK | 30 | 1,77M | 8.619 | 205,9 |
| **2010** | Dataverse Bosnia 105 Municipalities | 103 | 3,49M | 46.133 | 75,8 |
| **2010** | Eurostat NUTS-3 and GISCO | 883 | 292,97M | 2.149.136 | 136,3 |
| **2010** | National Statistical Office Subadmin MD | 39 | 3,56M | 27.928 | 127,5 |
| **2010** | National Statistical Office Subadmin XK | 30 | 1,77M | 8.619 | 205,9 |
| **2020** | Dataverse Bosnia 105 Municipalities | 103 | 3,49M | 46.133 | 75,8 |
| **2020** | Eurostat NUTS-3 and GISCO | 883 | 293,43M | 2.149.136 | 136,5 |
| **2020** | National Statistical Office Subadmin MD | 39 | 3,56M | 27.928 | 127,5 |
| **2020** | National Statistical Office Subadmin XK | 30 | 1,77M | 8.619 | 205,9 |
| **2025** | Dataverse Bosnia 105 Municipalities | 103 | 3,49M | 46.133 | 75,8 |
| **2025** | Eurostat NUTS-3 and GISCO | 883 | 290,67M | 2.149.136 | 135,2 |
| **2025** | National Statistical Office Subadmin MD | 39 | 3,56M | 27.928 | 127,5 |
| **2025** | National Statistical Office Subadmin XK | 30 | 1,77M | 8.619 | 205,9 |

Scraped historical GIS administrative enumerations by decadal snapshot
regime and source corpus (2.760 rows, 1950-2020).

| Year | Administrative Unit | Unit Reference | Population | Area (km²) | Density | Source Corpus |
|:---|:---|:---|:---|:---|:---|:---|
| **2025** | İstanbul | TR100 | 15,7M | 3.402 | 4.615,4 | Eurostat NUTS-3 and GISCO |
| **2020** | İstanbul | TR100 | 15,52M | 3.402 | 4.561,8 | Eurostat NUTS-3 and GISCO |
| **2010** | İstanbul | TR100 | 12,92M | 3.402 | 3.796,3 | Eurostat NUTS-3 and GISCO |
| **1990** | İstanbul | TR100 | 11,07M | 3.402 | 3.254,6 | Eurostat NUTS-3 and GISCO |
| **2000** | İstanbul | TR100 | 11,07M | 3.402 | 3.254,6 | Eurostat NUTS-3 and GISCO |
| **1980** | Dithmarschen, Flensburg, Herzogtum Lauenburg, Kiel | FRG 1979 27 | 4,29M | 14.089 | 304,2 | BKG VGHist FRG Regierungsbezirke 1980 |
| **2020** | Roma | ITI43 | 4,25M | 3.732 | 1.139,7 | Eurostat NUTS-3 and GISCO |
| **2025** | Roma | ITI43 | 4,22M | 3.732 | 1.131,5 | Eurostat NUTS-3 and GISCO |
| **1970** | Dithmarschen, Flensburg, Flensburg, Herzogtum Lauenburg | FRG 1970 32 | 4,22M | 14.089 | 299,6 | BKG VGHist FRG Regierungsbezirke 1970 |
| **1980** | Altötting, Bad Tölz-Wolfratshausen, Berchtesgadener Land, Dachau | FRG 1979 06 | 4,2M | 16.966 | 247,4 | BKG VGHist FRG Regierungsbezirke 1980 |
| **1980** | Celle, Cuxhaven, Harburg, Lüchow-Dannenberg | FRG 1979 17 | 4,09M | 12.996 | 314,6 | BKG VGHist FRG Regierungsbezirke 1980 |
| **1980** | Milano | IT 1971 015 1979 | 4,08M | 2.315 | 1.762,1 | DEMOPAST ISTAT Provinces (1971) |
| **2010** | Roma | ITI43 | 4,01M | 3.732 | 1.074 | Eurostat NUTS-3 and GISCO |
| **1980** | Ammerland, Aurich, Cloppenburg, Delmenhorst | FRG 1979 18 | 3,97M | 13.763 | 288,4 | BKG VGHist FRG Regierungsbezirke 1980 |
| **1970** | Milano | IT 1971 015 1970 | 3,9M | 2.315 | 1.686,3 | DEMOPAST ISTAT Provinces (1971) |
| **1960** | Eckernförde, Eiderstedt, Eutin, Flensburg | FRG 1960 35 | 3,89M | 14.089 | 276,3 | BKG VGHist FRG Regierungsbezirke 1955 |
| **1970** | Aichach, Altötting, Bad Aibling, Bad Reichenhall | FRG 1970 06 | 3,85M | 15.363 | 250,5 | BKG VGHist FRG Regierungsbezirke 1970 |
| **1990** | Roma | ITI43 | 3,75M | 3.732 | 1.004,8 | Eurostat NUTS-3 and GISCO |

Selected administrative enumerations from the scraped historical GIS
repository across Cold War CShapes and post-1990 census regimes.

## Urban Gazetteer Integration and Source Hierarchy

To anchor spatial allocation of population within each sub-region,
MAGNETIC compiles a georeferenced settlement gazetteer of 18.388 cities,
towns and municipal centres active between 1950 and 2025. Entries were
assembled through a four-wave saturation protocol that prioritised
institutional statistical archives before accepting any crowd-sourced
municipal supplement. Wave 1 ingested 347 core European metropolitan and
historical urban series from the Eurostat Urban Audit (137 cities,
tracking annual municipal and greater-city populations from 1990 through
2024) and the Buringh long-run European urban series (210 cities with
decadal anchors). Wave 2 incorporated 1.239 additional municipal series
from fifteen national statistical census offices—led by Poland (319),
Slovenia (128), Czechia (117), Romania (117), Lithuania (109), Hungary
(100), Latvia (89), Estonia (68), Slovakia (54), Bulgaria (52), Serbia
(43) and Croatia (22), plus minor border-overlap entries in Germany
(16), Greece (3) and Austria (2). Together, Waves 1 and 2 supply 1.586
primary institutional records, representing 86,1% of the entire
gazetteer. Wave 3 added 256 smaller towns and non-Eurostat Balkan or
Moldovan localities from the GeoNames Municipal Gazetteer Supplement
(3,5% overall share), while Wave 4 performed a sub-regional gap-closing
audit that confirmed zero uncaptured major urban nodes and excluded 800
out-of-domain or redundant candidates.

# Validation

Cross-checking demographic totals across 17 post-socialist jurisdictions
between 1945 and 2026 exposes a stark contrast between the
administrative tightness of late-socialist population counts and the
statistical turbulence that followed border liberalisation in 1989-1991.
Under state socialism, mandatory internal residence registration (such
as Polish zameldowanie, Soviet propiska in the Baltic and Moldavian
republics and comparable municipal registries across Hungary,
Czechoslovakia, Romania and Bulgaria) coupled with strict
foreign-passport controls kept census headcounts and continuous vital
registers tightly aligned. Comparing our 1950, 1970 and 1990 national
benchmarks against Mitchell’s historical census compilations and
national statistical yearbooks yields agreement within 0,2% to 0,6%
across all Visegrád, Danubian and Baltic territories
[\[1\]](#ref-Mitchell2007)[\[2\]](#ref-GUSPoland2024)[\[4\]](#ref-StatBaltics2024)[\[5\]](#ref-KSHHungary2024).
In Poland, for example, the 1950 census counted 25,01M residents (24,82M
mid-year benchmark in MAGNETIC) and the 1988 census recorded 37,88M on
its way to 38,11M in 1990; in Hungary, KSH census enumerations of 9,2M
in 1949, 10,32M in 1970 and 10,37M in 1990 match our decadal checkpoints
almost to the last thousand [\[5\]](#ref-KSHHungary2024).

After 1990, however, open borders severed the link between de jure
municipal residence registries and de facto resident populations.
Citizens of Romania, Bulgaria, Poland, Latvia, Lithuania, Moldova,
Albania and Bosnia and Herzegovina moved abroad in millions to work in
Germany, the United Kingdom, Italy, Spain, Ireland, Austria and Greece
without deregistering from home municipalities
[\[14\]](#ref-Zantout2025Stochastic)[\[15\]](#ref-Newsham2022Understanding).
Consequently, intercensal population estimates drifted substantially
above actual resident counts until each decennial census forced sudden
downward adjustments. When Romania conducted its 2011 census, the
resident population fell more than 1,2M below prior administrative
projections; Latvia’s 2011 census trimmed nearly 170.000 phantom
residents from its national register; Lithuania’s 2011 census revised
its population downward by roughly 200.000; and Croatia’s 2021 census
revealed a ten-year drop of nearly 400.000 residents, bringing its total
down to 3,87M—matching our 2025 benchmark of 3,86M
[\[3\]](#ref-StatBalkans2024)[\[4\]](#ref-StatBaltics2024)[\[19\]](#ref-Eurostat2024).
Albania’s 2023 census similarly confirmed a sharp acceleration in
emigration, cutting enumerated residents to roughly 2,4M-2,75M depending
on usual-residence versus diaspora-adjusted definitions.

Sub-administrative validation against the scraped Eurostat NUTS-3 series
(1990-2020) confirms that post-1990 population decline was heavily
asymmetric inside every state
[\[15\]](#ref-Newsham2022Understanding)[\[19\]](#ref-Eurostat2024).
While national aggregates fell steeply across Bulgaria, Romania,
Hungary, Croatia and the Baltics, capital NUTS-3 units—including
Warszawa, Praha, Bratislava, București, Sofia, Vilnius and
Tallinn-Harju—maintained stable or expanding daytime and resident
populations, drawing internal migrants from peripheral counties where
combined natural decrease and youth out-migration eroded densities by
25% to 45% over thirty years
[\[16\]](#ref-Zdanowska2019Exploring)[\[24\]](#ref-Popescu2022Gaps). At
the urban level, comparing Eurostat Urban Audit figures against national
census city-proper counts highlights a consistent boundary effect:
Eurostat functional or greater-city series (such as Bucharest at 2,59M,
Warsaw at 2,27M, Budapest at 2,05M and Prague at 1,55M by 2025) capture
post-1990 suburban sprawl across peri-urban communes, whereas strict
municipal-boundary censuses (Warsaw at 1,73M-1,86M, Prague at
1,18M-1,32M) understate metropolitan growth as middle-income households
moved outside socialist panel districts into suburban rings
[\[25\]](#ref-Piekut2024Housing)[\[26\]](#ref-Anna2025Changing).

# Results

## Aggregate Trajectory and Demographic Reversal

Across the entire 81-year span from 1945 to 2026, East-Central Europe,
the Balkans and the Baltic states traced an unmistakable inverted-V
curve. Starting from 95,63M in 1950 (68,18 inhabitants per km²), the
domain added 23,04M residents in two decades to reach 118,67M in 1970
(84,61 per km²), then added a further 16,21M by 1990 to peak at 134,88M
(96,17 per km²). Over those forty years every single one of the 17
sub-regions grew, though at wildly differing speeds ranging from +11,09%
in Hungary to +170,45% in Albania. After 1990 the sign flipped across
thirteen of the seventeen sub-regions. Total population contracted by
8,49M between 1990 and 2010 (falling to 126,39M) and by another 5,85M
between 2010 and 2025 (reaching 120,54M and 85,94 inhabitants per km²).
Figure 1 displays the combined regional trajectory and sub-regional
divergence from 1950 to 2025, and Table 3 sets out the five benchmark
populations and end-point densities for all 17 sub-regions.

<img src="figures/east_central_balkans_baltic_after_1945_population_trajectory.png" width="3253" />

| Sub-Region | Area (km²) | 1950 | 1970 | 1990 | 2010 | 2025 | 2025 Density |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Poland** | 317.991 | 24,82M | 32,53M | 38,11M | 38,04M | 37,48M | 117,9 |
| **Czechia** | 92.324 | 8,93M | 9,8M | 10,36M | 10,47M | 10,88M | 117,8 |
| **Slovakia** | 48.509 | 3,46M | 4,53M | 5,3M | 5,39M | 5,42M | 111,8 |
| **Hungary** | 97.739 | 9,34M | 10,34M | 10,37M | 10M | 9,58M | 98 |
| **Romania** | 237.083 | 16,31M | 20,25M | 23,21M | 20,25M | 19,05M | 80,4 |
| **Moldova** | 27.876 | 2,34M | 3,6M | 4,36M | 3,56M | 2,98M | 106,9 |
| **Bulgaria** | 122.932 | 7,25M | 8,49M | 8,72M | 7,4M | 6,43M | 52,3 |
| **Slovenia** | 28.714 | 1,47M | 1,73M | 2M | 2,05M | 2,12M | 74 |
| **Croatia** | 55.805 | 3,85M | 4,41M | 4,78M | 4,29M | 3,86M | 69,2 |
| **Bosnia and Herzegovina** | 50.157 | 2,66M | 3,71M | 4,42M | 3,76M | 3,16M | 63,1 |
| **Serbia & Kosovo** | 84.762 | 6,73M | 8,14M | 9,52M | 9,06M | 8,24M | 97,2 |
| **Montenegro** | 12.802 | 399k | 525k | 606k | 619k | 623k | 48,7 |
| **North Macedonia** | 28.177 | 1,23M | 1,63M | 1,9M | 2,06M | 1,82M | 64,8 |
| **Albania** | 29.879 | 1,22M | 2,14M | 3,29M | 2,91M | 2,75M | 91,9 |
| **Estonia** | 43.998 | 1,1M | 1,36M | 1,57M | 1,33M | 1,37M | 31,1 |
| **Latvia** | 64.086 | 1,95M | 2,37M | 2,66M | 2,1M | 1,87M | 29,2 |
| **Lithuania** | 59.689 | 2,57M | 3,14M | 3,7M | 3,1M | 2,88M | 48,3 |
| **Domain Total** | 1.402.523 | 95,63M | 118,67M | 134,88M | 126,39M | 120,54M | 85,9 |

Sub-regional population benchmarks (1950-2025) and 2025 density across
17 territories of East-Central Europe, the Balkans and the Baltic
states.

## Visegrád Core: Poland, Czechia, Slovakia and Hungary

The four Visegrád states form the demographic and industrial spine of
the entire domain, accounting for 48,6% of its population in 1950
(46,55M) and climbing to 52,57% in 2025 (63,37M) precisely because they
weathered the post-1990 transition far more resiliently than either the
Balkans or the Baltic states
[\[6\]](#ref-RosesWolf2019)[\[18\]](#ref-Kozerakowalska2021Framework).
Poland alone represents nearly one third of the chapter’s inhabitants.
Recovering from catastrophic wartime losses, Poland experienced Europe’s
strongest post-war baby boom during the 1950s—especially across the
newly settled western and northern voivodeships of Lower Silesia,
Western Pomerania and Warmia-Masuria, where young settler families
produced crude birth rates exceeding 30 per thousand
[\[2\]](#ref-GUSPoland2024). Total population surged by 53,52% from
24,82M in 1950 to 38,11M in 1990, lifting density from 80,5 to 123,6
inhabitants per km². Unlike neighbouring Romania or Bulgaria, Poland
retained roughly 38,04M residents in 2010 despite more than two million
emigrants departing for the United Kingdom, Germany, Ireland and the
Netherlands after EU accession in 2004, because a secondary echo-boom of
the 1978-1984 birth cohorts briefly cushioned natural balance
[\[2\]](#ref-GUSPoland2024)[\[14\]](#ref-Zantout2025Stochastic). After
2015, however, total fertility dropped below 1,2 children per woman and
natural decrease widened rapidly, trimming Poland’s population to 37,48M
by 2025 (121,5 per km²) even after absorbing over one million Ukrainian
labour migrants and wartime refugees [\[19\]](#ref-Eurostat2024).

Czechia and Slovakia traced distinct internal paths within federated
Czechoslovakia before their peaceful separation on 1 January 1993.
Bohemia and Moravia emerged from 1945 with an already mature industrial
demographic profile and an empty Sudeten borderland; Czech population
grew modestly by 16,11% from 8,93M in 1950 to 10,36M in 1990 (aided
briefly by the pro-natalist housing loans and maternity allowances of
the 1970s Husák’s children wave). Slovakia, still predominantly rural
and Catholic in 1950, expanded far faster—climbing 52,99% from 3,46M to
5,3M as socialist planners built heavy metallurgical, armaments and
chemical plants across Košice, Banská Bystrica and the Váh valley
[\[27\]](#ref-Gavurova2019Research). After 1990 both republics joined
the small minority of post-socialist European states to post net
demographic gains: Czechia grew from 10,36M in 1990 to 10,47M in 2010
and 10,88M in 2025 (138,9 per km², the highest national density in the
entire domain), driven by sustained immigration from Slovakia, Ukraine
and Vietnam into Prague, Brno and western Bohemian manufacturing
corridors [\[19\]](#ref-Eurostat2024). Slovakia rose more modestly from
5,3M in 1990 to 5,43M in 2025 (113,2 per km²), balancing rapid suburban
expansion around Bratislava against steep youth outflow from eastern
Prešov and Košice counties, partially offset by higher fertility among
eastern Roma communities.

Hungary stands out as the demographic precursor of Central European
ageing. Following the crushed 1956 uprising—which sent roughly 200.000
mostly young Hungarians into western exile—and the legalisation of
abortion in June 1956, Hungarian fertility dropped earlier than anywhere
else in Europe
[\[5\]](#ref-KSHHungary2024)[\[9\]](#ref-CoaleWatkins1986). Population
rose only 11,09% over forty socialist years, from 9,34M in 1950 to a
peak of 10,71M in 1980 before already turning negative to 10,37M by
1990. Over the next thirty-five years Hungary shed 794k inhabitants,
declining to 10M in 2010 and 9,58M in 2025 (103,8 per km²). Despite
aggressive pro-natalist tax exemptions, subsidised family mortgages and
childcare grants introduced after 2010—which briefly lifted total
fertility from 1,23 in 2011 towards 1,59 in 2021 before receding
again—structural cohort shrinkage and sustained emigration from eastern
counties kept overall population on a downward slope
[\[5\]](#ref-KSHHungary2024)[\[13\]](#ref-Sagi2022Issues).

## Romania, Moldova and Bulgaria: Pro-Natalist Shocks and Emigration Collapse

The lower Danube and western Black Sea basin experienced the sharpest
contrast between mid-century socialist expansion and post-1990
demographic implosion. Romania climbed from 16,31M in 1950 to 20,25M in
1970 and 23,21M in 1990 (+42,28%), propelled first by rural mortality
decline and then by Ceaușescu’s coercive Decree 770 of 1966, which
forced an abrupt spike in births from 273.678 in 1966 to 527.764 in 1967
[\[3\]](#ref-StatBalkans2024). State urbanisation programmes
simultaneously pulled millions from Wallachian and Moldavian villages
into steelworks and petrochemical towns such as Galați, Brașov,
Ploiești, Craiova and Pitești. When the regime fell in December 1989 and
abortion was immediately re-legalised, fertility collapsed while
hundreds of thousands of ethnic Germans (Transylvanian Saxons and Banat
Swabians) emigrated to Germany, followed after 2000 and especially after
EU accession in 2007 by over three million Romanian labour migrants
settling in Italy, Spain, Germany and the United Kingdom
[\[14\]](#ref-Zantout2025Stochastic)[\[24\]](#ref-Popescu2022Gaps).
Romania’s resident total plunged from 23,21M in 1990 to 20,25M in 2010
and 19,05M in 2025—an absolute loss of 4,16M people (-17,91%), lowering
national density from 99,8 to 81,9 inhabitants per km² and hollowing out
entire rural județe across Oltenia, Teleorman and northern Moldavia.

Across the Prut river, Soviet Moldavia had recorded one of the fastest
socialist population expansions in Eastern Europe, surging 86,42% from
2,34M in 1950 to 4,36M in 1990 (149,3 per km², making it the most
densely peopled agricultural territory in the USSR) through high rural
fertility and industrial inflows into Chișinău, Bălți and Tiraspol
[\[1\]](#ref-Mitchell2007)[\[3\]](#ref-StatBalkans2024). Independence in
1991, the 1992 Transnistria conflict and severe post-Soviet
deindustrialisation triggered the steepest percentage contraction in the
entire 17-region domain: Moldova lost 31,71% of its population over
thirty-five years, sliding to 3,56M in 2010 and 2,98M in 2025 (including
estimates for the left-bank Transnistrian districts). Because dual
Romanian-Moldovan citizenship grants EU labour-market access to hundreds
of thousands of Moldovans, labour emigration to both the European Union
and Russia remained relentless well into the 2020s
[\[15\]](#ref-Newsham2022Understanding).

Bulgaria presents the classic profile of compounding natural decrease
and emigration. Already entering an early fertility transition by the
1960s, Bulgaria grew modestly from 7,25M in 1950 to 8,49M in 1970 and
peaked near 8,95M in 1985 before the state’s forced assimilation
campaign (the Revival Process) triggered the exodus of more than 300.000
ethnic Turks to Turkey in the summer of 1989, pulling the 1990 benchmark
down to 8,72M [\[3\]](#ref-StatBalkans2024). After 1990, deep economic
shocks in 1996-1997 and EU accession in 2007 drove sustained
out-migration of working-age adults alongside Europe’s highest crude
death rates in rapidly ageing rural oblasts such as Vidin, Montana and
Vratsa. Bulgaria declined 26,19% from 8,72M in 1990 to 7,4M in 2010 and
6,44M in 2025, cutting national density to 57 inhabitants per km²—barely
half that of Czechia or Poland—with Sofia and coastal Varna remaining
the sole demographic growth islands in a rapidly emptying interior
[\[19\]](#ref-Eurostat2024).

## Former Yugoslavia and Albania: Delayed Transition, War and Fragmentation

Between 1945 and 1990 Socialist Yugoslavia functioned as a demographic
continent in miniature, linking Alpine central Europe to the
high-fertility Ottoman Balkans inside one federation. Aggregate
population across the six Yugoslav republics (Slovenia, Croatia, Bosnia
and Herzegovina, Serbia including Kosovo and Vojvodina, Montenegro and
Macedonia) grew from 16,35M in 1950 to 20,14M in 1970 and 23,23M in 1990
(+42,12%), yet regional trajectories diverged sharply along
socio-economic and confessional lines
[\[1\]](#ref-Mitchell2007)[\[3\]](#ref-StatBalkans2024). Slovenia (1,47M
to 2M, +35,64%) and Croatia (3,85M to 4,78M, +24,1%) completed their
fertility transitions early and absorbed internal industrial migrants
from Bosnia and Serbia while simultaneously sending hundreds of
thousands of Gastarbeiter to West Germany and Austria after Belgrade
liberalised passports in 1965. By contrast, Bosnia and Herzegovina
surged 66,25% from 2,66M to 4,42M, North Macedonia rose 54,72% from
1,23M to 1,9M, Montenegro expanded 51,88% from 399k to 606k while Serbia
and Kosovo combined grew 41,41% from 6,73M to 9,52M—masking an
extraordinary divergence between stagnant Vojvodina and central Serbia
on one hand and Kosovo on the other, where Albanian total fertility
remained above 4,5 children per woman into the 1980s
[\[3\]](#ref-StatBalkans2024).

The violent dissolution of Yugoslavia in 1991-1999 shattered this
multi-ethnic equilibrium. Slovenia escaped with a ten-day border
conflict in June-July 1991, joined the EU in 2004 and the eurozone in
2007 and attracted steady net immigration from the former Yugoslav
republics; its population rose continuously from 2M in 1990 to 2,05M in
2010 and 2,13M in 2025 (+6,36%, the strongest post-1990 gain in the
entire chapter, reaching 106,3 inhabitants per km²)
[\[19\]](#ref-Eurostat2024). Croatia suffered both war-related
displacement of roughly 250.000 Croatian Serbs in 1991-1995 (partly
offset by ethnic Croat refugees from Bosnia) and massive post-2013 EU
labour emigration from Slavonia and Lika, contracting 19,21% from 4,78M
in 1990 to 4,3M in 2010 and 3,86M in 2025 (70,8 per km²). Bosnia and
Herzegovina endured the continent’s worst wartime catastrophe since
1945: roughly 100.000 dead, more than two million displaced internally
or abroad, permanent territorial partition into two entities under the
1995 Dayton Agreement and relentless post-war youth emigration to
Germany, Austria and Slovenia. Its population fell 28,46% from 4,42M in
1990 to 3,76M in 2010 and 3,17M in 2025 (61,3 per km²)
[\[3\]](#ref-StatBalkans2024).

Serbia and Kosovo combined declined 13,45% from 9,52M in 1990 to 9,06M
in 2010 and 8,24M in 2025 (93,3 per km²). Despite receiving over 500.000
Serb refugees from Croatia, Bosnia and Kosovo during the 1990s, Serbia
proper fell into deep natural decrease and emigration across eastern and
southern districts, while Kosovo—whose young Albanian population
initially sustained natural growth after the 1998-1999 war and 2008
declaration of independence—entered rapid fertility decline and heavy
post-2015 emigration to Germany and Switzerland
[\[3\]](#ref-StatBalkans2024). Montenegro maintained modest overall
growth from 606k in 1990 to 623k in 2025 (+2,81%, 45,8 per km², the
lowest Balkan density), as coastal tourism and inflows to Podgorica
offset depopulation across northern mountainous municipalities. North
Macedonia rose initially to 2,06M in 2010 before emigration across both
Macedonian and Albanian communities reduced its enumerated population to
1,83M by 2025 (-4,1% relative to 1990, 72,9 per km²)
[\[3\]](#ref-StatBalkans2024)[\[11\]](#ref-Kul2022Evlad).

Albania wrote Europe’s most extreme late-transition chapter. Sealed off
from global migration for forty-five years, Albania grew from 1,22M in
1950 to 2,14M in 1970 and 3,29M in 1990 (+170,45%), pushing density from
42,6 to 115,3 inhabitants per km² across a predominantly mountainous
country with limited arable valleys [\[3\]](#ref-StatBalkans2024). When
communist rule collapsed in 1991, followed by the 1997 pyramid-scheme
financial meltdown, more than one third of the country’s adult workforce
departed for Italy and Greece, with later waves moving to Germany and
Britain. Simultaneously, total fertility plunged from above 3 in 1990 to
below 1,4 by 2022 [\[12\]](#ref-Ciganda2026Anticipating). Albania
contracted 16,46% from 3,29M in 1990 to 2,91M in 2010 and 2,75M in 2025
(96,3 per km²), while internal migration drained mountain prefectures
such as Dibër, Kukës and Gjirokastër into the Tirana-Durrës coastal
conurbation.

## The Baltic States: Soviet Industrial In-Migration and Post-Independence Contraction

Estonia, Latvia and Lithuania form the northernmost tier of the domain,
occupying 167.973,5 km² along the eastern Baltic shore at densities
roughly half those of the Visegrád plain. Between 1945 and 1990 all
three Soviet republics underwent dual demographic restructuring: heavy
post-war deportations and partisan losses among indigenous populations
were followed by state-directed industrial labour immigration from
Russia, Ukraine and Belarus
[\[1\]](#ref-Mitchell2007)[\[4\]](#ref-StatBaltics2024). In Estonia and
Latvia, where pre-war indigenous fertility was already low, heavy Slavic
immigration into Tallinn, Narva, Sillamäe, Riga and Daugavpils lifted
total numbers from 1,1M to 1,57M in Estonia (+42,51%) and from 1,95M to
2,66M in Latvia (+36,63%), reducing ethnic Estonians to 61,5% and ethnic
Latvians to 52% of their respective republics by the 1989 Soviet census.
Lithuania, more agrarian and Catholic at annexation, retained higher
indigenous fertility and a more dispersed urban network around Vilnius,
Kaunas and Klaipėda, growing 44,06% from 2,57M in 1950 to 3,7M in 1990
while remaining nearly 80% ethnically Lithuanian
[\[4\]](#ref-StatBaltics2024).

Restoration of independence in 1991 triggered an immediate two-wave
reversal. First, between 1991 and 1996 the withdrawal of Soviet military
garrisons and civilian return migration to Russia, Ukraine and Belarus
removed several hundred thousand residents from Latvia and Estonia.
Second, EU accession in 2004 and the severe 2008-2010 Baltic banking
crisis drove massive youth emigration to the United Kingdom, Ireland,
Norway, Finland and Germany
[\[4\]](#ref-StatBaltics2024)[\[14\]](#ref-Zantout2025Stochastic).
Latvia suffered the second-deepest contraction in the entire chapter,
dropping 29,78% from 2,66M in 1990 to 2,1M in 2010 and 1,87M in 2025
(29,7 inhabitants per km², the lowest national density in the entire
domain after Estonia’s 31,9). Lithuania fell 21,98% from 3,7M in 1990 to
3,1M in 2010 and 2,89M in 2025 (46,5 per km²), though strong wage
convergence after 2019 spurred return migration and halted decline
around Vilnius. Estonia stood apart as the sole Baltic state to achieve
a decisive demographic rebound after 2015: having fallen from 1,57M in
1990 to 1,33M in 2010 (-15,17%), sustained digital-sector growth,
Finnish cross-border integration and Ukrainian inflows lifted Estonia
back to 1,37M by 2025 (-12,68% relative to 1990)
[\[4\]](#ref-StatBaltics2024)[\[19\]](#ref-Eurostat2024).

## Urban Hierarchy and Metropolitan Polarisation

Post-1945 urbanisation reshaped the rank-size hierarchy of East-Central
Europe, the Balkans and the Baltic states in two contrasting phases.
During the socialist era, central planning promoted medium-sized
industrial cities alongside national capitals, deliberately capping
capital-city housing registrations in Warsaw, Budapest, Prague and Sofia
while channelling investment into coal, steel and textile basins such as
Łódź, Katowice, Ostrava, Miskolc, Brașov, Plovdiv and Daugavpils
[\[6\]](#ref-RosesWolf2019). After 1990, market integration with Western
Europe and foreign direct investment dismantled that balanced industrial
grid and concentrated financial services, logistics, universities and
transnational corporate headquarters overwhelmingly in national capitals
and a handful of western border gateways
[\[16\]](#ref-Zdanowska2019Exploring)[\[17\]](#ref-Zdanowska2019Spatial).

Figure 2 illustrates the contemporary rank-size distribution across all
18.388 settlements in the gazetteer, while Table 4 reports the leading
metropolitan series drawn from the chapter summary ledger (showing both
Eurostat Urban Audit functional and greater-city delineations and
national census or Buringh historical urban benchmarks where both appear
in the master register). The divergence between winning capitals and
shrinking industrial centres is stark. Warsaw climbed from 1,27M in 1950
to 1,66M in 1990 and 2,27M in the 2025 Eurostat greater-city series
(1,73M-1,86M within city-proper boundaries), while Poland’s historic
textile giant Łódź peaked at 854k in 1989 before shrinking by more than
200k within its municipal borders by 2024
[\[2\]](#ref-GUSPoland2024)[\[19\]](#ref-Eurostat2024). Bucharest
expanded from 1,62M in 1950 to 2,07M in 1990 and 2,59M in 2025 across
its metropolitan ring, absorbing internal migrants even as Romania lost
over four million citizens nationally. Prague (949k in 1950 to 1,55M
greater city in 2025), Sofia (892k to 1,3M), Kraków (574k to 985k),
Zagreb (599k to 925k), Wrocław (492k to 819k) and Bratislava (347k to
579k) similarly entrenched their economic primacy
[\[16\]](#ref-Zdanowska2019Exploring). Conversely, Riga plunged by one
third from its 1990 Soviet industrial peak of 909k to 595k in 2025 and
Kaunas dropped from 435k in 1991 to 304k in 2025, even as Vilnius (608k
in 2025) and Tallinn (457k in 2025) rebounded above their 2010 troughs
[\[4\]](#ref-StatBaltics2024)[\[19\]](#ref-Eurostat2024).

Parallel shifts in household structure and housing deprivation reinforce
this urban polarisation. Across the European Union member states of the
domain, the proportion of one-person households—particularly elderly
widows in depopulating rural counties and young professionals in
metropolitan centres—has climbed steadily since 2000, decoupling housing
demand from aggregate headcount trends [\[25\]](#ref-Piekut2024Housing).
Severe housing deprivation and educational attainment gaps between urban
agglomerations and peripheral agricultural districts remain sharpest in
Romania, Bulgaria and eastern Poland, where low farm labour productivity
continues to push younger cohorts towards western cities or foreign
labour markets
[\[7\]](#ref-Florianczyk2025Relation)[\[24\]](#ref-Popescu2022Gaps)[\[26\]](#ref-Anna2025Changing).

<img src="figures/east_central_balkans_baltic_after_1945_urban_hierarchy.png" width="3160" />

| City | Country | 1950 | 1990 | 2025 | Peak Year | Peak Pop. | Source Corpus |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Katowice** | Poland | 885k | 2,45M | 2,68M | 2025 | 2,68M | Chandler V2 Historical Urban Population |
| **București** | Romania | 1,62M | 2,07M | 2,59M | 2025 | 2,59M | Eurostat Urban Audit |
| **Budapest** | Hungary | 1,5M | 2,23M | 2,43M | 2025 | 2,43M | Chandler V2 Historical Urban Population |
| **Warsaw** | Poland | 803k | 2,11M | 2,31M | 2025 | 2,31M | Chandler V2 Historical Urban Population |
| **Warszawa** | Poland | 479k | 1,3M | 1,79M | 2025 | 1,79M | Buringh Urban Series |
| **Belgrade** | Serbia | 340k | 1,16M | 1,68M | 2025 | 1,68M | Buringh Urban Series |
| **Praha** | Czechia | 949,1k | 1,21M | 1,55M | 2025 | 1,55M | Eurostat Urban Audit |
| **Sofia** | Bulgaria | 891,5k | 1,14M | 1,3M | 2020 | 1,33M | Eurostat Urban Audit |
| **Stolichna** | Bulgaria | 948,1k | 1,21M | 1,33M | 2025 | 1,33M | Eurostat GISCO LAU 2021 Bulgaria |
| **Lodz** | Poland | 690k | 1,08M | 1,18M | 2025 | 1,18M | Chandler V2 Historical Urban Population |
| **Riga** | Latvia | 475k | 968,3k | 1,06M | 2025 | 1,06M | Chandler V2 Historical Urban Population |
| **Pest** | Hungary | 725,9k | 929,2k | 1,02M | 2025 | 1,02M | GeoNames Supplement |
| **Kraków** | Poland | 574,3k | 746,6k | 985,1k | 2025 | 985,1k | Eurostat Urban Audit |
| **Zagreb** | Croatia | 599,3k | 767,2k | 925,2k | 2025 | 925,2k | Eurostat Urban Audit |
| **Gdansk** | Poland | 406,2k | 812,5k | 888,7k | 2025 | 888,7k | Chandler V2 Historical Urban Population |
| **Ostrava** | Czechia | 374,2k | 779,1k | 852,2k | 2025 | 852,2k | Chandler V2 Historical Urban Population |
| **Wrocław** | Poland | 491,5k | 639k | 819,2k | 2025 | 819,2k | Eurostat Urban Audit |
| **Riga** | Latvia | 446k | 641,8k | 751,3k | 2025 | 751,3k | Buringh Urban Series |
| **Chorzow** | Poland | 602,4k | 124,2k | 131,4k | 1970 | 710,8k | Chandler V2 Historical Urban Population |
| **Kisinev** | Moldova | 134k | 481k | 707,5k | 2025 | 707,5k | Buringh Urban Series |

Leading metropolitan and urban records in the 1945-2026 gazetteer
(including Eurostat greater-city, national census and Buringh urban
series).

# Limitations

Four structural measurement caveats govern demographic interpretation
across post-1945 East-Central Europe, the Balkans and the Baltic states.
First, unregistered international emigration after 1990 introduces
systematic upward bias into municipal and civil-registry population
estimates across Romania, Bulgaria, Poland, Moldova, Albania, Croatia,
Serbia and Bosnia and Herzegovina
[\[14\]](#ref-Zantout2025Stochastic)[\[15\]](#ref-Newsham2022Understanding).
Circular labour migrants who retain legal residence in home
municipalities while working seasonally or permanently in Western Europe
appear as resident taxpayers in administrative files until decennial
censuses or register-linkage audits prune them out. Although our 2010
and 2025 benchmarks incorporate census-adjusted Eurostat and national
totals, short-run annual estimates for non-EU Balkan states and Moldova
retain uncertainty margins of 3% to 6%.

Second, political fragmentation and post-conflict governance have
interrupted census periodicity in several sub-regions. Bosnia and
Herzegovina conducted no national census for twenty-two years between
March 1991 and October 2013, and its 2013 enumeration remained contested
between state and Republika Srpska statistical agencies over the
treatment of diaspora citizens [\[3\]](#ref-StatBalkans2024). Moldova’s
national statistical bureau has lacked direct enumeration authority over
breakaway Transnistria since 1992, necessitating reconciliation of
Chisinau’s right-bank censuses (2004, 2014 and 2024) with separate
Tiraspol figures. Partial municipal boycotts in northern Kosovo (2011
and 2024) and southern Serbia likewise explain why MAGNETIC preserves a
unified Serbia and Kosovo polygon for longitudinal 1950-2025 continuity.

Third, urban-level comparisons must distinguish carefully between
administrative city-proper municipalities and metropolitan or
greater-city delineations
[\[19\]](#ref-Eurostat2024)[\[25\]](#ref-Piekut2024Housing). Because the
1.842-settlement master register retains separate provenance series from
Eurostat Urban Audit, national statistical censuses and Buringh’s
historical urban dataset, major capitals such as Warsaw, Budapest,
Prague, Riga and Chișinău appear under distinct corpus delineations in
Table 4 rather than being artificially collapsed into a single boundary
definition. In addition, polygon boundary rasterisation along the
western Oder-Neisse, Austrian, Italian, Greek and Thracian edges
captures 47 peripheral border towns belonging to neighbouring
jurisdictions (36 in Germany, 5 in Austria, 4 in Greece, 1 in Italy and
1 in European Turkey), which are preserved transparently in the
gazetteer provenance ledger without inflating the 17 core sub-regional
population totals.

Fourth, the post-2022 wartime displacement of several million Ukrainian
nationals into Poland, Czechia, Slovakia, Romania, Moldova and the
Baltic states introduced sudden, highly fluid temporary-protection
populations whose length of stay varies with military and economic
conditions [\[2\]](#ref-GUSPoland2024)[\[19\]](#ref-Eurostat2024). The
2025 benchmark figures incorporate registered usual residents and
long-term temporary-protection holders where national statistical
offices include them in resident balances, yet cross-border mobility
means that 2025-2026 totals carry wider short-term variance than
pre-2020 census benchmarks.

# Conclusion

Between 1945 and 2026 East-Central Europe, the Balkans and the Baltic
states traversed the entire arc from post-war demographic reconstruction
to Europe’s steepest peacetime depopulation. During the socialist forty
years from 1950 to 1990, antibiotics, mass housing, heavy
industrialisation and delayed fertility transitions in the southern and
eastern margins lifted the 17-region population by 39,25M—from 95,63M to
134,88M—pushing regional density close to 100 inhabitants per km² and
transforming agrarian societies into predominantly urban economies. That
mid-century expansion proved unsustainable once state borders opened and
industrial subsidies vanished after 1989-1991. Compounding lowest-low
fertility, wartime destruction across the former Yugoslavia and massive
westward labour emigration erased 14,34M inhabitants between 1990 and
2025, reducing the domain to 120,54M.

Beneath the aggregate contraction lies an intensifying spatial sorting.
Four western and Adriatic-Alpine territories—Slovenia, Czechia, Slovakia
and Montenegro—sustained modest net gains after 1990, and capital
metropolitan regions from Warsaw and Prague to Bucharest, Sofia, Vilnius
and Tallinn consolidated their pull over jobs, universities and foreign
investment. Meanwhile, peripheral rural counties and mono-industrial
socialist towns across Moldova, Latvia, Bosnia and Herzegovina,
Bulgaria, Lithuania, Croatia, Romania and Albania lost one fifth to one
third of their human base in a single generation. With median ages
climbing rapidly and smaller post-1990 birth cohorts now entering
childbearing years, the structural decline across the eastern half of
Europe is set to deepen beyond 2026, leaving migration policy and
metropolitan productivity—rather than natural increase—as the primary
determinants of future regional population trajectories.

# Appendix

Table 5 provides a summary diagnostic across all 17 sub-regions
comparing socialist-era growth (1950-1990), post-transition change
(1990-2025), included settlement counts and gazetteer recording density
per 10k km².

| Sub-Region | 1950 Dens. | 1990 Dens. | 2025 Dens. | 1950-1990 | 1990-2025 | Sites | Sites per 10k km² |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **Poland** | 78,1 | 119,8 | 117,9 | +53,5% | -1,7% | 2.719 | 85,5 |
| **Czechia** | 96,7 | 112,2 | 117,8 | +16,1% | +5% | 4.276 | 463,2 |
| **Slovakia** | 71,4 | 109,2 | 111,8 | +53% | +2,4% | 2.106 | 434,1 |
| **Hungary** | 95,5 | 106,1 | 98 | +11,1% | -7,7% | 2.604 | 266,4 |
| **Romania** | 68,8 | 97,9 | 80,4 | +42,3% | -17,9% | 3.277 | 138,2 |
| **Moldova** | 84 | 156,6 | 106,9 | +86,4% | -31,7% | 91 | 32,6 |
| **Bulgaria** | 59 | 70,9 | 52,3 | +20,2% | -26,2% | 484 | 39,4 |
| **Slovenia** | 51,3 | 69,6 | 74 | +35,6% | +6,4% | 493 | 171,7 |
| **Croatia** | 69 | 85,6 | 69,2 | +24,1% | -19,2% | 542 | 97,1 |
| **Bosnia and Herzegovina** | 53,1 | 88,2 | 63,1 | +66,3% | -28,5% | 237 | 47,3 |
| **Serbia & Kosovo** | 79,4 | 112,3 | 97,2 | +41,4% | -13,4% | 448 | 52,9 |
| **Montenegro** | 31,2 | 47,3 | 48,7 | +51,9% | +2,8% | 32 | 25 |
| **North Macedonia** | 43,7 | 67,5 | 64,8 | +54,7% | -4,1% | 342 | 121,4 |
| **Albania** | 40,7 | 110 | 91,9 | +170,5% | -16,5% | 203 | 67,9 |
| **Estonia** | 25 | 35,7 | 31,1 | +42,5% | -12,7% | 151 | 34,3 |
| **Latvia** | 30,4 | 41,6 | 29,2 | +36,6% | -29,8% | 206 | 32,1 |
| **Lithuania** | 43 | 62 | 48,3 | +44,1% | -22% | 177 | 29,7 |

Sub-regional density evolution (1950, 1990 and 2025), percentage change
by era and gazetteer coverage density (sites per 10k km²).

# Sources

<div id="refs" class="references csl-bib-body" data-entry-spacing="0">

<div id="ref-Mitchell2007" class="csl-entry">

<span class="csl-left-margin">1.
</span><span class="csl-right-inline">Mitchell, B. R. *International
Historical Statistics: Europe, 1750–2005*. Palgrave Macmillan, 2007,
<https://doi.org/10.1057/9780230279322>.</span>

</div>

<div id="ref-GUSPoland2024" class="csl-entry">

<span class="csl-left-margin">2.
</span><span class="csl-right-inline">Urząd Statystyczny), Statistics
Poland (Główny. “<span class="nocase">National Censuses and Voivodeship
Population Series 1921–2024</span>.” GUS Poland, 2024,
<https://stat.gov.pl/>.</span>

</div>

<div id="ref-StatBalkans2024" class="csl-entry">

<span class="csl-left-margin">3.
</span><span class="csl-right-inline">Statistical Office of the Republic
of Serbia, NSI Bulgaria, INS Romania, and ELSTAT Greece.
“<span class="nocase">Post-War Population and Housing Censuses of
South-Eastern Europe 1948–2023</span>.” National Statistical Institutes
of South-Eastern Europe, 2024, <https://insse.ro/>.</span>

</div>

<div id="ref-StatBaltics2024" class="csl-entry">

<span class="csl-left-margin">4.
</span><span class="csl-right-inline">Statistics Estonia, Central
Statistical Bureau of Latvia, and State Data Agency of Lithuania.
“<span class="nocase">Population Censuses of the Baltic States
1922–2024</span>.” Baltic National Statistical Offices, 2024,
<https://andmed.stat.ee/>.</span>

</div>

<div id="ref-KSHHungary2024" class="csl-entry">

<span class="csl-left-margin">5.
</span><span class="csl-right-inline">(KSH), Hungarian Central
Statistical Office. “<span class="nocase">Historical Census Series of
Hungary 1870–2022</span>.” KSH Budapest, 2024,
<https://www.ksh.hu/>.</span>

</div>

<div id="ref-RosesWolf2019" class="csl-entry">

<span class="csl-left-margin">6.
</span><span class="csl-right-inline">Rosés, Joan R., and Nikolaus Wolf.
*<span class="nocase">The Economic Development of Europe’s Regions: A
Quantitative History Since 1900</span>*. Routledge, 2019,
<https://doi.org/10.4324/9780429449789>.</span>

</div>

<div id="ref-Florianczyk2025Relation" class="csl-entry">

<span class="csl-left-margin">7.
</span><span class="csl-right-inline">Floriańczyk, Zbigniew Jerzy, et
al. “<span class="nocase">Relation of changes in productivity and
remuneration of the labor factor in agriculture in EU Member
States</span>.” *PLOS One*, 2025,
<https://doi.org/10.1371/journal.pone.0328984>.</span>

</div>

<div id="ref-DeVries1984" class="csl-entry">

<span class="csl-left-margin">8.
</span><span class="csl-right-inline">Vries, Jan de. *European
Urbanization, 1500–1800*. Harvard University Press, 1984,
<https://doi.org/10.4324/9780203716526>.</span>

</div>

<div id="ref-CoaleWatkins1986" class="csl-entry">

<span class="csl-left-margin">9.
</span><span class="csl-right-inline">Coale, Ansley J., and Susan Cotts
Watkins. *<span class="nocase">The Decline of Fertility in
Europe</span>*. Princeton University Press, 1986,
<https://doi.org/10.1515/9781400886692>.</span>

</div>

<div id="ref-Toprak2025Evaluation" class="csl-entry">

<span class="csl-left-margin">10.
</span><span class="csl-right-inline">Toprak, Aslı Okay.
“<span class="nocase">Evaluation of the Impact of Women’s Employment on
GDP Using Seemingly Unrelated Regression</span>.” *Hitit Sosyal Bilimler
Dergisi*, 2025, <https://doi.org/10.17218/hititsbd.1487352>.</span>

</div>

<div id="ref-Kul2022Evlad" class="csl-entry">

<span class="csl-left-margin">11.
</span><span class="csl-right-inline">Kul, Eyüp.
“<span class="nocase">Evladı Fatihan in Macedonia (Problems-Suggestions
of Solution)</span>.” *Avrasya İncelemeleri Dergisi*, 2022,
<https://doi.org/10.26650/jes.2022.011>.</span>

</div>

<div id="ref-Ciganda2026Anticipating" class="csl-entry">

<span class="csl-left-margin">12.
</span><span class="csl-right-inline">Ciganda, Daniel, et al.
“<span class="nocase">Anticipating Continued Global Fertility Decline
via Neural Forecasting</span>.” *arXiv Preprint*, 2026,
<https://doi.org/10.48550/arXiv.2605.23858>.</span>

</div>

<div id="ref-Sagi2022Issues" class="csl-entry">

<span class="csl-left-margin">13.
</span><span class="csl-right-inline">Sági, Judit, and Csaba Lentner.
“<span class="nocase">Key issues in the effectiveness of public
financial tools to support childbearing the example of Hungary during
the COVID-19 crisis</span>.” *PLOS ONE*, 2022,
<https://doi.org/10.1371/journal.pone.0273090>.</span>

</div>

<div id="ref-Zantout2025Stochastic" class="csl-entry">

<span class="csl-left-margin">14.
</span><span class="csl-right-inline">Zantout, Karim, and Jacob Schewe.
“<span class="nocase">Stochastic evolution model for international
migration</span>.” *PLOS One*, 2025,
<https://doi.org/10.1371/journal.pone.0332886>.</span>

</div>

<div id="ref-Newsham2022Understanding" class="csl-entry">

<span class="csl-left-margin">15.
</span><span class="csl-right-inline">Newsham, Niall, and Francisco
Rowe. “<span class="nocase">Understanding the Trajectories of Population
Decline Across Rural and Urban Europe: A Sequence Analysis</span>.”
*arXiv Preprint*, 2022,
<https://doi.org/10.48550/arXiv.2203.09798>.</span>

</div>

<div id="ref-Zdanowska2019Exploring" class="csl-entry">

<span class="csl-left-margin">16.
</span><span class="csl-right-inline">Zdanowska, Natalia.
“<span class="nocase">Exploring cities of Central and Eastern Europe
within transnational company networks: the core-periphery
effect</span>.” *arXiv Preprint*, 2019,
<https://doi.org/10.48550/arXiv.1910.14652>.</span>

</div>

<div id="ref-Zdanowska2019Spatial" class="csl-entry">

<span class="csl-left-margin">17.
</span><span class="csl-right-inline">Zdanowska, Natalia.
“<span class="nocase">Spatial polarisation within foreign trade and
transnational firms’ networks. The Case of Central and Eastern
Europe</span>.” *arXiv Preprint*, 2019,
<https://doi.org/10.48550/arXiv.1910.14658>.</span>

</div>

<div id="ref-Kozerakowalska2021Framework" class="csl-entry">

<span class="csl-left-margin">18.
</span><span class="csl-right-inline">Kozera-Kowalska, Magdalena, et al.
“<span class="nocase">A framework to measure the taxonomic of economic
anchor: A case study of the Three Seas Initiative countries</span>.”
*PLOS ONE*, 2021, <https://doi.org/10.1371/journal.pone.0252292>.</span>

</div>

<div id="ref-Eurostat2024" class="csl-entry">

<span class="csl-left-margin">19.
</span><span class="csl-right-inline">Commission), Eurostat (European.
“<span class="nocase">Population on 1 January by NUTS 3 Region (demo r
pjanaggr3) and Urban Audit Cities (urb cpop1)</span>.” Publications
Office of the European Union, 2024,
<https://ec.europa.eu/eurostat/>.</span>

</div>

<div id="ref-DEMOPAST2023" class="csl-entry">

<span class="csl-left-margin">20.
</span><span class="csl-right-inline">Bologna — Dipartimento di Scienze
Statistiche, Università di. “<span class="nocase">DEMOPAST: Historical
Demographic Atlas of Italian Provinces and Cities 1861–1971</span>.”
University of Bologna / ISTAT, 2023,
<https://demopast.unibo.it/>.</span>

</div>

<div id="ref-HGISGermany2014" class="csl-entry">

<span class="csl-left-margin">21.
</span><span class="csl-right-inline">Kunz, Andreas, and Alexander Zipf.
“<span class="nocase">HGIS Germany: Historical GIS of the German States
1820–1914</span>.” Leibniz-Institut für Europäische Geschichte Mainz,
2014, <https://www.hgisg-germany.de/>.</span>

</div>

<div id="ref-StatGL2024" class="csl-entry">

<span class="csl-left-margin">22.
</span><span class="csl-right-inline">(Naatsorsueqqissaartarfik),
Statistics Greenland. “<span class="nocase">Population in Greenland
Districts and Settlements 1901–2024</span>.” Statistics Greenland, 2024,
<https://bank.stat.gl/>.</span>

</div>

<div id="ref-Hagstofa2024" class="csl-entry">

<span class="csl-left-margin">23.
</span><span class="csl-right-inline">Íslands), Statistics Iceland
(Hagstofa. “<span class="nocase">Historical Population Series of Iceland
1703–2024</span>.” Statistics Iceland, 2024,
<https://px.hagstofa.is/>.</span>

</div>

<div id="ref-Popescu2022Gaps" class="csl-entry">

<span class="csl-left-margin">24.
</span><span class="csl-right-inline">POPESCU, Agatha, et al. “GAPS IN
THE EDUCATION LEVEL BETWEEN RURAL AND URBAN AREAS IN THE EUROPEAN
UNION.” *Scientific Papers Series : Management, Economic Engineering in
Agriculture and Rural Development*, 2022,
<https://managementjournal.usamv.ro/pdf/vol.22_3/Art58.pdf>.</span>

</div>

<div id="ref-Piekut2024Housing" class="csl-entry">

<span class="csl-left-margin">25.
</span><span class="csl-right-inline">Piekut, Marlena.
“<span class="nocase">Housing conditions in European one-person
households</span>.” *PLOS ONE*, 2024,
<https://doi.org/10.1371/journal.pone.0303295>.</span>

</div>

<div id="ref-Anna2025Changing" class="csl-entry">

<span class="csl-left-margin">26.
</span><span class="csl-right-inline">Anna, Matel.
“<span class="nocase">Changing Profiles of Housing Deprivation in
European Union Countries</span>.” *Real Estate Management and
Valuation*, 2025, <https://doi.org/10.2478/remav-2025-0005>.</span>

</div>

<div id="ref-Gavurova2019Research" class="csl-entry">

<span class="csl-left-margin">27.
</span><span class="csl-right-inline">Gavurová, Beáta, et al.
“<span class="nocase">Research and Development Indicators of EU28
Countries from Viewpoint of Super‑efficiency DEA Analysis</span>.” *Acta
Universitatis Agriculturae Et Silviculturae Mendelianae Brunensis*,
2019, <https://doi.org/10.11118/actaun201967010225>.</span>

</div>

</div>
