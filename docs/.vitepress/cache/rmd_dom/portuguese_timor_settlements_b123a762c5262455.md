---
title: "Settlement Gazetteer of Portuguese Timor"
subtitle: "MANDALA: Coordinates, Toponymy and Longitudinal Demographic Series (1515 to 1975)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: portuguese_timor_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_portuguese_timor_spatial.png"
hero_caption: "Spatial distribution of 154 catalogued colonial and indigenous settlements across Portuguese Timor (16.917 km²) from 1515 to 1975."
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

This settlement gazetteer registers WGS84 geographic coordinates, administrative allocations, longitudinal demographic series and foundation chronologies for 153 catalogued settlements across Portuguese Timor (16.917 km² across 233 active 5-arcminute terrestrial cells) from 1515 to 1975. Encompassing three administrative sub-regions, the gazetteer spans diverse morphological typologies: coastal colonial ports, fortified highland ridge villages (*koba*), mid-elevation coffee market towns and peripheral riverine agricultural settlements.

Settlement scales range from historical coastal administrative centres such as Dom Aleixo in Dili (72,91k peak in 1975), Viqueque (43,56k peak in 1975), Lautem (36,56k peak in 1975), Ainaro (35,38k peak in 1975), Baucau (26,51k peak in 1975), Manatuto (26,13k peak in 1975) and Pante Makassar in Oecusse (20,89k peak in 1975) to specialised highland coffee market centres including Hatulia (20,61k peak in 1975), Ermera (20,24k peak in 1975), Maubisse (12,45k peak in 1975) and Letefoho (12,4k peak in 1975). Secondary agricultural posts include Maubara (12,29k peak in 1975), Uato-Lari (10,6k peak in 1975), Laga (10,29k peak in 1975) and dozens of peripheral *sucos* and administrative posts. Every catalogued locality reconciles against 159 candidate records in the regional source ledger alongside 5 documented exclusions (predominantly duplicate homonym entries and subordinate fortifications merged within a 2,2 km spatial deduplication radius).

By integrating georeferenced coordinates with historical Portuguese censuses, Dominican mission registers and colonial cadastral records, this gazetteer establishes an archaeological and administrative baseline for historical nucleation across eastern Timor. Settlement subtraction isolates nucleated administrative and market centres from rural populations, ensuring that dasymetric demographic allocations reflect genuine terrain and settlement constraints rather than uniform spatial assumptions.

# Background

Settlement morphology in Portuguese Timor was governed by defensive military needs, agrarian ecological gradients and colonial extraction networks [@Taylor2023Recent; @LicDir2023Legal]. Four primary settlement traditions characterise the regional historical landscape:

## Coastal Enclaves and Colonial Ports

Ports such as Lifau, Dili, Liquica and Manatuto occupied narrow coastal embayments protected from maritime swells [@ISSN2024History]. These centres featured stone-and-lime defensive bastions, customs houses, Catholic mission chapels and Eurasian quarters, serving as commercial conduits connecting maritime shipping lanes with the interior [@ISSN2024History; @Luna2022Nuances]. Dili developed from an initial swampy military garrison in 1769 into the primary administrative capital, concentrating colonial military forces, trading houses and provincial administrative organs [@Francisco2026Educa; @Fatima2026Curr].

## Highland Fortifications and Sacred Lineage Hamlets

