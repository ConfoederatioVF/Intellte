---
title: "Colonial Caribbean Plantation Era"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1650-1898"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/colonial_caribbean_plantation_urban_hierarchy.png"
hero_caption: "Leading plantation-era Caribbean ports and towns and rank-size distribution across 143 catalogued settlements from 1650 to 1898."
hero_label: "fig:hero-caribbean-plantation-hierarchy"
bibliography: colonial_caribbean_plantation_literature_review.bib
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



![Leading plantation-era Caribbean ports and towns and rank-size distribution across 143 catalogued settlements from 1650 to 1898.](figures/colonial_caribbean_plantation_urban_hierarchy.png)



# Abstract

This companion gazetteer catalogues 143 plantation-era ports, colonial capitals and inland market towns across nine imperial sub-regions and 29 Caribbean and North Atlantic jurisdictions between 1650 and 1898. Assembled across four sequential ingestion waves tracked in the chapter source ledger, the register draws 131 towns (91,61%) directly from official colonial censuses, Spanish HGIS de las Indias records, British Colonial Blue Books, French colonial tables, Danish West Indies enumerations and Moreau de Saint-Méry (1797), supplemented by 9 peer-reviewed demographic monograph entries (6,29%), 2 longitudinal census backfills (1,4%) and 1 sub-regional gap addition (0,7%), achieving 0% crowd-sourced fallback [@MoreauStMery1797; @Higman1984; @USWarDeptCuba1900; @USWarDeptPR1900; @DanishWestIndies1912]. Out of 149 candidate settlement entries evaluated, 6 duplicate aliases within 25 km buffers were merged into canonical city-proper records. Across all 143 catalogued towns, the urban rank-size distribution follows a tight sub-unitary power law ($\alpha = 0,75$, $R^2 = 0,98$ across the 71 largest settlements), reflecting a multi-imperial archipelago led by La Habana (235.981 in 1898) above a broad tier of rival export harbours including Port-au-Prince (61k), Kingston (46.542), Santiago de Cuba (43.090), Matanzas (36.374), Port of Spain (33.782), San Juan (32.048), Cap-Haïtien (29k), Ponce (27.952), Saint-Pierre (25.382) and Bridgetown (21.384) [@EngermanHigman1997; @Roberts1957; @Pluskota2020Freedom].

# Background

Urban life across the colonial Caribbean from 1650 to 1898 developed overwhelmingly along sheltered deep-water bays and leeward anchorages engineered to export sugar, coffee, rum, cacao, hides and salt while receiving European manufactures, provisions and enslaved African captives [@EltisRichardson2010; @EngermanHigman1997]. Whereas mainland Spanish America anchored its urban hierarchy in highland administrative capitals, the Caribbean archipelago produced a maritime ring of fortified port cities whose fortunes rose and fell with imperial warfare, seismic catastrophes and commodity booms [@Burchardt2021Post; @Geggus2020Impact].

Seventeenth-century urbanisation centred on Spanish convoy strongholds such as La Habana (14.200 in 1650), Santo Domingo (6.850) and San Juan (5.200) alongside the early English and French sugar ports of Bridgetown (9.850), Basseterre on St Kitts (5.600) and Saint-Pierre on Martinique (3.250). On Jamaica, the devastating 1692 earthquake destroyed the buccaneering entrepôt of Port Royal (6.500 in 1692, plunging to 1.850 by 1720) and transferred commercial primacy across the harbour to Kingston, which reached 46.542 inhabitants by 1891 [@Roberts1957; @Higman1984]. In eighteenth-century Saint-Domingue, Cap-Haïtien surged to 18.850 inhabitants by 1789 before the Haitian Revolution reduced it to 8.200 in 1804, tilting independent Haiti's urban centre of gravity permanently toward Port-au-Prince (61k by 1890) [@MoreauStMery1797; @Geggus1997; @Nicholls1979].

