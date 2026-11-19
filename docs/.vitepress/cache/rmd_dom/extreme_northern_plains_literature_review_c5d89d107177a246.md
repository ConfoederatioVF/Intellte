---
title: "Extreme Northern Plains Hydrological Unit (HU 09): Demographic Reconstruction"
subtitle: "CENTAUR-II: Souris-Red-Rainy Glacial Lake Agassiz Basin, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: extreme_northern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_extreme_northern_plains_spatial.png"
hero_caption: "Sub-regional areal masks and excavated mound centres across Extreme Northern Plains Hydrological Unit 09 (144,3k km2), covering the Souris Drift Prairie, Red River of the North and Rainy River borderlands."
hero_label: "fig:hero-extreme-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the pre-Columbian population of Extreme Northern Plains Hydrological Unit 09 (144.278 km² across 2.539 5-arcminute grid cells) from 10.000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Spanning the Souris Loop and Devils Lake Drift Prairie, the Red River of the North Valley and the Rainy River and Lake of the Woods boreal margin, the basin opened to human habitation only after Glacial Lake Agassiz drained after 9000BC [@teller2002freshwater]. Combining summed probability distributions from N = 149 radiocarbon dates with non-stationary Matérn ($\nu = 3/2$) kriging and Woodland burial-mound carrying capacities, regional numbers rose from 0 in 10.000BC to 300 in 9000BC, 5,8k in 5000BC and 19,8k (18,2-21,4k) in 0AD [@kelly2025; @stoltman1973laurel; @johnson1973arvilla]. Population peaked at 26,7k (24,6-28,8k) around 800AD, aligning with the Kelly et al. median radiocarbon peak of 827AD (1.123 cal BP), before easing to 24,1k in 1100AD and 19,4k (17,8-21k) by 1600AD as bison-hunting and wild-rice groups adjusted to late Holocene climatic cooling [@kelly2025; @gregg1994plains; @toom2004northeastern].



# Background

Extreme Northern Plains Hydrological Unit 09 occupies the flat lacustrine plain of Glacial Lake Agassiz and the adjacent glacial drift prairies along the United States-Canada border in North Dakota and northern Minnesota [@seaber1987hydrologic; @teller2002freshwater]. Unlike downstream Missouri River valleys, the basin drains northward toward Hudson Bay through the Souris, Red and Rainy river systems, linking the shortgrass prairie edge to the boreal conifer forest [@syms1977cultural].

At 10.000BC, ice-dammed meltwaters still covered much of the Red River and Rainy River lowlands; final drainage stages after 9000BC exposed productive wetlands, oak-gallery river corridors and wild-rice lakes [@teller2002freshwater]. By the first millennium BC, Middle and Late Woodland communities including the Laurel, Sonota-Besant, Arvilla and Rainy River complexes established seasonal sturgeon fisheries, wild-rice camps and earthen burial-mound ceremonial centres at Grand Mound, McKinstry, Arvilla and Devils Lake [@stoltman1973laurel; @johnson1973arvilla; @lenius1990rainy].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Demographic timing follows the Kelly et al. IntCal20 radiocarbon analysis for HU 09 (N = 149 dates; error <= 100 years) [@kelly2025]. Across 500 running-mean windows, Kelly et al. identify a peak mode spanning 980 to 1.163 cal BP (787-970AD), with a first quartile at 1.028 cal BP (922AD), a third quartile at 1.139 cal BP (811AD), a mean of 1.094 cal BP (856AD) and a median peak of 1.123 cal BP (827AD) [@kelly2025].

HU 09 is divided into three 5-arcminute areal masks totalling 2.539 pixels (144.278 km²): Souris Loop and Devils Lake Drift Prairie (710 pixels; 40.452 km²), Red River of the North Valley (1.261 pixels; 72.954 km²) and Rainy River and Lake of the Woods Boreal Border (568 pixels; 30.872 km²). Sub-regional benchmark trajectories from 10.000BC to 1600AD disaggregate continental benchmarks [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] using radiocarbon density curves and documented Woodland and Northeastern Plains Village carrying capacities [@peros2010prehistoric; @gregg1994plains; @toom2004northeastern].

## Dasymetric Kriging and Uncertainty Bounds

Gridded population allocation applies Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging over `p3k14c` site densities with a 300 km cross-frontier conditioning belt across Manitoba, Saskatchewan and northwestern Ontario [@bird2022p3k14c]. Across North America, fitted variograms ($\tau_1 = 1,25$, $\tau_2 = 2,6$) achieve $R^2 = 0,9733$ to $0,9992$, with processing metadata logged in GMT+0. A symmetric $\pm 8\%$ structural uncertainty band brackets each benchmark after post-glacial emergence, with a nominal 0-5 person floor at 10.000BC per sub-region.

