---
title: "Arizona Hydrological Unit (HU 15): Demographic Reconstruction"
subtitle: "CENTAUR-II: Hohokam Irrigation, Mogollon Rim and Lower Colorado Series, 10000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arizona_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arizona_spatial.png"
hero_caption: "Sub-regional areal masks and catalogued settlement centres across Arizona Hydrological Unit 15 (363,6k km²), spanning the Little Colorado Plateau, Salt-Gila Hohokam canals, Santa Cruz highlands and Lower Colorado corridor."
hero_label: "fig:hero-arizona"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Arizona Hydrological Unit 15 (363.647 km² across 5.107 5-arcminute grid cells) from 10000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Spanning the Little Colorado and Hopi Mesas Plateau, the Salt-Verde-Middle Gila Phoenix Basin, the Santa Cruz-San Pedro-Cochise highlands and the Lower Colorado Sonoran corridor, HU 15 sustained the largest pre-Columbian canal-irrigation network in North America north of central Mexico alongside high-elevation Puebloan masonry towns [@haury1976hohokam; @fish2007hohokam; @adams2002homolovi].

Integrating N = 2.116 radiocarbon dates from Kelly et al. with the continental North American non-stationary Matérn ($\nu = 3/2$) kriging surface (92.500 unique site-periods and 166.545 horizon site records across 3.832 domestic catchments, 2.562 active, 14,15x legacy baseline; regularised $\tau_1 = 1,35$, mean effective short range 47,23 km, raw nugget-to-sill 0, regularised 0,04, WLS residual $R^2$ from 0,9991 to 0,9993) and 588 catalogued habitation settlements (1.324 ledger candidates, 736 exclusions), basin population grew from 800 (736 to 864) in 10000BC to 72,7k (66,9k to 78,5k) in 0AD and peaked at 156,9k (144,3k to 169,5k) in 1100AD, closely matching the Kelly et al. HU 15 median radiocarbon mode of 1078AD (872 cal BP) [@kelly2025; @bird2022p3k14c; @kelly2022new]. Classic Period coalescence kept numbers at 153,3k in 1200AD before floodplain erosion, salinisation, megadrought and crowding-related illness lowered basin population to 97,4k in 1400AD and 76k (69,9k to 82,1k) in 1600AD [@hill2004southwest; @phillips2018village; @robinson2021dendro].



# Background

Arizona Hydrological Unit 15 drains the Lower Colorado River below Lees Ferry together with the Gila, Salt, Verde, Bill Williams, Santa Cruz, San Pedro and Little Colorado rivers across Arizona, western New Mexico, southern Utah, southeastern Nevada and the eastern California desert margin [@seaber1987hydrologic]. Elevation rises sharply from under 60 m along the Yuma-Lower Colorado delta plain to over 2.100 m across the pine forests of the Mogollon Rim and Colorado Plateau, producing steep gradients in precipitation, growing-season frost risk and runoff reliability.

Human occupation began in the Late Pleistocene and Early Holocene across desert playas and alluvial spring mounds, represented among the earliest catalogued loci in the 588-site gazetteer by Tule Springs in southern Nevada (9500BC to 6000BC, 30 peak) and Tinajas Altas (1000BC to 1100AD, 35 peak). By 2000BC to 1000BC, Early Agricultural Period farmers introduced maize and canal-assisted floodwater plots into the Santa Cruz and San Pedro valleys, establishing sedentary pit-structure settlements such as Los Morteros (1200BC onward), Santa Cruz Bend (400BC to 100BC) and Tumamoc Hill (300BC onward) centuries before painted ceramics appeared [@hill2004southwest].

On the desert bajadas and riverine terraces of southern Arizona, dryland *Agave* cultivation, rock-pile runoff mulching and traditional maize-bean-squash polyculture buffered summer monsoon variability [@cano2023ecological; @gillreathbrown2019geospatial; @novotny2021importance]. Beginning around 400AD, Hohokam engineers on the Salt and Middle Gila alluvial fans transformed desert subsistence by constructing hundreds of kilometres of mainstem canals, headgates and distribution laterals capable of watering tens of thousands of hectares [@haury1976hohokam; @fish2007hohokam].

During the Pioneer, Colonial and Sedentary Hohokam eras (400AD to 1150AD), ballcourt villages anchored dense Phoenix Basin population, led by S-Kiukchu'k on the Gila River (400AD to 1100AD, 3,2k peak), Cashion Ruin (1,06k peak) and Gatlin Site (1,06k peak) [@haury1976hohokam]. Regional ballcourt networks facilitated ceramic, shell and agricultural exchange between the Lower Salt-Gila core and upland basins along the Verde and Agua Fria valleys.