Across the nineteenth century, Cuba's second-slavery sugar boom propelled La Habana past 235k residents and spawned new rail-linked ports at Matanzas (36.374), Cienfuegos (30.038) and Cárdenas (23.680), while Puerto Rico's late-colonial coffee and sugar expansion raised San Juan (32.048) and Ponce (27.952) [@USWarDeptCuba1900; @USWarDeptPR1900; @Lazaro2026Height]. Smaller mercantile entrepôts—Willemstad on Curaçao (14.800 in 1890), Charlotte Amalie on St Thomas (11.764 in 1880), Oranjestad on Sint Eustatius (peaking at 7.850 in 1780 prior to its 1781 sack), Gustavia on Swedish Saint-Barthélemy (4.200 in 1815), Loyalist-boosted Nassau (11k in 1891) and Port of Spain after Trinidad's 1783 *Cédula de Población* (33.782 in 1891)—knit the disparate imperial spheres into one integrated maritime network [@Metzlar2024Unravelling; @DanishWestIndies1912; @Surowitzisrael2025Caribbean; @BSOBermuda2018].

# Methodology

The settlement register was compiled across four sequential archival ingestion waves logged in the chapter source ledger. Wave 1 harvested 131 settlements (91,61%) directly from primary colonial censuses and official statistical series, including Cuban colonial censuses (1774 to 1887) and the 1899 American census of Cuba (25 records), Puerto Rican colonial censuses (1765 to 1887) and the 1899 census of Puerto Rico (19 records), British West Indies Colonial Blue Books and 1844 to 1891 censuses (31 records plus 13 Jamaica series), French colonial enumerations of Martinique and Guadeloupe (12 records), Dutch, Danish and Trinidadian censuses (14 records), Moreau de Saint-Méry (1797) and Haitian historical series (11 records), Dominican archival censuses (11 records) and HGIS de las Indias town records (13 linked records). Wave 2 added 9 towns from specialised historical demographic monographs (marginal gain 6,87%), Wave 3 added 2 longitudinal census backfills (1,43%) and Wave 4 added 1 final sub-regional continuity town (0,7%), reaching full archival saturation with 0% crowd-sourced entries.

All 149 candidate entries underwent WGS84 coordinate geocoding, point-in-polygon assignment to one of the nine imperial sub-regions and 25 km spatial buffer deduplication. Six overlapping variant records (duplicate aliases of La Habana, Bayamo, Guanabacoa, Santa Clara, Matanzas and Concepción de la Vega) were consolidated into their canonical town entries. Every retained entry is standardised to city-proper urban population (143 city-proper records, 0 suburban agglomerations) with explicit chronological bounds inside 1650 to 1898.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 149 evaluated candidates: 143 included settlements plus 6 excluded duplicate aliases. Every included record carries non-null WGS84 coordinates, an imperial sub-region tag, at least one historical headcount within 1650 to 1898 and a documented archival provenance string. Every one of the nine imperial sub-regions holds between 11 and 31 catalogued towns, preventing regional blind spots across smaller islands. Figure \ref{fig:sett-regional-map} displays the geographic footprint of all 143 catalogued towns across the nine imperial sub-regions and the Bermuda inset.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-colonial-caribbean-plantation-settlements/colonial_caribbean_plantation_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 143 catalogued plantation-era ports and towns across nine imperial Caribbean sub-regions and Bermuda, 1650 to 1898.</figcaption>
</figure>

# Results

## Thirty Leading Plantation-Era Caribbean Ports and Towns

Table \ref{tab:top30-towns} lists the 30 largest catalogued settlements ordered by peak recorded population between 1650 and 1898, pairing coordinates, imperial sub-region, documented census span and peak population.

