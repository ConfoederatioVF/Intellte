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
hero_caption: "Sub-regional areal masks and 64 catalogued settlements across USGS Hydrological Unit 01 (145.387 km²) from 10000BC to 1600AD."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This chapter reconstructs the pre-colonial Holocene population of New England (USGS Hydrological Unit 01, `145.387 km²` across `2.504` five-arcminute cells) from `10000BC` to `1600AD` across three watershed sub-regions enclosing `64` catalogued settlements (`65` candidates in `new_england_source_ledger.json5`, `1` excluded duplicate alias).

Anchored to Kelly et al. [@kelly2025] radiocarbon summed probability trends (`N = 470` terrestrial dates, median peak `1410AD` at `540 cal BP`) and non-stationary Matérn ($\nu = 3/2$) kriging over the continental North American prior (`sites_northern_america`, containing `93.358` unique site-periods across `4.457` domestic catchments, `14,12x` the global radiocarbon database baseline, with $\tau_1 = 1,41$, raw nugget `0,000`, regularised nugget-to-sill `0,04` and WLS residual $R^2 = 0,999$) [@bird2022p3k14c; @paciorek2006matern], HU 01 rises from `150` inhabitants (`137-168`) in `10000BC` to `61,9k` (`0,426` persons/km²) at `0AD` and reaches a pre-contact maximum of `116,5k` (`107,2k-125,8k`; `0,801` persons/km²) in `1400AD`.

Southern New England (Connecticut, Housatonic and Narragansett basins) holds `48,24%` of the `1400AD` peak (`56,2k`; `1,559` persons/km²), ahead of Merrimack and Massachusetts Bay (`36,2k`; `1,966` persons/km²) and the Maine Wabanaki basins (`24,1k`; `0,265` persons/km²).

Unlike interior Mississippian river valleys, HU 01 sustained `113,5k` inhabitants through `1500AD` before sixteenth-century coastal cod fisheries, Basque-Breton contacts and early fur-trade pathogens lowered regional totals by `23,79%` from `1500AD` (`25,75%` below the `1400AD` peak) to `86,5k` (`79,6k-93,4k`; `0,595` persons/km²) by `1600AD` [@cook1976newengland; @bragdon1996; @jones2014].

# Background

Historical demographic estimates for pre-colonial New England diverge sharply according to whether scholars privilege early seventeenth-century English, Dutch and French eyewitness counts or archaeological site distributions. Early twentieth-century syntheses placed contact-era southern and northern New England Algonquians near `25k` to `35k`.

Later ethnohistoric reassessments revised those figures markedly upward. Cook [@cook1976newengland] raised southern New England totals above `70k` from seventeenth-century tribal territory extrapolations, while Snow [@snow1980; @snow1995microchronology] developed carrying-capacity and village-footprint estimates placing the wider New England-Maritimes region between `90k` and `120k`.

Broad continental population grids previously smoothed HU 01 into a single Eastern Woodlands belt, masking the sharp ecological frontier separating boreal spruce-fir Maine from frost-free Long Island Sound estuaries [@bragdon1996; @bourque1995turner].

Within `145.387 km²`, growing-season length halves between Narragansett Bay (`160-190` frost-free days) and the upper Aroostook and Penobscot headwaters (`90-110` days). That agro-climatic gradient created two contrasting subsistence regimes that cannot be modelled with a single regional density scalar.

## Palaeoclimate, Taphonomy and Shell-Date Filtering

Two structural biases complicate direct archaeological inference in New England. First, acidic podzolic soils across glaciated New England uplands rapidly dissolve uncalcined bone and shell unless buffered by alkaline marine shell middens along the Gulf of Maine, Boston Harbor and Narragansett Bay [@bourque1995turner].

Second, marine shell radiocarbon determinations carry regionally variable marine reservoir offsets ($\Delta R$) that skew summed probability curves if mixed uncritically with terrestrial wood charcoal [@hadden2023shell]. Kelly et al. [@kelly2025] excluded marine shell samples and applied `500`-iteration Monte Carlo smoothing across `470` terrestrial dates in HU 01, placing the regional demographic peak at `540 cal BP` (`1410AD`, interquartile range `499` to `602 cal BP`).

