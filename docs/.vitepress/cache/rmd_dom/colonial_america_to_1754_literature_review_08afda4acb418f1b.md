---
title: "Colonial America until the Seven Years' War"
subtitle: "CENTAUR-II: Thirteen Colonies, Spanish Borderlands, French Louisiana and Indigenous Nations, 1500AD to 1754AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1754_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1754_spatial.png"
hero_caption: "Sub-regional areal mask and 1.225 catalogued settlements across 22 territories of colonial North America from 1500AD to 1754AD."
hero_label: "fig:hero-colonial-america-to-1754"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the population of continental North America (excluding Canada and Greenland) and Bermuda from 1500AD to the outbreak of the Seven Years' War in 1754AD under CENTAUR-II. Across 22 historical territorial masks covering 9.157.164 km² (158.808 five-arcminute cells), total population declined from an Indigenous baseline of 2,8M (2.803.500) in 1500AD to 1,94M (1.937.600) in 1600AD and reached a post-epidemic nadir of 1,48M (1.484.647) in 1680AD before colonial natural increase and Atlantic migration lifted the aggregate to 2,43M (2.433.616) in 1754AD [@milner2010eastern; @ubelaker1988north; @uscensus1975historical].

Anchored strictly to U.S. Census Bureau Historical Statistics Series Z 1-19 for the Thirteen Colonies [@uscensus1975historical], colonial non-Indigenous numbers grew from 350 persons in Virginia in 1610AD to 50.368 in 1650AD, 250.888 in 1700AD and 1.170.760 in 1750AD (1.339.906 interpolated to 1754AD, or 1.382.686 including Bermuda, Spanish Florida, New Mexico, Texas, French Louisiana and Alaska) [@wells1975population; @gerhard1982north; @jones1979los]. Over the same two and a half centuries, Indigenous nations contracted from 2,8M in 1500AD to 1,05M (1.050.930) in 1754AD, shifting demographic gravity from interior Mississippian and Southwestern basins toward the Atlantic seaboard [@thornton1987american; @kelly2025spatiotemporal]. Intra-regional allocation uses Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 92.500 North American site-periods and 3.832 domestic catchments (166.545 horizon site records, regularised $\tau_1 = 1,35$, short range 44,17 km to 47,85 km [mean 47,23 km], regularised nugget-to-sill 0,04, WLS $R^2 = 0,9991$ to 0,9993) paired with 1.225 catalogued settlements out of 1.524 ledger candidates [@paciorek2006spatial].

# Background

## Two Overlapping Demographic Regimes

Population change across North America between 1500AD and 1754AD reflects two intersecting demographic processes: Old World epidemic mortality among Indigenous polities and sustained Euro-African settlement along the Atlantic, Chesapeake and Gulf-Mississippi corridors [@milner2010eastern; @ubelaker1988north; @wells1975population]. Before permanent English or French towns took root, sixteenth-century Spanish expeditions across Florida, the Southeast and the Lower Mississippi Valley introduced acute pathogens into densely settled Mississippian chiefdoms and Timucua-Apalachee provinces [@milner2010eastern; @thornton1987american].

Missionisation in Spanish Florida after 1565AD and in New Mexico from 1598AD concentrated sedentary communities around church compounds where smallpox, measles and forced labour accelerated seventeenth-century mortality [@gerhard1982north; @jones1979los]. Across the Atlantic seaboard, English, Dutch and Swedish footholds founded between 1607AD and 1682AD along Chesapeake Bay, New England and the Hudson-Delaware valleys suffered severe initial seasoning mortality before entering high-fertility expansion fuelled by freehold farming, indentured servitude and enslaved African imports [@uscensus1975historical; @wells1975population; @bridenbaugh1938cities].

## Institutional Contrasts and Disease Environments

Comparative work on colonial institutions stresses how land-tenure regimes, staple crops and maritime openness shaped long-term settlement density across European empires [@assenova2017revisiting]. New England townships distributed compact family allotments around meeting-house commons, fostering broad-based natural increase, low infant mortality and rapid town multiplication across coastal Massachusetts, Connecticut and Rhode Island [@greene1932american; @wells1975population].

By contrast, Chesapeake tobacco planters in Virginia and Maryland and rice-indigo estates in the South Carolina Lowcountry operated in warmer coastal plains where colonial malaria and yellow fever raised adult and newcomer death rates steeply [@bump2022colonialism; @wells1975population]. Skeletal and historical-mortality studies of colonial migrant cohorts and crowded port towns illustrate how nutritional stress, iron-deficiency frailty and urban disease penalties moderated natural growth in early Atlantic seaports even as rural frontier counties multiplied rapidly [@gurr2022health; @hens2019iron; @tripp2017insights; @tripp2023emergence].

## Correcting Series Z Seaboard Bias

Conventional compilations built solely around U.S. Census Bureau Series Z 1-19 treated colonial non-Indigenous returns in the thirteen British seaboard provinces as synonymous with North American demography [@uscensus1975historical; @greene1932american]. That omission erased more than two million Indigenous inhabitants in 1500AD and left Bermuda, Spanish Florida, New Mexico, Spanish Texas, French Louisiana, the Pays des Illinois, Trans-Appalachian confederacies, the Great Plains, the Far West and early-contact Alaska blank until federal annexation. CENTAUR-II resolves this gap by uniting Series Z 1-19 identically with explicit borderland and Indigenous sub-regional series across all 22 territorial masks [@ubelaker1988north; @gerhard1982north; @jones1979los].