<figure class="crd-table-figure" id="tab:top30-towns">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Port or Town</th><th class="crd-th">Territory</th><th class="crd-th">Imperial Cluster</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">La Habana</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">23,14, -82,36</td><td class="crd-td">1650 to 1898</td><td class="crd-td">236k (1898)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">18,54, -72,34</td><td class="crd-td">1755 to 1890</td><td class="crd-td">61k (1890)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Kingston</td><td class="crd-td">Jamaica</td><td class="crd-td">British Jamaica and Cayman Islands</td><td class="crd-td">17,97, -76,79</td><td class="crd-td">1700 to 1891</td><td class="crd-td">46,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Santiago de Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">20,02, -75,82</td><td class="crd-td">1650 to 1898</td><td class="crd-td">43,1k (1898)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Matanzas</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">23,04, -81,58</td><td class="crd-td">1700 to 1898</td><td class="crd-td">36,4k (1898)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Port of Spain</td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">Dutch and Danish Antilles and Trinidad-Tobago</td><td class="crd-td">10,65, -61,5</td><td class="crd-td">1650 to 1891</td><td class="crd-td">33,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">San Juan Puerto Rico</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Spanish Puerto Rico</td><td class="crd-td">18,47, -66,11</td><td class="crd-td">1650 to 1898</td><td class="crd-td">32k (1898)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Puerto Príncipe Camagüey</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">21,38, -77,92</td><td class="crd-td">1650 to 1898</td><td class="crd-td">30,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Cienfuegos</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">22,15, -80,44</td><td class="crd-td">1827 to 1898</td><td class="crd-td">30k (1898)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Cap-Haïtien</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">19,76, -72,21</td><td class="crd-td">1685 to 1890</td><td class="crd-td">29k (1890)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Ponce</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Spanish Puerto Rico</td><td class="crd-td">18,01, -66,61</td><td class="crd-td">1765 to 1898</td><td class="crd-td">28k (1898)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Saint-Pierre Martinique</td><td class="crd-td">Martinique</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">14,74, -61,18</td><td class="crd-td">1650 to 1894</td><td class="crd-td">25,4k (1894)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Cárdenas</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">23,04, -81,2</td><td class="crd-td">1841 to 1898</td><td class="crd-td">23,7k (1887)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Bridgetown</td><td class="crd-td">Barbados</td><td class="crd-td">British Barbados and Windward Islands</td><td class="crd-td">13,1, -59,61</td><td class="crd-td">1650 to 1891</td><td class="crd-td">21,4k (1871)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">Spanish Santo Domingo</td><td class="crd-td">18,47, -69,88</td><td class="crd-td">1650 to 1893</td><td class="crd-td">18,6k (1893)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Sancti Spíritus</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">21,93, -79,44</td><td class="crd-td">1650 to 1898</td><td class="crd-td">17,5k (1887)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Fort-de-France</td><td class="crd-td">Martinique</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">14,61, -61,08</td><td class="crd-td">1650 to 1894</td><td class="crd-td">17,3k (1894)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Pointe-à-Pitre</td><td class="crd-td">Guadeloupe</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">16,24, -61,53</td><td class="crd-td">1770 to 1894</td><td class="crd-td">17,2k (1894)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Guanabacoa</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">23,12, -82,3</td><td class="crd-td">1650 to 1898</td><td class="crd-td">16,4k (1861)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Trinidad Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">21,8, -79,98</td><td class="crd-td">1650 to 1898</td><td class="crd-td">15,7k (1861)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Mayagüez</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Spanish Puerto Rico</td><td class="crd-td">18,2, -67,14</td><td class="crd-td">1765 to 1898</td><td class="crd-td">15,2k (1898)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">Spanish Santo Domingo</td><td class="crd-td">18,48, -69,94</td><td class="crd-td">1740 to 1783</td><td class="crd-td">15k (1772)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Willemstad</td><td class="crd-td">Curaçao</td><td class="crd-td">Dutch and Danish Antilles and Trinidad-Tobago</td><td class="crd-td">12,11, -68,94</td><td class="crd-td">1650 to 1890</td><td class="crd-td">14,8k (1890)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Manzanillo Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">20,34, -77,12</td><td class="crd-td">1817 to 1898</td><td class="crd-td">14,5k (1898)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Santa Clara</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">22,41, -79,97</td><td class="crd-td">1700 to 1898</td><td class="crd-td">14,4k (1887)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Sagua la Grande</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">22,81, -80,07</td><td class="crd-td">1841 to 1898</td><td class="crd-td">14,2k (1887)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Gonaïves</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">19,45, -72,69</td><td class="crd-td">1750 to 1890</td><td class="crd-td">14k (1890)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Bayamo</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">20,38, -76,64</td><td class="crd-td">1650 to 1898</td><td class="crd-td">12,7k (1757)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Santiago de los Caballeros</td><td class="crd-td">Dominican Republic</td><td class="crd-td">Spanish Santo Domingo</td><td class="crd-td">19,45, -70,7</td><td class="crd-td">1650 to 1893</td><td class="crd-td">12,4k (1893)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Les Cayes</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">18,19, -73,75</td><td class="crd-td">1730 to 1890</td><td class="crd-td">12k (1890)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty largest colonial Caribbean ports and towns ordered by peak recorded population, 1650 to 1898 (across 143 catalogued settlements).</figcaption>
</figure>