Post-glacial eustatic sea-level rise also reshaped the archaeological visibility of coastal Maine and Cape Cod. Early and Middle Archaic shore stations prior to `3000BC` were widely submerged or eroded by tidal transgression, leaving sites such as `Boylston Street Fishweir` preserved only beneath deep estuarine silt in Boston Back Bay [@snow1980].

By `3000BC` to `1500BC`, Late Archaic Moorehead and Susquehanna burial and fishing traditions flourished around Penobscot Bay (`Turner Farm`) and the Merrimack-Concord marshes (`Shattuck Farm`, `Wapanucket No. 8`), tapping warm-water oyster beds, swordfish and coastal cod [@bourque1995turner; @starkey2011fisheries].

Northward expansion of tropical maize (*Zea mays*) [@gonzalez2018ecogeography] into southern New England after `1000AD` depended critically on thermal growing-degree-day thresholds comparable to those governing cereal limits in northern temperate zones elsewhere [@guedes2015impact]. Along the Saco and Kennebec rivers, cool summers periodically restricted reliable maize maturation, leaving Wabanaki bands heavily reliant on anadromous fish runs, marine mammals, white-tailed deer and coastal shellfish [@snow1980; @bourque1995turner; @starkey2011fisheries].

Late Holocene hydroclimatic syntheses from northeastern North America document pronounced wet-dry oscillations and Little Ice Age cooling across the last millennium [@stager2021hydroclimatic]. Yet unlike Cahokia or the lower Ohio Vacant Quarter, HU 01 suffered no fourteenth-century urban collapse: diversified coastal fisheries, wetland resources and mixed maize-tuber horticulture sustained `113,5k` inhabitants until `1500AD` [@bragdon1996; @snow1980].

Following `1500AD`, seasonal European fishing fleets working Newfoundland and the Gulf of Maine, followed by sixteenth-century coastal fur exchanges, introduced Old World pathogens well ahead of permanent English settlement at Patuxet (Plymouth) in `1620AD` [@starkey2011fisheries; @jones2014; @milner2010].

Early Atlantic trade networks left geochemical signatures in Indigenous copper-brass grave assemblages [@skowronek2023german] even as successive coastal outbreaks reduced southern and central New England populations into the `1616-1619AD` epidemic [@cook1976newengland; @ubelaker2006].

# Methodology

## Sub-Regional Partitioning and Areal Masks

CENTAUR-II partitions HU 01 on the shared `4320x2160` five-arcminute WGS84 grid (`2.504` active cells, `145.387 km²`) into three ecologically coherent sub-regions encoded in `new_england_areal_mask.png` and `new_england.json5`.

1. **Penobscot, Kennebec, St. John and Aroostook Maine** (`ne_maine_penobscot_kennebec`, `90.923 km²`, `1.594` pixels, `62,54%` of HU 01 area, `17` catalogued settlements): Covers Maine, northern New Hampshire and southwestern New Brunswick Wabanaki territories, linking Palaeoindian `Vail`, deeply stratified Holocene river camps (`Sharrow`, `Hirundo`, `Eddington Bend`), coastal middens (`Turner Farm`, `Damariscotta Shell Midden`, `Goddard`, `Naskeag`) and riverine towns (`Norridgewock`, `Pentagoet`, `Cushnoc`, `Pequawket`) [@bourque1995turner; @snow1980].
2. **Merrimack, Saco and Massachusetts-Plymouth Bay** (`ne_merrimack_massachusetts_bay`, `18.412 km²`, `320` pixels, `12,66%` of HU 01 area, `17` catalogued settlements): Spans coastal Massachusetts Bay, Cape Cod Bay, Great Bay and the Merrimack-Concord valleys, uniting Palaeoindian `Bull Brook` and `Neponset`, Middle Archaic `Boylston Street Fishweir` and `Annasnappet Pond`, shell-bearing `Calf Island` and `Carns Site`, and contact-era Pennacook and Massachusett towns (`Patuxet`, `Pawtucket`, `Pennacook`, `Hassanamisco`, `Squamscott`).
3. **Connecticut, Housatonic and Narragansett-Cape Cod Sound** (`ne_connecticut_narragansett_south`, `36.052 km²`, `590` pixels, `24,80%` of HU 01 area, `30` catalogued settlements): Covers the lower and middle Connecticut River, Housatonic valley, Rhode Island and Narragansett Bay estuaries, uniting `Whipple`, `Templeton`, `Wapanucket No. 8`, early maize villages (`Skitchewaug`, `Burnham-Shepard`, `Morgan Site`, `Hollister Site`) and fortified or estuarine centres (`RI-1000`, `Mystic`, `Sowams`, `Shantok`, `Mashantucket`, `Pocumtuck`, `Montaup`, `Nonotuck`) [@bragdon1996; @cook1976newengland].