# Methodology

## Territorial Partition and Composite Estimation

The module divides 9.157.164 km² (158.808 five-arcminute cells) into 22 historical territorial masks: thirteen British Atlantic provinces (New Hampshire, Massachusetts Bay including the District of Maine, Rhode Island, Connecticut, New York including Iroquois territory, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia), Bermuda, three Spanish northern provinces (Florida, New Mexico and Texas), French Louisiana-Illinois, three unceded Indigenous zones (Trans-Appalachian, Great Plains and Far West) and Alaska-Aleutians. At each benchmark year $t \in [1500, 1754]$, regional population $P_r(t)$ sums enumerated non-Indigenous settlers and enslaved residents $C_r(t)$ and estimated Indigenous population $I_r(t)$:

$$P_r(t) = C_r(t) + I_r(t)$$

For the thirteen British colonies across 1610AD to 1750AD, $C_r(t)$ matches Historical Statistics Series Z 1-19 identically, folding Plymouth and Maine into Massachusetts Bay (for instance, 506 Massachusetts plus 400 Maine plus 390 Plymouth in 1630AD = 1.296 colonial) [@uscensus1975historical; @wells1975population]. Values at 1754AD interpolate log-linearly between the 1750AD and 1760AD Series Z anchors so that every provincial total hands off smoothly into the 1754–1783AD colonial module.

Indigenous trajectories $I_r(t)$ bridge Kelly et al.'s pre-contact radiocarbon spatial baselines at 1500AD through Milner and Chaplin's eastern regional densities to Ubelaker's tribal and macro-regional curves [@kelly2025spatiotemporal; @milner2010eastern; @ubelaker1988north]. Spanish borderland provinces combine mission-village headcounts, *padrones* and *presidio* rosters from Gerhard and Jones [@gerhard1982north; @jones1979los], while French Louisiana and the Illinois Country pair early colonial post censuses with Lower Mississippi Indigenous estimates [@milner2010eastern; @ubelaker1988north].

## Non-Stationary Matérn Kriging Calibration

Spatial allocation inside the 22 territorial masks draws on the continental North American kriging domain, which aggregates 92.500 unique radiocarbon and archaeological site-periods (166.545 horizon site records; 14,15x over the 6.539 legacy baseline) across 3.832 domestic Voronoi catchments (15.517.215 km² or 15,52M km²; 2.562 active inhabited catchments, 66,86%; equivalent circular radius median 29,48 km and 90th percentile 41 km overall, or 29,31 km and 39,86 km active; diagnostic Voronoi radius median 29,78 km and 90th percentile 40,69 km) plus 251 cross-frontier conditioning catchments extending up to 300 km into northern Mexico, Russian Chukotka and Kamchatka, Cuba and the Bahamas across 493.687 valid continental cells (18.561.382 km² or 18,56M km², with 129.716 to 133.990 active inhabited non-wasteland cells across ten horizons from 13000BC to 1650AD) [@kelly2025spatiotemporal].

Following Freeman-Tukey variance stabilisation and WLS regression on five biophysical covariates (habitable land fraction, natural productivity index, ecozone terrain suitability, 13,5 km fluvial distance decay and smooth coastal proximity), residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@paciorek2006spatial]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,35$ across all ten horizons (raw 1,4834 to 1,6067, mean 1,5861; effective short range 44,17 to 47,85 km, mean 47,23 km) and $\tau_2 = 2,9025$ (2,9), with unregularised nugget-to-sill ratio 0 across all ten horizons and regularised nugget-to-sill 0,04 across all ten horizons. Within each colonial province, urban totals from 1.225 catalogued settlements (selected from 1.524 ledger candidates, with 299 duplicate aliases consolidated) condition local coastal and riverine gradients before subtracting settled urban cells to conserve rural totals inside each mask [@bridenbaugh1938cities; @bridenbaugh1955cities].

# Testing and Validation

Arithmetic and cross-boundary audits confirm exact parity between this module and U.S. Census Bureau Series Z 1-19 across all decennial steps from 1610AD to 1750AD, as well as zero-discrepancy continuity into the 1754–1783AD colonial module at the 1754AD boundary (2.433.616 total in both modules). Table \ref{tab:validation-1754} sets out the decomposition of Thirteen Colonies Series Z 1-19, non-Indigenous borderlands and Indigenous nations from 1500AD to 1754AD.