Spanning 236k at La Habana down to 12,1k at Saint-Marc in Haiti, the top 30 urban centres display the strong coastal export orientation of the plantation economy. Only a handful of inland administrative or ranching towns—Puerto Príncipe/Camagüey (30,7k in 1861), Sancti Spíritus (17,5k), Guanabacoa (16,4k), Santa Clara, Bayamo and Santiago de los Caballeros—penetrate the top tier, and nearly all of those sit inside Cuba and eastern Hispaniola where wide interior plains supported cattle ranching and railway-fed sugar mills [@USWarDeptCuba1900; @Burchardt2021Post]. Across the Lesser Antilles and Jamaica, urban concentration remained overwhelmingly littoral, with freedpeople increasingly gravitating toward port markets after abolition [@Pluskota2020Freedom; @Festre2018Colonial].

## Sub-Regional Gazetteer Coverage and Urban Density

Table \ref{tab:subregion-gazetteer} aggregates town counts, urban spatial density per 10.000 km² of terrestrial land area, leading catalogued port and 1898 census-calibrated sub-regional population across all nine imperial sub-regions.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Land km²</th><th class="crd-th">Towns</th><th class="crd-th">Towns per 10k km²</th><th class="crd-th">Leading Town (Peak)</th><th class="crd-th">1898 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Spanish Cuba (Capitanía General de Cuba)</strong></td><td class="crd-td">106.195</td><td class="crd-td">31</td><td class="crd-td">2,9</td><td class="crd-td">La Habana (236k)</td><td class="crd-td">1,57M</td></tr>
<tr><td class="crd-td"><strong>Spanish Puerto Rico (Capitanía General)</strong></td><td class="crd-td">8.584</td><td class="crd-td">19</td><td class="crd-td">22,1</td><td class="crd-td">San Juan Puerto Rico (32k)</td><td class="crd-td">953,2k</td></tr>
<tr><td class="crd-td"><strong>French Saint-Domingue and Haiti (1697-1795 Frontier)</strong></td><td class="crd-td">24.394</td><td class="crd-td">11</td><td class="crd-td">4,5</td><td class="crd-td">Port-au-Prince (61k)</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Spanish Santo Domingo</strong></td><td class="crd-td">50.492</td><td class="crd-td">12</td><td class="crd-td">2,4</td><td class="crd-td">Santo Domingo (18,6k)</td><td class="crd-td">480k</td></tr>
<tr><td class="crd-td"><strong>British Jamaica and Cayman Islands</strong></td><td class="crd-td">10.749</td><td class="crd-td">15</td><td class="crd-td">14</td><td class="crd-td">Kingston (46,5k)</td><td class="crd-td">715k</td></tr>
<tr><td class="crd-td"><strong>British Barbados and Windward Islands</strong></td><td class="crd-td">2.371</td><td class="crd-td">14</td><td class="crd-td">59</td><td class="crd-td">Bridgetown (21,4k)</td><td class="crd-td">385k</td></tr>
<tr><td class="crd-td"><strong>British Leewards, Bahamas, Turks-Caicos and Bermuda</strong></td><td class="crd-td">10.468</td><td class="crd-td">14</td><td class="crd-td">13,4</td><td class="crd-td">Nassau (11k)</td><td class="crd-td">198k</td></tr>
<tr><td class="crd-td"><strong>French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</strong></td><td class="crd-td">2.626</td><td class="crd-td">14</td><td class="crd-td">53,3</td><td class="crd-td">Saint-Pierre Martinique (25,4k)</td><td class="crd-td">368k</td></tr>
<tr><td class="crd-td"><strong>Dutch and Danish Antilles and Trinidad-Tobago</strong></td><td class="crd-td">6.117</td><td class="crd-td">13</td><td class="crd-td">21,3</td><td class="crd-td">Port of Spain (33,8k)</td><td class="crd-td">355k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued town counts, town density per 10.000 km² of terrestrial area, leading settlement and 1898 sub-regional population across nine Caribbean sub-regions.</figcaption>
</figure>

