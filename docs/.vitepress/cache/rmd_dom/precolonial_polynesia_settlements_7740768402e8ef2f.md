---
title: "Pre-Colonial Polynesia"
subtitle: "Settlement Gazetteer and Archipelago Hierarchy (1000BC to 1800)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/precolonial_polynesia_urban_hierarchy.png"
hero_caption: "Twelve largest recorded pre-colonial settlements and rank-size distribution across 67 Polynesian locales, 1000BC to 1800."
hero_label: "fig:hero-polynesia-hierarchy"
bibliography: precolonial_polynesia.bib
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



![Twelve largest recorded pre-colonial settlements and rank-size distribution across 67 Polynesian locales, 1000BC to 1800.](figures/precolonial_polynesia_urban_hierarchy.png)



# Abstract

This gazetteer documents 67 catalogued pre-colonial Polynesian settlements and 184 dated population observations across nine archipelago sub-regions and ten modern states and territories between 1000BC and 1800, excluding Hawai'i, American Samoa and Aotearoa New Zealand. Compiled through four audited ingestion waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate records (1,52% marginal gain on the final verification sweep), the register integrates 9 Wave-1 official census continuity anchors, 57 Wave-2 peer-reviewed archaeological and ethnohistorical chiefdom profiles and 1 Wave-4 gap-verification addition [@burley2010nukuleka; @kahn2013residential; @dinapoli2021approximate]. Every settlement carries city-proper or single-valley chiefdom spatial scope so local clusters remain cleanly separated from island-wide rural aggregates. Peak settlement populations range from 27 founders at Adamstown on Pitcairn in 1790 and 145 prehistoric quarry residents at Bounty Bay around AD 1300 up to Polynesia's foremost pre-colonial maritime and valley centres: Mu'a on Tongatapu (4.100 in 1777), Pare-Arue on Tahiti (3.950 in 1769), Taipivai on Nuku Hiva (3.850 in 1798), Papara on Tahiti (3.450 in 1769), Opunohu on Mo'orea (3.240 in 1769) and Atuona on Hiva Oa (3.120 in 1798). Across the leading 33 volcanic chiefdom seats, peak sizes obey a shallow power-law rank-size distribution ($\alpha = 0,31$, $R^2 = 0,95$), illustrating a decentralised oceanic world of rival island polities rather than primate continental capitals.

# Background

Pre-colonial Polynesian habitation never conformed to the walled urban grid of Eurasia or Mesoamerica. Instead, residential geography across the central and eastern Pacific followed two distinct geomorphological templates: dispersed high-island coastal and valley chiefdoms organised around ceremonial courts (*marae*, *malae* or *ahu*), and compact lagoon-side coral atoll villages tightly bounded by freshwater lenses and reef passes [@patrick2010peopling; @kahn2013residential; @kahn2026morphologica].

In West Polynesia, Lapita pioneers first established lagoon-edge villages at Nukuleka on Tongatapu around 888BC, Pangai on Lifuka, Hihifo on Niuatoputapu, Talietumu on Uvea, Sigave on Futuna and Mulifanua on Upolu [@burley2012high; @burley2010nukuleka; @gallagher2022investigatin]. Over two millennia, demographic expansion drove settlement inland into terraced volcanic valleys such as Falefa, Vailele and Luatuanu'u on Upolu and around the stepped basalt monument of Pulemelei on Savai'i, while Tonga's royal Tu'i Tonga lineage concentrated elite residences, canoe docks and coral-limestone *langi* tombs at Mu'a along the Fanga 'Uta lagoon [@burley2018early; @reepmeyer2012obsidian].

Following the rapid East Polynesian voyaging pulse between AD 900 and AD 1250, settlers established coastal founder camps at Fa'ahia on Huahine, Hane and Hatuana on Ua Huka, Ha'atuatua on Nuku Hiva, Hanamiai on Tahuata and Anakena on Rapa Nui [@wilmshurst2011high; @molle2011perspectives; @allen2022lost]. Within centuries, valley intensification and breadfruit agro-forestry lifted chiefdom seats in Tahiti (Pare-Arue, Papara and Tautira), Mo'orea (Opunohu), the Marquesas (Taipivai, Atuona and Hakahau), the Cook Islands (Oneroa, Ngati Tiare and Ureia) and the Australs (Moerai, Rairua, Mataura and fortified Ahurei) to between 1,8k and 4k inhabitants, linked by long-distance basalt, pearl-shell and ritual networks [@allen2025reciprocity; @mcgloin2026microwear; @lipo2025megalithic]. Meanwhile, low coral atolls in the Tuamotus, Tuvalu and Tokelau maintained resilient lagoon villages ranging from roughly 300 to 1,8k residents [@petchey2010interpreting].