After 1150AD, Classic Period communities replaced open ballcourts with walled adobe compounds and elevated earthen platform mounds at Pueblo Grande (3,1k peak in 1300AD), Sivan Vah'ki (2,6k peak in 1300AD), Los Muertos (1,4k peak in 1350AD), Escalante (1,06k peak) and Grand Canal (1,06k peak) [@fish2007hohokam]. Simultaneously, Salado and Tonto Basin populations erected terraced compounds near perennial creeks while Sinagua dryland farmers exploited Sunset Crater volcanic-ash moisture mulches around Flagstaff and Wupatki (1,06k peak).

Across the northern plateau and Mogollon Rim, Ancestral Puebloan and Mogollon populations consolidated between 1100AD and 1450AD into large masonry and adobe plaza pueblos along perennial springs and major drainages. Prominent centres include Los Morteros-Point of Pines (1,35k in 1200AD), Grasshopper Pueblo (1,1k in 1300AD), Chaves Pass (1,15k in 1375AD), Homol'ovi (1,45k in 1400AD) and the enduring Hopi and Zuni mesa towns of Orayvi (2,1k in 1600AD), Hawikku (1,65k in 1500AD), Halona:wa (1,25k in 1540AD), Awatovi (1,2k in 1540AD) and Mats'a:kya (1,15k in 1540AD) [@adams2002homolovi; @nichols2019violence]. Simultaneously, Patayan and Yuman riverine cultivators exploited annual Colorado River silt floods along the western margin at Needles (Mohave) (620 peak), alongside lower Gila settlements (Fitzmaurice Ruin, Gatlin Site, Palo Verde Ruin, Van Liere Ruin at 1,06k, and Gillespie Dam at 1.013).

By 1450AD, abandoned canal districts across the Lower Salt and Middle Gila gave way to smaller dispersed rancherías ancestral to the historic Akimel O'odham, whereas irrigated terraces along the Santa Cruz and Hopi-Zuni mesas sustained unbroken village continuity into the Spanish colonial horizon [@hill2004southwest; @adams2002homolovi].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration employs the Kelly et al. IntCal20 radiocarbon analysis for Hydrological Unit 15 (N = 2.116 dates with standard errors <= 100 years) [@kelly2025; @kelly2022new]. Because Arizona radiocarbon records inside CARD are georeferenced to 1x1-degree grid squares rather than counties and over 90% of Arizona territory lies within HU 15, Kelly et al. assign statewide grid-cell counts directly to HU 15.

Across 500 running-mean smoothing windows, the HU 15 radiocarbon peak spans 833 to 991 cal BP (959AD to 1117AD), with a first quartile at 857 cal BP (1093AD), a third quartile at 955 cal BP (995AD), a mean of 898 cal BP (1052AD) and a median peak at 872 cal BP (1078AD) [@kelly2025]. Comparative long-run arid-lands demographic syntheses demonstrate how summed radiocarbon curves capture intrinsic carrying-capacity growth and resource-ceiling oscillations when coupled to independent settlement and palaeoclimatic series [@peros2010prehistoric; @freeman2024model; @morrison2021mapping].

To isolate Phoenix Basin canal intensification from upland Puebloan nucleation and desert-river foraging, HU 15 is divided into four 5-arcminute areal masks totalling 5.107 active pixels (363.647 km²):

1. **Little Colorado and Hopi Mesas Plateau**: 2.175 cells (151.844 km², 41,8% of basin area), spanning northern Arizona, western New Mexico, southern Nevada and southern Utah canyon-and-mesa country from 33,88 to 39,21 degrees north and 108,04 to 115,62 degrees west.
2. **Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)**: 1.143 cells (82.713 km², 22,7% of basin area), spanning central Arizona and upper Gila-Mogollon tributaries from 31,38 to 35,79 degrees north and 109,21 to 113,12 degrees west.
3. **Santa Cruz, San Pedro and Cochise Highlands**: 694 cells (50.490 km², 13,9% of basin area), encompassing southern Arizona and southwestern New Mexico basin-and-range valleys from 31,38 to 33,96 degrees north and 107,79 to 114,04 degrees west.
4. **Lower Colorado Corridor and Western Sonoran Desert (Patayan and Yuman)**: 1.095 cells (78.600 km², 21,6% of basin area), extending along the lower Colorado and lower Gila desert plains from 32,04 to 35,96 degrees north and 111,88 to 115,29 degrees west.

## Canal-Command and Room-Count Calibration

Benchmark demographic totals across 23 intervals from 10000BC to 1600AD calibrate sub-regional radiocarbon curves against ethnographic carrying-capacity bounds [@ubelaker2006] and Southwest architectural demography [@hill2004southwest; @peros2010prehistoric; @adams2002homolovi]. Point-level population estimates across excavated towns follow the room-contemporaneity identity:

$$P_{\text{site}}(t) = R_{\text{mapped}} \times \rho_{\text{contemp}}(t) \times h_{\text{room}}$$

