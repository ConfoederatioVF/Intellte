---
title: "Colonial America until the Treaty of Paris"
subtitle: "CENTAUR-II: Imperial Wars, Provincial Censuses and Revolutionary Settlement Shifts, 1754AD to 1783AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1783_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1783_spatial.png"
hero_caption: "Sub-regional areal mask and 1.218 catalogued settlements across 26 territories of North America from 1754AD to 1783AD."
hero_label: "fig:hero-colonial-america-to-1783"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper tracks the demographic transformation of continental North America (excluding Canada and Greenland) and Bermuda between the outbreak of the Seven Years' War in 1754AD and the Treaty of Paris in 1783AD under CENTAUR-II. Across 26 sub-regional areal masks covering 9.117.969 km² (157.265 five-arcminute cells), total population climbed by 67,4% over twenty-nine years from 2,43M (2.433.616) in 1754AD to 2,66M (2.659.525) in 1760AD, 3,17M (3.171.686) in 1770AD, 3,76M (3.755.094) in 1780AD and 4,07M (4.074.302) at independence in 1783AD [@uscensus1975historical; @wells1975population].

Carving out four emerging frontier and Pacific territories (Kentucky, Watauga-Cumberland in Tennessee, the Republic of Vermont and Spanish Alta California) from the base 1754AD masks captures trans-Appalachian migration and Franciscan mission expansion directly whilst keeping the 1754AD continental sum identical across adjacent chapters [@cook1976population; @greene1932american]. Non-Indigenous inhabitants more than doubled from 1.382.686 in 1754AD to 3.212.352 in 1783AD (including 3.124.922 across the thirteen states plus Vermont, Kentucky and Tennessee), whereas Indigenous nations contracted from 1.050.930 to 861.950 under wartime dislocation, mission epidemics and the 1779-1782AD continental smallpox outbreak [@ubelaker1988north; @cook1976population]. Spatial allocation pairs 93.358 North American site-periods (`sites_northern_america`, $\tau_1 = 1,41$, raw nugget `0,000`, regularised `0,04`) with 1.218 catalogued settlements selected from 1.233 ledger candidates [@paciorek2006spatial; @kelly2025spatiotemporal].

# Background

## Imperial Realignment and Post-1763 Migration

The twenty-nine years from 1754AD to 1783AD bridged imperial struggle over the Ohio Valley and the birth of the American Republic. After the 1763AD Peace of Paris transferred French Canada and eastern Louisiana to Britain and western Louisiana to Spain, British immigration accelerated into Pennsylvania, Virginia, the Carolinas and northern New England despite royal proclamations restraining settlement west of the Appalachian crest [@wells1975population; @greene1932american].

Settler families poured up the Connecticut River valley into the New Hampshire Grants (Vermont) and crossed the Blue Ridge and Cumberland Gap into Kentucky (Harrodsburg, Boonesborough, Lexington and Louisville) and the Watauga-Cumberland valleys of Tennessee [@greene1932american; @forstall1996population]. Simultaneously, Franciscan and presidio expeditions advancing north from Baja California established coastal missions beginning at San Diego (1769AD) and Monterey (1770AD), bringing introduced infectious diseases to dense coastal Chumash, Ohlone and Kumeyaay settlements [@cook1976population; @gerhard1982north].

## Wartime Disruption, Epidemics and Maritime Trade

During the American Revolutionary War (1775-1783AD), British naval blockades, sieges and occupations temporarily hollowed out leading Atlantic seaports. New York fell from 25k on the eve of war in 1775AD to 18k during occupation in 1780AD before recovering to 23,6k at evacuation in 1783AD; Boston fell from 16k to 12k in 1780AD; Newport dropped by half from 11k to 5.532 in 1782AD; and Norfolk plummeted from 6,3k in 1775AD to 1,8k in 1780AD after its 1776AD burning [@bridenbaugh1955cities; @uscensus1975historical].

At the same time, wartime dispersion swelled inland supply towns and temporary army camps across Connecticut and eastern Pennsylvania, exemplified by Litchfield (15.053 in 1775AD), Norwalk (8.837 in 1775AD) and the Continental winter encampment at Valley Forge (11k in 1777AD) [@greene1932american]. Beyond military fronts, vector-borne malaria and port-city febrile outbreaks shaped coastal mortality differentials across Chesapeake, Carolina and Atlantic shipping towns [@bump2022colonialism; @bates2026spatial; @garas2021development], while the 1779-1782AD continental smallpox pandemic struck Great Plains, Plateau and Alaskan Indigenous communities with heavy losses [@ubelaker1988north].

In New England seaports such as Nantucket and Dartmouth, intensive North Atlantic whaling fleets sustained maritime growth into 1775AD before naval warfare interrupted coastal fisheries [@carroll2014intense]. Meanwhile, early naturalists and colonial administrators expanded cartographic and natural-historical documentation across eastern and Gulf provinces, laying the groundwork for post-war federal censuses [@alcantararodriguez2024nature; @forstall1996population].

# Methodology

## Sub-Regional Partition and Boundary Continuity

To preserve exact arithmetic continuity with `colonial_america_to_1754`, the 9.117.969 km² domain retains the 22 base polygons whilst partitioning four new frontier and Pacific masks: Kentucky Frontier District (102.656 km²), Watauga and Cumberland Frontier in Tennessee (94.282 km²), the New Hampshire Grants (Republic of Vermont, 24.646 km²) and Spanish Alta California Missions and Presidios (408.709 km²). Adjusting 1754AD baselines across New Hampshire (-300 to 32.100), New York (-450 to 98.923), the Far West (-295k to 290k) and the Trans-Appalachian, Plains and Louisiana-Illinois boundary corridor keeps the 1754AD continental sum identically fixed at `2.433.616` across both modules.

