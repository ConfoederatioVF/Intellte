---
title: "Ohio River Hydrological Unit (HU 05)"
subtitle: "CENTAUR-II: Adena-Hopewell Monumental Cores, Fort Ancient and Cumberland-Wabash, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ohio_river_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ohio_river_spatial.png"
hero_caption: "Sub-regional areal masks and 120 settlements across the Ohio River Hydrological Unit (424.096 km²) from the Allegheny Plateau to the Wabash-Ohio confluence, 10000BC to 1600AD."
hero_label: "fig:hero-ohio-river"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This chapter reconstructs the pre-Columbian demographic trajectory of the Ohio River Hydrological Unit (USGS HU 05) across 424.096 km² (6.321 five-arcminute cells) from 10000BC to 1600AD. Anchored to Kelly et al. [@kelly2025] radiocarbon summed probability curves (N = 1.828 terrestrial dates, median peak 1295AD), non-stationary Matérn ($\nu = 3/2$) kriging over the continental North American prior (`sites_northern_america`: 93.358 unique site-periods across 4.457 domestic catchments, 14,12x the global radiocarbon database baseline, $\tau_1 = 1,41$, raw nugget 0, regularised nugget-to-sill 0,04 and $R^2 = 0,999$), Adena-Hopewell earthwork inventories [@dancey1997; @charles2006], Fort Ancient village sequences [@comstock2018; @cook2017] and Vacant Quarter abandonment studies [@cobb2002; @cobb2023], HU 05 is divided into four watershed sub-regions enclosing 120 catalogued settlements (121 candidates in `ohio_river_source_ledger.json5`, 1 excluded duplicate alias).

Basin population expands from 950 inhabitants (874-1.026) in 10000BC to 26,3k in 5000BC, 81,8k in 2000BC and 142k (130,6k-153,4k) at 0AD. Numbers climb through Middle Woodland Hopewell aggregation (162k at 200AD; 0,382 persons/km²) and reach a Holocene apex of 264k (242,9k-285,1k; 0,623 persons/km²) in 1300AD as drought-era migrants from Cahokia and the American Bottom reinforce Lower Ohio, Angel and Fort Ancient centres [@benson2009; @comstock2018].

Fourteenth-century Vacant Quarter abandonment reduces aggregate numbers by 26,1% to 195k in 1400AD, led by steep contraction across the Wabash-White-Lower Ohio (down 39,5% to 39k) and Kentucky-Cumberland-Green (down 28,5% to 49k) divisions [@cobb2002; @cobb2023; @hilgeman2000]. Upper Ohio, Monongahela and Caborn-Welborn communities buffer part of the basin decline through the fifteenth century, leaving 176k (161,9k-190,1k) in 1500AD and 151k (138,9k-163,1k; 0,356 persons/km²) by 1600AD prior to seventeenth-century Haudenosaunee Beaver Wars disruption [@milner2010; @ubelaker2006].

# Background

USGS Hydrological Unit 05 drains the unglaciated Appalachian Plateau, the Lexington-Nashville limestone basins and the Wisconsinan Till Plains from western New York and Pennsylvania along the Allegheny, Monongahela, Kanawha, Scioto, Little Miami, Great Miami, Kentucky, Green, Cumberland and Wabash rivers to the Mississippi confluence near Cairo, Illinois.

Physiographic contrast shaped every stage of Holocene settlement. Broad gravel terraces along the Scioto and Miami rivers supported dense Early and Middle Woodland ritual landscapes, karstic shoals along the Green and Cumberland rivers sustained persistent Archaic shell-midden camps and Mississippian farming towns, and dissected sandstone uplands of the upper basin hosted stockaded Late Prehistoric Monongahela rings [@dancey1997; @charles2006; @cook2017].

Earlier broad-scale continental grids flattened the Ohio drainage into an undifferentiated Eastern Woodlands zone, blurring two sharp structural contrasts that emerge in the archaeological record. First, the basin did not peak in step with the American Bottom. Using 1.828 screened radiocarbon dates across HU 05, Kelly et al. [@kelly2025] place the basin-wide median peak at 1295AD, nearly two centuries after the Upper Mississippi peak at 1107AD.

Palaeoclimatic and isotopic evidence indicates that more reliable summer precipitation across the Ohio valley during the twelfth and thirteenth centuries drew emigrating groups out of drought-stressed Cahokia and central Illinois [@benson2009; @comstock2018]. Incoming populations fused with indigenous Late Woodland and Fort Ancient communities, sustaining Angel, Mound Bottom, Castalian Springs and Madisonville through the thirteenth century [@hilgeman2000; @cook2017].

Second, archaeological visibility across HU 05 varies sharply with soil chemistry, quarry-preservation history and agricultural clearance. Acidic upland soils on the Allegheny Plateau destroy uncalcined bone and shell much faster than alkaline Green River shell middens or limestone-tempered Fort Ancient pit fills, while nineteenth-century ploughing erased low earthen embankments across the Till Plains before antiquarian mapping began [@dancey1997].

