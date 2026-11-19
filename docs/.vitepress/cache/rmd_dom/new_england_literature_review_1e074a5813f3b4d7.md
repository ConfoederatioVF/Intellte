---
title: "New England Hydrological Unit (HU 01)"
subtitle: "CENTAUR-II: Wabanaki Riverines, Coastal Shell-Middens and Southern Algonquian Towns, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: new_england_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_new_england_spatial.png"
hero_caption: "Sub-regional areal masks and 99 catalogued settlements across USGS Hydrological Unit 01 (145.904 km²) from 10000BC to 1600AD."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This chapter reconstructs the pre-colonial Holocene population of New England (USGS Hydrological Unit 01, 145.904 km² across 2.543 five-arcminute cells) from 10000BC to 1600AD across three watershed sub-regions enclosing 99 catalogued settlements (202 candidates in the regional source ledger, 103 excluded duplicate-alias consolidations).

Anchored to Kelly et al. [@kelly2025] radiocarbon summed probability trends (N = 470 terrestrial dates, median peak 1410AD at 540 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the continental North American prior (493.687 valid terrestrial cells across 18,56M km² with 129.716 to 133.990 active cells across 10 horizons from 13000BC to 1650AD, 92.500 unique site-periods across 3.832 domestic catchments and 2.562 active inhabited catchments [66,86% coverage], 14,15x the 6.539 legacy baseline, with 251 frontier buffer catchments, regularised $\tau_1 = 1,35$ [raw mean 1,5861], $\tau_2 = 2,9025$, mean short range 47,23 km, raw nugget 0, regularised nugget-to-sill 0,04 and WLS residual $R^2 = 0,9991$ to 0,9993) [@bird2022p3k14c; @paciorek2006matern], HU 01 rises from 150 inhabitants (137 to 168) in 10000BC to 61,9k (0,424 persons per km²) at 0AD and reaches a pre-contact maximum of 116,5k (107,2k to 125,8k; 0,798 persons per km²) in 1400AD.

Southern New England (Connecticut, Housatonic and Narragansett basins) holds 48,24% of the 1400AD peak (56,2k; 1,566 persons per km²), ahead of Merrimack and Massachusetts Bay (36,2k; 1,084 persons per km²) and the Maine Wabanaki basins (24,1k; 0,315 persons per km²).

Unlike interior Mississippian river valleys, HU 01 sustained 113,5k inhabitants through 1500AD (0,778 persons per km²) before sixteenth-century coastal cod fisheries, Basque-Breton contacts and early fur-trade pathogens lowered regional totals by 23,79% from 1500AD (25,75% below the 1400AD peak) to 86,5k (79,6k to 93,4k; 0,593 persons per km²) by 1600AD [@cook1976newengland; @bragdon1996; @jones2014].

# Background

Historical demographic estimates for pre-colonial New England diverge sharply according to whether scholars privilege early seventeenth-century English, Dutch and French eyewitness counts or archaeological site distributions. Early twentieth-century syntheses placed contact-era southern and northern New England Algonquians near 25k to 35k.

Later ethnohistoric reassessments revised those figures markedly upward. Cook [@cook1976newengland] raised southern New England totals above 70k from seventeenth-century tribal territory extrapolations, while Snow [@snow1980; @snow1995microchronology] developed carrying-capacity and village-footprint estimates placing the wider New England-Maritimes region between 90k and 120k.

Broad continental population grids previously smoothed HU 01 into a single Eastern Woodlands belt, masking the sharp ecological frontier separating boreal spruce-fir Maine from frost-free Long Island Sound estuaries [@bragdon1996; @bourque1995turner; @sanger1987].

Within 145.904 km², growing-season length halves between Narragansett Bay (160 to 190 frost-free days) and the upper Aroostook and Penobscot headwaters (90 to 110 days). That agro-climatic gradient created two contrasting subsistence regimes that cannot be modelled with a single regional density scalar.

## Palaeoclimate, Taphonomy and Shell-Date Filtering

Two structural biases complicate direct archaeological inference in New England. First, acidic podzolic soils across glaciated New England uplands rapidly dissolve uncalcined bone and shell unless buffered by alkaline marine shell middens along the Gulf of Maine, Boston Harbor and Narragansett Bay [@bourque1995turner].

Second, marine shell radiocarbon determinations carry regionally variable marine reservoir offsets ($\Delta R$) that skew summed probability curves if mixed uncritically with terrestrial wood charcoal [@hadden2023shell]. Kelly et al. [@kelly2025] excluded marine shell samples and applied 500-iteration Monte Carlo smoothing across 470 terrestrial dates in HU 01, placing the regional demographic peak at 540 cal BP (1410AD, interquartile range 499 to 602 cal BP).

Post-glacial eustatic sea-level rise also reshaped the archaeological visibility of coastal Maine and Cape Cod. Early and Middle Archaic shore stations prior to 3000BC were widely submerged or eroded by tidal transgression, leaving sites such as Boylston Street Fishweir preserved only beneath deep estuarine silt in Boston Back Bay [@snow1980].

By 3000BC to 1500BC, Late Archaic Moorehead and Susquehanna burial and fishing traditions flourished around Penobscot Bay (Turner Farm) and the Merrimack-Concord marshes (Shattuck Farm, Wapanucket No. 8), tapping warm-water oyster beds, swordfish and coastal cod [@bourque1995turner; @starkey2011fisheries].

Northward adoption of maize (*Zea mays*) into southern New England after 1000AD depended closely on thermal growing-degree-day thresholds and riverside alluvial fertility [@bragdon1996; @snow1980]. Along the Saco and Kennebec rivers, cool summers periodically restricted reliable maize maturation, leaving Wabanaki bands heavily reliant on anadromous fish runs, marine mammals, white-tailed deer and coastal shellfish [@snow1980; @bourque1995turner; @starkey2011fisheries; @sanger1987].

Late Holocene hydroclimatic syntheses from northeastern North America document pronounced wet-dry oscillations and Little Ice Age cooling across the last millennium [@stager2021hydroclimatic]. Yet unlike Cahokia or the lower Ohio Vacant Quarter, HU 01 suffered no fourteenth-century urban collapse: diversified coastal fisheries, wetland resources and mixed maize-tuber horticulture sustained 113,5k inhabitants until 1500AD [@bragdon1996; @snow1980].

Following 1500AD, seasonal European fishing fleets working Newfoundland and the Gulf of Maine, followed by sixteenth-century coastal fur exchanges, introduced Old World pathogens well ahead of permanent English settlement at Patuxet (Plymouth) in 1620AD [@starkey2011fisheries; @jones2014; @milner2010].

Early Atlantic trade networks transformed coastal wampum and fur exchange even as successive maritime outbreaks reduced southern and central New England populations into the 1616 to 1619AD epidemic [@cook1976newengland; @bragdon1996; @ubelaker2006].

# Methodology

## Sub-Regional Partitioning and Areal Masks

CENTAUR-II partitions HU 01 on the shared five-arcminute WGS84 terrestrial grid (2.543 active cells, 145.904 km²) into three ecologically coherent sub-regions.

1. **Penobscot, Kennebec, St. John and Aroostook Maine** (76.625 km², 1.370 pixels, 52,52% of HU 01 area, 15 catalogued settlements): Covers Maine, northern New Hampshire and southwestern New Brunswick Wabanaki territories, linking Palaeoindian Vail, deeply stratified Holocene river camps (Sharrow, Hirundo, Eddington Bend), coastal middens (Turner Farm, Damariscotta Shell Midden, Goddard) and riverine towns (Norridgewock Fortified Capital, Norridgewock, Pentagoet, Cushnoc, Saint-Leonard Saint John River Town) [@bourque1995turner; @gramly1982vail; @snow1980].
2. **Merrimack, Saco and Massachusetts-Plymouth Bay** (33.391 km², 604 pixels, 22,89% of HU 01 area, 56 catalogued settlements): Spans Massachusetts Bay, Cape Cod, Great Bay, Narragansett Bay and the Merrimack-Saco-Concord valleys, uniting Palaeoindian Bull Brook and Neponset, Archaic Wapanucket No. 8, Boylston Street Fishweir and Annasnappet Pond, shell-bearing Calf Island and Carns Site, and contact-era coastal and fall-line towns (Great Swamp Fortified Metropolis, RI-1000, Patuxet, Sowams, Pokanoket Capital Town, Pawtucket, Naumkeag Pawtucket Capital, Montaup, Pennacook, Hassanamisco, Pequawket, Squamscott) [@robinson2009bullbrook; @bragdon1996].
3. **Connecticut, Housatonic and Narragansett-Cape Cod Sound** (35.888 km², 569 pixels, 24,6% of HU 01 area, 28 catalogued settlements): Covers the lower and middle Connecticut River, Thames-Pequot basin, Housatonic valley and Long Island Sound borderlands, uniting Whipple, Templeton, Bolton Spring, early maize villages (Skitchewaug, Burnham-Shepard, Morgan Site, Hollister Site) and estuarine or upland centres (Mystic, Shantok, Mashantucket, Pocumtuck, Weinshauks Pequot Central Seat, Nonotuck, Quinnipiac Capital Town, Squakheag Sokoki Town) [@bragdon1996; @cook1976newengland; @mcbride1990pequot].

<figure class="crd-table-figure" id="tab:ne-structure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Area Share</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Peak Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Maine Basins (Wabanaki)</strong></td><td class="crd-td">76.625</td><td class="crd-td">52,52%</td><td class="crd-td">15</td><td class="crd-td">24,1k (1400AD)</td><td class="crd-td">0,315</td></tr>
<tr><td class="crd-td"><strong>2. Merrimack and Mass. Bay</strong></td><td class="crd-td">33.391</td><td class="crd-td">22,89%</td><td class="crd-td">56</td><td class="crd-td">36,2k (1400AD)</td><td class="crd-td">1,084</td></tr>
<tr><td class="crd-td"><strong>3. Conn., Narragansett and South</strong></td><td class="crd-td">35.888</td><td class="crd-td">24,6%</td><td class="crd-td">28</td><td class="crd-td">56,2k (1400AD)</td><td class="crd-td">1,566</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal geometry, catalogued settlement counts and peak demographic densities in New England (HU 01).</figcaption>
</figure>

## Multi-Registry Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights inside HU 01 derive from the continental Northern America radiocarbon composite spanning 493.687 valid land cells (18,56M km², with 129.716 to 133.990 active inhabited non-wasteland cells across the ten analytical horizons). That composite merges p3k14c [@bird2022p3k14c], c14bazAAR, state archaeological site files and CRM inventories [@defense1995dtic_ada_e5d; @defense1995dtic_ada_a2c; @defense1996dtic_ada_990; @defense1979dtic_ada_d8c; @defense1981dtic_ada_b58] into 92.500 unique site-periods (166.545 horizon site-record entries) across 3.832 domestic Voronoi catchments (15,52M km², 2.562 active inhabited catchments, 66,86% coverage; equivalent circular radius median 29,48 km and 90th percentile 41 km overall, or 29,31 km and 39,86 km across active catchments; square-root-area median 52,25 km and p90 72,66 km) plus 251 cross-frontier buffer catchments, representing a 14,15x multiplier over the 6.539 legacy baseline alone.

Site densities undergo Freeman-Tukey variance stabilisation, macro-tile log-variance regularisation and 1-ring Poisson-Gamma credibility shrinkage before weighted least-squares (WLS) biophysical covariate regression and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons (13000BC to 1650AD) [@paciorek2006matern].

Biophysical covariates capture steep coastal-interior gradients across HU 01 via exponential coastal proximity, 13,5 km fluvial decay, terrain slope and habitable land fraction. Those covariates smoothly bridge estuarine shell-midden density in Maine and Narragansett Bay across watershed boundaries with the Maritimes, Saint Lawrence and Hudson-Mohawk (HU 02).

Comparative northeastern North American bioarchaeological and ecological studies clarify why catchment priors must be weighted by inhabited area rather than raw artefact counts [@crema2021rcarbon; @snow1995microchronology]. North American wildlife genetics [@mychajliw2014genetics] and coastal Maine shell-midden and marine-reservoir syntheses [@bourque1995turner; @hadden2023shell] confirm that taphonomy, preservation bias and local mobility reshape recovery intensity independently of demographic scale.

## Temporal Interpolation Across Ten Kriging Horizons

While the population ledger reports 23 demographic benchmarks between 10000BC and 1600AD, the North American composite evaluates spatial kriging weights across 10 canonical Holocene horizons (13000BC to 6000BC, 6000 to 3000BC, 3000 to 1000BC, 1000 to 200BC, 200BC to 400AD, 400 to 800AD, 800 to 1100AD, 1100 to 1300AD, 1300 to 1500AD and 1500 to 1650AD). Intermediate Woodland and late pre-contact benchmarks receive linearly blended spatial weight surfaces scaled to each sub-region's own trajectory.

Blending adjacent surfaces preserves continuity in shifting river-to-estuary land use without introducing abrupt spatial discontinuities between 1300AD and 1600AD. Cross-frontier 300 km buffer zones simultaneously harmonise density estimates along the upper St. John, Richelieu-Champlain and Housatonic divides with eastern Canada and HU 02.

## Ecological Zoning and Maize Latitude Limits

A strong meridional climate gradient governs subsistence capacity across HU 01. Southern river floodplains along the Connecticut, Thames, Taunton and Narragansett estuaries enjoy longer frost-free summers suitable for maize-beans-squash horticulture alongside year-round shellfish beds [@bragdon1996].

North of the Merrimack and Piscataqua basins, shorter growing seasons and thin till soils kept horticultural surpluses modest prior to European contact. Wabanaki populations across Maine therefore relied more heavily on seasonal river-estuary transhumance, anadromous fish runs and mixed terrestrial-marine foraging [@snow1980; @bourque1995turner].

## Urban Subtraction and Uncertainty Intervals

For each sub-region $r$ and benchmark horizon $t \in \{-10000, \dots, 1600\}$, summed populations from all 99 catalogued settlements in the HU 01 gazetteer are deducted from sub-regional benchmark targets $P_r(t)$ prior to dasymetric rural allocation:

$$R_r(t) = \max\!\left(0,\; P_r(t) - \sum_{i \in S_r} U_i(t)\right)$$

Rural residuals $R_r(t)$ distribute across active 5-arcminute cells proportionally to the interpolated North American Matérn weights and receive two 5-pixel separable smoothing passes.

Symmetric 8% uncertainty intervals (0,92 to 1,08 of $P_r(t)$, floored at 0 to 5 for zero-anchor Maine at 10000BC) reflect seventeenth-century eyewitness discrepancy and interior spruce-forest survey gaps.

# Testing and Validation

Five checks confirm consistency across spatial and tabular layers at GMT+0:

1. **Radiocarbon Sample Floor**: HU 01 relies on N = 470 terrestrial radiocarbon dates after marine shell exclusion [@hadden2023shell], clearing the 400-date reliability floor (0,2 dates per century over two millennia) [@kelly2025; @crema2021rcarbon].
2. **Non-Stationary Kriging Sharpness**: Across all ten horizons of the North American composite (13000BC to 1650AD), the Matérn ($\nu = 3/2$) variogram maintains regularised $\tau_1 = 1,35$ on all ten horizons (raw baseline 1,4834 to 1,6067, mean 1,5861), $\tau_2 = 2,9025$, effective short range 44,17 to 47,85 km (mean 47,23 km), raw nugget 0 across all ten horizons, regularised nugget-to-sill 0,04 (< 0,45, $\eta = 0,0417$) and WLS residual fit $R^2 = 0,9991$ to 0,9993.
3. **Gazetteer and Ledger Reconciliation**: Cross-checking the regional settlement gazetteer (99 included sites: 15 in Maine Basins, 56 in Merrimack-Massachusetts Bay and 28 in Connecticut-Narragansett-South; 291 benchmark observations averaging 2,94 per site, 55 with at least three observations) against the regional source ledger (202 total candidates, 103 excluded duplicate-alias consolidations within 2 km, including Whaleback merged into Damariscotta Shell Midden, Naskeag into Goddard, Neville into Smyth and Pine Hill (Massachusetts) into Pocumtuck) yields 0 unmatched keys and 0 coordinate errors.
4. **Urban-Rural Mass Conservation**: Aggregate catalogued settlement sums remain strictly below HU 01 totals across every benchmark, accounting for 510 of 800 inhabitants at 9000BC, 13.850 (11,89% of 116,5k) at 1400AD, 37.185 (32,76% of 113,5k) at 1500AD and 45.330 (52,4% of 86,5k) at 1600AD. Sub-regional settlement sums likewise remain strictly below regional totals in 68 of 69 sub-region-horizon pairs, with only Merrimack-Massachusetts Bay at 1600AD (27.870 across 56 expanded town records versus 26k regional ceiling) flooring its residual rural share at 0.
5. **Arithmetic Benchmark Consistency**: Sub-regional estimates and interval bounds sum identically to the aggregate HU 01 benchmark series across all 23 horizons (10000BC to 1600AD).

<figure class="crd-table-figure" id="tab:ne-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Maine Basins (Wabanaki)</strong></td><td class="crd-td">76.625</td><td class="crd-td">13,4k</td><td class="crd-td">21,2k</td><td class="crd-td">24,1k</td><td class="crd-td">23,5k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>2. Merrimack and Mass. Bay</strong></td><td class="crd-td">33.391</td><td class="crd-td">19k</td><td class="crd-td">31,5k</td><td class="crd-td">36,2k</td><td class="crd-td">35k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>3. Conn., Narragansett and South</strong></td><td class="crd-td">35.888</td><td class="crd-td">29,5k</td><td class="crd-td">49k</td><td class="crd-td">56,2k</td><td class="crd-td">55k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>HU 01 Total</strong></td><td class="crd-td">145.904</td><td class="crd-td">61,9k</td><td class="crd-td">101,7k</td><td class="crd-td">116,5k</td><td class="crd-td">113,5k</td><td class="crd-td">86,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional area and benchmark population estimates across New England (HU 01) from 0AD to 1600AD.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Archaic Estuarine Growth

Following retreat of the Laurentide ice sheet and formation of the Gulf of Maine, Palaeoindian groups entered southern and central New England by 9000BC, establishing caribou-intercept and lithic-quarry aggregations at Bull Brook, Vail, Whipple, Neponset, Munsungun, Templeton, Bolton Spring and Wapanucket No. 8.

Regional population climbed from 150 inhabitants (137-168) in 10000BC to 800 in 9000BC, 2.350 in 8000BC and 14,3k in 5000BC as boreal spruce-fir forest yielded to mixed oak-hickory woodland and tidal shellfish flats [@snow1980; @bourque1995turner].

Between 3000BC and 1000BC, Late Archaic and Early Woodland communities expanded from 29k (26,7k-31,3k) to 49,6k (45,6k-53,6k). Intensive harvesting of anadromous salmon, shad, alewife and sea-run sturgeon along the Merrimack, Kennebec and Connecticut falls supported multi-century occupation at Turner Farm, Wapanucket No. 8, Boylston Street Fishweir, Shattuck Farm, Titicut, Eddington Bend, Hirundo and Smyth [@snow1980; @bourque1995turner].

By 0AD, total HU 01 population reached 61,9k (56,9k to 66,9k; 0,424 persons per km²), advancing steadily through the Middle Woodland to 70k in 200AD, 86,2k in 600AD, 94,3k in 800AD and 101,7k in 1000AD (Figure \ref{fig:traj-new-england}). Unlike earlier steep coastal inflections during tidal stabilisation, Woodland growth proceeded at a steadier secular pace across both interior lakes and outer bays [@snow1980].

<figure class="crd-figure-block" id="fig:traj-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig2_new_england_trajectory.png" alt="fig:traj-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in New England (HU 01) with uncertainty interval, 10000BC to 1600AD.</figcaption>
</figure>

## Late Pre-Contact Plateau and Sixteenth-Century Contraction

Consistent with Kelly et al. [@kelly2025] HU 01 radiocarbon peak at 1410AD, regional population rose from 106,6k in 1100AD to 110,8k in 1200AD, 114,1k in 1300AD and a Holocene peak of 116,5k (107,2k to 125,8k; 0,798 persons per km²) in 1400AD (Table \ref{tab:ne-subregions} and Table \ref{tab:ne-benchmarks}).

Unlike interior Mississippian valleys that contracted sharply after 1300AD, New England maintained a broad plateau across the fifteenth century, holding 113,5k inhabitants (0,778 persons per km²) in 1500AD. Flexible mixed subsistence buffers in southern estuaries and northern river fisheries cushioned climatic oscillations during the early Little Ice Age [@bragdon1996; @snow1980].

Over the Holocene sequence, demographic weight shifted modestly toward southern estuarine and floodplain corridors (Figure \ref{fig:shares-new-england}). Maine's Wabanaki share eased from 24,48% in 5000BC and 21,65% (13,4k) at 0AD to 20,69% (24,1k) at 1400AD, whereas southern New England maintained 47,66% to 48,55% of all HU 01 inhabitants from 0AD onward on 24,6% of the land (1,566 persons per km² in 1400AD, five times Maine's 0,315 persons per km²).

