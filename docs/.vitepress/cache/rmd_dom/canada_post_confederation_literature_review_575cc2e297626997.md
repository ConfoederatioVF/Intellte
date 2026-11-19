---
title: "Canada after Confederation, Greenland and Saint-Pierre-et-Miquelon: Census Demography and Northern Settlement"
subtitle: "CENTAUR-II: Modern Canada, Greenland and Saint-Pierre-et-Miquelon, 1867AD to 2026AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_canada_post_confederation_spatial.png"
hero_caption: "The 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon across 10,98M km² on a 5-arcminute WGS84 grid, with post-Confederation urban settlements scaled by peak population."
hero_label: "fig:hero-canada-post-confederation"
bibliography: canada_post_confederation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between Confederation in 1867AD and 2026AD, the combined population of Canada, Greenland and Saint-Pierre-et-Miquelon expanded more than elevenfold from 3,65M (`3.648.350`) to 41,86M (`41.860.707`) across `10.983.153 km²` (`324.487` active 5-arcminute WGS84 cells). Anchored to Dominion decennial censuses from 1871AD to 1941AD [@censuscanada1873; @dominion1902; @leacy1983], Statistics Canada quarterly population accounts from 1946AD to 2026AD [@statcan2026q3], Danish and Greenlandic administrative returns [@greenlandstat2026; @hamilton2010] and French civil enumerations in Saint-Pierre-et-Miquelon [@insee2024spm; @ribault1962], this module reconstructs 15 harmonised sub-regional trajectories across 159 years.

Rural demographic weighting inside each sub-region couples urban subtraction from `5.868` catalogued settlements (`6.067` candidate ledger entries and `223.594` place-year observations) with a non-stationary Matérn ($\nu = 3/2$) kriging surface ($\tau_1 = 1,41$, raw nugget `0,000`, regularised `0,04`) calibrated across `93.358` North American radiocarbon and archaeological records [@kelly2025].

Two structural shifts govern the series. First, prairie and Pacific colonisation between 1891AD and 1931AD lifted Alberta, Saskatchewan and British Columbia from `167,2k` (`319,7k` including Manitoba) to `2,35M` (`3,05M` across all four western provinces), ending the early demographic dominance of the Atlantic seaboard [@urquhart1965; @thornton1985].

Second, following the post-war baby boom [@henripin1972] and the transition to sub-replacement fertility after 1971AD [@romaniuc1984], net international immigration concentrated demographic growth in metropolitan Ontario (`16,28M` in 2026AD), Québec (`9,14M`), British Columbia (`5,71M`) and Alberta (`5,14M`) [@statcan2026q3; @ilic2021temporal], whilst public health improvements supported an eightfold Arctic and northern expansion across Yukon, the Northwest Territories, Nunavut and Greenland (`23.850` in 1867AD to `196.463` in 2026AD).

# Background

## Geography and Administrative Framework at Confederation

Northern North America presents a sharper contrast between territorial scale and habitable ecumene than almost any other populated part of the earth. Of the `10.983.153 km²` covered by this study (`Figure` \ref{fig:hero-canada-post-confederation}), the 13 provinces and territories of modern Canada occupy `9.019.971 km²` (`233.870` pixels), Greenland (`Kalaallit Nunaat`) adds `1.963.018 km²` (`90.610` pixels) and the French archipelago of Saint-Pierre-et-Miquelon contributes `164 km²` (`7` pixels).

Yet more than four-fifths of the population has always resided within two hundred kilometres of the southern border along the St. Lawrence valley, the lower Great Lakes peninsula, the Saint John and Annapolis basins, the fertile parkland crescent of the western interior and the Fraser River delta [@kalbach1979; @beaujot1982]. Boreal Precambrian shield rock, Hudson Bay muskeg, permafrost tundra and the Greenland ice sheet impose steep ecological gradients that explain why continuous nineteenth-century parish registration gave way abruptly to sparse trading-post tallies beyond the fifty-first parallel.

When the British North America Act took effect on 1 July 1867, the new Dominion united only Ontario (`1.536.000`), Québec (`1.125.000`), Nova Scotia (`364.000`) and New Brunswick (`271.000`), containing `3,30M` inhabitants out of `3,65M` across the wider northern perimeter [@leacy1983; @urquhart1965]. Newfoundland and Labrador (`142.800` in 1867AD) and Prince Edward Island (`89.000`) remained separate British colonies, while the Pacific coast (`40.000`) lay under separate governance in British Columbia and Vancouver Island.

Meanwhile, the immense interior of Rupert's Land and the North-Western Territory (`67.446` combined across the future Manitoba, Saskatchewan, Alberta, Yukon, Northwest Territories and Nunavut masks) remained under Hudson's Bay Company commercial jurisdiction. Only with the First Census of the Dominion in 1871AD [@censuscanada1873] and the sequential integration of Manitoba (1870AD), British Columbia (1871AD), Prince Edward Island (1873AD), Alberta and Saskatchewan (1905AD) and Newfoundland (1949AD) did a single decennial statistical frame encompass northern North America.

## Maritime Emigration and the Laurentian Industrial Core

At Confederation, central Canada and the Atlantic colonies displayed contrasting demographic rhythms. Ontario and Québec already held `72,94%` of the composite total (`2,66M` out of `3,65M`), sustained by high rural marital fertility along St. Lawrence parishes and expanding rail-and-canal commerce in Montréal, Québec, Toronto and Hamilton [@urquhart1965; @beaujot1982].

By contrast, Nova Scotia, New Brunswick and Prince Edward Island (`724,0k` combined in 1867AD, or `866,8k` including Newfoundland and Labrador) soon entered a prolonged phase of net out-migration [@thornton1985]. As wooden shipbuilding and wind-driven coastal shipping lost ground to iron steamships and continental rail trunks after 1870AD, tens of thousands of young Maritimers moved south to Boston, Lowell and New England mill towns or west to Ontario and the Prairies.

Québec experienced a parallel outward current between 1870AD and 1920AD, when rural population pressure on narrow riverfront farms sent roughly half a million *Canadiens* south into New England textile centres [@henripin1972; @beaujot1982]. Even with continuous southward emigration, high rural birth rates kept provincial numbers rising steadily from `1,13M` in 1867AD to `1,65M` in 1901AD and `2,36M` in 1921AD.

