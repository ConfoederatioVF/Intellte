---
title: "Colonial Canada until Confederation"
subtitle: "CENTAUR-II: British North American Censuses, Assiniboia, British Columbia and Greenland, 1763 to 1867AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1867_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1867_spatial.png"
hero_caption: "Sub-regional areal mask and 1.149 catalogued settlements across 12 British North American, French and Danish Greenlandic territories, 1763 to 1867AD."
hero_label: "fig:hero-colonial-canada-to-1867"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic history of British North America, Saint-Pierre-et-Miquelon and Greenland from the Treaty of Paris in 1763AD to Canadian Confederation in 1867AD under CENTAUR-II. Across twelve sub-regional areal masks spanning 11.177.519 km² (334.880 5-arcminute pixels), aggregate population multiplied eleven-fold from 330,31k in 1763AD to 441,75k in 1790AD, 791,95k in 1815AD, 1,06M (1.061.750) in 1825AD, 1,76M (1.764.804) in 1841AD, 2,62M (2.616.304) in 1851AD, 3,45M (3.449.611) in 1861AD and 3,64M (3.644.650) at Confederation in 1867AD [@statcan1876censuses].

Anchored directly to Volume IV of *Censuses of Canada 1665 to 1871*, Newfoundland colony returns, Hudson's Bay Company Assiniboia rolls, French colonial statistics and Danish Royal Greenland Trade (*Folketælling*) schedules [@statcan1876censuses; @newfoundland1857abstract; @marquardt2002change; @ribault1962iles], the series balances extraordinary agrarian and urban expansion across Upper Canada, Lower Canada and the Maritimes against severe epidemic contraction across Western and Pacific Canada. Between 1763AD and 1867AD, Upper Canada surged seventy-one-fold from 21,5k to 1,54M (1.536.000), overtaking Lower Canada (76k to 1,13M), while British Columbia and Vancouver Island contracted from 135k to 40k across successive smallpox waves in 1775-1782AD, 1836-1838AD and 1862-1863AD [@boyd1999coming; @daschuk2013clearing; @barman2007west]. Spatial allocation pairs 1.149 catalogued settlements (drawn from 1.380 ledger candidates) with non-stationary Matérn ($\nu = 3/2$) kriging across 93.129 unique site-period observations and 3.833 domestic catchments (14,24x baseline; $\tau_1 = 1,35$, $\tau_2 = 2,9025$, residual $R^2$ from 0,999 to 0,9992) [@paciorek2006spatial].

# Background

## The Treaty of Paris and the Loyalist Remaking of the East

The century separating the 1763AD Treaty of Paris from the British North America Act of 1867AD reversed the entire continental geography of northern North America. At the fall of New France, over three-fifths of all inhabitants across Canada and Greenland still lived west of the Great Lakes, while European settlement consisted of roughly 70k French-speaking *Canadiens* along the St. Lawrence and some 25k British, Acadian and Irish fishermen and farmers scattered across Nova Scotia and Newfoundland [@statcan1876censuses]. Within a hundred years, British and Irish immigration combined with sustained French-Canadian natural increase to raise the eastern colonies past 3,5M inhabitants, turning a fur-and-cod periphery into an urbanising agricultural dominion.

The first sudden shock to eastern numbers came from the American Revolution. Between 1783AD and 1785AD, roughly 40k to 45k United Empire Loyalists (white British loyalists, German mercenaries and Black Loyalists) evacuated the newly independent United States for British territory [@statcan1876censuses].

Around 30k settled in the Maritime provinces, prompting the partition of New Brunswick from Nova Scotia in 1784AD, populating Saint John (4,5k in 1784AD) and creating an ephemeral boomtown at Shelburne (9,8k in 1784AD) before fisheries and farmland proved insufficient to hold its instant crowd. Another 7k to 10k moved up the St. Lawrence past the Lachine rapids into the Eastern Townships and the Lake Ontario-Niagara peninsula, triggering the Constitutional Act of 1791AD that split Quebec into Lower Canada (Canada East) and Upper Canada (Canada West).

Between 1791AD and the War of 1812AD, so-called Late Loyalists from New York, Pennsylvania and Vermont continued moving across the Niagara and St. Lawrence borders in search of cheap crown land grants. By 1815AD, Upper Canada had already grown more than five-fold over its 1763AD population to reach 112k inhabitants, laying the demographic base for post-Napoleonic settlement [@statcan1876censuses].

## Transatlantic Migration, Natural Increase and Epidemic Disease

After the close of the Napoleonic Wars in 1815AD, cheap return timber-ship passages transformed eastern British North America into a primary destination for British, Scottish and Irish emigrants. Displaced rural labourers and urban weavers from England, Wales and Scotland (where industrial urbanisation redistributed regional populations unevenly [@day2023mapping]) joined waves of Ulster Protestants and southern Irish Catholics fleeing rural poverty and, between 1845AD and 1852AD, the Great Famine. Over half a million transatlantic passengers landed at Québec, Montréal, Saint John and Halifax between 1815AD and 1855AD, though sustained onward migration into the American Midwest meant net retention in Upper Canada and the Maritimes remained smaller than gross disembarkations [@statcan1876censuses; @gushulak2011health].

High fertility magnified this migrant base across rural townships and parishes. In Lower Canada, where British immigration was confined largely to Montréal, Québec and the Eastern Townships, the *Canadien* population multiplied almost solely by natural increase from roughly 70k in 1763AD to nearly 900k by 1861AD [@statcan1876censuses]. Historical parish cohorts confirm how founder-lineage genetic structure persisted despite harsh winter conditions and early-life disease load, while also showing measurable mortality selection across epidemics [@willfuhr2014disease; @diazpapkovich2019umap].