<figure class="crd-table-figure" id="tab:ne-structure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Area Share</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Peak Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Maine Basins (Wabanaki)</strong></td><td class="crd-td">90.923</td><td class="crd-td">62,54%</td><td class="crd-td">17</td><td class="crd-td">24,1k (1400AD)</td><td class="crd-td">0,265</td></tr>
<tr><td class="crd-td"><strong>2. Merrimack &amp; Mass. Bay</strong></td><td class="crd-td">18.412</td><td class="crd-td">12,66%</td><td class="crd-td">17</td><td class="crd-td">36,2k (1400AD)</td><td class="crd-td">1,966</td></tr>
<tr><td class="crd-td"><strong>3. Conn., Narragansett &amp; South</strong></td><td class="crd-td">36.052</td><td class="crd-td">24,8%</td><td class="crd-td">30</td><td class="crd-td">56,2k (1400AD)</td><td class="crd-td">1,559</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal geometry, catalogued settlement counts and peak demographic densities in New England (HU 01).</figcaption>
</figure>

## Multi-Registry Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights inside HU 01 derive from `sites_northern_america`. That composite merges `p3k14c` [@bird2022p3k14c], `c14bazAAR`, state archaeological site files and CRM inventories into `93.358` unique site-period observations across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments, median radius `27,36 km`, 90th percentile `59,92 km`) plus `171` cross-frontier buffer catchments, representing a `14,12x` site multiplier over the global radiocarbon baseline alone.

Site densities undergo Freeman-Tukey variance stabilisation, macro-tile log-variance regularisation and 1-ring Poisson-Gamma credibility shrinkage before weighted least-squares (WLS) biophysical covariate regression and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons (`10000BC` to `1600AD`) [@paciorek2006matern].

Biophysical covariates capture steep coastal-interior gradients across HU 01 via exponential coastal proximity, `13,5 km` fluvial decay, terrain slope and habitable land fraction. Those covariates smoothly bridge estuarine shell-midden density in Maine and Narragansett Bay across watershed boundaries with the Maritimes, Saint Lawrence and Hudson-Mohawk (HU 02).

Comparative bioarchaeological and palaeoecological studies clarify why catchment priors must be separated from raw lithic or midden counts. Coastal wildlife genetics and whale-keratin analyses demonstrate persistent marine harvesting along North Atlantic shores [@mychajliw2014genetics; @solazzo2017molecular], while skeletal osteology and stable isotopes trace shifting dietary stress across high-latitude cohorts [@aronsen2019dead; @millard2020scottish].

Agent-based agrarian simulations [@bernigaud2024impact] and lithic exchange analyses [@eggers2011paleoamerican; @will2020regional; @miller2019ostrich] further confirm that durable artefact concentrations track curation intensity and raw-material proximity unless weighted by inhabited catchment area.

## Temporal Interpolation Across Ten Kriging Horizons

While the population ledger reports `23` demographic benchmarks between `10000BC` and `1600AD`, `sites_northern_america` evaluates spatial kriging weights across `10` canonical Holocene slices (`10000BC`, `8000BC`, `5000BC`, `3000BC`, `2000BC`, `1000BC`, `0AD`, `1000AD`, `1300AD` and `1600AD`). Intermediate Woodland and late pre-contact horizons receive linearly blended spatial weight surfaces scaled to each sub-region's own trajectory.

