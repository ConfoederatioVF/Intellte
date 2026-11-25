---
title: "Early Modern East Africa and Mozambique"
subtitle: "Swahili Coast, Interior Kingdoms, Indian Ocean Trade and Mozambique"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Nine historical sub-regions and 1.783 individually assessed settlements across East Africa and Mozambique between 1500AD and 1885AD."
hero_label: "fig:hero-east-africa"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the arrival of Portuguese fleets off Sofala and Kilwa at the start of the sixteenth century and the European colonial partition of the 1880s, East Africa and Mozambique moved from a maritime littoral loosely coupled to interior subsistence zones into an integrated continental economy of caravan highways, plantation islands and centralised kingdoms. Across a territorial domain of 3.400.448 km² spanning 15 modern countries from the Banadir coast and Lake Victoria to the Zambezi delta and Delagoa Bay, NICETHI reconstructs an aggregate regional population that rose from 5,72M inhabitants in 1500AD to 10,68M in 1700AD, 11,65M in 1770AD, 12,6M in 1800AD, 15,31M in 1850AD and 15,5M by 1880AD, reaching a mean end-epoch density of 4,56 persons/km². Growth was uneven across ecological belts and repeatedly checked by drought, slaving and military upheaval. Portuguese disruption curtailed the late mediaeval ports of Kilwa Kisiwani and Sofala, yet Lamu, Pate and Siyu expanded during the seventeenth and eighteenth centuries before Omani-Zanzibar supremacy shifted the commercial centre of gravity south to Zanzibar Town, Bagamoyo and Kilwa Kivinje. Inland, banana-and-cattle kingdoms in Buganda, Rwanda and Burundi achieved the highest rural densities in eastern Africa, while Nyamwezi and Yao caravan networks linked Tabora, Ujiji and Lake Malawi to Indian Ocean markets and Portuguese *prazo* warlords contested the lower Zambezi. These curves rest on 1.783 individually assessed settlements across 5.591 chronological observations, paired with non-stationary Matérn residual kriging over regional site registers and mass-conserving pycnophylactic disaggregation across administrative polygons.



# Background

## Monsoon Harbours, Highland Basins and Zambezi Valleys

East Africa and Mozambique present a sharper topographic contrast between coast and interior than almost any other sector of Sub-Saharan Africa. Along the Indian Ocean shore from Muqdisho, Marka and Barawa in southern Somalia through the Lamu Archipelago, Mombasa, Zanzibar and Kilwa down to Mozambique Island, Sofala, Inhambane and Delagoa Bay, seasonal monsoon winds sustained a narrow coral-rag littoral anchored by mangrove creeks, sheltered anchorages and limestone town quarters [@HortonMiddleton2000Swahili; @WynneJones2018SwahiliWorld; @Kassim1995IslamAnd_2]. Immediately behind this humid coastal strip rises a broad belt of dry *nyika* thornbush and miombo woodland stretching across eastern Kenya, central Tanzania and northern Mozambique, where unreliable rainfall and tsetse fly restricted intensive cattle keeping and held rural densities low across wide tracts [@Kusimba1999SwahiliStates; @Spear1900SwahiliHistory].

Beyond the dry plateau, three well-watered highland and lacustrine regions supported far denser populations. In the Great Lakes basin around Lakes Victoria, Albert, Kivu and Tanganyika, rich volcanic and alluvial soils combined with perennial plantain cultivation, finger millet and long-horned cattle to sustain the centralised states of Bunyoro-Kitara, Buganda, Ankole, Karagwe, Rwanda and Burundi [@Kafuuma2019HeritageSignificance; @Brandl1975EarlyChristianity]. East of Lake Victoria, the central Kenyan highlands and Rift Valley accommodated both Kikuyu-Kamba ridge cultivators and specialised Maa-speaking pastoralists occupying the open steppe between Mount Kenya and northern Tanzania [@NMK2021KenyaSites]. To the south, the Lake Malawi basin and the Shire-Zambezi river system formed an agricultural corridor linking the Maravi confederacy and Yao hill towns to the goldfields of the Zimbabwe escarpment and the floodplains of the lower Zambezi [@Newitt1995Mozambique; @Pugliesi1977ResenhaLivro].

After 1500AD, maritime contacts introduced American crops - above all maize, cassava and sweet potatoes - alongside Asian rice varieties and coconuts, slowly raising caloric output across the Swahili littoral, the Zambezi *prazos* and the caravan corridors of Tanzania and Malawi [@HortonMiddleton2000Swahili; @Pugliesi1977ResenhaLivro]. Yet ecological gains were repeatedly offset by nineteenth-century rinderpest, smallpox, cholera epidemics along caravan tracks and the prolonged *mfecane* migrations that carried Nguni warbands north into Gaza, eastern Zambia and southern Tanganyika after 1820AD [@Newitt1995Mozambique; @Bryndina2023TheMost].

## Historiography of Early Modern East Africa and Mozambique

Quantitative demographic reconstruction across early modern East Africa faces a sharp archival divide between coast and interior. For the sixteenth and seventeenth centuries, Portuguese chroniclers, royal *tombo* surveys and fortress garrisons at Sofala, Mozambique Island, Kilwa and Mombasa provide dated headcounts, tax rolls and parish baptismal series, though they cover only coastal enclaves and the Zambezi *feira* network [@Pradines2016PortugueseFortresses; @Newitt1995Mozambique; @Berg1900TheSwahili]. From the 1770s onward, French slaving captains, Omani chroniclers and British naval anti-slavery commissioners added detailed port figures for Kilwa, Zanzibar, Pemba, Ibo and Quelimane [@Lyne1905ZanzibarContemporary; @Parliament1898CorrespondenceRespecting; @Alders2023OpenAccess].

For the interior, reliable direct observations arrive much later. Outside the eighteenth-century Portuguese expeditions of Lacerda e Almeida and Gamitto to Kazembe on the Luapula, most interior urban counts date to the 1840s through 1880s, when European travellers, missionaries and consular agents reached Tabora, Ujiji, Buganda's *Kibuga*, Bweranyange, Nkhotakota and Gaza [@Burton1904FirstFootsteps; @Bryndina2023TheMost; @Bourguignat1879DescriptionDiverses]. Twentieth-century archaeology filled part of the earlier void by mapping stone-house blocks, earthen ditch complexes at Bigo bya Mugenyi and Munsa, irrigated terraces at Engaruka and terraced fields at Ziwa, establishing spatial footprints for settlements lacking written censuses [@Allen1981SwahiliCulture; @WynneJones2018TheMultiple; @NMK2021KenyaSites].

