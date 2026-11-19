---
title: "Colonial Canada until Confederation"
subtitle: "CENTAUR-II: British North American Censuses, Assiniboia, British Columbia and Greenland, 1763 to 1867AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1867_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1867_spatial.png"
hero_caption: "Sub-regional areal mask and 129 catalogued settlements across 12 British North American, French and Danish Greenlandic territories, 1763 to 1867AD."
hero_label: "fig:hero-colonial-canada-to-1867"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper synthesises the demographic trajectory of British North America, Rupert's Land, Saint-Pierre-et-Miquelon and Greenland from the 1763AD Treaty of Paris to Canadian Confederation in 1867AD under Operation Viscount CENTAUR-II. Across twelve sub-regional areal masks spanning 10.983.153 km2 (324.487 5-arcminute pixels), total population multiplied eleven-fold from 330,31k in 1763AD to 441,75k in 1790AD, 1,06M (1.061.750) in 1825AD, 2,62M (2.616.304) in 1851AD, 3,45M (3.449.611) in 1861AD and 3,64M (3.644.650) by 1867AD [@statcan1876censuses]. Anchored directly to Volume IV of *Censuses of Canada 1665 to 1871*, Newfoundland colony returns, Hudson's Bay Company Assiniboia rolls and Danish Royal Greenland Trade (*Folketælling*) schedules [@statcan1876censuses; @newfoundland1857abstract; @marquardt2002change], the series balances rapid Loyalist and British-Irish migration into Upper Canada, Lower Canada and the Maritimes against severe epidemic contraction in Western Canada. Between 1763AD and 1867AD, Upper Canada expanded from 21,5k to 1,54M (1.536.000), overtaking Lower Canada (76k to 1,13M), whilst British Columbia and Vancouver Island fell from 135k to 40k following the 1775-1782AD, 1836-1838AD and 1862-1863AD smallpox pandemics [@boyd1999coming; @daschuk2013clearing].

# Background

The century separating the Treaty of Paris (1763AD) and the British North America Act (1867AD) transformed northern North America from a predominantly Indigenous continent with a compact St. Lawrence colony into an urbanising agricultural dominion. Two demographic engines drove eastern expansion. First, United Empire Loyalist resettlement in 1783-1784AD seeded the Eastern Townships, the Upper St. Lawrence-Niagara peninsula (Upper Canada) and the Saint John River valley (New Brunswick, partitioned from Nova Scotia in 1784AD) [@statcan1876censuses]. Second, post-Napoleonic British, Scottish and Irish migration (1815-1855AD) combined with sustained *Canadien* natural increase in Lower Canada to push the St. Lawrence-Great Lakes axis above 2,5M inhabitants by 1861AD [@statcan1876censuses].

Across the western plains, subarctic shield and Pacific coast, demographic change moved in the opposite direction. Smallpox pandemics in 1781-1782AD and 1837-1838AD swept through Cree, Assiniboine, Blackfoot and Dene nations in Rupert's Land [@ray1974indians; @daschuk2013clearing], while three devastating coastal epidemics (1775-1782AD, 1836-1838AD and the 1862-1863AD Victoria outbreak) reduced Indigenous populations in British Columbia and Vancouver Island by more than two thirds even as the 1858-1863AD Fraser and Cariboo gold rushes brought temporary settler influxes [@boyd1999coming; @harris1994voices; @barman2007west].

# Methodology

## Twelve-Mask Territorial Partition and Colonial Censuses

The study domain preserves the 10.983.153 km2 northern grid while refining administrative boundaries to twelve masks: (1) Lower Canada / Canada East (1.448.756 km2); (2) Upper Canada / Canada West (921.563 km2); (3) Nova Scotia and Cape Breton (50.002 km2); (4) New Brunswick (67.993 km2); (5) Prince Edward Island (4.695 km2); (6) Newfoundland and Labrador (361.332 km2); (7) Saint-Pierre-et-Miquelon (164 km2); (8) District of Assiniboia / Red River Settlement (135.719 km2); (9) Rupert's Land Prairies (1.696.057 km2); (10) Vancouver Island and British Columbia (927.129 km2); (11) North-Western Territory and High Arctic (3.406.725 km2); and (12) Danish Inspectorates of North, South and East Greenland (1.963.018 km2).

Provincial trajectories calibrate directly to Volume IV of *Censuses of Canada 1665 to 1871*, incorporating enumerated figures for Lower Canada (1765, 1784, 1790, 1825, 1831, 1844, 1851, 1861AD), Upper Canada (1806, 1811, 1824, 1825, 1831, 1841, 1848, 1851, 1861AD), Nova Scotia (1767, 1817, 1827, 1838, 1851, 1861AD), New Brunswick (1824, 1834, 1840, 1851, 1861AD), Prince Edward Island (1798, 1827, 1833, 1841, 1848, 1861AD) and the HBC Assiniboia censuses (1831-1856AD, plus 1870AD) [@statcan1876censuses]. Unenumerated northern Ungava, Patricia and prairie First Nations and Métis populations are added explicitly using Ubelaker, Ray and Helm baselines [@ubelaker1988north; @ray1974indians; @helm1981subarctic]. Newfoundland draws on the 1836, 1845, 1857 and 1869AD colonial censuses [@newfoundland1857abstract]; Saint-Pierre-et-Miquelon follows Ribault and French colonial returns [@ribault1962iles]; and Greenland pairs the 1805, 1840 and 1860AD *Folketælling* with East Greenland estimates [@marquardt2002change; @gad1973history].

