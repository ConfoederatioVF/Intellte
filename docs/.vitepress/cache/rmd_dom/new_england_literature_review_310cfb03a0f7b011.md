---
title: "New England Hydrological Unit (HU 01): Wabanaki Riverines, Coastal Shell-Middens and Southern Algonquian Towns"
subtitle: "CENTAUR-II: Contiguous New England Drainage Basin, 10000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: new_england_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_new_england_spatial.png"
hero_caption: "Areal mask and verified settlements across USGS Hydrological Unit 01 (145,39k km2) from 10000 BC to 1600 AD. Three sub-regions divide northern Wabanaki river basins from southern Algonquian coastal towns."
hero_label: "fig:hero-new-england"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Operation Viscount Project CENTAUR-II reconstructs the Holocene population of New England (USGS Hydrological Unit 01, 145.387 km² across 2.504 five-arcminute cells) from 10000 BC to 1600 AD across three sub-regions. Anchored to the radiocarbon summed probability distribution of Kelly et al. [@kelly2025] (HU 01 median peak at 1410 AD, N = 470, 540 cal BP) and non-stationary Matérn ($\nu = 3/2$) kriging over the North American `p3k14c` corpus [@bird2022p3k14c; @paciorek2006matern], total population rises from 150 inhabitants in 10000 BC to 61,9k at 0 AD and reaches a pre-contact plateau of 116,5k in 1400 AD (0,8 inhabitants/km²). Southern New England (Connecticut, Housatonic and Narragansett basins) accounts for 48,24% of the regional maximum (56,2k), ahead of Merrimack and Massachusetts Bay (36,2k) and the Wabanaki Maine rivers (24,1k). Following early sixteenth-century coastal contact and maritime trade epidemics, numbers contract by 25,75% from 113,5k in 1500 AD to 86,5k in 1600 AD [@cook1976newengland; @bragdon1996; @jones2014].

# Background

Historical demographic estimates for pre-colonial New England diverge widely according to whether analysts privilege seventeenth-century colonial accounts or regional archaeological site counts. Early twentieth-century syntheses placed the contact-era Algonquian population near 25k to 35k, whereas Cook [@cook1976newengland] raised southern New England totals above 70k through tribal territory extrapolations and Snow [@snow1980; @snow1995microchronology] proposed carrying-capacity and village-footprint models ranging between 90k and 120k for the wider region. Continental grids such as McEvedy and Jones [@mcevedy1978] and HYDE 3.2 [@kleingoldewijk2017] treated New England as an undifferentiated Eastern Woodlands zone, obscuring the sharp ecological gradient between boreal Maine and the maize-horticultural estuaries of Long Island Sound.

Two structural problems complicate direct inference from archaeological material in HU 01. First, acidic podzolic soils in the upland interior destroy uncalcined bone and botanical remains, favouring shell-midden preservation along the Gulf of Maine and Narragansett Bay [@bourque1995turner]. Second, coastal shell dates carry variable marine reservoir offsets that distort radiocarbon chronologies if left uncorrected [@hadden2023shell]. Kelly et al. [@kelly2025] excluded shell dates and applied 500-iteration smoothing across 470 terrestrial dates in HU 01, placing the regional peak at 540 cal BP (1410 AD, interquartile range 499 to 602 cal BP). Unlike interior Mississippian basins that declined after 1150 to 1300 AD, New England maintained a late pre-contact plateau until coastal epidemics and sixteenth-century European fishing voyages initiated demographic contraction after 1500 AD [@jones2014; @milner2010].

# Methodology

## Sub-Regional Partition and Areal Masks