# Methodology

The settlement register was compiled across four documented ingestion waves governed by strict provenance rules. Wave 1 extracted 9 longitudinal census anchors from official Pacific colonial and national statistical registries (Tonga, Samoa, French Polynesia, Cook Islands, Niue, Tuvalu, Tokelau and Pitcairn). Wave 2 harvested 57 core archaeological and ethnohistorical settlement profiles from monograph surveys, valley excavations and critical contact-era demographic studies, ensuring full coverage of Lapita founder sites, royal *marae* and *langi* capitals, Marquesan canyon confederations, Rapa Nui *ahu* territories and outer atoll settlements [@burley2012high; @kahn2013residential; @dinapoli2021approximate]. Wave 3 performed spatial coordinate harmonisation to WGS84, deduplication across variant indigenous and colonial orthographies and reconciliation of overlapping chiefdom boundaries, yielding zero duplicate records. Wave 4 executed a targeted sub-region gap sweep that added 1 final entry (marginal gain 1,52%), certifying asymptotic saturation across all nine archipelagos.

Every record is assigned to a single areal-mask sub-region and restricted strictly to city-proper or single-valley chiefdom scope (67 of 67 entries, 100%). No settlement record uses unverified crowd-sourced figures (0% crowd fallback), and pre-contact observations appear only where anchored by dated archaeological floor surveys, excavated settlement areas, ethnohistorical warrior or household counts, or critical demographic reconstructions [@kahn2026morphologica; @lipo2025megalithic; @flexner2026islands].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 67 evaluated candidate locales: 67 included, 0 excluded and 0 unaccounted. Every entry carries non-null WGS84 coordinates, a dated chronological span inside 1000BC to 1800, explicit bibliographic provenance and an unambiguous assignment to one of the nine Polynesian archipelago sub-regions. Across the register, 184 individual dated population observations yield an average of 2,75 chronological benchmarks per settlement, capturing multi-century trajectories at Lapita and early East Polynesian founder sites (four observations each at Pangai, Talietumu, Vailele, Mulifanua, Falefa, Nukuleka, Hihifo Niuatoputapu, Sigave, Hane and Opunohu) alongside contact-era contractions across Tahiti (Pare-Arue, Papara and Tautira between 1769 and 1797) and Rapa Nui (Anakena, Tongariki, Vaihu and Vinapu between 1550 and 1722) [@dinapoli2021approximate; @allen2022lost].

Figure \ref{fig:sett-regional-map} displays the geographic spread of the 67 catalogued settlements across western, central and eastern Polynesia, illustrating both the dense western and central volcanic cores and the far-flung eastern outposts of Mangareva, Pitcairn and Rapa Nui.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-precolonial-polynesia-settlements/precolonial_polynesia_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of nine Polynesian archipelago sub-regions and 67 catalogued pre-colonial settlements from Tonga and Samoa to Rapa Nui, 1000BC to 1800.</figcaption>
</figure>

# Results

## Twenty-Five Leading Pre-Colonial Polynesian Settlements

