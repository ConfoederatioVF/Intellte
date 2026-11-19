---
title: "Colonial America until the Seven Years' War"
subtitle: "CENTAUR-II: Thirteen Colonies, Spanish Borderlands, French Louisiana and Indigenous Nations, 1500 to 1754AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_america_to_1754_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_america_to_1754_spatial.png"
hero_caption: "Sub-regional areal mask and 228 catalogued settlements across 22 territories of colonial North America from 1500 to 1754AD."
hero_label: "fig:hero-colonial-america-to-1754"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper synthesises the demographic trajectory of continental North America (excluding Canada and Greenland) and Bermuda from 1500 to 1754AD under Operation Viscount CENTAUR-II. Across 22 historical territorial masks covering 9.117.969 km2 (157.265 5-arcminute pixels), total population declined from an initial Indigenous baseline of 2,8M (2.803.500) in 1500AD to 1,94M (1.937.600) in 1600AD and reached a post-epidemic nadir of 1,48M (1.484.647) in 1680AD before colonial natural increase and transatlantic migration lifted the aggregate to 2,43M (2.433.616) on the eve of the Seven Years' War in 1754AD [@milner2010eastern; @ubelaker1988north; @uscensus1975historical]. Anchored strictly to U.S. Census Bureau Historical Statistics Series Z 1-19 for the Thirteen Colonies [@uscensus1975historical], colonial non-Indigenous population expanded from 350 persons in Virginia in 1610AD to 50.368 in 1650AD, 250.888 in 1700AD and 1.170.760 in 1750AD (1.339.906 interpolated to 1754AD; 1.382.686 including Bermuda, Spanish Florida, New Mexico, Texas, French Louisiana and Alaska) [@wells1975population; @gerhard1982north; @jones1979los]. Over the same two and a half centuries, Indigenous nations contracted from 2,8M in 1500AD to 1,05M (1.050.930) in 1754AD, shifting the demographic centre of gravity from interior Mississippian and Southwestern basins toward the Atlantic seaboard [@thornton1987american; @kelly2025spatiotemporal].

# Background

Population change across North America between 1500AD and 1754AD reflects two overlapping demographic regimes: Old World epidemic mortality among Indigenous polities and rapid Euro-African colonial settlement along the Atlantic and Gulf-Mississippi corridors [@milner2010eastern; @ubelaker1988north; @wells1975population]. Spanish expeditions in Florida and the Southeast (1513-1565AD), missionisation in New Mexico (1598AD) and seventeenth-century slave-raiding and smallpox waves reduced dense Mississippian riverine chiefdoms and Florida Apalachee-Timucua populations sharply before 1700AD [@milner2010eastern; @thornton1987american; @gerhard1982north]. Meanwhile, English, Dutch and Swedish settlements founded between 1607AD and 1682AD along Chesapeake Bay, New England and the Hudson-Delaware valleys entered sustained demographic growth fuelled by high marital fertility, indentured servitude and enslaved African imports [@uscensus1975historical; @wells1975population; @bridenbaugh1938cities].

Traditional historical syntheses often treated Series Z 1-19 (the Thirteen Colonies excluding Native Americans) as synonymous with total North American population [@uscensus1975historical; @greene1932american]. CENTAUR-II resolves this bias by integrating Series Z 1-19 directly with explicit sub-regional Indigenous estimates, Bermuda, Spanish Florida, Spanish New Mexico and Pimeria Alta, Spanish Texas, French Louisiana and Pays des Illinois, Trans-Appalachian confederacies, Great Plains nations, the Far West and Russian-contact Alaska [@ubelaker1988north; @gerhard1982north; @jones1979los].

# Methodology

## Territorial Partition and Composite Estimation

The module divides 9.117.969 km2 into 22 historical masks: thirteen British Atlantic provinces (New Hampshire, Massachusetts Bay including Maine, Rhode Island, Connecticut, New York including Iroquois territory, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina and Georgia), Bermuda, three Spanish northern provinces (Florida, New Mexico and Texas), French Louisiana-Illinois, three unceded Indigenous macro-zones (Trans-Appalachian, Great Plains and Far West) and Alaska-Aleutians. At each benchmark year $t \in [1500, 1754]$, regional population $P_r(t)$ equals the sum of enumerated colonial non-Indigenous population $C_r(t)$ and estimated Indigenous population $I_r(t)$:

