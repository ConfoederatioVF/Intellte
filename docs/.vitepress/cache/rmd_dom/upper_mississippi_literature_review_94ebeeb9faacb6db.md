---
title: "Upper Mississippi Hydrological Unit (HU 07): Demographic Reconstruction"
subtitle: "CENTAUR-II: Hopewell, Effigy Mounds and Cahokia/American Bottom Series, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_mississippi_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_mississippi_spatial.png"
hero_caption: "Sub-regional areal masks and excavated mound centres across Upper Mississippi Hydrological Unit 07 (486,8k km2), spanning the Driftless Area, Oneota drift plains and American Bottom."
hero_label: "fig:hero-upper-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the pre-Columbian population of Upper Mississippi Hydrological Unit 07 (486.781 km² across 7.785 5-arcminute grid cells) from 10.000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Stretching from the Minnesota headwaters and Driftless Zone through the Iowa-Des Moines-Rock drift plains to the American Bottom confluence, HU 07 hosted Middle Woodland Hopewell earthworks, Late Woodland Effigy Mounds, the Cahokia Mississippian urban core and Oneota village networks [@theler2003driftless; @milner1998cahokia; @pauketat2004cahokia]. Combining N = 1.892 radiocarbon dates from Kelly et al. with non-stationary Matérn ($\nu = 3/2$) kriging and alluvial carrying-capacity anchors, basin population grew from 900 (828-972) in 10.000BC to 130k (119,6-140,4k) in 0AD and peaked sharply at 290k (266,8-313,2k) in 1100AD, aligning with the Kelly et al. HU 07 median radiocarbon peak of 1107AD (843 cal BP) [@kelly2025]. Following drought stress, warfare and the Vacant Quarter exodus from the American Bottom after 1200AD, regional numbers contracted to 162k in 1400AD and 150k (138-162k) by 1600AD, concentrated among northern Oneota and Siouan-Algonquian communities [@benson2009cahokia; @cobb2002vacant; @milner2010].



# Background

Upper Mississippi Hydrological Unit 07 drains Minnesota, Wisconsin, Iowa, Illinois and eastern Missouri above the Ohio River confluence [@seaber1987hydrologic]. Glacial till plains, the unglaciated Driftless Area and broad braided alluvial floodplains along the Illinois and Mississippi rivers created rich aquatic backwaters, oak-savanna mast resources and fertile silt-loam terraces [@theler2003driftless].

Middle Woodland Havana-Hopewell and Trempealeau communities built burial mounds and riverine villages between 100BC and 400AD, followed by Late Woodland Effigy Mound societies across the Driftless uplands [@theler2003driftless]. After 900AD, intensive maize agriculture transformed the American Bottom floodplain opposite St. Louis into the largest urban concentration north of Mesoamerica, peaking around Cahokia, East St. Louis and Mitchell at 1050-1150AD [@milner1998cahokia; @pauketat2004cahokia]. Between 1200AD and 1400AD, prolonged droughts and fortified conflict emptied much of the lower floodplain (the Vacant Quarter), shifting regional demographic weight northward into Oneota villages across Iowa, Wisconsin and Minnesota [@benson2009cahokia; @cobb2002vacant; @krus2016timing].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration draws on Kelly et al. Table 1 for HU 07 (N = 1.892 radiocarbon dates; error <= 100 years) [@kelly2025]. Across 500 running-mean windows, Kelly et al. report a peak mode ranging from 808 to 925 cal BP (1025-1142AD), with a first quartile at 828 cal BP (1122AD), a third quartile at 869 cal BP (1081AD), a mean of 850 cal BP (1100AD) and a median peak at 843 cal BP (1107AD) [@kelly2025].

HU 07 is partitioned into three 5-arcminute areal masks totalling 7.785 cells (486.781 km²): Upper Mississippi Headwaters, Minnesota River and Driftless Zone (260.630 km²), Iowa-Des Moines, Rock and Upper Illinois Drift Plains (158.130 km²) and American Bottom, Lower Illinois and Mississippi-Missouri Confluence (68.021 km²). Benchmark series across 23 intervals disaggregate macro-regional demographic totals [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] using `p3k14c` radiocarbon curves and floodplain-mound carrying capacities [@peros2010prehistoric; @milner1998cahokia; @milner2023agriculture].

## Dasymetric Kriging and Uncertainty Bounds

Pixel allocation applies Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging trained on `p3k14c` site densities across ten Holocene horizons with a 300 km cross-frontier conditioning belt across the Ohio, Great Lakes and Lower Missouri valleys [@bird2022p3k14c]. North American variograms ($\tau_1 = 1,25$, $\tau_2 = 2,6$) achieve $R^2 = 0,9733$ to $0,9992$, with diagnostics stamped in GMT+0. A symmetric $\pm 8\%$ structural interval bounds each sub-regional estimate.

