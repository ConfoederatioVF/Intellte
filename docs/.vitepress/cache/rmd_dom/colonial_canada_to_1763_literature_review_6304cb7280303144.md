---
title: "Colonial Canada until the Seven Years' War"
subtitle: "CENTAUR-II: New France Censuses, Acadia, Newfoundland and Greenland, 1500 to 1763AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_canada_to_1763_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_canada_to_1763_spatial.png"
hero_caption: "Sub-regional areal mask and 1.352 catalogued settlements across 8 territories of New France, British Atlantic colonies, Rupert's Land and Greenland, 1500 to 1763AD."
hero_label: "fig:hero-colonial-canada-to-1763"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the population of Canada, Saint-Pierre-et-Miquelon and Greenland from 1500AD to the Treaty of Paris in 1763AD under CENTAUR-II. Across eight territorial masks covering 11.177.519 km² (334.880 5-arcminute pixels), the combined population fell from 346,5k in 1500AD and 333,55k in 1600AD to a seventeenth-century trough of 263,12k in 1666AD after epidemic mortality and warfare broke the Huron-Wendat and St. Lawrence Iroquoian confederacies [@trigger1985natives; @warrick2008population; @tremblay2006st]. Subsequent natural increase among French *habitants* in the St. Lawrence seigneuries, expansion across Acadia and Newfoundland and persistence across interior First Nations and Inuit hunting grounds restored total numbers to 269,75k in 1700AD, 303,75k in 1739AD, 329,26k in 1754AD and 330,51k in 1763AD [@statcan1876censuses; @prins1996mikmaq; @ray1974indians].

The series ties Jean Talon's 1666AD nominal roll of 3.215 French settlers and successive New France, Acadian and Newfoundland enumerations in Volume IV of *Censuses of Canada 1665 to 1871* [@statcan1876censuses] to explicit Indigenous and Kalaallit baselines across the subarctic, prairie, Pacific and Arctic basins [@ubelaker1988north; @boyd1999coming; @gad1973history]. Spatial allocation across rural pixels draws on non-stationary Matérn ($\nu = 3/2$) residual kriging calibrated from 93.129 unique site-period observations (286.193 horizon site-record sum) across 3.833 domestic catchments (15.517.268 km², or 15,52M km²; 2.570 active inhabited catchments, 67,05% coverage), 251 cross-frontier buffer catchments and 493.687 valid terrestrial cells (18.561.382 km², or 18,56M km²; 78.938 to 149.138 active cells across 10 horizons from 13000BC to 1650AD; 14,24x over the 6.539 legacy baseline; regularised $\tau_1 = 1,35$ on all 10 horizons, raw 1,519 to 1,6098 with mean 1,5782, $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km with mean 47 km, raw nugget 0, regularised 0,04, WLS residual $R^2$ 0,999 to 0,9992, mean 0,9991) [@paciorek2006spatial], paired with 1.352 catalogued settlements drawn from 1.484 ledger candidates.

# Background

## Pre-Contact Subsistence Geography (1500AD)

Between 1500AD and 1763AD, northern North America experienced a demographic reversal quite different from that of the Atlantic Thirteen Colonies. At the opening of the sixteenth century, virtually the whole of Canada and Greenland remained Indigenous territory, and human numbers were governed not by plough agriculture along the eastern seaboard but by salmon rivers, coastal sea-mammal grounds, bison plains and a single northern maize belt along the lower Great Lakes and St. Lawrence valley.

On the Pacific Coast and across the Yukon and Mackenzie basins lived roughly 168k people, almost half of the entire northern total, concentrated in large cedar-plank winter villages from Haida Gwaii and the Nass River to Vancouver Island and the Fraser delta alongside interior Dene and Mackenzie Inuit bands [@boyd1999coming; @duff1964indian]. A second major concentration of 71k to 74k maize-beans-squash farmers inhabited Huronia, the Simcoe-Bruce uplands and the Niagara-Grand River corridor of southern Ontario, grouped into the Huron-Wendat, Tionontati (Petun) and Neutral confederacies [@warrick2008population].

Downstream along the St. Lawrence River itself, another 12,5k St. Lawrence Iroquoians cultivated maize and exploited seasonal St. Lawrence eel and shad fisheries around Stadacona and Hochelaga when Jacques Cartier wintered there in 1535AD [@tremblay2006st]. Their palisaded river-terrace towns marked the northernmost limit of continuous Iroquoian horticulture in eastern North America.

Across the remaining four-fifths of the northern half-continent, seasonal resource ceilings kept population densities thin. The eastern Maritime woodlands and Gaspé Peninsula supported around 16k Mi'kmaq, Wolastoqiyik (Maliseet) and Passamaquoddy hunter-fishers [@prins1996mikmaq; @miller1976abnakis], while Newfoundland and coastal Labrador held roughly 6k Beothuk, Innu and Labrador Inuit [@marshall1996history].

West of Lake Superior, the aspen parklands and shortgrass prairies carried an estimated 42k bison-hunting Algonquian, Siouan and Blackfoot bands, while the boreal shield and Hudson Bay tundra of Rupert's Land sustained 24k Cree, Innu, Dene and Inuit [@ray1974indians; @ubelaker1988north]. In Greenland, following the fifteenth-century extinction of the Norse Eastern and Western Settlements, around 7k Thule-descended Kalaallit occupied the western and south-western fjords [@gad1971history]. All told, in 1500AD a territory of 11.177.519 km² held 346,5k inhabitants at a continental average of 0,031 persons/km².

## The Iroquoian Collapse (1535 to 1666AD)

This pre-contact distribution broke apart during the century after 1550AD. First, between Cartier's departures in 1542AD and Samuel de Champlain's arrival in 1603-1608AD, the St. Lawrence Iroquoians vanished from the Montreal-Quebec corridor through a combination of inter-tribal warfare, European pathogens arriving along Basque and Breton Gulf trade routes and climatic cooling [@tremblay2006st; @trigger1985natives]. Their departure left the valley to seasonally visiting Innu, Algonquin and Mohawk parties and lowered the St. Lawrence mask from 12,5k in 1500AD to 5,5k in 1600AD.