<figure class="crd-figure-block" id="fig:shares-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig3_new_england_shares.png" alt="fig:shares-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across New England (HU 01) from 10000BC to 1600AD.</figcaption>
</figure>

After 1500AD, European cod fishing stations, Basque-Breton coastal visits and fur-trade exchanges transmitted Old World pathogens along maritime estuaries well before 1620AD English settlement [@cook1976newengland; @jones2014; @ubelaker2006]. Basin population declined to 100k (92k to 108k) in 1550AD and 86,5k (79,6k to 93,4k; 0,593 persons per km²) in 1600AD, remaining concentrated around Narragansett Bay, the Thames-Connecticut valley and Massachusetts Bay just prior to the catastrophic 1616 to 1619AD coastal epidemic [@bragdon1996; @milner2010].

## Estuarine-to-Upland Density Contrast and Settlement Morphology

Rank-size distribution across the 99 catalogued HU 01 sites exhibits moderate town primacy rather than a hyper-nucleated Mississippian mound hierarchy. Nucleated coastal and fall-line towns (Great Swamp Fortified Metropolis at 2,5k, RI-1000 at 1,85k, Mystic at 1,55k, Patuxet at 1,45k, Sowams at 1,4k, Norridgewock Fortified Capital and Pokanoket Capital Town at 1,2k) rarely exceeded 1k to 2,5k residents, reflecting village confederacies coupled with seasonal fishing and planting hamlets [@bragdon1996].

