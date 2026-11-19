---
title: "Settlement Gazetteer of the Guianas post-1815"
subtitle: "Toponymy, Geographic Coordinates and Urban Trajectories across 21 Administrative Divisions, 1815AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: guianas_post_1815_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_guianas_post_1815_spatial.png"
hero_caption: "Spatial distribution of 466 catalogued settlements and 21 administrative divisions across Guyana, Suriname and French Guiana (453,9k km²) from 1815AD to 2026AD, illustrating the settlement hierarchy from coastal ports to interior mining and tribal communities."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer compiles geographic coordinates, administrative affiliations and longitudinal population trajectories for 466 catalogued settlements across Guyana, Suriname and French Guiana from 1815AD to 2026AD. The dataset integrates official decennial and quinquennial censuses, municipal registries and statistical publications from the Bureau of Statistics Guyana, the Algemeen Bureau voor de Statistiek in Suriname and the Institut National de la Statistique et des Études Économiques in France [@bos2016guyana; @abs2014suriname; @insee2023guyane]. These records are supplemented by historical village registers, plantation cadastres and missionary records spanning two centuries of post-emancipation settlement [@adamson1972sugar; @hoefte1998in_place; @mamlamfouck1992histoire].

The spatial morphology of the gazetteer reflects the profound geographical constraints of the Guiana Shield. Sedentary settlements cluster heavily along the low-lying Atlantic coastline and the navigable lower reaches of primary river estuaries, where empoldered plantation agriculture, drainage networks and road corridors supported dense village settlement. In Guyana, the coastal polders of Demerara, Essequibo and Berbice encompass 360 catalogued localities, ranging from the primate capital of Georgetown (244,8k municipal core, 327,3k agglomeration) to communal African freehold villages and Indo-Guyanese rice communities [@rodney1981history; @ramdayal2021legacy]. In Suriname, 63 catalogued settlements document the primacy of Paramaribo (237,8k) and its suburban expansion across Wanica, flanked by coastal polders at Nieuw Nickerie and historic Maroon and Amerindian villages in the interior [@lamur1973demographic; @lima2015origine]. In French Guiana, 43 catalogued centres record the concentration of population around Cayenne (79,9k), the aerospace metropolis of Kourou (31,2k) and rapidly expanding border river ports at Saint-Laurent-du-Maroni (59,6k), Apatou and Grand-Santi [@calmont1978croissance; @piantoni2009migrants].

Every catalogued settlement is anchored to WGS84 coordinates and assigned to one of the 21 canonical administrative divisions. Reconciled against 891 candidate records in the project source ledger (466 included settlements and 425 documented exclusions), the gazetteer supplies the nucleated component of the Operation Viscount demographic model. By subtracting active settlement populations from administrative division totals, the model isolates residual rural populations for dasymetric surface kriging, providing an empirical basis for analysing long-run settlement dynamics across the Three Guianas.

# Methodology and Source Ledger Audit

Settlement enumeration and validation follow four successive waves of archival and demographic ingestion:
1. **Official Census Ingestion**: Baseline municipal sections, communes, resorts and census tracts were extracted from modern censuses, including the 2012 Census of Guyana, the 2012 Eighth Census of Suriname and the annual municipal updates of INSEE for French Guiana [@bos2016guyana; @abs2014suriname; @insee2023guyane].
2. **Historical Monograph and Cadastral Backfill**: Pre-twentieth-century population series were backfilled using historical plantation rolls, village purchase deeds from the post-emancipation African village movement (1838-1851), and indentured estate registers from the British and Dutch colonial archives [@mandle1973plantation; @hoefte1998in_place].
3. **Geographic Coordinate Validation**: All settlement coordinates were cross-checked against satellite imagery, national topographic mapping and maritime charts, verifying that each location falls strictly within its respective territorial boundaries.
4. **Source Ledger Reconciliation**: Out of 891 candidate localities evaluated in the project source ledger, 466 were included as autonomous nucleated settlements and 425 were documented as excluded. Excluded records comprise duplicate toponymic spellings, dependent estate camps subsumed within canonical municipal halls, and historical outposts that lacked permanent civilian populations.

