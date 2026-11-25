---
title: "Early Modern West Africa, Equatoria and Angola"
subtitle: "Coastal Kingdoms, Interior Trade and the Atlantic Slave Trade (1500-1880)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: atlantic_west_equatoria_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Twelve West, Equatorial and Central African polities and 3.424 individually assessed settlements spanning Senegambia, the Gulf of Guinea, Kongo, Luba-Lunda and Angola between 1500AD and 1885AD."
hero_label: "fig:hero-atlantic-west-equatoria"

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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the opening of regular Afro-European maritime commerce around 1500AD and the onset of European colonial partition around 1880AD, Atlantic West Africa, Equatorial Africa and Angola experienced one of the sharpest demographic reversals in early modern world history. Across a study area of 7,03M km² spanning 24 modern states from Mauritania and Senegambia to the Upper Congo, Katanga and southern Angola, NICETHI reconstructs a population that expanded from 16,79M inhabitants in 1500AD to 31,67M in 1700AD as New World maize and cassava spread inland alongside regional iron and textile exchange. Over the ensuing century and a half, intensifying Atlantic slave exports, interior raiding and warfare in the Bight of Biafra, Yorubaland, Dahomey, Kongo and Angola reversed that expansion, pulling total numbers down to 24,35M in 1770AD, 23,92M in 1800AD, 20,45M in 1850AD and an 1860AD trough of 19,66M before gradual recovery to 21,6M in 1880AD (3,08 persons per km²). Growth and contraction diverged sharply between ecological zones. While the Niger Delta, Oyo-Yorubaland and Dahomey retained densities exceeding 10 persons per km² despite acute eighteenth-century losses, Senegambia and Sierra Leone rebounded slowly through nineteenth-century legitimate commerce, and central Congo and Luba-Lunda bore late slave and ivory raiding into the 1880s. These curves rest on 3.424 individually assessed cities and towns (820 dated observations), non-stationary Matérn kriging over 6.431 Voronoi catchments and mass-conserving pycnophylactic scaling across colonial and modern administrative boundaries.



# Background

## Ecological Belts and Agrarian Carrying Capacities

The Atlantic African facade from the Senegal River to the Cunene encompasses four contrasting ecological belts whose carrying capacities shaped settlement density long before 1500AD [@Green2015AfricanKingdoms]. Along the northern savanna-woodland corridor of Senegambia and the Guinea highlands, pearl millet, sorghum, African rice (*Oryza glaberrima*) and flood-recession farming supported dense rural populations along river valleys and coastal estuaries [@Havik2007PortOfGeba; @Howard1900MandeIdentity]. South and east of the Casamance and Sierra Leone rivers, heavy monsoon rainfall sustained mangrove rice paddies along the Upper Guinea littoral and dense forest-fallow belts across Ivory Coast, the Gold Coast, Yorubaland, Benin and the Niger Delta, where yams and oil palms permitted high rural densities even without plough agriculture [@Kirkgreene2001ComparativeStudy; @Roese1984DasKonigreich; @Ogundiran2009OyoFrontier].

Where the Dahomey Gap broke the coastal rainforest between the Volta and Lagos Lagoon, open savanna reached the Atlantic shore, enabling cavalry states such as Old Oyo to project power southward toward coastal ports [@Law1977OyoEmpire; @Monroe2014DahomeySlavery]. Further south across Gabon, Loango, the Congo basin and Angola, equatorial evergreen forest gave way to mixed woodland-savanna and the elevated Bié-Huambo plateau, where soils were generally lighter and overall rural densities remained below 3 persons per km², punctuated by concentrated riverine and highland pockets around Mbanza Congo, the Kwanza valley and Bailundo [@Thornton1977KongoDemography; @Pessoa2025MitosOrigem]. After 1500AD, Portuguese and West African maritime networks introduced American maize, cassava (*manioc*), groundnuts and sweet potatoes across coastal enclaves from Elmina and São Tomé to Luanda, lifting caloric yields per hectare across acid forest and savanna soils alike [@Green2015AfricanKingdoms; @Thornton1977KongoDemography].

## Historiography and the Atlantic Demographic Shock

Modern quantitative historiography of early modern Atlantic Africa began with Philip Curtin's 1969 census of the transatlantic slave trade, which established aggregate embarkation orders of magnitude and exposed how far earlier continental estimates rested on conjecture [@Curtin1969AtlanticCensus]. Subsequent archival reconstructions by Paul Lovejoy, John Thornton and Roquinaldo Ferreira refined both coastal embarkation series and demographic age-sex structures, showing that West-Central Africa, the Bight of Benin, the Bight of Biafra and the Gold Coast supplied the overwhelming majority of captives shipped to the Americas between 1650AD and 1860AD [@Lovejoy2012Transformations; @Thornton1977KongoDemography; @Ferreira2011TheSuppression; @Ferreira2017TheSuppression].

Two interrelated debates govern how those export streams translate into resident population curves. Patrick Manning argued through back-projection modelling that sustained export of young adults, combined with war mortality during slave-raiding campaigns and heightened female ratios in slaving zones, halted natural increase across Atlantic Africa after 1700AD and produced absolute demographic decline across the Bight of Benin, Gold Coast and Congo-Angola during the peak eighteenth-century decades [@Lovejoy2012Transformations]. By contrast, John Thornton's analysis of seventeenth- and eighteenth-century Capuchin baptismal registers and military counts in the Kingdom of Kongo demonstrated that coastal and core provinces retained resilient female reproduction and rapid local recovery once civil wars subsided, suggesting that demographic losses were heavily concentrated along active raiding frontiers rather than uniform across every hinterland [@Thornton1977KongoDemography; @Ngaba2026BercoEducacao].

A parallel methodological debate concerns how twentieth-century colonial enumerations project backward into the nineteenth century. As recent evaluations by Frankema and Jerven demonstrate, back-projecting from 1950AD census totals using fixed exponential growth rates understates nineteenth-century regional fluctuations when slave exports collapsed after the 1840s and legitimate palm-oil, groundnut and rubber commerce shifted labour back into coastal agriculture [@Ferreira2011TheSuppression; @Mac1900SlaveryAnd; @Curto2005ResistenciaEscravidao]. By combining archaeological settlement plans [@AgbajeWilliam1990NewsAnd; @Ogundiran2009OyoFrontier; @Monroe2014DahomeySlavery], contemporary European and missionary town counts, Portuguese Angolan presídio censuses [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao] and French communal records with spatial kriging, NICETHI bridges local urban histories and macro-regional demographic totals without relying on uniform back-projection assumptions.

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study domain covers 7.025.580 km² across 82.875 five-arcminute raster pixels, spanning 29 modern states from Mauritania and Senegal in the north-west to South Sudan, Katanga and northern Namibia in the south-east. Within NICETHI, the chapter occupies Regime 2 (1500AD to 1885AD), connecting pre-1500AD West African and Bantu foundations with the post-1885AD colonial era. Using OpenHistoricalMap political polygons and academic historical GIS boundaries clipped to geoBoundaries coastlines [@Runfola2020GeoBoundaries], the domain is partitioned into 12 contiguous historical sub-regions reflecting major state systems and commercial hinterlands (Table \ref{tab:subregions}).

