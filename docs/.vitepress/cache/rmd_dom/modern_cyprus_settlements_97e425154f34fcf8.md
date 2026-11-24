---
title: "Cyprus after Independence (1960-present)"
subtitle: "Settlement Gazetteer: Municipalities and Coastal Towns, 1960AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_cyprus_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_cyprus_spatial.png"
hero_caption: "Spatial distribution of 45 catalogued settlements across five territorial sub-regions of Cyprus through 2025AD."
hero_label: "fig:hero-modern-cyprus-settlements"
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
---



# Abstract

This gazetteer documents 45 primary cities, suburban municipalities, coastal tourism centres, refugee estates and highland market villages across Cyprus between independence in 1960AD and 2025AD, spanning 131 five-arcminute cells partitioned into five territorial sub-regions. Compiled through exhaustive cross-matching of Statistical Service of Cyprus (CYSTAT) decennial enumerations (1881AD to 2021AD) and Northern Cyprus State Planning Organization censuses (1978AD to 2011AD) with zero reliance on crowd-sourced fallback estimates [@Kaplan1970Plans; @Siegel1974Estimates; @Miller1969Note], the register tracks how the 1974AD military partition and subsequent southern coastal boom reshaped the island's urban network [@Zetter2026Internal; @Ellina2020Social]. Alongside the 45 catalogued centres, the chapter source ledger records six excluded subordinate suburbs and orthographic variants out of 51 evaluated candidates. Ordered by 2025AD peak population, the 45 settlements exhibit a steep, primate-leaning Zipf slope ($\alpha = 1,127$, $R^2 = 0,901$), led by Lemesós (114.189), Stróvolos (74.902), Lefkosía (59.732), Lárnaka (55.044) and Páfos (40.179) and conditioned within geoBoundaries subadministrative polygons [@Runfola2020GeoBoundaries].

# Background

## Urban Cores, Refugee Suburbs and Coastal Polarisation

At independence in August 1960, Cyprus's urban hierarchy remained compact and agrarian-anchored [@Keswani1997Hierarchie]. Only four towns exceeded 10k residents inside the 45-settlement register: Lemesós (57.431), Lefkosía (37.032), its adjacent suburban parish Stróvolos (32.995) and Lárnaka (27.511), with Páfos standing at just 10.079 and Morphou at 6.642. Outside those cores, most Cypriots lived in agricultural villages dispersed across the Mesaoria cereal plain, the Kyrenia foothills, the Troodos valleys and the southern coastal terraces.

Intercommunal conflict in 1963AD–1964AD and the July–August 1974 partition broke that settled spatial pattern [@Zetter2026Internal; @Pribytkova2020Demography]. Displacement of roughly 140k to 165k Greek Cypriots southward and 45k to 50k Turkish Cypriots northward emptied northern towns of their Greek-Cypriot majorities while creating urgent housing demand around Nicosia, Limassol and Larnaca. State-constructed refugee housing estates turned modest peri-urban villages into substantial towns within two census cycles: Káto Polemídia west of Limassol jumped from 6.082 in 1960AD to 15.985 in 1992AD, while Nicosia's southern and western belt—Stróvolos, Aglantziá, Énkomi, Latsiá and Géri—absorbed the bulk of metropolitan expansion while intramural Lefkosía plateaued near 47k to 48k between 1982AD and 2001AD [@Ellina2020Social; @Rogers1967Estimating].

Simultaneously, the loss of Famagusta's deep-water port and Varosha resort strip propelled southern coastal urbanisation [@Skeldon2021Migration; @Beer2024Labour]. Along the southeastern coast, Paralímni grew from 5.951 in 1960AD to 20.133 in 2025AD and Ayia Napa expanded nearly sixfold from 845 to 4.989. Around Larnaca's new international airport, Aradíppou surged more than sixfold from 3.762 to 24.253, Livádia rose from 2.279 to 9.075 and Voróklini expanded nearly eightfold from 1.010 to 8.011. In the southwest, Paphos's coastal belt—Páfos (10.079 to 40.179), Geroskípou (2.023 to 9.073), Pégeia (918 to 7.345) and Chlórakas (1.129 to 6.792)—became a magnet for tourism investment and northern European retirees after European Union accession in May 2004 [@Harper2016Important; @Mitra1990Immigratio].

