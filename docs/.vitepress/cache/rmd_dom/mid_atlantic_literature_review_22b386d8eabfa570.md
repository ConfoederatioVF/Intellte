---
title: "Mid-Atlantic Hydrological Unit (HU 02): Haudenosaunee Finger Lakes-Mohawk, Lenapehoking and Powhatan Tidewater"
subtitle: "CENTAUR-II: Contiguous Mid-Atlantic Drainage Basin, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: mid_atlantic_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mid_atlantic_spatial.png"
hero_caption: "Areal mask and 115 catalogued settlements across USGS Hydrological Unit 02 (246,4k km²) from 10000BC to 1600AD. Three sub-regions trace Hudson-Mohawk, Delaware-Susquehanna and Chesapeake Tidewater populations."
hero_label: "fig:hero-mid-atlantic"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of the Mid-Atlantic drainage (USGS Hydrological Unit 02, 246.361 km² across 3.938 five-arcminute cells) from 10000BC to 1600AD.

Integrating 115 catalogued archaeological settlements with continuous rural suitability weights from the continental Northern America kriging surface (92.500 unique site-periods across 3.832 domestic catchments, 2.562 active, and 251 cross-frontier buffers, representing a 14,15x baseline over global radiocarbon records alone), regional population climbs from 850 inhabitants (782-918) in 10000BC to 110,5k at 0AD and reaches a Holocene maximum of 198k (182,2k-213,8k; 0,804 persons per km²) in 1500AD.

Anchored to Kelly et al. [@kelly2025] HU 02 radiocarbon series (N = 1.596 terrestrial dates, median peak at 1495AD, 455 cal BP), demographic density crests highest in the Hudson-Mohawk corridor (0,92 persons per km² in 1500AD, 44k) and Chesapeake Tidewater (0,848 persons per km², 76k), paired with 78k (0,716 persons per km²) across the Delaware-Susquehanna basin.

Following sixteenth-century coastal fishing, trade voyages and inland epidemic diffusion, basin population contracts by 12,63% from 1500AD to 173k (159,2k-186,8k; 0,702 persons per km²) in 1600AD [@snow1994iroquois; @rountree1989powhatan; @jones2014].

# Background

## Estuarine Density and Earlier Continental Smoothing

Earlier continental atlases depicted the eastern seaboard between Lake Champlain and the James River as a lightly settled woodland margin extrapolated backward from colonial contact estimates [@ubelaker2006; @milner2010]. Settlement archaeology across USGS Hydrological Unit 02 reverses that picture: Mid-Atlantic estuaries, Piedmont fall-line fisheries and fertile glacial lake plains sustained some of the densest non-Mississippian maize-and-estuarine polities north of Mexico [@engelbrecht2003iroquois; @kraft2001lenape].

Between 36,79 N and 44,04 N, tidal salinity bays from Chesapeake and Delaware estuaries fed dense anadromous shad, sturgeon and oyster fisheries upstream to interior Piedmont gorges, while glacial Finger Lakes and Mohawk river flats supported multi-hearth longhouse confederacies [@snow1994iroquois; @gallivan2007werowocomoco].

Ecological productivity across this littoral-to-upland zone translated directly into sharp spatial gradients rather than flat woodland background densities. Sheltered brackish rivers nourished year-round sedentism even before tropical maize diffused north after 500AD, establishing dense coastal nuclei upon which Late Woodland farming expanded.

## Late Pre-Contact Growth and Radiocarbon Timing

Unlike interior Mississippian river valleys where major civic-ceremonial towns contracted after 1150-1300AD, HU 02 experienced uninterrupted Late Woodland consolidation well into the fifteenth century [@snow1994iroquois; @kent1984susquehannock]. Kelly et al. [@kelly2025] analysed N = 1.596 screened terrestrial radiocarbon dates across the Mid-Atlantic watershed and identified a summed probability median peak at 455 cal BP (1495AD, interquartile range 411 to 490 cal BP).

Early sixteenth-century European maritime encounters along Virginia, Maryland, Delaware and New York shores preceded permanent English and Dutch trading posts at Jamestown (1607AD) and Fort Nassau (1614AD) [@gallivan2007werowocomoco; @rountree1989powhatan]. Pathogens, metallic trade rivalries and Susquehannock-Haudenosaunee realignments accordingly began reshaping coastal and riverine populations after 1500AD, lifting late Susquehannock towns along the lower Susquehanna even as exposed tidal peninsulas slipped [@kent1984susquehannock; @jones2014].