Population trajectories are evaluated across 14 benchmark years tracked in the chapter series (1500AD, 1700AD, 1710AD, 1730AD, 1740AD, 1760AD, 1770AD, 1790AD, 1800AD, 1820AD, 1830AD, 1850AD, 1860AD and 1880AD), summarised in analytical tables at six primary anchor dates: 1500AD (early Atlantic contact), 1700AD (pre-peak demographic maximum), 1770AD (height of the eighteenth-century Atlantic export wave), 1800AD (turn-of-century transition), 1850AD (suppression of transatlantic exports and expansion of Yoruba wars) and 1880AD (eve of European partition). All figures measure full resident populations across walled cities, coastal ports, agricultural villages and mobile forest or pastoral communities [@Green2015AfricanKingdoms; @Thornton1977KongoDemography].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wolof States, Futa Jallon and Kaabu</strong></td><td class="crd-td">365.716</td><td class="crd-td">4.379</td><td class="crd-td">48</td><td class="crd-td">5,2</td></tr>
<tr><td class="crd-td"><strong>Sierra Leone, Grain Coast and Early Liberia</strong></td><td class="crd-td">410.720</td><td class="crd-td">4.832</td><td class="crd-td">32</td><td class="crd-td">5,8</td></tr>
<tr><td class="crd-td"><strong>Asante Empire, Fante and Gold Coast</strong></td><td class="crd-td">353.087</td><td class="crd-td">4.149</td><td class="crd-td">42</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Dahomey, Allada and Ewe Littoral</strong></td><td class="crd-td">144.180</td><td class="crd-td">1.697</td><td class="crd-td">26</td><td class="crd-td">2,1</td></tr>
<tr><td class="crd-td"><strong>Oyo Empire, Yorubaland and Kingdom of Benin</strong></td><td class="crd-td">190.336</td><td class="crd-td">2.238</td><td class="crd-td">34</td><td class="crd-td">2,7</td></tr>
<tr><td class="crd-td"><strong>Niger Delta States, Arochukwu and Cross River</strong></td><td class="crd-td">217.879</td><td class="crd-td">2.557</td><td class="crd-td">34</td><td class="crd-td">3,1</td></tr>
<tr><td class="crd-td"><strong>Bamum, Cameroon Grassfields and Biafra Coast</strong></td><td class="crd-td">550.568</td><td class="crd-td">6.444</td><td class="crd-td">17</td><td class="crd-td">7,8</td></tr>
<tr><td class="crd-td"><strong>Loango, Teke-Makoko and Gabon Littoral</strong></td><td class="crd-td">578.369</td><td class="crd-td">6.741</td><td class="crd-td">14</td><td class="crd-td">8,2</td></tr>
<tr><td class="crd-td"><strong>Kongo, Ndongo, Matamba and Portuguese Angola</strong></td><td class="crd-td">587.687</td><td class="crd-td">6.905</td><td class="crd-td">21</td><td class="crd-td">8,4</td></tr>
<tr><td class="crd-td"><strong>Ovimbundu Kingdoms, Benguela and S. Angola</strong></td><td class="crd-td">931.287</td><td class="crd-td">11.240</td><td class="crd-td">18</td><td class="crd-td">13,3</td></tr>
<tr><td class="crd-td"><strong>Kuba Kingdom, Inner Congo and Ubangi</strong></td><td class="crd-td">1.366.717</td><td class="crd-td">15.939</td><td class="crd-td">7</td><td class="crd-td">19,5</td></tr>
<tr><td class="crd-td"><strong>Luba Empire, Lunda Commonwealth and Kazembe</strong></td><td class="crd-td">1.329.036</td><td class="crd-td">15.754</td><td class="crd-td">8</td><td class="crd-td">18,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Twelve historical sub-regions of Atlantic West Africa, Equatoria and Angola showing equal-area polygon surface, 5-arcminute pixel count, individually assessed settlements (301 total) and territorial share.</figcaption>
</figure>

## Gazetteer Screening and Evidence-Based Urban Reconstruction

To anchor the spatial hierarchy of urban centres, 4.115 candidate towns, royal capitals, European forts and interior markets were screened from colonial censuses, traveller accounts, Portuguese presídio rolls, missionary surveys and archaeological fieldwork [@AgbajeWilliam1990NewsAnd; @Monroe2014DahomeySlavery; @Law1977OyoEmpire; @Howard1900MandeIdentity]. After removing 691 duplicate orthographies, isolated trading factories and unquantified place-names, 3.424 individually assessed settlements containing 10.646 dated population observations were retained across all 12 sub-regions, with zero empty inhabited territories and a wave-saturation marginal gain of 1,9%.

Every settlement entry reflects city-proper limits (n = 301) with zero metropolitan double-counting. National representation spans all 29 constituent countries, led by Nigeria (65 settlements), Ghana (36), Angola (32), Senegal (25), Cameroon (21), Democratic Republic of the Congo (15), Guinea (14), Benin (13), Ivory Coast (11) and Sierra Leone (10), followed by Guinea-Bissau (8), Liberia (8), Togo (8), Gambia (6), Gabon (5), Namibia (5), Mali (4), Zambia (4), Republic of the Congo (3), Central African Republic (2), Equatorial Guinea (2), Mauritania (2), Burkina Faso (1) and South Sudan (1). Where primary eyewitness or census totals were absent for early centuries, populations were derived from surveyed perimeter walls and compound densities such as Agbaje-Williams's ten-transect Igboho survey and Soper and Darling's Old Oyo wall mappings, alongside architectural and geochemical studies of Benin, Dahomey, Fante and Baule centres [@AgbajeWilliam1990NewsAnd; @Skowronek2023GermanBrass; @Kirkgreene2001ComparativeStudy; @Weiskel2000ThePrecolonial; @Roese1984DasKonigreich].

## Non-Stationary Matérn Kriging Over Archaeological Substrata

Gazetteer records capture nucleated towns and trading ports but under-represent dispersed forest hamlets and unrecorded rural farming communities, especially in Equatorial Africa and the Luba-Lunda interior [@Coloniales1920CongoRevue; @Congostijdlijn2019GeschiedenisVan]. NICETHI therefore couples sub-regional totals with continuous spatial intensity surfaces generated by non-stationary Matérn ($\nu = 3/2$) residual kriging across the broader Sub-Saharan archaeological mosaic (11.199 assigned domestic site records across 6.970 unique-coordinate loci, of which 82,9% derive from regional registers and academic monographs with zero crowdsourced records).

Catchment geometry is partitioned into 6.431 domestic Voronoi polygons constrained strictly below 25.000 km² (maximum domestic catchment 23.489 km², median Voronoi radius 31,72 km, 90th percentile 49,29 km) and buffered along the Sahelian-Saharan frontier by 383 cross-border catchments harmonised across 77 rasters so no artificial boundary cliff separates Senegambia or Adamawa from the Sahara and Sahel. Two chronological horizons span this chapter: Horizon 9 (Early Modern Atlantic, 1500AD to 1750AD; 2.096 active domain sites across 1.034 catchments) and Horizon 10 (Late Precolonial, 1750AD to 1900AD; 1.130 active sites across 547 catchments). Weighted least-squares variogram fitting yields dimensionless correlation range $\tau_1 = 1,35$ (raw $\tau_1 = 1,405$ in Horizon 9 and $1,376$ in Horizon 10), secondary range $\tau_2 = 2,9025$, nugget-to-sill ratio $0,04$ and effective short-range spatial correlation of 44,55 km and 43,63 km respectively ($R^2 = 0,9992$ in both horizons). Deterministic trend covariates confirm the pull of navigable rivers and Atlantic ports: fluvial proximity ($\beta_3 = 0,0595$ in Horizon 9 and $0,0342$ in Horizon 10) and coastal access ($\beta_4 = 0,0717$ and $0,0475$) outrank baseline background habitability ($\beta_0 = 0,01$), while a 2-pixel urban-core mask prevents modern metropolitan sprawl around Lagos, Kinshasa or Luanda from bleeding backward into early modern surfaces.