Second, between 1634AD and 1640AD, European smallpox and measles travelled up the Ottawa and St. Lawrence trade corridors into Huronia along with French missionaries, halving Huron-Wendat, Tionontati and Neutral numbers [@warrick2008population]. Weakened by epidemic mortality and lacking Dutch firearms available to Haudenosaunee war parties from New York, the Huron-Wendat confederacy fell in 1649AD, followed by the Tionontati and Neutral nations by 1651AD [@trigger1985natives; @warrick2008population].

Southern Ontario collapsed from 74k in 1600AD to 11k by 1666AD, pulling the continental total down by 24,1% to its seventeenth-century nadir of 263,12k. Small groups of Huron-Wendat refugees resettled under French protection near Québec at Lorette (Wendake), while Anishinaabe (Ojibwa, Odawa and Mississauga) bands moved gradually southward from Lake Superior and Georgian Bay into the vacated Ontario peninsula [@schmalz1991ojibwa].

## Royal Administration and French-Canadian Fertility (1608 to 1763AD)

French colonisation started slowly on the edges of this upheaval. Pierre Dugua de Mons and Champlain established Port-Royal in Acadia in 1605AD and Québec in 1608AD, yet for more than fifty years under the Company of One Hundred Associates both colonies remained small fur-trade garrisons and mission depots [@statcan1876censuses; @trigger1985natives]. As late as 1640AD, scarcely a few hundred French men and women wintered along the St. Lawrence.

Only in 1663AD did Louis XIV assume direct royal administration, dispatch the Carignan-Salières regiment to check Haudenosaunee raids, sponsor roughly 770 female migrants (*Filles du Roi*, 1663-1673AD) and appoint Intendant Jean Talon. Talon's nominal census of 1666AD recorded 3.215 European settlers along the St. Lawrence, rising to 9.677 in 1681AD [@statcan1876censuses]. Because French transatlantic emigration practically ceased after 1673AD - scarcely 10k French arrivals ever settled permanently in Canada - subsequent population expansion was overwhelmingly endogenous.

Parish-register reconstructions along the St. Lawrence seigneuries demonstrate the mechanics of this growth. Early female marriage near age twenty, short inter-birth intervals, abundant river-lot cereal and livestock subsistence and relative epidemiological isolation in a cold climate produced sustained natural increase near 2,5% per year [@colejoduran2024early; @labuda2022effective; @moreau2013native]. Whereas eighteenth-century French Mediterranean ports such as Martigues still endured severe plague mortality shocks and post-epidemic immigration churn [@darlu2026plague], and northern European pre-industrial parishes faced tighter inheritance and subsistence ceilings [@faurie2009middleborns], Québec founder lineages multiplied across fertile riverfront *rangs* between Québec, Trois-Rivières and Montréal. Enumerated settlers nearly doubled every generation, reaching 15.800 in 1700AD, 18.119 in 1713AD, 42.701 in 1739AD, 55.009 in 1754AD and 66.500 by 1763AD [@statcan1876censuses].

## Atlantic Cod Fisheries and Imperial Rivalry

Around the Atlantic rim, demographic change tracked imperial rivalry and fisheries rather than seigneurial farming. European demand for dried and salted Atlantic cod (*Gadus morhua*), rooted in late mediaeval North Atlantic provisioning networks [@orton2011stable], drew thousands of seasonal Basque, Breton, Norman and West Country crews to Newfoundland and the Gulf of St. Lawrence each summer before year-round stations stabilised at St. John's (1627AD), Plaisance (1662AD), Harbour Grace and Carbonear [@statcan1876censuses; @marshall1996history].

In Acadia, a small French founder cohort drained tidal saltmarshes with *aboiteaux* dykes around Port-Royal, Grand-Pré and Beaubassin, growing through high fertility to more than 10k inhabitants by 1750AD. Following the 1713AD Treaty of Utrecht, which ceded peninsular Nova Scotia and Newfoundland to Britain, France built the fortified port of Louisbourg on Île Royale and settled Île Saint-Jean, while Britain founded Halifax in 1749AD and Lunenburg in 1753AD [@statcan1876censuses; @prins1996mikmaq].

Between 1755AD and 1762AD, however, the British deportation of roughly 11,5k Acadians (*Grand Dérangement*) and the capture of Louisbourg in 1758AD cut Maritime population from 30,9k in 1754AD to 16,5k in 1763AD [@statcan1876censuses; @prins1996mikmaq]. Across the northern interior and Arctic, Hudson's Bay Company posts at York Factory (1684AD) and Churchill (1717AD), La Vérendrye's western posts (from 1731AD) and Danish-Moravian stations in West Greenland (from 1721-1733AD) anchored thin trading and missionary networks amidst independent Indigenous and Kalaallit majorities [@ray1974indians; @gad1973history].

# Methodology

## Eight-Mask Territorial Partition and Census Integration

To avoid mixing incompatible historical series across colonial and unceded territories, the 11.177.519 km² domain (334.880 5-arcminute pixels) is partitioned into eight mutually exclusive areal masks evaluated across nine benchmark years: 1500AD, 1600AD, 1666AD, 1681AD, 1700AD, 1713AD, 1739AD, 1754AD and 1763AD.

The first mask covers New France along the St. Lawrence valley, combining the royal governments of Québec, Trois-Rivières and Montréal (600.260 km²; 11.053 pixels). Pre-1666AD anchors trace St. Lawrence Iroquoian withdrawal from 12,5k in 1500AD to 5,5k in 1600AD [@tremblay2006st]. From 1666AD onward, settler figures follow the official nominal and summary censuses in Volume IV of *Censuses of Canada 1665 to 1871*: 3.215 in 1666AD, 9.677 in 1681AD, 15.800 in 1700AD (interpolated between 1698AD and 1706AD), 18.119 in 1713AD, 42.701 in 1739AD, 55.009 in 1754AD and 66.500 in 1763AD (bridging the 1760AD and 1765AD British military rolls) [@statcan1876censuses]. Because French colonial lists omitted non-domiciled Indigenous groups and understated reserve communities, an explicit Indigenous component of 4,5k to 5k persons is added across all post-1666AD benchmarks for Kahnawake, Kanesatake, Odanak, Wendake, Innu and Algonquin bands, lifting the regional mask total from 8.015 in 1666AD to 71.500 in 1763AD [@trigger1985natives].

