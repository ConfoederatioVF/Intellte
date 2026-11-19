---
title: "Great Basin Hydrological Unit (HU 16): Demographic Reconstruction"
subtitle: "CENTAUR-II: Bonneville-Fremont Farmers and Lahontan Desert Foragers, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: great_basin_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_great_basin_spatial.png"
hero_caption: "Sub-regional areal masks and excavated settlements across Great Basin Hydrological Unit 16 (360,8k km2), spanning the Lake Bonneville Wasatch oasis, Humboldt-Lahontan corridor and Owens-Mojave valleys."
hero_label: "fig:hero-great-basin"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Great Basin Hydrological Unit 16 (360.781 km² across 5.466 5-arcminute grid cells) from 10.000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Encompassing the endorheic Bonneville and Lahontan lake basins alongside the Central Nevada valleys and Owens Valley corridor, HU 16 linked wetland marsh foraging with eastern Fremont maize horticulture [@madsen1998fremont; @kelly2001marsh]. Combining summed probability distributions from N = 1.768 radiocarbon dates in Kelly et al. with non-stationary Matérn ($\nu = 3/2$) kriging and sub-regional carrying-capacity priors, regional numbers grew from 750 (690-810) in 10.000BC to 36k (33,1-38,9k) in 0AD and peaked at 64,3k (59,2-69,4k) in 1100AD, aligning with the Kelly et al. HU 16 median radiocarbon peak of 1089AD (861 cal BP) [@kelly2025]. Following thirteenth-century megadroughts and the contraction of Fremont farming to 44,5k in 1300AD, Numic intensification of piñon harvesting, wetland fisheries and Owens Valley irrigation restored basin population to 60,5k (55,7-65,3k) by 1600AD [@bettinger1982numic; @lawton1976owens].



# Background

Great Basin Hydrological Unit 16 comprises the internally drained valleys between the Wasatch Range and the Sierra Nevada across Utah, Nevada, southeastern Oregon, southern Idaho and eastern California [@seaber1987hydrologic; @robinson2024intermountain]. Rather than draining to the sea, snowmelt feeds terminal sinks and saline lakes including Great Salt Lake, Utah Lake, the Sevier Desert, Humboldt Sink, Carson Sink, Pyramid Lake and Owens Lake [@kelly2001marsh].

For millennia, human settlement clustered tightly around perennial marshlands, mountain-front alluvial fans and piñon-juniper woodland belts. Between 400AD and 1200AD, Fremont agriculturalists along the Wasatch Front and Parowan Valley cultivated maize in alluvial fan pockets while still exploiting wetland resources [@madsen1998fremont; @finley2020fremont]. Simultaneously, Lovelock and Stillwater marsh communities in western Nevada maintained dense semi-sedentary fisheries, while Owens Valley Paiute groups engineered ditch irrigation for wild-bulb and seed plots [@kelly2001marsh; @lawton1976owens].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration draws on the Kelly et al. IntCal20 radiocarbon analysis for HU 16 (N = 1.768 dates; error <= 100 years) [@kelly2025]. Across 500 running-mean windows, Kelly et al. record a peak mode between 831 and 985 cal BP (965-1119AD), with a first quartile at 842 cal BP (1108AD), a third quartile at 930 cal BP (1020AD), a mean of 884 cal BP (1066AD) and a median peak at 861 cal BP (1089AD) [@kelly2025].

HU 16 is divided into three 5-arcminute areal masks totalling 5.466 cells (360.781 km²): Lake Bonneville, Bear River and Wasatch Oasis (127.612 km²), Humboldt Sink, Lake Lahontan and Carson-Truckee Corridor (177.046 km²) and Central Nevada Valleys, Owens Valley and Mojave Endorheic Basin (56.123 km²). Sub-regional trajectories across 23 benchmarks disaggregate continental estimates [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] using `p3k14c` radiocarbon curves and ethnohistorical wetland-desert carrying capacities [@peros2010prehistoric; @robinson2024intermountain].

## Dasymetric Kriging and Uncertainty Bounds

Spatial allocation applies Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging trained on `p3k14c` site densities across ten Holocene horizons with a 300 km cross-frontier conditioning belt extending across the Snake River Plain, Colorado Plateau and Sierra Nevada [@bird2022p3k14c]. North American variograms ($\tau_1 = 1,25$, $\tau_2 = 2,6$) yield $R^2 = 0,9733$ to $0,9992$, with diagnostics stamped in GMT+0. A symmetric $\pm 8\%$ structural interval bounds each sub-regional estimate.