Table \ref{tab:top25-sites} lists the 25 most populous catalogued settlements across Pre-Colonial Polynesia ordered by peak recorded population, spanning 4,1k at Mu'a down to 1,85k at fortified Ahurei on Rapa Iti. French Polynesia accounts for 12 of the top 25 centres (6 in the Society Islands, 3 in the Marquesas and 3 in the Austral Islands), followed by Tonga (4), the Cook Islands (4), Independent Samoa (3), Niue (1) and Wallis and Futuna (1). Notably, not a single coral atoll enters the top 25—Anaa's warrior village of Tukuhora (1.840 in 1769) sits immediately outside at rank 27—underscoring the decisive productive advantage of volcanic soils and perennial valley irrigation.

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mu'a</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-21,18, -175,12</td><td class="crd-td">1300 to 1777</td><td class="crd-td">4,1k (1777)</td></tr>
<tr><td class="crd-td"><strong>Pare-Arue</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-17,52, -149,52</td><td class="crd-td">1769 to 1797</td><td class="crd-td">4k (1769)</td></tr>
<tr><td class="crd-td"><strong>Taipivai</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-8,88, -140,07</td><td class="crd-td">1300 to 1798</td><td class="crd-td">3,8k (1798)</td></tr>
<tr><td class="crd-td"><strong>Papara</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-17,74, -149,51</td><td class="crd-td">1769 to 1797</td><td class="crd-td">3,4k (1769)</td></tr>
<tr><td class="crd-td"><strong>Opunohu</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-17,52, -149,84</td><td class="crd-td">1000 to 1800</td><td class="crd-td">3,2k (1769)</td></tr>
<tr><td class="crd-td"><strong>Atuona</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-9,8, -139,03</td><td class="crd-td">1300 to 1798</td><td class="crd-td">3,1k (1798)</td></tr>
<tr><td class="crd-td"><strong>Tautira</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-17,74, -149,21</td><td class="crd-td">1400 to 1797</td><td class="crd-td">2,9k (1769)</td></tr>
<tr><td class="crd-td"><strong>Leulumoega</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,82, -171,96</td><td class="crd-td">1300 to 1780</td><td class="crd-td">2,7k (1780)</td></tr>
<tr><td class="crd-td"><strong>Oneroa</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-21,92, -157,96</td><td class="crd-td">1100 to 1777</td><td class="crd-td">2,6k (1777)</td></tr>
<tr><td class="crd-td"><strong>Hakahau</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-9,36, -140,05</td><td class="crd-td">1300 to 1798</td><td class="crd-td">2,6k (1798)</td></tr>
<tr><td class="crd-td"><strong>Neiafu</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-18,65, -173,98</td><td class="crd-td">500 to 1793</td><td class="crd-td">2,5k (1793)</td></tr>
<tr><td class="crd-td"><strong>Moerai</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Austral Islands</td><td class="crd-td">-22,45, -151,36</td><td class="crd-td">1100 to 1790</td><td class="crd-td">2,4k (1790)</td></tr>
<tr><td class="crd-td"><strong>Falefa</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,9, -171,6</td><td class="crd-td">200 to 1800</td><td class="crd-td">2,4k (1800)</td></tr>
<tr><td class="crd-td"><strong>Rairua</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Austral Islands</td><td class="crd-td">-23,87, -147,68</td><td class="crd-td">1200 to 1775</td><td class="crd-td">2,4k (1775)</td></tr>
<tr><td class="crd-td"><strong>Ngati Tiare</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-21,21, -159,78</td><td class="crd-td">1100 to 1790</td><td class="crd-td">2,3k (1790)</td></tr>
<tr><td class="crd-td"><strong>Kolovai</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-21,12, -175,33</td><td class="crd-td">1500 to 1777</td><td class="crd-td">2,2k (1777)</td></tr>
<tr><td class="crd-td"><strong>Alofi</strong></td><td class="crd-td">Niue</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-19,06, -169,92</td><td class="crd-td">600 to 1774</td><td class="crd-td">2,2k (1774)</td></tr>
<tr><td class="crd-td"><strong>Vaitape</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-16,5, -151,75</td><td class="crd-td">1200 to 1769</td><td class="crd-td">2,2k (1769)</td></tr>
<tr><td class="crd-td"><strong>Mataura</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Austral Islands</td><td class="crd-td">-23,36, -149,48</td><td class="crd-td">1100 to 1789</td><td class="crd-td">2,1k (1789)</td></tr>
<tr><td class="crd-td"><strong>Pangai</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-19,8, -174,35</td><td class="crd-td">800BC to 1777</td><td class="crd-td">2k (1777)</td></tr>
<tr><td class="crd-td"><strong>Ureia</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-18,86, -159,79</td><td class="crd-td">1050 to 1790</td><td class="crd-td">2k (1790)</td></tr>
<tr><td class="crd-td"><strong>Talietumu</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,3, -176,19</td><td class="crd-td">700BC to 1780</td><td class="crd-td">1,9k (1780)</td></tr>
<tr><td class="crd-td"><strong>Vailele</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,84, -171,73</td><td class="crd-td">200BC to 1800</td><td class="crd-td">1,9k (1800)</td></tr>
<tr><td class="crd-td"><strong>Ngatangiia</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-21,25, -159,75</td><td class="crd-td">1200 to 1700</td><td class="crd-td">1,9k (1700)</td></tr>
<tr><td class="crd-td"><strong>Ahurei</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Austral Islands</td><td class="crd-td">-27,62, -144,33</td><td class="crd-td">1250 to 1791</td><td class="crd-td">1,8k (1791)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 catalogued pre-colonial settlements across Polynesia ordered by peak recorded population, 1000BC to 1800.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage and Archipelago Hierarchy

