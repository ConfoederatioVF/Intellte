---
title: "Settlement Gazetteer of Nepal, Sri Lanka, Bhutan and the Maldives"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1947 to 2026)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nepal_ceylon_bhutan_maldives_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nepal_ceylon_bhutan_maldives_after_independence_spatial.png"
hero_caption: "Spatial distribution of 4.523 catalogued settlements and six post-independence sub-regions across Nepal, Sri Lanka, Bhutan and the Maldives from 1947 to 2026."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 coordinates, sub-regional allocations, census chronologies and longitudinal demographic series for 4.523 post-independence urban and rural settlements across Nepal, Sri Lanka, Bhutan and the Maldives from 1947 to 2026. Encompassing 247.430 km² across six canonical divisions, the gazetteer bridges extreme environmental and architectural landscapes: dense high-valley urban conurbations in the Kathmandu and Thimphu valleys, post-malaria agricultural market centres and industrial border cities in the Nepali Tarai, extended peri-urban coastal ribbons and upland plantation hubs in Sri Lanka, and hyper-nucleated island communities across the coral atolls of the Maldives. Individual settlement trajectories range from leading urban metropolises such as Kathmandu (975.453 in 2011AD), Colombo (645.000 in 2025AD), Pokhara (550.000 in 2025AD), Bharatpur (390.501 in 2025AD), Lalitpur (315.000 in 2025AD), Birgunj (290.000 in 2025AD), Biratnagar (258.000 in 2025AD) and Dehiwala-Mount Lavinia (247.973 in 2025AD) to Malé (228k in 2025AD) and regional dzongkhag centres including Thimphu (132k in 2025AD) and Phuntsholing (30,9k in 2025AD). Every locality reconciles against the INDUS source ledger alongside 2 documented exclusions. By linking georeferenced settlement trajectories with regional dasymetric population surfaces, this gazetteer provides an empirical baseline for settlement subtraction and spatial demographic analysis.

# Background

Settlement patterns across the peripheral sovereign polities of South Asia reflect historical adaptations to mountain topography, tropical island maritime commerce and post-colonial state planning [@Prachhai2025Demograp; @Abeykoon2000Fertilit]. Four primary settlement traditions characterise the regional catalogue:

1. Intermontane valley urban agglomerations: In the central Himalayas, historic capitals established within fertile lacustrine basins developed into dominant national metropolises [@Slusser1982NepalMandala; @Sharma2026Internal]. Kathmandu, Lalitpur and Bhaktapur in Nepal, and Thimphu in Bhutan, expanded from mediaeval royal centres and monastic fortress complexes into modern service agglomerations that concentrate national administrative, educational and financial institutions [@Paricha2016Economic; @Phuntsho2013HistoryBhutan].

2. Tarai agricultural colonisation and transit border towns: Following the mid-1950s eradication of hyperendemic malaria across the sub-Himalayan forest belt, millions of hill cultivators migrated south to the fertile plains [@Prasad2022Causes]. Market towns such as Biratnagar, Birgunj, Bharatpur, Butwal, Ghorahi and Bhimdatta expanded into major commercial and processing centres along highway junctions and transit routes connecting Nepal with the northern Indian urban and railway network [@Khattri2025Rural; @Bayly1983Rulers; @Bhavsar2026Future].

3. Sri Lankan coastal ribbon and plantation agro-urban networks: In southwestern Sri Lanka, urbanisation assumed an extended linear morphology along coastal transport corridors [@Yapa1998Location]. Greater Colombo coalesced with contiguous suburban municipalities including Dehiwala-Mount Lavinia, Moratuwa, Negombo, Maharagama and Gampaha. In the interior, regional commercial centres such as Kandy, Kurunegala, Ratnapura and Galle anchored extensive plantation and paddy catchments built upon deeper South Asian littoral and agrarian hierarchies [@Abeywickrama1982Mortalit; @Champakalakshmi1996Trade].

4. Insular atoll and dzongkhag administrative nodes: In the Maldives, human settlement was traditionally dispersed across hundreds of small coral islands [@Vannur2022Sightingb]. Modern economic centralisation, tourism development and marine transport concentrated demographic mass on Malé, creating an urban density exceeding 110.000 persons per km² and prompting satellite reclamation at Hulhumalé. In Bhutan, settlement remained structured around 20 administrative dzongs, with modern commercial growth concentrated at the southern Indian border gateway of Phuntsholing [@Paricha2016Economic; @Phuntsho2013HistoryBhutan].

# Methodology