<figure class="crd-table-figure" id="tab:division-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Division</th><th class="crd-th">Settlements</th><th class="crd-th">1850AD Sum</th><th class="crd-th">1900AD Sum</th><th class="crd-th">1950AD Sum</th><th class="crd-th">1980AD Sum</th><th class="crd-th">2026AD Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Barima-Waini (Guyana)</strong></td><td class="crd-td">40</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">9,5k</td><td class="crd-td">12,3k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Pomeroon-Supenaam (Guyana)</strong></td><td class="crd-td">46</td><td class="crd-td">9k</td><td class="crd-td">16,2k</td><td class="crd-td">20,6k</td><td class="crd-td">21,9k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Essequibo Islands-West Demerara (Guyana)</strong></td><td class="crd-td">25</td><td class="crd-td">12,3k</td><td class="crd-td">25,9k</td><td class="crd-td">34,5k</td><td class="crd-td">47,9k</td><td class="crd-td">54,2k</td></tr>
<tr><td class="crd-td"><strong>Demerara-Mahaica (Guyana)</strong></td><td class="crd-td">44</td><td class="crd-td">4,7k</td><td class="crd-td">9,7k</td><td class="crd-td">16,5k</td><td class="crd-td">28,6k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Mahaica-Berbice (Guyana)</strong></td><td class="crd-td">27</td><td class="crd-td">8,3k</td><td class="crd-td">17,2k</td><td class="crd-td">25,9k</td><td class="crd-td">34,8k</td><td class="crd-td">33,9k</td></tr>
<tr><td class="crd-td"><strong>East Berbice-Corentyne (Guyana)</strong></td><td class="crd-td">13</td><td class="crd-td">59,7k</td><td class="crd-td">121,9k</td><td class="crd-td">217,6k</td><td class="crd-td">345,2k</td><td class="crd-td">258,3k</td></tr>
<tr><td class="crd-td"><strong>Cuyuni-Mazaruni (Guyana)</strong></td><td class="crd-td">29</td><td class="crd-td">4,5k</td><td class="crd-td">6,5k</td><td class="crd-td">9,5k</td><td class="crd-td">14,4k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Potaro-Siparuni (Guyana)</strong></td><td class="crd-td">28</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td><td class="crd-td">6,8k</td><td class="crd-td">5,9k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Upper Takutu-Upper Essequibo (Guyana)</strong></td><td class="crd-td">20</td><td class="crd-td">12,6k</td><td class="crd-td">15,1k</td><td class="crd-td">20,1k</td><td class="crd-td">27,9k</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Upper Demerara-Berbice (Guyana)</strong></td><td class="crd-td">81</td><td class="crd-td">3,8k</td><td class="crd-td">6,4k</td><td class="crd-td">12,3k</td><td class="crd-td">26,5k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Paramaribo (Suriname)</strong></td><td class="crd-td">11</td><td class="crd-td">28,4k</td><td class="crd-td">54,5k</td><td class="crd-td">126k</td><td class="crd-td">271,2k</td><td class="crd-td">413,7k</td></tr>
<tr><td class="crd-td"><strong>Wanica (Suriname)</strong></td><td class="crd-td">8</td><td class="crd-td">6,7k</td><td class="crd-td">9,6k</td><td class="crd-td">19,3k</td><td class="crd-td">42,7k</td><td class="crd-td">97k</td></tr>
<tr><td class="crd-td"><strong>Nickerie (Suriname)</strong></td><td class="crd-td">5</td><td class="crd-td">2,8k</td><td class="crd-td">7,7k</td><td class="crd-td">16,8k</td><td class="crd-td">34,5k</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Coronie (Suriname)</strong></td><td class="crd-td">2</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Saramacca (Suriname)</strong></td><td class="crd-td">6</td><td class="crd-td">3,4k</td><td class="crd-td">4,4k</td><td class="crd-td">6,5k</td><td class="crd-td">6,9k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Commewijne (Suriname)</strong></td><td class="crd-td">5</td><td class="crd-td">6,8k</td><td class="crd-td">8,6k</td><td class="crd-td">11k</td><td class="crd-td">8,1k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Para (Suriname)</strong></td><td class="crd-td">6</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,9k</td><td class="crd-td">15,9k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Marowijne (Suriname)</strong></td><td class="crd-td">6</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">11,5k</td><td class="crd-td">23,4k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Brokopondo (Suriname)</strong></td><td class="crd-td">6</td><td class="crd-td">13,4k</td><td class="crd-td">16,5k</td><td class="crd-td">24,8k</td><td class="crd-td">42,2k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Sipaliwini (Suriname)</strong></td><td class="crd-td">10</td><td class="crd-td">12,4k</td><td class="crd-td">15,2k</td><td class="crd-td">23,6k</td><td class="crd-td">18,4k</td><td class="crd-td">66,6k</td></tr>
<tr><td class="crd-td"><strong>French Guiana (France)</strong></td><td class="crd-td">26</td><td class="crd-td">16,6k</td><td class="crd-td">37k</td><td class="crd-td">33,5k</td><td class="crd-td">76,8k</td><td class="crd-td">349,6k</td></tr>
<tr><td class="crd-td"><strong>Regional Total (Three Guianas)</strong></td><td class="crd-td">444</td><td class="crd-td">226,5k</td><td class="crd-td">400,8k</td><td class="crd-td">660,5k</td><td class="crd-td">1,11M</td><td class="crd-td">1,66M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Administrative division distribution of catalogued settlements and aggregate urban population sums across benchmark years from 1850AD to 2026AD.</figcaption>
</figure>

# Gazetteer of Leading Settlements across Guyana

## Coastal Guyana: Demerara, Essequibo and Berbice

The coastal plain of Guyana contains the majority of the nation's human settlement, concentrated along sea-wall polders and estuarine riverbanks in Regions 2, 3, 4, 5 and 6 [@mandle1973plantation; @rodney1981history].

Table \ref{tab:gaz-coastal-guyana} documents 45 leading settlements in Coastal Guyana, ordered by 2026 population:

<figure class="crd-table-figure" id="tab:gaz-coastal-guyana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">East Berbice-Corentyne</td><td class="crd-td">6,8 N, 58,16 W</td><td class="crd-td">56,6k</td><td class="crd-td">115,5k</td><td class="crd-td">206,2k</td><td class="crd-td">327,3k</td><td class="crd-td">244,8k</td></tr>
<tr><td class="crd-td"><strong>New Amsterdam</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,25 N, 57,52 W</td><td class="crd-td">8,8k</td><td class="crd-td">18,5k</td><td class="crd-td">24,6k</td><td class="crd-td">34,2k</td><td class="crd-td">38,7k</td></tr>
<tr><td class="crd-td"><strong>Bartica</strong></td><td class="crd-td">Pomeroon-Supenaam</td><td class="crd-td">6,41 N, 58,62 W</td><td class="crd-td">4,3k</td><td class="crd-td">7,7k</td><td class="crd-td">9,8k</td><td class="crd-td">10,4k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Corriverton</strong></td><td class="crd-td">Mahaica-Berbice</td><td class="crd-td">5,93 N, 57,15 W</td><td class="crd-td">3k</td><td class="crd-td">6,2k</td><td class="crd-td">9,3k</td><td class="crd-td">12,5k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Tuschen</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,88 N, 58,34 W</td><td class="crd-td">1,4k</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k</td><td class="crd-td">8,4k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Rose Hall</strong></td><td class="crd-td">Mahaica-Berbice</td><td class="crd-td">6,26 N, 57,36 W</td><td class="crd-td">2,1k</td><td class="crd-td">4,3k</td><td class="crd-td">6,5k</td><td class="crd-td">8,7k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Rosignol</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,27 N, 57,54 W</td><td class="crd-td">1,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Skeldon</strong></td><td class="crd-td">Mahaica-Berbice</td><td class="crd-td">5,87 N, 57,15 W</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Mahaica Village</strong></td><td class="crd-td">East Berbice-Corentyne</td><td class="crd-td">6,68 N, 57,92 W</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">4,3k</td><td class="crd-td">6,8k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Parika</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,84 N, 58,43 W</td><td class="crd-td">673</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Cane Grove</strong></td><td class="crd-td">East Berbice-Corentyne</td><td class="crd-td">6,62 N, 57,92 W</td><td class="crd-td">834</td><td class="crd-td">1,7k</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Vreed-en-Hoop</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,81 N, 58,19 W</td><td class="crd-td">507</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Mahaicony Village</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,57 N, 57,81 W</td><td class="crd-td">533</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Paradise</strong></td><td class="crd-td">East Berbice-Corentyne</td><td class="crd-td">6,76 N, 58 W</td><td class="crd-td">494</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Windsor Forest</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,85 N, 58,24 W</td><td class="crd-td">264</td><td class="crd-td">552</td><td class="crd-td">938</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Kamarang</strong></td><td class="crd-td">Pomeroon-Supenaam</td><td class="crd-td">5,87 N, 60,62 W</td><td class="crd-td">141</td><td class="crd-td">253</td><td class="crd-td">323</td><td class="crd-td">343</td><td class="crd-td">401</td></tr>
<tr><td class="crd-td"><strong>Burma</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,47 N, 57,76 W</td><td class="crd-td">85</td><td class="crd-td">179</td><td class="crd-td">239</td><td class="crd-td">332</td><td class="crd-td">375</td></tr>
<tr><td class="crd-td"><strong>Waramadan</strong></td><td class="crd-td">Pomeroon-Supenaam</td><td class="crd-td">5,82 N, 60,75 W</td><td class="crd-td">131</td><td class="crd-td">235</td><td class="crd-td">300</td><td class="crd-td">319</td><td class="crd-td">373</td></tr>
<tr><td class="crd-td"><strong>Abary</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,54 N, 57,75 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Bel Air</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,32 N, 57,56 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Geruchy and Ruyters</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,62 N, 57,89 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Governor Light</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,46 N, 57,78 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Hopetown</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,39 N, 57,62 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Huntley</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,56 N, 57,78 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Krapa</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,52 N, 57,93 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Martins Burial Ground</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,53 N, 57,89 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Number Forty-one</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,47 N, 57,67 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Number Ten</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,57 N, 57,89 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Number Twelve</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,36 N, 57,58 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Profit</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,52 N, 57,72 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Prospect</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,64 N, 57,87 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Providence Place</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,23 N, 57,52 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Saint Francis Mission</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,1 N, 57,95 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Sarah</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,6 N, 57,82 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Strangroen</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,65 N, 57,89 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Supply</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,55 N, 57,8 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Washclothes</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,5 N, 57,81 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Weldaad</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,5 N, 57,69 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Zealand</strong></td><td class="crd-td">Essequibo Islands-West Demerara</td><td class="crd-td">6,62 N, 57,84 W</td><td class="crd-td">70</td><td class="crd-td">148</td><td class="crd-td">196</td><td class="crd-td">273</td><td class="crd-td">309</td></tr>
<tr><td class="crd-td"><strong>Amarawa</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,89 N, 58,58 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Banakari</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,61 N, 58,63 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Beribisiballi</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,66 N, 58,57 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Bethany</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,97 N, 58,58 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Craig</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,69 N, 58,17 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
<tr><td class="crd-td"><strong>Glasgow Village</strong></td><td class="crd-td">Demerara-Mahaica</td><td class="crd-td">6,52 N, 58,28 W</td><td class="crd-td">46</td><td class="crd-td">96</td><td class="crd-td">164</td><td class="crd-td">284</td><td class="crd-td">306</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty-five settlements in Coastal Guyana ordered by 2026AD population.</figcaption>
</figure>