## Subadministrative Censuses and Pycnophylactic Disaggregation

To link early modern polities cleanly to late nineteenth- and twentieth-century census geography without administrative boundary cliffs, NICETHI anchors spatial disaggregation to geoBoundaries polygons [@Runfola2020GeoBoundaries] and historical colonial enumerations via strictly mass-conserving pycnophylactic areal scaling. Across the Sub-Saharan mosaic (81 disaggregated years from 1900AD onward and 30.911 unit-year checks), 100% of disaggregated cells satisfy mass conservation within 0,01%, with a worst unit relative error of 5,6e-08.

Within this chapter's 1500AD to 1885AD window, pre-partition administrative enumerations provide direct calibration anchors at both ends of the coast. In French Senegal, municipal rolls of the *Quatre Communes* enumerate Saint-Louis at 15.980 inhabitants in 1876 (matching 15.980 in the 1878 gazetteer snapshot) [@Havik2007PortOfGeba]. In Portuguese Angola, systematic *mapas da população* compiled for Luanda, Benguela and the Kwanza presídios between 1777 and 1850 document urban, free African and enslaved populations directly inside the coastal colony and its interior military districts [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao].

# Testing and Validation

## Urban Rank-Size Scaling and Archaeological Calibration

Because early modern African cities functioned as commercial entrepôts, ritual capitals and military refuges rather than single-core industrial metropolises, checking whether the 301-settlement ledger obeys plausible urban scaling provides an essential structural test [@Monroe2014DahomeySlavery; @Ogundiran2009OyoFrontier]. Across 299 spatially deduplicated settlements ($n = 299$; merging two co-located historical entries for Lagos and Freetown), ordinary least-squares regression on the upper 150 settlements yields a Pareto rank-size exponent of $q = 0,81$ ($R^2 = 0,98$; full-sample $q = 1,03$, $R^2 = 0,92$; Figure \ref{fig:rank-size}).

That sub-unitary upper-tail slope ($q = 0,81 < 1$) matches a polycentric system of competing regional capitals rather than a single primate metropolis. At the apex stand nineteenth-century Yoruba military and refugee cities - Ibadan (200k in 1850), Abeokuta (100k in 1861), Old Oyo (99,8k in 1780) and Ilorin (85k in 1880) - closely trailed by Slave Coast and forest capitals such as Savi (77,5k in 1727), Ile-Ife (62,4k in 1500), Bida (58,4k in 1885), Benin City (52,8k in 1602), Mbanza Congo (52k in 1550) and Ogbomosho (50k in 1856) [@Law1977OyoEmpire; @Thornton1977KongoDemography; @Roese1984DasKonigreich]. Archaeological transect checks further anchor these headcounts: Agbaje-Williams's five-zone survey of Igboho (69,5 ha, 324 houses, 2.470 rooms and 4.153 mapped residents) calibrates Yoruba residential densities at 60 to 88 persons per hectare (114 to 167 m² per person), consistent with the 59-city African preindustrial sample mean of 12.724 persons per km² (median 10.000) recorded in urban comparative syntheses [@AgbajeWilliam1990NewsAnd; @Ogundiran2009OyoFrontier].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-atlantic-west-equatoria/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 299 spatially deduplicated settlements (top-150 OLS slope q = 0,81, R² = 0,98) and mean population densities of the ten densest sub-regions in 1880AD.</figcaption>
</figure>

## Regional Census Reconciliation and Eighteenth-Nineteenth Century Enumerations

Direct archival enumerations from Portuguese Angola (1777 to 1850) and French Senegal (1876) provide an independent check on urban trajectories along the littoral (Table \ref{tab:angola-senegal-censuses}). In Portuguese Angola, the presídio and port counts reveal stagnation and mid-century contraction during the final decades of illegal slave departures: Luanda stood at 9.755 inhabitants in 1781, fell to 6.543 in 1799 and 5.605 in 1844 as captives passed directly through coastal barracoons rather than residing in the city, and rebounded to 8.400 in 1850 and 17.800 by 1885 as legitimate wax, ivory and coffee commerce expanded [@Ferreira2011TheSuppression; @Ferreira2017TheSuppression; @Curto2005ResistenciaEscravidao]. Inland presídios such as Massangano (4.120 in 1777 to 2.950 in 1844) and Muxima (2.415 to 2.190) contracted modestly, whereas Golungo Alto (3.480 to 4.650) and Ambaca-Camabatela (5.420 to 6.850 in 1797, then 5.940 in 1844) held steady as highland provisioning and caravan nodes.

<figure class="crd-table-figure" id="tab:angola-senegal-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Polity</th><th class="crd-th">1777-1781</th><th class="crd-th">1797-1799</th><th class="crd-th">1837-1844</th><th class="crd-th">1850-1876</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Luanda (Port &amp; City)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">9.755 (1781)</td><td class="crd-td">6.543 (1799)</td><td class="crd-td">5.605 (1844)</td><td class="crd-td">8.400 (1850)</td></tr>
<tr><td class="crd-td"><strong>Benguela (Port &amp; District)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">2.400 (1777)</td><td class="crd-td">3.023 (1798)</td><td class="crd-td">2.438 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Camabatela / Ambaca (Presídio)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">5.420 (1777)</td><td class="crd-td">6.850 (1797)</td><td class="crd-td">5.940 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Golungo Alto (District)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">3.480 (1777)</td><td class="crd-td">4.210 (1797)</td><td class="crd-td">4.650 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Massangano (Presídio)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">4.120 (1777)</td><td class="crd-td">3.680 (1797)</td><td class="crd-td">2.950 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dondo / Cambambe (Presídio)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">2.650 (1777)</td><td class="crd-td">2.940 (1797)</td><td class="crd-td">3.420 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pungo Andongo (Presídio)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">2.840 (1777)</td><td class="crd-td">3.150 (1797)</td><td class="crd-td">-</td><td class="crd-td">3.400 (1854)</td></tr>
<tr><td class="crd-td"><strong>Muxima (Presídio)</strong></td><td class="crd-td">Portuguese Angola</td><td class="crd-td">2.415 (1777)</td><td class="crd-td">2.684 (1797)</td><td class="crd-td">2.190 (1844)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis (Commune)</strong></td><td class="crd-td">French Senegal</td><td class="crd-td">5.020 (1779)</td><td class="crd-td">-</td><td class="crd-td">11.850 (1837)</td><td class="crd-td">15.980</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Historical subadministrative and port enumerations from Portuguese Angolan presidio censuses (1777-1854) and the French Senegal municipal census of Saint-Louis (1876).</figcaption>
</figure>