Consequently, the catalogued urban settlement fraction peaked late at 32,76% (37.185 of 113,5k) in 1500AD and 52,4% (45.330 of 86,5k) in 1600AD, leaving 47,6% of terminal 1600AD inhabitants in smaller hamlets and seasonal camps mapped smoothly by the continental rural density surface.

<figure class="crd-table-figure" id="tab:ne-top-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-region</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Great Swamp Fortified Metropolis</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">2,5k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">RI-1000</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,8k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Mystic</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,6k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Patuxet</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,4k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Sowams</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,4k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Norridgewock Fortified Capital</td><td class="crd-td">Maine Basins</td><td class="crd-td">1,2k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Pokanoket Capital Town</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,2k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Shantok</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,1k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Mashantucket</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,1k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Naumkeag Pawtucket Capital</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,1k</td><td class="crd-td">1600AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top ten catalogued settlements by peak population in New England (HU 01).</figcaption>
</figure>

## Sub-Regional Trajectories Across the Three Tiers

### Penobscot, Kennebec, St. John and Aroostook Maine

Covering 76.625 km² (52,52% of HU 01), northern New England moved from negligible post-glacial density (150 in 9000BC, 550 in 8000BC) to 3,5k in 5000BC and 13,4k (0,175 persons per km²) at 0AD. Deeply stratified interior river camps at Sharrow, Hirundo and Eddington Bend chart steady freshwater fishery reliance throughout the Middle and Late Archaic [@snow1980; @smith1926indian_r_3b1].

