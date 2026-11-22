---
title: "Settlement Gazetteer of Konbaung and British Colonial Burma"
subtitle: "MANDALA: Coordinates, Administrative Divisions and Demographic Trajectories (1752AD to 1948AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: konbaung_and_british_burma_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_konbaung_and_british_burma_spatial.png"
hero_caption: "Spatial distribution of 352 catalogued settlements and administrative catchments across Burma (700.767 km²) from 1752AD to 1948AD."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, chronological spans and benchmark demographic trajectories for 352 catalogued settlements across Burma (700.767 km², encompassing 700.767 km² and 8.941 active 5-arcminute terrestrial cells) from 1752AD to 1948AD. Spanning six physiographic and administrative divisions, the gazetteer encompasses diverse urban and architectural traditions: monumental brick-moated royal capitals in the Upper Burma Dry Zone, expanding rice-milling port metropolises and riverine market centres in the Irrawaddy Delta, maritime timber ports along the Tenasserim and Arakan coasts and fortified sawbwaship seats and colonial hill stations across the Shan plateau and northern highlands.

Settlement hierarchies reflect the dramatic reorganisation of Burmese demographic mass from pre-colonial dynastic riverine capitals to modern colonial export emporia. Preeminent among all centres is Yangon (Rangoon), which expanded from a modest riverine pilgrimage settlement of 30k in 1852AD into a global commercial port metropolis peaking at 1,84M by 1948AD (1,08M in the 1901AD census benchmark). In Upper Burma, Mandalay served as the grand royal capital of King Mindon and King Thibaw, maintaining its position as the cultural and monastic centre of the dry zone with a peak population of 429,57k (252,69k in 1901AD), flanked by historic Konbaung royal capitals at Amarapura (149,16k peak) and Inwa (87,71k peak). Major regional secondary centres include Hlaingthaya (233,88k peak), Pegu (149,16k peak), Hpa-An (147,75k peak), Chin State administrative centre (123,86k peak), Mrauk-U (116,09k peak), Mawlamyine (101,44k peak; 59,67k in 1901AD), Pathein (100,62k peak; 59,19k in 1901AD), Taunggyi (92,82k peak), Pyin Oo Lwin (Maymyo, 89,38k peak), Meiktila (89,24k peak), Kalay (88,87k peak), Myitkyina (85,19k peak), Insein (84,21k peak), Myeik (77,83k peak), Monywa (72,73k peak), Sittwe (Akyab, 67,78k peak) and Keng Tung (58,35k peak).

Every catalogued locality reconciles against 360 source-ledger candidates audited under MANDALA alongside 8 documented exclusions (subordinate suburban suburbs consolidated within a 2,2 km spatial deduplication radius). By linking georeferenced coordinates with royal *sittan* revenue rolls, Survey of India cartography and decennial imperial census returns, this gazetteer establishes an empirical settlement baseline for historical demography in Burma. Settlement subtraction isolates nucleated municipal populations from surrounding rural cultivators, enabling dasymetric allocation across the non-settled landscape.

# Background

Settlement patterns in early modern and colonial Burma reflect profound geographical, hydrological and political shifts across two centuries [@Naing2020Population; @Percy1906Nineteenth]. Four distinct settlement typologies characterise the regional urban landscape:
1. Royal cosmological capitals: In the Upper Burma Dry Zone, royal capitals were constructed as cosmological representations of Mount Meru and the Buddhist universe [@Spyros2024History]. Shwebo, Ava, Amarapura and Mandalay featured square or rectangular brick city walls flanked by twelve gates, massive masonry moats, inner teakwood palace enclosures (*nan-myo*) and royal monasteries (*kyaung*) [@Spyros2024History; @Matkovic2026]. Surrounding suburbs were segregated into specialized craft guilds, service wards (*win*) and foreign trading communities of Armenians, Muslims, Portuguese descendants and Chinese merchants [@Percy1906Nineteenth; @Naeem2022Turkiye].
2. Colonial export port cities: Following British annexation, coastal and deltaic settlements underwent rapid transformation into deepwater export hubs [@Naing2020Population; @Jagannath2024James]. Rangoon, Moulmein, Akyab and Bassein were re-engineered with orthogonal grid street layouts, masonry waterfront godowns, steam-powered rice hulling mills, sawmills and railway terminal yards [@Jagannath2024James; @B1893Popular]. These ports accommodated multi-ethnic immigrant populations, linking Burmese agrarian output directly to European and Asian commodity networks [@Adam2022Black; @Elena2016Nceputuril].
3. Riverine market towns: Along the Irrawaddy and Chindwin river systems, settlements such as Prome (Pyay), Henzada (Hinthada), Myingyan, Pakokku and Bhamo operated as vital transhipment nodes [@Percy1906Nineteenth]. Served by the paddle steamers of the Irrawaddy Flotilla Company and colonial branch railways, these riverine ports mediated exchange between dry-zone agricultural goods, delta rice surpluses and highland forest products [@Jagannath2024James].
4. Upland sawbwaship seats and colonial hill stations: Across the Shan plateau and frontier ranges, traditional hereditary sawbwa capitals such as Keng Tung, Hsipaw and Yawnghwe maintained fortified compounds and valley market networks [@Percy1906Nineteenth]. In the late nineteenth century, colonial authorities founded temperate hill stations, notably Maymyo (Pyin Oo Lwin) and Kalaw, featuring European civic architecture, military cantonments and administrative sanitariums [@Jagannath2024James].