Long-term Indigenous orchard management, fire-maintained woodland openings and floodplain clearance also left persistent ecological signatures across Appalachian and Piedmont margins that later structured colonial Euro-American farmsteads [@coughlan2018influences]. Interpreting site-count curves therefore requires separating genuine demographic growth from changes in residential mobility, maize field exhaustion and taphonomic filtering [@hart2020using; @gillreathbrown2018experimental].

## Palaeoclimate, Maize Horticulture and Demographic Turning Points

Between 10000BC and 4000BC, post-glacial oak-hickory forest expansion turned the Ohio valley into one of eastern North America's richest mast and deer corridors. Early Palaeoindian occupations at `Paleo Crossing` in northeastern Ohio and stratified deposits at `Meadowcroft Rockshelter` in southwestern Pennsylvania document low-density mobile foraging groups moving along glacial outwash terraces and upland sandstone overhangs.

During the Middle and Late Archaic (`5000BC-1000BC`), warm mid-Holocene Hypsithermal conditions lowered river stages along the Green and middle Ohio channels. Concentrated freshwater mussel beds and spawning shoals supported multi-century base camps such as `Indian Knoll`, `Carlston Annis` and `Chiggerville`.

From roughly 500BC onwards, Eastern Agricultural Complex seed crops - goosefoot (*Chenopodium berlandieri*), marshelder (*Iva annua*), erect knotweed and squash - underpinned Adena burial mounds and the monumental geometric enclosures of the Scioto-Miami Hopewell core (`0AD-400AD`) [@dancey1997; @charles2006].

Hopewell population density along the central Scioto and Little Miami terraces rose well above surrounding upland plateaus, though monumental plaza maintenance relied on dispersed hamlets rather than compact urban towns. Earthwork construction drew labour from scattered valley clusters across tens of kilometres.

Following the fourth-century cessation of geometric earthwork construction, Late Woodland communities shifted toward smaller nucleated villages as tropical maize (*Zea mays*) entered regional diets alongside existing starchy seeds [@cook2017]. By 1000AD to 1200AD, intensive maize-bean-squash agriculture transformed both valley demography and political geography.

Isotopic nitrogen studies of fifteenth- and sixteenth-century northeastern Iroquoian maize fields show how sustained cropping depleted upland soils and drove periodic village relocations every one to three decades [@hart2020using]. Across the Fort Ancient and Monongahela zones of HU 05, similar swidden cycles multiplied the raw number of late prehistoric village footprints relative to contemporaneous population size unless village-duration weights are explicitly controlled [@cook2017; @comstock2018].

Around major Mississippian centres along the lower Ohio and Cumberland, heavy fuelwood harvesting and field clearing also altered local woodland structure in ways comparable to catchment strain documented around other dense pre-contact North American centres [@lentz2021ecosystem].

After 1350AD, climatic instability during the onset of the Little Ice Age combined with escalating inter-village warfare and palisade fortification [@krus2016] to trigger the Vacant Quarter abandonment along the lower Ohio, Wabash and lower Cumberland rivers [@cobb2002; @cobb2023]. Lower valley centres emptied rapidly between 1350AD and 1425AD, leaving only localised Caborn-Welborn farming clusters (`Slack Farm`, `Hovey Lake`, `Murphy`, `Welborn`, `Bone Bank`) near the Wabash-Ohio mouth after 1400AD.

By contrast, Fort Ancient towns (`Madisonville`, `Hardin Village`, `Buffalo`, `Clover`) and upper Ohio Monongahela rings (`Johnston Site`, `Campbell Farm`, `McJunkin`, `Foley Farm`) persisted past 1500AD until indirect European trade-network pathogens and peripheral raiding depressed numbers to 151k by 1600AD [@milner2010; @ubelaker2006].

# Methodology

## Sub-Regional Partitioning and Areal Masks

CENTAUR-II partitions HU 05 on the global 4320x2160 five-arcminute WGS84 grid (`6.321` active land pixels covering `424.096 km²`) into four hydrologically and culturally coherent sub-regions encoded in `ohio_river_areal_mask.png` and `ohio_river.json5`.

