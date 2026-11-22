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
hero_caption: "Spatial distribution of 1.077 catalogued settlements and six post-independence sub-regions across Nepal, Sri Lanka, Bhutan and the Maldives from 1947 to 2026."
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

This gazetteer catalogues WGS84 coordinates, sub-regional allocations, census chronologies and longitudinal demographic series for 3759 post-independence urban and rural settlements across Nepal, Sri Lanka, Bhutan and the Maldives from 1947 to 2026. Encompassing 247.430 km² across six canonical divisions, the gazetteer bridges extreme environmental and architectural landscapes: dense high-valley urban conurbations in the Kathmandu and Thimphu valleys, post-malaria agricultural market centres and industrial border cities in the Nepali Tarai, extended peri-urban coastal ribbons and upland plantation hubs in Sri Lanka, and hyper-nucleated island communities across the coral atolls of the Maldives. Reconstructed from national decennial census returns, municipal surveys and georeferenced gazetteers, individual settlement trajectories range from capital metropolises such as Kathmandu (1,44M in 2021), Colombo (753k in 2021), Pokhara (600,1k in 2021) and Malé (252,8k in 2022) to regional administrative dzongkhags including Thimphu (110,3k in 2021) and Phuntsholing (30,9k). Every locality reconciles against the INDUS source ledger alongside 150 documented exclusions. By linking georeferenced settlement trajectories with regional dasymetric population surfaces, this gazetteer provides an empirical baseline for settlement subtraction and spatial demographic analysis.

# Background

Settlement patterns across the peripheral sovereign polities of South Asia reflect historical adaptations to mountain topography, tropical island maritime commerce and post-colonial state planning [@Prachhai2025Demograp; @Abeykoon2000Fertilit]. Four primary settlement traditions characterise the regional catalogue:

1. Intermontane valley urban agglomerations: In the central Himalayas, historic capitals established within fertile lacustrine basins developed into dominant national metropolises [@Sharma2026Internal]. Kathmandu, Lalitpur and Bhaktapur in Nepal, and Thimphu in Bhutan, expanded from mediaeval royal centres and monastic fortress complexes into sprawling modern service agglomerations that concentrate national administrative, educational and financial institutions [@Paricha2016Economic].

2. Tarai agricultural colonization and transit border towns: Following the mid-1950s eradication of hyperendemic malaria across the sub-Himalayan forest belt, millions of hill cultivators migrated south to the fertile plains [@Prasad2022Causes]. Market towns such as Biratnagar, Birganj, Bharatpur, Butwal, Ghorahi and Bhimdatta expanded into major commercial and processing centres along highway junctions and transit routes connecting Nepal with the Indian railway network [@Khattri2025Rural; @Bhavsar2026Future].

3. Sri Lankan coastal ribbon and plantation agro-urban networks: In southwestern Sri Lanka, urbanisation assumed an extended linear morphology along coastal transport corridors [@Yapa1998Location]. Greater Colombo coalesced with contiguous suburban municipalities including Dehiwala-Mount Lavinia, Moratuwa, Negombo, Maharagama and Gampaha. In the interior, regional commercial centres such as Kandy, Kurunegala, Ratnapura and Galle anchored extensive plantation and paddy farming catchments [@Abeywickrama1982Mortalit].

4. Insular atoll and dzongkhag administrative nodes: In the Maldives, human settlement was traditionally dispersed across hundreds of small coral islands [@Vannur2022Sightingb]. Modern economic centralisation, tourism development and marine transport concentrated demographic mass on Malé, creating an urban density exceeding 120.000 persons per km² and prompting satellite reclamation at Hulhumalé. In Bhutan, settlement remained structured around 20 administrative dzongs, with modern commercial growth concentrated at the southern Indian border gateway of Phuntsholing [@Paricha2016Economic].

# Methodology

Candidate settlements in the source ledger were evaluated using official census gazetteers, municipal statistical abstracts and georeferenced spatial repositories [@Das2025Migration; @Irama2026Migration]. Inclusion in the gazetteer requires:
- Precise WGS84 geographic coordinates validated against satellite imagery and official survey cartography.
- Documented census returns or municipal registrations across one or more benchmark horizons from 1947 to 2026.
- Administrative allocation to one of the six canonical sub-regions.