<figure class="crd-table-figure" id="tab:subregions-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Mississippi Headwaters, Minnesota River &amp; Driftless Zone</strong></td><td class="crd-td">4.318</td><td class="crd-td">260.630</td><td class="crd-td">42,54-47,71N, 87,88-97,29W</td><td class="crd-td">1200AD (82k)</td></tr>
<tr><td class="crd-td"><strong>Iowa-Des Moines, Rock &amp; Upper Illinois Drift Plains (Oneota)</strong></td><td class="crd-td">2.447</td><td class="crd-td">158.130</td><td class="crd-td">39,88-42,46N, 85,88-95,04W</td><td class="crd-td">1200AD (86k)</td></tr>
<tr><td class="crd-td"><strong>American Bottom, Lower Illinois &amp; Mississippi-Missouri Confluence (Cahokia)</strong></td><td class="crd-td">1.020</td><td class="crd-td">68.021</td><td class="crd-td">37,04-39,79N, 88,12-92,38W</td><td class="crd-td">1100AD (126k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Upper Mississippi HU 07.</figcaption>
</figure>

# Testing and Validation

Validation tests confirm close agreement with midcontinental archaeological syntheses. First, the HU 07 population maximum of 290k in 1100AD falls within seven years of the Kelly et al. radiocarbon median peak of 1107AD (843 cal BP) and matches the Stirling-phase zenith at Cahokia [@kelly2025; @pauketat2004cahokia]. Second, separating the American Bottom from the northern Driftless and Oneota zones reproduces the sharp boom-and-bust trajectory of the southern floodplain (+117,2% between 600AD and 1100AD, followed by -80,9% between 1100AD and 1400AD) alongside much steadier northern Oneota trajectories [@benson2009cahokia; @cobb2023vacant].

Third, the regional total of 172k in 1500AD aligns with Milner and Chaplin's spatial interpolation of late precontact Eastern North American population densities across the Midwest [@milner2010]. Gazetteer reconciliation verifies 12 included mound and village complexes and 2 excluded Archaic shelter sites (`Koster` and `Modoc Rock Shelter`) with zero unaccounted entries.

# Results

## Long-Term Basin Trajectory

Population in Upper Mississippi HU 07 grew rapidly from 900 in 10.000BC to 24k in 5000BC, 74,5k in 2000BC and 130k (119,6-140,4k) in 0AD during the Middle Woodland Hopewell florescence (Figure \ref{fig:trajectory-upper-mississippi}) [@theler2003driftless]. After a slight post-Hopewell moderation in the American Bottom between 200AD (58k) and 400AD (54k), Late Woodland and Emergent Mississippian maize cultivation drove basin totals from 186k in 600AD to 216k in 800AD and a maximum of 290k (266,8-313,2k) in 1100AD [@milner1998cahokia; @milner2023agriculture].

<figure class="crd-figure-block" id="fig:trajectory-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi/fig2_upper_mississippi_trajectory.png" alt="fig:trajectory-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Upper Mississippi HU 07 from 10.000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

Between 1100AD and 1400AD, severe droughts, resource depletion and heightened warfare reduced the American Bottom sub-region from 126k to 24k while the northern Oneota and Headwaters sub-regions peaked in 1200AD (86k and 82k) before settling at 66k and 72k in 1400AD [@benson2009cahokia; @krus2016timing; @cobb2002vacant]. Total HU 07 population stood at 172k (158,2-185,8k) in 1500AD and 150k (138-162k) in 1600AD [@milner2010].

<figure class="crd-table-figure" id="tab:trajectory-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Mississippi Headwaters, Minnesota River &amp; Driftless Zone</strong></td><td class="crd-td">150</td><td class="crd-td">6,8k</td><td class="crd-td">36k</td><td class="crd-td">51k</td><td class="crd-td">69k</td><td class="crd-td">79k</td><td class="crd-td">76k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Iowa-Des Moines, Rock &amp; Upper Illinois Drift Plains (Oneota)</strong></td><td class="crd-td">350</td><td class="crd-td">8k</td><td class="crd-td">44k</td><td class="crd-td">60k</td><td class="crd-td">75k</td><td class="crd-td">85k</td><td class="crd-td">74k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>American Bottom, Lower Illinois &amp; Mississippi-Missouri Confluence (Cahokia)</strong></td><td class="crd-td">400</td><td class="crd-td">9,2k</td><td class="crd-td">50k</td><td class="crd-td">54k</td><td class="crd-td">72k</td><td class="crd-td">126k</td><td class="crd-td">52k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Upper Mississippi HU 07 Total</strong></td><td class="crd-td">900</td><td class="crd-td">24k</td><td class="crd-td">130k</td><td class="crd-td">165k</td><td class="crd-td">216k</td><td class="crd-td">290k</td><td class="crd-td">202k</td><td class="crd-td">150k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Upper Mississippi HU 07, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

Although the American Bottom and Lower Illinois Confluence represents only 14% of HU 07 land area (68.021 km²), it concentrated 43,4% of total basin population at the 1100AD zenith (126k of 290k) (Figure \ref{fig:shares-upper-mississippi}). Following the Vacant Quarter contraction, its share collapsed to 14,8% in 1400AD (24k of 162k) and 16% in 1600AD (24k of 150k), while the northern Headwaters-Driftless Zone and Iowa-Des Moines-Rock Oneota plains rose to hold 84% of late precontact inhabitants [@cobb2002vacant; @theler2003driftless].

<figure class="crd-figure-block" id="fig:shares-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi/fig3_upper_mississippi_shares.png" alt="fig:shares-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Upper Mississippi HU 07 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three methodological constraints apply to HU 07. First, high-density Mississippian urban centres such as Cahokia and East St. Louis are under-dated by radiocarbon relative to earlier Archaic and Woodland camps, requiring explicit architectural house-count calibration [@milner1998cahokia; @kelly2025]. Second, nineteenth- and twentieth-century levee construction and urban sprawl around St. Louis destroyed smaller floodplain hamlets across the American Bottom [@pauketat2004cahokia]. Third, historic pandemic mortality arriving indirectly via interior trade networks between 1540AD and 1600AD introduces wider uncertainty in the final sixteenth-century step [@milner2010; @ubelaker2006].

# Sources

<div id="refs"></div>