where $R_{\text{mapped}}$ is the excavated or surface-surveyed masonry or pithouse room count, $\rho_{\text{contemp}}(t)$ adjusts for active structural use within the chronological horizon and $h_{\text{room}}$ represents mean persons per active household room [@hill2004southwest; @adams2002homolovi].

In the Salt-Verde-Middle Gila Core, Hohokam village estimates integrate mapped courtyard-group and compound floor areas with irrigated canal-command hectares [@haury1976hohokam; @fish2007hohokam]. Major canal mains along the Lower Salt watered extensive alluvial terraces whose maintenance labour set upper bounds on local settlement density.

On the Little Colorado Plateau and Mogollon Rim, pueblo totals cross-check surface-mapped room blocks against cutting-date tree-ring construction phases [@robinson2021dendro; @hill2004southwest]. Where regional Southwest Social Networks registers assign standardised architectural class sizes without room-by-room excavation, sites enter under a regional modal tier ceiling (1.060 inhabitants) balanced inside sub-regional totals.

## Dasymetric Kriging and Uncertainty Bounds

Rural pixel allocation across HU 15's 5.107 active 5-arcminute cells draws on the continental North American kriging domain covering 493.687 valid terrestrial cells (18.561.382 km², with 129.716 to 133.990 active inhabited non-wasteland cells per horizon) across North America and Greenland. Compositing global p3k14c and c14bazAAR compilations with state archaeological registers and Southwest Social Networks (SWSN) site files, the domain aggregates 92.500 unique site-periods (166.545 horizon site records) across 3.832 domestic Voronoi catchments covering 15.517.215 km² (2.562 active inhabited catchments, 66,86%; equivalent circular radius $r = \sqrt{A/\pi}$ median 29,48 km and 90th percentile 41 km overall, 29,31 km and 39,86 km across active catchments), 14,15x above the 6.539 c14bazAAR baseline alone [@bird2022p3k14c; @kelly2022new].

Catchment counts $y_{i,h}$ in horizon $h$ undergo Freeman-Tukey variance stabilisation and Poisson-Gamma credibility smoothing before weighted least-squares (WLS) covariate regression and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging:

$$z_{i,h} = \sqrt{y_{i,h}} + \sqrt{y_{i,h} + 1}, \qquad C_h(u_{ij}) = \sigma_h^2 \left(1 + \frac{\sqrt{3}\, u_{ij}}{\tau_1}\right) \exp\!\left(-\frac{\sqrt{3}\, u_{ij}}{\tau_1}\right)$$

where $u_{ij}$ denotes dimensionless Voronoi geodesic lag and biophysical predictors incorporate natural-habitat index, ecological richness, 13,5 km fluvial distance decay and coastal proximity. To prevent border cliffs across the international Sonoran frontier and neighbouring United States watersheds, 251 cross-frontier buffer catchments condition neighbouring borderlands and adjacent basins up to 300 km beyond the CENTAUR boundary.

Across all ten horizons (13000BC to 1650AD), fitted North American variograms calibrate at regularised dimensionless short range $\tau_1 = 1,35$ across every horizon (raw 1,4834 to 1,6067, mean 1,5861; effective short range 44,17 km to 47,85 km, mean 47,23 km; $\tau_2 = 2,9025$), raw nugget-to-sill ratio 0 across all ten horizons (regularised 0,04), and WLS residual $R^2$ from 0,9991 to 0,9993. In arid HU 15, the 13,5 km fluvial decay covariate concentrates rural weights along perennial Salt, Gila, Verde, Santa Cruz, Little Colorado and Lower Colorado floodplains while attenuating hyper-arid creosote plains.

Because semi-arid smallholder cultivation and dense floodplain settlement remain highly sensitive to monsoon irregularity, drought clustering and waterborne or crowding-amplified infectious disease (processes documented in comparative semi-arid agro-ecological and multi-scale epidemiological analyses [@cano2023ecological; @guijosa2025impact; @eneyew2026wetland; @khumalo2025effect; @toboyee2026challenges; @zou2026health]), each sub-regional benchmark carries a symmetric $\pm 8\%$ structural uncertainty interval stamped in GMT+0.