Where multiple survey points fall within 2,2 km of an established municipal nucleus, secondary records were harmonised as duplicate aliases, preserving geographic integrity and avoiding artificial double-counting. Non-residential facilities such as isolated tourist resorts without permanent civilian registration, seasonal logging camps and airport installations were excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 3759 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central and Eastern Nepal</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Western Nepal</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Sri Lanka (Wet and South)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Sri Lanka (North and East)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Bhutan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Republic of Maldives</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">3759</td><td class="crd-td">100%</td><td class="crd-td">24,44M</td><td class="crd-td">Kathmandu (1,44M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.077 catalogued settlements and summed site peaks across Nepal, Sri Lanka, Bhutan and the Maldives.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and longitudinal population trajectories were verified against sequential national census publications and spatial gazetteers [@Prachhai2025Demograp; @Sharma2026Demograp]. In Nepal, municipal amalgamation following the 2015 Constitution dissolved previous Village Development Committee boundaries into 753 consolidated local government units. To maintain longitudinal consistency across the 1952/1954 to 2021 census series, urban core populations were harmonised using ward-level census data [@Sharma2026Internal; @Shrestha2026Tracing].

In Sri Lanka, settlement trajectories across the Northern and Eastern provinces were cross-checked using pre-conflict 1981 census data, local voter registries and the post-conflict 2012 enumeration to account for conflict displacement and return migration [@Maric2025Changes]. In the Maldives, island council registrations were reconciled with atoll census tables to track rapid population nucleation on Malé and Hulhumalé.

Figure \ref{fig:demography} illustrates the combined four-state demographic expansion from 1947 to 2026 alongside the settlement rank-size distribution.

<figure class="crd-figure-block" id="fig:demography">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-nepal-ceylon-bhutan-maldives-after-independence-settlements/fig2_nepal_ceylon_bhutan_maldives_after_independence_demography.png" alt="fig:demography" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory across six sub-regions and settlement rank-size distribution for 1.077 catalogued localities.</figcaption>
</figure>

Settlement rank-size regression across all 1.077 catalogued localities yields a Pareto coefficient of $\alpha = 1{,}13$ ($R^2 = 0{,}93$). This rank-size distribution conforms to regional urban systems characterized by primate capital cities that coordinate external economic ties, balanced by dense networks of secondary market towns [@Fargues2011Internat; @Nikitovic2026Migratio].

# Results