At the macro-regional level, Table \ref{tab:manning-fj-comparison} sets Manning's 18-region 1850AD slave-trade back-projections against NICETHI's geographically matched sub-regions and Frankema and Jerven's revised continental totals. Manning assigned 28,96M inhabitants across Senegambia, Upper Guinea, Ivory Coast, Gold Coast, Bight of Benin, Bight of Biafra, Gabon, Loango and Angola in 1850AD, whereas NICETHI yields 20,45M for the overlapping West, Equatorial and Angolan domain in 1850AD (including Kuba and Luba-Lunda). That difference arises because NICETHI constrains nineteenth-century totals by explicit local carrying capacities and post-1950AD census polygons rather than scaling upward from fixed mortality multipliers; in Gold Coast alone, Frankema and Jerven similarly noted that Manning's 3,1M estimate for 1871AD stood far above the 408k colonial coastal count and revised Ghana's 1891AD total to 1,65M [@Lovejoy2012Transformations; @Curtin1969AtlanticCensus].

<figure class="crd-table-figure" id="tab:manning-fj-comparison">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Manning Region</th><th class="crd-th">1850 Pop.</th><th class="crd-th">1850 Share (%)</th><th class="crd-th">1950 Pop.</th><th class="crd-th">1950 Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Senegambia</strong></td><td class="crd-td">2,02M</td><td class="crd-td">1,9</td><td class="crd-td">3,53M</td><td class="crd-td">2,2</td></tr>
<tr><td class="crd-td"><strong>Upper Guinea</strong></td><td class="crd-td">3,56M</td><td class="crd-td">3,3</td><td class="crd-td">5,89M</td><td class="crd-td">3,6</td></tr>
<tr><td class="crd-td"><strong>Ivory Coast</strong></td><td class="crd-td">1,57M</td><td class="crd-td">1,5</td><td class="crd-td">2,5M</td><td class="crd-td">1,5</td></tr>
<tr><td class="crd-td"><strong>Gold Coast</strong></td><td class="crd-td">3,04M</td><td class="crd-td">2,8</td><td class="crd-td">5,38M</td><td class="crd-td">3,3</td></tr>
<tr><td class="crd-td"><strong>Bight of Benin</strong></td><td class="crd-td">4,11M</td><td class="crd-td">3,8</td><td class="crd-td">7,22M</td><td class="crd-td">4,4</td></tr>
<tr><td class="crd-td"><strong>Bight of Biafra</strong></td><td class="crd-td">6,16M</td><td class="crd-td">5,7</td><td class="crd-td">10,85M</td><td class="crd-td">6,7</td></tr>
<tr><td class="crd-td"><strong>Forest (Gabon)</strong></td><td class="crd-td">433,9k</td><td class="crd-td">0,4</td><td class="crd-td">639,9k</td><td class="crd-td">0,4</td></tr>
<tr><td class="crd-td"><strong>Loango</strong></td><td class="crd-td">7,49M</td><td class="crd-td">7</td><td class="crd-td">10,56M</td><td class="crd-td">6,5</td></tr>
<tr><td class="crd-td"><strong>Angola</strong></td><td class="crd-td">4,02M</td><td class="crd-td">3,7</td><td class="crd-td">6,38M</td><td class="crd-td">3,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Manning Table 10,8 mid-level population benchmarks (1850AD and 1950) across the nine Atlantic West and Central African slave-trade zones compared against NICETHI sub-regional reconstructions.</figcaption>
</figure>

# Results

## Aggregate Trajectory and the Slave-Trade Inflection (1500AD to 1880AD)

Across all 12 sub-regions, total population doubled between 1500AD (16,79M) and 1700AD (31,67M), reaching an early modern peak just as transatlantic slave exports accelerated sharply along the Gold Coast, Slave Coast, Bight of Biafra and Loango-Angola coasts (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). During the sixteenth and seventeenth centuries, wider adoption of maize and cassava alongside dense iron-working and regional cloth networks lifted agrarian carrying capacities from Senegambia to Kongo [@Green2015AfricanKingdoms; @Thornton1977KongoDemography; @Skowronek2023GermanBrass].

After 1700AD, however, the demographic curve bent downward. Aggregate population fell by 15,7% in a single decade to 26,68M by 1710AD, eased further to 25,73M in 1740AD and 24,35M in 1770AD, and slipped to 22,09M in 1790AD amid peak slave departures and widespread coastal warfare [@Curtin1969AtlanticCensus; @Lovejoy2012Transformations]. Following a brief plateau around 23,92M in 1800AD during the French Revolutionary maritime lull, nineteenth-century abolition wars, the collapse of Oyo, Fulbe jihads along the northern savanna fringe and late-phase Luba-Lunda ivory and slave raiding depressed regional totals to 20,45M in 1850AD and a nadir of 19,66M in 1860AD. By 1880AD, expanding palm-oil, groundnut, gum and rubber exports supported a modest recovery to 21,6M (3,08 persons per km²), still nearly one-third below the 1700AD high-water mark. Meanwhile, recorded urban centres in the gazetteer rose from 60 active settlements in 1500AD (309k attested urban residents) to 150 in 1700AD (995k), 168 in 1800AD (1,34M) and 204 in 1860AD (1,8M), reflecting nineteenth-century defensive agglomeration behind city walls even while rural hinterlands thinned [@Monroe2014DahomeySlavery; @Law1977OyoEmpire].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-atlantic-west-equatoria/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional total vs. attested urban population (Panel A), recorded active settlement counts (Panel B) and population trajectories of the five largest cities (Panel C) from 1500AD to 1880AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wolof States, Futa Jallon and Kaabu</strong></td><td class="crd-td">667,8k</td><td class="crd-td">1,3M</td><td class="crd-td">1,16M</td><td class="crd-td">1,22M</td><td class="crd-td">1,18M</td><td class="crd-td">1,4M</td></tr>
<tr><td class="crd-td"><strong>Sierra Leone, Grain Coast and Early Liberia</strong></td><td class="crd-td">716,4k</td><td class="crd-td">1,36M</td><td class="crd-td">1,34M</td><td class="crd-td">1,48M</td><td class="crd-td">1,37M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>Asante Empire, Fante and Gold Coast</strong></td><td class="crd-td">1,64M</td><td class="crd-td">3,13M</td><td class="crd-td">2,27M</td><td class="crd-td">2,17M</td><td class="crd-td">1,78M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Dahomey, Allada and Ewe Littoral</strong></td><td class="crd-td">1,29M</td><td class="crd-td">2,36M</td><td class="crd-td">1,69M</td><td class="crd-td">1,59M</td><td class="crd-td">1,51M</td><td class="crd-td">1,49M</td></tr>
<tr><td class="crd-td"><strong>Oyo Empire, Yorubaland and Kingdom of Benin</strong></td><td class="crd-td">2,19M</td><td class="crd-td">5,13M</td><td class="crd-td">3,31M</td><td class="crd-td">3,04M</td><td class="crd-td">2,09M</td><td class="crd-td">2,18M</td></tr>
<tr><td class="crd-td"><strong>Niger Delta States, Arochukwu and Cross River</strong></td><td class="crd-td">2,29M</td><td class="crd-td">5,42M</td><td class="crd-td">3,56M</td><td class="crd-td">3,34M</td><td class="crd-td">2,81M</td><td class="crd-td">3,01M</td></tr>
<tr><td class="crd-td"><strong>Bamum, Cameroon Grassfields and Biafra Coast</strong></td><td class="crd-td">1,08M</td><td class="crd-td">1,96M</td><td class="crd-td">1,74M</td><td class="crd-td">1,84M</td><td class="crd-td">1,69M</td><td class="crd-td">1,74M</td></tr>
<tr><td class="crd-td"><strong>Loango, Teke-Makoko and Gabon Littoral</strong></td><td class="crd-td">553,8k</td><td class="crd-td">926,6k</td><td class="crd-td">835,8k</td><td class="crd-td">779,7k</td><td class="crd-td">678k</td><td class="crd-td">686,9k</td></tr>
<tr><td class="crd-td"><strong>Kongo, Ndongo, Matamba and Portuguese Angola</strong></td><td class="crd-td">1,02M</td><td class="crd-td">1,57M</td><td class="crd-td">1,28M</td><td class="crd-td">1,32M</td><td class="crd-td">1,31M</td><td class="crd-td">1,46M</td></tr>
<tr><td class="crd-td"><strong>Ovimbundu Kingdoms, Benguela and S. Angola</strong></td><td class="crd-td">995,1k</td><td class="crd-td">1,59M</td><td class="crd-td">1,29M</td><td class="crd-td">1,33M</td><td class="crd-td">1,28M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Kuba Kingdom, Inner Congo and Ubangi</strong></td><td class="crd-td">2,57M</td><td class="crd-td">3,94M</td><td class="crd-td">3,21M</td><td class="crd-td">3,11M</td><td class="crd-td">2,45M</td><td class="crd-td">2,48M</td></tr>
<tr><td class="crd-td"><strong>Luba Empire, Lunda Commonwealth and Kazembe</strong></td><td class="crd-td">1,78M</td><td class="crd-td">2,97M</td><td class="crd-td">2,67M</td><td class="crd-td">2,72M</td><td class="crd-td">2,3M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Total Atlantic West Africa, Equatoria and Angola</strong></td><td class="crd-td">16,79M</td><td class="crd-td">31,67M</td><td class="crd-td">24,35M</td><td class="crd-td">23,92M</td><td class="crd-td">20,45M</td><td class="crd-td">21,6M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional and aggregate population trajectory across six benchmark years from 1500AD to 1880AD.</figcaption>
</figure>

