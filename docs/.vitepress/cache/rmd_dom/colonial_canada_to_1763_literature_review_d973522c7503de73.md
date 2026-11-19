---
title: "Colonial Canada until the Seven Years' War"
subtitle: "CENTAUR-II: New France Censuses, Acadia, Newfoundland and Greenland, 1500 to 1763AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1763_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1763_spatial.png"
hero_caption: "Sub-regional areal mask and 79 catalogued settlements across 8 territories of New France, British Atlantic colonies, Rupert's Land and Greenland, 1500 to 1763AD."
hero_label: "fig:hero-colonial-canada-to-1763"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the population of Canada and Greenland from 1500 to the 1763AD Treaty of Paris under Operation Viscount CENTAUR-II. Across eight historical masks covering 10.983.153 km2 (324.487 5-arcminute pixels), regional population fell from 346,5k in 1500AD and 333,55k in 1600AD to a trough of 263,12k in 1666AD following the seventeenth-century collapse of St. Lawrence Iroquoian and Huron-Wendat confederacies [@trigger1985natives; @warrick2008population]. Subsequent French *habitants* natural increase in the St. Lawrence seigneuries, Acadian and British Newfoundland fisheries and steady interior Indigenous persistence restored total numbers to 269,75k in 1700AD, 303,75k in 1739AD and 330,51k in 1763AD [@statcan1876censuses; @prins1996mikmaq]. Anchored to Jean Talon's 1666AD nominal roll (3.215 French settlers) and succeeding New France, Acadian and Newfoundland returns in Volume IV of *Censuses of Canada 1665 to 1871* [@statcan1876censuses], the series integrates French-British colonial enumerations with explicit First Nations, Inuit and Greenlandic Kalaallit baselines across the continent [@ray1974indians; @boyd1999coming; @gad1973history].

# Background

Northern North America between 1500AD and 1763AD exhibited sharper regional divergence than the Atlantic Thirteen Colonies. In the sixteenth century, dense maize-farming nations occupied the lower Great Lakes and St. Lawrence valley: Warrick's archaeological synthesis of longhouse villages places Huron-Wendat, Tionontati and Neutral populations near 71k-74k prior to 1634AD, while St. Lawrence Iroquoians inhabited Stadacona and Hochelaga in 1535AD [@warrick2008population; @tremblay2006st]. Between 1600AD and 1650AD, St. Lawrence Iroquoian disappearance, European smallpox and measles epidemics (1634-1640AD) and Haudenosaunee Beaver Wars campaigns shattered Huron-Wendat villages, reducing southern Ontario from 74k in 1600AD to 11k by 1666AD [@trigger1985natives; @warrick2008population].

French colonisation began at Port-Royal (1605AD) and Québec (1608AD) with small fur-trade garrisons before Royal Province administration under Intendant Jean Talon inaugurated systematic nominal censuses in 1666AD [@statcan1876censuses]. High marital fertility along the St. Lawrence seigneuries raised New France's settler population twenty-fold from 3.215 in 1666AD to 66,5k by 1763AD, even as the 1755-1762AD *Grand Dérangement* halved Acadia's population and Anishinaabe groups reoccupied the *Pays d'en Haut* [@statcan1876censuses; @prins1996mikmaq; @schmalz1991ojibwa]. Beyond the St. Lawrence and Maritimes, Indigenous nations across Rupert's Land, the Western Prairies, the Mackenzie basin and the Pacific Northwest coast remained demographically autonomous prior to late eighteenth-century smallpox pandemics [@ray1974indians; @boyd1999coming; @harris1994voices].

# Methodology

## Eight-Mask Territorial Partition and Census Integration

The module partitions 10.983.153 km2 into eight masks: (1) New France Governments of Québec, Trois-Rivières and Montréal (308.558 km2); (2) Acadia, Nova Scotia, Île Royale and Île Saint-Jean (122.690 km2); (3) Newfoundland, Labrador and Saint-Pierre (361.496 km2); (4) Pays d'en Haut and Great Lakes posts in southern Ontario (207.890 km2); (5) Rupert's Land and Hudson's Bay Company factories (4.157.090 km2); (6) Western Prairies and La Vérendrye Saskatchewan posts (1.267.149 km2); (7) Pacific Northwest Coast, Yukon and Mackenzie Dene nations (2.595.262 km2); and (8) Danish-Moravian Greenland missions and independent Kalaallit (1.963.018 km2).