1. **Allegheny, Monongahela and Kanawha-Upper Ohio Plateau** (`oh_upper_ohio_allegheny_kanawha`, `150.686 km²`, `2.263` pixels, `35,53%` of basin area, `36` catalogued settlements): Drains the dissected Appalachian Plateau across western Pennsylvania, western New York, eastern Ohio and West Virginia, uniting Adena tumuli (`Grave Creek Mound`, `South Charleston Mound`), `Marietta Earthworks`, Monongahela circular villages (`Johnston Site`, `Campbell Farm`, `Ryan`, `Gnagey`, `Peck No. 2`, `Foley Farm`) and protohistoric Fort Ancient towns (`Buffalo`, `Clover`).
2. **Scioto, Little and Great Miami Valleys** (`oh_scioto_miami_hopewell_core`, `59.877 km²`, `901` pixels, `14,12%` of basin area, `35` catalogued settlements): Covers the glaciated Till Plains and central Scioto-Miami alluvial corridors of southern Ohio and southeastern Indiana, enclosing Adena-Hopewell earthworks (`Newark Earthworks`, `Hopewell Mound Group`, `Seip Earthworks`, `Mound City`, `Fort Ancient`, `Portsmouth Earthworks`, `Harness Mound Group`, `Circleville Earthworks`) and Fort Ancient agricultural villages (`Madisonville`, `Hardin Village`, `SunWatch`, `Feurt`, `Baum`, `Gartner`).
3. **Cumberland, Kentucky and Green River Valleys** (`oh_kentucky_cumberland_green`, `143.882 km²`, `2.108` pixels, `33,93%` of basin area, `44` catalogued settlements): Spans the Kentucky Bluegrass, Green River shell-mound corridor, Nashville Basin and lower Ohio-Indiana bank, uniting Late Archaic middens (`Indian Knoll`, `Carlston Annis`, `Chiggerville`, `Ward`), Middle Woodland `Mann Site`, Middle Cumberland Mississippian towns (`Mound Bottom`, `Castalian Springs`, `Noel Farm`, `Rutherford-Kizer`, `Averbuch`, `Gordontown`, `Sellars`), `Angel Mounds` and post-1400AD Caborn-Welborn villages (`Slack Farm`, `Hovey Lake`, `Murphy`, `Welborn`, `Bone Bank`).
4. **Wabash-White Basins and Lower Ohio Confluence** (`oh_wabash_white_lower_ohio_kincaid`, `69.651 km²`, `1.049` pixels, `16,42%` of basin area, `5` catalogued settlements): Encompasses the Wabash and White river plains of Indiana and eastern Illinois, linking Middle Woodland `Mounds State Park`, Allison-La Motte `Daugherty-Monroe`, Oliver-phase `Strawtown Enclosure`, `Morell-Sheets` and late precontact Wabash-Tippecanoe `Kethtippecanunk`.

<figure class="crd-table-figure" id="tab:oh-structure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Area Share</th><th class="crd-th">Sites</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Peak Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Upper Ohio, Allegheny &amp; Kanawha</strong></td><td class="crd-td">150.686</td><td class="crd-td">35,53%</td><td class="crd-td">36</td><td class="crd-td">72,5k (1300AD)</td><td class="crd-td">0,481</td></tr>
<tr><td class="crd-td"><strong>2. Scioto &amp; Miami Valleys</strong></td><td class="crd-td">59.877</td><td class="crd-td">14,12%</td><td class="crd-td">35</td><td class="crd-td">58,5k (1300AD)</td><td class="crd-td">0,977</td></tr>
<tr><td class="crd-td"><strong>3. Cumberland, Kentucky &amp; Green</strong></td><td class="crd-td">143.882</td><td class="crd-td">33,93%</td><td class="crd-td">44</td><td class="crd-td">68,5k (1300AD)</td><td class="crd-td">0,476</td></tr>
<tr><td class="crd-td"><strong>4. Wabash-White &amp; Lower Ohio</strong></td><td class="crd-td">69.651</td><td class="crd-td">16,42%</td><td class="crd-td">5</td><td class="crd-td">64,5k (1300AD)</td><td class="crd-td">0,926</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal geometry, catalogued settlement counts and peak demographic densities in Ohio River (HU 05).</figcaption>
</figure>

## Multi-Registry Radiocarbon Kriging and Benchmark Calibration

Rural spatial weights inside HU 05 are drawn directly from the continental `sites_northern_america` substrata prior. That composite aggregates global radiocarbon syntheses (`p3k14c` [@bird2022p3k14c] and `c14bazAAR`), the Canadian Archaeological Radiocarbon Database, United States state archaeological site registers and regional CRM surveys into `93.358` unique site-period observations.

Observations are grouped across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments, median radius `27,36 km`, 90th percentile `59,92 km`) plus `171` cross-frontier buffer catchments extending `300 km` outside the macro-region boundary, representing `14,12x` the global radiocarbon database baseline inside North America [@kelly2022; @crema2021].

Catchment site densities undergo Freeman-Tukey variance stabilisation, macro-tile log-variance regularisation and 1-ring Poisson-Gamma credibility smoothing before weighted least-squares (WLS) covariate regression and 2D Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across ten Holocene horizons (`10000BC` to `1600AD`).