Blending adjacent surfaces preserves continuity in shifting river-to-estuary land use without introducing abrupt spatial discontinuities between `1300AD` and `1600AD`. Cross-frontier `300 km` buffer zones simultaneously harmonise density estimates along the upper St. John, Richelieu-Champlain and Housatonic divides with eastern Canada and HU 02.

## Ecological Zoning and Maize Latitude Limits

A strong meridional climate gradient governs subsistence capacity across HU 01. Southern river floodplains along the Connecticut, Thames, Taunton and Narragansett estuaries enjoy longer frost-free summers suitable for maize-beans-squash horticulture alongside year-round shellfish beds [@bragdon1996].

North of the Merrimack and Piscataqua basins, shorter growing seasons and thin till soils kept horticultural surpluses modest prior to European contact. Wabanaki populations across Maine therefore relied more heavily on seasonal river-estuary transhumance, anadromous fish runs and mixed terrestrial-marine foraging [@snow1980; @bourque1995turner].

## Urban Subtraction and Uncertainty Intervals

For each sub-region $r$ and benchmark horizon $t \in \{-10000, \dots, 1600\}$, summed populations from all `64` catalogued settlements in `new_england_settlements.json` are subtracted from sub-regional benchmark targets $P_r(t)$ prior to dasymetric rural allocation:

$$R_r(t) = P_r(t) - \sum_{i \in S_r} U_i(t), \qquad R_r(t) \ge 0$$

Rural residuals $R_r(t)$ distribute across active 5-arcminute cells proportionally to the interpolated `sites_northern_america` Matérn weights and receive two `5`-pixel separable smoothing passes.

Symmetric `±8,0%` bounds (`[0,92 P_r(t), 1,08 P_r(t)]`, floored at `[0, 5]` for zero-anchor Maine at `10000BC`) reflect seventeenth-century eyewitness discrepancy and interior spruce-forest survey gaps.

# Testing and Validation

Five verification gates pass with `0` errors at `GMT+0`:

1. **Radiocarbon Sample Floor**: HU 01 relies on `N = 470` terrestrial radiocarbon dates after marine shell exclusion [@hadden2023shell], clearing the `400`-date reliability floor (`0,2` dates per century over two millennia) [@kelly2025; @crema2021rcarbon].
2. **Non-Stationary Kriging Sharpness**: Across all ten horizons of `sites_northern_america`, the Matérn ($\nu = 3/2$) variogram achieves dimensionless range $\tau_1 = 1,41$ (`1,4144`), $\tau_2 = 2,62$ (`2,6166`), effective short range `38,7 km`, raw nugget `0,000`, regularised nugget-to-sill `0,04` (`< 0,45`) and WLS residual fit $R^2 = 0,999$ (`0,9991` to `0,9993`).
3. **Gazetteer and Ledger Reconciliation**: Cross-checking `new_england_settlements.json` (`64` included sites: `17` in Maine Basins, `17` in Merrimack-Massachusetts Bay and `30` in Connecticut-Narragansett-South) against `new_england_source_ledger.json5` (`65` total candidates, `1` excluded duplicate alias of `RI-1000`) yields `0` unmatched keys and `0` coordinate errors.
4. **Urban-Rural Mass Conservation**: Catalogued settlement sums remain strictly below sub-regional targets across all horizons, accounting for `510` of `800` inhabitants at `9000BC`, `13.850` (`11,89%` of `116,5k`) at `1400AD`, `20.325` (`17,91%` of `113,5k`) at `1500AD` and `19.090` (`22,07%` of `86,5k`) at `1600AD`.
5. **Arithmetic Benchmark Consistency**: Sub-regional estimates and interval bounds sum identically to `headline_population_by_benchmark` across all `23` horizons (`10000BC` to `1600AD`).