<figure class="crd-table-figure" id="tab:validation-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Series Z 1-19</th><th class="crd-th">Total Colonial</th><th class="crd-th">Indigenous Est.</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">-</td><td class="crd-td">0</td><td class="crd-td">2.803.500</td><td class="crd-td">2.803.500</td></tr>
<tr><td class="crd-td"><strong>1610AD</strong></td><td class="crd-td">350</td><td class="crd-td">1.503</td><td class="crd-td">1.857.300</td><td class="crd-td">1.858.803</td></tr>
<tr><td class="crd-td"><strong>1650AD</strong></td><td class="crd-td">50.368</td><td class="crd-td">56.968</td><td class="crd-td">1.507.200</td><td class="crd-td">1.564.168</td></tr>
<tr><td class="crd-td"><strong>1680AD</strong></td><td class="crd-td">151.507</td><td class="crd-td">161.397</td><td class="crd-td">1.323.250</td><td class="crd-td">1.484.647</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">250.888</td><td class="crd-td">263.420</td><td class="crd-td">1.229.170</td><td class="crd-td">1.492.590</td></tr>
<tr><td class="crd-td"><strong>1730AD</strong></td><td class="crd-td">629.445</td><td class="crd-td">658.095</td><td class="crd-td">1.119.670</td><td class="crd-td">1.777.765</td></tr>
<tr><td class="crd-td"><strong>1750AD</strong></td><td class="crd-td">1.170.760</td><td class="crd-td">1.210.280</td><td class="crd-td">1.061.560</td><td class="crd-td">2.271.840</td></tr>
<tr><td class="crd-td"><strong>1754AD</strong></td><td class="crd-td">1.339.906</td><td class="crd-td">1.382.686</td><td class="crd-td">1.050.930</td><td class="crd-td">2.433.616</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Thirteen Colonies Series Z 1-19 totals with non-Indigenous borderlands and Indigenous baselines, 1500AD to 1754AD.</figcaption>
</figure>

Across all ten Holocene horizons in the North American kriging domain, Table \ref{tab:kriging-1754} and Table \ref{tab:kriging-epochs-1754} document tightly bounded Matérn variogram fits. Residual $R^2$ spans 0,9991 to 0,9993 from the Palaeoindian-Early Archaic ($c_0 = 0,000013$) to the Protohistoric Contact Horizon ($c_0 = 0,000056$), with unregularised nugget-to-sill equal to 0 across all ten horizons (0,04 regularised) and active WLS coastal slopes rising from 0,0976 to 0,1084 at contact.

<figure class="crd-table-figure" id="tab:kriging-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic (13000 to 6000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000013</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0224</td><td class="crd-td">0,2834</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000 to 3000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000022</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0446</td><td class="crd-td">0,5207</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000 to 1000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000031</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,074</td><td class="crd-td">0,8289</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland and Formative (1000 to 200BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,00003</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0659</td><td class="crd-td">0,706</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC to 400AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000048</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1178</td><td class="crd-td">1,3152</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland and Dorset (400 to 800AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000054</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1431</td><td class="crd-td">1,636</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian and Pueblo II (800 to 1100AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000064</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1993</td><td class="crd-td">2,1282</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian and Pueblo III (1100 to 1300AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000067</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,2131</td><td class="crd-td">2,2421</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota and Thule (1300 to 1500AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,00007</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,207</td><td class="crd-td">2,2562</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500 to 1650AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000056</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1612</td><td class="crd-td">1,8104</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental North American kriging variogram diagnostics across ten Holocene horizons (493.687 valid land cells, regularised tau1 = 1,35, tau2 = 2,9025).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Domestic Sites</th><th class="crd-th">Buffer Sites</th><th class="crd-th">Natural Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Coastal Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic (13000 to 6000BC)</strong></td><td class="crd-td">2.912</td><td class="crd-td">389</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,0976</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000 to 3000BC)</strong></td><td class="crd-td">5.808</td><td class="crd-td">738</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,1003</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000 to 1000BC)</strong></td><td class="crd-td">9.669</td><td class="crd-td">1.111</td><td class="crd-td">0,001</td><td class="crd-td">0,0023</td><td class="crd-td">0,1026</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland and Formative (1000 to 200BC)</strong></td><td class="crd-td">8.660</td><td class="crd-td">1.060</td><td class="crd-td">0,001</td><td class="crd-td">0,0025</td><td class="crd-td">0,1044</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC to 400AD)</strong></td><td class="crd-td">15.765</td><td class="crd-td">2.068</td><td class="crd-td">0,001</td><td class="crd-td">0,0033</td><td class="crd-td">0,1055</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland and Dorset (400 to 800AD)</strong></td><td class="crd-td">19.160</td><td class="crd-td">2.427</td><td class="crd-td">0,001</td><td class="crd-td">0,0033</td><td class="crd-td">0,107</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian and Pueblo II (800 to 1100AD)</strong></td><td class="crd-td">26.697</td><td class="crd-td">2.994</td><td class="crd-td">0,001</td><td class="crd-td">0,0038</td><td class="crd-td">0,107</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian and Pueblo III (1100 to 1300AD)</strong></td><td class="crd-td">28.544</td><td class="crd-td">3.003</td><td class="crd-td">0,001</td><td class="crd-td">0,0036</td><td class="crd-td">0,1073</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota and Thule (1300 to 1500AD)</strong></td><td class="crd-td">27.740</td><td class="crd-td">2.555</td><td class="crd-td">0,001</td><td class="crd-td">0,0032</td><td class="crd-td">0,108</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500 to 1650AD)</strong></td><td class="crd-td">21.590</td><td class="crd-td">1.887</td><td class="crd-td">0,001</td><td class="crd-td">0,0021</td><td class="crd-td">0,1084</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catchment site-period counts (3.832 domestic, 251 buffer) and WLS covariate slopes in the North American kriging domain.</figcaption>
</figure>

# Results

## Seventeenth-Century Contraction and the 1680AD Trough (1500 to 1700AD)