Table \ref{tab:gazetteer} presents the leading 40 settlements across the four countries ordered by peak recorded population descending, detailing coordinates, sub-regional allocations, recorded census chronologies and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Population</th><th class="crd-th">Recent Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,71 N, 85,32 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,44M</td><td class="crd-td">894,1k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">753k</td><td class="crd-td">647,6k</td></tr>
<tr><td class="crd-td"><strong>Pokhara</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">28,21 N, 83,99 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">600,1k</td><td class="crd-td">395,5k</td></tr>
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,68 N, 85,33 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">550,1k</td><td class="crd-td">550,1k</td></tr>
<tr><td class="crd-td"><strong>Bharatpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,68 N, 84,43 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">390,5k</td><td class="crd-td">390,5k</td></tr>
<tr><td class="crd-td"><strong>Birganj</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,02 N, 84,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">325,9k</td><td class="crd-td">325,9k</td></tr>
<tr><td class="crd-td"><strong>Biratnagar</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,48 N, 87,28 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">294,7k</td><td class="crd-td">294,7k</td></tr>
<tr><td class="crd-td"><strong>Malé</strong></td><td class="crd-td">Maldives</td><td class="crd-td">Republic of Maldives</td><td class="crd-td">4,17 N, 73,51 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">252,8k</td><td class="crd-td">108,1k</td></tr>
<tr><td class="crd-td"><strong>Dehiwala-Mount Lavinia</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,84 N, 79,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">248k</td><td class="crd-td">248k</td></tr>
<tr><td class="crd-td"><strong>Maharagama</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,85 N, 79,93 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">234,1k</td><td class="crd-td">234,1k</td></tr>
<tr><td class="crd-td"><strong>Moratuwa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,77 N, 79,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">201,6k</td><td class="crd-td">201,6k</td></tr>
<tr><td class="crd-td"><strong>Beruwala</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,47 N, 79,98 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">197,7k</td><td class="crd-td">197,7k</td></tr>
<tr><td class="crd-td"><strong>Gampaha</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">7,09 N, 80 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">191k</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Ghorahi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western and Mid-Western</td><td class="crd-td">28,04 N, 82,49 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">189,7k</td><td class="crd-td">189,7k</td></tr>
<tr><td class="crd-td"><strong>Negombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">7,21 N, 79,84 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">170,3k</td><td class="crd-td">170,3k</td></tr>
<tr><td class="crd-td"><strong>Birgunj</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27 N, 84,87 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">165,1k</td><td class="crd-td">165,1k</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">7,29 N, 80,64 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">161k</td><td class="crd-td">127k</td></tr>
<tr><td class="crd-td"><strong>Butwal</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western and Mid-Western</td><td class="crd-td">27,7 N, 83,45 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">143,9k</td><td class="crd-td">143,9k</td></tr>
<tr><td class="crd-td"><strong>Dharan</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,82 N, 87,27 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">141,1k</td><td class="crd-td">141,1k</td></tr>
<tr><td class="crd-td"><strong>Bhimdatta</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western and Mid-Western</td><td class="crd-td">28,92 N, 80,33 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">127,1k</td><td class="crd-td">127,1k</td></tr>
<tr><td class="crd-td"><strong>Lahan</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,72 N, 86,48 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">125,1k</td><td class="crd-td">125,1k</td></tr>
<tr><td class="crd-td"><strong>Dhangadhi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Western and Mid-Western</td><td class="crd-td">28,71 N, 80,58 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">123,9k</td><td class="crd-td">123,9k</td></tr>
<tr><td class="crd-td"><strong>Kalmunai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Northern</td><td class="crd-td">7,42 N, 81,82 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Janakpurdham</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,71 N, 85,92 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,8k</td><td class="crd-td">118,8k</td></tr>
<tr><td class="crd-td"><strong>Trincomalee</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Northern</td><td class="crd-td">8,57 N, 81,23 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,8k</td><td class="crd-td">118,8k</td></tr>
<tr><td class="crd-td"><strong>Sri Jayawardenepura Kotte</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,9 N, 79,92 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">118,2k</td><td class="crd-td">115,8k</td></tr>
<tr><td class="crd-td"><strong>Thimphu</strong></td><td class="crd-td">Bhutan</td><td class="crd-td">Kingdom of Bhutan</td><td class="crd-td">27,47 N, 89,64 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">110,3k</td><td class="crd-td">110,3k</td></tr>
<tr><td class="crd-td"><strong>Dambulla</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">7,85 N, 80,65 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">108,2k</td><td class="crd-td">108,2k</td></tr>
<tr><td class="crd-td"><strong>Jaffna</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Northern</td><td class="crd-td">9,66 N, 80,02 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">105,6k</td><td class="crd-td">105,6k</td></tr>
<tr><td class="crd-td"><strong>Batticaloa</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Northern</td><td class="crd-td">7,72 N, 81,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">103,9k</td><td class="crd-td">103,9k</td></tr>
<tr><td class="crd-td"><strong>Hetauda</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,42 N, 85,03 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">102,9k</td><td class="crd-td">102,9k</td></tr>
<tr><td class="crd-td"><strong>Katunayaka</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">7,17 N, 79,89 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">101,4k</td><td class="crd-td">101,4k</td></tr>
<tr><td class="crd-td"><strong>Madhyapur Thimi</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,68 N, 85,39 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">100,9k</td><td class="crd-td">100,9k</td></tr>
<tr><td class="crd-td"><strong>Galle</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,03 N, 80,22 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">99,8k</td><td class="crd-td">99,8k</td></tr>
<tr><td class="crd-td"><strong>Bhaktapur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">27,67 N, 85,43 E</td><td class="crd-td">1961AD - 2025AD</td><td class="crd-td">99,3k</td><td class="crd-td">99,3k</td></tr>
<tr><td class="crd-td"><strong>Ambalantota</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">6,12 N, 81,02 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">96,5k</td><td class="crd-td">96,5k</td></tr>
<tr><td class="crd-td"><strong>Valvettithurai</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Northern</td><td class="crd-td">9,82 N, 80,17 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">93,7k</td><td class="crd-td">93,7k</td></tr>
<tr><td class="crd-td"><strong>Matara</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">Sri Lanka Western and Central</td><td class="crd-td">5,95 N, 80,53 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">91,4k</td><td class="crd-td">91,4k</td></tr>
<tr><td class="crd-td"><strong>Damak</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,63 N, 87,7 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">91,2k</td><td class="crd-td">91,2k</td></tr>
<tr><td class="crd-td"><strong>Itahari</strong></td><td class="crd-td">Nepal</td><td class="crd-td">Central and Eastern Nepal</td><td class="crd-td">26,67 N, 87,28 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">90,5k</td><td class="crd-td">90,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 post-independence settlements ordered by peak population across Nepal, Sri Lanka, Bhutan and the Maldives.</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Central and Eastern Nepal

This division catalogues 335 settlements across Koshi, Madhesh, Bagmati and Gandaki provinces [@Prachhai2025Demograp]. Kathmandu forms the demographic apex of the national urban hierarchy, expanding from 390k in 1951 to 1,44M in 2021. Adjoining Lalitpur (550,1k peak) and Bhaktapur constitute a unified urban expanse across the valley basin. Along the southern plains, Birganj (325,9k peak) commands trade traffic through the Raxaul border corridor, while Biratnagar (294,7k peak) and Dharan (173k peak) anchor manufacturing and processing in the eastern Tarai [@Khattri2025Rural]. Other major regional centres include Bharatpur (390,5k peak) commanding the Chitwan valley, Janakpur (195k peak) and Hetauda (193k peak).