Biophysical covariates incorporate habitable fraction, terrain slope, coastal proximity and `13,5 km` exponential fluvial decay, capturing dense alluvial settlement corridors along the Scioto, Wabash, Green and Cumberland terraces while preventing artificial density cliffs across the watershed divide with HU 06 (Upper Mississippi), HU 04 (Great Lakes), HU 02 (Mid-Atlantic) and HU 08 (Cumberland-Tennessee).

Methodologically, reconciling radiocarbon frequency curves with site-level settlement estimates addresses several well-documented taphonomic and sampling biases. Charcoal selection and fuel-wood choices affect which occupation layers yield datable carbon [@lancelotti2018burns; @asouti2020zagros], while macrobotanical assemblages reflect preservation filters as much as subsistence intensity [@asouti2018impact; @bao2018evolution].

Similarly, micromorphological sediment resolution helps separate fleeting activity surfaces from multi-year habitation floors [@nicosia2025multiproxy], isotopic bone and plant chemistry tracks dietary and agrarian shifts across climatic niches [@birch2022herd; @souza2022environmental], and experimental archaeofaunal studies clarify fragmentation patterns in shell and bone middens [@gillreathbrown2018experimental].

## Mathematical Calibration and Urban-Rural Residual Smoothing

For each sub-region $r$ at benchmark horizon $t \in \{-10000, \dots, 1600\}$, rural demographic capacity $R_r(t)$ is obtained by subtracting the sum of bounded urban and monumental settlement populations $U_{i}(t)$ inside sub-region $r$ from the sub-regional benchmark total $P_r(t)$:

$$R_r(t) = P_r(t) - \sum_{i \in S_r} U_i(t), \qquad w_c(t) = \frac{\hat{\lambda}_c(t)}{\sum_{j \in \Omega_r} \hat{\lambda}_j(t)}$$

where $\hat{\lambda}_c(t)$ is the temporally interpolated Matérn ($\nu = 3/2$) kriging density weight at 5-arcminute cell $c \in \Omega_r$. Each rural cell receives $R_r(t) \cdot w_c(t)$ before two separable `5`-pixel log-multiplier passes damp sharp boundary transitions along inter-watershed seams without altering exact sub-regional totals $P_r(t)$.

Symmetric `±8,0%` interval bounds (`[0,92 P_r(t), 1,08 P_r(t)]`) express cumulative uncertainty across radiocarbon calibration spread, household-size scalars and uneven nineteenth-century earthwork documentation.

# Testing and Validation

Five verification checks establish spatial, statistical and arithmetic consistency across HU 05 at `GMT+0`, linking radiocarbon coverage, variogram parameters and urban-rural mass conservation across all `23` benchmark dates:

1. **Radiocarbon Sample Sufficiency**: HU 05 draws on `N = 1.828` cleaned terrestrial radiocarbon dates in the regional synthesis [@kelly2025], more than four times the `400`-date reliability floor required for robust summed probability inference over two-millennium windows [@crema2021; @kelly2022].
2. **Non-Stationary Kriging Sharpness**: Across all ten Holocene horizons of `sites_northern_america`, the fitted Matérn ($\nu = 3/2$) model achieves dimensionless range $\tau_1 = 1,41$ (`1,4144`), $\tau_2 = 2,62$ (`2,6166`), effective short range `38,7 km`, raw nugget `0,000`, regularised nugget-to-sill `0,04` (below the `< 0,45` ceiling) and WLS residual fit $R^2 = 0,999$ (`0,9991` to `0,9993`).
3. **Gazetteer and Ledger Reconciliation**: Cross-checking `ohio_river_settlements.json` (`120` included sites: `36` in Upper Ohio-Allegheny-Kanawha, `35` in Scioto-Miami, `44` in Cumberland-Kentucky-Green and `5` in Wabash-White-Lower Ohio) against `ohio_river_source_ledger.json5` (`121` total candidates, including `1` excluded duplicate alias of `Angel Mounds`) confirms `0` unaccounted entries and `0` coordinate errors.
4. **Urban-Rural Mass Conservation**: Summed settlement populations stay strictly below sub-regional totals across every horizon, reaching `11.665` (`7,20%` of `162,0k`) at the `200AD` Middle Woodland crest, `13.210` (`5,00%` of `264,0k`) at the `1300AD` basin peak, `9.100` (`5,17%` of `176,0k`) in `1500AD` and `6.180` (`4,09%` of `151,0k`) in `1600AD`.
5. **Arithmetic Benchmark Consistency**: Sub-regional point estimates and `±8,0%` interval bounds sum exactly to `headline_population_by_benchmark` across all `23` horizons from `10000BC` (`950`) to `1600AD` (`151,0k`).

Table \ref{tab:oh-benchmarks} summarises the resulting benchmark series, uncertainty bounds, regional population densities and summed gazetteer urban shares from `10000BC` to `1600AD`.

