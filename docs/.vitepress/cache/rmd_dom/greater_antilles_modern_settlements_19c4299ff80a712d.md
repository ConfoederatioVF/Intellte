---
title: "Greater Antilles in the Modern Era"
subtitle: "Settlement Gazetteer and Urban Hierarchy across the Greater Antilles, 1838 to 2025"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/greater_antilles_modern_urban_hierarchy.png"
hero_caption: "Twelve largest census settlements and rank-size distribution across 292 catalogued towns and cities in the Greater Antilles from 1838 to 2025."
hero_label: "fig:hero-greater-antilles-hierarchy"
bibliography: greater_antilles_modern_literature_review.bib
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



![Twelve largest census settlements and rank-size distribution across 292 catalogued towns and cities in the Greater Antilles from 1838 to 2025.](figures/greater_antilles_modern_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer catalogues 292 geocoded cities, towns and metropolitan suburbs across Cuba, Haiti, the Dominican Republic, Jamaica and Puerto Rico between 1841 and 2022, anchored strictly to official national census publications and demographic monographs with a 0% crowd-sourced fallback share [@ONEICuba2014; @ONEDomRep2023; @IHSIHaiti2015; @STATINJamaica2012; @USCensusPR2024]. Of the 292 catalogued entries, 275 represent standalone urban jurisdictions and 17 are explicitly classified suburban municipalities linked to four major metropolitan cores: San Juan (nine suburbs), Port-au-Prince (four suburbs), Kingston (two suburbs) and Santo Domingo (two suburbs). Across all seven Greater Antillean sub-regions, urban populations follow a crisp Zipfian rank-size distribution ($\alpha = 1,05$, $R^2 = 0,98$ over the leading 146 settlements), crowned by Santo Domingo (2,75M in 2022) and La Habana (2,2M peak in 2002) above a mid-tier archipelagic rank spanning Port-au-Prince (876k city proper), Santiago de los Caballeros (612,6k), Kingston (611,2k), San Juan (452,7k peak in 1970) and Santiago de Cuba (431,4k).

# Background

Modern urbanisation across the Greater Antilles evolved along contrasting colonial and postcolonial corridors. In nineteenth-century Cuba and Puerto Rico, administrative power and merchant shipping concentrated around walled port capitals at La Habana (137,5k in 1841), Santiago de Cuba (24,8k), Matanzas (19,1k) and San Juan (18,3k in 1860), joined by interior cattle and tobacco centres such as Camagüey (24k) and highland Puerto Rican market towns [@USWarDeptCuba1900; @USWarDeptPR1900; @VazquezCalzada1988]. In Jamaica, emancipation in 1838 redirected growth from estate wharves into Kingston (32,9k in 1844) and interior free-village parishes [@Roberts1957], whereas Hispaniola remained predominantly rural well into the twentieth century, with Santo Domingo holding only 31k residents in 1920 and Port-au-Prince 134,1k in 1950 [@MoyaPons1995; @IHSIHaiti2015].

During the second half of the twentieth century, industrialisation, highway expansion and rural-to-urban migration reshaped every island's settlement hierarchy. Cuba balanced growth across provincial capitals outside Havana [@ONEICuba2014; @DiazBriquets1983], the Dominican Republic built a twin-corridor urban system uniting Greater Santo Domingo with the Cibao and eastern tourism cities [@ONEDomRep2023], Jamaica expanded outward from Kingston into Portmore and Spanish Town [@STATINJamaica2012], Puerto Rico suburbanised rapidly around San Juan before post-2006 depopulation shrank urban cores [@Bureau2012Census; @USCensusPR2024], and Haiti experienced intense informal metropolitan concentration across Port-au-Prince, Carrefour, Delmas, Pétionville and Cité Soleil [@IHSIHaiti2015].

# Methodology

The settlement register was compiled across four documented saturation waves without crowd-sourced fallback records. Primary national census ingestion (Wave 1) assembled 267 entries directly from official statistical offices: the Oficina Nacional de Estadística e Información (ONEI) in Cuba [@ONEICuba2014], the Oficina Nacional de Estadística (ONE) in the Dominican Republic [@ONEDomRep2023], the Institut Haïtien de Statistique et d'Informatique (IHSI) in Haiti [@IHSIHaiti2015], the Statistical Institute of Jamaica (STATIN) [@STATINJamaica2012] and the United States Census Bureau for Puerto Rico [@Bureau2012Census; @USCensusPR2024]. Subsequent waves added 19 entries from demographic monographs and historical compilations (Wave 2), 4 from longitudinal nineteenth- and mid-twentieth-century census backfill (Wave 3) and 2 from sub-regional coverage verification sweeps (Wave 4), driving marginal gain down to 0,69%.

Every entry underwent WGS84 coordinate standardisation, spatial intersection against the seven Greater Antillean sub-regional masks and explicit metropolitan scope tagging. Commuter municipalities physically contiguous with national capitals were tagged as suburbs linked to their parent metropolitan centres so that city-proper rankings remain transparent alongside functional agglomeration analysis [@Celade2020Observatorio; @Celade2024Observatorio].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 292 included settlements (0 excluded records after deduplication), 100% coordinate completeness and complete coverage across all seven areal sub-regions. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 292 catalogued settlements across Cuba, Hispaniola, Jamaica and Puerto Rico, highlighting the dense municipal grid of Puerto Rico (85 entries) and Jamaica (56) alongside the broader provincial spacing of Cuba (57) and Hispaniola (94 combined).

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-greater-antilles-modern-settlements/greater_antilles_modern_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 292 catalogued census settlements across seven Greater Antillean sub-regions from 1838 to 2025.</figcaption>
</figure>

# Results

## Thirty Largest Greater Antillean Settlements

Table \ref{tab:top30-settlements} presents the 30 largest catalogued settlements across the Greater Antilles ordered by peak recorded census population, spanning from Santo Domingo (2,75M in 2022) and La Habana (2,2M in 2002) down to Matanzas (145k in 2022). Every major polity contributes multiple cities to the upper tier: ten Cuban cities, eight Dominican cities, seven Haitian cities and communes, three Puerto Rican cities and two Jamaican urban centres.

<figure class="crd-table-figure" id="tab:top30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">18,49, -69,93</td><td class="crd-td">1844 to 2022</td><td class="crd-td">2,75M (2022)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">La Habana</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">23,11, -82,37</td><td class="crd-td">1841 to 2022</td><td class="crd-td">2,2M (2002)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">City proper</td><td class="crd-td">18,54, -72,34</td><td class="crd-td">1860 to 2009</td><td class="crd-td">876k (2009)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Santiago de los Caballeros</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">19,45, -70,7</td><td class="crd-td">1893 to 2022</td><td class="crd-td">612,6k (2022)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Kingston</td><td class="crd-td">Jamaica</td><td class="crd-td">City proper</td><td class="crd-td">17,97, -76,79</td><td class="crd-td">1844 to 2022</td><td class="crd-td">611,2k (2022)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">City proper</td><td class="crd-td">18,47, -66,11</td><td class="crd-td">1860 to 2020</td><td class="crd-td">452,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Santiago de Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">20,02, -75,82</td><td class="crd-td">1841 to 2022</td><td class="crd-td">431,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Carrefour</td><td class="crd-td">Haiti</td><td class="crd-td">Suburb</td><td class="crd-td">18,54, -72,4</td><td class="crd-td">1982 to 2009</td><td class="crd-td">430,2k (2009)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Delmas</td><td class="crd-td">Haiti</td><td class="crd-td">Suburb</td><td class="crd-td">18,54, -72,3</td><td class="crd-td">2009</td><td class="crd-td">359,5k (2009)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Camagüey</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">21,38, -77,92</td><td class="crd-td">1841 to 2022</td><td class="crd-td">310,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Holguín</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">20,89, -76,26</td><td class="crd-td">1899 to 2022</td><td class="crd-td">302,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Pétionville</td><td class="crd-td">Haiti</td><td class="crd-td">City proper</td><td class="crd-td">18,51, -72,29</td><td class="crd-td">1982 to 2009</td><td class="crd-td">271,2k (2009)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">La Romana</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">18,43, -68,97</td><td class="crd-td">1920 to 2022</td><td class="crd-td">265,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Cité Soleil</td><td class="crd-td">Haiti</td><td class="crd-td">Suburb</td><td class="crd-td">18,58, -72,34</td><td class="crd-td">2009</td><td class="crd-td">241,1k (2009)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Gonaïves</td><td class="crd-td">Haiti</td><td class="crd-td">City proper</td><td class="crd-td">19,45, -72,69</td><td class="crd-td">1890 to 2009</td><td class="crd-td">228,7k (2009)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Santa Clara</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">22,41, -79,96</td><td class="crd-td">1861 to 2022</td><td class="crd-td">217,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Guantánamo</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">20,14, -75,21</td><td class="crd-td">1899 to 2022</td><td class="crd-td">217,1k (2012)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Higüey</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">18,61, -68,71</td><td class="crd-td">1981 to 2022</td><td class="crd-td">210,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Bayamón</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Suburb</td><td class="crd-td">18,4, -66,16</td><td class="crd-td">1899 to 2020</td><td class="crd-td">208,1k (2010)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">San Pedro de Macorís</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">18,45, -69,31</td><td class="crd-td">1893 to 2022</td><td class="crd-td">207,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Portmore</td><td class="crd-td">Jamaica</td><td class="crd-td">Suburb</td><td class="crd-td">17,95, -76,88</td><td class="crd-td">1970 to 2022</td><td class="crd-td">182,2k (2011)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Las Tunas</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">20,96, -76,95</td><td class="crd-td">1970 to 2022</td><td class="crd-td">176,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Spanish Town</td><td class="crd-td">Jamaica</td><td class="crd-td">Suburb</td><td class="crd-td">17,99, -76,96</td><td class="crd-td">1844 to 2022</td><td class="crd-td">168,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Carolina</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Suburb</td><td class="crd-td">18,38, -65,96</td><td class="crd-td">1899 to 2020</td><td class="crd-td">168,2k (2000)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">San Cristóbal</td><td class="crd-td">Dominican Republic</td><td class="crd-td">City proper</td><td class="crd-td">18,42, -70,1</td><td class="crd-td">1981 to 2022</td><td class="crd-td">167,5k (2022)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Ponce</td><td class="crd-td">Puerto Rico</td><td class="crd-td">City proper</td><td class="crd-td">18,01, -66,61</td><td class="crd-td">1860 to 2020</td><td class="crd-td">159,2k (1990)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Bayamo</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">20,38, -76,64</td><td class="crd-td">1970 to 2022</td><td class="crd-td">159k (2022)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Cap-Haïtien</td><td class="crd-td">Haiti</td><td class="crd-td">City proper</td><td class="crd-td">19,76, -72,21</td><td class="crd-td">1860 to 2009</td><td class="crd-td">155,5k (2009)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Cienfuegos</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">22,15, -80,44</td><td class="crd-td">1861 to 2022</td><td class="crd-td">153k (2022)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Matanzas</td><td class="crd-td">Cuba</td><td class="crd-td">City proper</td><td class="crd-td">23,04, -81,58</td><td class="crd-td">1841 to 2022</td><td class="crd-td">145k (2022)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Greater Antillean settlements ordered by peak recorded census population, 1841 to 2022 (across 292 catalogued entries).</figcaption>
</figure>

## Metropolitan Suburbs and Commuter Rings

Table \ref{tab:metro-suburbs} lists all 17 catalogued suburban municipalities across the Greater Antilles alongside their parent capitals, earliest and peak census populations and latest recorded enumerations. Four metropolitan systems account for the entire suburban register: Port-au-Prince's dense surrounding communes (led by Carrefour at 430,3k, Delmas at 359,5k and Cité Soleil at 241,1k), San Juan's sprawling municipal belt (led by Bayamón at 203,5k peak, Carolina at 168,2k and Caguas at 92,4k), Kingston's western Saint Catherine dormitory towns (Portmore at 182,2k peak and Spanish Town at 168,9k) and Santo Domingo's industrial and coastal satellites (Boca Chica at 76k and Bajos de Haina at 75,8k).

<figure class="crd-table-figure" id="tab:metro-suburbs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Suburb</th><th class="crd-th">Parent Capital</th><th class="crd-th">Polity</th><th class="crd-th">Earliest Census</th><th class="crd-th">Peak Census</th><th class="crd-th">Latest Census</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Carrefour</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">129,5k (1982)</td><td class="crd-td">430,2k (2009)</td><td class="crd-td">430,2k (2009)</td></tr>
<tr><td class="crd-td"><strong>Delmas</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">359,5k (2009)</td><td class="crd-td">359,5k (2009)</td><td class="crd-td">359,5k (2009)</td></tr>
<tr><td class="crd-td"><strong>Cité Soleil</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">241,1k (2009)</td><td class="crd-td">241,1k (2009)</td><td class="crd-td">241,1k (2009)</td></tr>
<tr><td class="crd-td"><strong>Bayamón</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">2,2k (1899)</td><td class="crd-td">208,1k (2010)</td><td class="crd-td">185,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Portmore</strong></td><td class="crd-td">Kingston</td><td class="crd-td">Jamaica</td><td class="crd-td">5,1k (1970)</td><td class="crd-td">182,2k (2011)</td><td class="crd-td">161,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Spanish Town</strong></td><td class="crd-td">Kingston</td><td class="crd-td">Jamaica</td><td class="crd-td">5,8k (1844)</td><td class="crd-td">168,9k (2022)</td><td class="crd-td">168,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Carolina</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">2,2k (1899)</td><td class="crd-td">168,2k (2000)</td><td class="crd-td">138,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Caguas</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">5,4k (1899)</td><td class="crd-td">92,4k (1990)</td><td class="crd-td">70,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Croix-des-Bouquets</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">84,8k (2009)</td><td class="crd-td">84,8k (2009)</td><td class="crd-td">84,8k (2009)</td></tr>
<tr><td class="crd-td"><strong>Guaynabo</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">1,1k (1940)</td><td class="crd-td">78,8k (2000)</td><td class="crd-td">68,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Boca Chica</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">46,4k (2002)</td><td class="crd-td">76k (2022)</td><td class="crd-td">76k (2022)</td></tr>
<tr><td class="crd-td"><strong>Bajos de Haina</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">33,1k (1981)</td><td class="crd-td">75,8k (2022)</td><td class="crd-td">75,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Trujillo Alto</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">44,3k (1990)</td><td class="crd-td">50,8k (2000)</td><td class="crd-td">43,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Cataño</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">34,6k (1990)</td><td class="crd-td">34,6k (1990)</td><td class="crd-td">23,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Canóvanas</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">7,3k (2010)</td><td class="crd-td">12k (2020)</td><td class="crd-td">12k (2020)</td></tr>
<tr><td class="crd-td"><strong>Toa Alta</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">3,7k (2010)</td><td class="crd-td">3,8k (2020)</td><td class="crd-td">3,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Toa Baja</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Puerto Rico</td><td class="crd-td">1,5k (2010)</td><td class="crd-td">1,5k (2010)</td><td class="crd-td">1,2k (2020)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> All 17 catalogued suburban municipalities across Greater Antillean metropolitan rings, 1844 to 2022.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage and Provenance Summary

Table \ref{tab:subregion-coverage} aggregates settlement counts, areal coverage density per 1.000 km² of surveyed land and leading recorded urban centres across all seven sub-regions, paired with each sub-region's 2025 official census benchmark population. Puerto Rico exhibits the highest spatial catalogue density at 9,9 towns per 1.000 km² because every municipal seat and major urban place is enumerated separately in United States decennial censuses, followed by Jamaica at 5,21 towns per 1.000 km². Cuba's three macro-zones record 0,47 to 0,6 towns per 1.000 km², reflecting its larger municipal footprints and broader agricultural plains [@ONEICuba2014; @USCensusPR2024; @STATINJamaica2012].

<figure class="crd-table-figure" id="tab:subregion-coverage">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Land Area (km²)</th><th class="crd-th">Towns</th><th class="crd-th">Towns per 1k km²</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2025 Census Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western Cuba</strong></td><td class="crd-td">30.959</td><td class="crd-td">17</td><td class="crd-td">0,55</td><td class="crd-td">La Habana (2,2M)</td><td class="crd-td">4,32M</td></tr>
<tr><td class="crd-td"><strong>Central Cuba</strong></td><td class="crd-td">40.346</td><td class="crd-td">19</td><td class="crd-td">0,47</td><td class="crd-td">Camagüey (310,8k)</td><td class="crd-td">2,74M</td></tr>
<tr><td class="crd-td"><strong>Eastern Cuba (Oriente)</strong></td><td class="crd-td">34.890</td><td class="crd-td">21</td><td class="crd-td">0,6</td><td class="crd-td">Santiago de Cuba (431,4k)</td><td class="crd-td">3,76M</td></tr>
<tr><td class="crd-td"><strong>Haiti</strong></td><td class="crd-td">27.828</td><td class="crd-td">33</td><td class="crd-td">1,19</td><td class="crd-td">Port-au-Prince (876k)</td><td class="crd-td">11,9M</td></tr>
<tr><td class="crd-td"><strong>Dominican Republic</strong></td><td class="crd-td">47.058</td><td class="crd-td">61</td><td class="crd-td">1,3</td><td class="crd-td">Santo Domingo (2,75M)</td><td class="crd-td">11,43M</td></tr>
<tr><td class="crd-td"><strong>Jamaica</strong></td><td class="crd-td">10.749</td><td class="crd-td">56</td><td class="crd-td">5,21</td><td class="crd-td">Kingston (611,2k)</td><td class="crd-td">2,84M</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico</strong></td><td class="crd-td">8.584</td><td class="crd-td">85</td><td class="crd-td">9,9</td><td class="crd-td">San Juan (452,7k)</td><td class="crd-td">3,21M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional gazetteer counts, town density per 1.000 km² of surveyed land, leading urban centre and 2025 census population across seven Greater Antillean sub-regions.</figcaption>
</figure>

# Limitations

Three census-delimitation constraints qualify direct urban comparisons across this gazetteer. First, Haiti has conducted no national census since 2003, leaving its urban entries anchored on 2009 IHSI municipal updates prior to the January 2010 earthquake and subsequent informal rebuilding [@IHSIHaiti2015]. Second, United States Census Bureau PL 94-171 urban-place boundaries in Puerto Rico distinguish narrow central *pueblo* cores from wider *municipio* boundaries, producing steep apparent drops in inner-ring suburban *pueblo* series such as Bayamón in 2020 relative to its 2000 *zona urbana* peak of 203,5k [@Bureau2012Census; @USCensusPR2024]. Third, Kingston's 1970 jump from 123,4k to 473,7k reflects administrative integration of urban Saint Andrew with old Kingston parish rather than an instantaneous decade-long quadrupling [@STATINJamaica2012].

# Conclusion

Across 292 catalogued census settlements spanning 1841 to 2022, the Greater Antillean urban system mirrors the wider demographic realignment of the modern archipelago. Nineteenth-century colonial port primacy centred on La Habana and Kingston gave way over the twentieth century to a multi-polar network conforming tightly to Zipf's rank-size rule ($\alpha = 1,05$, $R^2 = 0,98$), now led in absolute scale by Santo Domingo (2,75M) and La Habana (2,2M peak) alongside rapidly growing Haitian metropolitan communes and contracting post-industrial Puerto Rican urban cores [@ONEDomRep2023; @ONEICuba2014; @IHSIHaiti2015; @USCensusPR2024].

# Appendix

## Primary Census Provenance Counts

Table \ref{tab:sett-provenance} documents the primary official census series contributing observations to the 292-entry settlement register. Because major historical cities appear in both nineteenth-century archival compilations and twentieth-century national statistical tables, individual settlements frequently draw longitudinal observations from two or three official census series.

<figure class="crd-table-figure" id="tab:sett-provenance">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Corpus</th><th class="crd-th">Settlements Covered</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>US Census Bureau 2010 and 2020 Decennial PL 94-171 (Puerto Rico)</strong></td><td class="crd-td">85</td><td class="crd-td">29,1%</td></tr>
<tr><td class="crd-td"><strong>US Census Bureau Historical Puerto Rico Urban Censuses (1899 to 2000)</strong></td><td class="crd-td">66</td><td class="crd-td">22,6%</td></tr>
<tr><td class="crd-td"><strong>ONE Dominican Republic National Censuses (1920 to 2022)</strong></td><td class="crd-td">64</td><td class="crd-td">21,9%</td></tr>
<tr><td class="crd-td"><strong>ONEI Cuba National Censuses (1907 to 2022)</strong></td><td class="crd-td">57</td><td class="crd-td">19,5%</td></tr>
<tr><td class="crd-td"><strong>STATIN Jamaica National Censuses (1844 to 2022)</strong></td><td class="crd-td">56</td><td class="crd-td">19,2%</td></tr>
<tr><td class="crd-td"><strong>Harmonised Historical Greater Antilles Census Compendium (1841 to 1980)</strong></td><td class="crd-td">33</td><td class="crd-td">11,3%</td></tr>
<tr><td class="crd-td"><strong>IHSI Haiti National Censuses and Departmental Updates (1950 to 2009)</strong></td><td class="crd-td">30</td><td class="crd-td">10,3%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Official census corpora contributing longitudinal population records across 292 Greater Antillean settlements (entries may cite multiple historical series).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1. Settlement peak years in Tables \ref{tab:top30-settlements} and \ref{tab:metro-suburbs} reflect the maximum enumerated census population inside the 1841 to 2022 register; several Cuban and Puerto Rican municipalities reached their historical maxima between 1970 and 2002 before declining in twenty-first-century censuses.

Note 2. Three Dominican border towns intersect the 5-arc-minute Haiti areal mask polygon, yielding 61 settlements inside the Dominican Republic mask and 33 inside the Haiti mask against national counts of 64 Dominican and 30 Haitian settlements.