Ontario retained a far larger share of its native-born cohorts by combining mixed commercial agriculture on fertile limestone lowlands with tariff-protected industrial growth after the 1879AD National Policy [@leacy1983]. Provincial numbers climbed evenly from `1,54M` in 1867AD to `2,18M` in 1901AD and `3,43M` in 1931AD, whilst northern mineral and timber extraction opened secondary hubs around Sudbury, Timmins, Sault Ste. Marie and the Lakehead ports.

## Prairie Homesteading and Pacific Opening

Between 1896AD and 1914AD, the demographic centre of gravity swung sharply westward. Completion of the Canadian Pacific Railway across the Shield and Rockies, rising world grain prices, closure of free homestead land in the American Midwest and active federal recruitment transformed western settlement [@kalbach1979; @urquhart1965].

Over a single decade from 1901AD to 1911AD, aggregate population across the study area jumped from `5,60M` to `7,47M` (`2,92%` annual growth), the fastest intercensal expansion since Confederation. Saskatchewan grew more than fivefold in ten years from `91.279` to `492.432` and continued upward to `921.785` by 1931AD; Alberta rose from `73.022` in 1901AD to `374.295` in 1911AD and `731.605` in 1931AD; Manitoba climbed from `255.211` to `700.139`; and British Columbia nearly quadrupled from `178.657` to `694.263` [@dominion1902; @leacy1983].

Western expansion proved sensitive to climatic and commodity shocks. Severe drought across the Palliser Triangle during the 1930s Depression, combined with agricultural mechanisation after 1945AD, ended Saskatchewan's rapid rural ascent: provincial numbers contracted from `921.785` in 1931AD to `834.000` in 1951AD and thereafter grew slowly to `1,28M` in 2026AD [@dbs1953; @statcan2026q3].

Alberta followed a different path once the Leduc oil discovery of 1947AD inaugurated petroleum extraction and urban corporate administration in Calgary and Edmonton. Provincial population rose from `943.000` in 1951AD to `1,67M` in 1971AD, `3,06M` in 2001AD and `5,14M` in 2026AD.

British Columbia followed an equally dynamic Pacific trajectory, shifting from timber, salmon canneries and base metals toward metropolitan trade, real estate and Pacific-Rim immigration around Vancouver, Victoria and the Okanagan valley [@norman2013barriers; @statcan2026q3]. Population climbed from `1,17M` in 1951AD to `2,24M` in 1971AD, `4,08M` in 2001AD and `5,71M` in 2026AD.

## Post-War Baby Boom, Fertility Transition and Metropolitan Concentration

After the Depression and Second World War, delayed marriages and rising real wages triggered a sustained twenty-year baby boom across Canada from 1946AD to 1965AD [@henripin1972; @dbs1953]. National population rose from `11,84M` in 1941AD to `14,08M` in 1951AD and `22,01M` in 1971AD, bolstered simultaneously by Newfoundland's 1949AD entry (`362,0k` in 1951AD) and post-war European arrivals [@kalbach1979].

From the mid-1960s onward, urbanisation, female labour-force participation and secular social change—most abruptly in Québec during the Quiet Revolution—compressed fertility below replacement across every Canadian province after 1971AD [@romaniuc1984]. With natural increase slowing steadily toward ageing equilibrium, national expansion depended overwhelmingly on international immigration concentrated inside major Census Metropolitan Areas [@beaujot1982; @ilic2021temporal].

Between 1971AD and 2026AD, Ontario (`7,85M` to `16,28M`), Québec (`6,14M` to `9,14M`), British Columbia (`2,24M` to `5,71M`) and Alberta (`1,67M` to `5,14M`) absorbed `87,13%` of all net growth across the study perimeter (`17,30M` out of `19,85M`). Atlantic Canada shifted from heavy dependence on resource fisheries—highlighted by the 1992AD northern cod moratorium in Newfoundland and Labrador—towards urban service recovery around Halifax (`531,5k` in 2026AD) and Moncton [@statcan2026q3].

Post-2021AD permanent admissions alongside temporary student and worker cohorts pushed the composite series upward by `3,56M` in five years from `38,30M` in 2021AD to `41,86M` in 2026AD [@statcan2022census; @statcan2026q3]. Recent comparative studies of North American native-born versus foreign-born adult survival [@dupre2012survival], rural healthcare access barriers in British Columbia [@norman2013barriers], income polarisation inside large Canadian metropolitan areas [@ilic2021temporal] and twentieth-century shifts in populated-zone climate exposure [@samson2012demographic] highlight how sharply metropolitan corridors diverge from remote boreal and coastal regions.

## Greenland and Saint-Pierre-et-Miquelon

Outside Canadian jurisdiction, two North Atlantic territories belong geographically and ecologically to this northern zone. Greenland (`Kalaallit Nunaat`, `1,96M km²`), administered from Copenhagen under Danish colonial inspectorates before Home Rule in 1979AD and Self-Government in 2009AD, entered the post-1867AD window with `10.950` residents recorded in Moravian, missionary and Royal Greenland Trading Department counts [@hamilton2010; @greenlandstat2026].

Post-1945AD public-health campaigns against tuberculosis, improved maternity care and consolidation of dispersed sealing camps into coastal fishing towns lifted Greenland from `23.664` in 1951AD to `46.500` in 1971AD and `56.411` in 2001AD [@greenlandstat2026]. Subsequent emigration of young adults to Denmark and falling birth rates then stabilised the island near `56.740` in 2026AD, with roughly a quarter of the population residing in Nuuk [@hamilton2010].

Internal demographic asymmetries across Greenlandic towns reflect marine resource restructuring since the 1960s [@hamilton2010; @greenlandstat2026]. Northern and eastern sealing settlements face chronic out-migration of young women toward Nuuk, Sisimiut and Copenhagen, whereas west-coast shrimp and halibut ports between Qaqortoq and Ilulissat sustain firmer age pyramids.

Saint-Pierre-et-Miquelon (`164 km²` south of the Burin Peninsula of Newfoundland) preserves the sole French jurisdiction in northern North America. Anchored to Grand Banks cod fleets, trans-Atlantic cable stations and a brief Prohibition-era re-export boom in the 1920s, the archipelago grew from `4.200` inhabitants in 1867AD to `6.440` in 1901AD before settling near `4.932` in 1951AD, `6.260` in 2001AD and `5.560` in 2026AD [@ribault1962; @insee2024spm].