<figure class="crd-table-figure" id="tab:oh-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th><th class="crd-th">Density (per km²)</th><th class="crd-th">Settlement Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">950</td><td class="crd-td">874-1k</td><td class="crd-td">0,002</td><td class="crd-td">100</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">4,8k</td><td class="crd-td">4,4k-5,1k</td><td class="crd-td">0,011</td><td class="crd-td">135</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">26,3k</td><td class="crd-td">24,2k-28,4k</td><td class="crd-td">0,062</td><td class="crd-td">75</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">58,7k</td><td class="crd-td">54k-63,4k</td><td class="crd-td">0,138</td><td class="crd-td">870</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">81,8k</td><td class="crd-td">75,3k-88,3k</td><td class="crd-td">0,193</td><td class="crd-td">800</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">111k</td><td class="crd-td">102,1k-119,9k</td><td class="crd-td">0,262</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">142k</td><td class="crd-td">130,6k-153,4k</td><td class="crd-td">0,335</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">162k</td><td class="crd-td">149k-175k</td><td class="crd-td">0,382</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">172k</td><td class="crd-td">158,2k-185,8k</td><td class="crd-td">0,406</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">189,5k</td><td class="crd-td">174,3k-204,7k</td><td class="crd-td">0,447</td><td class="crd-td">800</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">210k</td><td class="crd-td">193,2k-226,8k</td><td class="crd-td">0,495</td><td class="crd-td">630</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">231k</td><td class="crd-td">212,5k-249,5k</td><td class="crd-td">0,545</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">245,5k</td><td class="crd-td">225,9k-265,1k</td><td class="crd-td">0,579</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">257k</td><td class="crd-td">236,4k-277,6k</td><td class="crd-td">0,606</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">264k</td><td class="crd-td">242,9k-285,1k</td><td class="crd-td">0,623</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">195k</td><td class="crd-td">179,4k-210,6k</td><td class="crd-td">0,46</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">176k</td><td class="crd-td">161,9k-190,1k</td><td class="crd-td">0,415</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">163,5k</td><td class="crd-td">150,4k-176,6k</td><td class="crd-td">0,386</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">151k</td><td class="crd-td">138,9k-163,1k</td><td class="crd-td">0,356</td><td class="crd-td">6,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population estimates, 8% uncertainty intervals, mean density and catalogued settlement sums for Ohio River (HU 05), 10000BC to 1600AD.</figcaption>
</figure>

# Results

## Archaic Shell Middens to Middle Woodland Hopewell Apex

From sparse Late Glacial foraging camps (`950` in `10000BC`, `4.750` in `8000BC`), HU 05 expanded steadily during the Middle Holocene as river levels stabilised and freshwater mussel shoals formed along the Green, lower Cumberland and middle Ohio channels. Population reached `26,3k` in `5000BC`, `58,7k` in `3000BC` and `81,8k` in `2000BC`, anchored by persistent Green River Archaic aggregations at `Indian Knoll` (`340` at `2000BC`), `Carlston Annis` (`210` at `2500BC`), `Ward` (`190` at `2000BC`) and `Chiggerville` (`175` at `2200BC`), alongside Ohio River shell-bearing and rockshelter occupations at `East Steubenville`, `Hansford`, `Parrish` and `Meadowcroft Rockshelter`.

Between `1000BC` and `200AD`, Early Woodland Adena tumuli and Middle Woodland Hopewell earthwork precincts reshaped regional settlement geography across southern Ohio, northern Kentucky, West Virginia and southeastern Indiana [@dancey1997; @charles2006]. Basin population climbed from `111,0k` (`102,1k-119,9k`) in `1000BC` to `142,0k` (`130,6k-153,4k`) at `0AD` and `162,0k` (`149,0k-175,0k`) at `200AD` (Figure \ref{fig:oh-trajectory}).

During this Middle Woodland surge, the Scioto-Miami core experienced its steepest relative concentration, climbing to a local crest of `41,0k` (`0,685` persons/km²) in `200AD`. Monumental octagonal, circular and hilltop earthworks at `Newark Earthworks` (`1.850`), `Hopewell Mound Group` (`1.650`), `Seip Earthworks` (`1.100`), `Fort Ancient` (`980`), `Mound City` (`980`), `Portsmouth Earthworks` (`780`), `Harness Mound Group` (`760`), `Circleville Earthworks` (`720`) and `Hopeton Earthworks` (`620`) stood alongside `Marietta Earthworks` (`780`) on the upper Ohio and `Mann Site` (`950`) at the Wabash confluence.

<figure class="crd-figure-block" id="fig:oh-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river/fig2_ohio_river_trajectory.png" alt="fig:oh-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate and sub-regional population trajectories for Ohio River (HU 05) from 10000BC to 1600AD with uncertainty interval.</figcaption>
</figure>

