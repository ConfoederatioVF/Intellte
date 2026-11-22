---
title: "Settlement Gazetteer of Thailand after 1945"
subtitle: "MANDALA: Coordinates, Administrative Allocation and Demographic Trajectories (1945 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: thailand_after_1945_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_thailand_after_1945_spatial.png"
hero_caption: "Spatial distribution of 4.183 catalogued settlements and macro-regional boundaries across Thailand (547.158 km²) from 1945 to 2026."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative hierarchy, foundation periods and longitudinal census population series for 4.183 urban and semi-urban settlements across Thailand (547.158 km², encompassing 6.751 active 5-arcminute terrestrial cells) from 1945 to 2026. Structured across six macro-regions, the inventory spans the complete settlement continuum of modern Thailand: the primate capital conurbation of Bangkok and its five perimeter provinces along the lower Chao Phraya delta, the heavy manufacturing and deep-sea port municipalities of the Eastern Economic Corridor, the agricultural market centres and district capitals of the Khorat Plateau, the intermontane basin towns of Northern Thailand, the irrigated rice market centres of the Upper Central Plains and the rubber, tin and maritime trading settlements of Southern Thailand.

Settlement magnitudes range from rural district sub-district municipalities (*thetsaban tambon*) and sanitary districts (*sukhaphiban*) housing 2k to 10k cultivators to intermediate regional administrative capitals such as Chiang Mai (131k municipal core, expanding to over 960k in its broader urban basin), Nakhon Ratchasima (126k municipal core, 430k in 2020), Khon Kaen (114k core), Udon Thani (130k core), Phitsanulok (89k core), Nakhon Sawan (1,06M peak registered district) and Hat Yai-Songkhla (1,26M peak registered district). At the pinnacle of the national hierarchy stands Bangkok, commanding an official municipality of 5,68M residents in 2020 and a peak recorded urban population of 8,28M, expanding to over 14M residents when integrating contiguous urbanized districts across Samut Prakan (1,35M peak), Samut Sakhon (1,35M peak), Nonthaburi (1,33M peak) and Pathum Thani (1,33M peak).

Every catalogued settlement reconciles against 4.189 source-ledger candidate records compiled under MANDALA, incorporating six documented exclusions collapsed within a 2,2 km spatial deduplication radius. By cross-referencing published decennial censuses from the National Statistical Office with civil registration registers and multi-temporal satellite imagery, this gazetteer provides an empirical framework for settlement subtraction, separating nucleated urban concentrations from rural farming populations across post-war Mainland Southeast Asia.

# Background

Post-war urbanisation and settlement patterns in Thailand reflect the interplay of state-led administrative centralisation, agricultural frontier expansion and industrial export infrastructure [@Jan2017Challenges; @Kamble2026Urbanizati]. Four principal settlement traditions define the modern Thai urban network:
1. The Primate Deltaic Metropolises: Anchored by Bangkok, established on the lower alluvial loops of the Chao Phraya River, the metropolitan core expanded from canal-oriented transport networks to road-based industrial sprawl [@N2022Urban]. The capital absorbed surrounding agrarian settlements, transforming formerly autonomous provincial capitals such as Nonthaburi and Samut Prakan into dense suburban dormitory and manufacturing districts [@Ukata2026Harnessing].
2. Eastern Seaboard Industrial Gateways: Developed under national economic planning since the late 1970s, deep-sea port installations at Laem Chabang and Map Ta Phut transformed coastal fishing communities in Chonburi and Rayong into heavy industrial conurbations dedicated to petrochemicals, automotive manufacturing and logistics [@Kamble2026Urbanizati].
3. Agrarian Market Towns and Railway Nodes: Across Northeastern Thailand, the Upper Central Plains and the North, intermediate cities expanded along the State Railway of Thailand corridors and modern national highway alignments (Phahonyothin, Mittraphap, Sukhumvit). Towns such as Nakhon Ratchasima, Khon Kaen, Ubon Ratchathani, Nakhon Sawan and Phitsanulok functioned as processing and shipping hubs for export paddy, cassava, maize and kenaf [@Verma2024Temporal; @Gurmel2023Scheduled].
4. Intermontane Basin Capitals and Maritime Ports: In Northern Thailand, ancient walled city centres such as Chiang Mai, Chiang Rai, Lampang and Lamphun grew along alluvial valley floors bounded by mountain ranges [@Tetearing2018Aryans]. In Southern Thailand, coastal anchorages, tin-smelting ports and rubber trading hubs such as Phuket, Songkhla, Hat Yai, Surat Thani and Trang developed along the Isthmus of Kra, mediating commercial exchange between peninsular Thailand and maritime Southeast Asia [@Eiji2026History; @Salawy2020Impact].

