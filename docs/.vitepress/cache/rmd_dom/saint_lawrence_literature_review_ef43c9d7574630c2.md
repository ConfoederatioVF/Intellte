---
title: "Pre-Columbian Saint Lawrence Basin and Huronia: Maize Agriculture, Palisaded Towns and Algonquian Networks"
subtitle: "CENTAUR-II: Ontario Peninsula, Ottawa Valley and St. Lawrence Lowlands, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: saint_lawrence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_saint_lawrence_spatial.png"
hero_caption: "Four ecological divisions and 172 catalogued settlements across the Saint Lawrence Basin and Huronia (814,8k km²) from 10000BC to 1600AD."
hero_label: "fig:hero-saint-lawrence"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Saint Lawrence Basin and Huronia (814,8k km², comprising 15.137 terrestrial 5-arcminute pixels) carried the densest pre-contact agricultural populations in northern North America, anchored by Iroquoian maize-beans-squash towns along Lake Ontario, Georgian Bay and the St. Lawrence Lowlands [@trigger1976; @warrick2008; @masur2023cultivating]. Reconstructed across four ecological divisions under CENTAUR-II, regional numbers climb from zero in 10000BC as Champlain Sea waters drain to 250 in 9000BC, 13,7k in 5000BC and 48,1k at 0AD, then accelerate with Late Woodland horticulture from 76,5k in 1000AD to a pre-contact peak of 92k in 1500AD (11,29 persons per 100 km²).

By 1500AD, Huronia, the Simcoe Uplands and the Ontario Peninsula account for 56,5% of regional inhabitants (52k, or 22,42 persons per 100 km²), while the St. Lawrence Lowlands hold 20,1% (18,5k, or 19,86 per 100 km²). Over the following century, inter-confederacy warfare, climatic cooling and early European contact diseases scatter the St. Lawrence Iroquoians: lowland numbers drop from 18,5k in 1500AD to 15,5k in 1550AD and 6,5k in 1600AD (-64,9%), pulling the regional total down 18,59% to 74,9k prior to permanent French settlement at Quebec [@pendergast1993; @chapdelaine2004; @lozier2012each]. Spatial allocation draws on the continental North American non-stationary Matérn ($\nu = 3/2$) kriging surface calibrated across 93.129 unique site-periods across 3.833 domestic catchments (2.570 active, 67,05% coverage, 14,24x baseline, regularised $\tau_1 = 1,35$, mean short range 47 km, regularised nugget-to-sill 0,04) integrated with 172 catalogued towns and fisheries from 351 ledger candidates [@bird2022p3k14c; @kelly2025].

# Background

## Ecological Zonation and Post-Glacial Hydrography

Previous continental reconstructions smoothed over the abrupt ecological boundary separating palisaded Iroquoian towns on the southern Ontario limestone plains and Montreal-Quebec river terraces from Algonquian Shield-forest hunting and fishing territories to the north [@heidenreich1971; @warrick2008; @munoz2010prehistoric]. Between the Niagara escarpment and the Gulf of St. Lawrence, mean frost-free growing seasons drop by more than 50 days across a single bedrock step onto the Precambrian Shield. North of that line, thin podzolic soils and short summers restricted maize agriculture to sheltered pocket terraces along the Ottawa River, forcing populations to rely on anadromous fisheries, wild rice, moose and beaver [@wright1995; @clermont1999].

Glacial recession after 12000BC dictated the timing and geography of human entry across the entire watershed. While early ice lobes lingered over the Saguenay plateau and Laurentian scarp, proglacial Lake Algonquin occupied the upper Great Lakes basin and Lake Iroquois filled the Lake Ontario trough, while Atlantic seawater submerged the central St. Lawrence and lower Ottawa valleys to form the Champlain Sea [@wright1995; @munoz2010prehistoric]. As crustal rebound expelled marine waters between 9500BC and 8000BC, successive abandoned beach ridges, deltaic sands and emerging river terraces created well-drained migratory corridors for caribou herds and Palaeoindian bands.

CENTAUR-II partitions the 814.804 km² basin into four watershed and cultural divisions designed to capture both the agricultural heartland and its subarctic trade periphery (Table \ref{tab:subregions}). Huronia, the Simcoe Uplands and the Ontario Peninsula (231.974 km², 28,5% of total area, 4.411 cells) encompass the fertile grey-brown luvisol plains bordering Lakes Huron, Erie and Ontario, stretching north-westward along the Georgian Bay littoral to the St. Marys River rapids at Bawating [@trigger1976; @warrick2008; @dorland2019childhood]. During the late pre-contact centuries, this division housed the Wendat (Huron), Tionontati (Petun) and Attawandaron (Neutral) confederacies, along with western Lake Erie and Algonquian border groups [@birch2012; @masur2023cultivating].

## Ethnohistoric Confederacies and Pre-Contact Trade

North of the Oak Ridges Moraine and east of Georgian Bay, the Ottawa-Rideau Valley and Algonquin Shield (141.195 km², 17,3% of area, 2.482 cells) unite the Canadian Shield lakes with the upper St. Lawrence granite corridor above Montreal. This zone served as the canoe highway linking Lake Huron to the St. Lawrence estuary for Algonquin and Nipissing bands, who traded southern Ontario maize and tobacco northward for moose hides, birchbark canoes and Lake Superior copper [@clermont1999; @bebber2022refining]. Its southern limestone fringe along the Rideau, Nation and upper St. Lawrence rivers also supported dense fifteenth-century St. Lawrence Iroquoian clusters around Roebuck and McKeown [@pendergast1993; @symchych2010craniofacial].