## Palaeoecological and Demographic Methodological Parallels

Palaeoenvironmental reconstruction inside HU 02 confirms steep upland hardwood forest turnover prior to clearance: subfossil leaf beds in Lancaster County, Pennsylvania reveal pre-European Piedmont canopy structure along Susquehanna tributaries directly inside the central sub-region [@elliott2013subfossil], complemented by Atlantic coastal marine inventories [@fautin2010overview] and Mid-Atlantic wetland amphibian biogeography [@schlesinger2018follow].

Cross-regional demographic and taphonomic benchmarks further guide the spatial prior. Spatial surface estimation of population size and migration [@alasadi2019estimating], Bayesian radiocarbon chronological modelling in neighbouring Appalachian traditions [@hart2022the] and Middle Atlantic cultural resource inventories [@defense1994dtic_ada_6c9; @defense1996dtic_ada_dca] underline why archaeological inventories require spatial covariance smoothing rather than raw site counts.

Similarly, optical dating of tidal shell features along North American coasts [@neudorf2017between], Mid-Atlantic wetland geoarchaeological sequences [@defense1995dtic_ada_13a] and sixteenth-to-seventeenth-century Chesapeake ethnohistorical records [@brendan2021indians__351; @smith1612virginia_088; @encyclopedia2020nansemon_c3a] clarify preservation and contact baselines along estuarine frontiers.

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II divides all 3.938 active five-arcminute cells of HU 02 (246.361 km², 36,79 N to 44,04 N, 71,88 W to 80,38 W) across three hydrologically coherent sub-regions (Table \ref{tab:ma-structure}):

1. **Hudson, Mohawk and Lake Champlain Corridor** (47.811 km², 19,41%, 793 cells, 40,21-44,04 N, 71,88-75,54 W, 32 catalogued sites): encompasses the eastern Mohawk, upper Hudson, coastal New York and Lake Champlain lowlands occupied by Mohawk, Mahican, Munsee-Esopus and eastern Algonquian towns (Caughnawaga-Mohawk, Garoga, Otstungo, Klock, Cayadutta, Esopus Kingston Town, Montauk Fort Pond Capital, Schodack) [@snow1994iroquois].
2. **Delaware, Susquehanna and Upper Finger Lakes** (108.966 km², 44,23%, 1.722 cells, 36,96-42,88 N, 74,04-78,79 W, 37 catalogued sites): spans the Delaware basin, entire Susquehanna drainage and Finger Lakes uplands across Lenapehoking, Susquehannock and Onondaga heartlands, anchored by Abbott Farm and Minisink Munsee Capital alongside lower Susquehanna towns (Schultz-Funk, Billmyer Susquehannock Town, Murry, Murry Shenks Ferry Town, Ibaugh, Frey-Haverstick Shenks Village, Wyalusing) [@kraft2001lenape; @kent1984susquehannock; @engelbrecht2003iroquois].
3. **Chesapeake Bay, Potomac, Rappahannock and James Tidewater** (89.584 km², 36,36%, 1.423 cells, 36,79-40,12 N, 75,38-80,38 W, 46 catalogued sites): integrates Chesapeake shores, Delmarva peninsulas and Virginia-Maryland Tidewater and Piedmont rivers from Great Neck, Accokeek Creek and Kiskiak to Werowocomoco, Patawomeck, Moyaone Fortified Capital Town, Rassawek Monacan Capital, Piscataway Fort, Hughes Site, Winslow Site and Handsell-Nanticoke [@rountree1989powhatan; @gallivan2007werowocomoco].

<figure class="crd-table-figure" id="tab:ma-structure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Area Share</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Peak Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hudson, Mohawk and Champlain</strong></td><td class="crd-td">47.811</td><td class="crd-td">19,41%</td><td class="crd-td">32</td><td class="crd-td">44k (1500AD)</td><td class="crd-td">0,92</td></tr>
<tr><td class="crd-td"><strong>2. Delaware, Susq. and Finger Lakes</strong></td><td class="crd-td">108.966</td><td class="crd-td">44,23%</td><td class="crd-td">37</td><td class="crd-td">78k (1500AD)</td><td class="crd-td">0,716</td></tr>
<tr><td class="crd-td"><strong>3. Chesapeake, Potomac and James</strong></td><td class="crd-td">89.584</td><td class="crd-td">36,36%</td><td class="crd-td">46</td><td class="crd-td">76k (1500AD)</td><td class="crd-td">0,848</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal geometry, catalogued settlement counts and peak demographic densities in the Mid-Atlantic (HU 02).</figcaption>
</figure>