<figure class="crd-table-figure" id="tab:subregions-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado and Hopi Mesas Plateau</strong></td><td class="crd-td">2.175</td><td class="crd-td">151.844</td><td class="crd-td">33,88-39,21N, 108,04-115,62W</td><td class="crd-td">1100AD (49k)</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">1.143</td><td class="crd-td">82.713</td><td class="crd-td">31,38-35,79N, 109,21-113,12W</td><td class="crd-td">1200AD (65k)</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro and Cochise Highlands</strong></td><td class="crd-td">694</td><td class="crd-td">50.490</td><td class="crd-td">31,38-33,96N, 107,79-114,04W</td><td class="crd-td">1100AD (28,5k)</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor and Western Sonoran Desert (Patayan and Yuman)</strong></td><td class="crd-td">1.095</td><td class="crd-td">78.600</td><td class="crd-td">32,04-35,96N, 111,88-115,29W</td><td class="crd-td">1100AD (16,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Arizona HU 15.</figcaption>
</figure>

# Testing and Validation

Four independent checks govern the chronometric alignment, structural collapse and ledger reconciliation of the Arizona HU 15 reconstruction:

1. **Radiocarbon and Dendrochronological Alignment**: The basin peak of 156,9k in 1100AD falls within 22 years of the Kelly et al. HU 15 radiocarbon median peak of 1078AD (872 cal BP) [@kelly2025]. Furthermore, tree-ring cutting dates and ceramic seriation counts examined by Robinson et al. and Anyon et al. show that late prehistoric population decline across Arizona and western New Mexico accelerated sharply after 1200AD rather than representing an artefact of archaeologists switching from radiocarbon to dendrochronology [@robinson2021dendro; @anyon2017mimbres; @hill2004southwest].
2. **Hohokam Classic Contraction Check**: Sub-regional decomposition captures the Salt-Verde-Middle Gila peak at 1200AD (65k) followed by a 46,7% contraction between 1300AD (60k) and 1400AD (32k, or -50,8% from 1200AD to 1400AD). That drop matches geomorphological evidence of destructive channel-incising floods on the Salt and Gila rivers, progressive soil salinisation, regional megadroughts and crowding-related infectious mortality inside platform-mound compounds [@hill2004southwest; @phillips2018village; @fish2007hohokam; @cook2013megadroughts; @lima2023years; @zou2026health].
3. **Variogram and Catchments Calibration**: Across the 92.500 unique site-periods (166.545 horizon site records) and 3.832 domestic catchments (2.562 active) of the North American surface (14,15x legacy 6.539 baseline), all ten horizons (13000BC to 1650AD) calibrate at regularised $\tau_1 = 1,35$ (<= 1,8; raw 1,4834 to 1,6067, mean 1,5861; effective short range 44,17 km to 47,85 km, mean 47,23 km), $\tau_2 = 2,9025$, raw nugget-to-sill ratio 0 across all ten horizons (regularised 0,04), and WLS residual $R^2$ from 0,9991 to 0,9993 (Table \ref{tab:kriging-arizona}).
4. **Gazetteer and Source-Ledger Reconciliation**: Cross-checking the settlement inventory against the archival source ledger records 588 included habitation settlements spanning 1.936 benchmark observations (3,29 mean per site, 487 with 3 or more entries, 9500BC to 1600AD) across all four sub-regions (316 on the Little Colorado Plateau, 191 in the Salt-Verde-Middle Gila Core, 60 in the Santa Cruz-San Pedro-Cochise Highlands and 21 along the Lower Colorado Sonoran corridor) alongside 736 excluded records (731 duplicate-alias consolidations within 2 km and 5 unquantified non-habitation cave contexts), accounting for all 1.324 candidates with zero missing rows. Early desert camps such as Tule Springs (9500BC to 6000BC, 30 peak) and Tinajas Altas (1000BC to 1100AD, 35 peak) alongside Cibola Spring (1250AD to 1325AD, 240 peak) sit inside the 588-site inventory.

<figure class="crd-table-figure" id="tab:kriging-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">WLS R²</th><th class="crd-th">Mean</th><th class="crd-th">99th Pct</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0224</td><td class="crd-td">0,283</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0446</td><td class="crd-td">0,521</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,074</td><td class="crd-td">0,829</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0659</td><td class="crd-td">0,706</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland (Hopewell)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1178</td><td class="crd-td">1,315</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1431</td><td class="crd-td">1,636</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian (Pueblo II)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1993</td><td class="crd-td">2,128</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian (Pueblo III)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,2131</td><td class="crd-td">2,242</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule and Oneota)</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,207</td><td class="crd-td">2,256</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,1612</td><td class="crd-td">1,81</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> North American Matérn variogram parameters and kriged density moments across ten Holocene horizons.</figcaption>
</figure>

# Results

## Long-Term Basin Trajectory

Population across Arizona HU 15 expanded steeply across the Holocene before contracting sharply during the fourteenth century (Figure \ref{fig:trajectory-arizona} and Table \ref{tab:trajectory-arizona}). At 10000BC, small mobile foraging bands totalled 800 inhabitants (736 to 864, or 0,22 persons per 100 km²), rising to 1,65k in 9000BC, 3,1k in 8000BC, 5,25k in 7000BC, 8,5k in 6000BC and 13,1k (12,1k to 14,1k, 3,6 per 100 km²) in 5000BC.