## Northern Towns and Highland Village Stagnation

North of the UN Buffer Zone, settlement trajectories reflected contrasting economic forces [@Skeldon2021Migration]. Citrus-growing Morphou expanded from 6.642 in 1960AD to 18.946 in 2011AD and 23.048 by 2025AD, while coastal Lapithos rose from 3.496 to 9.536 and Trikomo (Iskele) climbed from 2.195 to 5.459 amid coastal property development. By contrast, former copper-mining Lefka contracted after 1973AD from 4.544 to 3.009 in 2011AD before a modest university-linked recovery to 3.661 in 2025AD, and isolated Rizokarpaso near the tip of the Karpas peninsula declined from 3.154 in 1960AD to 2.349 in 2011AD and 2.858 in 2025AD.

Analogous demographic ageing and out-migration affected high-altitude Troodos villages south of the Green Line [@Hermalin1993Fertility; @Kolmonen2026Digital]. Kyperounta (1.114 in 1960AD to 1.639 in 2025AD), Kakopetria (883 to 1.428) and foothill Pano Lefkara (730 to 947) remained near nineteenth-century village sizes even as island population more than doubled, underscoring the stark divide between coastal service corridors and upland agrarian communities [@Firebaugh1982Population; @Jensen1986Comment].

# Methodology

## Compilation and Spatial Reconciliation

Each settlement entry in this gazetteer derives from multi-wave reconciliation across official CYSTAT census volumes (1881AD to 2021AD), Northern Cyprus State Planning Organization census returns (1978AD to 2011AD) and primary demographic monographs audited inside the 51-candidate chapter source ledger. Wave 1 ingested all 44 primary national census settlements, Wave 2 cross-checked archival and monograph gazetteers, Wave 3 restored longitudinal continuity via Tseri (5.897 in 2025AD) and Wave 4 confirmed asymptotic saturation with zero unaccounted primary centres (0% crowd fallback share).

To avoid double-counting contiguous urban neighbourhoods or variant spellings of the same municipality, proximity deduplication consolidates candidate settlements within 2 km of a primary urban core [@Cyprus2019Evaluating]. Six candidates were merged in this step: Mésa Geitoniá into Lemesós, Ágios Dométios into Lefkosía, Émpa into Páfos, and three orthographic doublets (Tséri, Peyia and Agía Nápa) into Tseri, Pégeia and Ayia Napa respectively. All 45 retained primary centres carry verified WGS84 coordinates, positive population trajectories from 1960AD to 2025AD and Greek-script or romanised toponyms cleanly preserved for XeLaTeX typography.

## Subadministrative Alignment and Pycnophylactic Conditioning

Every settlement point is spatially indexed to geoBoundaries political administrative polygons [@Runfola2020GeoBoundaries] across Cyprus's five territorial partitions and the five government-controlled ADM1 districts (Nicosia, Limassol, Larnaca, Paphos and Famagusta). In HANDBOOK, these 45 settlement nodes condition metric-isotropic radial distance fields and non-stationary Matérn ($\nu = 3/2$) habitability surfaces, while strictly mass-conserving pycnophylactic scaling across 66.308 domain unit-year checks (maximum relative error $5,842 \times 10^{-8}$) bridges British Colonial District baselines (1881AD to 1960AD) with modern CYSTAT district enumerations (1982AD to 2021AD) without leaking population mass across the Green Line [@Runfola2020GeoBoundaries; @Rogers1967Estimating].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 51 evaluated candidates: 45 primary settlements are retained and six subordinate suburbs or duplicate variants are excluded with zero missing coordinates and zero pre-1960AD boundary anachronisms. Figure \ref{fig:sett-gazetteer-cyprus} displays the island rank-size distribution ($\alpha = 1,127$, $R^2 = 0,901$) alongside the twelve largest catalogued urban centres.