## Interior Guyana: Mining Corridors and Savannas

The interior of Guyana encompasses the forested watersheds of the Barima, Cuyuni, Mazaruni, Potaro, middle Demerara and upper Essequibo rivers (Regions 1, 7, 8, 9 and 10) [@calix2008economic; @granger2012geopolitics].

Table \ref{tab:gaz-interior-guyana} documents 30 leading settlements across Interior Guyana, ordered by 2026 population:

<figure class="crd-table-figure" id="tab:gaz-interior-guyana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Linden</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">6,01 N, 58,31 W</td><td class="crd-td">10,7k</td><td class="crd-td">12,8k</td><td class="crd-td">17,1k</td><td class="crd-td">23,8k</td><td class="crd-td">50,8k</td></tr>
<tr><td class="crd-td"><strong>Anna Regina</strong></td><td class="crd-td">Cuyuni-Mazaruni</td><td class="crd-td">7,27 N, 58,48 W</td><td class="crd-td">2,8k</td><td class="crd-td">4k</td><td class="crd-td">5,8k</td><td class="crd-td">8,8k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Mabaruma</strong></td><td class="crd-td">Barima-Waini</td><td class="crd-td">8,2 N, 59,78 W</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Lethem</strong></td><td class="crd-td">Upper Demerara-Berbice</td><td class="crd-td">3,37 N, 59,8 W</td><td class="crd-td">645</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">4,5k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Mahdia</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">5,28 N, 59,15 W</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">1,8k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Kwakwani</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,28 N, 58,05 W</td><td class="crd-td">575</td><td class="crd-td">691</td><td class="crd-td">920</td><td class="crd-td">1,3k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Paramakatoi</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">4,72 N, 59,7 W</td><td class="crd-td">552</td><td class="crd-td">621</td><td class="crd-td">750</td><td class="crd-td">653</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Monkey Mountain</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">4,48 N, 59,68 W</td><td class="crd-td">259</td><td class="crd-td">292</td><td class="crd-td">353</td><td class="crd-td">307</td><td class="crd-td">786</td></tr>
<tr><td class="crd-td"><strong>Ituni</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,54 N, 58,26 W</td><td class="crd-td">162</td><td class="crd-td">194</td><td class="crd-td">259</td><td class="crd-td">359</td><td class="crd-td">768</td></tr>
<tr><td class="crd-td"><strong>Attai Village</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,08 N, 58,52 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Ebini</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,57 N, 57,78 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>GNS Kimbia</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,62 N, 57,73 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Hururu</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,37 N, 58 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Kumaka</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,58 N, 57,93 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Lancaster</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,83 N, 58,25 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Lucky Spot</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,97 N, 58,32 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Malali</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,62 N, 58,35 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Masabona</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,6 N, 58,38 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Old England</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,97 N, 58,27 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Pubu</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,23 N, 58,62 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Sandhills</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,81 N, 57,74 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Takama</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,57 N, 57,92 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Takama Battle School</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,6 N, 57,97 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Three Friends</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,92 N, 58,31 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Wiribisirikanali</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,5 N, 58,38 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Zion</strong></td><td class="crd-td">Upper Takutu-Upper Essequibo</td><td class="crd-td">5,68 N, 57,85 W</td><td class="crd-td">67</td><td class="crd-td">80</td><td class="crd-td">107</td><td class="crd-td">149</td><td class="crd-td">318</td></tr>
<tr><td class="crd-td"><strong>Arnik Village</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">5,02 N, 59,53 W</td><td class="crd-td">104</td><td class="crd-td">117</td><td class="crd-td">142</td><td class="crd-td">123</td><td class="crd-td">316</td></tr>
<tr><td class="crd-td"><strong>Chenapowu Village</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">4,92 N, 59,57 W</td><td class="crd-td">104</td><td class="crd-td">117</td><td class="crd-td">142</td><td class="crd-td">123</td><td class="crd-td">316</td></tr>
<tr><td class="crd-td"><strong>Holmia</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">4,97 N, 59,58 W</td><td class="crd-td">104</td><td class="crd-td">117</td><td class="crd-td">142</td><td class="crd-td">123</td><td class="crd-td">316</td></tr>
<tr><td class="crd-td"><strong>Ipisiau Village</strong></td><td class="crd-td">Potaro-Siparuni</td><td class="crd-td">4,88 N, 60,02 W</td><td class="crd-td">104</td><td class="crd-td">117</td><td class="crd-td">142</td><td class="crd-td">123</td><td class="crd-td">316</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty settlements in Interior Guyana ordered by 2026AD population.</figcaption>
</figure>

