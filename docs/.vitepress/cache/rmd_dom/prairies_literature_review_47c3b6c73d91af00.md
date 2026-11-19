---
title: "Pre-Columbian Canadian Prairies: Bison-Hunting Nomads, Aspen Parklands and Woodland Outliers"
subtitle: "CENTAUR-II: Foothill Plains, Saskatchewan Basins and Red-Assiniboine Lowlands, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prairies_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prairies_spatial.png"
hero_caption: "Four ecological divisions and 192 catalogued habitation settlements across the Canadian Prairies (851.926 km²) from 10000BC to 1600AD."
hero_label: "fig:hero-prairies"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Canadian Prairies (851.926 km², 16.645 active 5-arcminute cells) form the northernmost grassland and aspen-parkland extension of the Great Plains foraging and riverine economy. Reconstructed across four physiographic divisions under CENTAUR-II from 10000BC to 1600AD, regional population rises from 150 late-glacial foothill hunters in 10000BC to 12,9k in 5000BC and 36,3k at 0AD, reaching a late pre-contact plateau of 46k across 1500AD and 1550AD (5,4 persons per 100 km²) before easing marginally by 1,52% to 45,3k by 1600AD [@brink2008; @peck2011; @dyck1970oxbow].

Peak sub-regional density concentrates in the Rocky Mountain Foothills and Bow-Oldman Plains (23,8 persons per 100 km², 27,2% of regional population), while the expansive Aspen Parkland and North Saskatchewan Valley holds the largest share (29,3%, 13,5k, 4,98 persons per 100 km²). Spatial allocation links 192 catalogued habitation hubs (407 ledger candidates with 210 duplicate-alias consolidations and 5 non-habitation exclusions) to a multi-registry North American radiocarbon composite (93.129 unique site-periods, 286.193 horizon site-record sum, across 3.833 domestic catchments covering 15,52M km² with 2.570 active and 67,05% coverage, 251 cross-frontier buffer catchments, 493.687 valid land cells spanning 18,56M km² with 78.938 to 149.138 active cells across 10 horizons from 13000BC to 1650AD, and 14,24x over the 6.539 legacy baseline). Fitted via non-stationary Matérn ($\nu = 3/2$) kriging (regularised $\tau_1 = 1,35$ across all 10 horizons, raw 1,519 to 1,6098 with mean 1,5782, $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km with mean 47 km, raw nugget 0, regularised 0,04, $R^2 = 0,9990$ to 0,9992), the grid maintains continuous density gradients into Montana, North Dakota and Minnesota across the forty-ninth parallel.

# Background

## Grassland Ecology and Historiographic Context

### Beyond Uniform Steppe Abstractions

Earlier macro-scale continental atlases treated the Canadian Prairies as uniform low-density steppe, overlooking sharp ecological contrasts among chinook-warmed foothill wintering coulees, semi-arid Palliser mixedgrass plains and fertile Red River horticultural floodplains [@bamforth1988; @boyd2006; @peck2011].

In practice, bison herd seasonality imposed a strict spatial rhythm on human aggregation across the northern plains. Winter survival favoured sheltered aspen-grove coulees, riverine gallery forests and foothills topography where timber fuel, flowing water and reliable wind-driven snow-free grazing coincided [@brink2008; @walker1992; @frison2004].

### Division Design and Benchmark Series

CENTAUR-II divides 851.926 km² into four physiographically coherent sub-regions aligned to precipitation belts, grassland biomes and major drainage basins (Table \ref{tab:subregions}). Each sub-region carries a 23-benchmark series spanning 10000BC to 1600AD.

## Four Physiographic Divisions

### Rocky Mountain Foothills and Bow-Oldman Plains

The Rocky Mountain Foothills and Bow-Oldman Plains (52.531 km², 6,2% of module area) trace the sheltered fescue-grassland wintering belt along the Bow, Oldman and upper Saskatchewan valleys [@brink2008; @forbis1977].

Warm winter chinook winds periodically stripped snowpack from rolling fescue benches, making the foothills and Bow-Oldman corridor an ideal cold-season wintering zone. This foothill belt formed the ancestral heartland of Niitsitapi (Blackfoot) riverine wintering camps and earthwork villages including Estipah-skikikini-kots, Cluny Earthlodge Town and Majorville River Village [@brink2008; @mckinnon1986paleoenvironments].