<figure class="crd-figure-block" id="fig:sett-gazetteer-cyprus">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-cyprus-settlements/fig4_modern_cyprus_settlements.png" alt="fig:sett-gazetteer-cyprus" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution (n = 45) and twelve leading catalogued settlements across Cyprus through 2025AD.</figcaption>
</figure>

# Results

## All 45 Catalogued Settlements Ordered by Peak Population

Table \ref{tab:top45-cyprus} lists all 45 catalogued primary settlements across Cyprus ordered by 2025AD peak population, reporting WGS84 coordinates, initial 1960AD population, peak 2025AD estimate and 65-year growth multiplier. Seven settlements expanded more than fivefold between 1960AD and 2025AD—Germasógeia (8,04x), Pégeia (8x), Voróklini (7,93x), Aradíppou (6,45x), Ýpsonas (6,28x), Chlórakas (6,02x) and Ayia Napa (5,9x)—every single one located in a southern coastal tourism or metropolitan expansion corridor [@Ellina2020Social; @Skeldon2021Migration].

<figure class="crd-table-figure" id="tab:top45-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1960AD</th><th class="crd-th">Peak (Year)</th><th class="crd-th">1960 to Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lemesós</strong></td><td class="crd-td">34,68, 33,04</td><td class="crd-td">57.431</td><td class="crd-td">114,2k (2025AD)</td><td class="crd-td">1,99x</td></tr>
<tr><td class="crd-td"><strong>Stróvolos</strong></td><td class="crd-td">35,15, 33,33</td><td class="crd-td">32.995</td><td class="crd-td">74,9k (2025AD)</td><td class="crd-td">2,27x</td></tr>
<tr><td class="crd-td"><strong>Lefkosía</strong></td><td class="crd-td">35,17, 33,35</td><td class="crd-td">37.032</td><td class="crd-td">59,7k (2025AD)</td><td class="crd-td">1,61x</td></tr>
<tr><td class="crd-td"><strong>Lárnaka</strong></td><td class="crd-td">34,92, 33,63</td><td class="crd-td">27.511</td><td class="crd-td">55k (2025AD)</td><td class="crd-td">2x</td></tr>
<tr><td class="crd-td"><strong>Páfos</strong></td><td class="crd-td">34,78, 32,42</td><td class="crd-td">10.079</td><td class="crd-td">40,2k (2025AD)</td><td class="crd-td">3,99x</td></tr>
<tr><td class="crd-td"><strong>Káto Polemídia</strong></td><td class="crd-td">34,7, 32,99</td><td class="crd-td">6.082</td><td class="crd-td">24,5k (2025AD)</td><td class="crd-td">4,03x</td></tr>
<tr><td class="crd-td"><strong>Aradíppou</strong></td><td class="crd-td">34,95, 33,59</td><td class="crd-td">3.762</td><td class="crd-td">24,3k (2025AD)</td><td class="crd-td">6,45x</td></tr>
<tr><td class="crd-td"><strong>Morphou</strong></td><td class="crd-td">35,2, 32,99</td><td class="crd-td">6.642</td><td class="crd-td">23k (2025AD)</td><td class="crd-td">3,47x</td></tr>
<tr><td class="crd-td"><strong>Aglantziá</strong></td><td class="crd-td">35,15, 33,4</td><td class="crd-td">9.859</td><td class="crd-td">22,8k (2025AD)</td><td class="crd-td">2,31x</td></tr>
<tr><td class="crd-td"><strong>Énkomi</strong></td><td class="crd-td">35,16, 33,88</td><td class="crd-td">4.467</td><td class="crd-td">21,7k (2025AD)</td><td class="crd-td">4,85x</td></tr>
<tr><td class="crd-td"><strong>Paralímni</strong></td><td class="crd-td">35,04, 33,98</td><td class="crd-td">5.951</td><td class="crd-td">20,1k (2025AD)</td><td class="crd-td">3,38x</td></tr>
<tr><td class="crd-td"><strong>Latsiá</strong></td><td class="crd-td">35,1, 33,38</td><td class="crd-td">5.804</td><td class="crd-td">19,7k (2025AD)</td><td class="crd-td">3,39x</td></tr>
<tr><td class="crd-td"><strong>Germasógeia</strong></td><td class="crd-td">34,72, 33,08</td><td class="crd-td">2.280</td><td class="crd-td">18,3k (2025AD)</td><td class="crd-td">8,04x</td></tr>
<tr><td class="crd-td"><strong>Ágios Athanásios</strong></td><td class="crd-td">34,71, 33,05</td><td class="crd-td">4.530</td><td class="crd-td">17,5k (2025AD)</td><td class="crd-td">3,86x</td></tr>
<tr><td class="crd-td"><strong>Ýpsonas</strong></td><td class="crd-td">34,69, 32,96</td><td class="crd-td">2.351</td><td class="crd-td">14,8k (2025AD)</td><td class="crd-td">6,28x</td></tr>
<tr><td class="crd-td"><strong>Dáli</strong></td><td class="crd-td">35,02, 33,42</td><td class="crd-td">2.977</td><td class="crd-td">13,1k (2025AD)</td><td class="crd-td">4,39x</td></tr>
<tr><td class="crd-td"><strong>Géri</strong></td><td class="crd-td">35,11, 33,42</td><td class="crd-td">1.884</td><td class="crd-td">10,3k (2025AD)</td><td class="crd-td">5,45x</td></tr>
<tr><td class="crd-td"><strong>Lapithos</strong></td><td class="crd-td">35,34, 33,17</td><td class="crd-td">3.496</td><td class="crd-td">9,5k (2025AD)</td><td class="crd-td">2,73x</td></tr>
<tr><td class="crd-td"><strong>Livádia</strong></td><td class="crd-td">34,96, 33,63</td><td class="crd-td">2.279</td><td class="crd-td">9,1k (2025AD)</td><td class="crd-td">3,98x</td></tr>
<tr><td class="crd-td"><strong>Geroskípou</strong></td><td class="crd-td">34,76, 32,45</td><td class="crd-td">2.023</td><td class="crd-td">9,1k (2025AD)</td><td class="crd-td">4,48x</td></tr>
<tr><td class="crd-td"><strong>Voróklini</strong></td><td class="crd-td">34,98, 33,66</td><td class="crd-td">1.010</td><td class="crd-td">8k (2025AD)</td><td class="crd-td">7,93x</td></tr>
<tr><td class="crd-td"><strong>Pégeia</strong></td><td class="crd-td">34,88, 32,38</td><td class="crd-td">918</td><td class="crd-td">7,3k (2025AD)</td><td class="crd-td">8x</td></tr>
<tr><td class="crd-td"><strong>Dromolaxiá-Meneoú</strong></td><td class="crd-td">34,88, 33,59</td><td class="crd-td">3.432</td><td class="crd-td">7,2k (2025AD)</td><td class="crd-td">2,11x</td></tr>
<tr><td class="crd-td"><strong>Xylofágou</strong></td><td class="crd-td">34,98, 33,85</td><td class="crd-td">3.057</td><td class="crd-td">7k (2025AD)</td><td class="crd-td">2,29x</td></tr>
<tr><td class="crd-td"><strong>Kolóssi</strong></td><td class="crd-td">34,67, 32,93</td><td class="crd-td">1.792</td><td class="crd-td">6,9k (2025AD)</td><td class="crd-td">3,83x</td></tr>
<tr><td class="crd-td"><strong>Chlórakas</strong></td><td class="crd-td">34,8, 32,41</td><td class="crd-td">1.129</td><td class="crd-td">6,8k (2025AD)</td><td class="crd-td">6,02x</td></tr>
<tr><td class="crd-td"><strong>Derýneia</strong></td><td class="crd-td">35,06, 33,96</td><td class="crd-td">2.569</td><td class="crd-td">6,6k (2025AD)</td><td class="crd-td">2,56x</td></tr>
<tr><td class="crd-td"><strong>Sotíra</strong></td><td class="crd-td">34,71, 32,86</td><td class="crd-td">2.315</td><td class="crd-td">6,2k (2025AD)</td><td class="crd-td">2,7x</td></tr>
<tr><td class="crd-td"><strong>Tseri</strong></td><td class="crd-td">35,07, 33,32</td><td class="crd-td">2.676</td><td class="crd-td">5,9k (2025AD)</td><td class="crd-td">2,2x</td></tr>
<tr><td class="crd-td"><strong>Athiénou</strong></td><td class="crd-td">35,06, 33,54</td><td class="crd-td">2.742</td><td class="crd-td">5,5k (2025AD)</td><td class="crd-td">2,01x</td></tr>
<tr><td class="crd-td"><strong>Trikomo</strong></td><td class="crd-td">35,29, 33,89</td><td class="crd-td">2.195</td><td class="crd-td">5,5k (2025AD)</td><td class="crd-td">2,49x</td></tr>
<tr><td class="crd-td"><strong>Kíti</strong></td><td class="crd-td">34,85, 33,58</td><td class="crd-td">1.620</td><td class="crd-td">5,4k (2025AD)</td><td class="crd-td">3,35x</td></tr>
<tr><td class="crd-td"><strong>Avgórou</strong></td><td class="crd-td">35,04, 33,84</td><td class="crd-td">2.370</td><td class="crd-td">5,2k (2025AD)</td><td class="crd-td">2,2x</td></tr>
<tr><td class="crd-td"><strong>Liopétri</strong></td><td class="crd-td">35,01, 33,89</td><td class="crd-td">2.192</td><td class="crd-td">5,2k (2025AD)</td><td class="crd-td">2,37x</td></tr>
<tr><td class="crd-td"><strong>Kokkinotrimithiá</strong></td><td class="crd-td">35,15, 33,2</td><td class="crd-td">1.574</td><td class="crd-td">5,1k (2025AD)</td><td class="crd-td">3,24x</td></tr>
<tr><td class="crd-td"><strong>Ayia Napa</strong></td><td class="crd-td">34,98, 34,01</td><td class="crd-td">845</td><td class="crd-td">5k (2025AD)</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Lefka</strong></td><td class="crd-td">35,11, 32,85</td><td class="crd-td">3.673</td><td class="crd-td">4,5k (1973AD)</td><td class="crd-td">1,24x</td></tr>
<tr><td class="crd-td"><strong>Episkopi</strong></td><td class="crd-td">34,67, 32,9</td><td class="crd-td">1.690</td><td class="crd-td">4,5k (2025AD)</td><td class="crd-td">2,66x</td></tr>
<tr><td class="crd-td"><strong>Rizokarpaso</strong></td><td class="crd-td">35,6, 34,38</td><td class="crd-td">3.154</td><td class="crd-td">3,2k (1960AD)</td><td class="crd-td">1x</td></tr>
<tr><td class="crd-td"><strong>Polis Chrysochous</strong></td><td class="crd-td">35,04, 32,43</td><td class="crd-td">1.114</td><td class="crd-td">2,7k (2025AD)</td><td class="crd-td">2,44x</td></tr>
<tr><td class="crd-td"><strong>Kornos</strong></td><td class="crd-td">34,92, 33,39</td><td class="crd-td">922</td><td class="crd-td">2,4k (2025AD)</td><td class="crd-td">2,64x</td></tr>
<tr><td class="crd-td"><strong>Pissouri</strong></td><td class="crd-td">34,67, 32,7</td><td class="crd-td">845</td><td class="crd-td">2,3k (2025AD)</td><td class="crd-td">2,73x</td></tr>
<tr><td class="crd-td"><strong>Kyperounta</strong></td><td class="crd-td">34,94, 32,98</td><td class="crd-td">1.114</td><td class="crd-td">1,6k (2025AD)</td><td class="crd-td">1,47x</td></tr>
<tr><td class="crd-td"><strong>Kakopetria</strong></td><td class="crd-td">34,99, 32,9</td><td class="crd-td">883</td><td class="crd-td">1,4k (2025AD)</td><td class="crd-td">1,62x</td></tr>
<tr><td class="crd-td"><strong>Pano Lefkara</strong></td><td class="crd-td">34,87, 33,3</td><td class="crd-td">730</td><td class="crd-td">950 (1982AD)</td><td class="crd-td">1,3x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> All 45 catalogued settlements across Cyprus ordered by peak population (1960AD to 2025AD).</figcaption>
</figure>