<figure class="crd-table-figure" id="tab:ne-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Maine Basins (Wabanaki)</strong></td><td class="crd-td">90.923</td><td class="crd-td">13,4k</td><td class="crd-td">21,2k</td><td class="crd-td">24,1k</td><td class="crd-td">23,5k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>2. Merrimack and Mass. Bay</strong></td><td class="crd-td">18.412</td><td class="crd-td">19k</td><td class="crd-td">31,5k</td><td class="crd-td">36,2k</td><td class="crd-td">35k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>3. Conn., Narragansett and South</strong></td><td class="crd-td">36.052</td><td class="crd-td">29,5k</td><td class="crd-td">49k</td><td class="crd-td">56,2k</td><td class="crd-td">55k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>HU 01 Total</strong></td><td class="crd-td">145.387</td><td class="crd-td">61,9k</td><td class="crd-td">101,7k</td><td class="crd-td">116,5k</td><td class="crd-td">113,5k</td><td class="crd-td">86,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional area and benchmark population estimates across New England (HU 01) from 0AD to 1600AD.</figcaption>
</figure>

# Results

## Post-Glacial Colonisation and Archaic Estuarine Growth

Following retreat of the Laurentide ice sheet and formation of the Gulf of Maine, Palaeoindian groups entered southern and central New England by `9000BC`, establishing caribou-intercept and lithic-quarry aggregations at `Bull Brook`, `Vail`, `Whipple`, `Neponset`, `Munsungun`, `Templeton`, `Bolton Spring` and `Wapanucket No. 8`.

Regional population climbed from `150` inhabitants (`137-168`) in `10000BC` to `800` in `9000BC`, `2.350` in `8000BC` and `14,3k` in `5000BC` as boreal spruce-fir forest yielded to mixed oak-hickory woodland and tidal shellfish flats [@snow1980; @bourque1995turner].

Between `3000BC` and `1000BC`, Late Archaic and Early Woodland communities expanded from `29,0k` (`26,7k-31,3k`) to `49,6k` (`45,6k-53,6k`). Intensive harvesting of anadromous salmon, shad, alewife and sea-run sturgeon along the Merrimack, Kennebec and Connecticut falls supported multi-century occupation at `Turner Farm`, `Wapanucket No. 8`, `Boylston Street Fishweir`, `Shattuck Farm`, `Titicut`, `Eddington Bend`, `Hirundo` and `Smyth` [@snow1980; @bourque1995turner].

By `0AD`, total HU 01 population reached `61,9k` (`56,9k-66,9k`; `0,426` persons/km²), advancing steadily through the Middle Woodland to `70,0k` in `200AD`, `86,2k` in `600AD`, `94,3k` in `800AD` and `101,7k` in `1000AD` (Figure \ref{fig:traj-new-england}). Unlike earlier steep coastal inflections during tidal stabilisation, Woodland growth proceeded at a steadier secular pace across both interior lakes and outer bays [@snow1980].

<figure class="crd-figure-block" id="fig:traj-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig2_new_england_trajectory.png" alt="fig:traj-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in New England (HU 01) with uncertainty interval, 10000BC to 1600AD.</figcaption>
</figure>

## Late Pre-Contact Plateau and Sixteenth-Century Contraction

Consistent with Kelly et al. [@kelly2025] HU 01 radiocarbon peak at `1410AD`, regional population rose from `106,6k` in `1100AD` to `110,8k` in `1200AD`, `114,1k` in `1300AD` and a Holocene peak of `116,5k` (`107,2k-125,8k`; `0,801` persons/km²) in `1400AD` (Table \ref{tab:ne-subregions} and Table \ref{tab:ne-benchmarks}).

Unlike interior Mississippian valleys that contracted sharply after `1300AD`, New England maintained a broad plateau across the fifteenth century, holding `113,5k` inhabitants in `1500AD`. Flexible mixed subsistence buffers in southern estuaries and northern river fisheries cushioned climatic oscillations during the early Little Ice Age [@bragdon1996; @snow1980].