CENTAUR-II partitions HU 01 on the shared 4320x2160 WGS84 grid (2.504 active cells, 145.387 km²) into three ecologically coherent sub-regions derived from drainage basins and ethnohistoric territorial boundaries. The northern tier (`ne_maine_penobscot_kennebec`) spans 90.923 km² (1.594 pixels, 62,54% of regional land) across the Penobscot, Kennebec, St. John and Aroostook basins inhabited by Eastern Wabanaki groups [@bourque1995turner]. The central tier (`ne_merrimack_massachusetts_bay`) covers 18.412 km² (320 pixels) along the Merrimack, Saco and Massachusetts-Plymouth littoral. The southern tier (`ne_connecticut_narragansett_south`) covers 36.052 km² (590 pixels) across the Connecticut and Housatonic valleys, Narragansett Bay and Cape Cod, where frost-free growing seasons supported dense maize-bean-squash horticulture [@bragdon1996; @cook1976newengland].

## Radiocarbon Kriging and Benchmark Calibration

Rural habitation weights come from `sites_p3k14c_na` (1.359 domestic Voronoi catchments across North America plus 171 cross-frontier buffer catchments, 21.196 site-horizon observations across 10 Holocene horizons from 10000 BC to 1600 AD) [@bird2022p3k14c]. Site densities per catchment are stabilised by Freeman-Tukey transformation, shrunk via Empirical Bayes priors to damp modern salvage excavation spikes and interpolated using a non-stationary Matérn ($\nu = 3/2$) kernel scaled by local Voronoi radii [@paciorek2006matern]. Urban settlement populations from the eight verified gazetteer entries (`new_england_settlements.json`) are subtracted prior to residual dasymetric allocation, ensuring rural grid densities match sub-regional benchmark targets (`new_england.json5`) with +/-8% uncertainty bounds across 23 chronological slices from 10000 BC to 1600 AD.

# Testing and Validation

All pre-publication validation gates passed at 0 errors prior to manuscript compilation at GMT+0:

1. **Radiocarbon Sample Threshold**: HU 01 draws on N = 470 terrestrial radiocarbon dates (excluding shell dates per Hadden et al. [@hadden2023shell]), exceeding the 400-date reliability minimum (0,2 dates per century over 2.000 years) established by Kelly et al. [@kelly2025] and Crema and Bevan [@crema2021rcarbon].
2. **Kriging Sharpness**: The continental `sites_p3k14c_na` model records dimensionless scale parameter `tau1 = 1,25` (threshold `<= 1,80`), nugget-to-sill ratios between `0,04` and `0,22` (threshold `< 0,45`) and variogram pseudo-$R^2$ from `0,9733` to `0,9992` across all 10 horizons.
3. **Gazetteer Exhaustiveness**: Validation of `new_england_settlements.json` against `new_england_source_ledger.json5` yields 0 coordinate errors, 0 corrupt toponyms and 0 unaccounted ledger candidates across 8 included settlements and 3 excluded seasonal or unlocated entries.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Maine Basins (Wabanaki)</strong></td><td class="crd-td">90.923</td><td class="crd-td">13,4k</td><td class="crd-td">21,2k</td><td class="crd-td">24,1k</td><td class="crd-td">23,5k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>2. Merrimack and Mass. Bay</strong></td><td class="crd-td">18.412</td><td class="crd-td">19k</td><td class="crd-td">31,5k</td><td class="crd-td">36,2k</td><td class="crd-td">35k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>3. Conn., Narragansett and South</strong></td><td class="crd-td">36.052</td><td class="crd-td">29,5k</td><td class="crd-td">49k</td><td class="crd-td">56,2k</td><td class="crd-td">55k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>HU 01 Total</strong></td><td class="crd-td">145.387</td><td class="crd-td">61,9k</td><td class="crd-td">101,7k</td><td class="crd-td">116,5k</td><td class="crd-td">113,5k</td><td class="crd-td">86,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and benchmark population estimates across New England (HU 01) from 0 AD to 1600 AD.</figcaption>
</figure>

# Results

## Holocene Expansion and Coastal Divergence