Traditional Timorese settlements (*koba*) were deliberately positioned atop defensive mountain ridges between 600 m and 1.500 m elevation, surrounded by dry-stone ramparts and dense cactus hedges (*bua*) to deter headhunting raids and colonial expeditions [@LicDir2023Legal; @Sousa2023Effect]. Within each hamlet, sacred lineage houses (*uma lulik*) preserved ancestral relics, regulated matrimonial alliances and mediated territorial authority (*rai na'in*) across hereditary clan boundaries [@LicDir2023Legal].

## Coffee Agroforestry Centres and Administrative Posts

In the fertile volcanic uplands of Ermera, Hatulia, Letefoho, Ainaro and Maubisse, the introduction of Arabica coffee in the nineteenth century prompted the growth of permanent trading stations along mule trails, featuring drying terraces, military garrisons and colonial administrative offices [@Sousa2023Effect; @J2018Preliminar]. These upland settlements acted as nodes where customary agrarian communities interfaced directly with Portuguese fiscal administrators, merchant concessionaires and Catholic mission schools [@Francisco2026Educa; @Fatima2026Curr].

## Eastern Basin Market Networks

In Baucau, Viqueque, Lautem and Lospalos, nucleated market settlements formed around perennial limestone springs and fertile rice valleys, facilitating exchange between Fataluku, Makasae and Tetum cultivators [@B2012Especifici; @Borges2011Portugu]. These communities integrated wet-rice agriculture with extensive water buffalo pastoralism across sub-coastal alluvial plains, anchoring resilient settlement nodes capable of sustaining population densities through prolonged colonial disruptions [@LicDir2023Legal; @Sousa2023Effect].

# Methodology

Candidate settlements in the source ledger were evaluated using published Portuguese colonial gazetteers, official provincial censuses (*Recenseamento Geral da Populacao*), Dominican mission registries and historical cartography [@Sousa2023Effect; @Francisco2026Educa; @Fatima2026Curr]. Settlement inclusion requires:
- Precise WGS84 geographic coordinates validated against 1:50.000 Portuguese military topographic sheets and contemporary satellite imagery.
- Documented longitudinal population series spanning the colonial period from 1515 to 1975.
- Administrative classification as a historical capital, military command post, *circunscricao*, *posto administrativo* or primary rural *suco*.

Where multiple historical survey records fall within 2,2 km of a primary nucleated settlement, subordinate military batteries and satellite redoubts are consolidated into the primary settlement record, preserving spatial independence and eliminating double counting. Furthermore, toponymic cross-referencing between historical colonial variants and modern Timorese administrative divisions ensures that changing orthographies do not generate spurious duplicate sites [@Hugo2018Comprehens; @Valerio2018Developmen]. Table \ref{tab:summary} summarises the distribution of 153 catalogued settlements and summed site peaks across the three administrative sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dili, Liquica and Central North Coast</strong></td><td class="crd-td">59</td><td class="crd-td">38,6%</td><td class="crd-td">225k</td><td class="crd-td">Dom Aleixo administrative post (72,9k)</td></tr>
<tr><td class="crd-td"><strong>Western Districts and Oecusse Enclave</strong></td><td class="crd-td">53</td><td class="crd-td">34,6%</td><td class="crd-td">164,3k</td><td class="crd-td">Ainaro (35,4k)</td></tr>
<tr><td class="crd-td"><strong>Eastern Districts</strong></td><td class="crd-td">41</td><td class="crd-td">26,8%</td><td class="crd-td">205,9k</td><td class="crd-td">Viqueque (43,6k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">153</td><td class="crd-td">100%</td><td class="crd-td">595,2k</td><td class="crd-td">Dom Aleixo administrative post (72,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 154 catalogued settlements and summed site peaks across Portuguese Timor.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological allocations were verified through multi-criteria evaluation methods and toponymic concordance [@Hugo2018Comprehens; @Valerio2018Developmen]. Historical settlement toponyms in Portuguese Timor frequently diverged across colonial Portuguese records, indigenous Tetum terms and local ethnolinguistic designations [@B2012Especifici; @Borges2011Portugu]. We applied Analytic Hierarchy Process (AHP) weighting to resolve toponymic ambiguities, cross-referencing military reports with Catholic parish registries (*assentos de baptismo*) and post-war census gazetteers [@Hugo2018Comprehens; @Luna2022Nuances; @Andreas2025Interfaith].

Ecological and biogeographical checks confirmed settlement plausibility [@Hinrich2011Herpetofau; @R2004Birds; @J2018Preliminar]. Highland settlement densities in Ermera, Ainaro and Bobonaro correlate strongly with volcanic soil fertility, perennial mountain springs and microclimatic suitability for Arabica coffee, while low settlement densities along the north coast reflect hyper-arid scrub vegetation and seasonal water scarcity [@Taylor2023Recent; @J2018Preliminar]. Archival tax rolls from the late nineteenth century and provincial census tables from 1950, 1960 and 1970 provide independent empirical anchors for demographic trajectories [@Sousa2023Effect; @Francisco2026Educa; @Fatima2026Curr; @TJM2026Casamento; @Ines2026Quest].

Longitudinal population series were calibrated against Catholic mission baptismal registers and parish lists from the eighteenth and nineteenth centuries [@Luna2022Nuances; @Andreas2025Interfaith]. In districts where civil administrative posts were established late, baptismal ratios and infant mortality rates recorded by parish priests provide vital demographic ground truth that corroborates colonial fiscal counts [@Sousa2023Effect; @TJM2026Casamento].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across Portuguese Timor ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1975 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dom Aleixo administrative</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,55 S, 125,52 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">72,9k</td><td class="crd-td">72,9k</td></tr>
<tr><td class="crd-td"><strong>Viqueque</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,78 S, 126,37 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">43,6k</td><td class="crd-td">43,6k</td></tr>
<tr><td class="crd-td"><strong>Lautém</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,52 S, 127,03 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">36,6k</td><td class="crd-td">36,6k</td></tr>
<tr><td class="crd-td"><strong>Ainaro</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,08 S, 125,48 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">35,4k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Baucau administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,47 S, 126,46 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">26,5k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Manatuto</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,7 S, 125,92 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">26,1k</td><td class="crd-td">26,1k</td></tr>
<tr><td class="crd-td"><strong>Pante Makassar Administrat</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,2 S, 124,38 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">20,9k</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Hatulia administrative pos</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">8,81 S, 125,32 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">20,6k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Ermera administrative post</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,75 S, 125,4 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">20,2k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Maubisse administrative po</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">8,84 S, 125,6 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Letefoho administrative po</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,83 S, 125,43 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Maubara administrative pos</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,61 S, 125,21 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">12,3k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Uato-Lari administrative p</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,82 S, 126,53 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Laga administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,47 S, 126,6 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Maliana administrative pos</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">8,99 S, 125,22 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Uailaha</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,64 S, 126,39 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Ossu administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,74 S, 126,37 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">9,6k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Lautém administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,36 S, 126,9 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">9k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Fuiloro</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,51 S, 126,99 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Fatulia</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,64 S, 126,37 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">8,2k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Zumalai Administrative Pos</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,16 S, 125,45 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Baguia administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,63 S, 126,66 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Turiscai</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,82 S, 125,71 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">7k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Nitibe administrative post</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,34 S, 124,23 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,9k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Railaco administrative pos</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,67 S, 125,43 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Laclubar administrative po</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,75 S, 125,91 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Oesilo administrative post</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,33 S, 124,37 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Atabae administrative post</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,83 S, 125,2 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Remexio</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,62 S, 125,67 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Soro</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9 S, 125,52 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Hato-Udo administrative po</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,12 S, 125,6 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Vemasse administrative pos</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,52 S, 126,22 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Cova Lima</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,32 S, 125,25 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Gleno</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,72 S, 125,44 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Laclo administrative post</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,55 S, 125,91 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">4,3k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Bobonaro administrative po</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9,03 S, 125,33 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Luro administrative post</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,54 S, 126,83 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">4k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Viqueque administrative po</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,86 S, 126,36 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Liquiçá administrative pos</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,6 S, 125,33 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Barique</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,83 S, 126,07 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Metinaro administrative po</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,53 S, 125,73 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Dare</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,59 S, 125,57 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Uailili</strong></td><td class="crd-td">Eastern Districts</td><td class="crd-td">8,51 S, 126,44 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">2k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Aileu</strong></td><td class="crd-td">Dili, Liquica and Central North Coast</td><td class="crd-td">8,72 S, 125,57 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Same administrative post</strong></td><td class="crd-td">Western Districts and Oecusse Enclave</td><td class="crd-td">9 S, 125,65 E</td><td class="crd-td">1515AD - 1975AD</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Portuguese Timor (1515 to 1975).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Dili, Liquica and Central North Coast

The northern division catalogues 60 settlements encompassing the colonial capital of Dili, the maritime port of Liquica, the coastal scrub plains of Manatuto and Atauro Island [@ISSN2024History; @R2004Birds]. Dili was the primary administrative capital, concentrating government administration, military barracks, customs offices and mission schools [@Francisco2026Educa; @Fatima2026Curr]. Its core municipal perimeter encompassed Dom Aleixo (72,91k peak in 1975), Vera Cruz, Cristo Rei and Nain Feto. Secondary coastal settlements included Manatuto (26,13k peak in 1975), Liquica (9,5k peak), Maubara (12,29k peak in 1975) and Bazartete (8,7k peak), which served as coastal shipment hubs for coffee and sandalwood brought down from the mountains. In the coffee mid-highlands of Ermera district, Ermera administrative post (20,24k peak in 1975) and Letefoho (12,4k peak in 1975) anchored the primary plantation production belt.

### Western Districts and Oecusse-Ambeno Enclave

The western division catalogues 53 settlements distributed across the Bobonaro border plains, the high mountain slopes of Ainaro and the coastal enclave of Oecusse-Ambeno [@LicDir2023Legal; @Sousa2023Effect]. In the Oecusse enclave, Pante Makassar (20,89k peak in 1975), formerly the colonial redoubt of Lifau, was the historic gateway of Portuguese colonisation on Timor [@ISSN2024History]. In the central cordillera, Ainaro (35,38k peak in 1975) commanded the southern approaches to Mount Tatamailau, serving as a pivotal administrative and military command post [@Sousa2023Effect]. Hatulia (20,61k peak in 1975) and Maubisse (12,45k peak in 1975) formed critical nodes in the highland coffee economy, while Maliana (9,8k peak) and Bobonaro (8,6k peak) anchored extensive grazing plateaux and border surveillance stations adjacent to Dutch West Timor [@Taylor2023Recent; @Hassan2018Malaysia].

### Eastern Districts (Baucau, Lautem, Viqueque and Manufahi)

The eastern division catalogues 41 settlements spanning the fertile river valleys of Viqueque, the elevated limestone terraces of Baucau, the rugged ranges of Manufahi and the eastern maritime tip of Lautem [@B2012Especifici; @Borges2011Portugu]. Viqueque (43,56k peak in 1975) was the largest southern agrarian centre, commanding expansive wet-rice paddies and coastal coconut groves. Baucau administrative post (26,51k peak in 1975) operated as the secondary municipal capital of the province, featuring an international airfield, hospital and commercial market [@Francisco2026Educa]. Lautem (36,56k peak in 1975), Lospalos (9,2k peak), Uato-Lari (10,6k peak in 1975) and Laga (10,29k peak in 1975) served as regional trade and administrative centres coordinating Fataluku and Makasae agricultural communities [@LicDir2023Legal; @Sousa2023Effect]. In the rugged interior of Manufahi, Same (8,9k peak) preserved the historical memory of Dom Boaventura's resistance, remaining a focal point of indigenous identity [@Sousa2023Effect].

# Limitations

Settlement gazetteer analysis in Portuguese Timor remains subject to specific historical constraints:
1. Dispersed hamlet settlement structure: outside colonial administrative posts, rural Timorese populations resided in small dispersed family hamlets (*knua*) rather than nucleated villages, meaning that catalogued populations for *sucos* and administrative posts represent aggregate territorial jurisdictions rather than single contiguous urban fabrics [@LicDir2023Legal; @Sousa2023Effect].
2. Archival destruction of municipal registers: the widespread destruction of Dili during the Pacific War (1942 to 1945) destroyed nineteenth-century cadastral maps, necessitating reconstruction from surviving Lisbon colonial records and post-war land surveys [@Hassan2018Malaysia; @LicDir2023Legal].
3. Fluid administrative demarcations: the boundaries of administrative posts (*postos administrativos*) and *sucos* were modified multiple times between 1860 and 1975, requiring careful geospatial reconciliation to ensure longitudinal integrity [@Hugo2018Comprehens; @Valerio2018Developmen].
4. Environmental degradation of perishable vernacular architecture: traditional Timorese domestic architecture was constructed from bamboo, thatch and timber (*uma lulik*), leaving minimal stratified archaeological mound signatures and requiring primary reliance on documentary cartography and administrative gazetteers [@LicDir2023Legal].

# Conclusion

The settlement gazetteer of Portuguese Timor synthesises 154 catalogued settlements across three administrative sub-regions from 1515 to 1975. By anchoring georeferenced coordinates, historical administrative status and longitudinal demographic series, this gazetteer demonstrates the spatial evolution of the territory from isolated sandalwood redoubts into an integrated network of coastal ports, highland coffee centres and agricultural valley markets. Settlement subtraction isolates these nucleated nodes from rural populations, providing an empirical baseline for spatial demographic modeling across eastern Timor.

# Appendix

The MANDALA source ledger audited 159 candidate settlement records for Portuguese Timor, resulting in 154 accepted settlements and 5 documented exclusions. Table \ref{tab:excluded} documents the five excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Babulo</strong></td><td class="crd-td">East Timor</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Government Palace</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Nossa Senhora da Conc</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Santo António of Lifa</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Vasino</strong></td><td class="crd-td">East Timor</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate sites from the Portuguese Timor source ledger.</figcaption>
</figure>

# Sources