Over the Holocene sequence, demographic weight shifted modestly toward southern estuarine and floodplain corridors (Figure \ref{fig:shares-new-england}). Maine's Wabanaki share eased from `24,48%` in `5000BC` and `21,65%` (`13,4k`) at `0AD` to `20,69%` (`24,1k`) at `1400AD`, whereas southern New England maintained `47,66%` to `48,55%` of all HU 01 inhabitants on `24,80%` of the land (`1,559` persons/km² in `1400AD`, nearly six times Maine's `0,265` persons/km²).

<figure class="crd-figure-block" id="fig:shares-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig3_new_england_shares.png" alt="fig:shares-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across New England (HU 01) from 10000BC to 1600AD.</figcaption>
</figure>

After `1500AD`, European cod fishing stations, Basque-Breton coastal visits and fur-trade exchanges transmitted Old World pathogens along maritime estuaries well before `1620AD` English settlement [@cook1976newengland; @jones2014; @ubelaker2006]. Basin population declined to `100,0k` (`92,0k-108,0k`) in `1550AD` and `86,5k` (`79,6k-93,4k`; `0,595` persons/km²) in `1600AD`, remaining concentrated around Narragansett Bay, the Thames-Connecticut valley and Massachusetts Bay just prior to the catastrophic `1616-1619AD` coastal epidemic [@bragdon1996; @milner2010].

## Estuarine-to-Upland Density Contrast and Settlement Morphology

Rank-size distribution across the `64` catalogued HU 01 sites exhibits moderate town primacy rather than a hyper-nucleated Mississippian mound hierarchy. Nucleated coastal and fall-line towns (`RI-1000`, `Mystic`, `Patuxet`, `Sowams`, `Shantok`, `Pawtucket`) rarely exceeded `1.000-1.850` permanent residents, reflecting dispersed village confederacies coupled with seasonal fishing and planting hamlets [@bragdon1996].

Consequently, the urbanised settlement fraction peaked late at `17,91%` (`20.325` of `113,5k`) in `1500AD` and `22,07%` (`19.090` of `86,5k`) in `1600AD`, leaving roughly four-fifths of inhabitants in smaller hamlets and seasonal camps mapped smoothly by the `sites_northern_america` rural density surface.

<figure class="crd-table-figure" id="tab:ne-top-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-region</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">RI-1000</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,8k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Mystic</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,6k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Patuxet</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,4k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Sowams</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,4k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Shantok</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,1k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Mashantucket</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1,1k</td><td class="crd-td">1600AD</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Pawtucket</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">1,1k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Pocumtuck</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">1k</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Montaup</td><td class="crd-td">Conn.-Narragansett</td><td class="crd-td">950</td><td class="crd-td">1500AD</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Pennacook</td><td class="crd-td">Merrimack-Mass. Bay</td><td class="crd-td">840</td><td class="crd-td">1500AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top ten catalogued settlements by peak population in New England (HU 01).</figcaption>
</figure>

## Sub-Regional Trajectories Across the Three Tiers

### Penobscot, Kennebec, St. John and Aroostook Maine

Covering `90.923 km²` (`62,54%` of HU 01), northern New England moved from negligible post-glacial density (`150` in `9000BC`, `550` in `8000BC`) to `3,5k` in `5000BC` and `13,4k` (`0,147` persons/km²) at `0AD`. Deeply stratified interior river camps at `Sharrow`, `Hirundo` and `Eddington Bend` chart steady freshwater fishery reliance throughout the Middle and Late Archaic [@snow1980].

Between `1000BC` and `1000AD`, ceramic vessels and long-distance copper and lithic exchanges spread through coastal and riverine Wabanaki territories without triggering sudden urbanisation. Interior rapids along the Kennebec, Penobscot and Androscoggin anchored seasonal canoe portages and winter hunting bases.

Maritime shell-midden networks at `Turner Farm` (`310` at `1200AD`), `Damariscotta Shell Midden` (`320` at `800AD`), `Goddard` (`340` at `1100AD`) and `Naskeag` (`260` at `1500AD`) coexisted with interior portage settlements at `Norridgewock` (`620` at `1500AD`), `Pentagoet` (`510`), `Cushnoc` (`490` at `1600AD`) and `Pequawket` (`480`).