Across 1760AD, 1770AD and 1780AD, all thirteen seaboard states plus Vermont, Kentucky and Tennessee match U.S. Census Bureau Historical Statistics Series Z 1-19 identically [@uscensus1975historical]. Because Series Z ends in 1780AD, the terminal 1783AD benchmark interpolates state-by-state toward the 1790AD First Federal Census reported by Forstall (1996), incorporating Revolutionary War combat casualties and approximately 60k to 80k Loyalist departures to Nova Scotia, New Brunswick, Québec and British Florida [@forstall1996population; @greene1932american].

Spanish Alta California combines Cook's mission-zone Indigenous series with presidio and pueblo tallies [@cook1976population; @gerhard1982north], while Spanish New Mexico, Texas and Florida incorporate Franciscan and military *padrones* compiled by Gerhard and Jones [@gerhard1982north; @jones1979los]. Long-run biological and secular demographic studies reinforce the importance of separating wartime mortality shocks from underlying high marital fertility across the American mainland [@goldstein2011secular; @pathak2014secular; @hyafil2022evoked; @muzzio2018population].

## Non-Stationary Matérn Kriging and Gazetteer Linkage

Intra-regional spatial allocation draws on the continental `sites_northern_america` domain, which integrates 93.358 unique site-periods across 4.457 domestic Voronoi catchments (`2.678` active inhabited catchments; median radius `27,36 km`, 90th percentile `59,92 km`) and 259 cross-frontier conditioning catchments up to `300 km` beyond the perimeter across `481.752` active continental cells [@paciorek2006spatial; @kelly2025spatiotemporal]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Following Freeman-Tukey transformation and WLS regression on habitable area, natural productivity, ecozone suitability, fluvial decay and coastal proximity, dimensionless variogram bandwidths sit at $\tau_1 = 1,41$ (`1,4144` raw; effective short range `38,7 km`) and $\tau_2 = 2,62$ (`2,6166`), with raw empirical nugget `0,000` and regularised nugget-to-sill `0,04` (`eta = 0,0417`). Urban settlement weights from 1.218 catalogued loci (`1.233` ledger candidates; `15` excluded duplicate aliases) anchor provincial port and township gradients before subtracting settled urban cells to conserve rural mask sums [@bridenbaugh1955cities; @greene1932american].

# Testing and Validation

Cross-module checks confirm exact arithmetic continuity at 1754AD (`2.433.616` in both `colonial_america_to_1754` and `colonial_america_to_1783`) and exact parity with Series Z 1-19 in 1760AD (`1.593.625` across 13 states; `1.595.195` including Vermont, Kentucky and Tennessee), 1770AD (`2.121.376` and `2.148.076`) and 1780AD (`2.677.749` and `2.780.369`) [@uscensus1975historical]. Table \ref{tab:validation-1783} presents the complete benchmark decomposition from 1754AD to 1783AD.

<figure class="crd-table-figure" id="tab:validation-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">13 States</th><th class="crd-th">13 + VT/KY/TN</th><th class="crd-th">All Non-Indig.</th><th class="crd-th">Indigenous</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1754AD</strong></td><td class="crd-td">1.339.906</td><td class="crd-td">1.340.406</td><td class="crd-td">1.382.686</td><td class="crd-td">1.050.930</td><td class="crd-td">2.433.616</td></tr>
<tr><td class="crd-td"><strong>1760AD</strong></td><td class="crd-td">1.593.625</td><td class="crd-td">1.595.195</td><td class="crd-td">1.643.865</td><td class="crd-td">1.015.660</td><td class="crd-td">2.659.525</td></tr>
<tr><td class="crd-td"><strong>1770AD</strong></td><td class="crd-td">2.121.376</td><td class="crd-td">2.148.076</td><td class="crd-td">2.207.026</td><td class="crd-td">964.660</td><td class="crd-td">3.171.686</td></tr>
<tr><td class="crd-td"><strong>1780AD</strong></td><td class="crd-td">2.677.749</td><td class="crd-td">2.780.369</td><td class="crd-td">2.859.359</td><td class="crd-td">895.735</td><td class="crd-td">3.755.094</td></tr>
<tr><td class="crd-td"><strong>1783AD</strong></td><td class="crd-td">2.994.650</td><td class="crd-td">3.124.922</td><td class="crd-td">3.212.352</td><td class="crd-td">861.950</td><td class="crd-td">4.074.302</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Series Z 1-19 state totals (13 states versus 16 including VT, KY and TN), borderlands and Indigenous populations, 1754AD to 1783AD.</figcaption>
</figure>

Table \ref{tab:kriging-1783} and Table \ref{tab:kriging-epochs-1783} report variogram diagnostics and WLS covariate slopes across the ten Holocene horizons of `sites_northern_america`. Residual $R^2$ ranges narrowly from `0,9991` to `0,9993`, with raw nugget-to-sill `0,000` (`0,04` regularised) and active coastal, natural-productivity and ecozone betas guiding rural disaggregation behind the 1.218 colonial towns.