$$P_r(t) = C_r(t) + I_r(t)$$

For the thirteen British provinces from 1610AD to 1750AD, $C_r(t)$ matches Historical Statistics Series Z 1-19 identically, with Maine combined into Massachusetts Bay (e.g. 506 Massachusetts plus 400 Maine plus 390 Plymouth in 1630AD = 1.296 colonial; 1754AD interpolated log-linearly from 1750AD and 1760AD anchors) [@uscensus1975historical; @wells1975population]. Indigenous series $I_r(t)$ bridge Kelly et al. (2025) pre-contact baselines at 1500AD to Milner and Chaplin (2010) eastern estimates and Ubelaker (1988) regional curves [@kelly2025spatiotemporal; @milner2010eastern; @ubelaker1988north].

## Non-Stationary Matérn Kriging Calibration

Intra-regional spatial allocation draws on `sites_p3k14c_na`, calibrated via Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging across 481.752 North American cells with $\tau_1 = 1,25$ and $\tau_2 = 2,6$ [@paciorek2006spatial; @kelly2025spatiotemporal]. Coastal and riverine colonial urban nodes from Bridenbaugh (1938, 1955) and colonial tax/militia rolls condition the local rural-urban gradient inside each provincial mask [@bridenbaugh1938cities; @bridenbaugh1955cities].

# Testing and Validation

Validation checks confirm exact parity between `colonial_america_to_1754.json5` and U.S. Census Bureau Series Z 1-19 across all decennial benchmarks from 1610AD to 1750AD, as well as exact continuity into `colonial_america_to_1783` at the 1754AD boundary (2.433.616 total in both modules, reconciling earlier macro-continental syntheses [@mcevedy1978atlas; @kleingoldewijk2017anthropogenic]). Table \ref{tab:validation-1754} reconciles the Thirteen Colonies non-Indigenous sub-total against Series Z 1-19 alongside Indigenous and borderland components.

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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of Thirteen Colonies Series Z 1-19 totals with non-Indigenous borderlands and Indigenous baselines, 1500 to 1754AD.</figcaption>
</figure>

Across the underlying continental `p3k14c` kriging layers, variogram pseudo-$R^2$ ranges from 0,9733 to 0,9992, ensuring smooth density continuity across provincial frontiers.

# Results

## Seventeenth-Century Contraction and Seaboard Rebound (1500 to 1700AD)

Between 1500AD and 1680AD, Indigenous depopulation dominated continental totals (Figure \ref{fig:traj-1754}). Spanish Florida contracted from 280k in 1500AD to 28,75k in 1670AD and 6,1k in 1754AD; Trans-Appalachian nations declined from 480k in 1500AD to 93,7k in 1754AD; and French Louisiana-Illinois fell from 210k to 33,3k [@milner2010eastern; @ubelaker1988north]. Meanwhile, English and Dutch settlements accelerated after 1640AD: by 1700AD, Virginia (58.560 colonial plus 1.900 Indigenous = 60.460) and Massachusetts Bay-Maine (55.941 colonial plus 2k Indigenous = 57.941) formed the leading colonial population centres [@uscensus1975historical].

<figure class="crd-figure-block" id="fig:traj-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754/fig2_colonial_america_to_1754_trajectory.png" alt="fig:traj-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of Colonial America and Indigenous North America from 1500 to 1754AD with sub-regional uncertainty bands.</figcaption>
</figure>

## Eighteenth-Century Expansion to 1754AD

From 1700AD to 1754AD, regional population expanded by 63% from 1,49M to 2,43M (Table \ref{tab:regions-1754}). Non-Indigenous share rose from 17,6% in 1700AD to 56,8% by 1754AD (Figure \ref{fig:shares-1754}). Rapid German and Scots-Irish immigration into Pennsylvania (rising from 17.950 colonial in 1700AD to 145.281 in 1754AD) and Chesapeake natural growth plus enslaved labour in Virginia (275.450 total in 1754AD) and Maryland (149.931) shifted the colonial demographic axis southward and westward [@wells1975population; @uscensus1975historical].