Maine peaked at `24,1k` (`0,265` persons/km²) in `1400AD` and eased more gently after `1500AD` (`23,5k` to `18,5k` in `1600AD`, down `21,28%`) than southern coastal zones. Dispersed riverine Wabanaki bands experienced lower early crowding mortality prior to seventeenth-century epidemics [@bourque1995turner; @snow1980].

### Merrimack, Saco and Massachusetts-Plymouth Bay

Although the smallest territorial division (`18.412 km²`, `12,66%` of HU 01), the Merrimack-Massachusetts Bay corridor consistently achieved the highest average densities in New England. Population climbed from `50` in `10000BC` and `4,3k` in `5000BC` to `19,0k` (`1,032` persons/km²) at `0AD`, `31,5k` in `1000AD` and `36,2k` (`1,966` persons/km²) in `1400AD`.

Fall-line fisheries at `Pawtucket` (`1.100` at `1500AD`) and `Pennacook` (`840` at `1500AD`), coastal hubs at `Patuxet` (`1.450` at `1500AD`), interior Nipmuc centres (`Hassanamisco` `580`) and Great Bay estuarine settlements (`Squamscott` `460`) anchored late pre-contact density.

Following `1500AD` (`35,0k`), maritime disease exposure lowered the sub-region to `30,5k` (`1550AD`) and `26,0k` (`1,412` persons/km²) by `1600AD` [@cook1976newengland]. Dense bayshore aggregation magnified respiratory contagion once fishing fleets frequented Cape Cod and Boston Harbour.

### Connecticut, Housatonic and Narragansett Sound

Spanning `36.052 km²` (`24,80%` of HU 01), southern New England grew from `100` in `10000BC` and `6,5k` in `5000BC` to `29,5k` (`0,818` persons/km²) at `0AD`, `49,0k` in `1000AD` and a peak of `56,2k` (`1,559` persons/km²) in `1400AD`.

Productive maize-bean-squash floodplains and sheltered shellfish estuaries supported HU 01's largest towns: `RI-1000` (`1.850` at `1500AD`), `Mystic` (`1.550` at `1600AD`), `Sowams` (`1.400`), `Shantok` (`1.150`), `Mashantucket` (`1.100`), `Pocumtuck` (`1.050`), `Montaup` (`950`) and `Nonotuck` (`820`) [@bragdon1996].

Fortified palisades appeared increasingly around Long Island Sound and Narragansett Bay during the fifteenth and sixteenth centuries as coastal wampum craft and maize storage drew intensifying inter-group competition [@bragdon1996]. Following `1500AD` (`55,0k`), early coastal disease reduced numbers to `48,5k` in `1550AD` and `42,0k` (`1,165` persons/km²) in `1600AD`.

### Sixteenth-Century Maritime Contact and Regional Frontier Continuity

Early Atlantic exploration along the New England coast began well ahead of permanent settlement: Giovanni da Verrazzano anchored in Narragansett Bay in `1524AD`, Bartholomew Gosnold mapped Cape Cod and Cuttyhunk in `1602AD`, Samuel de Champlain charted the Maine and Massachusetts littoral in `1604AD` to `1606AD`, and English cod-fishing crews maintained seasonal drying stations from Monhegan to Plymouth [@bragdon1996; @starkey2011fisheries].