<figure class="crd-table-figure" id="tab:kriging-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R2</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian &amp; Early Archaic (13000-6000BC)</strong></td><td class="crd-td">0,000007</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,006</td><td class="crd-td">0,1028</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">0,000013</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0117</td><td class="crd-td">0,179</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000-1000BC)</strong></td><td class="crd-td">0,000021</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0199</td><td class="crd-td">0,2868</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland &amp; Formative (1000-200BC)</strong></td><td class="crd-td">0,00002</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0183</td><td class="crd-td">0,2698</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">0,000026</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0254</td><td class="crd-td">0,4074</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland &amp; Dorset (400-800AD)</strong></td><td class="crd-td">0,00003</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0332</td><td class="crd-td">0,5922</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian &amp; Pueblo II (800-1100AD)</strong></td><td class="crd-td">0,000041</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0468</td><td class="crd-td">0,8073</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian &amp; Pueblo III (1100-1300AD)</strong></td><td class="crd-td">0,000046</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0558</td><td class="crd-td">0,8855</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota &amp; Thule (1300-1500AD)</strong></td><td class="crd-td">0,000046</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0465</td><td class="crd-td">0,7309</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500-1650AD)</strong></td><td class="crd-td">0,000035</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0345</td><td class="crd-td">0,5768</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Continental North American kriging variogram diagnostics across ten Holocene horizons (481.752 active cells, tau1 = 1,41, tau2 = 2,62).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Domestic Sites</th><th class="crd-th">Buffer Sites</th><th class="crd-th">Natural Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Coastal Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian &amp; Early Archaic (13000-6000BC)</strong></td><td class="crd-td">2.893</td><td class="crd-td">453</td><td class="crd-td">0,0036</td><td class="crd-td">0,002</td><td class="crd-td">0,0028</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">5.612</td><td class="crd-td">1.036</td><td class="crd-td">0,0069</td><td class="crd-td">0,0032</td><td class="crd-td">0,005</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000-1000BC)</strong></td><td class="crd-td">9.596</td><td class="crd-td">1.554</td><td class="crd-td">0,0087</td><td class="crd-td">0,0052</td><td class="crd-td">0,0157</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland &amp; Formative (1000-200BC)</strong></td><td class="crd-td">8.805</td><td class="crd-td">1.351</td><td class="crd-td">0,0091</td><td class="crd-td">0,0061</td><td class="crd-td">0,02</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">12.218</td><td class="crd-td">1.975</td><td class="crd-td">0,0116</td><td class="crd-td">0,0076</td><td class="crd-td">0,0204</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland &amp; Dorset (400-800AD)</strong></td><td class="crd-td">15.997</td><td class="crd-td">2.682</td><td class="crd-td">0,0139</td><td class="crd-td">0,0078</td><td class="crd-td">0,0242</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian &amp; Pueblo II (800-1100AD)</strong></td><td class="crd-td">22.532</td><td class="crd-td">3.005</td><td class="crd-td">0,016</td><td class="crd-td">0,0066</td><td class="crd-td">0,0326</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian &amp; Pueblo III (1100-1300AD)</strong></td><td class="crd-td">26.875</td><td class="crd-td">2.998</td><td class="crd-td">0,0161</td><td class="crd-td">0,0049</td><td class="crd-td">0,0376</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota &amp; Thule (1300-1500AD)</strong></td><td class="crd-td">22.407</td><td class="crd-td">2.504</td><td class="crd-td">0,015</td><td class="crd-td">0,0051</td><td class="crd-td">0,0384</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500-1650AD)</strong></td><td class="crd-td">16.606</td><td class="crd-td">1.707</td><td class="crd-td">0,0109</td><td class="crd-td">0,0057</td><td class="crd-td">0,0329</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catchment site-period counts (93.358 unique site-periods across 4.457 domestic and 259 buffer catchments) and fitted WLS betas.</figcaption>
</figure>

# Results

## Revolutionary Growth Across the Thirteen States (1754 to 1783AD)

Total continental population climbed uninterruptedly from 2,43M in 1754AD to 4,07M in 1783AD despite eight years of warfare (Figure \ref{fig:traj-1783}). Across the thirteen original Atlantic polities alone, non-Indigenous numbers rose by 123,5% from 1.339.906 in 1754AD to 2.994.650 in 1783AD [@uscensus1975historical; @forstall1996population].

Virginia remained the largest state throughout, more than doubling from 275.450 in 1754AD to 447.736 in 1770AD and 601.441 in 1783AD (14,8% of the entire study area). Massachusetts Bay-Maine rose from 202.940 to 365.890, Pennsylvania from 146.581 to 360.025, North Carolina more than tripled from 90.167 to 308.468 as Piedmont farm immigration surged, and Maryland expanded from 149.931 to 267.950 [@uscensus1975historical].

<figure class="crd-figure-block" id="fig:traj-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783/fig2_colonial_america_to_1783_trajectory.png" alt="fig:traj-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across 26 Colonial American, frontier and Indigenous sub-regions from 1754AD to 1783AD.</figcaption>
</figure>

Wartime impacts split sharply between coastal ports and rural hinterlands. Rhode Island suffered an outright provincial contraction during British occupation of Aquidneck Island and Newport, dipping from 58.816 in 1770AD to 53.486 in 1780AD before recovering to 58.230 in 1783AD. New York (rising from 98.923 in 1754AD to 253.315 in 1783AD) and South Carolina (77.530 to 201.502) absorbed port occupations and Loyalist-Patriot civil conflict whilst sustaining backcountry growth, while Georgia jumped sixfold from 10.951 to 66.414 [@wells1975population; @uscensus1975historical].

## Trans-Appalachian Frontiers, Borderlands and Indigenous Nations

West of the crest and north into the New Hampshire Grants, frontier settlement grew explosively between 1760AD and 1783AD (Table \ref{tab:regions-1783}, Figure \ref{fig:shares-1783}). Vermont climbed from 750 inhabitants in 1754AD and 1.420 in 1760AD to 10.180 in 1770AD, 47.770 in 1780AD and 59.102 at 1783AD across 158 catalogued townships led by Bennington (1,85k) and Guilford (1.683).