### Western Nepal

This division catalogues 259 settlements across Lumbini, Karnali and Sudurpashchim provinces [@Sharma2026Internal]. Pokhara represents the leading metropolitan centre, expanding rapidly from 20k in the 1960s to 600,1k by 2021 as a regional centre for commerce, tourism and education. In the Lumbini and Tarai lowlands, Ghorahi (189,7k peak) and Butwal (195k peak) developed into major commercial arteries, supported by Nepalgunj (166k peak) commanding trade into the mid-western hills, and Bhimdatta (127,1k peak) anchoring the far-western border with Uttarakhand [@Chaudhary2025Migration; @Sarkar2020Overview].

### Sri Lanka (Wet and South)

This division catalogues 170 settlements across Western, Central, Southern, Sabaragamuwa and North-Western provinces [@Abeykoon2000Fertilit]. Colombo represents the economic and commercial hub, accommodating 753k residents within its core municipal bounds while anchoring an extensive peri-urban coastal belt comprising Dehiwala-Mount Lavinia (248k peak), Maharagama (234,1k peak), Moratuwa (201,6k peak), Beruwala (197,7k peak), Gampaha (191k peak) and Negombo (170,3k peak). In the central highlands, Kandy (125k peak) functions as a historic cultural and commercial centre, while Galle (99k peak) and Matara anchor the southern maritime littoral.

### Sri Lanka (North and East)

This division catalogues 170 settlements across Northern and Eastern provinces [@Maric2025Changes]. Jaffna (88k peak) forms the primary urban focus of the northern peninsula, surrounded by dense agricultural villages supported by artesian limestone well irrigation. Along the eastern coast, Batticaloa (92k peak), Kalmunai (106k peak) and Trincomalee (108k peak) anchor regional fisheries, rice marketing and deep-water maritime commerce, exhibiting steady demographic recovery following the end of the civil conflict in 2009.

### Kingdom of Bhutan

This division catalogues 35 settlements across all 20 dzongkhags [@Paricha2016Economic]. Thimphu constitutes the primary political and commercial centre, expanding from an agrarian valley of under 10k in the 1960s to 110,3k by 2021. Phuntsholing (30,9k peak) represents the vital commercial gateway along the Indian border, handling the vast majority of cross-border vehicular commerce. Secondary dzongkhag centres including Tsirang (25k peak), Punakha (24k peak), Paro (15k peak) and Pemagatshel (15,5k peak) function as administrative nodes coordinating surrounding rural gewogs.

### Republic of Maldives

This division catalogues 108 inhabited island settlements across 21 administrative atolls [@Vannur2022Sightingb]. The capital island of Malé dominates the national urban structure, concentrating 252,8k inhabitants within an intensely built coral landmass of approximately 2 km². To manage severe residential congestion, the Maldivian state initiated massive land reclamation at Hulhumalé, which accommodated over 50k residents by 2022. Secondary regional urban nodes include Addu City in the far south, comprising the interconnected islands of Hithadhoo, Maradhoo and Feydhoo, alongside Fuvahmulah and Kulhudhuffushi in the northern atolls.

# Limitations

Settlement analysis across the four countries is subject to several empirical limitations:

1. Administrative reclassifications: In Nepal, the large-scale creation of urban municipalities after 2015 incorporated rural agricultural areas into municipal units, which inflated census urban statistics and necessitated adjustments to isolate core built-up areas [@Prachhai2025Demograp].

2. Civil conflict enumeration gaps: In Sri Lanka, hostilities between 1983 and 2009 prevented standard census enumeration across Northern and Eastern districts during the 2001 census round, requiring retrospective reconstruction through administrative registers [@Maric2025Changes].

3. Insular floating populations: In the Maldives, the presence of substantial expatriate resort workforces housed on non-administrative island resorts introduces minor disparities between de jure resident counts and de facto economic populations.

# Conclusion

The 1.077 catalogued settlements documented in this gazetteer provide a systematic geographical foundation for analysing eight decades of post-independence demographic expansion across Nepal, Sri Lanka, Bhutan and the Maldives.

By linking georeferenced coordinates with sequential census records from 1947 to 2026, the gazetteer captures the diverse forms of human nucleation across South Asia peripheral states, from high Himalayan valley capitals and Tarai agricultural frontier cities to tropical coastal conurbations and oceanic coral atolls.

This spatial inventory enables rigorous settlement subtraction within regional demographic models, ensuring that population reconstructions reflect genuine settlement nodes rather than arbitrary administrative aggregates.

# Sources