The expanded 4.523-settlement gazetteer is empirically anchored in four complementary evidence streams rather than arbitrary demographic interpolation. Primary-monograph historical metropolis trajectories provide long-run urban anchors and regional institutional context [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @ImperialGazetteer1908; @Bayly1983Rulers; @Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Naqvi1968Urbanisation]. Multi-repository archaeological and monument corpora—including Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews, ASI P1371, Wikidata, OpenStreetMap, XRONOS and c14bazAAR—document pre-modern site continuity and spatial coordinates across mountain basins and coastal plains [@Allchin1995Archaeology; @Erdosy1988Urbanisation]. Official national censuses from Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS supply decennial and municipal enumerations across the post-independence period [@Das2025Migration; @Irama2026Migration]. Finally, macro-envelope *qasba*, *pargana* and *nadu* continuity [@Eaton1993Rise; @Champakalakshmi1996Trade; @Chattopadhyaya1994Making] is filtered through strict foundation-year and chronological toponymy rules to prevent anachronistic back-projections.

Inclusion in the gazetteer requires:
- Precise WGS84 geographic coordinates validated against satellite imagery and official survey cartography.
- Documented census returns, archaeological continuity or municipal registrations across one or more benchmark horizons from 1947 to 2026.
- Administrative allocation to one of the six canonical sub-regions.