Kentucky jumped from 2,5k in 1754AD to 17,2k in 1770AD and 54.453 in 1783AD as stockaded stations along the Kentucky and Ohio rivers expanded rapidly, while Watauga-Cumberland in Tennessee rose from 6k to 21.557 [@greene1932american; @forstall1996population]. Together, Kentucky, Tennessee and Vermont added 135.112 residents by 1783AD.

<figure class="crd-figure-block" id="fig:shares-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783/fig3_colonial_america_to_1783_shares.png" alt="fig:shares-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Shift in demographic shares from interior Indigenous territories toward Atlantic and trans-Appalachian polities, 1754AD to 1783AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1754AD</th><th class="crd-th">1760AD</th><th class="crd-th">1770AD</th><th class="crd-th">1780AD</th><th class="crd-th">1783AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">23.978</td><td class="crd-td">32,1k</td><td class="crd-td">39,3k</td><td class="crd-td">62,5k</td><td class="crd-td">87,9k</td><td class="crd-td">104,1k</td></tr>
<tr><td class="crd-td"><strong>2. Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">99.519</td><td class="crd-td">202,9k</td><td class="crd-td">223,6k</td><td class="crd-td">267,5k</td><td class="crd-td">318,6k</td><td class="crd-td">365,9k</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">2.790</td><td class="crd-td">38,8k</td><td class="crd-td">46,2k</td><td class="crd-td">58,8k</td><td class="crd-td">53,5k</td><td class="crd-td">58,2k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of Connecticut</strong></td><td class="crd-td">12.973</td><td class="crd-td">124,6k</td><td class="crd-td">143,2k</td><td class="crd-td">184,5k</td><td class="crd-td">207,3k</td><td class="crd-td">216,5k</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">124.470</td><td class="crd-td">98,9k</td><td class="crd-td">122,9k</td><td class="crd-td">168k</td><td class="crd-td">214,7k</td><td class="crd-td">253,3k</td></tr>
<tr><td class="crd-td"><strong>6. Province of New Jersey</strong></td><td class="crd-td">19.155</td><td class="crd-td">80,8k</td><td class="crd-td">94,2k</td><td class="crd-td">117,7k</td><td class="crd-td">139,8k</td><td class="crd-td">153,2k</td></tr>
<tr><td class="crd-td"><strong>7. Province of Pennsylvania</strong></td><td class="crd-td">58.371</td><td class="crd-td">146,6k</td><td class="crd-td">184,8k</td><td class="crd-td">240,9k</td><td class="crd-td">328k</td><td class="crd-td">360k</td></tr>
<tr><td class="crd-td"><strong>8. Lower Counties on Delaware</strong></td><td class="crd-td">5.819</td><td class="crd-td">30,7k</td><td class="crd-td">33,4k</td><td class="crd-td">35,6k</td><td class="crd-td">45,5k</td><td class="crd-td">49,6k</td></tr>
<tr><td class="crd-td"><strong>9. Province of Maryland</strong></td><td class="crd-td">24.860</td><td class="crd-td">149,9k</td><td class="crd-td">162,6k</td><td class="crd-td">202,9k</td><td class="crd-td">245,7k</td><td class="crd-td">267,9k</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">99.781</td><td class="crd-td">275,4k</td><td class="crd-td">340,6k</td><td class="crd-td">447,7k</td><td class="crd-td">538,6k</td><td class="crd-td">601,4k</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">112.553</td><td class="crd-td">90,2k</td><td class="crd-td">112,4k</td><td class="crd-td">198,8k</td><td class="crd-td">271,5k</td><td class="crd-td">308,5k</td></tr>
<tr><td class="crd-td"><strong>12. Province of South Carolina</strong></td><td class="crd-td">76.783</td><td class="crd-td">77,5k</td><td class="crd-td">95,3k</td><td class="crd-td">125,3k</td><td class="crd-td">180,8k</td><td class="crd-td">201,5k</td></tr>
<tr><td class="crd-td"><strong>13. Province of Georgia</strong></td><td class="crd-td">55.402</td><td class="crd-td">11k</td><td class="crd-td">13,2k</td><td class="crd-td">26,5k</td><td class="crd-td">58,7k</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>14. Colony of Bermuda</strong></td><td class="crd-td">53</td><td class="crd-td">9,9k</td><td class="crd-td">10,2k</td><td class="crd-td">10,6k</td><td class="crd-td">10,3k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>15. Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">164.996</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">6k</td><td class="crd-td">8,1k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>16. Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">383.627</td><td class="crd-td">47,4k</td><td class="crd-td">48,4k</td><td class="crd-td">49,5k</td><td class="crd-td">50,9k</td><td class="crd-td">51,8k</td></tr>
<tr><td class="crd-td"><strong>17. Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">279.836</td><td class="crd-td">17,9k</td><td class="crd-td">17,4k</td><td class="crd-td">16,6k</td><td class="crd-td">15,8k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>18. French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">1.058.088</td><td class="crd-td">61,3k</td><td class="crd-td">60,3k</td><td class="crd-td">59,5k</td><td class="crd-td">63k</td><td class="crd-td">65,5k</td></tr>
<tr><td class="crd-td"><strong>19. Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">877.120</td><td class="crd-td">81,2k</td><td class="crd-td">77,1k</td><td class="crd-td">72,8k</td><td class="crd-td">70,5k</td><td class="crd-td">71k</td></tr>
<tr><td class="crd-td"><strong>20. Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">2.250.677</td><td class="crd-td">192k</td><td class="crd-td">186k</td><td class="crd-td">178k</td><td class="crd-td">162,2k</td><td class="crd-td">148,2k</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">1.369.672</td><td class="crd-td">290k</td><td class="crd-td">284k</td><td class="crd-td">275k</td><td class="crd-td">264k</td><td class="crd-td">260k</td></tr>
<tr><td class="crd-td"><strong>22. Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">1.387.153</td><td class="crd-td">64,2k</td><td class="crd-td">60,3k</td><td class="crd-td">55,5k</td><td class="crd-td">51,3k</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>23. Kentucky Frontier District (Boonesborough, Harrodsburg and Louisville)</strong></td><td class="crd-td">102.656</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">17,2k</td><td class="crd-td">46k</td><td class="crd-td">54,5k</td></tr>
<tr><td class="crd-td"><strong>24. Watauga and Cumberland Frontier Settlements (Tennessee)</strong></td><td class="crd-td">94.282</td><td class="crd-td">6k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td><td class="crd-td">14,1k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>25. New Hampshire Grants / Republic of Vermont</strong></td><td class="crd-td">24.646</td><td class="crd-td">750</td><td class="crd-td">1,4k</td><td class="crd-td">10,2k</td><td class="crd-td">47,8k</td><td class="crd-td">59,1k</td></tr>
<tr><td class="crd-td"><strong>26. Spanish Alta California Missions and Presidios (1769-1783)</strong></td><td class="crd-td">408.709</td><td class="crd-td">295k</td><td class="crd-td">289k</td><td class="crd-td">278,1k</td><td class="crd-td">260,5k</td><td class="crd-td">252,7k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.117.969</td><td class="crd-td">2,43M</td><td class="crd-td">2,66M</td><td class="crd-td">3,17M</td><td class="crd-td">3,76M</td><td class="crd-td">4,07M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population totals across 26 territories of North America, 1754AD to 1783AD.</figcaption>
</figure>