## Multi-Registry Radiocarbon Kriging and Benchmark Calibration

Rural habitation weights across HU 02 derive from the continental Northern America multi-registry kriging domain, which harmonises p3k14c [@bird2022p3k14c], c14bazAAR, state site files and CRM compliance reports into 92.500 unique site-period observations (166.545 horizon site records) across 3.832 domestic Voronoi catchments (15.517.215 km²; 2.562 active inhabited catchments, 66,86% coverage; equivalent circular median radius 29,48 km, 90th percentile 41 km overall and 29,31 km and 39,86 km across active catchments) plus 251 cross-frontier buffer catchments.

This composite multiplies unique site-period coverage by 14,15x over the 6.539 legacy global radiocarbon baseline. Observed site densities undergo Freeman-Tukey variance stabilisation, macro-tile log-variance regularisation and 1-ring Poisson-Gamma credibility shrinkage ahead of weighted least-squares (WLS) biophysical regression and non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons (13000BC to 1650AD; 493.687 valid land cells covering 18.561.382 km², with 129.716 to 133.990 active inhabited non-wasteland cells per horizon) [@paciorek2006matern].

Biophysical covariates reflect estuarine salinity edges, Piedmont fall-line rapids and fertile glacial valley soils using exponential coastal proximity, 13,5 km fluvial distance decay, terrain slope and habitable land fraction [@alasadi2019estimating]. These regression predictors prevent steep coastal midden clustering from spilling unfiltered into forested Appalachian ridges.

Combined with Bayesian chronological bounds on ceramic and settlement phases [@crema2021rcarbon], the kriging residuals separate genuine low-density uplands from river valleys whose apparent scarcity reflects incomplete archaeological survey coverage.

## Temporal Horizon Blending and Cross-Frontier Smoothing

Although the regional demographic series publishes 23 benchmarks from 10000BC to 1600AD, the continental spatial surface evaluates suitability fields across 10 canonical Holocene horizons (13000BC to 1650AD, from Palaeoindian and Early Archaic through Protohistoric Contact). Intermediate Woodland and early contact checkpoints interpolate smoothly between adjacent kriging fields within each sub-regional mask.

Across external watersheds, 300 km buffer catchments bridge HU 02 cleanly across the Taconic and Housatonic border with New England (HU 01), across the St. Lawrence-Ontario headwaters northward, and westward across the Allegheny Plateau toward the Ohio River (HU 05) and Roanoke-Carolina estuaries (HU 03).

## Urban Subtraction and Uncertainty Intervals

For every sub-region $r$ and benchmark horizon $t \in \{-10000, \dots, 1600\}$, summed settlement counts across all 115 catalogued entries in the regional gazetteer are subtracted from sub-regional targets $P_r(t)$ prior to dasymetric rural allocation:

$$R_r(t) = P_r(t) - \sum_{i \in S_r} U_i(t), \qquad R_r(t) \ge 0$$

Rural residuals $R_r(t)$ distribute proportionally across active five-arcminute cells weighted by the interpolated continental kriging surface and receive two separable 5-pixel smoothing passes. Symmetric ±8% interval bounds ($[0{,}92\,P_r(t),\; 1{,}08\,P_r(t)]$) reflect tidal coastal shelf submergence and Haudenosaunee village relocation duration uncertainty [@snow1994iroquois; @engelbrecht2003iroquois].

# Testing and Validation