Transatlantic migration also carried acute crowd infections across maritime ports. Shipboard typhus and Asian cholera outbreaks in 1832AD, 1834AD, 1847AD (notably at the Grosse Île and Partridge Island quarantine stations) and 1854AD struck Québec, Montréal and Toronto heavily [@gushulak2011health; @earn2025century], while endemic tuberculosis persisted in crowded urban wards [@guthrie2019universal]. Despite periodic epidemic spikes, crude birth rates remained high enough across rural Upper and Lower Canada to double provincial totals roughly every twenty to twenty-five years.

Simultaneously, the Act of Union (1841AD), canalisation of the Welland (1829AD), Rideau (1832AD) and St. Lawrence corridors and Grand Trunk Railway construction in the 1850s concentrated commerce in an urban hierarchy headed by Montréal (90,3k in 1861AD), Québec (51,1k), Toronto (44,8k), St. John's (27,5k by 1867AD), Saint John (27,32k), Halifax (25k), Hamilton (19,1k), Ottawa (14,7k), Kingston (13,74k) and London (11,56k) [@statcan1876censuses; @perez2019geospatial].

## Western Epidemics, Assiniboia and the Pacific Gold Rushes

West of the Great Lakes, demographic history moved in the opposite direction. Between 1780AD and 1782AD, a continental smallpox pandemic spread northward from the Missouri basin across the Saskatchewan plains into Cree, Assiniboine, Blackfoot and Chipewyan Dene territory, killing between a third and half of exposed bands and cutting Rupert's Land Prairies from 31,5k in 1763AD to 21k in 1784AD [@ray1974indians; @daschuk2013clearing]. A second virulent smallpox wave carried up the Missouri by river steamer in 1837-1838AD again ravaged the plains, pushing the prairie mask down from 28,5k in 1831AD to 22k in 1841AD [@daschuk2013clearing].

Inside this interior expanse, Thomas Douglas (Lord Selkirk) planted the Red River agricultural colony in Assiniboia in 1812AD. Following the 1821AD merger of the Hudson's Bay Company and North West Company, retired company servants, Scottish crofters and Plains Métis established permanent river-lot parishes at Winnipeg, St. Boniface and St. François-Xavier [@statcan1876censuses; @ray1974indians].

Along the Pacific slope, Indigenous communities sustained by coastal and riverine salmonid fisheries [@guiry2020differentiating] suffered three catastrophic mortality waves: the 1775-1782AD maritime and interior smallpox epidemic [@harris1994voices], the 1836-1838AD coastal outbreak and the 1862-1863AD Victoria epidemic that radiated northward along canoe routes after miners arrived from San Francisco [@boyd1999coming; @barman2007west]. Although the Fraser Canyon (1858AD) and Cariboo (1862-1863AD) gold rushes temporarily injected over 20k placer miners into Yale, Victoria and Barkerville (10k in 1863AD), overall population across British Columbia and Vancouver Island dropped from 135k in 1763AD to 40k in 1867AD [@boyd1999coming; @barman2007west].

Elsewhere at the northern and eastern peripheries, Danish Royal Trade Inspectorates established North and South Greenland in 1782AD under steady paternalist administration [@marquardt2002change; @gad1973history]. Meanwhile, Saint-Pierre-et-Miquelon experienced repeated British occupations and wholesale deportations during 1778-1783AD and 1793-1815AD before resuming French cod-fishing prosperity [@ribault1962iles].

# Methodology

## Twelve-Mask Territorial Partition and Colonial Censuses

To preserve exact continuity from the 1763AD Treaty of Paris to Confederation while matching nineteenth-century provincial partitions, the 11.177.519 km² study grid (334.880 5-arcminute pixels) is divided into twelve areal masks across eleven benchmark dates: 1763AD, 1784AD, 1790AD, 1805AD, 1815AD, 1825AD, 1831AD, 1841AD, 1851AD, 1861AD and 1867AD.

Lower Canada (Canada East and the Province of Quebec, 758.416 km²; 14.030 pixels) calibrates directly to the colonial enumerations in Volume IV of *Censuses of Canada 1665 to 1871* for 1765AD (69.810), 1784AD (113.012), 1790AD (161.311), 1825AD (479.288), 1831AD (553.134), 1844AD (697.084), 1851AD (890.261) and 1861AD (1.111.566). An explicit 6k to 9k adjustment adds unenumerated Innu, Cree and Ungava Inuit bands living north of the St. Lawrence parishes [@statcan1876censuses; @helm1981subarctic].

Upper Canada (Canada West and Ontario, 217.232 km²; 4.142 pixels) aligns with township assessment rolls from 1806AD and 1811AD followed by provincial enumerations in 1824AD (150.066), 1825AD (157.923), 1831AD (236.702), 1841AD (455.688), 1848AD (725.879), 1851AD (952.004) and 1861AD (1.396.091). Adding 10k to 12k unenumerated Shield Ojibwa and Cree residents bridges Loyalist arrivals smoothly from 21,5k in 1763AD to 1,54M in 1867AD [@statcan1876censuses; @ubelaker1988north].

The three Maritime provinces calibrate to provincial schedules in *Censuses of Canada* Vol. IV. Nova Scotia and Cape Breton (4.318 km²; 115 pixels) incorporates the 1767AD, 1817AD (81.351), 1827AD (123.630), 1838AD (202.575), 1851AD (276.854) and 1861AD (330.857) rolls. New Brunswick (4.885 km²; 105 pixels) follows 1824AD (74.176), 1834AD (119.457), 1840AD (156.162), 1851AD (193.800) and 1861AD (252.047), while Prince Edward Island (1.087 km²; 28 pixels) follows 1798AD (4.372), 1827AD (23.266), 1833AD (32.292), 1841AD (47.034), 1848AD (62.678) and 1861AD (80.857) [@statcan1876censuses].