## Senegambia: Wolof Kingdoms, Kaabu and Saint-Louis

In the north-western savanna corridor of the Wolof states, Futa Jallon and Kaabu (365.716 km², 48 assessed settlements), population climbed from 668k in 1500AD to 1,3M in 1700AD, dipped modestly to 1,16M in 1770AD and 1,18M in 1850AD during marabout conflicts and slave raiding, and rebounded past its 1700AD peak to 1,4M by 1880AD (3,83 persons per km²). Unlike the Bights, Senegambia experienced an earlier peak in Atlantic slave exports during the late seventeenth and early eighteenth centuries and pivoted relatively early to gum arabic, hides and groundnuts [@Curtin1969AtlanticCensus; @Havik2007PortOfGeba].

Royal capitals of the Wolof and Serer states remained modest towns of 3k to 6k inhabitants - Diakhao in Sine (5,74k in 1750), Lambaye in Baol (5,46k in 1750), Mboul in Cayor (5,16k in 1820), Linguère in Jolof (5,12k in 1500) and Kahone in Saloum (5,94k in 1859) - supported by dense millet-growing village rings. Further south along the Gambia and Geba estuaries, Portuguese-African Luso-African trading enclaves at Geba, Cacheu and Bissau linked coastal shipping with the Mandinka empire of Kaabu, whose fortified capital Kansala reached 13,65k residents in 1850 before its destruction in 1867 [@Havik2007PortOfGeba]. At the mouth of the Senegal River, the French entrepôt of Saint-Louis grew steadily from 1,64k in 1700AD and 5.020 in 1779 to 11,85k in 1837 and 15.980 in the 1876 communal census, anchoring the four coastal communes as Dakar remained a nascent port of 1k to 3k residents until the 1880s.

## Upper Guinea, Sierra Leone and Liberia

South of Kaabu across Sierra Leone, the Grain Coast and early Liberia (410.720 km², 32 assessed settlements), population nearly doubled from 716k in 1500AD to 1,36M in 1700AD, held remarkably steady through the eighteenth century (1,34M in 1770AD, 1,48M in 1800AD) and reached 1,54M by 1880AD (3,75 persons per km²). Although Upper Guinea ports shipped captives from the Rio Pongo, Sherbro and Cape Mount, mountainous Futa Jallon and dense rainforest valleys sheltered inland rice-farming communities while Mande long-distance *dyula* merchants integrated coastal kola, salt and cattle routes [@Howard1900MandeIdentity; @Havik2007PortOfGeba].

Within Futa Jallon and the upper Niger headwaters, Fulbe and Mandinka commercial hubs expanded steadily into the nineteenth century: Timbo rose from 4,86k in 1750 to 9,14k in 1818, Labé served the northern plateau, Kankan grew along the Milo River and Falaba anchored northern Sierra Leone [@Howard1900MandeIdentity]. On the coast, British abolitionist settlement at Freetown (founded in 1787 and 1792 with 1.190 Nova Scotian settlers) swelled rapidly through Liberated African arrivals from Royal Navy anti-slavery patrols, reaching 5.643 in 1822, 14.896 in 1844, 18.035 in 1860 and 21.931 by 1881. Further east along the Pepper Coast, Monrovia expanded more modestly from 1.240 inhabitants in 1828 to 3.840 in 1870 after Liberian independence in 1847.

## Asante, Fante and the Gold and Baule Coast

Across the Akan forest, the Pra-Ofin goldfields, northern Gonja-Dagomba and the Ivory Coast littoral (353.087 km², 42 assessed settlements), population rose from 1,64M in 1500AD to 3,13M in 1700AD, before declining sharply during the eighteenth-century shift from gold to captive exports: 2,27M in 1770AD, 2,17M in 1800AD and 1,78M in 1850AD, recovering slightly to 1,81M by 1880AD (5,12 persons per km²). Before 1700AD, dense urban earthworks at Adansemanso (6,13k in 1500), Asantemanso, Bono Manso and Begho reflected gold-dust commerce linking Akan forest polities with Mande caravans [@Weiskel2000ThePrecolonial; @Green2015AfricanKingdoms].

When Denkyira (Abankeseso, 13,85k in 1695) fell to Osei Tutu's Asante Confederation in 1701, Kumasi surged from 12,4k in 1701 to 25k in 1817 and 27,5k in 1820, before British-Asante wars pulled the capital down to 15,2k by 1874. Along the coast, the Fante confederated towns of Mankessim, Elmina (15,2k in 1700, 12,8k in 1850), Cape Coast (5k in 1680, 10,2k in 1860) and Accra (5k in 1650, 12,4k in 1850) operated as commercial city-states balancing Dutch, British and Danish fort garrisons with inland Asante caravans [@Kirkgreene2001ComparativeStudy]. North of the forest, the Gonja entrepôt of Salaga swelled as the premier kola-and-livestock market of the central Volta basin, rising from 8,42k in 1750 to 38,6k in 1850 before civil conflict reduced it to 13,5k in 1876; westward across the Comoé, Baule communities under Queen Pokou colonised central Ivory Coast around Kong and Bondoukou [@Weiskel2000ThePrecolonial].

## Dahomey and the Slave Coast Corridor