Early floodplain maize cultivation in the southern Arizona desert lifted numbers to 19,2k in 4000BC, 27,3k in 3000BC, 38,5k (35,4k to 41,6k, 10,59 per 100 km²) by 2000BC and 53,4k by 1000BC [@hill2004southwest; @peros2010prehistoric]. Over that mid-Holocene span, the basin doubled roughly every two millennia as floodwater farming supplemented seasonal desert gathering.

Sedentary pithouse farming and early canal construction pushed basin population to 72,7k (66,9k to 78,5k, 19,99 per 100 km²) at 0AD, 86,6k in 200AD, 101,5k in 400AD (27,91 per 100 km²), 118,3k in 600AD and 135,4k (124,6k to 146,2k, 37,23 per 100 km²) in 800AD [@haury1976hohokam]. Continued canal expansion across the Phoenix Basin and Pueblo II aggregation on the northern plateau carried HU 15 through 148,5k in 1000AD to its all-time pre-contact zenith of 156,9k (144,3k to 169,5k, 43,15 persons per 100 km²) in 1100AD [@fish2007hohokam].

Between 1100AD and 1200AD, total numbers edged down only slightly to 153,3k (42,16 per 100 km²) as Classic Hohokam growth (65k) compensated for early plateau adjustments. After 1200AD, however, severe multi-decadal droughts across the Colorado Plateau (1276AD to 1299AD) and hydraulic failure in the Phoenix Basin accelerated regional decline: HU 15 fell to 135,3k in 1300AD and dropped 28,01% over the next century to 97,4k (89,6k to 105,2k, 26,78 per 100 km²) in 1400AD [@cook2013megadroughts; @robinson2021dendro].

By 1500AD, basin population stood at 88,5k (24,34 per 100 km²), dipping to 82,3k in 1550AD and 76k (69,9k to 82,1k, 20,9 per 100 km²) in 1600AD. In spite of a 51,6% cumulative drop from the 1100AD peak, HU 15 remained far more densely settled than neighbouring Great Basin (16,77 per 100 km²) or Northern Plains (13,51 per 100 km²) units on the eve of sustained European contact, anchored by Hopi and Zuni mesa towns, Akimel O'odham river villages and Lower Colorado Yuman floodplains [@adams2002homolovi; @phillips2018village].

<figure class="crd-figure-block" id="fig:trajectory-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona/fig2_arizona_trajectory.png" alt="fig:trajectory-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Arizona HU 15 from 10000BC to 1600AD, with shaded 8 per cent uncertainty interval.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado and Hopi Mesas Plateau</strong></td><td class="crd-td">250</td><td class="crd-td">3,9k</td><td class="crd-td">20k</td><td class="crd-td">29k</td><td class="crd-td">41k</td><td class="crd-td">49k</td><td class="crd-td">37k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">200</td><td class="crd-td">3,8k</td><td class="crd-td">26k</td><td class="crd-td">38k</td><td class="crd-td">53k</td><td class="crd-td">63k</td><td class="crd-td">60k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro and Cochise Highlands</strong></td><td class="crd-td">200</td><td class="crd-td">3,1k</td><td class="crd-td">16,5k</td><td class="crd-td">21,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">23,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor and Western Sonoran Desert (Patayan and Yuman)</strong></td><td class="crd-td">150</td><td class="crd-td">2,3k</td><td class="crd-td">10,2k</td><td class="crd-td">13k</td><td class="crd-td">15,4k</td><td class="crd-td">16,4k</td><td class="crd-td">14,8k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Arizona HU 15 Total</strong></td><td class="crd-td">800</td><td class="crd-td">13,1k</td><td class="crd-td">72,7k</td><td class="crd-td">101,5k</td><td class="crd-td">135,4k</td><td class="crd-td">156,9k</td><td class="crd-td">135,3k</td><td class="crd-td">76k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series by sub-region in Arizona HU 15, 10000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition and Ecological Zones

Hydraulic intensification in central Arizona repeatedly reshaped the sub-regional balance across HU 15 (Figure \ref{fig:shares-arizona} and Table \ref{tab:density-arizona}). Despite occupying 22,7% of basin area (82.713 km²), the Salt-Verde-Middle Gila Core expanded from 25% of basin inhabitants in 10000BC (200 of 800) to 35,8% at 0AD (26k of 72,7k), 40,2% in 1100AD (63k), 42,4% in 1200AD (65k of 153,3k) and 44,3% in 1300AD (60k of 135,3k) before plunging back to 28,9% (22k of 76k) in 1600AD.

### Little Colorado and Hopi Mesas Plateau

Covering 151.844 km² (41,8% of HU 15), the northern plateau grew steadily from 250 in 10000BC (0,16 per 100 km²) and 3,9k in 5000BC to 20k at 0AD (13,17) and 41k in 800AD. Basketmaker and Pueblo I-II dryland maize farming carried the plateau to its 1100AD peak of 49k (32,27 per 100 km², 31,2% share), anchored by Hopi, Zuni, Petrified Forest and Wupatki settlement clusters [@adams2002homolovi; @gillreathbrown2019geospatial].