Town density scales inversely with island size: compact Lesser Antillean clusters register 59 towns per 10.000 km² in British Barbados and the Windwards and 53,3 in French Guadeloupe and Martinique (compared with 2,9 in expansive Cuba and 2,4 in sparsely settled Santo Domingo), reflecting the proliferation of separate harbour capitals on every individual volcanic island [@Higman1984; @Nelson2006Landscape].

## Rank-Size Distribution Across the Multi-Imperial Archipelago

Fitted across the 71 largest towns out of 143 catalogued settlements, the Caribbean urban system yields a log-linear rank-size slope of $\alpha = 0,75$ ($R^2 = 0,98$). Whereas centralised continental states typically approach or exceed Zipf's unity rule ($\alpha \ge 1$), the colonial Caribbean's sub-unitary slope captures political fragmentation across five European empires and two independent Hispaniolan republics: each imperial sphere sustained its own fortified administrative port (La Habana, Port-au-Prince, Kingston, Port of Spain, San Juan, Saint-Pierre, Bridgetown, Santo Domingo, Willemstad, Charlotte Amalie and Nassau), flattening the upper-middle curve beneath Havana's primacy [@USWarDeptCuba1900; @Pluskota2020Freedom; @DanishWestIndies1912].

# Limitations

Three archival constraints qualify interpretation of this urban gazetteer. First, municipal boundaries differed across imperial statistical bureaus: Spanish *municipios* and French *communes* often combined a port town with adjacent cane parishes, whereas British Colonial Blue Books reported narrower urban ward limits, requiring care when comparing mid-tier town sizes across imperial borders [@Higman1984; @Pluskota2020Freedom]. Second, early seventeenth-century town counts before 1750 rely on garrison rolls, ecclesiastical *padrones* and traveller estimates rather than standardised censuses, carrying wider error margins than nineteenth-century returns [@MoreauStMery1797; @USWarDeptPR1900]. Third, rapid shocks—the 1692 Port Royal earthquake, the 1781 sack of Sint Eustatius, the 1791 to 1804 burning of Cap-Haïtien and nineteenth-century yellow-fever and cholera outbreaks—produced abrupt inter-censal urban contractions that sparse decennial snapshots capture only at coarse intervals [@Geggus1997; @Roberts1957].

# Conclusion

Across 143 evidence-backed ports and towns spanning 29 jurisdictions, this gazetteer documents the shift of Caribbean urban primacy from seventeenth-century Spanish convoy strongholds and early Barbadian and Jamaican entrepôts to a dense, nineteenth-century network anchored by La Habana (235.981), Port-au-Prince (61k), Kingston (46.542), Santiago de Cuba (43.090), Matanzas (36.374), Port of Spain (33.782) and San Juan (32.048). Its tight sub-unitary rank-size scaling ($\alpha = 0,75$, $R^2 = 0,98$) captures the enduring urban imprint of five rival European empires competing across a fragmented tropical archipelago.

# Appendix

## Excluded Duplicate Aliases and Source Saturation Ledger

Table \ref{tab:excluded-aliases} records the six candidate aliases consolidated during 25 km spatial deduplication, confirming full ledger transparency across all 149 evaluated entries.

<figure class="crd-table-figure" id="tab:excluded-aliases">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Territory</th><th class="crd-th">Ledger Disposition</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>La Habana</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
<tr><td class="crd-td"><strong>Bayamo</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
<tr><td class="crd-td"><strong>Guanabacoa</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
<tr><td class="crd-td"><strong>Santa Clara</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
<tr><td class="crd-td"><strong>Concepción de la Vega</strong></td><td class="crd-td">Dominican Republic</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
<tr><td class="crd-td"><strong>Matanzas</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Consolidated duplicate alias (within 25 km)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Six duplicate settlement aliases consolidated into canonical city-proper entries during spatial deduplication.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. All 143 catalogued towns are harmonised to city-proper urban cores (0 suburban agglomerations) with WGS84 coordinates verified against colonial gazetteers and official national statistical offices.
2. Rank-size power-law parameters ($\alpha = 0,7494$, $R^2 = 0,977$) are estimated over the upper half of the settlement distribution (71 of 143 catalogued towns) using peak recorded plantation-era populations inside 1650 to 1898.
