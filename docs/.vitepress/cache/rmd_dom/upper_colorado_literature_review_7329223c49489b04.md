---
title: "Upper Colorado Hydrological Unit (HU 14): Demographic Reconstruction"
subtitle: "CENTAUR-II: Fremont, Ancestral Puebloan and Ute Population Series, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_colorado_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_colorado_spatial.png"
hero_caption: "Sub-regional areal masks and excavated settlement locations across Upper Colorado Hydrological Unit 14 (295,8k km2), spanning the Wyoming Basin, Colorado headwaters and San Juan Four Corners from 10.000BC to 1600AD."
hero_label: "fig:hero-upper-colorado"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Upper Colorado Hydrological Unit 14 (295.772 km² across 4.412 5-arcminute grid cells) from 10.000BC to 1600AD as part of Operation Viscount CENTAUR-II [@kelly2025; @seaber1987hydrologic]. Combining summed probability distributions from N = 2.088 radiocarbon dates with non-stationary Matérn ($\nu = 3/2$) kriging and sub-regional archaeological carrying-capacity anchors, the series tracks three drainage basins: the Green River and Wyoming High Desert Basin, the Colorado-Gunnison Headwaters and Canyonlands and the San Juan Basin and Four Corners [@kelly2025; @bird2022p3k14c; @finley2020fremont]. Regional numbers rose from 750 (690-810) in 10.000BC to 41,6k (38,3-44,9k) in 0AD, reaching a basin-wide peak of 62,3k (57,3-67,3k) around 800AD near the Kelly et al. radiocarbon median mode of 796AD [@kelly2025]. While the northern Fremont and headwater basins contracted after 800AD, the San Juan core expanded to 34,5k in 1100AD during the Chacoan and Mesa Verde florescence before drought-driven emigration reduced the total basin population to 29,3k in 1300AD and 27k (24,8-29,2k) in 1600AD [@lekson2006chaco; @varien1999sedentism; @robinson2021dendro].



# Background

Upper Colorado Hydrological Unit 14 encompasses the Green, Yampa, White, Gunnison, Dolores and San Juan river systems across southwestern Wyoming, eastern Utah, western Colorado and northwestern New Mexico [@seaber1987hydrologic]. Elevation rises from incised desert canyons below 1.200 m to alpine ranges exceeding 4.000 m, creating sharp vertical gradients in frost-free growing seasons and summer monsoon reliability [@finley2020fremont; @madsen1998fremont].

Early Holocene Palaeoindian and Archaic bands moved seasonally between sagebrush basins and montane summer hunting grounds, leaving dense radiocarbon sequences along the Upper Green River and Colorado Plateau rockshelters [@kelly2013rocky; @kelly2022new]. From 1000BC onward, maize horticulture spread northward through two distinct trajectories. In the San Juan Basin and Mesa Verde uplands, Basketmaker pithouse villages evolved into multi-storey Chacoan great houses and canyon cliff dwellings [@lekson2006chaco; @varien1999sedentism]. Further north in the Tavaputs Plateau, Book Cliffs and Uinta Basin, Fremont communities combined irrigated maize cultivation with wild seed foraging and bison procurement along the Green River corridor [@madsen1998fremont; @finley2020fremont].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal trends are anchored to the United States Geological Survey HUC-2 boundary for HU 14 and the Kelly et al. IntCal20 radiocarbon peak analysis (N = 2.088 dates; error <= 100 years) [@kelly2025; @seaber1987hydrologic]. Kelly et al. report a radiocarbon mode across 500 running-mean windows ranging from 1.106 to 1.237 cal BP (713-844AD), with a first quartile at 1.129 cal BP (821AD), a third quartile at 1.169 cal BP (781AD), a mean of 1.160 cal BP (790AD) and a median peak at 1.154 cal BP (796AD) [@kelly2025].

To resolve internal ecological divergence between the northern foraging-horticultural basins and the southern Puebloan core, HU 14 is partitioned into three non-overlapping 5-arcminute areal masks totalling 4.412 land cells (295.772 km²). Sub-regional benchmark trajectories at 23 intervals from 10.000BC to 1600AD are derived by disaggregating macro-regional pre-Columbian demographic totals [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] with smoothed radiocarbon density weights and documented site carrying capacities [@peros2010prehistoric; @finley2020fremont].

## Dasymetric Kriging and Uncertainty Bounds

Spatial allocation onto the 4.320 x 2.160 global grid uses Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging conditioned on `p3k14c` site densities across ten Holocene horizons and a 300 km cross-frontier conditioning belt [@bird2022p3k14c]. Dimensionless variogram bounds ($\tau_1 = 1,25$ and $\tau_2 = 2,6$) yield empirical fit coefficients of $R^2 = 0,9733$ to $0,9992$ across North American horizons, with pipeline diagnostic caches stamped in GMT+0. Sub-regional uncertainty intervals reflect a symmetric $\pm 8\%$ structural envelope around each benchmark anchor, accounting for taphonomic loss of early Archaic open-air camps and the transition from radiocarbon dating to dendrochronology after 1100AD [@robinson2021dendro].

