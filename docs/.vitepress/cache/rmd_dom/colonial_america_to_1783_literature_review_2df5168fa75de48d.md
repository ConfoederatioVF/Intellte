---
title: "Colonial America until the Treaty of Paris"
subtitle: "CENTAUR-II: Imperial Wars, Provincial Censuses and Revolutionary Settlement Shifts, 1754 to 1783AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1783_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1783_spatial.png"
hero_caption: "Sub-regional areal mask and 242 catalogued settlements across 26 territories of North America from 1754 to 1783AD."
hero_label: "fig:hero-colonial-america-to-1783"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper tracks the demographic transformation of North America (excluding Canada and Greenland) and Bermuda between the outbreak of the Seven Years' War in 1754AD and the Treaty of Paris in 1783AD under Operation Viscount CENTAUR-II. Across 26 sub-regional areal masks covering 9.117.969 km2 (157.265 5-arcminute pixels), total population rose by 67,4% from 2,43M (2.433.616) in 1754AD to 2,66M (2.659.525) in 1760AD, 3,17M (3.171.686) in 1770AD, 3,76M (3.755.094) in 1780AD and 4,07M (4.074.302) in 1783AD [@uscensus1975historical; @wells1975population]. Partitioning four emerging frontier and Pacific zones (Kentucky, Watauga-Cumberland in Tennessee, the Vermont Republic and Spanish Alta California missions) from the parent 1754AD territories captures trans-Appalachian migration and Spanish coastal colonisation directly [@cook1976population; @greene1932american]. Non-Indigenous numbers more than doubled from 1.382.686 in 1754AD to 3.212.352 in 1783AD (including 3.124.922 across the thirteen states plus Vermont, Kentucky and Tennessee), whilst Indigenous populations contracted from 1.050.930 to 861.950 under wartime dislocation, mission epidemics and the 1779-1782 continental smallpox pandemic [@ubelaker1988north; @cook1976population].

# Background

The three decades from 1754AD to 1783AD bridged imperial consolidation and Revolutionary War disruption. Following the 1763AD Peace of Paris, British metropolitan immigration surged into Pennsylvania, Virginia, the Carolinas and the New Hampshire Grants (Vermont), whilst trans-Appalachian settlers crossed the Blue Ridge into Kentucky (Boonesborough and Harrodsburg) and the Watauga-Cumberland valleys despite the Royal Proclamation line [@wells1975population; @greene1932american]. On the Pacific coast, Franciscan and presidio expeditions founded Alta California missions beginning at San Diego in 1769AD, initiating demographic decline among coastal Chumash, Ohlone and Kumeyaay communities [@cook1976population; @gerhard1982north].

During the American Revolutionary War (1775-1783AD), British naval blockades and occupations temporarily depressed coastal port populations in Boston, New York, Philadelphia, Newport, Norfolk and Charleston, even as rural backcountry counties and southern frontier districts expanded rapidly [@bridenbaugh1955cities; @uscensus1975historical]. Simultaneously, a continental smallpox outbreak between 1779AD and 1782AD struck Plains, Plateau and Southwestern Indigenous nations with severe mortality [@ubelaker1988north].

# Methodology

## Sub-Regional Partition and Boundary Continuity

To preserve exact arithmetic continuity with `colonial_america_to_1754`, the 9.117.969 km2 study domain retains the 22 base polygons whilst carving out four new frontier and colonial masks: Kentucky (102.656 km2), Watauga-Cumberland in Tennessee (94.282 km2), the Vermont Republic (24.646 km2) and Alta California Missions and Presidios (408.709 km2). Subtracting their 1754AD baselines from Virginia, North Carolina, New York-New Hampshire and the Far West ensures identical 1754AD totals across both modules (2.433.616).

For 1760AD, 1770AD and 1780AD, all thirteen states plus Vermont, Kentucky and Tennessee follow U.S. Census Bureau Series Z 1-19 exactly [@uscensus1975historical]. The 1783AD terminal anchor interpolates state-level trajectories toward the 1790AD First Federal Census reported by Forstall (1996), adjusting for Revolutionary War troop losses and Loyalist emigration [@forstall1996population; @greene1932american]. Spanish Alta California combines Cook's mission-zone Indigenous series with presidio and pueblo rolls [@cook1976population; @gerhard1982north].