Conversely, Indigenous and mission-frontier populations declined across every western zone. The 1779-1782AD smallpox pandemic and frontier warfare cut the Great Plains from 192k in 1754AD to 148,25k in 1783AD (-22,8%), the Far West from 290k to 260k (-10,3%), Trans-Appalachian confederacies from 81,2k to 71k (-12,6%) and Alaska-Aleutians from 64.180 to 49.950 (-22,2%) [@ubelaker1988north].

In Spanish Alta California, the establishment of eleven Franciscan missions and presidios between 1769AD and 1782AD accelerated coastal Indigenous mortality, reducing total regional population from 295k in 1754AD to 252,68k in 1783AD [@cook1976population]. Across the Spanish Gulf-Southwest borderlands, Florida briefly swelled to 8,1k in 1780AD under Loyalist wartime refugees at St. Augustine before easing to 7,6k in 1783AD, New Mexico rose gently from 47,4k to 51,8k, Texas eased from 17,9k to 15.650 and Louisiana-Illinois recovered from 59,5k in 1770AD to 65,5k in 1783AD as Acadian exiles and river traders reinforced New Orleans (4,8k) and St. Louis [@gerhard1982north; @jones1979los].

## Regional Density and Urban Concentration

Table \ref{tab:density-1783} tracks settlement coverage (`1.218` included loci) and areal density shifts across all 26 territories. By 1783AD, coastal New England and the Chesapeake had crossed `10` to `20` persons per km² (Rhode Island reaching `20,87` persons per km², Connecticut `16,69`, Maryland `10,78` and Delaware `8,52`, while Bermuda held `190,57` persons per km²), whereas vast interior plains and boreal Alaska remained below `0,07` persons per km².