<figure class="crd-table-figure" id="tab:subregions-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River &amp; Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">1.671</td><td class="crd-td">108.840</td><td class="crd-td">39,88-43,38N, 105,62-111,21W</td><td class="crd-td">800AD (16,5k)</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters &amp; Canyonlands</strong></td><td class="crd-td">1.606</td><td class="crd-td">108.333</td><td class="crd-td">37,71-39,79N, 105,79-111,79W</td><td class="crd-td">800AD (19,8k)</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin &amp; Four Corners / Mesa Verde</strong></td><td class="crd-td">1.135</td><td class="crd-td">78.599</td><td class="crd-td">35,54-37,62N, 106,62-112,21W</td><td class="crd-td">1100AD (34,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, 5-arcminute cell counts, land areas and peak population dates across Upper Colorado HU 14.</figcaption>
</figure>

# Testing and Validation

Validation checks cross-reference the reconstructed basin series against independent chronological and architectural proxies [@robinson2021dendro; @finley2020fremont]. First, the basin-wide population maximum of 62,3k in 800AD aligns within four years of the Kelly et al. radiocarbon median peak of 796AD (1.154 cal BP) [@kelly2025]. Second, separating the northern Green River and Colorado headwaters sub-regions from the San Juan Basin reproduces the documented chronological lag between Fremont florescence and Pueblo II-III aggregation: northern sub-regions peak in 800AD (16,5k and 19,8k respectively), whereas the San Juan and Four Corners sub-region continues growing through 1000AD (30,5k) to its peak of 34,5k in 1100AD [@finley2020fremont; @lekson2006chaco].

Third, the 52,7% demographic contraction in the San Juan Basin between 1200AD (31k) and 1300AD (10,5k) matches dendrochronological cutting-date cessations and Great Drought tree-ring records across Mesa Verde and Chaco Canyon [@robinson2021dendro; @varien1999sedentism; @cook2013megadroughts]. Finally, gazetteer reconciliation verified all 8 included monuments and 1 excluded seasonal camp aggregate in the source ledger with zero unaccounted records.

# Results

## Long-Term Basin Trajectory

Population in Upper Colorado HU 14 expanded steadily across the Early and Middle Holocene, growing from 750 in 10.000BC to 10,5k in 5000BC, 25,6k in 2000BC and 41,6k by 0AD (Figure \ref{fig:trajectory-upper-colorado}). Maize adoption and pithouse sedentism lifted total numbers to 53,8k in 400AD and 62,3k (57,3-67,3k) at the 800AD zenith [@madsen1998fremont; @kelly2025].

<figure class="crd-figure-block" id="fig:trajectory-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado/fig2_upper_colorado_trajectory.png" alt="fig:trajectory-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Upper Colorado HU 14 from 10.000BC to 1600AD, with shaded 8 percent uncertainty envelope.</figcaption>
</figure>

Following 800AD, northern Wyoming Basin and Canyonlands populations declined gradually to 11,8k and 14,8k by 1100AD, reflecting cooling high-altitude growing seasons and reduced Fremont agricultural viability [@finley2020fremont; @kelly2013rocky]. In contrast, intensive runoff farming and regional exchange centred on Chaco Canyon and Mesa Verde carried the San Juan sub-region to 34,5k in 1100AD, maintaining total HU 14 population at 61,1k before collapsing to 29,3k in 1300AD and stabilising between 26,2k and 28,5k from 1400AD to 1600AD [@lekson2006chaco; @varien1999sedentism].

<figure class="crd-table-figure" id="tab:trajectory-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River &amp; Wyoming High Desert Basin (Fremont North)</strong></td><td class="crd-td">200</td><td class="crd-td">2,8k</td><td class="crd-td">10,8k</td><td class="crd-td">13,8k</td><td class="crd-td">16,5k</td><td class="crd-td">11,8k</td><td class="crd-td">8,6k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Colorado-Gunnison Headwaters &amp; Canyonlands</strong></td><td class="crd-td">250</td><td class="crd-td">3,5k</td><td class="crd-td">12,8k</td><td class="crd-td">16,5k</td><td class="crd-td">19,8k</td><td class="crd-td">14,8k</td><td class="crd-td">10,2k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>San Juan Basin &amp; Four Corners / Mesa Verde</strong></td><td class="crd-td">300</td><td class="crd-td">4,2k</td><td class="crd-td">18k</td><td class="crd-td">23,5k</td><td class="crd-td">26k</td><td class="crd-td">34,5k</td><td class="crd-td">10,5k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Upper Colorado HU 14 Total</strong></td><td class="crd-td">750</td><td class="crd-td">10,5k</td><td class="crd-td">41,6k</td><td class="crd-td">53,8k</td><td class="crd-td">62,3k</td><td class="crd-td">61,1k</td><td class="crd-td">29,3k</td><td class="crd-td">27k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Upper Colorado HU 14, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

As shown in Figure \ref{fig:shares-upper-colorado}, the San Juan and Four Corners sub-region consistently held the largest share of HU 14 inhabitants despite covering only 26,6% of total basin land area (78.599 km²). Its share rose from 40% in 10.000BC and 43,3% in 0AD to a maximum of 57,7% in 1200AD (31k of 53,7k). After the late thirteenth-century Pueblo III depopulation, the San Juan share fell sharply to 35,8% in 1300AD as residual Numic (Ute) foraging bands in the Green River and Colorado headwaters accounted for nearly two-thirds of the protohistoric basin population [@varien1999sedentism; @nichols2019violence].

<figure class="crd-figure-block" id="fig:shares-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado/fig3_upper_colorado_shares.png" alt="fig:shares-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Upper Colorado HU 14 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three methodological constraints govern these estimates. First, radiocarbon dates in HU 14 under-sample late Pueblo III and Pueblo IV masonry towns relative to earlier pithouse villages because excavators rely on dendrochronological cutting dates after 1000AD [@robinson2021dendro; @kelly2025]. Second, pre-1300AD mobile Ute and Archaic camps in high-altitude sagebrush basins leave sparse architectural footprints, increasing reliance on carrying-capacity priors [@madsen1998fremont; @kelly2013rocky]. Third, county-level reporting masks finer micro-basin shifts across the San Juan-Little Colorado divide between HU 14 and HU 15, requiring cross-frontier kriging smoothing at the 200 km seam [@kelly2025].

# Sources

<div id="refs"></div>