# Gazetteer of Leading Settlements across Suriname

## Paramaribo and Wanica Metropolitan Belt

The contiguous urban agglomeration of Paramaribo and Wanica concentrates nearly 60% of Suriname's national population within a compact 1.180 km² coastal zone [@lamur1973demographic; @abs2014suriname].

Table \ref{tab:gaz-paramaribo-wanica} presents 25 leading urban centres and administrative resorts across Paramaribo and Wanica, ordered by 2026 population:

<figure class="crd-table-figure" id="tab:gaz-paramaribo-wanica">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Paramaribo</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,87 N, 55,17 W</td><td class="crd-td">16,3k</td><td class="crd-td">31,3k</td><td class="crd-td">72,4k</td><td class="crd-td">155,8k</td><td class="crd-td">237,8k</td></tr>
<tr><td class="crd-td"><strong>Blauwgrond</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,84 N, 55,12 W</td><td class="crd-td">2,3k</td><td class="crd-td">4,4k</td><td class="crd-td">10,2k</td><td class="crd-td">21,9k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Kwarasan</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,7 N, 55,22 W</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">6,3k</td><td class="crd-td">13,9k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Latour</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,8 N, 55,21 W</td><td class="crd-td">2,2k</td><td class="crd-td">4,1k</td><td class="crd-td">9,6k</td><td class="crd-td">20,6k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>De Nieuwe Grond</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,75 N, 55,21 W</td><td class="crd-td">1,9k</td><td class="crd-td">3,7k</td><td class="crd-td">8,5k</td><td class="crd-td">18,2k</td><td class="crd-td">27,8k</td></tr>
<tr><td class="crd-td"><strong>Munder</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,84 N, 55,18 W</td><td class="crd-td">1,3k</td><td class="crd-td">2,4k</td><td class="crd-td">5,6k</td><td class="crd-td">12k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Houttuin</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,74 N, 55,14 W</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">3,6k</td><td class="crd-td">8k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Beekhuizen</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,81 N, 55,17 W</td><td class="crd-td">1,3k</td><td class="crd-td">2,4k</td><td class="crd-td">5,6k</td><td class="crd-td">12k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Weg naar Zee</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,87 N, 55,21 W</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">5,2k</td><td class="crd-td">11,2k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Kwatta</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,87 N, 55,27 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">3,3k</td><td class="crd-td">7,3k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Meerzorg</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,81 N, 55,14 W</td><td class="crd-td">904</td><td class="crd-td">1,7k</td><td class="crd-td">4k</td><td class="crd-td">8,6k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Saramacca Polder</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,83 N, 55,26 W</td><td class="crd-td">819</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">5,2k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Livorno</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,78 N, 55,18 W</td><td class="crd-td">678</td><td class="crd-td">1,3k</td><td class="crd-td">3k</td><td class="crd-td">6,5k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Jarikaba</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,81 N, 55,33 W</td><td class="crd-td">478</td><td class="crd-td">691</td><td class="crd-td">1,4k</td><td class="crd-td">3,1k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Domburg</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,69 N, 55,08 W</td><td class="crd-td">454</td><td class="crd-td">656</td><td class="crd-td">1,3k</td><td class="crd-td">2,9k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Nieuw Amsterdam</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,89 N, 55,09 W</td><td class="crd-td">412</td><td class="crd-td">791</td><td class="crd-td">1,8k</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Kampong Baroe</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,75 N, 55,4 W</td><td class="crd-td">180</td><td class="crd-td">261</td><td class="crd-td">523</td><td class="crd-td">1,2k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Onverwacht</strong></td><td class="crd-td">Wanica</td><td class="crd-td">5,59 N, 55,19 W</td><td class="crd-td">169</td><td class="crd-td">244</td><td class="crd-td">490</td><td class="crd-td">1,1k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Welgelegen</strong></td><td class="crd-td">Paramaribo</td><td class="crd-td">5,84 N, 55,22 W</td><td class="crd-td">43</td><td class="crd-td">83</td><td class="crd-td">192</td><td class="crd-td">413</td><td class="crd-td">630</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading twenty-five settlements in the Paramaribo and Wanica metropolitan conurbation ordered by 2026AD population.</figcaption>
</figure>

## Coastal Polders and Interior River Basins

Beyond the capital agglomeration, Surinamese settlement extends through the coastal agricultural districts of Nickerie, Coronie, Saramacca and Commewijne, and southward into the interior bauxite, mining and Maroon territories of Para, Marowijne, Brokopondo and Sipaliwini [@ramdayal2021legacy; @lima2015origine].

Table \ref{tab:gaz-suriname-districts} documents 25 leading regional settlements across these eight districts, ordered by 2026 population:

<figure class="crd-table-figure" id="tab:gaz-suriname-districts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Centrum</strong></td><td class="crd-td">Brokopondo</td><td class="crd-td">5,07 N, 54,96 W</td><td class="crd-td">6k</td><td class="crd-td">7,3k</td><td class="crd-td">11k</td><td class="crd-td">18,7k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Boven Suriname</strong></td><td class="crd-td">Sipaliwini</td><td class="crd-td">3,91 N, 55,58 W</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">7,5k</td><td class="crd-td">5,9k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Brokopondo</strong></td><td class="crd-td">Brokopondo</td><td class="crd-td">5,06 N, 54,98 W</td><td class="crd-td">4,2k</td><td class="crd-td">5,2k</td><td class="crd-td">7,8k</td><td class="crd-td">13,3k</td><td class="crd-td">17,1k</td></tr>
<tr><td class="crd-td"><strong>Tapanahony</strong></td><td class="crd-td">Sipaliwini</td><td class="crd-td">3,51 N, 55,05 W</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">5,8k</td><td class="crd-td">4,5k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Nieuw Nickerie</strong></td><td class="crd-td">Nickerie</td><td class="crd-td">5,93 N, 56,97 W</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">6,3k</td><td class="crd-td">12,9k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Moengo</strong></td><td class="crd-td">Marowijne</td><td class="crd-td">5,61 N, 54,4 W</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k</td><td class="crd-td">6,8k</td><td class="crd-td">13,9k</td><td class="crd-td">12,7k</td></tr>
<tr><td class="crd-td"><strong>Para Noord</strong></td><td class="crd-td">Para</td><td class="crd-td">5,17 N, 55,61 W</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">5,8k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Para Oost</strong></td><td class="crd-td">Para</td><td class="crd-td">5,11 N, 55,67 W</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,8k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Westelijke Polders</strong></td><td class="crd-td">Nickerie</td><td class="crd-td">5,9 N, 57,05 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">4,2k</td><td class="crd-td">8,7k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Tamanredjo</strong></td><td class="crd-td">Commewijne</td><td class="crd-td">5,79 N, 55,02 W</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">3k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Oostelijke Polders</strong></td><td class="crd-td">Nickerie</td><td class="crd-td">5,92 N, 56,9 W</td><td class="crd-td">939</td><td class="crd-td">1,6k</td><td class="crd-td">3,5k</td><td class="crd-td">7,2k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Para Zuid</strong></td><td class="crd-td">Para</td><td class="crd-td">5,35 N, 54,9 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Alkmaar</strong></td><td class="crd-td">Commewijne</td><td class="crd-td">5,85 N, 55,02 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">2,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Albina</strong></td><td class="crd-td">Marowijne</td><td class="crd-td">5,5 N, 54,06 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">3,3k</td><td class="crd-td">6,7k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Brownsweg</strong></td><td class="crd-td">Brokopondo</td><td class="crd-td">5 N, 55,15 W</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">4,4k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Mariënburg</strong></td><td class="crd-td">Commewijne</td><td class="crd-td">5,88 N, 55,04 W</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">2k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Sarakreek</strong></td><td class="crd-td">Brokopondo</td><td class="crd-td">4,32 N, 54,97 W</td><td class="crd-td">887</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Tijgerkreek</strong></td><td class="crd-td">Saramacca</td><td class="crd-td">5,79 N, 55,52 W</td><td class="crd-td">963</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Groningen</strong></td><td class="crd-td">Saramacca</td><td class="crd-td">5,8 N, 55,47 W</td><td class="crd-td">955</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Wageningen</strong></td><td class="crd-td">Nickerie</td><td class="crd-td">5,76 N, 56,67 W</td><td class="crd-td">385</td><td class="crd-td">661</td><td class="crd-td">1,4k</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Groot Henar</strong></td><td class="crd-td">Nickerie</td><td class="crd-td">5,86 N, 56,86 W</td><td class="crd-td">355</td><td class="crd-td">609</td><td class="crd-td">1,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Kabalebo</strong></td><td class="crd-td">Sipaliwini</td><td class="crd-td">4,41 N, 57,22 W</td><td class="crd-td">506</td><td class="crd-td">619</td><td class="crd-td">958</td><td class="crd-td">747</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Klaaskreek</strong></td><td class="crd-td">Brokopondo</td><td class="crd-td">5,18 N, 55,08 W</td><td class="crd-td">613</td><td class="crd-td">753</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Powakka</strong></td><td class="crd-td">Para</td><td class="crd-td">5,45 N, 55,08 W</td><td class="crd-td">372</td><td class="crd-td">483</td><td class="crd-td">793</td><td class="crd-td">1,2k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Totness</strong></td><td class="crd-td">Coronie</td><td class="crd-td">5,88 N, 56,33 W</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading twenty-five regional settlements in rural and interior Suriname ordered by 2026AD population.</figcaption>
</figure>

# Gazetteer of Leading Settlements across French Guiana

French Guiana contains 22 communes and numerous historical localities distributed along the coastal littoral and the Maroni and Oyapock river borders [@mamlamfouck1992histoire; @insee2023guyane].

Table \ref{tab:gaz-french-guiana} presents 35 leading settlements across French Guiana, ordered by 2026 population:

<figure class="crd-table-figure" id="tab:gaz-french-guiana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Commune</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cayenne</strong></td><td class="crd-td">Cayenne</td><td class="crd-td">4,94 N, 52,33 W</td><td class="crd-td">5,5k</td><td class="crd-td">8,7k</td><td class="crd-td">7,7k</td><td class="crd-td">17,6k</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Saint-Laurent-du-Maroni</strong></td><td class="crd-td">Saint-Laurent-du-Maroni</td><td class="crd-td">4,95 N, 54,01 W</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">5,7k</td><td class="crd-td">13,1k</td><td class="crd-td">59,6k</td></tr>
<tr><td class="crd-td"><strong>Matoury</strong></td><td class="crd-td">Matoury</td><td class="crd-td">4,83 N, 52,35 W</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">3,8k</td><td class="crd-td">8,8k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Kourou</strong></td><td class="crd-td">Kourou</td><td class="crd-td">5,16 N, 52,64 W</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">3k</td><td class="crd-td">6,9k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Remire-Montjoly</strong></td><td class="crd-td">Remire-Montjoly</td><td class="crd-td">4,89 N, 52,28 W</td><td class="crd-td">2,1k</td><td class="crd-td">3,3k</td><td class="crd-td">2,9k</td><td class="crd-td">6,7k</td><td class="crd-td">30,3k</td></tr>
<tr><td class="crd-td"><strong>Rémire-Montjoly</strong></td><td class="crd-td">Rémire-Montjoly</td><td class="crd-td">4,92 N, 52,27 W</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">2,4k</td><td class="crd-td">5,4k</td><td class="crd-td">24,7k</td></tr>
<tr><td class="crd-td"><strong>Macouria</strong></td><td class="crd-td">Macouria</td><td class="crd-td">4,99 N, 52,48 W</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td><td class="crd-td">4,8k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Mana</strong></td><td class="crd-td">Mana</td><td class="crd-td">5 N, 53,68 W</td><td class="crd-td">829</td><td class="crd-td">1,3k</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Apatou</strong></td><td class="crd-td">Apatou</td><td class="crd-td">5,16 N, 54,34 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">4,2k</td><td class="crd-td">3,3k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Grand-Santi</strong></td><td class="crd-td">Grand-Santi</td><td class="crd-td">4,27 N, 54,38 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">3,2k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Maripasoula</strong></td><td class="crd-td">Maripasoula</td><td class="crd-td">3,05 N, 53,83 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">2,3k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Papaichton</strong></td><td class="crd-td">Papaichton</td><td class="crd-td">4,02 N, 54,05 W</td><td class="crd-td">379</td><td class="crd-td">597</td><td class="crd-td">525</td><td class="crd-td">1,2k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Saint-Georges</strong></td><td class="crd-td">Saint-Georges</td><td class="crd-td">3,81 N, 52,08 W</td><td class="crd-td">372</td><td class="crd-td">586</td><td class="crd-td">515</td><td class="crd-td">1,2k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Sinnamary</strong></td><td class="crd-td">Sinnamary</td><td class="crd-td">5,38 N, 52,96 W</td><td class="crd-td">285</td><td class="crd-td">450</td><td class="crd-td">396</td><td class="crd-td">907</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Montsinéry-Tonnegrande</strong></td><td class="crd-td">Montsinéry-Tonnegrande</td><td class="crd-td">4,81 N, 52,51 W</td><td class="crd-td">274</td><td class="crd-td">433</td><td class="crd-td">380</td><td class="crd-td">872</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Roura</strong></td><td class="crd-td">Roura</td><td class="crd-td">4,47 N, 52,52 W</td><td class="crd-td">261</td><td class="crd-td">411</td><td class="crd-td">362</td><td class="crd-td">829</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Résidence Cogneau-Larivot</strong></td><td class="crd-td">Résidence Cogneau-Larivot</td><td class="crd-td">4,89 N, 52,34 W</td><td class="crd-td">245</td><td class="crd-td">387</td><td class="crd-td">340</td><td class="crd-td">779</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Camopi</strong></td><td class="crd-td">Camopi</td><td class="crd-td">2,87 N, 52,69 W</td><td class="crd-td">166</td><td class="crd-td">261</td><td class="crd-td">229</td><td class="crd-td">526</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Régina</strong></td><td class="crd-td">Régina</td><td class="crd-td">4,31 N, 52,13 W</td><td class="crd-td">149</td><td class="crd-td">235</td><td class="crd-td">206</td><td class="crd-td">473</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Charvein</strong></td><td class="crd-td">Charvein</td><td class="crd-td">5,58 N, 53,9 W</td><td class="crd-td">144</td><td class="crd-td">227</td><td class="crd-td">199</td><td class="crd-td">456</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Awala-Yalimapo</strong></td><td class="crd-td">Awala-Yalimapo</td><td class="crd-td">5,74 N, 53,91 W</td><td class="crd-td">139</td><td class="crd-td">219</td><td class="crd-td">193</td><td class="crd-td">442</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Iracoubo</strong></td><td class="crd-td">Iracoubo</td><td class="crd-td">5,48 N, 53,21 W</td><td class="crd-td">138</td><td class="crd-td">217</td><td class="crd-td">191</td><td class="crd-td">438</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Javouhey</strong></td><td class="crd-td">Javouhey</td><td class="crd-td">5,61 N, 53,82 W</td><td class="crd-td">90</td><td class="crd-td">142</td><td class="crd-td">124</td><td class="crd-td">285</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Bellevue</strong></td><td class="crd-td">Bellevue</td><td class="crd-td">5,48 N, 53,26 W</td><td class="crd-td">48</td><td class="crd-td">76</td><td class="crd-td">67</td><td class="crd-td">153</td><td class="crd-td">696</td></tr>
<tr><td class="crd-td"><strong>Saül</strong></td><td class="crd-td">Saül</td><td class="crd-td">3,62 N, 53,21 W</td><td class="crd-td">25</td><td class="crd-td">39</td><td class="crd-td">34</td><td class="crd-td">79</td><td class="crd-td">360</td></tr>
<tr><td class="crd-td"><strong>Saint-Élie</strong></td><td class="crd-td">Saint-Élie</td><td class="crd-td">4,49 N, 53,11 W</td><td class="crd-td">30</td><td class="crd-td">30</td><td class="crd-td">30</td><td class="crd-td">38</td><td class="crd-td">174</td></tr>
<tr><td class="crd-td"><strong>Ouanary</strong></td><td class="crd-td">Ouanary</td><td class="crd-td">4,21 N, 51,83 W</td><td class="crd-td">30</td><td class="crd-td">30</td><td class="crd-td">30</td><td class="crd-td">36</td><td class="crd-td">164</td></tr>
<tr><td class="crd-td"><strong>Kaw</strong></td><td class="crd-td">Kaw</td><td class="crd-td">4,49 N, 52,04 W</td><td class="crd-td">25</td><td class="crd-td">25</td><td class="crd-td">25</td><td class="crd-td">25</td><td class="crd-td">65</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading thirty-five catalogued settlements and communes in French Guiana ordered by 2026AD population.</figcaption>
</figure>

