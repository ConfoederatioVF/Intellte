---
title: "Peru after Independence"
subtitle: "Settlement Gazetteer, Metropolitan Consolidation and Source Ledger, 1821-2025"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: peru_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/peru_after_independence_regional_map.png"
hero_caption: "Spatial distribution of 1.795 geocoded Peruvian districts and urban centres across 26 territorial units through 2025."
hero_label: "fig:hero-peru-settlements"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{8pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{8pt plus 2pt minus 2pt}
  - \setlength{\parskip}{2pt plus 1pt minus 1pt}
  - \linespread{0.95}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 1.795 geocoded cities, urban agglomerations and administrative district centres across Peru from republican independence in 1821 to 2025, covering 1.328.108 km² across 26 departmental and metropolitan jurisdictions. Constructed exclusively from official Peruvian national census publications (1836-2025) and demographic monographs with 0% crowd-sourced fallback, the register captures the full transition from nineteenth-century highland provincial capitals to modern coastal megacity primacy [@Carranza2015Seminario; @Lujan1966Tasas; @Salazar2021Lima]. Strict municipal boundary accounting consolidates the 43 districts of Lima Province into a single capital entity (9,6M in 2025), preserves the 7 consolidated districts of Callao as a distinct extra-municipal port suburb (1,04M in 2025), and tracks the joint Lima Metropolitana urban agglomeration (10,64M in 2025; 11,17M peak in 2022) separately to prevent double counting [@Peattle1990Participation; @Regaladoregalado2020Capital; @Zanella2025Acceso]. Alongside the 1.795 included settlements, the regional source ledger records 51 excluded candidate entries (34 duplicate historical aliases and 17 unlocated historical or recently established district toponyms) across four saturation waves culminating at 0,28% marginal gain [@Gavilano2017Mineria; @Rendon2024Expansion].

# Background

Peruvian urban settlement patterns reflect the abrupt twentieth-century shift from an agrarian highland hierarchy to a hyper-centralised coastal network [@Carranza2015Seminario; @Lujan1966Tasas]. In the nineteenth-century censuses of 1836, 1862 and 1876, only sixteen urban centres reached sufficient municipal visibility for separate city-level enumeration, led by Lima (55.627 in 1836; 101.488 in 1876), Callao (34.492 in 1876), Arequipa (29.237), Cusco (18.370), Tacna (14.183) and Chiclayo (11.325) [@Carranza2015Seminario]. By contrast, modern INEI district administration encompasses nearly 1.800 inhabited districts spanning coastal irrigated valleys, high Andean basins above 3.500 metres and lowland Amazonian river ports [@Haller2018Urbanization; @Miloslavich2025Percepcion; @Cesario2015Migracao].

# Methodology

Settlement extraction proceeded in four structured waves matching official census tables against national geographic coordinates [@Gavilano2017Mineria; @Rendon2024Expansion]. Wave 1 ingested 1.432 district records from primary INEI national enumerations (2007, 2017 and 2025), Wave 2 added 251 georeferenced and metropolitan reconciliations (17,53% gain), Wave 3 incorporated 107 longitudinal nineteenth- and twentieth-century urban series from 1836-1981 (6,36% gain), and Wave 4 resolved 5 remaining sub-regional gaps (0,28% gain).

To prevent intra-municipal fragmentation and metropolitan double counting, the 43 districts of Lima Province (including Cercado de Lima, San Juan de Lurigancho, San Martín de Porres, Ate, Comas and Villa El Salvador) are unified under Lima with city-proper scope, while the 7 districts of the Constitutional Province of Callao are unified under Callao with suburb scope [@Peattle1990Participation; @Salazar2021Lima; @Zanella2025Acceso]. Their combined conurbation is represented by Lima Metropolitana with metropolitan scope, enabling clean 3-phase subtraction during spatial disaggregation [@Regaladoregalado2020Capital; @Lujan1966Tasas].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 1.846 evaluated candidate records: 1.795 included settlements and 51 excluded entries (34 duplicate aliases consolidated into parent municipalities and 17 unlocated toponyms lacking primary coordinates in Ayacucho, Cusco, Apurímac, Huánuco, Loreto and neighbouring departments). Every one of the 26 sub-regional mask units is populated, with spatial snapping placing Lima, Callao and Lima Metropolitana in the Callao-border pixel group and Ricardo Palma in the Lima Metropolitan polygon. Figure \ref{fig:sett-hierarchy} summarises the rank-size distribution and leading urban centres of the full 1.795-settlement register.

<figure class="crd-figure-block" id="fig:sett-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-peru-after-independence-settlements/peru_after_independence_urban_hierarchy.png" alt="fig:sett-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Leading Peruvian urban centres and settlement rank-size distribution across 1.795 catalogued entries.</figcaption>
</figure>

# Results

## Metropolitan Consolidation and Top 45 Settlements

Table \ref{tab:peru-metro-scope} details the structural accounting separating Lima's unified 43-district municipal core, Callao's consolidated 7-district suburb and the combined Lima Metropolitana envelope from 1836 through 2025. Table \ref{tab:peru-top45} lists the 45 largest settlements in the gazetteer ordered by peak documented population, illustrating the transition from Lima Metropolitana (11,17M peak in 2022) and Arequipa (1,13M) down through secondary coastal ports, Sierra capitals and fast-growing peripheral urban districts [@Haller2018Urbanization; @Chen2016Technology; @Miloslavich2025Percepcion].

<figure class="crd-table-figure" id="tab:peru-metro-scope">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Entity</th><th class="crd-th">Accounting Scope</th><th class="crd-th">1876</th><th class="crd-th">1940</th><th class="crd-th">2007</th><th class="crd-th">2017</th><th class="crd-th">2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lima</strong></td><td class="crd-td">City proper (43 districts)</td><td class="crd-td">101,5k</td><td class="crd-td">520,5k</td><td class="crd-td">7,61M</td><td class="crd-td">8,57M</td><td class="crd-td">9,6M</td></tr>
<tr><td class="crd-td"><strong>Callao</strong></td><td class="crd-td">Extra-municipal suburb (7 districts)</td><td class="crd-td">34,5k</td><td class="crd-td">82,3k</td><td class="crd-td">876,9k</td><td class="crd-td">994,5k</td><td class="crd-td">1,04M</td></tr>
<tr><td class="crd-td"><strong>Lima Metropolitana (Metro)</strong></td><td class="crd-td">Metropolitan envelope (Lima + Callao)</td><td class="crd-td">-</td><td class="crd-td">645,2k</td><td class="crd-td">8,48M</td><td class="crd-td">9,57M</td><td class="crd-td">10,64M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Lima municipal unification, Callao extra-municipal suburb consolidation and Lima Metropolitana scope reconciliation (1876-2025).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:peru-top45">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Department</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Population (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lima Metropolitana (Metro)</strong></td><td class="crd-td">Lima / Callao</td><td class="crd-td">Metro</td><td class="crd-td">-12,05, -77,04</td><td class="crd-td">1940-2025</td><td class="crd-td">11,17M (2022)</td></tr>
<tr><td class="crd-td"><strong>Lima</strong></td><td class="crd-td">Lima</td><td class="crd-td">City or district</td><td class="crd-td">-12,05, -77,03</td><td class="crd-td">1836-2025</td><td class="crd-td">9,6M (2025)</td></tr>
<tr><td class="crd-td"><strong>Arequipa</strong></td><td class="crd-td">Arequipa</td><td class="crd-td">City or district</td><td class="crd-td">-16,39, -71,53</td><td class="crd-td">1862-2025</td><td class="crd-td">1,13M (2022)</td></tr>
<tr><td class="crd-td"><strong>Callao</strong></td><td class="crd-td">Callao</td><td class="crd-td">Suburb</td><td class="crd-td">-12,06, -77,15</td><td class="crd-td">1862-2025</td><td class="crd-td">1,04M (2025)</td></tr>
<tr><td class="crd-td"><strong>Trujillo</strong></td><td class="crd-td">La Libertad</td><td class="crd-td">City or district</td><td class="crd-td">-8,1, -79,03</td><td class="crd-td">1862-2025</td><td class="crd-td">1,03M (2022)</td></tr>
<tr><td class="crd-td"><strong>Chiclayo</strong></td><td class="crd-td">Lambayeque</td><td class="crd-td">City or district</td><td class="crd-td">-6,77, -79,85</td><td class="crd-td">1876-2025</td><td class="crd-td">663,2k (2022)</td></tr>
<tr><td class="crd-td"><strong>Piura</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-5,15, -80,66</td><td class="crd-td">1876-2025</td><td class="crd-td">547,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>Cusco</strong></td><td class="crd-td">Cusco</td><td class="crd-td">City or district</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1836-2025</td><td class="crd-td">492,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Huancayo</strong></td><td class="crd-td">Junín</td><td class="crd-td">City or district</td><td class="crd-td">-12,07, -75,21</td><td class="crd-td">1876-2025</td><td class="crd-td">450,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Iquitos</strong></td><td class="crd-td">Loreto</td><td class="crd-td">City or district</td><td class="crd-td">-3,75, -73,24</td><td class="crd-td">1876-2025</td><td class="crd-td">430,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Chimbote</strong></td><td class="crd-td">Áncash</td><td class="crd-td">City or district</td><td class="crd-td">-9,04, -78,61</td><td class="crd-td">1940-2025</td><td class="crd-td">395,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>Tacna</strong></td><td class="crd-td">Tacna</td><td class="crd-td">City or district</td><td class="crd-td">-18, -70,25</td><td class="crd-td">1876-2025</td><td class="crd-td">334k (2022)</td></tr>
<tr><td class="crd-td"><strong>Ica</strong></td><td class="crd-td">Ica</td><td class="crd-td">City or district</td><td class="crd-td">-14,06, -75,73</td><td class="crd-td">1876-2025</td><td class="crd-td">325,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Juliaca</strong></td><td class="crd-td">Puno</td><td class="crd-td">City or district</td><td class="crd-td">-15,48, -70,13</td><td class="crd-td">1993-2025</td><td class="crd-td">316,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Cerro Colorado</strong></td><td class="crd-td">Arequipa</td><td class="crd-td">City or district</td><td class="crd-td">-16,38, -71,56</td><td class="crd-td">2007-2025</td><td class="crd-td">262,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ayacucho</strong></td><td class="crd-td">Ayacucho</td><td class="crd-td">City or district</td><td class="crd-td">-13,16, -74,23</td><td class="crd-td">1876-2025</td><td class="crd-td">240,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca</strong></td><td class="crd-td">Cajamarca</td><td class="crd-td">City or district</td><td class="crd-td">-7,15, -78,51</td><td class="crd-td">1876-2025</td><td class="crd-td">232,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Huánuco</strong></td><td class="crd-td">Huánuco</td><td class="crd-td">City or district</td><td class="crd-td">-9,93, -76,24</td><td class="crd-td">1876-2025</td><td class="crd-td">221,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Chincha Alta</strong></td><td class="crd-td">Ica</td><td class="crd-td">City or district</td><td class="crd-td">-13,42, -76,13</td><td class="crd-td">1993-2025</td><td class="crd-td">219,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Sullana</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-4,89, -80,69</td><td class="crd-td">1993-2025</td><td class="crd-td">208,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>La Esperanza</strong></td><td class="crd-td">La Libertad</td><td class="crd-td">City or district</td><td class="crd-td">-8,06, -79,05</td><td class="crd-td">2007-2025</td><td class="crd-td">204,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Veintiseis de Octubre</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-5,18, -80,68</td><td class="crd-td">2017-2025</td><td class="crd-td">204,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Castilla</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-5,2, -80,62</td><td class="crd-td">2007-2025</td><td class="crd-td">191,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>El Porvenir</strong></td><td class="crd-td">La Libertad</td><td class="crd-td">City or district</td><td class="crd-td">-8,09, -79</td><td class="crd-td">2007-2025</td><td class="crd-td">190,5k (2017)</td></tr>
<tr><td class="crd-td"><strong>Nuevo Chimbote</strong></td><td class="crd-td">Áncash</td><td class="crd-td">City or district</td><td class="crd-td">-9,13, -78,53</td><td class="crd-td">2007-2025</td><td class="crd-td">184,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Huacho</strong></td><td class="crd-td">Lima Provincias</td><td class="crd-td">City or district</td><td class="crd-td">-11,11, -77,61</td><td class="crd-td">1993-2025</td><td class="crd-td">172,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Tarapoto</strong></td><td class="crd-td">San Martín</td><td class="crd-td">City or district</td><td class="crd-td">-6,49, -76,36</td><td class="crd-td">1993-2025</td><td class="crd-td">169,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>El Tambo</strong></td><td class="crd-td">Junín</td><td class="crd-td">City or district</td><td class="crd-td">-12,05, -75,22</td><td class="crd-td">2007-2025</td><td class="crd-td">166,4k (2017)</td></tr>
<tr><td class="crd-td"><strong>José Leonardo Ortiz</strong></td><td class="crd-td">Lambayeque</td><td class="crd-td">City or district</td><td class="crd-td">-6,76, -79,83</td><td class="crd-td">2007-2025</td><td class="crd-td">163,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Calleria</strong></td><td class="crd-td">Ucayali</td><td class="crd-td">City or district</td><td class="crd-td">-8,37, -74,54</td><td class="crd-td">2007-2025</td><td class="crd-td">156,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>San Juan Bautista</strong></td><td class="crd-td">Loreto</td><td class="crd-td">City or district</td><td class="crd-td">-3,77, -73,28</td><td class="crd-td">2007-2025</td><td class="crd-td">150,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Paucarpata</strong></td><td class="crd-td">Arequipa</td><td class="crd-td">City or district</td><td class="crd-td">-16,43, -71,5</td><td class="crd-td">2007-2025</td><td class="crd-td">148,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Puno</strong></td><td class="crd-td">Puno</td><td class="crd-td">City or district</td><td class="crd-td">-15,84, -70,03</td><td class="crd-td">1876-2025</td><td class="crd-td">136,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Tambo Grande</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-4,93, -80,34</td><td class="crd-td">1993-2025</td><td class="crd-td">136,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Huaraz</strong></td><td class="crd-td">Áncash</td><td class="crd-td">City or district</td><td class="crd-td">-9,53, -77,53</td><td class="crd-td">1876-2025</td><td class="crd-td">133,2k (2022)</td></tr>
<tr><td class="crd-td"><strong>Yarinacocha</strong></td><td class="crd-td">Ucayali</td><td class="crd-td">City or district</td><td class="crd-td">-8,36, -74,58</td><td class="crd-td">2007-2025</td><td class="crd-td">126,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>San Sebastian</strong></td><td class="crd-td">Cusco</td><td class="crd-td">City or district</td><td class="crd-td">-13,53, -71,94</td><td class="crd-td">2007-2025</td><td class="crd-td">124,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Majes</strong></td><td class="crd-td">Arequipa</td><td class="crd-td">City or district</td><td class="crd-td">-16,35, -72,25</td><td class="crd-td">2007-2025</td><td class="crd-td">117,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Coronel Gregorio Albarracin Lanchipa</strong></td><td class="crd-td">Tacna</td><td class="crd-td">City or district</td><td class="crd-td">-18,04, -70,25</td><td class="crd-td">2007-2025</td><td class="crd-td">116,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tumbes</strong></td><td class="crd-td">Tumbes</td><td class="crd-td">City or district</td><td class="crd-td">-3,57, -80,46</td><td class="crd-td">1993-2025</td><td class="crd-td">111,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jaén</strong></td><td class="crd-td">Cajamarca</td><td class="crd-td">City or district</td><td class="crd-td">-5,71, -78,81</td><td class="crd-td">1993-2025</td><td class="crd-td">108,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Cayma</strong></td><td class="crd-td">Arequipa</td><td class="crd-td">City or district</td><td class="crd-td">-16,36, -71,54</td><td class="crd-td">2007-2025</td><td class="crd-td">106,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Huaral</strong></td><td class="crd-td">Lima Provincias</td><td class="crd-td">City or district</td><td class="crd-td">-11,5, -77,21</td><td class="crd-td">1993-2025</td><td class="crd-td">105k (2025)</td></tr>
<tr><td class="crd-td"><strong>Paita</strong></td><td class="crd-td">Piura</td><td class="crd-td">City or district</td><td class="crd-td">-5,09, -81,1</td><td class="crd-td">1993-2025</td><td class="crd-td">104,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>La Victoria</strong></td><td class="crd-td">Lambayeque</td><td class="crd-td">City or district</td><td class="crd-td">-6,79, -79,84</td><td class="crd-td">2007-2025</td><td class="crd-td">103,1k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 Peruvian settlements ordered by peak documented population (n=1.795 total entries).</figcaption>
</figure>

## Sub-Regional Coverage and Source Ledger Accounting

Table \ref{tab:peru-reg-sett} reports the number of catalogued settlements and the leading recorded node across all 26 territorial units. Table \ref{tab:peru-ledger-waves} summarises the four ingestion waves and exclusion classes in the source ledger, while Table \ref{tab:peru-excluded} lists the first 25 excluded candidate records and their classification [@Gavilano2017Mineria; @Rendon2024Expansion].

<figure class="crd-table-figure" id="tab:peru-reg-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territorial Unit</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Node (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Amazonas</strong></td><td class="crd-td">76</td><td class="crd-td">Bagua Grande (52,9k)</td></tr>
<tr><td class="crd-td"><strong>Ancash</strong></td><td class="crd-td">163</td><td class="crd-td">Nuevo Chimbote (184,9k)</td></tr>
<tr><td class="crd-td"><strong>Apurímac</strong></td><td class="crd-td">93</td><td class="crd-td">Abancay (82,1k)</td></tr>
<tr><td class="crd-td"><strong>Arequipa</strong></td><td class="crd-td">103</td><td class="crd-td">Arequipa (1,13M)</td></tr>
<tr><td class="crd-td"><strong>Ayacucho</strong></td><td class="crd-td">105</td><td class="crd-td">Huanta (42,9k)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca</strong></td><td class="crd-td">129</td><td class="crd-td">Cajamarca (232,8k)</td></tr>
<tr><td class="crd-td"><strong>Cusco</strong></td><td class="crd-td">101</td><td class="crd-td">Cusco (492,4k)</td></tr>
<tr><td class="crd-td"><strong>El Callao</strong></td><td class="crd-td">3</td><td class="crd-td">Lima Metropolitana (Metro) (11,17M)</td></tr>
<tr><td class="crd-td"><strong>Huancavelica</strong></td><td class="crd-td">104</td><td class="crd-td">Ayacucho (240,1k)</td></tr>
<tr><td class="crd-td"><strong>Huánuco</strong></td><td class="crd-td">73</td><td class="crd-td">Huánuco (221,3k)</td></tr>
<tr><td class="crd-td"><strong>Ica</strong></td><td class="crd-td">45</td><td class="crd-td">Ica (325,7k)</td></tr>
<tr><td class="crd-td"><strong>Junín</strong></td><td class="crd-td">119</td><td class="crd-td">Huancayo (450,9k)</td></tr>
<tr><td class="crd-td"><strong>La Libertad</strong></td><td class="crd-td">94</td><td class="crd-td">Trujillo (1,03M)</td></tr>
<tr><td class="crd-td"><strong>Lambayeque</strong></td><td class="crd-td">41</td><td class="crd-td">Chiclayo (663,2k)</td></tr>
<tr><td class="crd-td"><strong>Lima (Region)</strong></td><td class="crd-td">127</td><td class="crd-td">Huacho (172,7k)</td></tr>
<tr><td class="crd-td"><strong>Loreto</strong></td><td class="crd-td">53</td><td class="crd-td">Iquitos (430,7k)</td></tr>
<tr><td class="crd-td"><strong>Madre de Dios</strong></td><td class="crd-td">10</td><td class="crd-td">Tambopata (97,3k)</td></tr>
<tr><td class="crd-td"><strong>Moquegua</strong></td><td class="crd-td">20</td><td class="crd-td">Moquegua (81,6k)</td></tr>
<tr><td class="crd-td"><strong>Lima Metropolitana (Prov.)</strong></td><td class="crd-td">1</td><td class="crd-td">Ricardo Palma (6,5k)</td></tr>
<tr><td class="crd-td"><strong>Pasco</strong></td><td class="crd-td">32</td><td class="crd-td">Yanacancha (29,6k)</td></tr>
<tr><td class="crd-td"><strong>Piura</strong></td><td class="crd-td">62</td><td class="crd-td">Piura (547,1k)</td></tr>
<tr><td class="crd-td"><strong>Puno</strong></td><td class="crd-td">108</td><td class="crd-td">Juliaca (316,9k)</td></tr>
<tr><td class="crd-td"><strong>San Martín</strong></td><td class="crd-td">76</td><td class="crd-td">Tarapoto (169,8k)</td></tr>
<tr><td class="crd-td"><strong>Tacna</strong></td><td class="crd-td">26</td><td class="crd-td">Tacna (334k)</td></tr>
<tr><td class="crd-td"><strong>Tumbes</strong></td><td class="crd-td">14</td><td class="crd-td">Tumbes (111,5k)</td></tr>
<tr><td class="crd-td"><strong>Ucayali</strong></td><td class="crd-td">17</td><td class="crd-td">Calleria (156,7k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Settlement counts and leading recorded nodes across 26 Peruvian territorial units (1.795 total entries).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:peru-ledger-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Prior Total</th><th class="crd-th">Newly Included</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1: Primary national census district extract</strong></td><td class="crd-td">0</td><td class="crd-td">1.432</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2: Georeference repair and metro consolidation</strong></td><td class="crd-td">1.432</td><td class="crd-td">251</td><td class="crd-td">17,53%</td></tr>
<tr><td class="crd-td"><strong>Wave 3: Longitudinal 1836-1981 census backfill</strong></td><td class="crd-td">1.683</td><td class="crd-td">107</td><td class="crd-td">6,36%</td></tr>
<tr><td class="crd-td"><strong>Wave 4: Sub-regional gap-hunter sweep</strong></td><td class="crd-td">1.790</td><td class="crd-td">5</td><td class="crd-td">0,28%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer saturation ledger reaching 1.795 included Peruvian settlements (0% crowd fallback).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:peru-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Disposition</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ahuayro</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Putis</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Union Progreso</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Rio Magdalena</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Ninabamba</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Patibamba</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Kumpirushiato</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Cielo Punco</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Manitea</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Union Ashaninka</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Lambras</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Sangani</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Alto Trujillo</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa de Loreto</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>San Antonio</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Huipoca</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Boqueron</strong></td><td class="crd-td">Unlocated historical toponym</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Amarilis</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Miraflores</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Wanchaq</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>San Juan Bautista</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Bellavista</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Alto de la Alianza</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
<tr><td class="crd-td"><strong>Hualmay</strong></td><td class="crd-td">Duplicate historical alias</td><td class="crd-td">Excluded from active spatial raster</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> First 25 of 51 excluded candidate entries in the Peruvian settlement source ledger.</figcaption>
</figure>

# Limitations

Secondary Peruvian cities outside Lima and Callao combine unified urban-agglomeration figures (1940-1993 and 2022) with central-district returns in the 2007, 2017 and 2025 census extracts, so district-level tables show apparent drops in core districts like Arequipa, Trujillo and Cusco alongside rapid growth in peripheral districts such as Cerro Colorado, La Esperanza and Veintiseis de Octubre [@Haller2018Urbanization; @Rendon2024Expansion]. In addition, 17 newly formed or poorly georeferenced rural districts remain excluded until official coordinate gazetteers resolve their municipal seats.

# Conclusion

The 1.795-entry Peruvian gazetteer reconciles nearly two centuries of republican census publications within a coherent metropolitan and regional framework [@Carranza2015Seminario; @Salazar2021Lima]. Consolidating Lima's 43 districts and Callao's 7 districts while preserving their distinct municipal and suburban boundaries prevents double counting across an 11M urban corridor, while full district-level coverage captures the accompanying transformation of the Sierra and Amazonian Selva [@Peattle1990Participation; @Cesario2015Migracao].

# Appendix

Across the 1.795 included settlements, 1.792 entries derive directly from the 2007, 2017 and 2025 all-district INEI feeds, supplemented by the consolidated Lima (43 districts), Callao (7 districts) and Lima Metropolitana (1940-2025) longitudinal series.

# Sources

<div id="refs"></div>