Across four saturation waves, 2.623 localities entered from official national censuses, imperial anchors and registries (Wave 1), 1.266 from multi-repository archaeological, monument and geospatial corpora (Wave 2), and 634 from macro-envelope *qasba*, *pargana* and *nadu* continuity under foundation-year and toponymy filtering (Wave 3), before terminal sub-mask gap sweeps and GeoNames homonym checks (Wave 4) recorded zero further additions. Where multiple survey points fall within 2,2 km of an established municipal nucleus, secondary records were harmonised as duplicate aliases, preserving geographic integrity and avoiding double-counting. Non-residential facilities such as isolated tourist resorts without permanent civilian registration, seasonal camps and airport installations account for the 2 exclusions from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 4.523 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central and Eastern Nepal</strong></td><td class="crd-td">1.387</td><td class="crd-td">30,7%</td><td class="crd-td">9,35M</td><td class="crd-td">Kathmandu (975,5k)</td></tr>
<tr><td class="crd-td"><strong>Western Nepal</strong></td><td class="crd-td">1.331</td><td class="crd-td">29,4%</td><td class="crd-td">5,11M</td><td class="crd-td">Ghorahi (189,7k)</td></tr>
<tr><td class="crd-td"><strong>Sri Lanka (Wet and South)</strong></td><td class="crd-td">1.103</td><td class="crd-td">24,4%</td><td class="crd-td">8,27M</td><td class="crd-td">Colombo (645k)</td></tr>
<tr><td class="crd-td"><strong>Sri Lanka (North and East)</strong></td><td class="crd-td">381</td><td class="crd-td">8,4%</td><td class="crd-td">2,43M</td><td class="crd-td">Kalmunai (120k)</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Bhutan</strong></td><td class="crd-td">215</td><td class="crd-td">4,8%</td><td class="crd-td">538,5k</td><td class="crd-td">Thimphu (132k)</td></tr>
<tr><td class="crd-td"><strong>Republic of Maldives</strong></td><td class="crd-td">106</td><td class="crd-td">2,3%</td><td class="crd-td">415,3k</td><td class="crd-td">Malé (228k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">4.523</td><td class="crd-td">100%</td><td class="crd-td">26,12M</td><td class="crd-td">Kathmandu (975,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 4.523 catalogued settlements and summed site peaks across Nepal, Sri Lanka, Bhutan and the Maldives.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and longitudinal population trajectories were verified against sequential national census publications and spatial gazetteers [@Prachhai2025Demograp; @Sharma2026Demograp]. In Nepal, municipal amalgamation following the 2015 Constitution dissolved previous Village Development Committee boundaries into 753 consolidated local government units. To maintain longitudinal consistency across the 1952/1954 to 2021 census series, urban core populations were harmonised using ward-level census data [@Sharma2026Internal; @Shrestha2026Tracing].

In Sri Lanka, settlement trajectories across the Northern and Eastern provinces were cross-checked using pre-conflict 1981 census data, local voter registries and the post-conflict 2012 enumeration to account for conflict displacement and return migration [@Maric2025Changes]. In the Maldives, island council registrations were reconciled with atoll census tables to track rapid population nucleation on Malé and Hulhumalé.

Figure \ref{fig:demography} illustrates the combined four-state demographic expansion from 1947 to 2026 alongside the settlement rank-size distribution.

<figure class="crd-figure-block" id="fig:demography">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-nepal-ceylon-bhutan-maldives-after-independence-settlements/fig2_nepal_ceylon_bhutan_maldives_after_independence_demography.png" alt="fig:demography" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory across six sub-regions and settlement rank-size distribution for 4.523 catalogued localities.</figcaption>
</figure>

Settlement rank-size regression across all 4.523 catalogued localities yields a Pareto coefficient of $\alpha = 0{,}68$ ($R^2 = 0{,}89$). This rank-size distribution reflects a regional urban system characterised by primary capitals that coordinate external economic ties alongside dense lattices of intermediate Tarai, hill and coastal market centres [@Fargues2011Internat; @Nikitovic2026Migratio].

# Results

Table \ref{tab:gazetteer} presents the leading 40 settlements across the four countries ordered by peak recorded population descending, detailing coordinates, sub-regional allocations, recorded census chronologies and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Population</th><th class="crd-th">Recent Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,7 N, 85,31 E</td><td class="crd-td">1952AD - 2025AD</td><td class="crd-td">975,5k</td><td class="crd-td">910k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1953AD - 2025AD</td><td class="crd-td">645k</td><td class="crd-td">645k</td></tr>
<tr><td class="crd-td"><strong>Pokhara</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">28,21 N, 83,99 E</td><td class="crd-td">1952AD - 2025AD</td><td class="crd-td">550k</td><td class="crd-td">550k</td></tr>
<tr><td class="crd-td"><strong>Bharatpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,68 N, 84,43 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">390,5k</td><td class="crd-td">390,5k</td></tr>
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,67 N, 85,32 E</td><td class="crd-td">1952AD - 2025AD</td><td class="crd-td">315k</td><td class="crd-td">315k</td></tr>
<tr><td class="crd-td"><strong>Birgunj</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,01 N, 84,88 E</td><td class="crd-td">1952AD - 2025AD</td><td class="crd-td">290k</td><td class="crd-td">290k</td></tr>
<tr><td class="crd-td"><strong>Biratnagar</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,45 N, 87,27 E</td><td class="crd-td">1952AD - 2025AD</td><td class="crd-td">258k</td><td class="crd-td">258k</td></tr>
<tr><td class="crd-td"><strong>Dehiwala-Mount Lavinia</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,84 N, 79,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">248k</td><td class="crd-td">248k</td></tr>
<tr><td class="crd-td"><strong>Maharagama</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,85 N, 79,93 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">234,1k</td><td class="crd-td">234,1k</td></tr>
<tr><td class="crd-td"><strong>Malé</strong></td><td class="crd-td">Maldives</td><td class="crd-td">Republic of Maldives</td><td class="crd-td">4,17 N, 73,51 E</td><td class="crd-td">1965AD - 2025AD</td><td class="crd-td">228k</td><td class="crd-td">228k</td></tr>
<tr><td class="crd-td"><strong>Moratuwa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,77 N, 79,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">201,6k</td><td class="crd-td">201,6k</td></tr>
<tr><td class="crd-td"><strong>Beruwala</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,47 N, 79,98 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">197,7k</td><td class="crd-td">197,7k</td></tr>
<tr><td class="crd-td"><strong>Gampaha</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">7,09 N, 80 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">191k</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Ghorahi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western Nepal</td><td class="crd-td">28,04 N, 82,49 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">189,7k</td><td class="crd-td">189,7k</td></tr>
<tr><td class="crd-td"><strong>Negombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">7,21 N, 79,84 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">170,3k</td><td class="crd-td">170,3k</td></tr>
<tr><td class="crd-td"><strong>Butwal</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western Nepal</td><td class="crd-td">27,7 N, 83,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">143,9k</td><td class="crd-td">143,9k</td></tr>
<tr><td class="crd-td"><strong>Dharan</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,82 N, 87,27 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">141,1k</td><td class="crd-td">141,1k</td></tr>
<tr><td class="crd-td"><strong>Thimphu</strong></td><td class="crd-td">Bhutan</td><td class="crd-td">Kingdom of Bhutan</td><td class="crd-td">27,47 N, 89,64 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">132k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Bhimdatta</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western Nepal</td><td class="crd-td">28,92 N, 80,33 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">127,1k</td><td class="crd-td">127,1k</td></tr>
<tr><td class="crd-td"><strong>Lahan</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,72 N, 86,48 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">125,1k</td><td class="crd-td">125,1k</td></tr>
<tr><td class="crd-td"><strong>Dhangadhi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western Nepal</td><td class="crd-td">28,71 N, 80,58 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">123,9k</td><td class="crd-td">123,9k</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (North and East)</td><td class="crd-td">7,42 N, 81,82 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Janakpurdham</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,71 N, 85,92 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,8k</td><td class="crd-td">118,8k</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (North and East)</td><td class="crd-td">8,57 N, 81,23 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,8k</td><td class="crd-td">118,8k</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (North and East)</td><td class="crd-td">9,66 N, 80,03 E</td><td class="crd-td">1953AD - 2025AD</td><td class="crd-td">118,2k</td><td class="crd-td">100k</td></tr>
<tr><td class="crd-td"><strong>Sri Jayawardenepura Kotte</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,89 N, 79,9 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,2k</td><td class="crd-td">115,8k</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">7,29 N, 80,63 E</td><td class="crd-td">1953AD - 2025AD</td><td class="crd-td">112k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Dambulla</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">7,85 N, 80,65 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">108,2k</td><td class="crd-td">108,2k</td></tr>
<tr><td class="crd-td"><strong>Batticaloa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (North and East)</td><td class="crd-td">7,72 N, 81,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">103,9k</td><td class="crd-td">103,9k</td></tr>
<tr><td class="crd-td"><strong>Hetauda</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,42 N, 85,03 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">102,9k</td><td class="crd-td">102,9k</td></tr>
<tr><td class="crd-td"><strong>Katunayaka</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">7,17 N, 79,89 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">101,4k</td><td class="crd-td">101,4k</td></tr>
<tr><td class="crd-td"><strong>Madhyapur Thimi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,68 N, 85,39 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">100,9k</td><td class="crd-td">100,9k</td></tr>
<tr><td class="crd-td"><strong>Ambalantota</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,12 N, 81,02 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">96,5k</td><td class="crd-td">96,5k</td></tr>
<tr><td class="crd-td"><strong>Galle</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">6,03 N, 80,22 E</td><td class="crd-td">1953AD - 2025AD</td><td class="crd-td">96k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>Valvettithurai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (North and East)</td><td class="crd-td">9,82 N, 80,17 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">93,7k</td><td class="crd-td">93,7k</td></tr>
<tr><td class="crd-td"><strong>Matara</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka (Wet and South)</td><td class="crd-td">5,95 N, 80,53 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">91,4k</td><td class="crd-td">91,4k</td></tr>
<tr><td class="crd-td"><strong>Damak</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,63 N, 87,7 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">91,2k</td><td class="crd-td">91,2k</td></tr>
<tr><td class="crd-td"><strong>Itahari</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,67 N, 87,28 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">90,5k</td><td class="crd-td">90,5k</td></tr>
<tr><td class="crd-td"><strong>Nepalgunj</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western Nepal</td><td class="crd-td">28,05 N, 81,62 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">88,1k</td><td class="crd-td">88,1k</td></tr>
<tr><td class="crd-td"><strong>Triyuga</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,79 N, 86,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">86,7k</td><td class="crd-td">86,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 post-independence settlements ordered by peak population across Nepal, Sri Lanka, Bhutan and the Maldives.</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Central and Eastern Nepal

This division catalogues 1.387 settlements across Koshi, Madhesh, Bagmati and Gandaki provinces [@Slusser1982NepalMandala; @Prachhai2025Demograp]. Kathmandu forms the demographic apex of the national urban hierarchy, expanding from 106,6k in 1952 to a municipal peak of 975.453 in 2011AD (910k in 2025). Adjoining Lalitpur (315.000 peak in 2025AD) and Bhaktapur constitute a unified urban expanse across the valley basin. To the west in Gandaki, Pokhara expanded from 12k in 1961 to 550.000 by 2025AD as a premier tourism, aviation and regional service hub, while Bharatpur (390.501 peak in 2025AD) anchors the Chitwan valley. Along the southern plains, Birgunj (290.000 peak in 2025AD) commands trade traffic through the Raxaul border corridor, while Biratnagar (258.000 peak in 2025AD), Dharan (141,1k peak), Lahan (125,1k peak), Janakpurdham (118,8k peak) and Hetauda (102,9k peak) anchor manufacturing and agro-processing across the central and eastern Tarai [@Khattri2025Rural].

### Western Nepal

This division catalogues 1.331 settlements across Lumbini, Karnali and Sudurpashchim provinces [@Sharma2026Internal]. In the Lumbini and western Tarai lowlands, Ghorahi (189,7k peak in 2025AD) and Butwal (143,9k peak in 2025AD) developed into the leading commercial arteries, supported by Bhimdatta (127,1k peak in 2025AD) and Dhangadhi (123,9k peak in 2025AD) anchoring the far-western border with Uttarakhand, and Nepalgunj (88,1k peak in 2025AD) commanding trade into the mid-western hills [@Chaudhary2025Migration; @Sarkar2020Overview].

### Sri Lanka (Wet and South)

This division catalogues 1.103 settlements across Western, Central, Southern, Sabaragamuwa and North-Western provinces [@Abeykoon2000Fertilit]. Colombo represents the economic and commercial hub, accommodating 645.000 residents within its core municipal bounds in 2025AD while anchoring an extensive peri-urban coastal belt comprising Dehiwala-Mount Lavinia (247.973 peak in 2025AD), Maharagama (234,1k peak), Moratuwa (201,6k peak), Beruwala (197,7k peak), Gampaha (191k peak in 2001AD) and Negombo (170,3k peak). In the central highlands, Kandy (112k peak in 2025AD) functions as a historic cultural and commercial centre, while Galle (96k peak) and Matara (91,4k peak) anchor the southern maritime littoral.

### Sri Lanka (North and East)

This division catalogues 381 settlements across Northern and Eastern provinces [@Maric2025Changes]. Along the eastern coast, Kalmunai (120k peak in 2025AD), Trincomalee (118,8k peak) and Batticaloa (103,9k peak) anchor regional fisheries, paddy marketing and deep-water maritime commerce. On the northern peninsula, Jaffna reached a pre-conflict peak of 118,2k in 1981AD before war-related displacement reduced its municipal population to 88,1k in 2001 and 2012, followed by gradual recovery to 100k by 2025AD.

### Kingdom of Bhutan

This division catalogues 215 settlements across all 20 dzongkhags [@Phuntsho2013HistoryBhutan; @Paricha2016Economic]. Thimphu constitutes the primary political and commercial centre, expanding from an agrarian valley of 12k in 1961 to 114,6k in 2017 and 132k by 2025AD. Phuntsholing (30,9k peak in 2025AD) represents the vital commercial gateway along the Indian border, handling the vast majority of cross-border vehicular commerce. Secondary dzongkhag centres including Tsirang (25k peak), Punakha (24k peak), Pemagatshel (15,5k peak) and Paro (12,8k peak) function as administrative nodes coordinating surrounding rural gewogs.

### Republic of Maldives

This division catalogues 106 inhabited island settlements across 21 administrative atolls [@Vannur2022Sightingb]. The capital island of Malé dominates the national urban structure, concentrating 228k inhabitants by 2025AD within an intensely built coral landmass of approximately 2 km². To relieve residential congestion, the Maldivian state initiated land reclamation at Hulhumalé (5,2k registered residents in 2025AD). Secondary regional urban nodes include Fuvahmulah (11,6k peak), Hithadhoo (10,4k peak in Addu City) and Kulhudhuffushi (9,9k peak) in the northern atolls.

# Limitations

Settlement analysis across the four countries is subject to several empirical limitations:

1. Administrative reclassifications: In Nepal, the large-scale creation of urban municipalities after 2015 incorporated rural agricultural areas into municipal units, which inflated census urban statistics and necessitated adjustments to isolate core built-up areas [@Prachhai2025Demograp].

2. Civil conflict enumeration gaps: In Sri Lanka, hostilities between 1983 and 2009 prevented standard census enumeration across Northern and Eastern districts during the 2001 census round, requiring retrospective reconstruction through administrative registers [@Maric2025Changes].

3. Insular floating populations: In the Maldives, the presence of substantial expatriate resort workforces housed on non-administrative island resorts introduces minor disparities between de jure resident counts and de facto economic populations.

# Conclusion

The 4.523 catalogued settlements documented in this gazetteer provide a systematic geographical foundation for analysing eight decades of post-independence demographic expansion across Nepal, Sri Lanka, Bhutan and the Maldives.

By linking georeferenced coordinates with sequential census records from 1947 to 2026, the gazetteer captures the diverse forms of human nucleation across South Asia peripheral states, from high Himalayan valley capitals and Tarai agricultural frontier cities to tropical coastal conurbations and oceanic coral atolls.

This spatial inventory enables rigorous settlement subtraction within regional demographic models, ensuring that population reconstructions reflect genuine settlement nodes rather than arbitrary administrative aggregates.

# Sources