<figure class="crd-table-figure" id="tab:density-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1754AD (km²)</th><th class="crd-th">1783AD (km²)</th><th class="crd-th">Change</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">169</td><td class="crd-td">1,34</td><td class="crd-td">4,34</td><td class="crd-td">+224,4%</td></tr>
<tr><td class="crd-td"><strong>2. Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">229</td><td class="crd-td">2,04</td><td class="crd-td">3,68</td><td class="crd-td">+80,3%</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">29</td><td class="crd-td">13,92</td><td class="crd-td">20,87</td><td class="crd-td">+49,9%</td></tr>
<tr><td class="crd-td"><strong>4. Colony of Connecticut</strong></td><td class="crd-td">62</td><td class="crd-td">9,6</td><td class="crd-td">16,69</td><td class="crd-td">+73,9%</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">100</td><td class="crd-td">0,79</td><td class="crd-td">2,04</td><td class="crd-td">+156,1%</td></tr>
<tr><td class="crd-td"><strong>6. Province of New Jersey</strong></td><td class="crd-td">49</td><td class="crd-td">4,22</td><td class="crd-td">8</td><td class="crd-td">+89,7%</td></tr>
<tr><td class="crd-td"><strong>7. Province of Pennsylvania</strong></td><td class="crd-td">49</td><td class="crd-td">2,51</td><td class="crd-td">6,17</td><td class="crd-td">+145,6%</td></tr>
<tr><td class="crd-td"><strong>8. Lower Counties on Delaware</strong></td><td class="crd-td">10</td><td class="crd-td">5,27</td><td class="crd-td">8,52</td><td class="crd-td">+61,7%</td></tr>
<tr><td class="crd-td"><strong>9. Province of Maryland</strong></td><td class="crd-td">40</td><td class="crd-td">6,03</td><td class="crd-td">10,78</td><td class="crd-td">+78,7%</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">51</td><td class="crd-td">2,76</td><td class="crd-td">6,03</td><td class="crd-td">+118,3%</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">38</td><td class="crd-td">0,8</td><td class="crd-td">2,74</td><td class="crd-td">+242,1%</td></tr>
<tr><td class="crd-td"><strong>12. Province of South Carolina</strong></td><td class="crd-td">27</td><td class="crd-td">1,01</td><td class="crd-td">2,62</td><td class="crd-td">+159,9%</td></tr>
<tr><td class="crd-td"><strong>13. Province of Georgia</strong></td><td class="crd-td">13</td><td class="crd-td">0,2</td><td class="crd-td">1,2</td><td class="crd-td">+506,5%</td></tr>
<tr><td class="crd-td"><strong>14. Colony of Bermuda</strong></td><td class="crd-td">8</td><td class="crd-td">186,79</td><td class="crd-td">190,57</td><td class="crd-td">+2%</td></tr>
<tr><td class="crd-td"><strong>15. Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">11</td><td class="crd-td">0,04</td><td class="crd-td">0,05</td><td class="crd-td">+24,6%</td></tr>
<tr><td class="crd-td"><strong>16. Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">32</td><td class="crd-td">0,12</td><td class="crd-td">0,14</td><td class="crd-td">+9,3%</td></tr>
<tr><td class="crd-td"><strong>17. Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">9</td><td class="crd-td">0,06</td><td class="crd-td">0,06</td><td class="crd-td">-12,6%</td></tr>
<tr><td class="crd-td"><strong>18. French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">28</td><td class="crd-td">0,06</td><td class="crd-td">0,06</td><td class="crd-td">+6,9%</td></tr>
<tr><td class="crd-td"><strong>19. Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">47</td><td class="crd-td">0,09</td><td class="crd-td">0,08</td><td class="crd-td">-12,6%</td></tr>
<tr><td class="crd-td"><strong>20. Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">9</td><td class="crd-td">0,09</td><td class="crd-td">0,07</td><td class="crd-td">-22,8%</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">10</td><td class="crd-td">0,21</td><td class="crd-td">0,19</td><td class="crd-td">-10,3%</td></tr>
<tr><td class="crd-td"><strong>22. Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">6</td><td class="crd-td">0,05</td><td class="crd-td">0,04</td><td class="crd-td">-22,2%</td></tr>
<tr><td class="crd-td"><strong>23. Kentucky Frontier District (Boonesborough, Harrodsburg and Louisville)</strong></td><td class="crd-td">12</td><td class="crd-td">0,02</td><td class="crd-td">0,53</td><td class="crd-td">+2.078,1%</td></tr>
<tr><td class="crd-td"><strong>24. Watauga and Cumberland Frontier Settlements (Tennessee)</strong></td><td class="crd-td">6</td><td class="crd-td">0,06</td><td class="crd-td">0,23</td><td class="crd-td">+259,3%</td></tr>
<tr><td class="crd-td"><strong>25. New Hampshire Grants / Republic of Vermont</strong></td><td class="crd-td">158</td><td class="crd-td">0,03</td><td class="crd-td">2,4</td><td class="crd-td">+7.780,3%</td></tr>
<tr><td class="crd-td"><strong>26. Spanish Alta California Missions and Presidios (1769-1783)</strong></td><td class="crd-td">16</td><td class="crd-td">0,72</td><td class="crd-td">0,62</td><td class="crd-td">-14,3%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements (total 1.218), 1754AD and 1783AD areal densities (persons per km²) and percentage population change across all 26 masks.</figcaption>
</figure>

Urban rank-size hierarchy also restructured markedly across the war years. Philadelphia climbed to 36k in 1783AD (flanked by its distinct northern suburb Northern Liberties at 7,8k), outpacing war-occupied New York (23,6k in 1783AD; 25k in 1775AD) and Boston (16k), while Baltimore surged nineteenfold from 500 in 1754AD to 9,5k in 1783AD as Chesapeake grain exports eclipsed tobacco [@bridenbaugh1955cities; @forstall1996population].

## Sub-Regional Profiles and Frontier Carve-Outs

To trace how trans-Appalachian and Pacific frontiers separated from colonial seaboard provinces and Indigenous homelands without altering continental 1754AD sums, Table \ref{tab:frontier-transitions-1783} isolates the four newly delineated territories alongside their five bordering parent masks across all five benchmark years.

<figure class="crd-table-figure" id="tab:frontier-transitions-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">1754AD</th><th class="crd-th">1760AD</th><th class="crd-th">1770AD</th><th class="crd-th">1780AD</th><th class="crd-th">1783AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>25. New Hampshire Grants / Republic of Vermont</strong></td><td class="crd-td">750</td><td class="crd-td">1.420</td><td class="crd-td">10.180</td><td class="crd-td">47.770</td><td class="crd-td">59.102</td></tr>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">32.100</td><td class="crd-td">39.273</td><td class="crd-td">62.546</td><td class="crd-td">87.922</td><td class="crd-td">104.129</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York</strong></td><td class="crd-td">98.923</td><td class="crd-td">122.938</td><td class="crd-td">168.020</td><td class="crd-td">214.741</td><td class="crd-td">253.315</td></tr>
<tr><td class="crd-td"><strong>23. Kentucky Frontier District</strong></td><td class="crd-td">2.500</td><td class="crd-td">2.350</td><td class="crd-td">17.200</td><td class="crd-td">46.000</td><td class="crd-td">54.453</td></tr>
<tr><td class="crd-td"><strong>24. Watauga and Cumberland Frontier Settlements</strong></td><td class="crd-td">6.000</td><td class="crd-td">5.620</td><td class="crd-td">5.800</td><td class="crd-td">14.100</td><td class="crd-td">21.557</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia</strong></td><td class="crd-td">275.450</td><td class="crd-td">340.566</td><td class="crd-td">447.736</td><td class="crd-td">538.604</td><td class="crd-td">601.441</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">90.167</td><td class="crd-td">112.392</td><td class="crd-td">198.850</td><td class="crd-td">271.483</td><td class="crd-td">308.468</td></tr>
<tr><td class="crd-td"><strong>26. Spanish Alta California Missions and Presidios</strong></td><td class="crd-td">295.000</td><td class="crd-td">289.000</td><td class="crd-td">278.150</td><td class="crd-td">260.520</td><td class="crd-td">252.680</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">290.000</td><td class="crd-td">284.000</td><td class="crd-td">275.000</td><td class="crd-td">264.000</td><td class="crd-td">260.000</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Benchmark series across the four newly delineated frontier and Pacific masks alongside adjacent parent territories, 1754AD to 1783AD.</figcaption>
</figure>