Between 1500AD and 1680AD, Indigenous depopulation drove continental totals downward despite steady English, Dutch and Spanish arrivals along the coasts (Figure \ref{fig:traj-1754}). Across Spanish Florida, mission-corridor epidemics and slave raiding from the Carolina frontier reduced Timucua, Apalachee and Guale numbers from 280k in 1500AD to 95,5k in 1600AD, 41,3k in 1650AD and just 16,5k in 1700AD [@milner2010eastern; @gerhard1982north].

In the Trans-Appalachian interior (Cherokee, Creek, Choctaw, Chickasaw and Ohio Valley confederacies), population fell from 480k in 1500AD to 235k in 1600AD and 114,2k by 1700AD. Along the Mississippi and Gulf lowlands of French Louisiana and the Pays des Illinois, dense Plaquemine and Natchez polities contracted from 210k in 1500AD to 66k in 1650AD and 38.850 in 1700AD [@milner2010eastern; @ubelaker1988north].

<figure class="crd-figure-block" id="fig:traj-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754/fig2_colonial_america_to_1754_trajectory.png" alt="fig:traj-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of Colonial America and Indigenous North America from 1500AD to 1754AD with sub-regional uncertainty bands.</figcaption>
</figure>

On the Atlantic seaboard, colonial settlements crossed their initial demographic threshold after 1630AD. Virginia rose from 350 settlers in 1610AD to 18.731 non-Indigenous residents in 1650AD (29.231 total with 10,5k Indigenous) and 58.560 in 1700AD (60.460 total, plus 1.160 in adjacent territories; 61.160 combined). Massachusetts Bay and Maine grew from 1.296 settlers in 1630AD to 55.941 colonial (57.941 total) by 1700AD, while Maryland (30.954 total), New York (28.907), Connecticut (27.570) and Pennsylvania (21.950) formed secondary Atlantic nodes [@uscensus1975historical; @wells1975population].

## Eighteenth-Century Expansion and Atlantic Migration (1700 to 1754AD)

From 1700AD to 1754AD, regional population expanded by 63% from 1,49M to 2,43M (Table \ref{tab:regions-1754}). Non-Indigenous inhabitants surged more than fivefold from 263.420 (17,6% of the continent) in 1700AD to 658.095 in 1730AD and 1.382.686 (56,8%) by 1754AD (Figure \ref{fig:shares-1754}) [@uscensus1975historical; @wells1975population].

Two distinct demographic engines powered this eighteenth-century surge. First, high marital fertility, early marriage age and plentiful farmland sustained rapid natural increase across New England and the Mid-Atlantic, doubling Connecticut from 27.570 to 124.556 and Massachusetts Bay-Maine from 57.941 to 202.940 between 1700AD and 1754AD [@greene1932american; @wells1975population]. Second, transatlantic flows of Palatine German, Scots-Irish and Ulster immigrants poured through Philadelphia and New Castle into interior Pennsylvania (climbing nearly sevenfold from 21.950 in 1700AD to 146.581 in 1754AD) and down the Great Valley into Virginia and North Carolina, complemented by forced Middle Passage transport of enslaved Africans to Chesapeake tobacco and Carolina rice plantations [@wells1975population; @bridenbaugh1955cities; @tnnessen2021assad].