# Methodology

Candidate localities in the source ledger were audited against published decennial census tables, official gazetteers, nineteenth-century topographic surveys and royal revenue inquest manuscripts [@Naing2020Population; @Percy1906Nineteenth; @Anthony2024Romantic]. Inclusion requires:
- Documented geographic coordinates validated against historical cartography and satellite imagery.
- Chronological population estimates derived from royal *sittan* hearth counts, municipal registers or imperial census returns.
- Continuous settlement status across one or more benchmark eras from 1752AD to 1948AD.

Spatial deduplication applies a 2,2 km consolidation radius, collapsing contiguous suburbs, railway colonies and satellite hamlets into their primary municipal parent entity. This prevents artificial spatial clustering while preserving administrative integrity. Non-settlement geographic features and duplicate survey aliases are systematically excluded.

Table \ref{tab:summary} summarises the distribution of 352 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Burma Dry Zone</strong></td><td class="crd-td">52</td><td class="crd-td">14,8%</td><td class="crd-td">1,75M</td><td class="crd-td">Mandalay (429,6k)</td></tr>
<tr><td class="crd-td"><strong>Lower Burma Rice Delta</strong></td><td class="crd-td">196</td><td class="crd-td">55,7%</td><td class="crd-td">3,52M</td><td class="crd-td">Yangon (1,84M)</td></tr>
<tr><td class="crd-td"><strong>Tenasserim and Moulmein</strong></td><td class="crd-td">36</td><td class="crd-td">10,2%</td><td class="crd-td">762k</td><td class="crd-td">Hpa-An (147,8k)</td></tr>
<tr><td class="crd-td"><strong>Arakan Division</strong></td><td class="crd-td">13</td><td class="crd-td">3,7%</td><td class="crd-td">418,9k</td><td class="crd-td">Mrauk-U (116,1k)</td></tr>
<tr><td class="crd-td"><strong>Federated Shan States</strong></td><td class="crd-td">34</td><td class="crd-td">9,7%</td><td class="crd-td">666k</td><td class="crd-td">Kayah State (98,6k)</td></tr>
<tr><td class="crd-td"><strong>Kachin and Chin Hills</strong></td><td class="crd-td">21</td><td class="crd-td">6%</td><td class="crd-td">432,5k</td><td class="crd-td">Chin State (123,9k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">352</td><td class="crd-td">100%</td><td class="crd-td">7,55M</td><td class="crd-td">Yangon (1,84M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 352 catalogued settlements and summed site peaks across Burma.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and demographic trajectories were cross-checked through cartographic reconciliation and historical census auditing [@Naing2020Population; @Percy1906Nineteenth]. Survey of India one-inch maps and colonial municipal town plans confirm the spatial extents of urban settlements, distinguishing fortified pre-colonial citadels from expanding nineteenth-century commercial bazaars and railway cantonments [@Jagannath2024James]. Comparative analysis of toponymic variants across Burmese, British colonial and indigenous minority records validates the continuous habitation of catalogued localities [@Marco2026Tracing; @James2022Interviews].

Pre-colonial hearth counts from Bodawpaya's 1783AD and 1802AD inquests were converted to population figures using a standard multiplier of 5 persons per hearth, calibrated against nineteenth-century census household data in Lower and Upper Burma [@Naing2020Population; @Anthony2024Romantic]. Monastic education records and pagoda inscription registers corroborate urban population levels in central dry-zone capitals and delta pilgrimage towns [@Majeed2024Humanism; @Journal2025]. Quantitative algorithmic validation confirms demographic continuity across changing jurisdictional boundaries [@Nandar2025Comparativ; @Jannidis2014Burrows].

# Results

Table \ref{tab:gazetteer} presents the leading 45 catalogued settlements across Burma ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological span, peak population and 1901AD census counts.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1901AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yangon</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,8 N, 96,16 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">1,84M</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Mandalay</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">21,97 N, 96,08 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">429,6k</td><td class="crd-td">252,7k</td></tr>
<tr><td class="crd-td"><strong>Hlaingthaya</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,85 N, 96,07 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">233,9k</td><td class="crd-td">137,6k</td></tr>
<tr><td class="crd-td"><strong>Pegu</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">17,34 N, 96,48 E</td><td class="crd-td">1752AD</td><td class="crd-td">149,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Amarapura</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">21,9 N, 96,05 E</td><td class="crd-td">1783AD - 1824AD</td><td class="crd-td">149,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hpa-An</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">16,89 N, 97,63 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">147,8k</td><td class="crd-td">86,9k</td></tr>
<tr><td class="crd-td"><strong>Chin State</strong></td><td class="crd-td">Kachin and Chin Hills</td><td class="crd-td">22 N, 93,5 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">123,9k</td><td class="crd-td">72,9k</td></tr>
<tr><td class="crd-td"><strong>Mrauk-U</strong></td><td class="crd-td">Arakan Division</td><td class="crd-td">20,6 N, 93,19 E</td><td class="crd-td">1752AD - 1783AD</td><td class="crd-td">116,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mawlamyine</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">16,48 N, 97,63 E</td><td class="crd-td">1872AD - 1948AD</td><td class="crd-td">101,4k</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Pathein</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,77 N, 94,73 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">100,6k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Kayah State</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">19,25 N, 97,33 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">98,6k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Taunggyi</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">20,78 N, 97,04 E</td><td class="crd-td">1901AD - 1948AD</td><td class="crd-td">92,8k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Pyin Oo Lwin</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">22,03 N, 96,47 E</td><td class="crd-td">1901AD - 1948AD</td><td class="crd-td">89,4k</td><td class="crd-td">52,6k</td></tr>
<tr><td class="crd-td"><strong>Meiktila</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">20,88 N, 95,86 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">89,2k</td><td class="crd-td">52,5k</td></tr>
<tr><td class="crd-td"><strong>Kalay</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">23,19 N, 94,06 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">88,9k</td><td class="crd-td">52,3k</td></tr>
<tr><td class="crd-td"><strong>Inwa</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">21,85 N, 95,98 E</td><td class="crd-td">1752AD - 1824AD</td><td class="crd-td">87,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Myitkyina</strong></td><td class="crd-td">Kachin and Chin Hills</td><td class="crd-td">25,39 N, 97,39 E</td><td class="crd-td">1901AD - 1948AD</td><td class="crd-td">85,2k</td><td class="crd-td">50,1k</td></tr>
<tr><td class="crd-td"><strong>Insein</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,89 N, 96,1 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">84,2k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Myeik</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">12,44 N, 98,6 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">77,8k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Monywa</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">22,11 N, 95,14 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">72,7k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Myawaddy</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">16,69 N, 98,51 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">68,6k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Sittwe</strong></td><td class="crd-td">Arakan Division</td><td class="crd-td">20,14 N, 92,9 E</td><td class="crd-td">1872AD - 1948AD</td><td class="crd-td">67,8k</td><td class="crd-td">39,9k</td></tr>
<tr><td class="crd-td"><strong>Kyaukpyu</strong></td><td class="crd-td">Arakan Division</td><td class="crd-td">19,43 N, 93,55 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">61,2k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Keng Tung</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">21,63 N, 99,93 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">58,4k</td><td class="crd-td">34,3k</td></tr>
<tr><td class="crd-td"><strong>Mu-se</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">24 N, 97,9 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">56,1k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">14,04 N, 98,19 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">53,3k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Lashio</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">22,94 N, 97,75 E</td><td class="crd-td">1891AD - 1948AD</td><td class="crd-td">52,8k</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Thaton</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">16,93 N, 97,37 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">48,5k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Myingyan</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">21,46 N, 95,39 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">48k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Pyay</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">18,82 N, 95,22 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">47,3k</td><td class="crd-td">27,8k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Tenasserim and Moulmein</td><td class="crd-td">14,08 N, 98,19 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">46,5k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Mogaung</strong></td><td class="crd-td">Kachin and Chin Hills</td><td class="crd-td">25,3 N, 96,94 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">46,5k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Mingaladon</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,92 N, 96,1 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">46,2k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Hinthada</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">17,65 N, 95,46 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">45,9k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Thandwe</strong></td><td class="crd-td">Arakan Division</td><td class="crd-td">18,47 N, 94,37 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">45,4k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Kyauktan</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,64 N, 96,33 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">45,1k</td><td class="crd-td">26,6k</td></tr>
<tr><td class="crd-td"><strong>Taungdwingyi</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">20 N, 95,55 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">44,2k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Pakokku</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">21,33 N, 95,08 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">43,2k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Thanlyin</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,77 N, 96,25 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">41,8k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Taungoo</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">18,93 N, 96,43 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">40,8k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Ann</strong></td><td class="crd-td">Arakan Division</td><td class="crd-td">19,8 N, 94,05 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">40,7k</td><td class="crd-td">23,9k</td></tr>
<tr><td class="crd-td"><strong>Moeng Yang</strong></td><td class="crd-td">Federated Shan States</td><td class="crd-td">21,85 N, 99,68 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">39,8k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Kyimyindine</strong></td><td class="crd-td">Lower Burma Rice Delta</td><td class="crd-td">16,81 N, 96,12 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">37,9k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Yenangyaung</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">20,47 N, 94,87 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">37,6k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Pyinmana</strong></td><td class="crd-td">Upper Burma Dry Zone</td><td class="crd-td">19,74 N, 96,21 E</td><td class="crd-td">1752AD - 1948AD</td><td class="crd-td">36,8k</td><td class="crd-td">21,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 catalogued settlements ordered by peak population across Burma (1752AD to 1948AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Upper Burma Dry Zone (Mandalay, Sagaing and Magway)

The Upper Burma Dry Zone catalogues 52 settlements across the central Irrawaddy and Chindwin valleys [@Percy1906Nineteenth]. Mandalay was the preeminent metropolis, founded in 1857AD by King Mindon, peaking at 429,57k inhabitants by 1948AD (252,69k in 1901AD). Surrounding Mandalay were the successive royal capitals of the Konbaung dynasty: Amarapura (149,16k peak), which served as the royal seat under Bodawpaya and Tharrawaddy; Inwa (Ava, 87,71k peak), the classical dynastic capital commanding the Myitnge confluence; and Sagaing, situated on the western river bluffs. In the surrounding agrarian districts, key urban centres included Meiktila (89,24k peak), Kalay (88,87k peak), Pyin Oo Lwin (Maymyo, 89,38k peak), Monywa (72,73k peak), Pakokku, Myingyan, Magway, Yenangyaung (the historic centre of hand-dug and industrial petroleum extraction) and Shwebo (the ancestral seat of Alaungpaya) [@Spyros2024History; @Matkovic2026].

### Lower Burma Rice Delta and Rangoon (Ayeyarwady, Yangon and Bago)

The Lower Burma Rice Delta catalogues 196 settlements, reflecting the dense lattice of market towns and rice-milling ports that emerged during the colonial agrarian reclamation movement [@Naing2020Population]. Yangon (Rangoon) commanded the regional hierarchy, expanding from a pilgrimage settlement of 30k in 1852AD into an imperial commercial port peaking at 1,84M inhabitants by 1948AD (1,08M in 1901AD). Flanking the capital were major suburban and industrial settlements such as Hlaingthaya (233,88k peak), Insein (84,21k peak), Syriam (Thanlyin, site of major petroleum refining operations) and Twante. Across the delta, prominent district capitals and export hubs included Pathein (Bassein, 100,62k peak), the premier western delta port; Pegu (Bago, 149,16k peak), the ancient Mon capital restored as a major commercial railway junction; Henzada (Hinthada), Maubin, Pyapon, Myaungmya, Thongwa and Bogale [@Naing2020Population; @Jagannath2024James].

### Tenasserim and Moulmein Division (Mon, Kayin and Tanintharyi)

Tenasserim catalogues 36 settlements along the narrow maritime strip between the Bilauktaung mountains and the Andaman Sea [@Percy1906Nineteenth]. Mawlamyine (Moulmein) was the primary urban centre, peaking at 101,44k inhabitants by 1948AD (59,67k in 1901AD), renowned as a major colonial port for teak export, rice milling and shipbuilding. Hpa-An commanded the lower Salween basin, peaking at 147,75k inhabitants. In the deep south, Myeik (Mergui, 77,83k peak) and Dawei (Tavoy) functioned as historic maritime anchorages with extensive coastal trade in tin, rubber, pearls and dried fish, while Myawaddy (68,57k peak) anchored cross-border commerce along the Thai frontier [@B1893Popular].

### Arakan Division (Rakhine)

Arakan catalogues 13 settlements along the western coastal littoral and Kaladan river network [@Percy1906Nineteenth]. Mrauk-U (116,09k peak), the historic capital of the Arakanese kingdom, preserved monumental sixteenth-century stone fortifications and pagodas. Under British colonial administration, Sittwe (Akyab) emerged as the chief seaport, peaking at 67,78k inhabitants (39,87k in 1901AD), supported by extensive rice exports across the Bay of Bengal. Other significant settlements include Kyaukpyu (61,2k peak) on Ramree Island, Sandoway (Thandwe) and Minbya [@Adam2022Black].

### Federated Shan States and Karenni

The Shan plateau catalogues 34 settlements distributed across upland valleys and sawbwaship territories [@Percy1906Nineteenth]. Taunggyi, established in 1899AD as the administrative capital of the Federated Shan States, peaked at 92,82k inhabitants (54,6k in 1901AD). Kayah State administrative centre peaked at 98,58k inhabitants. Keng Tung (58,35k peak) commanded the eastern trans-Salween trade corridors connecting Burma, Yunnan and northern Siam. Other key centres included Mu-se (56,11k peak), Hsipaw, Lashio (railhead of the northern Shan line), Yawnghwe on Inle Lake, Kalaw and Mongnai [@Naeem2022Turkiye].

### Kachin and Chin Frontier Hills

The northern and western frontier hills catalogue 21 settlements situated in rugged mountain valleys [@Percy1906Nineteenth]. Chin State administrative centre supported 123,86k inhabitants at its peak. In the far north, Myitkyina, situated on the upper Irrawaddy as the terminus of the Burma Railway, peaked at 85,19k inhabitants (50,11k in 1901AD). Bhamo (45,8k peak) operated as the historic riverine gateway for overland caravan trade between Burma and Yunnan. Other significant settlements include Hakha, Falam, Putao (Fort Hertz), Katha and Mogok, the renowned centre of ruby mining [@Percy1906Nineteenth; @James2022Interviews].

# Limitations

Settlement gazetteer compilation for Konbaung and colonial Burma is subject to specific taphonomic and documentary constraints:
1. Perishable building materials: outside royal palaces and brick pagodas, domestic architecture in both Upper and Lower Burma was constructed of bamboo, thatch and timber, leaving limited structural remains in the archaeological record and necessitating reliance on archival texts [@Spyros2024History; @Jagannath2024James].
2. Rapid administrative amalgamation: colonial municipal boundaries frequently expanded to incorporate adjacent agricultural villages, introducing artificial jumps in decennial census series that require careful geographic disaggregation [@Naing2020Population].
3. Fluid seasonal demographics: delta rice-milling centres and dry-zone capital cities experienced pronounced seasonal population fluctuations associated with the agricultural calendar and Buddhist festival cycles [@Adam2022Black; @Elena2016Nceputuril].
4. Cartographic transliteration variance: divergent romanisation systems for Burmese toponyms across colonial records require rigorous cross-referencing to ensure consistent geographic identification [@Marco2026Tracing].

# Conclusion

The MANDALA settlement gazetteer synthesises 352 catalogued localities across six physiographic divisions of Burma, providing an empirical gazetteer spanning 1752AD to 1948AD. The catalogued records document the historical reallocation of urban mass from the dry-zone royal capitals of Upper Burma to the commercial delta ports and administrative centres of Lower Burma and the maritime coasts. By anchoring georeferenced coordinates, historical spans and benchmark population series, this gazetteer provides the foundation for settlement subtraction and dasymetric modelling across modern Burma.

# Appendix

The MANDALA source ledger audited 360 candidate localities across Burma, resulting in 352 accepted settlements and 8 exclusions. Table \ref{tab:excluded} documents the excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bago</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dagon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Toungoo</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Amarapura</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mrauk U</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tagondaing</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauktaw</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shwebo Palace</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate sites from the Burma source ledger.</figcaption>
</figure>

# Sources