### New England and the Republic of Vermont

Across the five northern masks covering `163.906 km²`, total population doubled from `399.190` in 1754AD to `803.898` in 1783AD (`+101,4%`), rising faster in inland hill towns and northern valleys than on crowded maritime peninsulas [@uscensus1975historical; @forstall1996population]. Massachusetts Bay (including District of Maine) grew from `202.940` to `365.890`, anchored by Boston (`16k`), Salem and rural Maine timber ports, while New Hampshire expanded more than threefold from `32.100` to `104.129`. Connecticut reached `216.547` (`16,69` persons per km²), led by interior Litchfield (`15.053`), coastal Norwalk (`8.837`) and New Haven (`8.295`), whereas exposed Rhode Island dropped between 1770AD (`58.816`) and 1780AD (`53.486`) during the British occupation of Newport before recovering to `58.230` in 1783AD [@greene1932american; @bridenbaugh1955cities]. Meanwhile, settled farming townships poured across the Green Mountains into the Republic of Vermont, lifting that `24.646 km²` mask nearly eightyfold from `750` in 1754AD to `59.102` in 1783AD around Bennington (`1,85k`) and Guilford (`1.683`) [@uscensus1975historical].

### Mid-Atlantic Provinces and Wartime Supply Corridors

The four Mid-Atlantic provinces covering `207.815 km²` expanded by `128,6%` from `356.917` in 1754AD to `816.089` in 1783AD, absorbing heavy Scots-Irish, Palatine German and English migration before the outbreak of fighting in 1775AD [@wells1975population; @uscensus1975historical]. Pennsylvania surged from `146.581` to `360.025`, sustaining both the continent's largest port complex at Philadelphia (`36k`) and Northern Liberties (`7,8k`) and major military logistics nodes such as Valley Forge (`11k` during the 1777AD winter encampment), Lancaster and York [@bridenbaugh1955cities; @greene1932american]. New York climbed from `98.923` to `253.315` even with lower Manhattan occupied until November 1783AD, while New Jersey (`80.761` to `153.181`) and Delaware (`30.652` to `49.568`) experienced alternating Continental and Crown troop quartering along the Hudson-Delaware plain.

### Chesapeake, Carolinas, Georgia and Bermuda

Together, the five southern states and Bermuda spanned `369.432 km²` and increased by `137,1%` from `613.929` in 1754AD to `1.455.875` in 1783AD, propelled by piedmont backcountry farmstead clearance and enslaved African labour importation across tidewater and rice-coast estates [@uscensus1975historical; @bump2022colonialism]. Virginia remained the most populous American territory throughout, climbing from `275.450` in 1754AD to `601.441` in 1783AD despite wartime raids along the James River, while North Carolina (`90.167` to `308.468`) and South Carolina (`77.530` to `201.502`, anchored by Charleston at `12,5k`) filled their piedmont counties rapidly after the Seven Years' War. Georgia registered the steepest percentage growth among coastal states, rising more than sixfold from `10.951` to `66.414`, whereas island Bermuda stabilised near resource carrying capacity at `10.100` (`190,57` persons per km²) [@wells1975population].

### Kentucky and Watauga-Cumberland Frontiers

West of the Appalachian divide, Virginia and North Carolina militia families pushed through Cumberland Gap and down the Holston Valley into the Kentucky Frontier District (`102.656 km²`) and Watauga-Cumberland Settlements (`94.282 km²`), lifting combined mask population by `794,2%` from `8.500` in 1754AD to `76.010` in 1783AD [@greene1932american; @uscensus1975historical]. Kentucky dipped modestly during the Seven Years' War to `2.350` in 1760AD before accelerating to `17.200` in 1770AD, `46.000` in 1780AD and `54.453` in 1783AD across fortified stations at Harrodsburg (`750`), Lexington (`600`), Louisville (`550`), Boonesborough (`400`) and Shawnee trading towns such as Lower Shawneetown (`1,1k`). Across Tennessee, Overhill Cherokee towns including Chota (`850`) and Great Tellico (`680`) coexisted tensely with emerging Cumberland stations around Nashville (`550`), raising the Watauga-Cumberland total from `6.000` to `21.557` by 1783AD.

### Spanish Borderlands, Alta California and Interior Indigenous Nations