Five quantitative checks pass with 0 errors at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 02 rests on N = 1.596 terrestrial radiocarbon dates [@kelly2025], nearly four times the 400-date reliability floor for two-millennium summed probability peaks [@crema2021rcarbon].
2. **Non-Stationary Kriging Sharpness**: Across all ten slices of the Northern America domain, the Matérn ($\nu = 3/2$) variogram satisfies regularised $\tau_1 = 1,35$ on all ten horizons (raw 1,4834 to 1,6067, mean 1,5861), $\tau_2 = 2,9025$ (2,9), effective short range 44,17 km to 47,85 km (mean 47,23 km), raw nugget 0 across all ten horizons, regularised nugget-to-sill 0,04 (0,0417, < 0,45) and WLS fit $R^2$ from 0,9991 to 0,9993.
3. **Gazetteer and Ledger Reconciliation**: Auditing the settlement gazetteer (115 included sites: 32 Hudson-Mohawk, 37 Delaware-Susquehanna and 46 Chesapeake) against the regional source ledger (232 candidates, 117 excluded: 114 duplicate-alias consolidations within 2 km, including Strickler merged into Schultz-Funk, plus 3 non-habitation quarry and rockshelter exclusions for Sheep Rock Shelter, Dutchess Quarry and Harlan Mill Quarry) produces 0 unmatched keys and 0 coordinate errors.
4. **Urban-Rural Mass Conservation**: Catalogued town populations never exceed sub-regional benchmarks across all 23 horizons; summed across exact benchmark dates, catalogued settlements account for 345 of 2k inhabitants (17,25%) at 9000BC, 1.060 (0,96%) at 0AD, 3.200 (1,78%) at 1000AD, 14.120 (7,19% of 196,4k; 25.485 or 12,98% interpolated across spans) at 1400AD, 37.620 (19% of 198k; 46.150 or 23,31% interpolated) at 1500AD and 35.380 (20,45% of 173k) at 1600AD.
5. **Arithmetic Benchmark Consistency**: Sub-regional estimates and confidence intervals sum identically to basin-wide summary benchmarks across every interval from 10000BC to 1600AD.

<figure class="crd-table-figure" id="tab:ma-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hudson, Mohawk and Champlain</strong></td><td class="crd-td">47.811</td><td class="crd-td">26,5k</td><td class="crd-td">41k</td><td class="crd-td">43,8k</td><td class="crd-td">44k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>2. Delaware, Susq. and Finger Lakes</strong></td><td class="crd-td">108.966</td><td class="crd-td">42k</td><td class="crd-td">70k</td><td class="crd-td">77,2k</td><td class="crd-td">78k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>3. Chesapeake, Potomac and James</strong></td><td class="crd-td">89.584</td><td class="crd-td">42k</td><td class="crd-td">68,5k</td><td class="crd-td">75,4k</td><td class="crd-td">76k</td><td class="crd-td">66k</td></tr>
<tr><td class="crd-td"><strong>HU 02 Total</strong></td><td class="crd-td">246.361</td><td class="crd-td">110,5k</td><td class="crd-td">179,5k</td><td class="crd-td">196,4k</td><td class="crd-td">198k</td><td class="crd-td">173k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional area and benchmark population estimates across the Mid-Atlantic (HU 02) from 0AD to 1600AD.</figcaption>
</figure>

# Results

## Post-Glacial Foraging and Estuarine Archaic Growth

Between 10000BC and 5000BC, Mid-Atlantic population expanded steadily from 850 inhabitants (0,003 persons per km²) and 4.250 in 8000BC to 22,7k (0,092 persons per km²) as post-glacial sea-level rise drowned the ancestral Susquehanna and Delaware valleys, creating productive tidal shellfish and sturgeon marshes across Chesapeake and Delaware bays [@kraft2001lenape; @fautin2010overview].

Early Palaeoindian quarry and valley camps at Thunderbird (9500BC-6000BC, 95 at 8000BC), Shawnee-Minisink (9000BC-1000AD), Shoop (9000BC-8000BC), Brook Run (9000BC-8000BC) and Nesquehoning Creek (9000BC-8000BC) document sustained interior mobility before Archaic estuarine intensification, while quarry and shelter features such as Dutchess Quarry, Sheep Rock Shelter and Harlan Mill Quarry are catalogued separately as excluded non-habitation deposits [@kraft2001lenape].

Jasper and chalcedony quarry complexes across the Virginia Blue Ridge and eastern Pennsylvania Piedmont anchored wide seasonal foraging circuits along frost-free spring valleys as coniferous forest gave way to temperate oak-chestnut woodland.

Archaic and Early Woodland riverine base camps such as Fairlee Neck Shell Midden (3000BC-2000BC), Derewal (6000BC-1400AD) and Abbott Farm (3000BC-1500AD) lifted HU 02 population to 48k in 3000BC, 65,4k in 2000BC, 86,4k in 1000BC and 110,5k (101,7k-119,3k; 0,449 persons per km²) by 0AD (Figure \ref{fig:traj-mid-atlantic}).