Newfoundland and Labrador (375.563 km²; 7.962 pixels) pairs Governor winter returns from 1763AD to 1815AD with the 1836AD, 1845AD, 1857AD (124.288 enumerated) and 1869AD colonial censuses plus Labrador Inuit and Innu estimates, expanding from 15.712 in 1763AD to 142.800 in 1867AD [@newfoundland1857abstract; @helm1981subarctic]. Adjacent Saint-Pierre-et-Miquelon (205 km²; 9 pixels) follows Ribault's archival compilation and nineteenth-century French colonial bulletins from 400 in 1763AD through the wartime trough of 50 residents in 1805AD to 4.200 in 1867AD [@ribault1962iles].

Across the western interior and Arctic, the District of Assiniboia (Red River Settlement, 112.623 km²; 2.163 pixels) pairs the HBC settlement rolls of 1831-1856AD (2.390 in 1831AD; 5.391 in 1849AD; 6.691 in 1856AD) with surrounding Plains Cree, Ojibwa and nomadic Métis buffalo-hunting brigades to move from 6,5k in 1763AD to 18,5k in 1867AD [@statcan1876censuses; @ray1974indians].

Rupert's Land Prairies (3.240.647 km²; 71.885 pixels), Vancouver Island and British Columbia (662.390 km²; 13.712 pixels) and the North-Western Territory and High Arctic (3.794.308 km²; 127.505 pixels) synthesise Hudson's Bay Company district counts, Boyd and Harris epidemic models and Helm's Subarctic-Arctic ethnographies [@ray1974indians; @daschuk2013clearing; @boyd1999coming; @harris1994voices; @barman2007west; @helm1981subarctic; @ubelaker1988north]. Greenland (2.005.845 km²; 93.224 pixels) combines the 1805AD, 1840AD and 1860AD *Folketælling* returns across North and South Greenland Inspectorates with East Greenland Kalaallit estimates, rising steadily from 6.600 in 1763AD to 10.950 in 1867AD [@marquardt2002change; @gad1973history].

The creation of the Board of Registration and Statistics in the united Province of Canada in 1847AD unified enumeration schedules ahead of the simultaneous 1851AD and 1861AD censuses, reducing township under-counting across newly cleared concessions [@statcan1876censuses]. At 1867AD, provincial trends from 1861AD and the 1871AD Dominion census anchor the four founding provinces alongside continuous pre-Confederation trajectories in Newfoundland, Prince Edward Island and the western territories.

## Non-Stationary Matérn Kriging Calibration

Rural population allocation inside each of the twelve masks relies on the continental North American and Greenlandic multi-registry archaeological kriging surface. Aggregating national, provincial, state and museum registers (including the Canadian Archaeological Radiocarbon Database, Greenland National Museum *Nunniffiit* site inventories, regional CRM surveys and continental radiocarbon compilations) into 93.129 deduplicated site-period observations (286.193 horizon site records) across 3.833 domestic Voronoi catchments covering 15,52M km² (15.517.268 km²; 2.570 active inhabited catchments, representing 67,05% coverage with equivalent circular radius median 29,48 km and 90th percentile 40,95 km overall, 29,3 km and 39,85 km across active catchments), this substratum attains an effective archaeological sampling density 14,24x higher than the 6.539-site legacy global radiocarbon baseline across 493.687 valid terrestrial 5-arcminute cells (18.561.382 km², with 78.938 to 149.138 active cells across ten horizons from 13000BC to 1650AD), flanked by 251 cross-frontier buffer catchments extending 300 km outward.

Two-dimensional Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging conditioned on coastal proximity, fluvial distance decay, terrain slope and the Nares Strait split calibrates regularised dimensionless short-range correlation at $\tau_1 = 1,35$ across all ten horizons (raw 1,519 to 1,6098, mean 1,5782; effective short range 45,23 to 47,94 km, mean 47 km) and long-range scale at $\tau_2 = 2,9025$ (2,9) [@paciorek2006spatial]. Unregularised variogram estimation yields zero nugget-to-sill ratio across all ten horizons (regularised to 0,04), with weighted least-squares covariate regressions attaining $R^2$ from 0,999 to 0,9992 (mean 0,9991). Combined with the 1.149 catalogued settlement trajectories drawn from 1.380 ledger candidates (after 231 duplicate consolidations), rural density weights disaggregate colonial township and seigneurial populations cleanly away from growing urban centres.

Between 1763AD and 1867AD, historical census districts across Upper Canada, Lower Canada, Nova Scotia, New Brunswick and Prince Edward Island apply zero-blurred areal county and parish masks derived from colonial schedules and 1851–1861AD pre-Confederation returns [@statcan1876censuses], sparing sparse Saguenay and northern shield divisions from artificial uniform spread. Outside enumerated counties, Rupert's Land, British Columbia and Arctic territories combine the pre-colonial 1600AD residual kriging surface with Assiniboia and gold-rush hubs, leaving uninhabited Precambrian shield, barren grounds and glacial interiors at exact zero.

# Testing and Validation

Arithmetic validation confirms exact sub-regional additivity across all eleven benchmark years from 1763AD (330.312) to 1867AD (3.644.650), tight continuity at the 1763AD boundary with the pre-1763AD module (330.512 vs 330.312, a 200-person boundary adjustment) and direct alignment into the post-Confederation 1867AD baseline (3.644.650). Table \ref{tab:validation-1867} reconciles enumerated 1851AD and 1861AD colonial census returns against full module totals incorporating unenumerated Indigenous and northern residents.