### Aspen Parkland and North Saskatchewan Valley

Across the northern forest-grassland ecotone, the Aspen Parkland and North Saskatchewan Valley (270.951 km², 31,8%) spans wooded parkland coulees and broad valley terraces from the upper Saskatchewan forks toward central Alberta and western Manitoba [@walker1992; @peck2011].

Aspen bluffs sheltered wintering bison herds against Arctic cold fronts while providing predictable firewood, berry harvests and sheltered winter tipi clearings. Oxbow, Besant and Blackduck communities clustered seasonally around Stott Blackduck Metropolis, Fort Qu'Appelle Calling Lakes Village, Bushfield West River Town and Bodo Archaeological Site [@walker1992; @roskowski2004geoarchaeology].

### South Saskatchewan Mixedgrass Steppe and Qu'Appelle

Southward, the South Saskatchewan Mixedgrass Steppe and Qu'Appelle (235.029 km², 27,6%) encompasses drier Palliser grasslands and deeply incised glacial spillways stretching across southern Saskatchewan and southeastern Alberta [@walde2006; @vickers1994].

Lower annual precipitation and scarcer upland timber restricted sedentary residence to river valley gallery woods and spring-fed coulees. Even under dry steppe regimes, Avonlea and Mortlach communities maintained dense multi-component habitation settlements at Sjovold Layered Metropolis, Prince Albert River Town, Wanuskewin, Gull Lake and Mortlach [@walde2006; @kobes2019river].

### Red-Assiniboine Plains and Lake Manitoba Lowlands

Eastward, the Red-Assiniboine Plains and Lake Manitoba Lowlands (293.415 km², 34,4%) join glacial Lake Agassiz clay plains with productive marshlands, oak savannas and tallgrass floodplains [@boyd2006; @peck2011].

Laurel and Blackduck woodland communities paired prairie-margin river camps with lake-edge fisheries and northern wild-rice wetlands. By late precontact centuries, village farmers at Lockport added storage-pit maize horticulture along rich Red River alluvial levees alongside lacustrine and river towns at Sagkeeng Fort Alexander Village, Cumberland House Ancestral Town and Avonlea [@boyd2006; @peck2011].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Rocky Mountain Foothills and Bow-Oldman Plains (Niitsitapi/Blackfoot)</strong></td><td class="crd-td">52.531 (6,2%)</td><td class="crd-td">3,4k</td><td class="crd-td">9,6k</td><td class="crd-td">12,1k</td><td class="crd-td">12,5k</td><td class="crd-td">12,4k</td><td class="crd-td">23,8</td></tr>
<tr><td class="crd-td"><strong>2. Aspen Parkland and North Saskatchewan Valley (Plains Cree and Oxbow-Besant)</strong></td><td class="crd-td">270.951 (31,8%)</td><td class="crd-td">3,7k</td><td class="crd-td">10,6k</td><td class="crd-td">12,9k</td><td class="crd-td">13,5k</td><td class="crd-td">13,3k</td><td class="crd-td">4,98</td></tr>
<tr><td class="crd-td"><strong>3. South Saskatchewan Mixedgrass Steppe and Qu'Appelle (Assiniboine and Avonlea)</strong></td><td class="crd-td">235.029 (27,6%)</td><td class="crd-td">2,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,8k</td><td class="crd-td">9k</td><td class="crd-td">8,8k</td><td class="crd-td">3,83</td></tr>
<tr><td class="crd-td"><strong>4. Red-Assiniboine Plains and Lake Manitoba Lowlands (Laurel-Blackduck)</strong></td><td class="crd-td">293.415 (34,4%)</td><td class="crd-td">3,2k</td><td class="crd-td">8,9k</td><td class="crd-td">10,7k</td><td class="crd-td">11k</td><td class="crd-td">10,8k</td><td class="crd-td">3,75</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">851.926 (100%)</td><td class="crd-td">12,9k</td><td class="crd-td">36,3k</td><td class="crd-td">44,5k</td><td class="crd-td">46k</td><td class="crd-td">45,3k</td><td class="crd-td">5,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500AD density (persons per 100 km²) across the Canadian Prairies.</figcaption>
</figure>