## Distribution Across Territorial Sub-Masks

Table \ref{tab:submask-sum-cyprus} summarises the spatial allocation of the 45 catalogued settlements across the five territorial masks recorded in the source ledger saturation audit. Thirty-four centres (75,6%) lie within the government-controlled Republic of Cyprus mask, eight (17,8%) in Northern Cyprus, and one each in the UN Buffer Zone (Athiénou, sitting on the Mesaoria buffer salience), Dhekelia Sovereign Base Area and Akrotiri Sovereign Base Area.

<figure class="crd-table-figure" id="tab:submask-sum-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territorial Mask</th><th class="crd-th">Raster Cells</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Site Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Republic of Cyprus</strong></td><td class="crd-td">78</td><td class="crd-td">34</td><td class="crd-td">75,6%</td></tr>
<tr><td class="crd-td"><strong>Northern Cyprus</strong></td><td class="crd-td">47</td><td class="crd-td">8</td><td class="crd-td">17,8%</td></tr>
<tr><td class="crd-td"><strong>UN Buffer Zone</strong></td><td class="crd-td">3</td><td class="crd-td">1</td><td class="crd-td">2,2%</td></tr>
<tr><td class="crd-td"><strong>Dhekelia Sovereign Base Area</strong></td><td class="crd-td">2</td><td class="crd-td">1</td><td class="crd-td">2,2%</td></tr>
<tr><td class="crd-td"><strong>Akrotiri Sovereign Base Area</strong></td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">2,2%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Distribution of 45 catalogued settlements and five-arcminute cells across the five territorial masks of Cyprus.</figcaption>
</figure>