Between 1000BC and 1000AD, ceramic vessels and long-distance copper and lithic exchanges spread through coastal and riverine Wabanaki territories without triggering sudden urbanisation. Interior rapids along the Kennebec, Penobscot and Androscoggin anchored seasonal canoe portages and winter hunting bases.

Maritime shell-midden networks at Turner Farm (310 at 1200AD), Damariscotta Shell Midden (320 at 800AD) and Goddard (340 at 1100AD) coexisted with interior portage settlements at Norridgewock Fortified Capital (750 at 1500AD, 1,2k peak at 1600AD), Norridgewock (620 at 1500AD), Pentagoet (510), Cushnoc (490 at 1600AD) and Saint-Leonard Saint John River Town (420 at 1500AD).

Maine peaked at 24,1k (0,315 persons per km²) in 1400AD and eased more gently after 1500AD (23,5k to 18,5k or 0,241 persons per km² in 1600AD, down 21,28%) than southern coastal zones. Dispersed riverine Wabanaki bands experienced lower early crowding mortality prior to seventeenth-century epidemics [@bourque1995turner; @snow1980].

### Merrimack, Saco and Massachusetts-Plymouth Bay

Covering 33.391 km² (22,89% of HU 01), the Merrimack-Saco and Massachusetts-Narragansett Bay corridor consistently sustained dense coastal and fall-line aggregation. Population climbed from 50 in 10000BC and 4,3k in 5000BC to 19k (0,569 persons per km²) at 0AD, 31,5k in 1000AD and 36,2k (1,084 persons per km²) in 1400AD.