<figure class="crd-figure-block" id="fig:shares-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754/fig3_colonial_america_to_1754_shares.png" alt="fig:shares-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Changing demographic shares across the 22 Colonial American and Indigenous sub-regions between 1500AD and 1754AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1730AD</th><th class="crd-th">1754AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">26.630</td><td class="crd-td">8,5k</td><td class="crd-td">6,5k</td><td class="crd-td">2,7k</td><td class="crd-td">5,6k</td><td class="crd-td">11,1k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>2. Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">99.593</td><td class="crd-td">42k</td><td class="crd-td">32k</td><td class="crd-td">22,1k</td><td class="crd-td">57,9k</td><td class="crd-td">115,6k</td><td class="crd-td">202,9k</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">2.594</td><td class="crd-td">11k</td><td class="crd-td">8,5k</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td><td class="crd-td">17,8k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of Connecticut</strong></td><td class="crd-td">12.312</td><td class="crd-td">18k</td><td class="crd-td">14k</td><td class="crd-td">8,6k</td><td class="crd-td">27,6k</td><td class="crd-td">76,6k</td><td class="crd-td">124,6k</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">57.436</td><td class="crd-td">48k</td><td class="crd-td">38k</td><td class="crd-td">21,1k</td><td class="crd-td">28,9k</td><td class="crd-td">56,3k</td><td class="crd-td">99,4k</td></tr>
<tr><td class="crd-td"><strong>6. Province of New Jersey</strong></td><td class="crd-td">21.974</td><td class="crd-td">10,5k</td><td class="crd-td">8,2k</td><td class="crd-td">4,2k</td><td class="crd-td">15,2k</td><td class="crd-td">38,1k</td><td class="crd-td">80,8k</td></tr>
<tr><td class="crd-td"><strong>7. Province of Pennsylvania</strong></td><td class="crd-td">29.544</td><td class="crd-td">24k</td><td class="crd-td">18k</td><td class="crd-td">10,5k</td><td class="crd-td">21,9k</td><td class="crd-td">53,8k</td><td class="crd-td">146,6k</td></tr>
<tr><td class="crd-td"><strong>8. Lower Counties on Delaware</strong></td><td class="crd-td">5.547</td><td class="crd-td">4,5k</td><td class="crd-td">3,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">9,4k</td><td class="crd-td">30,7k</td></tr>
<tr><td class="crd-td"><strong>9. Province of Maryland</strong></td><td class="crd-td">18.182</td><td class="crd-td">16k</td><td class="crd-td">12k</td><td class="crd-td">10k</td><td class="crd-td">31k</td><td class="crd-td">91,8k</td><td class="crd-td">149,9k</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">82.308</td><td class="crd-td">44k</td><td class="crd-td">31k</td><td class="crd-td">29,2k</td><td class="crd-td">61,2k</td><td class="crd-td">115,4k</td><td class="crd-td">275,4k</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">111.016</td><td class="crd-td">52k</td><td class="crd-td">32k</td><td class="crd-td">19,5k</td><td class="crd-td">19,5k</td><td class="crd-td">33,6k</td><td class="crd-td">90,2k</td></tr>
<tr><td class="crd-td"><strong>12. Province of South Carolina</strong></td><td class="crd-td">78.352</td><td class="crd-td">48k</td><td class="crd-td">25k</td><td class="crd-td">17k</td><td class="crd-td">13,5k</td><td class="crd-td">32,7k</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td"><strong>13. Province of Georgia</strong></td><td class="crd-td">84.885</td><td class="crd-td">58k</td><td class="crd-td">24k</td><td class="crd-td">16k</td><td class="crd-td">8,5k</td><td class="crd-td">5,4k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>14. Colony of Bermuda</strong></td><td class="crd-td">53</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">3,5k</td><td class="crd-td">5,9k</td><td class="crd-td">8,8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>15. Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">192.918</td><td class="crd-td">280k</td><td class="crd-td">95,5k</td><td class="crd-td">41,3k</td><td class="crd-td">16,5k</td><td class="crd-td">7,2k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>16. Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">469.545</td><td class="crd-td">140k</td><td class="crd-td">92,4k</td><td class="crd-td">56,8k</td><td class="crd-td">40,5k</td><td class="crd-td">42,5k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>17. Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">408.489</td><td class="crd-td">75k</td><td class="crd-td">50k</td><td class="crd-td">37,5k</td><td class="crd-td">25,1k</td><td class="crd-td">20,4k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>18. French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">295.837</td><td class="crd-td">210k</td><td class="crd-td">102k</td><td class="crd-td">66k</td><td class="crd-td">38,9k</td><td class="crd-td">34,5k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>19. Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">1.118.824</td><td class="crd-td">480k</td><td class="crd-td">235k</td><td class="crd-td">160k</td><td class="crd-td">114,2k</td><td class="crd-td">99,8k</td><td class="crd-td">93,7k</td></tr>
<tr><td class="crd-td"><strong>20. Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">2.599.948</td><td class="crd-td">390k</td><td class="crd-td">325k</td><td class="crd-td">286k</td><td class="crd-td">248k</td><td class="crd-td">230k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">2.020.564</td><td class="crd-td">760k</td><td class="crd-td">705k</td><td class="crd-td">668k</td><td class="crd-td">628k</td><td class="crd-td">604k</td><td class="crd-td">585k</td></tr>
<tr><td class="crd-td"><strong>22. Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">1.420.613</td><td class="crd-td">84k</td><td class="crd-td">80k</td><td class="crd-td">77,5k</td><td class="crd-td">75k</td><td class="crd-td">73k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.157.164</td><td class="crd-td">2,8M</td><td class="crd-td">1,94M</td><td class="crd-td">1,56M</td><td class="crd-td">1,49M</td><td class="crd-td">1,78M</td><td class="crd-td">2,43M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population benchmarks across Colonial America and Indigenous North America, 1500AD to 1754AD.</figcaption>
</figure>

## Sub-Regional Dynamics and Borderlands (1500 to 1754AD)

### New England and Maritime Colonies

Across New England (141.129 km² spanning New Hampshire, Massachusetts Bay-Maine, Rhode Island and Connecticut), total population moved through an early Indigenous contraction before rapid colonial village growth restored regional numbers from 38.232 in 1650AD to 63.096 in 1670AD, 75.512 in 1680AD, 97.963 in 1700AD and 398.740 in 1754AD.

Massachusetts Bay-Maine alone grew from 10.796 in 1630AD to 57.941 in 1700AD and 202.940 by 1754AD, anchored by Boston (15,65k in 1754AD after a 1740AD peak near 17k) and thriving fishing and farming towns such as Newbury, Marblehead, Salem, Dartmouth and Ipswich [@greene1932american; @bridenbaugh1938cities]. Connecticut expanded to 124.556 across 83 catalogued settlements led by Norwich and New Haven (5,4k each), Rhode Island climbed to 38.844 behind the maritime port of Newport (6,8k) and Providence (3,6k), and New Hampshire reached 32,4k centred on Portsmouth (3,8k).

### Mid-Atlantic Provinces

The four Mid-Atlantic provinces (New York, New Jersey, Pennsylvania and Delaware, covering 114.501 km²) shifted from Iroquois and Lenape territory (87k in 1500AD) through a trough of 68.957 in 1700AD to one of the fastest-growing commercial regions of British North America at 357.367 in 1754AD.