Following the fourth-century decline of monumental Hopewell mound ceremonialism, trajectories diverged temporarily across sub-regions. Scioto-Miami paused and dipped `7,3%` from `41,0k` in `200AD` to `38,0k` in `400AD` as large geometric enclosures fell out of active construction and nucleated ritual clusters dispersed into smaller Late Woodland valley hamlets [@dancey1997].

Over the same two centuries, Upper Ohio (`43,0k` to `47,0k`), Cumberland-Green (`42,0k` to `47,0k`) and Wabash-White (`36,0k` to `40,0k`) continued growing without interruption, lifting total HU 05 population to `172,0k` in `400AD`, `189,5k` in `600AD` and `210,0k` in `800AD`.

## Mississippian and Fort Ancient Thirteenth-Century Maximum

After `900AD`, widespread adoption of northern flint and eight-row maize transformed floodplain agriculture across every major tributary of the Ohio. Total basin population expanded from `231,0k` (`212,5k-249,5k`) in `1000AD` to `245,5k` in `1100AD`, `257,0k` in `1200AD` and an all-time pre-Columbian zenith of `264,0k` (`242,9k-285,1k`; `0,623` persons/km²) in `1300AD`.

That thirteenth-century peak tracks the HU 05 radiocarbon mode at `1295AD` [@kelly2025] and reflects sustained twelfth- and thirteenth-century demographic absorption from drought-stricken Cahokia and central Illinois [@benson2009; @comstock2018]. All four sub-regions reached their individual pre-contact peaks simultaneously in `1300AD`: Upper Ohio-Allegheny-Kanawha at `72,5k` (`66,7k-78,3k`; `0,481` persons/km²), Kentucky-Cumberland-Green at `68,5k` (`63,0k-74,0k`; `0,476` persons/km²), Wabash-White-Lower Ohio at `64,5k` (`59,3k-69,7k`; `0,926` persons/km²) and Scioto-Miami at `58,5k` (`53,8k-63,2k`; `0,977` persons/km²).

Along the lower Ohio and Cumberland terraces, fortified Mississippian plaza towns proliferated: `Angel Mounds` reached `3.200` residents in `1300AD` [@hilgeman2000], `Mound Bottom` peaked at `1.600` in `1200AD`, `Castalian Springs` reached `980` (`1300AD`), `Noel Farm` `860` (`1350AD`), `Rutherford-Kizer` `740` (`1375AD`), `Averbuch` `720` (`1350AD`), `East Nashville Mounds` `640` (`1350AD`), `Gordontown` `640` (`1350AD`), `Sellars` `640` (`1150AD`), `Brick Church Pike` `620` (`1250AD`) and `Fewkes` `580` (`1300AD`).

Further upstream, Fort Ancient circular plaza villages such as `SunWatch` (`560`), `Baum` (`540`), `Fox Farm` (`620`) and `Feurt` (`520`) coexisted with Oliver-phase `Strawtown Enclosure` (`720`) and stockaded Monongahela communities such as `Johnston Site` (`580`), `Peck No. 2` (`420`) and `Household` (`390`) [@cook2017].

## Vacant Quarter Contraction and Upper Valley Persistence

Between `1300AD` and `1400AD`, HU 05 experienced its sharpest pre-contact demographic contraction, losing `69,0k` inhabitants (`26,1%`) to stand at `195,0k` (`179,4k-210,6k`). Losses fell asymmetrically on the western and southern floodplains (Figure \ref{fig:oh-shares}).

Wabash-White-Lower Ohio plummeted `39,5%` from `64,5k` to `39,0k`, and Kentucky-Cumberland-Green fell `28,5%` from `68,5k` to `49,0k`, as palisaded Mississippian polities abandoned the lower Ohio, lower Wabash and central Cumberland valleys during the Vacant Quarter realignment [@cobb2002; @cobb2023]. Bioarchaeological trauma patterns and heightened stockade construction indicate that climatic instability after `1300AD` coincided with intensified inter-polity conflict across the Midwest and Upper South [@krus2016].

<figure class="crd-figure-block" id="fig:oh-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river/fig3_ohio_river_shares.png" alt="fig:oh-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across the four divisions of Ohio River (HU 05) from 10000BC to 1600AD.</figcaption>
</figure>

## Sub-Regional Trajectories Across the Four Divisions

### Allegheny, Monongahela and Kanawha Plateau

Covering `150.686 km²` (`35,53%` of HU 05), the upper plateau began with `250` inhabitants (`0,002` persons/km²) in `10000BC` and grew slowly through the Archaic to `7,2k` in `5000BC` and `37,5k` (`0,249` persons/km²) at `0AD`. Early Adena mound builders at `Grave Creek Mound` (`450` at `0AD`) and `South Charleston Mound` (`310` at `100BC`) preceded the Marietta Hopewell node (`780` at `200AD`).