Estuarine capitals and fall-line fisheries at Great Swamp Fortified Metropolis (1,5k at 1500AD, 2,5k peak at 1600AD), RI-1000 (1,85k at 1500AD), Patuxet (1,45k at 1500AD), Sowams (1,4k), Pokanoket Capital Town (1,2k), Pawtucket (1,1k), Naumkeag Pawtucket Capital (1,1k), Montaup (950), Pennacook (840), Hassanamisco (580), Pequawket (480) and Squamscott (460) anchored late pre-contact density.

Following 1500AD (35k), maritime disease exposure lowered the sub-region to 30,5k (1550AD) and 26k (0,779 persons per km²) by 1600AD [@cook1976newengland]. Dense bayshore aggregation magnified respiratory contagion once fishing fleets frequented Cape Cod and Boston Harbour.

### Connecticut, Housatonic and Narragansett Sound

Spanning 35.888 km² (24,6% of HU 01), southern New England achieved the highest mean densities across the watershed, growing from 100 in 10000BC and 6,5k in 5000BC to 29,5k (0,822 persons per km²) at 0AD, 49k in 1000AD and a peak of 56,2k (1,566 persons per km²) in 1400AD.

Productive maize-bean-squash floodplains and sheltered Thames-Long Island Sound estuaries supported large fortified towns: Mystic (1,55k at 1600AD), Shantok (1,15k), Mashantucket (1,1k), Pocumtuck (1,05k), Weinshauks Pequot Central Seat (950), Nonotuck (820), Quinnipiac Capital Town (800), Squakheag Sokoki Town (800) and Agawam Pocumtuc Town (750) [@bragdon1996; @mcbride1990pequot].