Late thirteenth-century droughts drove abandonment of marginal canyon uplands, lowering plateau numbers to 37k in 1300AD and 32k in 1400AD. Yet aggregated Pueblo IV towns at Orayvi (2,1k), Hawikku (1,65k), Homol'ovi (1,45k), Halona:wa (1,25k), Awatovi (1,2k) and Mats'a:kya (1,15k) preserved 31k inhabitants in 1500AD and 27k (17,78 per 100 km², 35,5% of HU 15) in 1600AD across 316 catalogued sites (53,7% of the basin gazetteer) [@adams2002homolovi].

### Salt-Verde-Middle Gila Core

Covering 82.713 km² (22,7% of HU 15), the Phoenix Basin and Mogollon Rim slopes achieved the highest sustained population density in the American Southwest. Numbers climbed from 200 in 10000BC (0,24 per 100 km²) and 3,8k in 5000BC to 26k at 0AD (31,43 per 100 km²) as early canal pioneers expanded floodplain agriculture [@haury1976hohokam].

Between 400AD and 1200AD, expansion of Pioneer, Colonial, Sedentary and early Classic canal networks lifted the Phoenix Basin core from 38k in 400AD to 53k in 800AD, 63k in 1100AD and its peak of 65k (78,58 persons per 100 km², 42,4% of HU 15) in 1200AD [@fish2007hohokam]. Across 191 catalogued settlements (32,5% of HU 15), premier centres shifted from Sedentary S-Kiukchu'k (3,2k in 1000AD) to Classic Pueblo Grande (3,1k in 1300AD), Sivan Vah'ki (2,6k in 1300AD), Los Muertos (1,4k in 1350AD), Los Morteros-Point of Pines (1,35k in 1200AD) and upland Grasshopper Pueblo (1,1k in 1300AD).

Following catastrophic fourteenth-century floods, channel incision, canal salinisation and dense compound crowding, the Salt-Verde-Middle Gila Core plunged by 46,7% between 1300AD (60k) and 1400AD (32k). By 1500AD population stood at 26k and eased to 22k (26,6 per 100 km², 28,9% of HU 15) in 1600AD across Akimel O'odham riverine settlements [@hill2004southwest; @phillips2018village].

### Santa Cruz, San Pedro and Cochise Highlands

Encompassing 50.490 km² (13,9% of HU 15) across southern Arizona and the upper Gila-Mimbres divide, this basin-and-range corridor combined productive summer alluvial runoff with foothill *Agave* cultivation and upland Mogollon village farming [@hill2004southwest; @cano2023ecological]. Rising from 200 in 10000BC (0,4 per 100 km²) and 3,1k in 5000BC to 16,5k at 0AD (32,68 per 100 km²), Woodland-era farming lifted the sub-region to 26k in 800AD and its peak of 28,5k (56,45 per 100 km²) in 1100AD.

Subsequent droughts and Mimbres-Salado reorganisations reduced numbers to 23,5k in 1300AD, 19,5k in 1400AD and 15k (29,71 per 100 km², 19,7% share) in 1600AD, documented across 60 catalogued settlements (10,2% of HU 15) led by 3-Up, Apache Creek Pueblo, Boss Ranch, Dinwiddie, Foote Canyon Pueblo, Gila Cliff Dwellings, Mogollon Village, Ormand Village and SU Site (1,06k architectural tier) alongside early Tinajas Altas (35) [@anyon2017mimbres; @nichols2019violence].

### Lower Colorado Corridor and Western Sonoran Desert

Spanning 78.600 km² (21,6% of HU 15) across hyper-arid western Arizona and southeastern California, the Lower Colorado sub-region relied on annual Colorado River snowmelt flood recession and lower Gila irrigation rather than high-plateau dry farming. Population grew from 150 in 10000BC (0,19 per 100 km²) and 2,3k in 5000BC to 10,2k at 0AD (12,98 per 100 km²), 15,4k in 800AD and a peak of 16,4k (20,87 per 100 km², 10,5% share) in 1100AD.

Because mainstem Colorado River floods depended on distant Rocky Mountain snowpack rather than local Sonoran rainfall, Patayan-Yuman floodplain villages weathered fourteenth-century plateau droughts with minimal demographic collapse. Population remained steady at 14,8k in 1300AD, 13,9k in 1400AD, 13,5k in 1500AD and 12k (15,27 per 100 km², 15,8% share) in 1600AD across 21 catalogued settlements (3,6% of HU 15) led by Fitzmaurice Ruin, Gatlin Site, Palo Verde Ruin and Van Liere Ruin (1,06k tier), Gillespie Dam (1.013) and Patayan-Mohave river towns at Needles (Mohave) (620).