Unlike the Scioto core, Upper Ohio suffered no fourth-century demographic check, expanding from `43,0k` in `200AD` to `47,0k` in `400AD`, `62,5k` in `1000AD` and `72,5k` (`0,481` persons/km²) in `1300AD`. Upland valleys absorbed small farming groups along the Youghiogheny, Monongahela and Kanawha terraces without triggering large-scale mound abandonment.

During the fourteenth and fifteenth centuries, Monongahela stockaded hilltop and terrace villages (`Johnston Site`, `Campbell Farm`, `McFate`, `Montague`, `Ryan`, `Wylie 3`) alongside Fort Ancient Kanawha towns (`Buffalo` `880` and `Clover` `610` at `1550AD`) limited regional contraction to `61,0k` in `1400AD` and `56,0k` in `1500AD`.

As lower Ohio populations fell, Upper Ohio's share of HU 05 climbed from `27,46%` in `1300AD` to `31,82%` in `1500AD` and `31,79%` (`48,0k`, `0,319` persons/km²) at `1600AD`.

### Scioto and Miami Earthwork Core

Despite occupying only `14,12%` of basin land (`59.877 km²`), the Scioto and Miami valleys consistently carried the highest population densities in HU 05. Population rose from `200` in `10000BC` to `6,2k` in `5000BC`, `36,0k` (`0,601` persons/km²) at `0AD` and `41,0k` (`0,685` persons/km²) at `200AD` during the Hopewell florescence around Chillicothe and Newark [@dancey1997; @charles2006].

Following the fourth-century dip to `38,0k` (`400AD`), Late Woodland and Fort Ancient maize villages lifted the sub-region to `50,5k` in `1000AD` and `58,5k` (`0,977` persons/km²) in `1300AD` [@cook2017]. That peak density nearly doubled the Upper Ohio and Cumberland averages on fertile glacial outwash plains.

Subsequent contraction lowered numbers to `46,0k` (`1400AD`), `42,0k` (`1500AD`) and `36,0k` (`1600AD`, `0,601` persons/km²). Even so, major sixteenth-century settlements persisted near the Great Miami and Scioto mouths at `Madisonville` (`980` at `1500AD`) and `Hardin Village` (`820` at `1550AD`).

### Cumberland, Kentucky and Green River Valleys

Across `143.882 km²` (`33,93%` of HU 05), Green River Archaic shell middens elevated early totals from `300` in `10000BC` to `7,5k` in `5000BC` and `37,0k` (`0,257` persons/km²) at `0AD`. Karst shoals and rich oak-hickory savannas supported stable multi-century base camps long before maize cultivation.

Population climbed steadily through Middle Woodland `Mann Site` (`950` at `200AD`) and Late Woodland `Yankeetown` (`360` at `950AD`) to `62,0k` in `1000AD` and `68,5k` (`0,476` persons/km²) in `1300AD`. At its apex, this zone combined `Angel Mounds` (`3.200`) on the Indiana bank with dense Nashville Basin stone-box towns (`Mound Bottom`, `Castalian Springs`, `Noel Farm`, `Averbuch`, `Rutherford-Kizer`).

Vacant Quarter abandonment reduced totals by `28,5%` to `49,0k` in `1400AD` [@cobb2002; @cobb2023]. Thereafter, Caborn-Welborn persistence near the Wabash confluence (`Slack Farm`, `Hovey Lake`, `Murphy`, `Welborn`, `Bone Bank`) slowed the retreat to `44,0k` (`1500AD`), `41,0k` (`1550AD`) and `38,0k` (`1600AD`).

### Wabash-White Basins and Lower Ohio Confluence

Covering `69.651 km²` (`16,42%` of HU 05), the Wabash-White plains advanced from `200` in `10000BC` to `5,4k` in `5000BC`, `31,5k` (`0,452` persons/km²) at `0AD`, `40,0k` at `400AD` and `56,0k` at `1000AD` before peaking at `64,5k` (`0,926` persons/km²) in `1300AD`.

Because the lower Wabash and lower Ohio corridor lay at the core of the Vacant Quarter abandonment zone, its post-`1300AD` fall (`39,5%` down to `39,0k` in `1400AD`) was the steepest in HU 05. Numbers eased further to `34,0k` in `1500AD`, `31,5k` in `1550AD` and `29,0k` (`0,416` persons/km²; `19,21%` share) in `1600AD` [@cobb2002; @milner2010; @ubelaker2006].

### Frontier Context and Late Pre-Contact Realignment

Across neighbouring hydrological divisions, HU 05 bridges the gap between early-peaking Mississippian cores to the west and later-peaking eastern Atlantic basins [@kelly2025]. Whereas Upper Mississippi (HU 06) and Cahokia declined sharply after `1150AD` to `1250AD` [@benson2009], HU 05 held peak totals at `1300AD` and retained higher fifteenth-century densities in the Scioto and Upper Ohio corridors than in the depopulated lower Wabash bottomlands.