Pennsylvania recorded the sharpest eighteenth-century climb, surging more than sixfold from 21.950 in 1700AD to 146.581 in 1754AD as Philadelphia developed into the busiest Atlantic port and immigrant gateway (20,5k in 1754AD, flanked by Northern Liberties at 2,8k). New York rose from 28.907 in 1700AD to 99.373 in 1754AD (New York City reaching 14,2k in 1754AD after a 1750AD tally of 22k, with Albany at 3k), New Jersey climbed from 15.210 to 80.761, and the Lower Counties on Delaware rose from 2.890 to 30.652 [@uscensus1975historical; @bridenbaugh1955cities].

### Chesapeake, Carolinas, Georgia and Bermuda

From Maryland southward to Georgia and Bermuda (374.796 km²), tobacco, rice and indigo expansion carried combined totals from 139.500 in 1700AD to 613.929 in 1754AD [@wells1975population; @uscensus1975historical].

Virginia remained the single most populous colony in British North America throughout this era, climbing from 29.231 in 1650AD to 61.160 in 1700AD and 275.450 in 1754AD (led by Norfolk at 4,1k), while Maryland rose from 30.954 to 149.931 over the same fifty-four years. Further south, backcountry migration lifted North Carolina from 19.520 to 90.167 and enslaved plantation labour expanded South Carolina from 13.504 to 77.530 (with Charleston at 7,8k), while Georgia reached 10.951 twenty-one years after Savannah's founding (2,1k in 1754AD) and Bermuda sustained 9,9k residents on 53 km² [@wells1975population; @bump2022colonialism].

<figure class="crd-table-figure" id="tab:colony-growth-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">1630AD</th><th class="crd-th">1650AD</th><th class="crd-th">1680AD</th><th class="crd-th">1700AD</th><th class="crd-th">1720AD</th><th class="crd-th">1740AD</th><th class="crd-th">1750AD</th><th class="crd-th">1754AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of New Hampshire</strong></td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">5,6k</td><td class="crd-td">9,8k</td><td class="crd-td">23,6k</td><td class="crd-td">27,8k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">10,8k</td><td class="crd-td">22,1k</td><td class="crd-td">49k</td><td class="crd-td">57,9k</td><td class="crd-td">92,6k</td><td class="crd-td">152,9k</td><td class="crd-td">189,2k</td><td class="crd-td">202,9k</td></tr>
<tr><td class="crd-td"><strong>Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">6,5k</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td><td class="crd-td">6,9k</td><td class="crd-td">12,6k</td><td class="crd-td">26,1k</td><td class="crd-td">34k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Colony of Connecticut</strong></td><td class="crd-td">10,5k</td><td class="crd-td">8,6k</td><td class="crd-td">19,4k</td><td class="crd-td">27,6k</td><td class="crd-td">60k</td><td class="crd-td">90,5k</td><td class="crd-td">112,1k</td><td class="crd-td">124,6k</td></tr>
<tr><td class="crd-td"><strong>Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">28,4k</td><td class="crd-td">21,1k</td><td class="crd-td">21,8k</td><td class="crd-td">28,9k</td><td class="crd-td">45,2k</td><td class="crd-td">70,9k</td><td class="crd-td">83,4k</td><td class="crd-td">99,4k</td></tr>
<tr><td class="crd-td"><strong>Province of New Jersey</strong></td><td class="crd-td">6,5k</td><td class="crd-td">4,2k</td><td class="crd-td">5,5k</td><td class="crd-td">15,2k</td><td class="crd-td">30,6k</td><td class="crd-td">51,9k</td><td class="crd-td">71,8k</td><td class="crd-td">80,8k</td></tr>
<tr><td class="crd-td"><strong>Province of Pennsylvania</strong></td><td class="crd-td">14,5k</td><td class="crd-td">10,5k</td><td class="crd-td">6,9k</td><td class="crd-td">21,9k</td><td class="crd-td">33,6k</td><td class="crd-td">87,3k</td><td class="crd-td">121,1k</td><td class="crd-td">146,6k</td></tr>
<tr><td class="crd-td"><strong>Lower Counties on Delaware</strong></td><td class="crd-td">2,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">2,9k</td><td class="crd-td">5,6k</td><td class="crd-td">20k</td><td class="crd-td">28,8k</td><td class="crd-td">30,7k</td></tr>
<tr><td class="crd-td"><strong>Province of Maryland</strong></td><td class="crd-td">9,2k</td><td class="crd-td">10k</td><td class="crd-td">20,3k</td><td class="crd-td">31k</td><td class="crd-td">67k</td><td class="crd-td">116,6k</td><td class="crd-td">141,5k</td><td class="crd-td">149,9k</td></tr>
<tr><td class="crd-td"><strong>Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">21k</td><td class="crd-td">29,2k</td><td class="crd-td">47,9k</td><td class="crd-td">61,2k</td><td class="crd-td">89,5k</td><td class="crd-td">181,6k</td><td class="crd-td">232k</td><td class="crd-td">275,4k</td></tr>
<tr><td class="crd-td"><strong>Province of North Carolina</strong></td><td class="crd-td">24,5k</td><td class="crd-td">19,5k</td><td class="crd-td">17,9k</td><td class="crd-td">19,5k</td><td class="crd-td">25,8k</td><td class="crd-td">54,7k</td><td class="crd-td">75,4k</td><td class="crd-td">90,2k</td></tr>
<tr><td class="crd-td"><strong>Province of South Carolina</strong></td><td class="crd-td">20k</td><td class="crd-td">17k</td><td class="crd-td">12,7k</td><td class="crd-td">13,5k</td><td class="crd-td">20,5k</td><td class="crd-td">47,1k</td><td class="crd-td">65,7k</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td"><strong>Province of Georgia</strong></td><td class="crd-td">19k</td><td class="crd-td">16k</td><td class="crd-td">11,5k</td><td class="crd-td">8,5k</td><td class="crd-td">6,2k</td><td class="crd-td">6,7k</td><td class="crd-td">9,4k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">2,2k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,9k</td><td class="crd-td">8,4k</td><td class="crd-td">9,2k</td><td class="crd-td">9,6k</td><td class="crd-td">9,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Composite provincial totals (colonial plus Indigenous residents) across the fourteen British Atlantic territories from 1630AD to 1754AD.</figcaption>
</figure>