For New France, enumerated settler figures from *Censuses of Canada* Vol. IV (3.215 in 1666AD; 9.677 in 1681AD; 15.800 in 1700AD; 18.119 in 1713AD; 42.701 in 1739AD; 55.009 in 1754AD; and 66.500 in 1763AD) are summed with unenumerated Algonquian, Innu and mission-village Indigenous populations (4,8k-5k) [@statcan1876censuses; @trigger1985natives]. Acadia combines Acadian nominal rolls (441 in 1671AD; 885 in 1686AD; 1.484 in 1701AD; 1.773 in 1714AD) and Sieur de La Roque's 1752AD survey (4.325 on Île Royale and 2.233 on Île Saint-Jean) with Mi'kmaq and Wolastoqiyik estimates [@statcan1876censuses; @prins1996mikmaq; @miller1976abnakis]. Newfoundland blends Governor winter returns (1.500 English in 1698AD; 3.295 in 1716AD; 6.900 in 1750AD; 13.112 in 1763AD) with Beothuk and Labrador Inuit baselines [@marshall1996history]. Greenland tracks Danish Godthåb (1721/1728AD) and Moravian Neu-Herrnhut (1733AD) mission registers alongside the 1733-1734AD smallpox shock [@gad1971history; @gad1973history].

## Non-Stationary Matérn Kriging Calibration

Spatial allocation employs `sites_p3k14c_na` Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging surfaces ($\tau_1 = 1,25$, $\tau_2 = 2,6$) conditioned on river-corridor seigneurial settlement in the St. Lawrence and coastal fisheries in Atlantic Canada [@paciorek2006spatial].

# Testing and Validation

Internal arithmetic checks verify exact sub-regional additivity across all nine benchmark years from 1500AD to 1763AD (`346,5k` to `330,51k`), matching the 1763AD handoff into `colonial_canada_to_1867` within 200 persons (`330.512` vs `330.312` owing to post-1763 Labrador-Newfoundland boundary rounding). Table \ref{tab:validation-1763} reconciles enumerated New France, Acadian and Newfoundland colonial counts against total module estimates.

<figure class="crd-table-figure" id="tab:validation-1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">NF Settler</th><th class="crd-th">NF Total</th><th class="crd-th">Acadia Total</th><th class="crd-th">NL Return</th><th class="crd-th">NL Total</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1666AD</strong></td><td class="crd-td">3.215</td><td class="crd-td">8.015</td><td class="crd-td">6.900</td><td class="crd-td">-</td><td class="crd-td">5.400</td><td class="crd-td">263.115</td></tr>
<tr><td class="crd-td"><strong>1681AD</strong></td><td class="crd-td">9.677</td><td class="crd-td">14.477</td><td class="crd-td">6.550</td><td class="crd-td">1.500 (1698)</td><td class="crd-td">5.850</td><td class="crd-td">266.877</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">15.800</td><td class="crd-td">20.300</td><td class="crd-td">6.650</td><td class="crd-td">-</td><td class="crd-td">5.800</td><td class="crd-td">269.750</td></tr>
<tr><td class="crd-td"><strong>1713AD</strong></td><td class="crd-td">18.119</td><td class="crd-td">22.619</td><td class="crd-td">7.173</td><td class="crd-td">3.295 (1716)</td><td class="crd-td">6.400</td><td class="crd-td">270.392</td></tr>
<tr><td class="crd-td"><strong>1739AD</strong></td><td class="crd-td">42.701</td><td class="crd-td">47.501</td><td class="crd-td">18.400</td><td class="crd-td">6.900 (1750)</td><td class="crd-td">8.150</td><td class="crd-td">303.751</td></tr>
<tr><td class="crd-td"><strong>1754AD</strong></td><td class="crd-td">55.009</td><td class="crd-td">60.009</td><td class="crd-td">30.900</td><td class="crd-td">-</td><td class="crd-td">10.250</td><td class="crd-td">329.259</td></tr>
<tr><td class="crd-td"><strong>1763AD</strong></td><td class="crd-td">66.500</td><td class="crd-td">71.500</td><td class="crd-td">16.500</td><td class="crd-td">13.112</td><td class="crd-td">16.112</td><td class="crd-td">330.512</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of New France, Acadian and Newfoundland colonial census counts against total module estimates, 1666 to 1763AD.</figcaption>
</figure>

# Results

## Seventeenth-Century Indigenous Contraction and St. Lawrence Growth

Between 1500AD and 1666AD, continental totals declined by 24,1% from 346,5k to 263,12k, driven overwhelmingly by Southern Ontario (74k in 1600AD to 11k in 1666AD) and St. Lawrence Iroquoian dispersal (12,5k in 1500AD to 5,5k in 1600AD) (Figure \ref{fig:traj-cc1763}) [@warrick2008population; @tremblay2006st]. Meanwhile, the Pacific Northwest Coast, Yukon and Mackenzie basin retained the largest regional concentration (168k in 1500AD; 150k in 1763AD, or 45,4% of the northern total) [@boyd1999coming; @duff1964indian].

<figure class="crd-figure-block" id="fig:traj-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763/fig2_colonial_canada_to_1763_trajectory.png" alt="fig:traj-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across eight Canadian and Greenlandic sub-regions from 1500 to 1763AD.</figcaption>
</figure>