# Excluded Candidates and Source Ledger Reconciliation

The project source ledger records 425 candidate localities that were evaluated and documented as excluded from the final gazetteer. These exclusions follow three consistent criteria:
1. **Duplicate Toponymic Aliases**: Variant orthographies or duplicate coordinate listings situated within 2,5 km of a primary canonical settlement hall (e.g. redundant entries for Georgetown, Paramaribo and Cayenne).
2. **Subsumed Estate Camps and Dependent Hamlets**: Small residential outposts or historical sugar estate barracks lacking independent administrative or census recognition in modern statistical compendia.
3. **Non-Civilian Installations**: Historic military fortresses, penal isolation camps and navigation beacons that did not sustain permanent civilian populations following the mid-twentieth century.

Table \ref{tab:ledger-exclusions} documents a sample of twenty prominent excluded candidate records alongside their documented justifications:

<figure class="crd-table-figure" id="tab:ledger-exclusions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Key</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Documented Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgetown-Guyana</strong></td><td class="crd-td">Guyana</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Georgetown.</td></tr>
<tr><td class="crd-td"><strong>Georgetown-Guyana</strong></td><td class="crd-td">Guyana</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Georgetown.</td></tr>
<tr><td class="crd-td"><strong>Cayenne-French Guiana</strong></td><td class="crd-td">French Guiana</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Cayenne.</td></tr>
<tr><td class="crd-td"><strong>Blauwgrond-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Blauwgrond.</td></tr>
<tr><td class="crd-td"><strong>Latour-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Latour.</td></tr>
<tr><td class="crd-td"><strong>Linden-Guyana</strong></td><td class="crd-td">Guyana</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Linden.</td></tr>
<tr><td class="crd-td"><strong>Rainville-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Blauwgrond.</td></tr>
<tr><td class="crd-td"><strong>Pontbuiten-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Latour.</td></tr>
<tr><td class="crd-td"><strong>Pontbuiten-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Latour.</td></tr>
<tr><td class="crd-td"><strong>Rainville-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Blauwgrond.</td></tr>
<tr><td class="crd-td"><strong>Welgelegen-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Welgelegen.</td></tr>
<tr><td class="crd-td"><strong>Lelydorp-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Kwarasan.</td></tr>
<tr><td class="crd-td"><strong>Lelydorp-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Kwarasan.</td></tr>
<tr><td class="crd-td"><strong>Flora-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Latour.</td></tr>
<tr><td class="crd-td"><strong>Flora-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Latour.</td></tr>
<tr><td class="crd-td"><strong>Welgelegen-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Welgelegen.</td></tr>
<tr><td class="crd-td"><strong>Munder Buiten-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Munder.</td></tr>
<tr><td class="crd-td"><strong>Beekhuizen-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Beekhuizen.</td></tr>
<tr><td class="crd-td"><strong>Weg naar Zee-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Weg naar Zee.</td></tr>
<tr><td class="crd-td"><strong>Tammenga-Suriname</strong></td><td class="crd-td">Suriname</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Welgelegen.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Sample of twenty documented exclusions from the project source ledger with exclusion justifications.</figcaption>
</figure>

# Sources

<div id="refs"></div>