Within the archipelago, long-run consolidation hollowed out smaller seasonal outports in favour of the port of Saint-Pierre. Once offshore trawler industrialisation replaced small-boat inshore dories in the mid-twentieth century, Île-aux-Marins declined from `110` inhabitants in 1951AD to `75` in 1962AD and zero permanent year-round households thereafter, leaving Saint-Pierre (`6.200` in 2025AD) and Miquelon (`1.141`) as the main settlements [@ribault1962].

## Demographic Mechanisms and Vital-Rate Shifts

Across the entire 15-region perimeter, the demographic transition unfolded across distinct regional calendars rather than as a single synchronous wave [@beaujot1982; @henripin1972]. Infant and infectious-disease mortality fell earliest in southern Ontario and urban Montréal during the 1890s and 1900s as municipal water filtration, sewage mains and dairy pasteurisation reduced summer diarrhoeal and enteric fatalities, whereas rural Maritimes, eastern Québec and Arctic communities experienced sharper reductions only after 1930AD and 1950AD.

Fertility declined in parallel stages. English-speaking Ontario and British Columbia lowered marital fertility continuously from the 1870s until the 1930s Depression, whereas rural francophone Québec, Acadian New Brunswick and Catholic Newfoundland outports sustained large family sizes well into the 1950s before converging rapidly during the 1960s and 1970s [@henripin1972; @romaniuc1984].

Age-structured population projections and historical migration accounts show how those contrasting baby-boom and baby-bust cohorts reshaped dependency ratios after 1990AD [@namazirad2014generating; @statcan2026q3]. As the 1946–1965AD cohort entered retirement after 2011AD, natural increase approached zero across Atlantic Canada and Québec, amplifying the relative weight of international immigration in sustaining national labour-force growth.

# Methodology

## Territorial Harmonisation and Boundary Continuity

To preserve exact spatial comparability across 159 years, all enumerations are projected onto the 15 modern provincial and territorial masks on CENTAUR-II's shared 4320x2160 WGS84 raster grid (`5` arcminutes, `324.487` active land pixels). Four historical boundary adjustments require explicit backward reconciliation so territorial additions never manufacture artificial national growth jumps:

1. **Newfoundland and Labrador (1949AD Accession)**: Newfoundland remained an autonomous Dominion and British Commission territory until 31 March 1949. Pre-1949 colonial censuses (`1869AD`, `1874AD`, `1884AD`, `1891AD`, `1901AD`, `1911AD`, `1921AD`, `1935AD` and `1945AD`) are interpolated onto the decennial Dominion benchmarks (`142.800` in 1867AD, `220.984` in 1901AD, `282.000` in 1931AD) and joined directly to Statistics Canada post-1949 accounts (`362.000` in 1951AD) [@leacy1983; @statcan2026q3]. Labrador's modern boundary follows the 1927AD Privy Council award consistently from 1867AD onward.
2. **Prairie Provinces and Manitoba Expansions (1870AD, 1881AD, 1905AD, 1912AD)**: Manitoba began in 1870AD as a postage-stamp rectangle around Red River before expanding in 1881AD and reaching Hudson Bay at the 60th parallel in 1912AD, when Ontario and Québec also received their northern Patricia and Ungava districts. Alberta and Saskatchewan were carved out of the North-West Territories in 1905AD. Pre-1905 census sub-districts and Hudson's Bay Company district counts from Rupert's Land and Assiniboia are mapped onto the modern provincial masks of Manitoba (`24.500` in 1867AD), Saskatchewan (`15.546`) and Alberta (`14.500`) [@urquhart1965; @leacy1983].
3. **Yukon and Nunavut Separations (1898AD, 1999AD)**: Yukon separated from the North-Western Territory during the 1898AD Klondike gold rush (`27.219` by 1901AD), while Nunavut separated from the Northwest Territories on 1 April 1999. Statistics Canada provides back-calculated Nunavut and residual Northwest Territories figures back to 1991AD [@statcan2026q3]; earlier counts from 1867AD to 1986AD partition the Mackenzie, Keewatin and Franklin sub-districts proportionally onto modern territorial masks (`6.200` in the Northwest Territories and `4.200` in Nunavut at 1867AD).
4. **Greenland and Saint-Pierre-et-Miquelon Continuity**: Greenlandic west, north and east coastal inspectorates remain united inside one national mask (`10.950` in 1867AD to `56.740` in 2026AD), while the communes of Saint-Pierre and Miquelon-Langlade occupy `7` coastal grid cells (`4.200` in 1867AD to `5.560` in 2026AD) [@greenlandstat2026; @insee2024spm].

## Benchmark Assembly and Uncertainty Envelopes

Each regional trajectory blends two statistical regimes. From 1867AD to 1941AD, benchmark anchors come from published Dominion decennial censuses [@censuscanada1873; @dominion1902; @leacy1983], colonial Newfoundland returns and Danish Greenlandic schedules, with an 1867AD starting total (`3.648.350` headline; `3.650.396` across the 15 modern regional masks) aligned against the `3.644.650` terminal total of the preceding colonial Canada synthesis across its 12 colonial and Rupert's Land polygons.

From 1946AD to 2026AD, annual July 1 (Q3) provincial and territorial series are ingested directly from Statistics Canada Table 17-10-0009-01 [@statcan2026q3], preserving mid-century baby-boom annual dynamics and post-2021AD migration pulses without spline flattening. Greenland and Saint-Pierre-et-Miquelon draw on annual Greenlandic population registers from 1977AD to 2026AD [@greenlandstat2026] and French decennial-quinquennial legal populations [@insee2024spm].

Every benchmark carries symmetric `±1,5%` uncertainty envelopes reflecting census net undercoverage studies—typically `1%` to `2,5%` in modern Canadian post-censal adjustment, wider in nineteenth-century remote northern districts—and documented proxy and respondent differences across Indigenous and rural enumerations [@santos2015parity; @namazirad2014generating].

## Urban Subtraction and Non-Stationary Kriging Substrata

To resolve gridded population at 5-arcminute resolution without exaggerating sparse boreal interiors or smudging city densities across water barriers, urban and rural components are separated cleanly. First, `5.868` catalogued settlements (`5.759` in Canada, `98` in Greenland and `11` in Saint-Pierre-et-Miquelon) are disaggregated onto urban cells using strict municipal Census Subdivision and Designated Place definitions rather than inflated metropolitan areas.