## Imperial Contests, Acadia and Greenland (1700 to 1763AD)

From 1700AD to 1763AD, rapid natural increase in New France (20,3k to 71,5k, raising its regional share from 7,5% to 21,6%), fortress construction at Louisbourg and British foundation of Halifax (1749AD) lifted total regional population to 330,51k (Table \ref{tab:regions-cc1763}, Figure \ref{fig:shares-cc1763}) [@statcan1876censuses]. Acadia's sharp reversal from 30,9k in 1754AD to 16,5k in 1763AD marks the British expulsion of roughly 11,5k Acadians and the fall of Louisbourg [@prins1996mikmaq]. In Greenland, the 1733-1734AD smallpox epidemic reduced total population from 8k in 1713AD to 5,5k in 1739AD before mission-area recovery to 6,6k in 1763AD [@gad1973history].

<figure class="crd-figure-block" id="fig:shares-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763/fig3_colonial_canada_to_1763_shares.png" alt="fig:shares-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across Canada and Greenland from 1500 to 1763AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1666AD</th><th class="crd-th">1700AD</th><th class="crd-th">1739AD</th><th class="crd-th">1754AD</th><th class="crd-th">1763AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. New France: Governments of Quebec, Trois-Rivieres and Montreal</strong></td><td class="crd-td">308.558</td><td class="crd-td">12,5k</td><td class="crd-td">5,5k</td><td class="crd-td">8k</td><td class="crd-td">20,3k</td><td class="crd-td">47,5k</td><td class="crd-td">60k</td><td class="crd-td">71,5k</td></tr>
<tr><td class="crd-td"><strong>2. Acadia, Nova Scotia, Ile Royale (Louisbourg) and Ile Saint-Jean</strong></td><td class="crd-td">122.690</td><td class="crd-td">16k</td><td class="crd-td">12k</td><td class="crd-td">6,9k</td><td class="crd-td">6,6k</td><td class="crd-td">18,4k</td><td class="crd-td">30,9k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>3. Newfoundland (Avalon and Plaisance), Labrador and Saint-Pierre</strong></td><td class="crd-td">361.496</td><td class="crd-td">6k</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td><td class="crd-td">8,2k</td><td class="crd-td">10,2k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>4. Pays d'en Haut and Great Lakes Fur-Trade Posts (Southern Ontario)</strong></td><td class="crd-td">207.890</td><td class="crd-td">71k</td><td class="crd-td">74k</td><td class="crd-td">11k</td><td class="crd-td">12,5k</td><td class="crd-td">14,5k</td><td class="crd-td">15,5k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>5. Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">4.157.090</td><td class="crd-td">24k</td><td class="crd-td">23,5k</td><td class="crd-td">22,5k</td><td class="crd-td">21,5k</td><td class="crd-td">20,5k</td><td class="crd-td">20k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>6. Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">1.267.149</td><td class="crd-td">42k</td><td class="crd-td">41k</td><td class="crd-td">39,5k</td><td class="crd-td">37k</td><td class="crd-td">35,2k</td><td class="crd-td">34,5k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>7. Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">2.595.262</td><td class="crd-td">168k</td><td class="crd-td">165k</td><td class="crd-td">162k</td><td class="crd-td">158k</td><td class="crd-td">154k</td><td class="crd-td">152k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>8. Greenland (Danish-Moravian Missions 1721-1763 and Independent Kalaallit)</strong></td><td class="crd-td">1.963.018</td><td class="crd-td">7k</td><td class="crd-td">7,5k</td><td class="crd-td">7,8k</td><td class="crd-td">8k</td><td class="crd-td">5,5k</td><td class="crd-td">6,1k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">10.983.153</td><td class="crd-td">346,5k</td><td class="crd-td">333,6k</td><td class="crd-td">263,1k</td><td class="crd-td">269,8k</td><td class="crd-td">303,8k</td><td class="crd-td">329,3k</td><td class="crd-td">330,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population benchmarks across Colonial Canada and Greenland, 1500 to 1763AD.</figcaption>
</figure>

# Limitations

Three uncertainties shape the 1500-1763AD series. First, pre-contact baselines across Rupert's Land, the Western Prairies and the Mackenzie-Pacific corridor depend on retrospective carrying-capacity and fur-trade account reconstructions carrying +/- 28% uncertainty bounds [@ray1974indians; @ubelaker1988north; @boyd1999coming]. Second, Newfoundland seasonal migratory fishermen (exceeding 10k summer crews) are excluded from permanent winter resident counts, creating seasonal volatility in St. John's and Plaisance [@statcan1876censuses]. Third, Mi'kmaq, Wolastoqiyik and Beothuk populations remain sparse in colonial parish rolls, requiring ethnohistorical adjustments alongside French and British enumerations [@prins1996mikmaq; @marshall1996history].

# Sources

<div id="refs"></div>