# Methodology

## Benchmark Cadence and Habitation Demographic Anchors

Each sub-regional series spans 23 chronological anchors from 10000BC to 1600AD. Benchmarks advance in millennial steps before 0AD, bicentennial steps through 1000AD, centennial steps through 1500AD and fifty-year resolution at 1550AD and 1600AD.

Regional population totals synthesise communal camp processing labour requirements [@brink2008; @frison2004], winter campsite hearth counts [@dyck1970oxbow; @walker1992], northern plains radiocarbon probability distributions [@kelly2025; @peck2011] and ethnohistoric contact estimates [@ubelaker2006].

Communal subsistence demanded strict seasonal coordination between winter coulee aggregations and warm-season dispersed foraging circuits [@brink2008; @frison2004]. Each sub-regional series carries symmetric +/- 8% uncertainty intervals anchored to ethnographic band-size dispersion [@ubelaker2006].

## Multi-Registry Radiocarbon Composite and Matérn Kriging

Rural demographic allocation across the 16.645 active cells of the Canadian Prairies draws on the continental North American radiocarbon composite (493.687 valid terrestrial 5-arcminute land cells spanning 18.561.382 km², or 18,56M km², with 78.938 to 149.138 active inhabited non-wasteland cells across 10 horizons from 13000BC to 1650AD). This surface combines global syntheses (c14bazAAR and p3k14c) [@bird2022p3k14c] with the Canadian Archaeological Radiocarbon Database (CARD), provincial heritage inventories in Alberta, Saskatchewan and Manitoba, United States state archaeological site files, Greenland *Nunniffiit* registers and regional cultural resource management surveys.

After spatial and temporal deduplication by catchment and 200-year bin, the composite contains 93.129 unique site-periods (286.193 horizon site-record sum) across 3.833 domestic Voronoi catchments spanning 15.517.268 km² (15,52M km²; 2.570 active inhabited catchments, 67,05% coverage). That footprint reaches 14,24x baseline observation density above the 6.539-entry legacy global radiocarbon baseline, with an equivalent circular radius ($r = \sqrt{A/\pi}$) median of 29,48 km and 90th percentile of 40,95 km across all 3.833 catchments (29,3 km median and 39,85 km 90th percentile across active catchments; 29,78 km median and 40,69 km 90th-percentile Voronoi radius in the continental diagnostics).

To prevent artificial border cliffs across the forty-ninth parallel into Montana, North Dakota and Minnesota, 251 cross-frontier buffer catchments condition density gradients up to 300 km beyond the national boundary. Weighted least-squares covariates incorporating coastal proximity, 13,5 km fluvial distance decay, terrain slope and ecological potential feed 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 10 Holocene horizons anchored to Kelly et al. [@kelly2025] regional curves.

## Settlement Subtraction and Border Feathering

From primary Plains monographs and provincial heritage files, 192 persistent winter-village, earthlodge, horticultural and riverine habitation hubs are geolocated with bounded demographic trajectories. Nearby camp aliases within 2 km and unquantified non-habitation features are consolidated or excluded in the source ledger so composite landforms are not double-counted.

At every benchmark year, active settlement populations are subtracted from their enclosing sub-region before distributing remaining rural band populations proportional to the kriged surface inside the areal mask and applying two passes of a 4-pixel separable border smoother.

# Testing and Validation

Three quantitative checks govern the Canadian Prairies module prior to compilation:

1. **Variogram Sharpness and Fit**: Across all 10 Holocene horizons (13000BC to 1650AD) of the North American Matérn ($\nu = 3/2$) surface, regularised dimensionless range calibrates at $\tau_1 = 1,35$ on every horizon ($\le 1,8$; unregularised raw $\tau_1$ 1,519 to 1,6098, mean 1,5782, continental diagnostic 1,5794) and $\tau_2 = 2,9025$ (2,9; effective short range 45,23 km to 47,94 km, mean 47 km), with raw nugget-to-sill ratio 0 and regularised nugget-to-sill ratio 0,04 across all 10 horizons (below the 0,45 ceiling). Weighted least-squares covariates remain active on every horizon, achieving $R^2$ from 0,999 to 0,9992, reported in Table \ref{tab:kriging}.
2. **Gazetteer and Ledger Reconciliation**: Cross-checking 192 included habitation hubs (632 observations; 3,29 average; 181 with 3 or more entries) against 407 source-ledger candidates yields 215 documented exclusions (210 duplicate-alias consolidations within 2 km plus 5 non-habitation feature exclusions), 0 unaccounted records and 0 schema faults. Sub-regional coverage spans 24 sites in Foothills-Bow, 50 in Aspen Parkland, 70 in South Saskatchewan-Palliser and 48 in Red-Assiniboine.
3. **Cross-Frontier Seam Continuity**: Inter-regional borders with Northern Cascadia and Alaska, Northern Canada and Greenland, Hudson Bay and the Extreme Northern Plains and Souris-Red-Rainy basins of the United States exhibit continuous density transitions without step-function jumps.