The narrow Bight of Benin corridor covering Allada, Ouidah, Dahomey, Togo and the western Lagos Lagoon (144.180 km², 26 assessed settlements) carried one of the highest densities in early modern Africa: 1,29M in 1500AD (8,95 persons per km²), rising to 2,36M in 1700AD before heavy eighteenth-century slave exports reduced it to 1,69M in 1770AD, 1,59M in 1800AD and 1,49M in 1880AD (10,32 persons per km²). Over the seventeenth century, coastal trade concentrated around Allada (30k in 1668) and the Hueda kingdom's capital of Savi (77,5k in 1727), fed by intensive lagoon agriculture and dense rural compounds [@Monroe2014DahomeySlavery; @Green2015AfricanKingdoms].

Dahomey's military expansion under King Agaja shattered that coastal order, sacking Allada in 1724 (falling to 18,4k and 6,84k by 1800) and destroying Savi in 1727 (dropping to 30k by 1750). Trade re-anchored at Ouidah (30k in 1720, 11,4k in 1750, 20k in 1863) and the inland royal plateau of Abomey, which expanded from 12,4k in 1680 to 28,4k in 1800 and 30k in 1851, ringed by royal plantation villages worked by war captives [@Monroe2014DahomeySlavery]. As British naval patrols tightened after 1807, eastern lagoon ports captured clandestine and then palm-oil commerce: Porto-Novo rose from 8,42k in 1700 to 26,4k in 1885, Badagry grew to 11,4k in 1850 and island Lagos surged from 5,84k in 1700 and 12,4k in 1800 to 25.083 in 1866 and 37.452 in 1881 [@Mac1900SlaveryAnd].

## Oyo Collapse, Yoruba Urban Restructuring and the Kingdom of Benin

Oyo, Yorubaland and the Kingdom of Benin (190.336 km², 34 assessed settlements) experienced the most dramatic urban-rural restructuring anywhere in Atlantic Africa. Regional population surged from 2,19M in 1500AD to 5,13M in 1700AD (26,95 persons per km²) under Imperial Oyo's cavalry hegemony and Benin's forest kingdom, then fell sharply to 3,31M in 1770AD, 3,04M in 1800AD and 2,09M in 1850AD during the collapse of Old Oyo and the prolonged Yoruba civil wars, edging up to 2,18M by 1880AD (11,45 persons per km²) [@Law1977OyoEmpire; @Ogundiran2009OyoFrontier].

At its late eighteenth-century zenith, Old Oyo (Oyo-Ile) encompassed nearly 50 km² within its triple concentric walls and held approximately 99.846 inhabitants in 1780 [@AgbajeWilliam1990NewsAnd; @Law1977OyoEmpire], sustained by frontier craft and agrarian colonies such as Ede-Ile [@Ogundiran2009OyoFrontier] and earlier royal sites like Igboho (34,2k in 1560). Political crisis, Afonja's revolt at Ilorin and Sokoto Fulbe jihadist intervention drove Old Oyo down to 64.099 in 1826 and 28,4k in 1835 ahead of its final abandonment around 1836 [@Law1977OyoEmpire]. That northern collapse triggered massive southward urban concentration: displaced Oyo and Egba populations flooded into defensive war camps and walled forest towns. Ibadan exploded to an estimated 200k military-and-refugee peak in 1850 (settling at 65k to 100k between 1851 and 1870), Abeokuta rose from 80k at its 1829–1830 foundation to 100k in 1861, Ilorin grew from 11,2k in 1750 to 85k in 1880, Ogbomosho reached 50k in 1856, Iwo 36,4k, Oshogbo 34,6k, New Oyo 38,4k and Ijebu Ode 38,4k, while sacred Ile-Ife retained 52,4k to 55k residents [@Law1977OyoEmpire; @AgbajeWilliam1990NewsAnd]. Across the Niger-Nupe borderland, Raba peaked at 46,2k in 1840 before Bida superseded it at 58,4k in 1885; eastward, Benin City - whose early sixteenth-century bronze workshops relied on German Rhineland brass imported via Atlantic merchants - peaked at 52,8k in 1602 before contracting through seventeenth-century succession wars to 28,6k by 1820 [@Roese1984DasKonigreich; @Skowronek2023GermanBrass].

## Niger Delta, Cross River and the Cameroon Grassfields

East of the Benin River across the Niger Delta, Igbo-Ibibio uplands, Cross River and Benue fringe (217.879 km², 34 assessed settlements), population reached the highest density in the entire study area: rising from 2,29M in 1500AD to 5,42M in 1700AD (24,88 persons per km²) before intense Bight of Biafra slave departures compressed numbers to 3,56M in 1770AD, 3,34M in 1800AD and 2,81M in 1850AD, rebounding to 3,01M in 1880AD (13,81 persons per km²) [@Lovejoy2012Transformations; @Curtin1969AtlanticCensus]. Unlike Dahomey or Oyo, the Bight of Biafra relied not on large territorial armies but on decentralised Delta canoe-house city-states - Bonny (rising from 2k in 1508 to 9,42k in 1862), Kalabari, Nembe and Old Calabar (3,2k in 1650 to 18,2k in 1885) - linked inland via the Arochukwu oracle and merchant network [@Green2015AfricanKingdoms]. Along the northern Benue-Plateau margin, river ports such as Umaisha (24,65k in 1833) and Wukari met expanding Sokoto emirate towns like Bauchi (30k in 1866).

Adjacent to Cross River, Bamum, the Cameroon Grassfields and the Biafra-Adamawa interior (550.568 km², 17 assessed settlements) grew from 1,08M in 1500AD to 1,96M in 1700AD, dipped gently to 1,74M in 1770AD and 1,69M in 1850AD and stood at 1,74M in 1880AD (3,16 persons per km²). High-altitude volcanic soils in the Grassfields supported dense fonships and the Kingdom of Bamum, whose capital Foumban expanded steadily from 4,86k in 1500AD to 14,2k in 1800AD and 22k in 1885AD, while coastal Douala expanded from 2,8k in 1650AD to 18,6k in 1884AD.

## Loango, Kongo, Portuguese Angola and the Ovimbundu Plateau

South of Cameroon, three contiguous West-Central African sub-regions sustained nearly four centuries of continuous Atlantic engagement. In Loango, Teke-Makoko and the Gabon littoral (578.369 km², 14 assessed settlements), light rainforest and savanna soils held modest populations rising from 554k in 1500AD to 927k in 1700AD before eighteenth-century French and British slave trade along the Loango Coast depressed numbers to 836k in 1770AD, 780k in 1800AD, 678k in 1850AD and 687k in 1880AD (1,19 persons per km²). Loango's royal seat Buali peaked at 18,5k in 1668 and declined to 3,2k by 1883 as trade shifted toward Cabinda (8,6k in 1783) and riverine Congo hubs such as Bolobo [@Thornton1977KongoDemography].

Immediately south of the Congo River across Kongo, Ndongo, Matamba and Portuguese Angola (587.687 km², 21 assessed settlements), population moved from 1,02M in 1500AD to 1,57M in 1700AD, declined to 1,28M in 1770AD and 1,31M in 1850AD and recovered to 1,46M by 1880AD (2,48 persons per km²). Mbanza Congo (São Salvador) peaked near 52k in 1550AD and held 38,5k in 1648 before the post-Mbwila civil wars and 1678 sack reduced the city to 2,5k, recovering partially to 12k in 1709 under Dona Beatriz Kimpa Vita's Antonian movement before shrinking to 3,6k by 1885AD [@Thornton1977KongoDemography; @Ngaba2026BercoEducacao; @Pessoa2025MitosOrigem]. Meanwhile, coastal Soyo reached 15,2k in 1705, Ndongo's royal capital Kabasa peaked at 24k in 1585 before Portuguese campaigns forced Queen Njinga eastward to Santa Maria de Matamba (14,2k in 1660), and Portuguese Luanda expanded from 2,8k in 1580 to 17,8k by 1885 [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao].