That eastward demographic tilt foreshadowed early historic Algonquian and Siouan distributions encountered by seventeenth-century French and English traders, while cross-watershed radiocarbon smoothing keeps population gradients continuous across divides into the Cumberland, Great Lakes and Mid-Atlantic basins.

<figure class="crd-table-figure" id="tab:oh-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1300AD</td><td class="crd-td">72,5k</td><td class="crd-td">66,7k-78,3k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1300AD</td><td class="crd-td">58,5k</td><td class="crd-td">53,8k-63,2k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1300AD</td><td class="crd-td">68,5k</td><td class="crd-td">63k-74k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1300AD</td><td class="crd-td">64,5k</td><td class="crd-td">59,3k-69,7k</td></tr>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1500AD</td><td class="crd-td">56k</td><td class="crd-td">51,5k-60,5k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1500AD</td><td class="crd-td">42k</td><td class="crd-td">38,6k-45,4k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1500AD</td><td class="crd-td">44k</td><td class="crd-td">40,5k-47,5k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1500AD</td><td class="crd-td">34k</td><td class="crd-td">31,3k-36,7k</td></tr>
<tr><td class="crd-td"><strong>Upper Ohio-Allegheny-Kanawha</strong></td><td class="crd-td">1600AD</td><td class="crd-td">48k</td><td class="crd-td">44,2k-51,8k</td></tr>
<tr><td class="crd-td"><strong>Scioto-Miami Hopewell Core</strong></td><td class="crd-td">1600AD</td><td class="crd-td">36k</td><td class="crd-td">33,1k-38,9k</td></tr>
<tr><td class="crd-td"><strong>Kentucky-Cumberland-Green</strong></td><td class="crd-td">1600AD</td><td class="crd-td">38k</td><td class="crd-td">35k-41k</td></tr>
<tr><td class="crd-td"><strong>Wabash-White-Lower Ohio</strong></td><td class="crd-td">1600AD</td><td class="crd-td">29k</td><td class="crd-td">26,7k-31,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional population totals across Ohio River (HU 05) at 1300AD, 1500AD and 1600AD.</figcaption>
</figure>

# Limitations

Three principal evidentiary constraints qualify the HU 05 demographic reconstruction. First, Middle Woodland Hopewell earthworks such as `Newark Earthworks`, `Hopewell Mound Group` and `Seip Earthworks` functioned as regional mortuary and ceremonial centres serving dispersed valley populations whose seasonal gatherings temporarily exceeded permanent caretaker clusters [@dancey1997; @charles2006].

Treating monument catchments strictly as permanent year-round residences rather than distinguishing caretaker clusters (`980-1.850`) would artificially spike `200AD` urban totals at the expense of surrounding rural hamlets.

Second, shifting-field maize horticulture across Fort Ancient and Monongahela uplands generated short village occupation spans (`15-35` years) prior to soil nitrogen depletion and firewood exhaustion [@hart2020using; @cook2017]. Without adjusting for overlapping radiocarbon probability ranges and short-lived settlement phases, raw site counts inflate fourteenth- and fifteenth-century densities relative to long-lived Mississippian mound towns such as `Angel Mounds` and `Mound Bottom`.

Third, HU 05 experienced no direct European chronicled expeditions during the sixteenth century. Demographic trajectories from `1500AD` to `1600AD` therefore rely on late Fort Ancient and Caborn-Welborn radiocarbon continuity, European trade-brass and glass-bead horizons at `Madisonville`, `Hardin Village` and `Buffalo`, and continental epidemic diffusion modelling rather than contemporary eyewitness censuses [@milner2010; @ubelaker2006; @cobb2023].

Fourth, post-glacial alluvial burial along the lower Ohio and Wabash channels and nineteenth-century ploughing across the Till Plains unevenly conceal small Archaic and Early Woodland floodplain camps, leaving upland rockshelters and limestone ridges slightly better represented in early Holocene radiocarbon distributions [@kelly2022; @gillreathbrown2018experimental].

# Conclusion

Ohio River (HU 05) followed a distinct long-run demographic rhythm within eastern North America, cresting around `1300AD` at `264,0k` inhabitants (`0,623` persons/km²) nearly two centuries after the American Bottom peak. Vacant Quarter abandonment then cut lower-valley numbers sharply while Fort Ancient and Monongahela villages sustained upper-basin density past `1500AD`.

Partitioning the `424.096 km²` watershed across four ecological divisions and calibrating `120` catalogued settlements alongside the `sites_northern_america` Matérn radiocarbon prior preserves both Middle Woodland Hopewell concentration in the Scioto-Miami valleys and the fourteenth-century eastward shift in regional demographic gravity.

Extending this pre-contact baseline directly into seventeenth- and eighteenth-century colonial parish returns, trading-post journals and early federal enumerations anchors long-run demographic continuity across the trans-Appalachian interior without artificial breaks at `1600AD`.

# Sources

<div id="refs"></div>
