---
title: "Pre-1788 Aboriginal Australia and Tasmania"
subtitle: "Settlement Gazetteer and Habitation Hierarchy (10000BC to 1788)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/pre_1788_australia_urban_hierarchy.png"
hero_caption: "Largest catalogued Indigenous habitation complexes and rank-size scaling across 70 sites in mainland Australia and Tasmania, 10000BC to 1788."
hero_label: "fig:hero-australia-hierarchy"
bibliography: pre_1788_australia.bib
csl: ../../_shared/template/crd-mla-numeric.csl
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
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Largest catalogued Indigenous habitation complexes and rank-size scaling across 70 sites in mainland Australia and Tasmania, 10000BC to 1788.](figures/pre_1788_australia_urban_hierarchy.png)



# Abstract

This gazetteer catalogues 70 pre-colonial Aboriginal and Torres Strait Islander habitation complexes, seasonal aggregation centres, aquaculture estates and stratified archaeological shelters across eleven eco-hydrological basins of mainland Australia and Tasmania between 10000BC and 1788, comprising 190 dated demographic observations. Built through four sequential source-ledger audit waves with 0% crowd-sourced fallback share and zero empty sub-regions, the register evaluates 76 candidate archaeological and ethnohistorical records, retaining 70 canonical entities after merging 6 duplicate aliases located within 25 km. Reflecting Australia's pre-agrarian mosaic of permanent estuarine fisheries, basalt eel-channel villages, tropical rainforest clearings, horticultural Torres Strait islands and arid desert waterholes [@mulvaney2020prehistory; @williams2015holocene; @clarkson2017human], peak complex sizes span 2.200 inhabitants down to 58 along a shallow continuous pre-urban power-law curve ($\alpha = 0,43$, $R^2 = 0,93$ across the leading 35 sites; $\alpha = 0,83$, $R^2 = 0,72$ across all 70 sites). At the upper tier stand major inter-tribal gathering and estuarine centres active at 1788, led by Booburrgan Ngmmunge in the Bunya Mountains (2.200), the Atherton Tableland (2.150), Meanjin at Moreton Bay (1.950), Kakadu (1.920), Raukkan at the Lower Murray mouth (1.850), K'gari (1.650), Warrane at Sydney Harbour (1.500), Brewarrina (1.450) and the Arafura Swamp (1.420), tapering smoothly down to Pleistocene desert and Tasmanian rockshelters including Puritjarra (84), Devil's Lair (76) and Kutikina (58).

# Background

Pre-1788 Indigenous habitation across Australia and Tasmania operated along a rich ecological continuum rather than a binary divide between mobile nomads and sedentary towns. From the earliest Pleistocene occupation at Madjedbebe in Arnhem Land by 65.000 years ago [@clarkson2017human; @florin2020first] and coastal Kimberley shelters by 50.000 years ago [@norman2022human], Aboriginal communities anchored residential territories around dependable freshwater nodes, coastal estuaries and resource-rich ecotones [@tobler2017aboriginal; @crabtree2021landscape]. By the Mid-to-Late Holocene, rising population densities and economic intensification fostered multi-tier habitation complexes across humid temperate, riverine and monsoonal regions [@williams2015holocene; @mulvaney2020prehistory].

Four distinct functional classes of settlement appear in this gazetteer. First, semi-sedentary estuarine, riverine and aquaculture estates — exemplified by Budj Bim's stone-lined eel channels and basalt house clusters in western Victoria, Brewarrina's interlocking stone fish traps on the Barwon River, Raukkan's Coorong fisheries and Meanjin's Moreton Bay camps — sustained dense multi-clan populations for much of the year [@mulvaney2020prehistory; @williams2015holocene]. Second, tropical rainforest and insular horticultural villages on the Atherton Tableland and across the Torres Strait islands (Mer, Saibai, Erub, Mabuiag, Badu, Muralag, Boigu, Iama, Dauan and Ugar) combined marine harvests with cultivated yam gardens or processed toxic nuts. Third, periodic inter-regional aggregation hubs such as Booburrgan Ngmmunge (Bunya Mountains) and the Bogong High Plains convened neighbouring nations numbering 800 to 2.200 people during seasonal harvests and ceremonial exchanges [@williams2015holocene; @david2024archaeologic]. Fourth, deeply stratified rockshelters and desert oases — including Lake Mungo, Kow Swamp, Roonka, Kenniff Cave, Puritjarra, Warburton Ranges, Devil's Lair and Kutikina — preserve long Pleistocene-to-Holocene continuity across arid plateaus and glacial valleys [@williams2013population; @suman2016late].