Historical interpretation has shifted decisively away from older colonial models that treated the Swahili coast as an alien Arab-Persian implant and the interior as demographically stagnant prior to European rule [@Spear1900SwahiliHistory; @Allen1981SwahiliCulture; @Baumanova2022WhatsName]. Excavations and settlement surveys across Zanzibar, Pemba, Shanga, Pate, Mombasa and Kilwa show that Swahili stone towns were predominantly African urban communities embedded within local agricultural hinterlands [@HortonMiddleton2000Swahili; @WynneJones2018SwahiliWorld; @Alders2023OpenAccess]. Likewise, studies of the Zambezi *prazos* demonstrate how Portuguese crown land grants Africanised into Afro-Portuguese warrior-patronage estates whose *chikunda* slave armies reshaped population distribution along the lower Zambezi [@Pugliesi1977ResenhaLivro; @Newitt1995Mozambique]. NICETHI brings these coastal, island, caravan and highland strands into a single quantitative accounting grid between 1500AD and 1885AD.

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area covers 3.400.448 km² across 40.405 five-arcminute pixels spanning 15 modern countries from southern Somalia and southern Ethiopia south to Mozambique, Zimbabwe and eSwatini. Within NICETHI, the chapter occupies Regime 2 (1500AD to 1885AD), bridging the mediaeval Bantu and Swahili synthesis with the post-1885AD colonial era. Nine historical sub-regions partition the territory using OpenHistoricalMap polity extents, Harvard WorldMap state polygons and Nunn-Murdock ethnographic distributions clipped to HydroBASINS Level-6 catchments and geoBoundaries coastlines [@Runfola2020GeoBoundaries] (Table \ref{tab:subregions}).