<figure class="crd-table-figure" id="tab:validation-1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colony or District</th><th class="crd-th">Census 1851</th><th class="crd-th">Module 1851</th><th class="crd-th">Census 1861</th><th class="crd-th">Module 1861</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Canada (Quebec)</strong></td><td class="crd-td">890.261</td><td class="crd-td">899.000</td><td class="crd-td">1.111.566</td><td class="crd-td">1.120.000</td></tr>
<tr><td class="crd-td"><strong>Upper Canada (Ontario)</strong></td><td class="crd-td">952.004</td><td class="crd-td">963.000</td><td class="crd-td">1.396.091</td><td class="crd-td">1.407.000</td></tr>
<tr><td class="crd-td"><strong>Nova Scotia</strong></td><td class="crd-td">276.854</td><td class="crd-td">276.854</td><td class="crd-td">330.857</td><td class="crd-td">330.857</td></tr>
<tr><td class="crd-td"><strong>New Brunswick</strong></td><td class="crd-td">193.800</td><td class="crd-td">193.800</td><td class="crd-td">252.047</td><td class="crd-td">252.047</td></tr>
<tr><td class="crd-td"><strong>Prince Edward Island</strong></td><td class="crd-td">62.678 (1848)</td><td class="crd-td">67.500</td><td class="crd-td">80.857</td><td class="crd-td">80.857</td></tr>
<tr><td class="crd-td"><strong>Newfoundland</strong></td><td class="crd-td">101.600</td><td class="crd-td">103.000</td><td class="crd-td">124.288 (1857)</td><td class="crd-td">131.500</td></tr>
<tr><td class="crd-td"><strong>Assiniboia (Red River)</strong></td><td class="crd-td">5.391 (1849)</td><td class="crd-td">12.400</td><td class="crd-td">6.691 (1856)</td><td class="crd-td">15.800</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of British North American colonial censuses (1851 and 1861AD) against CENTAUR-II module totals including unenumerated Indigenous residents.</figcaption>
</figure>

Ledger and spatial audits confirm mask coverage across all twelve territories (1.149 included settlements, 231 deduplicated exclusions and 0 unaccounted candidates). Table \ref{tab:kriging-cc1867} reports the ten continental Matérn variogram parameters from 13000BC to 1650AD (93.129 unique site-periods across 3.833 domestic catchments, 14,24x baseline), reporting zero unregularised nugget in all ten horizons and WLS $R^2$ from 0,999 to 0,9992 (mean 0,9991). Table \ref{tab:density-cc1867} tracks sub-regional population density (persons per km²) and settlement counts across all twelve masks from 1763AD to 1867AD, highlighting the massive demographic shift toward the lower St. Lawrence, southern Ontario and the Maritime provinces.

<figure class="crd-table-figure" id="tab:kriging-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Calibration Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Tau 2</th><th class="crd-th">Short Range</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,05 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,93 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,38 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">46,73 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland Hopewell</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,48 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,4 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian and Pueblo II</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">46,55 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian and Pueblo III</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,54 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Pre-Contact Thule and Oneota</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,14 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">48,3 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matérn ($\nu = 3/2$) variogram parameters across ten North American calibration horizons (13000BC to 1650AD; 93.129 site-periods across 3.833 domestic catchments).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:density-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Area (km²)</th><th class="crd-th">1763AD</th><th class="crd-th">1790AD</th><th class="crd-th">1831AD</th><th class="crd-th">1867AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Canada and Canada East</strong></td><td class="crd-td">534</td><td class="crd-td">758.416</td><td class="crd-td">0,1002</td><td class="crd-td">0,2248</td><td class="crd-td">0,741</td><td class="crd-td">1,4834</td></tr>
<tr><td class="crd-td"><strong>2. Upper Canada and Canada West</strong></td><td class="crd-td">274</td><td class="crd-td">217.232</td><td class="crd-td">0,099</td><td class="crd-td">0,1749</td><td class="crd-td">1,1439</td><td class="crd-td">7,0708</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">19</td><td class="crd-td">4.318</td><td class="crd-td">2,5012</td><td class="crd-td">9,7267</td><td class="crd-td">35,2015</td><td class="crd-td">84,2983</td></tr>
<tr><td class="crd-td"><strong>4. Colony of New Brunswick</strong></td><td class="crd-td">13</td><td class="crd-td">4.885</td><td class="crd-td">0,7779</td><td class="crd-td">4,913</td><td class="crd-td">21,4944</td><td class="crd-td">55,4759</td></tr>
<tr><td class="crd-td"><strong>5. Colony of Prince Edward Island</strong></td><td class="crd-td">7</td><td class="crd-td">1.087</td><td class="crd-td">1,3799</td><td class="crd-td">3,6799</td><td class="crd-td">27,1389</td><td class="crd-td">81,8767</td></tr>
<tr><td class="crd-td"><strong>6. Colony of Newfoundland and Labrador</strong></td><td class="crd-td">75</td><td class="crd-td">375.563</td><td class="crd-td">0,0418</td><td class="crd-td">0,0514</td><td class="crd-td">0,1784</td><td class="crd-td">0,3802</td></tr>
<tr><td class="crd-td"><strong>7. French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">4</td><td class="crd-td">205</td><td class="crd-td">1,9512</td><td class="crd-td">7,3171</td><td class="crd-td">5,3659</td><td class="crd-td">20,4878</td></tr>
<tr><td class="crd-td"><strong>8. District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">17</td><td class="crd-td">112.623</td><td class="crd-td">0,0577</td><td class="crd-td">0,0479</td><td class="crd-td">0,0755</td><td class="crd-td">0,1643</td></tr>
<tr><td class="crd-td"><strong>9. Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">54</td><td class="crd-td">3.240.647</td><td class="crd-td">0,0097</td><td class="crd-td">0,0069</td><td class="crd-td">0,0088</td><td class="crd-td">0,0086</td></tr>
<tr><td class="crd-td"><strong>10. Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">50</td><td class="crd-td">662.390</td><td class="crd-td">0,2038</td><td class="crd-td">0,1329</td><td class="crd-td">0,0906</td><td class="crd-td">0,0604</td></tr>
<tr><td class="crd-td"><strong>11. North-Western Territory and High Arctic</strong></td><td class="crd-td">34</td><td class="crd-td">3.794.308</td><td class="crd-td">0,0055</td><td class="crd-td">0,0051</td><td class="crd-td">0,0046</td><td class="crd-td">0,004</td></tr>
<tr><td class="crd-td"><strong>12. Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">68</td><td class="crd-td">2.005.845</td><td class="crd-td">0,0033</td><td class="crd-td">0,0035</td><td class="crd-td">0,0043</td><td class="crd-td">0,0055</td></tr>
<tr><td class="crd-td"><strong>Continental Mean</strong></td><td class="crd-td">1.149</td><td class="crd-td">11.177.519</td><td class="crd-td">0,0296</td><td class="crd-td">0,0395</td><td class="crd-td">0,1152</td><td class="crd-td">0,3261</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements and population density (persons per km²) across twelve territories, 1763 to 1867AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:bounds-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Pixels</th><th class="crd-th">1763AD Bounds</th><th class="crd-th">1815AD Bounds</th><th class="crd-th">1867AD Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Canada and Canada East</strong></td><td class="crd-td">14.030</td><td class="crd-td">69,9k to 82,1k</td><td class="crd-td">337,2k to 372,8k</td><td class="crd-td">1,09M to 1,16M</td></tr>
<tr><td class="crd-td"><strong>2. Upper Canada and Canada West</strong></td><td class="crd-td">4.142</td><td class="crd-td">18,3k to 24,7k</td><td class="crd-td">106,4k to 117,6k</td><td class="crd-td">1,49M to 1,58M</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">115</td><td class="crd-td">9,9k to 11,7k</td><td class="crd-td">77,4k to 85,6k</td><td class="crd-td">353,1k to 374,9k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of New Brunswick</strong></td><td class="crd-td">105</td><td class="crd-td">3,2k to 4,4k</td><td class="crd-td">53,2k to 58,8k</td><td class="crd-td">262,9k to 279,1k</td></tr>
<tr><td class="crd-td"><strong>5. Colony of Prince Edward Island</strong></td><td class="crd-td">28</td><td class="crd-td">1,2k to 1,8k</td><td class="crd-td">12,8k to 14,2k</td><td class="crd-td">86,3k to 91,7k</td></tr>
<tr><td class="crd-td"><strong>6. Colony of Newfoundland and Labrador</strong></td><td class="crd-td">7.962</td><td class="crd-td">14,5k to 17k</td><td class="crd-td">40,9k to 45,1k</td><td class="crd-td">138,5k to 147,1k</td></tr>
<tr><td class="crd-td"><strong>7. French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">9</td><td class="crd-td">300 to 500</td><td class="crd-td">188 to 312</td><td class="crd-td">3,9k to 4,5k</td></tr>
<tr><td class="crd-td"><strong>8. District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">2.163</td><td class="crd-td">5,2k to 7,8k</td><td class="crd-td">5,4k to 8,2k</td><td class="crd-td">15,9k to 21,1k</td></tr>
<tr><td class="crd-td"><strong>9. Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">71.885</td><td class="crd-td">23,6k to 39,4k</td><td class="crd-td">20,8k to 31,2k</td><td class="crd-td">22,4k to 33,6k</td></tr>
<tr><td class="crd-td"><strong>10. Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">13.712</td><td class="crd-td">101,2k to 168,8k</td><td class="crd-td">54k to 90k</td><td class="crd-td">34k to 46k</td></tr>
<tr><td class="crd-td"><strong>11. North-Western Territory and High Arctic</strong></td><td class="crd-td">127.505</td><td class="crd-td">15,8k to 26,2k</td><td class="crd-td">14,6k to 21,8k</td><td class="crd-td">12,2k to 18,2k</td></tr>
<tr><td class="crd-td"><strong>12. Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">93.224</td><td class="crd-td">5,4k to 7,8k</td><td class="crd-td">7k to 8,4k</td><td class="crd-td">10k to 11,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Areal mask pixel counts and population uncertainty intervals at 1763AD, 1815AD and 1867AD across twelve sub-regions.</figcaption>
</figure>