## Non-Stationary Matérn Kriging Calibration

Intra-regional pixel allocation uses `sites_p3k14c_na` Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging surfaces ($\tau_1 = 1,25$, $\tau_2 = 2,6$) combined with nineteenth-century Canadian urban hierarchy weights [@paciorek2006spatial].

# Testing and Validation

Arithmetic validation confirms exact sub-regional additivity across all eleven benchmarks from 1763AD (`330.312`) to 1867AD (`3.644.650`) and tight continuity with `colonial_canada_to_1763` (`330.512` vs `330.312`, a 200-person boundary adjustment on the Labrador-Saint-Pierre partition). Table \ref{tab:validation-1867} compares enumerated colonial census totals in 1851AD and 1861AD against full module benchmarks including unenumerated northern Indigenous populations.

<figure class="crd-table-figure" id="tab:validation-1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colony or District</th><th class="crd-th">Census 1851</th><th class="crd-th">Module 1851</th><th class="crd-th">Census 1861</th><th class="crd-th">Module 1861</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Canada (Quebec)</strong></td><td class="crd-td">890.261</td><td class="crd-td">899.000</td><td class="crd-td">1.111.566</td><td class="crd-td">1.120.000</td></tr>
<tr><td class="crd-td"><strong>Upper Canada (Ontario)</strong></td><td class="crd-td">952.004</td><td class="crd-td">963.000</td><td class="crd-td">1.396.091</td><td class="crd-td">1.407.000</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">276.854</td><td class="crd-td">276.854</td><td class="crd-td">330.857</td><td class="crd-td">330.857</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">193.800</td><td class="crd-td">193.800</td><td class="crd-td">252.047</td><td class="crd-td">252.047</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">62.678 (1848)</td><td class="crd-td">67.500</td><td class="crd-td">80.857</td><td class="crd-td">80.857</td></tr>
<tr><td class="crd-td"><strong>Newfoundland</strong></td><td class="crd-td">101.600</td><td class="crd-td">103.000</td><td class="crd-td">124.288 (1857)</td><td class="crd-td">131.500</td></tr>
<tr><td class="crd-td"><strong>Assiniboia / Red River</strong></td><td class="crd-td">5.391 (1849)</td><td class="crd-td">12.400</td><td class="crd-td">6.691 (1856)</td><td class="crd-td">15.800</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of British North American colonial censuses (1851 and 1861AD) against CENTAUR-II module totals including unenumerated Indigenous residents.</figcaption>
</figure>

# Results

## Eastern Growth and Loyalist-British Migration (1763 to 1867AD)

Eastern British North America drove the entire net demographic expansion of the century (Figure \ref{fig:traj-cc1867}). Upper Canada grew seventy-one-fold from 21,5k in 1763AD to 170k in 1825AD, 963k in 1851AD and 1,54M (1.536.000) in 1867AD, overtaking Lower Canada between 1841AD and 1851AD (Figure \ref{fig:shares-cc1867}). Lower Canada expanded nearly fifteen-fold from 76k to 1,13M (1.125.000) over the same period, while Nova Scotia reached 364k, New Brunswick 271k, Newfoundland and Labrador 142,8k and Prince Edward Island 89k by 1867AD (Table \ref{tab:regions-cc1867}) [@statcan1876censuses]. Saint-Pierre-et-Miquelon experienced severe wartime oscillation, dropping from 1,5k in 1790AD to 50 inhabitants during British deportations in 1805AD before French fisheries restoration lifted it to 4,2k by 1867AD [@ribault1962iles].

<figure class="crd-figure-block" id="fig:traj-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867/fig2_colonial_canada_to_1867_trajectory.png" alt="fig:traj-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across twelve British North American, French and Greenlandic sub-regions from 1763 to 1867AD.</figcaption>
</figure>

## Western Contraction, Red River and Greenland

Across the western prairies and Pacific slope, epidemic shocks produced sharp demographic divergence. Rupert's Land Prairies dropped from 31,5k in 1763AD to 21k in 1784AD following the 1781-1782AD smallpox outbreak and dipped again from 28,5k in 1831AD to 22k in 1841AD after the 1837-1838AD epidemic [@daschuk2013clearing; @ray1974indians]. British Columbia and Vancouver Island declined from 135k in 1763AD to 48k in 1851AD, spiked briefly to 55k during the 1861AD gold rush and fell to 40k by 1867AD after the 1862-1863AD smallpox pandemic [@boyd1999coming; @barman2007west]. Meanwhile, the Red River Settlement (Assiniboia) grew steadily from 6,5k in 1763AD to 18,5k in 1867AD, and Greenland's coastal settlements rose from 6,6k to 10,95k [@statcan1876censuses; @marquardt2002change].