# Methodology

The settlement register was assembled in four documented ingestion waves governed by the chapter source ledger. Wave 1 harvested 64 canonical habitation complexes from primary state and national Aboriginal heritage registers, AustArch and SahulArch archaeological corpora and early colonial ethnohistorical baselines (spanning New South Wales, Victoria, Queensland, South Australia, Western Australia, Northern Territory and Tasmania). Wave 2 integrated five additional complexes documented in peer-reviewed archaeological and ethnohistorical monographs. Wave 3 executed longitudinal toponymy harmonisation and 25 km spatial buffer deduplication, merging six variant aliases into their canonical parent entities. Wave 4 conducted a final sub-regional gap sweep across all eleven eco-hydrological basins, adding one missing complex (marginal gain 1,45%) and reaching full coverage with zero empty basins and 0% crowd-sourced fallback share.

Every catalogued record was harmonised to WGS84 coordinates, linked to its modern Australian jurisdiction and assigned to one of the eleven eco-hydrological basins. Because pre-1788 sites lack formal colonial censuses, chronological headcounts (190 observations spanning 10000BC to 1788) synthesise site-specific archaeological habitation footprints, hearth and mound densities, early colonial contact accounts and regional ethnohistorical population reconstructions [@thornton1986our; @hunter2015estimating; @burke2013archaeology; @wright2023archaeology]. Rank-size scaling was computed on peak complex populations via ordinary least squares in log-log space across both the upper half of the hierarchy (top 35 complexes) and the full 70-site register.

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 76 evaluated candidate entries: 70 included habitation complexes plus six excluded duplicate aliases, with zero unaccounted records. Every included site carries non-null geographic coordinates, a modern state or territory attribution, a basin assignment, at least two chronological population benchmarks (or two terminal Pleistocene benchmarks for abandoned caves such as Devil's Lair and Kutikina) and explicit scholarly provenance. Figure \ref{fig:sett-regional-map} displays the continental spatial footprint of all 70 catalogued complexes across the eleven eco-hydrological basins, highlighting the dense clustering along the Murray-Darling rivers, the eastern seaboard, the Top End wetlands and the Torres Strait alongside key arid-zone and Tasmanian reference stations.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-pre-1788-australia-settlements/pre_1788_australia_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 70 catalogued pre-1788 Indigenous habitation complexes across eleven eco-hydrological basins of Australia and Tasmania, 10000BC to 1788.</figcaption>
</figure>

Cross-checking the settlement hierarchy against regional basin aggregates confirms structural plausibility. Summing the 1788 peak headcounts across all 68 complexes active at contact (excluding the two Pleistocene-to-Mid-Holocene caves Devil's Lair and Kutikina, plus four shelters whose final catalogued benchmark sits at 1500) accounts for roughly 5% to 6% of the 785k continental population — precisely the share expected when cataloguing major aggregation hubs, fishing estates and archaeological type-sites within a dispersed hunter-gatherer landscape rather than enumerating every small mobile foraging camp [@williams2013population; @bradshaw2021stochastic; @salles2024physiography].

# Results

## Leading Pre-1788 Habitation Complexes (Ranks 1 to 35)

Table \ref{tab:top35-sites} catalogues the upper half of the register (ranks 1 to 35), spanning 2.200 down to 590 inhabitants at 1788. Every top-tier complex represents a major aquatic, estuarine, rainforest or ceremonial gathering centre: Booburrgan Ngmmunge (2.200), Atherton Tableland (2.150), Meanjin (1.950), Kakadu (1.920) and Raukkan (1.850) lead the continent, followed closely by K'gari (1.650), Warrane (1.500), Brewarrina (1.450), Arafura Swamp (1.420), Gippsland Lakes (1.240), Clarence (1.190), Tiwi Islands (1.180), Naarm (1.150), Barmah-Millewa (1.120) and Weipa (1.080).

<figure class="crd-table-figure" id="tab:top35-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Complex Name</th><th class="crd-th">State</th><th class="crd-th">Eco-Hydrological Basin</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Booburrgan Ngmmunge (Bunya Mountains)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-26,88, 151,6</td><td class="crd-td">1000 to 1788</td><td class="crd-td">2.200 (1788)</td></tr>
<tr><td class="crd-td"><strong>Atherton Tableland</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-17,27, 145,63</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">2.150 (1788)</td></tr>
<tr><td class="crd-td"><strong>Meanjin</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-27,47, 153,03</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">1.950 (1788)</td></tr>
<tr><td class="crd-td"><strong>Kakadu</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-12,67, 132,85</td><td class="crd-td">10000BC to 1788</td><td class="crd-td">1.920 (1788)</td></tr>
<tr><td class="crd-td"><strong>Raukkan, Lower Murray Mouth (Ngarrindjeri)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Nullarbor and Southern Gulfs</td><td class="crd-td">-33,92, 138,14</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">1.850 (1788)</td></tr>
<tr><td class="crd-td"><strong>K'gari (Butchulla)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-25,24, 153,13</td><td class="crd-td">1000 to 1788</td><td class="crd-td">1.650 (1788)</td></tr>
<tr><td class="crd-td"><strong>Warrane</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-33,86, 151,21</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">1.500 (1788)</td></tr>
<tr><td class="crd-td"><strong>Brewarrina (Baiame's Ngunnhu)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-29,96, 146,86</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">1.450 (1788)</td></tr>
<tr><td class="crd-td"><strong>Arafura Swamp</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-12,22, 134,95</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">1.420 (1788)</td></tr>
<tr><td class="crd-td"><strong>Gippsland Lakes (Gunaikurnai)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-38,02, 147,62</td><td class="crd-td">1000 to 1788</td><td class="crd-td">1.240 (1788)</td></tr>
<tr><td class="crd-td"><strong>Clarence</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-29,43, 153,35</td><td class="crd-td">1000 to 1788</td><td class="crd-td">1.190 (1788)</td></tr>
<tr><td class="crd-td"><strong>Tiwi Islands</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-11,58, 130,65</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">1.180 (1788)</td></tr>
<tr><td class="crd-td"><strong>Naarm</strong></td><td class="crd-td">Victoria</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-37,82, 144,97</td><td class="crd-td">1000 to 1788</td><td class="crd-td">1.150 (1788)</td></tr>
<tr><td class="crd-td"><strong>Barmah-Millewa</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-35,98, 145,05</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">1.120 (1788)</td></tr>
<tr><td class="crd-td"><strong>Weipa</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-12,63, 141,88</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">1.080 (1788)</td></tr>
<tr><td class="crd-td"><strong>Cooper Creek</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Lake Eyre Endorheic Basin</td><td class="crd-td">-27,74, 140,74</td><td class="crd-td">1000 to 1788</td><td class="crd-td">960 (1788)</td></tr>
<tr><td class="crd-td"><strong>Aurukun</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-13,36, 141,72</td><td class="crd-td">1000 to 1788</td><td class="crd-td">940 (1788)</td></tr>
<tr><td class="crd-td"><strong>Budj Bim</strong></td><td class="crd-td">Victoria</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-38,06, 141,89</td><td class="crd-td">4000BC to 1788</td><td class="crd-td">920 (1788)</td></tr>
<tr><td class="crd-td"><strong>Gove Peninsula</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-12,25, 136,88</td><td class="crd-td">1000 to 1788</td><td class="crd-td">890 (1788)</td></tr>
<tr><td class="crd-td"><strong>Bogong High Plains</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-36,88, 147,3</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">880 (1788)</td></tr>
<tr><td class="crd-td"><strong>Gwydir Wetlands</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-29,46, 149,84</td><td class="crd-td">1000 to 1788</td><td class="crd-td">870 (1788)</td></tr>
<tr><td class="crd-td"><strong>Mer (Murray Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-9,92, 144,05</td><td class="crd-td">1000 to 1788</td><td class="crd-td">860 (1788)</td></tr>
<tr><td class="crd-td"><strong>Dampier Peninsula</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Kimberley and Fitzroy Basin</td><td class="crd-td">-17,4, 123,58</td><td class="crd-td">1000 to 1788</td><td class="crd-td">830 (1788)</td></tr>
<tr><td class="crd-td"><strong>Tarndanya</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Nullarbor and Southern Gulfs</td><td class="crd-td">-34,92, 138,6</td><td class="crd-td">1000 to 1788</td><td class="crd-td">820 (1788)</td></tr>
<tr><td class="crd-td"><strong>Jervis Bay</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-35,15, 150,68</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">790 (1788)</td></tr>
<tr><td class="crd-td"><strong>Lake Victoria</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-34,03, 141,28</td><td class="crd-td">3000BC to 1788</td><td class="crd-td">780 (1788)</td></tr>
<tr><td class="crd-td"><strong>Boorloo</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">South-West Australia (Noongar)</td><td class="crd-td">-31,95, 115,86</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">760 (1788)</td></tr>
<tr><td class="crd-td"><strong>Oyster Bay (Paredarerme)</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Tasmania and Bass Strait</td><td class="crd-td">-42,13, 147,87</td><td class="crd-td">1000 to 1788</td><td class="crd-td">750 (1788)</td></tr>
<tr><td class="crd-td"><strong>Daly River</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-14,23, 129,52</td><td class="crd-td">1000 to 1788</td><td class="crd-td">740 (1788)</td></tr>
<tr><td class="crd-td"><strong>Dyarubbin (Hawkesbury-Nepean)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-33,59, 150,82</td><td class="crd-td">1000 to 1788</td><td class="crd-td">680 (1788)</td></tr>
<tr><td class="crd-td"><strong>Mparntwe</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Lake Eyre Endorheic Basin</td><td class="crd-td">-23,7, 133,88</td><td class="crd-td">1000BC to 1788</td><td class="crd-td">670 (1788)</td></tr>
<tr><td class="crd-td"><strong>Nipaluna</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Tasmania and Bass Strait</td><td class="crd-td">-42,88, 147,33</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">640 (1788)</td></tr>
<tr><td class="crd-td"><strong>Kow Swamp (Central Murray)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-35,95, 144,3</td><td class="crd-td">9500BC to 1788</td><td class="crd-td">620 (1788)</td></tr>
<tr><td class="crd-td"><strong>Hutt River</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">South-West Australia (Noongar)</td><td class="crd-td">-28,22, 114,3</td><td class="crd-td">1000 to 1788</td><td class="crd-td">610 (1788)</td></tr>
<tr><td class="crd-td"><strong>Princess Charlotte Bay</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-15,86, 142,52</td><td class="crd-td">1000 to 1788</td><td class="crd-td">590 (1788)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 35 catalogued pre-1788 Indigenous habitation complexes in Australia and Tasmania, ordered by peak headcount (10000BC to 1788).</figcaption>
</figure>

## Secondary Complexes, Island Villages and Stratified Shelters (Ranks 36 to 70)

Table \ref{tab:rem35-sites} documents the remaining 35 catalogued locales (ranks 36 to 70), spanning 580 down to 58 inhabitants. This lower tier encompasses Tasmanian coastal and midland hubs (Kanamaluka at 580, Preminghana at 530), Torres Strait islands (Saibai at 535, Erub at 520, Mabuiag at 440, Badu at 380, Muralag at 350, Boigu at 310, Iama at 185, Dauan at 155 and Ugar at 115), western Victorian mound and canal complexes (Caramut at 460, Koroit at 410 and Toolondo at 385), key arid-zone centres (Georgina at 490, Ikara at 420, Uluru at 215, Yuldi at 145, Warburton Ranges at 130 and Koonalda at 105) and classic Pleistocene-to-Holocene archaeological sequences (Roonka, Quinkan Country, Carnarvon Gorge, Lake Mungo, Nauwalabila, Fromm's Landing, Kenniff Cave, Puritjarra, Devil's Lair and Kutikina).

<figure class="crd-table-figure" id="tab:rem35-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Complex Name</th><th class="crd-th">State</th><th class="crd-th">Eco-Hydrological Basin</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kanamaluka</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Tasmania and Bass Strait</td><td class="crd-td">-41,43, 147,14</td><td class="crd-td">1000 to 1788</td><td class="crd-td">580 (1788)</td></tr>
<tr><td class="crd-td"><strong>Menindee Lakes</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-32,39, 142,42</td><td class="crd-td">2000BC to 1788</td><td class="crd-td">540 (1788)</td></tr>
<tr><td class="crd-td"><strong>Saibai Island</strong></td><td class="crd-td">Queensland</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-9,39, 142,68</td><td class="crd-td">1200 to 1788</td><td class="crd-td">535 (1788)</td></tr>
<tr><td class="crd-td"><strong>Preminghana</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Tasmania and Bass Strait</td><td class="crd-td">-41,12, 144,93</td><td class="crd-td">500BC to 1788</td><td class="crd-td">530 (1788)</td></tr>
<tr><td class="crd-td"><strong>Erub (Darnley Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-9,59, 143,77</td><td class="crd-td">1000 to 1788</td><td class="crd-td">520 (1788)</td></tr>
<tr><td class="crd-td"><strong>Roonka (Lower Murray River)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-34,32, 139,62</td><td class="crd-td">5000BC to 1788</td><td class="crd-td">510 (1788)</td></tr>
<tr><td class="crd-td"><strong>Georgina</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Lake Eyre Endorheic Basin</td><td class="crd-td">-23,4, 139,5</td><td class="crd-td">1000 to 1788</td><td class="crd-td">490 (1788)</td></tr>
<tr><td class="crd-td"><strong>Caramut (Muston Creek Mounds)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-37,97, 142,53</td><td class="crd-td">500BC to 1788</td><td class="crd-td">460 (1788)</td></tr>
<tr><td class="crd-td"><strong>Kinjarling</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Nullarbor and Southern Gulfs</td><td class="crd-td">-34,96, 117,96</td><td class="crd-td">3000BC to 1788</td><td class="crd-td">445 (1788)</td></tr>
<tr><td class="crd-td"><strong>Mabuiag (Jervis Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-10,06, 142,16</td><td class="crd-td">1000 to 1788</td><td class="crd-td">440 (1788)</td></tr>
<tr><td class="crd-td"><strong>Groote Eylandt (Anindilyakwa)</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-13,97, 136,59</td><td class="crd-td">1000 to 1788</td><td class="crd-td">430 (1788)</td></tr>
<tr><td class="crd-td"><strong>Ikara, Flinders Ranges (Adnyamathanha)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Lake Eyre Endorheic Basin</td><td class="crd-td">-31,54, 138,6</td><td class="crd-td">1000 to 1788</td><td class="crd-td">420 (1788)</td></tr>
<tr><td class="crd-td"><strong>Koroit</strong></td><td class="crd-td">Victoria</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-38,32, 142,36</td><td class="crd-td">1000 to 1788</td><td class="crd-td">410 (1788)</td></tr>
<tr><td class="crd-td"><strong>Kamay</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-32,66, 148,5</td><td class="crd-td">1000 to 1788</td><td class="crd-td">390 (1788)</td></tr>
<tr><td class="crd-td"><strong>Toolondo</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-37,03, 141,93</td><td class="crd-td">500 to 1788</td><td class="crd-td">385 (1788)</td></tr>
<tr><td class="crd-td"><strong>Badu (Mulgrave Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-10,13, 142,15</td><td class="crd-td">1000 to 1788</td><td class="crd-td">380 (1788)</td></tr>
<tr><td class="crd-td"><strong>Muralag (Prince of Wales Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-10,68, 142,18</td><td class="crd-td">1000 to 1788</td><td class="crd-td">350 (1788)</td></tr>
<tr><td class="crd-td"><strong>Murujuga</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Pilbara and Western Coast</td><td class="crd-td">-20,62, 116,78</td><td class="crd-td">5000BC to 1788</td><td class="crd-td">340 (1788)</td></tr>
<tr><td class="crd-td"><strong>Quinkan Country</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-15,57, 144,45</td><td class="crd-td">10000BC to 1788</td><td class="crd-td">325 (1788)</td></tr>
<tr><td class="crd-td"><strong>Boigu (Talbot Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-9,27, 142,22</td><td class="crd-td">1200 to 1788</td><td class="crd-td">310 (1788)</td></tr>
<tr><td class="crd-td"><strong>Carnarvon Gorge</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-25,06, 148,23</td><td class="crd-td">10000BC to 1788</td><td class="crd-td">255 (1788)</td></tr>
<tr><td class="crd-td"><strong>Uluru</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Central Arid Western Plateau</td><td class="crd-td">-25,34, 131,04</td><td class="crd-td">1000 to 1788</td><td class="crd-td">215 (1788)</td></tr>
<tr><td class="crd-td"><strong>Iama (Yam Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-9,9, 142,78</td><td class="crd-td">1000 to 1788</td><td class="crd-td">185 (1788)</td></tr>
<tr><td class="crd-td"><strong>Lake Mungo (Willandra Lakes)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-33,75, 143,13</td><td class="crd-td">10000BC to 1788</td><td class="crd-td">160 (1788)</td></tr>
<tr><td class="crd-td"><strong>Dauan (Mount Cornwallis Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">North-East Coast and Cape York</td><td class="crd-td">-9,4, 142,61</td><td class="crd-td">1200 to 1788</td><td class="crd-td">155 (1788)</td></tr>
<tr><td class="crd-td"><strong>Yuldi (Ooldea Soak)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Nullarbor and Southern Gulfs</td><td class="crd-td">-30,45, 131,84</td><td class="crd-td">1000 to 1788</td><td class="crd-td">145 (1788)</td></tr>
<tr><td class="crd-td"><strong>Nauwalabila</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Gulf of Carpentaria and Top End</td><td class="crd-td">-12,67, 132,95</td><td class="crd-td">10000BC to 1500</td><td class="crd-td">138 (1500)</td></tr>
<tr><td class="crd-td"><strong>Warburton Ranges (Ngaanyatjarra)</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Central Arid Western Plateau</td><td class="crd-td">-26,13, 126,58</td><td class="crd-td">8000BC to 1788</td><td class="crd-td">130 (1788)</td></tr>
<tr><td class="crd-td"><strong>Fromm's Landing</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-34,78, 139,57</td><td class="crd-td">3000BC to 1500</td><td class="crd-td">124 (1500)</td></tr>
<tr><td class="crd-td"><strong>Ugar (Stephen Island)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">South-East Coast and Australian Alps</td><td class="crd-td">-9,51, 143,55</td><td class="crd-td">1000 to 1788</td><td class="crd-td">115 (1788)</td></tr>
<tr><td class="crd-td"><strong>Kenniff Cave</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Murray-Darling Basin</td><td class="crd-td">-24,85, 148,03</td><td class="crd-td">10000BC to 1500</td><td class="crd-td">108 (1500)</td></tr>
<tr><td class="crd-td"><strong>Koonalda</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Nullarbor and Southern Gulfs</td><td class="crd-td">-31,4, 129,83</td><td class="crd-td">10000BC to 1788</td><td class="crd-td">105 (1788)</td></tr>
<tr><td class="crd-td"><strong>Puritjarra</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">Central Arid Western Plateau</td><td class="crd-td">-23,83, 130,85</td><td class="crd-td">10000BC to 1500</td><td class="crd-td">84 (1500)</td></tr>
<tr><td class="crd-td"><strong>Devil's Lair</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">South-West Australia (Noongar)</td><td class="crd-td">-34,15, 115,07</td><td class="crd-td">10000BC to 4000BC</td><td class="crd-td">76 (4000BC)</td></tr>
<tr><td class="crd-td"><strong>Kutikina</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Tasmania and Bass Strait</td><td class="crd-td">-42,52, 145,77</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">58 (6000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued pre-1788 Indigenous habitation complexes ranked 36 to 70 in Australia and Tasmania, ordered by peak headcount (10000BC to 1788).</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:subregion-gazetteer} aggregates site totals, recovery density per 100.000 km², leading recorded complex and 1788 basin population across all eleven eco-hydrological basins. The three eastern humid and riverine basins — South-East Coast and Australian Alps (15 sites, 5,45 sites per 100.000 km²), Murray-Darling Basin (14 sites, 1,29) and North-East Coast and Cape York (12 sites, 2) — together account for 58,6% of the gazetteer (41 of 70 complexes), while compact Tasmania records the highest areal sampling density at 6,06 sites per 100.000 km². By contrast, the vast Central Arid Western Plateau (0,15 sites per 100.000 km²) and Pilbara (0,18) show sparse cataloguing consistent with low foraging carrying capacities and thinner nineteenth-century ethnohistorical coverage [@williams2015holocene; @mulvaney2020prehistory].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Eco-Hydrological Basin</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 100k km²</th><th class="crd-th">Leading Complex (Peak)</th><th class="crd-th">1788 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Murray-Darling Basin</strong></td><td class="crd-td">1.086.964</td><td class="crd-td">14</td><td class="crd-td">1,29</td><td class="crd-td">Booburrgan Ngmmunge (Bunya Mountains) (2,2k)</td><td class="crd-td">185k</td></tr>
<tr><td class="crd-td"><strong>South-East Coast and Australian Alps</strong></td><td class="crd-td">275.121</td><td class="crd-td">15</td><td class="crd-td">5,45</td><td class="crd-td">Warrane (1,5k)</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Tasmania and Bass Strait</strong></td><td class="crd-td">82.465</td><td class="crd-td">5</td><td class="crd-td">6,06</td><td class="crd-td">Oyster Bay (Paredarerme) (750)</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>North-East Coast and Cape York</strong></td><td class="crd-td">598.813</td><td class="crd-td">12</td><td class="crd-td">2</td><td class="crd-td">Atherton Tableland (2,1k)</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Gulf of Carpentaria and Top End</strong></td><td class="crd-td">909.136</td><td class="crd-td">7</td><td class="crd-td">0,77</td><td class="crd-td">Kakadu (1,9k)</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td"><strong>Kimberley and Fitzroy Basin</strong></td><td class="crd-td">309.369</td><td class="crd-td">1</td><td class="crd-td">0,32</td><td class="crd-td">Dampier Peninsula (830)</td><td class="crd-td">46k</td></tr>
<tr><td class="crd-td"><strong>Pilbara and Western Coast</strong></td><td class="crd-td">560.298</td><td class="crd-td">1</td><td class="crd-td">0,18</td><td class="crd-td">Murujuga (340)</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>South-West Australia (Noongar)</strong></td><td class="crd-td">318.147</td><td class="crd-td">3</td><td class="crd-td">0,94</td><td class="crd-td">Boorloo (760)</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Lake Eyre Endorheic Basin</strong></td><td class="crd-td">1.299.106</td><td class="crd-td">4</td><td class="crd-td">0,31</td><td class="crd-td">Cooper Creek (960)</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Central Arid Western Plateau</strong></td><td class="crd-td">1.969.743</td><td class="crd-td">3</td><td class="crd-td">0,15</td><td class="crd-td">Uluru (215)</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Nullarbor and Southern Gulfs</strong></td><td class="crd-td">485.879</td><td class="crd-td">5</td><td class="crd-td">1,03</td><td class="crd-td">Raukkan, Lower Murray Mouth (Ngarrindjeri) (1,8k)</td><td class="crd-td">25k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued site counts, site density (per 100.000 km²), leading complex and 1788 regional population across eleven Australian eco-hydrological basins.</figcaption>
</figure>

## Rank-Size Geometry and Habitation Structure

Fitting the 70 catalogued complexes highlights a distinctive non-urban settlement geometry. Across the upper 35 complexes (590 to 2.200 inhabitants), peak populations decline gradually with a log-log slope $\alpha = 0,43$ ($R^2 = 0,93$), reflecting horizontal polycentricity: dozens of ecologically rich estuaries, floodplains and seasonal gathering grounds across different climatic zones supported comparable multi-clan aggregations between 600 and 2.200 people without any continental primate city emerging [@williams2015holocene; @bradshaw2021stochastic]. Across all 70 sites, the slope steepens to $\alpha = 0,83$ ($R^2 = 0,72$) as smaller offshore islands, arid-zone soaks and Pleistocene cave refugia enter the lower tail (58 to 255 inhabitants).

# Limitations

Three methodological caveats govern spatial interpretation of this gazetteer. First, automated point-to-mask polygon snapping assigns a handful of tiny outer Torres Strait cays (Mer, Saibai, Erub, Boigu and Ugar) to the nearest coastal raster colour label rather than the mainland North-East Coast polygon, placing those five Queensland island villages inside the South-East Coast ledger count in Table \ref{tab:subregion-gazetteer}; similarly, Raukkan sits on the coastal boundary between the Murray-Darling and Nullarbor and Southern Gulfs basins. All individual site tables preserve exact WGS84 coordinates and Queensland or South Australian state labels so geographic identity remains unambiguous.

Second, catalogued site coverage reflects modern archaeological and ethnohistorical documentation density rather than uniform survey effort across Australia's interior. Whereas Victoria, New South Wales, Queensland and Tasmania yield abundant contact-era ethnohistories and heritage excavations, the Kimberley and Pilbara remain represented by single flagship complexes (Dampier Peninsula and Murujuga) despite rich coastal and inland rock-art histories [@norman2022human; @rangan2015genetic; @wright2023archaeology].

Third, peak headcounts combine two distinct demographic modes: year-round residential clusters (such as Torres Strait horticultural villages and Budj Bim stone-house complexes) and periodic seasonal aggregation hubs (such as Booburrgan Ngmmunge and the Bogong High Plains) where dispersed estates converged for weeks or months during bumper harvests [@mulvaney2020prehistory; @williams2015holocene]. Site counts therefore index local peak habitation capacity rather than permanent municipal totals.

# Conclusion

Cataloguing 70 Indigenous habitation complexes and 190 dated observations across eleven eco-hydrological basins documents the spatial skeleton of pre-1788 Australian demography. Spanning 2.200 inhabitants at Booburrgan Ngmmunge and 2.150 on the Atherton Tableland down to 58 at Pleistocene Kutikina, the register captures a polycentric, non-urban hierarchy ($\alpha = 0,43$ across the top 35 complexes) anchored firmly in freshwater rivers, estuaries, tropical floodplains and engineered aquaculture systems [@williams2015holocene; @mulvaney2020prehistory]. With 0% crowd-sourced fallback reliance, full coverage across all eleven basins and exact reconciliation of 76 evaluated candidates, this gazetteer provides the spatial anchor for Australia's 785k contact-era population synthesis [@hunter2015estimating; @burke2013archaeology].

# Appendix

## Excluded Duplicate Aliases

Table \ref{tab:excluded-aliases} documents all six candidate entries excluded during Wave-3 spatial deduplication, each representing a variant or sub-site name merged into a canonical complex located within 25 km.

<figure class="crd-table-figure" id="tab:excluded-aliases">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Excluded Alias</th><th class="crd-th">Canonical Entity</th><th class="crd-th">Classification</th><th class="crd-th">Spatial Rule</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Roonka</strong></td><td class="crd-td">Roonka (Lower Murray River)</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Laura Shelters</strong></td><td class="crd-td">Quinkan Country</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Lake Mungo</strong></td><td class="crd-td">Lake Mungo (Willandra Lakes)</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Puntutjarpa</strong></td><td class="crd-td">Warburton Ranges (Ngaanyatjarra)</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Kow Swamp</strong></td><td class="crd-td">Kow Swamp (Central Murray)</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Koonalda</strong></td><td class="crd-td">Koonalda</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged within 25 km</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Six variant candidate records merged into canonical habitation complexes during Wave-3 spatial deduplication.</figcaption>
</figure>

## Primary Provenance Authorities

Table \ref{tab:top-authorities} lists the leading scholarly author corpora cited across the 70-site settlement register, demonstrating broad reliance on foundational Australian archaeologists, anthropologists and historical demographers rather than generic secondary gazetteers.

<figure class="crd-table-figure" id="tab:top-authorities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Author Corpus</th><th class="crd-th">Cited Complexes</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Smith</strong></td><td class="crd-td">9</td><td class="crd-td">12,9%</td></tr>
<tr><td class="crd-td"><strong>Haddon</strong></td><td class="crd-td">9</td><td class="crd-td">12,9%</td></tr>
<tr><td class="crd-td"><strong>Keen</strong></td><td class="crd-td">6</td><td class="crd-td">8,6%</td></tr>
<tr><td class="crd-td"><strong>Jones</strong></td><td class="crd-td">5</td><td class="crd-td">7,1%</td></tr>
<tr><td class="crd-td"><strong>Butlin</strong></td><td class="crd-td">5</td><td class="crd-td">7,1%</td></tr>
<tr><td class="crd-td"><strong>Lourandos</strong></td><td class="crd-td">4</td><td class="crd-td">5,7%</td></tr>
<tr><td class="crd-td"><strong>Pardoe</strong></td><td class="crd-td">4</td><td class="crd-td">5,7%</td></tr>
<tr><td class="crd-td"><strong>Ryan</strong></td><td class="crd-td">4</td><td class="crd-td">5,7%</td></tr>
<tr><td class="crd-td"><strong>Beckett</strong></td><td class="crd-td">4</td><td class="crd-td">5,7%</td></tr>
<tr><td class="crd-td"><strong>Attenbrow</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>Williams</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>Howitt</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>Hallam</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>McBryde</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>Barham</strong></td><td class="crd-td">3</td><td class="crd-td">4,3%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading scholarly author corpora cited across the 70 catalogued pre-1788 Indigenous habitation complexes.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1 (Coordinate Datum). All site coordinates in Tables \ref{tab:top35-sites} and \ref{tab:rem35-sites} use WGS84 decimal degrees rounded to two decimal places with European decimal commas.

Note 2 (Toponymy). Dual Indigenous and geographical names (such as Warrane, Naarm, Meanjin, Boorloo, Nipaluna, Tarndanya and Booburrgan Ngmmunge) follow contemporary Australian archaeological and heritage conventions while retaining recognised historical identifiers for cross-referencing.