On the southern Angolan and Ovimbundu plateau (931.287 km², 18 assessed settlements), population grew from 995k in 1500AD to 1,59M in 1700AD, eased to 1,29M in 1770AD and 1,28M in 1850AD and rebounded to 1,47M in 1880AD (1,57 persons per km²). While coastal Benguela stayed a compact port of 2,4k to 4,6k residents between 1777 and 1885 [@Ferreira2017TheSuppression], upland Ovimbundu kingdoms at Bailundo and Viye (Cuito, 11,8k in 1875) built long-distance caravan networks connecting southern Angola deep into Katanga and Barotseland.

## Inner Congo, Kuba and the Luba-Lunda Commonwealth

East of the Pool Malebo rapids lay two vast interior sub-regions comprising 38,4% of the study area yet largely shielded from direct European observation until the nineteenth century: the Kuba Kingdom, Inner Congo and Ubangi basin (1,37M km², 7 assessed settlements) and the Luba Empire, Lunda Commonwealth and Kazembe (1,33M km², 8 assessed settlements). In Kuba and the central Congo forest, population rose from 2,57M in 1500AD to 3,94M in 1700AD as cassava spread along Bobangi river corridors, before late slave, ivory and rubber pressures pushed numbers down to 3,21M in 1770AD, 3,11M in 1800AD and 2,45M in 1850AD, standing at 2,48M in 1880AD (1,81 persons per km²) [@Coloniales1920CongoRevue; @Congostijdlijn2019GeschiedenisVan]. Kuba's capital Nsheng grew steadily from 5,2k in 1680 to 10,8k in 1850.

Across the southern savanna of Katanga and Kasai, the Luba-Lunda-Kazembe commonwealth rose from 1,78M in 1500AD to 2,97M in 1700AD and maintained 2,67M in 1770AD and 2,72M in 1800AD before Ovimbundu, Swahili-Arab and Chokwe ivory-and-slave caravans eroded numbers to 2,3M in 1850AD and 2,35M in 1880AD (1,77 persons per km²). The Lunda capital Musumba grew from 12k in 1700 to 25k in 1846 before Chokwe incursions lowered it to 14k in 1880, while eastern Lualaba and Katanga hubs expanded rapidly during late nineteenth-century caravan trade: Nyangwe reached 15,2k, Bunkeya 18,5k and Kasongo 28k by 1885AD [@Coloniales1920CongoRevue; @Alencastro2018PoliticaDos; @Avila2022IndependenciaConflito].

# Limitations

Three structural uncertainties bound these reconstructions. First, archival visibility tilts sharply toward Atlantic ports and literate mission or colonial enclaves. While Portuguese Angolan *mapas da população*, French Senegal commune rolls and coastal fort diaries supply dense serial counts along the littoral [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao; @Havik2007PortOfGeba], inner Congo, Ubangi and Luba-Lunda retain only 15 assessed towns across 2,7M km² prior to 1885AD [@Coloniales1920CongoRevue]. Kriging covariates mitigate that recording imbalance, yet rural population fluctuations in the central rainforest remain wider than along the Gulf of Guinea.

Second, pre-1850AD regional totals rely on calibrating backward from twentieth-century colonial census baselines alongside documented slave-export intensities and crop diffusion [@Curtin1969AtlanticCensus; @Lovejoy2012Transformations; @Thornton1977KongoDemography]. Even with pycnophylactic constraints, uncertainty margins around the 1700AD peak (31,67M) and the scale of the eighteenth-century contraction (-23,1% between 1700AD and 1770AD) exceed ±15% in interior basins where mortality multipliers during raiding wars remain debated.

Third, city-proper definitions in rapidly shifting war-camp and compound cities require careful separation of permanent inhabitants from seasonal traders and wartime refugees. Peaks such as Ibadan's 200k estimate in 1850 or Savi's 77,5k count in 1727 reflect acute geopolitical crowding ahead of or immediately following major military shocks [@Law1977OyoEmpire; @Monroe2014DahomeySlavery], whereas long-run settled core populations in the same urban footprints were typically 25% to 40% lower.

# Conclusion

Between 1500AD and 1880AD, Atlantic West Africa, Equatoria and Angola moved through a complete cycle of early modern agrarian expansion, Atlantic slave-trade contraction and late nineteenth-century commercial restructuring. Rising from 16,79M inhabitants in 1500AD to 31,67M in 1700AD, total population fell across the peak slaving century to 24,35M in 1770AD, 23,92M in 1800AD, 20,45M in 1850AD and 19,66M in 1860AD before recovering to 21,6M by 1880AD. Throughout those swings, the Niger Delta, Oyo-Yorubaland and Dahomey preserved densities above 10 persons per km², Senegambia and Sierra Leone rebounded earliest through post-abolition trade, and Kongo, Angola and Luba-Lunda absorbed deep interior demographic shocks down to the eve of colonial partition. Grounded in 3.424 individually assessed settlements, Matérn kriging across 6.431 Voronoi catchments and mass-conserving subadministrative polygons, NICETHI supplies a spatially consistent baseline for twentieth-century West and Central African population history.

# Appendix