Table \ref{tab:subregion-gazetteer} aggregates catalogued settlement totals, dated observations, leading centres and closing 1800 regional populations across all nine sub-regions. Coverage is evenly balanced across every archipelago zone, ranging from 4 locales inside the Tuamotu coral mask (5 including Kamaka in the Gambier-Austral boundary zone) up to 10 in the Cook Islands and Niue, with 9 each in Samoa with Wallis-Futuna, the Society Islands and Tuvalu with Tokelau, 8 in Tonga, 7 in Rapa Nui with Pitcairn and 6 across the Marquesas.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">1800 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tonga Archipelago</strong></td><td class="crd-td">5.173</td><td class="crd-td">8</td><td class="crd-td">24</td><td class="crd-td">Mu'a (4,1k)</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Independent Samoa and Wallis-Futuna</strong></td><td class="crd-td">6.338</td><td class="crd-td">9</td><td class="crd-td">30</td><td class="crd-td">Leulumoega (2,7k)</td><td class="crd-td">46k</td></tr>
<tr><td class="crd-td"><strong>Society Islands (Windward and Leeward)</strong></td><td class="crd-td">6.400</td><td class="crd-td">9</td><td class="crd-td">25</td><td class="crd-td">Pare-Arue (4k)</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Marquesas Islands</strong></td><td class="crd-td">3.475</td><td class="crd-td">6</td><td class="crd-td">16</td><td class="crd-td">Taipivai (3,8k)</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Tuamotu and Gambier Islands</strong></td><td class="crd-td">28.160</td><td class="crd-td">4</td><td class="crd-td">9</td><td class="crd-td">Tukuhora (1,8k)</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Austral Islands</strong></td><td class="crd-td">4.987</td><td class="crd-td">5</td><td class="crd-td">15</td><td class="crd-td">Moerai (2,4k)</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Cook Islands and Niue</strong></td><td class="crd-td">5.100</td><td class="crd-td">10</td><td class="crd-td">25</td><td class="crd-td">Oneroa (2,6k)</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Tuvalu and Tokelau</strong></td><td class="crd-td">2.550</td><td class="crd-td">9</td><td class="crd-td">22</td><td class="crd-td">Lolua (980)</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Rapa Nui and Pitcairn</strong></td><td class="crd-td">846</td><td class="crd-td">7</td><td class="crd-td">18</td><td class="crd-td">Tongariki (1,1k)</td><td class="crd-td">3,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, dated observations, largest recorded centre and closing 1800 regional population across nine Polynesian sub-regions.</figcaption>
</figure>

## Rank-Size Distribution and Source Saturation Audit

