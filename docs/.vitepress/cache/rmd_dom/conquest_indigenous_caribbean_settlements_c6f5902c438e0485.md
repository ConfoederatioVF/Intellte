---
title: "Spanish Conquest of the Indigenous Caribbean"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1492-1650"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/conquest_indigenous_caribbean_urban_hierarchy.png"
hero_caption: "Twelve largest recorded settlements and log-log rank-size distribution across 86 catalogued Caribbean centres from 1492 to 1650."
hero_label: "fig:hero-conquest-caribbean-hierarchy"
bibliography: conquest_indigenous_caribbean_literature_review.bib
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



![Twelve largest recorded settlements and log-log rank-size distribution across 86 catalogued Caribbean centres from 1492 to 1650.](figures/conquest_indigenous_caribbean_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer documents 86 catalogued indigenous centres, Spanish colonial *villas* and early English, French and Dutch port towns distributed across six Antillean and Bahamian sub-regions and 25 modern Caribbean territories between 1492 and 1650. Built through four sequential archival ingestion waves tracked in the chapter source ledger, primary documentary and census records account for 78 entries (90,7%) in Wave 1, peer-reviewed historical demography and archaeology monographs supply 6 entries (7%) in Wave 2 and longitudinal backfill plus gap sweeps contribute 2 final entries (2,3%), holding the crowd-sourced fallback share strictly to 0% and halting at a marginal gain of 1,18%. Out of 89 candidate places evaluated in the ledger, 3 early English towns in Bermuda (St George's, Flatts Village and Somerset Village) were excluded strictly on spatial-mask grounds because their North Atlantic coordinates lie outside the Antillean-Bahamian areal footprint. Across all 86 included settlements (all standardised at city-proper scope), peak recorded populations obey a shallow maritime power-law rank-size distribution ($\alpha = 0,62$, $R^2 = 0,9915$ over the upper 43 centres), charting the turnover from eclipsed pre-contact Taíno hubs such as Yaguana (5,28k), White Marl (2,92k) and Guaynía (2,72k) to mid-seventeenth-century imperial entrepôts led by La Habana (14,2k), Bridgetown (9,85k), Santo Domingo (6,85k), Basseterre (5,6k) and San Juan (5,2k) [@MoyaPons1995; @AndersonCordova2017; @Schrover2021Colonial].

# Background

Settlement geography across the Caribbean between 1492 and 1650 captures one of the sharpest urban and spatial turnovers in modern history. At European contact, settlement across the Greater Antilles and Bahamas consisted of nucleated Taíno and Lucayan *yucayeques* positioned near fertile alluvial valleys, cassava *conucos* and sheltered reef fisheries, exemplified in this register by Yaguana (Léogâne) in western Hispaniola, White Marl on Jamaica's southern plain, Guaynía on Puerto Rico's south coast and MC-6 on Middle Caicos [@Rouse1992; @KeeganHofman2017; @Curet2005]. Early Spanish colonisation initially planted fortified gold-mining and port towns directly inside those indigenous demographic cores - beginning at La Isabela (1493), Concepción de la Vega (1494), Santiago de los Caballeros (1495), Santo Domingo (1496) and Puerto Real (1503), before expanding to Caparra (1508), Sevilla la Nueva (1509) and Diego Velázquez's seven Cuban *villas* from 1511 to 1515 [@DeaganCruxent2002; @Carrasquillo2019Creacio; @Sauer1966].

As indigenous populations collapsed under forced mining and epidemic disease between 1514 and 1550, entire networks of first-generation towns withered or were forcibly relocated [@LiviBacci2003; @Rivera2013Cultural]. La Isabela, Sevilla la Nueva, Caparra, Puerto Real and the Lucayan villages vanished or shrank into tiny hamlets, while Hispaniola's 1605-1606 *Devastaciones de Osorio* erased northern contraband ports and planted inland Bayaguana and Monte Plata [@MoyaPons1995; @Delsol2022Earliest]. Simultaneously, Spanish defence and convoy logistics elevated La Habana, San Juan and Santiago de Cuba, protected indigenous communities endured at El Caney and Guanabacoa, Kalinago strongholds persisted at Soufrière (Dominica) and Argyle (St Vincent) and post-1624 English, French and Dutch colonisation seeded a dense new chain of port towns from Bridgetown and Basseterre to Saint-Pierre, Basse-Terre and Willemstad [@Hofman2020Island; @Shafie2017Hypergraph; @Schrover2021Colonial].

# Methodology

The settlement register was compiled across four auditable ingestion waves designed to eliminate crowd-sourced fallback bias. Wave 1 ingested 78 primary archival settlements anchored in the 1514 *Repartimiento* of Hispaniola, Juan López de Velasco's 1574 *Geografía y Descripción Universal de las Indias*, Cuban and Puerto Rican municipal and ecclesiastical counts and early English, French and Dutch colonial musters. Wave 2 incorporated 6 peer-reviewed historical and archaeological site reconstructions (La Isabela, Puerto Real, El Cobre, Tortuga, Willemstad and Dominica's Kalinago centre), Wave 3 added 1 longitudinal survey entry and Wave 4 closed regional spatial gaps with 1 final entry, achieving saturation at 1,18% marginal gain.

Every included settlement carries WGS84 coordinates, an explicit sub-regional polygon assignment, a chronological population series strictly bounded within 1492 to 1650 and city-proper population scope (86 city-proper entries, 0 double-counted suburbs). Three Bermuda candidates evaluated during ingestion (St George's, Flatts Village and Somerset Village at 32,3°-32,38°N, 64,68°-64,87°W) were logged as out-of-bounds exclusions so that the spatial register matches the 221.996 km² Antillean-Bahamian areal mask exactly.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 89 audited candidates: 86 included Caribbean settlements plus 3 geographically excluded Bermuda settlements, with 100% sub-mask coverage across all six sub-regions and 0% crowd-sourced fallback share. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 86 catalogued centres across the six sub-regions, highlighting the twin concentrations along the Greater Antillean Spanish *audiencia* axis and the post-1624 Lesser Antillean colonial arc.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-conquest-indigenous-caribbean-settlements/conquest_indigenous_caribbean_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 86 catalogued indigenous and early colonial settlements across six Caribbean sub-regions, 1492 to 1650.</figcaption>
</figure>

Table \ref{tab:saturation-audit} summarises the four-wave ingestion ledger and out-of-bounds exclusion log, demonstrating monotonic saturation from 78 primary records down to 1,18% marginal gain in Wave 4.

<figure class="crd-table-figure" id="tab:saturation-audit">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Newly Included</th><th class="crd-th">Cumulative</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary archival registers and colonial musters</td><td class="crd-td">78</td><td class="crd-td">78</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Peer-reviewed demographic and archaeological monographs</td><td class="crd-td">6</td><td class="crd-td">84</td><td class="crd-td">7,69%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal archival and archaeological backfill</td><td class="crd-td">1</td><td class="crd-td">85</td><td class="crd-td">1,19%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional spatial gap sweep</td><td class="crd-td">1</td><td class="crd-td">86</td><td class="crd-td">1,18%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Four-wave source saturation ledger for the 86 included Caribbean settlements (1492 to 1650; 3 Bermuda towns excluded outside Antillean areal mask; 0% crowd-sourced share).</figcaption>
</figure>

# Results

## Leading Caribbean Towns and Indigenous Centres

Table \ref{tab:top25-settlements} presents the 25 largest recorded settlements in the 1492-1650 gazetteer, pairing WGS84 coordinates, sub-regional assignment, observed active span and peak city-proper population. Spanning 14,2k at La Habana down to 1,98k at St Joseph (San José de Oruña) on Trinidad, the upper tier illustrates the dual nature of the era: surviving Greater Antillean capitals and Cuban *villas* alongside rapidly expanding English and French port towns and three major pre-contact Taíno centres (Yaguana, White Marl and Guaynía) that peaked in 1492.

<figure class="crd-table-figure" id="tab:top25-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>La Habana</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">23,14, -82,36</td><td class="crd-td">1519-1650</td><td class="crd-td">14,2k (1650)</td></tr>
<tr><td class="crd-td"><strong>Bridgetown</strong></td><td class="crd-td">Barbados</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">13,1, -59,61</td><td class="crd-td">1630-1650</td><td class="crd-td">9,8k (1650)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo</strong></td><td class="crd-td">Dominican Republic</td><td class="crd-td">Hispaniola (Audiencia de Santo Domingo)</td><td class="crd-td">18,47, -69,88</td><td class="crd-td">1498-1650</td><td class="crd-td">6,8k (1650)</td></tr>
<tr><td class="crd-td"><strong>Basseterre St. Kitts</strong></td><td class="crd-td">Saint Kitts and Nevis</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">17,3, -62,73</td><td class="crd-td">1628-1650</td><td class="crd-td">5,6k (1650)</td></tr>
<tr><td class="crd-td"><strong>Yaguana Léogâne</strong></td><td class="crd-td">Haiti</td><td class="crd-td">Hispaniola (Audiencia de Santo Domingo)</td><td class="crd-td">18,51, -72,63</td><td class="crd-td">1492-1604</td><td class="crd-td">5,3k (1492)</td></tr>
<tr><td class="crd-td"><strong>San Juan Puerto Rico</strong></td><td class="crd-td">Puerto Rico</td><td class="crd-td">Puerto Rico and Virgin Islands</td><td class="crd-td">18,47, -66,11</td><td class="crd-td">1521-1646</td><td class="crd-td">5,2k (1646)</td></tr>
<tr><td class="crd-td"><strong>Santiago de Cuba</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">20,02, -75,82</td><td class="crd-td">1515-1650</td><td class="crd-td">4,6k (1650)</td></tr>
<tr><td class="crd-td"><strong>Bayamo</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">20,38, -76,64</td><td class="crd-td">1514-1650</td><td class="crd-td">4,2k (1650)</td></tr>
<tr><td class="crd-td"><strong>Puerto Príncipe Camagüey</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">21,38, -77,92</td><td class="crd-td">1515-1650</td><td class="crd-td">3,6k (1650)</td></tr>
<tr><td class="crd-td"><strong>Concepción de la Vega</strong></td><td class="crd-td">Dominican Republic</td><td class="crd-td">Hispaniola (Audiencia de Santo Domingo)</td><td class="crd-td">19,22, -70,53</td><td class="crd-td">1496-1650</td><td class="crd-td">3,6k (1496)</td></tr>
<tr><td class="crd-td"><strong>Charlestown Nevis</strong></td><td class="crd-td">Saint Kitts and Nevis</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">17,14, -62,62</td><td class="crd-td">1630-1650</td><td class="crd-td">3,4k (1650)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre Martinique</strong></td><td class="crd-td">Martinique</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">14,74, -61,18</td><td class="crd-td">1636-1650</td><td class="crd-td">3,2k (1650)</td></tr>
<tr><td class="crd-td"><strong>Spanish Town Villa de la Vega</strong></td><td class="crd-td">Jamaica</td><td class="crd-td">Spanish Jamaica and Cayman Islands</td><td class="crd-td">17,99, -76,96</td><td class="crd-td">1538-1650</td><td class="crd-td">3,1k (1650)</td></tr>
<tr><td class="crd-td"><strong>Holetown</strong></td><td class="crd-td">Barbados</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">13,19, -59,64</td><td class="crd-td">1628-1650</td><td class="crd-td">3k (1650)</td></tr>
<tr><td class="crd-td"><strong>White Marl Taino Town</strong></td><td class="crd-td">Jamaica</td><td class="crd-td">Spanish Jamaica and Cayman Islands</td><td class="crd-td">17,99, -76,92</td><td class="crd-td">1492-1540</td><td class="crd-td">2,9k (1492)</td></tr>
<tr><td class="crd-td"><strong>Guaynia Boriken</strong></td><td class="crd-td">Puerto Rico</td><td class="crd-td">Puerto Rico and Virgin Islands</td><td class="crd-td">17,97, -66,91</td><td class="crd-td">1492-1530</td><td class="crd-td">2,7k (1492)</td></tr>
<tr><td class="crd-td"><strong>Santiago de los Caballeros</strong></td><td class="crd-td">Dominican Republic</td><td class="crd-td">Hispaniola (Audiencia de Santo Domingo)</td><td class="crd-td">19,45, -70,7</td><td class="crd-td">1504-1650</td><td class="crd-td">2,7k (1650)</td></tr>
<tr><td class="crd-td"><strong>Speightstown</strong></td><td class="crd-td">Barbados</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">13,25, -59,64</td><td class="crd-td">1632-1650</td><td class="crd-td">2,7k (1650)</td></tr>
<tr><td class="crd-td"><strong>Guanabacoa</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">23,12, -82,3</td><td class="crd-td">1554-1650</td><td class="crd-td">2,6k (1650)</td></tr>
<tr><td class="crd-td"><strong>Old Road Town St. Kitts</strong></td><td class="crd-td">Saint Kitts and Nevis</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">17,32, -62,8</td><td class="crd-td">1625-1650</td><td class="crd-td">2,4k (1650)</td></tr>
<tr><td class="crd-td"><strong>Sancti Spíritus</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">21,93, -79,44</td><td class="crd-td">1515-1650</td><td class="crd-td">2,4k (1650)</td></tr>
<tr><td class="crd-td"><strong>Trinidad Cuba</strong></td><td class="crd-td">Cuba</td><td class="crd-td">Captaincy General of Cuba</td><td class="crd-td">21,8, -79,98</td><td class="crd-td">1515-1650</td><td class="crd-td">2,2k (1650)</td></tr>
<tr><td class="crd-td"><strong>Basse-Terre Guadeloupe</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">16, -61,71</td><td class="crd-td">1644-1650</td><td class="crd-td">2,2k (1650)</td></tr>
<tr><td class="crd-td"><strong>San Germán</strong></td><td class="crd-td">Puerto Rico</td><td class="crd-td">Puerto Rico and Virgin Islands</td><td class="crd-td">18,08, -67,04</td><td class="crd-td">1512-1646</td><td class="crd-td">2,1k (1646)</td></tr>
<tr><td class="crd-td"><strong>St. Joseph San José de Oruña</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">Lesser Antilles, Trinidad and Southern Islands</td><td class="crd-td">10,64, -61,42</td><td class="crd-td">1595-1650</td><td class="crd-td">2k (1650)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 25 indigenous centres and colonial towns in the Caribbean gazetteer (1492 to 1650), ordered by peak city-proper population.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage and Urban Density

Table \ref{tab:subregion-gazetteer} contrasts catalogued settlement counts, areal settlement density per 10.000 km², leading centre and regional archival population across all six sub-regions. The Lesser Antilles, Trinidad and Southern Islands lead both in absolute count (28 settlements, 32,6% of the register) and in spatial density (24 settlements per 10.000 km²), reflecting the fragmented island-by-island colonisation of English, French, Dutch and Spanish micro-polities alongside Kalinago strongholds on Dominica and St Vincent [@Hofman2020Island; @Schrover2021Colonial]. Puerto Rico and the Virgin Islands rank second in spatial intensity (13,76 settlements per 10.000 km² across 12 centres), whereas expansive Cuba records 1,22 settlements per 10.000 km² across its 13 concentrated *villas* and port hubs, led decisively by La Habana at 14,2k.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Land (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">1492 Pop.</th><th class="crd-th">1650 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hispaniola (Audiencia de Santo Domingo)</strong></td><td class="crd-td">74.886</td><td class="crd-td">20</td><td class="crd-td">2,67</td><td class="crd-td">Santo Domingo (6,8k)</td><td class="crd-td">520k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Captaincy General of Cuba</strong></td><td class="crd-td">106.195</td><td class="crd-td">13</td><td class="crd-td">1,22</td><td class="crd-td">La Habana (14,2k)</td><td class="crd-td">185k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico and Virgin Islands</strong></td><td class="crd-td">8.719</td><td class="crd-td">12</td><td class="crd-td">13,76</td><td class="crd-td">San Juan Puerto Rico (5,2k)</td><td class="crd-td">135k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Spanish Jamaica and Cayman Islands</strong></td><td class="crd-td">10.749</td><td class="crd-td">7</td><td class="crd-td">6,51</td><td class="crd-td">Spanish Town Villa de la Vega (3,1k)</td><td class="crd-td">105k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Lucayan and Northern Bahamian Arc</strong></td><td class="crd-td">9.782</td><td class="crd-td">6</td><td class="crd-td">6,13</td><td class="crd-td">MC-6 Middle Caicos (1,3k)</td><td class="crd-td">42k</td><td class="crd-td">600</td></tr>
<tr><td class="crd-td"><strong>Lesser Antilles, Trinidad and Southern Islands</strong></td><td class="crd-td">11.665</td><td class="crd-td">28</td><td class="crd-td">24</td><td class="crd-td">Bridgetown (9,8k)</td><td class="crd-td">124k</td><td class="crd-td">85k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, settlement density per 10.000 km², leading centre and 1492 versus 1650 archival population across six Caribbean sub-regions.</figcaption>
</figure>

## Rank-Size Scaling and Polycentric Maritime Structure

Across all 86 catalogued Caribbean settlements, the upper-half log-log rank-size curve (43 centres above the minor hamlet threshold) fits a smooth power law with slope $\alpha = 0,62$ and $R^2 = 0,9915$. Unlike unified continental viceroyalties where one administrative capital dominates by an order of magnitude, the 1492-1650 Caribbean exhibited a shallow polycentric hierarchy dictated by maritime choke points and imperial fragmentation [@Slayton2020Modeling; @Chinea2021Fronteras]. At the apex sit Havana (14,2k) and Bridgetown (9,85k), followed closely by a broad second tier between 2,5k and 7k spanning Santo Domingo (6,85k), Basseterre (5,6k), Yaguana (5,28k), San Juan (5,2k), Santiago de Cuba (4,65k), Bayamo (4,2k), Puerto Príncipe (3,65k), Concepción de la Vega (3,6k), Charlestown (3,42k), Saint-Pierre (3,25k), Spanish Town (3,15k), Holetown (2,95k), White Marl (2,92k), Guaynía (2,72k), Santiago de los Caballeros (2,68k), Speightstown (2,68k) and Guanabacoa (2,65k), tapering smoothly down to frontier hamlets of 185 to 465 inhabitants across Eleuthera, Saint-Barthélemy, Tortola, Saba, Aruba and Grenada.

# Limitations

Three evidentiary boundaries qualify this settlement register. First, documentary survival strongly favours fortified Spanish *villas* and post-1624 English, French and Dutch port musters over ephemeral or dispersed indigenous villages [@Curet2005; @KeeganHofman2017]. Consequently, major pre-contact Taíno and Lucayan towns (Yaguana, White Marl, Guaynía, MC-6, Rolling Town, Guanahani, New Providence and Grand Turk) represent archaeologically and historically anchored apex settlements rather than an exhaustive inventory of every 1492 *yucayeque*. Second, indigenous refuge communities and Maroon (*cimarrón*) mountain palenques in Hispaniola, Jamaica and Puerto Rico operated outside colonial tax rolls and therefore appear in regional totals more fully than as geocoded municipal towns [@AndersonCordova2017; @Haile2022Investigating]. Third, three early English Bermuda towns settled from 1612 (St George's, Flatts Village and Somerset Village) lie outside the Antillean-Bahamian areal mask footprint and are logged as spatial exclusions rather than omitted from JAGUAR's wider Atlantic accounts.

# Conclusion

Cataloguing 86 settlements across 25 modern jurisdictions documents in granular geographical detail how the Spanish conquest and subsequent northern European rivalry remade the urban map of the Caribbean between 1492 and 1650. First-wave mining towns and pre-contact Taíno seats collapsed or vanished across Hispaniola, Jamaica, Puerto Rico and the Bahamas, while strategic convoy ports (Havana, San Juan, Santo Domingo), Cuban ranching *villas*, Kalinago mountain strongholds on Dominica and St Vincent and rapidly expanding English, French and Dutch plantation roadsteads (Bridgetown, Basseterre, Charlestown, Saint-Pierre, Basse-Terre and Willemstad) established the polycentric maritime urban hierarchy ($\alpha = 0,62$, $R^2 = 0,99$) inherited by the mature colonial Caribbean.

# Appendix

## Territorial Distribution of Included Settlements

Table \ref{tab:gazetteer-territories} lists the exact settlement count and peak centre for all 25 modern Caribbean territories represented in the 1492-1650 gazetteer.

<figure class="crd-table-figure" id="tab:gazetteer-territories">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Jurisdiction</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dominican Republic</strong></td><td class="crd-td">14</td><td class="crd-td">16,3%</td><td class="crd-td">Santo Domingo (6,8k)</td></tr>
<tr><td class="crd-td"><strong>Cuba</strong></td><td class="crd-td">13</td><td class="crd-td">15,1%</td><td class="crd-td">La Habana (14,2k)</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico</strong></td><td class="crd-td">10</td><td class="crd-td">11,6%</td><td class="crd-td">San Juan Puerto Rico (5,2k)</td></tr>
<tr><td class="crd-td"><strong>Jamaica</strong></td><td class="crd-td">7</td><td class="crd-td">8,1%</td><td class="crd-td">Spanish Town Villa de la Vega (3,1k)</td></tr>
<tr><td class="crd-td"><strong>Haiti</strong></td><td class="crd-td">6</td><td class="crd-td">7%</td><td class="crd-td">Yaguana Léogâne (5,3k)</td></tr>
<tr><td class="crd-td"><strong>Barbados</strong></td><td class="crd-td">4</td><td class="crd-td">4,7%</td><td class="crd-td">Bridgetown (9,8k)</td></tr>
<tr><td class="crd-td"><strong>The Bahamas</strong></td><td class="crd-td">4</td><td class="crd-td">4,7%</td><td class="crd-td">Rolling Town Long Island (790)</td></tr>
<tr><td class="crd-td"><strong>Saint Kitts and Nevis</strong></td><td class="crd-td">3</td><td class="crd-td">3,5%</td><td class="crd-td">Basseterre St. Kitts (5,6k)</td></tr>
<tr><td class="crd-td"><strong>Trinidad and Tobago</strong></td><td class="crd-td">3</td><td class="crd-td">3,5%</td><td class="crd-td">St. Joseph San José de Oruña (2k)</td></tr>
<tr><td class="crd-td"><strong>Netherlands</strong></td><td class="crd-td">3</td><td class="crd-td">3,5%</td><td class="crd-td">Oranjestad St. Eustatius (680)</td></tr>
<tr><td class="crd-td"><strong>Martinique</strong></td><td class="crd-td">2</td><td class="crd-td">2,3%</td><td class="crd-td">Saint-Pierre Martinique (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Guadeloupe</strong></td><td class="crd-td">2</td><td class="crd-td">2,3%</td><td class="crd-td">Basse-Terre Guadeloupe (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Antigua and Barbuda</strong></td><td class="crd-td">2</td><td class="crd-td">2,3%</td><td class="crd-td">St. John's Antigua (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Turks and Caicos Islands</strong></td><td class="crd-td">2</td><td class="crd-td">2,3%</td><td class="crd-td">MC-6 Middle Caicos (1,3k)</td></tr>
<tr><td class="crd-td"><strong>Dominica</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Soufrière Dominica Kalinago (1,9k)</td></tr>
<tr><td class="crd-td"><strong>Saint Vincent and the Grenadines</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Argyle St. Vincent Kalinago (1,8k)</td></tr>
<tr><td class="crd-td"><strong>Curaçao</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Willemstad (1,7k)</td></tr>
<tr><td class="crd-td"><strong>Montserrat</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Plymouth Montserrat (1,4k)</td></tr>
<tr><td class="crd-td"><strong>United States Virgin Islands</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Christiansted St. Croix Early (820)</td></tr>
<tr><td class="crd-td"><strong>Sint Maarten</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Philipsburg Sint Maarten (540)</td></tr>
<tr><td class="crd-td"><strong>Grenada</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">St. George's Grenada (465)</td></tr>
<tr><td class="crd-td"><strong>Saint Martin</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Marigot Saint-Martin Early (385)</td></tr>
<tr><td class="crd-td"><strong>Aruba</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Savaneta Aruba (345)</td></tr>
<tr><td class="crd-td"><strong>British Virgin Islands</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Road Town Tortola Early (295)</td></tr>
<tr><td class="crd-td"><strong>Saint Barthelemy</strong></td><td class="crd-td">1</td><td class="crd-td">1,2%</td><td class="crd-td">Gustavia Early French Settlement (215)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Territorial breakdown and leading recorded centre across 25 modern Caribbean jurisdictions in the 1492 to 1650 settlement gazetteer.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. All 86 included settlements are standardised at city-proper scope; three early Bermuda towns (St George's, Flatts Village and Somerset Village) lie outside the chapter areal mask at 32,3°N, 64,8°W and are recorded as spatial exclusions in the source ledger.
2. Rank-size power-law parameters ($\alpha = 0,62$, $R^2 = 0,9915$) are estimated across the upper 43 settlements (top half of the 86-centre register) to exclude truncation effects among frontier hamlets below 500 inhabitants.