Pre-amalgamation boroughs of Metropolitan Toronto (`North York`, `Scarborough`, `Etobicoke`, `York` and `East York`) terminate at `1996AD` before the 1998AD merger into Toronto, avoiding double-counting with post-2001AD city-proper returns. Similarly, `Port Arthur` and `Fort William` terminate at `1966AD` before their 1970AD amalgamation into Thunder Bay, keeping northwestern Ontario's urban weight continuous across statutory reorganisations.

Residual rural population inside each province or territory—obtained by subtracting catalogued urban pixel sums from sub-regional control totals—is distributed using the North American non-stationary Matérn ($\nu = 3/2$) spatial potential surface calibrated across `481.752` continental pixels (`324.487` active inside this module) [@kelly2025]. That surface aggregates `93.358` unique radiocarbon and archaeological site-period observations across `4.457` domestic Voronoi catchments (`2.678` active inhabited catchments; median catchment radius `27,36 km`, 90th percentile `59,92 km`) supplemented by `171` cross-frontier buffer catchments extending `300 km` into neighbouring territories so no frontier cliff appears along the 49th parallel or St. Clair-Detroit corridor.

Modelled residual variograms (`Table` \ref{tab:ca-kriging}) achieve a dimensionless short range $\tau_1 = 1,41$ (`1,4144`; macro range $\tau_2 = 2,62$; effective short range `38,7 km`), raw nugget-to-sill ratio `0,000`, regularised nugget-to-sill ratio `0,04` and weighted least-squares residual $R^2$ values between `0,9991` and `0,9993` across ten Holocene horizons. Biophysical covariates capture smooth exponential coastal proximity, `13,5 km` fluvial distance decay, terrain slope, Greenland Nares Strait channel separation and natural habitability.

Two passes of a 5-pixel separable log-multiplier filter with four-pixel border feathering then smooth residual rural transitions across provincial divides and the Labrador-Québec boundary while keeping every provincial sum exact. Where catalogued settlements occupy coastal islands or fjord inlets in Newfoundland, British Columbia or Greenland, coastal mask snapping ensures that urban subtraction targets the parent provincial or territorial mask without leaking counts into adjacent oceanic pixels.

<figure class="crd-figure-block" id="fig:ca-trajectory">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation/fig2_canada_post_confederation_trajectory.png" alt="fig:ca-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and leading provincial population trajectories across Canada, Greenland and Saint-Pierre-et-Miquelon from 1867AD to 2026AD, with 1,5% census uncertainty bands.</figcaption>
</figure>

# Testing and Validation

Four independent checks confirm arithmetic consistency, spatial mask containment, gazetteer balance and demographic continuity across the 1867AD to 2026AD module.

## Confederation and Partition Seam Continuity