The second mask encloses Acadia, Nova Scotia, Île Royale and Île Saint-Jean (127.059 km²; 2.419 pixels). Early-contact Mi'kmaq, Wolastoqiyik and Passamaquoddy populations decline from 16k in 1500AD and 12k in 1600AD to 6,9k in 1666AD and 5,4k by 1713AD under sixteenth- and seventeenth-century disease pressure [@miller1976abnakis; @prins1996mikmaq]. Acadian nominal rolls at Port-Royal, Les Mines (Grand-Pré), Beaubassin and Cobequid supply 441 residents in 1671AD, 885 in 1686AD, 1.484 in 1701AD and 1.773 in 1714AD, reinforced by Sieur de La Roque's 1752AD survey recording 4.325 residents on Île Royale and 2.233 on Île Saint-Jean [@statcan1876censuses]. Adding British settlements at Halifax (2.576 in 1749AD) and Lunenburg (1.453 in 1753AD) lifts the mask from 7.173 in 1713AD to 18.400 in 1739AD and 30.900 in 1754AD before the *Grand Dérangement* and the 1758AD fall of Louisbourg reduce the 1763AD total to 16.500 [@statcan1876censuses; @prins1996mikmaq].

The third mask spans Newfoundland, coastal Labrador and Saint-Pierre-et-Miquelon (414.755 km²; 8.724 pixels). Pre-contact Beothuk, Innu and Labrador Inuit baselines move from 6k in 1500AD to 5,05k in 1600AD and 3k in 1763AD as interior Beothuk groups withdrew from European shore stations [@marshall1996history]. Permanent resident settler totals derive from British Board of Trade and Governor winter returns (1.500 English residents in 1698AD, 3.295 in 1716AD, 6.900 in 1750AD and 13.112 in 1763AD) summed with French Plaisance (388 in 1687AD; 650 in 1705AD) prior to the 1713AD Treaty of Utrecht and French Saint-Pierre-et-Miquelon (450 in 1763AD) [@statcan1876censuses].

The fourth mask covers the *Pays d'en Haut* and southern Ontario (216.923 km²; 4.137 pixels). Warrick's archaeological village-area and longhouse-hearth reconstructions set the Huron-Wendat, Tionontati and Neutral core at 71k in 1500AD and 74k in 1600AD, collapsing to 11k by 1666AD [@warrick2008population; @trigger1985natives]. Subsequent northward and eastward expansion by Anishinaabe (Ojibwa, Odawa and Mississauga) bands alongside small French-speaking agricultural pockets near Detroit (Assumption) and fort garrisons at Niagara and Frontenac gradually restores the mask to 12,5k in 1700AD, 14,5k in 1739AD and 16k in 1763AD [@schmalz1991ojibwa].

The fifth, sixth and seventh masks reconstruct interior and western Indigenous polities across areas where European presence before 1763AD consisted solely of trading factories and mobile canoe brigades. Rupert's Land and the Hudson's Bay Company zone (3.265.241 km²; 75.393 pixels) eases gradually from 24k in 1500AD to 21,5k in 1700AD and 19,8k in 1763AD [@ray1974indians; @ubelaker1988north]. The Western Prairies and La Vérendrye Saskatchewan corridor (357.216 km²; 6.906 pixels) decline gently from 42k in 1500AD to 37k in 1700AD and 34k in 1763AD prior to the horseback smallpox epidemic of the 1780s [@ray1974indians]. Across the Pacific Northwest Coast, Yukon and Mackenzie basins (4.190.220 km²; 133.024 pixels), dense coastal salmon, cedar and marine-mammal villages alongside interior Dene bands sustain 168k inhabitants in 1500AD, 158k in 1700AD and 150k in 1763AD before late eighteenth-century maritime epidemics struck [@boyd1999coming; @duff1964indian; @harris1994voices].

The eighth mask covers Greenland (2.005.845 km²; 93.224 pixels). Relying on Finn Gad's historical synthesis of Thule archaeological continuity and early Danish-Moravian parish rolls at Godthåb (Nuuk, 1721/1728AD), Neu-Herrnhut (1733AD), Christianshåb (Qasigiannguit, 1734AD), Jakobshavn (Ilulissat, 1741AD) and Frederikshåb (Paamiut, 1742AD), total population expands gently from 7k in 1500AD to 8k in 1700-1713AD, drops sharply to 5,5k in 1739AD after the 1733-1734AD smallpox disaster, and recovers to 6,6k by 1763AD [@gad1971history; @gad1973history].

## Non-Stationary Matérn Kriging Calibration

Intra-regional spatial allocation distributes unenumerated rural and Indigenous populations within each of the eight masks using a continental North American and Greenlandic multi-registry archaeological kriging surface. Rather than relying on modern urban lights or sparse global radiocarbon lists alone, the continental substratum integrates national, provincial, state and museum registers, including the Canadian Archaeological Radiocarbon Database, Greenland National Museum *Nunniffiit* site inventories, regional CRM surveys and continental radiocarbon compilations, into 93.129 deduplicated site-period observations (286.193 horizon site-record sum) grouped across 3.833 domestic Voronoi catchments spanning 15.517.268 km² (15,52M km²; 2.570 active inhabited catchments, representing 67,05% coverage with an equivalent circular radius $r = \sqrt{A/\pi}$ median of 29,48 km and a 90th-percentile radius of 40,95 km overall, or 29,3 km median and 39,85 km 90th percentile across active catchments, and 29,78 km median and 40,69 km 90th-percentile Voronoi radius in continental diagnostics). This composite yields an effective archaeological site density 14,24x higher than the 6.539-entry legacy global radiocarbon baseline across 493.687 valid 5-arcminute terrestrial cells (18.561.382 km², or 18,56M km², with 78.938 to 149.138 active inhabited non-wasteland cells across 10 horizons from 13000BC to 1650AD), stabilised along its southern, Beringian and Caribbean margins by 251 cross-frontier buffer catchments extending 300 km outward.