<figure class="crd-table-figure" id="tab:kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget-Sill</th><th class="crd-th">Regularised Nugget-Sill</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland and Hopewell</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian and Pueblo II</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian and Pueblo III</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule-Oneota)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> North American Matérn variogram parameters across ten Holocene horizons from the shared radiocarbon composite.</figcaption>
</figure>

# Results

## Glacial Lake Retreat and Early Bison Hunters (10000BC to 6000BC)

### Ice-Free Foothills and Proglacial Lake Barriers

In 10000BC, glacial Lake Agassiz and the retreating Laurentide ice margin confined human occupation to the ice-free western foothills (150 inhabitants, 138 to 162). The Saskatchewan and Red River plains remained inundated or ice-covered and therefore held zero inhabitants.

Rapid deglaciation and catastrophic draining of glacial lake basins between 9000BC (800) and 7000BC (5,2k) opened the interior plains from west to east. Palaeoindian Agate Basin, Scottsbluff and Cody Complex bison hunters rapidly colonised the Aspen Parkland (1,5k in 7000BC), Palliser steppe (1,1k) and Red-Assiniboine lowlands (1k) [@walker1992; @peck2011].

### Early Gazetteer Footholds and West-to-East Colonisation

Early post-glacial sites documented in the gazetteer capture this chronological gradient cleanly. In the western foothills and northwestern parkland corridor, occupation began at Vermilion Lakes (85 peak, occupied from 8800BC) and Fletcher (75, 7800BC) [@vallieres2004paleoindian].

Farther east, Heron Eden (75, 7900BC) and Niska (75, 7200BC) mark early Saskatchewan occupancy alongside St. Louis (70, 7200BC) in the central drainage, while Sinnock (65, 7200BC) traces pioneer settlement along the draining Lake Agassiz margin. By 6000BC, total prairie population reached 8,8k across all four divisions.

## Altithermal Parkland Shift and Mid-Holocene River Hubs (5000BC to 1000BC)

### Warm-Dry Grassland Contraction and River-Bend Refugia

During the mid-Holocene Altithermal warm-dry phase (5500BC to 3000BC), drier grassland conditions pushed bison herds and human winter camps toward the Aspen Parkland, foothill coulees and sheltered river bends [@walker1992; @dyck1970oxbow]. Despite arid steppe stress, better-watered ecotone valleys supported steady growth from 12,9k in 5000BC to 22,3k in 3000BC and 32k in 1000BC.

Geoarchaeological and palaeobotanical investigations along the Saskatchewan forks, Cold Lake and southern Alberta valleys document shifting river floodplains, carbon-isotope grassland composition changes and multi-component camp stratification across this interval [@roskowski2004geoarchaeology; @jass2017underwater; @mckinnon1986paleoenvironments].

### Emergence of Persistent Valley Villages and River Hubs

Major aggregation hubs crystalised during this epoch where sheltered valley terraces met reliable timber and winter water. Wanuskewin (4000BC onward, reaching 450 peak) and Estipah-skikikini-kots (3500BC onward, reaching 650 peak) anchored multi-millennial gathering circuits, alongside Gowen (95, 4300BC to 3200BC), Below Forks (110, 4200BC to 1600BC), Sjovold Layered Metropolis (510 peak, 1500BC onward), Tailrace Bay (280, 2000BC onward) and Lockport (680 peak, 1000BC onward) [@brink2008; @walker1992; @roskowski2004geoarchaeology].

