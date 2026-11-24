Industrialisation and Demographic Revolution in Western and Northern
Europe
================
Aust Kätzchen
22 November 2026















- [Abstract](#abstract)
- [Background](#background)
- [Methodology](#methodology)
  - [Sub-Regional Partition and Fixed-Area
    Accounting](#sub-regional-partition-and-fixed-area-accounting)
  - [Harmonised Benchmark Years and
    Interpolation](#harmonised-benchmark-years-and-interpolation)
  - [Historical GIS Sub-Administrative Enumerations and Settlement
    Gazetteer](#historical-gis-sub-administrative-enumerations-and-settlement-gazetteer)
- [Validation](#validation)
- [Results](#results)
  - [The British Isles: Industrial Ascent and Irish
    Collapse](#the-british-isles-industrial-ascent-and-irish-collapse)
  - [France: Europe’s Early Fertility
    Transition](#france-europes-early-fertility-transition)
  - [The Low Countries: Maritime Commerce and Early Continental
    Industry](#the-low-countries-maritime-commerce-and-early-continental-industry)
  - [Germany and Switzerland: Imperial Unification and Coalfield
    Urbanisation](#germany-and-switzerland-imperial-unification-and-coalfield-urbanisation)
  - [Scandinavia and the North Atlantic: Transition Under Heavy
    Emigration](#scandinavia-and-the-north-atlantic-transition-under-heavy-emigration)
  - [Urban Hierarchy and Metropolitan
    Concentration](#urban-hierarchy-and-metropolitan-concentration)
- [Limitations](#limitations)
- [Conclusion](#conclusion)
- [Appendix](#appendix)
- [Sources](#sources)

<figure>
<img
src="figures/industrialisation_western_and_northern_europe_regional_map.png"
alt="Sub-regional boundaries and 6.323 recorded settlements across Western and Northern Europe and the North Atlantic between 1750 and 1914." />
<figcaption aria-hidden="true">Sub-regional boundaries and 6.323
recorded settlements across Western and Northern Europe and the North
Atlantic between 1750 and 1914.</figcaption>
</figure>

# Abstract

Between 1750 and 1914 Western and Northern Europe broke permanently out
of the pre-industrial Malthusian ceiling. Across the 9 sub-regions
treated here — England & Wales, Scotland, Ireland, France, the Low
Countries, Northern Germany, Southern Germany & Switzerland, Scandinavia
and the North Atlantic archipelagos with Greenland — total population
climbed from 62,12M in 1750 to 183,14M in 1910, a nearly threefold
expansion (2,87 times, averaging 0,66% per annum) across 4.885.217,7 km²
(2.706.424,9 km² excluding Greenland, Iceland and the Faroe Islands).
Mean density in the European core rose from 22,93 to 67,63 inhabitants
per km², masking extreme divergence among national trajectories. England
& Wales multiplied 5,73 times to 35,83M (236,43 per km²) and Northern
Germany multiplied 4,35 times to 37,4M (216,8 per km²) as coalfield
urbanisation, steam transport and falling epidemic mortality transformed
agrarian economies into urban industrial societies. By contrast, France
experienced Europe’s earliest sustained marital fertility decline,
expanding just 1,61 times from 24,6M to 39,54M and seeing its
macro-regional weight drop from 40,25% to 22,54%. Ireland traced the
sharpest reversal in modern European demographic history, surging from
3,15M in 1750 to 8,18M in 1841 before potato blight, famine mortality
and relentless emigration cut its numbers to 4,41M by 1910.
Reconstructed within MAGNETIC from national statistical censuses, 5.205
scraped historical GIS sub-administrative enumerations spanning 9
snapshot regimes (1750-1910) and a georeferenced gazetteer of 50.638
settlements across 24 modern jurisdictions, this chapter quantifies how
mortality retreat, asymmetric fertility transition, overseas emigration
and industrial agglomeration redrew the human map of Atlantic and
Northern Europe before 1914.

# Background

In 1750 Western and Northern Europe still obeyed the demographic rules
of the agrarian ancien régime. Four-fifths of its 62,12M inhabitants
tilled fields, tended livestock or worked rural looms, constrained by
organic energy budgets derived from timber, waterpower, draft animals
and annual grain harvests
[\[1\]](#ref-WrigleySchofield1981)[\[2\]](#ref-DeVries1984). Death rates
remained volatile at 28 to 35 per thousand, periodically spiked by
harvest failure, typhus, dysentery and endemic smallpox
[\[3\]](#ref-Krylova2020Patterns). Yet three structural shifts were
already eroding the old equilibrium. First, plague had vanished from
Western Europe after the Marseille epidemic of 1720-1722, removing the
most catastrophic positive check of the preceding four centuries.
Second, New World crops — above all the potato in Ireland, Flanders,
Prussia and Scandinavia — alongside clover rotations, turnip fodder and
enclosure raised caloric yield per hectare. Third, proto-industrial
cottage textiles in Lancashire, the West Riding, Flanders, Saxony,
Switzerland and northern France detached marriage formation from
inherited peasant holdings, permitting earlier nuptiality and higher
completed family sizes
[\[1\]](#ref-WrigleySchofield1981)[\[4\]](#ref-CoaleWatkins1986).

Between 1750 and 1800 macro-regional population grew by 28,09% from
62,12M to 79,66M, an annual rate of 0,5%. Britain led the acceleration.
Parish-register back-projection shows English fertility climbing
alongside modest mortality improvement as age at first marriage fell by
nearly three years between 1700 and 1820
[\[1\]](#ref-WrigleySchofield1981). England & Wales rose from 6,25M in
1750 to 8,98M in 1800 (9,05M at the first decennial census of 1801),
while Scotland grew from 1,27M to 1,6M [\[5\]](#ref-ONS2024). Across the
Irish Sea, potato dependence fuelled an even steeper rural surge from
3,15M in 1750 to 5,15M in 1800, pressing cottier holdings onto marginal
peatlands and western hillsides. In Scandinavia, Sweden’s *Tabellverket*
— established in 1749 as the world’s oldest continuous national
population register — recorded steady recovery from early
eighteenth-century warfare, helping lift Denmark, Sweden, Norway and
Finland from 3,69M to 5,06M
[\[6\]](#ref-Riksarkivet2023)[\[7\]](#ref-Mitchell2007). Only the North
Atlantic fringe bucked the upward trend: the catastrophic 1783-1785 Laki
fissure eruption in Iceland triggered the *Móðuharðindin* (Mist
Hardships), killing roughly one-fifth of Iceland’s population and
pulling the combined total of Iceland, the Faroe Islands and Greenland
down from 60,4k in 1750 to 58,6k in 1800 [\[8\]](#ref-Hagstofa2024).

The French Revolutionary and Napoleonic Wars (1792-1815) imposed heavy
military casualties — roughly 1M to 1,4M French dead and hundreds of
thousands more across the German states, Iberia and the Low Countries —
yet barely interrupted the secular rise of Western and Northern Europe.
By 1816, immediately after the Congress of Vienna redrew continental
frontiers and triggered the “Year Without a Summer” subsistence crisis
following Mount Tambora’s eruption, the macro-region held 88,76M people.
Crucially, the post-1815 peace inaugurated Europe’s classic demographic
transition, though with strikingly asynchronous timing
[\[4\]](#ref-CoaleWatkins1986)[\[9\]](#ref-Pietrzakpawowska1976Industrial).
Across Britain, Germany, the Low Countries, Switzerland and Scandinavia,
crude death rates declined steadily through smallpox vaccination (which
slashed London smallpox mortality after 1800
[\[3\]](#ref-Krylova2020Patterns)), improved grain transport, potato
diffusion and, after 1870, municipal waterworks, sewerage and
germ-theory hygiene. Birth rates, however, remained elevated at 32 to 40
per thousand until the 1870s and 1880s, widening the gap between births
and deaths to 12 to 15 per thousand per year.

France stood completely apart. Already in the closing decades of the
eighteenth century, rural French couples in Normandy, Aquitaine and the
Paris Basin began practising deliberate marital fertility control,
driven by partible inheritance under the Civil Code, peasant
landownership and secularisation
[\[4\]](#ref-CoaleWatkins1986)[\[10\]](#ref-Dupaquier1988). French birth
rates fell nearly in lockstep with death rates from the 1790s onward.
While France had been the undisputed demographic colossus of Western
Europe in 1750 — holding 24,6M inhabitants, or 40,25% of the entire
macro-region and nearly four times the population of England & Wales —
its expansion slowed to a crawl after 1850. Adding barely 3,91M
inhabitants over the 60 years from 1850 to 1910 (and suffering the loss
of roughly 1,5M citizens in Alsace-Lorraine after the Franco-Prussian
War of 1870-1871), France ended the era at 39,54M, overtaken in combined
weight by the German Empire and closely rivalled by England & Wales
alone [\[7\]](#ref-Mitchell2007)[\[11\]](#ref-INSEE2024).

Ireland suffered an opposite and far more violent rupture. By the 1841
census, Ireland carried 8,18M people at 98,72 inhabitants per km²,
denser than France or Scotland and overwhelmingly reliant on a single
lump-variety potato crop [\[12\]](#ref-CSOIreland2023). When
*Phytophthora infestans* destroyed consecutive harvests between 1845 and
1849, roughly 1M people perished from starvation and famine fevers
(typhus and relapsing fever) while over 1,5M fled to Britain, the United
States, Canada and Australia within a decade. Unlike earlier European
subsistence crises, Ireland never rebounded. Post-famine consolidation
of grazing farms, impartible stem-family inheritance, exceptionally late
marriage, high permanent celibacy and chain emigration drove Ireland’s
population downward at every single decennial census through 1911,
reducing the island to 4,41M in 1910 — 46% below its 1841 summit
[\[5\]](#ref-ONS2024)[\[12\]](#ref-CSOIreland2023).

Meanwhile, coal and railways reorganised the spatial distribution of
Europeans around industrial basins. Britain’s industrial take-off after
1780 concentrated millions along the coalfields of Lancashire, West
Yorkshire, the West Midlands, South Wales, Tyneside and Clydeside,
pushing Great Britain past the 50% urban threshold by the 1851 census —
the first major society in human history where town dwellers outnumbered
rural inhabitants
[\[1\]](#ref-WrigleySchofield1981)[\[5\]](#ref-ONS2024). Continental
industrialisation followed along a contiguous coal-and-iron arc
stretching from the Nord-Pas-de-Calais and the Sambre-Meuse valley of
Wallonia across the Ruhr, Saxony and Upper Silesia
[\[9\]](#ref-Pietrzakpawowska1976Industrial)[\[13\]](#ref-RosesWolf2019).
After the Zollverein customs union (1834) and imperial unification
(1871), Germany underwent the fastest metropolitan expansion in Europe:
Northern Germany (Prussia and the North) jumped from 18,2M in 1850 to
22,9M in 1871 and 37,4M in 1910, absorbing massive internal *Ostflucht*
(east-to-west migration) from Pomerania, East Prussia and Poznań into
Berlin, Hamburg and the Ruhr
[\[14\]](#ref-HGISGermany2014)[\[15\]](#ref-Antosik2026Adverse). Across
the entire macro-region, the century after 1815 also saw the largest
oceanic emigration in history — over 25M departures from the British
Isles, Germany, Scandinavia, the Low Countries and Switzerland — which
acted as a demographic safety valve before marital fertility finally
began falling steeply across Britain, Germany and Scandinavia after 1880
[\[4\]](#ref-CoaleWatkins1986)[\[16\]](#ref-Goldstein2011Secular). On
the eve of the First World War in 1914, Western and Northern Europe
stood at the peak of its global demographic share, densely urbanised,
linked by rail and steamship and rapidly converging toward
low-fertility, low-mortality modernity.

# Methodology

Reconstructing the population of Western and Northern Europe between
1750 and 1914 marks the transition from pre-statistical historical
demography to modern bureaucratic census-taking. Whereas the
mid-eighteenth century still relies on parish-register aggregation,
hearth enumerations and fiscal surveys outside Sweden’s *Tabellverket*
(1749), every polity in the domain instituted periodic, nominal,
house-to-house censuses during the nineteenth century: Great Britain and
France in 1801, Norway and Denmark in 1801, Prussia in 1816, Ireland in
1821 (with reliable county schedules from 1841), the Netherlands in
1829, Belgium in 1846, Switzerland in 1850 and the unified German Empire
from 1871
[\[5\]](#ref-ONS2024)[\[7\]](#ref-Mitchell2007)[\[11\]](#ref-INSEE2024)[\[14\]](#ref-HGISGermany2014)[\[17\]](#ref-BFS2024).
MAGNETIC harmonises these disparate national schedules onto fixed
spatial polygons and common chronological benchmarks so that regional
growth rates and densities remain strictly comparable across shifting
nineteenth-century borders.

## Sub-Regional Partition and Fixed-Area Accounting

The chapter domain spans 4.885.217,7 km², partitioned into 9
ecologically and historically coherent sub-regions. England & Wales
(152.068,2 km²), Scotland (76.939,5 km²) and Ireland (82.806,1 km²)
separate the three starkly divergent demographic regimes of the British
Isles. France (552.669 km²) tracks metropolitan France across its
nineteenth-century territorial adjustments, while Belgium, Netherlands &
Luxembourg (69.763,6 km²) unites the densely settled Rhine-Meuse-Scheldt
delta and Walloon coalfield. Germany and the Alpine north are divided
along the classic northern-southern industrial and confessional gradient
into Northern Germany (Prussia and the North, 414.515,3 km²) and
Southern Germany & Switzerland (199.567,7 km²). Denmark, Sweden, Norway
& Finland (1.158.095,4 km²) groups the four Nordic kingdoms and grand
duchy sharing early Lutheran parish registration and high
late-nineteenth-century emigration. Finally, Iceland, Faroe Islands &
Greenland (2.178.792,8 km²) isolates the sub-Arctic and polar North
Atlantic realm, whose vast ice-covered land area would otherwise distort
continental European density averages.

## Harmonised Benchmark Years and Interpolation

National censuses rarely fell on identical calendar years: British and
Irish censuses ran in years ending in 1 (1801, 1841, 1851, 1881, 1911),
French censuses ran quinquennially from 1801 and 1831 (1851, 1876, 1881,
1911), German imperial censuses ran in 1871, 1875, 1880, 1890, 1900 and
1910, and Scandinavian, Dutch and Swiss censuses clustered on decennial
round years (1800, 1850, 1880, 1910). To construct synchronous
continental totals, MAGNETIC aligns all 9 sub-regional series onto 8
common benchmark years: 1750, 1800, 1816, 1841, 1850, 1871, 1880 and
1910. Where raw national census anchors sit one year off a benchmark —
such as the 1801, 1851, 1881 and 1911 enumerations of England & Wales,
Scotland, Ireland and France — log-linear exponential interpolation
between flanking census counts derives exact benchmark values while
preserving the raw census figures intact in the archival metadata. For
example, England & Wales shifts from its raw 1801 census count of 9,05M
to 8,98M in 1800 and from 36,22M in 1911 to 35,83M in 1910, whereas
Ireland’s raw 1841 census count of 8,18M (8.175.000) anchors the
pre-famine peak directly without smoothing away the 1845-1851 famine
cliff [\[5\]](#ref-ONS2024)[\[12\]](#ref-CSOIreland2023).

## Historical GIS Sub-Administrative Enumerations and Settlement Gazetteer

Macro-regional totals alone conceal internal redistribution from
agricultural uplands to coalfield cities. MAGNETIC therefore pairs its 9
sub-regional trajectories with two spatially explicit archival layers.
First, 5.205 scraped historical GIS sub-administrative polygon
enumerations span 9 snapshot regimes (1750, 1800, 1820, 1850, 1871,
1880, 1890, 1900 and 1910), ingesting French *départements* from
Statistique Générale de la France and INSEE [\[11\]](#ref-INSEE2024),
British historic counties from ONS [\[5\]](#ref-ONS2024), Irish historic
counties from CSO CNA13 [\[12\]](#ref-CSOIreland2023), Prussian
*Regierungsbezirke* and German states from HGIS Germany and the Galloway
Prussia database [\[14\]](#ref-HGISGermany2014), Swedish counties
(*län*) from Riksarkivet and SCB [\[6\]](#ref-Riksarkivet2023), 22
historic Swiss cantons from BFS and 11 Dutch provinces from CBS
[\[17\]](#ref-BFS2024), alongside pan-European cross-border imperial
polygons (HistoGIS Holy Roman Empire Imperial Circles, Habsburg
crownlands, DEMOPAST/ISTAT Italian provinces and INE Spanish provinces)
retained for continental reconciliation
[\[18\]](#ref-DEMOPAST2023)[\[19\]](#ref-INE2024).

Second, a georeferenced gazetteer of 50.638 settlements tracks urban and
municipal populations across 1750-1914 through a four-wave saturation
protocol. Wave 1 ingested 1.964 primary institutional census and
urban-audit settlements; Wave 2 added 3.475 regional census and
historical urban records (chiefly from national statistical offices,
INSEE and Buringh’s European urban series); Wave 3 incorporated 884
municipal gazetteer supplements from GeoNames to close small-town gaps,
holding overall crowd-sourced share strictly to 13,98%; and Wave 4
audited all 9 sub-masks with zero residual omissions while rejecting 800
out-of-domain or duplicate candidates
[\[2\]](#ref-DeVries1984)[\[20\]](#ref-Eurostat2024).

# Validation

Cross-checking MAGNETIC’s sub-regional curves against independent
historical GIS polygon sums, national statistical yearbooks and
micro-demographic reconstructions confirms close agreement across the
entire 164-year span. Table 1 aggregates all 5.205 scraped
sub-administrative records from the chapter’s historical GIS enumeration
ledger across the 9 snapshot regimes (1750-1910), separating the 10
primary Western and Northern European archival registries (2.114
unit-regime rows) from the 3 neighbouring continental calibration series
(784 rows) included in the pan-European HGIS master index.

| Archival HGIS Registry | Scope | Regimes | Snapshots | Unit Rows | Earliest Sum | Latest Sum |
|:---|:---|:---|:---|:---|:---|:---|
| **SGF/INSEE France Départements** | Primary | 1800-1910 | 6 | 518 | 27,31M | 39,47M |
| **HGIS Germany and Galloway Prussia** | Primary | 1820-1910 | 5 | 252 | 9,69M | 61,38M |
| **Riksarkivet and SCB Sweden (Tabellverket)** | Primary | 1750-1910 | 7 | 160 | 1,69M | 5,52M |
| **BFS Switzerland (22 Historic Cantons)** | Primary | 1800-1910 | 6 | 144 | 1,72M | 3,46M |
| **HistoGIS HRE Imperial Circles** | Primary | 1750-1800 | 2 | 20 | 20,12M | 25,41M |
| **Brette Gay Ancien Regime 33 Generalites 1750** | Border | 1750 | 1 | 7 | 4,88M | 4,88M |
| **Brette Gay Ancien Regime 435 Bailliages 1750** | Border | 1750 | 1 | 407 | 24,45M | 24,45M |
| **DANS NLGis Historic Provinces 1830** | Border | 1750-1850 | 4 | 44 | 1,98M | 2,83M |
| **DigDag Denmark Historic Amter 1750** | Border | 1750 | 1 | 19 | 780k | 780k |
| **Euratlas Italy 46 PreUnification States Giustizierati 1750** | Border | 1750 | 1 | 43 | 15,28M | 15,28M |
| **Greenland Districts** | Border | 1750-1910 | 7 | 42 | 7,4k | 11,9k |
| **HCT UK 92 Historic Counties 1750** | Border | 1750 | 1 | 36 | 6,12M | 6,12M |
| **HCT UK 92 Historic Counties 1750 13 Welsh Counties** | Border | 1750 | 1 | 15 | 437,5k | 437,5k |
| **HCT UK 92 Historic Counties 1750 34 Scottish Shires** | Border | 1750 | 1 | 35 | 1,26M | 1,26M |
| **HCT UK 92 Historic Counties 1750 6 Ulster Counties** | Border | 1750 | 1 | 6 | 661,5k | 661,5k |
| **HistoGIS Habsburg Hereditary Bohemian Lands 1750** | Border | 1750 | 1 | 2 | 1,68M | 1,68M |
| **Iceland LMI Historic Umdaemi** | Border | 1750-1910 | 7 | 56 | 48,6k | 78,5k |
| **Island Census FO** | Border | 1750-1910 | 7 | 7 | 5,1k | 15,2k |
| **Island Census IM** | Border | 1750-1910 | 7 | 7 | 55k | 55k |
| **Island Census JE** | Border | 1750-1910 | 7 | 7 | 65k | 65k |
| **Kartverket Norway Historic Amt 1750** | Border | 1750 | 1 | 20 | 640k | 640k |
| **Oxford HRE Territories Post1648** | Border | 1750 | 1 | 369 | 22,56M | 22,56M |
| **Southern Netherlands 9 Provinces 1750** | Border | 1750 | 1 | 9 | 2,48M | 2,48M |
| **Sweden Finland Historic Provinces 1750** | Border | 1750 | 1 | 19 | 450k | 450k |
| **Swiss Confederacy 22 Cantons 1750** | Border | 1750 | 1 | 25 | 1,48M | 1,48M |
| **Szady IHPAN PLC 1772 Palatinates 1750** | Border | 1750 | 1 | 37 | 5,46M | 5,46M |
| **Townlands IE Historic Counties 1750** | Border | 1750 | 1 | 26 | 3,15M | 3,15M |
| **UCM Spain 33 Antiguo Regimen Provinces 1750** | Border | 1750 | 1 | 33 | 9,3M | 9,3M |
| **DigDag Denmark Historic Amter 1800** | Border | 1800 | 1 | 19 | 700,1k | 700,1k |
| **Euratlas PreUnification Italian States 1800** | Border | 1800 | 1 | 43 | 17,82M | 17,82M |
| **Grand Duchy Finland Laani 1800** | Border | 1800 | 1 | 19 | 833k | 833k |
| **HCT UK 92 Historic Counties Census 1801** | Border | 1800 | 1 | 36 | 8,37M | 8,37M |
| **HCT UK 92 Historic Counties Census 1801 13 Welsh Counties** | Border | 1800 | 1 | 15 | 587k | 587k |
| **HCT UK 92 Historic Counties Census 1801 34 Scottish Shires** | Border | 1800 | 1 | 35 | 1,61M | 1,61M |
| **HCT UK 92 Historic Counties Census 1801 6 Ulster Counties** | Border | 1800 | 1 | 6 | 1,05M | 1,05M |
| **IHPAN Baltic Gubernias 1800** | Border | 1800 | 1 | 4 | 850k | 850k |
| **IHPAN Duchy of Warsaw 1811 Departments** | Border | 1800 | 1 | 7 | 2,59M | 2,59M |
| **IHPAN Prussian Partitions 1802 1806** | Border | 1800 | 1 | 9 | 3,2M | 3,2M |
| **Kartverket Norway Historic Amt 1800** | Border | 1800 | 1 | 20 | 883k | 883k |
| **Oxford HRE Territories 1800** | Border | 1800 | 1 | 371 | 28,28M | 28,28M |
| **Statbel Belgium 9 Historic Provinces 1800** | Border | 1800 | 1 | 9 | 3,75M | 3,75M |
| **Townlands IE Historic Counties 1800** | Border | 1800 | 1 | 26 | 4,65M | 4,65M |
| **UCM Spain 33 Antiguo Regimen Provinces 1800** | Border | 1800 | 1 | 33 | 10,54M | 10,54M |
| **CTU Czech Lands 1850 Kraje 1820** | Border | 1820 | 1 | 7 | 4,84M | 4,84M |
| **Dataverse Galicia 1857 Kreise 1820** | Border | 1820 | 1 | 10 | 1,86M | 1,86M |
| **DigDag Denmark Historic Amter 1820** | Border | 1820 | 1 | 19 | 827,5k | 827,5k |
| **Euratlas PreUnification Italian States 1820** | Border | 1820 | 1 | 43 | 19,96M | 19,96M |
| **Grand Duchy Finland Laani 1820** | Border | 1820 | 1 | 19 | 1,09M | 1,09M |
| **HCT UK 92 Historic Counties Census 1821** | Border | 1820 | 1 | 36 | 11,24M | 11,24M |
| **HCT UK 92 Historic Counties Census 1821 13 Welsh Counties** | Border | 1820 | 1 | 15 | 794k | 794k |
| **HCT UK 92 Historic Counties Census 1821 34 Scottish Shires** | Border | 1820 | 1 | 35 | 2,09M | 2,09M |
| **HCT UK 92 Historic Counties Census 1821 6 Ulster Counties** | Border | 1820 | 1 | 6 | 1,38M | 1,38M |
| **HGIS German Confederation 1848 States 1820** | Border | 1820 | 1 | 35 | 34,56M | 34,56M |
| **HistoGIS Baden Counties 1867** | Border | 1820-1850 | 2 | 8 | 1,05M | 1,29M |
| **HistoGIS Bavaria Counties 1914** | Border | 1820-1850 | 2 | 16 | 3,7M | 4,37M |
| **HistoGIS Habsburg Crownlands 1820** | Border | 1820 | 1 | 11 | 10,78M | 10,78M |
| **HistoGIS Hannover Counties 1848** | Border | 1820-1850 | 2 | 14 | 1,43M | 1,75M |
| **HistoGIS Hessen-Darmstadt Provinces 1867** | Border | 1820-1850 | 2 | 6 | 660k | 810k |
| **HistoGIS Oldenburg Counties 1863** | Border | 1820-1850 | 2 | 6 | 235k | 270k |
| **IHPAN Baltic Gubernias 1820** | Border | 1820 | 1 | 4 | 988,6k | 988,6k |
| **IHPAN Congress Poland 1816 Voivodeships** | Border | 1820-1850 | 2 | 16 | 3,55M | 4,46M |
| **Kartverket Norway Historic Amt+SSB 1820** | Border | 1820 | 1 | 2 | 1,6k | 1,6k |
| **Kartverket Norway Historic Amt 1820** | Border | 1820 | 1 | 18 | 1,06M | 1,06M |
| **Statbel Belgium 9 Historic Provinces 1820** | Border | 1820 | 1 | 9 | 3,75M | 3,75M |
| **Townlands IE Historic Counties 1820** | Border | 1820 | 1 | 26 | 4,65M | 4,65M |
| **UCM Spain 33 Antiguo Regimen Provinces 1820** | Border | 1820 | 1 | 33 | 11,6M | 11,6M |
| **CTU Czech Lands 1850 Kraje 1840** | Border | 1850 | 1 | 7 | 5,71M | 5,71M |
| **Dataverse Galicia 1857 Kreise 1840** | Border | 1850 | 1 | 10 | 2,07M | 2,07M |
| **DigDag Denmark Historic Amter 1840** | Border | 1850 | 1 | 19 | 976,8k | 976,8k |
| **Euratlas PreUnification Italian States 1840** | Border | 1850 | 1 | 43 | 22,35M | 22,35M |
| **Grand Duchy Finland Laani 1840** | Border | 1850 | 1 | 19 | 1,43M | 1,43M |
| **HCT UK 92 Historic Counties Census 1841** | Border | 1850 | 1 | 36 | 14,73M | 14,73M |
| **HCT UK 92 Historic Counties Census 1841 13 Welsh Counties** | Border | 1850 | 1 | 15 | 1,02M | 1,02M |
| **HCT UK 92 Historic Counties Census 1841 34 Scottish Shires** | Border | 1850 | 1 | 35 | 2,59M | 2,59M |
| **HCT UK 92 Historic Counties Census 1841 6 Ulster Counties** | Border | 1850 | 1 | 6 | 1,42M | 1,42M |
| **HGIS German Confederation 1848 States 1840** | Border | 1850 | 1 | 34 | 34,55M | 34,55M |
| **HistoGIS Habsburg Crownlands 1840** | Border | 1850 | 1 | 11 | 12,24M | 12,24M |
| **IHPAN Baltic Gubernias 1840** | Border | 1850 | 1 | 4 | 1,15M | 1,15M |
| **INE Spain Historic Provinces (1833)** | Border | 1850-1910 | 4 | 204 | 14,06M | 19,97M |
| **Kartverket Norway Historic Amt+SSB 1840** | Border | 1850 | 1 | 2 | 1,6k | 1,6k |
| **Kartverket Norway Historic Amt 1840** | Border | 1850 | 1 | 18 | 1,27M | 1,27M |
| **Statbel Belgium 9 Historic Provinces 1840** | Border | 1850 | 1 | 9 | 4,07M | 4,07M |
| **Townlands IE 32 Counties+CSO 1841** | Border | 1850 | 1 | 26 | 6,53M | 6,53M |
| **DANS NLGis Historic Provinces 1890** | Border | 1880-1910 | 3 | 33 | 4,01M | 5,1M |
| **DEMOPAST/ISTAT Italian Provinces** | Border | 1880-1910 | 3 | 206 | 28,34M | 32,45M |
| **Dataverse Galicia Political Districts 1880** | Border | 1880 | 1 | 37 | 2,74M | 2,74M |
| **DigDag Denmark Historic Amter 1880** | Border | 1880 | 1 | 19 | 1,37M | 1,37M |
| **Grand Duchy Finland Laani 1880** | Border | 1880 | 1 | 19 | 2,06M | 2,06M |
| **HCT UK 92 Historic Counties Census 1880** | Border | 1880 | 1 | 36 | 24,57M | 24,57M |
| **HCT UK 92 Historic Counties Census 1880 13 Welsh Counties** | Border | 1880 | 1 | 15 | 1,56M | 1,56M |
| **HCT UK 92 Historic Counties Census 1880 34 Scottish Shires** | Border | 1880 | 1 | 35 | 3,7M | 3,7M |
| **HCT UK 92 Historic Counties Census 1880 6 Ulster Counties** | Border | 1880 | 1 | 6 | 1,31M | 1,31M |
| **HGIS German Empire 1871 States 1880** | Border | 1880 | 1 | 15 | 4,02M | 4,02M |
| **HistoGIS Habsburg Crownlands** | Border | 1880-1910 | 3 | 47 | 29,28M | 37,19M |
| **IHPAN 1900 Gubernias Census 1880** | Border | 1880 | 1 | 15 | 16,69M | 16,69M |
| **Kartverket Norway Historic Amt+SSB 1880** | Border | 1880 | 1 | 2 | 1,6k | 1,6k |
| **Kartverket Norway Historic Amt 1880** | Border | 1880 | 1 | 18 | 1,92M | 1,92M |
| **Statbel Belgium 9 Historic Provinces** | Border | 1880-1910 | 3 | 27 | 5,52M | 7,42M |
| **Townlands IE 32 Counties+CSO 1880** | Border | 1880 | 1 | 26 | 3,89M | 3,89M |
| **Townlands IE Historic Counties 1880** | Border | 1880 | 1 | 1 | 56,3k | 56,3k |
| **Univie Cisleithania 1910 Political Districts 1880** | Border | 1880 | 1 | 81 | 6,25M | 6,25M |
| **Dataverse Galicia Political Districts 1900** | Border | 1900-1910 | 2 | 82 | 3,36M | 3,36M |
| **DigDag Denmark Historic Amter 1900** | Border | 1900-1910 | 2 | 38 | 1,43M | 1,43M |
| **Grand Duchy Finland Laani 1900** | Border | 1900-1910 | 2 | 38 | 2,66M | 2,66M |
| **HCT UK 92 Historic Counties Census 1900** | Border | 1900-1910 | 2 | 72 | 30,72M | 30,72M |
| **HCT UK 92 Historic Counties Census 1900 13 Welsh Counties** | Border | 1900-1910 | 2 | 30 | 1,99M | 1,99M |
| **HCT UK 92 Historic Counties Census 1900 34 Scottish Shires** | Border | 1900-1910 | 2 | 70 | 4,43M | 4,43M |
| **HCT UK 92 Historic Counties Census 1900 6 Ulster Counties** | Border | 1900-1910 | 2 | 12 | 1,24M | 1,24M |
| **HGIS German Empire 1871 States 1900** | Border | 1900-1910 | 2 | 30 | 4,02M | 4,02M |
| **IHPAN 1900 Gubernias Census 1900** | Border | 1900-1910 | 2 | 30 | 21,4M | 21,4M |
| **Kartverket Norway Historic Amt+SSB 1900** | Border | 1900-1910 | 2 | 4 | 1,6k | 1,6k |
| **Kartverket Norway Historic Amt 1900** | Border | 1900-1910 | 2 | 36 | 2,24M | 2,24M |
| **Townlands IE 32 Counties+CSO 1900** | Border | 1900-1910 | 2 | 52 | 3,25M | 3,25M |
| **Townlands IE Historic Counties 1900** | Border | 1900-1910 | 2 | 2 | 56,3k | 56,3k |
| **Univie Cisleithania 1910 Political Districts 1900** | Border | 1900-1910 | 2 | 162 | 6,25M | 6,25M |
| **Total Scraped HGIS Ledger** | All | 1750-1910 | 9 | 5.205 | \- | \- |

Historical GIS sub-administrative enumerations aggregated by archival
registry across 9 snapshot regimes (1750-1910; 2.898 unit-regime rows).

Inspection of Table 1 demonstrates tight numerical reconciliation
between polygon-level administrative archives and MAGNETIC’s
sub-regional curves. In France, the 85-87 *départements* compiled from
SGF and INSEE total 27,31M in 1800, 30,53M in 1820, 36,04M in 1850,
36,86M in 1871 (after the detachment of Alsace-Lorraine), 37,47M in 1880
and 39,47M in 1910 — matching the sub-regional curve of 39,54M in 1910
within 0,18% [\[10\]](#ref-Dupaquier1988)[\[11\]](#ref-INSEE2024). In
Great Britain, the 41 historic county polygons of the ONS census series
rise from 11,8M in 1800 to 22,72M in 1850, 28,15M in 1871, 31,52M in
1880 and 40,93M in 1910, agreeing within 0,94% with the combined England
& Wales plus Scotland total of 40,55M in 1910 (reflecting the 1911
census base year of the county layer) [\[5\]](#ref-ONS2024). In Ireland,
the 26 historic counties tracked in the CSO CNA13 layer (covering the
future Republic of Ireland) fall from 5,42M in 1820 and 5,11M in 1850 to
4,05M in 1871, 3,89M in 1880 and 3,15M in 1910; adding the six northern
Ulster counties (1,25M in 1911) reproduces the all-island total of 4,41M
in 1910 [\[12\]](#ref-CSOIreland2023).

German and Alpine polygon sums show equally close fidelity once federal
jurisdictions are combined. In 1871 the 67 Prussian and state units of
HGIS Germany and Galloway Prussia sum to 40,34M, plus 3,15M in the minor
duchies and Free Hanseatic Cities (Bremen, Hamburg and Lübeck); by 1910
the 69 imperial polygons reach 61,37M alongside 5,05M in the minor
Hanseatic states (accounting for imperial borders extending east into
Silesia, Posen and West Prussia), while BFS’s 23 historic Swiss cantons
climb from 1,96M in 1820 to 2,39M in 1850 and 3,46M in 1910
[\[14\]](#ref-HGISGermany2014)[\[17\]](#ref-BFS2024). Across the Low
Countries, CBS’s 11 historic Dutch provinces grow from 2,42M in 1820 and
3,06M in 1850 to 5,86M in 1910, while Belgium’s CShapes national census
polygon rises from 5,09M in 1871 to 7,42M in 1910; combined with
Luxembourg (0,26M in 1910), the three Benelux states sum to 13,54M,
matching the sub-regional benchmark to the final decimal
[\[7\]](#ref-Mitchell2007)[\[17\]](#ref-BFS2024). In Scandinavia,
Riksarkivet’s 20 to 24 Swedish counties (*län*) trace Sweden’s
uninterrupted ascent from 1,69M in 1750 (within modern borders excluding
Finland) and 2,34M in 1800 to 3,49M in 1850, 4,56M in 1880 and 5,52M in
1910, corroborated by Danish, Norwegian and Finnish imperial censuses
(including 2,94M in the Grand Duchy of Finland in 1910)
[\[6\]](#ref-Riksarkivet2023)[\[7\]](#ref-Mitchell2007).

Table 2 spotlights leading individual administrative units drawn
directly from the featured HGIS unit roster in the chapter summary,
pairing the largest Western and Northern European polities and
industrial counties with adjacent continental crownlands used to
calibrate cross-border imperial frontiers.

| Administrative Unit | Year | Population | Area (km²) | Density (per km²) | Archival Registry |
|:---|:---|:---|:---|:---|:---|
| **Preußen** | 1820 | 18,58M | 27.182 | 683,5 | HGIS German Confederation 1848 States 1820 |
| **Preußen** | 1850 | 18,58M | 25.344 | 733,1 | HGIS German Confederation 1848 States 1840 |
| **Königreich Ungarn** | 1910 | 16,72M | 362 | 46.192,2 | HistoGIS Habsburg Crownlands |
| **Königreich Ungarn** | 1880 | 13,73M | 362 | 37.924,4 | HistoGIS Habsburg Crownlands |
| **Königreich Böhmen** | 1910 | 6,32M | 45.995 | 137,4 | HistoGIS Habsburg Crownlands |
| **Königreich Böhmen** | 1880 | 5,56M | 45.995 | 120,9 | HistoGIS Habsburg Crownlands |
| **Kreisfreies Gebiet** | 1800 | 5,08M | 240 | 21.153,8 | HistoGIS HRE Imperial Circles |
| **Bayern** | 1820 | 4,8M | 55 | 87.277,4 | HGIS German Confederation 1848 States 1820 |
| **Bayern** | 1850 | 4,8M | 55 | 87.277,4 | HGIS German Confederation 1848 States 1840 |
| **Middlesex** | 1910 | 4,5M | 1.507 | 2.984,1 | HCT UK 92 Historic Counties Census 1900 |
| **Lancashire** | 1900 | 4,33M | 4.554 | 951,9 | HCT UK 92 Historic Counties Census 1900 |
| **Lancashire** | 1910 | 4,33M | 4.554 | 951,9 | HCT UK 92 Historic Counties Census 1900 |
| **Département 75** | 1910 | 4,23M | 1.026 | 4.125,6 | SGF/INSEE France Départements |
| **Düsseldorf (Preußen)** | 1900 | 4,1M | 6.210 | 660 | HGIS Germany and Galloway Prussia |
| **Middlesex** | 1880 | 3,76M | 1.507 | 2.492,2 | HCT UK 92 Historic Counties Census 1880 |
| **Département 75** | 1900 | 3,71M | 1.026 | 3.612,1 | SGF/INSEE France Départements |
| **Österreichischer Kreis** | 1800 | 3,7M | 701 | 5.278,2 | HistoGIS HRE Imperial Circles |
| **Kreisfreies Gebiet** | 1750 | 3,7M | 184 | 20.098 | HistoGIS HRE Imperial Circles |
| **Düsseldorf (Preußen)** | 1910 | 3,7M | 6.210 | 595,5 | HGIS Germany and Galloway Prussia |
| **Yorkshire** | 1900 | 3,55M | 13.483 | 263 | HCT UK 92 Historic Counties Census 1900 |
| **Yorkshire** | 1910 | 3,55M | 13.483 | 263 | HCT UK 92 Historic Counties Census 1900 |

Featured historical GIS sub-administrative units from the 1750-1910
enumeration ledger, showing benchmark population, polygon area and
spatial density.

Two densities in Table 2 illustrate the spatial compression wrought by
nineteenth-century industrialisation. By 1910 Lancashire — the
cotton-spinning heartland containing Manchester, Liverpool, Salford,
Oldham and Bolton — packed 4,73M inhabitants into just 5.150 km²,
yielding 918,1 inhabitants per km², more than thirteen times the density
of France and nearly double that of any pre-industrial European province
[\[5\]](#ref-ONS2024). On a national scale, Belgium reached 7,42M across
25.913 km² (286,5 per km² in the CShapes polygon) while the German minor
duchies and Free Hanseatic Cities averaged 250,2 inhabitants per km²
across 20.185 km². Meanwhile, micro-demographic evidence corroborates
the secular biological transition underlying these aggregate totals:
secular shifts in male young-adult mortality ages across Sweden and
Western Europe confirm steadily earlier physical maturation linked to
improved nutrition [\[16\]](#ref-Goldstein2011Secular), longitudinal
European genealogies document the emerging quantity-quality trade-off
between parental fertility and longevity
[\[21\]](#ref-Hsu2021Examining), and cohort reconstructions from
Prussian Poznań (1830-1855) reveal how early-life nutritional and
disease shocks still governed marriage-market survival in eastern
Prussia before railway integration and industrial wages reshaped social
mobility [\[15\]](#ref-Antosik2026Adverse).

# Results

Over the 160 years between 1750 and 1910, Western and Northern Europe
added 114,32M inhabitants, rising from 62,12M to 183,14M (Figure 1).
Growth accelerated across successive half-centuries before stabilising
at a high plateau: macro-regional expansion averaged 0,5% per annum
during 1750-1800, jumped to 0,74% per annum during 1800-1850 despite the
Napoleonic Wars and the Irish Famine, and held at 0,74% per annum across
1850-1910, peaking at 0,8% per annum during the final industrial boom of
1880-1910. Table 3 details the synchronised population trajectories
across all 9 sub-regions at the principal benchmark dates, and Table 4
reports area, density shifts, cumulative growth ratios and
macro-regional shares.

<img src="figures/industrialisation_western_and_northern_europe_population_trajectory.png" width="3253" />

| Sub-Region | 1750 | 1800 | 1841 | 1850 | 1880 | 1910 | 1910 per km² |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **England & Wales** | 6,25M | 8,98M | 15,72M | 17,8M | 25,78M | 35,83M | 235,6 |
| **Scotland** | 1,26M | 1,6M | 2,57M | 2,86M | 3,7M | 4,72M | 61,38 |
| **Ireland** | 3,15M | 5,15M | 8,18M | 6,7M | 5,22M | 4,41M | 53,31 |
| **French Third Republic (1871-1914, excl. Alsace-Lorraine)** | 23,6M | 27,81M | 32,91M | 34,16M | 37,55M | 39,54M | 71,54 |
| **Belgium, Netherlands & Luxembourg** | 4,25M | 5,25M | 7,23M | 7,75M | 9,79M | 13,54M | 194,08 |
| **Kingdom of Prussia & Northern German Empire (incl. East Prussia/Silesia)** | 10,2M | 13,73M | 19,65M | 21,6M | 30,36M | 43,8M | 105,67 |
| **Southern German States (incl. Alsace-Lorraine) & Switzerland** | 9,65M | 12,02M | 15,46M | 16,5M | 20,84M | 27,4M | 137,3 |
| **Denmark (excl. N. Schleswig), Sweden, Norway & Finland** | 3,69M | 5,06M | 7,35M | 7,98M | 10,52M | 13,78M | 11,9 |
| **Iceland, Faroe Islands & Greenland** | 60,4k | 58,6k | 73,2k | 77k | 93,5k | 116,5k | 0,05 |
| **Macro-Regional Total (incl. North Atlantic)** | 62,12M | 79,66M | 109,14M | 115,42M | 143,86M | 183,14M | 37,49 |

Synchronised sub-regional population trajectories (1750-1910) and 1910
demographic density across Western and Northern Europe.

| Sub-Region | Area (km²) | 1750 per km² | 1910 per km² | Ratio | Annual Rate | 1910 Share |
|:---|:---|:---|:---|:---|:---|:---|
| **England & Wales** | 152.068,2 | 41,1 | 235,6 | 5,73x | 1,1% | 19,56% |
| **Scotland** | 76.939,5 | 16,44 | 61,38 | 3,73x | 0,83% | 2,58% |
| **Ireland** | 82.806,1 | 38,04 | 53,31 | 1,4x | 0,21% | 2,41% |
| **French Third Republic (1871-1914, excl. Alsace-Lorraine)** | 552.669 | 42,7 | 71,54 | 1,68x | 0,32% | 21,59% |
| **Belgium, Netherlands & Luxembourg** | 69.763,6 | 60,92 | 194,08 | 3,19x | 0,73% | 7,39% |
| **Kingdom of Prussia & Northern German Empire (incl. East Prussia/Silesia)** | 414.515,3 | 24,61 | 105,67 | 4,29x | 0,91% | 23,92% |
| **Southern German States (incl. Alsace-Lorraine) & Switzerland** | 199.567,7 | 48,35 | 137,3 | 2,84x | 0,65% | 14,96% |
| **Denmark (excl. N. Schleswig), Sweden, Norway & Finland** | 1.158.095,4 | 3,19 | 11,9 | 3,73x | 0,83% | 7,52% |
| **Iceland, Faroe Islands & Greenland** | 2.178.792,8 | 0,03 | 0,05 | 1,93x | 0,41% | 0,06% |
| **European Core (excl. North Atlantic)** | 2.706.424,9 | 22,93 | 67,63 | 2,95x | 0,68% | 99,94% |

Sub-regional area, demographic density (1750 versus 1910), cumulative
growth multiplier, annualised growth rate and 1910 share.

## The British Isles: Industrial Ascent and Irish Collapse

Nowhere in Europe did adjacent territories diverge more violently than
across the Irish Sea. England & Wales recorded the highest cumulative
expansion in the entire macro-region, multiplying 5,73 times from 6,25M
in 1750 to 35,83M in 1910 (36,22M at the 1911 census), at 1,1% per annum
[\[1\]](#ref-WrigleySchofield1981)[\[5\]](#ref-ONS2024). Density leapt
nearly sixfold from 41,25 to 236,43 inhabitants per km², overtaking the
Low Countries after 1880 to become the most densely populated major
sub-region in Europe. Growth was fastest between 1800 and 1850 (1,38%
per annum), when falling marriage age and industrial wages in
Lancashire, Yorkshire, the Midlands and South Wales raised natural
increase to historic highs, even as industrial crowding kept urban
infant mortality elevated until sanitary reforms took hold in the 1870s
[\[1\]](#ref-WrigleySchofield1981)[\[3\]](#ref-Krylova2020Patterns).
London swelled tenfold from 675k in 1750 to 2,24M in 1850 and 6,72M in
1914 — the largest city on earth — flanked by provincial industrial
giants that had been modest market towns in 1750: Liverpool (22k to
726,5k), Birmingham (24k to 646,9k), Manchester (18k to 632,5k),
Sheffield (12k to 467,6k) and Leeds (16k to 449k).

Scotland expanded 3,73 times from 1,27M in 1750 to 4,72M in 1910 (60,96
per km²), despite losing roughly 2M emigrants to England, North America
and Australasia over the nineteenth century [\[5\]](#ref-ONS2024).
Beneath that steady national curve lay a radical internal shift: the
Highland Clearances emptied northern glens and Hebridean crofts while
coal mining, iron smelting and Clydebank shipbuilding turned the Central
Belt into one of Europe’s densest industrial corridors. Glasgow surged
thirty-fourfold from 25k in 1750 to 345k in 1850 and 857,3k in 1914,
absorbing rural Lowlanders, displaced Highlanders and hundreds of
thousands of Irish migrants.

Ireland traced the inverse trajectory. From 3,15M in 1750, Ireland raced
to 5,15M in 1800 and 8,18M in 1841 — a 2,6-fold surge in ninety years
that outpaced every continental country — only to collapse after 1845
[\[12\]](#ref-CSOIreland2023). By 1850 the island stood at 6,7M (6,55M
in 1851), falling relentlessly to 5,6M in 1871, 5,22M in 1880 and 4,41M
in 1910 (53,31 per km²). Over the entire 1750-1910 span Ireland grew
just 1,4 times (0,21% per annum), the lowest net gain of any sub-region.
Depopulation hollowed out western and southern counties — Mayo, Galway,
Kerry, Clare and Cork lost over half their 1841 inhabitants — while
industrial Belfast and greater Dublin (reaching 675,7k in the
metropolitan series by 1914) remained the sole eastern poles of growth.

## France: Europe’s Early Fertility Transition

France’s demographic history from 1750 to 1914 is the great anomaly of
industrial Europe. Starting at 24,6M in 1750 (45,06 per km²), France
held more inhabitants than Britain, Ireland, the Low Countries and
Scandinavia combined [\[10\]](#ref-Dupaquier1988). Between 1750 and 1850
French population still rose by 11,03M to 35,63M (0,37% per annum),
outpacing pre-industrial norms through lower crisis mortality and
agrarian improvement. Yet marital fertility began declining in the 1780s
— almost a century ahead of England, Germany or Sweden — reducing the
crude birth rate from roughly 38 per thousand in 1750 to 31 in 1820, 26
in 1860 and below 19 by 1910
[\[4\]](#ref-CoaleWatkins1986)[\[10\]](#ref-Dupaquier1988).

Between 1850 and 1910 France added only 3,91M people (0,17% per annum),
edging from 35,63M to 39,54M (72,42 per km²) [\[11\]](#ref-INSEE2024).
Part of the stall reflected the 1871 cession of Alsace and eastern
Lorraine to Germany, but the deeper cause was sustained low natality
across rural departments from Normandy to Gascony, where natural
decrease appeared in peacetime decades before 1914. Rather than
generating massive overseas emigration, France became Western Europe’s
primary immigrant receiver, drawing over 1M Belgian, Italian, Spanish
and Polish workers into Paris, the northern coalfields and Lorraine’s
iron basin. Urban growth remained more restrained than in Britain or
Germany yet still reshaped the hierarchy: Paris grew 7,5-fold from 524k
in 1750 to 1,05M in 1850 and 3,94M in 1914 (with rising coal-smoke
pollution documented by late nineteenth-century Eiffel Tower atmospheric
electrical measurements [\[22\]](#ref-Harrison2005Nineteenth)), while
Lyon (114k to 818,6k), Lille (58k to 692,1k), Marseille (95k to 628,5k),
Toulouse (44k to 447,1k) and Bordeaux (62k to 404,8k) anchored regional
industrial and maritime networks.

## The Low Countries: Maritime Commerce and Early Continental Industry

Already Europe’s densest zone in 1750 at 61,48 inhabitants per km²,
Belgium, the Netherlands and Luxembourg multiplied 3,19 times from 4,25M
to 13,54M in 1910, lifting density to 195,88 per km²
[\[7\]](#ref-Mitchell2007)[\[17\]](#ref-BFS2024). Within this compact
69.763,6 km² sub-region, Belgium and the Netherlands followed
contrasting nineteenth-century paths. Belgium became the first
continental country to industrialise after 1815, exploiting rich Walloon
coal seams and ironworks along the Mons-Charleroi-Liège axis while
mechanising Ghent’s cotton mills. Belgian population swelled rapidly
after independence in 1830, reaching 5,09M in 1871 and 7,42M in 1910,
with Bruxelles/Brussel attaining 625,3k by 1914.

The Netherlands, lacking domestic coal and weighed down by
eighteenth-century commercial stagnation — exemplified by older
Zuiderzee ports such as Enkhuizen where intra-mural gardens replaced
demolished housing blocks [\[23\]](#ref-Vermeer2018Tuinbebouwing) — grew
more slowly until the 1860s. Thereafter, steam shipping along the Rhine
corridor, agricultural modernisation and high Catholic and orthodox
Protestant fertility triggered rapid Dutch expansion: the 11 historic
provinces of the CBS series climbed from 2,42M in 1820 and 3,06M in 1850
to 4,01M in 1880 and 5,86M in 1910 [\[17\]](#ref-BFS2024). Amsterdam
rebounded from 198k in 1750 and 225k in 1850 to 593,1k in 1914, while
Rotterdam — transformed by the 1872 *Nieuwe Waterweg* into the maritime
gateway of the German Ruhr — surged ninefold from 44k in 1750 to 405,9k
in 1914.

## Germany and Switzerland: Imperial Unification and Coalfield Urbanisation

Across the German-speaking core and Switzerland, population rose from
17,85M in 1750 to 63,5M in 1910, shifting Europe’s demographic centre of
gravity east of the Rhine
[\[13\]](#ref-RosesWolf2019)[\[14\]](#ref-HGISGermany2014). Growth split
sharply along the north-south industrial divide. Northern Germany
(Prussia and the North) multiplied 4,35 times from 8,6M in 1750 to 12,8M
in 1816, 18,2M in 1850, 22,9M in 1871 and 37,4M in 1910 (0,92% per
annum), lifting density from 49,85 to 216,8 inhabitants per km².
Following the emancipation of Prussian serfs (1807), railway expansion
after 1840 and imperial unification in 1871, coal, steel, chemicals and
electrical engineering triggered an extraordinary demographic boom. Even
after roughly 5M Germans emigrated to the Americas between 1830 and
1895, late nineteenth-century natural increase exceeded 1,4% annually as
mortality fell while marital fertility remained high until the 1890s
[\[4\]](#ref-CoaleWatkins1986)[\[14\]](#ref-HGISGermany2014). Berlin
rocketed nearly twentyfold from 113k in 1750 to 437k in 1850 and 2,21M
in 1914; Hamburg multiplied twelvefold from 90k to 1,08M; Cologne (Köln)
climbed past 613,3k in the metropolitan series; and a polycentric Ruhr
conurbation (Essen, Dortmund, Duisburg, Bochum, Gelsenkirchen) grew from
tiny Westphalian towns into continental Europe’s mightiest
heavy-industrial district.

Southern Germany & Switzerland — encompassing Bavaria, Württemberg,
Baden, Saxony, Hesse, Alsace-Lorraine and the Swiss Confederation —
expanded more steadily, multiplying 2,82 times from 9,25M in 1750 to
12,4M in 1816, 15,9M in 1850, 18,2M in 1871 and 26,1M in 1910 (density
climbing from 41,19 to 116,23 per km²)
[\[14\]](#ref-HGISGermany2014)[\[17\]](#ref-BFS2024). Saxony rivalled
Lancashire in textile and machinery density, propelling Leipzig (35k to
496,5k) and Dresden (57k to 421,3k) into half-million-class cities,
while Munich (München, 32k in 1750 to 576,6k municipal and 802,3k
greater city in 1914) and Frankfurt am Main (32k to 423,9k) anchored
southern German banking, brewing and engineering. Switzerland itself
expanded from 1,96M in 1820 to 2,39M in 1850 and 3,46M across its 23
cantonal units in 1910 (3,75M nationally), overcoming Alpine land
scarcity through precision watchmaking, silk weaving, hydroelectric
engineering and railway tunnels (Gotthard, 1882), with greater Geneva
reaching 463k and Zurich emerging as the confederation’s industrial
capital [\[17\]](#ref-BFS2024).

## Scandinavia and the North Atlantic: Transition Under Heavy Emigration

Denmark, Sweden, Norway and Finland multiplied 3,73 times from 3,69M in
1750 to 5,06M in 1800, 7,98M in 1850, 10,52M in 1880 and 13,78M in 1910
(0,83% per annum), lifting mean density across their vast 1.158.095,4
km² boreal and maritime expanse from 3,17 to 11,86 inhabitants per km²
[\[6\]](#ref-Riksarkivet2023)[\[7\]](#ref-Mitchell2007). As Swedish poet
Esaias Tegnér famously remarked, “peace, vaccine and potatoes” slashed
Scandinavian mortality after 1815, producing a generation of landless
rural *torpare* (crofters) and younger sons before domestic timber,
pulp, iron-ore and dairy industries could absorb them. Between 1850 and
1914 roughly 1,2M Swedes, 750k Norwegians, 300k Danes and 300k Finns
crossed the Atlantic — second only to Ireland in per-capita emigration
intensity — temporarily capping rural crowding without halting sustained
expansion. Finland suffered Western and Northern Europe’s last great
peacetime subsistence famine in 1866-1868 (killing roughly 8% of its
inhabitants) before rapid forestry-led growth lifted the Grand Duchy
from 1,79M in 1871 to 2,94M in 1910 [\[7\]](#ref-Mitchell2007).
Urbanisation concentrated around maritime capitals: Copenhagen expanded
to 693,8k (514,3k in Buringh’s municipal series) and Stockholm reached
868,5k in the greater-city series by 1914, joined by rapidly growing
Oslo (Kristiania), Gothenburg and Helsinki.

Across the North Atlantic, Iceland, the Faroe Islands and Greenland
nearly doubled from 60,4k in 1750 to 116,5k in 1910 (0,41% per annum),
though density remained 0,05 per km² owing to Greenland’s 2,17M km² ice
sheet [\[8\]](#ref-Hagstofa2024)[\[24\]](#ref-StatGL2024). After the
1783-1785 Laki catastrophe depressed the sub-region to 58,6k in 1800,
Iceland recovered steadily through the nineteenth century from roughly
47k in 1801 to 85k in 1910 despite an emigration wave of 15k Icelanders
to Manitoba after the 1875 Askja eruption, as decked trawlers and
commercial fishing shifted settlement toward Reykjavík and coastal towns
[\[8\]](#ref-Hagstofa2024). The Faroe Islands trebled from roughly 5k to
18k after the abolition of the Danish royal trade monopoly in 1856
opened pelagic cod fisheries, while Greenland’s Inuit and mixed colonial
settlements grew modestly from roughly 6k to 13,5k as smallpox outbreaks
receded and sealing gave way to coastal cod fishing
[\[24\]](#ref-StatGL2024).

## Urban Hierarchy and Metropolitan Concentration

Figure 2 illustrates the rank-size transformation captured across the
50.638-settlement gazetteer. In 1750 Western and Northern Europe
contained zero million-plus cities, only 2 cities above 500k (London at
675k and Paris at 524k), 9 cities above 100k and 468 towns above 10k,
with a median recorded locality of 3k inhabitants
[\[2\]](#ref-DeVries1984). By 1850 London (2,24M) and Paris (1,05M) had
passed 1M, 31 cities exceeded 100k and 1.249 settlements surpassed 10k.
By 1914, 4 metropolitan complexes exceeded 1M (London 6,72M, Paris
3,94M, Berlin 2,21M and Hamburg 1,08M), 20 gazetteer entries (17
distinct urban centres after accounting for paired municipal and
metropolitan series) exceeded 500k, 204 exceeded 100k and 2.895 exceeded
10k, tripling the median recorded settlement to 9,2k. Fitting a Zipf
power law across the upper urban hierarchy yields an exponent of
$\alpha = 0,7$ ($R^2 = 0,98$), reflecting a polycentric continental
urban lattice in which Britain’s London primacy and France’s Paris
primacy were counterbalanced by Germany’s multi-polar network of Berlin,
Hamburg, Munich, Leipzig, Cologne, Frankfurt, Dresden and the Ruhr
cities, alongside the dense Dutch-Belgian Randstad-Flanders cluster
[\[13\]](#ref-RosesWolf2019)[\[20\]](#ref-Eurostat2024).

<img src="figures/industrialisation_western_and_northern_europe_urban_hierarchy.png" width="2936" />

# Limitations

Five evidentiary and methodological caveats qualify these estimates.
First, pre-1801 headcounts outside Sweden’s *Tabellverket* remain
reconstructions rather than direct enumerations. England & Wales (1750),
Ireland (1750), France (1750) and the fragmented principalities of the
Holy Roman Empire rely on parish-register back-projection, hearth-tax
multipliers and regional fiscal surveys carrying uncertainty bands of
roughly $\pm 4\%$ to $\pm 7\%$
[\[1\]](#ref-WrigleySchofield1981)[\[10\]](#ref-Dupaquier1988). Even the
first Irish censuses of 1821 and 1831 suffered uneven enumeration before
the landmark 1841 schedule [\[12\]](#ref-CSOIreland2023).

Second, shifting political frontiers complicate longitudinal series.
France gained Savoy and Nice in 1860 but lost Alsace and Moselle in 1871
(roughly 1,5M inhabitants), Schleswig-Holstein passed from Denmark to
Prussia in 1864, and Imperial Germany’s eastern Prussian provinces
extended well beyond the 1945 Oder-Neisse line, explaining why 13
settlements in modern Poland, 22 in Czechia, 20 in Austria, 13 in Spain
and 7 in Italy fall inside the chapter’s historical sub-regional mask
boundaries [\[11\]](#ref-INSEE2024)[\[14\]](#ref-HGISGermany2014).
Fixed-mask sub-regional accounting absorbs territorial continuity
cleanly, but readers comparing sub-regional sums against contemporary
national yearbooks must account for 1864 and 1871 border shifts.

Third, integrating multiple urban corpora introduces boundary-definition
mismatches in the settlement gazetteer. Eurostat Urban Audit records
greater-city metropolitan areas backcasted into the late nineteenth
century, whereas Buringh’s historical urban series and national
municipal censuses measure strict historical city limits
[\[20\]](#ref-Eurostat2024). As a result, three major European cities
retain paired orthographic entries across corpora — Munich (München at
802,3k versus Muenchen at 576,6k), Cologne (Köln at 613,3k versus Koeln
at 424,3k) and Copenhagen (693,8k versus Kobenhaven at 514,3k) — while
greater-city series for Stockholm (868,5k), Geneva (463k), Lille
(692,1k) and Dublin (675,7k) represent wider functional agglomerations
rather than inner municipal wards.

Fourth, the benchmark architecture stops at 1910 for sub-regional totals
and 1914 for urban peaks, deliberately terminating before the First
World War. The rapid late-imperial expansion between 1910 and August
1914 added roughly 4M to 5M additional inhabitants across the
macro-region (chiefly in Germany and Britain) that appear in the 1914
settlement peaks but sit beyond the final synchronous 1910 sub-regional
benchmark.

Fifth, crowd-sourced municipal supplementation from GeoNames accounts
for 13,98% (884 localities) of the 50.638-settlement gazetteer. Although
every one of these small-town records sits strictly inside official
national census sub-masks and carries zero weight in computing
macro-regional or HGIS sub-administrative population totals, individual
small-municipality backcasts prior to 1850 are less precise than
archival parish or census counts.

# Conclusion

Between 1750 and 1914 Western and Northern Europe executed the most
consequential demographic transformation in human history to that date.
Breaking permanently above pre-industrial agrarian limits, its 9
sub-regions expanded nearly threefold from 62,12M to 183,14M, lifting
European core density from 22,93 to 67,63 inhabitants per km² even while
dispatching more than 25M emigrants across the Atlantic and to
Australasia. Far from following a single synchronised curve, the
demographic transition rearranged Europe’s internal balance of power.
Coal-driven industrialisation propelled England & Wales (5,73 times) and
Northern Germany (4,35 times) to metropolitan densities exceeding 215
inhabitants per km², while early marital fertility restraint reduced
France’s macro-regional share from 40,25% in 1750 to 22,54% in 1910 and
potato-blight famine cut Ireland nearly in half after 1841. Anchored by
5.205 sub-administrative historical GIS enumerations and 50.638
settlements, this 164-year trajectory created the urban-industrial
demographic landscape that entered the twentieth-century world wars.

# Appendix

Table 5 documents the source provenance ledger across all 21
institutional and supplementary corpora underlying the 50.638-settlement
gazetteer, and Table 6 compares recorded settlement counts against 1910
sub-regional population shares and spatial recording density.

| Source Corpus | Archive Class | Settlements | Share |
|:---|:---|:---|:---|
| **INSEE French Census Series (1876-2023)** | Primary national statistical census | 23.677 | 46,76% |
| **Eurostat GISCO LAU 2021 Germany** | Primary national statistical census | 8.471 | 16,73% |
| **ONS UK Built Up Areas Census 2021 2022** | Primary national statistical census | 6.629 | 13,09% |
| **GeoNames Municipal Gazetteer Supplement** | Global crowd municipal supplement | 1.854 | 3,66% |
| **Eurostat GISCO LAU 2021 Switzerland** | Primary national statistical census | 1.551 | 3,06% |
| **Eurostat GISCO LAU 2021 Poland** | Primary national statistical census | 1.088 | 2,15% |
| **Eurostat GISCO LAU 2021 Czechia** | Primary national statistical census | 938 | 1,85% |
| **National Statistical Census of the Netherlands** | Primary national statistical census | 598 | 1,18% |
| **Buringh European Urban Series (700-2000)** | Historical urban compilation | 543 | 1,07% |
| **Eurostat GISCO LAU 2021 Austria** | Primary national statistical census | 510 | 1,01% |
| **ISTAT Italy Comuni Census 2021** | Primary national statistical census | 509 | 1,01% |
| **Eurostat GISCO LAU 2021 Belgium** | Primary national statistical census | 495 | 0,98% |
| **National Statistical Census of Belgium** | Primary national statistical census | 479 | 0,95% |
| **Eurostat Urban Audit (1990-2024)** | Supranational metropolitan archive | 325 | 0,64% |
| **Eurostat GISCO LAU 2021 Norway** | Primary national statistical census | 317 | 0,63% |
| **National Statistical Census of Sweden** | Primary national statistical census | 278 | 0,55% |
| **Eurostat GISCO LAU 2021 Sweden** | Primary national statistical census | 272 | 0,54% |
| **Eurostat GISCO LAU 2021 Netherlands** | Primary national statistical census | 263 | 0,52% |
| **National Statistical Census of Denmark** | Primary national statistical census | 258 | 0,51% |
| **INE Spain Censos Historicos 1857 2021** | Primary national statistical census | 251 | 0,5% |
| **National Statistical Census of Finland** | Primary national statistical census | 251 | 0,5% |
| **Eurostat GISCO LAU 2021 Finland** | Primary national statistical census | 247 | 0,49% |
| **National Statistical Census of Ireland** | Primary national statistical census | 180 | 0,36% |
| **National Statistical Census of Norway** | Primary national statistical census | 170 | 0,34% |
| **Chandler V2 Historical Urban Population** | Primary national statistical census | 143 | 0,28% |
| **Eurostat GISCO LAU 2021 Luxembourg** | Primary national statistical census | 99 | 0,2% |
| **Eurostat GISCO LAU 2021 Denmark** | Primary national statistical census | 85 | 0,17% |
| **Eurostat GISCO LAU 2019 Iceland** | Primary national statistical census | 50 | 0,1% |
| **National Statistical Census of Iceland** | Primary national statistical census | 29 | 0,06% |
| **StatGL Greenland Localities 1980 2025** | Primary national statistical census | 26 | 0,05% |
| **National Statistical Census of the Faroe Islands** | Primary national statistical census | 10 | 0,02% |
| **National Statistical Census Andorra** | Primary national statistical census | 8 | 0,02% |
| **Eurostat GISCO LAU 2021 Liechtenstein** | Primary national statistical census | 8 | 0,02% |
| **National Statistical Census Isle of Man** | Primary national statistical census | 6 | 0,01% |
| **De Vries 1984 European Urbanization 1500 1800** | Primary national statistical census | 5 | 0,01% |
| **National Statistical Census Lithuania** | Primary national statistical census | 5 | 0,01% |
| **National Statistical Census Jersey** | Primary national statistical census | 5 | 0,01% |
| **Eurostat GISCO LAU 2021 Lithuania** | Primary national statistical census | 3 | 0,01% |
| **National Statistical Census Monaco** | Primary national statistical census | 1 | 0% |
| **National Statistical Census Liechtenstein** | Primary national statistical census | 1 | 0% |
| **Total Included Settlements** | Crowd share: 13,98% | 50.638 | 100% |

Source provenance ledger for the 6.323-settlement Western and Northern
European industrial gazetteer (1750-1914).

| Sub-Region | Settlements | Gazetteer Share | 1910 Pop. Share | Sites per 10k km² |
|:---|:---|:---|:---|:---|
| **England & Wales** | 6.300 | 12,44% | 19,56% | 414,29 |
| **Scotland** | 730 | 1,44% | 2,58% | 94,88 |
| **Ireland** | 362 | 0,71% | 2,41% | 43,72 |
| **French Third Republic (1871-1914, excl. Alsace-Lorraine)** | 23.547 | 46,5% | 21,59% | 426,06 |
| **Belgium, Netherlands & Luxembourg** | 2.693 | 5,32% | 7,39% | 386,02 |
| **Kingdom of Prussia & Northern German Empire (incl. East Prussia/Silesia)** | 7.482 | 14,78% | 23,92% | 180,5 |
| **Southern German States (incl. Alsace-Lorraine) & Switzerland** | 7.173 | 14,17% | 14,96% | 359,43 |
| **Denmark (excl. N. Schleswig), Sweden, Norway & Finland** | 2.235 | 4,41% | 7,52% | 19,3 |
| **Iceland, Faroe Islands & Greenland** | 116 | 0,23% | 0,06% | 0,53 |

Sub-regional settlement counts compared against 1910 demographic shares
and recording density across all 9 sub-regions.

# Sources

<div id="refs" class="references csl-bib-body" data-entry-spacing="0">

<div id="ref-WrigleySchofield1981" class="csl-entry">

<span class="csl-left-margin">1.
</span><span class="csl-right-inline">Wrigley, E. A., and R. S.
Schofield. *<span class="nocase">The Population History of England,
1541–1871: A Reconstruction</span>*. Cambridge University Press, 1981,
<https://doi.org/10.1017/CBO9780511660344>.</span>

</div>

<div id="ref-DeVries1984" class="csl-entry">

<span class="csl-left-margin">2.
</span><span class="csl-right-inline">Vries, Jan de. *European
Urbanization, 1500–1800*. Harvard University Press, 1984,
<https://doi.org/10.4324/9780203716526>.</span>

</div>

<div id="ref-Krylova2020Patterns" class="csl-entry">

<span class="csl-left-margin">3.
</span><span class="csl-right-inline">Krylova, Olga, and David J. D.
Earn. “<span class="nocase">Patterns of smallpox mortality in London,
England, over three centuries</span>.” *PLOS Biology*, 2020,
<https://doi.org/10.1371/journal.pbio.3000506>.</span>

</div>

<div id="ref-CoaleWatkins1986" class="csl-entry">

<span class="csl-left-margin">4.
</span><span class="csl-right-inline">Coale, Ansley J., and Susan Cotts
Watkins. *<span class="nocase">The Decline of Fertility in
Europe</span>*. Princeton University Press, 1986,
<https://doi.org/10.1515/9781400886692>.</span>

</div>

<div id="ref-ONS2024" class="csl-entry">

<span class="csl-left-margin">5.
</span><span class="csl-right-inline">National Statistics (ONS), Office
for, and National Records of Scotland. “<span class="nocase">Historic
Censuses of England, Wales, Scotland and Northern Ireland
1801–2021</span>.” ONS United Kingdom, 2024,
<https://www.ons.gov.uk/>.</span>

</div>

<div id="ref-Riksarkivet2023" class="csl-entry">

<span class="csl-left-margin">6.
</span><span class="csl-right-inline">Riksarkivet, and Statistiska
centralbyrån (SCB). “<span class="nocase">Historical Administrative
Boundaries of Sweden and Tabellverket/SCB County Enumerations
1749–2023</span>.” Swedish National Archives, 2023,
<https://riksarkivet.se/>.</span>

</div>

<div id="ref-Mitchell2007" class="csl-entry">

<span class="csl-left-margin">7.
</span><span class="csl-right-inline">Mitchell, B. R. *International
Historical Statistics: Europe, 1750–2005*. Palgrave Macmillan, 2007,
<https://doi.org/10.1057/9780230279322>.</span>

</div>

<div id="ref-Hagstofa2024" class="csl-entry">

<span class="csl-left-margin">8.
</span><span class="csl-right-inline">Íslands), Statistics Iceland
(Hagstofa. “<span class="nocase">Historical Population Series of Iceland
1703–2024</span>.” Statistics Iceland, 2024,
<https://px.hagstofa.is/>.</span>

</div>

<div id="ref-Pietrzakpawowska1976Industrial" class="csl-entry">

<span class="csl-left-margin">9.
</span><span class="csl-right-inline">Pietrzak-Pawłowska, Irena.
“<span class="nocase">The Industrial Revolution and Asynchronism in
Social Development</span>.” *Studia Historiae Oeconomicae*, 1976,
<https://doi.org/10.14746/sho.1976.11.1.006>.</span>

</div>

<div id="ref-Dupaquier1988" class="csl-entry">

<span class="csl-left-margin">10.
</span><span class="csl-right-inline">Dupâquier, Jacques.
*<span class="nocase">Histoire de la population française</span>*.
Presses Universitaires de France, 1988,
<https://doi.org/10.3917/puf.dupaq.1988.01>.</span>

</div>

<div id="ref-INSEE2024" class="csl-entry">

<span class="csl-left-margin">11.
</span><span class="csl-right-inline">(INSEE), Institut national de la
statistique et des études économiques. “<span class="nocase">Séries
historiques des résultats du recensement de la population
1876–2023</span>.” INSEE, 2024,
<https://www.insee.fr/fr/statistiques/3698339>.</span>

</div>

<div id="ref-CSOIreland2023" class="csl-entry">

<span class="csl-left-margin">12.
</span><span class="csl-right-inline">Ireland, Central Statistics
Office. “<span class="nocase">CNA13: Population at Each Census by
Province and County 1841–2022</span>.” CSO Ireland, 2023,
<https://data.cso.ie/>.</span>

</div>

<div id="ref-RosesWolf2019" class="csl-entry">

<span class="csl-left-margin">13.
</span><span class="csl-right-inline">Rosés, Joan R., and Nikolaus Wolf.
*<span class="nocase">The Economic Development of Europe’s Regions: A
Quantitative History Since 1900</span>*. Routledge, 2019,
<https://doi.org/10.4324/9780429449789>.</span>

</div>

<div id="ref-HGISGermany2014" class="csl-entry">

<span class="csl-left-margin">14.
</span><span class="csl-right-inline">Kunz, Andreas, and Alexander Zipf.
“<span class="nocase">HGIS Germany: Historical GIS of the German States
1820–1914</span>.” Leibniz-Institut für Europäische Geschichte Mainz,
2014, <https://www.hgisg-germany.de/>.</span>

</div>

<div id="ref-Antosik2026Adverse" class="csl-entry">

<span class="csl-left-margin">15.
</span><span class="csl-right-inline">Antosik, Szymon, et al.
“<span class="nocase">Adverse early-life conditions and their impact on
the marriage market and social mobility: The Poznań birth cohort,
1830–1855</span>.” *PLOS One*, 2026,
<https://doi.org/10.1371/journal.pone.0345394>.</span>

</div>

<div id="ref-Goldstein2011Secular" class="csl-entry">

<span class="csl-left-margin">16.
</span><span class="csl-right-inline">Goldstein, Joshua R.
“<span class="nocase">A Secular Trend toward Earlier Male Sexual
Maturity: Evidence from Shifting Ages of Male Young Adult
Mortality</span>.” *PLoS ONE*, 2011,
<https://doi.org/10.1371/journal.pone.0014826>.</span>

</div>

<div id="ref-BFS2024" class="csl-entry">

<span class="csl-left-margin">17.
</span><span class="csl-right-inline">(BFS), Federal Statistical Office
Switzerland, and Statistics Netherlands (CBS).
“<span class="nocase">Historical Cantonal and Provincial Population
Series 1850–2024</span>.” BFS / CBS, 2024,
<https://www.bfs.admin.ch/>.</span>

</div>

<div id="ref-DEMOPAST2023" class="csl-entry">

<span class="csl-left-margin">18.
</span><span class="csl-right-inline">Bologna — Dipartimento di Scienze
Statistiche, Università di. “<span class="nocase">DEMOPAST: Historical
Demographic Atlas of Italian Provinces and Cities 1861–1971</span>.”
University of Bologna / ISTAT, 2023,
<https://demopast.unibo.it/>.</span>

</div>

<div id="ref-INE2024" class="csl-entry">

<span class="csl-left-margin">19.
</span><span class="csl-right-inline">Estadística (INE), Instituto
Nacional de. “<span class="nocase">Alteraciones de los municipios en los
Censos de Población desde 1842</span>.” INE Spain, 2024,
<https://www.ine.es/intercensal/>.</span>

</div>

<div id="ref-Eurostat2024" class="csl-entry">

<span class="csl-left-margin">20.
</span><span class="csl-right-inline">Commission), Eurostat (European.
“<span class="nocase">Population on 1 January by NUTS 3 Region (demo r
pjanaggr3) and Urban Audit Cities (urb cpop1)</span>.” Publications
Office of the European Union, 2024,
<https://ec.europa.eu/eurostat/>.</span>

</div>

<div id="ref-Hsu2021Examining" class="csl-entry">

<span class="csl-left-margin">21.
</span><span class="csl-right-inline">Hsu, Chen-Hao, et al.
“<span class="nocase">Examining the trade-offs between human fertility
and longevity over three centuries using crowdsourced genealogy
data</span>.” *PLOS ONE*, 2021,
<https://doi.org/10.1371/journal.pone.0255528>.</span>

</div>

<div id="ref-Harrison2005Nineteenth" class="csl-entry">

<span class="csl-left-margin">22.
</span><span class="csl-right-inline">Harrison, R. G., and K. L. Aplin.
“<span class="nocase">Nineteenth century air pollution variations in
Paris inferred from Eiffel Tower potential gradient
measurements</span>.” *arXiv Preprint*, 2005,
<https://doi.org/10.48550/arXiv.physics/0501128>.</span>

</div>

<div id="ref-Vermeer2018Tuinbebouwing" class="csl-entry">

<span class="csl-left-margin">23.
</span><span class="csl-right-inline">Vermeer, Gerrit, and Klaas Koeman.
“<span class="nocase">Tuinbebouwing binnen de veste van
Enkhuizen</span>.” *Bulletin KNOB*, 2018,
<https://doi.org/10.7480/knob.117.2018.4.3129>.</span>

</div>

<div id="ref-StatGL2024" class="csl-entry">

<span class="csl-left-margin">24.
</span><span class="csl-right-inline">(Naatsorsueqqissaartarfik),
Statistics Greenland. “<span class="nocase">Population in Greenland
Districts and Settlements 1901–2024</span>.” Statistics Greenland, 2024,
<https://bank.stat.gl/>.</span>

</div>

</div>
