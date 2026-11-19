---
title: "Northern Plains Hydrological Unit (HU 10): Demographic Reconstruction"
subtitle: "CENTAUR-II: Missouri Basin, Wyoming High Plains and Earthlodge Villages, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_plains_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_plains_spatial.png"
hero_caption: "Sub-regional areal masks and verified settlement locations across Northern Plains Hydrological Unit 10 (1,31M km2), spanning Montana, Wyoming, the Middle Missouri Trench and the Lower Missouri prairie-plains."
hero_label: "fig:hero-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Northern Plains Hydrological Unit 10 (1.313.695 km² across 21.082 5-arcminute grid cells) from 10.000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Covering the Missouri River drainage from Montana and Wyoming through the Middle Missouri Trench to the Platte and Lower Missouri prairies, HU 10 exhibits a bimodal demographic architecture identified in the Kelly et al. radiocarbon corpus (N = 3.422 dates, pooled median peak 857AD) [@kelly2025]. When decomposed across four ecological sub-regions, high-plains bison-procurement zones in Montana and Wyoming peak around 800AD (36,5k and 29k respectively, matching the Wyoming-only radiocarbon mode of 772AD), whereas the Middle and Lower Missouri horticultural plains expand to 73k and 114k in 1200AD (matching the non-Wyoming HU 10 mode of 1257AD) [@kelly2025; @lehmer1971middle; @frison1991prehistoric]. Combined basin population rose from 1,4k (1,3-1,5k) in 10.000BC to 126k (115,9-136,1k) in 0AD, peaked at 236,5k (217,6-255,4k) in 1200AD and stood at 177,5k (163,3-191,7k) in 1600AD [@gover2024seeds; @milner2010].



# Background

Northern Plains Hydrological Unit 10 is the largest drainage basin in the contiguous United States, stretching from the Rocky Mountain Front across shortgrass steppes to tallgrass prairie-woodland ecotones along the Missouri-Mississippi confluence [@seaber1987hydrologic]. Precipitation increases sharply eastward from under 350 mm in Wyoming and central Montana to over 900 mm in eastern Kansas and Missouri, dividing the basin between specialised communal bison hunters in the west and maize-bean-squash earthlodge villagers in the east [@frison1991prehistoric; @lehmer1971middle; @wedel1959kansas].

Between 1000AD and 1400AD, Initial and Extended Middle Missouri populations erected fortified earthlodge towns along the Missouri River terraces in North and South Dakota, while Central Plains Tradition hamlets and Steed-Kisker communities settled the Platte, Republican and Lower Missouri valleys [@lehmer1971middle; @gover2024seeds; @bamforth2018warfare]. Following fourteenth-century droughts and inter-group conflict, protohistoric Coalescent and Quivira towns consolidated along major river corridors prior to European contact [@wedel1959kansas; @milner2010].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration draws on Kelly et al. Table 1 for HU 10, which aggregates N = 3.422 radiocarbon dates (error <= 100 years) and explicitly isolates compliance-survey sampling bias in Wyoming [@kelly2025]. Across all HU 10 dates, Kelly et al. report a median peak at 1.093 cal BP (857AD; range 1.022-1.173 cal BP, IQR 1.074-1.105 cal BP, mean 1.089 cal BP) [@kelly2025]. Disaggregated, the Wyoming HU 10 subset (N = 1.421) peaks at 1.178 cal BP (772AD; range 1.069-1.315 cal BP), while HU 10 excluding Wyoming (N = 2.001) peaks at 693 cal BP (1257AD; range 557-765 cal BP) [@kelly2025].

To capture this east-west ecological split, HU 10 is partitioned into four 5-arcminute areal masks totalling 21.082 pixels (1.313.695 km²): Upper Missouri and Milk-Marias Steppe (296.462 km²), Wyoming Basin including Yellowstone, Bighorn, Powder and North Platte (206.013 km²), Middle Missouri Trench (339.883 km²) and Platte, Republican and Lower Missouri Prairie-Plains (471.337 km²). Benchmark trajectories from 10.000BC to 1600AD weight macro-regional demographic totals [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] by sub-regional radiocarbon curves and earthlodge carrying capacities [@peros2010prehistoric; @lehmer1971middle].

## Dasymetric Kriging and Uncertainty Bounds

Pixel-level allocation relies on Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging trained on `p3k14c` site counts across ten Holocene horizons with a 300 km cross-frontier conditioning belt extending into Alberta, Saskatchewan and adjacent United States basins [@bird2022p3k14c]. Fitted North American variograms ($\tau_1 = 1,25$, $\tau_2 = 2,6$) achieve $R^2 = 0,9733$ to $0,9992$ with GMT+0 diagnostic logging. Each sub-regional benchmark carries a symmetric $\pm 8\%$ structural uncertainty interval.

<figure class="crd-table-figure" id="tab:subregions-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri &amp; Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">5.031</td><td class="crd-td">296.462</td><td class="crd-td">45,04-48,88N, 104,12-113,88W</td><td class="crd-td">800AD (36,5k)</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder &amp; North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">3.267</td><td class="crd-td">206.013</td><td class="crd-td">39,04-44,96N, 104,12-113,38W</td><td class="crd-td">800AD (29k)</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa &amp; Arikara Core (ND/SD)</strong></td><td class="crd-td">5.620</td><td class="crd-td">339.883</td><td class="crd-td">42,71-48,88N, 94,88-104,04W</td><td class="crd-td">1200AD (73k)</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican &amp; Lower Missouri Prairie-Plains (NE/KS/IA/MO)</strong></td><td class="crd-td">7.164</td><td class="crd-td">471.337</td><td class="crd-td">37,12-42,62N, 90,12-105,96W</td><td class="crd-td">1200AD (114k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Northern Plains HU 10.</figcaption>
</figure>