Downstream, the St. Lawrence Lowlands from Montreal to Quebec (93.129 km², 11,4% of area, 1.636 cells) trace the marine clay and alluvial sand terraces deposited by the post-glacial Champlain Sea [@chapdelaine2004]. Sheltered by the Laurentians on the north and the Appalachians on the south, this narrow corridor hosted the Hochelagan and Stadaconan Iroquoian polities visited by Jacques Cartier in 1534AD and 1535AD, together with rich Richelieu and Lac Saint-Pierre fishing stations [@pendergast1993; @bouchardperron2017historical].

Beyond the Laurentian scarp and the Charlevoix narrows, Saguenay-Lac-Saint-Jean, Cote-Nord and the Gaspe Peninsula (348.506 km², 42,8% of area, 6.608 cells) form the largest and sparsest division. Dominated by spruce-fir boreal forest, fjord estuaries and cold Gulf currents, this territory supported Innu (Montagnais) caribou hunters and salmon-eels fishers from Lac Saint-Jean to Tadoussac alongside Gespe'gewa'gi Mi'kmaq coastal bands along the Gaspe shore [@wright1995; @lozier2012each]. Seasonal seal hunting in the Gulf estuary and summer copper-furs rendezvous at the Saguenay mouth tied this eastern rim into continental exchange networks long before European fishing fleets reached Newfoundland and Acadia.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Huronia, Simcoe Uplands and Ontario Peninsula (Wendat, Tionontati and Neutral)</strong></td><td class="crd-td">231.974 (28,5%)</td><td class="crd-td">5k</td><td class="crd-td">19,5k</td><td class="crd-td">39k</td><td class="crd-td">52k</td><td class="crd-td">49k</td><td class="crd-td">22,42</td></tr>
<tr><td class="crd-td"><strong>2. Ottawa-Rideau Valley and Algonquin Shield (Algonquin and Nipissing)</strong></td><td class="crd-td">141.195 (17,3%)</td><td class="crd-td">2,7k</td><td class="crd-td">8,1k</td><td class="crd-td">10,1k</td><td class="crd-td">10,5k</td><td class="crd-td">9,8k</td><td class="crd-td">7,44</td></tr>
<tr><td class="crd-td"><strong>3. St. Lawrence Lowlands: Hochelaga to Stadacona (St. Lawrence Iroquoians)</strong></td><td class="crd-td">93.129 (11,4%)</td><td class="crd-td">3,4k</td><td class="crd-td">12,2k</td><td class="crd-td">17k</td><td class="crd-td">18,5k</td><td class="crd-td">6,5k</td><td class="crd-td">19,86</td></tr>
<tr><td class="crd-td"><strong>4. Saguenay-Lac-Saint-Jean, Cote-Nord and Gaspe Peninsula (Innu and Gespe'gewa'gi Mi'kmaq)</strong></td><td class="crd-td">348.506 (42,8%)</td><td class="crd-td">2,6k</td><td class="crd-td">8,3k</td><td class="crd-td">10,4k</td><td class="crd-td">11k</td><td class="crd-td">9,6k</td><td class="crd-td">3,16</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">814.804 (100%)</td><td class="crd-td">13,7k</td><td class="crd-td">48,1k</td><td class="crd-td">76,5k</td><td class="crd-td">92k</td><td class="crd-td">74,9k</td><td class="crd-td">11,29</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500AD density (persons per 100 km²) across the Saint Lawrence Basin.</figcaption>
</figure>

# Methodology

## Sub-Regional Demographic Reconstruction

Long-run population totals across the 23 benchmark intervals from 10000BC to 1600AD are built from regional archaeological carrying-capacity syntheses rather than backward projection of European colonial censuses. For Huronia, the Ontario Peninsula and adjacent Simcoe County, Late Woodland village footprints, hearth counts, house floor areas and ossuary demography provide tight population bounds between 500AD and 1600AD [@warrick2008; @heidenreich1971; @forrest2011iroquoian]. Early Holocene and Archaic levels back to 9000BC scale sub-regional foraging carrying capacities using summed probability distributions of calibrated radiocarbon assays anchored to Kelly et al. [@kelly2025] and regional palaeovegetation cores [@munoz2010prehistoric; @wright1995].

For the Ottawa Valley, St. Lawrence Lowlands and Saguenay-Gaspe divisions, pre-contact benchmarks integrate Archaic copper-workshop and seal-hunting records with Late Woodland village excavations and early sixteenth-century French eyewitness tallies at Stadacona and Hochelaga [@clermont1999; @pendergast1993; @chapdelaine2004]. Each benchmark carries an explicit symmetric structural uncertainty interval of plus or minus 8% around the central estimate, except at 10000BC when deglaciation and marine submergence held sub-regional inhabitants near zero [@ubelaker2006; @wright1995].

## Multi-Registry Spatial Disaggregation

Gridded rural population densities across all 15.137 land pixels of the Saint Lawrence Basin derive from the continental North American non-stationary Matérn ($\nu = 3/2$) residual kriging framework covering 18,56M km² (18.561.382 km², 493.687 valid terrestrial 5-arcminute cells with 78.938 to 149.138 active inhabited non-wasteland cells across horizons). Rather than relying on a single radiocarbon compilation, the continental composite synthesises global p3k14c [@bird2022p3k14c] and c14bazAAR distributions with United States state site files, Canadian archaeological inventories, regional monument databases and CENTAUR gazetteer records.

After spatial-chronological deduplication by catchment and 200-year chronological bin, the North American composite contains 93.129 unique site-periods (286.193 horizon site records) across 3.833 domestic Voronoi catchments (15,52M km²; 2.570 active inhabited catchments, 67,05% coverage; equivalent circular median radius 29,48 km and 90th percentile 40,95 km overall, or 29,3 km and 39,85 km across active catchments), delivering an effective sampling density 14,24x above the 6.539 legacy baseline inside the continental perimeter. An additional 251 cross-frontier buffer catchments extending up to 300 km beyond the study boundary anchor edge densities smoothly along Lakes Huron, Erie and Ontario as well as across the Adirondack, Vermont and Maine watershed divides shared with the Great Lakes (HU 04) and New England (HU 01) modules [@kelly2025; @hart2016nation].

Within each of the ten Holocene horizons (spanning 13000BC to 1650AD), weighted least squares residual kriging couples catchment site density with five biophysical covariates: terrain habitability, natural agro-ecological suitability, vegetation-ecozone productivity, 13,5 km exponential fluvial proximity and coastal access. On the Saint Lawrence grid, fluvial and lacustrine covariates receive elevated weight along the Trent-Severn, Ottawa, Richelieu and Saguenay waterways, ensuring that non-urban population tracks navigable shorelines rather than modern highway corridors.

## Settlement Subtraction and Seam Blending

To prevent double counting between nucleated villages and dispersed rural cells, the reconstruction subtracts the time-varying populations of 172 catalogued towns, palisaded capitals and seasonal fishery aggregations from each sub-regional benchmark prior to scaling the residual kriging surface inside the regional mask. Where multiple short-lived villages succeeded one another within the same pixel cluster, trajectories reflect contemporaneous rather than cumulative occupancy [@warrick2008; @birch2012]. Two separable 4-pixel smoothing passes then feather inter-module borders shared with Hudson Bay, the Maritimes, the Great Lakes and New England while conserving exact sub-regional sums.

# Testing and Validation

All structural, variogram and ledger audits pass with zero errors as of 17 November 2026 GMT+0:

1. **Kriging Sharpness and Fit**: Across all ten Holocene horizons of the North American kriging domain, regularised dimensionless short-range correlation stands at $\tau_1 = 1,35$ across all ten horizons (raw 1,519 to 1,6098, mean 1,5782; effective short range 45,23 km to 47,94 km, mean 47 km) and long-range scale equals $\tau_2 = 2,9025$ (2,9). Unregularised variogram nugget-to-sill ratio equals 0 across all ten horizons, regularised to 0,04 (0,0417, well below 0,45) on all ten horizons, while WLS residual $R^2$ ranges from 0,999 to 0,9992 (Table \ref{tab:horizons}).
2. **Gazetteer and Ledger Reconciliation**: Cross-checking the regional settlement gazetteer against the source ledger accounts for 351 total candidates, comprising 172 included settlements (465 chronological observations) and 179 excluded duplicate-alias entries consolidated within 2 km of canonical sites (including duplicates of Bawating, Tadoussac, Pointe-du-Buisson, Hochelaga and Stadacona), with zero unaccounted candidates and zero coordinate or schema errors.
3. **Chronological and Radiocarbon Alignment**: Late Woodland acceleration between 1000AD and 1500AD aligns with Bayesian radiocarbon models for Iroquoian village coalescence and North American copper exchange [@manning2019radiocarbon; @bebber2022refining; @hart2022monongahela], while the 1550-1600AD lowland contraction matches ethnohistoric disappearance between Cartier and Champlain [@pendergast1993; @chapdelaine2004].
4. **Seam Continuity**: Multi-pass border feathering across Hudson Bay, the Maritimes, the Great Lakes (HU 04) and New England (HU 01) eliminates artificial political steps across the 45th parallel and St. Marys River corridor.

<figure class="crd-table-figure" id="tab:horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Analytical Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeoindian and Early Archaic (13000-6000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">45,23</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>2. Middle Archaic (6000-3000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,94</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>3. Late Archaic (3000-1000BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,14</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>4. Early Woodland and Formative (1000-200BC)</strong></td><td class="crd-td">1,35</td><td class="crd-td">46,83</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>5. Middle Woodland Hopewell (200BC-400AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,46</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>6. Late Woodland and Dorset (400-800AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,27</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>7. Early Mississippian and Pueblo II (800-1100AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">46,59</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>8. Middle Mississippian and Pueblo III (1100-1300AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,2</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>9. Late Pre-Contact, Oneota and Thule (1300-1500AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,12</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>10. Protohistoric Contact Horizon (1500-1650AD)</strong></td><td class="crd-td">1,35</td><td class="crd-td">47,2</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Variogram calibration across the ten Holocene horizons of the North American kriging surface.</figcaption>
</figure>

# Results

## Early Post-Glacial Colonisation and Archaic River Networks (10000BC to 1000BC)

At 10000BC, retreating Laurentide ice still dammed the upper St. Lawrence trough while marine waters of the Champlain Sea flooded the Montreal and Ottawa lowlands as far west as Renfrew County [@wright1995]. Only the highest moraines and lake-beach ridges of southern Ontario stood dry, leaving regional human numbers indistinguishable from zero across all four divisions. As the Champlain Sea drained after 9500BC and spruce-pine parkland spread north across the glacial lakebeds of Algonquin and Iroquois, Gainey and Barnes Palaeoindian caribou hunters settled southern Ontario beach ridges at Fisher (85), Parkhill (80), Thedford II (65), Udora (60) and Crowfield (55), alongside early interior camps at Mégantic (65) in southern Quebec [@wright1995; @munoz2010prehistoric]. Regional population reached 250 by 9000BC and expanded to 1,4k by 8000BC as bands moved up the Ottawa and Saguenay valleys.

Through the Early and Middle Holocene (8000BC to 3000BC), rising summer temperatures replaced boreal spruce with oak, beech, white pine and sugar maple across the southern lowlands, raising terrestrial biomass and freshwater fish yields [@munoz2010prehistoric]. Population grew from 4,1k in 7000BC to 8,4k in 6000BC and 13,7k in 5000BC, reaching 19,8k by 4000BC. During the Laurentian Archaic, cold-hammered Lake Superior copper circulated eastward along the Ottawa River in exchange for marine shell and chert, anchored at the multi-millennium sacred workshop of Allumette Island (160 inhabitants by 3000BC, growing to 580 by 1600AD) [@clermont1999; @bebber2022refining]. By 3000BC total population stood at 26,5k, rising further to 33,3k in 2000BC and 40,3k in 1000BC as Early Woodland Meadowood blade networks and early Hochelaga terrace occupations (starting at 1000BC) linked Lake Erie to the St. Lawrence estuary [@wright1995; @pendergast1993].

## Woodland Ceramics and Maize Intensification (0AD to 1500AD)

By 0AD, regional numbers reached 48,1k, divided between 19,5k in Huronia and the Ontario Peninsula (40,5%), 12,2k in the St. Lawrence Lowlands (25,4%), 8,3k along the Saguenay and Gaspe (17,3%) and 8,1k in the Ottawa-Rideau Shield (16,8%). Point Peninsula and Saugeen fishing stations proliferated at river mouths and rapids, including the Sault Ste. Marie whitefish fishery at Bawating (220 in 0AD, rising to 1,1k by 1600AD) and the Tadoussac confluence (160 in 0AD, rising to 620 in 1500AD) [@wright1995; @clermont1999]. Between 0AD and 800AD, overall growth remained steady at roughly 4,5% to 10% per two-century interval, lifting totals to 52,6k in 200AD, 57,5k in 400AD, 63,3k in 600AD and 70,1k in 800AD.

After 500AD, and decisively after 900AD, tropical maize (*Zea mays*), common bean (*Phaseolus vulgaris*) and squash (*Cucurbita pepo*) transformed settlement density south of the Precambrian Shield [@warrick2008; @masur2023cultivating]. Early Princess Point and Owasco river-flat hamlets gave way after 1000AD (76,5k regional total) to Middle Ontario Iroquoian longhouse villages across the Thames, Grand, Humber and Duffins Creek watersheds [@dorland2019childhood; @birch2012]. Population climbed steadily to 80,15k in 1100AD, 83,8k in 1200AD, 87,35k in 1300AD and 90,3k in 1400AD as agricultural clearing expanded along sandy loam moraines.

During the fifteenth century, village coalescence concentrated rural hamlets into large palisaded towns built along defensive stream bluffs [@finlayson1985; @birch2012; @hart2016nation]. On the Duffins Creek drainage east of Toronto, Draper (1,95k) and Spang (880) reached full scale before consolidating into Mantle (1,8k in 1500-1550AD), while Keffer (1,05k), Seed-Barker (1,15k), Parsons (940) and Mackenzie-Woodbridge (820) ringed the Humber and Don valleys [@finlayson1985; @birch2012]. Further west, Lawson (1,45k) and Southwold Earthworks (890) fortified the Thames and Lake Erie plain, while in the upper St. Lawrence and Rideau-Nation valleys, Roebuck (1,45k), McKeown (1,15k), Salem (980), Beckstead (880) and Glenbrook (840) stood behind multi-row timber palisades [@pendergast1993; @symchych2010craniofacial]. Across the Montreal-Quebec river plain, Hochelaga (2,6k), Stadacona (1,8k), Droulers-Tsiionhiakwatha (950), Mandeville (820), Lanoraie (780) and Berry (680) anchored agricultural towns along fertile river islands and terraces [@chapdelaine2004].

By 1500AD, the Saint Lawrence Basin reached its pre-contact zenith of 92k inhabitants (95% structural band 84,64k to 99,36k, Table \ref{tab:master}). Huronia, the Simcoe Uplands and the Ontario Peninsula held 52k (56,5% at 22,42 per 100 km²), followed by the St. Lawrence Lowlands with 18,5k (20,1% at 19,86 per 100 km²), Saguenay-Gaspe with 11k (12% at 3,16 per 100 km²) and the Ottawa-Rideau Shield with 10,5k (11,4% at 7,44 per 100 km²) (Figures \ref{fig:traj} and \ref{fig:shares}).

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-saint-lawrence/fig2_saint_lawrence_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Saint Lawrence Basin and Huronia from 10000BC to 1600AD showing the 1500AD peak (92k) and late sixteenth-century St. Lawrence Iroquoian contraction.</figcaption>
</figure>

## Sixteenth-Century Consolidation and St. Lawrence Dispersal (1500AD to 1600AD)

Between Jacques Cartier's 1534-1541AD voyages to Stadacona and Hochelaga and Samuel de Champlain's 1603-1615AD surveys, the political geography of the lower river changed utterly [@pendergast1993; @chapdelaine2004]. Little Ice Age cooling shortened frost-free maize seasons along the northern margin below Quebec, while intensifying raids over European iron and copper trade goods and early epidemic pulses disrupted lowland towns [@manning2019radiocarbon; @forrest2011iroquoian]. By 1580AD, St. Lawrence Iroquoian villages between Lake Ontario and Quebec City had dispersed, with survivors absorbed into Wendat, Haudenosaunee and Algonquian confederacies [@trigger1976; @pendergast1993]. As a result, St. Lawrence Lowlands population fell from 18,5k in 1500AD to 15,5k in 1550AD and 6,5k in 1600AD, a -64,9% collapse that dropped the regional total from 92k to 87,9k in 1550AD and 74,9k in 1600AD (-18,59%).

Conversely, northward migration from the Lake Ontario shore and the Trent Valley concentrated the four Wendat nations inside Simcoe County, immediately north of Lake Simcoe and south of Georgian Bay [@heidenreich1971; @trigger1976; @warrick2008]. Between 1550AD and 1600AD, Arendarhonon and Attignawantan capitals expanded to extraordinary size: Warminster (Cahiagué) reached 3,5k inhabitants, Ossossané (1,8k), Ball (1,45k), Molson (1,1k), Benson (1,05k), Sopher (980), Kirche (950), Coulter (920) and Robitaille (920), flanked westward by Petun towns such as MacMurchy (950) and Sidey-Mackay (890). South of the Niagara escarpment, the Neutral confederacy maintained equally dense capitals along the Grand River and Spencer Creek, led by Walker (1,95k), Hamilton (1,5k), Hood (1,35k), Christianson (1,2k) and Cleveland (960) [@warrick2008; @birch2012].

Despite slight contraction across the Ottawa Valley (10,5k to 9,8k) and Saguenay-Gaspe (11k to 9,6k) as Tadoussac emerged as a summer Basque and French fur-trading entrepôt (550 residents in 1600AD), Huronia and the Ontario Peninsula remained at 49k in 1600AD (65,4% of module inhabitants) [@lozier2012each; @beek2024trace]. Within the 172 catalogued settlements, 87 sites lie in Huronia and the Ontario Peninsula (peak sum 63.580), 29 in the St. Lawrence Lowlands (18.315), 27 in the Ottawa-Rideau Shield (13.710) and 29 in Saguenay-Gaspe (14.750, Table \ref{tab:subreg-sites}). Only after 1634AD, well past the 1600AD domain boundary, did Jesuit-period smallpox epidemics halve Wendat and Neutral numbers [@warrick2008; @forrest2011iroquoian].

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-saint-lawrence/fig3_saint_lawrence_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across the Saint Lawrence Basin from 9000BC to 1600AD.</figcaption>
</figure>

## Longhouse Architecture, Maize Yields and Settlement Coalescence

Archaeological demography in the Saint Lawrence Basin rests primarily on excavated settlement morphology rather than speculative tributary ratios [@heidenreich1971; @warrick2008]. Across Huronia and the northern shore of Lake Ontario, Iroquoian longhouses typically measured 7 metres wide and 20 to 70 metres long, with central hearth rows spaced roughly every 5 to 6 metres; each hearth served two extended matrilineal families, yielding a robust conversion of roughly 10 to 12 inhabitants per hearth or 1,5 to 2 square metres of roofed living floor per person [@warrick2008; @finlayson1985].

Before 1350AD, most Ontario villages covered under 1,5 hectares and held 200 to 500 residents without heavy fortifications. Between 1400AD and 1550AD, however, regional warfare and ceramic exchange networks fused dispersed hamlets into palisaded capitals spanning 2,5 to 4,5 hectares [@birch2012; @hart2016nation]. At Draper (1,95k) and Mantle (1,8k) along Duffins Creek, defensive triple-row palisades enclosed dozens of tightly packed longhouses built in successive expansion phases [@finlayson1985; @birch2012].

Osteological studies from Simcoe County ossuaries and the Roebuck skeletal series confirm both the energetic gains and biological costs of maize-focused sedentism [@forrest2011iroquoian; @symchych2010craniofacial]. Stable isotope analyses and charred botanical assemblages from Ontario and Quebec City confirm high dietary reliance on *Zea mays*, supplemented by wild nuts, whitefish, passenger pigeon and white-tailed deer [@masur2023cultivating; @bouchardperron2017historical]. At the same time, elevated juvenile stress indicators and infant mortality around crowded fourteenth- and fifteenth-century villages tempered natural increase to moderate rates of roughly 0,04% to 0,1% per annum [@warrick2008; @forrest2011iroquoian].

## Sub-Regional Density Gradients and Carrying-Capacity Divergence

Comparing population densities per 100 km² across the four divisions highlights the structural divergence created by Holocene climate and agricultural intensification (Table \ref{tab:density}). At 5000BC, foraging bands remained fairly evenly spaced across southern lakeshores and estuaries, ranging from 0,75 persons per 100 km² on the Saguenay-Gaspe coast and 1,91 in the Ottawa-Rideau Shield to 2,16 in southern Ontario and 3,65 in the St. Lawrence Lowlands.

By 0AD, Middle Woodland riverine sedentism widened that spread: the St. Lawrence Lowlands reached 13,1 persons per 100 km² and the Ontario Peninsula 8,41, while the Shield and Saguenay remained at 5,74 and 2,38 respectively. Once full maize-beans-squash horticulture took hold after 1000AD, Huronia and the Ontario Peninsula climbed to 16,81 persons per 100 km² in 1000AD and 22,42 by 1500AD, seven times the density of Saguenay-Gaspe (3,16 per 100 km²) and three times that of the Ottawa-Rideau Shield (7,44 per 100 km²). Between 1500AD and 1600AD, St. Lawrence Lowlands density plunged from 19,86 to 6,98 persons per 100 km², dropping below Huronia-Ontario (21,12 per 100 km²) by more than a factor of three.

<figure class="crd-table-figure" id="tab:density">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Huronia, Simcoe Uplands and Ontario Peninsula (Wendat, Tionontati and Neutral)</strong></td><td class="crd-td">2,16</td><td class="crd-td">8,41</td><td class="crd-td">16,81</td><td class="crd-td">21,77</td><td class="crd-td">22,42</td><td class="crd-td">21,12</td></tr>
<tr><td class="crd-td"><strong>2. Ottawa-Rideau Valley and Algonquin Shield (Algonquin and Nipissing)</strong></td><td class="crd-td">1,91</td><td class="crd-td">5,74</td><td class="crd-td">7,15</td><td class="crd-td">7,4</td><td class="crd-td">7,44</td><td class="crd-td">6,94</td></tr>
<tr><td class="crd-td"><strong>3. St. Lawrence Lowlands: Hochelaga to Stadacona (St. Lawrence Iroquoians)</strong></td><td class="crd-td">3,65</td><td class="crd-td">13,1</td><td class="crd-td">18,25</td><td class="crd-td">19,76</td><td class="crd-td">19,86</td><td class="crd-td">6,98</td></tr>
<tr><td class="crd-td"><strong>4. Saguenay-Lac-Saint-Jean, Cote-Nord and Gaspe Peninsula (Innu and Gespe'gewa'gi Mi'kmaq)</strong></td><td class="crd-td">0,75</td><td class="crd-td">2,38</td><td class="crd-td">2,98</td><td class="crd-td">3,14</td><td class="crd-td">3,16</td><td class="crd-td">2,75</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional population density (persons per 100 km²) across six benchmarks from 5000BC to 1600AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subreg-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Three Settlements</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Huronia, Simcoe Uplands and Ontario Peninsula (Wendat, Tionontati and Neutral)</strong></td><td class="crd-td">87</td><td class="crd-td">63.580</td><td class="crd-td">620</td><td class="crd-td">Warminster (3,5k); Draper (1,9k); Walker (1,9k)</td></tr>
<tr><td class="crd-td"><strong>2. Ottawa-Rideau Valley and Algonquin Shield (Algonquin and Nipissing)</strong></td><td class="crd-td">27</td><td class="crd-td">13.710</td><td class="crd-td">460</td><td class="crd-td">Roebuck (1,4k); Gatineau Confluence Capital (720); Mattawa River Confluence Capital (680)</td></tr>
<tr><td class="crd-td"><strong>3. St. Lawrence Lowlands: Hochelaga to Stadacona (St. Lawrence Iroquoians)</strong></td><td class="crd-td">29</td><td class="crd-td">18.315</td><td class="crd-td">550</td><td class="crd-td">Hochelaga (2,6k); Droulers-Tsiionhiakwatha (950); Mandeville (820)</td></tr>
<tr><td class="crd-td"><strong>4. Saguenay-Lac-Saint-Jean, Cote-Nord and Gaspe Peninsula (Innu and Gespe'gewa'gi Mi'kmaq)</strong></td><td class="crd-td">29</td><td class="crd-td">14.750</td><td class="crd-td">490</td><td class="crd-td">Stadacona (1,8k); Restigouche Listuguj Capital (780); Sept-Iles Moisie Capital (690)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Distribution of the 172 catalogued settlements across the four Saint Lawrence divisions by peak sum and leading centres.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Huronia-Ontario</th><th class="crd-th">Ottawa-Shield</th><th class="crd-th">St. Lawrence</th><th class="crd-th">Saguenay-Gaspe</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">250</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">250</td><td class="crd-td">230 - 270</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">800</td><td class="crd-td">250</td><td class="crd-td">200</td><td class="crd-td">150</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k - 1,5k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,8k</td><td class="crd-td">800</td><td class="crd-td">900</td><td class="crd-td">600</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k - 4,4k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">3,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,5k</td><td class="crd-td">8,4k</td><td class="crd-td">7,7k - 9,1k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">5k</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">2,6k</td><td class="crd-td">13,7k</td><td class="crd-td">12,6k - 14,8k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">7,2k</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">3,8k</td><td class="crd-td">19,8k</td><td class="crd-td">18,2k - 21,4k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">9,8k</td><td class="crd-td">4,9k</td><td class="crd-td">6,8k</td><td class="crd-td">5k</td><td class="crd-td">26,5k</td><td class="crd-td">24,4k - 28,6k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">12,5k</td><td class="crd-td">6k</td><td class="crd-td">8,6k</td><td class="crd-td">6,2k</td><td class="crd-td">33,3k</td><td class="crd-td">30,6k - 36k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">15,5k</td><td class="crd-td">7,1k</td><td class="crd-td">10,4k</td><td class="crd-td">7,3k</td><td class="crd-td">40,3k</td><td class="crd-td">37,1k - 43,5k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">19,5k</td><td class="crd-td">8,1k</td><td class="crd-td">12,2k</td><td class="crd-td">8,3k</td><td class="crd-td">48,1k</td><td class="crd-td">44,3k - 51,9k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">22k</td><td class="crd-td">8,6k</td><td class="crd-td">13,2k</td><td class="crd-td">8,8k</td><td class="crd-td">52,6k</td><td class="crd-td">48,4k - 56,8k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">25k</td><td class="crd-td">9k</td><td class="crd-td">14,2k</td><td class="crd-td">9,3k</td><td class="crd-td">57,5k</td><td class="crd-td">52,9k - 62,1k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">29k</td><td class="crd-td">9,4k</td><td class="crd-td">15,2k</td><td class="crd-td">9,7k</td><td class="crd-td">63,3k</td><td class="crd-td">58,2k - 68,4k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">34k</td><td class="crd-td">9,8k</td><td class="crd-td">16,2k</td><td class="crd-td">10,1k</td><td class="crd-td">70,1k</td><td class="crd-td">64,5k - 75,7k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">39k</td><td class="crd-td">10,1k</td><td class="crd-td">17k</td><td class="crd-td">10,4k</td><td class="crd-td">76,5k</td><td class="crd-td">70,4k - 82,6k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">42k</td><td class="crd-td">10,2k</td><td class="crd-td">17,4k</td><td class="crd-td">10,6k</td><td class="crd-td">80,2k</td><td class="crd-td">73,7k - 86,6k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">45k</td><td class="crd-td">10,3k</td><td class="crd-td">17,8k</td><td class="crd-td">10,7k</td><td class="crd-td">83,8k</td><td class="crd-td">77,1k - 90,5k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">48k</td><td class="crd-td">10,4k</td><td class="crd-td">18,1k</td><td class="crd-td">10,8k</td><td class="crd-td">87,3k</td><td class="crd-td">80,4k - 94,3k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">50,5k</td><td class="crd-td">10,4k</td><td class="crd-td">18,4k</td><td class="crd-td">10,9k</td><td class="crd-td">90,3k</td><td class="crd-td">83,1k - 97,5k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">52k</td><td class="crd-td">10,5k</td><td class="crd-td">18,5k</td><td class="crd-td">11k</td><td class="crd-td">92k</td><td class="crd-td">84,6k - 99,4k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">51,5k</td><td class="crd-td">10,3k</td><td class="crd-td">15,5k</td><td class="crd-td">10,6k</td><td class="crd-td">87,9k</td><td class="crd-td">80,9k - 94,9k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">49k</td><td class="crd-td">9,8k</td><td class="crd-td">6,5k</td><td class="crd-td">9,6k</td><td class="crd-td">74,9k</td><td class="crd-td">68,9k - 80,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twenty-three benchmark population estimates for the Saint Lawrence Basin and Huronia (10000BC to 1600AD) with 8% uncertainty bounds.</figcaption>
</figure>

## Growth Rates Across Major Cultural Horizons

Decomposing the regional series into five broad archaeological eras highlights the contrast between slow Holocene foraging expansion and rapid Late Woodland growth (Table \ref{tab:eras}). Between 9000BC and 5000BC, post-glacial recolonisation across emerging Champlain Sea and Lake Algonquin shores lifted regional totals from 250 to 13,7k at an implied annualised growth rate near 0,1% over four millennia. From 5000BC to 0AD, Archaic copper networks and Early Woodland fishing sedentism added another 34,4k people at a steady rate of 0,025% per year.

Between 0AD and 1000AD, gradual adoption of native seed crops and northern flint maize raised regional numbers from 48,1k to 76,5k (+59%), followed by an extra 20,3% expansion between 1000AD and 1500AD (76,5k to 92k). Although late sixteenth-century lowland dispersal shaved 17,1k off the regional total between 1500AD and 1600AD, Huronia and the Ontario Peninsula lost just 3k inhabitants (-5,8%) over the century, preserving a demographic centre of gravity that persisted into the seventeenth-century French mission era [@lozier2012each; @beek2024trace].

<figure class="crd-table-figure" id="tab:eras">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Cultural Horizon</th><th class="crd-th">Span</th><th class="crd-th">Start Pop.</th><th class="crd-th">End Pop.</th><th class="crd-th">Net Change</th><th class="crd-th">Annual Rate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian to Middle Archaic</strong></td><td class="crd-td">9000BC - 5000BC</td><td class="crd-td">250</td><td class="crd-td">13,7k</td><td class="crd-td">+5.380%</td><td class="crd-td">0,1%</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic to Early Woodland</strong></td><td class="crd-td">5000BC - 0AD</td><td class="crd-td">13,7k</td><td class="crd-td">48,1k</td><td class="crd-td">+251,1%</td><td class="crd-td">0,025%</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland to Early Iroquoian</strong></td><td class="crd-td">0AD - 1000AD</td><td class="crd-td">48,1k</td><td class="crd-td">76,5k</td><td class="crd-td">+59%</td><td class="crd-td">0,046%</td></tr>
<tr><td class="crd-td"><strong>Late Woodland Coalescence</strong></td><td class="crd-td">1000AD - 1500AD</td><td class="crd-td">76,5k</td><td class="crd-td">92k</td><td class="crd-td">+20,3%</td><td class="crd-td">0,037%</td></tr>
<tr><td class="crd-td"><strong>Sixteenth-Century Contact Realignment</strong></td><td class="crd-td">1500AD - 1600AD</td><td class="crd-td">92k</td><td class="crd-td">74,9k</td><td class="crd-td">-18,6%</td><td class="crd-td">-0,205%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Epochal population transitions and implied annualised growth rates in the Saint Lawrence Basin from 9000BC to 1600AD.</figcaption>
</figure>

## Cross-Border Continuity and Post-Contact Transition

Because pre-contact canoe highways crossed modern provincial and international frontiers without interruption, the North American kriging surface conditions the Saint Lawrence surface continuously across Lakes Huron, Erie and Ontario into Michigan, New York and Vermont, as well as northward into the Hudson Bay boreal watershed and eastward down the Restigouche Valley into the Maritimes [@hart2022monongahela; @manning2019radiocarbon]. Within the Sault Ste. Marie corridor, the whitefish weir at Bawating links Huronia and Georgian Bay directly to the Upper Great Lakes, while Lake Champlain and the Richelieu River tie Montreal into Hudson-Mohawk exchange routes.

At the 1600AD terminal benchmark, this cross-border settlement lattice hands off smoothly to the Colonial Canada to 1763AD module, where Tadoussac (550), Quebec (1,8k in Stadacona's earlier horizon) and Montreal (2,6k in Hochelaga's earlier horizon) mark the exact riverine nodes later re-occupied by seasonal French fur fairs, Huron-Wendat refugees at Wendake (Jeune-Lorette) and St. Lawrence mission villages [@lozier2012each; @bouchardperron2017historical; @beek2024trace].

# Limitations

Four structural constraints govern the Saint Lawrence Basin reconstruction. First, Iroquoian communities relocated palisaded villages every 10 to 30 years once local firewood reserves and sandy-loam maize plots were exhausted [@warrick2008; @birch2012]. Even after deduplicating close pairs within 2 km and separating staggered occupation spans, overlapping radiocarbon assays across sequential village moves along Duffins Creek or the Humber Valley risk inflating catchment date counts relative to longer-lived European sites [@manning2019radiocarbon].

Second, Cultural Resource Management excavations ahead of suburban development around Toronto, Montreal and Ottawa generate far denser archaeological registers than forested Shield uplands or the Quebec North Shore [@bird2022p3k14c; @kelly2025]. Although continental Voronoi aggregation and Poisson-Gamma shrinkage damp extreme excavation clusters, mobile Algonquin, Nipissing and Innu summer camps remain under-represented compared with palisaded Ontario towns [@clermont1999; @wright1995].

Third, sub-regional boundaries follow cultural-watershed gradients that shift over time: St. Lawrence Iroquoian villages existed in both eastern Ontario and the Ottawa-Rideau corridor prior to 1540AD before dispersing by 1600AD [@pendergast1993; @chapdelaine2004]. Fourth, early sixteenth-century population adjustments between 1500AD and 1600AD rest on qualitative expeditionary observations by Cartier and Champlain reconciled against osteological and settlement-area trends rather than continuous parish registers [@forrest2011iroquoian; @lozier2012each].

# Conclusion

Between 10000BC and 1600AD, the demographic history of the Saint Lawrence Basin and Huronia pivoted twice: first when post-900AD maize-beans-squash agriculture lifted density south of the Precambrian Shield to 92k inhabitants in 1500AD, and second when late sixteenth-century St. Lawrence Iroquoian dispersal shifted two-thirds of the basin's 74,9k inhabitants onto the Ontario Peninsula and Simcoe County uplands by 1600AD. Anchored to the North American kriging composite (93.129 site-periods across 3.833 domestic catchments, 14,24x baseline, regularised $\tau_1 = 1,35$, mean short range 47 km, $R^2 = 0,9990$ to 0,9992) and 172 catalogued settlements, the series replaces smooth continental interpolations with an archaeologically grounded hydrological baseline across eastern Canada and the upper Great Lakes threshold.

# Sources

<div id="refs"></div>