<figure class="crd-table-figure" id="tab:subregions-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">1.962</td><td class="crd-td">127.612</td><td class="crd-td">37,38-42,71N, 110,62-114,12W</td><td class="crd-td">1100AD (28,5k)</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">2.686</td><td class="crd-td">177.046</td><td class="crd-td">38,46-42,29N, 114,21-120,21W</td><td class="crd-td">1100AD (24,2k)</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">818</td><td class="crd-td">56.123</td><td class="crd-td">35,29-38,38N, 114,21-119,54W</td><td class="crd-td">1600AD (12k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Great Basin HU 16.</figcaption>
</figure>

# Testing and Validation

Validation checks confirm agreement with Great Basin palaeoclimatic and archaeological syntheses. First, the basin maximum of 64,3k in 1100AD aligns within 11 years of the Kelly et al. HU 16 radiocarbon median peak of 1089AD (861 cal BP) [@kelly2025]. Second, the 30,8% basin contraction from 64,3k in 1100AD to 44,5k in 1300AD - steepest in the Bonneville-Wasatch Fremont zone (-38,6%, from 28,5k to 17,5k) - tracks Medieval Climatic Anomaly megadroughts and the collapse of eastern Great Basin maize farming [@finley2020fremont; @cook2013megadroughts; @madsen1998fremont].

Third, the rebound from 44,5k in 1300AD to 60,5k by 1600AD across all three sub-regions matches the archaeological signature of the Numic expansion, when broad-spectrum seed processing, piñon storage and irrigated meadow plots in Owens Valley supported dense hunter-gatherer-irrigators [@bettinger1982numic; @lawton1976owens; @robinson2024intermountain]. Source-ledger checks confirm 6 included sites and 2 excluded Archaic caves (`Danger Cave` and `Hogup Cave`).

# Results

## Long-Term Basin Trajectory

Population in Great Basin HU 16 expanded gradually from 750 in 10.000BC to 9,8k in 5000BC, 23k in 2000BC and 36k (33,1-38,9k) in 0AD as lakeshore wetland intensification offset mid-Holocene desert aridity (Figure \ref{fig:trajectory-great-basin}) [@kelly2001marsh]. Steady growth across Fremont alluvial villages and Lahontan wetlands lifted basin totals to 47,5k in 400AD, 58,7k in 800AD and the 1100AD maximum of 64,3k (59,2-69,4k) [@madsen1998fremont; @kelly2025].

<figure class="crd-figure-block" id="fig:trajectory-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin/fig2_great_basin_trajectory.png" alt="fig:trajectory-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Great Basin HU 16 from 10.000BC to 1600AD, with shaded 8 percent uncertainty band.</figcaption>
</figure>

After 1100AD, prolonged droughts lowered regional totals to 55,9k in 1200AD and 44,5k in 1300AD as Fremont settlements retracted. Unlike the Colorado Plateau, however, HU 16 rebounded strongly between 1400AD (47,6k) and 1600AD (60,5k; 55,7-65,3k), propelled by Numic upland-lowland seasonal rounds and late Holocene marsh productivity [@bettinger1982numic; @lawton1976owens].

<figure class="crd-table-figure" id="tab:trajectory-great-basin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lake Bonneville, Bear River &amp; Wasatch Oasis (Fremont)</strong></td><td class="crd-td">300</td><td class="crd-td">4,1k</td><td class="crd-td">15k</td><td class="crd-td">20,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">17,5k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Humboldt Sink, Lake Lahontan &amp; Carson-Truckee Corridor</strong></td><td class="crd-td">300</td><td class="crd-td">3,7k</td><td class="crd-td">13,8k</td><td class="crd-td">18k</td><td class="crd-td">22k</td><td class="crd-td">24,2k</td><td class="crd-td">18k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Central Nevada Valleys, Owens Valley &amp; Mojave Endorheic Basin</strong></td><td class="crd-td">150</td><td class="crd-td">2k</td><td class="crd-td">7,2k</td><td class="crd-td">9k</td><td class="crd-td">10,7k</td><td class="crd-td">11,6k</td><td class="crd-td">9k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Great Basin HU 16 Total</strong></td><td class="crd-td">750</td><td class="crd-td">9,8k</td><td class="crd-td">36k</td><td class="crd-td">47,5k</td><td class="crd-td">58,7k</td><td class="crd-td">64,3k</td><td class="crd-td">44,5k</td><td class="crd-td">60,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Great Basin HU 16, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

Across the entire Holocene, the Bonneville-Wasatch Oasis and Humboldt-Lahontan Corridor alternated as the leading demographic zones (Figure \ref{fig:shares-great-basin}). In 1100AD, the Bonneville-Wasatch Fremont core held 44,3% of HU 16 inhabitants (28,5k of 64,3k) on 35,4% of land area, while Humboldt-Lahontan held 37,6% (24,2k). By 1300AD, Bonneville-Wasatch fell to 39,3% while Humboldt-Lahontan rose to 40,4% (18k of 44,5k). By 1600AD, both northern sub-regions reached near-parity (40,5% and 39,7%), with Central Nevada and Owens Valley contributing 19,8% (12k) [@kelly2001marsh; @lawton1976owens].

<figure class="crd-figure-block" id="fig:shares-great-basin">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-great-basin/fig3_great_basin_shares.png" alt="fig:shares-great-basin" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Great Basin HU 16 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three limitations affect HU 16 estimates. First, small-group mobility across arid Nevada basins yields low-density lithic scatters with sparse datable charcoal compared to Bonneville Fremont pit-houses and Carson Sink wetlands [@robinson2024intermountain; @kelly2001marsh]. Second, historic water diversions and playa deflation eroded marsh-edge house floors around Stillwater and Humboldt Sink [@kelly2001marsh]. Third, the eastern Nevada-Utah state border cuts across Fremont cultural provinces shared with Upper Colorado HU 14, requiring 200 km seam feathering along the Wasatch Plateau [@finley2020fremont].

# Sources

<div id="refs"></div>