<figure class="crd-table-figure" id="tab:density-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">0AD</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado and Hopi Mesas Plateau</strong></td><td class="crd-td">0,16</td><td class="crd-td">13,17</td><td class="crd-td">27</td><td class="crd-td">29,64</td><td class="crd-td">17,78</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">0,24</td><td class="crd-td">31,43</td><td class="crd-td">64,08</td><td class="crd-td">78,58</td><td class="crd-td">26,6</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro and Cochise Highlands</strong></td><td class="crd-td">0,4</td><td class="crd-td">32,68</td><td class="crd-td">51,5</td><td class="crd-td">54,47</td><td class="crd-td">29,71</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor and Western Sonoran Desert (Patayan and Yuman)</strong></td><td class="crd-td">0,19</td><td class="crd-td">12,98</td><td class="crd-td">19,59</td><td class="crd-td">20,1</td><td class="crd-td">15,27</td></tr>
<tr><td class="crd-td"><strong>Arizona HU 15 Total</strong></td><td class="crd-td">0,22</td><td class="crd-td">19,99</td><td class="crd-td">37,23</td><td class="crd-td">42,16</td><td class="crd-td">20,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population density (persons per 100 km²) across Arizona HU 15 at selected Holocene benchmarks.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona/fig3_arizona_shares.png" alt="fig:shares-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Arizona HU 15 from 10000BC to 1600AD.</figcaption>
</figure>

## Settlement Hierarchy and Modal Tier Structure

The 588 catalogued settlements (1.936 benchmark entries across 9500BC to 1600AD) span five states (417 in Arizona, 148 in New Mexico, 14 in Nevada, 6 in Utah and 3 in California; Table \ref{tab:coverage-arizona}). Only 5 sites originate before 0AD, while 482 enter between 0AD and 999AD and 101 begin at 1000AD or later, reflecting explosive early ceramic village proliferation. Individual site peaks range from 30 at Tule Springs to 3.200 at S-Kiukchu'k (1000AD) and 3.100 at Pueblo Grande (1300AD), with a median peak of 312,5 residents.

Thirteen premier centres exceed 1,06k inhabitants: S-Kiukchu'k (3,2k), Pueblo Grande (3,1k), Sivan Vah'ki (2,6k), Orayvi (2,1k), Hawikku (1,65k), Homol'ovi (1,45k), Los Muertos (1,4k), Los Morteros-Point of Pines (1,35k), Halona:wa (1,25k), Awatovi (1,2k), Chaves Pass (1,15k), Mats'a:kya (1,15k) and Grasshopper Pueblo (1,1k).

Directly below those 13 top sites sits a horizontal shelf of 112 settlements benchmarked at a 1.060-person regional architectural class modal tier (including Babocomari Village, Bailey Ruin, Bass Point Mound, Broken K Pueblo, Escalante, Gila Cliff Dwellings, Grand Canal, Los Morteros, Tumamoc Hill and Wupatki), above a smooth long-tail distribution of 463 smaller pueblos, pithouse hamlets and desert camps down to 30 inhabitants. By 1600AD, 352 catalogued entries retain terminal benchmark values (87,58k unadjusted sum across cross-border and regional registers), reflecting the lasting imprint of Southwest Puebloan aggregation on late prehistoric population surfaces.

<figure class="crd-table-figure" id="tab:coverage-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Pre-0AD</th><th class="crd-th">1000AD+</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado and Hopi Mesas Plateau</strong></td><td class="crd-td">316</td><td class="crd-td">53,7%</td><td class="crd-td">1.058</td><td class="crd-td">1</td><td class="crd-td">60</td><td class="crd-td">Orayvi (2,1k)</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">191</td><td class="crd-td">32,5%</td><td class="crd-td">626</td><td class="crd-td">3</td><td class="crd-td">29</td><td class="crd-td">S-Kiukchu'k (3,2k)</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro and Cochise Highlands</strong></td><td class="crd-td">60</td><td class="crd-td">10,2%</td><td class="crd-td">194</td><td class="crd-td">1</td><td class="crd-td">6</td><td class="crd-td">3-Up (1,1k)</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor and Western Sonoran Desert (Patayan and Yuman)</strong></td><td class="crd-td">21</td><td class="crd-td">3,6%</td><td class="crd-td">58</td><td class="crd-td">0</td><td class="crd-td">6</td><td class="crd-td">Fitzmaurice Ruin (1,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 588 catalogued settlements, observations, chronological starts and leading sites across HU 15 sub-regions.</figcaption>
</figure>

Across jurisdictions (Table \ref{tab:states-arizona}), Arizona (70,9% of sites) and western New Mexico (25,2% of sites) jointly account for 96,1% of the catalogued settlements in HU 15, reflecting the dense overlap of Hohokam canal districts and Upper Gila-Zuni Puebloan heartlands, while southeastern Nevada (2,4%), southern Utah (1%) and eastern California (0,5%) add peripheral Colorado River and Virgin-Muddy tributaries.