Density residuals are interpolated via two-dimensional Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging conditioned on coastal proximity, fluvial distance decay, terrain slope and the Nares Strait split [@paciorek2006spatial]. Across the ten underlying continental Holocene calibration horizons (13000BC to 1650AD), regularised dimensionless short-range correlation calibrates at $\tau_1 = 1,35$ on every horizon (unregularised raw $\tau_1$ 1,519 to 1,6098, mean 1,5782, continental diagnostic 1,5794; corresponding to an effective short range of 45,23 km to 47,94 km with mean 47 km) and long-range scale at $\tau_2 = 2,9025$ (2,9). Raw variogram estimation produces nugget-to-sill ratio 0 across all 10 horizons, regularised to 0,04 across all 10 horizons to preserve smooth local variance across WLS covariate regressions ($R^2 = 0,9990$ to 0,9992, mean 0,9991). On top of this rural substratum, the 1.352 catalogued settlements compiled from 1.484 ledger candidates (after consolidating 132 duplicate aliases within 2 km) anchor St. Lawrence seigneurial parishes, Maritime ports, Newfoundland winter harbours, interior trading posts and Greenlandic fjord camps.

# Testing and Validation

Arithmetic reconciliation confirms exact sub-regional additivity across all nine benchmark dates from 1500AD (346.500) to 1763AD (330.512) and tight continuity across the 1763AD Treaty of Paris transition into the post-1763AD British North American chapter (330.512 against 330.312, a difference of 200 persons or 0,06%). That minor 200-person offset reflects the territorial reorganisation of 1763AD rather than rounding drift: Newfoundland, Labrador and Saint-Pierre carry across with exact arithmetic parity (16.112 total across 414.755 km² here, reorganised into 15.712 across 375.563 km² in Newfoundland-Labrador plus 400 across 205 km² in Saint-Pierre-et-Miquelon) and Greenland carries identically (6.600 across 2.005.845 km²), while boundary shifts between New France/Pays d'en Haut and expanded Lower/Upper Canada (+10.000) offset slightly against Rupert's Land, Acadia/New Brunswick and Pacific-Arctic mask boundary adjustments (-10.200). Table \ref{tab:validation-1763} reconciles enumerated New France, Acadian and Newfoundland colonial returns against total module series between 1666AD and 1763AD.

<figure class="crd-table-figure" id="tab:validation-1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">NF Settler</th><th class="crd-th">NF Total</th><th class="crd-th">Acadia Total</th><th class="crd-th">NL Return</th><th class="crd-th">NL Total</th><th class="crd-th">Module Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1666AD</strong></td><td class="crd-td">3.215</td><td class="crd-td">8.015</td><td class="crd-td">6.900</td><td class="crd-td">-</td><td class="crd-td">5.400</td><td class="crd-td">263.115</td></tr>
<tr><td class="crd-td"><strong>1681AD</strong></td><td class="crd-td">9.677</td><td class="crd-td">14.477</td><td class="crd-td">6.550</td><td class="crd-td">1.500 (1698)</td><td class="crd-td">5.850</td><td class="crd-td">266.877</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">15.800</td><td class="crd-td">20.300</td><td class="crd-td">6.650</td><td class="crd-td">-</td><td class="crd-td">5.800</td><td class="crd-td">269.750</td></tr>
<tr><td class="crd-td"><strong>1713AD</strong></td><td class="crd-td">18.119</td><td class="crd-td">22.619</td><td class="crd-td">7.173</td><td class="crd-td">3.295 (1716)</td><td class="crd-td">6.400</td><td class="crd-td">270.392</td></tr>
<tr><td class="crd-td"><strong>1739AD</strong></td><td class="crd-td">42.701</td><td class="crd-td">47.501</td><td class="crd-td">18.400</td><td class="crd-td">6.900 (1750)</td><td class="crd-td">8.150</td><td class="crd-td">303.751</td></tr>
<tr><td class="crd-td"><strong>1754AD</strong></td><td class="crd-td">55.009</td><td class="crd-td">60.009</td><td class="crd-td">30.900</td><td class="crd-td">-</td><td class="crd-td">10.250</td><td class="crd-td">329.259</td></tr>
<tr><td class="crd-td"><strong>1763AD</strong></td><td class="crd-td">66.500</td><td class="crd-td">71.500</td><td class="crd-td">16.500</td><td class="crd-td">13.112</td><td class="crd-td">16.112</td><td class="crd-td">330.512</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Reconciliation of New France, Acadian and Newfoundland colonial census counts against total module estimates, 1666 to 1763AD.</figcaption>
</figure>

Cross-checking the settlement gazetteer against the eight regional masks confirms coverage across every territory (1.352 included settlements, 132 deduplicated exclusions and 0 unaccounted ledger candidates). Table \ref{tab:kriging-cc1763} reports the fitted non-stationary Matérn parameters across all ten continental Holocene calibration horizons (13000BC to 1650AD) from the North American kriging diagnostic output (93.129 unique site-periods across 3.833 domestic catchments, 2.570 active, 251 frontier buffer catchments, 493.687 valid land cells, 14,24x baseline), showing regularised $\tau_1 = 1,35$ on all 10 horizons (raw 1,519 to 1,6098, mean 1,5782), $\tau_2 = 2,9025$ (2,9), effective short range 45,23 km to 47,94 km (mean 47 km), raw nugget 0, regularised nugget 0,04 and WLS $R^2$ from 0,999 to 0,9992 (mean 0,9991) throughout.