Fortified palisades appeared increasingly around Long Island Sound and the Thames estuary during the fifteenth and sixteenth centuries as coastal wampum craft and maize storage drew intensifying inter-group competition [@bragdon1996]. Following 1500AD (55k), early coastal disease reduced numbers to 48,5k in 1550AD and 42k (1,17 persons per km²) in 1600AD.

### Sixteenth-Century Maritime Contact and Regional Frontier Continuity

Early Atlantic exploration along the New England coast began well ahead of permanent settlement: Giovanni da Verrazzano anchored in Narragansett Bay in 1524AD, Bartholomew Gosnold mapped Cape Cod and Cuttyhunk in 1602AD, Samuel de Champlain charted the Maine and Massachusetts littoral in 1604AD to 1606AD, and English cod-fishing crews maintained seasonal drying stations from Monhegan to Plymouth [@bragdon1996; @starkey2011fisheries].

Those intermittent maritime contacts explain why HU 01 began sliding after 1500AD (113,5k down to 86,5k in 1600AD) even before the devastating 1616 to 1619AD epidemic recorded across Massachusetts Bay [@cook1976newengland; @jones2014]. Across surrounding borders, smooth 300 km cross-frontier buffers link Wabanaki Maine continuously into the Maritimes and St. Lawrence corridors while aligning Housatonic and upper Connecticut densities with the Hudson-Mohawk margin of HU 02.