Population trajectories are computed across 14 benchmark years tracked in the regional series (1500AD, 1700AD, 1710AD, 1730AD, 1740AD, 1760AD, 1770AD, 1790AD, 1800AD, 1820AD, 1830AD, 1850AD, 1860AD and 1880AD) and reported in compact tables at six historical checkpoints: 1500AD (early Portuguese contact), 1700AD (Omani capture of Fort Jesus at Mombasa), 1770AD (late eighteenth-century Pate, Maravi and *prazo* maturity), 1800AD (rise of the Kilwa-Zanzibar ivory and slave trades), 1850AD (Seyyid Said's Zanzibar clove boom and caravan expansion) and 1880AD (eve of European partition). All regional totals encompass full resident populations across coastal stone towns, earthen capitals, caravan entrepôts, agrarian villages and pastoral camps [@HortonMiddleton2000Swahili; @WynneJones2018SwahiliWorld].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Interior Sites</th><th class="crd-th">All Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast</strong></td><td class="crd-td">204.036</td><td class="crd-td">2.385</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">285</td><td class="crd-td">29</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift</strong></td><td class="crd-td">564.434</td><td class="crd-td">6.579</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">275</td><td class="crd-td">12</td><td class="crd-td">16,6</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole</strong></td><td class="crd-td">215.531</td><td class="crd-td">2.512</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">222</td><td class="crd-td">7</td><td class="crd-td">6,3</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi</strong></td><td class="crd-td">233.379</td><td class="crd-td">2.725</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">299</td><td class="crd-td">6</td><td class="crd-td">6,9</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor</strong></td><td class="crd-td">374.507</td><td class="crd-td">4.382</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">110</td><td class="crd-td">4</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika</strong></td><td class="crd-td">349.694</td><td class="crd-td">4.127</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">116</td><td class="crd-td">8</td><td class="crd-td">10,3</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique</strong></td><td class="crd-td">476.542</td><td class="crd-td">5.718</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">127</td><td class="crd-td">10</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe</strong></td><td class="crd-td">514.588</td><td class="crd-td">6.160</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">98</td><td class="crd-td">5</td><td class="crd-td">15,1</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza</strong></td><td class="crd-td">467.738</td><td class="crd-td">5.817</td><td class="crd-td">1505AD-1885AD</td><td class="crd-td">174</td><td class="crd-td">16</td><td class="crd-td">13,8</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Nine historical sub-regions of East Africa and Mozambique showing surface area, 5-arcminute pixels, era span, interior mask matches (91) and full gazetteer site counts (97).</figcaption>
</figure>

## Settlement Screening and Evidence-Based Urban Reconstruction

To anchor urban hierarchies across coast and interior, 2.130 candidate coastal ports, fortresses, royal enclosures, caravan stations and upland towns between 1500AD and 1885AD were screened from Portuguese *tombo* and fortress archives, Omani-Zanzibar consular dispatches, nineteenth-century explorer journals and site inventories [@Pradines2016PortugueseFortresses; @Parliament1898CorrespondenceRespecting; @NMK2021KenyaSites]. Screening proceeded across four saturation waves (57 initial entries, expanding to 97 after reconciliation and adding 7 entries in the final gap sweep for a 1,9% marginal gain), removing 347 duplicate aliases - such as alternative names for Ilha de Moçambique, Vila de Mandlakazi, Kasama, Chipata and Zanzibar - and retaining 1.783 individually assessed settlements with 5.591 dated observations and zero empty inhabited sub-regions (Figure \ref{fig:hero-east-africa}).

All 1.783 settlements carry strict city-proper spatial limits (97 city-proper, 0 metropolitan agglomerations) to avoid double counting rural hinterlands. Tanzania holds the largest share with 29 settlements (83 observations), followed by Kenya (15 sites, 51 observations), Mozambique (15 sites, 91 observations), Somalia (8 sites, 18 observations), Uganda (7 sites, 22 observations), Malawi (5 sites, 13 observations), Zimbabwe (5 sites, 12 observations), Zambia (4 sites, 11 observations), Burundi (3 sites, 8 observations), Ethiopia (3 sites, 5 observations), and 1 site each in Rwanda (3 observations), eSwatini (2 observations) and South Africa (3 observations). Where contemporaneous headcounts were unavailable, populations were anchored to mapped stone-core and earthwork areas using Storey's 59-city African preindustrial density benchmark (mean 12.724 persons/km², median 10.000, range 1.250 to 57.735) and East African transect ratios [@Alders2023OpenAccess; @WynneJones2018TheMultiple]. At Kilwa Kisiwani, the 47 ha nucleated stone core and Portuguese accounts of 1502AD to 1505AD place the town at 12.000 inhabitants before the Portuguese sack and 4.000 immediately thereafter, declining to 2.600 by 1776AD and 950 by 1859AD [@Pradines2016PortugueseFortresses; @WynneJones2018TheMultiple]. At Zanzibar, the 60 ha Stone Town core and surrounding Ng'ambo quarters track rapid growth from 4.200 in 1650AD and 11.500 in 1776AD to 38.000 in 1846AD and 65.000 at the 1870AD clove-and-ivory peak [@Lyne1905ZanzibarContemporary; @Alders2023OpenAccess].

## Non-Stationary Kriging and Sub-Administrative Disaggregation

Recorded towns capture urban hubs along the coast and caravan routes, leaving rural farming populations across the Tanzanian plateau, Malawi hills and Great Lakes ridges unenumerated prior to colonial tax rolls [@Kafuuma2019HeritageSignificance; @Lira2024Plot24Urban]. NICETHI therefore pairs sub-regional demographic series with continuous spatial surfaces built via non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging across the Sub-Saharan archaeological and historical register (11.199 domestic records across 6.970 unique coordinate loci, of which 82,9% derive from regional archaeological inventories and scholarly monographs with zero crowdsourced entries) [@NMK2021KenyaSites; @Alders2023OpenAccess].

Voronoi catchment tessellation partitions the continental domain into 6.431 domestic catchments bounded strictly below 25.000 km² (observed maximum 23.489 km², median radius 31,72 km, 90th percentile 49,29 km) and buffered across 383 border catchments so no artificial boundary cliff separates East Africa from the Horn, the Nile basin or Southern Africa. Two chronological kriging horizons cover 1500AD to 1885AD: Horizon 9 (Early Modern, 1500AD to 1750AD; 2.096 active domain sites across 1.034 catchments) and Horizon 10 (Late Precolonial, 1750AD to 1900AD; 1.130 active sites across 547 catchments). Weighted least-squares variogram fitting yields dimensionless short-range correlation $\tau_1 = 1,35$ (raw 1,405 in Horizon 9 and 1,376 in Horizon 10), secondary range $\tau_2 = 2,9025$ and nugget-to-sill ratio 0,04, producing effective short-range correlation distances of 44,55 km and 43,63 km ($R^2 = 0,9992$ in both horizons). Deterministic trend weights reflect coastal access ($\beta_4 = 0,0717$ in Horizon 9 and $0,0475$ in Horizon 10) and fluvial proximity ($\beta_3 = 0,0595$ and $0,0342$) above baseline habitability ($\beta_0 = 0,01$), while a two-pixel modern urban buffer shields early modern surfaces from twentieth-century metropolitan sprawl around Nairobi, Kampala, Dar es Salaam or Maputo. Downward reconciliation to geoBoundaries administrative units [@Runfola2020GeoBoundaries] uses strictly mass-conserving pycnophylactic scaling, maintaining cell-sum conservation within 0,01% across 30.911 unit-year checks from 1900AD onward (worst relative error $5,60 \times 10^{-8}$).

# Testing and Validation

## Settlement Rank-Size Scaling and Urban Hierarchy Diagnostics

Rank-size diagnostics across the 1.783 assessed settlements test whether coastal ports, interior capitals and *prazo* strongholds form a coherent regional urban hierarchy rather than an arbitrary sample of isolated sites [@Baumanova2022WhatsName; @Alders2023OpenAccess]. Ordinary least-squares regression on the upper half of the peak-population distribution ($n = 48$ sites) yields a Pareto rank-size exponent of $q = 0,73$ ($R^2 = 0,99$), while full-sample regression across all 1.783 settlements gives $q = 0,98$ ($R^2 = 0,88$; Figure \ref{fig:rank-size}). An upper-tier slope below unity ($q = 0,73$) reflects a polycentric trading and political landscape where no single imperial capital monopolised East Africa: rather than one dominant primate city, distinct regional nodes led separate sub-systems - Bigo bya Mugenyi in sixteenth-century Kitara (100k), Zanzibar Town on the Omani littoral (65k in 1870AD), Buganda's *Kibuga* on Lake Victoria (38,5k in 1875AD), Mombasa on the Kenyan coast (30k in 1850AD), Muqdisho on the Banadir shore (21,2k in 1516AD) and Tabora along the Unyamwezi caravan axis (20k in 1871AD) [@Berg1900TheSwahili; @Lyne1905ZanzibarContemporary; @Kassim1995IslamAnd_2].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-east-africa/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 1.783 individually assessed settlements (top-48 OLS slope q = 0,73, R² = 0,99) and mean sub-regional densities in 1880AD.</figcaption>
</figure>

Middle-rank towns between 10k and 19k inhabitants form a continuous log-linear band in Figure \ref{fig:rank-size}, spanning Bagamoyo (18,5k), Pate (16,8k), Urambo (16,2k), Lamu (15,2k), Kilwa Kivinje (15k), Vila de Mandlakazi (14,5k), Ujiji (14k), Kilwa Kisiwani (12k), Massangano-Zambezi (11,2k), Ilha de Moçambique (11,2k), Nkhotakota (11,2k), Siyu (11,2k) and Sofala (10k) [@Kusimba1999SwahiliStates; @Pradines2016PortugueseFortresses; @Bryndina2023TheMost]. Below rank 50, smaller *feiras*, mission depots, lakeside markets and stone ruins drop more steeply between 3,8k and 600 inhabitants, reflecting the physical boundary between regional entrepôts and local garrisons or agricultural centres (unique peak-value ratio 0,8041, interquartile range $\log_{10} = 0,503$).

## External Demographic Cross-Checks and Coastal Benchmarks

To verify that regional totals align with independent historical demographic syntheses and archival port enumerations, Table \ref{tab:validation-benchmarks} compares NICETHI regional and national-scale aggregates against established African macro-demographic series and colonial urban censuses. At the macro level, NICETHI's trajectory from 5,72M in 1500AD to 10,68M in 1700AD, 12,6M in 1800AD and 15,5M in 1880AD sits coherently inside regional bounds once differing geographic perimeters are accounted for: Patrick Manning's broader East Africa category (20M in 1700AD, 22M in 1790AD and 26M in 1890AD) includes Ethiopia and the northern Horn, whereas NICETHI excludes northern Ethiopia and southern Sudan (covered in the companion Horn and Nile chapters). Likewise, summing Manning's 1850AD mid-level estimates across the comparable Tanzania (11,21M), Kenya (8,26M) and Mozambique (8,39M) trade-zone definitions gives a substantially higher figure because Manning projected twentieth-century totals backward over wider administrative envelopes, whereas Frankema and Jerven's continent-wide upward revision of colonial growth rates (114,1M to 122,7M for Africa in 1850AD rising to 127,7M to 137,3M in 1880AD) supports a steadier mid-nineteenth-century expansion consistent with NICETHI's 1,01% annualised continental pace and 15,31M to 15,5M regional trajectory [@Parliament1898CorrespondenceRespecting; @Spear1900SwahiliHistory].

<figure class="crd-table-figure" id="tab:validation-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Scope</th><th class="crd-th">Early Anchor</th><th class="crd-th">Mid Anchor</th><th class="crd-th">Late Anchor</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>NICETHI East Africa &amp; Mozambique</strong></td><td class="crd-td">9 sub-regions (3,4M km²)</td><td class="crd-td">5,72M (1500AD)</td><td class="crd-td">12,6M (1800AD)</td><td class="crd-td">15,5M (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Manning Table 4,1 (Broader East Africa)</strong></td><td class="crd-td">Horn, Lakes &amp; Coast</td><td class="crd-td">20M (1700AD)</td><td class="crd-td">22M (1790AD)</td><td class="crd-td">26M (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Chirikure et al. (Zimbabwe Plateau)</strong></td><td class="crd-td">Zimbabwe national bounds</td><td class="crd-td">230k-275k (1600AD)</td><td class="crd-td">-</td><td class="crd-td">665k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ilha de Moçambique (Port Census)</strong></td><td class="crd-td">Island capital city-proper</td><td class="crd-td">2,45k (1540AD)</td><td class="crd-td">9,5k (1810AD)</td><td class="crd-td">9,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zanzibar Town (Consular &amp; Census Series)</strong></td><td class="crd-td">Stone Town &amp; Ng'ambo</td><td class="crd-td">4,2k (1650AD)</td><td class="crd-td">15k (1819AD)</td><td class="crd-td">58k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tete &amp; Quelimane (Zambezi Towns)</strong></td><td class="crd-td">Lower Zambezi port &amp; town</td><td class="crd-td">1,48k / 1,45k (1570AD)</td><td class="crd-td">6,2k / 6,8k (1767-1815)</td><td class="crd-td">5,8k / 8,6k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Comparison of NICETHI regional and urban benchmarks against external historical demographic series and Portuguese-Zanzibari port counts.</figcaption>
</figure>

At the local urban scale, Portuguese provincial censuses at Ilha de Moçambique (9.500 in 1810AD, 11.200 in 1850AD and 9.800 in 1885AD) and Livingstone's 1856AD count at Tete (4.500 inhabitants) match the gazetteer series directly [@Newitt1995Mozambique]. Similarly, British Foreign Office abolition correspondence and Zanzibar Protectorate enumerations reconcile Zanzibar Town's transition from 58.000 in 1885AD to 35.262 in 1910AD after the end of the mainland caravan boom and the transfer of the German East African capital to Dar es Salaam [@Parliament1898CorrespondenceRespecting; @Lyne1905ZanzibarContemporary]. For the Zimbabwe escarpment borderland, Chirikure's national benchmark (230k to 275k in 1600AD and 665k in 1850AD) aligns cleanly with the southern *prazo*-Mutapa-Gaza density of 3,76 persons/km² in 1880AD [@Pugliesi1977ResenhaLivro].

# Results

## Portuguese Littoral Disruption and Swahili Coast Realignment (1500AD to 1700AD)

At 1500AD, the combined population of the nine sub-regions stood at 5,72M (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). The highest rural concentrations lay in the Great Lakes basin, where 1,02M lived in Buganda, Bunyoro-Kitara and Ankole (4,73 persons/km²) and 995,3k inhabited Rwanda, Burundi and the Kivu highlands (4,26 persons/km²). By contrast, the Swahili coastal strip held 282,5k residents (1,38 persons/km²) and the southern Zambezi-Sofala zone held 652,7k [@HortonMiddleton2000Swahili; @Brandl1975EarlyChristianity].

Between 1500AD and 1700AD, regional population nearly doubled to 10,68M as American crops dispersed across coastal and riverine gardens and inland agricultural states consolidated, even while maritime commerce underwent violent restructuring (Table \ref{tab:trajectory}). Portuguese naval raids and customs monopolies shattered the southern gold-exporting ports: Kilwa Kisiwani dropped from 12.000 inhabitants in 1502AD to 4.000 after Francisco de Almeida's sack in 1505AD and 3.200 in 1587AD, while Sofala contracted from 10.000 in 1505AD to 2.850 in 1590AD and 2.100 in 1680AD [@Pradines2016PortugueseFortresses; @WynneJones2018SwahiliWorld]. Farther north, Muqdisho declined from 21.200 in 1516AD to 12.600 by 1650AD, and Ungwana and Gedi were abandoned during the seventeenth-century Oromo and Zimba upheavals [@Kassim1995IslamAnd_2; @Kusimba1999SwahiliStates].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-east-africa/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and leading urban centres across East Africa and Mozambique from 1500AD to 1885AD.</figcaption>
</figure>

Commerce did not vanish; instead it migrated north of Mombasa to Portuguese-allied Malindi (5,4k in 1580AD) and especially to the Lamu Archipelago, where Pate expanded from 11,5k in 1600AD to 16,8k in 1700AD, Lamu climbed from 5,8k to 8,2k, and Siyu rose from 4,8k toward 9,5k [@Allen1981SwahiliCulture; @Berg1900TheSwahili]. Meanwhile, Portuguese fortress construction at Ilha de Moçambique (Fort São Sebastião, growing from 2,45k in 1540AD to 5,4k in 1650AD) and Mombasa (Fort Jesus, 10k in 1505AD to 11,8k in 1593AD) re-routed oceanic shipping until the Ya'arubi Omani siege expelled the Portuguese north of Cape Delgado in 1698AD [@Pradines2016PortugueseFortresses; @Berg1900TheSwahili].

## Omani Littoral, Interlacustrine Kingdoms and Zambezi Prazos (1700AD to 1800AD)

The eighteenth century opens with a sharp demographic pause from 10,68M in 1700AD to 9,59M in 1710AD and 11,21M in 1790AD amid severe regional droughts and late-century coastal warfare, before rebounding to 12,6M in 1800AD (Table \ref{tab:trajectory}). On the northern coast, Mombasa settled under Mazrui autonomy (9,4k in 1698AD to 8,6k in 1760AD) while Lamu grew from 8,2k in 1650AD to 12,4k in 1780AD and Pate remained near 14,2k [@Berg1900TheSwahili; @Baumanova2022WhatsName]. Farther south, Kilwa Kisiwani remained depressed (2,6k in 1776AD) until French sugar-island demand for captives from Île de France and Bourbon sparked the founding of Kilwa Kivinje around 1785AD and lifted Zanzibar Town from 4,2k in 1650AD to 11,5k in 1776AD [@Lyne1905ZanzibarContemporary; @Alders2023OpenAccess].

In the Great Lakes interior, state consolidation followed an indigenous agrarian rhythm. Around the western shores of Lake Victoria, Buganda supplanted the older pastoral hegemony of Bunyoro-Kitara, expanding its royal capital at the *Kibuga* from 9,5k inhabitants in 1700AD to 18,5k by 1780AD, while salt production at Kibiro (1,58k to 1,75k) and the Karagwe court at Bweranyange (3,4k in 1750AD) anchored regional exchange [@Kafuuma2019HeritageSignificance; @Brandl1975EarlyChristianity]. In Rwanda and Burundi, royal centralisation under the Nyiginya dynasty around Nyanza-Busasama (3,6k in 1750AD) and Muramvya (3,1k) supported dense hillside farming that raised the Rwanda-Burundi-Kivu sub-region to 1,85M by 1800AD [@Brandl1975EarlyChristianity].

South of the Ruvuma, two contrasting formations shaped demography between 1700AD and 1800AD. Around Lake Malawi and northern Mozambique, the Kalonga Maravi court at Mankhamba (7,2k in 1650AD, easing to 4,1k in 1750AD) gave way to decentralised Yao and Makua ivory-and-slave traders linking the lake to Ilha de Moçambique (7,8k in 1760AD) and Ibo (2,38k in 1761AD), driving steady growth across the Maravi-Yao sub-region from 1,25M in 1700AD to 2,2M in 1800AD [@Newitt1995Mozambique]. Along the Zambezi itself, Portuguese crown estates (*prazos da coroa*) and interior trading fairs at Sena (2,89k in 1750AD), Tete (6,2k in 1767AD), Zumbo (2,95k in 1780AD) and Quelimane (3,2k in 1700AD) survived Mutapa and Rozvi counter-offensives, while Kazembe's Lunda kingdom on the Luapula held 6,8k to 7,2k at Mwansabombwe between 1760AD and 1798AD [@Pugliesi1977ResenhaLivro; @Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast</strong></td><td class="crd-td">282,5k</td><td class="crd-td">549,1k</td><td class="crd-td">610,7k</td><td class="crd-td">625,6k</td><td class="crd-td">1,05M</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift</strong></td><td class="crd-td">1,12M</td><td class="crd-td">2,07M</td><td class="crd-td">2,05M</td><td class="crd-td">2,14M</td><td class="crd-td">2,37M</td><td class="crd-td">2,66M</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole</strong></td><td class="crd-td">1,02M</td><td class="crd-td">1,81M</td><td class="crd-td">1,51M</td><td class="crd-td">1,47M</td><td class="crd-td">1,74M</td><td class="crd-td">1,87M</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi</strong></td><td class="crd-td">995,3k</td><td class="crd-td">1,74M</td><td class="crd-td">1,75M</td><td class="crd-td">1,85M</td><td class="crd-td">2,68M</td><td class="crd-td">2,88M</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor</strong></td><td class="crd-td">433k</td><td class="crd-td">843,3k</td><td class="crd-td">930,5k</td><td class="crd-td">1,05M</td><td class="crd-td">1,22M</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika</strong></td><td class="crd-td">254,7k</td><td class="crd-td">512,2k</td><td class="crd-td">610,4k</td><td class="crd-td">699,7k</td><td class="crd-td">817,3k</td><td class="crd-td">763,8k</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique</strong></td><td class="crd-td">626,9k</td><td class="crd-td">1,25M</td><td class="crd-td">1,86M</td><td class="crd-td">2,2M</td><td class="crd-td">2,78M</td><td class="crd-td">2,63M</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe</strong></td><td class="crd-td">337,4k</td><td class="crd-td">701,1k</td><td class="crd-td">802,1k</td><td class="crd-td">857k</td><td class="crd-td">812k</td><td class="crd-td">797,8k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza</strong></td><td class="crd-td">652,7k</td><td class="crd-td">1,2M</td><td class="crd-td">1,52M</td><td class="crd-td">1,71M</td><td class="crd-td">1,85M</td><td class="crd-td">1,76M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">5,72M</td><td class="crd-td">10,68M</td><td class="crd-td">11,65M</td><td class="crd-td">12,6M</td><td class="crd-td">15,31M</td><td class="crd-td">15,5M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional and total population trajectories across six benchmark years from 1500AD to 1880AD.</figcaption>
</figure>

## Zanzibar Clove Empire, Caravan Highways and Mfecane Upheaval (1800AD to 1885AD)

During the nineteenth century, East Africa's economic axis turned sharply inward as Seyyid Said of Oman transferred his court to Zanzibar in the 1830s and 1840s, turning Zanzibar and Pemba into the world's leading clove plantations worked by enslaved mainland labour [@Lyne1905ZanzibarContemporary; @Parliament1898CorrespondenceRespecting; @Alders2023OpenAccess]. Zanzibar Town surged from 15k inhabitants in 1819AD to 48k in 1857AD and 65k in 1870AD, while Bagamoyo (2,6k in 1800AD to 18,5k in 1885AD), Kilwa Kivinje (4,8k in 1820AD to 15k in 1865AD), Pangani Magharibi (9,5k in 1878AD), Chake Chake (6,2k in 1885AD), Saadani (5,4k) and Dar es Salaam (founded 1862AD, 4,8k in 1875AD) expanded as mainland caravan termini and coastal plantation ports [@Lyne1905ZanzibarContemporary; @Baumanova2022WhatsName]. The Omani-Zanzibar coastal sub-region rose fastest of all nine zones, climbing from 625,6k in 1800AD to 1,01M by 1880AD. Meanwhile, older northern rivals such as Pate (14,2k in 1780AD to 2,1k in 1885AD) and Muqdisho (12,6k in 1650AD to 5,4k in 1848AD) contracted sharply under Omani blockades and shifting trade winds [@Allen1981SwahiliCulture; @Kassim1995IslamAnd_2].

Along the central caravan trunk road from Bagamoyo to Lake Tanganyika, Nyamwezi porters and merchant chiefs built a commercial empire across the Unyamwezi plateau [@Burton1904FirstFootsteps; @Bryndina2023TheMost]. Tabora (Kazeh) grew from 6,5k at its 1845AD foundation to 20k in 1871AD, Mirambo's fortified capital at Urambo reached 16,2k by 1884AD, and Ujiji on Lake Tanganyika expanded from 5,8k in 1858AD to 14k in 1879AD as Arab-Swahili traders including Tippu Tip pushed into Manyema [@Bryndina2023TheMost; @Bourguignat1879DescriptionDiverses]. Further north, Buganda's *Kibuga* grew to 38,5k by 1875AD under Mutesa I, while Bunyoro capitals at Hoima (9,6k in 1885AD) and Masindi (6,8k in 1872AD) and Rwanda's court at Busasama (8,4k in 1885AD) anchored dense interlacustrine populations that pushed Rwanda-Burundi to 2,88M (12,32 persons/km²) and Buganda-Bunyoro to 1,87M (8,68 persons/km²) by 1880AD [@Kafuuma2019HeritageSignificance; @Lira2024Plot24Urban].

Farther south, nineteenth-century population change followed a more turbulent trajectory. Across the Maasai steppe and Kenya highlands (2,66M in 1880AD), Iloikop-Maasai civil wars emptied older Rift irrigation hubs such as Engaruka (7,8k in 1650AD down to 950 in 1780AD) while caravan towns such as Mumias (5,4k in 1883AD), Taveta (4k) and Old Moshi (6,8k in 1885AD) grew along the Kilimanjaro-Nyanza trade corridor [@NMK2021KenyaSites]. In Malawi and northern Mozambique, Yao chieftaincies and Jumbe's lakeside sultanate at Nkhotakota (3,8k in 1855AD to 11,2k in 1885AD) fed captives to Kilwa Kivinje and Angoche (9,8k in 1845AD), yet agricultural stability in the Shire and plateau valleys raised Maravi-Yao to 2,63M in 1880AD [@Newitt1995Mozambique]. Conversely, the Bemba-Lozi-Kazembe plateau experienced mid-century contraction from 878,6k in 1820AD to 770,4k in 1860AD before recovering to 797,8k in 1880AD as Bemba raids and Kololo-Lozi conflicts stabilised around Kasama (7,4k) and Chipata (6,8k) [@Brandl1975EarlyChristianity]. In southern Mozambique, Soshangane's Nguni Gaza Empire centred at Vila de Mandlakazi (14,5k in 1885AD) and the Cruz family's fortified *aringa* at Massangano-Zambezi (11,24k in 1875AD) eclipsed weak Portuguese garrisons at Sena (3,1k) and Lourenço Marques (3,4k) on the eve of the Scramble for Africa [@Pugliesi1977ResenhaLivro; @Newitt1995Mozambique].

## Urban Centres and Sub-Regional Density Contrasts

Table \ref{tab:top-centres} lists the twelve largest individually assessed settlements in the chapter ledger alongside their observed chronological spans and peak headcounts. Across the entire 385-year window, attested urban population rose steadily from under 90k in 1500AD to roughly 460k by 1885AD as active documented settlements grew from 1.156 in 1500AD to 1.210 in 1850AD and 205 in 1880AD (Figure \ref{fig:trends}). Only Bigo bya Mugenyi (1550AD earthwork peak) and Muqdisho (1516AD) reached their maxima in the sixteenth century; Pate (1700AD) peaked during the post-Portuguese northern Swahili revival, whereas nine of the top twelve centres peaked between 1845AD and 1885AD under the combined pull of Zanzibar cloves, ivory caravans and late precolonial state formation [@Lyne1905ZanzibarContemporary; @Bryndina2023TheMost; @Spear1900SwahiliHistory].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bigo bya Mugenyi</strong></td><td class="crd-td">Uganda</td><td class="crd-td">1500AD-1550AD</td><td class="crd-td">100k</td><td class="crd-td">1550AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1650AD-1885AD</td><td class="crd-td">65k</td><td class="crd-td">1870AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Kibuga</strong></td><td class="crd-td">Uganda</td><td class="crd-td">1700AD-1885AD</td><td class="crd-td">38,5k</td><td class="crd-td">1875AD</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">Kenya</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">30k</td><td class="crd-td">1850AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">Somalia</td><td class="crd-td">1500AD-1848AD</td><td class="crd-td">21,2k</td><td class="crd-td">1516AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Tabora</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1845AD-1885AD</td><td class="crd-td">20k</td><td class="crd-td">1871AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Bagamoyo</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1800AD-1885AD</td><td class="crd-td">18,5k</td><td class="crd-td">1885AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">Kenya</td><td class="crd-td">1500AD-1885AD</td><td class="crd-td">16,8k</td><td class="crd-td">1700AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Urambo</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1871AD-1884AD</td><td class="crd-td">16,2k</td><td class="crd-td">1882AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Ujiji</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1858AD-1885AD</td><td class="crd-td">15,8k</td><td class="crd-td">1885AD</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">Kenya</td><td class="crd-td">1500AD-1875AD</td><td class="crd-td">15,2k</td><td class="crd-td">1813AD</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kivinje</strong></td><td class="crd-td">Tanzania</td><td class="crd-td">1820AD-1885AD</td><td class="crd-td">15k</td><td class="crd-td">1865AD</td><td class="crd-td">6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twelve largest individually assessed settlements in East Africa and Mozambique between 1500AD and 1885AD.</figcaption>
</figure>

End-epoch population density in 1880AD reveals an eightfold gradient across the nine sub-regions (Figure \ref{fig:rank-size}). High-rainfall volcanic and lacustrine highlands in Rwanda and Burundi (12,32 persons/km²) and Buganda-Bunyoro (8,68 persons/km²) carried far higher rural densities than the semi-arid miombo plateaus of Bemba-Lozi (1,55 persons/km²) and Hehe-Rufiji (2,18 persons/km²), while Maravi-Yao (5,52), the Omani-Zanzibar littoral (4,97) and the Maasai-Kenya highland zone (4,71) held intermediate values.

# Limitations

Three structural constraints govern these demographic reconstructions. First, documentary density tilts heavily toward the coast and nineteenth-century caravan corridors. While Mombasa, Ilha de Moçambique, Sena, Tete and Zanzibar possess multi-century records spanning Portuguese *tombo* accounts, Omani annals and consular reports [@Pradines2016PortugueseFortresses; @Parliament1898CorrespondenceRespecting; @Newitt1995Mozambique], interior highlands in central Tanzania, Rwanda, Burundi and northern Zambia have very few pre-1850AD written headcounts, requiring spatial kriging to bridge between archaeological registers and late nineteenth-century eyewitness counts [@NMK2021KenyaSites; @Alders2023OpenAccess].

Second, eyewitness urban estimates of large African capitals carry wide error margins - commonly 20% to 35% - when observers estimated dispersed garden-and-compound settlements rather than compact walled quarters. Bigo bya Mugenyi's 100k peak around 1550AD represents an outer-ditch synthesis figure across its 320 ha earthwork perimeter that remains debated relative to its 24 ha royal enclosure, while nineteenth-century counts for Buganda's shifting *Kibuga* (between Banda, Rubaga and Mengo) and Mirambo's Urambo depend on missionary and expeditionary estimates across composite compounds [@Kafuuma2019HeritageSignificance; @Bryndina2023TheMost]. Single-date records, accounting for 13 of the 1.783 entries (such as Kaole, Manda, Tsindi, Kalenga and Masasi), likewise offer snapshots rather than full secular trajectories.

Third, mortality shocks from the nineteenth-century Indian Ocean slave trade and epidemic waves are imperfectly resolved at ten-year intervals. Although aggregate drops appear clearly in the 1710AD, 1790AD, 1830AD and 1860AD regional benchmarks (falling from 15,31M in 1850AD to 14,68M in 1860AD during peak coastal cholera outbreaks and interior raiding), sub-annual famine mortality along the Ruvuma, Shire and Pangani corridors cannot be recovered precisely from decadal rasters [@Parliament1898CorrespondenceRespecting; @Bourguignat1879DescriptionDiverses].

# Conclusion

Between 1500AD and 1880AD, East Africa and Mozambique experienced a nearly threefold population increase from 5,72M to 15,5M inhabitants, accompanied by a profound spatial reorganisation of urban and political power. Sixteenth-century Portuguese naval dominance broke the mediaeval monopoly of Kilwa Kisiwani and Sofala, prompting a northern Swahili revival centred on Pate and Lamu before Omani-Zanzibar rule welded coastal ports, clove islands and interior Nyamwezi and Yao caravan highways into a single commercial system by the mid-nineteenth century. Inland, highland agriculture sustained high rural densities in Rwanda, Burundi and Buganda even as *prazo* wars, Nguni migrations and caravan slaving reshaped settlement patterns across Mozambique, Malawi and Zambia. By uniting 1.783 individually assessed settlements with non-stationary kriging and pycnophylactic administrative disaggregation, NICETHI supplies an integrated demographic bridge from early modern polities into the twentieth-century colonial census era.

# Appendix

## Sub-Regional Density and Share Series

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all nine historical sub-regions from 1500AD to 1880AD, highlighting the persistent five- to eightfold density gradient between the Great Lakes kingdoms and the southern savanna plateaus. Table \ref{tab:shares-appendix} tracks each sub-region's percentage share of the regional population across the same six benchmarks, showing the coastal share rising from 4,9% in 1500AD to 6,9% in 1850AD and 6,5% in 1880AD alongside the dramatic expansion of Maravi-Yao (11% to 17%) and the relative stabilisation of Buganda-Bunyoro (17,8% to 12,1%).

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast</strong></td><td class="crd-td">1,38</td><td class="crd-td">2,69</td><td class="crd-td">2,99</td><td class="crd-td">3,07</td><td class="crd-td">5,15</td><td class="crd-td">4,97</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift</strong></td><td class="crd-td">1,98</td><td class="crd-td">3,67</td><td class="crd-td">3,63</td><td class="crd-td">3,79</td><td class="crd-td">4,21</td><td class="crd-td">4,71</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole</strong></td><td class="crd-td">4,73</td><td class="crd-td">8,41</td><td class="crd-td">6,99</td><td class="crd-td">6,8</td><td class="crd-td">8,06</td><td class="crd-td">8,68</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi</strong></td><td class="crd-td">4,26</td><td class="crd-td">7,47</td><td class="crd-td">7,51</td><td class="crd-td">7,92</td><td class="crd-td">11,47</td><td class="crd-td">12,33</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor</strong></td><td class="crd-td">1,16</td><td class="crd-td">2,25</td><td class="crd-td">2,48</td><td class="crd-td">2,8</td><td class="crd-td">3,25</td><td class="crd-td">3,02</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika</strong></td><td class="crd-td">0,73</td><td class="crd-td">1,46</td><td class="crd-td">1,75</td><td class="crd-td">2</td><td class="crd-td">2,34</td><td class="crd-td">2,18</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique</strong></td><td class="crd-td">1,32</td><td class="crd-td">2,62</td><td class="crd-td">3,9</td><td class="crd-td">4,62</td><td class="crd-td">5,83</td><td class="crd-td">5,52</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe</strong></td><td class="crd-td">0,66</td><td class="crd-td">1,36</td><td class="crd-td">1,56</td><td class="crd-td">1,67</td><td class="crd-td">1,58</td><td class="crd-td">1,55</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza</strong></td><td class="crd-td">1,4</td><td class="crd-td">2,55</td><td class="crd-td">3,26</td><td class="crd-td">3,66</td><td class="crd-td">3,95</td><td class="crd-td">3,76</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">1,68</td><td class="crd-td">3,14</td><td class="crd-td">3,42</td><td class="crd-td">3,71</td><td class="crd-td">4,5</td><td class="crd-td">4,56</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Mean population density (persons per km²) across nine historical sub-regions from 1500AD to 1880AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1500AD (%)</th><th class="crd-th">1700AD (%)</th><th class="crd-th">1770AD (%)</th><th class="crd-th">1800AD (%)</th><th class="crd-th">1850AD (%)</th><th class="crd-th">1880AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast</strong></td><td class="crd-td">4,9</td><td class="crd-td">5,1</td><td class="crd-td">5,2</td><td class="crd-td">5</td><td class="crd-td">6,9</td><td class="crd-td">6,5</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift</strong></td><td class="crd-td">19,5</td><td class="crd-td">19,4</td><td class="crd-td">17,6</td><td class="crd-td">17</td><td class="crd-td">15,5</td><td class="crd-td">17,2</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole</strong></td><td class="crd-td">17,8</td><td class="crd-td">17</td><td class="crd-td">12,9</td><td class="crd-td">11,6</td><td class="crd-td">11,3</td><td class="crd-td">12,1</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi</strong></td><td class="crd-td">17,4</td><td class="crd-td">16,3</td><td class="crd-td">15</td><td class="crd-td">14,7</td><td class="crd-td">17,5</td><td class="crd-td">18,6</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor</strong></td><td class="crd-td">7,6</td><td class="crd-td">7,9</td><td class="crd-td">8</td><td class="crd-td">8,3</td><td class="crd-td">7,9</td><td class="crd-td">7,3</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika</strong></td><td class="crd-td">4,5</td><td class="crd-td">4,8</td><td class="crd-td">5,2</td><td class="crd-td">5,6</td><td class="crd-td">5,3</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique</strong></td><td class="crd-td">11</td><td class="crd-td">11,7</td><td class="crd-td">16</td><td class="crd-td">17,5</td><td class="crd-td">18,1</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe</strong></td><td class="crd-td">5,9</td><td class="crd-td">6,6</td><td class="crd-td">6,9</td><td class="crd-td">6,8</td><td class="crd-td">5,3</td><td class="crd-td">5,1</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza</strong></td><td class="crd-td">11,4</td><td class="crd-td">11,2</td><td class="crd-td">13,1</td><td class="crd-td">13,6</td><td class="crd-td">12,1</td><td class="crd-td">11,3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Percentage share of total regional population by historical sub-region across six benchmark years from 1500AD to 1880AD.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution Summary

Table \ref{tab:subregion-sites-appendix} summarises the interior spatial match counts, full gazetteer counts, observation totals, combined peak-population sums and leading urban centres across all nine historical sub-regions, linking the regional analysis directly to the companion settlement gazetteer [@Spear1900SwahiliHistory; @WynneJones2018SwahiliWorld].

<figure class="crd-table-figure" id="tab:subregion-sites-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Interior</th><th class="crd-th">Full Ledger</th><th class="crd-th">Obs.</th><th class="crd-th">Peak Sum</th><th class="crd-th">Leading Centres</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast</strong></td><td class="crd-td">285</td><td class="crd-td">29</td><td class="crd-td">892</td><td class="crd-td">555,3k</td><td class="crd-td">Zanzibar, Mombasa, Bagamoyo</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift</strong></td><td class="crd-td">275</td><td class="crd-td">12</td><td class="crd-td">854</td><td class="crd-td">257,4k</td><td class="crd-td">Barawa E Al Bambar, Marka, Mumias</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole</strong></td><td class="crd-td">222</td><td class="crd-td">7</td><td class="crd-td">741</td><td class="crd-td">372,8k</td><td class="crd-td">Bigo bya Mugenyi, Kibuga, Hoima</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi</strong></td><td class="crd-td">299</td><td class="crd-td">6</td><td class="crd-td">1.011</td><td class="crd-td">386,3k</td><td class="crd-td">Ujiji, Busasama, Bweranyange</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor</strong></td><td class="crd-td">110</td><td class="crd-td">4</td><td class="crd-td">344</td><td class="crd-td">142,2k</td><td class="crd-td">Tabora, Urambo, Engaruka</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika</strong></td><td class="crd-td">116</td><td class="crd-td">8</td><td class="crd-td">354</td><td class="crd-td">133,4k</td><td class="crd-td">Kilwa Kisiwani, Kalenga, Lindi</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique</strong></td><td class="crd-td">127</td><td class="crd-td">10</td><td class="crd-td">365</td><td class="crd-td">187,2k</td><td class="crd-td">Nkhotakota, Moçambique, Angoche</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe</strong></td><td class="crd-td">98</td><td class="crd-td">5</td><td class="crd-td">265</td><td class="crd-td">147,7k</td><td class="crd-td">Mwansabombwe, Kasama, Chipata</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza</strong></td><td class="crd-td">174</td><td class="crd-td">16</td><td class="crd-td">524</td><td class="crd-td">317,3k</td><td class="crd-td">Vila de Mandlakazi, Massangano-Zambezi, Sofala</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Sub-regional settlement match counts, observation totals, interior peak sums and leading urban centres.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

In Table \ref{tab:subregions}, 91 of the 1.783 individually assessed settlements fall strictly inside the 5-arcminute regional mask pixels, whereas 6 border-margin or northern Banadir-frontier sites (Muqdisho, Afgoye, Baar Dheere and Chencha on the northern Banadir-Ethiopian edge, and Great Zimbabwe and Thulamela along the southern Limpopo-Zimbabwe plateau margin) lie just outside the raster interior perimeter and are reconciled to their adjacent cultural sub-regions in the companion settlement gazetteer so all 1.783 sites are catalogued.