### Spanish Borderlands and French Louisiana

Across Spanish Florida, New Mexico, Texas and French Louisiana-Illinois (1.366.789 km²), Indigenous mortality far outweighed sparse imperial garrisoning before 1754AD, pulling the combined zone down from 705k in 1500AD to 104.700 in 1754AD [@gerhard1982north; @jones1979los].

Spanish Florida fell from 280k in 1500AD to 6,1k in 1754AD (with 2,5k concentrated at St. Augustine), and Spanish Texas contracted from 75k to 17,9k around San Antonio (900). Spanish New Mexico stabilised near 47,4k after the 1680AD Pueblo Revolt and eighteenth-century recovery around Santa Fe (1,25k) and Zuni, while French Louisiana-Illinois eased to 33,3k as Mississippi Valley towns declined alongside emerging French trade at New Orleans (2,4k in 1754AD; 3k in 1750AD) [@gerhard1982north; @jones1979los].

### Interior Indigenous Macro-Zones and Alaska

Unceded interior territories (Trans-Appalachia, Great Plains, Far West and early-contact Alaska, spanning 7.159.949 km²) retained 958.880 residents in 1754AD despite falling 44,1% from 1,71M (1.714.000) in 1500AD [@ubelaker1988north; @milner2010eastern].

Trans-Appalachia contracted earliest (-80,5% to 93,7k) under repeated epidemic waves and Iroquois-frontier warfare, while the Great Plains eased from 390k to 216k (-44,6%) as equestrian bison hunting reorganised Plains bands. Along the Pacific slope, dense acorn-harvesting villages and salmon fisheries kept the Far West at 585k (-23% from 760k in 1500AD), while Alaska and the Aleutians declined from 84k to 64.180 following initial Russian maritime contact in 1741AD [@ubelaker1988north].