<figure class="crd-table-figure" id="tab:subregions-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop &amp; Devils Lake Drift Prairie</strong></td><td class="crd-td">710</td><td class="crd-td">40.452</td><td class="crd-td">46,71-48,88N, 98,21-113,96W</td><td class="crd-td">800AD (7,6k)</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">1.261</td><td class="crd-td">72.954</td><td class="crd-td">45,46-48,88N, 95,21-98,12W</td><td class="crd-td">800AD (13,6k)</td></tr>
<tr><td class="crd-td"><strong>Rainy River &amp; Lake of the Woods Boreal Border</strong></td><td class="crd-td">568</td><td class="crd-td">30.872</td><td class="crd-td">47,46-49,38N, 90,54-95,12W</td><td class="crd-td">800AD (5,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Extreme Northern Plains HU 09.</figcaption>
</figure>

# Testing and Validation

Model validation tests both early post-glacial boundary conditions and Late Woodland demographic timing. First, setting 10.000BC population to zero across all three sub-regions reflects Glacial Lake Agassiz inundation prior to the Moorhead and Emerson phases [@teller2002freshwater]. Second, the reconstructed basin peak of 26,7k in 800AD sits within 27 years of the Kelly et al. HU 09 radiocarbon median peak of 827AD (1.123 cal BP) [@kelly2025].

Third, the gentle 14,2% post-peak moderation between 800AD (26,7k) and 1200AD (23k) matches archaeological evidence for stable Northeastern Plains Village horticultural-bison adaptations along the Sheyenne and Red rivers rather than abrupt Mississippian collapse [@gregg1994plains; @toom2004northeastern; @milner2010]. Gazetteer reconciliation verifies all four included mound complexes and one excluded seasonal camp aggregate in the source ledger.

# Results

## Long-Term Basin Trajectory

Human numbers in HU 09 expanded rapidly once Lake Agassiz receded, rising from 300 in 9000BC and 1k in 8000BC to 5,8k in 5000BC, 13,8k in 2000BC and 19,8k (18,2-21,4k) in 0AD (Figure \ref{fig:trajectory-extreme-northern-plains}). Woodland mound construction and wetland wild-rice harvesting lifted population to 23,6k in 400AD and a maximum of 26,7k (24,6-28,8k) in 800AD [@stoltman1973laurel; @lenius1990rainy].

<figure class="crd-figure-block" id="fig:trajectory-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains/fig2_extreme_northern_plains_trajectory.png" alt="fig:trajectory-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Extreme Northern Plains HU 09 from 10.000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

Between 800AD and 1600AD, population eased gradually to 25,3k in 1000AD, 24,1k in 1100AD, 21,9k in 1300AD and 19,4k (17,8-21k) in 1600AD. Unlike the Upper Colorado and American Bottom basins, HU 09 shows no abrupt thirteenth-century demographic rupture, reflecting lower dependence on high-density maize monoculture and continued access to migratory bison herds and northern lake fisheries [@syms1977cultural; @toom2004northeastern].

<figure class="crd-table-figure" id="tab:trajectory-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris Loop &amp; Devils Lake Drift Prairie</strong></td><td class="crd-td">0</td><td class="crd-td">1,7k</td><td class="crd-td">5,9k</td><td class="crd-td">6,9k</td><td class="crd-td">7,6k</td><td class="crd-td">6,8k</td><td class="crd-td">6k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Red River of the North Valley</strong></td><td class="crd-td">0</td><td class="crd-td">2,9k</td><td class="crd-td">9,8k</td><td class="crd-td">11,8k</td><td class="crd-td">13,6k</td><td class="crd-td">12,3k</td><td class="crd-td">11,2k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Rainy River &amp; Lake of the Woods Boreal Border</strong></td><td class="crd-td">0</td><td class="crd-td">1,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,9k</td><td class="crd-td">5,5k</td><td class="crd-td">5k</td><td class="crd-td">4,7k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Extreme Northern Plains HU 09 Total</strong></td><td class="crd-td">0</td><td class="crd-td">5,8k</td><td class="crd-td">19,8k</td><td class="crd-td">23,6k</td><td class="crd-td">26,7k</td><td class="crd-td">24,1k</td><td class="crd-td">21,9k</td><td class="crd-td">19,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Extreme Northern Plains HU 09, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

The Red River of the North Valley consistently contained slightly over half of the basin population, rising from 49,5% in 0AD (9,8k of 19,8k) to 50,9% in 800AD (13,6k of 26,7k) and 51,5% in 1600AD (10k of 19,4k) (Figure \ref{fig:shares-extreme-northern-plains}). Souris Loop and Devils Lake Drift Prairie contributed 26,8% to 29,8% across the Common Era, while the Rainy River and Lake of the Woods boreal margin held a steady 20,6% to 21,6% supported by spring sturgeon runs and autumn wild-rice harvests [@lenius1990rainy; @stoltman1973laurel].

<figure class="crd-figure-block" id="fig:shares-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains/fig3_extreme_northern_plains_shares.png" alt="fig:shares-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Extreme Northern Plains HU 09 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three limitations affect HU 09 estimates. First, HU 09 carries the smallest radiocarbon sample in the Kelly et al. contiguous United States dataset (N = 149), widening sampling variance around the 827AD peak [@kelly2025]. Second, the United States HUC-2 boundary truncates the northern half of the Red, Souris and Winnipeg drainage systems at the 49th parallel, requiring cross-border conditioning against CENTAUR-I Canadian Prairies and Hudson Bay masks [@syms1977cultural]. Third, mobile seasonal bison-hunting camps on the Drift Prairie leave ephemeral hearths that are under-represented relative to monumental Laurel and Arvilla burial mounds [@johnson1973arvilla; @gregg1994plains].

# Sources

<div id="refs"></div>