During the Late Archaic broadspear and steatite vessel phases (2500BC-1000BC), seasonal autumn mast-gathering camps paired with dense spring-run fish weirs along Piedmont fall lines. Rapid sedentism along lower river terraces accelerated ceramic adoption (Marcey Creek, Vinette) ahead of intensive maize agriculture.

<figure class="crd-figure-block" id="fig:traj-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic/fig2_mid_atlantic_trajectory.png" alt="fig:traj-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in the Mid-Atlantic (HU 02) with uncertainty interval, 10000BC to 1600AD.</figcaption>
</figure>

## Woodland Ceramic Integration and Fifteenth-Century Apex

Middle and Late Woodland adoption of maize-beans-squash polyculture coupled with estuarine oyster and Mockley-ware networks (Accokeek Creek 220 at 400AD and 1,2k at 1500AD, Great Neck 520 at 1550AD, Hatch 480 at 1500AD) raised regional totals from 126k in 200AD to 156k in 600AD, 169k in 800AD and 179,5k in 1000AD [@kent1984susquehannock; @engelbrecht2003iroquois; @rountree1989powhatan].

Across 1200AD to 1500AD, all three sub-regions moved in tight synchrony toward their pre-contact apex, rising from 190,3k in 1200AD and 193,8k in 1300AD to 196,4k in 1400AD and 198k (182,2k-213,8k; 0,804 persons per km²) in 1500AD (Table \ref{tab:ma-subregions} and Table \ref{tab:ma-benchmarks}), just five years after Kelly et al. [@kelly2025] 1495AD radiocarbon median.

This synchrony sets HU 02 apart from both the Lower Mississippi Valley and the Ohio River core. While middle Ohio Valley populations crested two centuries earlier around 1300AD before thinning across the Vacant Quarter, coastal and Piedmont Mid-Atlantic farmers expanded steadily until European maritime arrivals.

Over the Holocene sequence, demographic composition across HU 02 remained unusually balanced (Figure \ref{fig:shares-mid-atlantic}). At 1500AD, the Delaware-Susquehanna tier held 39,39% (78k), Chesapeake Tidewater accounted for 38,38% (76k) and Hudson-Mohawk valleys comprised 22,22% (44k).

Neither northern lake plains nor southern coastal estuaries monopolised demographic growth. Instead, productive estuarine fisheries in the Chesapeake and Hudson basins matched fertile alluvial bottomlands and glaciated upland flats across Pennsylvania and central New York.

Between 1000AD and 1400AD, ceramic-bearing riverine villages diversified squash, chenopod and tropical maize cultivation while harvesting massive estuarine shellfish beds and seasonal shad migrations [@kraft2001lenape; @kent1984susquehannock]. Palisaded fortifications emerged later along interior upland streams (1350AD-1500AD) than in coastal tidewater centres, coinciding with longhouse aggregation across the Finger Lakes and Mohawk terraces [@engelbrecht2003iroquois; @snow1994iroquois].

Regional demographic stability across the fifteenth century therefore rested on complementary coastal-maritime and upland-horticultural carrying capacities spanning the width of HU 02.

<figure class="crd-figure-block" id="fig:shares-mid-atlantic">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-mid-atlantic/fig3_mid_atlantic_shares.png" alt="fig:shares-mid-atlantic" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across the Mid-Atlantic (HU 02) from 10000BC to 1600AD.</figcaption>
</figure>

## Sub-Regional Trajectories Across the Three Tiers

### Hudson, Mohawk and Lake Champlain Corridor

Covering 47.811 km² (19,41% of HU 02), northern New York, coastal Long Island and the Hudson estuary climbed from 150 inhabitants in 10000BC and 5,5k in 5000BC to 26,5k (0,554 persons per km²) at 0AD and 41k in 1000AD. Glacial lake-plain soils along the middle Mohawk River supported dense palisaded longhouse clusters (Caughnawaga-Mohawk 1,65k, Garoga 1,35k, Otstungo 1,18k, Klock 1,12k, Cayadutta 1,05k, Smith-Pagerie 980) paired along the tidal Hudson and Sound with Mahican and coastal towns (Esopus Kingston Town 1k, Montauk Fort Pond Capital 1k, Schodack 950, Wappinger Capital Town 900) [@snow1994iroquois; @engelbrecht2003iroquois].