<figure class="crd-table-figure" id="tab:states-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">State</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Site (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arizona</strong></td><td class="crd-td">417</td><td class="crd-td">70,9%</td><td class="crd-td">1.352</td><td class="crd-td">S-Kiukchu'k (3,2k)</td></tr>
<tr><td class="crd-td"><strong>New Mexico</strong></td><td class="crd-td">148</td><td class="crd-td">25,2%</td><td class="crd-td">522</td><td class="crd-td">Hawikku (1,6k)</td></tr>
<tr><td class="crd-td"><strong>Nevada</strong></td><td class="crd-td">14</td><td class="crd-td">2,4%</td><td class="crd-td">39</td><td class="crd-td">Overton Muddy Delta Center (1k)</td></tr>
<tr><td class="crd-td"><strong>Utah</strong></td><td class="crd-td">6</td><td class="crd-td">1%</td><td class="crd-td">13</td><td class="crd-td">Three Mile Ruin (967)</td></tr>
<tr><td class="crd-td"><strong>California</strong></td><td class="crd-td">3</td><td class="crd-td">0,5%</td><td class="crd-td">10</td><td class="crd-td">Needles (Mohave) (620)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Jurisdictional distribution of the 588 catalogued settlements across the five states intersecting Arizona HU 15.</figcaption>
</figure>

# Limitations

Five methodological limitations apply to Arizona HU 15. First, CARD radiocarbon locations in Arizona are coarsened to 1x1-degree grid cells for statutory heritage protection, limiting sub-degree spatial discrimination inside rugged mountain canyons [@kelly2025]. Without finer-resolution SHPO polygon releases, within-square rural kriging weights depend heavily on the 13,5 km fluvial decay and slope covariates.

Second, widespread replacement of radiocarbon dating by tree-ring and painted-pottery seriation after 1100AD depresses raw late-precontact radiocarbon counts unless cross-checked against architectural room sequences [@robinson2021dendro; @anyon2017mimbres]. Combined dendro-radiocarbon calibration resolves the timing of decline, yet leaves pre-1000AD pit-structure phases better sampled by radiocarbon than fourteenth-century adobe rooms.

Third, major Salt-Gila canal towns such as Pueblo Grande and Los Muertos sit beneath modern Phoenix metropolitan construction, restricting excavation of outer pithouse residential rings [@fish2007hohokam]. Salvage highway and urban-redevelopment corridors provide dense snapshots along mainstem canals while leaving distal agricultural field zones less evenly sampled.

Fourth, 112 mid-sized Southwest sites in the 588-site inventory share a standardised 1.060-inhabitant regional tier ceiling derived from multi-site SWSN architectural scaling, compressing finer site-to-site variance between ranks 14 and 125. Disaggregating those sites into site-specific room counts will sharpen upper-rank hierarchy resolution in future revisions.

Fifth, ephemeral Akimel O'odham (Pima), Tohono O'odham and Lower Colorado Yuman ranchería settlements between 1450AD and 1600AD occupied shallow brush structures on active river channels that leave far sparser structural footprints than Classic Period adobe compounds [@hill2004southwest]. Consequently, post-collapse carrying capacities rely more heavily on ethnographic flood-recession yields and regional continuity priors than on standing masonry architecture.

# Conclusion

Arizona Hydrological Unit 15 captures the rise and structural reorganisation of North America's most intensive desert hydraulic economy. Driven by Hohokam gravity canal networks in the Salt-Verde-Middle Gila Core (where density crested at 78,58 persons per 100 km², 65k in 1200AD) alongside Puebloan dryland and spring-fed aggregation across the Little Colorado Plateau, total HU 15 population expanded to 156,9k in 1100AD before flood disruption, megadroughts and infectious crowding reduced numbers to 76k in 1600AD.

Three demographic contrasts define the basin trajectory. First, hydraulic concentration allowed just over a fifth of HU 15's land area (22,7%) to sustain 44,3% of its inhabitants by 1300AD, before hydraulic fragility reversed that concentration inside a single century (-46,7% by 1400AD). Second, northern plateau consolidation at Hopi and Zuni (Orayvi, Hawikku, Halona:wa, Awatovi) alongside flood-recession farming along the Lower Colorado cushioned basin-wide losses after 1350AD.

Third, coupling N = 2.116 calibrated radiocarbon dates with 92.500 multi-registry North American site-periods (3.832 domestic catchments, 2.562 active, 14,15x legacy baseline; regularised $\tau_1 = 1,35$, mean effective short range 47,23 km, regularised nugget-to-sill 0,04, $R^2$ from 0,9991 to 0,9993) and 588 reconciled settlements (1.324 candidates) resolves both the Salt-Gila Classic collapse and the long-term resilience of plateau and Yuman riverine towns down to contact.

# Sources

<div id="refs"></div>