<figure class="crd-table-figure" id="tab:kriging-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Calibration Horizon</th><th class="crd-th">Tau 1</th><th class="crd-th">Tau 2</th><th class="crd-th">Short Range</th><th class="crd-th">Raw Nugget</th><th class="crd-th">Reg. Nugget</th><th class="crd-th">WLS R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Palaeoindian and Early Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">45,23 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,999</td></tr>
<tr><td class="crd-td"><strong>Middle Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,94 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Late Archaic</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,14 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Early Woodland and Formative</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">46,83 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td></tr>
<tr><td class="crd-td"><strong>Middle Woodland Hopewell</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,46 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Late Woodland and Dorset</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,27 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Early Mississippian and Pueblo II</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">46,59 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Middle Mississippian and Pueblo III</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,2 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Late Pre-Contact Thule and Oneota</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,12 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Protohistoric Contact Horizon</strong></td><td class="crd-td">1,35</td><td class="crd-td">2,9025</td><td class="crd-td">47,2 km</td><td class="crd-td">0</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Holocene Matérn ($\nu = 3/2$) variogram parameters across ten North American calibration horizons (93.129 unique site-periods across 3.833 domestic catchments).</figcaption>
</figure>

Average population density across the entire 11.177.519 km² domain shifts from 0,031 persons/km² in 1500AD to 0,0235 persons/km² at the 1666AD nadir before recovering to 0,0296 persons/km² in 1763AD (Table \ref{tab:density-cc1763}). Table \ref{tab:bounds-cc1763} compiles the pixel counts, catalogued settlement totals and 1500AD and 1763AD population uncertainty envelopes across all eight sub-regions.

<figure class="crd-table-figure" id="tab:density-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1500AD</th><th class="crd-th">1666AD</th><th class="crd-th">1713AD</th><th class="crd-th">1763AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. New France</strong></td><td class="crd-td">600.260</td><td class="crd-td">0,0208</td><td class="crd-td">0,0134</td><td class="crd-td">0,0377</td><td class="crd-td">0,1191</td></tr>
<tr><td class="crd-td"><strong>2. Acadia, Nova Scotia, Ile Royale</strong></td><td class="crd-td">127.059</td><td class="crd-td">0,1259</td><td class="crd-td">0,0543</td><td class="crd-td">0,0565</td><td class="crd-td">0,1299</td></tr>
<tr><td class="crd-td"><strong>3. Newfoundland</strong></td><td class="crd-td">414.755</td><td class="crd-td">0,0145</td><td class="crd-td">0,013</td><td class="crd-td">0,0154</td><td class="crd-td">0,0388</td></tr>
<tr><td class="crd-td"><strong>4. Pays d'en Haut and Great Lakes Fur-Trade Posts</strong></td><td class="crd-td">216.923</td><td class="crd-td">0,3273</td><td class="crd-td">0,0507</td><td class="crd-td">0,0599</td><td class="crd-td">0,0738</td></tr>
<tr><td class="crd-td"><strong>5. Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">3.265.241</td><td class="crd-td">0,0074</td><td class="crd-td">0,0069</td><td class="crd-td">0,0065</td><td class="crd-td">0,0061</td></tr>
<tr><td class="crd-td"><strong>6. Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">357.216</td><td class="crd-td">0,1176</td><td class="crd-td">0,1106</td><td class="crd-td">0,1008</td><td class="crd-td">0,0952</td></tr>
<tr><td class="crd-td"><strong>7. Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">4.190.220</td><td class="crd-td">0,0401</td><td class="crd-td">0,0387</td><td class="crd-td">0,0372</td><td class="crd-td">0,0358</td></tr>
<tr><td class="crd-td"><strong>8. Greenland</strong></td><td class="crd-td">2.005.845</td><td class="crd-td">0,0035</td><td class="crd-td">0,0039</td><td class="crd-td">0,004</td><td class="crd-td">0,0033</td></tr>
<tr><td class="crd-td"><strong>Continental Mean</strong></td><td class="crd-td">11.177.519</td><td class="crd-td">0,031</td><td class="crd-td">0,0235</td><td class="crd-td">0,0242</td><td class="crd-td">0,0296</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Population density (persons per km²) across eight territories of Colonial Canada and Greenland at four benchmark dates, 1500 to 1763AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:bounds-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Pixels</th><th class="crd-th">Sites</th><th class="crd-th">1500AD Bounds</th><th class="crd-th">1763AD Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. New France</strong></td><td class="crd-td">11.053</td><td class="crd-td">294</td><td class="crd-td">9,4k to 15,6k</td><td class="crd-td">65,8k to 77,2k</td></tr>
<tr><td class="crd-td"><strong>2. Acadia, Nova Scotia, Ile Royale</strong></td><td class="crd-td">2.419</td><td class="crd-td">76</td><td class="crd-td">12k to 20k</td><td class="crd-td">14,2k to 18,8k</td></tr>
<tr><td class="crd-td"><strong>3. Newfoundland</strong></td><td class="crd-td">8.724</td><td class="crd-td">65</td><td class="crd-td">4,5k to 7,5k</td><td class="crd-td">14,2k to 18k</td></tr>
<tr><td class="crd-td"><strong>4. Pays d'en Haut and Great Lakes Fur-Trade Posts</strong></td><td class="crd-td">4.137</td><td class="crd-td">17</td><td class="crd-td">51,1k to 90,9k</td><td class="crd-td">12k to 20k</td></tr>
<tr><td class="crd-td"><strong>5. Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">75.393</td><td class="crd-td">96</td><td class="crd-td">17,3k to 30,7k</td><td class="crd-td">14,3k to 25,3k</td></tr>
<tr><td class="crd-td"><strong>6. Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">6.906</td><td class="crd-td">15</td><td class="crd-td">30,2k to 53,8k</td><td class="crd-td">24,5k to 43,5k</td></tr>
<tr><td class="crd-td"><strong>7. Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">133.024</td><td class="crd-td">84</td><td class="crd-td">121k to 215k</td><td class="crd-td">108k to 192k</td></tr>
<tr><td class="crd-td"><strong>8. Greenland</strong></td><td class="crd-td">93.224</td><td class="crd-td">705</td><td class="crd-td">5,2k to 8,8k</td><td class="crd-td">5,4k to 7,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Areal mask pixel counts, catalogued settlements and uncertainty envelopes at 1500AD and 1763AD across eight sub-regions.</figcaption>
</figure>

# Results

## Seventeenth-Century Indigenous Contraction and St. Lawrence Growth