By 1000BC, Pelican Lake, Oxbow and McKean-Hanna populations had established dense winter residence patterns across all four basins. Aspen Parkland led with 9,3k inhabitants, followed by Foothills-Bow (8,4k), Red-Assiniboine (7,9k) and South Saskatchewan-Palliser (6,4k) [@peck2011; @dyck1970oxbow].

## Bow-and-Arrow Villages, Plains Earthworks and Maize Outliers (0AD to 1500AD)

At 0AD, Canadian Prairie population reached 36,3k (33,4k to 39,2k), growing steadily to 43,5k in 800AD, 44,5k in 1000AD and 46k by 1500AD (Figure \ref{fig:traj}). Adoption of the bow and arrow alongside Besant and Avonlea pottery (200AD to 800AD) raised communal subsistence efficiency across open grasslands through constructed timber-framed wintering villages and seasonal river aggregation camps [@vickers1994; @walde2006; @tischer2000egpn].

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies/fig2_prairies_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Canadian Prairies from 10000BC to 1600AD with +/- 8% uncertainty bounds and four sub-regional curves.</figcaption>
</figure>

### Rocky Mountain Foothills and Bow-Oldman Plains

Along the foothill wintering belt (24 catalogued habitation settlements), Estipah-skikikini-kots (650 peak in 1500AD) operated alongside Cluny Earthlodge Town (520 peak in 1550AD), Cochrane Ranche Valley Village (310), Taber River Settlement (310), Fort Macleod Valley Village (290), High River Valley Village (280), Ross (280) and Pincher Creek Habitation (270) [@brink2008; @tischer2000egpn; @wickham2005efpm; @shortt1993happy].

Foothill population rose from 9,6k at 0AD to 12,5k in 1500AD, sustaining the highest prairie density at 23,8 persons per 100 km². Later fourteenth-to-sixteenth-century fortified earthwork occupation at Cluny Earthlodge Town (520 peak) and Cluny Fortified Village (250 peak) attests to Middle Missouri-style village experimentation on the Bow River [@forbis1977; @walde2006].

### Aspen Parkland and South Saskatchewan Steppe

Across the North Saskatchewan and parkland belt (50 catalogued sites), Stott Blackduck Metropolis (520 peak), Fort Qu'Appelle Calling Lakes Village (480), Bushfield West River Town (460), North Battleford Confluence Town (460), Bushfield West (440), Bodo Archaeological Site (410), Lowton (390), Francois-Finlay (340) and Goldsworthy (250) supported an expansion from 10,6k at 0AD to 13,5k by 1500AD (4,98 persons per 100 km²) [@kelly1986newo; @williams2015archaeological; @peck2011].

In the drier South Saskatchewan and Qu'Appelle valleys (70 catalogued sites), Sjovold Layered Metropolis (510), Prince Albert River Town (490), Wanuskewin (450), Gull Lake (420), Writing-On-Stone (410), Long Creek Town (390), Mortlach (380), Bakken-Wright (270), Melhagen (260) and Tschetter (240) lifted population from 7,2k at 0AD to 9k from 1200AD to 1550AD (3,83 persons per 100 km²) [@walde2006; @kobes2019river]. Despite open shortgrass terrain, coulee springs and gallery timber sustained predictable seasonal habitation settlements.

### Red-Assiniboine Plains and Northern Maize Horticulture

In the Red-Assiniboine and Lake Manitoba lowlands (48 catalogued sites), Laurel, Blackduck and Vickers Focus communities combined bison procurement with intensive marsh fisheries and northern maize horticulture [@boyd2006; @peck2011]. Storage-pit maize cultivation at Lockport (680 peak overall, 480 in 1500AD) marked the northernmost prehistoric farming outlier on the Canadian plains.

Alongside Lockport, lake-margin and riverine villages at Sagkeeng Fort Alexander Village (560), Cumberland House Ancestral Town (520), Winnipegosis Mossey River Town (470), Fairford River Town (460), Grand Mound (450), Aschkibokahn Lacustrine Town (440), Kay-Nah-Chi-Wah-Nung (440), Avonlea (390) and Tailrace Bay (280) lifted eastern lowland population from 8,9k at 0AD to 11k in 1400AD to 1550AD (3,75 persons per 100 km²). Figure \ref{fig:shares} charts the long-run compositional balance across all four sub-regions.

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies/fig3_prairies_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across the Canadian Prairies from 10000BC to 1600AD.</figcaption>
</figure>