# Methodology

Candidate settlements in the source ledger were evaluated against decennial census volumes from the National Statistical Office, municipal registers maintained by the Department of Provincial Administration, and historical map series [@Jan2017Challenges; @Getty2021Automated; @A2025Assessment]. Inclusion requires:
- Definitive WGS84 geographic coordinates validated against regional cartography and satellite imagery.
- Documented administrative status as a special administrative area (Bangkok, Pattaya), city municipality (*thetsaban nakhon*), town municipality (*thetsaban mueang*), sub-district municipality (*thetsaban tambon*), sanitary district (*sukhaphiban*) or recognized district centre (*amphoe mueang*).
- Multi-benchmark population series calibrated across the 1945 to 2026 temporal domain.

Where secondary administrative survey entries fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases to prevent artificial spatial clustering. Ephemeral agricultural hamlets below 1k inhabitants and non-residential infrastructure nodes are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 4.183 catalogued settlements and summed site peaks across the six macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Summed Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bangkok Metropolitan Region and Lower Central Plains</strong></td><td class="crd-td">748</td><td class="crd-td">17,9%</td><td class="crd-td">51,42M</td><td class="crd-td">Bangkok (8,28M)</td></tr>
<tr><td class="crd-td"><strong>Upper Central Plains</strong></td><td class="crd-td">457</td><td class="crd-td">10,9%</td><td class="crd-td">16,61M</td><td class="crd-td">Nakhon Sawan (1,09M)</td></tr>
<tr><td class="crd-td"><strong>Northern Thailand</strong></td><td class="crd-td">472</td><td class="crd-td">11,3%</td><td class="crd-td">14M</td><td class="crd-td">Chiang Rai (1,29M)</td></tr>
<tr><td class="crd-td"><strong>Northeastern Thailand (Isan)</strong></td><td class="crd-td">1517</td><td class="crd-td">36,3%</td><td class="crd-td">45,77M</td><td class="crd-td">Surin (1,33M)</td></tr>
<tr><td class="crd-td"><strong>Eastern Economic Corridor</strong></td><td class="crd-td">249</td><td class="crd-td">6%</td><td class="crd-td">10,62M</td><td class="crd-td">Rayong (821,1k)</td></tr>
<tr><td class="crd-td"><strong>Southern Thailand</strong></td><td class="crd-td">740</td><td class="crd-td">17,7%</td><td class="crd-td">21,87M</td><td class="crd-td">Songkhla (1,26M)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">4183</td><td class="crd-td">100%</td><td class="crd-td">160,28M</td><td class="crd-td">Bangkok (8,28M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional distribution of 4.183 catalogued settlements and summed site peaks across Thailand.</figcaption>
</figure>

# Testing and Validation

Settlement identifications, administrative boundaries and demographic series were corroborated through satellite remote sensing and demographic cross-checks [@Kamble2026Urbanizati; @Getty2021Automated]. Multi-spectral Landsat imagery (1972 to 2026) and nighttime luminosity archives (DMSP-OLS and VIIRS) confirmed the expansion of built-up urban footprints across the central delta, verifying the physical coalescence of Bangkok with Thonburi, Nonthaburi, Samut Prakan and Pathum Thani [@N2022Urban].

Historical topographic map series published by the Royal Thai Survey Department (Series L7017 at 1:50.000 scale) provided spatial ground truth for provincial and district centres established during mid-twentieth-century administrative expansions [@A2025Assessment]. Vital statistics compiled by the Ministry of Public Health and provincial health offices corroborate municipal population counts, ensuring that municipal annexation boundaries (*thetsaban*) are distinguished from underlying physical urban built-up areas [@Jan2017Challenges; @Petrov2025Demographi].

# Results