Between 1500AD and 1666AD, northern North America suffered a net loss of 83,39k people (-24,1%), dropping from 346,5k to 263,12k (Figure \ref{fig:traj-cc1763}). That decline was overwhelmingly concentrated in the Great Lakes-St. Lawrence agricultural zone. In Southern Ontario (*Pays d'en Haut*), Huron-Wendat, Tionontati and Neutral populations peaked near 74k (0,341 persons/km²) around 1600AD, accounting for 22,2% of the entire northern half-continent, before smallpox, measles and the 1648-1651AD Haudenosaunee dispersal drove the basin down to 11k in 1666AD (-85,1%) [@warrick2008population; @trigger1985natives]. Along the St. Lawrence valley itself, the disappearance of Stadacona and Hochelaga lowered the valley from 12,5k in 1500AD to 5,5k in 1600AD prior to French settlement [@tremblay2006st].

From 1666AD onward, demographic momentum shifted decisively back to the St. Lawrence seigneuries. Under royal administration, the total population of New France climbed from 8.015 in 1666AD (3.215 colonists plus 4,8k Indigenous residents) to 14.477 in 1681AD, 20.300 in 1700AD, 22.619 in 1713AD, 47.501 in 1739AD, 60.009 in 1754AD and 71.500 in 1763AD [@statcan1876censuses]. Over ninety-seven years, New France raised its share of the continental module from 3% to 21,6% and its territorial density nearly nine-fold, from 0,0134 to 0,1191 persons/km².

Urban and seigneurial growth concentrated along three riverfront hubs. Québec grew from a winter post of 28 men in 1608AD to 547 in 1666AD, 1.100 in 1681AD and 9k at the 1750-1759AD siege, while Montréal expanded from 625 in 1666AD to 1.400 in 1681AD, 4.200 in 1739AD and 6k by 1750AD, joined by Trois-Rivières (800 in 1681AD) and dense rural parishes such as Île d'Orléans (2,25k in 1739AD), Beaupré (1,25k), Kahnawake (1,1k), Charlesbourg (940), Laval (890), Beauport (890) and Lévis (860) [@statcan1876censuses]. Rapid natural increase rested on abundant riverfront arable land, low epidemic exposure relative to Old World ports [@darlu2026plague] and sustained reproductive longevity among Québec founder families [@colejoduran2024early; @labuda2022effective; @moreau2013native].

<figure class="crd-figure-block" id="fig:traj-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763/fig2_colonial_canada_to_1763_trajectory.png" alt="fig:traj-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across eight Canadian and Greenlandic sub-regions from 1500 to 1763AD.</figcaption>
</figure>

## Acadia, Newfoundland and the Atlantic Cod Fisheries

Along the Gulf of St. Lawrence and Atlantic seaboard, growth followed a volatile imperial trajectory shaped by fortress building, fishing stations and wartime expulsions (Figure \ref{fig:shares-cc1763}). In Acadia and Nova Scotia, early seventeenth-century depopulation reduced Mi'kmaq and Wolastoqiyik totals from 16k in 1500AD to 6,9k in 1666AD [@miller1976abnakis; @prins1996mikmaq]. Once Acadian dyked marshland parishes stabilised around Port-Royal (1,45k in 1752AD), Grand-Pré (2,2k in 1755AD) and Beaubassin (1,6k in 1755AD), French settler expansion joined garrison construction at Louisbourg (growing from 160 in 1713AD to 4.174 in 1752AD and 5.200 at the 1758AD siege) and British foundation of Halifax (2.576 in 1749AD; 3k in 1763AD) and Lunenburg (1.453 in 1753AD) to quadruple the regional mask from 7.173 in 1713AD to 30.900 in 1754AD [@statcan1876censuses].

The deportation of roughly 11,5k Acadians during the *Grand Dérangement* (1755-1762AD) and the demolition of Louisbourg (dropping to 350 inhabitants by 1763AD) cut the regional total sharply back to 16.500 in 1763AD (0,1299 persons/km²) [@prins1996mikmaq; @statcan1876censuses]. Subsequent New England Planter immigration into vacated Fundy marshlands began right after 1760AD but had barely offset wartime disruption before the Treaty of Paris.

Newfoundland, Labrador and Saint-Pierre experienced steadier maritime growth as seasonal migratory cod fleets left behind permanent year-round families. After early seventeenth-century stability around 5,05k to 5,85k (mostly Beothuk, Innu and Labrador Inuit alongside small English and French shore stations), permanent settler numbers expanded rapidly in the eighteenth century, carrying the mask from 6.400 in 1713AD to 8.150 in 1739AD, 10.250 in 1754AD and 16.112 in 1763AD [@statcan1876censuses; @marshall1996history]. By the Peace of Paris, St. John's held 2,4k permanent winter residents, followed by Carbonear (720), Harbour Grace (680), Plaisance (480, down from 650 under French administration in 1705AD) and French-ceded Saint-Pierre (450).

<figure class="crd-figure-block" id="fig:shares-cc1763">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-colonial-canada-to-1763/fig3_colonial_canada_to_1763_shares.png" alt="fig:shares-cc1763" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across Canada and Greenland from 1500 to 1763AD.</figcaption>
</figure>

## Pays d'en Haut, Rupert's Land, the Prairies and the Pacific Coast

West of the Ottawa River, Indigenous polities retained demographic predominance throughout the colonial era prior to the 1763AD cession (Table \ref{tab:regions-cc1763}). In southern Ontario (*Pays d'en Haut*), Ojibwa, Odawa and Haudenosaunee migrations alongside French-Indigenous trade posts around Detroit and lake hubs at Orillia, Midland and Akwesasne raised regional numbers slowly from the 11k trough of 1666AD to 13k in 1713AD and 16k in 1763AD [@schmalz1991ojibwa]. Across the vast northern expanse of Rupert's Land (3,27M km²), fur-trade exchanges around York Factory (85 winter complement in 1763AD), Churchill (80), Moose Factory and Fort Albany left regional Indigenous populations gently declining from 24k in 1500AD to 19,8k in 1763AD (0,0061 persons/km²), while the Western Prairies (357.216 km²) drifted from 42k to 34k (0,0952 persons/km²) prior to mounted plains smallpox epidemics [@ray1974indians; @ubelaker1988north].

Most strikingly, the Pacific Northwest Coast, Yukon and Mackenzie basin remained the single largest demographic block in the entire northern territory across all nine benchmarks from 1500AD to 1763AD. Supported by intensive salmon fisheries, eulachon runs and cedar-plank coastal towns such as Marpole (1,45k in 1500AD), Yuquot (1,2k in 1600AD), Kittigazuit (1k in 1600AD) and Laxgalts'ap (920 in 1600AD), the western and north-western mask moved slowly from 168k in 1500AD (48,5% of continental total) to 156k in 1713AD and 150k in 1763AD (45,4% of total), preceding the catastrophic maritime smallpox outbreaks of the late 1770s and 1780s [@boyd1999coming; @duff1964indian; @harris1994voices].

## Danish-Moravian Greenland and the Arctic

Greenland's coastal fjords trace an independent Arctic cycle linked to European whaling and mission contacts from 1721AD onward. Throughout the sixteenth and seventeenth centuries, Kalaallit coastal winter settlements around Disko Bay (Ilulissat 480 in 1600AD), Nuup Kangerlua (Kangeq 320) and Avanersuaq (Comer's Midden 310; Nuulliit 290) grew modestly from 7k in 1500AD to 8k by 1700-1713AD [@gad1971history].

After Hans Egede founded Godthåb (Nuuk) in 1721-1728AD and Moravian missionaries established Neu-Herrnhut in 1733AD, an infected boy returning from Copenhagen sparked the 1733-1734AD smallpox epidemic that devastated West Greenland, reducing total population from 8k in 1713AD to 5,5k by 1739AD [@gad1973history]. Subsequent expansion of mission and Danish trade stations northward to Jakobshavn (Ilulissat) and southward to Frederikshåb (Paamiut) restored the island to 6.100 in 1754AD and 6.600 in 1763AD (0,0033 persons/km²).

<figure class="crd-table-figure" id="tab:regions-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1666AD</th><th class="crd-th">1700AD</th><th class="crd-th">1739AD</th><th class="crd-th">1754AD</th><th class="crd-th">1763AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. New France: Governments of Quebec, Trois-Rivieres and Montreal</strong></td><td class="crd-td">600.260</td><td class="crd-td">12,5k</td><td class="crd-td">5,5k</td><td class="crd-td">8k</td><td class="crd-td">20,3k</td><td class="crd-td">47,5k</td><td class="crd-td">60k</td><td class="crd-td">71,5k</td></tr>
<tr><td class="crd-td"><strong>2. Acadia, Nova Scotia, Ile Royale (Louisbourg) and Ile Saint-Jean</strong></td><td class="crd-td">127.059</td><td class="crd-td">16k</td><td class="crd-td">12k</td><td class="crd-td">6,9k</td><td class="crd-td">6,6k</td><td class="crd-td">18,4k</td><td class="crd-td">30,9k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>3. Newfoundland (Avalon and Plaisance), Labrador and Saint-Pierre</strong></td><td class="crd-td">414.755</td><td class="crd-td">6k</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td><td class="crd-td">8,2k</td><td class="crd-td">10,2k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>4. Pays d'en Haut and Great Lakes Fur-Trade Posts (Southern Ontario)</strong></td><td class="crd-td">216.923</td><td class="crd-td">71k</td><td class="crd-td">74k</td><td class="crd-td">11k</td><td class="crd-td">12,5k</td><td class="crd-td">14,5k</td><td class="crd-td">15,5k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>5. Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">3.265.241</td><td class="crd-td">24k</td><td class="crd-td">23,5k</td><td class="crd-td">22,5k</td><td class="crd-td">21,5k</td><td class="crd-td">20,5k</td><td class="crd-td">20k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>6. Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">357.216</td><td class="crd-td">42k</td><td class="crd-td">41k</td><td class="crd-td">39,5k</td><td class="crd-td">37k</td><td class="crd-td">35,2k</td><td class="crd-td">34,5k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>7. Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">4.190.220</td><td class="crd-td">168k</td><td class="crd-td">165k</td><td class="crd-td">162k</td><td class="crd-td">158k</td><td class="crd-td">154k</td><td class="crd-td">152k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>8. Greenland (Danish-Moravian Missions 1721-1763 and Independent Kalaallit)</strong></td><td class="crd-td">2.005.845</td><td class="crd-td">7k</td><td class="crd-td">7,5k</td><td class="crd-td">7,8k</td><td class="crd-td">8k</td><td class="crd-td">5,5k</td><td class="crd-td">6,1k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">11.177.519</td><td class="crd-td">346,5k</td><td class="crd-td">333,6k</td><td class="crd-td">263,1k</td><td class="crd-td">269,8k</td><td class="crd-td">303,8k</td><td class="crd-td">329,3k</td><td class="crd-td">330,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Sub-regional population benchmarks across Colonial Canada and Greenland, 1500 to 1763AD.</figcaption>
</figure>

## Urban Primacy and Regional Settlement Peaks

Across all 1.352 catalogued centres, population concentrated steeply at the top of the colonial urban hierarchy. Only five towns exceeded 2k inhabitants within the 1500 to 1763AD interval (Québec 9k in 1750-1759AD, Montréal 6k in 1750AD, Louisbourg 5,2k in 1758AD, Halifax 4k in 1755AD and 3k in 1763AD, and St. John's 2,4k in 1763AD) alongside the populous St. Lawrence parish of Île d'Orléans (2,25k in 1739AD) and Grand-Pré in Acadia (2,5k in 1750AD; 2,2k in 1755AD). Elsewhere, even the principal Indigenous towns and northern fur posts rarely surpassed 500 to 1,5k residents, placing the vast majority of northern Canada's population in dispersed rural river-lots, coastal camps and winter hunting bands (Table \ref{tab:leading-cc1763}).

<figure class="crd-table-figure" id="tab:leading-cc1763">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1763AD Pop.</th><th class="crd-th">Leading Settlement (Peak)</th><th class="crd-th">Second Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. New France</strong></td><td class="crd-td">294</td><td class="crd-td">71,5k</td><td class="crd-td">Québec (9k, 1750AD)</td><td class="crd-td">Montréal (6k, 1750AD)</td></tr>
<tr><td class="crd-td"><strong>2. Acadia, Nova Scotia, Ile Royale</strong></td><td class="crd-td">76</td><td class="crd-td">16,5k</td><td class="crd-td">Louisbourg (5,2k, 1758AD)</td><td class="crd-td">Halifax City NS (4k, 1755AD)</td></tr>
<tr><td class="crd-td"><strong>3. Newfoundland</strong></td><td class="crd-td">65</td><td class="crd-td">16,1k</td><td class="crd-td">St. John's (2,4k, 1763AD)</td><td class="crd-td">Carbonear (720, 1763AD)</td></tr>
<tr><td class="crd-td"><strong>4. Pays d'en Haut and Great Lakes Fur-Trade Posts</strong></td><td class="crd-td">17</td><td class="crd-td">16k</td><td class="crd-td">Lake Nipissing Native Village (400, 1650AD)</td><td class="crd-td">Orillia (350, 1615AD)</td></tr>
<tr><td class="crd-td"><strong>5. Rupert's Land and Hudson's Bay Company Trading Factory Zones</strong></td><td class="crd-td">96</td><td class="crd-td">19,8k</td><td class="crd-td">Wanuskewin (450, 1500AD)</td><td class="crd-td">Bushfield West (440, 1600AD)</td></tr>
<tr><td class="crd-td"><strong>6. Western Prairies and French-Indigenous Saskatchewan Posts</strong></td><td class="crd-td">15</td><td class="crd-td">34k</td><td class="crd-td">Estipah-skikikini-kots (650, 1500AD)</td><td class="crd-td">Lockport (480, 1500AD)</td></tr>
<tr><td class="crd-td"><strong>7. Pacific Northwest Coast, Yukon and Mackenzie River Nations</strong></td><td class="crd-td">84</td><td class="crd-td">150k</td><td class="crd-td">Marpole (1,4k, 1500AD)</td><td class="crd-td">Yuquot (1,2k, 1600AD)</td></tr>
<tr><td class="crd-td"><strong>8. Greenland</strong></td><td class="crd-td">705</td><td class="crd-td">6,6k</td><td class="crd-td">Ilulissat (480, 1600AD)</td><td class="crd-td">Kangeq (320, 1600AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading two catalogued settlements by peak population across each of the eight sub-regions, 1500 to 1763AD.</figcaption>
</figure>

# Limitations

Four structural uncertainties govern the 1500 to 1763AD reconstruction. First, pre-census Indigenous series across the Pacific Northwest Coast, Mackenzie basin, Western Prairies and Rupert's Land depend on carrying-capacity and ethnohistorical fur-trade extrapolations carrying +/- 25% to +/- 28% uncertainty intervals [@ray1974indians; @ubelaker1988north; @boyd1999coming]. Although the 93.129-site-period continental archaeological kriging surface provides tight spatial weighting across populated valleys and coasts, survey coverage remains sparser north of 55°N, where Voronoi catchment radii widen toward the 40,95 km overall (39,85 km active; 40,69 km diagnostic) 90th-percentile Voronoi radius.

Second, Newfoundland seasonal migratory cod crews - often exceeding 10k summer fishermen from Devon, Dorset, Brittany and the Basque ports - are excluded from permanent winter resident returns, creating sharp seasonal fluctuations at St. John's and Plaisance that annual averages smooth out [@statcan1876censuses; @orton2011stable]. Similarly, wartime garrisons at Louisbourg pushed the town to 5,2k in 1758AD before capitulation and expulsion returned the site to 350 residents in 1763AD.

Third, Mi'kmaq, Wolastoqiyik, Innu and Beothuk populations remain sparsely recorded in French and British parish rolls, requiring composite ethnohistorical curves alongside enumerated settler counts [@prins1996mikmaq; @miller1976abnakis; @marshall1996history]. Fourth, St. Lawrence seigneurial parishes such as Île d'Orléans (2,25k in 1739AD) and Beaupré (1,25k) combine dispersed riverfront farmsteads into parish totals rather than compact town grids, and sixteenth-century Iroquoian sites such as Stadacona and Hochelaga rest on contact-era village approximations [@statcan1876censuses; @tremblay2006st].

# Conclusion

Between 1500AD and 1763AD, northern North America passed through a century and a half of steep Indigenous contraction followed by a slow colonial rebound that had still not regained the pre-contact continental ceiling by the Treaty of Paris. Total population across the 11.177.519 km² domain fell from 346,5k in 1500AD to 263,12k in 1666AD as disease and warfare depopulated the lower Great Lakes and St. Lawrence valley, before natural increase among French *habitants*, Maritime settlement and Newfoundland winter colonisation lifted the total back to 330,51k in 1763AD.

Even at the close of French rule, however, European settlement remained a narrow coastal and riverine ribbon: New France, Acadia and Newfoundland together accounted for barely 31,5% of the regional total in 1763AD, while Indigenous nations across the Pacific Coast, Western Prairies, Rupert's Land and the Pays d'en Haut still comprised over two-thirds of all inhabitants north of the Great Lakes. By integrating 1.352 catalogued settlements (from 1.484 ledger candidates) with the 93.129-site-period North American radiocarbon kriging surface (286.193 horizon record sum across 3.833 domestic and 251 frontier buffer catchments, 2.570 active, 493.687 valid land cells, 14,24x baseline; regularised $\tau_1 = 1,35$, raw mean 1,5782, $\tau_2 = 2,9025$, effective short range 45,23 km to 47,94 km with mean 47 km, raw nugget 0, regularised 0,04, WLS $R^2$ 0,999 to 0,9992, mean 0,9991), the reconstruction preserves both this continental Indigenous weight and the explosive early fertility of the St. Lawrence corridor on the eve of British rule.

Its spatial and demographic baseline provides an unbroken 1763AD bridge into the British North American era, when Loyalist resettlement, transatlantic British and Irish migration and western epidemics reversed the demographic balance between east and west.

# Sources

<div id="refs"></div>
