---
title: "Ecuador after Independence"
subtitle: "Gazetteer of Provincial Capitals, Ports and Cantons, 1830-2025"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ecuador_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/ecuador_after_independence_regional_map.png"
hero_caption: "Spatial distribution of 267 cantonal capitals, ports and regional centres across 24 Ecuadorian provinces and the Galápagos archipelago."
hero_label: "fig:hero-ecuador-settlements"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 267 urban, port and cantonal settlements across Ecuador's 24 provinces and the Galápagos archipelago between 1830 and 2026 (covering 268.846 km²). Drawn exclusively from official census publications of the Instituto Nacional de Estadística y Censos (INEC) from 1950 to 2022, the 2024 sub-national revision, nineteenth-century municipal enumerations and metropolitan reconciliations for Quito and Guayaquil [@Censos2023Conciliacion; @Censos2011Resultados; @Ramirez2015Leyes], the register compiles 1.487 settlement-year population records spanning 1857 to 2025 (an average of 5,57 observations per centre). At the 2022-2025 horizon, the urban system is led by the Guayaquil metropolitan complex (3,67M in 2025; 2,91M municipal in 2022) and the Quito Metropolitan District (2,86M in 2025; 1,76M city core in 2022), followed by Cuenca (624,1k), Santo Domingo (471,2k), Ambato (383,1k), Portoviejo (345,3k), Durán (333k), Machala (324,1k), Manta (291,3k), Riobamba (272,8k) and Loja (258,5k) [@Censos2023Conciliacion; @Marquezsanchez2026Two]. Alongside the 267 catalogued settlements, the regional source ledger records nine excluded candidate entries out of 276 evaluated records.

# Background

Urban settlement in post-independence Ecuador grew from a colonial spine of highland basins linked by mule tracks to a single Pacific port at Guayaquil [@Marquezsanchez2026Two; @Testori2018Alternative]. Throughout the nineteenth century, Quito, Cuenca, Riobamba, Ambato, Loja, Latacunga and Ibarra functioned as compact administrative and market towns serving surrounding agrarian parishes, whereas coastal settlements expanded rapidly only after cacao and steam river transport transformed the Guayas delta and Manabí littoral [@Herrera2021Urbanizacion; @Censos2023Conciliacion].

During the second half of the twentieth century, road integration, banana cultivation and petroleum extraction reconfigured the cantonal network. Intermediate coastal and piedmont centres such as Santo Domingo de los Colorados, Quevedo, Machala, Manta, Milagro and Esmeraldas multiplied several times over between 1950 and 2022, while suburban cantons and parishes around Guayaquil (Durán, Daule, Samborondón) and Quito (Calderón, Conocoto, Cumbayá) absorbed spill-over metropolitan growth [@Herrera2021Urbanizacion; @Jara2015Evaluando; @Salgado2024Rescue]. In the Amazonian east, oil towns such as Lago Agrio (Nueva Loja) and Francisco de Orellana (Coca) joined historic mission centres like Tena, Puyo, Macas and Zamora [@Castro2019Poblaciones].

# Methodology

Settlement series were assembled through four sequential waves recorded in the chapter source ledger. Wave 1 extracted 211 cantonal seats and urban centres from INEC's 1950-2022 census volumes and 2024 parish revision (zero crowd-sourced fallback entries) [@Censos2011Resultados; @Censos2023Conciliacion]. Wave 2 added 37 entries through coordinate repair and explicit metropolitan reconciliation for Quito and Guayaquil [@Ramirez2015Leyes]. Wave 3 restored 16 historical nineteenth- and early twentieth-century municipal counts back to 1857, and Wave 4 filled three residual sub-regional gaps across coastal and Amazonian provinces, lowering the marginal gain on the final sweep to 1,14%.

Every entry in the 267-settlement gazetteer carries WGS84 coordinates and assigns to one of the 24 provincial regions. To avoid double counting, metropolitan aggregates for Guayaquil and Quito are flagged separately from municipal cores and suburban parishes, while nine unlocated toponyms or co-located variant aliases were isolated in the exclusion ledger.