<figure class="crd-table-figure" id="tab:ne-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">150</td><td class="crd-td">137</td><td class="crd-td">168</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">0,016</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">14,3k</td><td class="crd-td">13,2k</td><td class="crd-td">15,4k</td><td class="crd-td">0,098</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">29k</td><td class="crd-td">26,7k</td><td class="crd-td">31,3k</td><td class="crd-td">0,199</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">38,6k</td><td class="crd-td">35,5k</td><td class="crd-td">41,7k</td><td class="crd-td">0,265</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">49,6k</td><td class="crd-td">45,6k</td><td class="crd-td">53,6k</td><td class="crd-td">0,34</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">61,9k</td><td class="crd-td">56,9k</td><td class="crd-td">66,9k</td><td class="crd-td">0,424</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">70k</td><td class="crd-td">64,4k</td><td class="crd-td">75,6k</td><td class="crd-td">0,48</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">86,2k</td><td class="crd-td">79,3k</td><td class="crd-td">93,1k</td><td class="crd-td">0,591</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">101,7k</td><td class="crd-td">93,6k</td><td class="crd-td">109,8k</td><td class="crd-td">0,697</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">110,8k</td><td class="crd-td">101,9k</td><td class="crd-td">119,7k</td><td class="crd-td">0,759</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">116,5k</td><td class="crd-td">107,2k</td><td class="crd-td">125,8k</td><td class="crd-td">0,798</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">113,5k</td><td class="crd-td">104,4k</td><td class="crd-td">122,6k</td><td class="crd-td">0,778</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">100k</td><td class="crd-td">92k</td><td class="crd-td">108k</td><td class="crd-td">0,685</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">86,5k</td><td class="crd-td">79,6k</td><td class="crd-td">93,4k</td><td class="crd-td">0,593</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Headline population trajectory, 8% uncertainty intervals and mean density across New England (HU 01), 10000BC to 1600AD.</figcaption>
</figure>