Across all 67 catalogued locales, the rank-size curve reveals a classic polycentric island-chiefdom signature rather than a steep continental urban hierarchy. Fitting a log-log power law across the upper half of the register (the 33 largest chiefdom centres from Mu'a at 4.100 down to Mulifanua at 1.480) yields a shallow exponent of $\alpha = 0,31$ ($R^2 = 0,95$), reflecting multiple co-equal volcanic chiefdoms separated by wide sea channels [@allen2025reciprocity; @kahn2013residential]. Extending the regression across all 67 settlements lowers the fit ($R^2 = 0,58$, slope $-0,72$) as smaller Rapa Nui lineages, coral atolls of Tuvalu, Tokelau and the Tuamotus and Pitcairn's tiny 1790 colony drop sharply below the volcanic-island plateau.

Table \ref{tab:saturation-waves} documents the four-wave source saturation audit from the chapter ledger, confirming that 85,1% of settlements derive from Wave-2 peer-reviewed archaeological and ethnohistorical monographs and 13,4% from Wave-1 primary statistical registries, closing at 1,52% marginal gain in Wave 4 with zero crowd-sourced entries.

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Included</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official national and colonial census registries</td><td class="crd-td">9</td><td class="crd-td">13,4%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Archaeological and ethnohistorical monographs</td><td class="crd-td">57</td><td class="crd-td">85,1%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal reconciliation and deduplication</td><td class="crd-td">0</td><td class="crd-td">0%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage verification sweep</td><td class="crd-td">1</td><td class="crd-td">1,5%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave gazetteer ingestion ledger and source-class breakdown across 67 catalogued Polynesian settlements.</figcaption>
</figure>

# Limitations

Three archaeological and ethnohistorical constraints qualify spatial interpretation of this settlement gazetteer. First, dispersed Polynesian valley and coastal habitation lacked municipal walls or cadastral borders, meaning that chiefdom population figures—such as Pare-Arue, Papara, Taipivai or Falefa—represent coherent contiguous valley or bay communities bounded by traditional land divisions rather than nucleated market towns [@kahn2013residential; @kahn2026morphologica]. Second, archaeological survey coverage favours volcanic flagship islands (Tongatapu, Upolu, Mo'orea, Nuku Hiva, Ua Huka and Rapa Nui) over low coral atolls in the Tuamotus, Northern Cooks, Tuvalu and Tokelau, where cyclonic overwash erases shallow prehistoric middens and early population figures rely heavily on retrojection from nineteenth-century colonial counts [@petchey2010interpreting; @molle2011perspectives]. Third, peak dates are asynchronous across archipelagos—spanning 1300 at prehistoric Bounty Bay and 1550 at Rapa Nui's coastal *ahu* complexes through 1769 in Tahiti, 1777 in Tonga and 1798 in the Marquesas—reflecting differing colonisation chronologies, pre-contact adjustments and European contact timings [@wilmshurst2011high; @dinapoli2021approximate; @ioannidis2021paths].

# Conclusion

Cataloguing 67 evidence-based settlements and 184 dated population observations across ten modern jurisdictions provides a granular geographic skeleton for Pre-Colonial Polynesia from 1000BC to 1800. Every tier of oceanic settlement is represented: ninth-century BC Lapita founder lagoons in Tonga and Samoa, monumental West Polynesian royal and ceremonial complexes at Mu'a and Pulemelei, densely terraced Society, Marquesan, Cook and Austral valleys sustaining 1,8k to 4k residents apiece, coastal *ahu* territories and cliff sanctuaries on Rapa Nui and tightly bounded coral atoll communities across the Tuamotus, Tuvalu and Tokelau. Together, these 67 locales confirm a flat, polycentric chiefdom hierarchy ($\alpha = 0,31$, $R^2 = 0,95$) shaped by island geomorphology, maritime voyaging reach and local agro-ecological carrying ceilings.

# Appendix

## Remaining Forty-Two Catalogued Settlements (Ranks 26 to 67)

Table \ref{tab:rem42-sites} lists the remaining 42 catalogued settlements ordered by peak population from Pea on Tongatapu (1.845 in 1777) down to Adamstown on Pitcairn (27 in 1790), ensuring every locale in the 67-settlement gazetteer appears in print.

<figure class="crd-table-figure" id="tab:rem42-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pea</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-21,18, -175,23</td><td class="crd-td">1400 to 1777</td><td class="crd-td">1,8k (1777)</td></tr>
<tr><td class="crd-td"><strong>Tukuhora</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Tuamotu and Gambier Islands</td><td class="crd-td">-17,42, -145,43</td><td class="crd-td">1200 to 1800</td><td class="crd-td">1,8k (1769)</td></tr>
<tr><td class="crd-td"><strong>Maeva</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-16,73, -151,01</td><td class="crd-td">1300 to 1769</td><td class="crd-td">1,8k (1769)</td></tr>
<tr><td class="crd-td"><strong>Pulemelei</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,76, -172,32</td><td class="crd-td">1200 to 1700</td><td class="crd-td">1,7k (1500)</td></tr>
<tr><td class="crd-td"><strong>Arorangi</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-21,23, -159,82</td><td class="crd-td">1300 to 1750</td><td class="crd-td">1,6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Safotu</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,49, -172,4</td><td class="crd-td">1000 to 1750</td><td class="crd-td">1,6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Taputapuātea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-16,84, -151,38</td><td class="crd-td">1200 to 1769</td><td class="crd-td">1,6k (1769)</td></tr>
<tr><td class="crd-td"><strong>Mulifanua</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,85, -171,99</td><td class="crd-td">850BC to 1800</td><td class="crd-td">1,5k (1800)</td></tr>
<tr><td class="crd-td"><strong>Luatuanu'u</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-13,88, -171,66</td><td class="crd-td">400 to 1750</td><td class="crd-td">1,4k (1750)</td></tr>
<tr><td class="crd-td"><strong>Mutalau</strong></td><td class="crd-td">Niue</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-18,98, -169,84</td><td class="crd-td">1200 to 1774</td><td class="crd-td">1,4k (1774)</td></tr>
<tr><td class="crd-td"><strong>Hane</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-8,92, -139,54</td><td class="crd-td">950 to 1798</td><td class="crd-td">1,4k (1700)</td></tr>
<tr><td class="crd-td"><strong>Ha'atuatua</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-8,84, -140,05</td><td class="crd-td">1000 to 1750</td><td class="crd-td">1,4k (1750)</td></tr>
<tr><td class="crd-td"><strong>Sigave</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">Independent Samoa and Wallis-Futuna</td><td class="crd-td">-14,28, -178,15</td><td class="crd-td">700BC to 1780</td><td class="crd-td">1,4k (1780)</td></tr>
<tr><td class="crd-td"><strong>Hanamiai</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Marquesas Islands</td><td class="crd-td">-9,93, -139,12</td><td class="crd-td">1050 to 1774</td><td class="crd-td">1,2k (1774)</td></tr>
<tr><td class="crd-td"><strong>Hihifo Niuatoputapu</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-15,95, -173,77</td><td class="crd-td">800BC to 1777</td><td class="crd-td">1,2k (1616)</td></tr>
<tr><td class="crd-td"><strong>Tiputa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Tuamotu and Gambier Islands</td><td class="crd-td">-15,11, -147,48</td><td class="crd-td">1200 to 1770</td><td class="crd-td">1,2k (1770)</td></tr>
<tr><td class="crd-td"><strong>Tongariki</strong></td><td class="crd-td">Chile</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-27,13, -109,28</td><td class="crd-td">1300 to 1722</td><td class="crd-td">1,1k (1550)</td></tr>
<tr><td class="crd-td"><strong>Lolua</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-5,68, 176,13</td><td class="crd-td">1000 to 1781</td><td class="crd-td">980 (1781)</td></tr>
<tr><td class="crd-td"><strong>Maupiti</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-16,44, -152,26</td><td class="crd-td">1000 to 1769</td><td class="crd-td">945 (1769)</td></tr>
<tr><td class="crd-td"><strong>Asau Vaitupu</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-7,48, 178,68</td><td class="crd-td">1000 to 1790</td><td class="crd-td">940 (1790)</td></tr>
<tr><td class="crd-td"><strong>Nukuleka</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-21,17, -175,28</td><td class="crd-td">850BC to 1500</td><td class="crd-td">935 (1500)</td></tr>
<tr><td class="crd-td"><strong>Vaihu</strong></td><td class="crd-td">Chile</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-27,16, -109,36</td><td class="crd-td">1350 to 1722</td><td class="crd-td">920 (1600)</td></tr>
<tr><td class="crd-td"><strong>Ohonua</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Tonga Archipelago</td><td class="crd-td">-21,34, -174,95</td><td class="crd-td">1000 to 1773</td><td class="crd-td">890 (1773)</td></tr>
<tr><td class="crd-td"><strong>Anai'o</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-20,16, -157,34</td><td class="crd-td">1250 to 1790</td><td class="crd-td">840 (1790)</td></tr>
<tr><td class="crd-td"><strong>Anakena</strong></td><td class="crd-td">Chile</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-27,09, -109,33</td><td class="crd-td">1300 to 1722</td><td class="crd-td">840 (1550)</td></tr>
<tr><td class="crd-td"><strong>Rotoava</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Tuamotu and Gambier Islands</td><td class="crd-td">-16,05, -145,62</td><td class="crd-td">1300 to 1770</td><td class="crd-td">720 (1770)</td></tr>
<tr><td class="crd-td"><strong>Fa'ahia</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Society Islands (Windward and Leeward)</td><td class="crd-td">-16,72, -151,03</td><td class="crd-td">950 to 1400</td><td class="crd-td">690 (1400)</td></tr>
<tr><td class="crd-td"><strong>Fakaofo</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-9,38, -171,22</td><td class="crd-td">1000 to 1800</td><td class="crd-td">680 (1800)</td></tr>
<tr><td class="crd-td"><strong>Kulia</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-6,11, 177,34</td><td class="crd-td">1200 to 1750</td><td class="crd-td">680 (1750)</td></tr>
<tr><td class="crd-td"><strong>Otepa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Tuamotu and Gambier Islands</td><td class="crd-td">-18,08, -140,94</td><td class="crd-td">1300 to 1768</td><td class="crd-td">640 (1768)</td></tr>
<tr><td class="crd-td"><strong>Kamaka</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Austral Islands</td><td class="crd-td">-23,13, -134,98</td><td class="crd-td">1050 to 1797</td><td class="crd-td">620 (1797)</td></tr>
<tr><td class="crd-td"><strong>Vinapu</strong></td><td class="crd-td">Chile</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-27,18, -109,41</td><td class="crd-td">1400 to 1722</td><td class="crd-td">610 (1650)</td></tr>
<tr><td class="crd-td"><strong>Orongo</strong></td><td class="crd-td">Chile</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-27,19, -109,44</td><td class="crd-td">1600 to 1722</td><td class="crd-td">580 (1722)</td></tr>
<tr><td class="crd-td"><strong>Fongafale</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-8,52, 179,2</td><td class="crd-td">800 to 1790</td><td class="crd-td">560 (1790)</td></tr>
<tr><td class="crd-td"><strong>Nanumaga</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-6,29, 176,32</td><td class="crd-td">1500 to 1800</td><td class="crd-td">545 (1800)</td></tr>
<tr><td class="crd-td"><strong>Nukunonu</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-9,2, -171,85</td><td class="crd-td">1200 to 1791</td><td class="crd-td">420 (1791)</td></tr>
<tr><td class="crd-td"><strong>Rakahanga</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-10,04, -161,09</td><td class="crd-td">1500 to 1800</td><td class="crd-td">365 (1800)</td></tr>
<tr><td class="crd-td"><strong>Atafu</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-8,53, -172,52</td><td class="crd-td">1400 to 1765</td><td class="crd-td">340 (1765)</td></tr>
<tr><td class="crd-td"><strong>Nukulaelae</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Tuvalu and Tokelau</td><td class="crd-td">-9,36, 179,88</td><td class="crd-td">1500 to 1800</td><td class="crd-td">295 (1800)</td></tr>
<tr><td class="crd-td"><strong>Mitiaro</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Cook Islands and Niue</td><td class="crd-td">-19,84, -157,72</td><td class="crd-td">1500 to 1800</td><td class="crd-td">265 (1800)</td></tr>
<tr><td class="crd-td"><strong>Bounty Bay</strong></td><td class="crd-td">Pitcairn Islands</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-25,07, -130,1</td><td class="crd-td">1100 to 1450</td><td class="crd-td">145 (1300)</td></tr>
<tr><td class="crd-td"><strong>Adamstown</strong></td><td class="crd-td">Pitcairn Islands</td><td class="crd-td">Rapa Nui and Pitcairn</td><td class="crd-td">-25,07, -130,1</td><td class="crd-td">1790</td><td class="crd-td">27 (1790)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Remaining 42 catalogued pre-colonial Polynesian settlements (ranks 26 to 67) ordered by peak recorded population, 1000BC to 1800.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. All settlement headcounts reflect city-proper or single-valley chiefdom aggregates compiled directly from archaeological monographs, historical ethnographies and official colonial statistical registers with zero synthetic interpolation or crowd-sourced substitution.