# Testing and Validation

Validation explicitly tests the spatial separation between western high plains and eastern Missouri horticultural basins. First, the Upper Missouri and Wyoming sub-regions peak in 800AD (36,5k and 29k), matching the Kelly et al. Wyoming radiocarbon median mode of 772AD (1.178 cal BP) [@kelly2025]. Second, the Middle Missouri Trench and Lower Missouri Prairie-Plains peak in 1200AD (73k and 114k), closely tracking the Kelly et al. non-Wyoming HU 10 median mode of 1257AD (693 cal BP) [@kelly2025; @gover2024seeds].

Third, the 13,7% decline in the Middle and Lower Missouri sub-regions between 1200AD and 1400AD (from 187k combined to 160k) reflects documented fourteenth-century fortified-village warfare, drought migration and the contraction of the Cahokia-Mississippian periphery [@bamforth2018warfare; @pauketat2004cahokia]. Gazetteer auditing confirms 17 included monuments and 2 excluded Palaeoindian hunting sites (`Anzick` and `Lindenmeier`) with zero unaccounted entries.

# Results

## Long-Term Basin Trajectory

HU 10 population grew continuously from 1,4k (1,3-1,5k) in 10.000BC to 28,3k in 5000BC, 74,6k in 2000BC and 126k (115,9-136,1k) in 0AD (Figure \ref{fig:trajectory-northern-plains}). Late Plains Woodland and early Village expansion carried numbers to 168k in 400AD and 211,5k (194,6-228,4k) in 800AD [@lehmer1971middle; @frison1991prehistoric].

<figure class="crd-figure-block" id="fig:trajectory-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains/fig2_northern_plains_trajectory.png" alt="fig:trajectory-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Northern Plains HU 10 from 10.000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

Between 800AD and 1200AD, western plains populations declined by 28,2% (from 65,5k combined to 49,5k) while Middle and Lower Missouri agricultural towns grew from 146k to 187k, lifting total HU 10 population to its maximum of 236,5k (217,6-255,4k) in 1200AD [@gover2024seeds]. Subsequent fourteenth-century aridification reduced the total to 202,2k in 1400AD, 194k in 1500AD and 177,5k (163,3-191,7k) in 1600AD [@wedel1959kansas; @milner2010].

<figure class="crd-table-figure" id="tab:trajectory-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Missouri &amp; Milk-Marias Steppe (Montana)</strong></td><td class="crd-td">350</td><td class="crd-td">6,6k</td><td class="crd-td">24k</td><td class="crd-td">31k</td><td class="crd-td">36,5k</td><td class="crd-td">32,5k</td><td class="crd-td">28,5k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Wyoming Basin: Yellowstone, Bighorn, Powder &amp; North Platte (Kelly HU 10-WY)</strong></td><td class="crd-td">300</td><td class="crd-td">5k</td><td class="crd-td">19k</td><td class="crd-td">25k</td><td class="crd-td">29k</td><td class="crd-td">21,5k</td><td class="crd-td">17,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Middle Missouri Trench: Mandan, Hidatsa &amp; Arikara Core (ND/SD)</strong></td><td class="crd-td">250</td><td class="crd-td">6,5k</td><td class="crd-td">31k</td><td class="crd-td">42k</td><td class="crd-td">56k</td><td class="crd-td">69k</td><td class="crd-td">71k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Platte, Republican &amp; Lower Missouri Prairie-Plains (NE/KS/IA/MO)</strong></td><td class="crd-td">500</td><td class="crd-td">10,2k</td><td class="crd-td">52k</td><td class="crd-td">70k</td><td class="crd-td">90k</td><td class="crd-td">108k</td><td class="crd-td">112k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Northern Plains HU 10 Total</strong></td><td class="crd-td">1,4k</td><td class="crd-td">28,3k</td><td class="crd-td">126k</td><td class="crd-td">168k</td><td class="crd-td">211,5k</td><td class="crd-td">231k</td><td class="crd-td">229k</td><td class="crd-td">177,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Northern Plains HU 10, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

The demographic centre of gravity shifted steadily eastward across the Holocene (Figure \ref{fig:shares-northern-plains}). In 10.000BC, Upper Missouri and Wyoming together held 46,4% of basin inhabitants (650 of 1,4k). By 1200AD, the Middle Missouri Trench (30,9%) and Lower Missouri Prairie-Plains (48,2%) combined accounted for 79,1% of the 236,5k regional total, maintaining a 78,3% share in 1600AD (139k of 177,5k) [@lehmer1971middle; @wedel1959kansas].

<figure class="crd-figure-block" id="fig:shares-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains/fig3_northern_plains_shares.png" alt="fig:shares-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Northern Plains HU 10 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three limitations affect HU 10 estimates. First, cultural-resource management excavations tied to oil and gas development inflate early radiocarbon counts in the Wyoming Basin (N = 1.421) relative to agricultural river terraces in Nebraska and Kansas, requiring sub-regional stratification [@kelly2025; @kelly2022new]. Second, nomadic tipis and seasonal bison-processing camps on the shortgrass plains leave low-visibility archaeological signatures compared to fortified Middle Missouri earthlodges [@frison1991prehistoric; @lehmer1971middle]. Third, protohistoric epidemics moving inland along trade corridors after 1520AD create higher uncertainty between 1550AD and 1600AD [@milner2010; @ubelaker2006].

# Sources

<div id="refs"></div>