Multi-family Iroquoian longhouses along Mohawk terrace bluffs concentrated roughly 10 to 12 residents per paired hearth, yielding residential crowding rarely matched elsewhere north of Chesapeake Bay [@snow1994iroquois].

Hudson-Mohawk density crested at 44k (40,5k-47,5k; 0,92 persons per km²) in 1500AD. Early Saint Lawrence-Hudson fur trade contact lowered sub-regional numbers gently to 41,5k (1550AD) and 39k (0,816 persons per km², 22,54% of HU 02) by 1600AD, as inland Mohawk fortified sites stayed more buffered than outer Atlantic shores and exact-date town totals reached 14,64k (37,54%) [@snow1994iroquois].

### Delaware, Susquehanna and Upper Finger Lakes

Spanning 108.966 km² (44,23% of HU 02), this expansive central basin grew from 350 in 10000BC and 8,6k in 5000BC to 42k (0,385 persons per km²) at 0AD, 70k in 1000AD and 78k (71,8k-84,2k; 0,716 persons per km²) in 1500AD.

Long-lived fall-line complexes around Abbott Farm (1,1k at 1500AD) and Minisink Munsee Capital (1,2k at 1500AD) anchored exchange along the Delaware, while upland Finger Lakes towns and Piedmont woodlands sustained expanding agricultural villages amidst oak-hickory canopies documented in Lancaster County subfossil beds [@kraft2001lenape; @elliott2013subfossil].

Late sixteenth-century Susquehannock coalescence downriver concentrated major fortified towns inside Lancaster County (Schultz-Funk 2,9k, Billmyer Susquehannock Town 1,5k, Murry 1,5k, Murry Shenks Ferry Town 900, Ibaugh 820, Frey-Haverstick Shenks Village 700), linked upriver to Wyalusing (320) along the North Branch [@kent1984susquehannock].

Even as total rural basin population eased to 73k (1550AD) and 68k (0,624 persons per km²) in 1600AD, exact-date town shares in Delaware-Susquehanna climbed from 10,82% (8,44k of 78k) in 1500AD to 12,71% (8,64k of 68k) in 1600AD. Dispersed upper Allegheny and West Branch headwater hamlets coalesced downstream toward defensible palisaded terraces controlling European brass and fur-trade arteries.

### Chesapeake Bay, Potomac, Rappahannock and James Tidewater

Across 89.584 km² (36,36% of HU 02), the Chesapeake estuary approached northern Hudson-Mohawk peak densities, moving from 350 in 10000BC and 8,6k in 5000BC to 42k (0,469 persons per km²) at 0AD, 68,5k in 1000AD and 76k (69,9k-82,1k; 0,848 persons per km²) in 1500AD.

Brackish oyster reefs, submerged aquatic vegetation and spring herring runs across Tidewater estuaries sustained unusually stable protein yields alongside creek-side maize gardens [@rountree1989powhatan; @fautin2010overview]. Warm tidal tributaries supported multi-century occupation from Accokeek Creek (220 at 400AD to 1,2k at 1500AD), Great Neck (520 at 1550AD) and Hatch (480 at 1500AD) through Potomac Piedmont villages (Winslow Site 390 at 1450AD, Hughes Site 460 at 1500AD).

At the top of this estuarine network stood principal Powhatan, Monacan, Piscataway and Nanticoke towns (Werowocomoco 1,45k, Patawomeck 1,35k, Moyaone Fortified Capital Town 1,3k, Rassawek Monacan Capital 1,3k, Accokeek Creek 1,2k, Piscataway Fort 1,05k, Kecoughtan 980, Uttamussak 890, Rasawrack 850, Handsell-Nanticoke 550) [@rountree1989powhatan; @gallivan2007werowocomoco].

Sixteenth-century European reconnaissance across the Chesapeake Capes initiated coastal contagion and political realignment before 1607AD, reducing sub-regional population to 71k in 1550AD and 66k (0,737 persons per km²) in 1600AD. Catalogued Chesapeake town populations shift from an exact-date total of 16,58k (21,82% of 76k, or 19,74k interpolated across mid-century peaks) at 1500AD to 12,1k (18,33% of 66k) across enduring 1600AD paramountcies [@jones2014; @milner2010].