<figure class="crd-figure-block" id="fig:shares-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867/fig3_colonial_canada_to_1867_shares.png" alt="fig:shares-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Canada and Greenland from 1763 to 1867AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">1763AD</th><th class="crd-th">1790AD</th><th class="crd-th">1815AD</th><th class="crd-th">1831AD</th><th class="crd-th">1851AD</th><th class="crd-th">1861AD</th><th class="crd-th">1867AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Canada / Canada East (Province of Quebec)</strong></td><td class="crd-td">1.448.756</td><td class="crd-td">76k</td><td class="crd-td">170,5k</td><td class="crd-td">355k</td><td class="crd-td">562k</td><td class="crd-td">899k</td><td class="crd-td">1,12M</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>2. Upper Canada / Canada West (Province of Ontario)</strong></td><td class="crd-td">921.563</td><td class="crd-td">21,5k</td><td class="crd-td">38k</td><td class="crd-td">112k</td><td class="crd-td">248,5k</td><td class="crd-td">963k</td><td class="crd-td">1,41M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">50.002</td><td class="crd-td">10,8k</td><td class="crd-td">42k</td><td class="crd-td">81,5k</td><td class="crd-td">152k</td><td class="crd-td">276,9k</td><td class="crd-td">330,9k</td><td class="crd-td">364k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of New Brunswick</strong></td><td class="crd-td">67.993</td><td class="crd-td">3,8k</td><td class="crd-td">24k</td><td class="crd-td">56k</td><td class="crd-td">105k</td><td class="crd-td">193,8k</td><td class="crd-td">252k</td><td class="crd-td">271k</td></tr>
<tr><td class="crd-td"><strong>5. Colony of Prince Edward Island</strong></td><td class="crd-td">4.695</td><td class="crd-td">1,5k</td><td class="crd-td">4k</td><td class="crd-td">13,5k</td><td class="crd-td">29,5k</td><td class="crd-td">67,5k</td><td class="crd-td">80,9k</td><td class="crd-td">89k</td></tr>
<tr><td class="crd-td"><strong>6. Colony of Newfoundland and Labrador</strong></td><td class="crd-td">361.332</td><td class="crd-td">15,7k</td><td class="crd-td">19,3k</td><td class="crd-td">43k</td><td class="crd-td">67k</td><td class="crd-td">103k</td><td class="crd-td">131,5k</td><td class="crd-td">142,8k</td></tr>
<tr><td class="crd-td"><strong>7. French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">164</td><td class="crd-td">400</td><td class="crd-td">1,5k</td><td class="crd-td">250</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>8. District of Assiniboia / Red River Settlement</strong></td><td class="crd-td">135.719</td><td class="crd-td">6,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td><td class="crd-td">8,5k</td><td class="crd-td">12,4k</td><td class="crd-td">15,8k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>9. Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">1.696.057</td><td class="crd-td">31,5k</td><td class="crd-td">22,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">24,5k</td><td class="crd-td">27k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>10. Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">927.129</td><td class="crd-td">135k</td><td class="crd-td">88k</td><td class="crd-td">72k</td><td class="crd-td">60k</td><td class="crd-td">48k</td><td class="crd-td">55k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>11. North-Western Territory and High Arctic</strong></td><td class="crd-td">3.406.725</td><td class="crd-td">21k</td><td class="crd-td">19,5k</td><td class="crd-td">18,2k</td><td class="crd-td">17,4k</td><td class="crd-td">16,2k</td><td class="crd-td">15,6k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>12. Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">1.963.018</td><td class="crd-td">6,6k</td><td class="crd-td">7k</td><td class="crd-td">7,7k</td><td class="crd-td">8,7k</td><td class="crd-td">10,1k</td><td class="crd-td">10,8k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">10.983.153</td><td class="crd-td">330,3k</td><td class="crd-td">441,8k</td><td class="crd-td">792k</td><td class="crd-td">1,29M</td><td class="crd-td">2,62M</td><td class="crd-td">3,45M</td><td class="crd-td">3,64M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population totals across twelve territories of Colonial Canada and Greenland, 1763 to 1867AD.</figcaption>
</figure>

# Limitations

Three limitations constrain the 1763-1867AD series. First, pre-1851AD Upper Canada assessment rolls under-counted non-landowning labourers, transient timber workers and northern Ojibwe-Cree bands, yielding +/- 15% error bands prior to 1805AD [@statcan1876censuses]. Second, Red River Assiniboia census totals exclude nomadic Métis buffalo-hunting brigades and adjacent Plains First Nations, requiring an additional 7k-10k adjustment above enumerated parish lists [@ray1974indians]. Third, British Columbia's 1858-1863AD placer gold-rush influx and simultaneous 1862-1863AD coastal smallpox epidemic produced sharp intercensal swings poorly captured by decennial interpolation prior to the 1871-1881AD Dominion censuses [@boyd1999coming; @barman2007west].

# Sources

<div id="refs"></div>