Across the five Spanish and former French territories covering `2.295.256 km²`, total population eased by `8,1%` from `427.700` in 1754AD to `393.230` in 1783AD as coastal Alta California losses outweighed steady Hispanic town growth elsewhere [@cook1976population; @gerhard1982north; @jones1979los]. Spanish Alta California (`408.709 km²`) contracted from `295.000` in 1754AD to `252.680` in 1783AD as neophyte epidemics spread around San Diego (`850`), San Gabriel (`750`), Monterey and Santa Clara while Yokuts villages near Tulare Lake (`1,75k`) remained outside mission control [@cook1976population]. Conversely, Spanish New Mexico recovered slowly from `47.400` to `51.800`, French-Spanish Louisiana and Illinois rebounded after 1770AD (`59.500`) to `65.500` in 1783AD around New Orleans and St. Louis, Spanish Florida grew from `6.100` to `7.600` following diplomatic retrocession, and Spanish Texas slipped from `17.900` to `15.650`. Meanwhile, the four predominantly Indigenous interior regions covering `5.884.622 km²` declined by `15,6%` from `627.380` in 1754AD to `529.200` in 1783AD (`Trans-Appalachian` `81.200` to `71.000`, `Great Plains` `192.000` to `148.250`, `Far West` `290.000` to `260.000`, and `Alaska` `64.180` to `49.950`), with the sharpest mortality occurring during the 1779-1782AD smallpox epidemic [@ubelaker1988north; @milner2010].

## Archaeological Source Structure behind the Continental Raster

To contextualise the rural spatial weights behind these 26 masks, Table \ref{tab:source-corpora-1783} summarises the constituent archaeological and gazetteer corpora pooled into the `93.358` unique site-periods of `sites_northern_america` [@kelly2025spatiotemporal; @milner2010; @paciorek2006spatial].

<figure class="crd-table-figure" id="tab:source-corpora-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Site-Periods</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kelly and Robinson (Lower 48 Radiocarbon)</strong></td><td class="crd-td">37.142</td><td class="crd-td">39,78%</td></tr>
<tr><td class="crd-td"><strong>CENTAUR Settlement Gazetteer Anchors</strong></td><td class="crd-td">13.422</td><td class="crd-td">14,37%</td></tr>
<tr><td class="crd-td"><strong>Greenland Nunniffiit Coastal Sites</strong></td><td class="crd-td">13.563</td><td class="crd-td">14,53%</td></tr>
<tr><td class="crd-td"><strong>Canadian and Boreal Radiocarbon (Deduplicated)</strong></td><td class="crd-td">13.207</td><td class="crd-td">14,14%</td></tr>
<tr><td class="crd-td"><strong>Southwest Social Networks Critical Scales</strong></td><td class="crd-td">8.713</td><td class="crd-td">9,33%</td></tr>
<tr><td class="crd-td"><strong>p3k14c North America Subset</strong></td><td class="crd-td">4.823</td><td class="crd-td">5,17%</td></tr>
<tr><td class="crd-td"><strong>Village Ecodynamics Project (Mesa Verde)</strong></td><td class="crd-td">1.897</td><td class="crd-td">2,03%</td></tr>
<tr><td class="crd-td"><strong>Texas Archaeological Radiocarbon Database</strong></td><td class="crd-td">324</td><td class="crd-td">0,35%</td></tr>
<tr><td class="crd-td"><strong>Eastern Woodland Mississippian Centres</strong></td><td class="crd-td">267</td><td class="crd-td">0,29%</td></tr>
<tr><td class="crd-td"><strong>Beringian and Chukotka Perimeter Anchors</strong></td><td class="crd-td">15</td><td class="crd-td">0,02%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Constituent continental site-period corpora pooled into the non-stationary Matérn kriging prior (Northern America spatial domain).</figcaption>
</figure>

# Limitations

Four limitations govern the 1754AD to 1783AD reconstruction. First, Revolutionary War displacement, combining military deaths, prisoner-ship losses and roughly 60k to 80k Loyalist departures to British North America, Nova Scotia and the Caribbean, introduces roughly `+/- 8%` uncertainty around the 1783AD intercensal bridge between Series Z 1780AD figures and the 1790AD First Federal Census [@forstall1996population; @wells1975population; @greene1932american]. Second, British port occupations disrupted local tax lists and Anglican parish burials in New York, Newport, Savannah and Charleston between 1776AD and 1782AD, requiring interpolation across irregular muster and evacuation returns [@bridenbaugh1955cities].

Third, the 1779-1782AD smallpox epidemic across the Great Plains, Columbia Plateau and Alaska lacks continuous ecclesiastical registers, forcing mortality trajectories to rely on Hudson's Bay Company and St. Louis fur-trade journals alongside ethnohistorical mortality multipliers that carry `+/- 26%` to `+/- 38%` confidence bounds [@ubelaker1988north].

Fourth, western land claims of Virginia, North Carolina and Georgia in 1783AD remained overlapping until post-war federal cessions. Partitioning fixed 1783AD masks for Kentucky and Watauga-Cumberland isolates trans-Appalachian frontier growth cleanly without double counting parent tidewater state populations, handing off identically to post-independence United States modules at 1783AD [@forstall1996population].

# Conclusion

Between 1754AD and 1783AD, continental North America south of the Great Lakes-St. Lawrence line experienced rapid settler expansion paired with sharp wartime port shocks and western Indigenous decline. Total regional population increased by 67,4% from 2,43M to 4,07M, while the non-Indigenous share rose from 56,8% to 78,8%, crossing the Appalachians into Vermont (`59.102`), Kentucky (`54.453`) and Watauga-Cumberland (`21.557`) as Spanish missions advanced along coastal California (`252.680`). Anchored identically at 1754AD (`2.433.616`) and 1783AD (`4.074.302`) across twenty-six sub-regional masks, `93.358` continental site-periods (`sites_northern_america`, $\tau_1 = 1,41$) and `1.218` catalogued settlements from `1.233` ledger candidates, this module links colonial provincial registers directly to the federal census era.

# Sources

<div id="refs"></div>