## Sub-Regional Population Density and Territorial Shares

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all 12 sub-regions at the six benchmark years from 1500AD to 1880AD, highlighting the persistent six- to tenfold density gradient separating the Niger Delta, Yorubaland and Dahomey from Loango, inner Congo and the Luba-Lunda savanna. Table \ref{tab:shares-appendix} complements those figures with each sub-region's percentage share of the total regional population.

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wolof States, Futa Jallon and Kaabu</strong></td><td class="crd-td">1,83</td><td class="crd-td">3,56</td><td class="crd-td">3,16</td><td class="crd-td">3,32</td><td class="crd-td">3,23</td><td class="crd-td">3,83</td></tr>
<tr><td class="crd-td"><strong>Sierra Leone, Grain Coast and Early Liberia</strong></td><td class="crd-td">1,74</td><td class="crd-td">3,31</td><td class="crd-td">3,27</td><td class="crd-td">3,59</td><td class="crd-td">3,33</td><td class="crd-td">3,75</td></tr>
<tr><td class="crd-td"><strong>Asante Empire, Fante and Gold Coast</strong></td><td class="crd-td">4,64</td><td class="crd-td">8,86</td><td class="crd-td">6,43</td><td class="crd-td">6,14</td><td class="crd-td">5,03</td><td class="crd-td">5,12</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Dahomey, Allada and Ewe Littoral</strong></td><td class="crd-td">8,95</td><td class="crd-td">16,37</td><td class="crd-td">11,72</td><td class="crd-td">11,04</td><td class="crd-td">10,46</td><td class="crd-td">10,32</td></tr>
<tr><td class="crd-td"><strong>Oyo Empire, Yorubaland and Kingdom of Benin</strong></td><td class="crd-td">11,52</td><td class="crd-td">26,94</td><td class="crd-td">17,39</td><td class="crd-td">15,96</td><td class="crd-td">10,98</td><td class="crd-td">11,45</td></tr>
<tr><td class="crd-td"><strong>Niger Delta States, Arochukwu and Cross River</strong></td><td class="crd-td">10,52</td><td class="crd-td">24,89</td><td class="crd-td">16,35</td><td class="crd-td">15,33</td><td class="crd-td">12,91</td><td class="crd-td">13,81</td></tr>
<tr><td class="crd-td"><strong>Bamum, Cameroon Grassfields and Biafra Coast</strong></td><td class="crd-td">1,96</td><td class="crd-td">3,57</td><td class="crd-td">3,17</td><td class="crd-td">3,35</td><td class="crd-td">3,07</td><td class="crd-td">3,16</td></tr>
<tr><td class="crd-td"><strong>Loango, Teke-Makoko and Gabon Littoral</strong></td><td class="crd-td">0,96</td><td class="crd-td">1,6</td><td class="crd-td">1,45</td><td class="crd-td">1,35</td><td class="crd-td">1,17</td><td class="crd-td">1,19</td></tr>
<tr><td class="crd-td"><strong>Kongo, Ndongo, Matamba and Portuguese Angola</strong></td><td class="crd-td">1,73</td><td class="crd-td">2,68</td><td class="crd-td">2,18</td><td class="crd-td">2,25</td><td class="crd-td">2,22</td><td class="crd-td">2,48</td></tr>
<tr><td class="crd-td"><strong>Ovimbundu Kingdoms, Benguela and S. Angola</strong></td><td class="crd-td">1,07</td><td class="crd-td">1,71</td><td class="crd-td">1,38</td><td class="crd-td">1,42</td><td class="crd-td">1,38</td><td class="crd-td">1,57</td></tr>
<tr><td class="crd-td"><strong>Kuba Kingdom, Inner Congo and Ubangi</strong></td><td class="crd-td">1,88</td><td class="crd-td">2,89</td><td class="crd-td">2,35</td><td class="crd-td">2,28</td><td class="crd-td">1,8</td><td class="crd-td">1,81</td></tr>
<tr><td class="crd-td"><strong>Luba Empire, Lunda Commonwealth and Kazembe</strong></td><td class="crd-td">1,34</td><td class="crd-td">2,23</td><td class="crd-td">2,01</td><td class="crd-td">2,05</td><td class="crd-td">1,73</td><td class="crd-td">1,77</td></tr>
<tr><td class="crd-td"><strong>Mean Regional Density</strong></td><td class="crd-td">2,39</td><td class="crd-td">4,51</td><td class="crd-td">3,47</td><td class="crd-td">3,41</td><td class="crd-td">2,91</td><td class="crd-td">3,07</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across the twelve historical sub-regions from 1500AD to 1880AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD (%)</th><th class="crd-th">1700AD (%)</th><th class="crd-th">1770AD (%)</th><th class="crd-th">1800AD (%)</th><th class="crd-th">1850AD (%)</th><th class="crd-th">1880AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wolof States, Futa Jallon and Kaabu</strong></td><td class="crd-td">4</td><td class="crd-td">4,1</td><td class="crd-td">4,7</td><td class="crd-td">5,1</td><td class="crd-td">5,8</td><td class="crd-td">6,5</td></tr>
<tr><td class="crd-td"><strong>Sierra Leone, Grain Coast and Early Liberia</strong></td><td class="crd-td">4,3</td><td class="crd-td">4,3</td><td class="crd-td">5,5</td><td class="crd-td">6,2</td><td class="crd-td">6,7</td><td class="crd-td">7,1</td></tr>
<tr><td class="crd-td"><strong>Asante Empire, Fante and Gold Coast</strong></td><td class="crd-td">9,8</td><td class="crd-td">9,9</td><td class="crd-td">9,3</td><td class="crd-td">9,1</td><td class="crd-td">8,7</td><td class="crd-td">8,4</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Dahomey, Allada and Ewe Littoral</strong></td><td class="crd-td">7,7</td><td class="crd-td">7,5</td><td class="crd-td">6,9</td><td class="crd-td">6,7</td><td class="crd-td">7,4</td><td class="crd-td">6,9</td></tr>
<tr><td class="crd-td"><strong>Oyo Empire, Yorubaland and Kingdom of Benin</strong></td><td class="crd-td">13,1</td><td class="crd-td">16,2</td><td class="crd-td">13,6</td><td class="crd-td">12,7</td><td class="crd-td">10,2</td><td class="crd-td">10,1</td></tr>
<tr><td class="crd-td"><strong>Niger Delta States, Arochukwu and Cross River</strong></td><td class="crd-td">13,7</td><td class="crd-td">17,1</td><td class="crd-td">14,6</td><td class="crd-td">14</td><td class="crd-td">13,8</td><td class="crd-td">13,9</td></tr>
<tr><td class="crd-td"><strong>Bamum, Cameroon Grassfields and Biafra Coast</strong></td><td class="crd-td">6,4</td><td class="crd-td">6,2</td><td class="crd-td">7,2</td><td class="crd-td">7,7</td><td class="crd-td">8,3</td><td class="crd-td">8,1</td></tr>
<tr><td class="crd-td"><strong>Loango, Teke-Makoko and Gabon Littoral</strong></td><td class="crd-td">3,3</td><td class="crd-td">2,9</td><td class="crd-td">3,4</td><td class="crd-td">3,3</td><td class="crd-td">3,3</td><td class="crd-td">3,2</td></tr>
<tr><td class="crd-td"><strong>Kongo, Ndongo, Matamba and Portuguese Angola</strong></td><td class="crd-td">6,1</td><td class="crd-td">5</td><td class="crd-td">5,3</td><td class="crd-td">5,5</td><td class="crd-td">6,4</td><td class="crd-td">6,8</td></tr>
<tr><td class="crd-td"><strong>Ovimbundu Kingdoms, Benguela and S. Angola</strong></td><td class="crd-td">5,9</td><td class="crd-td">5</td><td class="crd-td">5,3</td><td class="crd-td">5,5</td><td class="crd-td">6,3</td><td class="crd-td">6,8</td></tr>
<tr><td class="crd-td"><strong>Kuba Kingdom, Inner Congo and Ubangi</strong></td><td class="crd-td">15,3</td><td class="crd-td">12,5</td><td class="crd-td">13,2</td><td class="crd-td">13</td><td class="crd-td">12</td><td class="crd-td">11,5</td></tr>
<tr><td class="crd-td"><strong>Luba Empire, Lunda Commonwealth and Kazembe</strong></td><td class="crd-td">10,6</td><td class="crd-td">9,4</td><td class="crd-td">10,9</td><td class="crd-td">11,4</td><td class="crd-td">11,2</td><td class="crd-td">10,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of regional population across the twelve sub-regions from 1500AD to 1880AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Historical toponyms follow modern scholarly Romanisation across West and Central African orthographies (such as Mbanza Congo, Ouidah, Kumasi and Old Oyo), while preserving attested Portuguese and French colonial administrative spellings in archival census tables (such as Golungo Alto and Saint-Louis). All population benchmarks reflect resident populations within fixed sub-regional polygons so shifts between 1500AD and 1880AD measure genuine demographic change rather than boundary re-drawing.