<figure class="crd-figure-block" id="fig:shares-1754">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-america-to-1754/fig3_colonial_america_to_1754_shares.png" alt="fig:shares-1754" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Changing demographic shares across the 22 Colonial American and Indigenous sub-regions between 1500 and 1754AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-1754">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1730AD</th><th class="crd-th">1754AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Province of New Hampshire</strong></td><td class="crd-td">33.098</td><td class="crd-td">8,5k</td><td class="crd-td">6,5k</td><td class="crd-td">2,7k</td><td class="crd-td">5,6k</td><td class="crd-td">11,1k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>2. Province of Massachusetts Bay (incl. District of Maine)</strong></td><td class="crd-td">99.519</td><td class="crd-td">42k</td><td class="crd-td">32k</td><td class="crd-td">22,1k</td><td class="crd-td">57,9k</td><td class="crd-td">115,6k</td><td class="crd-td">202,9k</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Rhode Island and Providence Plantations</strong></td><td class="crd-td">2.790</td><td class="crd-td">11k</td><td class="crd-td">8,5k</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td><td class="crd-td">17,8k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of Connecticut</strong></td><td class="crd-td">12.973</td><td class="crd-td">18k</td><td class="crd-td">14k</td><td class="crd-td">8,6k</td><td class="crd-td">27,6k</td><td class="crd-td">76,6k</td><td class="crd-td">124,6k</td></tr>
<tr><td class="crd-td"><strong>5. Province of New York (incl. Iroquois Mohawk-Hudson)</strong></td><td class="crd-td">139.996</td><td class="crd-td">48k</td><td class="crd-td">38k</td><td class="crd-td">21,1k</td><td class="crd-td">28,9k</td><td class="crd-td">56,3k</td><td class="crd-td">99,4k</td></tr>
<tr><td class="crd-td"><strong>6. Province of New Jersey</strong></td><td class="crd-td">19.155</td><td class="crd-td">10,5k</td><td class="crd-td">8,2k</td><td class="crd-td">4,2k</td><td class="crd-td">15,2k</td><td class="crd-td">38,1k</td><td class="crd-td">80,8k</td></tr>
<tr><td class="crd-td"><strong>7. Province of Pennsylvania</strong></td><td class="crd-td">58.371</td><td class="crd-td">24k</td><td class="crd-td">18k</td><td class="crd-td">10,5k</td><td class="crd-td">21,9k</td><td class="crd-td">53,8k</td><td class="crd-td">146,6k</td></tr>
<tr><td class="crd-td"><strong>8. Lower Counties on Delaware</strong></td><td class="crd-td">5.819</td><td class="crd-td">4,5k</td><td class="crd-td">3,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">9,4k</td><td class="crd-td">30,7k</td></tr>
<tr><td class="crd-td"><strong>9. Province of Maryland</strong></td><td class="crd-td">24.860</td><td class="crd-td">16k</td><td class="crd-td">12k</td><td class="crd-td">10k</td><td class="crd-td">31k</td><td class="crd-td">91,8k</td><td class="crd-td">149,9k</td></tr>
<tr><td class="crd-td"><strong>10. Colony and Dominion of Virginia (incl. Trans-Allegheny West)</strong></td><td class="crd-td">99.781</td><td class="crd-td">44k</td><td class="crd-td">31k</td><td class="crd-td">29,2k</td><td class="crd-td">61,2k</td><td class="crd-td">115,4k</td><td class="crd-td">275,4k</td></tr>
<tr><td class="crd-td"><strong>11. Province of North Carolina</strong></td><td class="crd-td">112.553</td><td class="crd-td">52k</td><td class="crd-td">32k</td><td class="crd-td">19,5k</td><td class="crd-td">19,5k</td><td class="crd-td">33,6k</td><td class="crd-td">90,2k</td></tr>
<tr><td class="crd-td"><strong>12. Province of South Carolina</strong></td><td class="crd-td">76.783</td><td class="crd-td">48k</td><td class="crd-td">25k</td><td class="crd-td">17k</td><td class="crd-td">13,5k</td><td class="crd-td">32,7k</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td"><strong>13. Province of Georgia</strong></td><td class="crd-td">55.402</td><td class="crd-td">58k</td><td class="crd-td">24k</td><td class="crd-td">16k</td><td class="crd-td">8,5k</td><td class="crd-td">5,4k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>14. Colony of Bermuda</strong></td><td class="crd-td">53</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">3,5k</td><td class="crd-td">5,9k</td><td class="crd-td">8,8k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>15. Spanish Florida (San Agustin and Apalachee)</strong></td><td class="crd-td">164.996</td><td class="crd-td">280k</td><td class="crd-td">95,5k</td><td class="crd-td">41,3k</td><td class="crd-td">16,5k</td><td class="crd-td">7,2k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>16. Spanish New Mexico and Pimeria Alta Pueblos</strong></td><td class="crd-td">432.226</td><td class="crd-td">140k</td><td class="crd-td">92,4k</td><td class="crd-td">56,8k</td><td class="crd-td">40,5k</td><td class="crd-td">42,5k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>17. Spanish Texas (San Antonio and Presidio Missions)</strong></td><td class="crd-td">279.836</td><td class="crd-td">75k</td><td class="crd-td">50k</td><td class="crd-td">37,5k</td><td class="crd-td">25,1k</td><td class="crd-td">20,4k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>18. French Louisiana, Mobile and Pays des Illinois</strong></td><td class="crd-td">441.629</td><td class="crd-td">210k</td><td class="crd-td">102k</td><td class="crd-td">66k</td><td class="crd-td">38,9k</td><td class="crd-td">34,5k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>19. Trans-Appalachian Indigenous Nations</strong></td><td class="crd-td">1.074.058</td><td class="crd-td">480k</td><td class="crd-td">235k</td><td class="crd-td">160k</td><td class="crd-td">114,2k</td><td class="crd-td">99,8k</td><td class="crd-td">93,7k</td></tr>
<tr><td class="crd-td"><strong>20. Great Plains and Upper Missouri Indigenous Nations</strong></td><td class="crd-td">2.818.537</td><td class="crd-td">390k</td><td class="crd-td">325k</td><td class="crd-td">286k</td><td class="crd-td">248k</td><td class="crd-td">230k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>21. Far West, Great Basin, California and Columbia Plateau Indigenous Nations</strong></td><td class="crd-td">1.778.381</td><td class="crd-td">760k</td><td class="crd-td">705k</td><td class="crd-td">668k</td><td class="crd-td">628k</td><td class="crd-td">604k</td><td class="crd-td">585k</td></tr>
<tr><td class="crd-td"><strong>22. Alaska and Aleutian Russian-Indigenous Early Contact</strong></td><td class="crd-td">1.387.153</td><td class="crd-td">84k</td><td class="crd-td">80k</td><td class="crd-td">77,5k</td><td class="crd-td">75k</td><td class="crd-td">73k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">9.117.969</td><td class="crd-td">2,8M</td><td class="crd-td">1,94M</td><td class="crd-td">1,56M</td><td class="crd-td">1,49M</td><td class="crd-td">1,78M</td><td class="crd-td">2,43M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population benchmarks across Colonial America and Indigenous North America, 1500 to 1754AD.</figcaption>
</figure>

# Limitations

Three constraints govern precision in this period. First, Series Z 1-19 incorporates historical estimates from militia rolls, taxables and household multipliers prior to 1790AD rather than uniform head-counts, particularly in North Carolina and frontier backcountry districts [@greene1932american; @wells1975population]. Second, Indigenous demographic trajectories across the Great Plains, Far West and Trans-Appalachia rely on Ubelaker and Milner-Chaplin regional syntheses carrying wider uncertainty intervals (+/- 26-38%) than Atlantic provincial rolls [@ubelaker1988north; @milner2010eastern]. Third, static 1754AD provincial masks group contested western claims (such as the Ohio forks and upper Connecticut Valley) into fixed polygons prior to the Treaty of Paris partition in `colonial_america_to_1783`.

# Sources

<div id="refs"></div>