## Non-Stationary Matérn Kriging Calibration

Spatial weighting inside each territorial mask relies on the continental `sites_p3k14c_na` Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging surfaces ($\tau_1 = 1,25$, $\tau_2 = 2,6$) anchored to prehistoric radiocarbon baselines [@paciorek2006spatial; @kelly2025spatiotemporal] and combined with town weights from Bridenbaugh (1955), Spanish borderland presidio rolls and provincial militia assessments [@bridenbaugh1955cities; @jones1979los].

# Testing and Validation

Cross-module reconciliation confirms exact identity at 1754AD (`2.433.616` in both `colonial_america_to_1754` and `colonial_america_to_1783`) and exact parity with Historical Statistics Series Z 1-19 in 1760AD (`1.593.625`), 1770AD (`2.148.076` including Vermont, Kentucky and Tennessee) and 1780AD (`2.780.369`) [@uscensus1975historical]. Table \ref{tab:validation-1783} details each benchmark decomposition.

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Series Z 1-19 state totals (13 states vs 16 incl. VT, KY, TN), borderlands and Indigenous populations, 1754 to 1783AD.</figcaption>
</figure>

# Results

## Revolutionary Growth and Trans-Appalachian Settlement

Regional population climbed steadily throughout 1754-1783AD despite wartime disruption (Figure \ref{fig:traj-1783}). Virginia remained the most populous polity, more than doubling from 275.450 in 1754AD to 601.441 in 1783AD, followed by Massachusetts Bay-Maine (202.940 to 365.890), Pennsylvania (146.581 to 360.025), North Carolina (90.167 to 308.468) and Maryland (149.931 to 267.950) [@uscensus1975historical]. Rhode Island experienced a temporary wartime contraction from 58.816 in 1770AD to 53.486 in 1780AD during the British occupation of Newport before recovering to 58.230 in 1783AD.

<figure class="crd-figure-block" id="fig:traj-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783/fig2_colonial_america_to_1783_trajectory.png" alt="fig:traj-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across 26 Colonial American, frontier and Indigenous sub-regions from 1754 to 1783AD.</figcaption>
</figure>

Meanwhile, frontier jurisdictions expanded explosively: Kentucky grew from 2,5k in 1754AD to 54.453 in 1783AD, Vermont from 750 to 59.102 and Watauga-Cumberland from 6k to 21.557 [@greene1932american]. Conversely, Indigenous populations across the Great Plains dropped from 192k to 148,25k and Alta California declined from 295k to 252,68k (Table \ref{tab:regions-1783}, Figure \ref{fig:shares-1783}) [@cook1976population; @ubelaker1988north].

<figure class="crd-figure-block" id="fig:shares-1783">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1783/fig3_colonial_america_to_1783_shares.png" alt="fig:shares-1783" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Shift in demographic shares from interior Indigenous territories toward Atlantic and trans-Appalachian polities, 1754 to 1783AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-1783">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">1754AD</th><th class="crd-th">1760AD</th><th class="crd-th">1770AD</th><th class="crd-th">1780AD</th><th class="crd-th">1783AD</th></tr></thead>
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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across 26 territories of North America, 1754 to 1783AD.</figcaption>
</figure>

# Limitations

Three limitations affect the 1754-1783AD reconstruction. First, Revolutionary War displacement (roughly 60k-80k Loyalist departures to British North America and military casualties) creates ±8% uncertainty around the 1783AD intercensal bridge between Series Z 1780AD estimates and the 1790AD federal enumeration [@forstall1996population; @wells1975population]. Second, the 1779-1782AD smallpox epidemic across the Great Plains, Columbia Plateau and Alaska lacks parish registers, relying on fur-trade post journals and ethnohistorical mortality multipliers [@ubelaker1988north]. Third, western boundaries of Virginia, North Carolina and Georgia in 1783AD remained overlapping until federal cessions, handled here via fixed 1783AD frontier masks.

# Sources

<div id="refs"></div>