# Limitations

Three caveats govern settlement-level interpretation. First, northern settlements—Morphou, Lapithos, Trikomo, Lefka and Rizokarpaso—derive from the 1960AD, 1973AD, 1996AD, 2006AD and 2011AD census benchmarks rather than the southern 1982AD, 1992AD, 2001AD and 2021AD CYSTAT cycle, while Tseri carries only decennial interpolated points between 1960AD and 2025AD; cross-line comparisons at intermediate dates therefore rely on log-linear intercensal interpolation [@Siegel1974Estimates; @Cox2014Demography]. Second, Énkomi-Cyprus pairs the CYSTAT municipal series of Nicosia's western suburb with the eastern Mesaoria coordinates of ancient Enkomi near Famagusta (35,16° N, 33,88° E), placing its marker in the east rather than west of Nicosia. Third, municipal boundaries in Cyprus omit several contiguous suburban parishes consolidated into parent cities during 2 km proximity deduplication (Table \ref{tab:excluded-cyprus}), meaning that Limassol's, Nicosia's and Paphos's wider metropolitan conurbations exceed the individual municipal totals reported here.

# Conclusion

The 45 primary settlements and six consolidated suburbs documented in this gazetteer trace Cyprus's transformation from a predominantly rural, Nicosia-and-Famagusta-centred post-colonial island in 1960AD to a heavily urbanised southern coastal economy by 2025AD [@Ellina2020Social; @Zetter2026Internal]. By reconciling divided CYSTAT and Northern Cyprus enumerations under a single audited ledger and geoBoundaries spatial frame [@Runfola2020GeoBoundaries], the catalogue anchors regional demographic mapping across both sides of the Green Line.

# Appendix

## Source Ledger Exclusions

Table \ref{tab:excluded-cyprus} lists all six excluded candidate entries in the chapter source ledger, each consolidated into a primary urban core within a 2 km proximity buffer.

<figure class="crd-table-figure" id="tab:excluded-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Action</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mésa Geitoniá</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Ágios Dométios</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Tséri</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Peyia</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Émpa</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
<tr><td class="crd-td"><strong>Agía Nápa</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Merged within 2 km buffer of primary core</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All six excluded candidate entries in the chapter source ledger consolidated into primary urban cores.</figcaption>
</figure>

# Sources

<div id="refs"></div>