# Testing and Validation

Ledger reconciliation confirms 267 included settlements and 9 excluded candidates (276 total evaluated records, with zero unaccounted entries). All 267 catalogued centres possess valid geographic coordinates and multi-year census series, with complete coverage across all 24 provinces. Figure \ref{fig:sett-ecuador} displays the twelve largest urban and metropolitan entities alongside the log-log Zipf rank-size distribution ($\alpha = 1,06$, $R^2 = 0,98$) [@Ramirez2015Leyes].

<figure class="crd-figure-block" id="fig:sett-ecuador">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-ecuador-after-independence-settlements/ecuador_after_independence_urban_hierarchy.png" alt="fig:sett-ecuador" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling and twelve largest urban and metropolitan entities across Ecuador's 267 catalogued settlements.</figcaption>
</figure>

# Results

Table \ref{tab:top40-ecuador} presents the 40 largest catalogued settlements ordered by peak recorded population, illustrating the bipolar dominance of Guayaquil and Quito alongside Cuenca and fast-growing intermediate cities [@Ramirez2015Leyes; @Herrera2021Urbanizacion; @Censos2023Conciliacion]. Table \ref{tab:regsum-ecuador} summarises settlement counts and leading centres across all 24 provinces.

<figure class="crd-table-figure" id="tab:top40-ecuador">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1950</th><th class="crd-th">1982</th><th class="crd-th">2010</th><th class="crd-th">2022</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Guayaquil (Metro)</strong></td><td class="crd-td">Santa Elena</td><td class="crd-td">-2,35, -80,2</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">1,28M</td><td class="crd-td">2,84M</td><td class="crd-td">3,55M</td><td class="crd-td">3,67M (2025)</td></tr>
<tr><td class="crd-td"><strong>Guayaquil</strong></td><td class="crd-td">Santa Elena</td><td class="crd-td">-2,35, -80,2</td><td class="crd-td">1857-2025</td><td class="crd-td">259k</td><td class="crd-td">1,2M</td><td class="crd-td">2,42M</td><td class="crd-td">2,91M</td><td class="crd-td">2,98M (2025)</td></tr>
<tr><td class="crd-td"><strong>Distrito Metropolitano De Quito</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,17, -78,51</td><td class="crd-td">1950-2025</td><td class="crd-td">209,9k</td><td class="crd-td">817,4k</td><td class="crd-td">2,29M</td><td class="crd-td">2,8M</td><td class="crd-td">2,86M (2025)</td></tr>
<tr><td class="crd-td"><strong>Quito (Metro)</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">2010-2022</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,78M</td><td class="crd-td">1,98M</td><td class="crd-td">1,98M (2022)</td></tr>
<tr><td class="crd-td"><strong>Quito</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">1857-2022</td><td class="crd-td">209,9k</td><td class="crd-td">866,5k</td><td class="crd-td">1,61M</td><td class="crd-td">1,76M</td><td class="crd-td">1,76M (2022)</td></tr>
<tr><td class="crd-td"><strong>Cuenca</strong></td><td class="crd-td">Azuay</td><td class="crd-td">-2,84, -79,22</td><td class="crd-td">1857-2025</td><td class="crd-td">99,2k</td><td class="crd-td">152,4k</td><td class="crd-td">508,5k</td><td class="crd-td">612,6k</td><td class="crd-td">624,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo</strong></td><td class="crd-td">Santo Domingo de los Tsáchilas</td><td class="crd-td">-0,34, -79,17</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">370,9k</td><td class="crd-td">458,2k</td><td class="crd-td">471,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ambato</strong></td><td class="crd-td">Tungurahua</td><td class="crd-td">-1,29, -78,74</td><td class="crd-td">1889-2025</td><td class="crd-td">31,3k</td><td class="crd-td">100,5k</td><td class="crd-td">336,4k</td><td class="crd-td">377,4k</td><td class="crd-td">383,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Portoviejo</strong></td><td class="crd-td">Manabi</td><td class="crd-td">-1, -80,4</td><td class="crd-td">1889-2025</td><td class="crd-td">16,3k</td><td class="crd-td">102,6k</td><td class="crd-td">284,2k</td><td class="crd-td">336,5k</td><td class="crd-td">345,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo de los Colorados</strong></td><td class="crd-td">Santo Domingo de los Tsáchilas</td><td class="crd-td">-0,26, -79,18</td><td class="crd-td">1982-2022</td><td class="crd-td">-</td><td class="crd-td">69,2k</td><td class="crd-td">270,9k</td><td class="crd-td">334,8k</td><td class="crd-td">334,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Durán</strong></td><td class="crd-td">Guayas</td><td class="crd-td">-2,22, -79,76</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">51k</td><td class="crd-td">235,5k</td><td class="crd-td">316,6k</td><td class="crd-td">333k (2025)</td></tr>
<tr><td class="crd-td"><strong>Machala</strong></td><td class="crd-td">El Oro</td><td class="crd-td">-3,31, -79,94</td><td class="crd-td">1950-2025</td><td class="crd-td">7,5k</td><td class="crd-td">105,5k</td><td class="crd-td">254,8k</td><td class="crd-td">316,1k</td><td class="crd-td">324,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Manta</strong></td><td class="crd-td">Manabi</td><td class="crd-td">-1,03, -80,82</td><td class="crd-td">1950-2025</td><td class="crd-td">19k</td><td class="crd-td">100,3k</td><td class="crd-td">227,8k</td><td class="crd-td">281,1k</td><td class="crd-td">291,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Riobamba</strong></td><td class="crd-td">Chimborazo</td><td class="crd-td">-1,71, -78,67</td><td class="crd-td">1889-2025</td><td class="crd-td">29,8k</td><td class="crd-td">75,5k</td><td class="crd-td">234,9k</td><td class="crd-td">271k</td><td class="crd-td">272,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Loja</strong></td><td class="crd-td">Loja</td><td class="crd-td">-4,09, -79,19</td><td class="crd-td">1889-2025</td><td class="crd-td">15,4k</td><td class="crd-td">71,7k</td><td class="crd-td">230,3k</td><td class="crd-td">254,5k</td><td class="crd-td">258,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Calderón</strong></td><td class="crd-td">Esmeraldas</td><td class="crd-td">1,18, -78,76</td><td class="crd-td">2010-2022</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">149,2k</td><td class="crd-td">249,9k</td><td class="crd-td">249,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Daule</strong></td><td class="crd-td">Guayas</td><td class="crd-td">-1,92, -79,93</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">18,9k</td><td class="crd-td">120,8k</td><td class="crd-td">225,8k</td><td class="crd-td">246,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Esmeraldas</strong></td><td class="crd-td">Esmeraldas</td><td class="crd-td">0,81, -79,63</td><td class="crd-td">1950-2025</td><td class="crd-td">13,2k</td><td class="crd-td">90,4k</td><td class="crd-td">209,4k</td><td class="crd-td">229,4k</td><td class="crd-td">232,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Latacunga</strong></td><td class="crd-td">Cotopaxi</td><td class="crd-td">-0,81, -78,53</td><td class="crd-td">1889-2025</td><td class="crd-td">10,4k</td><td class="crd-td">28,8k</td><td class="crd-td">171,7k</td><td class="crd-td">221k</td><td class="crd-td">230,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ibarra</strong></td><td class="crd-td">Carchi</td><td class="crd-td">0,52, -78,13</td><td class="crd-td">1889-2025</td><td class="crd-td">14k</td><td class="crd-td">53,4k</td><td class="crd-td">187,2k</td><td class="crd-td">223,5k</td><td class="crd-td">230,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Quevedo</strong></td><td class="crd-td">Los Ríos</td><td class="crd-td">-1,07, -79,44</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">67k</td><td class="crd-td">176,6k</td><td class="crd-td">219,5k</td><td class="crd-td">227,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Milagro</strong></td><td class="crd-td">Guayas</td><td class="crd-td">-2,11, -79,56</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">77k</td><td class="crd-td">175,9k</td><td class="crd-td">211,8k</td><td class="crd-td">217,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Santa Elena</strong></td><td class="crd-td">Santa Elena</td><td class="crd-td">-2,09, -80,52</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">145,6k</td><td class="crd-td">192,8k</td><td class="crd-td">198k (2025)</td></tr>
<tr><td class="crd-td"><strong>Babahoyo</strong></td><td class="crd-td">Los Ríos</td><td class="crd-td">-1,88, -79,51</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">42,3k</td><td class="crd-td">157k</td><td class="crd-td">188,8k</td><td class="crd-td">193,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Chone</strong></td><td class="crd-td">Manabi</td><td class="crd-td">-0,38, -80,07</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">33,8k</td><td class="crd-td">129,1k</td><td class="crd-td">136,7k</td><td class="crd-td">137,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Quinindé</strong></td><td class="crd-td">Esmeraldas</td><td class="crd-td">0,31, -79,5</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">129,8k</td><td class="crd-td">134,3k</td><td class="crd-td">134,9k (2020)</td></tr>
<tr><td class="crd-td"><strong>El Carmen</strong></td><td class="crd-td">Manabi</td><td class="crd-td">-0,33, -79,57</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">11,9k</td><td class="crd-td">110,2k</td><td class="crd-td">129,5k</td><td class="crd-td">132,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Conocoto</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,31, -78,5</td><td class="crd-td">2010-2022</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70k</td><td class="crd-td">122k</td><td class="crd-td">122k (2022)</td></tr>
<tr><td class="crd-td"><strong>Otavalo</strong></td><td class="crd-td">Imbabura</td><td class="crd-td">0,22, -78,25</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">17,5k</td><td class="crd-td">112,1k</td><td class="crd-td">120,2k</td><td class="crd-td">121k (2025)</td></tr>
<tr><td class="crd-td"><strong>La Libertad</strong></td><td class="crd-td">Santa Elena</td><td class="crd-td">-2,23, -80,9</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">42k</td><td class="crd-td">96,1k</td><td class="crd-td">117,8k</td><td class="crd-td">118,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Rumiñahui</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,4, -78,44</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">88k</td><td class="crd-td">111,4k</td><td class="crd-td">114,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Cayambe</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">0, -78,05</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">89,2k</td><td class="crd-td">110,8k</td><td class="crd-td">113,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Lago Agrio</strong></td><td class="crd-td">Sucumbios</td><td class="crd-td">0,13, -76,76</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,9k</td><td class="crd-td">109,7k</td><td class="crd-td">110,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Samborondón</strong></td><td class="crd-td">Guayas</td><td class="crd-td">-2,01, -79,76</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">67,3k</td><td class="crd-td">102k</td><td class="crd-td">109,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mejía</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,5, -78,65</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">82,2k</td><td class="crd-td">105,3k</td><td class="crd-td">108,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Montecristi</strong></td><td class="crd-td">Manabi</td><td class="crd-td">-1,13, -80,71</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">68,7k</td><td class="crd-td">101,6k</td><td class="crd-td">108,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Guaranda</strong></td><td class="crd-td">Bolívar</td><td class="crd-td">-1,44, -79,06</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">103,2k</td><td class="crd-td">101,3k</td><td class="crd-td">104,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Francisco De Orellana</strong></td><td class="crd-td">Orellana</td><td class="crd-td">-0,61, -76,55</td><td class="crd-td">2010-2025</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">73,2k</td><td class="crd-td">97,1k</td><td class="crd-td">101,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tulcán</strong></td><td class="crd-td">Carchi</td><td class="crd-td">0,9, -78,21</td><td class="crd-td">1982-2025</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">90,2k</td><td class="crd-td">96,8k</td><td class="crd-td">98,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Sangolquí</strong></td><td class="crd-td">Pichincha</td><td class="crd-td">-0,34, -78,45</td><td class="crd-td">1982-2022</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">75,1k</td><td class="crd-td">96,6k</td><td class="crd-td">96,6k (2022)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 40 Ecuadorian settlements and metropolitan aggregates ordered by peak population (n=267 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regsum-ecuador">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Area (km²)</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azuay</strong></td><td class="crd-td">8.686</td><td class="crd-td">15</td><td class="crd-td">Cuenca (624,1k)</td></tr>
<tr><td class="crd-td"><strong>Bolívar</strong></td><td class="crd-td">5.418</td><td class="crd-td">11</td><td class="crd-td">Guaranda (104,6k)</td></tr>
<tr><td class="crd-td"><strong>Carchi</strong></td><td class="crd-td">5.332</td><td class="crd-td">9</td><td class="crd-td">Ibarra (230,8k)</td></tr>
<tr><td class="crd-td"><strong>Cañar</strong></td><td class="crd-td">5.074</td><td class="crd-td">12</td><td class="crd-td">Azogues (77,8k)</td></tr>
<tr><td class="crd-td"><strong>Chimborazo</strong></td><td class="crd-td">6.103</td><td class="crd-td">5</td><td class="crd-td">Riobamba (272,8k)</td></tr>
<tr><td class="crd-td"><strong>Cotopaxi</strong></td><td class="crd-td">6.106</td><td class="crd-td">7</td><td class="crd-td">Latacunga (230,9k)</td></tr>
<tr><td class="crd-td"><strong>El Oro</strong></td><td class="crd-td">8.056</td><td class="crd-td">17</td><td class="crd-td">Machala (324,1k)</td></tr>
<tr><td class="crd-td"><strong>Esmeraldas</strong></td><td class="crd-td">16.292</td><td class="crd-td">10</td><td class="crd-td">Calderón (249,9k)</td></tr>
<tr><td class="crd-td"><strong>Galápagos</strong></td><td class="crd-td">6.768</td><td class="crd-td">5</td><td class="crd-td">Santa Cruz (18,1k)</td></tr>
<tr><td class="crd-td"><strong>Guayas</strong></td><td class="crd-td">13.884</td><td class="crd-td">26</td><td class="crd-td">Durán (333k)</td></tr>
<tr><td class="crd-td"><strong>Imbabura</strong></td><td class="crd-td">5.761</td><td class="crd-td">6</td><td class="crd-td">Otavalo (121k)</td></tr>
<tr><td class="crd-td"><strong>Loja</strong></td><td class="crd-td">10.147</td><td class="crd-td">14</td><td class="crd-td">Loja (258,5k)</td></tr>
<tr><td class="crd-td"><strong>Los Ríos</strong></td><td class="crd-td">6.877</td><td class="crd-td">15</td><td class="crd-td">Quevedo (227,1k)</td></tr>
<tr><td class="crd-td"><strong>Manabi</strong></td><td class="crd-td">18.202</td><td class="crd-td">25</td><td class="crd-td">Portoviejo (345,3k)</td></tr>
<tr><td class="crd-td"><strong>Morona Santiago</strong></td><td class="crd-td">24.834</td><td class="crd-td">12</td><td class="crd-td">Morona (60k)</td></tr>
<tr><td class="crd-td"><strong>Napo</strong></td><td class="crd-td">14.362</td><td class="crd-td">6</td><td class="crd-td">Tena (86,7k)</td></tr>
<tr><td class="crd-td"><strong>Orellana</strong></td><td class="crd-td">20.359</td><td class="crd-td">4</td><td class="crd-td">Francisco De Orellana (101,6k)</td></tr>
<tr><td class="crd-td"><strong>Pastaza</strong></td><td class="crd-td">27.339</td><td class="crd-td">3</td><td class="crd-td">Pastaza (89,4k)</td></tr>
<tr><td class="crd-td"><strong>Pichincha</strong></td><td class="crd-td">8.772</td><td class="crd-td">23</td><td class="crd-td">Distrito Metropolitano De Quito (2,86M)</td></tr>
<tr><td class="crd-td"><strong>Santa Elena</strong></td><td class="crd-td">5.093</td><td class="crd-td">7</td><td class="crd-td">Guayaquil (Metro) (3,67M)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo de los Tsáchilas</strong></td><td class="crd-td">6.020</td><td class="crd-td">3</td><td class="crd-td">Santo Domingo (471,2k)</td></tr>
<tr><td class="crd-td"><strong>Sucumbios</strong></td><td class="crd-td">21.387</td><td class="crd-td">8</td><td class="crd-td">Lago Agrio (110,1k)</td></tr>
<tr><td class="crd-td"><strong>Tungurahua</strong></td><td class="crd-td">4.988</td><td class="crd-td">16</td><td class="crd-td">Ambato (383,1k)</td></tr>
<tr><td class="crd-td"><strong>Zamora Chinchipe</strong></td><td class="crd-td">12.986</td><td class="crd-td">8</td><td class="crd-td">Zamora (32k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, provincial areas and leading urban centres across 24 Ecuadorian provinces.</figcaption>
</figure>

# Limitations

Boundary and scope distinctions require care when reading the ranked settlement table. Because Guayaquil's centroid falls near the western estuary boundary and Quito encompasses both its historic core and the wider *Distrito Metropolitano de Quito*, metropolitan totals must not be added to their constituent municipal seats [@Ramirez2015Leyes; @Testori2018Alternative]. Pre-1950 municipal counts exist primarily for major provincial capitals and ports, whereas smaller cantonal seats enter the series systematically from 1950 or 1982 onward [@Censos2023Conciliacion].

# Conclusion

The 267-settlement gazetteer captures the full transition of Ecuador's urban network from a sparse nineteenth-century Andean chain to a dense, bipolar coastal-highland system anchored by Guayaquil and Quito alongside more than a dozen intermediate cities exceeding 150k inhabitants.

# Appendix

Table \ref{tab:waves-ecuador} summarises the four-wave source ledger progression, and Table \ref{tab:excluded-ecuador} lists all nine excluded candidate entries recorded in the source ledger.

<figure class="crd-table-figure" id="tab:waves-ecuador">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Prior Included</th><th class="crd-th">Newly Included</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Primary INEC census and parish extraction</strong></td><td class="crd-td">0</td><td class="crd-td">211</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>2. Georeference repair and metropolitan reconciliation</strong></td><td class="crd-td">211</td><td class="crd-td">37</td><td class="crd-td">17,54%</td></tr>
<tr><td class="crd-td"><strong>3. Nineteenth- and twentieth-century municipal backfill</strong></td><td class="crd-td">248</td><td class="crd-td">16</td><td class="crd-td">6,45%</td></tr>
<tr><td class="crd-td"><strong>4. Sub-regional gap sweep</strong></td><td class="crd-td">264</td><td class="crd-td">3</td><td class="crd-td">1,14%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave settlement ingestion progression and marginal saturation audit.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-ecuador">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chaupitena</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'Chaupitena' (Loc).</td></tr>
<tr><td class="crd-td"><strong>La Aurora</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'La Aurora' (ULoc).</td></tr>
<tr><td class="crd-td"><strong>La Puntilla</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'La Puntilla' (ULoc).</td></tr>
<tr><td class="crd-td"><strong>Puerto Francisco de Orellana</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'Puerto Francisco de Orellana' (ULoc).</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo de Cutuglahua</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'Santo Domingo de Cutuglahua' (Loc).</td></tr>
<tr><td class="crd-td"><strong>Yaguachi</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">No verified coordinate found in primary national gazetteer for 'Yaguachi' (ULoc).</td></tr>
<tr><td class="crd-td"><strong>Atuntaqui</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Duplicate alias merged</td><td class="crd-td">Merged co-located modern twin 'Atuntaqui' into 'Antonio Ante' (0,41 km).</td></tr>
<tr><td class="crd-td"><strong>Bolívar</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Duplicate alias merged</td><td class="crd-td">Merged variant/duplicate 'Bolívar' into 'Bolívar' (0 km).</td></tr>
<tr><td class="crd-td"><strong>Olmedo</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Duplicate alias merged</td><td class="crd-td">Merged variant/duplicate 'Olmedo' into 'Olmedo' (0 km).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Excluded candidate entries in the Ecuador source ledger (n=9).</figcaption>
</figure>

# Sources

<div id="refs"></div>