# Limitations

Four evidentiary constraints qualify the HU 01 reconstruction:

1. **Survey and Radiocarbon Clustering**: Terrestrial radiocarbon dates in p3k14c and state inventories (N = 470 in HU 01) cluster disproportionately along coastal Maine shell middens and southern New England highway-CRM corridors, leaving interior northern boreal uplands comparatively under-sampled [@snow1980; @bourque1995turner].
2. **Marine Reservoir Exclusion and Sea-Level Loss**: Excluding marine shell dates eliminates variable $\Delta R$ reservoir distortion [@hadden2023shell], yet lowers sample counts along outer islands and coastal lagoons relative to inland river valleys. Post-glacial marine transgression across the Gulf of Maine further submerged early Holocene coastal camps below modern tidal charts.
3. **Northern Horticulture Resolution**: Sparse palaeobotanical macro-remains north of the Merrimack and Piscataqua basins restrict fine-grained separation between permanent riverbank farming hamlets and warm-season fishing stations before 1200AD [@snow1980].
4. **Sixteenth-Century Contact Chronology**: Maritime epidemic mortality between 1500AD and 1600AD remains less precisely resolved than seventeenth-century town vital records [@mather1677a_relati_8dd] because voyages prior to 1602AD left fragmentary coastal narratives; 1550AD and 1600AD estimates therefore rely on archaeological site-frequency decay combined with back-projection from 1616 to 1620AD baselines [@cook1976newengland; @snow1995microchronology; @jones2014].

# Conclusion

New England (HU 01) sustained steady Holocene demographic growth culminating in a late pre-contact plateau of 116,5k inhabitants (0,798 persons per km²) around 1400AD (1410AD radiocarbon peak), nearly two centuries after interior Mississippian agricultural centres peaked.

Nearly half of the regional population resided across the warmer Connecticut, Housatonic and Narragansett estuaries, where coastal shellfish beds and floodplain maize horticulture supported densities reaching 1,57 persons per km². Northern Wabanaki river basins, by contrast, maintained lower-density maritime and interior foraging-gardening communities adapted to shorter growing seasons.

Integrating 99 catalogued settlements (Table \ref{tab:ne-top-sites}) with the North American Matérn prior separates concentrated coastal villages from dispersed forested uplands while capturing sixteenth-century pre-plantation contraction (23,79% fall from 1500AD to 86,5k in 1600AD).

Across northern, central and southern watersheds alike, the spatial weights respect observed archaeological recovery while damping survey artefacts along highway corridors and tidal islands.

This benchmark links directly into seventeenth-century Plymouth, Massachusetts Bay, Rhode Island, Connecticut and Acadian colonial enumerations at 1600AD, establishing uninterrupted demographic continuity across the colonial transition [@ubelaker2006; @milner2010]. Future CRM inventories from interior Piscataquis and upper Connecticut tributaries can drop straight into the continental radiocarbon grid without modifying urban settlement totals.

# Sources

<div id="refs"></div>