## Settlement Hierarchy, Urban Coalescence and Colonial Contact

Rank-size distribution across all 115 catalogued HU 02 sites reflects a balanced polycentric system (Table \ref{tab:ma-top-sites}): rather than a single oversized metropolis, 18 distinct towns reached or exceeded 1k residents (16 above 1k) across Lancaster County, the Mohawk-Hudson valleys and the Potomac-York estuaries, led by Schultz-Funk (2,9k), Caughnawaga-Mohawk (1,65k), Billmyer Susquehannock Town (1,5k), Murry (1,5k) and Werowocomoco (1,45k).

Summed at exact benchmark dates, catalogued town totals climbed from 7,19% (14,12k of 196,4k) at 1400AD and 19% (37,62k of 198k) at 1500AD to 20,45% (35,38k of 173k) at 1600AD as surviving communities consolidated defensively behind timber palisades.

This simultaneous dip in basin headcount (198k down 12,63% to 173k) alongside elevated sixteenth-century urban share mirrors wartime and epidemic-driven town aggregation documented across coastal Virginia, Maryland, Pennsylvania and New York [@rountree1989powhatan; @gallivan2007werowocomoco]. Compact palisaded villages concentrated political authority, maize reserves and brass-trade mediation while rural hamlets shrank along exposed coastlines.

Between 1524AD and 1607AD, repeated Atlantic reconnaissance voyages by Giovanni da Verrazzano, Spanish Chesapeake Bay missions, English Roanoke mariners and French St. Lawrence fur traders altered regional disease ecology and exchange routes ahead of permanent European garrisons [@ubelaker2006; @jones2014].

Interior Haudenosaunee and Susquehannock fortified capitals absorbed outlying hamlets while tidewater tributary towns maintained dense riverine agriculture along the Potomac, York and James estuaries [@snow1994iroquois; @kent1984susquehannock].

### Inter-Basin Exchange Corridors and Ecological Buffers

Susquehanna, Potomac and Hudson trails linked coastal shell-bead exchange directly to interior copper, catlinite and Great Lakes chert corridors [@kraft2001lenape; @engelbrecht2003iroquois]. Along the Upper Ohio-Susquehanna portage and upper Hudson-Champlain divide, inter-regional mobility buffered food shortages while transmitting trade-borne European epidemics across watershed limits after 1530AD [@jones2014].

Within the continental kriging domain, the 251 frontier buffer catchments (300 km margin) carry those highland-to-estuary gradients smoothly across HU 02 borders into New England (HU 01), Ohio (HU 05) and South Atlantic Tidewater (HU 03) without step discontinuities along hydrological lines. The same cross-frontier continuity ensures that Mohawk-Mahican villages along the upper Hudson integrate consistently with Berkshire and Champlain densities in HU 01.