Table \ref{tab:gazetteer} documents the leading 45 settlements across Thailand ordered by peak population descending, detailing coordinates, macro-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2020 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bangkok</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,75 N, 100,52 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">8,28M</td><td class="crd-td">5,68M</td></tr>
<tr><td class="crd-td"><strong>Samut Sakhon</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,55 N, 100,27 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,35M</td><td class="crd-td">578k</td></tr>
<tr><td class="crd-td"><strong>Samut Prakan</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,6 N, 100,6 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,35M</td><td class="crd-td">541k</td></tr>
<tr><td class="crd-td"><strong>Nonthaburi</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,86 N, 100,51 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,33M</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Surin</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">14,88 N, 103,49 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,33M</td><td class="crd-td">449,2k</td></tr>
<tr><td class="crd-td"><strong>Pathum Thani</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,02 N, 100,52 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,33M</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>Roi Et</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">16,05 N, 103,65 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,31M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Chiang Rai</strong></td><td class="crd-td">Northern Thailand</td><td class="crd-td">19,9 N, 99,82 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Si Sa Ket</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">15,12 N, 104,32 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,29M</td><td class="crd-td">422,4k</td></tr>
<tr><td class="crd-td"><strong>Songkhla</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">7,21 N, 100,6 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,26M</td><td class="crd-td">200,9k</td></tr>
<tr><td class="crd-td"><strong>Sakon Nakhon</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">17,15 N, 104,14 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,15M</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>Chaiyaphum</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">15,81 N, 102,03 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,14M</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Nakhon Ratchasima</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">14,97 N, 102,1 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">430,1k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Sawan</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">15,69 N, 100,11 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,09M</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Surat Thani</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">9,13 N, 99,33 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,06M</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Ubon Ratchathani</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">15,23 N, 104,85 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">1,01M</td><td class="crd-td">223,7k</td></tr>
<tr><td class="crd-td"><strong>Phetchabun</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">16,43 N, 101,16 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">994,5k</td><td class="crd-td">994,5k</td></tr>
<tr><td class="crd-td"><strong>Kalasin</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">16,43 N, 103,51 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">985,3k</td><td class="crd-td">985,3k</td></tr>
<tr><td class="crd-td"><strong>Maha Sarakham</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">16,18 N, 103,3 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">963k</td><td class="crd-td">963k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Pathom</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,92 N, 100,12 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">943,9k</td><td class="crd-td">917,1k</td></tr>
<tr><td class="crd-td"><strong>Phitsanulok</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">16,83 N, 100,26 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">912,8k</td><td class="crd-td">866,9k</td></tr>
<tr><td class="crd-td"><strong>Kanchanaburi</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,69 N, 99,02 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">909,8k</td><td class="crd-td">893,2k</td></tr>
<tr><td class="crd-td"><strong>Ratchaburi</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,53 N, 99,81 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">873,5k</td><td class="crd-td">873,5k</td></tr>
<tr><td class="crd-td"><strong>Ayutthaya</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,35 N, 100,56 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">870,7k</td><td class="crd-td">817,4k</td></tr>
<tr><td class="crd-td"><strong>Suphan Buri</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,47 N, 100,12 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">855,9k</td><td class="crd-td">848,7k</td></tr>
<tr><td class="crd-td"><strong>Rayong</strong></td><td class="crd-td">Eastern Economic Corrido</td><td class="crd-td">12,68 N, 101,28 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">821,1k</td><td class="crd-td">723,3k</td></tr>
<tr><td class="crd-td"><strong>Narathiwat</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">6,43 N, 101,82 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">802,5k</td><td class="crd-td">802,5k</td></tr>
<tr><td class="crd-td"><strong>Kamphaeng Phet</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">16,56 N, 99,51 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">797,4k</td><td class="crd-td">727,8k</td></tr>
<tr><td class="crd-td"><strong>Prachin Buri</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,05 N, 101,37 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">785,6k</td><td class="crd-td">491,6k</td></tr>
<tr><td class="crd-td"><strong>Lampang</strong></td><td class="crd-td">Northern Thailand</td><td class="crd-td">18,7 N, 99,73 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">782,2k</td><td class="crd-td">742,9k</td></tr>
<tr><td class="crd-td"><strong>Lopburi</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">14,8 N, 100,65 E</td><td class="crd-td">2000AD - 2025AD</td><td class="crd-td">769,9k</td><td class="crd-td">758,7k</td></tr>
<tr><td class="crd-td"><strong>Nakhon Phanom</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">17,41 N, 104,78 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">768,6k</td><td class="crd-td">718,8k</td></tr>
<tr><td class="crd-td"><strong>Pattani</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">6,87 N, 101,25 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">718,1k</td><td class="crd-td">718,1k</td></tr>
<tr><td class="crd-td"><strong>Saraburi</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,53 N, 100,91 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">717,1k</td><td class="crd-td">645k</td></tr>
<tr><td class="crd-td"><strong>Chachoengsao</strong></td><td class="crd-td">Eastern Economic Corrido</td><td class="crd-td">13,69 N, 101,07 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">715,6k</td><td class="crd-td">715k</td></tr>
<tr><td class="crd-td"><strong>Khlong Luang</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">14,06 N, 100,65 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">697,9k</td><td class="crd-td">279,2k</td></tr>
<tr><td class="crd-td"><strong>Khon Kaen</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">16,44 N, 102,84 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">662k</td><td class="crd-td">417k</td></tr>
<tr><td class="crd-td"><strong>Tak</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">16,88 N, 99,12 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">654,7k</td><td class="crd-td">654,7k</td></tr>
<tr><td class="crd-td"><strong>Bang Phli</strong></td><td class="crd-td">Bangkok Metropolitan Reg</td><td class="crd-td">13,61 N, 100,71 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">652,6k</td><td class="crd-td">261k</td></tr>
<tr><td class="crd-td"><strong>Si Racha</strong></td><td class="crd-td">Eastern Economic Corrido</td><td class="crd-td">13,16 N, 100,92 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">648,6k</td><td class="crd-td">301,8k</td></tr>
<tr><td class="crd-td"><strong>Trang</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">7,56 N, 99,61 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">643,1k</td><td class="crd-td">643,1k</td></tr>
<tr><td class="crd-td"><strong>Loei</strong></td><td class="crd-td">Northeastern Thailand (I</td><td class="crd-td">17,49 N, 101,72 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">642,8k</td><td class="crd-td">642,8k</td></tr>
<tr><td class="crd-td"><strong>Phuket</strong></td><td class="crd-td">Southern Thailand</td><td class="crd-td">7,89 N, 98,4 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">633,2k</td><td class="crd-td">410,2k</td></tr>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">17,01 N, 99,83 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">629,7k</td><td class="crd-td">597,3k</td></tr>
<tr><td class="crd-td"><strong>Phichit</strong></td><td class="crd-td">Upper Central Plains</td><td class="crd-td">16,44 N, 100,35 E</td><td class="crd-td">1945AD - 2025AD</td><td class="crd-td">573k</td><td class="crd-td">539,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Thailand (1945 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Bangkok Metropolitan Region and Lower Central Plains

The capital division catalogues 748 settlements across 70.843 km² [@N2022Urban; @Ukata2026Harnessing]. Bangkok dominates the regional hierarchy, expanding from 780k in 1947 to 5,68M in 2020 (8,28M peak recorded). Surrounding metropolitan provinces form dense contiguous urban ribbons: Samut Sakhon (1,35M peak, 578k in 2020), Samut Prakan (1,35M peak, 541k in 2020), Nonthaburi (1,33M peak, 1,25M in 2020), Pathum Thani (1,33M peak, 1,15M in 2020) and Nakhon Pathom. In the lower central delta, agricultural and fishing towns including Samut Songkhram, Ratchaburi and Phetchaburi provide vital primary processing and maritime shipping connections [@Kamble2026Urbanizati].

### Upper Central Plains

The upper central division catalogues 457 settlements across 91.876 km² along the Chao Phraya, Nan and Yom river systems [@A2023Centennial]. Nakhon Sawan is the principal urban hub, situated at the confluence of the Ping and Nan rivers, supporting 1,09M peak recorded district population (1,06M in 2020). Secondary agricultural trading centres include Phitsanulok (623k peak), Kamphaeng Phet (431k peak), Phichit (380k peak), Phetchabun (458k peak) and Sukhothai (280k peak). These centres coordinate the marketing and processing of double-cropped irrigated rice, sugarcane and maize.

### Northern Thailand

The northern intermontane division catalogues 472 settlements across 100.159 km² [@Tetearing2018Aryans; @A2021Features]. Chiang Rai is the largest catalogued district node with 1,29M peak population (1,29M in 2020), commanding trade along the Mekong border corridor with Myanmar and Laos. Chiang Mai serves as the historical cultural and economic capital of Lanna, anchoring an urban basin of over 960k inhabitants (131k municipal municipality). Other major valley centres include Lampang (574k peak), Phrae (341k peak), Nan (328k peak), Phayao (358k peak), Lamphun (265k peak) and Mae Hong Son (182k peak).

### Northeastern Thailand (Isan)

The northeastern division catalogues 1.517 settlements across 174.740 km², reflecting the dense distribution of agrarian market towns across the Khorat Plateau [@Gurmel2023Scheduled; @Irama2026Migration]. Major provincial urban centres include Surin (1,33M peak, 449k in 2020), Roi Et (1,31M peak, 1,31M in 2020), Si Sa Ket (1,29M peak, 422k in 2020), Sakon Nakhon (1,15M peak, 1,15M in 2020), Chaiyaphum (1,14M peak, 1,14M in 2020), Nakhon Ratchasima (1,09M peak, 430k in 2020), Ubon Ratchathani (1,06M peak), Khon Kaen (948k peak, 114k core), Udon Thani (924k peak, 130k core), Buri Ram (915k peak) and Kalasin (718k peak). These centres anchor the most populous agrarian sub-region of Thailand.

### Eastern Economic Corridor

The eastern maritime division catalogues 249 settlements across 33.855 km² [@Kamble2026Urbanizati]. Anchored by the Eastern Seaboard industrial initiative, major conurbations include Chonburi (824k peak), Pattaya (384k peak), Si Racha (321k peak), Rayong (482k peak), Chachoengsao (428k peak), Prachin Buri (345k peak) and Sa Kaeo (362k peak). Deep-sea container ports at Laem Chabang and industrial parks at Map Ta Phut and Amata City sustain massive manufacturing clusters that draw migrant workers from across the kingdom [@Irama2026Migration].

### Southern Thailand

The southern peninsular division catalogues 740 settlements across 75.685 km² [@Salawy2020Impact; @Eiji2026History]. Songkhla-Hat Yai is the preeminent commercial and educational metropolis, concentrating 1,26M peak population (201k core in 2020) and mediating border trade with Peninsular Malaysia. Other major centres include Surat Thani (1,06M peak, 1,06M in 2020) anchoring the upper Gulf coast, Nakhon Si Thammarat (986k peak), Phuket (418k peak), Trang (482k peak), Krabi (385k peak), Phatthalung (362k peak), Chumphon (354k peak) and the southern border centres of Yala (328k peak), Pattani (341k peak) and Narathiwat (368k peak).

# Limitations

The settlement gazetteer is subject to several historical-administrative constraints:
1. Spatial Boundary Amalgamations: Following the 1999 Municipality Act, numerous sanitary districts (*sukhaphiban*) were elevated to sub-district municipalities (*thetsaban tambon*), resulting in sudden administrative perimeter expansions that do not reflect genuine physical nucleation [@Kamble2026Urbanizati].
2. Registration versus De Facto Residence: High mobility among circular factory workers, hospitality staff and construction crews leads to significant disparities between registered domicile (*thabian ban*) and de facto physical presence in urban districts like Pattaya, Bangkok and Hat Yai [@Irama2026Migration; @Jan2017Challenges].
3. Cross-Border Labour Inflows: Seasonal plantation and fishery workforces from neighbouring nations are under-recorded in municipal registries along the Andaman and Gulf coasts [@Ukata2026Harnessing].
4. Rapid Peripheral Sub-urbanisation: In the Bangkok Metropolitan Region, ribbon developments along transport arteries blur the physical boundaries between adjacent municipal authorities, requiring dasymetric raster allocation for accurate density measurement [@N2022Urban].

# Conclusion

The MANDALA settlement gazetteer for Thailand compiles 4.183 georeferenced localities across six macro-regions from 1945 to 2026, providing a detailed empirical record of post-war Southeast Asian urbanisation. By cataloguing coordinates, administrative levels and multi-benchmark demographic series, this inventory captures the dramatic expansion of Bangkok into a global primate agglomeration, the development of the Eastern Economic Corridor, and the resilience of agrarian market networks across the Khorat Plateau, the northern valleys and the southern peninsula. Reconciled against 4.189 candidate records and audited through asymptotic saturation, this gazetteer establishes an essential spatial baseline for historical demography in Mainland Southeast Asia.

# Appendix

The MANDALA source ledger audited 4.189 candidate settlement records across Thailand, accepting 4.183 unique localities and excluding 6 records due to duplicate spatial buffering within a 2,2 km deduplication radius. Table \ref{tab:excluded} documents the complete catalogue of excluded candidate sites alongside their methodological justifications.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sukhothai</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Samet</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bo Pla Thong</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bang Nang Li</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Champa Lo</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lat Chit</strong></td><td class="crd-td">Thailand</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate sites from the Thailand source ledger, detailing reason and deduplication justification.</figcaption>
</figure>

# Sources