The 1867AD headline total (`3.648.350`) and 15-mask sum (`3.650.396`) align smoothly with the `3.644.650` terminal total of the colonial Canada module (`0,16%` reallocation across the Rupert's Land and North-Western Territory partition onto Manitoba, Saskatchewan, Alberta, Yukon, Northwest Territories and Nunavut). Likewise, Statistics Canada's back-calculated 1991AD split between Nunavut (`22.257` in 1991AD; `28.139` in 2001AD) and the Northwest Territories (`38.746` in 1991AD; `40.850` in 2001AD) eliminates any statutory jump across the 1999AD creation of Nunavut [@statcan2026q3].

## Gazetteer and Ledger Reconciliation

Cross-checking `5.868` included settlements (`223.594` settlement-year observations; `5.862` entries with `>= 3` chronological observations; all `5.868` carrying pre-1990AD continuity) against `199` documented ledger exclusions (`13` duplicate aliases including `Berlin-Canada` unified under `Kitchener-Canada`, `Godthaab-Greenland` unified under `Nuuk-Greenland` and `11` accent or hyphenation twins consolidated within `1,6 km` to `14,9 km`, plus `186` subordinate suburbs merged within `1,55 km`) accounts for all `6.067` candidate records with zero unaccounted entries.

## Kriging Sharpness and Border Smoothness

All ten continental variogram horizons (`Table` \ref{tab:ca-kriging}) meet sharpness tolerances ($\tau_1 = 1,4144 \le 1,8$; raw nugget `0,000`, regularised `0,04 < 0,45`; active biophysical coastal, fluvial, naturalness and topographic covariates), and five-arcminute gridded population densities transition smoothly across the 49th parallel, Ottawa River, Saskatchewan-Alberta meridian and Hudson Strait without artificial step discontinuities.

## Urban Ceiling and Post-Amalgamation Consistency

As `Table` \ref{tab:ca-benchmarks} shows, unadjusted settlement sums track urbanisation smoothly from `52,17%` of the regional total in 1867AD (`1,90M` across `5.751` places) and `68,08%` in 1871AD (`2,62M` across `5.826` places) to `76,42%` in 1901AD (`4,28M` across `5.845` places), `88,94%` in 1951AD (`12,52M` across `5.790` places), `96,92%` in 2001AD (`30,13M` across `4.752` places), `102,29%` in 2021AD (`39,18M` across `5.244` places, reflecting minor co-listed GeoNames settlements capped cleanly at cell level) and `98,49%` in 2026AD (`41,23M` across `4.591` municipal Census Subdivisions).

<figure class="crd-table-figure" id="tab:ca-kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Holocene Horizon</th><th class="crd-th">Mean Density</th><th class="crd-th">P99 Density</th><th class="crd-th">Tau 1</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">0,006</td><td class="crd-td">0,103</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">0,0117</td><td class="crd-td">0,179</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">0,0199</td><td class="crd-td">0,287</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">0,0183</td><td class="crd-td">0,27</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland (Hopewell)</strong></td><td class="crd-td">0,0254</td><td class="crd-td">0,407</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">0,0332</td><td class="crd-td">0,592</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian (Pueblo II)</strong></td><td class="crd-td">0,0468</td><td class="crd-td">0,807</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian (Pueblo III)</strong></td><td class="crd-td">0,0558</td><td class="crd-td">0,885</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Late Precontact (Thule and Oneota)</strong></td><td class="crd-td">0,0465</td><td class="crd-td">0,731</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">0,0345</td><td class="crd-td">0,577</td><td class="crd-td">1,41</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> North American non-stationary Matérn kriging calibration across ten Holocene horizons conditioning rural weights.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:ca-regions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1867AD</th><th class="crd-th">1901AD</th><th class="crd-th">1951AD</th><th class="crd-th">2001AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alberta</strong></td><td class="crd-td">648.842</td><td class="crd-td">14,5k</td><td class="crd-td">73k</td><td class="crd-td">943k</td><td class="crd-td">3,06M</td><td class="crd-td">5,14M</td></tr>
<tr><td class="crd-td"><strong>British Columbia</strong></td><td class="crd-td">927.129</td><td class="crd-td">40k</td><td class="crd-td">178,7k</td><td class="crd-td">1,17M</td><td class="crd-td">4,08M</td><td class="crd-td">5,71M</td></tr>
<tr><td class="crd-td"><strong>Manitoba</strong></td><td class="crd-td">568.631</td><td class="crd-td">24,5k</td><td class="crd-td">255,2k</td><td class="crd-td">778k</td><td class="crd-td">1,15M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">67.993</td><td class="crd-td">271k</td><td class="crd-td">331,1k</td><td class="crd-td">517k</td><td class="crd-td">749,8k</td><td class="crd-td">883,5k</td></tr>
<tr><td class="crd-td"><strong>Newfoundland and Labrador</strong></td><td class="crd-td">361.332</td><td class="crd-td">142,8k</td><td class="crd-td">221k</td><td class="crd-td">362k</td><td class="crd-td">522k</td><td class="crd-td">552,5k</td></tr>
<tr><td class="crd-td"><strong>Northwest Territories</strong></td><td class="crd-td">1.182.912</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td><td class="crd-td">10,4k</td><td class="crd-td">40,9k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">50.002</td><td class="crd-td">364k</td><td class="crd-td">459,6k</td><td class="crd-td">652,9k</td><td class="crd-td">932,5k</td><td class="crd-td">1,1M</td></tr>
<tr><td class="crd-td"><strong>Nunavut</strong></td><td class="crd-td">1.738.592</td><td class="crd-td">4,2k</td><td class="crd-td">4k</td><td class="crd-td">5,6k</td><td class="crd-td">28,1k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Ontario</strong></td><td class="crd-td">921.563</td><td class="crd-td">1,54M</td><td class="crd-td">2,18M</td><td class="crd-td">4,62M</td><td class="crd-td">11,9M</td><td class="crd-td">16,28M</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">4.695</td><td class="crd-td">89k</td><td class="crd-td">103,3k</td><td class="crd-td">99k</td><td class="crd-td">136,7k</td><td class="crd-td">183k</td></tr>
<tr><td class="crd-td"><strong>Québec</strong></td><td class="crd-td">1.448.756</td><td class="crd-td">1,12M</td><td class="crd-td">1,65M</td><td class="crd-td">4,07M</td><td class="crd-td">7,4M</td><td class="crd-td">9,14M</td></tr>
<tr><td class="crd-td"><strong>Saskatchewan</strong></td><td class="crd-td">614.303</td><td class="crd-td">15,5k</td><td class="crd-td">91,3k</td><td class="crd-td">834k</td><td class="crd-td">1M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Yukon</strong></td><td class="crd-td">485.221</td><td class="crd-td">2,5k</td><td class="crd-td">27,2k</td><td class="crd-td">9k</td><td class="crd-td">30,2k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>Saint Pierre and Miquelon</strong></td><td class="crd-td">164</td><td class="crd-td">4,2k</td><td class="crd-td">6,4k</td><td class="crd-td">4,9k</td><td class="crd-td">6,3k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Greenland (Kalaallit Nunaat)</strong></td><td class="crd-td">1.963.018</td><td class="crd-td">10,9k</td><td class="crd-td">11,9k</td><td class="crd-td">23,7k</td><td class="crd-td">56,4k</td><td class="crd-td">56,7k</td></tr>
<tr><td class="crd-td"><strong>Composite Total</strong></td><td class="crd-td">10.983.153</td><td class="crd-td">3,65M</td><td class="crd-td">5,6M</td><td class="crd-td">14,08M</td><td class="crd-td">31,08M</td><td class="crd-td">41,86M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Population across all 15 sub-regions of Canada, Greenland and Saint-Pierre-et-Miquelon at selected benchmark years (1867AD to 2026AD).</figcaption>
</figure>

# Results

## Three Demographic Regimes (1867AD to 2026AD)

Across the 159-year period (`Figure` \ref{fig:ca-trajectory}, `Table` \ref{tab:ca-regions} and `Table` \ref{tab:ca-benchmarks}), composite population multiplied `11,47x` from `3,65M` (`3.648.350`) in 1867AD to `41,86M` (`41.860.707`) in 2026AD. Expansion followed three distinct structural regimes driven by shifting economic opportunity, fertility decline and international migration:

1. **Late-Nineteenth-Century Maritime Slowdown and Laurentian Consolidation (1867AD to 1901AD)**: Aggregate population rose modestly from `3,65M` to `5,60M` (`1,27%` mean annual growth). Persistent out-migration to New England and the American Midwest kept growth in Nova Scotia (`364,0k` to `459,6k`), New Brunswick (`271,0k` to `331,1k`) and Prince Edward Island (`89,0k` to `103,3k`) far below rates of natural increase [@thornton1985; @leacy1983]. Newfoundland and Labrador expanded more steadily from `142,8k` to `221,0k` through outport fisheries and early pulp and mining settlements, while the 1898AD Klondike Gold Rush briefly propelled Yukon from `2.500` inhabitants in 1867AD to `27.219` in 1901AD before post-rush contraction reduced the territory to `4.230` by 1931AD [@leacy1983].
2. **Prairie Settlement Boom, Depression and Post-War Baby Boom (1901AD to 1971AD)**: Between 1901AD and 1911AD, mass immigration lifted composite expansion to `2,92%` per year (`5,60M` to `7,47M`), peaking on the Prairies as homesteaders settled railway corridors across Manitoba, Saskatchewan and Alberta [@kalbach1979]. Saskatchewan surged tenfold from `91,3k` in 1901AD to `921,8k` in 1931AD before 1930s drought and post-war farm consolidation reduced numbers to `834,0k` in 1951AD. Following the Second World War, elevated marriage rates, suburban family formation and European immigration lifted the composite total from `11,84M` in 1941AD and `14,08M` in 1951AD to `22,01M` in 1971AD [@dbs1953; @henripin1972].
3. **Sub-Replacement Fertility, Metropolitan Concentration and Post-2021AD Surge (1971AD to 2026AD)**: Once total fertility fell below replacement after 1971AD [@romaniuc1984], net immigration determined regional divergence. Between 1971AD and 2026AD, Ontario (`7,85M` to `16,28M`), Québec (`6,14M` to `9,14M`), British Columbia (`2,24M` to `5,71M`) and Alberta (`1,67M` to `5,14M`) absorbed `87,13%` of all net growth across the study perimeter (`17,30M` out of `19,85M`). After 2021AD, elevated permanent immigration alongside temporary student and worker admissions carried the composite series upward by `3,56M` in five years from `38,30M` in 2021AD to `41,86M` in 2026AD [@statcan2026q3].

<figure class="crd-table-figure" id="tab:ca-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Total</th><th class="crd-th">Exact Count</th><th class="crd-th">Annual Growth</th><th class="crd-th">Places</th><th class="crd-th">Urban Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1867AD</strong></td><td class="crd-td">3,65M</td><td class="crd-td">3.648.350</td><td class="crd-td">-</td><td class="crd-td">5.748</td><td class="crd-td">1,87M</td></tr>
<tr><td class="crd-td"><strong>1871AD</strong></td><td class="crd-td">3,85M</td><td class="crd-td">3.849.227</td><td class="crd-td">1,35%</td><td class="crd-td">5.823</td><td class="crd-td">2,59M</td></tr>
<tr><td class="crd-td"><strong>1881AD</strong></td><td class="crd-td">4,52M</td><td class="crd-td">4.521.594</td><td class="crd-td">1,62%</td><td class="crd-td">5.766</td><td class="crd-td">3,03M</td></tr>
<tr><td class="crd-td"><strong>1891AD</strong></td><td class="crd-td">5,04M</td><td class="crd-td">5.035.982</td><td class="crd-td">1,08%</td><td class="crd-td">5.765</td><td class="crd-td">3,61M</td></tr>
<tr><td class="crd-td"><strong>1901AD</strong></td><td class="crd-td">5,6M</td><td class="crd-td">5.600.303</td><td class="crd-td">1,07%</td><td class="crd-td">5.842</td><td class="crd-td">4,23M</td></tr>
<tr><td class="crd-td"><strong>1911AD</strong></td><td class="crd-td">7,47M</td><td class="crd-td">7.466.930</td><td class="crd-td">2,92%</td><td class="crd-td">5.763</td><td class="crd-td">5,84M</td></tr>
<tr><td class="crd-td"><strong>1921AD</strong></td><td class="crd-td">9,07M</td><td class="crd-td">9.068.770</td><td class="crd-td">1,96%</td><td class="crd-td">5.763</td><td class="crd-td">7,31M</td></tr>
<tr><td class="crd-td"><strong>1931AD</strong></td><td class="crd-td">10,68M</td><td class="crd-td">10.680.307</td><td class="crd-td">1,65%</td><td class="crd-td">5.747</td><td class="crd-td">8,95M</td></tr>
<tr><td class="crd-td"><strong>1941AD</strong></td><td class="crd-td">11,84M</td><td class="crd-td">11.840.115</td><td class="crd-td">1,04%</td><td class="crd-td">5.769</td><td class="crd-td">10,22M</td></tr>
<tr><td class="crd-td"><strong>1951AD</strong></td><td class="crd-td">14,08M</td><td class="crd-td">14.078.270</td><td class="crd-td">1,75%</td><td class="crd-td">5.787</td><td class="crd-td">12,43M</td></tr>
<tr><td class="crd-td"><strong>1961AD</strong></td><td class="crd-td">18,31M</td><td class="crd-td">18.309.417</td><td class="crd-td">2,66%</td><td class="crd-td">5.725</td><td class="crd-td">16,06M</td></tr>
<tr><td class="crd-td"><strong>1971AD</strong></td><td class="crd-td">22,01M</td><td class="crd-td">22.014.152</td><td class="crd-td">1,86%</td><td class="crd-td">5.652</td><td class="crd-td">20,44M</td></tr>
<tr><td class="crd-td"><strong>1981AD</strong></td><td class="crd-td">24,88M</td><td class="crd-td">24.876.653</td><td class="crd-td">1,23%</td><td class="crd-td">5.680</td><td class="crd-td">23,76M</td></tr>
<tr><td class="crd-td"><strong>1991AD</strong></td><td class="crd-td">28,1M</td><td class="crd-td">28.099.431</td><td class="crd-td">1,23%</td><td class="crd-td">5.110</td><td class="crd-td">27,88M</td></tr>
<tr><td class="crd-td"><strong>2001AD</strong></td><td class="crd-td">31,08M</td><td class="crd-td">31.083.526</td><td class="crd-td">1,01%</td><td class="crd-td">4.752</td><td class="crd-td">30,13M</td></tr>
<tr><td class="crd-td"><strong>2011AD</strong></td><td class="crd-td">34,4M</td><td class="crd-td">34.402.135</td><td class="crd-td">1,02%</td><td class="crd-td">4.615</td><td class="crd-td">33,35M</td></tr>
<tr><td class="crd-td"><strong>2021AD</strong></td><td class="crd-td">38,3M</td><td class="crd-td">38.302.064</td><td class="crd-td">1,08%</td><td class="crd-td">5.244</td><td class="crd-td">39,18M</td></tr>
<tr><td class="crd-td"><strong>2026AD</strong></td><td class="crd-td">41,86M</td><td class="crd-td">41.860.707</td><td class="crd-td">1,79%</td><td class="crd-td">4.591</td><td class="crd-td">41,23M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Benchmark population series, annual interval growth rates and catalogued urban totals across Canada, Greenland and Saint-Pierre-et-Miquelon (1867AD to 2026AD).</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:ca-shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-canada-post-confederation/fig3_canada_post_confederation_shares.png" alt="fig:ca-shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Changing provincial and territorial shares of total population across Canada, Greenland and Saint-Pierre-et-Miquelon (1867AD to 2026AD).</figcaption>
</figure>

## Sub-Regional Redistribution, Western Weight and Northern Territories

`Figure` \ref{fig:ca-shares} and `Table` \ref{tab:ca-macro-zones} summarise the long-run geographic rebalancing across Canada's five macro-zones alongside Greenland and Saint-Pierre-et-Miquelon. Ontario's share of the composite total drifted modestly downward from `42,10%` in 1867AD (`1,54M`) to `32,12%` in 1941AD during the height of Prairie homesteading before recovering to `38,88%` (`16,28M`) in 2026AD as the Greater Golden Horseshoe consolidated national finance, manufacturing and immigrant reception [@ilic2021temporal; @statcan2026q3].

Québec's share held near `30%` through 1951AD (`28,88%`) on strong rural fertility, then declined gradually after the 1960s fertility transition to `21,82%` (`9,14M`) in 2026AD [@henripin1972; @romaniuc1984]. Within Québec, growth concentrated progressively along the Montréal-Québec axis (`1,95M` inside Montréal proper and `602,5k` inside Québec City in 2026AD) even as peripheral Gaspésie and Saguenay timber parishes stabilised or contracted.

Atlantic Canada recorded the sharpest relative contraction over the long century. New Brunswick, Nova Scotia, Prince Edward Island and Newfoundland and Labrador fell together from `23,76%` (`866,8k`) in 1867AD to `14,42%` (`2,03M`) in 1951AD and `6,50%` (`2,72M`) in 2026AD, despite post-2016AD interprovincial and international inflows into Halifax, Moncton and Charlottetown [@thornton1985; @statcan2026q3].

Conversely, the four western provinces expanded more than 144-fold from `94,5k` (`2,59%`) in 1867AD to `598,2k` (`10,68%`) in 1901AD, `3,72M` (`26,44%`) in 1951AD and `13,64M` (`32,59%`) in 2026AD, anchored by Vancouver, Calgary, Edmonton and Winnipeg. Within the West, economic leadership shifted steadily westward from Manitoba (`255,2k` in 1901AD) to Saskatchewan (`921,8k` in 1931AD) and ultimately to British Columbia (`5,71M`) and Alberta (`5,14M`) by 2026AD.

<figure class="crd-table-figure" id="tab:ca-macro-zones">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Zone</th><th class="crd-th">Area (km²)</th><th class="crd-th">1867AD</th><th class="crd-th">1911AD</th><th class="crd-th">1951AD</th><th class="crd-th">2001AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Canada (ON, QC)</strong></td><td class="crd-td">2.370.319</td><td class="crd-td">2,66M</td><td class="crd-td">4,53M</td><td class="crd-td">8,68M</td><td class="crd-td">19,29M</td><td class="crd-td">25,41M</td></tr>
<tr><td class="crd-td"><strong>Western Canada (MB, SK, AB, BC)</strong></td><td class="crd-td">2.758.905</td><td class="crd-td">94,5k</td><td class="crd-td">1,72M</td><td class="crd-td">3,72M</td><td class="crd-td">9,29M</td><td class="crd-td">13,64M</td></tr>
<tr><td class="crd-td"><strong>Atlantic Canada (NB, NS, PE, NL)</strong></td><td class="crd-td">484.022</td><td class="crd-td">866,8k</td><td class="crd-td">1,18M</td><td class="crd-td">1,63M</td><td class="crd-td">2,34M</td><td class="crd-td">2,72M</td></tr>
<tr><td class="crd-td"><strong>Northern Canada (YT, NT, NU)</strong></td><td class="crd-td">3.406.725</td><td class="crd-td">12,9k</td><td class="crd-td">15k</td><td class="crd-td">25k</td><td class="crd-td">99,1k</td><td class="crd-td">139,7k</td></tr>
<tr><td class="crd-td"><strong>Greenland and St.-Pierre-et-Miquelon</strong></td><td class="crd-td">1.963.182</td><td class="crd-td">15,2k</td><td class="crd-td">17,7k</td><td class="crd-td">28,6k</td><td class="crd-td">62,7k</td><td class="crd-td">62,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Macro-zonal demographic balance across Central, Western, Atlantic and Northern Canada, Greenland and Saint-Pierre-et-Miquelon (1867AD to 2026AD).</figcaption>
</figure>

Across the four Arctic and subarctic jurisdictions—Yukon, Northwest Territories, Nunavut and Greenland, spanning `5.369.743 km²` (`48,89%` of module land area)—combined population grew more than eightfold from `23.850` (`0,65%`) in 1867AD to `48.664` (`0,35%`) in 1951AD and `196.463` (`0,47%`) in 2026AD [@greenlandstat2026; @hamilton2010; @statcan2026q3]. Growth in the Canadian North and Greenland combined natural increase among Inuit, Dene and Métis families with postwar administrative hubs at Whitehorse (`35,2k`), Yellowknife (`23,4k`), Nuuk (`14,8k`) and Iqaluit (`8,8k`), preserving sharp local density gradients between coastal towns and tundra interiors [@flockhart2018multistate; @lee2018health; @miles2025detectable].

## Provincial and Territorial Profiles

Individual provincial trajectories clarify how local economic specialisations shaped demographic density beneath national aggregates (`Table` \ref{tab:ca-regions}). Ontario (`1,54M` in 1867AD to `16,28M` in 2026AD) maintained the steepest absolute urban expansion in Canada, anchored by Toronto (`3,34M` within city limits in 2026AD), Ottawa (`1,22M`), Brampton (`795,2k`), Mississauga (`765,6k`) and Hamilton (`652,9k`).

Québec (`1,13M` in 1867AD to `9,14M` in 2026AD) shifted from predominantly rural parish agriculture to metropolitan concentration along the Montréal-Québec axis, yet retained `1.327` distinct municipalities and parish nuclei across its eastern and Laurentian uplands [@beaujot1982; @statcan2026q3]. Post-1970AD linguistic and immigration policies slowed net interprovincial transfers whilst sustaining steady metropolitan growth in Montréal (`1,95M`) and Laval (`467,5k`).

British Columbia (`40,0k` in 1867AD to `5,71M` in 2026AD) exhibited the most consistent long-term growth rate of any province over `1M` inhabitants, expanding continuously across railway logging, Pacific shipping, resource towns and late-twentieth-century Asian immigration [@kalbach1979; @norman2013barriers]. Population density remains concentrated in the Lower Mainland (`Vancouver` `744,7k`, `Surrey` `724,6k`, `Burnaby` `307,9k`), Greater Victoria and the Okanagan corridor.

Alberta (`14,5k` in 1867AD to `5,14M` in 2026AD) overtook Manitoba (`24,5k` to `1,52M`) and Saskatchewan (`15,5k` to `1,28M`) during the third quarter of the twentieth century as hydrocarbon royalties, pipeline logistics and lower provincial taxation attracted young domestic migrants from Atlantic Canada, Québec and Ontario [@statcan2026q3].

Manitoba and Saskatchewan followed contrasting post-war trajectories despite shared Prairie geography. Winnipeg (`868,4k` in 2026AD) sustained steady industrial and service diversification in Manitoba (`1,52M`), whereas Saskatchewan (`1,28M`) experienced nearly six decades of flat rural numbers between 1931AD (`921,8k`) and 2006AD before potash, uranium and agricultural recovery lifted Saskatoon (`327,6k`) and Regina.

Across Atlantic Canada, Prince Edward Island (`89,0k` in 1867AD to `183,0k` in 2026AD) preserved the highest overall provincial density (`38,98` persons per km² in 2026AD across `4.695 km²`), followed by Nova Scotia (`1,10M` across `50.002 km²`, or `22,07` persons per km²) and New Brunswick (`883,5k` across `67.993 km²`, or `12,99` persons per km²). Newfoundland and Labrador (`552,5k` across `361.332 km²`, or `1,53` persons per km²) transitioned slowly from scattered cod-fishing outports toward St. John's (`132,3k`) and regional hubs [@leacy1983; @statcan2026q3].

Recent demographic gains in Atlantic Canada highlight how rapidly post-2016AD immigration policies altered historical settlement corridors. Nova Scotia added nearly `171k` residents between 2001AD (`932,5k`) and 2026AD (`1,10M`), whilst New Brunswick expanded by `133,7k` and Prince Edward Island by `46,3k` over the same quarter-century, reversing decades of net domestic out-migration to central and western provinces [@statcan2026q3].

In northern Canada and Greenland, demographic density remains below `0,11` persons per km² across Yukon (`50,4k` across `485.221 km²`), the Northwest Territories (`46,3k` across `1.182.912 km²`), Nunavut (`43,1k` across `1.738.592 km²`) and Greenland (`56,7k` across `1.963.018 km²`) [@greenlandstat2026; @hamilton2010]. Saint-Pierre-et-Miquelon (`5,6k` across `164 km²`) stands alone as a dense maritime enclave (`33,90` persons per km² in 2026AD) supported by coastal administration and North Atlantic shipping [@insee2024spm; @ribault1962].

# Limitations

Five structural constraints apply to the 1867AD to 2026AD reconstruction. First, annual pre-1946AD provincial values are interpolated between Dominion decennial censuses and colonial schedules; consequently, they smooth over intra-decade mortality and migration shocks such as the 1918–1919AD influenza pandemic, First and Second World War overseas mobilisation and the month-by-month spike of the 1898AD Klondike gold rush [@leacy1983].

Second, pre-1991AD figures for Nunavut and the Northwest Territories apportion historical District of Mackenzie, Keewatin and Franklin counts onto post-1999AD boundaries using proportional district weights rather than continuous settlement microdata across all Inuit camps, creating wider uncertainty across sparse Arctic tundra (`< 0,03` persons per km²).

Third, nineteenth-century census under-enumeration varied across remote logging camps, seasonal fishing outports and Indigenous reserves, where language barriers and seasonal mobility could bias household counts [@santos2015parity]; symmetric `±1,5%` provincial error envelopes provide a uniform baseline bound but understate true local variance in subarctic districts prior to 1921AD.

Fourth, sub-regional pixel weighting relies on Holocene archaeological catchment densities to guide non-urban settlement suitability across `324.487` active grid cells; whilst coastal, fluvial and slope covariates steer allocations toward inhabited valleys and shorelines, post-1890AD railway homestead corridors and isolated northern mining towns (`Sudbury`, `Flin Flon`, `Fort McMurray`, `Labrador City`) depend strictly on explicit settlement gazetteer ingestion rather than prehistoric priors.

Fifth, 2025AD and 2026AD entries incorporate Statistics Canada quarterly post-censal accounts calibrated to the 2021AD Census alongside projected Greenland and Saint-Pierre-et-Miquelon curves, leaving recent net non-permanent resident movements subject to statutory revision once final 2026AD quinquennial census counts are released [@statcan2022census; @statcan2026q3].

Future statistical releases from the 2026AD Canadian quinquennial enumeration will allow direct replacement of post-2021AD provisional provincial accounts without changing the underlying 15-mask geometry or historical pre-2021AD benchmarks. Similarly, digitisation of nineteenth-century Hudson's Bay Company district ledgers and parish birth rolls in Labrador and Keewatin would sharpen pre-1921AD northern uncertainty intervals without altering southern provincial series.

# Conclusion

Between 1867AD and 2026AD, Canada, Greenland and Saint-Pierre-et-Miquelon grew from an Atlantic-and-St.-Lawrence federation of `3,65M` inhabitants into a continental-and-Arctic population of `41,86M` spanning `10,98M km²`. Harmonising Dominion decennial censuses, post-1946AD quarterly provincial accounts, colonial Newfoundland schedules, Greenlandic registers and French archipelago returns onto 15 fixed modern masks removes artificial discontinuities at Confederation, Prairie provincial creation (1905AD), Newfoundland accession (1949AD) and Nunavut separation (1999AD).

Coupled with `5.868` geolocated settlements (`6.067` candidate entries and `223.594` place-year observations) and the non-stationary Matérn kriging substratum calibrated to `93.358` archaeological records ($\tau_1 = 1,41$, raw nugget `0,000`, regularised `0,04`), the reconstructed series captures both the westward agrarian transition of 1891–1931AD and the post-1971AD metropolitan concentration across Ontario, Québec, British Columbia and Alberta without border distortion.

Long-run provincial trajectories confirm how strongly continental transport corridors, energy resources and post-1971AD international migration reshaped northern North America while leaving Arctic and subarctic expanses thinly inhabited along coastal and riverine nodes. By unifying statutory sub-national census tables with consistent pre-contact archaeological weighting, this baseline supports longitudinal demographic analysis across every province, territory and island jurisdiction from Confederation into the twenty-first century.

# Sources

<div id="refs"></div>