Those intermittent maritime contacts explain why HU 01 began sliding after `1500AD` (`113,5k` down to `86,5k` in `1600AD`) even before the devastating `1616-1619AD` epidemic recorded across Massachusetts Bay [@cook1976newengland; @jones2014]. Across surrounding borders, smooth `300 km` cross-frontier buffers link Wabanaki Maine continuously into the Maritimes and St. Lawrence corridors while aligning Housatonic and upper Connecticut densities with the Hudson-Mohawk margin of HU 02.

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
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">49,6k</td><td class="crd-td">45,6k</td><td class="crd-td">53,6k</td><td class="crd-td">0,341</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">61,9k</td><td class="crd-td">56,9k</td><td class="crd-td">66,9k</td><td class="crd-td">0,426</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">70k</td><td class="crd-td">64,4k</td><td class="crd-td">75,6k</td><td class="crd-td">0,481</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">86,2k</td><td class="crd-td">79,3k</td><td class="crd-td">93,1k</td><td class="crd-td">0,593</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">101,7k</td><td class="crd-td">93,6k</td><td class="crd-td">109,8k</td><td class="crd-td">0,7</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">110,8k</td><td class="crd-td">101,9k</td><td class="crd-td">119,7k</td><td class="crd-td">0,762</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">116,5k</td><td class="crd-td">107,2k</td><td class="crd-td">125,8k</td><td class="crd-td">0,801</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">113,5k</td><td class="crd-td">104,4k</td><td class="crd-td">122,6k</td><td class="crd-td">0,781</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">100k</td><td class="crd-td">92k</td><td class="crd-td">108k</td><td class="crd-td">0,688</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">86,5k</td><td class="crd-td">79,6k</td><td class="crd-td">93,4k</td><td class="crd-td">0,595</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Headline population trajectory, 8% uncertainty intervals and mean density across New England (HU 01), 10000BC to 1600AD.</figcaption>
</figure>

# Limitations

Four evidentiary constraints qualify the HU 01 reconstruction:

1. **Survey and Radiocarbon Clustering**: Terrestrial radiocarbon dates in `p3k14c` and state inventories (`N = 470` in HU 01) cluster disproportionately along coastal Maine shell middens and southern New England highway-CRM corridors, leaving interior northern boreal uplands comparatively under-sampled [@snow1980; @bourque1995turner].
2. **Marine Reservoir Exclusion and Sea-Level Loss**: Excluding marine shell dates eliminates variable $\Delta R$ reservoir distortion [@hadden2023shell], yet lowers sample counts along outer islands and coastal lagoons relative to inland river valleys. Post-glacial marine transgression across the Gulf of Maine further submerged early Holocene coastal camps below modern tidal charts.

3. **Northern Horticulture Resolution**: Sparse palaeobotanical macro-remains north of the Merrimack and Piscataqua basins restrict fine-grained separation between permanent riverbank farming hamlets and warm-season fishing stations before `1200AD` [@snow1980].

4. **Sixteenth-Century Contact Chronology**: Maritime epidemic mortality between `1500AD` and `1600AD` remains less precisely resolved than seventeenth-century town vital records because voyages prior to `1602AD` left fragmentary coastal narratives; `1550AD` and `1600AD` estimates therefore rely on archaeological site-frequency decay combined with back-projection from `1616-1620AD` baselines [@cook1976newengland; @snow1995microchronology; @jones2014].

# Conclusion

New England (HU 01) sustained steady Holocene demographic growth culminating in a late pre-contact plateau of `116,5k` inhabitants (`0,801` persons/km²) around `1400AD` (`1410AD` radiocarbon peak), nearly two centuries after interior Mississippian agricultural centres peaked.

Nearly half of the regional population resided across the warmer Connecticut, Housatonic and Narragansett estuaries, where coastal shellfish beds and floodplain maize horticulture supported densities approaching `1,56` persons/km². Northern Wabanaki river basins, by contrast, maintained lower-density maritime and interior foraging-gardening communities adapted to shorter growing seasons.

Integrating `64` catalogued settlements (Table \ref{tab:ne-top-sites}) with the `sites_northern_america` Matérn prior separates concentrated coastal villages from dispersed forested uplands while capturing sixteenth-century pre-plantation contraction (`23,79%` fall from `1500AD` to `86,5k` in `1600AD`).

Across northern, central and southern watersheds alike, the spatial weights respect observed archaeological recovery while damping survey artifacts along highway corridors and tidal islands.

This benchmark links directly into seventeenth-century Plymouth, Massachusetts Bay, Rhode Island, Connecticut and Acadian colonial enumerations at `1600AD`, establishing uninterrupted demographic continuity across the colonial transition [@ubelaker2006; @milner2010]. Future CRM inventories from interior Piscataquis and upper Connecticut tributaries can drop straight into `sites_northern_america` without modifying urban settlement totals.

# Sources

<div id="refs"></div>