## Protohistoric Plateau and Early Contact Threshold (1500AD to 1600AD)

Prairie population stabilised on a plateau of 46k across 1500AD and 1550AD (5,4 persons per 100 km²), held in equilibrium by foothill wintering capacity, parkland ecotone diversity and steppe bison carrying limits. Between 1550AD and 1600AD, regional totals dipped slightly by 1,52% (700 inhabitants) to 45,3k.

That mild terminal contraction reflects Little Ice Age winter severity fluctuations and early protohistoric indirect epidemiological disruption ahead of eighteenth-century equestrian transformation [@ubelaker2006; @walde2006]. Table \ref{tab:master} compiles all 23 benchmark dates and +/- 8% uncertainty bounds.

## Twenty-Three-Benchmark Series (10000BC to 1600AD)

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Foothills-Bow</th><th class="crd-th">Aspen Parkland</th><th class="crd-th">Palliser Steppe</th><th class="crd-th">Red-Assiniboine</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">150</td><td class="crd-td">138 - 162</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">450</td><td class="crd-td">200</td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">800</td><td class="crd-td">736 - 864</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">950</td><td class="crd-td">700</td><td class="crd-td">550</td><td class="crd-td">300</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k - 2,7k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,6k</td><td class="crd-td">1,5k</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">5,2k</td><td class="crd-td">4,8k - 5,6k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">8,8k</td><td class="crd-td">8,1k - 9,5k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">12,9k</td><td class="crd-td">11,9k - 13,9k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">4,5k</td><td class="crd-td">5k</td><td class="crd-td">3,5k</td><td class="crd-td">4,4k</td><td class="crd-td">17,4k</td><td class="crd-td">16k - 18,8k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">22,3k</td><td class="crd-td">20,5k - 24,1k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">7,1k</td><td class="crd-td">7,9k</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">27,3k</td><td class="crd-td">25,1k - 29,5k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">8,4k</td><td class="crd-td">9,3k</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k</td><td class="crd-td">32k</td><td class="crd-td">29,4k - 34,6k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">9,6k</td><td class="crd-td">10,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,9k</td><td class="crd-td">36,3k</td><td class="crd-td">33,4k - 39,2k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">10,2k</td><td class="crd-td">11,2k</td><td class="crd-td">7,6k</td><td class="crd-td">9,4k</td><td class="crd-td">38,4k</td><td class="crd-td">35,3k - 41,5k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">10,8k</td><td class="crd-td">11,7k</td><td class="crd-td">8k</td><td class="crd-td">9,8k</td><td class="crd-td">40,3k</td><td class="crd-td">37,1k - 43,5k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">11,3k</td><td class="crd-td">12,2k</td><td class="crd-td">8,3k</td><td class="crd-td">10,2k</td><td class="crd-td">42k</td><td class="crd-td">38,6k - 45,4k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">11,8k</td><td class="crd-td">12,6k</td><td class="crd-td">8,6k</td><td class="crd-td">10,5k</td><td class="crd-td">43,5k</td><td class="crd-td">40k - 47k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">12,1k</td><td class="crd-td">12,9k</td><td class="crd-td">8,8k</td><td class="crd-td">10,7k</td><td class="crd-td">44,5k</td><td class="crd-td">40,9k - 48,1k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">12,2k</td><td class="crd-td">13,1k</td><td class="crd-td">8,9k</td><td class="crd-td">10,8k</td><td class="crd-td">45k</td><td class="crd-td">41,4k - 48,7k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">12,3k</td><td class="crd-td">13,2k</td><td class="crd-td">9k</td><td class="crd-td">10,9k</td><td class="crd-td">45,5k</td><td class="crd-td">41,9k - 49,1k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,3k</td><td class="crd-td">9k</td><td class="crd-td">10,9k</td><td class="crd-td">45,7k</td><td class="crd-td">42k - 49,4k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,4k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">45,9k</td><td class="crd-td">42,2k - 49,6k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">12,5k</td><td class="crd-td">13,5k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">46k</td><td class="crd-td">42,3k - 49,7k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">12,5k</td><td class="crd-td">13,5k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">46k</td><td class="crd-td">42,3k - 49,7k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,3k</td><td class="crd-td">8,8k</td><td class="crd-td">10,8k</td><td class="crd-td">45,3k</td><td class="crd-td">41,7k - 48,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-three-benchmark population series for the Canadian Prairies (10000BC to 1600AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