Following deglaciation of the Gulf of Maine and interior uplands, human occupation rose from 150 inhabitants in 10000 BC to 2.350 in 8000 BC and 14,3k in 5000 BC as boreal spruce-fir woodland gave way to mixed oak-hardwood forest and productive estuarine shellfish beds [@snow1980; @bourque1995turner]. Between 3000 BC and 1000 BC, Late Archaic and Early Woodland communities expanded from 29k to 49,6k, supported by anadromous salmon, alewife and shad fisheries along the Merrimack, Kennebec and Connecticut rivers [@snow1980]. By 0 AD, total HU 01 population reached 61,9k (0,43 inhabitants/km²), rising steadily through the Woodland period to 86,2k in 600 AD and 101,7k in 1000 AD.

<figure class="crd-figure-block" id="fig:traj-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig2_new_england_trajectory.png" alt="fig:traj-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory in New England (HU 01) with uncertainty bounds, 10000 BC to 1600 AD.</figcaption>
</figure>

## Late Pre-Contact Plateau and Sixteenth-Century Contraction

Consistent with the Kelly et al. [@kelly2025] HU 01 peak at 1410 AD, regional population climbed from 106,6k in 1100 AD to 114,1k in 1300 AD and peaked at 116,5k in 1400 AD (Table 1 and Figure 2). Unlike southern and mid-continental basins where nucleated agricultural towns fractured before 1350 AD, New England experienced minimal pre-contact contraction, holding 113,5k inhabitants in 1500 AD. Across the entire Holocene sequence, demographic weight shifted southward: the Maine Wabanaki sub-region fell from 21,65% of regional population at 0 AD (13,4k) to 20,69% in 1400 AD (24,1k), whereas southern New England maintained 47,66% to 48,55% of all inhabitants on 24,8% of the land area (1,56 inhabitants/km² in 1400 AD vs 0,27 inhabitants/km² in Maine).

<figure class="crd-figure-block" id="fig:shares-new-england">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-new-england/fig3_new_england_shares.png" alt="fig:shares-new-england" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition across New England (HU 01) from 10000 BC to 1600 AD.</figcaption>
</figure>

After 1500 AD, European cod fisheries, Basque-Breton coastal contacts and early fur-trade networks introduced Old World pathogens prior to permanent English settlement in 1620 AD [@cook1976newengland; @jones2014; @ubelaker2006]. Regional totals declined to 100k in 1550 AD and 86,5k in 1600 AD (0,6 inhabitants/km²), concentrated heavily in the Massachusetts Bay (26k) and Narragansett-Connecticut (42k) corridors just before the 1616-1619 AD coastal epidemic [@bragdon1996; @milner2010].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Lower Bound</th><th class="crd-th">Upper Bound</th><th class="crd-th">Density (per km2)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">150</td><td class="crd-td">137</td><td class="crd-td">168</td><td class="crd-td">0,001</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">9k</td><td class="crd-td">8,3k</td><td class="crd-td">9,7k</td><td class="crd-td">0,062</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">29k</td><td class="crd-td">26,7k</td><td class="crd-td">31,3k</td><td class="crd-td">0,199</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">49,6k</td><td class="crd-td">45,6k</td><td class="crd-td">53,6k</td><td class="crd-td">0,341</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">61,9k</td><td class="crd-td">56,9k</td><td class="crd-td">66,9k</td><td class="crd-td">0,426</td></tr>
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
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Headline population trajectory, 92 pct uncertainty intervals and mean density across New England (HU 01).</figcaption>
</figure>

# Limitations

Three evidentiary constraints qualify these reconstructions. First, `p3k14c` site counts in HU 01 (N = 470) are heavily weighted toward coastal Maine shell-middens and Connecticut-Merrimack CRM excavations, leaving northern interior spruce forests under-sampled [@snow1980; @bourque1995turner]. Second, excluding marine shell dates eliminates reservoir uncertainty [@hadden2023shell] but reduces coastal sample density relative to inland river valleys. Third, pre-1600 AD epidemic mortality timing remains imprecise because documentary observations before 1602 AD are sparse, and the 1500 to 1600 AD contraction rate relies on archaeological site-frequency decay combined with back-projection from 1616-1620 AD colonial censuses [@cook1976newengland; @snow1995microchronology].

# Sources

<div id="refs"></div>