<figure class="crd-table-figure" id="tab:density-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1500AD</th><th class="crd-th">1754AD</th><th class="crd-th">1754AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">137</td><td class="crd-td">8,5k</td><td class="crd-td">32,4k</td><td class="crd-td">1,22</td></tr>
<tr><td class="crd-td"><strong>2. Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">220</td><td class="crd-td">42k</td><td class="crd-td">202,9k</td><td class="crd-td">2,04</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">31</td><td class="crd-td">11k</td><td class="crd-td">38,8k</td><td class="crd-td">14,97</td></tr>
<tr><td class="crd-td"><strong>4. Colony of Connecticut</strong></td><td class="crd-td">83</td><td class="crd-td">18k</td><td class="crd-td">124,6k</td><td class="crd-td">10,12</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">101</td><td class="crd-td">48k</td><td class="crd-td">99,4k</td><td class="crd-td">1,73</td></tr>
<tr><td class="crd-td"><strong>6. Province of New Jersey</strong></td><td class="crd-td">65</td><td class="crd-td">10,5k</td><td class="crd-td">80,8k</td><td class="crd-td">3,68</td></tr>
<tr><td class="crd-td"><strong>7. Province of Pennsylvania</strong></td><td class="crd-td">48</td><td class="crd-td">24k</td><td class="crd-td">146,6k</td><td class="crd-td">4,96</td></tr>
<tr><td class="crd-td"><strong>8. Lower Counties on Delaware</strong></td><td class="crd-td">15</td><td class="crd-td">4,5k</td><td class="crd-td">30,7k</td><td class="crd-td">5,53</td></tr>
<tr><td class="crd-td"><strong>9. Province of Maryland</strong></td><td class="crd-td">42</td><td class="crd-td">16k</td><td class="crd-td">149,9k</td><td class="crd-td">8,25</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">66</td><td class="crd-td">44k</td><td class="crd-td">275,4k</td><td class="crd-td">3,35</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">25</td><td class="crd-td">52k</td><td class="crd-td">90,2k</td><td class="crd-td">0,81</td></tr>
<tr><td class="crd-td"><strong>12. Province of South Carolina</strong></td><td class="crd-td">44</td><td class="crd-td">48k</td><td class="crd-td">77,5k</td><td class="crd-td">0,99</td></tr>
<tr><td class="crd-td"><strong>13. Province of Georgia</strong></td><td class="crd-td">12</td><td class="crd-td">58k</td><td class="crd-td">11k</td><td class="crd-td">0,13</td></tr>
<tr><td class="crd-td"><strong>14. Colony of Bermuda</strong></td><td class="crd-td">8</td><td class="crd-td">0</td><td class="crd-td">9,9k</td><td class="crd-td">186,79</td></tr>
<tr><td class="crd-td"><strong>15. Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">24</td><td class="crd-td">280k</td><td class="crd-td">6,1k</td><td class="crd-td">0,03</td></tr>
<tr><td class="crd-td"><strong>16. Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">46</td><td class="crd-td">140k</td><td class="crd-td">47,4k</td><td class="crd-td">0,1</td></tr>
<tr><td class="crd-td"><strong>17. Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">8</td><td class="crd-td">75k</td><td class="crd-td">17,9k</td><td class="crd-td">0,04</td></tr>
<tr><td class="crd-td"><strong>18. French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">21</td><td class="crd-td">210k</td><td class="crd-td">33,3k</td><td class="crd-td">0,11</td></tr>
<tr><td class="crd-td"><strong>19. Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">159</td><td class="crd-td">480k</td><td class="crd-td">93,7k</td><td class="crd-td">0,08</td></tr>
<tr><td class="crd-td"><strong>20. Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">44</td><td class="crd-td">390k</td><td class="crd-td">216k</td><td class="crd-td">0,08</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">20</td><td class="crd-td">760k</td><td class="crd-td">585k</td><td class="crd-td">0,29</td></tr>
<tr><td class="crd-td"><strong>22. Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">6</td><td class="crd-td">84k</td><td class="crd-td">64,2k</td><td class="crd-td">0,05</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements (n=1.225), 1500AD and 1754AD population benchmarks and terminal 1754AD areal density (persons per km²).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:source-corpora-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kelly and Robinson Lower-48 Radiocarbon Database</strong></td><td class="crd-td">37.142</td><td class="crd-td">40,15%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Radiocarbon Synthesis (2025)</strong></td><td class="crd-td">4.823</td><td class="crd-td">5,21%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">13.181</td><td class="crd-td">14,25%</td></tr>
<tr><td class="crd-td"><strong>Texas Trinomial Radiocarbon Database</strong></td><td class="crd-td">324</td><td class="crd-td">0,35%</td></tr>
<tr><td class="crd-td"><strong>Southwest Social Networks CriticalScales</strong></td><td class="crd-td">8.713</td><td class="crd-td">9,42%</td></tr>
<tr><td class="crd-td"><strong>Village Ecodynamics Project II (Mesa Verde)</strong></td><td class="crd-td">1.897</td><td class="crd-td">2,05%</td></tr>
<tr><td class="crd-td"><strong>Greenland National Museum Nunniffiit Registry</strong></td><td class="crd-td">6.365</td><td class="crd-td">6,88%</td></tr>
<tr><td class="crd-td"><strong>National Park Service NRHP Archaeological Register</strong></td><td class="crd-td">206</td><td class="crd-td">0,22%</td></tr>
<tr><td class="crd-td"><strong>Kohler and Reese Northern Rio Grande Database</strong></td><td class="crd-td">88</td><td class="crd-td">0,1%</td></tr>
<tr><td class="crd-td"><strong>Milner et al. Midwest and Southeast Cultural Index</strong></td><td class="crd-td">267</td><td class="crd-td">0,29%</td></tr>
<tr><td class="crd-td"><strong>Chukotka Cross-Bering Conditioning Frontier</strong></td><td class="crd-td">15</td><td class="crd-td">0,02%</td></tr>
<tr><td class="crd-td"><strong>CENTAUR Settlement Gazetteer Horizons</strong></td><td class="crd-td">19.494</td><td class="crd-td">21,07%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Component archaeological and historical registries aggregated into the North American kriging domain (92.500 unique deduplicated site-periods).</figcaption>
</figure>

# Limitations

Three constraints govern precision across the 1500AD to 1754AD reconstruction. First, U.S. Census Bureau Series Z 1-19 rests prior to 1790AD on provincial militia rolls, taxables and household multipliers rather than uniform house-to-house enumerations, particularly in North Carolina and backcountry counties of Virginia and Pennsylvania [@greene1932american; @wells1975population; @floris2021does]. Table \ref{tab:source-corpora-1754} likewise reflects uneven regional heritage reporting across pre-contact catchments, though WLS covariates damp survey-density skew.

Second, Indigenous population estimates across the Great Plains, Far West and Trans-Appalachia carry substantially wider uncertainty bounds (+/- 26% to +/- 38%) than seaboard tax rolls, reflecting sparse parish or fur-trade documentation outside riverine missions [@ubelaker1988north; @milner2010eastern].

Third, static 1754AD territorial masks assign disputed western claims (such as the Ohio Forks, the upper Connecticut River valley and the Appalachian ridge) into fixed provincial polygons ahead of the Seven Years' War and the 1763AD Proclamation Line. Those emerging frontier districts are explicitly carved out as separate masks in the succeeding 1754–1783AD colonial module while preserving exact 1754AD arithmetic totals.

# Conclusion

Between 1500AD and 1754AD, North America south of the St. Lawrence-Great Lakes divide experienced a profound demographic reversal in both scale and geography. Total population fell by nearly half from 2,8M in 1500AD to 1,48M in 1680AD as introduced diseases decimated Indigenous towns across Florida, the Mississippi Valley and the eastern woodlands, before natural increase, European migration and enslaved African labour lifted the continental aggregate back to 2,43M in 1754AD.

Integrating Series Z 1-19 identically with borderland censuses, 92.500 archaeological site-periods and 1.225 catalogued settlements across 22 territorial masks establishes a consistent baseline for the Revolutionary period (1754AD to 1783AD).

# Sources

<div id="refs"></div>
