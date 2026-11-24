---
title: "Colonial Polynesia"
subtitle: "Settlement Gazetteer and Colonial Island Hierarchy (1800 to 1962)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/colonial_polynesia_urban_hierarchy.png"
hero_caption: "Twelve largest recorded colonial settlements and rank-size distribution across 92 Polynesian centres, 1800 to 1962."
hero_label: "fig:hero-polynesia-hierarchy"
bibliography: colonial_polynesia.bib
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



![Twelve largest recorded colonial settlements and rank-size distribution across 92 Polynesian centres, 1800 to 1962.](figures/colonial_polynesia_urban_hierarchy.png)



# Abstract

This gazetteer documents 92 catalogued settlements and 376 dated population observations across all seven colonial Polynesian jurisdictions (spanning ten modern island nations and territories outside Hawai'i and American Samoa) from 1800 to 1962. Compiled through four audited ingestion waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate entries—merging 10 duplicate colonial and pre-colonial alias records into canonical settlements and closing at 1,1% marginal gain on the final verification sweep—the register combines official colonial censuses (EFO/ISPF, German and New Zealand Western Samoa, Tonga, Cook Islands, Niue, GEIC, Tokelau, Pitcairn and Chilean INE) with peer-reviewed Pacific historical demography [@mcarthur1967island; @rallu1991population; @jupp1958territory; @hayes1983population]. Spatial scope distinguishes 2 metropolitan island envelopes (Rarotonga Metro and Funafuti Metro), 3 urbanising suburban communes flanking Papeete (Pirae, Faa'a and Puna'auia) and 87 city-proper ports, administrative towns and principal island villages. Peak populations span nearly three orders of magnitude, from tiny southern coral outpost Niulakita (46 residents in 1956) and Nassau in the Cook Islands (124 in 1951) up to Western Samoa's capital Apia (21.699 in 1961) and Tahiti's capital Papeete (19.903 in 1962), followed by Nuku'alofa (9.202 in 1956), Rarotonga Metro (8.676 in 1961) and early nineteenth-century Marquesan centre Taiohae (4.500 in 1813 before epidemic collapse). Upper-half peak populations follow a shallow multi-archipelagic power law ($\alpha = 0,65$, $R^2 = 0,91$ across the top 46 centres; $\alpha = 0,66$, $R^2 = 0,89$ excluding suburbs), reflecting the absence of any single regional metropolis across seven fragmented island administrations [@fages1974migrations; @pirie1964geography].

# Background

Settlement geography across Colonial Polynesia between 1800 and 1962 evolved through the collision of four distinct spatial layers: ancient chiefly capitals, missionary coastal stations, colonial trading and administrative ports, and twentieth-century extractive or suburban enclaves [@mcarthur1967island; @cochrane2021using].

The oldest stratum consisted of pre-contact ceremonial and political centres that survived into the nineteenth century before yielding primacy to European deep-water harbours. On Tongatapu, the sacred capital of Mu'a (2.600 in 1840) gradually relinquished authority to Nuku'alofa after George Tupou I consolidated royal administration around the northern anchorage [@walsh1970population]. On Upolu and Savai'i, traditional district seats at Mulinu'u (2.800 in 1889), Leulumoega (2.490 in 1956), Falefa (2.380 in 1800), Safotulafai (2.120 in 1961) and Lufilufi (1.980 in 1961) persisted as enduring focal points of *fa'a Samoa* alongside the rising commercial port of Apia [@pirie1964geography; @sand2016geological]. Across Eastern Polynesia, classical chiefly hubs—Pare-Arue (2.150 in 1848) and Opunohu (1.980 in 1800) in the Society Islands, Taputapuātea (940 in 1820) on Raiatea, Taiohae (4.500 in 1813) and Atuona (1.840 in 1842) in the Marquesas, Rikitea (1.150 in 1834) on Mangareva, and Orongo (380 in 1850) on Rapa Nui—experienced sharp nineteenth-century contraction under epidemic waves and colonial reorganisation [@rallu2022patterns; @rallu2024tahiti; @dinapoli2021approximate].

A second stratum emerged from London Missionary Society and Marist Catholic beachheads, which gathered dispersed valley and upland households into nucleated coastal villages around churches and reefs. Avarua (2.400 in 1827), Ngatangiia (1.920) and Arorangi (1.580) on Rarotonga, Ureia (2.556 in 1956) on Aitutaki, Oneroa (2.150 in 1845) on Mangaia, Alofi (1.450 in 1862) on Niue and Mata-Utu (1.940 in 1962) with Mu'a Uvea (2.180) on Wallis exemplified this missionary coastal nucleation [@hayes1983population; @rallu1991population].

Third came the colonial port capitals and outer-island administrative centres that monopolised copra exports, customs revenue and inter-island steamers after 1880: Apia (growing from 1.650 in 1850 to 21.699 in 1961), Papeete (1.850 in 1843 to 19.903 in 1962), Nuku'alofa (1.950 in 1845 to 9.202 in 1956), Uturoa in the Leeward Islands (740 in 1888 to 2.376 in 1962), Neiafu in Vava'u (1.580 in 1891 to 2.873 in 1956), Pangai in Ha'apai (2.340) and Hanga Roa on Rapa Nui (collapsing from 1.800 in 1864 to 111 in 1877 before rebuilding to 1.135 in 1960) [@jupp1958territory; @walsh1970population; @maude1981slavers; @cook2017sauerkraut]. Finally, mid-twentieth-century economic specialisation added two new urban forms: the Tuamotu phosphate mining enclave of Makatea (peaking at 2.331 in 1956) and Tahiti's fast-growing suburban ring communes of Pirae (3.948 in 1962), Faa'a (3.681) and Puna'auia (2.046), which together signalled the arrival of modern metropolitan sprawl in Polynesia [@fages1974migrations; @teiti2023unravelling].

# Methodology

The settlement register was assembled across four audited ledger waves governed by strict archival provenance criteria. Wave 1 extracted 20 foundational territorial capitals, deep-water ports and administrative centres directly from official colonial and national census schedules: ISPF and INSEE enumerations of the EFO (1881–1962), German and New Zealand Western Samoa censuses (1906–1961), Kingdom of Tonga censuses (1891–1956), Cook Islands and Niue censuses (1902–1961), GEIC Ellice Islands censuses (1911–1963), Tokelau censuses (1900–1961), Pitcairn annual registers (1808–1961) and Chilean INE Rapa Nui censuses (1916–1960) [@jupp1958territory; @hayes1983population; @rallu1991population]. Wave 2 added 71 documented island centres, chiefly villages, mission stations and atoll communities from peer-reviewed historical demography and Pacific archaeological monographs [@mcarthur1967island; @pirie1964geography; @hooper1973demographic; @rallu2022patterns; @maude1981slavers]. Wave 3 standardised WGS84 coordinates, harmonised orthographic variants across Polynesian languages and merged 10 duplicate colonial and pre-colonial alias records within 25 km of canonical entities (eliminating double-counted records for Papeete, Apia, Nuku'alofa, Neiafu, Adamstown, Hanga Roa, Fakaofo, Atafu, Nukunonu and Taipivai into Taiohae). Wave 4 executed a sub-region gap sweep that added 1 closing verification entry (marginal gain 1,1%), confirming zero empty sub-regions and zero unaccounted candidates.

Explicit spatial-scope tags keep island-wide urban rings separate from individual towns and villages. Two entries carry metropolitan scope—Rarotonga Metro (tracking the consolidated island urban ring around Avarua from 1902 to 1961) and Funafuti Metro (tracking the administrative atoll from 1911 to 1947)—three entries carry suburban scope for Papeete's contiguous urban ring communes (Pirae, Faa'a and Puna'auia) and 87 entries carry city-proper scope covering urban centres, traditional district seats and principal atoll settlements. Crowd-sourced population fallback stands at 0% across all 92 entries.

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 102 evaluated candidate records: 92 included, 10 excluded (exclusively duplicate colonial or pre-colonial alias entries merged within 25 km of their canonical settlement) and 0 unaccounted. Every included record carries non-null WGS84 coordinates, a documented temporal span inside 1800 to 1962, explicit archival citations and assignment to one of the seven colonial sub-regions. Across the 92 settlements, 376 dated observations yield a mean of 4,09 temporal benchmarks per settlement. Longitudinal density is richest in colonial administrative capitals and continuously registered micro-islands: Adamstown on Pitcairn leads with 16 benchmarks (1808–1961), followed by Papeete with 15 (1843–1962), Hanga Roa with 13 (1864–1960), Apia with 8 (1850–1961) and Rarotonga Metro, Nuku'alofa, Fakaofo and Mata-Utu with 7 benchmarks apiece [@mcarthur1967island; @hooper1973demographic; @rallu1991population].

Cross-checking submask geographic assignments against modern national boundaries confirms 100% one-to-one alignment across all seven sub-regions with zero cross-border pixel leakage: French Establishments in Oceania holds 32 settlements (116 observations), Cook Islands and Niue holds 16 (13 Cook Islands plus 3 Niue; 73 observations), Western Samoa holds 13 (50 observations), Ellice Islands and Tokelau holds 13 (10 Tuvalu plus 3 Tokelau; 51 observations), Tonga holds 10 (31 observations), Wallis and Futuna holds 5 (25 observations) and Pitcairn with Rapa Nui holds 3 (30 observations). Figure \ref{fig:sett-regional-map} displays the geographic spread of all 92 catalogued settlements across Western, Central and Eastern Polynesia.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-colonial-polynesia-settlements/colonial_polynesia_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Geographic distribution of the seven colonial Polynesian jurisdictions and 92 catalogued settlements across Western, Central and Eastern Polynesia, 1800 to 1962.</figcaption>
</figure>

# Results

## Twenty-Five Leading Colonial Polynesian Settlements

Table \ref{tab:top25-sites} lists the 25 largest catalogued settlements across Colonial Polynesia ordered by peak recorded population, ranging from Western Samoa's capital Apia (21.699 in 1961) down to Samoan district seat Lufilufi (1.980 in 1961). Three jurisdictions supply 20 of the top 25 entries: French Polynesia contributes 8 (Papeete, Taiohae, Pirae, Faa'a, Uturoa, Makatea, Pare-Arue and Puna'auia), Western Samoa contributes 8 (Apia, Falealili, Mulinu'u, Salelologa, Leulumoega, Falefa, Safotulafai and Lufilufi) and Tonga contributes 4 (Nuku'alofa, Neiafu, Mu'a and Pangai), alongside 4 from the Cook Islands (Rarotonga Metro, Ureia, Avarua and Oneroa) and 1 from Wallis and Futuna (Mu'a Uvea). Notably, seven of these 25 leading centres reached their historical peaks during the nineteenth century rather than in 1956–1962—Taiohae (1813), Falefa (1800), Avarua core (1827), Mu'a (1840), Oneroa (1845), Pare-Arue (1848) and Mulinu'u (1889)—preserving direct archival testimony to both nineteenth-century depopulation and administrative relocation toward colonial ports [@rallu2022patterns; @mcarthur1967island; @walsh1970population].

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Apia</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,83, -171,77</td><td class="crd-td">1850 to 1961</td><td class="crd-td">21,7k (1961)</td></tr>
<tr><td class="crd-td"><strong>Papeete</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,53, -149,57</td><td class="crd-td">1843 to 1962</td><td class="crd-td">19,9k (1962)</td></tr>
<tr><td class="crd-td"><strong>Nuku'alofa</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,14, -175,23</td><td class="crd-td">1845 to 1956</td><td class="crd-td">9,2k (1956)</td></tr>
<tr><td class="crd-td"><strong>Rarotonga (Metro)</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Metro</td><td class="crd-td">-21,21, -159,77</td><td class="crd-td">1902 to 1961</td><td class="crd-td">8,7k (1961)</td></tr>
<tr><td class="crd-td"><strong>Taiohae</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-8,91, -140,1</td><td class="crd-td">1813 to 1926</td><td class="crd-td">4,5k (1813)</td></tr>
<tr><td class="crd-td"><strong>Pirae</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,53, -149,54</td><td class="crd-td">1926 to 1962</td><td class="crd-td">3,9k (1962)</td></tr>
<tr><td class="crd-td"><strong>Faa'a</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,55, -149,6</td><td class="crd-td">1881 to 1962</td><td class="crd-td">3,7k (1962)</td></tr>
<tr><td class="crd-td"><strong>Falealili</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-14,02, -171,68</td><td class="crd-td">1906 to 1961</td><td class="crd-td">2,9k (1961)</td></tr>
<tr><td class="crd-td"><strong>Neiafu</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-18,65, -173,98</td><td class="crd-td">1891 to 1956</td><td class="crd-td">2,9k (1956)</td></tr>
<tr><td class="crd-td"><strong>Mulinu'u</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,84, -171,78</td><td class="crd-td">1830 to 1889</td><td class="crd-td">2,8k (1889)</td></tr>
<tr><td class="crd-td"><strong>Salelologa</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,74, -172,22</td><td class="crd-td">1906 to 1961</td><td class="crd-td">2,7k (1961)</td></tr>
<tr><td class="crd-td"><strong>Mu'a</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,18, -175,12</td><td class="crd-td">1840 to 1891</td><td class="crd-td">2,6k (1840)</td></tr>
<tr><td class="crd-td"><strong>Ureia</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-18,86, -159,79</td><td class="crd-td">1821 to 1956</td><td class="crd-td">2,6k (1956)</td></tr>
<tr><td class="crd-td"><strong>Leulumoega</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,82, -171,96</td><td class="crd-td">1840 to 1956</td><td class="crd-td">2,5k (1956)</td></tr>
<tr><td class="crd-td"><strong>Avarua</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-21,21, -159,78</td><td class="crd-td">1827 to 1902</td><td class="crd-td">2,4k (1827)</td></tr>
<tr><td class="crd-td"><strong>Falefa</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,9, -171,6</td><td class="crd-td">1800 to 1921</td><td class="crd-td">2,4k (1800)</td></tr>
<tr><td class="crd-td"><strong>Uturoa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,76, -151,44</td><td class="crd-td">1888 to 1962</td><td class="crd-td">2,4k (1962)</td></tr>
<tr><td class="crd-td"><strong>Pangai</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-19,8, -174,35</td><td class="crd-td">1891 to 1956</td><td class="crd-td">2,3k (1956)</td></tr>
<tr><td class="crd-td"><strong>Makatea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-15,82, -148,27</td><td class="crd-td">1911 to 1962</td><td class="crd-td">2,3k (1956)</td></tr>
<tr><td class="crd-td"><strong>Mu'a Uvea</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">City</td><td class="crd-td">-13,33, -176,18</td><td class="crd-td">1887 to 1962</td><td class="crd-td">2,2k (1962)</td></tr>
<tr><td class="crd-td"><strong>Oneroa</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-21,92, -157,96</td><td class="crd-td">1845 to 1956</td><td class="crd-td">2,1k (1845)</td></tr>
<tr><td class="crd-td"><strong>Pare-Arue</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,52, -149,52</td><td class="crd-td">1829 to 1848</td><td class="crd-td">2,1k (1848)</td></tr>
<tr><td class="crd-td"><strong>Safotulafai</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,68, -172,18</td><td class="crd-td">1840 to 1961</td><td class="crd-td">2,1k (1961)</td></tr>
<tr><td class="crd-td"><strong>Puna'auia</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,63, -149,6</td><td class="crd-td">1881 to 1962</td><td class="crd-td">2k (1962)</td></tr>
<tr><td class="crd-td"><strong>Lufilufi</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,89, -171,62</td><td class="crd-td">1840 to 1961</td><td class="crd-td">2k (1961)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 catalogued colonial Polynesian settlements ordered by peak recorded population, 1800 to 1962.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage and Urban Concentration

Table \ref{tab:subregion-gazetteer} pairs settlement counts, dated observation depth, leading recorded centres and closing 1962 regional populations across all seven colonial jurisdictions. Every island group from populous volcanic archipelagos down to isolated southeastern micro-islands achieves balanced documentary coverage: observation depth peaks per site in Pitcairn and Rapa Nui (mean 10 observations per site across Adamstown, Hanga Roa and Orongo) and Wallis and Futuna (5 per site), while French Polynesia (32 sites, 116 observations) and the Cook Islands with Niue (16 sites, 73 observations) capture multi-archipelagic outer-island dispersion from the Marquesas to the Northern Cooks [@hayes1983population; @fages1974migrations; @hooper1973demographic].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">1962 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Tonga</strong></td><td class="crd-td">5.173</td><td class="crd-td">10</td><td class="crd-td">31</td><td class="crd-td">Nuku'alofa (9,2k)</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Western Samoa (German and NZ Mandate)</strong></td><td class="crd-td">5.254</td><td class="crd-td">13</td><td class="crd-td">50</td><td class="crd-td">Apia (21,7k)</td><td class="crd-td">114,4k</td></tr>
<tr><td class="crd-td"><strong>French Establishments in Oceania</strong></td><td class="crd-td">43.023</td><td class="crd-td">32</td><td class="crd-td">116</td><td class="crd-td">Papeete (19,9k)</td><td class="crd-td">84,6k</td></tr>
<tr><td class="crd-td"><strong>Cook Islands and Niue</strong></td><td class="crd-td">5.100</td><td class="crd-td">16</td><td class="crd-td">73</td><td class="crd-td">Rarotonga (Metro) (8,7k)</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Ellice Islands (Tuvalu) and Tokelau</strong></td><td class="crd-td">2.550</td><td class="crd-td">13</td><td class="crd-td">51</td><td class="crd-td">Fakaofo (783)</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Wallis and Futuna</strong></td><td class="crd-td">1.084</td><td class="crd-td">5</td><td class="crd-td">25</td><td class="crd-td">Mu'a Uvea (2,2k)</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Pitcairn and Rapa Nui (Easter Island)</strong></td><td class="crd-td">846</td><td class="crd-td">3</td><td class="crd-td">30</td><td class="crd-td">Hanga Roa (1,8k)</td><td class="crd-td">1,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, dated observations, leading recorded centre and closing 1962 population across the seven colonial Polynesian jurisdictions.</figcaption>
</figure>

## Rank-Size Distribution and Source Saturation Audit

Log-log rank-size analysis quantifies the polycentric island structure of Colonial Polynesia [@fages1974migrations; @pirie1964geography]. Across all 92 settlements, the upper-half power-law fit (ranks 1 to 46, spanning Apia at 21.699 down to Mulifanua at 1.480) yields a shallow slope of $\alpha = 0,65$ ($R^2 = 0,91$; full 92-centre slope $-0,90$, $R^2 = 0,79$). Excluding Papeete's three suburban ring communes leaves the upper-half exponent virtually unchanged at $\alpha = 0,66$ ($R^2 = 0,89$ across the top 44 centres; full 89-centre slope $-0,90$, $R^2 = 0,79$). Unlike primate continental settler colonies where one or two ports capture over a third of total population, seven separate colonial flags generated four mid-tier capitals (Apia, Papeete, Nuku'alofa and Rarotonga) sitting above a broad shelf of island villages constrained by atoll carrying capacity and reef passages [@kazarinova2025alternative; @kristinsson2016adapting].

Table \ref{tab:scope-breakdown} summarises the spatial-scope stratification of the 92-entry register, and Table \ref{tab:saturation-waves} reports the four-wave source saturation audit from the chapter ledger.

<figure class="crd-table-figure" id="tab:scope-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Spatial Scope</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Largest Example (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metropolitan Island Ring (metro)</strong></td><td class="crd-td">2</td><td class="crd-td">2,2%</td><td class="crd-td">Rarotonga Metro (8,7k)</td></tr>
<tr><td class="crd-td"><strong>City Proper or Island Village (city proper)</strong></td><td class="crd-td">87</td><td class="crd-td">94,6%</td><td class="crd-td">Apia (21,7k)</td></tr>
<tr><td class="crd-td"><strong>Suburban Ring Commune (suburb)</strong></td><td class="crd-td">3</td><td class="crd-td">3,3%</td><td class="crd-td">Pirae (3,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial-scope stratification across 92 catalogued colonial Polynesian settlements, 1800 to 1962.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Records</th><th class="crd-th">Audit Outcome</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official colonial and territorial censuses</td><td class="crd-td">20</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Historical demography and archaeological monographs</td><td class="crd-td">71</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Coordinate harmonisation and alias deduplication</td><td class="crd-td">0</td><td class="crd-td">10 duplicate aliases merged</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage verification sweep</td><td class="crd-td">1</td><td class="crd-td">1,1% marginal gain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion ledger and reconciliation summary across 92 catalogued Polynesian settlements.</figcaption>
</figure>

# Limitations

Four archival and spatial constraints govern interpretation of this settlement gazetteer. First, settlement definitions differ across Pacific census offices: French Polynesian returns tabulate discrete *communes* and suburban districts (separating Papeete from Pirae, Faa'a and Puna'auia), whereas New Zealand Cook Islands returns tabulate whole-island Rarotonga alongside individual traditional villages (Avarua, Ngatangiia and Arorangi), and Samoan enumerations shift between municipal Apia and contiguous *Tuamasaga* villages [@fages1974migrations; @hayes1983population; @jupp1958territory]. Maintaining explicit spatial-scope tags prevents accidental double counting when summing urban shares.

Second, nine early nineteenth-century traditional seats—Opunohu, Vailele, Mulifanua, Maeva, Taputapuātea, Tautira, Hanamiai, Maupiti and Orongo—carry single-date archival benchmarks because later colonial censuses subsumed their dwindling districts into broader parish or commune aggregates [@rallu2022patterns; @mcarthur1967island]. Third, acute single-year shocks—the 1862–1864 Peruvian slaving raids on Nukulaelae, Fakaofo, Nukunonu, Omoka and Hanga Roa, the November 1918 influenza mortality in Apia and the 1946 volcanic evacuation of Esia on Niuafo'ou—produced steep intercensal drops that multi-year census intervals only partially capture [@maude1981slavers; @tomkins1992influenza; @hooper1973demographic]. Fourth, peak recorded populations compare non-synchronous eras (1813 Taiohae alongside 1961 Apia and 1962 Papeete), so readers tracking twentieth-century urbanisation should distinguish expanding colonial port capitals from nineteenth-century chiefly settlements whose maxima preceded depopulation.

# Conclusion

Cataloguing 92 evidence-based settlements and 376 dated observations between 1800 and 1962 traces the spatial restructuring of Polynesia under colonial rule in fine geographical detail. From the collapse of nineteenth-century Marquesan and Rapanui centres (Taiohae and Hanga Roa) and the survival of atoll micro-communities across Tokelau and the Ellice Islands (Fakaofo, Atafu, Lolua and Asau Vaitupu) to the mid-twentieth-century rise of Apia (21,7k), Papeete (19,9k plus 9,7k in Pirae, Faa'a and Puna'auia), Nuku'alofa (9,2k), Rarotonga (8,7k) and phosphate boomtown Makatea (2,3k), the register documents a shallow, multi-centred oceanic settlement system ($\alpha = 0,65$) entering decolonisation with rapid demographic momentum [@rallu1991population; @pirie1964geography; @walsh1970population; @eric1985eric].

# Appendix

## Remaining Sixty-Seven Catalogued Settlements (Ranks 26 to 92)

Table \ref{tab:rem67-sites} prints all remaining 67 catalogued colonial Polynesian settlements ordered by peak recorded population from Opunohu on Moorea (1.980 in 1800) down to Niulakita in Tuvalu (46 in 1956), ensuring every one of the 92 settlements in the register appears in print.

<figure class="crd-table-figure" id="tab:rem67-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Opunohu</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,52, -149,84</td><td class="crd-td">1800</td><td class="crd-td">2k (1800)</td></tr>
<tr><td class="crd-td"><strong>Mata-Utu</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">City</td><td class="crd-td">-13,28, -176,17</td><td class="crd-td">1842 to 1962</td><td class="crd-td">1,9k (1962)</td></tr>
<tr><td class="crd-td"><strong>Ohonua</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,34, -174,95</td><td class="crd-td">1891 to 1956</td><td class="crd-td">1,9k (1956)</td></tr>
<tr><td class="crd-td"><strong>Ngatangiia</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-21,25, -159,75</td><td class="crd-td">1827 to 1956</td><td class="crd-td">1,9k (1827)</td></tr>
<tr><td class="crd-td"><strong>Vailele</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,84, -171,73</td><td class="crd-td">1800</td><td class="crd-td">1,9k (1800)</td></tr>
<tr><td class="crd-td"><strong>Atuona</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-9,8, -139,03</td><td class="crd-td">1842 to 1956</td><td class="crd-td">1,8k (1842)</td></tr>
<tr><td class="crd-td"><strong>Ono Futuna</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">City</td><td class="crd-td">-14,3, -178,08</td><td class="crd-td">1842 to 1962</td><td class="crd-td">1,8k (1962)</td></tr>
<tr><td class="crd-td"><strong>Hanga Roa</strong></td><td class="crd-td">Chile</td><td class="crd-td">City</td><td class="crd-td">-27,15, -109,43</td><td class="crd-td">1864 to 1960</td><td class="crd-td">1,8k (1864)</td></tr>
<tr><td class="crd-td"><strong>Kolovai</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,12, -175,33</td><td class="crd-td">1840 to 1921</td><td class="crd-td">1,8k (1840)</td></tr>
<tr><td class="crd-td"><strong>Taravao</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,73, -149,29</td><td class="crd-td">1881 to 1962</td><td class="crd-td">1,8k (1962)</td></tr>
<tr><td class="crd-td"><strong>Vaitape</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,5, -151,75</td><td class="crd-td">1820 to 1956</td><td class="crd-td">1,7k (1956)</td></tr>
<tr><td class="crd-td"><strong>Safotu</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,49, -172,4</td><td class="crd-td">1850 to 1956</td><td class="crd-td">1,7k (1956)</td></tr>
<tr><td class="crd-td"><strong>Paopao</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,51, -149,82</td><td class="crd-td">1881 to 1962</td><td class="crd-td">1,6k (1962)</td></tr>
<tr><td class="crd-td"><strong>Kolonga</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,13, -175,07</td><td class="crd-td">1891 to 1956</td><td class="crd-td">1,6k (1956)</td></tr>
<tr><td class="crd-td"><strong>Lalomanu</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-14,03, -171,49</td><td class="crd-td">1906 to 1961</td><td class="crd-td">1,6k (1961)</td></tr>
<tr><td class="crd-td"><strong>Tukuhora</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,42, -145,43</td><td class="crd-td">1800 to 1926</td><td class="crd-td">1,6k (1800)</td></tr>
<tr><td class="crd-td"><strong>Arorangi</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-21,23, -159,82</td><td class="crd-td">1827 to 1956</td><td class="crd-td">1,6k (1827)</td></tr>
<tr><td class="crd-td"><strong>Hihifo Uvea</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">City</td><td class="crd-td">-13,24, -176,18</td><td class="crd-td">1887 to 1962</td><td class="crd-td">1,6k (1962)</td></tr>
<tr><td class="crd-td"><strong>Pea</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,18, -175,23</td><td class="crd-td">1840 to 1891</td><td class="crd-td">1,5k (1840)</td></tr>
<tr><td class="crd-td"><strong>Satupa'itea</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,77, -172,33</td><td class="crd-td">1860 to 1961</td><td class="crd-td">1,5k (1961)</td></tr>
<tr><td class="crd-td"><strong>Mulifanua</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,85, -171,99</td><td class="crd-td">1800</td><td class="crd-td">1,5k (1800)</td></tr>
<tr><td class="crd-td"><strong>Alofi</strong></td><td class="crd-td">Niue</td><td class="crd-td">City</td><td class="crd-td">-19,06, -169,92</td><td class="crd-td">1862 to 1956</td><td class="crd-td">1,4k (1862)</td></tr>
<tr><td class="crd-td"><strong>Hakahau</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-9,36, -140,05</td><td class="crd-td">1842 to 1956</td><td class="crd-td">1,4k (1842)</td></tr>
<tr><td class="crd-td"><strong>Esia Niuafo'ou</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-15,57, -175,63</td><td class="crd-td">1891 to 1946</td><td class="crd-td">1,3k (1939)</td></tr>
<tr><td class="crd-td"><strong>Moerai</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-22,45, -151,36</td><td class="crd-td">1821 to 1956</td><td class="crd-td">1,3k (1956)</td></tr>
<tr><td class="crd-td"><strong>Teenui Atiu</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-19,99, -158,12</td><td class="crd-td">1845 to 1961</td><td class="crd-td">1,3k (1956)</td></tr>
<tr><td class="crd-td"><strong>Papara</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,74, -149,51</td><td class="crd-td">1829 to 1881</td><td class="crd-td">1,3k (1829)</td></tr>
<tr><td class="crd-td"><strong>Hihifo Niuatoputapu</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-15,95, -173,77</td><td class="crd-td">1921 to 1956</td><td class="crd-td">1,3k (1956)</td></tr>
<tr><td class="crd-td"><strong>Sigave</strong></td><td class="crd-td">Wallis and Futuna</td><td class="crd-td">City</td><td class="crd-td">-14,28, -178,15</td><td class="crd-td">1904 to 1951</td><td class="crd-td">1,2k (1951)</td></tr>
<tr><td class="crd-td"><strong>Fare Huahine</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,72, -151,04</td><td class="crd-td">1881 to 1962</td><td class="crd-td">1,2k (1962)</td></tr>
<tr><td class="crd-td"><strong>Rikitea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-23,12, -134,97</td><td class="crd-td">1834 to 1887</td><td class="crd-td">1,1k (1834)</td></tr>
<tr><td class="crd-td"><strong>Maeva</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,73, -151,01</td><td class="crd-td">1830</td><td class="crd-td">1,1k (1830)</td></tr>
<tr><td class="crd-td"><strong>Mutalau</strong></td><td class="crd-td">Niue</td><td class="crd-td">City</td><td class="crd-td">-18,98, -169,84</td><td class="crd-td">1862 to 1956</td><td class="crd-td">1,1k (1862)</td></tr>
<tr><td class="crd-td"><strong>Mataura</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-23,36, -149,48</td><td class="crd-td">1825 to 1956</td><td class="crd-td">1k (1956)</td></tr>
<tr><td class="crd-td"><strong>Tukao</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-10,38, -160,99</td><td class="crd-td">1850 to 1961</td><td class="crd-td">1k (1961)</td></tr>
<tr><td class="crd-td"><strong>Taputapuātea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,84, -151,38</td><td class="crd-td">1820</td><td class="crd-td">940 (1820)</td></tr>
<tr><td class="crd-td"><strong>Tautira</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,74, -149,21</td><td class="crd-td">1848</td><td class="crd-td">920 (1848)</td></tr>
<tr><td class="crd-td"><strong>Tiputa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-15,11, -147,48</td><td class="crd-td">1860 to 1956</td><td class="crd-td">890 (1956)</td></tr>
<tr><td class="crd-td"><strong>Anai'o</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-20,16, -157,34</td><td class="crd-td">1902 to 1956</td><td class="crd-td">815 (1956)</td></tr>
<tr><td class="crd-td"><strong>Rairua</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-23,87, -147,68</td><td class="crd-td">1830 to 1956</td><td class="crd-td">790 (1956)</td></tr>
<tr><td class="crd-td"><strong>Fakaofo</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">City</td><td class="crd-td">-9,37, -171,22</td><td class="crd-td">1800 to 1961</td><td class="crd-td">783 (1961)</td></tr>
<tr><td class="crd-td"><strong>Lolua</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-5,68, 176,13</td><td class="crd-td">1872 to 1947</td><td class="crd-td">770 (1931)</td></tr>
<tr><td class="crd-td"><strong>Asau Vaitupu</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-7,48, 178,68</td><td class="crd-td">1865 to 1947</td><td class="crd-td">728 (1947)</td></tr>
<tr><td class="crd-td"><strong>Omoka</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-8,95, -158,01</td><td class="crd-td">1860 to 1961</td><td class="crd-td">710 (1860)</td></tr>
<tr><td class="crd-td"><strong>Kulia</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-6,11, 177,34</td><td class="crd-td">1870 to 1947</td><td class="crd-td">645 (1931)</td></tr>
<tr><td class="crd-td"><strong>Hakupu</strong></td><td class="crd-td">Niue</td><td class="crd-td">City</td><td class="crd-td">-19,11, -169,85</td><td class="crd-td">1902 to 1961</td><td class="crd-td">640 (1902)</td></tr>
<tr><td class="crd-td"><strong>Hanamiai</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-9,93, -139,12</td><td class="crd-td">1842</td><td class="crd-td">610 (1842)</td></tr>
<tr><td class="crd-td"><strong>Atafu</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">City</td><td class="crd-td">-8,53, -172,5</td><td class="crd-td">1863 to 1961</td><td class="crd-td">563 (1961)</td></tr>
<tr><td class="crd-td"><strong>Nanumaga</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-6,29, 176,32</td><td class="crd-td">1800 to 1947</td><td class="crd-td">545 (1800)</td></tr>
<tr><td class="crd-td"><strong>Fongafale</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-8,52, 179,2</td><td class="crd-td">1865 to 1947</td><td class="crd-td">528 (1947)</td></tr>
<tr><td class="crd-td"><strong>Funafuti (Metro)</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Metro</td><td class="crd-td">-8,51, 179,2</td><td class="crd-td">1911 to 1947</td><td class="crd-td">528 (1947)</td></tr>
<tr><td class="crd-td"><strong>Nukufetau</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-8,05, 178,38</td><td class="crd-td">1865 to 1947</td><td class="crd-td">524 (1947)</td></tr>
<tr><td class="crd-td"><strong>Ahurei</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-27,62, -144,33</td><td class="crd-td">1826 to 1956</td><td class="crd-td">520 (1826)</td></tr>
<tr><td class="crd-td"><strong>Nukunonu</strong></td><td class="crd-td">Tokelau</td><td class="crd-td">City</td><td class="crd-td">-9,17, -171,83</td><td class="crd-td">1863 to 1961</td><td class="crd-td">513 (1961)</td></tr>
<tr><td class="crd-td"><strong>Nui</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-7,19, 177,15</td><td class="crd-td">1865 to 1947</td><td class="crd-td">490 (1947)</td></tr>
<tr><td class="crd-td"><strong>Bora Bora Faanui</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,48, -151,76</td><td class="crd-td">1881 to 1962</td><td class="crd-td">472 (1962)</td></tr>
<tr><td class="crd-td"><strong>Rotoava</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,05, -145,62</td><td class="crd-td">1881 to 1926</td><td class="crd-td">440 (1881)</td></tr>
<tr><td class="crd-td"><strong>Maupiti</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,44, -152,26</td><td class="crd-td">1881</td><td class="crd-td">420 (1881)</td></tr>
<tr><td class="crd-td"><strong>Otepa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-18,08, -140,94</td><td class="crd-td">1881 to 1926</td><td class="crd-td">410 (1881)</td></tr>
<tr><td class="crd-td"><strong>Rakahanga</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-10,04, -161,09</td><td class="crd-td">1800 to 1961</td><td class="crd-td">400 (1902)</td></tr>
<tr><td class="crd-td"><strong>Orongo</strong></td><td class="crd-td">Chile</td><td class="crd-td">City</td><td class="crd-td">-27,19, -109,44</td><td class="crd-td">1850</td><td class="crd-td">380 (1850)</td></tr>
<tr><td class="crd-td"><strong>Huahine Fitii</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,76, -151,03</td><td class="crd-td">1881 to 1962</td><td class="crd-td">368 (1962)</td></tr>
<tr><td class="crd-td"><strong>Mitiaro</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-19,84, -157,72</td><td class="crd-td">1800 to 1961</td><td class="crd-td">307 (1961)</td></tr>
<tr><td class="crd-td"><strong>Nukulaelae</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-9,36, 179,88</td><td class="crd-td">1800 to 1947</td><td class="crd-td">295 (1800)</td></tr>
<tr><td class="crd-td"><strong>Adamstown</strong></td><td class="crd-td">Pitcairn Islands</td><td class="crd-td">City</td><td class="crd-td">-25,07, -130,1</td><td class="crd-td">1808 to 1961</td><td class="crd-td">233 (1937)</td></tr>
<tr><td class="crd-td"><strong>Nassau Cook Islands</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-11,57, -165,41</td><td class="crd-td">1951 to 1961</td><td class="crd-td">124 (1951)</td></tr>
<tr><td class="crd-td"><strong>Niulakita</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">City</td><td class="crd-td">-10,79, 179,48</td><td class="crd-td">1947 to 1956</td><td class="crd-td">46 (1956)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Remaining 67 catalogued colonial Polynesian settlements (ranks 26 to 92) ordered by peak recorded population, 1800 to 1962.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. Spatial scope distinguishes metropolitan island rings (Metro), suburban ring communes (Suburb) and municipal ports or principal island villages (City). All settlement headcounts derive directly from official colonial and territorial censuses and peer-reviewed Pacific historical demography with zero crowd-sourced substitution.