<figure class="crd-table-figure" id="tab:ma-top-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-region</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Schultz-Funk</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">2,9k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Caughnawaga-Mohawk</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">1,6k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Billmyer Susquehannock Town</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">1,5k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Murry</td><td class="crd-td">Delaware-Susq.</td><td class="crd-td">1,5k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Werowocomoco</td><td class="crd-td">Chesapeake</td><td class="crd-td">1,4k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Garoga</td><td class="crd-td">Hudson-Mohawk</td><td class="crd-td">1,4k</td><td class="crd-td">1580AD</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Patawomeck</td><td class="crd-td">Chesapeake</td><td class="crd-td">1,4k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Moyaone Fortified Capital Town</td><td class="crd-td">Chesapeake</td><td class="crd-td">1,3k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Rassawek Monacan Capital</td><td class="crd-td">Chesapeake</td><td class="crd-td">1,3k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Accokeek Creek</td><td class="crd-td">Chesapeake</td><td class="crd-td">1,2k</td><td class="crd-td">1500AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top ten catalogued settlements by peak population in the Mid-Atlantic (HU 02).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:ma-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">850</td><td class="crd-td">782</td><td class="crd-td">918</td><td class="crd-td">0,003</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">4,2k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">0,017</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">22,7k</td><td class="crd-td">20,9k</td><td class="crd-td">24,5k</td><td class="crd-td">0,092</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">48k</td><td class="crd-td">44,2k</td><td class="crd-td">51,8k</td><td class="crd-td">0,195</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">65,4k</td><td class="crd-td">60,2k</td><td class="crd-td">70,6k</td><td class="crd-td">0,265</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">86,4k</td><td class="crd-td">79,5k</td><td class="crd-td">93,3k</td><td class="crd-td">0,351</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">110,5k</td><td class="crd-td">101,7k</td><td class="crd-td">119,3k</td><td class="crd-td">0,449</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">126k</td><td class="crd-td">115,9k</td><td class="crd-td">136,1k</td><td class="crd-td">0,511</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">156k</td><td class="crd-td">143,5k</td><td class="crd-td">168,5k</td><td class="crd-td">0,633</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">179,5k</td><td class="crd-td">165,1k</td><td class="crd-td">193,9k</td><td class="crd-td">0,729</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">190,3k</td><td class="crd-td">175,1k</td><td class="crd-td">205,5k</td><td class="crd-td">0,772</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">196,4k</td><td class="crd-td">180,7k</td><td class="crd-td">212,1k</td><td class="crd-td">0,797</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">198k</td><td class="crd-td">182,2k</td><td class="crd-td">213,8k</td><td class="crd-td">0,804</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">185,5k</td><td class="crd-td">170,7k</td><td class="crd-td">200,3k</td><td class="crd-td">0,753</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">173k</td><td class="crd-td">159,2k</td><td class="crd-td">186,8k</td><td class="crd-td">0,702</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Headline population trajectory, 8% uncertainty intervals and mean density across the Mid-Atlantic (HU 02), 10000BC to 1600AD.</figcaption>
</figure>

# Limitations

Four evidentiary constraints qualify HU 02 estimates:

1. **Estuarine Sea-Level Submergence**: Holocene marine transgression flooded outer coastal plain and lower Chesapeake Palaeoindian-Archaic landforms beneath modern brackish bays, weighting early p3k14c site densities toward inland Piedmont river terraces [@kraft2001lenape; @neudorf2017between].

2. **Swidden Village Relocation Turnover**: Haudenosaunee and Susquehannock towns shifted coordinates every 15-25 years as firewood and sandy loam soils depleted; unadjusted archaeological inventories double count sequential relocations unless clustered onto stable sequence nodes [@snow1994iroquois; @engelbrecht2003iroquois; @kent1984susquehannock].

3. **Sixteenth-Century Contact Resolution**: Contraction between 1500AD and 1600AD predates regular colonial parish or colony enumerations (1607AD onward), so 1550AD and 1600AD levels rest on archaeological village attrition and disease back-projection [@rountree1989powhatan; @jones2014].

4. **Alluvial Survey Skew**: CRM excavations cluster near modern highway bridges and tidal urban corridors, leaving upper Allegheny-Susquehanna forest ridges sparser than coastal plains even after Voronoi catchment weighting [@hart2022the; @defense1994dtic_ada_6c9].

# Conclusion

The Mid-Atlantic (HU 02) maintained sustained Holocene expansion from 850 inhabitants in 10000BC to a 1500AD zenith of 198k (0,804 persons per km²), matching Kelly et al. [@kelly2025] 1495AD radiocarbon median. Hudson-Mohawk valley corridors (0,92 persons per km²) and Chesapeake estuaries (0,848 persons per km²) anchored continental-scale non-Mississippian densities alongside multi-century Susquehannock and Lenape terraces.

Unlike Midwestern valleys depleted prior to European arrival, Mid-Atlantic river basins sustained dense urban and agrarian networks into the sixteenth century before maritime pathogen diffusion lowered regional numbers by 12,63%.

Integrating 115 coordinate-anchored settlements (Table \ref{tab:ma-top-sites}) with the continental Matérn prior (92.500 unique site-periods across 3.832 domestic catchments, 14,15x baseline) captures late sixteenth-century palisaded coalescence (20,45% town share in 1600AD) simultaneously with early maritime contact decline (173k total in 1600AD).

Across all 23 horizons, the series links unbroken indigenous population records directly into seventeenth-century Dutch, Swedish and English colonial enumerations [@ubelaker2006; @milner2010]. Updated archaeological surveys across Piedmont uplands and submerged Chesapeake tributaries can refine future editions of the continental kriging domain while preserving urban-rural mass conservation.

# Sources

<div id="refs"></div>