## Mobile Tipi-Ring Visibility and CRM Survey Bias

Three taphonomic and sampling constraints qualify the Canadian Prairies series. First, mobile equestrian-era precursor bands lived primarily in skin tipis that left shallow stone circles vulnerable to deflation and agricultural ploughing [@frison2004; @bird2022p3k14c].

By contrast, stratified winter-village midden deposits and river-valley earthworks accumulate abundant datable charcoal and bone, biasing raw radiocarbon tallies toward persistent valley villages and earthen enclosures [@brink2008].

Second, heritage compliance surveys concentrate heavily along urban river corridors (Calgary, Saskatoon, Qu'Appelle, Winnipeg) and commercial forestry or petroleum leases in central and northern Alberta [@statz2020efficiency; @kobes2019river]. Vast stretches of interior mixedgrass prairie and boreal-margin muskeg remain far more sparsely tested.

## Alluvial Burial and Uncertainty Envelopes

Third, post-glacial spring flooding in the Red, Assiniboine and Saskatchewan valleys buries early Holocene campsites beneath thick alluvial silt [@roskowski2004geoarchaeology]. Across the drained Lake Agassiz floor, intensive modern cultivation also disturbs shallow Woodland horizons and small maize garden plots [@boyd2006].

Finally, the uniform +/- 8% uncertainty envelope captures macro-level benchmark carrying-capacity spread rather than statistical confidence intervals on site-density counts [@ubelaker2006; @peck2011].

Future subsurface geophysical survey along buried palaeochannels may raise early Holocene river-valley estimates slightly without altering the late pre-contact ceiling.

# Conclusion

## From Glacial Margin to Pre-Contact Equilibrium

The Canadian Prairies illustrate a long-run transition from 150 late-glacial foothill hunters in 10000BC to a resilient nomadic and parkland society of 46k inhabitants in 1500AD to 1550AD (45,3k in 1600AD).

Once proglacial lakes drained, hunter-gatherer mobility filled the grasslands quickly, reaching nearly three-quarters of peak capacity by 1000BC (32k).

Later adoption of the bow and arrow alongside coordinated wintering aggregation networks lifted carrying capacity to its mature pre-contact ceiling without exhausting winter forage refugia.

## Sub-Regional Asymmetry and Plains Diversity

Ecological contrast governed demographic geography throughout the Holocene across every precipitation belt.

Chinook-moderated foothill valleys sustained 23,8 persons per 100 km², nearly five times the Aspen Parkland (4,98) and more than six times the mixedgrass Palliser steppe (3,83) and Red-Assiniboine lowlands (3,75).

At the eastern grassland edge, horticultural experimentation at Lockport (680 peak overall, 480 in 1500AD) demonstrates that storage-pit maize farming penetrated deep into northern river valleys before direct European contact [@boyd2006]. Simultaneously, fourteenth-to-sixteenth-century fortified plains earthworks at Cluny Earthlodge Town (520 peak) and Cluny Fortified Village (250 peak) show parallel village experimentation along the Bow River [@forbis1977].

## Composite Conditioning and Plains Continuity

Integrating 192 persistent habitation centres (407 ledger candidates) with multi-registry North American Matérn ($\nu = 3/2$) kriging calibrated across 93.129 unique site-periods (286.193 horizon site-record sum, 3.833 domestic and 251 frontier buffer catchments, 2.570 active, 493.687 valid land cells, 14,24x baseline) resolves forty-ninth-parallel border cliffs into Montana and North Dakota.

Adjacent transitions toward the Rocky Mountain foothills, boreal Saskatchewan and northern Red River forests remain continuous across all 23 temporal benchmarks.

Taken together, the composite raster surface and reconciled gazetteer ground northern plains historical demography in documented archaeological site distributions without artificial border discontinuities.

Regional demographic reconstructions thus remain directly extensible southward into the Missouri and Mississippi basins as adjacent chapters are compiled.

# Sources

<div id="refs"></div>