# Results

## Eastern Growth and Loyalist-British Migration (1763 to 1867AD)

Eastern British North America drove almost the entire net demographic expansion between 1763AD and Confederation (Figure \ref{fig:traj-cc1867}). Upper Canada grew seventy-one-fold from 21,5k in 1763AD to 38k in 1790AD, 170k in 1825AD, 465k in 1841AD, 963k in 1851AD, 1,41M (1.407.000) in 1861AD and 1,54M (1.536.000) in 1867AD, overtaking Lower Canada between 1841AD and 1851AD (Figure \ref{fig:shares-cc1867}). Its regional share climbed from 6,5% of northern North America in 1763AD to 42,1% at Confederation, lifting average density from 0,099 to 7,0708 persons per km². Across the Upper St. Lawrence and Great Lakes shore, Toronto grew from a 120-person garrison at Fort York in 1793AD to 44,8k in 1861AD, flanked by Hamilton (19,1k), Ottawa (14,7k), Kingston (13,74k) and London (11,56k) [@statcan1876censuses].

Lower Canada expanded nearly fifteen-fold over the same century, advancing from 76k in 1763AD to 170,5k in 1790AD, 355k in 1815AD, 562k in 1831AD, 899k in 1851AD, 1,12M in 1861AD and 1,13M (1.125.000) in 1867AD [@statcan1876censuses]. High rural fertility in the seigneurial parishes pushed population overflow up the Chaudière, Richelieu, Saguenay and Ottawa valleys and into the Eastern Townships (Sherbrooke 5.899 in 1861AD), while Montréal overtook Québec after 1825AD to reach 90,3k in 1861AD against Québec's 51,1k [@statcan1876censuses; @perez2019geospatial].

Across the St. Lawrence-Great Lakes axis, nineteenth-century settlement also shifted from subsistence forest clearance to market-linked grain and timber corridors. Rapid land clearance across southern Ontario's Huron Tract and Talbot Settlement, combined with railway lines linking Toronto, Hamilton, London, Montréal and Portland, allowed secondary market towns such as St. Catharines (6.284), Belleville (6.277), Brantford (6.251), Guelph (5.076) and Cobourg (4.975) to exceed 4,5k inhabitants by 1861AD [@statcan1876censuses]. At the founding of the Dominion of Canada on 1 July 1867, the four confederating provinces of Ontario, Quebec, Nova Scotia and New Brunswick together held 3.296.000 inhabitants, or 90,4% of the northern North American domain.

<figure class="crd-figure-block" id="fig:traj-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867/fig2_colonial_canada_to_1867_trajectory.png" alt="fig:traj-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across twelve British North American, French and Greenlandic sub-regions from 1763 to 1867AD.</figcaption>
</figure>

## Atlantic Colonies: Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Saint-Pierre-et-Miquelon

Across the Gulf and Atlantic provinces, timber exports, wooden shipbuilding and cod fisheries fuelled parallel growth (Table \ref{tab:regions-cc1867}). Nova Scotia and Cape Breton grew from 10,8k in 1763AD to 34,5k in 1784AD under Loyalist influxes, advancing steadily via Scottish Highland settlement in Pictou and Cape Breton to 152k in 1831AD, 276,85k in 1851AD, 330,86k in 1861AD and 364k by 1867AD (84,2983 persons per km²), anchored by Halifax (25k in 1861AD) and Yarmouth (5,6k). Partitioned from Nova Scotia in 1784AD, New Brunswick rose from 3,8k in 1763AD to 16,5k in 1784AD, 105k in 1831AD, 252,05k in 1861AD and 271k in 1867AD (55,4759 persons per km²), led by the timber port of Saint John (27,32k in 1861AD), Fredericton (5,65k) and Miramichi (3,89k) [@statcan1876censuses].

Prince Edward Island intensified nearly sixty-fold from 1,5k in 1763AD to 89k in 1867AD, reaching 81,8767 persons per km² (more than eleven times Upper Canada's territorial mean) around Charlottetown (6,71k in 1861AD), Belfast (2,14k) and Rustico (1,62k). By the 1860s, agricultural land across the island approached saturation, foreshadowing late nineteenth-century out-migration to New England and the Canadian West.

Meanwhile, Newfoundland and Labrador climbed from 15,71k in 1763AD to 43k in 1815AD as the Napoleonic Wars diverted North Atlantic cod supply to resident outports, reaching 103k in 1851AD, 131,5k in 1861AD and 142,8k in 1867AD around St. John's (27,5k in 1867AD), Harbour Grace (5,1k in 1857AD) and Carbonear (4,82k) [@newfoundland1857abstract]. Saint-Pierre-et-Miquelon oscillated dramatically through Anglo-French maritime wars, climbing to 1,5k in 1790AD, plummeting to 50 inhabitants during British deportations in 1805AD, and rebounding after the 1816AD restoration to 4,2k by 1867AD (20,4878 persons per km² across Saint-Pierre, Miquelon and Langlade) [@ribault1962iles].

<figure class="crd-figure-block" id="fig:shares-cc1867">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1867/fig3_colonial_canada_to_1867_shares.png" alt="fig:shares-cc1867" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic shares across Canada and Greenland from 1763 to 1867AD.</figcaption>
</figure>

## Western Contraction, Assiniboia and the Pacific Gold Rushes

West of the Ontario-Manitoba shield divide, epidemic shocks reshaped the demographic map. Rupert's Land Prairies declined from 31,5k in 1763AD to 21k in 1784AD following the 1780-1782AD smallpox outbreak, rebuilt slowly to 28,5k by 1831AD, dropped again to 22k in 1841AD after the 1837-1838AD epidemic and stood at 28k in 1867AD around posts such as St. Albert (480), Norway House (420) and Edmonton (380) [@daschuk2013clearing; @ray1974indians]. Only the District of Assiniboia along the Red River valley achieved sustained expansion, rising from 6,5k in 1763AD to 8,5k in 1831AD, 12,4k in 1851AD and 18,5k in 1867AD across Winnipeg (3,2k), St. Boniface (2,1k) and St. François-Xavier (1,52k) [@statcan1876censuses].

Along the Pacific Coast, Vancouver Island and British Columbia suffered the most prolonged decline anywhere in northern North America. Dropping from 135k in 1763AD (then 40,9% of the entire northern domain) to 92k in 1784AD after the 1775-1782AD epidemic, the coast fell further to 60k in 1831AD and 48k in 1851AD [@boyd1999coming; @harris1994voices]. Although the 1858-1863AD Fraser and Cariboo gold rushes lifted regional numbers briefly to 55k in 1861AD and created ephemeral mining towns at Barkerville (10k in 1863AD) and Yale (2,8k in 1858AD) alongside Victoria (4,8k in 1867AD), the 1862-1863AD coastal smallpox catastrophe reduced total population to 40k (just 1,1% of the 1867AD continental total) [@barman2007west; @boyd1999coming].

## The North-Western Territory and Danish Greenland

Across the 3,79M km² North-Western Territory and High Arctic, Dene, Inuvialuit and Inuit populations drifted gradually downward from 21k in 1763AD to 18,8k in 1805AD, 17,4k in 1831AD and 15,2k in 1867AD (0,004 persons per km²), anchored by coastal marine-mammal villages such as Tuktoyaktuk (680 in 1780AD; 540 in 1861AD), Aklavik (350 to 280) and Pangnirtung (340 in 1861AD) [@helm1981subarctic; @ray1974indians].

By contrast, West Greenland recovered steadily under Royal Greenland Trade governance after the 1782AD Administrative Instruction. Danish *Folketælling* schedules and East Greenland baselines lift Greenland from 6,6k in 1763AD to 7,35k in 1805AD, 8,7k in 1831AD, 10,1k in 1851AD and 10,95k in 1867AD, led by Qaqortoq (1,15k in 1860AD), Ilulissat (840), Nuuk (760) and Sisimiut (720) [@marquardt2002change; @gad1973history].

<figure class="crd-table-figure" id="tab:regions-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1763AD</th><th class="crd-th">1790AD</th><th class="crd-th">1815AD</th><th class="crd-th">1831AD</th><th class="crd-th">1851AD</th><th class="crd-th">1861AD</th><th class="crd-th">1867AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Canada and Canada East (Province of Quebec)</strong></td><td class="crd-td">758.416</td><td class="crd-td">76k</td><td class="crd-td">170,5k</td><td class="crd-td">355k</td><td class="crd-td">562k</td><td class="crd-td">899k</td><td class="crd-td">1,12M</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>2. Upper Canada and Canada West (Province of Ontario)</strong></td><td class="crd-td">217.232</td><td class="crd-td">21,5k</td><td class="crd-td">38k</td><td class="crd-td">112k</td><td class="crd-td">248,5k</td><td class="crd-td">963k</td><td class="crd-td">1,41M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">4.318</td><td class="crd-td">10,8k</td><td class="crd-td">42k</td><td class="crd-td">81,5k</td><td class="crd-td">152k</td><td class="crd-td">276,9k</td><td class="crd-td">330,9k</td><td class="crd-td">364k</td></tr>
<tr><td class="crd-td"><strong>4. Colony of New Brunswick</strong></td><td class="crd-td">4.885</td><td class="crd-td">3,8k</td><td class="crd-td">24k</td><td class="crd-td">56k</td><td class="crd-td">105k</td><td class="crd-td">193,8k</td><td class="crd-td">252k</td><td class="crd-td">271k</td></tr>
<tr><td class="crd-td"><strong>5. Colony of Prince Edward Island</strong></td><td class="crd-td">1.087</td><td class="crd-td">1,5k</td><td class="crd-td">4k</td><td class="crd-td">13,5k</td><td class="crd-td">29,5k</td><td class="crd-td">67,5k</td><td class="crd-td">80,9k</td><td class="crd-td">89k</td></tr>
<tr><td class="crd-td"><strong>6. Colony of Newfoundland and Labrador</strong></td><td class="crd-td">375.563</td><td class="crd-td">15,7k</td><td class="crd-td">19,3k</td><td class="crd-td">43k</td><td class="crd-td">67k</td><td class="crd-td">103k</td><td class="crd-td">131,5k</td><td class="crd-td">142,8k</td></tr>
<tr><td class="crd-td"><strong>7. French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">205</td><td class="crd-td">400</td><td class="crd-td">1,5k</td><td class="crd-td">250</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>8. District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">112.623</td><td class="crd-td">6,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td><td class="crd-td">8,5k</td><td class="crd-td">12,4k</td><td class="crd-td">15,8k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>9. Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">3.240.647</td><td class="crd-td">31,5k</td><td class="crd-td">22,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">24,5k</td><td class="crd-td">27k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>10. Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">662.390</td><td class="crd-td">135k</td><td class="crd-td">88k</td><td class="crd-td">72k</td><td class="crd-td">60k</td><td class="crd-td">48k</td><td class="crd-td">55k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>11. North-Western Territory and High Arctic</strong></td><td class="crd-td">3.794.308</td><td class="crd-td">21k</td><td class="crd-td">19,5k</td><td class="crd-td">18,2k</td><td class="crd-td">17,4k</td><td class="crd-td">16,2k</td><td class="crd-td">15,6k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>12. Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">2.005.845</td><td class="crd-td">6,6k</td><td class="crd-td">7k</td><td class="crd-td">7,7k</td><td class="crd-td">8,7k</td><td class="crd-td">10,1k</td><td class="crd-td">10,8k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">11.177.519</td><td class="crd-td">330,3k</td><td class="crd-td">441,8k</td><td class="crd-td">792k</td><td class="crd-td">1,29M</td><td class="crd-td">2,62M</td><td class="crd-td">3,45M</td><td class="crd-td">3,64M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Sub-regional population totals across twelve territories of Colonial Canada and Greenland, 1763 to 1867AD.</figcaption>
</figure>

## Urban Hierarchy and Leading Regional Peaks

Across all 1.149 catalogued centres, nineteenth-century urbanisation sharpened the primacy of the St. Lawrence-Great Lakes corridor and Atlantic port cities. By 1861-1867AD, ten cities (eleven gazetteer entries counting both York Upper Canada at 44,82k and Toronto at 44,8k) exceeded 10k residents (Montréal 90,3k, Québec 51,1k, York Upper Canada 44,82k, Toronto 44,8k, St. John's 27,5k, Saint John City 27,32k, Halifax 25k, Hamilton 19,1k, Ottawa 14,7k, Kingston 13,74k and London 11,56k), alongside the Cariboo gold-rush camp of Barkerville (10k in 1863AD) and the ephemeral Loyalist town of Shelburne (9,8k in 1784AD) (Table \ref{tab:leading-cc1867}).

<figure class="crd-table-figure" id="tab:leading-cc1867">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1867AD Pop.</th><th class="crd-th">Leading Settlement (Peak)</th><th class="crd-th">Second Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Lower Canada and Canada East</strong></td><td class="crd-td">534</td><td class="crd-td">1,12M</td><td class="crd-td">Montréal (90,3k, 1861AD)</td><td class="crd-td">Québec (51,1k, 1861AD)</td></tr>
<tr><td class="crd-td"><strong>2. Upper Canada and Canada West</strong></td><td class="crd-td">274</td><td class="crd-td">1,54M</td><td class="crd-td">York Upper Canada (44,8k, 1861AD)</td><td class="crd-td">Toronto (44,8k, 1861AD)</td></tr>
<tr><td class="crd-td"><strong>3. Colony of Nova Scotia and Cape Breton</strong></td><td class="crd-td">19</td><td class="crd-td">364k</td><td class="crd-td">Yarmouth (5,6k, 1861AD)</td><td class="crd-td">Pictou Port NS (4,2k, 1861AD)</td></tr>
<tr><td class="crd-td"><strong>4. Colony of New Brunswick</strong></td><td class="crd-td">13</td><td class="crd-td">271k</td><td class="crd-td">Saint John City (27,3k, 1861AD)</td><td class="crd-td">St. Andrews NB (3,9k, 1851AD)</td></tr>
<tr><td class="crd-td"><strong>5. Colony of Prince Edward Island</strong></td><td class="crd-td">7</td><td class="crd-td">89k</td><td class="crd-td">Belfast-PEI (2,1k, 1861AD)</td><td class="crd-td">Bedeque (1,5k, 1861AD)</td></tr>
<tr><td class="crd-td"><strong>6. Colony of Newfoundland and Labrador</strong></td><td class="crd-td">75</td><td class="crd-td">142,8k</td><td class="crd-td">St. John's (27,5k, 1867AD)</td><td class="crd-td">Harbour Grace (5,1k, 1857AD)</td></tr>
<tr><td class="crd-td"><strong>7. French Colony of Saint-Pierre and Miquelon</strong></td><td class="crd-td">4</td><td class="crd-td">4,2k</td><td class="crd-td">Saint-Pierre (3,2k, 1867AD)</td><td class="crd-td">Saint-Pierre Island Town (2,1k, 1851AD)</td></tr>
<tr><td class="crd-td"><strong>8. District of Assiniboia and Red River Settlement</strong></td><td class="crd-td">17</td><td class="crd-td">18,5k</td><td class="crd-td">Winnipeg (3,2k, 1867AD)</td><td class="crd-td">St. Boniface (2,1k, 1867AD)</td></tr>
<tr><td class="crd-td"><strong>9. Rupert's Land Prairies and Hudson's Bay Interior</strong></td><td class="crd-td">54</td><td class="crd-td">28k</td><td class="crd-td">Fort Edmonton Native Settlement (1,1k, 1865AD)</td><td class="crd-td">Île-à-la-Crosse (750, 1865AD)</td></tr>
<tr><td class="crd-td"><strong>10. Colonies of Vancouver Island and British Columbia</strong></td><td class="crd-td">50</td><td class="crd-td">40k</td><td class="crd-td">Barkerville (10k, 1863AD)</td><td class="crd-td">Victoria (4,8k, 1867AD)</td></tr>
<tr><td class="crd-td"><strong>11. North-Western Territory and High Arctic</strong></td><td class="crd-td">34</td><td class="crd-td">15,2k</td><td class="crd-td">Fort Chipewyan Native Town (800, 1865AD)</td><td class="crd-td">Tuktoyaktuk (680, 1780AD)</td></tr>
<tr><td class="crd-td"><strong>12. Danish Inspectorates of North and South Greenland and East Greenland</strong></td><td class="crd-td">68</td><td class="crd-td">10,9k</td><td class="crd-td">Qaqortoq (1,1k, 1860AD)</td><td class="crd-td">Qaqortoq Colony (850, 1860AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading two catalogued settlements by peak population across each of the twelve sub-regions, 1763 to 1867AD.</figcaption>
</figure>

# Limitations

Four constraints qualify precision across the 1763 to 1867AD demographic series. First, pre-1851AD Upper Canada assessment rolls under-enumerated landless farm labourers, canal navvies, transient timber raftsmen and Shield Ojibwa-Cree bands, yielding +/- 15% confidence bounds prior to 1805AD and requiring explicit northern Shield adjustments through 1861AD [@statcan1876censuses; @ubelaker1988north].

Second, Hudson's Bay Company Assiniboia census schedules (1831-1856AD) counted settled Red River parishes while omitting nomadic Métis buffalo-hunting brigades and adjacent Plains First Nations, requiring an additional 6k to 9k adjustment above enumerated parish rolls [@statcan1876censuses; @ray1974indians]. Similarly, post-1861AD British Columbia and Newfoundland trajectories interpolate across the 1857AD and 1869AD Newfoundland schedules and the 1858-1863AD Fraser-Cariboo gold-rush spike [@newfoundland1857abstract; @barman2007west].

Third, Indigenous mortality estimates in Rupert's Land, British Columbia and the North-Western Territory carry +/- 20% to +/- 25% uncertainty bounds between 1763AD and 1841AD where written post journals only observed bands trading directly at forts [@daschuk2013clearing; @boyd1999coming; @helm1981subarctic]. Fourth, while the 93.129-site-period North American archaeological kriging surface accurately weights settled river corridors, survey density drops north of 55°N, widening high-Arctic equivalent circular catchment radii toward 40,95 km at the 90th percentile (40,69 km Voronoi radius).

# Conclusion

Between 1763AD and 1867AD, British North America and its associated territories underwent a profound demographic inversion. Aggregate population across the 11.177.519 km² domain multiplied eleven-fold from 330,31k in 1763AD to 3,64M (3.644.650) at Confederation, shifting the continental centre of gravity from a Pacific-Indigenous majority (40,9% in British Columbia and Vancouver Island alone in 1763AD) to an overwhelmingly eastern agrarian and urban federation in which Ontario, Québec and the Atlantic provinces held 96,8% of all inhabitants by 1867AD.

That transformation fused high *Canadien* marital fertility in Lower Canada with Loyalist resettlement and post-1815AD British and Irish migration into Upper Canada and the Maritimes, raising urban networks led by Montréal (90,3k), Québec (51,1k), Toronto (44,8k), St. John's (27,5k), Saint John City (27,32k) and Halifax (25k) even as repeated smallpox waves decimated Western and Pacific First Nations.

Integrating 1.149 catalogued settlements (from 1.380 ledger candidates) with the 93.129-site-period continental kriging surface ($\tau_1 = 1,35$, 14,24x baseline) establishes a continuous statistical and spatial bridge from the Treaty of Paris directly into the post-1867AD Dominion census era.

Across the western interior, Assiniboia, Rupert's Land and British Columbia remained outside the four-province Confederation of July 1867, providing a clear pre-railway benchmark ahead of western territorial transfer and transcontinental agrarian settlement after 1870AD.

# Sources

<div id="refs"></div>
